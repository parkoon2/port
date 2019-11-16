<template>
    <div class="page__title">
        <h1 v-if="title" data-aos="fade-left">
            {{ title }}
        </h1>
        <p v-if="subtitle">{{ subtitle }}</p>
    </div>
</template>
<script>
export default {
    name: 'page-title',
    props: ['title', 'subtitle']
}
</script>
<style scoped>
.page__title h1 {
    color: var(--font-grey-1);
    font-size: 42px;
    margin: 0;
    text-align: center;
}

.page__title p {
    color: var(--font-grey-3);
}

@media screen and (max-width: 600px) {
    .page__title h1 {
        font-size: 30px;
    }
}
</style>
