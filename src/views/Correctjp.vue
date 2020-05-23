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
          color="red"
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
          color="red"
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
      color="red"
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
      color="red"
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
      color="red"
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
  name: 'Correctjp',
  data: () => ({
    inform: '',
    outform: '',
    loading: false,
    rep: '',
    timeout: 2000,
    snacktext: false,
    snack: false,
    Correctlist1: [':flag_jp:', 'アメリカ', 'ラーメン', '為', 'HUAWEI', 'Huawei', 'ファーウェイ', 'スペック', 'グ', '国', 'し', '偽', '雑', '貨', '書', 'る', 'う', 'ス', '語', 'く', '貴', '様', '応', '見', 'ン', 'ね', '魚', 'シ', 'ル', 'オ', '勝', 'HONOR', 'Honor', 'Google', '綺', 'Balong', 'Ascend', 'Kunpeng', '麗', 'あなた', '贵方', 'お前', 'あんた', '恋', 'ヨ', 'ョ', '浜', '濱', '濵', '沢', '澤', '私', 'あたし', 'わたし', 'わたくし', '当', 'で', '額', 'す', '尋', '湯', '00円', 'の', 'リ', 'り', 'ズ', 'ッ', '続', '気', 'ボ', '購', '買', 'ベ', '許', '絵', '長', '覚', '錯', '開', '評', '華', '約', '預', '乾燥', '間', '飛', '時', '伝', 'テ', 'ジ', '頼', '結', '論', '悪', 'ゼ', 'セ', '話', '電', '状', '険', '財', '声', '動', 'メ', '変', '記', '号', '監', '韓', '簡', '較', '顔', '愛', '違', '総', '届', '学', '獣', '岡', '輩', '親', '乗', 'ハ', 'ミ', 'ク', 'なさい', '会', 'ア', '楽', '偉', 'パ', '際', '揮', '来', 'ペ', 'エ', 'ェ', '労働', '風', '東', '経', '両', '拡', '戦', '務', 'カ', 'か', '夢', '調', 'Amazon', '潰', '選', '関', '値', '義', '体', '黒', '須', '報', '想像', '強', '確', '税', '軽', 'ヒ', '編', 'それ', '対', '殺', '進', '飲', '議', '壊', 'Yahoo! News', '偵', 'コナソ', '協', '温', '厳', '遊', '黄', '僕', '純', '習', '緒', '潤', '質', '証', '内', '焼', '軍', '艦', '勧', '売', '増', '員', ':crossed_flags:', ':flag_au:', ':flag_kr:', '島', '熱', '歴', '満', '統', '銀', '綾', '団', '過', '読', '癒', '覧', '前代未聞', '知恵', 'Da Zhang Wei', 'Da ZhangWei', 'Da Zhangwei', 'Wowkie Zhang', '人间精品', '飯', 'Xperia', 'AQUOS', '終', 'TBS', '縦', '大变だ', 'ログイン', 'ロゲイン', '録', '隊', 'トトロ', 'ちん', 'イ', 'レ(しなさい)', 'ツ亻シター', 'ⓃⒽⓀ', '紅', '済', '決', 'ダ亻ソー', 'NHK', '极度', '静'],
    Correctlist2: [':flag_cn:', '美国', 'うーメソ', '为', '华为技术有限公司', '华为技术有限公司', '华为技术有限公司', 'ﾇﾍﾟｯｹ', 'ゲ', '國', 'レ', '伪', '杂', '货', '畫', 'ゑ', 'ラ', 'ヌ', '语', 'ㄑ', '贵', '樣', '应', '见', 'ソ', 'れ', '鱼', 'ツ゚', '儿', '才', '胜', '荣耀', '荣耀', '谷歌', '绮', '巴龙', '昇騰', '鯤鵬', '丽', '贵樣', '贵樣', '贵樣', '贵樣', '戀', '彐', '彐', '滨', '滨', '滨', '泽', '泽', '仆', '仆', '仆', '仆', '當', 'て', '额', 'ず', '寻', '汤', '00日元', 'ゐ', '刂', 'リ', 'ス', 'シ', '续', '气', '㝳', '购', '买', 'へ', '许', '绘', '长', '覺', '错', '开', '评', '华', '约', '预', '极度干燥', '间', '飞', '时', '传', '亍', 'ヅ', '赖', '结', '论', '恶', '乜"', '乜', '话', '电', '狀', '險', '财', '聲', '动', '〆', '变', '记', '號', '监', '韩', '简', '较', '颜', '爱', '违', '總', '屆', '學', '獸', '冈', '辈', '亲', '乘', '八', 'シ', 'ケ', '\\(しなさい\\)', '會', 'マ', '乐', '伟', '八゜', '际', '毫', '來', 'へ', '卫', '卫', '極度勞動（しなさい\\）', '风', '东', '经', '两', '扩', '战', '务', '力', 'カ', '梦', '调', '亚马逊', '溃', '选', '关', '價', '义', '體', '黑', '须', '报', '極度想像（しなさい\\）', '强', '确', '稅', '轻', '匕', '编', 'そね', '对', '杀', '进', '饮', '议', '坏', 'カフー二ューヌ', '侦', 'ゴメソ', '协', '溫', '嚴', '游', '黃', '仆', '纯', '习', '绪', '润', '质', '證', '內', '燒', '军', '舰', '勸', '卖', '增', '员', ':flag_cn:', ':flag_cn:', ':flag_cn:', '岛', '热', '历', '满', '统', '银', '绫', '团', '过', '读', '愈', '览', '前所未有', '智慧', '大张伟', '大张伟', '大张伟', 'Da Zhang Wei', '人间精品起來嗨', '饭', 'Huawei', 'HUAWEI', '终', 'CCTV', '纵', '大變た', '登录', '登录', '录', '队', 'ドドロ', 'ㄘん', '亻', '(しなさい)', 'ツイター', 'ⓀⓈ:m:', '红', '济', '决', '名創優品', 'KSM', '極度', '靜'],
  }),
  methods: {
    translate() {
      let IFD = this.inform;
      if (IFD) {
        this.loading = true;
        this.Correctlist2.forEach((cl, index) => {
          const regex = new RegExp(this.Correctlist1[index], 'g');
          IFD = IFD.replace(regex, cl);
        });
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
