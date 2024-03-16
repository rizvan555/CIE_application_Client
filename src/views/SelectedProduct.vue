<template>
  <div class="mt-[12vw]">
    <a href="/home" class="border px-3 py-1 ml-[3vw]"> <-</a>
    <div class="flex items-center justify-center gap-4 w-[60vw] mx-auto">
      <div class="flex items-center justify-center mx-auto">
        <div class="flex flex-col gap-2">
          <h2 class="flex gap-3 text-3xl mb-5">
            <b>
              {{ selectedProduct.brand }}
            </b>
            <p>{{ selectedProduct.model }}</p>
            <p>- {{ selectedProduct.weight }} (g)</p>
          </h2>

          <div class="flex flex-col gap-3 my-2">
            <div class="flex items-center gap-4">
              <p class="w-[17vw] text-gray-500"><b>Halal:</b></p>
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
            <hr />
            <div class="flex items-center gap-4">
              <p class="w-[17vw] text-gray-500"><b>Vegan:</b></p>
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
            <hr />
            <div class="flex items-center gap-4">
              <p class="w-[17vw] text-gray-500"><b>Vegetarian:</b></p>
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
            <hr />
            <div class="flex items-center gap-4">
              <p class="w-[17vw] text-gray-500"><b>Alkohol:</b></p>
              <p
                :class="
                  selectedProduct.alcohol === 'nein'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.alcohol }}
              </p>
            </div>
            <hr />
            <div class="flex items-center gap-4">
              <p class="w-[17vw] text-gray-500"><b>Allergien:</b></p>
              <p
                :class="
                  selectedProduct.allergic === 'nein'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.allergic }}
              </p>
            </div>
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
