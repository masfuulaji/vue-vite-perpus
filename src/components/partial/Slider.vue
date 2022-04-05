<template>
    <div class="slider-wrapper">
        <Splide :options="sliderOptions" aria-label="My Favorite Images">
            <SplideSlide style="border-radius: 25px;" v-for="image in images" class="item-slider">
                <img :src="image.name" :alt="image.title" />
            </SplideSlide>
            <!-- <SplideSlide class="item-slider">
                <img src="@/assets/img/13.jpg" alt="Sample 2" />
            </SplideSlide>-->
        </Splide>
    </div>
</template>

<script>
import { reactive } from "vue"

export default {
    setup() {
        const sliderOptions = {
            cover: true,
            heightRatio: 0.5,
            type: 'loop',
            autoplay: true
        }

        const images = reactive({
            1: {
                name: "src/assets/img/3.jpg",
                title: 'Sample 1'
            },
            2: {
                name: "src/assets/img/13.jpg",
                title: 'Sample 2'
            }
        })

        return { sliderOptions, images }
    }
}
</script>

<style>
.item-slider img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>