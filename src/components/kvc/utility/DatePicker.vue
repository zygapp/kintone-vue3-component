<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import { KvcDatePickerProps } from '@/types/component-types'
import UtilSelectList from './SelectList.vue'
import { Icon } from '@iconify/vue'
import { onClickOutside } from '@vueuse/core'

dayjs.extend(weekday)
dayjs.extend(isSameOrBefore)

const props = defineProps<KvcDatePickerProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'close', value: boolean): void
}>()

const yearRef = ref<HTMLElement | null>(null)
const monthRef = ref<HTMLElement | null>(null)
const yearListRef = ref<HTMLElement | null>(null)
const monthListRef = ref<HTMLElement | null>(null)

const currentDate = ref<string | undefined>(
  props.modelValue?.length ? props.modelValue : undefined
)

const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土']

const visibles = reactive({
  year: false,
  month: false
})

const closeVisible = (key: 'year' | 'month') => {
  visibles[key] = false
}

onClickOutside(yearRef, () => closeVisible('year'))
onClickOutside(monthRef, () => closeVisible('month'))

const months = computed(() =>
  Array.from({ length: 12 }, (_, i) => ({
    label: `${i + 1}月`,
    value: i + 1
  }))
)

const years = computed(() => {
  const currentYear = dayjs(currentDate.value).year()
  const startYear = currentYear - 100
  const endYear = currentYear + 100
  const yearRange: { label: string; value: number }[] = []
  for (let y = startYear; y <= endYear; y++) {
    yearRange.push({ label: `${y}年`, value: y })
  }
  return yearRange
})

const changeYear = (value: number | string) => {
  value = Number(value)
  currentDate.value = dayjs(currentDate.value || undefined).year(value).format('YYYY-MM-DD')
  setTimeout(() => (visibles.year = false), 10)
}

const changeMonth = (value: number | string) => {
  value = Number(value)
  currentDate.value = dayjs(currentDate.value || undefined).month(value - 1).format('YYYY-MM-DD')
  setTimeout(() => (visibles.month = false), 10)
}

const currentYear = computed(() => dayjs(currentDate.value).year())
const currentMonth = computed(() => dayjs(currentDate.value).month() + 1)

const calendar = computed(() => {
  const startOfMonth = dayjs(currentDate.value).startOf('month')
  const endOfMonth = dayjs(currentDate.value).endOf('month')
  const startOfCalendar = startOfMonth.weekday(0)
  const endOfCalendar = endOfMonth.weekday(6)

  const result: any[][] = []
  let currentDay = startOfCalendar

  while (currentDay.isSameOrBefore(endOfCalendar)) {
    const week = []
    for (let i = 0; i < 7; i++) {
      week.push({
        date: currentDay.date(),
        fullDate: currentDay.format('YYYY-MM-DD'),
        isCurrentMonth: currentDay.month() === dayjs(currentDate.value).month(),
        isCurrentDate: currentDay.isSame(dayjs(props.modelValue || undefined), 'date'),
        isHoliday: currentDay.day() === 0 || currentDay.day() === 6,
        isToday: currentDay.isSame(dayjs(), 'day')
      })
      currentDay = currentDay.add(1, 'day')
    }
    result.push(week)
  }

  // 6週分に満たない場合、次月で補完
  let nextMonthDay = endOfCalendar.add(1, 'day')
  while (result.length < 6) {
    const week = []
    for (let i = 0; i < 7; i++) {
      week.push({
        date: nextMonthDay.date(),
        fullDate: nextMonthDay.format('YYYY-MM-DD'),
        isCurrentMonth: nextMonthDay.month() === dayjs(currentDate.value).month(),
        isCurrentDate: nextMonthDay.isSame(dayjs(props.modelValue || undefined), 'date'),
        isHoliday: nextMonthDay.day() === 0 || nextMonthDay.day() === 6,
        isToday: nextMonthDay.isSame(dayjs(), 'day')
      })
      nextMonthDay = nextMonthDay.add(1, 'day')
    }
    result.push(week)
  }

  return result
})

const prevMonth = () => {
  currentDate.value = dayjs(currentDate.value).subtract(1, 'month').format('YYYY-MM-DD')
}

const nextMonth = () => {
  currentDate.value = dayjs(currentDate.value).add(1, 'month').format('YYYY-MM-DD')
}

const returnValue = (value?: string) => {
  emits('update:modelValue', value || '')
  emits('close', true)
}
</script>

<template>
  <div class="kvc-datepicker-popup">
    <div class="kvc-datepicker-controls">
      <button class="kvc-datepicker-control-prev" @click="prevMonth">
        <Icon icon="mdi-light:chevron-left" height="32" />
      </button>

      <div class="kvc-datepicker-control-year-month">
        <div class="kvc-datepicker-control-year">
          <button
            type="button"
            ref="yearRef"
            class="kvc-datepicker-control-selector"
            @click="visibles.year = !visibles.year"
          >
            <span class="kvc-datepicker-control-selector-text">{{ currentYear }}年</span>
            <Icon icon="mdi-light:chevron-down" width="24" />
            <UtilSelectList
              v-if="visibles.year"
              ref="yearListRef"
              class="kvc-datepicker-controll-selector-list"
              :items="years"
              :model-value="currentYear"
              :max-height="300"
              @change="changeYear"
            />
          </button>
        </div>

        <div class="kvc-datepicker-control-month">
          <button
            type="button"
            ref="monthRef"
            class="kvc-datepicker-control-selector"
            @click="visibles.month = !visibles.month"
          >
            <span class="kvc-datepicker-control-selector-text">{{ currentMonth }}月</span>
            <Icon icon="mdi-light:chevron-down" width="24" />
            <UtilSelectList
              v-if="visibles.month"
              ref="monthListRef"
              class="kvc-datepicker-controll-selector-list"
              :items="months"
              :model-value="currentMonth"
              @change="changeMonth"
            />
          </button>
        </div>
      </div>

      <button class="kvc-datepicker-control-next" @click="nextMonth">
        <Icon icon="mdi-light:chevron-right" height="32" />
      </button>
    </div>

    <table class="kvc-datepicker-body">
      <thead>
        <tr>
          <th
            v-for="day in daysOfWeek"
            :key="day"
            class="kvc-datepicker-day"
            :class="{
              'kvc-datepicker-day-saturday': day === '土',
              'kvc-datepicker-day-sunday': day === '日'
            }"
          >
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, index) in calendar" :key="index">
          <td v-for="day in week" :key="day.date">
            <button
              type="button"
              class="kvc-datepicker-date"
              :class="{
                'kvc-datepicker-date-notcurrent-month': !day.isCurrentMonth,
                'kvc-datepicker-date-today': day.isToday,
                'kvc-datepicker-date-current': day.isCurrentDate
              }"
              @click="returnValue(day.fullDate)"
            >
              {{ day.date }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="kvc-datepicker-bottom">
      <button
        type="button"
        class="kvc-datepicker-bottom-today"
        @click="returnValue(dayjs().format('YYYY-MM-DD'))"
      >
        今日
      </button>
      <button type="button" class="kvc-datepicker-bottom-clear" @click="returnValue()">
        選択を解除
      </button>
    </div>
  </div>
</template>
