<template>
  <div class="center">
    <img class="logo" alt="Divinity logo" src="./assets/logo.png">
  </div>
  
  <ExampleItem tt="An example item." dt="Lorem ipsum dolor sit amet."/>
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
    color: #051c2b ;
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
    background-color:  #051c2b ;
    color: #fff ;
    padding: 2px 0 2px 0
  }
  </style>
  