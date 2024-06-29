<template>
  <UButton :label="props.label ? props.label : `${props.selectValue}€`"
    class="ring-2  ring-emerald-700 text-emerald-700 font-bold  py-3 rounded-md flex-1 w-full justify-center hover:bg-emerald-200"
    :class="{
      'bg-white': props.donationValue != props.selectValue,
      'bg-emerald-200': props.donationValue == props.selectValue,
    }">
    <slot name="leading" />
    <slot />
  </UButton>
</template>

<script setup>
let props = defineProps({
  donationValue: Number,
  selectValue: Number,
  label: String,
})
</script>