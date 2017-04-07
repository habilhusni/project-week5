var app = new Vue({
  el: '#app',
  data: {
    items: [],
    newItem: {
      name:'',
      image:'',
      category:'',
      price:0,
      stock:0
    }
  },
  methods: {
    getproduct: function () {
      let self = this;
      axios.get('http://localhost:3000/items')
      .then(function (response) {
        console.log(response);
        self.items = response.data
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    postProduct: function () {
      let self = this;
      console.log(self.newItem)
      axios.post('http://localhost:3000/items',self.newItem)
      .then(function (response) {
        self.items.push(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  mounted: function() {
    this.getproduct()
  }
})



// product.getproduct()
