<template>
  <div id="app">
    <v-app>
      <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
        <div>
          <v-tabs v-model="tab" show-arrows background-color="navy blue" icons-and-text dark grow>
            <v-tabs-slider color="navy blue"></v-tabs-slider>
            <v-tab v-for="(i,key) in tabs" :key="key">
              <v-icon large>{{ i.icon }}</v-icon>
              <div class="caption py-1">{{ i.name }}</div>
            </v-tab>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="loginForm" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field v-model="user.username" :rules="loginUserRules" label="User Name" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field v-model="user.password" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="6" xsm="12">
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                      <v-btn x-large block :disabled="!valid" color="success" @click="users(user)"> Login </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="registerForm" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field v-model="reguser.email" :rules="emailRules" label="Email Address" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field v-model="reguser.regusername" label="User Name" required></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field v-model="reguser.regpassword" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                        <v-btn x-large block :disabled="!valid" color="success" @click="registerUser(reguser)">Register</v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </v-dialog>
    </v-app>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { mapActions } from 'vuex'
// import Dashboard from './components/Dashboard.vue'

export default Vue.extend({
  vuetify: new Vuetify(),
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
      { name: 'Login', icon: 'mdi-account' },
      { name: 'Register', icon: 'mdi-account-outline' }
    ],
    user: {
      username: '',
      password: ''
    },
    reguser: {
      regusername: '',
      regpassword: '',
      email: ''
    },
    valid: true,
    loginUserRules: [
      (v: any) => !!v || 'Required'
    ],
    emailRules: [
      (v: any) => !!v || 'Required',
      (v: any) => /.+@.+\..+/.test(v) || 'E-mail Address must be valid'
    ],
    show1: false,
    rules: {
      required: (value: any) => !!value || 'Required.',
      min: (v: string | any[]) => (v && v.length >= 8) || 'Min 8 characters'
    }
  }),
  methods: {
    ...mapActions([
      'users',
      'registerUser'
    ])
  }
})
</script>
