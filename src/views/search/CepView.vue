<template>
  <div
    class="container mx-auto text-center mt-10 flex flex-row justify-center space-x-3"
  >
    <InputGet :name="name" :showName="showName" v-model="searchText" />

    <ButtonEnviar @enviar="enviar()" />
  </div>
  <TableIndex :enderecos="[$store.state.enderecosCEP]" />
</template>

<script>
import InputGet from "@/components/Input/InputGet.vue";
import ButtonEnviar from "@/components/Button/ButtonEnviar.vue";
import TableIndex from "@/components/Table/TableIndex.vue";
export default {
  components: { InputGet, ButtonEnviar, TableIndex },
  data() {
    return {
      name: "CEP",
      showName: "CEP",
      searchText: "",
      enderecos: [],
    };
  },
  methods: {
    enviar() {
      this.$store.dispatch("fetchCep", { cep: this.searchText });
    },
  },
};
</script>
