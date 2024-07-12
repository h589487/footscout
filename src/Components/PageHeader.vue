<script setup>
// No script content needed for now
</script>

<template>
  <header>
    <h1>Foot Scout ⚽</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #001f3f; /* Marineblå farge */
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  margin: 0;
}
nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
nav li {
  display: inline;
  margin-right: 1rem;
}
nav a {
  color: #fff;
  text-decoration: none;
}
</style>
