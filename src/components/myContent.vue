<template>
    <div id="app">
        <input type="text" v-model="name">
        <p>{{ name }}</p>
        <br>
        {{ msg }}
        <br>
        <img class="rotating"
             alt="Vue logo"
             src="https://vignette.wikia.nocookie.net/heroes-and-villians/images/b/ba/Pom-private03.png/revision/latest?cb=20170611214022"
             height="200"
        >
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: 'type some shit here ...'
            }
        },
        name: "myContent",
        props: {
            msg: String
        }
    }
</script>

<style scoped>
.rotating {
    transition: transform 1s ease-in-out;
}
    .rotating:hover {
        transform: rotateZ(360deg);
    }
</style>