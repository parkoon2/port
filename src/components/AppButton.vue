<template>
    <div class="app-button" @click="onClick">
        <v-icon :color="color">{{icon}}</v-icon>
    </div>
</template>

<script>
export default {
    name: 'app-button',
    props: ['icon', 'onClick', 'color']
}
</script>
<style scoped>
.app-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border: 1px solid var(--font-gray-2);
    transition: 0.2s;
    cursor: pointer;
}

.app-button:hover {
    background: rgba(34, 32, 32, 0.3);
}
</style>