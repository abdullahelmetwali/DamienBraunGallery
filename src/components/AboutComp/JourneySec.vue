<script setup>
import allData from '../../../src/json/allData.json'
const Journeys = allData.Journeys
</script>

<template>
  <section class="p-12">
    <div>
      <p class="text-main tracking-wide font-thin">JOURNEY</p>
      <h1 class="tracking-wider font-semibold text-4xl">DAMIEN'S JOURNEY - A TIMELINE</h1>
    </div>
    <div class="grid grid-cols-2 grid-rows-3 gap-6 mt-10 mobile:grid-cols-1">
      <div :key="Journey" v-for="Journey in Journeys" class="bg-[#141414] p-6 rounded">
        <h2 class="opacity-40 tracking-wider text-3xl mb-3 font-semibold">
          YEAR - {{ Journey.year }}
        </h2>
        <article v-html="Journey.story" class="opacity-40 tracking-wide"></article>
      </div>
    </div>
  </section>
</template>
