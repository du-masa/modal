import Vue from 'vue/dist/vue.esm.js';
import '../scss/vue-style.scss';

document.addEventListener('DOMContentLoaded', function() {

  // タブ処理
  (function() {
    new Vue({
      el: "#modal",
      data: function() {
        return {
          modalList: [
            {
              title: 'modal1',
              text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, laboriosam?'
            },
            {
              title: 'modal2',
              text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolorum fugit, iste a natus minus totam dignissimos distinctio eligendi id?'
            },
            {
              title: 'modal3',
              text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur vero architecto voluptates dolorum eveniet corrupti, deserunt ullam dolores minima provident porro expedita sequi? Facere voluptate alias consequatur laudantium veniam!'
            },
            {
              title: 'modal4',
              text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur vero architecto voluptates dolorum eveniet corrupti, deserunt ullam dolores minima provident porro expedita sequi? Facere voluptate alias consequatur laudantium veniam!'
            },
          ],
          selectedModaldata: null
        }
      },
      methods: {
        openModal(selectedModalName) {
          this.selectedModaldata = this.modalList.find(function(modalData) {
            return modalData.title === selectedModalName;
          });
          console.log(this.selectedModaldata);
        },
        closeModal(e) {
          if (e.currentTarget ===　e.target) {
            this.selectedModaldata = null;
          }
        }
      }
    });
  }());
})
