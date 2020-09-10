<template>
  <div class='home'>
    <img alt='Vue logo' src='../assets/logo.png' />
    <Dashboard msg='Welcome to Your Vue.js + TypeScript App' />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Dashboard from '@/components/Dashboard.vue' // @ is an alias to /src

@Component({
  components: {
    Dashboard
  },
  mounted () {
    this.$store.dispatch('fetchUser')
  }
})
export default class Home extends Vue {}
</script>
