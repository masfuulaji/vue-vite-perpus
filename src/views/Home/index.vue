<template>
    <div class="home-container">
        <div class="banner-slider">
            <Slider />
        </div>
    </div>
</template>

<script setup>
import '@splidejs/vue-splide/css';
import Slider from '@/components/partial/Slider.vue'

</script>

<style>
.banner-slider {
    width: 85%;
    margin: auto;
}
</style>