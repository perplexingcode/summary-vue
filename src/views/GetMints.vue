
<template>
  <h3 class="tt">Here {{number == 1 ? "is your mint." : "are your mints."}}</h3>
  <img v-for="i in number" :key="i" src="../assets/logo.png">
  <!--  Remember to parseInt() the string param if you need to do some calculation -->
</template>

<script>
export default {
  props: ['number']
}
</script>

<style scoped>
div {
  width: 30px;
  height: 30px;
  background-color: blanchedalmond;
}

img {
  width: 50px;
  height: 50px;
}
</style>