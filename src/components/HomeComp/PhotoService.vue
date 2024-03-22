<template>
  <section class="px-12 my-20">
    <div class="flex justify-between items-start my-10 mobile:grid">
      <div>
        <p class="text-main tracking-wider font-thin">SERVICES</p>
        <h1 class="tracking-wide font-semibold text-3xl">MY PHOTOGRAPHY SERVICES.</h1>
      </div>
      <div class="my-6">
        <ForButtons class="w-36 rounded-lg">
          <a href="#">View All Services</a>
        </ForButtons>
      </div>
    </div>
    <div class="flex gap-4 tablet:flex-col">
      <div class="w-[50rem] my-4 tablet:w-auto">
        <div class="flex gap-4">
          <h1 class="text-main font-semibold text-3xl tracking-wider">EVENTS</h1>
          <ArrowIcon />
        </div>
        <div>
          <article class="my-3 text-main tracking-wide w-auto">
            Our event photography service is dedicated to capturing the magic of your special
            occasions, Whether it's a wedding, corporate event or milestone celebration, We 're
            there to document every heartfelt moment. We blend into the background, ensuring natural
            and candid shots that reflect the emotions of the day.
          </article>
        </div>
        <div class="my-10">
          <h2 class="text-xl tracking-wider text-[#d3d3d3]">Service Highlights</h2>
          <div class="my-4">
            <div :key="Highlight" v-for="Highlight in Highlights"
              class="flex whitespace-nowrap gap-2 my-3 border-solid border-[#3c3939] border-[1px] p-2 rounded-xl w-auto mobile:whitespace-normal">
              <img src="/Icons/Clip path group.svg" class="w-6" />
              <p class="text-[#d3d3d3] tracking-wider text-base">{{ Highlight }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <img src="/Imgs/event.png" alt="EVENT" />
      </div>
    </div>
  </section>
</template>
<script setup>
import ForButtons from '../../../src/components/ForButtons.vue'
import ArrowIcon from '../../../src/components/IconsSVGs/ArrowIcon.vue'
import allData from '../../../src/json/allData.json'
const Highlights = allData.Highlights

</script>
