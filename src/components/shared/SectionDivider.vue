<template>
    <div class="devider__wrapper">
        <div class="divider"></div>
        <span class="divider__icon"></span>
        <span class="divider__icon"></span>
        <div class="divider"></div>
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

.devider__wrapper .divider__icon {
    margin: 0 7px;
    width: 8px;
    height: 8px;
    background: var(--font-grey-3);
    transform: rotate(45deg);
}

.devider__wrapper .divider__icon:nth-child(2) {
    margin-right: 0px;
}
</style>