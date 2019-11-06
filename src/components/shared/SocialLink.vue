<template>
    <div>
        <v-btn icon class="social-link" v-for="social in socials" :key="social.title">
            <v-icon>{{social.icon}}</v-icon>
        </v-btn>
    </div>
</template>


<script>
export default {
    name: 'social-link',
    data() {
        return {
            socials: [
                {
                    title: 'github',
                    icon: 'mdi-github-box',
                    link: '/'
                },
                {
                    title: 'twitter',
                    icon: 'mdi-twitter',
                    link: '/'
                },
                {
                    title: 'faceboock',
                    icon: 'mdi-facebook',
                    link: '/'
                },
                {
                    title: 'blog',
                    icon: 'mdi-blogger',
                    link: '/'
                },
                {
                    title: 'instagram',
                    icon: 'mdi-instagram',
                    link: '/'
                }
            ]
        }
    }
}
</script>


<style scoped>
.social-link {
    margin-right: 27px;
    color: var(--font-gray-3) !important;
    transition: background 0.2s ease-in-out;
}
.social-link:hover {
    background: #fff;
    color: #000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>