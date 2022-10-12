<template>
  <h4>Data property is a javascript object managed by Vue.</h4>
  <p>Check the examples below.</p>
  <p><b>String literal:</b> {{string_literal}}</p>
  <p><b>Number:</b> {{number}}</p>
  <p><b>JS Objects:</b> {{js_object}}</p>
  <p><b>Ternary Operator:</b> {{ternary_operator}}</p>
  <p><i>Reference is not possbile</i> eg. this.number</p>
</template>

<script>
export default {
  props: ['tt','dt'],

// // △ Full form
// data () {
// return {
//   string_literal: 'dan choi',
// }
// },

// △ JS shorthand form
data: () => ({
  string_literal: 'dan choi',
  number: 10,
  // no_reference: this.number, This will not work
  // eslint-disable-next-line no-constant-condition
  js_object: {name: 'David', class: 'dan choi'},
  ternary_operator: String(new Date().getSeconds()).padStart(2, '0')%2  ? String(new Date().getSeconds()).padStart(2, '0') + ' was an odd second.' : String(new Date().getSeconds()).padStart(2, '0') + ' was an even second.'
  })
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>  