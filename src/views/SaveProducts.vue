<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mt-6 mb-20">Laden Sie Ihr Produkte</h1>
  </div>

  <div class="flex flex-col items-center my-2">
    <div class="flex gap-48">
      <div class="flex flex-col gap-3">
        <fieldset class="form-group flex items-center gap-2">
          <h3 class="w-[10vw] font-bold text-[20px]">Firma:</h3>
          <input
            required
            v-model="firma"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="firma"
            name="firma"
          />
        </fieldset>
        <div class="flex items-center gap-2">
          <h3 class="w-[10vw] font-bold text-[20px]">Produktname:</h3>
          <input
            required
            v-model="produktName"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="produktName"
            name="produktName"
          />
        </div>
        <div class="flex items-center gap-2">
          <h3 class="w-[10vw] font-bold text-[20px]">Gewicht (kg):</h3>
          <input
            required
            v-model="gewicht"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="gewicht"
            name="gewicht"
            @input="formatGewicht"
          />
        </div>
        <div class="flex items-center gap-2">
          <h3 class="w-[10vw] font-bold text-xl">Produkt Bild:</h3>
          <input
            class="form-control w-[30vw] text-[15px]"
            type="file"
            id="formFileMultiple"
            multiple
            @change="previewImage($event)"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-bold text-[18px]">Halal:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '1')"
            v-model="halal"
            name="halal"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-bold text-[18px]">Vegan:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '1')"
            v-model="vegan"
            name="vegan"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-bold text-[18px]">Vegetarian:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '1')"
            v-model="vegetarian"
            name="vegetarian"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>

        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-bold text-[18px]">Alkohol:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="alkohol"
            name="alkohol"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>

        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-bold text-[18px]">Allergien:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="allergien"
            name="allergien"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
      </div>
    </div>

    <button
      class="btn btn-primary mt-14 mb-20 w-[30vw] active:scale-95 transition-all"
      type="submit"
      @click="showInputs"
    >
      Enter
    </button>
  </div>

  <v-table
    density="compact"
    v-if="showSubmittedInputs"
    class="w-[95vw] mx-auto"
  >
    <thead>
      <tr class="bg-slate-100">
        <th class="text-[15px] font-bold w-[10vw]">FIRMA</th>
        <th class="text-[15px] font-bold w-[10vw]">PRODUKT</th>
        <th class="text-[15px] font-bold w-[10vw]">GEWICHT (kg)</th>
        <th class="text-[15px] font-bold w-[10vw]">BILD</th>
        <th class="text-[15px] font-bold w-[10vw]">HALAL</th>
        <th class="text-[15px] font-bold w-[10vw]">VEGAN</th>
        <th class="text-[15px] font-bold w-[10vw]">VEGETARIAN</th>
        <th class="text-[15px] font-bold w-[10vw]">ALKOHOL</th>
        <th class="text-[15px] font-bold w-[10vw]">ALLERGIEN</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-[15px] w-[20vw]">{{ firma }}</td>
        <td class="text-[15px] w-[20vw]">{{ produktName }}</td>
        <td class="text-[15px] w-[20vw]">{{ gewicht }}</td>
        <td class="text-[15px] w-[20vw]">
          <img
            v-if="selectedImage"
            :src="selectedImage"
            alt="Image of the product"
            style="max-width: 50px; max-height: 55px"
          />
        </td>
        <td class="text-[15px] w-[20vw]">
          <span
            :class="{
              'text-green-500': halal === '1',
              'text-red-500': halal === '2',
            }"
            >{{ halal === '1' ? 'Ja' : 'Nein' }}</span
          >
        </td>
        <td class="text-[15px] w-[20vw]">
          <span
            :class="{
              'text-green-500': vegan === '1',
              'text-red-500': vegan === '2',
            }"
            >{{ vegan === '1' ? 'Ja' : 'Nein' }}</span
          >
        </td>
        <td class="text-[15px] w-[20vw]">
          <span
            :class="{
              'text-green-500': vegetarian === '1',
              'text-red-500': vegetarian === '2',
            }"
            >{{ vegetarian === '1' ? 'Ja' : 'Nein' }}</span
          >
        </td>
        <td class="text-[15px] w-[20vw]">
          <span
            :class="{
              'text-red-500': alkohol === '1',
              'text-green-500': alkohol === '2',
            }"
            >{{ alkohol === '1' ? 'Ja' : 'Nein' }}</span
          >
        </td>
        <td class="text-[15px] w-[20vw]">
          <span
            :class="{
              'text-red-500': allergien === '1',
              'text-green-500': allergien === '2',
            }"
            >{{ allergien === '1' ? 'Ja' : 'Nein' }}</span
          >
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import * as Yup from 'yup';
import { VTable } from 'vuetify/components';

const firma = ref('');
const produktName = ref('');
const gewicht = ref('');
const halal = ref('');
const vegan = ref('');
const vegetarian = ref('');
const alkohol = ref('');
const allergien = ref('');
const selectedImage = ref('');

const showSubmittedInputs = ref(false);
const showInputs = () => {
  schema
    .validate({
      firma: firma.value,
      produktName: produktName.value,
      gewicht: gewicht.value,
      halal: halal.value,
      vegan: vegan.value,
      vegetarian: vegetarian.value,
      alkohol: alkohol.value,
      allergien: allergien.value,
    })
    .then(() => {
      showSubmittedInputs.value = true;
    })
    .catch((error) => {
      console.error(error.message);
    });
};

const schema = Yup.object().shape({
  firma: Yup.string()
    .min(2, 'Firmenname muss mindestens 2 Zeichen sein')
    .required('Firmenname wird benötigt'),
  produktName: Yup.string()
    .min(1, 'Produktname muss mindestens 1 Zeichen sein')
    .required('Produktname wird benötigt'),
  gewicht: Yup.string()
    .min(1, 'Gewicht muss mindestens 1 Zeichen sein')
    .required('Gewicht wird benötigt'),
  halal: Yup.string().required('Bitte wählen Sie eine Option aus'),
  vegan: Yup.string().required('Bitte wählen Sie eine Option aus'),
  vegetarian: Yup.string().required('Bitte wählen Sie eine Option aus'),
  alkohol: Yup.string().required('Bitte wählen Sie eine Option aus'),
  allergien: Yup.string().required('Bitte wählen Sie eine Option aus'),
});

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

const formatGewicht = () => {
  let formatValue = parseFloat(gewicht.value.replace(',', '.')).toLocaleString(
    'de-DE'
  );
  if (formatValue === 'NaN') {
    formatValue = '';
  }
  gewicht.value = formatValue;
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
