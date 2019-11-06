import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isFooterInWindow: false
    },
    getters: {
        isFooterInWindow: state => {
            return state.isFooterInWindow
        }
    },
    mutations: {
        SET_FOOTER_IN_VIEW: (state, toggle) => {
            state.isFooterInWindow = toggle
        }
    },
    actions: {
        setFooterInView: ({ commit }, toggle) => {
            commit('SET_FOOTER_IN_VIEW', toggle)
        }
    },
    modules: {}
})
