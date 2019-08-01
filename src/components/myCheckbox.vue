<template>
    <div>
        <h2>Form Inputs</h2>

        <label>
            <input type="checkbox" value="Instagram" v-model="social">Instagram
        </label>
        <label>
            <input type="checkbox" value="VK" v-model="social">VK
        </label>
        <label>
            <input type="checkbox" value="Facebook" v-model="social">Facebook
        </label>
        <hr>
        <ul>
            <li v-for="s in social">{{s}}</li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "checkbox",
        data() {
            social: []
        }
    }
</script>

<style scoped>

</style>