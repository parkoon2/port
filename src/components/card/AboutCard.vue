<template>
    <div class="about__card">
        <div class="about__photo">
            <div class="about__photo--image"></div>
            <!-- <div class="about__photo--preword">PASSION</div> -->
            <p class="about__photo--title">
                I'm
                <span>Jong Hyeok Park</span>
            </p>
            <p class="about__photo--subtitle">Frontend & Backend Developer</p>
            <hr />

            <div class="about__photo--desc">
                <ul class="photo__desc---list">
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

            <div class="about__photo--social">
                <social-link color="black"></social-link>
            </div>
        </div>
        <div class="about__info">
            <h1 class="info__title">ABOUT ME</h1>

            <div class="info__categories">
                <div class="category__item">
                    <div class="item__title">
                        <v-icon class="item__icon">mdi-account-clock</v-icon>Lorem ipsum
                    </div>
                    <div class="item__desc">
                        <h3 class="desc__title">Lorem</h3>
                        <h4 class="desc__subtitle">Frontend and backend!</h4>
                        <p
                            class="desc__body"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel ex fuga ad necessitatibus natus vitae, eveniet voluptates culpa sed porro quasi maxime eum quas, quae mollitia blanditiis quo fugit!</p>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__title">
                        <v-icon class="item__icon">mdi-account-clock</v-icon>Lorem ipsum
                    </div>
                    <div class="item__desc">
                        <h3 class="desc__title">Lorem</h3>
                        <h4 class="desc__subtitle">Frontend and backend!</h4>
                        <p
                            class="desc__body"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel ex fuga ad necessitatibus natus vitae, eveniet voluptates culpa sed porro quasi maxime eum quas, quae mollitia blanditiis quo fugit!</p>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__title">
                        <v-icon class="item__icon">mdi-account-clock</v-icon>Lorem ipsum
                    </div>
                    <div class="item__desc">
                        <h3 class="desc__title">Lorem</h3>
                        <h4 class="desc__subtitle">Frontend and backend!</h4>
                        <p
                            class="desc__body"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel ex fuga ad necessitatibus natus vitae, eveniet voluptates culpa sed porro quasi maxime eum quas, quae mollitia blanditiis quo fugit!</p>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__title">
                        <v-icon class="item__icon">mdi-account-clock</v-icon>Lorem ipsum
                    </div>
                    <div class="item__desc">
                        <h3 class="desc__title">Lorem</h3>
                        <h4 class="desc__subtitle">Frontend and backend!</h4>
                        <p
                            class="desc__body"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel ex fuga ad necessitatibus natus vitae, eveniet voluptates culpa sed porro quasi maxime eum quas, quae mollitia blanditiis quo fugit!</p>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__title">
                        <v-icon class="item__icon">mdi-account-clock</v-icon>Lorem ipsum
                    </div>
                    <div class="item__desc">
                        <h3 class="desc__title">Lorem</h3>
                        <h4 class="desc__subtitle">Frontend and backend!</h4>
                        <p
                            class="desc__body"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel ex fuga ad necessitatibus natus vitae, eveniet voluptates culpa sed porro quasi maxime eum quas, quae mollitia blanditiis quo fugit!</p>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__title">
                        <v-icon class="item__icon">mdi-account-clock</v-icon>Lorem ipsum
                    </div>
                    <div class="item__desc">
                        <h3 class="desc__title">Lorem</h3>
                        <h4 class="desc__subtitle">Frontend and backend!</h4>
                        <p
                            class="desc__body"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel ex fuga ad necessitatibus natus vitae, eveniet voluptates culpa sed porro quasi maxime eum quas, quae mollitia blanditiis quo fugit!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <v-card class="about__card" :color="cardBg">
        <div class="about__content">
            <div class="about__info">
                <div class="about__info--preword">PASSION</div>
                <p class="about__info--title">
                    I'm
                    <span>Jong Hyeok Park</span>
                </p>
                <p class="about__info--subtitle">Frontend & Backend Developer</p>

                <v-divider :color="lightgrey"></v-divider>

                <ul class="photo__desc---list">
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
            </div>
        </div>
        <div class="about-social">

            <social-link></social-link>
        </div>
    </v-card>-->
</template>
<script>
import SocialLink from '@/components/shared/SocialLink'
import SectionDivider from '@/components/shared/SectionDivider'
export default {
    components: {
        SocialLink,
        SectionDivider
    },
    computed: {
        cardBg() {
            return this.$color['--card-bg']
        },
        lightgrey() {
            return this.$color['--font-grey-3']
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
    z-index: 200;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;

    color: var(--font-grey-2);
}

.about__card .about__photo {
    background: var(--card-bg);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 42px;
    /* padding: 42px 32px; */
}

.about__photo hr {
    width: 62%;
    margin-bottom: 24px;
}

.about__card .about__photo .about__photo--image {
    width: 200px;
    height: 200px;
    background-image: url('../../assets/me.jpg');
    background-size: 170%;
    background-position: -130px -70px;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-bottom: 24px;
}
.about__card .about__photo .about__photo--title {
    font-size: 37px;
    margin: 0;
}

.about__card .about__photo .about__photo--title span {
    font-weight: bold;
    color: var(--primary);
}
.about__card .about__photo .about__photo--preword {
    position: relative;
    display: inline-block;
    background: var(--primary);
    padding: 3px 12px;
    font-weight: bold;
    margin-top: 24px;
    margin-right: 200px;
    color: #000;
}

.about__card .about__photo .about__photo--preword::after {
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
    align-self: flex-start;
}

.photo__desc---list {
    list-style: none;
    padding-left: 0;
}

.photo__desc---list li {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* display: flex;
    margin-bottom: 13px; */
    margin-bottom: 7px;
    text-align: left;
}
.photo__desc---list li .list-title {
    width: 120px;
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
}

.photo__desc---list li .list-value {
    grid-column: span 3;
    color: var(--font-grey-3);
}

.about__photo .about__photo--subtitle {
}
.about__photo .about__photo--desc {
    width: 77%;
    text-align: center;
    margin-bottom: 24px;
}

.about__photo .about__photo--social {
    background: var(--primary);
    width: 100%;
    padding: 17px;
}

/* ------- about info -------- */
.about__info {
    background: var(--card-bg);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    height: 660px;
    overflow: auto;
    padding: 42px;
}

.about__info::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    background: var(--card-bg);
    border-radius: 7px;
}

.about__info::-webkit-scrollbar {
    width: 7px;
    border-radius: 7px;
}

.about__info::-webkit-scrollbar-thumb {
    background-color: var(--font-grey-1);
    border-radius: 7px;
}

.about__info .info__title {
    border-bottom: 2px solid grey;
    color: var(--font-grey-1);
    margin-bottom: 32px;
}

.about__info .info__categories {
    display: grid;
    grid-template-rows: 1fr;
    grid-row-gap: 24px;
}

.about__info .info__categories .category__item .item__title {
    font-size: 24px;
    font-weight: bold;
    padding-left: 12px;
    border-left: 4px solid var(--primary);
    color: var(--primary);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
}

.about__info .info__categories .category__item .item__title i {
    color: var(--primary);
    margin-right: 12px;
}

.about__info .info__categories .category__item .item__desc {
    position: relative;
    border: 1px solid var(--font-grey-2);
    padding: 14px;
}

.about__info .info__categories .category__item .item__desc::after {
    content: ' ';
    position: absolute;
    /* z-index: -1; */
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border: 1px solid var(--font-grey-2);
}

.about__info .info__categories .category__item .item__desc .desc__title {
    font-weight: bold;
    font-size: 24px;
    color: var(--font-grey-1);
}
.about__info .info__categories .category__item .item__desc .desc__subtitle {
    border-bottom: 1px solid var(--font-grey-3);
    padding-bottom: 4px;
    margin-bottom: 12px;
    font-weight: normal;
}

@media screen and (max-width: 960px) {
    .about__card {
        grid-template-columns: 1fr;
    }

    .about__card .about__info {
        height: 520px;
    }
}
@media screen and (max-width: 600px) {
    .about__card .about__photo .about__photo--title {
        font-size: 27px;
    }

    .about__card .about__info {
        height: 100%;
        overflow: hidden;
    }

    .about__card .about__photo .about__photo--image {
        display: none;
    }
}
</style>