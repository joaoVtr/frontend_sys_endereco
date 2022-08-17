<template>
  <button
    @click="enviar()"
    class="bg-blue-600 hover:bg-blue-500 px-3 py-1 focus:ring-2 text-gray-100 rounded-md shadow-md mt-auto"
  >
    Enviar
  </button>
</template>

<script>
export default {
  methods: {
    enviar() {
      this.$emit("enviar");
    },
  },
};
</script>
