<template>
    <v-card class="mx-auto">
        <v-container>
            <div class="about-content">
                <div class="about-image">
                    <v-img
                        height="350"
                        width="295"
                        src="https://cdn.vuetifyjs.com/images/cards/store.jpg"
                    ></v-img>
                </div>
                <div class="about-info">
                    <div class="about-preword">HELLO</div>
                    <p>
                        I'm
                        <span>Robert Smith</span>
                    </p>
                    <p>Developer and Startup enterpreneur</p>

                    <v-divider></v-divider>

                    <ul class="about-list">
                        <li>
                            <div class="about-title">AGE</div>
                            <span class="about-value">29</span>
                        </li>
                        <li>
                            <div class="about-title">AGE</div>
                            <span class="about-value">29</span>
                        </li>
                        <li>
                            <div class="about-title">AGE</div>
                            <span class="about-value">29</span>
                        </li>
                        <li>
                            <div class="about-title">AGE</div>
                            <span class="about-value">29</span>
                        </li>
                        <li>
                            <div class="about-title">AGE</div>
                            <span class="about-value">29</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="about-social">
                <v-icon>mdi-chef-hat</v-icon>
                <v-icon>mdi-chef-hat</v-icon>
                <v-icon>mdi-chef-hat</v-icon>
                <v-icon>mdi-chef-hat</v-icon>
                <v-icon>mdi-chef-hat</v-icon>
            </div>
        </v-container>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            infos: [
                {
                    title: 'age',
                    value: 29
                },
                {
                    title: 'age',
                    value: 29
                },
                {
                    title: 'age',
                    value: 29
                },
                {
                    title: 'age',
                    value: 29
                },
                {
                    title: 'age',
                    value: 29
                }
            ]
        }
    }
}
</script>

<style scoped>
.about-content {
    display: flex;
}

.about-image {
    flex: 1;
    text-align: center;
}

.about-info {
    flex: 2;
}

.about-preword {
    position: relative;
    display: inline;
    background: red;
    padding: 7px 10px;
    font-weight: bold;
}

.about-preword::after {
    content: '';
    width: 0;
    height: 0;
    top: 100%;
    left: 5px;
    position: absolute;
    border-style: solid;
    border-width: 0px 0px 8px 8px;
    border-color: transparent;
    border-left-color: #e83b35;
}

.about-list {
    list-style: none;
}

.about-list li {
    display: flex;
}
.about-list li .about-title {
    width: 120px;
}

@media screen and (max-width: 960px) {
    .about-content {
        flex-direction: column;
        /* align-items: center; */
    }

    .about-image {
        margin: 0 auto;
    }

    .about-info {
        text-align: center;
    }

    .about-list {
        width: 100%;
        text-align: left;
    }
}
</style>