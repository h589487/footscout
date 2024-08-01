<script setup>
    
</script>

<template>
  <footer>
    <div class="footer-content">
      <p>FootScout A/S</p>
      <p>PhoneNumber: 57-78-73-07</p>
      <p>Email: footscout@customerservice.com</p>
      <p>Address: FootScout building 1, 6127 FootStreet</p>
    </div>
  </footer>
</template>


<style scoped>
footer {
  background-color: #001f3f; /* Bakgrunnsfarge for footeren */
  padding: 20px; /* Padding rundt innholdet */
  color: white; /* Tekstfarge */
}

.footer-content {
  display: flex; /* Bruk flexbox til å arrangere innhold horisontalt */
  justify-content: space-between; /* Fordel innholdet jevnt over tilgjengelig plass */
  align-items: center; /* Sentere innholdet vertikalt */
}

.footer-content p {
  margin: 0 10px; /* Gi litt plass mellom elementene */
}
</style>
