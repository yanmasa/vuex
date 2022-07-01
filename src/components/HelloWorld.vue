<template>
  <div>
    HelloWorld.vue
    <!-- <v-btn @click="addCount">+</v-btn> -->
    <v-btn @click="incrementAction">+</v-btn>
    <v-btn @click="number.value++">number+</v-btn>
    number:{{number.value}}
    <br>
    <!-- <v-btn @click="addCountProps(number)">++</v-btn> -->
    <v-btn @click="addCount">++</v-btn>
    <br>
    2乗: {{ multiply }}
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    data(){
      return{
        number: { value: 3 }
      }
    },
    methods:{
      // addCount(){
      //   this.$store.commit('increment')
      // },
      // addCountProps(num){
      //   this.$store.commit('addCount', num)
      // }

      // addCount(){
      //   this.$store.dispatch('incrementAction')
      // },
      // addCountProps(num){
      //   this.$store.dispatch('addCountAction', num)
      // },

      ...mapActions(['incrementAction', 'addCountAction']),
      addCount(){
        this.addCountAction(this.number)
      }
    },
    computed:{
      multiply(){
        return this.$store.getters.multiply
      }
    }
  }
</script>
