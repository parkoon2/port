<template>
    <div class="app-bar" ref="appbar">
        <v-app-bar :color="setAppbarHeader" dark :flat="this.isScrollTop">
            <v-toolbar-title class="logo">
                <span :style="{color: primary, fontWeight: 'bold'}">P</span>ARKOON
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <div>
                <v-btn icon class="menu-box mobile" @click.stop="toggleDrawer" :color="grayColor">
                    <v-icon>mdi-menu</v-icon>
                </v-btn>
                <div class="menu-box pc">
                    <a
                        v-for="(item, i) in items"
                        :key="i"
                        text
                        :to="item.to"
                        class="menu-btn"
                        active-class="active"
                        @click.stop="scrollTo(item)"
                    >{{item.title}}</a>
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
    computed: {
        bgColor() {
            return this.$color['--body-bg']
        },
        grayColor() {
            return this.$color['--font-gray-3']
        },
        setAppbarHeader() {
            if (this.isScrollTop) {
                return 'transparent'
            } else {
                return this.bgColor
            }
        },
        primary() {
            return this.$color['--primary']
        }
    },
    data() {
        return {
            isScrollTop: true,
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
                }
                // {
                //     title: 'timeline',
                //     to: '/timeline'
                // },
                // {
                //     title: 'contact',
                //     to: '/contact'
                // }
            ]
        }
    },
    methods: {
        toggleDrawer() {
            this.drawer = !this.drawer
        },
        scrollTo(item) {
            const element = document.getElementById(item.title)

            if (item.title === 'about') {
                return window.scrollTo({
                    behavior: 'smooth',
                    top: 0,
                    left: 0
                })
            }

            const style = getComputedStyle(element)
            const marginTop = Number(
                style.marginTop.slice(0, style.marginTop.indexOf('px'))
            )
            window.scrollTo({
                behavior: 'smooth',
                top: element.offsetTop + marginTop,
                left: 0
            })

            // element.scrollIntoView({
            //     behavior: 'smooth',
            //     block: 'start',
            //     inline: 'start'
            // })

            this.$nextTick(() => {
                console.log(element)
            })
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                this.isScrollTop = false
            } else {
                this.isScrollTop = true
            }
        })
    }
}
</script>

<style scoped>
.app-bar {
    z-index: 10;
    position: fixed;
    width: 100%;
    background: transparent;
}
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
    font-size: 15px;
    transition: 0.2s linear;
}

.menu-btn:last-child {
    margin-right: 12px;
}

/* .menu-btn::before {
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
} */

.menu-btn:hover {
    color: var(--primary);
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