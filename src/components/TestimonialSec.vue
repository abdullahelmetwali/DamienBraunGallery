<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FacebookSVG from '../../src/components/IconsSVGs/FacebookSVG.vue'
import InstaSVG from '../../src/components/IconsSVGs/InstaSVG.vue'
import YoutubeSVG from '../../src/components/IconsSVGs/YoutubeSVG.vue'
import StarIcon from '../../src/components/IconsSVGs/StarIcon.vue'
import allData from '../../src/json/allData.json'
const Testimonials = allData.Testimonials
var reviews = 323;
</script>

<template>
  <section class="p-12 mt-10 mobile:p-8">
    <div class="flex justify-between tablet:flex-col">
      <div>
        <p class="text-main tracking-wide font-thin">TESTIMONIALS</p>
        <h1 class="tracking-wider font-semibold text-4xl">WHAT MY CLIENTS SAY</h1>
        <h2 class="mt-7 opacity-40 tracking-wider font-light">Total Reviews</h2>
        <p class="text-xl">{{ reviews }} View</p>
      </div>
      <div class="my-6">
        <button class="bg-button p-2 rounded-lg">
          <RouterLink to="/testcomponent">
            View All Testimonials
          </RouterLink>
        </button>
      </div>
    </div>
    <main class="flex justify-between gap-8 my-8 overflow-x-auto snap-x scroll-smooth">
      <div :key="Testimonial" v-for="Testimonial in Testimonials" class="p-6 bg-[#141414] rounded snap-start select-none">
        <div class="flex items-center justify-between gap-10">
          <div>
            <h3>{{ Testimonial.userName }}</h3>
            <p class="opacity-30 font-light tracking-wide text-sm">{{ Testimonial.userAddress }}</p>
          </div>
          <div class="flex gap-2 bg-black rounded-full p-1">
            <FacebookSVG>
              <a :href="Testimonial.userFacebook"></a>
            </FacebookSVG>
            <InstaSVG>
              <a :href="Testimonial.userInstagram"></a>
            </InstaSVG>
            <YoutubeSVG>
              <a :href="Testimonial.userYoutube"></a>
            </YoutubeSVG>
          </div>
        </div>
        <div class="flex gap-1 my-4">
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
        </div>
        <div>
          <p>{{ Testimonial.userComment }}</p>
        </div>
      </div>
    </main>
  </section>
  <RouterView/>
</template>
<style>
.snap-x ::-webkit-scrollbar{
  display: none;
}
.snap-x{
  scrollbar-width: none;
}
</style>