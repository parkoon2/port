<template>
    <div>
        <v-app-bar color="deep-purple accent-4" dark>
            <v-toolbar-title>LOGO</v-toolbar-title>

            <v-spacer></v-spacer>

            <div>
                <v-btn icon class="menu-box mobile" @click.stop="toggleDrawer">
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <div class="menu-box pc">
                    <v-btn v-for="(item, i) in items" :key="i" text>{{item.title}}</v-btn>
                </div>
            </div>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-btn @click.stop="toggleDrawer" icon>
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-list>
                <v-list-item-group v-model="items" color="primary">
                    <v-list-item v-for="(item, i) in items" :key="i">
                        <!-- <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>-->
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>



<script>
export default {
    components: {},
    data() {
        return {
            drawer: null,
            items: [
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
        }
    },
    methods: {
        toggleDrawer() {
            this.drawer = !this.drawer
        }
    }
}
</script>

<style scoped>
.menu-box.mobile {
    display: none;
}
@media screen and (max-width: 960px) {
    .menu-box.pc {
        display: none;
    }
    .menu-box.mobile {
        display: inline-block;
    }
}
</style>
