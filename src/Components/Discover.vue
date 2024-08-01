<template>
    <div class="discover">
      <div class="background-image">
        <div class="search-bar">
          <input type="text" placeholder="Search for teams, players, country or leagues..." />
          <button><i class="fa fa-search"></i></button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
 .discover {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://www.juliatannerart.co.uk/wp-content/uploads/2019/09/corner-kick-fine-art-giclee-print-football-painting-picture-liverpool-arsenal-chelsea-manchester-united-wall-art.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.background-image {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-bar {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 25px;
  padding: 10px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%; /* Sikre at søkebaren fyller hele containerens bredde */
  max-width: 500px; /* Maksimal bredde for søkebaren */
}

.search-bar input {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 16px;
  width: 100%; /* Fyller hele bredden av søkebaren */
  margin-right: 10px; /* Litt plass mellom input og knappen */
}

.search-bar button {
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px;
}

.search-bar button i {
  font-size: 20px;
  color: #333;
}
  </style>
  