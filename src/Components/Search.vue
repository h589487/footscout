<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import PlayerList from './PlayerList.vue';

//Const til å holde en referanse til hver variabel
const searchText = ref('');
const selectedFilter = ref('name');
const minAge = ref('');
const maxAge = ref('');
const nationality = ref('');
const club = ref('');
const position = ref('');
const marketValue = ref('');
const players = ref([]);
const error = ref('');

//For filtrering
const nationalities = ref([]);
const clubs = ref([]);
const positions = ref([]);

//Asynkront funksjon til å håndtere søk. Try, catch til å fange feil
async function handleSearch() {
  try {
    error.value = ''; // Reset error melding
    //En params constant til å holde på verdi vi henter fra api(database data)
    const params = {
      [selectedFilter.value]: searchText.value,
      ageMin: minAge.value,
      ageMax: maxAge.value,
      nationality: nationality.value,
      club: club.value,
      position: position.value,
      marketValue: marketValue.value,
    };
    //Respons fra api med verdi satt inn i params constanten
    const response = await axios.get('http://localhost:3000/api/players/search', { params });
    //Setter spiller verdi lik response data (verdi til data)
    players.value = response.data;
  } catch (err) {
    console.error('Error fetching players:', err);
    error.value = 'Could not fetch players. Please try again later.';
  }
}

//Funksjon til å filtrere for nastionalities, club og position
async function fetchFilters() {
  try {
    //Hente (fetche) data fra api filtrert basert på nationalities, clubs og positions
    const [nationalitiesResponse, clubsResponse, positionsResponse] = await Promise.all([
      axios.get('http://localhost:3000/api/filters/nationalities'),
      axios.get('http://localhost:3000/api/filters/clubs'),
      axios.get('http://localhost:3000/api/filters/positions'),
    ]);
    //Setter verdi lik data
    nationalities.value = nationalitiesResponse.data;
    clubs.value = clubsResponse.data;
    positions.value = positionsResponse.data;
  } catch (error) {
    console.error('Error fetching filters:', error);
  }
}

onMounted(fetchFilters);
</script>

<template>
  <!--Lage class og dropdown box med valg for position, clubs og nationality-->
  <div class="container">
    <div class="filters">
      <div class="filter-dropdowns">
        <select v-model="position">
          <option value="">Position</option>
          <!--For løkke med en key for å gjøre hver enkel position unik for effektiv oppdatering ved endring -->
          <option v-for="pos in positions" :key="pos">{{ pos }}</option>
        </select>
        
        <select v-model="club">
          <option value="">Club</option>
          <!--For løkke med en key for å gjøre hver enkel club unik for effektiv oppdatering ved endring -->
          <option v-for="cl in clubs" :key="cl">{{ cl }}</option>
        </select>
        
        <select v-model="nationality">
          <option value="">Nationality</option>
           <!--For løkke med en key for å gjøre hver enkel nationalities unik for effektiv oppdatering ved endring -->
          <option v-for="nat in nationalities" :key="nat">{{ nat }}</option>
        </select>
      </div>
      <!--Lage en alder slider med min og max verdi -->
      <div class="age-slider">
        <label for="min-age">Min Age:</label>
        <input type="number" v-model="minAge" id="min-age" placeholder="Min Age" />
        
        <label for="max-age">Max Age:</label>
        <input type="number" v-model="maxAge" id="max-age" placeholder="Max Age" />
      </div>
    </div>

    <div class="search-bar">
      <input 
        type="text" 
        v-model="searchText" 
        placeholder="Search Player"
      />
      <button @click="handleSearch">Search</button>
    </div>

    <p v-if="error">{{ error }}</p>
    <!--Kontakt med PlayerList komponent for å sende data fra søk til andre komponent -->
    <PlayerList :players="players" />
  </div>
</template>

<style scoped>
/*
  CSS del som styler Template (HTML) delen. Hver class osv blir stylet
 */
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f4f9;
    padding: 20px;
}

.filters {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    gap: 20px;
}

.filter-dropdowns {
    display: flex;
    gap: 10px;
}

.filter-dropdowns select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.age-slider {
    display: flex;
    align-items: center;
    gap: 10px;
}

.age-slider label {
    margin-right: 5px;
}

.age-slider input {
    width: 80px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #eef;
    width: 100%;
    max-width: 800px;
    margin-bottom: 20px;
}

.search-bar input {
    width: 70%;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-bar button {
    padding: 10px 20px;
    background-color: #004080;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
</style>

