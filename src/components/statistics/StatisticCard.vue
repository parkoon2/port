<template>
    <div class="statistic__card">
        <div class="statistic__info">
            <div class="info__number">{{data}}</div>
            <div class="info__title">
                <v-icon>{{icon}}</v-icon>
                {{title}}
            </div>
            <div class="info__subtitle">{{subtitle}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'statistic-card',
    props: ['data', 'title', 'subtitle', 'icon']
}
</script>
<style scoped>
.statistic__card {
    border-bottom: 4px solid rgba(0, 0, 0, 0.3);
    height: 142px;
    width: 240px;
    color: var(--font-gray-1);
    padding-bottom: 32px;
    box-sizing: border-box;
}

.statistic__info .info__number {
    color: var(--primary);
    font-size: 50px;
}

.statistic__info .info__title i {
    color: var(--font-gray-1);
    font-size: 20px;
    margin-right: 4px;
}

.statistic__info .info__title {
    text-transform: uppercase;
    font-size: 15px;
    margin-bottom: 5px;
}
.statistic__info .info__subtitle {
    font-size: 14px;
}
</style>