<template>
    <div class="side-project__wrapper">
        <div class="owl-carousel owl-theme">
            <div class="side-project__item">
                <div class="item__info">
                    <div class="title__group">
                        <h1 class="info__title">Lorem</h1>
                        <div class="info__subtitle">Using react and redux</div>
                    </div>

                    <div class="info__btns">
                        <div class="info__btn info__btn--more">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </div>
                        <div class="info__btn info__btn--github">
                            <v-icon>mdi-github-circle</v-icon>
                        </div>
                        <div class="info__btn intfo__btn--demo">
                            <v-icon>mdi-eye</v-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="side-project__item">
                <div class="item__info">
                    <div class="title__group">
                        <h1 class="info__title">Lorem</h1>
                        <div class="info__subtitle">Using react and redux</div>
                    </div>

                    <div class="info__btns">
                        <div class="info__btn info__btn--more">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </div>
                        <div class="info__btn info__btn--github">
                            <v-icon>mdi-github-circle</v-icon>
                        </div>
                        <div class="info__btn intfo__btn--demo">
                            <v-icon>mdi-eye</v-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="side-project__item">
                <div class="item__info">
                    <div class="title__group">
                        <h1 class="info__title">Lorem</h1>
                        <div class="info__subtitle">Using react and redux</div>
                    </div>

                    <div class="info__btns">
                        <div class="info__btn info__btn--more">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </div>
                        <div class="info__btn info__btn--github">
                            <v-icon>mdi-github-circle</v-icon>
                        </div>
                        <div class="info__btn intfo__btn--demo">
                            <v-icon>mdi-eye</v-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="side-project__item">
                <div class="item__info">
                    <div class="title__group">
                        <h1 class="info__title">Lorem</h1>
                        <div class="info__subtitle">Using react and redux</div>
                    </div>

                    <div class="info__btns">
                        <div class="info__btn info__btn--more">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </div>
                        <div class="info__btn info__btn--github">
                            <v-icon>mdi-github-circle</v-icon>
                        </div>
                        <div class="info__btn intfo__btn--demo">
                            <v-icon>mdi-eye</v-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="side-project__item">
                <div class="item__info">
                    <div class="title__group">
                        <h1 class="info__title">Lorem</h1>
                        <div class="info__subtitle">Using react and redux</div>
                    </div>

                    <div class="info__btns">
                        <div class="info__btn info__btn--more">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </div>
                        <div class="info__btn info__btn--github">
                            <v-icon>mdi-github-circle</v-icon>
                        </div>
                        <div class="info__btn intfo__btn--demo">
                            <v-icon>mdi-eye</v-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="side-project__item">
                <div class="item__info">
                    <div class="title__group">
                        <h1 class="info__title">Lorem</h1>
                        <div class="info__subtitle">Using react and redux</div>
                    </div>

                    <div class="info__btns">
                        <div class="info__btn info__btn--more">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </div>
                        <div class="info__btn info__btn--github">
                            <v-icon>mdi-github-circle</v-icon>
                        </div>
                        <div class="info__btn intfo__btn--demo">
                            <v-icon>mdi-eye</v-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="side-project__item">
                <div class="item__info">
                    <div class="title__group">
                        <h1 class="info__title">Lorem</h1>
                        <div class="info__subtitle">Using react and redux</div>
                    </div>

                    <div class="info__btns">
                        <div class="info__btn info__btn--more">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </div>
                        <div class="info__btn info__btn--github">
                            <v-icon>mdi-github-circle</v-icon>
                        </div>
                        <div class="info__btn intfo__btn--demo">
                            <v-icon>mdi-eye</v-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="side-project__item">
                <div class="item__info">
                    <div class="title__group">
                        <h1 class="info__title">Lorem</h1>
                        <div class="info__subtitle">Using react and redux</div>
                    </div>

                    <div class="info__btns">
                        <div class="info__btn info__btn--more">
                            <v-icon>mdi-dots-horizontal</v-icon>
                        </div>
                        <div class="info__btn info__btn--github">
                            <v-icon>mdi-github-circle</v-icon>
                        </div>
                        <div class="info__btn intfo__btn--demo">
                            <v-icon>mdi-eye</v-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            // autoplay: true,
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
    width: 320px;
    height: 250px;
    background-image: url('https://i.pinimg.com/564x/cf/96/e7/cf96e735976d22e8aef92000ec3f06b2.jpg');
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    /* width: 320px; */
    /* width: 320px; */
    /* height: 200px; */
}

.side-project__item::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: var(--font-gray-1);
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
}

.side-project__item .item__info .title__group {
    text-align: center;
    transform: translateY(-62px);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
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
}
.side-project__item .item__info .info__btns {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 17px;
    transform: translateY(62px);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}
.side-project__item .item__info .info__btns .info__btn {
    margin-top: 62px;
    border: 1px solid var(--primary);
    padding: 9px;
    transition: 0.3s;
}

.side-project__item .item__info .info__btns .info__btn:hover {
    background: var(--primary);
}
.side-project__item .item__info .info__btns .info__btn:hover i {
    color: var(--font-gray-1);
}

.side-project__item .item__info .info__btns i {
    color: var(--primary);
}
</style>
