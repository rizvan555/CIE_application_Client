<template>
  <div class="flex items-center justify-between w-100% bg-slate-700 px-8 py-4">
    <a href="/home" class="text-2xl font-bold text-white">Darf ich Essen ?</a>
    <div v-for="user in users" class="flex items-center pr-8 gap-3">
      <h2 class="text-white text-xl">Hallo, {{ user.username }}</h2>
      <div>
        <Profile class="text-white" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { getItem } from '../../helper/persistanceStorage.ts';
import Profile from '../../assets/Icons/Profile.vue';

const users = ref([]);

onMounted(async () => {
  try {
    const token = getItem('token');

    const response = await axios.get('/api/api/users/authUser', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data) {
      const userData = response.data;
      users.value = [userData];
    }
  } catch (error) {
    console.error(
      'An error occurred while retrieving existing user data:',
      error
    );
  }
});
</script>
