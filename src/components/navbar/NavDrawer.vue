<template>
    <v-card>
        <!-- <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent app> -->

        <v-navigation-drawer dark mini-variant mini-variant-width="56" permanent app>
            <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
                </v-list-item-avatar>
            </v-list-item>

            <v-divider></v-divider>

            <nav-menu></nav-menu>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
import NavMenu from './NavMenu'

export default {
    components: {
        NavMenu
    },
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Home', icon: 'mdi-home-city' },
                { title: 'My Account', icon: 'mdi-account' },
                { title: 'Users', icon: 'mdi-account-group-outline' }
            ],
            mini: true
        }
    }
}
</script>