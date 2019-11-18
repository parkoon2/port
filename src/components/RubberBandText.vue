<template>
    <div
        class="rubber__wrapper"
        :style="{fontSize: `${size}px`, marginRight: (mr ? `${mr}px` : '0px') }"
    >
        <span class="rubber-text">{{text}}</span>
    </div>
</template>

<script>
export default {
    props: ['text', 'size', 'mr']
}
</script>

<style>
.rubber__wrapper {
    display: inline-block;
    font-size: 20px;
    color: var(--font-grey-2);
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    transition: 0.3s ease-in-out;
}

.rubber__wrapper:hover {
    color: var(--primary);
    animation-name: rubberBand;
}
@keyframes rubberBand {
    from {
        transform: scale3d(1, 1, 1);
    }

    10% {
        transform: scale3d(1.25, 0.75, 1);
    }

    30% {
        transform: scale3d(0.75, 1.25, 1);
    }

    50% {
        transform: scale3d(1.15, 0.85, 1);
    }

    65% {
        transform: scale3d(0.95, 1.05, 1);
    }

    75% {
        transform: scale3d(1.05, 0.95, 1);
    }

    to {
        transform: scale3d(1, 1, 1);
    }
}
</style>
