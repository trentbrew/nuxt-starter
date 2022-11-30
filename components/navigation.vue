<template>
  <nav class="fixed top-0 navbar bg-base-300 z-10">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl">Nuxt 3 Template</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/components">Components</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink to="/auth/login" class="btn rounded">Log in</NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
li a {
  @apply opacity-[0.4] rounded
}
.router-link-exact-active {
  opacity: 1 !important;
  background: transparent;
}
</style>
