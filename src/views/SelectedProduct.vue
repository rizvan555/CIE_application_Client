<template>
  <div class="mt-[12vw]">
    <a href="/home" class="border px-3 py-1 ml-[3vw]"> <-</a>
    <div class="flex items-center justify-center gap-4 w-[60vw] mx-auto">
      <div class="flex items-center justify-center mx-auto">
        <div class="flex flex-col gap-2">
          <h2 class="flex gap-3 text-3xl mb-10">
            <b>
              {{ selectedProduct.brand }}
            </b>
            <p>{{ selectedProduct.model }}</p>
            <p>- {{ selectedProduct.weight }} (kg)</p>
          </h2>

          <div class="flex flex-col gap-3 my-2">
            <carousel :items-to-show="1">
              <slide v-for="slide in 2" :key="slide" class="">
                <div v-if="slide === 1" class="flex">
                  <p class="w-[18vw] text-gray-500">
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
                </div>
                <div v-else class="w-[10vw]">Halal Content</div>
              </slide>
              <template #addons>
                <navigation />
              </template>
            </carousel>

            <hr />
            <carousel :items-to-show="1">
              <slide v-for="slide in 2" :key="slide" class="">
                <div v-if="slide === 1" class="flex">
                  <p class="w-[18vw] text-gray-500">
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
                </div>
                <div v-else class="w-[10vw]">Vegan Content</div>
              </slide>
              <template #addons>
                <navigation />
              </template>
            </carousel>
            <hr />
            <carousel :items-to-show="1">
              <slide v-for="slide in 2" :key="slide" class="">
                <div v-if="slide === 1" class="flex">
                  <p class="w-[18vw] text-gray-500">
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
                </div>
                <div v-else class="w-[10vw]">Vegetarian Content</div>
              </slide>
              <template #addons>
                <navigation />
              </template>
            </carousel>
            <hr />
            <carousel :items-to-show="1">
              <slide v-for="slide in 2" :key="slide" class="">
                <div v-if="slide === 1" class="flex">
                  <p class="w-[18vw] text-gray-500">
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
                </div>
                <div v-else class="w-[10vw]">Alkohol Content</div>
              </slide>
              <template #addons>
                <navigation />
              </template>
            </carousel>
            <hr />
            <carousel :items-to-show="1">
              <slide v-for="slide in 2" :key="slide" class="">
                <div v-if="slide === 1" class="flex">
                  <p class="w-[18vw] text-gray-500">
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
                </div>
                <div v-else class="w-[10vw]">Allergien Content</div>
              </slide>
              <template #addons>
                <navigation />
              </template>
            </carousel>
            <hr />
          </div>
        </div>
        <div>
          <img
            :src="selectedProduct.image"
            alt="Product image"
            class="h-[20vw] w-[25vw]"
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
