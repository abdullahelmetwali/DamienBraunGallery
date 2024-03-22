<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ArrowIcon from '../../src/components/IconsSVGs/ArrowIcon.vue'
import FacebookSVG from '../../src/components/IconsSVGs/FacebookSVG.vue'
import InstaSVG from '../../src/components/IconsSVGs/InstaSVG.vue'
import YoutubeSVG from '../../src/components/IconsSVGs/YoutubeSVG.vue'
import SliderRow from '../../src/components/SliderRow.vue'
import allData from '../../src/json/allData.json'
const FooterLinks = allData.FooterLinks

// export default {
//   components: {
//     ArrowIcon,
//     FacebookSVG,
//     InstaSVG,
//     YoutubeSVG,
//     SliderRow,
//     RouterLink,
//     RouterView
//   },
//   data() {
//     return {
//       footerLinks: {
//         itemOne: {
//           title: 'HOME',
//           links: ['ABOUT ME', 'MY WORKS', 'TESTIMONIALS']
//         },
//         itemTwo: {
//           title: 'CLIENTS',
//           links: ['KLOVESTO', 'NUKEWAY', "CLOVEN'S", 'MENVOL']
//         },
//         itemThree: {
//           title: 'PORTFOLIO',
//           links: ['EVENTS', 'PORTRAIT', 'BRANDING', 'COMMERCIALE', 'WEDDING']
//         },
//         itemsFour: {
//           title: 'SERVICES',
//           links: ['PORTRAITS', 'EVENTS', 'COMMERCIAL']
//         }
//       }
//     }
//   }
// }
</script>

<template>
  <div class="px-14">
    <h1 class="text-[13vw] font-semibold tracking-wider opacity-20 text-right">DAMIEN</h1>
  </div>
  <SliderRow />
  <footer class="grid grid-cols-1 mt-10 px-14 pb-4 relative tablet:grid-cols-none">
    <div class="flex justify-between mobile:grid">
      <div>
        <p class="text-main tracking-wider font-thin my-4">
          A MORE MEANINGFUL HOME FOR PHOTOGRAPHY
        </p>
        <div>
          <div class="inline-flex gap-4">
            <h2 class="text-4xl tracking-wider">LET'S</h2>
            <ArrowIcon />
          </div>
          <h2 class="text-4xl tracking-wider">WORK TOGETHER</h2>
        </div>
      </div>
      <div class="flex gap-14 tablet:grid grid-cols-2 grid-rows-2 tablet:gap-6 my-6">
        <div :key="FooterLink" v-for="FooterLink in FooterLinks" class="flex flex-col">
          <h3 class="opacity-25 tracking-wider my-3">{{ FooterLink.title }}</h3>
          <RouterLink :key="link" v-for="link in FooterLink.links" class="tracking-wide opacity-95 hover:opacity-70"
            to="/testcomponent">{{ link }}</RouterLink>
        </div>
      </div>
    </div>

    <div
      class="flex relative justify-between items-center my-10 tablet:grid gap-4 tablet:absolute tablet:top-40 tablet:left-12 mobile:relative mobile:top-0 mobile:left-0">
      <div class="opacity-25 tracking-wide">
        <RouterLink to="/testcomponent"> Terms & Conditions </RouterLink> |
        <RouterLink to="/testcomponent"> Privacy Policy </RouterLink>
      </div>
      <div class="inline-flex gap-2 border-solid border-d border-[#141414] rounded-full p-1">
        <FacebookSVG />
        <InstaSVG />
        <YoutubeSVG />
      </div>
      <div class="opacity-20 tracking-wide">
        <p>2024 Abdullah ElMetwali. All Rights Reserved</p>
      </div>
    </div>
  </footer>
  <RouterView />
</template>
