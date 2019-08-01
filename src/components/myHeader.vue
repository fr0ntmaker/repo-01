<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="light">
<!--            <b-navbar-brand href="/myContent">Home</b-navbar-brand>-->
            <b-nav-item to="/" active-class="active">Home</b-nav-item>
            <b-nav-item to="/Cars">Cars</b-nav-item>
            <b-nav-item to="/Car/3">Car 3</b-nav-item>
            <b-nav-item to="/Car/4">Car 4</b-nav-item>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template slot="button-content"><em>User</em></template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { BNavbar } from 'bootstrap-vue'
    Vue.component('b-navbar', BNavbar)
    export default {
        name: "myHeader"
    }
</script>

<style scoped>

</style>