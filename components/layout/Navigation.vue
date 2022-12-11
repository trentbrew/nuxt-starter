<template>
  <nav class="fixed top-0 navbar bg-black/[0.4] z-10 backdrop-blur-xl">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl"> Nuxt 3 Starter</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/components">Components</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink to="/auth/signup" class="btn rounded">Sign Up</NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  li a {
    @apply opacity-[0.4] rounded active:bg-base-100 active:text-white;
  }
  .router-link-exact-active {
    @apply opacity-[1] bg-transparent;
  }
</style>
