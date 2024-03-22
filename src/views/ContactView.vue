<script setup>
import ArrowIcon from '../../src/components/IconsSVGs/ArrowIcon.vue'
import FacebookSVG from '../../src/components/IconsSVGs/FacebookSVG.vue'
import InstaSVG from '../../src/components/IconsSVGs/InstaSVG.vue'
import YoutubeSVG from '../../src/components/IconsSVGs/YoutubeSVG.vue'
import ViewProjectBtn from '../../src/components/ViewProjectBtn.vue'
import TestimonialSec from '../../src/components/TestimonialSec.vue'
import FooterComp from '../../src/components/FooterComp.vue'
</script>

<template>
  <main class="flex px-12 mb-6 relative tablet:flex-col-reverse tablet:gap-8">
    <div class="absolute top-48 tablet:relative tablet:top-0">
      <p class="text-main tracking-wide font-thin">CONTACT ME</p>
      <h1 class="tracking-wider font-semibold text-[2.6rem] mobile:text-[2rem]">
        GET IN TOUCH WITH ME
      </h1>
      <article class="text-main tracking-wide font-thin w-2/3 tablet:w-full">
        Step into a world of timeless photography with Damien Braun. Explore our rand of photography
        services, each crafted to tell your unique story through captivating images. Whether it's
        the magic of portraits, the emotions of events, or the allure of commercial photography,
        we're here to bring your vision to life.
      </article>
    </div>
    <div class="flex gap-2 absolute right-16 top-20 tablet:hidden">
      <FacebookSVG class="w-12 h-12" />
      <InstaSVG class="w-12 h-12" />
      <YoutubeSVG class="w-12 h-12" />
    </div>
    <img src="/Imgs/imageOne.png" class="block tablet:hidden" />
    <img src="/Imgs/imageTwo.png" class="hidden tablet:block my-6" />
    <p class="opacity-50 absolute right-16 bottom-3 tablet:hidden">
      SCROLL DOWN TO SEND <br />
      ME A MESSAGE
    </p>
  </main>
  <span class="w-full bg-button h-[1px] block mt-10"></span>
  <section class="px-12 mt-8">
    <div class="flex gap-8 mobile:flex-col">
      <div>
        <h2 class="text-main text-3xl tracking-wider mb-7">CONTACT INFORMATION</h2>
        <p class="text-main font-thin tracking-wide">
          Feel free to reach to us through various channels. We are <br />
          available by phone, email and social media for your convenience.
        </p>
      </div>
      <ViewProjectBtn>
        <a href="tel:+1-2345-67890" class="text-xl">+1-2345-67890</a>
      </ViewProjectBtn>
      <ViewProjectBtn>
        <a href="mailto:info@damienbraun.com" class="text-xl">info@damienbraun.com</a>
      </ViewProjectBtn>
    </div>
    <span class="w-full bg-button h-[1px] block mt-10"></span>
    <div class="flex my-8 gap-20 tablet:flex-col">
      <div>
        <h2 class="text-main text-3xl tracking-wider mb-7">SEND ME A MESSAGE</h2>
        <p class="text-main font-thin tracking-wide">
          Have a specific inquiry or a message for us ? Please use the <br />
          contact form below, and we'll get back to you promptly.
        </p>
      </div>
      <div>
        <form action="#" method="post" autocomplete="on">
          <div class="flex gap-8 mb-8 tablet:grid">
            <div>
              <label for="firstName">First Name</label> <br />
              <input type="text" id="firstName" placeholder="FIRST NAME" required class="mobile:w-full" />
            </div>
            <div>
              <label for="lastName">Last Name</label> <br />
              <input type="text" id="lastName" placeholder="LAST NAME" required />
            </div>
          </div>

          <div class="flex gap-8 mb-8 tablet:grid">
            <div>
              <label for="theEmail">Email</label> <br />
              <input type="email" id="theEmail" placeholder="EMAIL ADDRESS" required />
            </div>
            <div>
              <label for="theNumber">Phone Number</label> <br />
              <input type="number" id="theNumber" placeholder="PHONE NUMBER" required />
            </div>
          </div>
          <label for="theMessgae">Your Message</label> <br />
          <textarea name="message" id="theMessage" cols="30" rows="1" placeholder="MESSAGE"
            class="bg-transparent w-full resize-none"></textarea>
          <div class="flex my-8 gap-2">
            <h2 class="text-4xl tracking-wider">SEND MESSAGE</h2>
            <button type="submit">
              <ArrowIcon class="h-10" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <TestimonialSec />
  <FooterComp />
</template>
<style scoped>
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

input,
textarea {
  background: transparent;
  border: 1px solid transparent;
  border-bottom-color: #7a7a7a;
  padding: 1rem 0;
  width: 100%;
}

label {
  color: #7a7a7a;
  letter-spacing: 0.025em;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 1rem;
}
</style>
