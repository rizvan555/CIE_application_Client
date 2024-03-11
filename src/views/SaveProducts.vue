<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mt-4 mb-10">Laden Sie Ihr Produkt</h1>
  </div>

  <div class="flex justify-center my-2">
    <div class="flex gap-4">
      <div class="flex flex-col gap-2">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Firma"
          aria-label="firma"
        />
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Produktname"
          aria-label="produktname"
        />
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="Gewicht"
          aria-label="gewicht"
        />
      </div>

      <div class="flex flex-col gap-2">
        <select
          class="form-select"
          @change="changeBackgroundColor($event, '1')"
        >
          <option selected>Halal</option>
          <option value="1">Ja</option>
          <option value="2">Nein</option>
        </select>
        <select
          class="form-select"
          @change="changeBackgroundColor($event, '1')"
        >
          <option selected>Vegan</option>
          <option value="1">Ja</option>
          <option value="2">Nein</option>
        </select>

        <select
          class="form-select"
          @change="changeBackgroundColor($event, '1')"
        >
          <option selected>Vegetarian</option>
          <option value="1">Ja</option>
          <option value="2">Nein</option>
        </select>

        <select
          class="form-select"
          @change="changeBackgroundColor($event, '2')"
        >
          <option selected>Alkohol</option>
          <option value="1">Ja</option>
          <option value="2">Nein</option>
        </select>

        <select
          class="form-select"
          @change="changeBackgroundColor($event, '2')"
        >
          <option selected>Allergik</option>
          <option value="1">Ja</option>
          <option value="2">Nein</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
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
