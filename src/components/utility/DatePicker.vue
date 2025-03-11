<script setup>
import { computed, reactive, ref } from 'vue'
import UtilSelectList from '../utility/SelectList.vue'
import { Icon } from "@iconify/vue";
import { onClickOutside } from '@vueuse/core'
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(weekday);
dayjs.extend(isSameOrBefore);

const emits = defineEmits(['update:modelValue', 'close'])
const props = defineProps({
  modelValue: { type: String, default: undefined },
})

const yearRef = ref()
const monthRef = ref()
const yearListRef = ref()
const monthListRef = ref()

const currentDate = ref(props.modelValue?.length ? props.modelValue : undefined);
const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"]
const visibles = reactive({
  year: false,
  month: false,
})


const closeVisible = (key) => visibles[key] = false
onClickOutside(yearRef, () => closeVisible('year'))
onClickOutside(monthRef, () => closeVisible('month'))

const months = computed(() => Array.from({ length: 12 }, (_, i) => ({
  label: 1 + i + '月',
  value: 1 + i,
})))
const years = computed(() => {
  const currentYear = dayjs(currentDate.value).year(); // 現在の年を取得
  const startYear = currentYear - 100; // 100年前
  const endYear = currentYear + 100; // 100年後

  const yearRange = [];
  for (let year = startYear; year <= endYear; year++) {
    yearRange.push({
      label: year+'年',
      value: year,
    });
  }
  return yearRange
})


const changeYear = (value) => {
  currentDate.value = dayjs(dayjs(currentDate.value || undefined)).year(value).format('YYYY-MM-DD')
  setTimeout(() => visibles.year = false, 10);
}

const changeMonth = (value) => {
  currentDate.value = dayjs(dayjs(currentDate.value || undefined)).month(value - 1).format('YYYY-MM-DD')
  setTimeout(() => visibles.month = false, 10);
}
const currentYear = computed(() => dayjs(currentDate.value).year())
const currentMonth = computed(() => dayjs(currentDate.value).month() + 1)

const calendar = computed(() => {
  const startOfMonth = dayjs(currentDate.value).startOf('month');
  const endOfMonth = dayjs(currentDate.value).endOf('month');

  // 月の開始週の最初の日（日曜日）を取得
  const startOfCalendar = startOfMonth.weekday(0);
  // 月の終了週の最後の日（土曜日）を取得
  const endOfCalendar = endOfMonth.weekday(6);

  const calendar = [];

  let currentDay = startOfCalendar;

  while (currentDay.isSameOrBefore(endOfCalendar)) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push({
        date: currentDay.date(),
        fullDate: currentDay.format('YYYY-MM-DD'),
        isCurrentMonth: currentDay.month() === dayjs(currentDate.value).month(),
        isCurrentDate: currentDay.isSame(dayjs(props.modelValue || undefined), 'date'),
        isHoliday: currentDay.day() === 0 || currentDay.day() === 6,
        isToday: currentDay.isSame(dayjs(), 'day'),
      });
      currentDay = currentDay.add(1, 'day');
    }
    calendar.push(week);
  }


  // 次月の日付を補完して6行に調整
  let nextMonthDay = endOfCalendar.add(1, 'day');
  while (calendar.length < 6) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push({
        date: nextMonthDay.date(),
        fullDate: nextMonthDay.format('YYYY-MM-DD'),
        isCurrentMonth: nextMonthDay.month() === dayjs(currentDate.value).month(),
        isCurrentDate: nextMonthDay.isSame(dayjs(props.modelValue || undefined), 'date'),
        isHoliday: nextMonthDay.day() === 0 || nextMonthDay.day() === 6,
        isToday: nextMonthDay.isSame(dayjs(), 'day'),
      });
      nextMonthDay = nextMonthDay.add(1, 'day'); // 日付を正しく増加
    }
    calendar.push(week);
  }


  return calendar;
})

const prevMonth = () => currentDate.value = dayjs(currentDate.value).subtract(1, 'month').format('YYYY-MM-DD');
const nextMonth = () => currentDate.value = dayjs(currentDate.value).add(1, 'month').format('YYYY-MM-DD');

const returnValue = (value) => {
  emits('update:modelValue', value || '')
  emits('close', true)
}
</script>

<template>
  <div class="kvc-datepicker-popup">
    <div class="kvc-datepicker-controls">
      <button
        class="kvc-datepicker-control-prev"
        @click="prevMonth"
      >
        <icon
          icon="mdi-light:chevron-left"
          height="32"
        />
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
            <icon icon="mdi-light:chevron-down" width="24" />

            <UtilSelectList
              v-if="visibles.year"
              ref="yearListRef"
              class="kvc-datepicker-controll-selector-list"
              :items="years"
              :model-value="dayjs(currentDate).year()"
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
            <icon icon="mdi-light:chevron-down" width="24" />

            <UtilSelectList
              v-if="visibles.month"
              ref="monthListRef"
              class="kvc-datepicker-controll-selector-list"
              :items="months"
              :model-value="dayjs(currentDate).month() + 1"
              @change="changeMonth"
            />
          </button>

        </div>
      </div>
      <button
        class="kvc-datepicker-control-next"
        @click="nextMonth"
      >
        <icon
          icon="mdi-light:chevron-right"
          height="32"
        />
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
              'kvc-datepicker-day-saturday': day == '土',
              'kvc-datepicker-day-sunday': day == '日',
            }"
          >{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, index) in calendar" :key="index">
          <td
            v-for="day in week"
            :key="day.date"
          >
            <button
              type="button"
              class="kvc-datepicker-date"
              :class="{
                'kvc-datepicker-date-notcurrent-month': !day.isCurrentMonth,
                'kvc-datepicker-date-today': day.isToday,
                'kvc-datepicker-date-current': day.isCurrentDate,
              }"
              @click="returnValue(day.fullDate)"
            >{{ day.date }}</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="kvc-datepicker-bottom">
      <button
        type="button"
        class="kvc-datepicker-bottom-today"
        @click="returnValue(dayjs().format('YYYY-MM-DD'))"
      >今日</button>
      <button
        type="button"
        class="kvc-datepicker-bottom-clear"
        @click="returnValue()"
      >選択を解除</button>
    </div>
  </div>
</template>
