<template>
  <div class="mt-[7vw]">
    <div class="flex items-center justify-center gap-4 w-[60vw] mx-auto">
      <div class="flex items-center justify-center mx-auto my-32">
        <div class="flex flex-col gap-2">
          <h2 class="flex gap-3 text-3xl mb-2">
            <b>
              {{ selectedProduct.brand }}
            </b>
            <p>{{ selectedProduct.model }}</p>
            <p>- {{ selectedProduct.weight }} (kg/l)</p>
          </h2>
          <!-- <h4 class="flex items-center gap-2 mt-8">
            <p class="text-[18px] font-semibold w-28">Company:</p>
            <p>{{ selectedProduct.company }}</p>
          </h4>
          <h4 class="flex items-center gap-2">
            <p class="text-[18px] font-semibold w-28">Brand:</p>
            <p>{{ selectedProduct.brand }}</p>
          </h4>
          <h4 class="flex items-center gap-2">
            <p class="text-[18px] font-semibold w-28">Product:</p>
            <p>{{ selectedProduct.model }}</p>
          </h4>
          <h4 class="flex items-center gap-2 mb-5">
            <p class="text-[18px] font-semibold w-28">Weight:</p>
            <p>{{ selectedProduct.weight }} (kg/l)</p>
          </h4>
          <hr /> -->

          <div class="flex flex-col gap-3 my-2">
            <div class="flex items-center gap-4">
              <p class="w-[6vw]"><b>Halal:</b></p>
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
            <div class="flex items-center gap-4">
              <p class="w-[6vw]"><b>Vegan:</b></p>
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
            <div class="flex items-center gap-4">
              <p class="w-[6vw]"><b>Vegetarian:</b></p>
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
            <div class="flex items-center gap-4">
              <p class="w-[6vw]"><b>Alkohol:</b></p>
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
            <div class="flex items-center gap-4">
              <p class="w-[6vw]"><b>Allergien:</b></p>
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
