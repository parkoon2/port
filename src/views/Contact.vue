<template>
    <div class="contact" :color="cardBg">
        <page-title title="CONTACT ME"></page-title>

        <section-divider></section-divider>
        <div class="contact-card__container">
            <v-card class="contact-card" :color="cardBg">
                <v-form v-model="valid">
                    <v-container class="contact-container">
                        <div class="input-container">
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field
                                        v-model="name"
                                        :rules="nameRules"
                                        label="your name"
                                        required
                                        :color="gray"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="6">
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="e-mail"
                                        required
                                        :color="gray"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-text-field
                                        v-model="title"
                                        :rules="titleRules"
                                        label="title"
                                        required
                                        :color="gray"
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-textarea
                                        :rules="messageRules"
                                        required
                                        label="message"
                                        :color="gray"
                                        no-resize
                                    ></v-textarea>
                                </v-col>
                                <v-card-actions class="contact-actions">
                                    <v-btn :color="gray" outlined>SEND</v-btn>
                                </v-card-actions>
                            </v-row>
                        </div>
                    </v-container>
                </v-form>
            </v-card>
            <v-card class="map__card" :color="cardBg">
                <div class="google-map-container">
                    <google-map></google-map>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
import GoogleMap from '@/components/GoogleMap'
import PageTitle from '@/components/PageTitle'
import AppButton from '@/components/AppButton'
import SectionDivider from '@/components/shared/SectionDivider'
export default {
    name: 'contact',
    components: { GoogleMap, PageTitle, AppButton, SectionDivider },
    computed: {
        cardBg() {
            return this.$color['--card-bg']
        },
        gray() {
            return this.$color['--font-gray-2']
        },
        primary() {
            return this.$color['--primary']
        }
    },
    data: () => ({
        valid: false,
        name: '',
        message: '',
        title: '',
        nameRules: [v => !!v || 'name is required'],
        email: '',
        emailRules: [
            v => !!v || 'e-mail is required',
            v => /.+@.+/.test(v) || 'e-mail must be valid'
        ],
        messageRules: [v => !!v || 'message is required'],
        titleRules: [v => !!v || 'title is required']
    })
}
</script>
<style scoped>
.contact {
    width: 70%;
    margin: 120px auto;
    max-width: 1200px;
}
.contact-card__container {
    display: flex;
}
.contact-card {
    width: 50%;
    padding: 20px;
    margin-right: 20px;
    box-sizing: border-box;
}
.map__card {
    width: 50%;
    margin-left: 20px;
}
.contact-actions {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

@media screen and (max-width: 960px) {
    .contact-card__container {
        flex-direction: column;
    }
    .map__card,
    .contact-card {
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .contact-card {
        margin-bottom: 24px;
    }
}

@media screen and (max-width: 600px) {
    .contact {
        width: 95%;
    }
}
</style>
