<style>
.main{
  position: relative;
  width: calc(100% - 3.5em);
  text-align: right;
  float: right;
  padding: 10px;
  height: 100%;
}
.tex{
position: relative;
}
</style>
<template>
<div class="main">
    <div class="text-center">
    <v-snackbar
      v-model="snack"
      :timeout="timeout"
    >
      {{snacktext}}
      <v-btn
        color="white"
        text
        @click="snack = false"
      >
        閉じる
      </v-btn>
    </v-snackbar>
  </div>
        <v-textarea
          v-model="inform"
          name="input-7-4"
          label="ここに入力（しなさい）"
          color="primary"
          solo
          :loading="loading"
          class="tex"
          no-resize
          rows="8"
        ></v-textarea>
          <v-textarea
          readonly=""
          solo
          v-model="outform"
          name="input-7-4"
          label="ここに出力されます"
          color="primary"
          class="tex"
          no-resize
          rows="8"
        ></v-textarea>
  <v-fab-transition>
  <v-btn
      class="fabbtn"
      fab
      fixed
      large
      color="primary"
      :loading="loading"
      bottom
      style="margin-right: 140px;"
      v-on:click="clear"
      dark
      right
><v-icon>mdi-notification-clear-all</v-icon>
</v-btn>
    </v-fab-transition>
                      <v-fab-transition>
  <v-btn
      class="fabbtn"
      fab
      v-clipboard:copy="outform"
      fixed
      large
      color="primary"
      :loading="loading"
      bottom
      style="margin-right: 70px;"
      v-on:click="copy"
      dark
      right
><v-icon>mdi-content-copy</v-icon>
</v-btn>
    </v-fab-transition>
      <v-fab-transition>
      <v-btn
      class="fabbtn"
      fab
      fixed
      large
      color="primary"
      :loading="loading"
      bottom=""
      v-on:click="translate"
      dark
      right
>
<v-icon>mdi-translate</v-icon></v-btn>
    </v-fab-transition>
  </div>

</template>

<script>
export default {
  name: 'Death',
  data: () => ({
    inform: '',
    outform: '',
    loading: false,
    rep: '',
    timeout: 2000,
    snacktext: false,
    snack: false,
    left: '＞　',
    right: '　＜',
    bottom: '^Y',
    top: '人',
    firsttop: '＿人人人',
    firstbottom: '￣Y^Y^Y',
  }),
  methods: {
    translate() {
      let IFD = this.inform;
      if (IFD) {
        this.loading = true;
        const length = IFD.length - 3;
        console.log(length);
        let { firsttop } = this;
        let { firstbottom } = this;
        for (let l = 0; l < length; l++) {
          console.log('loop');
          console.log(l);
          firsttop += this.top;
          firstbottom += this.bottom;
        }
        IFD = this.left + IFD;
        IFD += `${this.right}\n`;
        IFD = `${firsttop}人人＿\n${IFD}`;
        IFD += `${firstbottom}^Y^Y￣`;
        this.loading = false;
        this.outform = IFD;
      } else {
        this.snack = true;
        this.snacktext = '文章が入力されていません。';
      }
    },
    copy() {
      this.snack = true;
      this.snacktext = 'コピーされました。';
    },
    clear() {
      this.inform = '';
      this.outform = '';
      this.snack = true;
      this.snacktext = 'クリアされました。';
    },
  },
};
</script>
