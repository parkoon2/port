<template>
    <div class="about__card">
        <div class="about__photo">
            <div class="about__photo--image"></div>
            <p class="about__photo--title" v-html="profile.title"></p>
            <p class="about__photo--subtitle">{{profile.subtitle}}</p>
            <hr />

            <div class="about__photo--desc">
                <ul class="photo__desc---list">
                    <li v-for="profile in profileToArray" :key="profile.title">
                        <div class="list-title">{{profile.title}}</div>
                        <div v-if="Array.isArray(profile.value)" class="list__grid">
                            <v-chip
                                label
                                outlined
                                :color="lightgrey"
                                v-for="(v, index) in profile.value"
                                :key="index"
                                class="list-value"
                            >{{v}}</v-chip>
                        </div>
                        <span v-else class="list-value">{{profile.value}}</span>
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
                    <!-- <div class="item__title">
                        <v-icon class="item__icon">mdi-account-clock</v-icon>요즘 관심있는 기술
                    </div>-->
                    <div class="item__desc">
                        <h3 class="desc__title">Trendy</h3>
                        <h4 class="desc__subtitle">frontend library & framework</h4>
                        <div class="desc__body">
                            <div class="desc__body--summary">트렌드에 뒤쳐지지 않는 개발자기 되기 위해 노력하고 있습니다.</div>최근에는 React, Vue와 같이 화면단을 구성하는 프레임워크에 관심이 있어 다양한 레퍼런스를 통해 공부중에 있습니다.
                            <br />React는 Next와 함께 실무에서 사용해본 적 있으며, Vue는 사이드 프로젝트를 통해 실무에 바로 적용할 수 있는 수준까지 키워놨습니다.
                        </div>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__desc">
                        <h3 class="desc__title">Career</h3>
                        <h4 class="desc__subtitle">life is like a role playing game</h4>
                        <div class="desc__body">
                            <div class="desc__body--summary">어떻게 하면 남들보다 앞서 나갈 수 있을까 고민하며 살고 있습니다.</div>보다 나은 개발 실력를 위해 버스와 지하철에서 자투리 시간을 내어 개발 youtube 채널, inflean, udemy 시청을, 스트레스 해소와 건강을 위해 퇴근 후에는 헬스, 테니스와 같은 운동을 하고 있습니다.
                        </div>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__desc">
                        <h3 class="desc__title">Shortcomings</h3>
                        <h4 class="desc__subtitle">remedy one's shortcomings</h4>
                        <div class="desc__body">
                            <div class="desc__body--summary">단점을 보완하기 위해 노력하고 있습니다.</div>이 전 회사에서 3년동안 script를 위주로 개발해 왔습니다. node로 백엔드를 구성하고, javascript로 퍼블리싱 받은 화면을 구성했습니다. 퍼블리셔 없이 혼자 웹페이지를 구성하는데 한계가 있었습니다. HTML과 CSS를 읽고 이해할 수는 있었지만, 스스로 화면 레이아웃을 구성하는데 어려움이 있었습니다. 이 점을 극복하고자, 다양한 웹페이지를 따라서 코딩해보며 퍼블리싱할 수 있는 능력을 키울 수 있었습니다.
                        </div>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__desc">
                        <h3 class="desc__title">Ideal</h3>
                        <h4 class="desc__subtitle">clean code</h4>
                        <div class="desc__body">
                            <div
                                class="desc__body--summary"
                            >이상적인 개발자는 우아하고 효울적인 코드를 작성하는 사람이라 생각합니다.</div>우아하고 아름다운 코드를 작성하는 개발자가 되기 위해, 아래 내용들을 항상 숙지하며 개발하고 있습니다.
                            <ol>
                                <li>한 가지를 잘 하는 코드를 작성하자</li>
                                <li>가독성이 좋은 코드를 작성하자</li>
                                <li>다른 사람이 고치기 쉬운 코드를 작성하자</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SocialLink from '@/components/shared/SocialLink'
import SectionDivider from '@/components/shared/SectionDivider'

import { profile } from '../../data'
export default {
    components: {
        SocialLink,
        SectionDivider
    },
    computed: {
        cardBg() {
            return this.$color['--card-bg']
        },
        primary() {
            return this.$color['--primary']
        },
        lightgrey() {
            return this.$color['--font-grey-3']
        },
        me() {
            return this.hoverOnMe ? hireMe : me
        },
        profileToArray() {
            let array = []
            for (let key in profile) {
                if (profile.hasOwnProperty(key)) {
                    if (key !== 'title' && key !== 'subtitle') {
                        array.push({
                            title: key,
                            value: profile[key]
                        })
                    }
                }
            }

            return array
        }
    },
    data() {
        return {
            hoverOnMe: false,
            profile: profile
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
    z-index: 2;
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
.about__photo {
    position: relative;
    padding-bottom: 70px;
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

.about__card .about__photo .about__photo--title >>> span {
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
.photo__desc---list .list__grid {
    display: flex;

    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min-content, 120px));
    grid-auto-flow: column; */
}

.photo__desc---list .list__grid span {
    margin-right: 4px;
    color: var(--font-grey-3) !important;
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
}

.about__photo .about__photo--social {
    background: var(--primary);
    width: 100%;
    padding: 17px;
    position: absolute;
    bottom: 0;
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
.about__info .info__categories .category__item .item__desc {
    font-size: 0.9rem;
}

.about__info
    .info__categories
    .category__item
    .item__desc
    .desc__body--summary {
    font-size: 1rem;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 7px;
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
    .about__photo .about__photo--social {
        padding: 7px;
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