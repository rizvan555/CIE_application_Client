<template>
  <div class="mt-[12vw]">
    <a href="/home" class="border px-3 py-1 ml-[3vw]"> <-</a>
    <div class="flex items-center justify-center gap-4 w-[60vw] mx-auto">
      <div class="flex items-center justify-center mx-auto gap-4">
        <div class="flex flex-col gap-2">
          <h2 class="flex flex-col gap-3 text-4xl mb-10 justify-center">
            <b>
              {{ selectedProduct.brand }}
            </b>
            <div class="flex text-[15px] leading-3 italic">
              <p>{{ selectedProduct.model }}</p>
              <p>- {{ selectedProduct.weight }}(g/ml)</p>
            </div>
          </h2>

          <div class="flex flex-col gap-2 my-2 w-[22vw]">
            <div class="flex items-center gap-4 hover-info" data-aos="fade-in">
              <p class="w-[18vw] text-gray-500 animation-result">
                <b>Halal:</b>
              </p>
              <p
                :class="
                  selectedProduct.halal === 'ja'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.halal }}
              </p>
              <div class="hover-info-content">
                <p>Halal Content</p>
              </div>
            </div>

            <hr />
            <div class="flex items-center gap-4 hover-info" data-aos="fade-in">
              <p class="w-[18vw] text-gray-500 animation-result">
                <b>Vegan:</b>
              </p>
              <p
                :class="
                  selectedProduct.vegan === 'ja'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.vegan }}
              </p>
              <div class="hover-info-content">
                <p>Vegan Content</p>
              </div>
            </div>
            <hr />
            <div class="flex items-center gap-4 hover-info" data-aos="fade-in">
              <p class="w-[18vw] text-gray-500 animation-result">
                <b>Vegetarian:</b>
              </p>
              <p
                :class="
                  selectedProduct.vegetarian === 'ja'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.vegetarian }}
              </p>
              <div class="hover-info-content">
                <p>Vegetarian Content</p>
              </div>
            </div>
            <hr />
            <div class="flex items-center gap-4 hover-info" data-aos="fade-in">
              <p class="w-[18vw] text-gray-500 animation-result">
                <b>Alkohol:</b>
              </p>
              <p
                :class="
                  selectedProduct.alcohol === 'ja'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.alcohol }}
              </p>
              <div class="hover-info-content">
                <p>Alkohol Content</p>
              </div>
            </div>
            <hr />
            <div class="flex items-center gap-4 hover-info" data-aos="fade-in">
              <p class="w-[18vw] text-gray-500 animation-result">
                <b>Allergien:</b>
              </p>
              <p
                :class="
                  selectedProduct.allergic === 'ja'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.allergic }}
              </p>
              <div class="hover-info-content">
                <div
                  class="grid grid-cols-1 border rounded px-2 py-2 w-[25vw] h-[25vw] bg-white"
                >
                  <div class="flex items-center justify-center gap-8">
                    <p class="font-semibold w-[15vw] text-gray-500">Gluten:</p>
                    <p
                      class="text-[13px]"
                      :class="
                        selectedProduct.gluten === 'ja'
                          ? 'text-green-500'
                          : 'text-red-500'
                      "
                    >
                      {{ selectedProduct.gluten }}
                    </p>
                  </div>
                  <div class="flex items-center justify-center gap-8">
                    <p class="font-semibold w-[15vw] text-gray-500">Fish:</p>
                    <p
                      class="text-[13px]"
                      :class="
                        selectedProduct.fish === 'ja'
                          ? 'text-green-500'
                          : 'text-red-500'
                      "
                    >
                      {{ selectedProduct.fish }}
                    </p>
                  </div>
                  <div class="flex items-center justify-center gap-8">
                    <p class="font-semibold w-[15vw] text-gray-500">Erdnuss:</p>
                    <p
                      class="text-[13px]"
                      :class="
                        selectedProduct.peanut === 'ja'
                          ? 'text-green-500'
                          : 'text-red-500'
                      "
                    >
                      {{ selectedProduct.peanut }}
                    </p>
                  </div>
                  <div class="flex items-center justify-center gap-8">
                    <p class="font-semibold w-[15vw] text-gray-500">
                      Krebstiere:
                    </p>
                    <p
                      class="text-[13px]"
                      :class="
                        selectedProduct.crustaceans === 'ja'
                          ? 'text-green-500'
                          : 'text-red-500'
                      "
                    >
                      {{ selectedProduct.crustaceans }}
                    </p>
                  </div>
                  <div class="flex items-center justify-center gap-8">
                    <p class="font-semibold w-[15vw] text-gray-500">Lupinen:</p>
                    <p
                      class="text-[13px]"
                      :class="
                        selectedProduct.lupins === 'ja'
                          ? 'text-green-500'
                          : 'text-red-500'
                      "
                    >
                      {{ selectedProduct.lupins }}
                    </p>
                  </div>
                  <div class="flex items-center justify-center gap-8">
                    <p class="font-semibold w-[15vw] text-gray-500">
                      Kuhmilch:
                    </p>
                    <p
                      class="text-[13px]"
                      :class="
                        selectedProduct.cowsmilk === 'ja'
                          ? 'text-green-500'
                          : 'text-red-500'
                      "
                    >
                      {{ selectedProduct.cowsmilk }}
                    </p>
                  </div>
                  <div class="flex items-center justify-center gap-8">
                    <p class="font-semibold w-[15vw] text-gray-500">Nuss:</p>
                    <p
                      class="text-[13px]"
                      :class="
                        selectedProduct.nuts === 'ja'
                          ? 'text-green-500'
                          : 'text-red-500'
                      "
                    >
                      {{ selectedProduct.nuts }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            :src="selectedProduct.image"
            alt="Product image"
            class="h-[25vw] w-[25vw]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const selectedProduct = ref({});
const router = useRouter();
const route = useRoute();

const carouselHover = (slide) => {
  if (slide === 2) {
  }
};

const beforeChange = (currentSlide, nextSlide) => {
  if (currentSlide !== 2 && nextSlide === 2) {
    console.log('Going to slide 2');
  }
};

const fetchSelectedProduct = async () => {
  try {
    const productId = Number(route.params.id);
    const response = await axios.get(
      `/api/api/products/getAllProducts/${productId}`
    );
    selectedProduct.value = response.data;
  } catch (error) {
    console.error('error', error);
  }
};
fetchSelectedProduct();
</script>
