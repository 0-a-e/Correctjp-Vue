<style>
.main{
  position: relative;
  width: calc(100% - 3.5em);
  text-align: right;
  float: right;
  padding: 10px;
  height: 100%;
}
.footer{
  position: absolute;
  bottom:0;
  background: #fff;
  color: #606060;
  height: 30px;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 20px;
}
a{
  color: #606060;
  text-decoration: none;
}
</style>
<template>
<div class="main">
  <div style="text-align: center">
<h1 color="grey" style="color: #606060">怪レい日本语</h1>
<p><v-icon>mdi-package-variant-closed</v-icon> 5.0</p>

</div>

<v-row style="margin-top: 15px">
<v-col>
 <v-card
    class="mx-auto"
    style="margin-bottom: 10px; text-align: start"
  >
  <v-img height="200px" src="https://pbs.twimg.com/profile_images/1053674234356977664/7FiCGtt6_400x400.jpg"></v-img>
      <v-card-title>怪レい日本语</v-card-title>
    <v-card-text class="text--primary">
      <div>贵樣は正レい文章を生成ずゑことがてきまず</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        to="/Correctjp"
      >
        開く
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
<v-col>
  <v-card
    class="mx-auto"
    style="margin-bottom: 10px; text-align: start"
  >
  <v-img height="200px" src="https://pbs.twimg.com/card_img/1274405783199834113/YTpKdHP-?format=jpg&name=small"></v-img>
      <v-card-title>突然の死</v-card-title>
    <v-card-text class="text--primary">
      <div>
        0(:3　)～
</div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        to="/death"
      >
        開く
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
<v-col>
  <v-card
    class="mx-auto"
    style="margin-bottom: 10px; text-align: start"
  >
  <v-img height="200px" src="https://pbs.twimg.com/card_img/1274427028922486784/Vl8pY5jP?format=jpg&name=small"></v-img>
      <v-card-title>テキストジェネレーター</v-card-title>
    <v-card-text class="text--primary">
      <div>
        𝐀𝐁𝐂ᴰᴱF𝔊ℌℑ𝒦ℳ𝒩𝒪みたいなやつを生成できます
</div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        to="/abc"
      >
        開く
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
<v-col>
  <v-card
    class="mx-auto"
    style="margin-bottom: 10px; text-align: start"
  >
  <v-img height="200px" src="https://pbs.twimg.com/card_img/1274407861133512704/rTskWSrR?format=jpg&name=small"></v-img>
      <v-card-title>パラッポウ</v-card-title>
    <v-card-text class="text--primary">
      <div>
        パラッポウwwwwwww
</div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        to="/parappow"
      >
        開く
      </v-btn>
    </v-card-actions>
  </v-card>
</v-col>
</v-row>
<footer class="footer">
<p>Created <a href="twitter.com/0_a_e">0_a_e</a>. <v-icon>mdi-github</v-icon>  | <a color="primary" href="https://play.google.com/store/apps/details?id=com.shenyusoftware.correctjp&hl=ja" >Playストアからアプリをダウンロード</a></p>
</footer>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Top',

  data: () => ({

  }),
});
</script>
