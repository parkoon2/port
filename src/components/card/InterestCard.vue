<template>
    <div class="interest__card" data-aos="fade-right">
        <div class="interest__desctiption">
            <vue-typer
                :pre-type-delay="70"
                :type-delay="100"
                text="테니스를 사랑하는 프론트&백엔드 개발자입니다. 
            최근에는 리액트, 뷰와 같은 UI 프레임워크에 관심을 갖고 공부하고 있습니다. 
            퇴근 후 그리고 주말에는 테니스를 즐겨합니다."
            ></vue-typer>
        </div>

        <div class="interest__items">
            <div class="item__icon" data-aos="fade-right" data-aos-delay="100">
                <v-icon>mdi-tennis</v-icon>
                <div class="icon__desc">TENNIS</div>
            </div>
            <div class="item__icon" data-aos="fade-right" data-aos-delay="150">
                <v-icon>mdi-language-css3</v-icon>
                <div class="icon__desc">HTML5</div>
            </div>
            <div class="item__icon" data-aos="fade-right" data-aos-delay="200">
                <v-icon>mdi-language-html5</v-icon>
                <div class="icon__desc">CSS</div>
            </div>
            <div class="item__icon" data-aos="fade-right" data-aos-delay="250">
                <v-icon>mdi-nodejs</v-icon>
                <div class="icon__desc">NODE</div>
            </div>
            <div class="item__icon" data-aos="fade-right" data-aos-delay="300">
                <v-icon>mdi-vuejs</v-icon>
                <div class="icon__desc">VUE</div>
            </div>
            <div class="item__icon" data-aos="fade-right" data-aos-delay="350">
                <v-icon>mdi-react</v-icon>
                <div class="icon__desc">REACT</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {}
</script>

<style scoped>
.interest__card {
    background: var(--card-bg);
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 50px;
}

.interest__card .interest__desctiption {
    width: 70%;
    color: var(--font-grey-1);
    text-align: center;
    margin-bottom: 32px;
    height: 50%;
}

.interest__card .interest__items {
    display: grid;
    grid-template-columns: 74px;
    grid-auto-columns: 74px;
    grid-auto-flow: column;
    grid-gap: 32px;
}

.interest__card .interest__items .item__icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 74px;
    height: 74px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
}

.interest__card .interest__items .item__icon .icon__desc {
    color: var(--font-grey-1);
    padding: 3px 12px;
    background: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    border-radius: 3px;
    position: absolute;
    bottom: -27px;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
}
.interest__card .interest__items .item__icon:hover .icon__desc {
    bottom: -37px;

    visibility: visible;
    opacity: 1;
}

.interest__card .interest__items .item__icon .icon__desc::before {
    position: absolute;
    content: '';
    border-right: solid 5px transparent;
    border-left: solid 5px transparent;
    border-bottom: solid 9px rgba(0, 0, 0, 0.6);
    top: -9px;
    left: 50%;
}
.interest__card .interest__items .item__icon i {
    color: var(--primary);
    font-size: 32px !important;
}

@media screen and (max-width: 960px) {
    .interest__card .interest__items {
        grid-template-columns: repeat(3, 74px);
        grid-auto-flow: row;
        grid-row-gap: 12px;
        grid-column-gap: 7px;
    }
}

@media screen and (max-width: 600px) {
    .interest__card {
        padding: 24px 12px 24px 12px;
    }
    .interest__card .interest__desctiption {
        width: 100%;
    }
}
</style>
