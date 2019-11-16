<template>
    <div class="whitespace"></div>
</template>
<script>
export default {}
</script>
<style>
.whitespace {
    width: 100%;
    height: 200px;
    background: var(--body-bg);
}

@media screen and (max-width: 960px) {
    .whitespace {
        height: 100px;
    }
}
@media screen and (max-width: 600px) {
    .whitespace {
        height: 50px;
    }
}
</style>
