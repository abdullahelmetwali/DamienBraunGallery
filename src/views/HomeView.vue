<script setup>
import ArrowIcon from '../../src/components/IconsSVGs/ArrowIcon.vue'
import SliderRow from '../../src/components/SliderRow.vue'
import IntroSec from '../../src/components/HomeComp/IntroSec.vue'
import PhotoService from '../../src/components/HomeComp/PhotoService.vue'
import PortfolioProjects from '../../src/components/HomeComp/PortfolioProjects.vue'
import FAQsSec from '../../src/components/FAQsSec.vue'
import FooterComp from '../../src/components/FooterComp.vue'

</script>
<template>
  <main class="flex items-center px-12 mobile:grid mobile:px-2 gap-2 mb-4">
    <div class="p-4">
      <p class="text-sm text-main tracking-wider">STUNNING PHOTOGRAPHY BY</p>
      <h2 class="text-5xl font-medium tracking-wider">DAMIEN BRAUN</h2>
    </div>
    <div class="ml-4">
      <img src="/Imgs/Abstract Design.png" alt="Abstract Design" class="max-w-full mobile:hidden" />
    </div>
    <div class="mobile:ml-4">
      <div class="inline-flex gap-4">
        <h2 class="text-4xl tracking-wider">LET'S</h2>
        <ArrowIcon />
      </div>
      <h2 class="text-4xl tracking-wider">WORK TOGETHER</h2>
    </div>
  </main>
  <SliderRow />
  <section class="flex px-12 relative my-2 mobile:px-4">
    <div class="grid">
      <img src="/Imgs/imgOne.png" />
      <img src="/Imgs/imgTwo.png" class="max-w-[33%]" />
    </div>
    <div class="flex mx-2">
      <img src="/Imgs/imgFour.png" />
      <img src="/Imgs/imgThree.png"
        class="max-w-[33%] absolute -translate-x-[60%] bottom-1 mobile:max-w-[27%] mobile:-translate-x-[62%]" />
    </div>
    <div class="grid gap-1">
      <img src="/Imgs/imgFive.png" />
      <img src="/Imgs/imgSix.png" />
    </div>
  </section>
  <IntroSec />
  <PhotoService />
  <PortfolioProjects />
  <FAQsSec />
  <FooterComp />
</template>
