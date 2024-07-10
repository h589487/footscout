    <script setup >
    import { ref } from 'vue'
   
    const searchQuery = ref(''); //Reaktiv ref som holde en verdi og auto oppdater alle steder som bruker denne ref
    
    function handleSearch() {
      console.log('Search query:', searchQuery.value);
      //TODO: Legg til logikken for å håndtere søk her (Hvor vanskelig er dette?)
    }

    /*
    function handleLogin() {
    console.log('Login button clicked');
    //TODO: Legg til logikken for å håndtere innlogging her (Mest sannsynligvis ikke gjøres)
    }
    */

   </script>

<template>
    <h1>Foot Scout ⚽</h1> 
    <input type="text" v-model="input" placeholder="Search players..." /> 
    <button @click="handleSearch" class="search-button">Search></button>
  </template>
  
  
  <style scoped>


  </style>
  