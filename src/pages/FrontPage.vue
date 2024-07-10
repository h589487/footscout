<script setup lang="ts">
import PageHeader from '@/Components/PageFooter.vue'
import PageFooter from '@/Components/PageHeader.vue'
interface Props {
    playerId: string
}

const props = defineProps<Props>()
</script>

<template>
<PageHeader />
<Players :player-id="props.playerId"

<main class="landing-page" />

<PageFooter/>
</template>

