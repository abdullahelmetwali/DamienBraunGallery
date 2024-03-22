<script>
import { RouterLink, RouterView } from 'vue-router'
import ForButtons from '../src/components/ForButtons.vue'
import MenuBtn from '../src/components/MenuBtn.vue'
import XIcon from '../src/components/IconsSVGs/XmarkIcon.vue'
export default {
  components: {
    MenuBtn,
    ForButtons,
    RouterLink,
    RouterView,
    XIcon,
  },
  data() {
    return {
      isBlind: false,
      MenuBtnIcon: MenuBtn,
      XisIcon: XIcon,
      XRR: document.querySelector('#thisBox')
    }
  },
  methods: {
    isShown() {
      this.isBlind = !this.isBlind
      this.isBlind
        ? document.querySelector('.menu').classList.remove('mobile:hidden')
        : document.querySelector('.menu').classList.add('mobile:hidden');
    }
  }
}
</script>

<template>
  <nav class="flex justify-between items-end px-12 mb-6 tablet:px-1 mobile:items-start">
    <div class="flex gap-3 items-center relative z-0">
      <span class="block w-d h-16 bg-button"></span>
      <h1 class="text-3xl font-medium tracking-wider" v-if="MenuBtnIcon ? !isBlind : isBlind"
        :class="{ block: !isBlind }">
        DAMIEN
      </h1>
    </div>
    <div
      class="flex justify-end items-baseline gap-[17rem] w-auto tablet:gap-0 mobile:flex-col mobile:items-center mobile:w-full bg-main mobile:hidden menu">
      <div class="flex mt-4 mobile:flex-col text-center">
        <RouterLink to="/" class="py-4 px-6 hover:bg-hover">Home</RouterLink>
        <RouterLink to="/about" class="py-4 px-6 hover:bg-hover">About Me</RouterLink>
        <RouterLink to="/portfolio" class="py-4 px-6 hover:bg-hover">Portfolio</RouterLink>
        <RouterLink to="/services" class="py-4 px-6 hover:bg-hover">Services</RouterLink>
      </div>
      <div class="flex gap-3 items-center">
        <ForButtons class="px-6 rounded-lg mobile:bg-transparent">
          <RouterLink to="/contact">Contact Me</RouterLink>
        </ForButtons>
        <span class="block w-d h-16 bg-button mobile:hidden"></span>
      </div>
    </div>
    <div class="hidden mr-2 mobile:block">
      <MenuBtn @click="isShown" :class="{ hidden: isBlind }" />
      <XIcon @click="isShown" v-if="MenuBtnIcon ? isBlind : !isBlind" class="invisible mobile:visible" />
    </div>
  </nav>
  <RouterView />
</template>
