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
  background-color: #001f3f; 
  color: #fff;
  text-align: center;
  padding: 0.0125rem 0.065rem;
  position: fixed;
  width: 100%;
  bottom: 0;
}
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem; /* Mindre skriftstørrelse */
}
.footer-content p {
  margin: 0.5rem 0;
}
</style>
