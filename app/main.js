Vue.component('message', {
  template: "<div>{{ markers[answer%2] }} <button v-on:click='add'>Click me!</button></div>",
  data: function() {
    return {
      answer: 0,
      markers: ['X', 'O']
    };
  },
  methods: {
    add: function() {
      this.answer++;
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    vueShowMessage1: true,
    vueShowMessage2: true,
    vueMessage1: 'Hello from Vue',
    vueMessage2: 'Hello again from Vue'
  },
  methods: {

  }


});