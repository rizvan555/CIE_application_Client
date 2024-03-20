<template>
  <div class="h-[90vh] overflow-scroll font-open-sans">
    <h1 class="text-center my-7 font-bold text-4xl">Produkt Suche</h1>
    <div class="input-group my-10 w-[50vw] mx-auto">
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

      <button @click="toggleCameraState">
        <QrcodeOutlined />
      </button>

      <qrcode-stream
        :formats="barcodeFormats"
        :paused="paused"
        @detect="onDetect"
        @error="onError"
        @camera-on="resetValidationState"
        class="w-[100vw] mt-5"
        v-if="!cameraActive"
      >
        <div v-if="validationSuccess" class="validation-success">OK</div>
        <div v-if="validationFailure" class="validation-failure">ERROR</div>
        <div v-if="validationPending" class="validation-pending">READING</div>
        <div class="loading-indicator" v-if="!cameraDetected">
          <p class="text-secondary">
            Durch die Gewährung des Zugriffs auf die Kamera können Sie die
            manuelle Eingabe des Codes durch Scannen vermeiden.
          </p>
        </div>
      </qrcode-stream>
    </div>
    <div class="grid grid-cols-2 w-[80vw] mx-auto gap-4">
      <button
        class=""
        type="submit"
        v-if="searchData.length > 0"
        v-for="product in searchData"
        :key="product.id"
        @click="() => selectResultProduct(product.id)"
      >
        <div
          class="flex flex-col items-center gap-1 border rounded px-3 mb-6 hover:scale-105 transition-all result-box"
        >
          <div class="flex border-b-2 py-2">
            <div class="flex flex-col gap-2 px-3 py-2 text-start">
              <div class="flex items-start gap-4">
                <p class="w-20"><b>Company:</b></p>
                <p class="w-40">{{ product.company }}</p>
              </div>
              <div class="flex items-start gap-4">
                <p class="w-20"><b>Brand:</b></p>
                <p class="w-40">{{ product.brand }}</p>
              </div>
              <div class="flex items-start gap-4">
                <p class="w-20"><b>Product:</b></p>
                <p class="w-40">{{ product.model }}</p>
              </div>
              <div class="flex items-start gap-4">
                <p class="w-20"><b>Weight:</b></p>
                <p class="w-40">{{ product.weight }} (g)</p>
              </div>
            </div>
            <div class="border-l ml-5">
              <img
                :src="product.image"
                alt="Product image"
                class="h-[13vw] w-[17vw]"
              />
            </div>
          </div>

          <div class="flex gap-9 my-2 pb-2">
            <div
              class="flex flex-col justify-center items-center gap-1 border-r-2 pr-5"
            >
              <p class="text-gray-600 text-[14px]"><b>Halal</b></p>
              <p
                class="text-[14px]"
                :class="
                  product.halal === 'ja' ? 'text-green-500' : 'text-red-500'
                "
              >
                {{ product.halal }}
              </p>
            </div>
            <div
              class="flex flex-col justify-center items-center gap-1 border-r-2 pr-5"
            >
              <p class="text-gray-600 text-[14px]"><b>Vegan</b></p>
              <p
                class="text-[14px]"
                :class="
                  product.vegan === 'ja' ? 'text-green-500' : 'text-red-500'
                "
              >
                {{ product.vegan }}
              </p>
            </div>
            <div
              class="flex flex-col justify-center items-center gap-1 border-r-2 pr-5"
            >
              <p class="text-gray-600 text-[14px]"><b>Vegetarian</b></p>
              <p
                class="text-[14px]"
                :class="
                  product.vegetarian === 'ja'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ product.vegetarian }}
              </p>
            </div>
            <div
              class="flex flex-col justify-center items-center gap-1 border-r-2 pr-5"
            >
              <p class="text-gray-600 text-[14px]"><b>Alkohol</b></p>
              <p
                class="text-[14px]"
                :class="
                  product.alcohol === 'nein' ? 'text-green-500' : 'text-red-500'
                "
              >
                {{ product.alcohol }}
              </p>
            </div>
            <div class="flex flex-col justify-center items-center gap-1">
              <p class="text-gray-600 text-[14px]"><b>Allergien</b></p>
              <p
                class="text-[14px]"
                :class="
                  product.allergic === 'nein'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ product.allergic }}
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, getCurrentInstance } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import OpenSans from '../../assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf';
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader';
import { computed } from 'vue';
import { QrcodeOutlined } from '@ant-design/icons-vue';

const decodedString = ref('');
const search = ref('');
const searchData = ref([]);
const selectedProduct = ref({});
const router = useRouter();
const isValid = ref(undefined);
const paused = ref(false);
const result = ref(null);
const cameraDetected = ref(false);
const instance = getCurrentInstance();
const cameraActive = ref(false);
const toggleCamera = ref(false);

const handleSubmit = async () => {
  try {
    if (search.value.trim().length >= 3) {
      const response = await axios.get(`/api/api/products/getAllProducts`);
      searchData.value = response.data.filter(
        (product: any) =>
          product.brand.toLowerCase() === search.value.toLowerCase() ||
          product.company.toLowerCase() === search.value.toLowerCase() ||
          product.model.toLowerCase() === search.value.toLowerCase() ||
          product.image.toLowerCase() === search.value.toLowerCase()
      );
      console.log('Search results:', searchData);
    } else {
      console.log('Please enter a search term.');
    }
  } catch (error) {
    console.error('error', error);
  }
};

const selectResultProduct = async (productId: number) => {
  try {
    const response = await axios.get(
      `/api/api/products/getAllProducts/${productId}`
    );
    selectedProduct.value = response.data;
    router.push({ name: 'SelectedProduct', params: { id: productId } });
    console.log('Selected product:', response.data);
  } catch (error) {
    console.error('error', error);
  }
};

const barcodeFormats = [
  'aztec',
  'code_128',
  'code_39',
  'code_93',
  'codabar',
  'data_matrix',
  'ean_13',
  'ean_8',
  'itf',
  'pdf417',
  'qr_code',
  'upc_a',
  'upc_e',
  'unknown',
];

const toggleCameraState = () => {
  cameraActive.value = !cameraActive.value;
  if (cameraActive.value) {
    console.log('Kamera active');
  } else {
    console.log('Kamera inactive');
  }
};

const validationPending = computed(
  () => isValid.value === undefined && paused.value
);
const validationSuccess = computed(() => isValid.value === true);
const validationFailure = computed(() => isValid.value === false);

const onError = console.error;

const resetValidationState = () => {
  isValid.value = undefined;
  cameraDetected.value = true;
};

const onDetect = async ([firstDetectedCode]) => {
  result.value = firstDetectedCode.rawValue;
  paused.value = true;

  const decodedUrl = firstDetectedCode.rawValue;
  window.location.href = decodedUrl;

  await timeout(2000);
  isValid.value = result.value.length > 5;

  await timeout(1500);
  paused.value = false;
};

const timeout = (ms) => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
};
</script>
