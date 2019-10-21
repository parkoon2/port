<template>
    <v-app>
        <nav-drawer></nav-drawer>
        <v-content>
            <v-container class="fill-height" fluid>
                <router-view></router-view>
            </v-container>
        </v-content>

        <app-footer></app-footer>
    </v-app>
</template>

<script>
import NavDrawer from '@/components/navbar/NavDrawer'
import AppFooter from '@/components/shared/Footer'

export default {
    name: 'App',
    components: {
        NavDrawer,
        AppFooter
    },
    data: () => ({
        //
    })
}
</script>
