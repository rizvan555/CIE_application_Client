<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mt-6 mb-20">Laden Sie Ihr Produkte</h1>
  </div>

  <div class="flex flex-col items-center my-2">
    <div class="flex gap-48">
      <div class="flex flex-col gap-3">
        <div class="form-group flex items-center gap-2">
          <h3 class="w-[10vw] font-semibold text-[20px]">Firma:</h3>
          <input
            required
            v-model="company"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="company"
            name="company"
          />
        </div>
        <div class="form-group flex items-center gap-2">
          <h3 class="w-[10vw] font-semibold text-[20px]">Marke:</h3>
          <input
            required
            v-model="brand"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="brand"
            name="brand"
          />
        </div>
        <div class="flex items-center gap-2">
          <h3 class="w-[10vw] font-semibold text-[20px]">Model:</h3>
          <input
            required
            v-model="model"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="model"
            name="model"
          />
        </div>
        <div class="flex items-center gap-2">
          <h3 class="w-[10vw] font-semibold text-[20px]">Gewicht (g):</h3>
          <input
            required
            v-model="weight"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="weight"
            name="weight"
            @input="formatWeight"
          />
        </div>

        <div class="flex items-center gap-2">
          <h3 class="w-[10vw] font-semibold text-[20px]">Eiweiß(g):</h3>
          <input
            required
            v-model="protein"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="protein"
            name="protein"
          />
        </div>
        <div class="flex items-center gap-2">
          <h3 class="w-[10vw] font-semibold text-[20px]">Kalorien(kcal):</h3>
          <input
            required
            v-model="calories"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="calories"
            name="calories"
          />
        </div>
        <div class="flex items-center gap-2">
          <h3 class="w-[10vw] font-semibold text-[20px]">Zucker(g):</h3>
          <input
            required
            v-model="sugar"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="sugar"
            name="sugar"
          />
        </div>
        <div class="flex items-center gap-2">
          <h3 class="w-[10vw] font-semibold text-[20px]">Salz(g):</h3>
          <input
            required
            v-model="salt"
            class="form-control form-control-lg w-[30vw] text-[17px]"
            type="text"
            aria-label="salt"
            name="salt"
          />
        </div>

        <div class="flex items-center gap-2">
          <h3 class="w-[10vw] font-semibold text-xl">Produkt Bild:</h3>
          <input
            class="form-control w-[30vw] text-[15px]"
            type="file"
            id="formFileMultiple"
            multiple
            @change="previewImage($event)"
            name="image"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-semibold text-[18px]">Halal:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '1'), checkOptions()"
            v-model="halal"
            name="halal"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-semibold text-[18px]">Vegan:</h4>
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
          <h4 class="w-[8vw] font-semibold text-[18px]">Vegetarian:</h4>
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
          <h4 class="w-[8vw] font-semibold text-[18px]">Alkohol:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2'), checkOptions()"
            v-model="alcohol"
            name="alcohol"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-semibold text-[18px]">Allergien:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="allergic"
            name="allergic"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-semibold text-[18px]">Erdnuss:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="peanut"
            name="peanut"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-semibold text-[18px]">Gluten:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="gluten"
            name="gluten"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-semibold text-[18px]">Fisch:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="fish"
            name="fish"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-semibold text-[18px]">Krebstiere:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="crustaceans"
            name="crustaceans"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-semibold text-[18px]">Lupinen:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="lupins"
            name="lupins"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-semibold text-[18px]">Kuhmilch:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="cowsmilk"
            name="cowsmilk"
            required
          >
            <option value="1">Ja</option>
            <option value="2">Nein</option>
          </select>
        </div>
        <div class="flex gap-2 items-center">
          <h4 class="w-[8vw] font-semibold text-[18px]">Nüsse:</h4>
          <select
            class="form-select w-[6vw]"
            @change="changeBackgroundColor($event, '2')"
            v-model="nuts"
            name="nuts"
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
      @click="handleSubmit"
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
        <th class="text-[15px] font-bold w-[10vw]">MARKE</th>
        <th class="text-[15px] font-bold w-[10vw]">MODEL</th>
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
        <td class="text-[15px] w-[20vw]">{{ company }}</td>
        <td class="text-[15px] w-[20vw]">{{ brand }}</td>
        <td class="text-[15px] w-[20vw]">{{ model }}</td>
        <td class="text-[15px] w-[20vw]">{{ weight }}</td>
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
              'text-red-500': alcohol === '1',
              'text-green-500': alcohol === '2',
            }"
            >{{ alcohol === '1' ? 'Ja' : 'Nein' }}</span
          >
        </td>
        <td class="text-[15px] w-[20vw]">
          <span
            :class="{
              'text-red-500': allergic === '1',
              'text-green-500': allergic === '2',
            }"
            >{{ allergic === '1' ? 'Ja' : 'Nein' }}</span
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
import axios from 'axios';

const company = ref('');
const brand = ref('');
const model = ref('');
const weight = ref('');
const image = ref('');
const halal = ref('');
const vegan = ref('');
const vegetarian = ref('');
const alcohol = ref('');
const allergic = ref('');
const peanut = ref('');
const gluten = ref('');
const fish = ref('');
const crustaceans = ref('');
const lupins = ref('');
const cowsmilk = ref('');
const nuts = ref('');
const protein = ref('');
const calories = ref('');
const sugar = ref('');
const salt = ref('');

const products = ref<Products[]>([]);

const showSubmittedInputs = ref(false);
const checkOptions = () => {
  if (halal.value === '1') {
    alcohol.value = '2';
    alcoholDisabled = true;
  } else if (alcohol.value === '1') {
    halal.value = '2';
    halalDisabled = true;
  } else {
    alcoholDisabled = false;
    halalDisabled = false;
  }
};

const previewImage = (event) => {
  const fileList = event.target.files;
  if (fileList.length > 0) {
    const reader = new FileReader();
    reader.readAsDataURL(fileList[0]);
    reader.onload = () => {
      image.value = reader.result;
    };
  } else {
    image.value = '';
  }
};

const formatWeight = () => {
  let formatValue = parseFloat(weight.value.replace(',', '.')).toLocaleString(
    'de-DE'
  );
  if (formatValue === 'NaN') {
    formatValue = '';
  }
  weight.value = formatValue;
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

const resetBackgroundColor = () => {
  const selectElements = document.querySelectorAll('.form-select');
  selectElements.forEach((element) => {
    element.classList.remove('bg-green-500', 'bg-red-500');
  });
};

const handleSubmit = async (e: any) => {
  e.preventDefault();
  try {
    const schema = Yup.object().shape({
      company: Yup.string()
        .min(2, 'Der Firmenname muss mindestens 2 Zeichen lang sein')
        .required('Firmenname ist erforderlich'),
      brand: Yup.string()
        .min(2, 'Der Marke muss mindestens 2 Zeichen lang sein')
        .required('Marke ist erforderlich'),
      model: Yup.string()
        .min(1, 'Der Model muss mindestens 1 Zeichen lang sein')
        .required('Model ist erforderlich'),
      weight: Yup.number()
        .min(1, 'Der Gewicht muss mindestens 1 Zeichen lang sein')
        .required('Gewicht ist erforderlich'),
      halal: Yup.string().required('Bitte wähle eine Option'),
      vegan: Yup.string().required('Bitte wähle eine Option'),
      vegetarian: Yup.string().required('Bitte wähle eine Option'),
      alcohol: Yup.string().required('Bitte wähle eine Option'),
      allergic: Yup.string().required('Bitte wähle eine Option'),
    });

    await schema.validate({
      company: company.value,
      brand: brand.value,
      model: model.value,
      weight: Number(weight.value),
      image: image.value,
      halal: halal.value,
      vegan: vegan.value,
      vegetarian: vegetarian.value,
      alcohol: alcohol.value,
      allergic: allergic.value,
      protein: protein.value,
      calories: calories.value,
      sugar: sugar.value,
      salt: salt.value,
      peanut: peanut.value,
      gluten: gluten.value,
      fish: fish.value,
      crustaceans: crustaceans.value,
      lupins: lupins.value,
      cowsmilk: cowsmilk.value,
      nuts: nuts.value,
    });

    const lastUsedIdResponse = await axios.get('/api/api/products/lastUsedId');
    const lastUsedId = lastUsedIdResponse.data;
    const newId = lastUsedId + 1;

    const response = await axios.post('/api/api/products/addProducts', {
      id: newId,
      company: company.value,
      brand: brand.value,
      model: model.value,
      weight: Number(weight.value),
      image: image.value,
      protein: protein.value,
      calories: calories.value,
      sugar: sugar.value,
      salt: salt.value,
      halal: halal.value === '1' ? 'ja' : 'nein',
      vegan: vegan.value === '1' ? 'ja' : 'nein',
      vegetarian: vegetarian.value === '1' ? 'ja' : 'nein',
      alcohol: alcohol.value === '1' ? 'ja' : 'nein',
      allergic: allergic.value === '1' ? 'ja' : 'nein',
      peanut: peanut.value === '1' ? 'ja' : 'nein',
      gluten: gluten.value === '1' ? 'ja' : 'nein',
      fish: fish.value === '1' ? 'ja' : 'nein',
      crustaceans: crustaceans.value === '1' ? 'ja' : 'nein',
      lupins: lupins.value === '1' ? 'ja' : 'nein',
      cowsmilk: cowsmilk.value === '1' ? 'ja' : 'nein',
      nuts: nuts.value === '1' ? 'ja' : 'nein',
    });

    products.value.push(response.data);

    showSubmittedInputs.value = true;
    company.value = '';
    brand.value = '';
    model.value = '';
    weight.value = '';
    image.value = '';
    halal.value = '';
    vegan.value = '';
    vegetarian.value = '';
    alcohol.value = '';
    allergic.value = '';
    peanut.value = '';
    gluten.value = '';
    fish.value = '';
    crustaceans.value = '';
    lupins.value = '';
    cowsmilk.value = '';
    nuts.value = '';
    protein.value = '';
    calories.value = '';
    sugar.value = '';
    salt.value = '';

    resetBackgroundColor();
  } catch (error) {
    console.error('Submission Error:', error.message);
  }
};
</script>
