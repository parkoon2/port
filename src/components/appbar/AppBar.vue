<template>
    <div>
        <div class="app-bar" ref="appbar">
            <v-app-bar :color="setAppbarHeader" dark :flat="this.isScrollTop">
                <v-toolbar-title class="logo">
                    <span :style="{ color: primary, fontWeight: 'bold' }"
                        >P</span
                    >ARKOON
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <div>
                    <v-btn
                        icon
                        class="menu-box mobile"
                        @click.stop="toggleDrawer"
                        :color="greyColor"
                    >
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                    <div class="menu-box pc">
                        <a
                            v-for="(item, i) in items"
                            :key="i"
                            text
                            :to="item.to"
                            :class="[
                                'menu__btn',
                                currentView === item.to ? `active` : ``
                            ]"
                            @click.stop="scrollTo(item)"
                            >{{ item.title }}</a
                        >
                    </div>
                </div>
            </v-app-bar>
        </div>
        <app-drawer
            :show="isDrawerShow"
            :items="items"
            @scrollTo="scrollTo"
            @close="toggleDrawer"
        ></app-drawer>
    </div>
</template>

<script>
import AppDrawer from './AppDrawer'

export default {
    components: { AppDrawer },
    computed: {
        bgColor() {
            return this.$color['--body-bg']
        },
        greyColor() {
            return this.$color['--font-grey-3']
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
    // watch: {
    //     isDrawerShow() {
    //         alert('...')
    //     }
    // },
    data() {
        return {
            isScrollTop: true,
            isDrawerShow: false,
            currentView: 'about',
            items: [
                {
                    title: 'about',
                    to: 'about'
                },
                {
                    title: 'skills',
                    to: 'skills'
                },
                {
                    title: 'interest',
                    to: 'interest'
                },
                {
                    title: 'statistics',
                    to: 'statistics'
                },
                {
                    title: 'works',
                    to: 'works'
                },

                {
                    title: 'side projects',
                    to: 'side-projects'
                }
            ]
        }
    },
    methods: {
        toggleDrawer() {
            this.isDrawerShow = !this.isDrawerShow
            document.documentElement.style.overflow = this.isDrawerShow
                ? 'hidden'
                : 'auto'

            window.scrollTo({
                top: 0
            })
        },
        scrollTo(item) {
            const element = document.getElementById(item.to)

            if (item.to === 'about') {
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
                // top: element.offsetTop,
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

            this.items.forEach(item => {
                const el = document.getElementById(item.to)
                const offset = el.offsetTop
                if (
                    offset <= Math.floor(window.scrollY) &&
                    offset + el.clientHeight >= Math.floor(window.scrollY)
                ) {
                    if (this.currentView !== item.to) {
                        this.currentView = item.to
                    }
                }
            })
        })
    }
}
</script>

<style scoped>
.app-bar {
    position: fixed;
    z-index: 10;
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
.menu__btn {
    color: var(--font-grey-3);
    text-transform: uppercase;
    text-decoration-line: none;
    font-weight: bold;
    margin-left: 30px;
    position: relative;
    font-size: 15px;
    transition: 0.2s linear;
}
.menu__btn.active {
    color: var(--primary);
}

.menu__btn:last-child {
    margin-right: 12px;
}

.menu__btn::before {
    content: '';
    width: 3px;
    height: 0;
    background-color: var(--primary);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: -10px;
    border-radius: 7px;
    transition: 0.3s;
}

.menu__btn.active::before {
    height: 80%;
}

.menu__btn:hover {
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
