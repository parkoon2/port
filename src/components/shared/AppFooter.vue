<template>
    <div :color="bodyBg" class="footer" id="footer">
        <div class="footer__title-box">
            <div class="footer__title--line"></div>
            <h1 class="footer__title">thanks!</h1>
            <div class="footer__title--line"></div>
        </div>
        <span class="footer__subtitle">Want to hire me?</span>
        <div class="footer__icons">
            <social-link color="#fff"></social-link>
        </div>

        <div class="footer__copyright">
            parkoon
            <span>©2019</span>
        </div>

        <div class="footer__btn--top" @click="top">
            <v-icon :color="grey">mdi-arrow-up</v-icon>
        </div>
    </div>
</template>
<script>
import SocialLink from '@/components/shared/SocialLink'
export default {
    name: 'app-footer',
    components: {
        SocialLink
    },
    computed: {
        bodyBg() {
            return this.$color['--body-bg']
        },
        grey() {
            return this.$color['--font-grey-1']
        }
    },
    data() {
        return {}
    },
    methods: {
        top() {
            window.scrollTo({
                behavior: 'smooth',
                top: 0,
                left: 0
            })
        }
    }
}
</script>
<style scoped>
.footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 270px;
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.3), 0 7px 12px rgba(0, 0, 0, 0.22);
    color: var(--font-grey-1);
    background: var(--body-bg);
}
.footer .footer__title-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer .footer__subtitle {
    text-transform: uppercase;
    font-size: 0.9rem;
    margin-bottom: 42px;
}
.footer .footer__copyright {
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-top: 12px;
}

.footer .footer__copyright span {
    color: var(--primary);
}

.footer .footer__btn--top {
    top: -21px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: var(--primary);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;

    /* border: 1px solid rgba(0, 0, 0, 0.12); */
}
.footer .footer__btn--top:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.footer .footer__title-box .footer__title {
    text-transform: uppercase;
    letter-spacing: 3px;
}

.footer .footer__title-box .footer__title--line {
    width: 120px;
    height: 2px;
    background: var(--font-grey-1);
}
.footer .footer__title-box .footer__title--line:first-child {
    margin-right: 15px;
}
.footer .footer__title-box .footer__title--line:last-child {
    margin-left: 15px;
}

@media screen and (max-width: 600px) {
    .footer .footer__title-box .footer__title--line {
        width: 52px;
    }
    .footer .footer__title-box .footer__title {
        font-size: 22px;
    }
    .footer .footer__subtitle {
        font-size: 13px;
    }
}
</style>
