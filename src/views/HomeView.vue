<template>
  <div class="container mx-auto text-center mt-10">
    <TableIndex :enderecos="$store.state.enderecos.data" />
  </div>
</template>

<script>
import TableIndex from "@/components/Table/TableIndex.vue";
export default {
  data() {
    return {
      enderecos: [],
    };
  },
  computed() {},
  created() {
    this.$store.dispatch("fetchEnderecos", { per_page: 10 });
  },
  components: { TableIndex },
};
</script>
