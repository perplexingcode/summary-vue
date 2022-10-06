<template>
  <div class="center">
    <img class="logo" alt="Divinity logo" src="./assets/logo.png">
  </div>

  <ExampleItem tt="An example header." dt="Click the links below to switch page." />
  <div class="nav-items-wrapper">
    <router-link :to="{name: 'Home'}">Home</router-link>


    <router-link :to="{name: 'ExamplePage'}">ExamplePage</router-link>

    <!-- ○○○ Using URL param  -->
    <!-- △ For routes with required params -->
    <router-link :to="{name: 'GetMints',params: { num: 3 }}">Get some mints</router-link>
    <!-- 
    △ For routes  with optional params 
    <router-link :to="{name: 'GetMints'}">Get some mints</router-link>
-->

  </div>
  <router-view />
</template>
  
<script>
import ExampleItem from './components/ExampleItem.vue'

export default {
  name: 'App',
  components: {
    ExampleItem
  }
}
</script>
  
<style>
#app {
  font-family: comfortaa, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #051c2b;
  margin-top: 60px;
}

.logo {
  width: 10rem;
  height: 10rem;
}

.center {
  text-align: center;
}

.tt {
  background-color: #051c2b;
  color: #fff;
  padding: 2px 0 2px 0
}

.nav-items-wrapper {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
  