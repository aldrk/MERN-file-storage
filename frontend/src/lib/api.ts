import axios from "axios"
import config from "../config"

const {API_DOMAIN, baseUrl} = config

const instance = axios.create({
  baseURL: `${API_DOMAIN}${baseUrl}`,
  headers: {
    Accept: "application/json"
  }
})

export default instance