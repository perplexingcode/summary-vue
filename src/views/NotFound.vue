<!--  Handling page/resource not existing  -->
<template>
  <h2>Oops! The {{resource}} you're looking for does not exist.</h2>
  <router-link to="/">Go to Home Page</router-link>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
      default: 'page'
    }
  }
}
</script>