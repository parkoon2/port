<template>
    <v-timeline>
        <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small
            class="timeline"
        >
            <template v-slot:opposite>
                <span :class="`headline font-weight-bold ${year.color}--text`" v-text="year.year"></span>
            </template>
            <div class="py-4 timeline-desscription">
                <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">Lorem ipsum</h2>
                <div>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</div>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
export default {
    data: () => ({
        years: [
            {
                color: 'cyan',
                year: '1960'
            },
            {
                color: 'green',
                year: '1970'
            },
            {
                color: 'pink',
                year: '1980'
            },
            {
                color: 'amber',
                year: '1990'
            },
            {
                color: 'orange',
                year: '2000'
            }
        ]
    })
}
</script>

<style scoped>
.timeline {
}
.timeline-desscription {
    position: relative;
}

.timeline:nth-child(odd) .timeline-desscription:before {
    content: '';
    width: 0;
    height: 0;
    display: block;
    margin-left: 2px;
    border-top: 17px solid transparent;
    border-bottom: 17px solid transparent;
    border-right: 10px solid blue;
    position: absolute;
    top: 82px;
    left: -12px;
}
.timeline:nth-child(even) .timeline-desscription:before {
    content: '';
    width: 0;
    height: 0;
    display: block;
    margin-left: 2px;
    border-top: 17px solid transparent;
    border-bottom: 17px solid transparent;
    border-left: 10px solid blue;
    position: absolute;
    top: 82px;
    right: -12px;
}
</style>