<template>
    <div class="skillbar__container">
        <div class="skillbar--background" ref="bar"></div>
        <div class="skillbar--level" ref="bar"></div>
    </div>
</template>
<script>
export default {
    props: ['level', 'color'],
    computed: {
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0)
        }
    },
    mounted() {
        document.addEventListener('aos:in', ({ detail }) => {
            if (detail.id === 'skill-data') {
                TweenLite.to(this.$refs.bar, 2, {
                    width: `${this.$props.level}%`,
                    ease: Power2.easeInOut
                })
            }
        })
    }
}
</script>
<style scoped>
.skillbar__container {
    position: relative;
    background: var(--font-white);
    width: 100%;
    height: 15px;
}

.skillbar__container .skillbar--background {
    width: 100%;
    height: 100%;
    background: var(--primary);
    opacity: 0.3;
}

.skillbar__container .skillbar--level {
    height: 100%;
    background: var(--primary);
    position: absolute;
    top: 0;
    left: 0;
}

@keyframes process {
    0% {
        width: 0%;
    }
    100% {
        width: 30%;
    }
}
</style>
