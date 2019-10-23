<template>
    <div class="page-title">
        <h1 v-if="title">{{ title }}</h1>
        <p v-if="subtitle">{{subtitle }}</p>
    </div>
</template>
<script>
export default {
    name: 'page-title',
    props: ['title', 'subtitle']
}
</script>
<style scoped>
.page-title h1 {
    color: var(--font-gray-1);
    font-size: 42px;
    margin: 0;
}

.page-title p {
    color: var(--font-gray-3);
}
</style>