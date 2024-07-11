<!-- PlayerList.vue -->

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import axios from 'axios';

// Reaktiv variabel for å holde data
const props = defineProps(['searchText']);
const players = ref([]);

const fetchPlayers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/players', {
            params: { query: props.searchText }
        });
        players.value = response.data;
    } catch (error) {
        console.error('Feil ved henting av spillere: ', error);
    }
};

// Kjør fetchPlayers når komponenten er montert og når searchText endres
onMounted(fetchPlayers);
watch(() => props.searchText, fetchPlayers);

// Filtrert liste over spillere basert på søketekst
// Filtreringen fungerer slik at det tar FirstName og på template delen alt annet, for ellers tar søk alt sammen
const filteredPlayers = computed(() => {
    return players.value.filter(player => {
        return player.FirstName.toLowerCase().includes(props.searchText.toLowerCase());
    })
})
</script>

<template>
    <h2>Player profiles:</h2>
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Nationality</th>
                <th>Main Position</th>
                <th>Club</th>
                <th>Market Value</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="player in filteredPlayers" :key="player.id">
                <td>{{ player.FirstName }}</td>
                <td>{{ player.MiddleName }}</td>
                <td>{{ player.LastName }}</td>
                <td>{{ player.DateOfBirth }}</td>
                <td>{{ player.Nationality }}</td>
                <td>{{ player.MainPosition_id }}</td>
                <td>{{ player.Club_id }}</td>
                <td>{{ player.MarketValue }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
/* Scoped styling */
</style>
