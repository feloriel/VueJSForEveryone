const app = new Vue({
  el: '#app',
  data: {
    isTrue: true,
    hello: 'Hello World'
  },
  methods: {
    toggleIsTrue: function () {
      this.isTrue = !this.isTrue;
    },
    methodname: function () {
      return 'From the method'
    }
  }
});
