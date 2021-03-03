<template>
  <q-layout view="lHh Lpr lFf" style="background: #F2F2F2;">
    <q-header style="background: #F2F2F2;">
      <q-toolbar>
        <q-toolbar-title>
          
        </q-toolbar-title>

        <div class="text-black flex item__center">
          <div class="text-black">Witalo Matheus C. Silva</div>

          <q-btn flat round no-caps @click="openURL('https://www.linkedin.com/in/witalo-matheus-c-silva-44657011a/')">
            <template v-slot:default class="row items-center full-width">
              <i class="ri-linkedin-fill icon_btn"></i>
            </template>
          </q-btn>
          <q-btn flat round no-caps @click="openURL('https://github.com/witalok2')">
            <template v-slot:default class="row items-center full-width">
              <i class="ri-github-fill icon_btn"></i>
            </template>
          </q-btn>
          <q-btn flat round no-caps @click="openURL('https://www.instagram.com/witalo_matheus/')">
            <template v-slot:default class="row items-center full-width">
              <i class="ri-instagram-fill icon_btn"></i>
            </template>
          </q-btn>
        </div> 
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MainLayout',
  data () {
    return {}
  },

  methods: {
    openURL
  }
}
</script>
<style lang="scss" scoped>
.icon_btn {
  font-size: 24px;
}

.item__center {
  font-size: 12px; 
  display: flex;
  align-items: center;
  justify-content: center 
}
</style>
