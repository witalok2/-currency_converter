import Vue from 'vue'
import axios from 'axios'

const http = {
  get(uri, params = {}){
    return axios.get(uri, { params })
  }
}

export { http }

Vue.prototype.$axios = http
