<template>
  <div>
    HelloWorld.vue
    <v-btn @click="addCount">+</v-btn>
    <v-btn @click="number.value++">number+</v-btn>
    number:{{number.value}}
    <br>
    <v-btn @click="addCountProps(number)">++</v-btn>
  </div>
</template>

<script>
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
      addCount(){
        this.$store.commit('increment')
      },
      addCountProps(num){
        this.$store.commit('addCount', num)
      }
    }
  }
</script>
