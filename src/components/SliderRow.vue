<template>
  <div class="overflow-hidden bg-[#1c1c21] py-2">
    <div class="flex gap-8 w-full animate-slide">
      <div class="flex gap-2 whitespace-nowrap" v-for="Content in SliderContents" :key="Content">
        <img src="/Icons/Clip path group.svg" alt="Clip Path" class="w-6" />
        <p class="font-thin">{{ Content }} PHOTOGRAPHY</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import allData from '../../src/json/allData.json'
const SliderContents = allData.SliderRowContent
</script>
