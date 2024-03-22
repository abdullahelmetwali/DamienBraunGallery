<script setup>
import ViewProjectBtn from '../../src/components/ViewProjectBtn.vue'
import FAQsSection from '../../src/components/FAQsSec.vue'
import FooterComp from '../../src/components/FooterComp.vue'
import allData from '../../src/json/allData.json'
const Services = allData.Services
</script>
<template>
  <main class="flex px-12 my-8 tablet:flex-col-reverse">
    <div class="absolute left-72 tablet:relative tablet:left-0">
      <p class="text-main tracking-wide font-thin">Services</p>
      <h1 class="tracking-wider font-semibold text-[2.6rem] mobile:text-[2rem]">
        DIVERSE PHOTOGRAPHY OFFERINGS
      </h1>
      <article class="text-main tracking-wide font-thin w-2/3 tablet:w-full">
        Unlock the full spectrum of professional photography Services tailored to your vision. From
        timeless portraits to captivating event coverage, I bring a unique blend of creativity and
        technical expertise to each project.
      </article>
    </div>
    <div>
      <img src="/Imgs/imageSixteen.png" class="block tablet:hidden" />
      <img src="/Imgs/Image.png" class="hidden tablet:block my-6 w-full" />
    </div>
  </main>

  <span class="w-full bg-button h-[1px] block mt-10"></span>

  <section class="px-12 my-8">
    <div :key="Service" v-for="Service in Services" class="my-20">
      <div class="flex gap-4 mb-8 tablet:flex-col-reverse">
        <div class="tracking-wider w-[60%] opacity-90 tablet:w-full">
          <h1 class="text-3xl mb-6 tracking-widest">{{ Service.theHeader }}</h1>
          <article class="my-3">{{ Service.theContent }}</article>
          <view-project-btn>
            <a href="#"> VIEW PROJECTS </a>
          </view-project-btn>
        </div>
        <div>
          <img :src="Service.theImg" />
        </div>
      </div>

      <div>
        <div :key="theService" v-for="theService in Service.allServices"
          class="grid grid-cols-2 items-center my-10 mobile:grid-cols-1">
          <div class="tracking-wider opacity-90">
            <h2 class="font-light">{{ theService.theTitle }}</h2>
            <p class="text-6xl my-2" v-html="theService.thePrice"></p>
            <ViewProjectBtn>
              <a href="tel:+000 0000000 "> BOOK A CALL </a>
            </ViewProjectBtn>
          </div>
          <div>
            <div :key="Description" v-for="Description in theService.sessionDescriptions">
              <div class="flex items-center p-3 border-solid border-d border-[#141414] rounded-xl my-2 gap-2">
                <img src="/Icons/Clip path group.svg" class="opacity-40 w-6" />
                <p class="font-thin tracking-wider opacity-80">{{ Description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="w-full bg-button h-[1px] block mt-10"></span>
    </div>
  </section>
  <FAQsSection />
  <FooterComp />
</template>
