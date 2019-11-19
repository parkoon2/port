<template>
    <div class="side-project__wrapper">
        <div class="owl-carousel owl-theme">
            <div
                data-aos="flip-up"
                class="side-project__item"
                v-for="p in sideProjects"
                :data-aos-delay="p.delay"
                :key="p.title"
            >
                <img :src="p.image" />

                <div class="item__info">
                    <div class="title__group">
                        <h1 class="info__title">{{ p.title }}</h1>
                        <div class="info__subtitle">{{ p.subtitle }}</div>
                    </div>

                    <div class="info__btns">
                        <!-- <div class="info__btn info__btn--more">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </div>-->
                        <div
                            class="info__btn info__btn--github"
                            @click="linkTo(p.git)"
                        >
                            <!-- <v-icon>mdi-github-circle</v-icon> -->
                            SOURCE
                        </div>
                        <div
                            class="info__btn info__btn--demo"
                            @click="linkTo(p.demo)"
                        >
                            <!-- <v-icon>mdi-eye</v-icon> -->
                            DEMO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { sideProjects } from '../../data'
import { openNewWindow } from '../../helper/util'
export default {
    data() {
        return {
            sideProjects: sideProjects
        }
    },
    methods: {
        linkTo(link) {
            if (!link) return alert('준비 중 입니다.')
            openNewWindow(link)
        }
    },
    mounted() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
            autoWidth: true,
            margin: 12,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        })
    }
}
</script>

<style scoped>
.side-project__wrapper {
    width: 100%;

    /* background-color: red; */
}

.side-project__item {
    position: relative;
    cursor: pointer;
    width: 320px;
    height: 200px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.side-project__item img {
    width: 100%;
    height: 100%;
}

.side-project__item::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: rgba(70, 71, 71, 0.76);
    opacity: 0;
    transition: 0.3s;
    z-index: 0;
}

.side-project__item:hover::after {
    opacity: 1;
}

.side-project__item .item__info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    color: var(--black);
    z-index: 9999;
    width: 100%;
}

.side-project__item .item__info .title__group {
    text-align: center;
    transform: translateY(-62px);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    width: 100%;
}

.side-project__item:hover .item__info .title__group {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

.side-project__item:hover .item__info .info__btns {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
}

.side-project__item .item__info .info__title {
    margin-bottom: -8px;
    width: 100%;
    font-size: 24px;
    color: var(--font-grey-1);
}
.side-project__item .item__info .info__subtitle {
    color: var(--font-grey-2);
}
.side-project__item .item__info .info__btns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 17px;
    transform: translateY(62px);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}
.side-project__item .item__info .info__btns .info__btn {
    margin-top: 62px;
    border: 1px solid var(--primary);
    padding: 9px 12px;
    transition: 0.3s;
    text-align: center;
    color: var(--primary);
}
/* .side-project__item .item__info .info__btns .info__btn.info__btn--demo {
    color: var(--font-grey-1);
    background: var(--primary);
}
.side-project__item .item__info .info__btns .info__btn.info__btn--demo:hover {
    color: var(--primary);
    background: transparent;
} */
.side-project__item .item__info .info__btns .info__btn:hover {
    color: var(--font-grey-1);
    background: var(--primary);
}
.side-project__item .item__info .info__btns .info__btn:hover i {
    color: var(--font-grey-1);
}

.side-project__item .item__info .info__btns i {
    color: var(--primary);
}
</style>
