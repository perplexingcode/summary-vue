<template>
  <h3 class="tt">Today is your birthday. Let's open your gifts!!</h3>
  <h3 v-for="gift in gifts" :key="gift">{{gift}}</h3>
  <router-link :to="{ name: 'OpenGifts', query: { page: page-1 }}" rel="previous" v-if="page != 1">Last Gift
  </router-link>
  <router-link :to="{ name: 'OpenGifts', query: { page: page+1 }}" rel="previous" v-if="hasNextPage">Next Gift
  </router-link>

</template>

<script>
import { watchEffect } from 'vue'
import GiftService from '/src/services/GiftService'

export default {
  name: 'OpenGifts',
  props: ['page'],
  data() {
    return { gifts: null, }
  },
  created() {
    watchEffect(() => {
      this.gifts = null; //fake loading
      this.gifts = GiftService.getGifts(2, this.page)
    })
  },
  computed: {
    hasNextPage() {
      return this.page < 5
    }
  }
}
</script>