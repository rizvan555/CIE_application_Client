<template>
  <div
    class="flex items-center justify-between w-100% bg-slate-700 px-8 py-4 font-open-sans"
  >
    <a href="/home" class="text-2xl font-bold text-white font-cantata"
      >Darf ich Essen ?</a
    >
    <div v-for="user in users" class="flex items-center pr-8 gap-3">
      <h2 class="text-white text-xl font-semibold">
        Hallo, {{ user.username }}
      </h2>

      <div class="d-flex justify-space-around">
        <v-menu ref="menu">
          <template v-slot:activator="{ props }">
            <button
              class="flex justify-center items-center text-white"
              v-bind="props"
            >
              <Profile1 />
            </button>
          </template>
          <v-list class="mt-3 left-12">
            <v-list-item>
              <v-list-item-title
                class="flex justify-center items-center gap-3 font-open-sans"
              >
                <ul class="flex flex-col gap-3 px-2 py-1">
                  <a href="#" class="flex items-center gap-3">
                    <Profile />
                    <li class="text-[17px] font-semibold text-slate-600">
                      Mein Profil
                    </li>
                  </a>
                  <a href="/signOut" class="flex items-center gap-3">
                    <LogOut />
                    <li class="text-[17px] font-semibold text-slate-600">
                      Logout
                    </li>
                  </a>
                </ul>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { getItem } from '../../helper/persistanceStorage.ts';
import Profile from '../../assets/Icons/Profile.vue';
import Profile1 from '../../assets/Icons/Profile1.vue';
import LogOut from '../../assets/Icons/LogOut.vue';
import AvatarLetter from '../../components/AvatarLetter.vue';
import { VList, VListItem, VListItemTitle, VMenu } from 'vuetify/components';
import { useNavbarStore } from '../../stores/useNavbar';
import Cantata_One from '../../assets/fonts/Cantata_One/CantataOne-Regular.ttf';
import OpenSans from '../../assets/fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf';

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
