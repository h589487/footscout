<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import PlayerList from './PlayerList.vue';

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

const nationalities = ref([]);
const clubs = ref([]);
const positions = ref([]);

async function handleSearch() {
  try {
    error.value = ''; // Reset error message
    const params = {
      [selectedFilter.value]: searchText.value,
      ageMin: minAge.value,
      ageMax: maxAge.value,
      nationality: nationality.value,
      club: club.value,
      position: position.value,
      marketValue: marketValue.value,
    };
    const response = await axios.get('http://localhost:3000/api/players/search', { params });
    players.value = response.data;
  } catch (err) {
    console.error('Error fetching players:', err);
    error.value = 'Could not fetch players. Please try again later.';
  }
}

async function fetchFilters() {
  try {
    const [nationalitiesResponse, clubsResponse, positionsResponse] = await Promise.all([
      axios.get('http://localhost:3000/api/filters/nationalities'),
      axios.get('http://localhost:3000/api/filters/clubs'),
      axios.get('http://localhost:3000/api/filters/positions'),
    ]);
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
    <div class="search-bar">
      <input 
        type="text" 
        v-model="searchText" 
        placeholder="Søk etter spiller"
      />
      <button @click="handleSearch">Søk</button>
    </div>

    <div class="age-filter">
      <label for="min-age">Min Age:</label>
      <input type="number" v-model="minAge" id="min-age" placeholder="Min Age" />
      
      <label for="max-age">Max Age:</label>
      <input type="number" v-model="maxAge" id="max-age" placeholder="Max Age" />
    </div>

    <div class="filter-dropdowns">
      <select v-model="nationality">
        <option value="">Select Nationality</option>
        <option v-for="nat in nationalities" :key="nat" :value="nat">{{ nat }}</option>
      </select>
      
      <select v-model="club">
        <option value="">Select Club</option>
        <option v-for="cl in clubs" :key="cl">{{ cl }}</option>
      </select>
      
      <select v-model="position">
        <option value="">Select Position</option>
        <option v-for="pos in positions" :key="pos">{{ pos }}</option>
      </select>
    </div>

    <p v-if="error">{{ error }}</p>
    <PlayerList :players="players" />
</template>

<style scoped>
.search-bar {
    display: auto;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background-color: #eef;
}

.search-bar input {
    width: 300px;
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

.filter-dropdowns {
  margin-right: 10px;
    padding: 10px;
}
</style>
