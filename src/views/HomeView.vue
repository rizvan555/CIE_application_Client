<template>
  <div>Homeview</div>

  <div class="input-group my-20 w-[50vw] mx-auto">
    <input
      v-model="search"
      type="text"
      class="form-control"
      placeholder=""
      aria-describedby="button-addon2"
      name="search"
      @keyup.enter="handleSubmit"
    />
    <button
      class="btn btn-outline-secondary"
      type="submit"
      id="button-addon2"
      @click="handleSubmit"
    >
      Suche
    </button>
  </div>

  <div class="grid grid-cols-2 mx-auto w-[80vw] gap-2">
    <div
      v-if="searchData.length > 0"
      v-for="product in searchData"
      :key="product.id"
      class="flex flex-col items-center gap-1 border rounded px-3 py-2"
    >
      <div class="flex border-b-2 py-2">
        <div class="flex flex-col gap-2 px-3 py-2">
          <div class="flex items-center gap-4">
            <p class="w-20"><b>Company:</b></p>
            <p class="w-40">{{ product.company }}</p>
          </div>
          <div class="flex items-center gap-4">
            <p class="w-20"><b>Brand:</b></p>
            <p class="w-40">{{ product.brand }}</p>
          </div>
          <div class="flex items-center gap-4">
            <p class="w-20"><b>Product:</b></p>
            <p class="w-40">{{ product.model }}</p>
          </div>
          <div class="flex items-center gap-4">
            <p class="w-20"><b>Weight:</b></p>
            <p class="w-40">{{ product.weight }} (kg/l)</p>
          </div>
        </div>
        <div class="">
          <img
            :src="product.image"
            alt="Product image"
            class="h-[13vw] w-[17vw]"
          />
        </div>
      </div>

      <div class="flex gap-7 my-2">
        <div
          class="flex flex-col justify-center items-center gap-1 border-r-2 pr-5"
        >
          <p><b>Halal</b></p>
          <p
            :class="product.halal === 'ja' ? 'text-green-500' : 'text-red-500'"
          >
            {{ product.halal }}
          </p>
        </div>
        <div
          class="flex flex-col justify-center items-center gap-1 border-r-2 pr-5"
        >
          <p><b>Vegan</b></p>
          <p
            :class="product.vegan === 'ja' ? 'text-green-500' : 'text-red-500'"
          >
            {{ product.vegan }}
          </p>
        </div>
        <div
          class="flex flex-col justify-center items-center gap-1 border-r-2 pr-5"
        >
          <p><b>Vegetarian</b></p>
          <p
            :class="
              product.vegetarian === 'ja' ? 'text-green-500' : 'text-red-500'
            "
          >
            {{ product.vegetarian }}
          </p>
        </div>
        <div
          class="flex flex-col justify-center items-center gap-1 border-r-2 pr-5"
        >
          <p><b>Alkohol</b></p>
          <p
            :class="
              product.alcohol === 'nein' ? 'text-green-500' : 'text-red-500'
            "
          >
            {{ product.alcohol }}
          </p>
        </div>
        <div class="flex flex-col justify-center items-center gap-1">
          <p><b>Allergien</b></p>
          <p
            :class="
              product.allergic === 'nein' ? 'text-green-500' : 'text-red-500'
            "
          >
            {{ product.allergic }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const search = ref('');
const searchData = ref([]);

const handleSubmit = async () => {
  try {
    if (search.value.trim() !== '') {
      const response = await axios.get(`/api/api/products/getAllProducts`);
      searchData.value = response.data.filter(
        (product: any) =>
          product.brand.toLowerCase().includes(search.value.toLowerCase()) ||
          product.company.toLowerCase().includes(search.value.toLowerCase()) ||
          product.model.toLowerCase().includes(search.value.toLowerCase()) ||
          product.image.toLowerCase().includes(search.value.toLowerCase()) ||
          product.halal.toLowerCase().includes(search.value.toLowerCase())
      );
      console.log('Search results:', searchData);
    } else {
      console.log('Please enter a search term.');
    }
  } catch (error) {
    console.error('error', error);
  }
};
</script>
