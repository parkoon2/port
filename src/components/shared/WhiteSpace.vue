<template>
    <div class="whitespace"></div>
</template>
<script>
export default {}
</script>
<style>
.whitespace {
    width: 100%;
    height: 120px;
    background: var(--body-bg);
}

@media screen and (max-width: 960px) {
    .whitespace {
        height: 70px;
    }
}
@media screen and (max-width: 600px) {
    .whitespace {
        height: 0px;
    }
}
</style>
