<template>
  <section class="px-12">
    <div>
      <p class="text-main tracking-wider font-thin">FAQ'S</p>
      <h1 class="tracking-wide font-semibold text-3xl">FREQUENTLY ASKED QUESTIONS</h1>
    </div>
    <div class="grid gap-7 grid-cols-2 my-10 mobile:grid-cols-1">
      <div :key="FAQ" v-for="FAQ in FAQs">
        <div class="flex gap-3 justify-between">
          <h2 class="text-[#d3d3d3] text-xl tracking-wide">{{ FAQ.question }}</h2>
          <div>
            <GetIn @click="FAQ.isBlind = !FAQ.isBlind" :class="{ hidden: FAQ.isBlind }" class="cursor-pointer" />
            <GetOut @click="FAQ.isBlind = !FAQ.isBlind" class="cursor-pointer" :class="{ hidden: !FAQ.isBlind }" />
          </div>
        </div>
        <p class="text-main my-3 tracking-wide font-thin" v-show="FAQ.isBlind">{{ FAQ.answer }}</p>
      </div>
    </div>
    <div></div>
  </section>
</template>

<script>
import GetIn from '../../src/components/IconsSVGs/GetInIcon.vue'
import GetOut from '../../src/components/IconsSVGs/GetOutIcon.vue'
import allData from '../../src/json/allData.json'

export default {
  data() {
    return {
      FAQs : allData.FAQs
    }
  },
  components: {
    GetIn,
    GetOut
  }
}
</script>
