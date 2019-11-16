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
                            class="menu-btn"
                            active-class="active"
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
                    title: 'works',
                    to: 'works'
                },
                {
                    title: 'interest',
                    to: 'interest'
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
                // top: element.offsetTop + marginTop,
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
.menu-btn {
    color: var(--font-grey-3);
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
