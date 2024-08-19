<template>
  <div class="DivEmailInput">
    <input
      required
      type="email"
      class="EmailInput"
      :id="Props.IdInput"
      v-model="InputValue"
      @keyup="UpdateValue"
    />
    <label class="LabelInput" :for="Props.IdInput">{{ Props.InputTitle }}</label>
  </div>
</template>

<script setup lang="ts">
import { type Ref, ref } from 'vue'

const emit = defineEmits(['UpdateInputValue'])

const Props = defineProps({
  InputTitle: String,
  IdInput: String
})

let InputValue: Ref = ref('')

const UpdateValue = () => {
  emit('UpdateInputValue', InputValue.value)
}
</script>

<style scoped>
.DivEmailInput {
  position: relative;
}

.EmailInput {
  border: solid 1.5px #33ce14;
  border-radius: 1rem;
  background: none;
  padding: 1rem;
  font-size: 1rem;
  color: #0e4902;
  transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 80%;
}

.LabelInput {
  position: absolute;
  left: 15px;
  color: #9df78b;
  pointer-events: none;
  transform: translateY(1rem);
  transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.EmailInput:focus,
input:valid {
  outline: none;
  border: 1.5px solid #1a73e8;
}

.EmailInput:focus ~ label,
input:valid ~ label {
  transform: translateY(-50%) scale(0.8);
  background-color: #212121;
  padding: 0 0.2em;
  color: #2196f3;
}
</style>
