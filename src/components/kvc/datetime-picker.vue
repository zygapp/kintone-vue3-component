<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import objectSupport from 'dayjs/plugin/objectSupport'
import { KvcDateTimePickerProps } from '@/types/component-types'

import KvcDatePicker from './date-picker.vue'
import KvcTimePicker from './time-picker.vue'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(objectSupport)
dayjs.tz.setDefault('Asia/Tokyo')

const props = defineProps<KvcDateTimePickerProps>()

const emits = defineEmits<{
  (e: 'update:modelValue', value: string | undefined): void
}>()

const isValid = computed(() => props.modelValue && dayjs(props.modelValue).isValid())
const $date = computed(() => (isValid.value ? dayjs(props.modelValue) : undefined))

const handleSetDate = (value: string) => {
  if (value && dayjs(value).isValid()) {
    const [year, month, date] = value.split('-').map(Number)
    const newDate = $date.value
      ? dayjs($date.value).year(year).month(month - 1).date(date)
      : dayjs({ year, month: month - 1, date })
    emits('update:modelValue', newDate.toISOString())
  } else {
    emits('update:modelValue', undefined)
  }
}

const handleSetTime = (value: string) => {
  if (value) {
    const [hour, minute] = value.split(':').map(Number)
    if (!isNaN(hour) && !isNaN(minute)) {
      const newDate = $date.value
        ? dayjs($date.value).hour(hour).minute(minute)
        : dayjs({ hour, minute })
      emits('update:modelValue', newDate.toISOString())
    } else {
      emits('update:modelValue', undefined)
    }
  } else {
    emits('update:modelValue', undefined)
  }
}
</script>

<template>
  <div class="kvc-datetime-picker">
    <p
      v-if="readOnly"
      class="kvc-field-value"
      :class="{ 'kvc-field-value-nonstyled': nonstyled }"
    >
      {{ modelValue && dayjs(modelValue).isValid() ? dayjs(modelValue).format('YYYY-MM-DD HH:mm') : ' ' }}
    </p>

    <template v-else>
      <KvcDatePicker
        :model-value="$date ? $date.format('YYYY-MM-DD') : undefined"
        :disabled="disabled"
        @change="handleSetDate"
      />
      <KvcTimePicker
        :model-value="$date ? $date.format('HH:mm') : undefined"
        :disabled="disabled"
        @change="handleSetTime"
      />
    </template>
  </div>
</template>
