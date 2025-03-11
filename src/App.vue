<script setup>
import { ref } from 'vue'

const input = ref('abc')
const date = ref()
const time = ref('14:00')
const datetime = ref()
const checkbox = ref(['label-b'])
const radio = ref('label-a')
const dropdown = ref('label-a')
const files = ref([])
const items = ref([
  { label: 'LABEL-A', value: 'label-a', disabled: false },
  { label: 'LABEL-B', value: 'label-b', disabled: true },
  'label-c'
])
const columns = ref([
  { label: 'columnA', field: 'columnA', width: 200 },
  { label: 'columnB', field: 'columnB' },
  { label: 'columnC', field: 'columnC' }
])
const rows = ref([
  { 'columnA': 'AAA1', 'columnB': 'BBB1', 'columnC': 'CCC1' },
  { 'columnA': 'AAA2', 'columnB': 'BBB2', 'columnC': 'CCC2' },
  { 'columnA': 'AAA3', 'columnB': 'BBB3', 'columnC': 'CCC3' },
  { 'columnA': 'AAA4', 'columnB': 'BBB4', 'columnC': 'CCC4' },
  { 'columnA': 'AAA5', 'columnB': 'BBB5', 'columnC': 'CCC5' },
])

const onClickButton = () => {
  alert('clicked')
}
</script>

<template>
  <h1>test</h1>
  <KvcWrap>
    <KvcRow>
      <KvcField required>
        <template #label>Buttons</template>
        <KvcButton @click="onClickButton">aaa</KvcButton>
        <KvcButton color="normal">aaa</KvcButton>
        <KvcButton color="success">aaa</KvcButton>
        <KvcButton color="save">aaa</KvcButton>
        <KvcButton color="error">aaa</KvcButton>
        <KvcButton color="error" disabled>aaa</KvcButton>
      </KvcField>
    </KvcRow>

    <KvcRow>
      <KvcField>
        <template #label>Small Buttons</template>
        <KvcButton sm>aaa</KvcButton>
        <KvcButton sm color="normal">aaa</KvcButton>
        <KvcButton sm color="success">aaa</KvcButton>
        <KvcButton sm color="save">aaa</KvcButton>
        <KvcButton sm color="error">aaa</KvcButton>
        <KvcButton sm disabled>aaa</KvcButton>
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>text</template>
        <KvcTextInput  v-model="input" />
      </KvcField>
      <KvcField>
        <template #label>text</template>
        <KvcTextInput disabled v-model="input" />
      </KvcField>
      <KvcField>
        <template #label>text(label)</template>
        <KvcTextInput read-only v-model="input" />
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>textarea</template>
        <KvcTextarea v-model="input" />
      </KvcField>
      <KvcField>
        <template #label>textarea</template>
        <KvcTextarea disabled v-model="input" />
      </KvcField>
      <KvcField>
        <template #label>textarea(label)</template>
        <KvcTextarea read-only v-model="input" />
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>checkbox</template>
        <KvcCheckbox v-model="checkbox" :items="items" />
      </KvcField>
      <KvcField>
        <template #label>checkbox</template>
        <KvcCheckbox column v-model="checkbox" :items="items" />
      </KvcField>
      <KvcField>
        <template #label>checkbox</template>
        <KvcCheckbox read-only v-model="checkbox" :items="items" />
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>radio button</template>
        <KvcRadio v-model="radio" :items="items" />
      </KvcField>
      <KvcField>
        <template #label>radio button</template>
        <KvcRadio column v-model="radio" :items="items" />
      </KvcField>
      <KvcField>
        <template #label>radio button</template>
        <KvcRadio read-only v-model="radio" :items="items" />
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>Dropdown</template>
        <KvcDropdown v-model="dropdown" :items="items" />
      </KvcField>
      <KvcField>
        <template #label>Dropdown</template>
        <KvcDropdown disabled v-model="dropdown" :items="items" />
      </KvcField>
      <KvcField>
        <template #label>Dropdown</template>
        <KvcDropdown read-only v-model="dropdown" :items="items" />
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>date picker</template>
        <KvcDatePicker v-model="date" />
      </KvcField>
      <KvcField>
        <template #label>date picker</template>
        <KvcDatePicker disabled v-model="date" />
      </KvcField>
      <KvcField>
        <template #label>date picker</template>
        <KvcDatePicker read-only v-model="date" />
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>time picker</template>
        <KvcTimePicker v-model="time" />
      </KvcField>
      <KvcField>
        <template #label>time picker</template>
        <KvcTimePicker disabled v-model="time" />
      </KvcField>
      <KvcField>
        <template #label>time picker</template>
        <KvcTimePicker read-only v-model="time" />
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>datetime picker</template>
        <KvcDateTimePicker v-model="datetime" />
      </KvcField>
      <KvcField>
        <template #label>datetime picker</template>
        <KvcDateTimePicker disabled v-model="datetime" />
      </KvcField>
      <KvcField>
        <template #label>datetime picker</template>
        <KvcDateTimePicker read-only v-model="datetime" />
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>file single select</template>
        <KvcFileSelect v-model="files" :auto-upload="false" />
      </KvcField>
      <KvcField>
        <template #label>file multi select</template>
        <KvcFileSelect v-model="files" :auto-upload="false" multiple />
      </KvcField>
      <KvcField>
        <template #label>file multi select</template>
        <KvcFileSelect v-model="files" :auto-upload="false" read-only multiple />
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>Subtable</template>
        <KvcTable
          :columns="columns"
          v-model="rows"
        >
          <template #columnA="{row, column}">
            <KvcTextInput v-model="row[column]" />
          </template>
          <template #columnB="{row, column}">
            <KvcTextInput v-model="row[column]" />
          </template>
          <template #columnC="{row, column}">
            <KvcTextInput read-only nonstyled v-model="row[column]" />
          </template>
        </KvcTable>
      </KvcField>
    </KvcRow>
    <KvcRow>
      <KvcField>
        <template #label>Subtable</template>
        <KvcTable
          read-only
          :columns="columns"
          v-model="rows"
        >
          <template #columnA="{row, column}">{{ row[column] }}</template>
          <template #columnB="{row, column}">{{ row[column] }}</template>
          <template #columnC="{row, column}">{{ row[column] }}</template>
        </KvcTable>
      </KvcField>
    </KvcRow>
  </KvcWrap>
</template>
