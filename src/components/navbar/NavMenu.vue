<template>
    <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
export default {
    data() {
        return {
            drawer: true,
            items: [
                { title: 'Home', icon: 'mdi-home-city', to: '/' },
                { title: 'About', icon: 'mdi-account', to: '/about' },
                {
                    title: 'Skill',
                    icon: 'mdi-account-group-outline',
                    to: '/skill'
                },
                {
                    title: 'Works',
                    icon: 'mdi-account-group-outline',
                    to: '/works'
                },
                {
                    title: 'Contact',
                    icon: 'mdi-account-group-outline',
                    to: '/contact'
                }
            ],
            mini: true
        }
    }
}
</script>