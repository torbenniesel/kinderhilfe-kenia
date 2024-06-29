<template>
  <div class="max-w-96 p-6 my-6 w-full bg-white border-2 border-gray-200 rounded-md" :class="{
    'bg-[#ffffffce]': isTransparent
  }">

    <div class="flex flex-wrap justify-between items-center w-full gap-2">
      <DonationFormButton label="Einmalig" :donation-value="isMonthlyPayment ? 1 : 0" :select-value="0"
        @click="isMonthlyPayment = false" />
      <DonationFormButton label="Monatlich" :donation-value="isMonthlyPayment ? 1 : 0" :select-value="1"
        @click="isMonthlyPayment = true">
        <template #leading>
          <UIcon name="i-heroicons-heart" class="h-5 w-5 inline-block text-emerald-700 font-bold" />
        </template>
        Monatlich
      </DonationFormButton>
    </div>
    <div class="grid grid-cols-3 justify-between items-center w-full gap-2 mt-6">
      <DonationFormButton :donation-value="donationValue" :select-value="200" @click="donationValue = 200" />
      <DonationFormButton :donation-value="donationValue" :select-value="100" @click="donationValue = 100" />
      <DonationFormButton :donation-value="donationValue" :select-value="50" @click="donationValue = 50" />
      <DonationFormButton :donation-value="donationValue" :select-value="20" @click="donationValue = 20" />
      <DonationFormButton :donation-value="donationValue" :select-value="10" @click="donationValue = 10" />
      <DonationFormButton :donation-value="donationValue" :select-value="5" @click="donationValue = 5" />
    </div>
    <div class="flex justify-content items-center w-full gap-2 mt-6 relative">
      <span class="absolute right-0 top-1.5 text-emerald-700 font-bold text-2xl pr-3">€</span>
      <input type="text" placeholder=""
        class="ring-2 focus:ring-emerald-900  ring-emerald-700 outline-none border-emerald-700 text-emerald-700 font-bold bg-white rounded-md w-full justify-center px-2 py-2 text-lg text-center"
        v-model="donationValue" />
    </div>
    <div class="flex justify-center items-center w-full mt-6">
      <a :href="paymentLink" class="w-full" target="_blank" rel="noopener noreferrer">
        <UButton label="Jetzt Spenden" class="bg-emerald-700 text-white py-3 w-full text-lg text-center justify-center">
        </UButton>
      </a>
    </div>
  </div>
  <pre>
  {{ isMonthlyPayment }}
  {{ donationValue }}
  {{ paymentLink }}
  {{ paymentLink2 }}
</pre>
</template>

<script setup lang="ts">
let props = defineProps({
  isTransparent: Boolean,
})

let isMonthlyPayment = ref(true)
let donationValue = ref(20)


let links = {
  defaultLink: "https://donate.stripe.com/test_3cs8xtaG92Sw3iE8wK",
  monthly: {
    5: "https://buy.stripe.com/test_28ofZV6pT64I7yUeUW",
    10: "https://buy.stripe.com/test_7sI4hdg0t2Sw7yU28b",
    20: "https://buy.stripe.com/test_7sI9Bx7tX1Os3iEcMQ",
    50: "https://buy.stripe.com/test_eVa9Bx29D78M4mI6ot",
    100: "https://buy.stripe.com/test_fZe6plaG9gJmf1m006",
    200: "https://buy.stripe.com/test_9AQfZV6pTct6bPa14b",
  },
  once: {
    5: "https://buy.stripe.com/test_fZe2959C5bp21awaER",
    10: "https://buy.stripe.com/test_9AQ4hdg0t78M9H2bIU",
    20: "https://buy.stripe.com/test_7sIdRN15z3WAg5q3cn",
    50: "https://buy.stripe.com/test_00g5lh6pTgJmdXiaEO",
    100: "https://buy.stripe.com/test_dR6cNJeWpct61aw14d",
    200: "https://buy.stripe.com/test_5kA5lh7tXct66uQ14c",
  }
}
let paymentLink2 = ref(links.defaultLink)

// watch([isMonthlyPayment, donationValue], ([newIsMonthlyPayment, newDonationValue]) => {
//   let index = [5, 10, 20, 50, 100, 200].find(val => val == donationValue.value) as keyof typeof links.monthly | undefined
//   if (!index) {
//     paymentLink2.value = links.defaultLink
//     return;
//   }

//   if (isMonthlyPayment.value) {
//     paymentLink2.value = links.monthly[index] ?? links.defaultLink
//     return
//   }
//   else if (!isMonthlyPayment.value) {
//     paymentLink2.value = links.once[index] ?? links.defaultLink
//     return
//   }
// })


let paymentLink = computed(() => {
  let index = [5, 10, 20, 50, 100, 200].find(val => val == donationValue.value) as keyof typeof links.monthly | undefined
  if (!index) {
    return links.defaultLink
  }

  if (isMonthlyPayment.value) {
    let link = links.monthly[index] ?? links.defaultLink
    return link
  }
  if (!isMonthlyPayment.value) {
    let link = links.once[index] ?? links.defaultLink
    return link
  }

  return links.defaultLink
})

</script>