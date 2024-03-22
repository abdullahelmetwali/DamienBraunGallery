<script setup>
import ViewProjectBtn from '../../src/components/ViewProjectBtn.vue'
import FAQsSec from '../../src/components/FAQsSec.vue'
import FooterComp from '../../src/components/FooterComp.vue'
import allData from '../../src/json/allData.json'
const Projects = allData.PortfolioAllProjects;
const Logos = allData.TrustedBrandsLogos

</script>

<template>
  <main class="flex flex-col p-12 relative tablet:flex-col-reverse">
    <div class="absolute tablet:relative">
      <p class="text-main tracking-wide font-thin">PORTFOLIO</p>
      <h1 class="tracking-wider font-semibold text-[2.6rem] mobile:text-[2rem]">
        VISUAL POETRY IN PIXELS
      </h1>
      <article class="text-main tracking-wide font-thin w-2/3 tablet:w-full">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil placeat ipsa voluptate magni
        reprehenderit reiciendis quibusdam totam adipisci ex. Voluptatibus esse natus adipisci
        debitis velit quae, saepe quam. Odit, aperiam. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Quibusdam beatae optio praesentium ut, quos voluptas ipsum obcaecati enim
        aliquam perspiciatis, iure, harum fugiat aliquid fuga dolores ad ipsa natus excepturi?
      </article>
    </div>
    <div>
      <img src="/Imgs/Portfolio-Des.png" class="block tablet:hidden" />
      <img src="/Imgs/Portfolio-Mob.png" class="hidden tablet:block my-6 w-full" />
    </div>
  </main>
  <div class="py-10">
    <h2 class="text-main text-center font-light tracking-wider mb-4">BRANDS I HAVE WORKED WITH</h2>
    <div class="flex bg-button overflow-hidden">
      <div class="inline-flex animate-slide">
        <div :key="Logo" v-for="Logo in Logos">
          <img :src="Logo" class="max-w-fit" />
        </div>
      </div>
    </div>
  </div>
  <section class="p-12">
    <div :key="Project" v-for="Project in Projects">
      <h1 class="text-main tracking-wide font-semibold text-3xl my-4">{{ Project.projectHeader }}</h1>
      <div class="flex items-center gap-4 my-4 mobile:grid">
        <div :key="theDetails" v-for="theDetails in Project.projectItems">
          <img :src="theDetails.img" :alt="theDetails.caption" class="cursor-pointer" />
          <div class="flex justify-between items-baseline">
            <h2 class="text-[#d3d3d3] tracking-wider text-xl mt-2">{{ theDetails.caption }}</h2>
            <view-project-btn>
              <router-link to="/testcomponent">VIEW PROJECT</router-link>
            </view-project-btn>
          </div>
          <span class="text-main tracking-wide"> {{ theDetails.date }} </span>
        </div>
      </div>
      <span class="w-full bg-button h-[1px] block mt-10"></span>
    </div>
  </section>
  <FAQsSec />
  <FooterComp />
</template>
