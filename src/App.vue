<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Frame from './components/Frame.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <Frame/>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* :root.light {
    --color-bg: #eeeff6;
    --color-menu-text: #4d4d4d;
    --color-page-bg: white;
    --color-obj-bg: #f1f2f3;
    --color-mid-obj-bg: #b0b0b0;
    --color-mid-obj-hover: #8e8e8e;
    --color-title-text: #4d4d4d;
    --color-gen-text: #4d4d4d;
    --color-menu-hover: darkgrey;
    --color-title-hover: darkgrey;
}

:root.dark {
    --color-bg: #212121;
    --color-menu-text: #D3D3D3;
    --color-page-bg: #333333;
    --color-obj-bg: #403f3f;
    --color-mid-obj-bg: #535252;
    --color-mid-obj-hover: rgb(58, 58, 58);
    --color-title-text: #D3D3D3;
    --color-gen-text: white;
    --color-menu-hover: grey;
    --color-title-hover: grey;
} */
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
