<template>
    <div id="app" class="vue-app">
        <Grid :style="{height: '280px'}"
              :data-items="items"
              :columns="columns">
        </Grid>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Grid } from '@progress/kendo-vue-grid';
    Vue.component('Grid', Grid);

    export default {
        name: "grid",
        props: {
            msg: String
        },
        data: function () {
            return {
                items: [],
                columns: [
                    { field: 'ProductID'},
                    { field: 'ProductName', title: 'Product Name' },
                    { field: 'UnitPrice', title: 'Unit Price' }
                ]
            };
        },
        methods: {
            createRandomData(count) {
                const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
                const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

                return Array(count).fill({}).map((_, idx) => ({
                    ProductID: idx + 1,
                    ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                    UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
                }));
            }
        },
        mounted() {
            this.items = this.createRandomData(50);
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>