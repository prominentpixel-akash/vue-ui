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
    <v-snackbar
      v-model="snackbar"
      :bottom="false"
      color="dark"
      :left="false"
      :multi-line="true"
      :right="true"
      :timeout="6000"
      :top="true"
      :vertical="false"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          dark
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>

</template>

<script lang="ts">
import Vue from 'vue'
import Login from './components/Login.vue'
import { mapState } from 'vuex'
export default Vue.extend({
  name: 'App',

  components: {
    Login
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapState(['snackbar', 'snackbarText']),
    snackbarText: {
      get () {
        return this.$store.state.snackbarText
      },
      set (value) {
        this.$store.state.snackbarText = value
      }
    },
    snackbar: {
      get () {
        return this.$store.state.snackbar
      },
      set (value) {
        this.$store.state.snackbar = value
      }
    }
  }
})
</script>
