import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  // globalstateの管理
  state: { //初期値
    count: 0,
    users:[
      {id:1, name: '大谷', isVisible: true},
      {id:2, name: 'ダルビッシュ', isVisible: true},
      {id:3, name: '錦織', isVisible: true},
    ]
  },
  // ストアの算出プロパティ
  getters: {
    multiply(state){
      return state.count*state.count
    },
    visibleUsers: state => state.users.filter( user => user.isVisible),

    getUserById: state => id =>{
      return state.users.find( user => user.id === id)
    }
  },
  // 実際にストアのstateの変更
  mutations: {
    increment( state ){
      state.count++
    },
    minus( state ){
      state.count--
    },
    addCount( state, payload){
      state.count += payload.value
    }
  },
  // mutationsとの違いは、あくまでmutationsを用いてstateを更新すること
  // すなわち、状態を変更するのではなく、ミューテーションをコミットします。
  // 非同期処理を行えること
  actions: {
    // incrementAction( context ){
    //   context.commit('increment')
    // },
    incrementAction({ commit }) {
      commit('increment')
    },
    addCountAction( {commit} , payload ){
      commit('addCount', payload)
    }
  },
  modules: {
    auth,
  }
})
