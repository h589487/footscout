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
// Filtreringen fungerer slik at det tar FullName og på template delen alt annet, for ellers tar søk alt sammen
const filteredPlayers = computed(() => {
    return players.value.filter(player => {
        return player.FullName.toLowerCase().includes(props.searchText.toLowerCase());
    })
})
</script>

<template>
    <h2>Player profiles:</h2>
    <table>
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
            <tr v-for="player in filteredPlayers" :key="player.id">
                <td>{{ player.FullName }}</td>
                <td>{{ player.Age }}</td>
                <td>{{ player.Nationality }}</td>
                <td>{{ player.ClubName }}</td>
                <td>{{ player.PositionName }}</td>
                <td>{{ player.MarketValue }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
/* Scoped styling */
</style>
