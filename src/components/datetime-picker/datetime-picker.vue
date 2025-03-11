<script setup>
import { computed, watch, reactive, ref } from 'vue'
import KvcDatePicker from '../date-picker'
import KvcTimePicker from '../time-picker'
import dayjs from 'dayjs'
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import objectSupport from 'dayjs/plugin/objectSupport';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(objectSupport);
dayjs.tz.setDefault("Asia/Tokyo");

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: { type: String, default: undefined },
  readOnly: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  nonstyled: { type: Boolean, default: false },
})

const isValid = computed(() => props.modelValue && dayjs(props.modelValue).isValid())
const $date = computed(() => isValid.value ? dayjs(props.modelValue) : undefined)

const handleSetDate = (value) => {
  if (value && dayjs(value).isValid()) {
    const [year, month, date] = value.split('-')
    const newDate = $date.value ? dayjs($date.value).year(year).month(month - 1).date(date) : dayjs({year, month: month - 1, date})
    emits('update:modelValue', newDate.toISOString())
  } else {
    emits('update:modelValue', undefined)
  }
}

const handleSetTime = (value) => {
  if (value) {
    const [hour, minute] = value.split(':')
    if (hour && minute) {
      const newDate = $date.value ? dayjs($date.value).hour(Number(hour)).minute(Number(minute)) : dayjs({hour, minute})
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
      :class="{'kvc-field-value-nonstyled': nonstyled}"
    >{{ modelValue && dayjs(modelValue).isValid() ? dayjs(modelValue).format('YYYY-MM-DD HH:mm') : ' ' }}</p>

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