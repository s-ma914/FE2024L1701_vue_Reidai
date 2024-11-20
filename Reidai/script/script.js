new Vue({
  el: '#app',
  data: {
      password: '',      // パスワード入力
      password2: '' // パスワード確認入力
  },
  computed: {
      
      passmatched() {
          return this.password !=='' && this.password === this.password2;
      },
      
      button() {
          return this.passmatched;
      }
  }
});
