<style>
.sidebar{
width: 3.5em;
position: fixed;
height: 100%;background: #fff;
border-radius: 50px 50px 50px 50px;
margin: 5px 2px;
padding: 0% 0%;
display: flex;
justify-content: center;
align-items: center;
z-index: 4;
box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.sideitem{
   position:relative;
   z-index: 9999;
}
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter {
  Opacity: 0;
  animation-name: oc;
 animation-duration: 1s;
}
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
 animation-name: oc;
 animation-duration: 2s;
}

@keyframes oc {
    0% {
        transform: translateX(0px);
             position: fixed;
    top:calc(50% - 100%/2);
    }
    70% {
     width: 64px;
     height: 64px;
     position: fixed;
    top:calc(50% - 64px/2);
    transform:scaleY(1);
    }
    80% {
      transform: translateX(-20px);
      border-radius: 100000px;
      width: 64px;
      height: 64px;
      position: fixed;
    top:calc(50% - 64px/2);
    }
    90% {
        transform:scaleY(0.01);
        width: 64px;
        height: 64px;
        position: fixed;
    top:calc(50% - 64px/2);
        transform: translateX(-60px);
  } 100%{
    display: none;
    width: 64px;
    position: fixed;
    top:calc(50% - 64px/2);
    height: 64px;
    transform: translateX(-80px);
  }
  }
</style>
<template>
  <v-app>
  <v-btn
  v-on:click="panelopen" icon x-large
  style="margin-top: 10px; margin-left: 5px; position: relative; z-index: 5;">
    <v-icon>mdi-menu</v-icon>
    </v-btn>
      <transition name="slide-fade">
<div class="sidebar" v-if="sideshow">
   <transition name="slide-fade">
  <div v-if="sideshow" class="sideitem">
  <v-tooltip top>
    <template v-slot:activator="{ on }">
<v-btn to="/Correctjp" icon x-large v-on="on">
<v-icon>translate</v-icon>
</v-btn>
    </template>
<span>怪しい日本語</span>
  </v-tooltip>
<v-tooltip left>
  <template v-slot:activator="{ on }">
<v-btn to="/" icon v-on="on" x-large>
<v-icon>home</v-icon>
</v-btn>
  </template>
<span>ホーム</span>
</v-tooltip>
<v-tooltip bottom>
  <template v-slot:activator="{ on }">
<v-btn  to="/death" icon v-on="on" x-large>
  死
</v-btn>
  </template>
<span>突然の死</span>
</v-tooltip>
  </div>
  </transition>
</div>
      </transition>
    <v-content style="position: relative; z-index: 3;">
       <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    sideshow: false,
  }),
  methods: {
    panelopen() {
      if (this.sideshow) {
        this.sideshow = false;
      } else {
        this.sideshow = true;
      }
    },
  },
});
</script>
