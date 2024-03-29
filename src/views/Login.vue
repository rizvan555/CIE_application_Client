<template>
  <div class="h-[70vh]" v-if="!token">
    <div
      class="auth-page reg-container pb-10 w-[35vw] mt-[10vh] rounded mx-auto bg-slate-50"
    >
      <div class="">
        <div class="">
          <div class="flex flex-col gap-2 px-6 py-2">
            <h1
              class="text-xs-center text-center text-2xl my-6 font-bold login-title"
            >
              LOGIN BENUTZER
            </h1>
            <p class="text-xs-center mb-2">
              <router-link :to="{ name: 'register' }">
                Benötigen Sie ein Konto?
              </router-link>
            </p>

            <form
              @submit.prevent="onSubmit"
              class="flex flex-col gap-3"
              method="post"
            >
              <fieldset class="form-group">
                <input
                  v-model="formData.username"
                  class="form-control form-control-lg email-input mb-2"
                  :class="{ 'border-red-500': errors.username }"
                  id="username-input"
                  type="text"
                  placeholder="Benutzername"
                  @input="clearError('username')"
                  name="username"
                  method="post"
                />
                <div v-if="errors.username" class="text-red-500">
                  {{ errors.username }}
                </div>
              </fieldset>

              <fieldset class="form-group">
                <input
                  v-model="formData.password"
                  class="form-control form-control-lg password-input mb-5"
                  :class="{ 'border-red-500': errors.password }"
                  id="password-input"
                  type="password"
                  placeholder="Password"
                  @input="clearError('password')"
                  name="password"
                  method="post"
                />
                <div v-if="errors.password" class="text-red-500">
                  {{ errors.password }}
                </div>
              </fieldset>

              <button
                :disabled="isSubmitting"
                class="bg-indigo-500 text-white rounded py-3 px-2 font-semibold hover:bg-indigo-700 active:scale-95 transition-all login-button"
                id="login-button"
                type="submit"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ErrorPage v-else />
</template>

<script setup lang="ts">
import type { Errors, FormDataLogin } from '@/types';
import { ref } from 'vue';
import * as Yup from 'yup';
import axios from '../api/axios';
import { getItem, setItem } from '../helper/persistanceStorage';
import router from '../router/index';
import ErrorPage from '../views/404.vue';

const token = getItem('token');
const formData = ref<FormDataLogin>({
  username: '',
  password: '',
});

const isSubmitting = ref(false);

const schema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Der Benutzername muss mindestens 3 Zeichen sein')
    .required('Benutzername wird benötigt'),
  password: Yup.string()
    .min(6, 'Das Passwort muss mindestens aus 6 Zeichen bestehen')
    .required('Passwort wird benötigt'),
});

const errors = ref<Errors>({});
const clearError = (field: keyof Errors) => {
  errors.value[field] = '';
};

const onSubmit = async (e: any) => {
  e.preventDefault();
  try {
    isSubmitting.value = true;
    await schema.validate(formData.value, { abortEarly: false });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    };
    const response = await axios.post(
      '/api/api/authentication/login',
      formData.value,
      config
    );

    const userToken = response.data.accessToken;
    setItem('token', userToken);
    console.log('Token set to localStorage:', getItem('token'));

    if (
      formData.value.username === 'rizvan' &&
      formData.value.password === '111111'
    ) {
      router.afterEach(() => {
        window.location.reload();
      });
      router.push('/dashboard/admin');
    } else {
      router.afterEach(() => {
        window.location.reload();
      });
      if (response.data.redirect) {
        router.push(response.data.redirect);
      } else {
        router.push({ name: 'home' });
      }
    }
  } catch (error: any) {
    if (error.name === 'ValidationError') {
      errors.value = error.inner.reduce((acc: Errors, err: any) => {
        acc[err.path] = err.message;
        return acc;
      }, {});
    } else if (error.response && error.response.status === 401) {
      errors.value = {
        email: 'Nooooo....🤦🏻‍♂️ Invalid credentials',
        password: 'Nooooo....🤦🏻‍♂️ Invalid credentials',
      };
    } else {
      console.error('Error setting up request:', error.message);
    }
    isSubmitting.value = false;
  }
};
</script>
