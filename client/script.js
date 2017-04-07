// var app = new Vue({
//   el : '#app',
//   data: {
//     cities: [{
//       kota_id		: '',
//       kota_name	: ''
//     }],
//     destinations: [{
//       name		: '',
//       address	: '',
//       image		: ''
//     }],
//     users: [{
//       username: '',
//       password: '',
//       role		: '',
//       name		: '',
//       email		: '',
//       phone		: ''
//     }]
//   },
//   methods: {
//     getCity: () => {
//       axios.get('http://localhost:3000/wisata')
//       .then((res) => {
//         console.log(res.data);
//         app.cities = res.data
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })
//     },
//     addCity: () => {
//       axios.post('http://localhost:3000/wisata', {
//         kota_id		: app.cities.kota_id,
//         kota_name	: app.cities.kota_name
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     },
//     updateCity: () => {
//       axios.put('http://localhost:3000/wisata/:kota_id', {
//         kota_id		: app.cities.kota_id,
//         kota_name	: app.cities.kota_name
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     },
//     deleteCity: () => {
//       axios.delete('http://localhost:3000/wisata/:kota_id')
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     },
//     getDestination: () => {
//       axios.get('http://localhost:3000/wisata')
//       .then((res) => {
//         console.log(res.data);
//         app.destinations = res.data
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })
//     },
//     addDestination: (req, res) => {
//       axios.post('http://localhost:3000/wisata', {
//         name		: app.destinations.name,
//         address	: app.destinations.address,
//         image		: app.destinations.image
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     },
//     updateDestination: () => {
//       axios.put('http://localhost:3000/wisata/:id', {
//         name		: app.destinations.name,
//         address	: app.destinations.address,
//         image		: app.destinations.image
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     },
//     deleteDestination: () => {
//       axios.delete('http://localhost:3000/wisata/:id')
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     },
//     getUser: () => {
//       axios.get('http://localhost:3000/wisata')
//       .then((res) => {
//         console.log(res.data);
//         app.users = res.data
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })
//     },
//     addUser: () => {
//       console.log('masuk');
//       axios.post('http://localhost:3000/wisata', {
//         username: app.users.username,
//         password: app.users.password,
//         role		: app.users.role,
//         name		: app.users.name,
//         email		: app.users.email,
//         phone		: app.users.phone
//       })
//       .then((res) => {
//         console.log('test');
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     },
//     updateUser: () => {
//       axios.put('http://localhost:3000/wisata/:username', {
//         username: app.users.username,
//         password: app.users.password,
//         role		: app.users.role,
//         name		: app.users.name,
//         email		: app.users.email,
//         phone		: app.users.phone
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     },
//     deleteUser: () => {
//       axios.delete('http://localhost:3000/wisata/:username')
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     },
//     signIn: () => {
//       axios.post('route untuk signin/login', {
//         username: app.users.username,
//         password: app.users.password
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     },
//     signUp: () => {
//       axios.post('routes untuk signup', {
//         username: app.users.username,
//         password: app.users.password,
//         role		: 'user',
//         name		: app.users.name,
//         email		: app.users.email,
//         phone		: app.users.phone
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//     }
//   },
//   mounted: function() {
//     this.getDestination()
//   }
// })
