<script setup>
import JourneySec from '../../src/components/AboutComp/JourneySec.vue'
import TestimonialSec from '../../src/components/TestimonialSec.vue'
import FooterComp from '../../src/components/FooterComp.vue'
import allData from '../../src/json/allData.json'
const aboutDetails = allData.AboutExperienceDetails
// export default{
//   components:{
//     JourneySec,
//     TestimonialSec,
//     FooterComp
//   },
//   data(){
//     return {
//       aboutDetails : allData.AboutExperienceDetails
//     }
//   }
// }

</script>

<template>
  <main class="mt-9 px-12 relative">
    <div class="absolute top-[0vw] tablet:relative">
      <p class="text-main tracking-wide font-thin">ABOUT</p>
      <h1 class="tracking-wider font-semibold text-[2.6rem] mobile:text-[1.5rem]">
        ABOUT DAMIEN BRAUN
      </h1>
    </div>

    <div class="relative pb-8">
      <div>
        <img src="/Imgs/About-Des.png" class="block tablet:hidden" />
        <img src="/Imgs/About-Mob.png" class="hidden tablet:block my-6 w-full" />
      </div>

      <div class="flex gap-4 top-[-35vw] w-full tablet:top-[8vw] mobile:grid grid-cols-2 relative">
        <div :key="detail" v-for="detail in aboutDetails" class="bg-[#141414] w-full rounded px-3 py-2">
          <h2 class="text-2xl font-semibold tracking-wider tablet:text-xl"> {{ detail.number }}+</h2>
          <p class="opacity-50 tracking-wide font-thin tablet:text-[0.7rem]">{{ detail.event }}</p>
        </div>
      </div>

      <div class="block absolute bottom-[2vw] left-[2vw] tablet:hidden">
        <img src="/Icons/Abstract Design.svg" class="w-[6vw]" />
      </div>

      <div class="block absolute bottom-[3vw] right-[3vw] tablet:hidden">
        <p class="opacity-75 text-sm tracking-wide font-thin">
          SCROLL DOWN TO SEE <br />
          MY JOURNEY
        </p>
      </div>
    </div>
  </main>
  <section class="px-12 py-8">
    <span class="w-full bg-button h-[1px] block my-10"></span>
    <div>
      <h3 class="opacity-40 tracking-wide text-3xl mb-3 font-semibold">MY BIOGRAPHY</h3>
      <article class="opacity-90 tracking-wider font-light">
        Damien Braun's love affair with photography began at a young age, nurtured by the
        captivating landscapes and vibrant cultures surrounding her in the heart of the USA. Her
        passion for storytelling through imagery led her to embark on a photography journey that has
        spanned over 15 years. <br />
        Driven by an insatiable curiosity to explore the beauty in everyday moments. Damien has
        honed her craft meticulously. Her background in digital media provided her with a solid
        foundation, but it's her keen eye for detail and an innate ability to capture raw emotions
        that truly set her apart. <br />
        Damien's journey is more than taking pictures ; it's about capturing the essence of the
        human spirit, the fleeting magic of nature, and the emotions that define our lives. <br />
        With each click of her camera, she weaves stories that transcend time and space.
      </article>
    </div>
    <span class="w-full bg-button h-[1px] block mt-10"></span>
  </section>
  <JourneySec />
  <TestimonialSec />
  <FooterComp />
</template>
