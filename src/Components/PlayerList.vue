<script setup>
import { defineProps } from 'vue';

// Define props to receive players from the parent component
const props = defineProps({
  players: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2>Player Profile:</h2>
    <table v-if="players.length">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Age</th>
          <th>Nationality</th>
          <th>Club Name</th>
          <th>Position Name</th>
          <th>Market Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.id">
          <td>{{ player.FullName }}</td>
          <td>{{ player.Age }}</td>
          <td>{{ player.Nationality }}</td>
          <td>{{ player.ClubName }}</td>
          <td>{{ player.PositionName }}</td>
          <td>{{ player.MarketValue }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No players found.</p>
  </div>
</template>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
}
 
table, th, td {
    border: 1px solid #ddd;
}
 
th, td {
    padding: 8px;
    text-align: left;
}
 
th {
    background-color: #f2f2f2;
}
</style>
