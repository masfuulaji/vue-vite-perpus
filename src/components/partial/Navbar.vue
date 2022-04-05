<template>
    <div class="nav-container">
        <div class="wrapper-navbar">
            <div class="title-app">
                <span class="text-title-app">Perpus</span>
            </div>
            <div style="margin-right: 100px;">
                <router-link class="link-navbar" :to="{ name: 'Home' }">Home</router-link>
                <router-link class="link-navbar" :to="{ name: 'About' }">About</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.nav-container {
    background-color: #6c63ff;
    padding: 20px 10px 20px 10px;
}
.wrapper-navbar {
    display: flex;
    flex-direction: row;
}
.title-app {
    flex: 1;
    margin-left: 70px;
}
.text-title-app {
    color: #fff;
    font-size: 20px;
    font-family: sans-serif;
}
.link-navbar {
    margin-left: 20px;
    color: #fff;
    text-decoration: none;
    transition-duration: 0.5s;
    font-family: sans-serif;
    font-size: 15;
}
.link-navbar:hover {
    color: rgb(7, 0, 216);
    text-decoration: underline;
}
</style>