<template>
  <div
    class="container mx-auto text-center mt-10 flex flex-row justify-center space-x-3"
  >
    <InputGet
      :name="name"
      :type="type"
      :showName="showName"
      v-model="searchText"
    />
    <ButtonEnviar @enviar="enviar()" />
  </div>
  <TableIndex :enderecos="[$store.state.enderecosLogradouro]" />
</template>

<script>
import InputGet from "@/components/Input/InputGet.vue";
import ButtonEnviar from "@/components/Button/ButtonEnviar.vue";
import TableIndex from "@/components/Table/TableIndex.vue";
export default {
  components: { InputGet, ButtonEnviar, TableIndex },
  data() {
    return {
      name: "logradouro",
      showName: "Logradouro",
      searchText: "",
      type: "text",
    };
  },
  methods: {
    enviar() {
      this.$store.dispatch("fetchLogradouro", { logradouro: this.searchText });
    },
  },
};
</script>
