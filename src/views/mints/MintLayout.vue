<template>
<div>
<nav>
    <router-link :to="{name: 'MintIntro'}">What are mints?</router-link>
    <router-link :to="{name: 'MintInfo'}">Tell me more</router-link>
    <router-link :to="{name: 'MintExamples'}">Show me some</router-link>
</nav>
<router-view/>
<!-- △ Please note that this is the just the base layout of the Mints section
Although MintIntro and MintLayout have the same url, it WILL NOT display MintIntro when you go to that link, until you actually click <router-link :to="{name: 'MintIntro'}"/> 
To fix this, you need to add  redirect: '/mint/' to MintLayout in index.js,
-->
</div>
</template>

<style>
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding-top: 2rem;
}
</style>