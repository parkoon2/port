<template>
    <v-card class="mx-auto" :color="cardBg">
        <div class="about-content">
            <div class="about-info">
                <div class="about-preword">PASSION</div>
                <p class="about-title">
                    I'm
                    <span>Jong Hyeok Park</span>
                </p>
                <p class="about-subtitle">Frontend & Backend Developer</p>

                <v-divider :color="lightGray"></v-divider>

                <ul class="about-list">
                    <li v-for="info in infos" :key="info.title">
                        <div class="list-title">{{info.title}}</div>
                        <div v-if="Array.isArray(info.value)">
                            <span
                                v-for="(v, index) in info.value"
                                :key="index"
                                class="list-value"
                            >{{v}}</span>
                        </div>
                        <span v-else class="list-value">{{info.value}}</span>
                    </li>
                </ul>
            </div>
            <div class="about-image">
                <!-- <v-img height="350" width="295" :src="me"></v-img> -->
            </div>
        </div>
        <div class="about-social">
            <!-- <v-btn icon class="social-link" v-for="social in socials" :key="social.title">
                <v-icon>{{social.icon}}</v-icon>
            </v-btn>-->

            <social-link></social-link>
        </div>
    </v-card>
</template>
<script>
import SocialLink from '@/components/shared/SocialLink'
export default {
    components: {
        SocialLink
    },
    computed: {
        cardBg() {
            return this.$color['--card-bg']
        },
        lightGray() {
            return this.$color['--font-gray-3']
        },
        me() {
            return this.hoverOnMe ? hireMe : me
        }
    },
    data() {
        return {
            hoverOnMe: false,
            infos: [
                {
                    title: 'age',
                    value: 30
                },
                {
                    title: 'address',
                    value:
                        'Wabu-eup, Namyangju-si, Gyeonggi-do, Republic of Korea'
                },
                {
                    title: 'e-mail',
                    value: 'devparkoon@gmail.com'
                },
                {
                    title: 'phone',
                    value: '010.3328.0917'
                },
                {
                    title: 'hobbies',
                    value: ['man', 'dd']
                }
            ],
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
    },
    methods: {
        // handleMouseover() {
        //     this.hoverOnMe = true
        // },
        // handleMouseout() {
        //     this.hoverOnMe = false
        // }
    }
}
</script>

<style scoped>
.about-content {
    color: var(--font-gray-1);
    display: flex;
    padding: 57px 50px 12px 50px;
}

.about-image {
    width: 352px;
    background-image: url('../../assets/me.jpg');
    background-size: cover;
    background-position: center center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.about-info {
    margin-right: 32px;
    /* flex: 1; */
    /* margin-left: 37px; */
}

.about-info .about-title {
    font-size: 37px;
    margin: 0;
}

.about-info .about-title span {
    font-weight: bold;
}

.about-preword {
    position: relative;
    display: inline-block;
    background: var(--primary);
    padding: 3px 12px;
    font-weight: bold;
    margin-bottom: 24px;
}

.about-preword::after {
    content: '';
    width: 0;
    height: 0;
    top: 100%;
    left: 5px;
    position: absolute;
    border-style: solid;
    border-width: 0px 0px 8px 8px;
    border-color: transparent;
    border-left-color: var(--primary);
}

.about-list {
    list-style: none;
    margin-top: 27px;
    padding-left: 0;
}

.about-list li {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* display: flex;
    margin-bottom: 13px; */
    margin-bottom: 7px;
}
.about-list li .list-title {
    width: 120px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
}

.about-list li .list-value {
    grid-column: span 3;
    color: var(--font-gray-3);
}

.about-social {
    display: flex;
    align-items: center;
    /* background: var(--primary); */
    height: 75px;
    padding: 0 0 35px 40px;
    color: var(--font-gray-3);
}

.about-social .social-link {
    margin-right: 42px;
    color: var(--font-gray-3);

    transition: background 0.2s ease-in-out;
}
.about-social .social-link:hover {
    background: #fff;
    color: #000;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

/* .about-social i {
} */

@media screen and (max-width: 960px) {
    .about-content {
        flex-direction: column;
        padding: 30px 15px;
        /* align-items: center; */
    }
    .about-preword {
        width: 120px;
        margin-top: 24px;
    }

    .about-image {
        margin: 0 auto;
        /* width: 320px; */
        height: 420px;
        order: -1;
        margin-bottom: 20px;
    }

    .about-info {
        text-align: center;
        margin-right: 0 auto;
        padding: 0 42px;
    }

    .about-social {
        justify-content: center;
    }

    .about-list {
        width: 100%;
        text-align: left;
    }
    .about-list li {
        flex-direction: column;
    }
}
</style>