var app = new Vue({
  el : '#app',
  data: {
    search: '',
    revealedDest: false,
    revealedCity: false,
    test: [
      {name: '1'},
      {name: '2'},
      {name: '3'},
    ],
    cityModal: {
      _id: '',
      kota_id : '',
      kota_name : ''
    },
    cities: [{
      _id : '',
      kota_id		: '',
      kota_name	: ''
    }],
    destinations: [{
      name		: '',
      address	: '',
      img		  : ''
    }],
    users: [{
      username: '',
      password: '',
      role		: '',
      name		: '',
      email		: '',
      phone		: ''
    }]
  },
  methods: {
    getCity: () => {
      axios.get('http://localhost:3000/kota')
      .then((res) => {
        console.log(res.data);
        app.cities = res.data
      })
      .catch((err) => {
        console.log(err.message);
      })
    },
    addCity: () => {
      axios.post('http://localhost:3000/kota', {
        kota_id		: app.cities.kota_id,
        kota_name	: app.cities.kota_name
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    updateCity: (id) => {
      axios.put('http://localhost:3000/kota/'+id, {
        kota_id		: app.cityModal.kota_id,
        kota_name	: app.cityModal.kota_name
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    deleteCity: () => {
      axios.delete('http://localhost:3000/kota/:kota_id')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    getDestination: () => {
      axios.get('http://localhost:3000/wisata')
      .then((res) => {
        console.log(res.data);
        app.destinations = res.data
      })
      .catch((err) => {
        console.log(err.message);
      })
    },
    addDestination: (req, res) => {
      axios.post('http://localhost:3000/wisata', {
        name		: app.destinations.name,
        address	: app.destinations.address,
        img		  : app.destinations.img
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    updateDestination: (id) => {
      axios.put('http://localhost:3000/wisata/'+id, {
        name		: app.destinations.name,
        address	: app.destinations.address,
        img		  : app.destinations.img
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    deleteDestination: (id) => {
      axios.delete('http://localhost:3000/wisata/'+id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    getUser: () => {
      axios.get('http://localhost:3000/users')
      .then((res) => {
        console.log(res.data);
        app.users = res.data
      })
      .catch((err) => {
        console.log(err.message);
      })
    },
    addUser: () => {
      console.log('masuk');
      axios.post('http://localhost:3000/users', {
        username: app.users.username,
        password: app.users.password,
        role		: app.users.role,
        name		: app.users.name,
        email		: app.users.email,
        phone		: app.users.phone
      })
      .then((res) => {
        console.log('test');
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    updateUser: () => {
      axios.put('http://localhost:3000/users/:username', {
        username: app.users.username,
        password: app.users.password,
        role		: app.users.role,
        name		: app.users.name,
        email		: app.users.email,
        phone		: app.users.phone
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    deleteUser: () => {
      axios.delete('http://localhost:3000/users/:username')
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    signIn: () => {
      axios.post('route untuk signin/login', {
        username: app.users.username,
        password: app.users.password
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    signUp: () => {
      axios.post('routes untuk signup', {
        username: app.users.username,
        password: app.users.password,
        role		: 'user',
        name		: app.users.name,
        email		: app.users.email,
        phone		: app.users.phone
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    find: () => {
      axios.get(`http://localhost:3000/kota/result?input=${app.search}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    showAllDest: () => {
      console.log('showAll');
      app.revealedDest = true
    },
    hideDest: () => {
      console.log('showAll');
      app.revealedDest = false
    },
    showAllCity: () => {
      console.log('showAll');
      app.revealedCity = true
    },
    hideCity: () => {
      console.log('showAll');
      app.revealedCity = false
    },
    editCity: (city) => {
      console.log(city);
      app.cityModal = city
    }
  },
  computed: {
    featuredDestinations: function() {
      return this.destinations.splice(0, 3)
    },
    featuredCities: function() {
      return this.cities.splice(0, 3)
    }
  },
  mounted: function() {
    this.getCity()
    this.getDestination()
    this.getUser()
  }
})
