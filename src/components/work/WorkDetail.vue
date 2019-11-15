<template>
    <div class="detail-wrapper">
        <div class="detail-inner">
            <div class="detail__card">
                <div class="card__actions">
                    <div @click="hideDetail" class="card__action">
                        <v-icon dark>mdi-close</v-icon>
                    </div>
                    <div @click="next" class="card__action">
                        <v-icon dark>mdi-arrow-right</v-icon>
                    </div>
                    <div @click="prev" class="card__action">
                        <v-icon dark>mdi-arrow-left</v-icon>
                    </div>
                </div>

                <img
                    :src="images[currentImageIndex]"
                    :class="[fade ? 'fade-in' : 'fade-out']"
                />

                <div class="card__content">
                    <div class="content__header">
                        <h1>{{ item.title }}</h1>

                        <p class="header__subtitle">{{ item.subtitle }}</p>
                        <v-divider></v-divider>
                    </div>

                    <div class="content__body">
                        <div class="body__tech">
                            <h2 class="body__title dot">Technical sheet</h2>
                            <ul class="tech__list">
                                <li v-for="tech in item.techs" :key="tech.id">
                                    {{ tech }}
                                </li>
                            </ul>
                        </div>

                        <div class="body__role">
                            <h2 class="body__title">Team role</h2>
                            <p>{{ item.role }}</p>
                        </div>
                        <div class="body__period">
                            <h2 class="body__title">Project period</h2>
                            <p>{{ item.period }}</p>
                        </div>

                        <div class="body__desc">
                            <h2 class="body__title">About this project</h2>

                            <p>
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let fadeTimer = null
export default {
    data: () => ({
        loading: false,
        currentImageIndex: 0,
        fade: false,
        // images: item.images
        images: [
            'https://i.pinimg.com/564x/6d/87/ff/6d87ff0a0188b73fcff884b8cc2d2a1b.jpg',
            'https://i.pinimg.com/564x/18/3b/b7/183bb7a3a3b059f62a91897a92c50920.jpg',
            'https://i.pinimg.com/564x/59/db/cd/59dbcd30a7a51bd6b99d19c3335f6256.jpg'
        ]
    }),
    props: ['item'],
    computed: {
        transition() {}
    },
    methods: {
        hideDetail() {
            this.$emit('hideDetail')
        },
        next() {
            if (this.currentImageIndex === this.images.length - 1) return
            this.fade = true
            if (!fadeTimer) {
                fadeTimer = setTimeout(() => {
                    this.fade = false
                    this.currentImageIndex++
                    fadeTimer = null
                }, 300)
            }
        },
        prev() {
            if (this.currentImageIndex === 0) return
            this.fade = true
            if (!fadeTimer) {
                fadeTimer = setTimeout(() => {
                    this.fade = false
                    this.currentImageIndex--
                    fadeTimer = null
                }, 300)
            }
        }
    },

    mounted() {
        document.documentElement.style.overflow = 'hidden' // firefox, chrome
        document.body.scroll = 'no' // ie only

        this.images = this.item.images
        console.log(this.item)
    },
    beforeDestroy() {
        document.documentElement.style.overflow = 'auto' // firefox, chrome
        document.body.scroll = 'yes' // ie only
    }
}
</script>

<style scoped>
.detail-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 999;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.45);
    overflow-x: hidden;
}

.detail-inner {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding: 42px;

    /* padding: 40px 0; */
}

.detail__card {
    z-index: 9999;
    background: var(--font-white);
    color: var(--font-black);
    width: 700px;
    height: 100%;
    margin: 0 auto;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    position: relative;
}

.detail__card p {
    color: var(--font-grey-3);
}
.detail__card img {
    width: 100%;
    height: 50%;
    user-select: none;
    transition: 0.3s linear;
}

.detail__card img.fade-in {
    visibility: hidden;
    opacity: 0.2;
}

.detail__card img.fade-out {
    visibility: visible;
    opacity: 1;
}
.card__actions {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -90px;
    top: 0px;
}
.card__content {
    padding: 12px 4px 12px 30px;
    height: 48%;
    overflow: auto;
}

.card__content::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    background: var(--font-white);
    border-radius: 7px;
}

.card__content::-webkit-scrollbar {
    width: 7px;
    border-radius: 7px;
}

.card__content::-webkit-scrollbar-thumb {
    background-color: var(--font-grey-1);
    border-radius: 7px;
}

.card__content .content__header {
    margin-bottom: 12px;
}

.card__content .content__header .header__title {
}
.card__content .content__header .header__subtitle {
    font-size: 19px;
    margin-bottom: 10px;
    color: var(--font-grey-3);
}

.card__content .content__body {
    font-size: 0.9rem;
    /* overflow-y: auto;
    overflow-x: hidden; */
    /* overflow: auto;
    height: 307px; */
    height: calc(100% - 100px);

    padding-right: 30px;
}

.card__content .content__body .body__title {
    display: inline-block;
    position: relative;
    margin-bottom: 7px;
}

.card__content .content__body .body__title::after {
    content: '';
    width: 5px;
    height: 5px;
    background: var(--font-black);
    top: 7px;
    right: -7px;
    border-radius: 5px;
    position: absolute;
}

.card__content .content__body .body__tech .tech__list {
    list-style: none;
    padding: 0;
    margin-bottom: 12px;
    display: grid;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-column-gap: 6px;
    grid-row-gap: 6px;
    text-align: center;
}

.card__content .content__body .body__tech .tech__list li {
    position: relative;
    border: 1px solid var(--font-grey-3);
    padding: 0 7px;
    border-radius: 7px;
    cursor: pointer;
    color: var(--font-grey-3);
}

.card__content .content__body .body__tech .tech__list li:hover {
    color: var(--font-grey-2);
}

.card__content .content__body .body__tech .tech__list li:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0%;
    height: 50%;
    width: 0%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}
.card__content .content__body .body__tech .tech__list li:hover::after {
    opacity: 1;
    visibility: visible;
    width: 100%;
}
.card__content .content__body .body__tech .tech__list li:hover::before {
    opacity: 1;
    visibility: visible;
    width: 100%;
}
.card__content .content__body .body__tech .tech__list li:before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0%;
    height: 50%;
    width: 0%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    transition-delay: 0.1s;
}
/* .card__content .content__body .body__tech .tech__list li {

    margin-bottom: 7px;
} */

.card__actions .card__action {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 7px;
    border: 1px solid var(--primary);
    width: 72px;
    margin-bottom: 2px;
    cursor: pointer;
    transition: 0.3s;
}

.card__actions .card__action:hover {
    background: var(--primary);
}
.card__actions .card__action:first-child {
    margin-bottom: 12px;
}
.card__actions .card__action:hover i {
    color: var(--font-white);
}
.card__actions .card__action i {
    color: var(--primary);
}

.card__actions .card__action:hover {
    background: var(--primary);
}
.card__actions .card__action:first-child {
    margin-bottom: 12px;
}
.card__actions .card__action:hover i {
    color: var(--font-white);
}
.card__actions .card__action i {
    color: var(--primary);
}

@media screen and (max-width: 960px) {
    .card__actions {
        /* right: 0; */
    }
    .detail__card {
        width: 520px;
        /* z-index: 9999;
    background: var(--font-white);
    color: var(--font-black);
    width: 700px;
    height: 100%;
    margin: 0 auto;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    position: relative; */
    }
}

@media screen and (max-width: 600px) {
    .card__actions {
        right: -62px;
        /* top: 53%;
        flex-direction: row-reverse;
        align-items: flex-start; */
    }
    .detail-inner {
        padding-left: 0;
    }

    .card__content {
        padding-left: 7px;
        padding-top: 0;
        text-align: center;
    }

    .content__body {
        padding-right: 0 !important;
    }

    .content__header h1,
    .content__body .body__title,
    .card__content .content__header .header__subtitle {
        font-size: 100%;
    }

    .detail__card img {
        height: 40%;
    }

    .card__content {
        height: 58%;
        overflow: auto;
    }

    .card__actions .card__action {
        width: 42px;
    }
    .detail__card {
        width: 80%;
    }

    .card__content .content__body .body__desc p {
        font-size: 0.8rem;
    }
}
</style>
