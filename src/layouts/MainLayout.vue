<template>
  <q-no-ssr>
    <q-layout view="hhh lpR fff" class="page">
      <q-header elevated class="row no-wrap header__layout">
        <q-toolbar style="padding: 0px;">
          <q-btn flat to="/">
            <q-img
              src="http://cdn.onlinewebfonts.com/svg/img_44375.png"
              class="logo__header"
              style="width: 150px;"
              contain
              alt="Logo Eucatur horizontal"
              loading="lazy"
            />
          </q-btn>
        </q-toolbar>

        <q-toolbar>
          <q-space />
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
        <router-view/>
      </q-page-container>
    </q-layout>
  </q-no-ssr>
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
  color: $grey_secondary;
  font-size: 24px;
}

.item__center {
  font-size: 16px; 
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center 
}

.page {
  padding: 0px;
  background-color: $background_primary;
}

.header__layout {
  padding: 1%;
  background-color: white;
}

</style>
