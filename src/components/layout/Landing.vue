<template>
    <Navbar />
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/partial/Navbar.vue'
export default {
    components: {
        Navbar
    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
</style>