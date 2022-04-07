<template>
    <div class="home-container">
        <div class="banner-slider">
            <Search />
            <Slider />
        </div>
    </div>
</template>

<script setup>
import '@splidejs/vue-splide/css';
import Slider from '@/components/partial/Slider.vue'
import Search from '@/components/shared/Search.vue'

</script>

<style>
.banner-slider {
    width: 85%;
    margin: auto;
}
</style>