<script setup>
import ForButtons from '../../../src/components/ForButtons.vue';
import FacebookSVG from '../../../src/components/IconsSVGs/FacebookSVG.vue';
import InstaSVG from '../../../src/components/IconsSVGs/InstaSVG.vue';
import YoutubeSVG from '../../../src/components/IconsSVGs/YoutubeSVG.vue';

</script>
<template>
  <section class="px-12">
    <div class="flex justify-between items-end my-10">
      <div>
        <p class="text-main tracking-wider font-thin">ABOUT</p>
        <h1 class="tracking-wide font-semibold text-3xl">I AM DAMIEN</h1>
      </div>
      <div>
        <ForButtons class="w-36 rounded-lg">
          <a href="#">Know More</a>
        </ForButtons>
      </div>
    </div>
    <div class="flex gap-8 tablet:grid mobile:grid">
      <div>
        <img src="/Imgs/personal.png" alt="Me" />
      </div>
      <div class="grid items-center w-[42rem] gap-10 tablet:w-auto">
        <div>
          <div class="inline-flex gap-2">
            <img src="/Icons/Star.svg" />
            <h1 class="text-3xl">Introduction</h1>
          </div>
          <div class="text-main">
            <article>
              My journey as a photographer has been a lifelong quest to capture the extraordinary in
              the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I
              see it. Based in the enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark on a visual odyssey
              where each photograph tells a story, and every frame is a piece of my heart.
            </article>
          </div>
        </div>
        <div>
          <div>
            <div class="inline-flex gap-2">
              <img src="/Icons/Star.svg" />
              <h1 class="text-3xl">Contact Information</h1>
            </div>
          </div>
          <div class="flex justify-between items-center my-8 mobile:grid">
            <div>
              <h2>Email</h2>
              <a href="mailto:example@example.com" class="text-main tracking-wider">damienbraun@gmail.com</a>
            </div>
            <div>
              <h2>Phone Number</h2>
              <a href="tel:+0000000000" class="text-main tracking-wider">+00 00000000</a>
            </div>
          </div>
          <div class="flex justify-between items-center mobile:grid gap-8">
            <div class="flex gap-2 w-fit">
              <FacebookSVG />
              <InstaSVG />
              <YoutubeSVG />
            </div>
            <div class="flex gap-6">
              <ForButtons class="w-36 rounded-lg mobile:mx-0">
                <a href="mailto:example@example.com"> Let's Work </a>
              </ForButtons>
              <ForButtons class="w-36 rounded-lg">
                <a href="path-to-file" download="path-to-file"> Download CV </a>
              </ForButtons>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
