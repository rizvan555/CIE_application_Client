<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mt-4 mb-10">Laden Sie Ihr Produkte</h1>
  </div>

  <div class="flex flex-col items-center my-2">
    <div class="flex gap-32">
      <div class="flex flex-col gap-2">
        <input
          v-model="firma"
          class="form-control form-control-lg w-[30vw]"
          type="text"
          placeholder="Firma"
          aria-label="firma"
        />
        <input
          v-model="produktName"
          class="form-control form-control-lg"
          type="text"
          placeholder="Produktname"
          aria-label="produktName"
        />
        <input
          v-model="gewicht"
          class="form-control form-control-lg"
          type="text"
          placeholder="Gewicht"
          aria-label="gewicht"
        />
        <input
          class="form-control"
          type="file"
          id="formFileMultiple"
          multiple
          @change="previewImage($event)"
        />
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
          <h4 class="w-[7vw]">Halal:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '1')"
            v-model="halal"
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[7vw]">Vegan:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '1')"
            v-model="vegan"
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[7vw]">Vegetarian:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '1')"
            v-model="vegetarian"
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>

        <div class="flex gap-2 items-center">
          <h4 class="w-[7vw]">Alkohol:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="alkohol"
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>

        <div class="flex gap-2 items-center">
          <h4 class="w-[7vw]">Allergik:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="allergik"
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
      </div>
    </div>

    <button class="btn btn-primary my-10" type="submit" @click="showInputs">
      Button
    </button>
  </div>

  <div v-if="showSubmittedInputs" class="flex flex-col items-center gap-2 my-6">
    <div class="flex w-[20vw]">
      <h5 class="font-bold w-[10vw]">Firma:</h5>
      {{ firma }}
    </div>
    <div class="flex w-[20vw]">
      <h5 class="font-bold w-[10vw]">Produktname:</h5>
      {{ produktName }}
    </div>
    <div class="flex w-[20vw]">
      <h5 class="font-bold w-[10vw]">Gewicht:</h5>
      {{ gewicht }}
    </div>
    <div class="flex w-[20vw]">
      <h5 class="font-bold w-[10vw]">Bild:</h5>
      <img
        v-if="selectedImage"
        :src="selectedImage"
        alt="Image of the product"
        style="max-width: 100px; max-height: 50px"
      />
    </div>
    <div class="flex w-[20vw]">
      <h5 class="font-bold w-[10vw]">Halal:</h5>
      <span
        :class="{
          'text-green-500': halal === '1',
          'text-red-500': halal === '2',
        }"
        >{{ halal === '1' ? 'Ja' : 'Nein' }}</span
      >
    </div>
    <div class="flex w-[20vw]">
      <h5 class="font-bold w-[10vw]">Vegan:</h5>
      <span
        :class="{
          'text-green-500': vegan === '1',
          'text-red-500': vegan === '2',
        }"
      >
        {{ vegan === '1' ? 'Ja' : 'Nein' }}</span
      >
    </div>
    <div class="flex w-[20vw]">
      <h5 class="font-bold w-[10vw]">Vegetarian:</h5>
      <span
        :class="{
          'text-green-500': vegetarian === '1',
          'text-red-500': vegetarian === '2',
        }"
        >{{ vegetarian === '1' ? 'Ja' : 'Nein' }}</span
      >
    </div>
    <div class="flex w-[20vw]">
      <h5 class="font-bold w-[10vw]">Alkohol:</h5>
      <span
        :class="{
          'text-red-500': alkohol === '1',
          'text-green-500': alkohol === '2',
        }"
        >{{ alkohol === '1' ? 'Ja' : 'Nein' }}</span
      >
    </div>
    <div class="flex w-[20vw]">
      <h5 class="font-bold w-[10vw]">Allergik:</h5>
      <span
        :class="{
          'text-red-500': allergik === '1',
          'text-green-500': allergik === '2',
        }"
        >{{ allergik === '1' ? 'Ja' : 'Nein' }}</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const firma = ref('');
const produktName = ref('');
const gewicht = ref('');
const halal = ref('');
const vegan = ref('');
const vegetarian = ref('');
const alkohol = ref('');
const allergik = ref('');
const selectedImage = ref('');

const showSubmittedInputs = ref(false);
const showInputs = () => {
  showSubmittedInputs.value = true;
};

const previewImage = (event) => {
  const fileList = event.target.files;
  if (fileList.length > 0) {
    const reader = new FileReader();
    reader.readAsDataURL(fileList[0]);
    reader.onload = () => {
      selectedImage.value = reader.result;
    };
  } else {
    selectedImage.value = '';
  }
};

const changeBackgroundColor = (event, option) => {
  const selectedOption = event.target.value;
  if (selectedOption === option) {
    event.target.classList.add('bg-green-500');
    event.target.classList.remove('bg-red-500');
  } else {
    event.target.classList.add('bg-red-500');
    event.target.classList.remove('bg-green-500');
  }
};
</script>
