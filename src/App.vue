<template>
  <b-container>
    <div id="app">
        <b-row>
            <b-col>
                <myHeader></myHeader>
            </b-col>
        </b-row>
        <b-row>
          <b-col cols="3">
          <mySidebar></mySidebar>
          </b-col>
          <b-col cols="9">
          <router-view></router-view>
          </b-col>
        </b-row>
        <b-row>
            <b-col>
                <myFooter></myFooter>
            </b-col>
        </b-row>
    </div>
  </b-container>
</template>

<script>
import myHeader from './components/myHeader.vue'
import mySidebar from './components/mySidebar.vue'
// import myContent from './components/myContent.vue'
import myFooter from './components/myFooter.vue'


export default {
  name: 'app',
  components: {
    myHeader: myHeader,
    mySidebar: mySidebar,
    // myContent: myContent,
    myFooter: myFooter
  }
}
</script>

<style>
.container {
  /*background-color: #00b0ff;*/
  background-color: #fff;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /*min-height: 70vh;*/
}
.sidebar {
  /*background-color: #5e0f12;*/
  align-items: center;
}
.footer {
  background-color: #000;
}
</style>
