<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Aws Lambda Demo
        </h1>
      </v-col>
    </v-row>
    <template>
  <v-row align="center">
    <v-col class="text-center" cols="12" sm="3">
      <div class="my-2">
        <v-btn large color="primary" @click="getLambdaById(1)">Call Lambda 1</v-btn>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="3">
      <div class="my-2">
        <v-btn large color="primary"  @click="getLambdaById(2)">Call Lambda 2</v-btn>
      </div>
    </v-col>
<!--    <v-col class="text-center" cols="12" sm="3">
      <div class="my-2">
        <v-btn large color="primary"  @click="getLambdaById(3)">Call Lambda 3</v-btn>
      </div>
    </v-col>
    <v-col class="text-center" cols="12" sm="3">
      <div class="my-2">
        <v-btn large color="primary"  @click="getLambdaById(4)">Call Lambda 4</v-btn>
      </div>
    </v-col>-->
  </v-row>
</template>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'Dashboard',

  data: () => ({
  }),
  methods: {
    ...mapActions([
      'getLambdaById'
    ])
  }
})
</script>
