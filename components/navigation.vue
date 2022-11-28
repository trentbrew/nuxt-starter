<template>
  <nav class="fixed navbar bg-base-300">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl">Nuxt 3 Template</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn">Log in</a>
    </div>
  </nav>
</template>

<style scoped>
li a {
  opacity: 0.4;
}
.router-link-exact-active {
  opacity: 1 !important;
}
</style>
