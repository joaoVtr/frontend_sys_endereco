<template>
  <div class="overflow-x-auto relative mt-10">
    <table
      class="w-1/2 text-sm text-left mx-auto text-gray-500 dark:text-gray-400"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="py-3 px-14">CEP</th>
          <th scope="col" class="py-3 px-6">Logradouro</th>
          <th scope="col" class="py-3 px-6">Número</th>
          <th scope="col" class="py-3 px-6">Complemento</th>
          <th scope="col" class="py-3 px-6">Bairro</th>
          <th scope="col" class="py-3 px-6">Cidade</th>
          <th scope="col" class="py-3 px-6">Estado</th>
        </tr>
      </thead>

      <tbody v-for="endereco in enderecos" :key="endereco.cep ?? endereco.CEP">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td class="py-0.5 text-center">{{ endereco.cep ?? endereco.CEP }}</td>
          <td class="py-0.5 px-6">{{ endereco.logradouro }}</td>
          <td class="py-0.5 px-6">{{ endereco.numero ?? "N/A" }}</td>
          <td class="py-0.5 px-6">{{ endereco.complemento ?? "N/A" }}</td>
          <td class="py-0.5 px-6">{{ endereco.bairro }}</td>
          <td class="py-0.5 px-6">
            {{ endereco.cidade ?? endereco.localidade }}
          </td>
          <td class="py-0.5 px-6">{{ endereco.estado ?? endereco.uf }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    enderecos: Object,
  },
};
</script>
