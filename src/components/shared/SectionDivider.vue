<template>
    <div class="devider__wrapper">
        <div class="divider" data-aos="fade-right"></div>

        <v-icon data-aos="fade-right" data-aos-delay="100">mdi-rhombus</v-icon>
        <v-icon data-aos="fade-right" data-aos-delay="200">mdi-rhombus</v-icon>
        <!-- <div class="divider__icon" data-aos="fade-right">
        </div>
        <div class="divider__icon"></div> -->
        <div class="divider" data-aos="fade-right" data-aos-delay="300"></div>
    </div>
</template>
<style scoped>
.devider__wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 72px;
}
.devider__wrapper .divider {
    width: 32px;
    height: 1px;
    background: var(--font-grey-3);
    /* margin: 72px 0; */
}

.devider__wrapper i {
    color: var(--font-grey-3);
    font-size: 0.9rem;
    margin: 0 7px;
}

.devider__wrapper i:nth-child(2) {
    margin-right: 0px;
}

.devider__wrapper .divider__icon {
    margin: 0 7px;
    /* width: 8px;
    height: 8px;
    background: var(--font-grey-3);
    transform: rotate(45deg); */
}

.devider__wrapper .divider__icon:nth-child(2) {
    margin-right: 0px;
}
</style>
