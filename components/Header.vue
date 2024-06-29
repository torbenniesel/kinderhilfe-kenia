<template>
  <header class="header fixed top-0 left-0 z-50 w-full h-16 bg-[#00000099] text-white flex">
    <div class="header-body px-4 flex items-center justify-between w-full">
      <div class="header-inner flex items-center justify-between w-full gap-6">
        <NuxtLink to="/" class="logo" active-class="font-bold">
          <img src="/public/logo-512.png" alt="" srcset="" class="w-12 h-12 rounded-xl p-2 bg-white">
        </NuxtLink>



        <nav class="nav items-center justify-between gap-6 hidden md:flex">
          <span v-for="link of navigation">
            <NuxtLink :key="link._path" :to="link._path" class=" hover:text-emerald-200 font-bold whitespace-nowrap"
              active-class="font-bold text-emerald-200">
              {{ link.title }}
            </NuxtLink>
          </span>
        </nav><!-- /.nav -->

        <div class="header-actions flex items-center gap-6">

          <UButton label="Jetzt Spenden" class="bg-emerald-700 text-white py-3 rounded-xl" @click="isModalOpen = true">
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right-20-solid" class="hidden h-5 w-5 sm:inline-block" />
            </template>
          </UButton>
          <span class="nav-trigger block w-40 cursor-pointer md:hidden" @click="toggleNavMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>

        </div><!-- /.header-actions -->
      </div><!-- /.header-inner -->


    </div><!-- /.header-body -->

    <div class="header-menu absolute top-16 h-screen bg-[#000000bb] w-full flex justify-center text-center">
      <div class="header-menu-inner flex flex-col gap-4 pt-8">
        <nav class="nav flex flex-col gap-4">
          <span v-for="link of navigation">
            <NuxtLink :key="link._path" :to="link._path" class=" hover:text-emerald-200 font-bold whitespace-nowrap"
              active-class="font-bold text-emerald-200">
              {{ link.title }}
            </NuxtLink>
          </span>
        </nav><!-- /.nav -->

        <div class="header-actions">
          <UButton label="Spende Jetzt" class="bg-emerald-700 text-white py-3 rounded-xl">
          </UButton>
        </div><!-- /.header-actions -->
      </div><!-- /.header-menu-inner -->
    </div><!-- /.header-menu -->
  </header>
  <main class="">
    <section class=" bg-emerald-50 p-4">
      <div class="center-block flex flex-col items-center justify-center max-w-96 m-auto">
        <h1 class="text-white font-bold text-3xl pt-24 text-center">Hilf den jungen Mädchen aus Kenia eine bessere
          Kindheit
          zu erleben</h1>
        <DonationForm :is-transparent="true" />
      </div>
    </section>
  </main>

  <UModal v-model="isModalOpen">
    <div class="p-4 flex justify-center items-center">
      <DonationForm :is-transparent="false" />
    </div>
  </UModal>
</template>

<script setup>
import DonationForm from './DonationForm.vue';

const { navigation } = useContent()

let isModalOpen = ref(false)

function toggleNavMenu() {
  console.log("Toggle Nav Menu", document.body.classList)
  if (document.body.classList.contains("nav-menu-shown")) {
    document.body.classList.remove("nav-menu-shown")
  }
  else {
    document.body.classList.add("nav-menu-shown")
  }
}
//#2b443c
</script>

<style>
body {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

main section {
  background: linear-gradient(rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)),
    url(/public/eric-noel-after-she-lost-her-mum.jpg);
  background-size: cover;
  background-position-y: 45%;
  width: 100%;
  height: 100vh;
}

/* main section::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
} */


.nav-menu-shown .header {
  background-color: #000000ee;
}

.header-menu {
  display: block;
  opacity: 0;
  visibility: hidden;
  transition: .5s opacity, .5s visibility, 0s .5s left
}

.nav-menu-shown .header-menu {
  left: 0;
  opacity: 1;
  visibility: visible;
  transition: .5s opacity, .5s visibility;
}

.nav-trigger {
  position: relative;
  width: 20px;
  height: 14px;
}

.nav-trigger span {
  position: absolute;
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  transition: top .2s .25s, left .2s .25s, opacity .2s .25s, transform .2s 0s
}

.nav-trigger span:nth-child(1) {
  top: 0
}

.nav-trigger span:nth-child(2) {
  top: 6px
}

.nav-trigger span:nth-child(3) {
  top: 12px
}

.nav-menu-shown .nav-trigger span {
  transition: top .2s, left .2s, opacity .2s, transform .2s .25s
}

.nav-menu-shown .nav-trigger span:nth-child(1),
.nav-menu-shown .nav-trigger span:nth-child(3) {
  top: 6px
}

.nav-menu-shown .nav-trigger span:nth-child(2) {
  opacity: 0
}

.nav-menu-shown .nav-trigger span:nth-child(1) {
  -ms-transform: rotate(45deg);
  transform: rotate(45deg)
}

.nav-menu-shown .nav-trigger span:nth-child(3) {
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg)
}


@font-face {
  font-family: Ultramagnetic;
  src: url(/public/fonts/ultramagnetic.woff) format('woff');
  font-weight: 400;
  font-style: normal
}

@font-face {
  font-family: Karmina;
  src: url(/public/fonts/karmina-regular.woff) format('woff');
  font-weight: 400;
  font-style: normal
}

@font-face {
  font-family: Karmina;
  src: url(/public/fonts/karmina-italic.woff) format('woff');
  font-weight: 400;
  font-style: italic
}

@font-face {
  font-family: Karmina;
  src: url(/public/fonts/karmina-regular.woff) format('woff');
  font-weight: 700;
  font-style: normal
}

@font-face {
  font-family: Karmina;
  src: url(/public/fonts/karmina-italic.woff) format('woff');
  font-weight: 700;
  font-style: italic
}



header {
  border: none
}
</style>