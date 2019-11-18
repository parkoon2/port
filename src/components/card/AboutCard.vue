<template>
    <div class="about__card">
        <div class="about__photo" data-aos="fade-right">
            <div class="about__photo--image"></div>

            <!-- <p class="about__photo--title" v-html="profile.title"></p> -->
            <div class="about__photo--title">
                I'm
                <span class="about__title--first">P</span>
                <rubber-band-text text="a" size="37"></rubber-band-text>
                <rubber-band-text text="r" size="37"></rubber-band-text>
                <rubber-band-text text="k" size="37" mr="10"></rubber-band-text>
                <rubber-band-text text="J" size="37"></rubber-band-text>
                <rubber-band-text text="o" size="37"></rubber-band-text>
                <rubber-band-text text="n" size="37"></rubber-band-text>
                <rubber-band-text text="g" size="37" mr="10"></rubber-band-text>
                <rubber-band-text text="H" size="37"></rubber-band-text>
                <rubber-band-text text="y" size="37"></rubber-band-text>
                <rubber-band-text text="e" size="37"></rubber-band-text>
                <rubber-band-text text="o" size="37"></rubber-band-text>
                <rubber-band-text text="k" size="37"></rubber-band-text>
            </div>

            <p class="about__photo--subtitle">{{ profile.subtitle }}</p>
            <hr />

            <div class="about__photo--desc">
                <ul class="photo__desc---list">
                    <li v-for="profile in profileToArray" :key="profile.title">
                        <div class="list-title">{{ profile.title }}</div>
                        <div v-if="Array.isArray(profile.value)" class="list__grid">
                            <v-chip
                                label
                                outlined
                                :color="lightgrey"
                                v-for="(v, index) in profile.value"
                                :key="index"
                                class="list-value"
                            >{{ v }}</v-chip>
                        </div>
                        <span v-else class="list-value">
                            {{
                            profile.value
                            }}
                        </span>
                    </li>
                </ul>
            </div>

            <div class="about__photo--social">
                <social-link color="black"></social-link>
            </div>
        </div>
        <div class="about__info" data-aos="fade-left" data-aos-easing="ease-in-sine">
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
                            <div class="desc__body--summary">트렌트에 뒤처지지 않는 개발자가 되기 위해 노력하고 있습니다.</div>
                            <p>
                                최근에는 React, Vue와 같이 프론트엔드 프레임워크에 관심을 두고 다양한 강의 및 사이드 프로젝트를 통해 학습하고 있습니다.
                                React는 다수의 관리자 페이지, KT 프로젝트, LG 프로젝트 등 실무에서 사용했었습니다. Vue는 다양한 강의와 사이드 프로젝트를 통해 실무에 바로 적용할 수 있는 수준까지 키워놨습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__desc">
                        <h3 class="desc__title">Professional</h3>
                        <h4 class="desc__subtitle">life is like a role playing game</h4>
                        <div class="desc__body">
                            <div class="desc__body--summary">어떻게 하면 남들보다 앞서 나갈 수 있을까 고민하며 살고 있습니다.</div>

                            <p>
                                보다 나은 개발실력을 위해 버스나 지하철에서 자투리 시간을 내어 다양한 강의를 통해 기술을 학습 및 복습을 하고 있습니다.
                                피치 못할 야근에도 쓰러지지 않는 강인한 체력을 위해 퇴근 후에는 헬스 & 테니스를 병행하고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__desc">
                        <h3 class="desc__title">Fundamental</h3>
                        <h4 class="desc__subtitle">for a fundamental skills</h4>
                        <div class="desc__body">
                            <div
                                class="desc__body--summary"
                            >빠르게 변하는 트렌드를 두려워하지 않기 위해 기본기에 충실히 하고 있습니다.</div>
                            <p>
                                새로운 기술은 잘 익혀서 유통기한 내에 잘 써먹고 잊으면 된다고 생각합니다. 그래야 트렌디한 웹 세상에서 스트레스 없이 잘 살아남을 수 있다고 생각합니다.
                                그러기 위해 클라이언트 측면 라이브러리에 근간이 되는 HTML, CSS, Javascript를 항상 갈고 닦고 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__desc">
                        <h3 class="desc__title">Clean Code</h3>
                        <h4 class="desc__subtitle">no annotation yes naming</h4>
                        <div class="desc__body">
                            <div
                                class="desc__body--summary"
                            >주석 없이도 다른 사람들이 이해할 수 있는 코드를 작성하려 노력하고 있습니다.</div>
                            <p>
                                현업에서 다양한 사람들과 업무를 하면서 코드를 작성한 본인만 이해할 수 있는 난해한 변수명 및 함수명, 100줄이 넘어버리는 함수 등을 보며 스트레스를 받은 적이 한두 번이 아니었습니다.
                                다른 동료들에게 위와 같은 스트레스를 주지 않기 위해 네이밍, 리팩토링에 사용되는 시간을 아까워하지 않습니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="category__item">
                    <div class="item__desc">
                        <h3 class="desc__title">Productivity</h3>
                        <h4 class="desc__subtitle">a high value on punctuality</h4>
                        <div class="desc__body">
                            <div class="desc__body--summary">생산성 있는 개발자가 되기 위해 노력하고 있습니다.</div>
                            <p>
                                스타트업에 근무하는 동안 안정적이고 완성도 높은 코드를 짜는 개발자도 중요하지만, 생산성 높은 개발자도 못지않게 중요하다는 것을 알았습니다.
                                생산성을 높이기 위해 여유 시간에 코딩하는 것이 중요하다고 생각했기 때문에, 점심 식사 이후 남는 자투리 시간에도 코딩했습니다.
                                그리고, 팀장으로 있는 동안 의미 없이 길어지는 회의를 피하고자, 집중력이 저하되는 점심시간 30분 전에 팀원들과 회의 시간을 가졌습니다.
                            </p>
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
import RubberBandText from '@/components/RubberBandText'
import { profile } from '../../data'
export default {
    components: {
        SocialLink,
        SectionDivider,
        RubberBandText
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

.about__card .about__photo .about__photo--title .about__title--first {
    position: relative;
    font-weight: bold;
    font-size: 3rem;
    color: #000;
    -webkit-text-stroke: 1px #000;

    /* color: var(--primary); */
}

.about__card .about__photo .about__photo--title .about__title--first::before {
    position: absolute;
    content: 'P';
    top: 0;
    left: 0;
    color: var(--primary);
    z-index: 1;
    transform: translate(3px, -11px);
    -webkit-text-stroke: 0px;
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
    .about__info {
        padding: 7px;
    }
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
