<!--  Handling network errors -->
<template>
  <h2>Uh Oh! Looks like there's some connectivity issues.</h2>
  <a href="#" @click="flashMessage">Click here</a> to try again.
</template>

<script>
export default {
  inject: ['GStore'],
  methods: {
    flashMessage() {
      this.$router.go(-1);
      this.GStore.flashMessage = 'Your connection is restored.'
      setTimeout(() => {
        this.GStore.flashMessage = '';
      }, 3000);
    }
  }
}
</script>