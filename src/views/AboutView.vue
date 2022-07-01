<template>
  <div>
    <v-btn @click="minusCount">-</v-btn>
  </div>
</template>

<script>
export default {
  methods:{
    minusCount(){
      this.$store.commit('minus')
    }
  }
}
</script>

<style>

</style>