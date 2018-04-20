import Vue from 'vue/dist/vue.esm.js';
import '../scss/vue-style.scss';

document.addEventListener('DOMContentLoaded', function() {

  // タブ処理
  (function() {
    new Vue({
      el: "#modal",
      data: function() {
        return {
          activeModal: ''
        }
      },
      methods: {
        openModal(selectedModalName) {
          this.activeModal = selectedModalName;
        },
        closeModal(e) {
          if (e.currentTarget ===　e.target) {
            this.activeModal = '';
          }
        }
      }
    });
  }());
})
