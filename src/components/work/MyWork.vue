<template>
    <div>
        <v-row>
            <v-col>
                <page-title
                    title="web developer portfolio"
                    subtitle="From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and Node.JS. Check out my latest web software development portfolio projects."
                ></page-title>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="tag-box">
                <v-chip
                    pill
                    :color="cardBg"
                    class="filter-tag"
                    v-for="tag in tags"
                    :key="tag.title"
                >
                    <span class="tag-title">{{tag.title}}</span>
                </v-chip>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="work in works" :key="work.id" sm="6" md="4" xs="12" class="image-box">
                <work-image
                    :id="work.id"
                    :src="work.image"
                    :title="work.title"
                    :subtitle="work.subtitle"
                    :git="work.git"
                    :demo="work.demo"
                    :tags="work.tags"
                ></work-image>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="more-btn-box">
                <app-button icon="mdi-plus" :color="gray"></app-button>
                <!-- <v-btn icon outlined large :color="gray" class="more-btn">
                    <v-icon class="plus-icon"></v-icon>
                </v-btn>-->
            </v-col>
        </v-row>
    </div>
</template>
<script>
import WorkImage from './WorkImage'
import PageTitle from '@/components/PageTitle'
import AppButton from '@/components/AppButton'
export default {
    name: 'my-work',
    components: {
        WorkImage,
        PageTitle,
        AppButton
    },
    data() {
        return {
            works: [
                {
                    id: '1',
                    title: 'LG A+ CES Show APP',
                    subtitle: 'TV Aplication for CES show',
                    image: 'https://picsum.photos/500/300?image=1',
                    git: 'https://github.com/parkoon',
                    demo: 'https://github.com/parkoon',
                    tags: ['enact', 'javascript']
                },
                {
                    id: '2',
                    title: 'LG A+ CES Show APP',
                    subtitle: 'TV Aplication for CES show',
                    image: 'https://picsum.photos/500/300?image=2',
                    git: 'https://github.com/parkoon',
                    demo: 'https://github.com/parkoon',
                    tags: ['enact', 'html']
                },
                {
                    id: '3',
                    title: 'LG A+ CES Show APP',
                    subtitle: 'TV Aplication for CES show',
                    image: 'https://picsum.photos/500/300?image=3',
                    git: 'https://github.com/parkoon',
                    demo: 'https://github.com/parkoon',
                    tags: ['enact', 'css']
                },
                {
                    id: '4',
                    title: 'LG A+ CES Show APP',
                    subtitle: 'TV Aplication for CES show',
                    image: 'https://picsum.photos/500/300?image=4',
                    git: 'https://github.com/parkoon',
                    demo: 'https://github.com/parkoon',
                    tags: ['enact', 'view']
                }
            ],
            tags: [
                {
                    title: 'view-all'
                },
                {
                    title: 'front-end'
                },
                {
                    title: 'back-end'
                },
                {
                    title: 'html'
                },
                {
                    title: 'css'
                },
                {
                    title: 'javascript'
                },
                {
                    title: 'nodejs'
                },
                {
                    title: 'reactjs'
                },
                {
                    title: 'mongodb'
                },
                {
                    title: 'vuejs'
                },
                {
                    title: 'jquery'
                }
            ]
        }
    },
    computed: {
        gray() {
            return this.$color['--font-gray-3']
        },
        cardBg() {
            return this.$color['--card-bg']
        }
    }
}
</script>
<style scoped>
.more-btn:hover .plus-icon {
    transform: rotate(90deg);
}

.tag-box {
    display: flex;
    flex-wrap: wrap;
}
.filter-tag {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 0.2s;
}

.filter-tag.selected {
    background: var(--primary) !important;
}

.tag-title {
    color: var(--font-gray-1);
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
}

.more-btn-box {
    display: flex;
    justify-content: center;
}

@media screen and (max-width: 600px) {
    .image-box {
        flex: 0 0 100%;
    }
}
</style>