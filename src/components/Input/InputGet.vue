<template>
  <div>
    <div>
      <label :for="name">{{ showName }}</label>
    </div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :id="name"
      :type="type"
      class="bg-white border pl-3 py-0.5 mt-1 hover:border-red-200 focus:border-transparent border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md shadow-md"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    showName: String,
    modelValue: String,
    type: String,
  },
  emits: ["update:modelValue"],

  setup() {
    return {
      inputData: "",
    };
  },
  methods: {
    getInputData() {
      this.$emit("getData", this.inputData);
    },
  },
};
</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
