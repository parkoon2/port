<template>
    <div>
        <v-app-bar :color="bgColor" dark>
            <v-toolbar-title class="logo">LOGO</v-toolbar-title>

            <v-spacer></v-spacer>

            <div>
                <v-btn icon class="menu-box mobile" @click.stop="toggleDrawer" :color="grayColor">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <div class="menu-box pc">
                    <!-- <v-btn
                        v-for="(item, i) in items"
                        :key="i"
                        text
                        :color="grayColor"
                        :to="item.to"
                        active-class="hello"
                        class="menu-btn"
                    >{{item.title}}</v-btn>-->
                    <router-link
                        href
                        v-for="(item, i) in items"
                        :key="i"
                        text
                        :to="item.to"
                        class="menu-btn"
                        active-class="active"
                    >{{item.title}}</router-link>
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
import color from '@/constants/color'

export default {
    components: {},
    computed: {
        bgColor() {
            return color['--body-bg']
        },
        grayColor() {
            return color['--font-gray-3']
        }
    },
    data() {
        return {
            drawer: null,
            items: [
                {
                    title: 'about',
                    to: '/about'
                },
                {
                    title: 'skills',
                    to: '/skills'
                },
                {
                    title: 'works',
                    to: '/works'
                },
                {
                    title: 'timeline',
                    to: '/timeline'
                },
                {
                    title: 'contact',
                    to: '/contact'
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
.logo {
    margin-left: 12px;
}
.menu-box {
    position: relative;
}
.menu-box.mobile {
    display: none;
}
.menu-btn {
    color: var(--font-gray-3);
    text-transform: uppercase;
    text-decoration-line: none;
    font-weight: bold;
    margin-left: 30px;
    position: relative;
    font-size: 13px;
}

.menu-btn:last-child {
    margin-right: 12px;
}

.menu-btn::before {
    content: '';
    width: 0;
    height: 3px;
    background-color: var(--primary);
    position: absolute;
    bottom: -7px;
    left: 0;
    border-radius: 7px;
    transition: 0.3s;
}

.menu-btn.active::before {
    content: '';
    width: 100%;
    height: 3px;
    background-color: var(--primary);
    position: absolute;
    bottom: -7px;
    left: 0;
    border-radius: 7px;
    transition: 0.3s;
}

.menu-btn:hover:before {
    width: 100%;
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
