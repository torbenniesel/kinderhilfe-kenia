<script setup lang="ts">
import CustomNavbar from './CustomNavbar.vue';

const { cover } = useAppConfig()
</script>

<template>
  <div class=" min-h-screen bg-emerald-50">
    <Html lang="en" />
    <Meta name="twitter:card" content="summary_large_image" />
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <CustomNavbar />
      <slot />
    </NuxtLayout>

  </div>
</template>

<style>
.wrapper {
  max-width: 1080px;
}
</style>