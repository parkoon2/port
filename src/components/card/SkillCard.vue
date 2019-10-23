<template>
    <v-card>
        <div class="skill-container">
            <div class="skill-inner" v-for="skill in skills" :key="skill.title">
                <h2 class="skill-title">{{skill.title}}</h2>
                <v-progress-linear :value="skill.level" height="5" rounded :color="primary"></v-progress-linear>
            </div>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'skill-card',
    computed: {
        primary() {
            return this.$color['--primary']
        }
    },
    data() {
        return {
            skills: [
                {
                    title: 'HTML',
                    level: 80
                },
                {
                    title: 'CSS',
                    level: 90
                },
                {
                    title: 'Javascript',
                    level: 90
                },
                {
                    title: 'jQuery',
                    level: 70
                },
                {
                    title: 'React',
                    level: 80
                },
                {
                    title: 'Vue',
                    level: 60
                },
                {
                    title: 'MongoDB',
                    level: 70
                },
                {
                    title: 'Node.js',
                    level: 70
                }
            ]
        }
    }
}
</script>

<style scoped>
.skill-container {
    padding: 20px;
    background: var(--card-bg);
}

.skill-inner {
    display: inline-block;
    width: 50%;
    padding: 15px;
    color: var(--font-gray-3);
}

.skill-inner .skill-title {
    font-weight: normal;
    font-size: 15px;
}
@media screen and (max-width: 960px) {
    .skill-inner {
        width: 100%;
    }
}
</style>
    