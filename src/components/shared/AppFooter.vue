<template>
    <v-footer :color="bodyBg" class="footer" id="footer">
        <span class="white--text">&copy; 2019 parkoon</span>
    </v-footer>
</template>
<script>
export default {
    name: 'app-footer',
    computed: {
        bodyBg() {
            return this.$color['--body-bg']
        }
    }
}
</script>
<style scoped>
.footer {
    display: flex;
    justify-content: flex-end;
    padding-right: 28px;
    height: 70px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
</style>