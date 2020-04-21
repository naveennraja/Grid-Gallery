import axios from "axios";

export default axios.create({
     baseURL:"https://api.unsplash.com/",
     headers : {
          Authorization: 'Client-ID j5Ii2jn_-P4a6paiUZPa-YI3zBJJTqSp69s7N1grVMA'
     }
})