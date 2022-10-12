<template>
  <div>
   <div v-for="img in images" :key="img">
      <img :src="img.pathLong"/>
   </div>
  </div>
  </template>

<script>
export default {
  data() {
    return {
      images: [],
    };
  },

  mounted() {
    this.importAll(require.context('../../assets/mints/', true, /\.*/));
  },

  methods: {
    importAll(r) {
      r.keys().forEach(key => (this.images.push({ pathLong: r(key), pathShort: key })));
    },
  },
};
</script>

<style scoped>
img {
  height: 8rem;
}
</style>