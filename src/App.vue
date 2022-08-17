<template>
  <nav class="rounded-md space-x-5 mx-auto mt-24 text-center">
    <router-link class="font-bold text-2xl" to="/">Home</router-link>
    <router-link class="font-bold text-2xl" to="/cep">Cep</router-link>
    <router-link class="font-bold text-2xl" to="/logradouro"
      >Logradouro</router-link
    >
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
nav a.router-link-exact-active {
  color: rgba(230, 100, 100, 0.7);
}
</style>
