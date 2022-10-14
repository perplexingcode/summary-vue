
<template>
  <div v-if="mintDone == true">
    <h3 class="tt">Here {{number == 1 ? "is your mint." : "are your mints."}}</h3>
    <img v-for="i in num" @click="getOneMint" :key="i" src="../assets/logo.png">
    <!--  Remember to parseInt() the string param if you need to do some calculation -->
  </div>
  <div v-else class="center">
    <h3>Some mints are being made for you...</h3>
    <p><i>{{GetMintsStore.product}}</i></p>
  </div>
</template>

<script>
import NProgress from 'nprogress'
import makeMints from '../services/MintService'

export default {
  props: ['number'],
  inject: ['GetMintsStore', 'GStore'],
  created() {
    this.num = this.number;
    NProgress.configure({ trickle: false }).start();
  },
  mounted() {
    (async () => {
      this.mintDone = await makeMints();
    })()

  },
  data: () => ({
    num: null,
    mintDone: false,
  }),
  methods: {
    getOneMint() {
      this.num = this.num - 1;
      NProgress.inc(1 / this.number)
      if (this.num == 0) NProgress.done();
    }
  },

  watch: {
    num() {
      console.log(this.num);
      if (this.num == 0) {
        console.log('?');
        this.$router.push('/')
        this.GStore.flashMessage = 'Somehow on homepage now...(Because getMint within getMint not working :>)'
        setTimeout(() => {
          this.GStore.flashMessage = '';
        }, 3000);
      }
    }
  },

  // In-Component Route Guards
  //// Hooks
  // beforeRouteEnter(routeTo, routerFrom, next)
  // Called before the component is created, no this keyword
  // (!) Enter is only called when a route is being entered from a different route, in that case, use beforeRouteUpdate

  // beforeRouteUpdate(routeTo, routerFrom, next)
  // Called when route changes, but the component has not, has this keyword

  // beforeRouteLeave(routeTo, routerFrom, next)
  // Called when navigating away from route, has this keyword

  beforeRouteLeave() {
    // NProgress.start() // Quick progress bar for request
    if (this.num) {
      const answer = window.confirm(`Do you really want to leave? You haven't received all your mints.`)
      if (!answer) return false
    }
    if (this.num == 0) { return true }
    // NProgress.done()// Quick progress bar for request
  },


  //// Return syntax
  // next() = next(true) = return true => redirect
  // next(false) = return false => block redirect
  // next('/path') = return '/path'
  // next({name:'event-list'}) = return {name:'event-list'}
  // return with logics
  // next((component) => {/*...logics...*/}) //Component here is referred as Vm (View Model) in the docs



}
</script>



<style scoped>
img {
  width: 50px;
  height: 50px;
}

img:hover {
  cursor: pointer;
}

.d-none {
  display: none;
}
</style>