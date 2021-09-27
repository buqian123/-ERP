export default {
  state: {
    cusId: '',
    cusInfo: {},
    followId: '',
    demandId: ''
  },
  getters: {

  },
  mutations: {
    setCusId(state, payload) {
      state.cusId = payload
    },
    setCusInfo(state, payload) {
      state.cusInfo = payload
    },
    setFollowId(state, payload) {
      state.followId = payload
    },
    setDemandId(state, payload) {
      state.demandId = payload
    }
  },
  actions: { 

  }
}

// import {
//         mapState,
//         mapMutations
//     } from 'vuex';
//     export default {
//         computed: {
//             ...mapState(['avatarUrl','login','userName'])
//         },
//         methods: {
//             ...mapMutations(['logout'])
//         }
//     }