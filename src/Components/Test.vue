<script setup>
import { ref, onMounted } from 'vue';

const clubs = ref([]);

const fetchClubs = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/clubs');
    if (!response.ok) {
      throw new Error('Failed to fetch clubs');
    }
    const clubsData = await response.json();
    clubs.value = clubsData;
  } catch (error) {
    console.error('Feil ved henting av klubber:', error);
    // Håndter feil her
  }
};

onMounted(fetchClubs);
</script>

<template>
  <div>
    <h1>Test av club tabell</h1>
    <ul>
      <li v-for="club in clubs" :key="club.id">
        {{ club.ClubName }}
      </li>
    </ul>
  </div>
</template>
