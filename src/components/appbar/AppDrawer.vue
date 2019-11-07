<template>
    <div :class="['drawer', show && 'open']">
        <a
            v-for="(item, i) in items"
            :key="i"
            text
            :to="item.to"
            class="drawer__menu"
            @click.stop="handleClick(item)"
        >{{item.title}}</a>

        <div class="drawer__icon" @click="handleClose">
            <v-icon>mdi-close</v-icon>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-drawer',
    props: ['items', 'show'],
    methods: {
        handleClick(item) {
            this.$emit('scrollTo', item)
        },
        handleClose() {
            this.$emit('close')
        }
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    mounted() {
        console.log('mounted')
        console.log('mounted', this.show)
    }
}
</script>

<style>
.drawer {
    /* display: none; */
    width: 100%;
    height: 100vh;
    background: var(--body-bg);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    z-index: 9999;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.2s ease-in-out;

    overflow: hidden;

    transform: translateX(-100%);
}
.drawer.open {
    display: flex;
    transform: translateX(0);
}

.drawer .drawer__menu {
    color: var(--font-gray-1);
    text-transform: uppercase;
    font-size: 30px;
    margin-bottom: 17px;
    transition: 0.2s ease-in-out;

    width: 100%;
    padding: 14px;
    text-align: center;
}

.drawer .drawer__menu:hover {
    color: var(--font-gray-2);
    background: rgba(0, 0, 0, 0.1);
}

.drawer .drawer__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 17px;
    top: 5px;
    cursor: pointer;
    border-radius: 50%;
    padding: 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.drawer .drawer__icon:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.drawer .drawer__icon i {
    color: var(--font-gray-1);
}
</style>
