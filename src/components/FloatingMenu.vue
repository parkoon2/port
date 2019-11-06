<template>
    <div
        class="floating-menu"
        :style="isFooterInWindow ? {
            position: 'absolute',
            bottom: '82px',
            right: '30px'
        } : {
            position: 'fixed',
            bottom: '30px',
            right: '30px'
        }"
    >
        <v-btn tile outlined :color="primary" width="120">
            <v-icon left style="flex: 1">mdi-star</v-icon>
            <span style="flex: 2">SKILLS</span>
        </v-btn>
        <v-btn class="mt-1" tile outlined :color="primary" width="120">
            <v-icon left style="flex: 1">mdi-briefcase</v-icon>
            <span style="flex: 2">WORKS</span>
        </v-btn>
        <v-btn class="mt-2" tile outlined :color="gray" width="120">
            <v-icon left style="flex: 1">mdi-arrow-up</v-icon>
            <span style="flex: 2">TOP</span>
        </v-btn>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'floating-menu',
    computed: {
        gray() {
            return this.$color['--font-gray-3']
        },
        primary() {
            return this.$color['--primary']
        },
        ...mapGetters(['isFooterInWindow'])
    },
    data() {
        return {
            footerInWindow: false
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (
                !this.isFooterInWindow &&
                window.scrollY + window.innerHeight >
                    document.getElementById('footer').offsetTop
            ) {
                this.$store.dispatch('setFooterInView', true)
            } else if (
                this.isFooterInWindow &&
                window.scrollY + window.innerHeight <
                    document.getElementById('footer').offsetTop
            ) {
                this.$store.dispatch('setFooterInView', false)
            } else {
            }
        })
    }
}
</script>

<style scoped>
.floating-menu {
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
}

@media only screen and (max-width: 1440px) {
    .floating-menu div {
        width: 36px;
        padding: 0;
        text-align: center;
    }

    .floating-menu div i {
        margin: 0;
    }
    .floating-menu div span {
        display: none;
    }
}

@media screen and (max-width: 960px) {
    .floating-menu {
        display: none;
    }
}
</style>