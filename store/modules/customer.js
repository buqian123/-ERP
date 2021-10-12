export default {
  state: {
    cusTabIndex: '',
    cusDetailTabIndex: '',
    demandTabIndex: '',
    cusId: '',
    cusInfo: {},
    followId: '',
    demandId: '',
    serviceId: ''
  },
  getters: {

  },
  mutations: {
    setTabIndex(state, payload) {
      state[payload.type] = payload.value
    },
    setCusId(state, payload) {
      state.cusId = payload
      state.cusDetailTabIndex = ''
      state.demandTabIndex = ''
    },
    setCusInfo(state, payload) {
      state.cusInfo = payload
    },
    setFollowId(state, payload) {
      state.followId = payload
    },
    setDemandId(state, payload) {
      state.demandId = payload
    },
    setDefault(state, payload) {
      state.cusId = ''
      state.cusDetailTabIndex = ''
      state.demandTabIndex = ''
      state.followId = ''
      state.demandId = ''
      state.cusInfo = {}
    },
    setServiceId(state, payload) {
      state.serviceId = payload
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