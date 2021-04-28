import axios from "axios";

const API =  {
  // Gets all users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=10");
  }
};
export default API
// const BASEURL = "https://randomuser.me/api/search?q=";
// const APIKEY = "&api_key=UGUZ-G5FH-QCVP-KWU0&limit=20";

// // Export an object with a "search" method that searches the Giphy API for the passed query
// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };