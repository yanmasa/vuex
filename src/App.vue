<template>
  <v-app>
    <v-main>
      <div id="nav">
        <router-link to="/">Home</router-link> | 
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
      {{ $store.state.count }}
      <br>
      <ul v-for="user in visibleUsers" :key="user.id" class="mb-2">
      <li>{{user.id}}</li>
      <li>{{user.name}}</li>
      <li>{{user.isVisible}}</li>
      </ul>
      <br>
      <v-text-field v-model.number="id" full-width='50px'/>
      検索結果
      <ul v-for="user in getUserById" :key="user.id" class="mb-2">
      <li>{{user}}</li>
      </ul>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    id: ""
    //
  }),
  computed:{
    visibleUsers(){
      return this.$store.getters.visibleUsers
    },
    getUserById(){
      return this.$store.getters.getUserById(this.id)
    }
  }
};
</script>
