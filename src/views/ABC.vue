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
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template>
      </template>

      <v-card>
        <v-card-title
          class="headline lighten-2"
          primary-title
        >
          フォントを選択
        </v-card-title>

        <v-card-text>
    <v-radio-group v-model="model">
      <v-radio
        v-for="n in togglelist"
        :key="n"
        :color="color"
        :label="n"
        :value="n"
      ></v-radio>
    </v-radio-group>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :color="color"
            text
            @click="dialog = false"
          >
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
  <!--ここまでダイアログ-->
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
          label="ここに入力..."
          :color="color"
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
          :color="color"
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
      :color="color"
      :loading="loading"
      bottom
      style="margin-right: 140px;"
      v-on:click="dialog = true"
      dark
      left
>𝐀𝐁𝐂
</v-btn>
  </v-fab-transition>
  <v-fab-transition>
  <v-btn
      class="fabbtn"
      fab
      fixed
      large
      :color="color"
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
      :color="color"
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
      :color="color"
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
  name: 'ABC',
  data: () => ({
    inform: '',
    outform: '',
    model: 0,
    loading: false,
    rep: '',
    timeout: 2000,
    snacktext: false,
    dialog: true,
    togglelist: ['𝐚𝐛𝐜', 'ᵃᵇᶜ', '𝑎𝑏𝑐', '𝒂𝒃𝒄', '𝙖𝙗𝙘', '𝒶𝒷𝒸', '𝕒𝕓𝕔', '⒜⒝⒞', '𝔞𝔟𝔠'],
    snack: false,
    color: 'deep-purple',
    normallist: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '&', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    list1: ['𝐚', '𝐛', '𝐜', '𝐝', '𝐞', '𝐟', '𝐠', '𝐡', '𝐢', '𝐣', '𝐤', '𝐦', '𝐧', '𝐨', '𝐩', '𝐪', '𝐫', '𝐬', '𝐭', '𝐮', '𝐯', '𝐰', '𝐱', '𝐲', '𝐳', '𝐀', '𝐁', '𝐂', '𝐃', '𝐄', '𝐅', '𝐆', '𝐇', '𝐈', '𝐉', '𝐊', '𝐌', '𝐍', '𝐎', '𝐏', '𝐐', '𝐑', '𝐒', '𝐓', '𝐔', '𝐕', '𝐖', '𝐗', '𝐘', '𝐙', '&', '@', '𝟏', '𝟐', '𝟑', '𝟒', '𝟓', '𝟔', '𝟕', '𝟖', '𝟗', '𝟎'],
    list2: ['ᵃ', 'ᵇ', 'ᶜ', 'ᵈ', 'ᵉ', 'ᶠ', 'ᵍ', 'ʰ', 'ⁱ', 'ʲ', 'ᵏ', 'ᵐ', 'ⁿ', 'ᵒ', 'ᵖ', 'q', 'ʳ', 'ˢ', 'ᵗ', 'ᵘ', 'ᵛ', 'ʷ', 'ˣ', 'ʸ', 'ᶻ', 'ᴬ', 'ᴮ', 'C', 'ᴰ', 'ᴱ', 'F', 'ᴳ', 'ᴴ', 'ᴵ', 'ᴶ', 'ᴷ', 'ᴹ', 'ᴺ', 'ᴼ', 'ᴾ', 'Q', 'ᴿ', 'S', 'ᵀ', 'ᵁ', 'ⱽ', 'ᵂ', 'X', 'Y', 'Z', '&', '@', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹', '⁰'],
    list3: ['𝑎', '𝑏', '𝑐', '𝑑', '𝑒', '𝑓', '𝑔', 'ℎ', '𝑖', '𝑗', '𝑘', '𝑚', '𝑛', '𝑜', '𝑝', '𝑞', '𝑟', '𝑠', '𝑡', '𝑢', '𝑣', '𝑤', '𝑥', '𝑦', '𝑧', '𝐴', '𝐵', '𝐶', '𝐷', '𝐸', '𝐹', '𝐺', '𝐻', '𝐼', '𝐽', '𝐾', '𝑀', '𝑁', '𝑂', '𝑃', '𝑄', '𝑅', '𝑆', '𝑇', '𝑈', '𝑉', '𝑊', '𝑋', '𝑌', '𝑍', '&', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    list4: ['𝒂', '𝒃', '𝒄', '𝒅', '𝒆', '𝒇', '𝒈', '𝒉', '𝒊', '𝒋', '𝒌', '𝒎', '𝒏', '𝒐', '𝒑', '𝒒', '𝒓', '𝒔', '𝒕', '𝒖', '𝒗', '𝒘', '𝒙', '𝒚', '𝒛', '𝑨', '𝑩', '𝑪', '𝑫', '𝑬', '𝑭', '𝑮', '𝑯', '𝑰', '𝑱', '𝑲', '𝑴', '𝑵', '𝑶', '𝑷', '𝑸', '𝑹', '𝑺', '𝑻', '𝑼', '𝑽', '𝑾', '𝑿', '𝒀', '𝒁', '&', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    list5: ['𝙖', '𝙗', '𝙘', '𝙙', '𝙚', '𝙛', '𝙜', '𝙝', '𝙞', '𝙟', '𝙠', '𝙢', '𝙣', '𝙤', '𝙥', '𝙦', '𝙧', '𝙨', '𝙩', '𝙪', '𝙫', '𝙬', '𝙭', '𝙮', '𝙯', '𝘼', '𝘽', '𝘾', '𝘿', '𝙀', '𝙁', '𝙂', '𝙃', '𝙄', '𝙅', '𝙆', '𝙈', '𝙉', '𝙊', '𝙋', '𝙌', '𝙍', '𝙎', '𝙏', '𝙐', '𝙑', '𝙒', '𝙓', '𝙔', '𝙕', '&', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    list6: ['𝒶', '𝒷', '𝒸', '𝒹', 'ℯ', '𝒻', 'ℊ', '𝒽', '𝒾', '𝒿', '𝓀', '𝓂', '𝓃', 'ℴ', '𝓅', '𝓆', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏', '𝒜', 'ℬ', '𝒞', '𝒟', 'ℰ', 'ℱ', '𝒢', 'ℋ', 'ℐ', '𝒥', '𝒦', 'ℳ', '𝒩', '𝒪', '𝒫', '𝒬', 'ℛ', '𝒮', '𝒯', '𝒰', '𝒱', '𝒲', '𝒳', '𝒴', '𝒵', '&', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    list7: ['𝕒', '𝕓', '𝕔', '𝕕', '𝕖', '𝕗', '𝕘', '𝕙', '𝕚', '𝕛', '𝕜', '𝕞', '𝕟', '𝕠', '𝕡', '𝕢', '𝕣', '𝕤', '𝕥', '𝕦', '𝕧', '𝕨', '𝕩', '𝕪', '𝕫', '𝔸', '𝔹', 'ℂ', '𝔻', '𝔼', '𝔽', '𝔾', 'ℍ', '𝕀', '𝕁', '𝕂', '𝕄', 'ℕ', '𝕆', 'ℙ', 'ℚ', 'ℝ', '𝕊', '𝕋', '𝕌', '𝕍', '𝕎', '𝕏', '𝕐', 'ℤ', '&', '@', '𝟙', '𝟚', '𝟛', '𝟜', '𝟝', '𝟞', '𝟟', '𝟠', '𝟡', '𝟘'],
    list8: ['⒜', '⒝', '⒞', '⒟', '⒠', '⒡', '⒢', '⒣', '⒤', '⒥', '⒦', '⒨', '⒩', '⒪', '⒫', '⒬', '⒭', '⒮', '⒯', '⒰', '⒱', '⒲', '⒳', '⒴', '⒵', '🄐', '🄑', '🄒', '🄓', '🄔', '🄕', '🄖', '🄗', '🄘', '🄙', '🄚', '🄜', '🄝', '🄞', '🄟', '🄠', '🄡', '🄢', '🄣', '🄤', '🄥', '🄦', '🄧', '🄨', '🄩', '&', '@', '⑴', '⑵', '⑶', '⑷', '⑸', '⑹', '⑺', '⑻', '⑼', '0'],
    list9: ['𝔞', '𝔟', '𝔠', '𝔡', '𝔢', '𝔣', '𝔤', '𝔥', '𝔦', '𝔧', '𝔨', '𝔪', '𝔫', '𝔬', '𝔭', '𝔮', '𝔯', '𝔰', '𝔱', '𝔲', '𝔳', '𝔴', '𝔵', '𝔶', '𝔷', '𝔄', '𝔅', 'ℭ', '𝔇', '𝔈', '𝔉', '𝔊', 'ℌ', 'ℑ', '𝔍', '𝔎', '𝔐', '𝔑', '𝔒', '𝔓', '𝔔', 'ℜ', '𝔖', '𝔗', '𝔘', '𝔙', '𝔚', '𝔛', '𝔜', 'ℨ', '&', '@', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  }),
  methods: {
    translate() {
      let IFD = this.inform;
      if (IFD) {
        this.loading = true;
        console.log(this.model);
        switch (this.model) {
          case '𝐚𝐛𝐜':
            this.replaceengine(this.list1, IFD);
            break;
          case 'ᵃᵇᶜ':
            this.replaceengine(this.list2, IFD);
            break;
          case '𝑎𝑏𝑐':
            this.replaceengine(this.list3, IFD);
            break;
          case '𝒂𝒃𝒄':
            this.replaceengine(this.list4, IFD);
            break;
          case '𝙖𝙗𝙘':
            this.replaceengine(this.list5, IFD);
            break;
          case '𝒶𝒷𝒸':
            this.replaceengine(this.list6, IFD);
            break;
          case '𝕒𝕓𝕔':
            this.replaceengine(this.list7, IFD);
            break;
          case '⒜⒝⒞':
            this.replaceengine(this.list8, IFD);
            break;
          case '𝔞𝔟𝔠':
            this.replaceengine(this.list9, IFD);
            break;
          default:
            console.log('err');
        }
        // IFDに入力された値が入っているので、IFDニ変換していれなおす
        IFD = '4';
        this.loading = false;
      } else {
        this.snack = true;
        this.snacktext = '文章が入力されていません。';
      }
    },
    replaceengine(listname, value) {
      let IFD = value;
      listname.forEach((cl, index) => {
        const regex = new RegExp(this.normallist[index], 'g');
        IFD = IFD.replace(regex, cl);
      });
      console.log(IFD);
      this.outform = IFD;
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
