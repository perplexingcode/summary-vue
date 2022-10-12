<template>
  <div class="center">
    <img @click="programmaticNavigation" class="logo" alt="Divinity logo" src="./assets/logo.png">
  </div>

  <ExampleItem tt="An example header." dt="Click the links below to switch page." />
  <div class="nav-items-wrapper">
    <router-link :to="{name: 'Home'}">Home</router-link>

    <!--  Using URL param  -->
    <!-- △ For routes with required params -->
    <router-link :to="{name: 'GetMints',params: { num: 3 }}">Get some mints</router-link>
    <router-link :to="{name: 'MintLayout'}">All about mints</router-link>
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
  },
  //○○○ Programmatic Navigation
  methods: {
    programmaticNavigation() {
      // △ <router-link/> is the same as this.$router.push() 

      // △ Path as string
      this.$router.push('/mints')
      // △ Path as an object
      this.$router.push({ path: '/mints' })
      // △ Named path
      this.$router.push({ name: 'MintExamples' })
      // △ Dynamic segment
      this.$router.push({ name: 'MintProduct', params: { id: 3 } })

      // (!) Multiple pushes: only the last one gets called
      this.$router.push('/get-mints/3')
      //, however will stuck if there are errors

      // △ Query parameters
      this.$router.push({ name: 'MintFlavors', query: { page: 2 } })

      // △ Omit history, user cannot go back
      this.$router.replace('/mints')

      // Go backwards/forwards history
      this.$router.go(-1)
      this.$router.go(1)

    }
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

.logo:hover {
  cursor: pointer;
}

textarea {
  width: 50%;
  height: 16rem;
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
  