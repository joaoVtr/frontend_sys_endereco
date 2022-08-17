import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    enderecos: [],
    enderecosCEP: [],
    enderecosLogradouro: [],
    teste: ["123"],
  },
  getters: {
    getEnderecos: (state) => state.enderecos,
    getEnderecosFiltrados: (state) => state.enderecosFiltrado,
  },
  actions: {
    async fetchEnderecos({ commit }, params) {
      console.log(params);
      try {
        const data = await axios.get("http://localhost/api/enderecos", {
          params: params,
        });

        commit("SET_ENDERECOS", data.data);

        console.log(data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchCep({ commit }, params) {
      console.log(params);
      try {
        const data = await axios.get("http://localhost/api/enderecos/cep", {
          params: params,
        });

        commit("SET_CEP", data.data);

        console.log(data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    async fetchLogradouro({ commit }, params) {
      console.log(params);
      try {
        const data = await axios.get(
          "http://localhost/api/enderecos/logradouro",
          {
            params: params,
          }
        );

        commit("SET_LOGRADOURO", data.data);

        console.log(data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  mutations: {
    SET_ENDERECOS(state, enderecos) {
      state.enderecos = enderecos;
    },
    SET_CEP(state, enderecosCEP) {
      state.enderecosCEP = enderecosCEP;
    },
    SET_LOGRADOURO(state, enderecosLogradouro) {
      state.enderecosLogradouro = enderecosLogradouro;
    },

    teste(state, data) {
      console.log("teste", data);
    },
  },
});
