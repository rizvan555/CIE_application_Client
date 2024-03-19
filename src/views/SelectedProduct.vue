<template>
  <div class="h-[80vh] overflow-scroll">
    <div class="mt-[5vw] select-box py-14 w-[60vw] mx-auto relative">
      <div class="flex items-center justify-center w-[60vw] mx-auto">
        <div class="flex items-center justify-center mx-auto gap-5">
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

            <button
              type="button"
              class="flex items-center gap-4 hover:scale-95 transition-all"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <div class="text-start w-[18vw] text-gray-500 font-semibold">
                <p>Halal:</p>
              </div>
              <p
                :class="
                  selectedProduct.halal === 'ja'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.halal }}
              </p>
            </button>
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title font-bold text-xl text-center w-full leading-6"
                      id="staticBackdropLabel"
                    >
                      Halal
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">Halal Kontent</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <button
              type="button"
              class="flex items-center gap-4 hover:scale-95 transition-all"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop1"
            >
              <div class="text-start w-[18vw] text-gray-500 font-semibold">
                <p>Vegan:</p>
              </div>
              <p
                :class="
                  selectedProduct.vegan === 'ja'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.vegan }}
              </p>
            </button>
            <div
              class="modal fade"
              id="staticBackdrop1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title font-bold text-xl text-center w-full leading-6"
                      id="staticBackdropLabel1"
                    >
                      Vegan
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">Vegan Kontent</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <button
              type="button"
              class="flex items-center gap-4 hover:scale-95 transition-all"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop2"
            >
              <div class="text-start w-[18vw] text-gray-500 font-semibold">
                <p>Vegetarian:</p>
              </div>
              <p
                :class="
                  selectedProduct.vegetarian === 'ja'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.vegetarian }}
              </p>
            </button>
            <div
              class="modal fade"
              id="staticBackdrop2"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel2"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title font-bold text-xl text-center w-full leading-6"
                      id="staticBackdropLabel2"
                    >
                      Vegetarian
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">Vegetarian Kontent</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <button
              type="button"
              class="flex items-center gap-4 hover:scale-95 transition-all"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop3"
            >
              <div class="text-start w-[18vw] text-gray-500 font-semibold">
                <p>Alkohol:</p>
              </div>
              <p
                :class="
                  selectedProduct.alcohol === 'ja'
                    ? 'text-green-500'
                    : 'text-red-500'
                "
              >
                {{ selectedProduct.alcohol }}
              </p>
            </button>
            <div
              class="modal fade"
              id="staticBackdrop3"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel3"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title font-bold text-xl text-center w-full leading-6"
                      id="staticBackdropLabel3"
                    >
                      Alkohol
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">Alkohol Kontent</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <button
              type="button"
              class="flex items-center gap-4 hover:scale-95 transition-all"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop4"
            >
              <p class="text-start w-[18vw] text-gray-500 font-semibold">
                Allergien
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
            </button>
            <div
              class="modal fade"
              id="staticBackdrop4"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel4"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title font-bold text-xl text-center w-full leading-6"
                      id="staticBackdropLabel4"
                    >
                      Allergien
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div
                      class="flex items-center gap-4 hover-info"
                      data-aos="fade-in"
                    >
                      <div
                        class="grid grid-cols-1 rounded px-2 py-2 gap-2 bg-white"
                      >
                        <div
                          class="flex items-center justify-center gap-48 w-full py-1"
                        >
                          <p class="font-semibold w-[15vw] text-gray-500">
                            Gluten:
                          </p>
                          <p
                            class="text-[15px]"
                            :class="
                              selectedProduct.gluten === 'ja'
                                ? 'text-green-500'
                                : 'text-red-500'
                            "
                          >
                            {{ selectedProduct.gluten }}
                          </p>
                        </div>
                        <div
                          class="flex items-center justify-center gap-48 w-full py-1"
                        >
                          <p class="font-semibold w-[15vw] text-gray-500">
                            Fish:
                          </p>
                          <p
                            class="text-[15px]"
                            :class="
                              selectedProduct.fish === 'ja'
                                ? 'text-green-500'
                                : 'text-red-500'
                            "
                          >
                            {{ selectedProduct.fish }}
                          </p>
                        </div>
                        <div
                          class="flex items-center justify-center gap-48 w-full py-1"
                        >
                          <p class="font-semibold w-[15vw] text-gray-500">
                            Erdnuss:
                          </p>
                          <p
                            class="text-[15px]"
                            :class="
                              selectedProduct.peanut === 'ja'
                                ? 'text-green-500'
                                : 'text-red-500'
                            "
                          >
                            {{ selectedProduct.peanut }}
                          </p>
                        </div>
                        <div
                          class="flex items-center justify-center gap-48 w-full py-1"
                        >
                          <p class="font-semibold w-[15vw] text-gray-500">
                            Krebstiere:
                          </p>
                          <p
                            class="text-[15px]"
                            :class="
                              selectedProduct.crustaceans === 'ja'
                                ? 'text-green-500'
                                : 'text-red-500'
                            "
                          >
                            {{ selectedProduct.crustaceans }}
                          </p>
                        </div>
                        <div
                          class="flex items-center justify-center gap-48 w-full py-1"
                        >
                          <p class="font-semibold w-[15vw] text-gray-500">
                            Lupinen:
                          </p>
                          <p
                            class="text-[15px]"
                            :class="
                              selectedProduct.lupins === 'ja'
                                ? 'text-green-500'
                                : 'text-red-500'
                            "
                          >
                            {{ selectedProduct.lupins }}
                          </p>
                        </div>
                        <div
                          class="flex items-center justify-center gap-48 w-full py-1"
                        >
                          <p class="font-semibold w-[15vw] text-gray-500">
                            Kuhmilch:
                          </p>
                          <p
                            class="text-[15px]"
                            :class="
                              selectedProduct.cowsmilk === 'ja'
                                ? 'text-green-500'
                                : 'text-red-500'
                            "
                          >
                            {{ selectedProduct.cowsmilk }}
                          </p>
                        </div>
                        <div
                          class="flex items-center justify-center gap-48 w-full py-1"
                        >
                          <p class="font-semibold w-[15vw] text-gray-500">
                            Nuss:
                          </p>
                          <p
                            class="text-[15px]"
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
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
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
    <!-- <div class="py-4 px-3 text-center text-xl text-slate-700">
      <vue-typewriter-effect
        :strings="[
          '* Für weitere Informationen klicken Sie auf eines der Kriterien *',
        ]"
        :pauseFor="3000"
      />
    </div> -->
    <div class="pt-6 px-3 text-center text-[17px] text-slate-700 animated-text">
      <h1>
        Für weitere Informationen klicken Sie auf eines der Kriterien Halal,
        Vegan, Vegetarian, Alkohol oder Allergien ...
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import LeftArrow from '../assets/Icons/LeftArrow.vue';

const selectedProduct = ref({});
const router = useRouter();
const route = useRoute();

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
