const Vue = require("vue");
const axios = require("axios");
Vue.config.runtimeCompiler = process.env.NODE_ENV === 'true'
new Vue({
   el: "#app",
   data: {
      "pageList": [],
      "newPage": "",
      "delPage": ""
   },
   methods: {
      createPage() {
         axios.post("./api/createNewHTML.php", { "name": this.newPage })
            .then(() => this.updatePageList(),
         )
            .catch((er) => console.log(er))
      },
      deletePage() {
         axios.post("./api/delfileHTML.php", { "name": this.delPage })
            .then(() => this.updatePageList(),
         )
            .catch((er) => console.log(er))
      },
      updatePageList() {
         axios.get("./api/api.php")
            .then((response) => {
               this.pageList = response.data
            })
      },
      deletePageList(page) {
         axios.post("./api/deletePageList.php", { "name": page })
            .then(() => this.updatePageList(),
         )
            .catch((er) => console.log(er))
      }
   },
   created() {
      this.updatePageList();
   }
})
// module.exports = {
//    runtimeCompiler: true
// }