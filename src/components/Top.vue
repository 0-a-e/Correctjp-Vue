<style>
.main{
  position: relative;
  width: calc(100% - 3.5em);
  text-align: right;
  float: right;
  padding: 10px;
  height: 100%;
}
</style>
<template>
<div class="main">
  <div style="text-align: center">
<h1 color="grey" style="color: #606060">怪レい日本语</h1>
<p><v-icon>mdi-package-variant-closed</v-icon> 4.0</p>
<v-btn block color="secondary" href="https://play.google.com/store/apps/details?id=com.shenyusoftware.correctjp&hl=ja" x-large>Playストアからダウンロード</v-btn>
</div>

<v-row style="margin-top: 15px">
<v-col>
 <v-card
    class="mx-auto"
    max-width="400"
    style="margin-bottom: 10px; text-align: start"
  >
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
    max-width="400"
    style="margin-bottom: 10px; text-align: start"
  >
      <v-card-title>突然の死</v-card-title>
    <v-card-text class="text--primary">
      <div>
＿人人人人人人＿
＞　突然の死　＜
￣Y^Y^Y^Y^Y^Y￣
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
</v-row>
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
