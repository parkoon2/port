<template>
    <div class="detail-wrapper">
        <div class="detail-inner">
            <v-card :loading="loading" max-width="645" class="mx-auto detail-card">
                <div class="detail-actions">
                    <v-btn dark color="indigo">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn dark color="indigo">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn dark color="indigo">
                        <v-icon dark>mdi-plus</v-icon>
                    </v-btn>
                </div>

                <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                <v-container>
                    <v-card-title>Top western road trips</v-card-title>

                    <v-card-subtitle class="text-left">1,000 miles of wonder</v-card-subtitle>

                    <v-divider></v-divider>

                    <ul>
                        <li>
                            <h2>CLIENT</h2>
                            <span>CLIENT NAME</span>
                        </li>
                        <li>
                            <h2>CLIENT</h2>
                            <span>CLIENT NAME</span>
                        </li>
                        <li>
                            <h2>CLIENT</h2>
                            <span>CLIENT NAME</span>
                        </li>
                    </ul>

                    <p>In other words, "Different transitions on mouseenter and mouseleave" as those are the DOM events that happen, but we're not using JavaScript here, we're talking about CSS :hover state and CSS3 transitions. Hover on, some CSS property animates itself to a new value; hover off, a different CSS property animates.</p>
                </v-container>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false,
        selection: 1
    }),
    methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },

        close() {}
    },

    mounted() {
        document.documentElement.style.overflow = 'hidden' // firefox, chrome
        document.body.scroll = 'no' // ie only
    },
    beforeDestroy() {
        document.documentElement.style.overflow = 'auto' // firefox, chrome
        document.body.scroll = 'yes' // ie only
    }
}
</script>

<style scoped>
.detail-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 9999;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.7);
    overflow-x: hidden;
}

.detail-inner {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 40px 0;
}

.detail-card {
    position: relative;
}

.detail-actions {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: -90px;
    top: 0px;
}
</style>