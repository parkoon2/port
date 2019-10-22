<template>
    <v-app>
        <app-bar></app-bar>
    </v-app>
</template>
<script>
import AppBar from '@/components/appbar/AppBar'
export default {
    components: { AppBar },
    data: () => ({
        collapseOnScroll: true,
        menu: [
            {
                title: 'home'
            },
            {
                title: 'about'
            },
            {
                title: 'skills'
            },
            {
                title: 'works'
            },
            {
                title: 'contact'
            }
        ]
    })
}
</script>