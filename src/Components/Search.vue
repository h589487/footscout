    <script setup >
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

   
   // const searchQuery = ref(''); //Reaktiv ref som holde en verdi og auto oppdater alle steder som bruker denne ref
   const router = useRouter()
   const searchText = ref('')

    //Få tilgang til Vuex store
   // const store = useStore()

/*
  async function handleSearch() {
  try {
    const response = await axios.get('http://localhost:3000/api/players', {
      params: { query: searchQuery.value }
    });
    console.log('Search results:', response.data);
    // Behandle søkeresultatene her
  } catch (error) {
    console.error('Feil ved søk etter spillere:', error);
  }
}
  */

  function handleSearch() {
  router.push({ name: 'PlayerList', params: { searchText: searchText.value } });
}

    /*
    function handleLogin() {
    console.log('Login button clicked');
    //TODO: Legg til logikken for å håndtere innlogging her (Mest sannsynligvis ikke gjøres)
    }
    */

   </script>

<template>
    <input type="text" v-model="searchText" placeholder="Search players..." /> 
    <button @click="handleSearch" class="search-button">Search></button>
  </template>
  
  
  <style scoped>


  </style>
  