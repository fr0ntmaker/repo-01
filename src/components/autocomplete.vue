<template>
    <div id="app" class="vue-app">
        AutoComplete value: {{ autocompleteValue }}
        <br />
        <br />
        <kendo-autocomplete v-model="autocompleteValue"
                            :data-source="dataSourceArray"
                            :placeholder="'Select country...'"
                            :separator="', '"
                            :filter="'contains'">
        </kendo-autocomplete>
    </div>
</template>

<script>
    import Vue from 'vue'
    import '@progress/kendo-ui';
    import { DropdownsInstaller } from '@progress/kendo-dropdowns-vue-wrapper';

    Vue.use(DropdownsInstaller);

    export default {
        name: "autocomplete",
        data: function() {
            return {
                autocompleteValue: "",
                dataSourceArray: [
                    'Albania',
                    'Andorra',
                    'Armenia',
                    'Austria',
                    'Azerbaijan',
                    'Belarus',
                    'Belgium',
                    'Bosnia & Herzegovina',
                    'Bulgaria',
                    'Croatia',
                    'Cyprus',
                    'Czech Republic',
                    'Denmark',
                    'Estonia',
                    'Finland',
                    'France',
                    'Georgia',
                    'Germany',
                    'Greece',
                    'Hungary',
                    'Iceland',
                    'Ireland',
                    'Italy',
                    'Kosovo',
                    'Kazakhstan',
                    'Latvia',
                    'Liechtenstein',
                    'Lithuania',
                    'Luxembourg',
                    'Macedonia',
                    'Malta',
                    'Moldova',
                    'Monaco',
                    'Montenegro',
                    'Netherlands',
                    'Norway',
                    'Poland',
                    'Portugal',
                    'Romania',
                    'Russia',
                    'San Marino',
                    'Serbia',
                    'Slovakia',
                    'Slovenia',
                    'Spain',
                    'Sweden',
                    'Switzerland',
                    'Turkey',
                    'Ukraine',
                    'United Kingdom',
                    'Vatican City'
                ]
            }
        }
    }
</script>

<style scoped>
    html, body { overflow: hidden; }
    body { font-family: "RobotoRegular",Helvetica,Arial,sans-serif; font-size: 14px; margin: 0; }
    #vueapp { display: block; width: 100%; overflow: hidden; min-height: 80px; box-sizing: border-box; padding: 30px; }
    .example-wrapper { min-height: 280px; align-content: flex-start; }
    .example-wrapper p, .example-col p { margin: 0 0 10px; }
    .example-wrapper p:first-child, .example-col p:first-child { margin-top: 0; }
    .example-col { display: inline-block; vertical-align: top; padding-right: 20px; padding-bottom: 20px; }
    .example-config { margin: 0 0 20px; padding: 20px; background-color: rgba(0,0,0,.03); border: 1px solid rgba(0,0,0,.08); }
    .event-log { margin: 0; padding: 0; max-height: 100px; overflow-y: auto; list-style-type: none; border: 1px solid rgba(0,0,0,.08); background-color: #fff; }
    .event-log li {margin: 0; padding: .3em; line-height: 1.2em; border-bottom: 1px solid rgba(0,0,0,.08); }
    .event-log li:last-child { margin-bottom: -1px;}
</style>