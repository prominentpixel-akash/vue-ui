<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>
      <div class="d-flex align-center">
        <span class="mr-2">Vue</span>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <Login/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Login from './components/Login.vue'
export default Vue.extend({
  name: 'App',

  components: {
    Login
  },

  data: () => ({
    //
  })
})
</script>
