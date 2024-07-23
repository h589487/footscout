<script setup>

</script>

<template>
    <header>
        <div class="header-content">
            <h1>FootScout ⚽</h1>
            <nav>
                <ul>
                    <li><router-link to="/discover">Discover</router-link></li>
                    <li><router-link to="/playerList">Player Profiles</router-link></li>
                    <li><router-link to="/example">Example</router-link></li>
                    <li><router-link to="/aboutUs">About Us</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>
header {
    background-color: #001f3f;
    color: white;
    padding: 10px 0;
}
 
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
}
 
header h1 {
    font-size: 2em;
    margin: 0;
}
 
nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}
 
nav ul li {
    margin: 0 10px;
}
 
nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1.2em;
}
</style>
