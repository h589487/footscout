 <script setup>
import PageHeader from '../src/Components/PageHeader.vue'
import PageFooter from '../src/Components/PageFooter.vue'
</script>
    
<template>
  <div id="app">
    <PageHeader />
    <main>
      <router-view />
    </main>
    <PageFooter />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main {
  padding: 2rem;
  padding-bottom: 4rem; /* Legg til ekstra plass for fixed footer */
}
</style>
