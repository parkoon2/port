<template></template>
<script>
export default {
    data() {
        return {
            drawer: null
        }
    },
    methods: {
        toggleDrawer() {
            this.$emit('toggleDrawer')
        }
    }
}
</script>

