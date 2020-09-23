<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <Dashboard msg='Welcome to Your Vue.js + TypeScript App' />
    <Login msg='Welcome to Your Vue.js + TypeScript App' />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Login from '@/components/Login.vue'
import Dashboard from '@/components/Dashboard.vue'

@Component({
  components: {
    Dashboard,
    Login
  },
  mounted () {
    this.$store.dispatch('fetchUser')
  }
})
export default class Home extends Vue {}
</script>
