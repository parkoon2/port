<template>
    <div class="social__wrapper">
        <v-btn
            icon
            class="social-link"
            v-for="social in socials"
            :key="social.title"
            @click="linkTo(social.link)"
        >
            <v-icon :color="color">{{social.icon}}</v-icon>
        </v-btn>
    </div>
</template>


<script>
import { social } from '../../data'
import { openNewWindow } from '../../helper/util'
export default {
    name: 'social-link',
    props: ['color'],
    data() {
        return {
            socials: social
        }
    },
    methods: {
        linkTo(link) {
            openNewWindow(link)
        }
    }
}
</script>


<style scoped>
.social__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
.social-link {
    margin-right: 27px;
    color: var(--font-grey-3) !important;
    transition: background 0.2s ease-in-out;
}
.social-link:hover {
    background: #fff;
    color: #000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>