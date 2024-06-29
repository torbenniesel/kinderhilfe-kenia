<script setup lang="ts">
import CustomNavbar from './CustomNavbar.vue';

const { cover } = useAppConfig()
</script>

<template>
  <div class=" min-h-screen bg-emerald">
    <Html lang="en" />
    <Meta name="twitter:card" content="summary_large_image" />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <Header />
      <div class="full-size-before-wrapper">
        <div class="wrapper">

          <slot />
        </div>
      </div>
    </NuxtLayout>

  </div>
</template>

<style>
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
}
</style>