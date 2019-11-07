<template>
    <div class="about__card" :color="cardBg">
        <div class="about__content">
            <div class="about__info">
                <div class="about__info--preword">PASSION</div>
                <p class="about__info--title">
                    I'm
                    <span>Jong Hyeok Park</span>
                </p>
                <p class="about__info--subtitle">Frontend & Backend Developer</p>

                <v-divider :color="lightGray"></v-divider>

                <ul class="about__info--list">
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
            <div class="about__photo">
                <!-- <v-img height="350" width="295" :src="me"></v-img> -->
            </div>
        </div>
        <div class="about-social">
            <!-- <v-btn icon class="social-link" v-for="social in socials" :key="social.title">
                <v-icon>{{social.icon}}</v-icon>
            </v-btn>-->

            <social-link></social-link>
        </div>
    </div>
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
.about__card {
    width: 100%;
    z-index: 1;
    background: var(--card-bg);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.about__card .about__content {
    color: var(--font-gray-1);
    display: flex;
    padding: 57px 50px 12px 50px;
}

.about__card .about__content .about__photo {
    flex: 2;
    width: 100%;
    background-image: url('../../assets/me.jpg');
    background-size: cover;
    background-position: center center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.about__card .about__content .about__info {
    flex: 3;
    margin-right: 32px;
    /* flex: 1; */
    /* margin-left: 37px; */
}

.about__info .about__info--title {
    font-size: 37px;
    margin: 0;
}

.about__info .about__info--title span {
    font-weight: bold;
}

.about__info--preword {
    position: relative;
    display: inline-block;
    background: var(--primary);
    padding: 3px 12px;
    font-weight: bold;
    margin-bottom: 24px;
}

.about__info--preword::after {
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

.about__info--list {
    list-style: none;
    margin-top: 27px;
    padding-left: 0;
}

.about__info--list li {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* display: flex;
    margin-bottom: 13px; */
    margin-bottom: 7px;
}
.about__info--list li .list-title {
    width: 120px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
}

.about__info--list li .list-value {
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
    .about__content {
        flex-direction: column;
        padding: 30px 15px;
        /* align-items: center; */
    }
    .about__info--preword {
        width: 120px;
        margin-top: 24px;
    }

    .about__photo {
        margin: 0 auto;
        /* width: 320px; */
        height: 350px;
        order: -1;
        flex: none !important;
        margin-bottom: 20px;
    }

    .about__info {
        flex: none !important;
        text-align: center;
        margin-right: 0 auto;
        padding: 0 42px;
    }

    .about-social {
        justify-content: center;
    }

    .about__info--list {
        width: 100%;
        text-align: left;
    }
    .about__info--list li {
        flex-direction: column;
    }
}

@media screen and (max-width: 600px) {
    .about__content {
        padding: 0 !important;
    }
    .about__photo {
        display: none !important;
    }

    .about__card .about__content .about__info {
        margin-right: 0px;
        padding: 12px;
        /* flex: 1; */
        /* margin-left: 37px; */
    }
    .about__info--list li {
        grid-template-columns: 1fr;
        text-align: center;
        margin-bottom: 17px;
    }
    .about__info--list li .list-title {
        width: 100%;
    }

    .about__info .about__info--title {
        font-size: 32px;
    }
}
</style>