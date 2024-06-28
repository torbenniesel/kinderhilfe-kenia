<template>
  <header
    class="custom-navbar bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-grey-100 dark:border-gray-800">

    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-14">
      <div class="logo flex items-center gap-1.5 flex justify-start">
        <NuxtLink to="/" active-class="font-bold">
          <img src="/public/logo-512.png" alt="" srcset="" class="w-full h-10">
        </NuxtLink>

      </div>
      <div class="h-8 py-1 flex justify-center">
        <div class="text-gray-700 dark:text-gray-200">
          <NuxtLink v-for="link of navigation" :key="link._path" :to="link._path"
            class="mr-6 hover:text-emerald-700 font-bold" active-class="font-bold text-emerald-900 underline">
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>

      <div class="flex justify-end">
        <UButton label="Spenden" class="bg-emerald-800 text-white">
          <template #trailing>
            <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
          </template>
        </UButton>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { navigation } = useContent()
const appConfig = useAppConfig()
</script>