var app = new Vue({
  el: '#app',
  data: {
    message: 'Greetings from Spring Boot!'
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})