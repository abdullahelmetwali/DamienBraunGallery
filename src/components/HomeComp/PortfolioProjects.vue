<template>
  <section class="px-12">
    <div class="flex justify-between items-start my-10 mobile:grid">
      <div>
        <p class="text-main tracking-wider font-thin">PORTFOLIO</p>
        <h1 class="tracking-wide font-semibold text-3xl">EXPLORE MY PHOTOGRAPHY WORK.</h1>
      </div>
      <div class="my-6">
        <ForButtons class="w-36 rounded-lg">
          <a href="#">View All Services</a>
        </ForButtons>
      </div>
    </div>
    <div class="flex gap-4 items-center mobile:grid">
      <div :key="Project" v-for="Project in HomeProjects" class="w-fit">
        <img :src="Project.source" class="cursor-pointer" />
        <div class="flex justify-between items-start py-2">
          <div>
            <h2 class="text-[#d3d3d3] tracking-wider text-xl">{{ Project.title }}</h2>
            <span class="text-main tracking-wide">{{ Project.date }} </span>
          </div>
          <ViewProjectBtn>
            <RouterLink to="/testcomponent">VIEW PROJECT</RouterLink>
          </ViewProjectBtn>
        </div>
      </div>
    </div>
  </section>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ForButtons from '../../../src/components/ForButtons.vue'
import ViewProjectBtn from '../../../src/components/ViewProjectBtn.vue'
import allData from '../../../src/json/allData.json'
const HomeProjects = allData.HomePortfolioProjects
</script>
