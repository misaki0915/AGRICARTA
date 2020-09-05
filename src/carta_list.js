//問題と解答
var qa = [];
qa[0] = [
  "収入役",
  "ラウンド⑪から、自分だけそれ以降のラウンドで使うラウンドカードのアクションも選べる。これらのカードは早くともラウンド⑪のはじめから表にしてボード上に置かれる。",
];
qa[1] = [
  "毒味役",
  "ほかの人がスタートプレーヤーのたび、ラウンドのはじめにその人に食料1を払えば最初に家族を1人置ける。その後スタートプレーヤーから通常通りに置く。（自分がスタートプレーヤーなら効果なし）",
];
qa[2] = [
  "畑守",
  "「野菜1を取る」「畑1を耕す」「畑1を耕し種をまく」のアクションを、ほかの人が既に選んでいてもそのアクションスペースを使って行える。",
];
qa[3] = [
  "ほら吹き",
  "ゲーム終了時に、自分の前にある進歩カード5/6/7/8/9枚に対して、それぞれ1/3/5/7/9点ボーナスを得る。",
];
qa[4] = [
  "職業訓練士",
  "ほかの人が職業を出すたびに、食料3を払えば自分も職業1を出せる。4枚目以降の職業は食料2だけでよい。（自分で職業を出した場合は2枚出せない",
];
qa[5] = [
  "農場管理",
  "レンガか石の家に住み次第、次に増やす家族1人は部屋がいらなくなる。（ステージ5のラウンドカード「部屋がなくても家族を増やす」と同様。小さい進歩もできる。それ以降の家族は通常通り）",
];
qa[6] = [
  "出来高労働者",
  "アクションで木材・レンガ・葦・石材・小麦のいずれかを手に入れるたびに食料1で同じものを最大1つまで追加で買える。野菜の場合は食料2で買える。",
];
qa[7] = [
  "炭焼き",
  "自分かほかの人がパンを焼く進歩（パンの印の付いたカード）を行うたびに食料1と木材1を得る。",
];
qa[8] = [
  "畑番",
  "「小麦1を取る」のアクションのたびに追加で畑を（最大）1つ耕せる。]",
];
qa[9] = [
  "羊農",
  "アクションで羊を取るたびに、追加で羊1をストックから得る。いつでも（繁殖フェイズを除く）羊3を牛1と猪1に交換できる。",
];
qa[10] = [
  "家畜追い",
  "「羊1」「猪1」「牛1」のアクションを行うたび、食料1を払えば同じ種類の家畜がもう1頭だけ手に入る。（これらのアクションはそれぞれラウンド1-4、8-9、⑩-⑪で登場）",
];
qa[11] = [
  "屋根がけ",
  "増築・改築・水車・木骨の小屋・鶏小屋・別荘・ヴィラ・乾燥小屋の建設で葦を1つ安くできる。",
];
qa[12] = [
  "柴結び",
  "改築と増築で必要な葦を木材1で代用できる。（柴を屋根にするということ）",
];
qa[13] = [
  "愛人",
  "このカードを出したらすぐ「家族を増やす（部屋がなくてもよい）」のアクションを行う（ステージ5のカードと同じ）。このカードを出すのにコストとして追加で食料4が必要。",
];
qa[14] = [
  "レンガ職人",
  "アクションで木材かレンガを得るたびに、追加でレンガ1を得る。（木材やレンガをもたらす職業と進歩では無効）",
];
qa[15] = [
  "大工",
  "家の資材3と葦2で増築できる。（例えば木の家に住んでいるなら木材3と葦2）",
];
qa[16] = ["石切り", "大小の進歩・増築・改築全部が石材1安くなる。"];
qa[17] = ["イチゴ集め", "アクションで木材を取るたびに、追加で食料1を得る。"];
qa[18] = [
  "家長",
  "「増築」と「家族を増やす」が含まれるアクションを、他の人がすでに選んでいても行える。",
];
qa[19] = [
  "葦集め",
  "これ以降の4ラウンドのスペースに葦を1つずつ置く。これらのラウンドのはじめにその葦を得る。",
];
qa[20] = [
  "葦買い付け人",
  "毎ラウンド、最初に葦をとった人に食料最大1を支払い葦1（最大1つまで、同意無しに）買い取ることができる。相手はさらにストックから食料1を得る。（自分がラウンドの最初に葦を取った場合、このカードの効果はない）",
];
qa[21] = [
  "露天商の女",
  "アクションや小さい進歩で野菜を取るたびに、追加で小麦2を得る。",
];
qa[22] = [
  "小屋大工",
  "ラウンド1-4に出せば、第⑪ラウンドのはじめに無料で1スペース増築できる。（石の家を除く）",
];
qa[23] = [
  "季節労働者",
  "「日雇い労働者」のアクションのたびに追加で小麦1を得る。ラウンド6からは小麦1でなく野菜1にしてもよい。",
];
qa[24] = [
  "家畜飼い",
  "未使用の土地から新しい牧場を作るたびに、以下のコストで家畜のつがいを1組だけ買える。羊2頭は食料1、猪2頭は食料2、牛2頭は食料3。",
];
qa[25] = [
  "ネズミ捕り",
  "ラウンド⑩,⑫にほかの人は全員、（もしいるならば）新しい家族のうち1人を置くことができない。このカードは9ラウンド終了時までにしか出せない。（「新しい家族」とは3～5番目の家族のことを指す。自分自身は置くことができる）",
];
qa[26] = [
  "学者",
  "石の家に住み次第、毎ラウンドのはじめに食料1で職業カードを出すかコストを払って進歩カードを出せる。",
];
qa[27] = [
  "鋤手",
  "現在のラウンドに4,7,⑩を足す。そのラウンドのスペースにそれぞれ畑を1つずつ置き、これらのラウンドのはじめに食料1を払えばその畑を自分の農場に置ける。",
];
qa[28] = [
  "小売人",
  "このカードの上に下から野菜・葦・レンガ・木材・野菜・石材・小麦・葦を1つずつ順番に重ねる。食料1でいつでも一番上の商品を買える。",
];
qa[29] = ["木こり", "アクションで木材を取るたびに、追加で木材1を得る。"];
qa[30] = [
  "庭師",
  "野菜畑から収穫するたびに、野菜を畑からではなくストックから得る。畑の野菜はそのままにしておく。",
];
qa[31] = [
  "レンガ貼り",
  "進歩と改築はレンガ1つ少なくできる。さらに増築はレンガ2つ少なくできる。",
];
qa[32] = [
  "人形使い",
  "ほかの人が「小劇場」のアクションを行うたびに食料1を払って職業1を出せる。（食料はストックへ払う）",
];
qa[33] = [
  "彫刻家",
  "進歩1・木の家の増築・厩・柵のいずれかで、1ラウンドに1回、払う木材を1つ少なくできる。",
];
qa[34] = [
  "石買い付け人",
  "毎ラウンド、最初に石材を取った人に食料1を支払い石材1（最大1つまで、同意なしに）を買い取ることができる。相手はさらにストックから食料1を得る。（自分がラウンドで最初に石材を取った場合、このカードの効果はない）",
];
qa[35] = [
  "乳搾り",
  "収穫のたび、畑フェイズで牛1/3/5頭がいれば、その牛を食料にせずにそれぞれ食料1/2/3を得る。ゲーム終了時に牛2頭につき1点ボーナスを得る。",
];
qa[36] = [
  "商人",
  "「スタートプレーヤー」のアクションを選ぶたび、小さい進歩の後にもう1度小さい／大きい進歩ができる。",
];
qa[37] = [
  "柵見張り",
  "毎ラウンド、アクションで建てた厩1つまでを、食料1を払えば柵で囲み、1スペースの牧場にできる。柵のコストの木材は払わなくて良い。（既存の牧場があれば、この牧場はそこに隣接するように作らなければならない）",
];
qa[38] = [
  "踊り手",
  "「小劇場」のアクションのたびに、食料が1～3しか置いてなくても食料4を得る。",
];
qa[39] = [
  "柵管理人",
  "柵を1つ以上置くたびに無料でさらに3つ置くことができる。（柵は牧場を完全に囲む形でしか置けない）",
];
qa[40] = [
  "キノコ探し",
  "アクションスペースにある木材を取るたび、その中から1つ取らずに残して代わりに食料2を得ることができる。",
];
qa[41] = [
  "材木買い付け人",
  "他の人がアクションで木材を取るたびに（同意無しに）木材1を食料1（最大1つまで）で買い取れる。",
];
qa[42] = [
  "柵運び",
  "現在のラウンドに6と⑩を足す。そのラウンドのスペースそれぞれに自分の柵を4本ずつ置き、ラウンドのはじめに食料2を払って4本全部を立てることができる。（木材は払わなくてよい。立てられなかった柵は自分のストックに戻す）",
];
qa[43] = [
  "コック",
  "収穫で食糧供給フェイズのたびに、食料2を食べる家族は2人だけになり、残りの家族は全員食料1で満足する。",
];
qa[44] = [
  "パン職人",
  "収穫のたびにパンの印の付いた進歩カードがあれば、食糧供給フェイズのはじめにパンを焼くことができる。このカードを出したときに、追加アクションとしてパンを焼くことができる。",
];
qa[45] = [
  "村長",
  "カードを出した時点で残りラウンド数が1/3/6/9ならば、それぞれ木材1/2/3/4を得る。ゲーム終了時にマイナス点がない人は全員5点のボーナスを得る。 ",
];
qa[46] = [
  "パトロン",
  "これ以降職業を出すたびに、食料2を得る。この食料は今出した職業のコストの支払いに当ててもよい。",
];
qa[47] = [
  "養父母",
  "食料1を払えば増やしたばかりの新しい家族でアクションができる。その場合、新しい家族は新生児に含めない。",
];
qa[48] = [
  "左官屋",
  "石の家が4部屋以上になったら、1回だけ好きなときに1部屋を無料で増築できる。",
];
qa[49] = [
  "営林士",
  "3人ゲームから「木材2」のアクションカードを追加する。各ラウンドのはじめに木材2をその上に置く。この森を使う人から食料2をもらう。",
];
qa[50] = [
  "君主",
  "ゲーム終了時に、各カテゴリーで4点まで到達すれば、それぞれ1点のボーナスを得る。（柵で囲まれた厩を4つ以上作った場合も含む）",
];
qa[51] = [
  "ギルド長",
  "家具製作所か家具職人を出すとすぐ木材4を得る。製陶所か陶工を出すとすぐにレンガ4を得る。かご製作所かかご編みを出すと葦3を得る。ギルド長を出したとき、これらのカードをもうすでに出していれば対応する資材を2つ得る。",
];
qa[52] = [
  "鋤鍛冶",
  "「畑1を耕す」か「畑1を耕して種をまく」のアクションのたびに、食料1で耕す畑を1つ（最大1つまで）追加できる。",
];
qa[53] = [
  "工場主",
  "レンガか石の家に住み次第、家具製作所・製陶所・かご製作所は小さい進歩になり好きな資源2つ少なく作ることができる。",
];
qa[54] = [
  "魔術使い",
  "自分の家族の最後の1人を「小劇場」のアクションに置くたびに、追加で小麦1と食料1を得る。",
];
qa[55] = [
  "乳母",
  "増築で家族をスペース分だけ増やせる。増やす家族1人につき食料1を払う。（新生児は次のラウンドになってから家族として使える。増築の後でスペースがなければ効果なし。）",
];
qa[56] = [
  "レンガ混ぜ",
  "アクションでレンガだけを取るたびに、レンガ2を追加で得る。",
];
qa[57] = [
  "木材運び",
  "ラウンド8～⑭のうち、まだ始まっていないラウンドのスペースに木材を1つずつ置く。これらのラウンドのはじめにその木材を得る。",
];
qa[58] = [
  "畑商人",
  "「野菜1を取る」のアクションのたびに、追加で小麦1を取る。このカードを出したときにストックから野菜1を得る。",
];
qa[59] = [
  "種屋",
  "「小麦1を得る」のアクションで追加で小麦1を取る。このカードを出したとき追加で小麦1を得る。",
];
qa[60] = [
  "柵立て",
  "このカードを出したら自分の柵を1本好きなアクションに置く。自分がそのアクションを選ぶたび、追加で柵を置くアクションもできる。（アクションに置いてある柵も使い切ったら効果がなくなる）",
];
qa[61] = [
  "販売人",
  "「小さい進歩」か「小さい／大きい進歩」のアクションのたびに、食料1を払えばもう1回このアクションをできる。",
];
qa[62] = [
  "石運び",
  "アクションで石材を取るたびに追加でもう1つ得る。石材以外の資材も取るときは、食料1を払えば、追加で得ることができる。",
];
qa[63] = [
  "小作人",
  "ゲーム終了時に未使用の土地1スペースにつき食料1を支払えばマイナス点にならない。",
];
qa[64] = [
  "行商人",
  "「小さい進歩1」のアクションのたびに、小さい進歩の代わりに大きい進歩ができる。「大きい進歩または小さい進歩1」では小さい進歩を2枚出せる。",
];
qa[65] = [
  "庭職人",
  "「日雇い労働者」のアクションのたびに、追加で野菜1を得る。",
];
qa[66] = [
  "族長",
  "ゲーム終了時に石の家1部屋につき1点追加ボーナス。このカードを出すには追加で食料2が必要。",
];
qa[67] = [
  "営農家",
  "全員が家族を置いた後、「小麦1を取る」か「野菜1を取る」に家族を置いていれば、「種をまく」のアクションに（空いていれば）移動してそのアクションを行うことが出来る。",
];
qa[68] = [
  "柵作り",
  "ほかの人が柵を1～4本立てるたびストックから木材1を得る。5本以上立てれば木材2を得る。（自分で柵を立てても効果なし）",
];
qa[69] = [
  "居候",
  "このカードを出した次の収穫を完全にスキップする。（食糧供給もしなくてよい）",
];
qa[70] = [
  "穴掘り",
  "3人ゲームから「レンガ1」を追加する。その上にすぐにレンガを置き、各ラウンドのはじめにさらにレンガ1を置く。このアクションを使う人から食料3をもらう。",
];
qa[71] = [
  "資材商人",
  "このカードの上に下から石材・レンガ・石材・レンガ・葦・レンガ・木材を1つずつ順番に重ねる。一番上の品と同じものを他で取るたびに、一番上の品も得る。",
];
qa[72] = [
  "ごますり",
  "「小麦1を取る」のアクションを行う人から前もって食料1をもらう。さらにストックから食料1を得る。自分が取るときもストックから追加で食料1を得る。",
];
qa[73] = [
  "家畜の世話人",
  "2つ目の厩を建てると牛1、3つ目の厩で猪1、4つ目の厩で羊1を得る。（1度にいくつも建てた場合、その分だけ家畜を得る）",
];
qa[74] = [
  "成り上がり",
  "1番にレンガの家や石の家に改築したらそれぞれ石材3を得る。2番目なら石材2、3番目なら石材1を得る。（カードを出す前に効果は遡らない）",
];
qa[75] = [
  "改築屋",
  "レンガの家に改築するときレンガが2つ少なくてよい。石の家に改築するとき石材が2つ少なくてよい。",
];
qa[76] = [
  "曲芸師",
  "「小劇場」のアクションのたび、他の人全員が家族を置き終わった後で、小劇場に置いた家族を「畑1を耕す」か「小麦1を取る」か「畑1を耕して種をまく」のアクションのいずれかに（空いていれば）移動してそのアクションを行うことができる。",
];
qa[77] = [
  "井戸掘り",
  "「井戸」は大きな進歩ではなく小さな進歩になり石材1と木材1だけで作ることができる。",
];
qa[78] = [
  "レンガ大工",
  "レンガの家に住んだらすぐにこれ以降の5ラウンドのスペースにレンガを2つずつ置く。これらのラウンドのはじめにそのレンガを得る。（カードを出したときすでにレンガや石の家に住んでいたらすぐレンガを並べる）",
];
qa[79] = ["八百屋", "「小麦1を取る」のアクションのたびに追加で野菜1を得る。"];
qa[80] = [
  "木材集め",
  "これ以降の5ラウンドのスペースに木材を1つずつ置く。これらのラウンドのはじめにその木材を得る。",
];
qa[81] = [
  "畜殺人",
  "他の人が家畜を食料にするたびに、（食料にした頭数にかかわらず）食料1をストックから得る。食糧供給フェイズでは手番を最後に行う。（自分で家畜を食料にしても追加の食料は得られない）",
];
qa[82] = [
  "ぶらつき学生",
  "職業を出すときに、職業カードの手札から誰かに引いてもらって出すことができる。そのたびに食料3を受け取り、その職業を出すのに払ってもよい。",
];
qa[83] = [
  "大農場管理人",
  "ゲーム終了時に3種類の家畜の合計で自分より多い人がいなければ、3/4/5人プレイでそれぞれ2/3/4点ボーナスを得る。",
];
qa[84] = [
  "畑好き",
  "「種をまいてパンを焼く」のアクションのたびにアクションの前に小麦1を得る。あるいは手持ちの小麦1を野菜1と交換できる。",
];
qa[85] = [
  "牛飼い",
  "場所があればラウンド⑫の後にも牛が繁殖する。このカードを出したらすぐに牛1を得る。",
];
qa[86] = [
  "てき屋",
  "「小麦1を取る」のアクションで追加で小麦1と野菜1を得ることができる。そのときほかの人は全員、小麦1をストックから得る。",
];
qa[87] = [
  "牛の飼育士",
  "「牛1」のアクションのたびに追加で牛1を得る。（「牛1」のアクションはラウンド⑩～⑪で登場）",
];
qa[88] = [
  "レンガ運び",
  "ラウンド6～⑭のうちまだ始まっていないラウンドのスペースに、1つずつレンガを置く。これらのラウンドのはじめにそのレンガを得る。",
];
qa[89] = [
  "木材配り",
  "毎回ラウンドのはじめに「木材3」にある木材をその下の「レンガ1」「葦1」「漁」のマスに同じ数ずつ分けることができる。このカードを出したときに木材2を得る。",
];
qa[90] = [
  "レンガ屋",
  "いつでもレンガ2を羊1か葦1に、レンガ3を猪1か石材1に、レンガ4を牛1にできる。",
];
qa[91] = [
  "農場主",
  "次に柵を作るとき、猪1を得る。それ以降、柵を1本以上作るたびに牛1を得る。",
];
qa[92] = [
  "ブリキ職人",
  "いつでもレンガを食料にできる。レンガ1につき食料1。誰かが井戸を作ればレンガ2つにつき食料3にできる。（村の井戸でも可）",
];
qa[93] = [
  "族長の娘",
  "ほかの人が「族長」を出したら、コストなしでこのカードをすぐ出すことができる（通常通り出してもよい）。ゲーム終了時に石の家なら3勝利点、レンガの家なら1勝利点を追加で得る。 ",
];
qa[94] = [
  "梁打ち",
  "改築でレンガ1や石材1（最大1）を木材1で代用できる。増築ではレンガ2や石材2（最大2）を木材1で代用できる。",
];
qa[95] = [
  "網漁師",
  "葦を取るアクションのたび、帰宅フェイズで「漁」のアクションスペースにある食料を全部取る。（葦をもたらす進歩や職業では不可）",
];
qa[96] = [
  "鋤職人",
  "石の家を持つと、毎ラウンドのはじめに食料1を払って畑を（最大）1つ耕すことができる。",
];
qa[97] = [
  "小さい庭師",
  "このカードを出したときに野菜1を得て、すぐに「種まき」のアクションを行ってこの野菜を植えられる。このときほかのものは植えられない。",
];
qa[98] = [
  "レンガ焼き",
  "いつでもレンガを石材にできる。レンガ2につき石材1、レンガ3につき石材2に換える。",
];
qa[99] = [
  "レンガ積み",
  "木の家をレンガの家に改築するコストはレンガ1と葦1でよい。またレンガの家の増築は1部屋につきレンガ3と葦2になる。",
];
qa[100] = [
  "肉屋",
  "暖炉を持っていれば家畜をいつでも食料にできる。羊1匹で食料2、猪1匹で食料3、牛1匹で食料4に換える。",
];
qa[101] = [
  "乗馬従者",
  "今出たばかりのラウンドカードのアクションを行うたびに追加で小麦1を得る。",
];
qa[102] = [
  "共同体長",
  "残りラウンド数が1/3/6/9ならば、すぐに木材1/2/3/4を得る。ラウンド⑭で5人以上の家族をアクションに使った人は全員、ゲーム終了時にボーナス3点を得る。（ゲストは数えない）",
];
qa[103] = [
  "ブタ飼い",
  "「猪1」のアクションのたびに、猪をもう1頭得る。（「猪」のアクションはラウンド8か9に出てきます）",
];
qa[104] = [
  "自由農夫",
  "ゲーム終了時に、未使用の農場スペースと物乞いだけがマイナス点になる。",
];
qa[105] = [
  "有機農業者",
  "ゲーム終了時に、家畜が1頭以上いて、かつまだ3頭以上入れられる牧場1つにつき1点のボーナスを得る。（森の牧場も含む）",
];
qa[106] = [
  "召使",
  "石の家に住んだら、すぐにこれ以降のラウンドスペース全てに食料を3つずつ置く。これらのラウンドのはじめにその食料を得る。（カードを出したときすでに石の家に住んでいたらすぐ食料を並べる）",
];
qa[107] = [
  "火酒作り",
  "収穫で食糧供給フェイズのたびに、野菜最大1を食料5にできる。",
];
qa[108] = [
  "港湾労働者",
  "いつでも木材3をレンガ1葦1／石材1のいずれかに交換できる。または、レンガ2／葦2／石材2のいずれかを好きな資材1と交換できる。",
];
qa[109] = ["修理屋", "木の家をレンガの家にせず、直接石の家に改築できる。"];
qa[110] = [
  "代官",
  "カードを出した時点で残りラウンド数が1/3/6/9ならば、それぞれ木材1/2/3/4を得る。ゲーム終了時に職業を一番多く持っている人は全員3点ボーナスを得る。",
];
qa[111] = [
  "托鉢僧",
  "ゲーム終了時に、物乞いカードを2枚まで返すことができ、返したカード分のマイナス点が入らない。",
];
qa[112] = [
  "脱穀職人",
  "いつでも小麦1を食料3にできる。ほかの人は食料2を出してその小麦を買い取りこの行動を無効にできる。複数名名乗り出たら選んでよい。",
];
qa[113] = [
  "倉庫番",
  "1つのアクションで葦と石材の両方を取るたびに、追加でレンガ1か小麦1を得る。",
];
qa[114] = [
  "織工",
  "毎ラウンド、労働フェイズのはじめに羊2頭以上持っていれば、食料1を得る。",
];
qa[115] = [
  "村の長老",
  "カードを出した時点で残りラウンド数が1/3/6/9ならばすぐに、それぞれ木材1/2/3/4を得る。ゲーム終了時に進歩を一番多く出している人は全員3点ボーナスを得る。",
];
qa[116] = [
  "旅芸人",
  "「小劇場」にあるアクションのたびに置いてある食料の2倍を得る。ただし曲芸師・猛獣使い・奇術師・昔語り・人形使い・街頭の音楽家・踊り手・魔術使いがいればそれぞれ食料1ずつあげなければならない。",
];
qa[117] = [
  "昔語り",
  "「小劇場」のアクションのたびに食料1だけをそのスペースに残して、代わりに野菜1を得ることができる。",
];
qa[118] = [
  "猪飼い",
  "置ける場所があればラウンド⑫の最後でも猪が繁殖する。このカードを出したらすぐに猪1を得る。",
];
qa[119] = [
  "漁師",
  "漁のアクションのたびにそこに置いてある食料の2倍を得る。ただし釣竿・いかだ・カヌー・梁、柄付き網の所有者がいたらそれぞれ食料1ずつ与える。",
];
qa[120] = [
  "街頭の音楽家",
  "ほかの人が「小劇場」のアクションを行うたびに、小麦1を得る。（自分が行ったらもらえない）",
];
qa[121] = [
  "ブラシ作り",
  "食料にした猪をこのカードの上に置くことができる。ゲーム終了時にここの猪が2/3/4頭ならば、それぞれ1/2/3点のボーナスポイントを得る。",
];
qa[122] = ["奇術師", "「小劇場」のアクションのたびに、追加で小麦1を得る。"];
qa[123] = [
  "畑農",
  "種をまくときに畑を1つだけにすると、その畑に小麦か野菜を追加で2つ置く。畑を2つにすると、小麦か野菜を追加で1つ置く。（3つ以上の畑に種をまくときは何も起こらない）",
];
qa[124] = [
  "家庭教師",
  "ゲーム終了時、このカードの後に出した職業1枚につき1点のボーナスを得る。",
];
qa[125] = [
  "水運び",
  "誰かが大きい進歩の「井戸」を作ったら、それ以降のラウンドスペース全てに1つずつ食料を置く。それらのラウンドの最初にその食料を得る。（すでに井戸ができていたらすぐに食料を並べる）",
];
qa[126] = ["石工", "収穫のたび、石材（最大）1を食料3にできる。"];
qa[127] = [
  "醸造師",
  "収穫で食糧供給フェイズのたびに、小麦1（最大1つまで）を食料3にできる。",
];
qa[128] = [
  "家畜小作人",
  "どの種類でもいいので家畜1頭をすぐにストックから借りる。得点計算の前に3頭返す。返せなかった（返さなかった）家畜1頭につきポイント1点を失う。",
];
qa[129] = ["木大工", "ゲーム終了時に、木の家1部屋につきボーナス1点を得る。"];
qa[130] = [
  "パン焼き長老",
  "自分がパンの印の付いた設備を持っていれば、ほかの人がパンを焼くたびパンを焼ける。自分で焼くときは追加で食料+1を得る。",
];
qa[131] = [
  "牛使い",
  "現在のラウンドに5と9を足す。そのラウンドのスペースにそれぞれ牛を1つずつ置き、そのラウンドのはじめにその牛を得る。",
];
qa[132] = [
  "パン屋",
  "誰か（自分も含む）がパンを焼くたびに、食料にした小麦1つにつき食料1をストックから得る。（パンを焼くにはパンの印の付いた進歩が必要だが、食料1を得るには不要）",
];
qa[133] = [
  "家畜主",
  "まだ始まっていなければラウンド7に羊1、ラウンド⑩に猪1、ラウンド⑭に牛1を置く。これらのラウンドのはじめに食料1でその家畜を買える。",
];
qa[134] = [
  "猪使い",
  "現在のラウンドに4,7,⑩を足す。そのラウンドのスペースにそれぞれ猪1ずつ置き、ラウンドのはじめにその猪を得る。",
];
qa[135] = [
  "羊飼い親方",
  "これ以降の3ラウンドのスペースにそれぞれ羊1を置く。これらのラウンドのはじめにその羊を得る。",
];
qa[136] = [
  "倉庫主",
  "ラウンドのはじめに石材5以上もっていれば石材1、葦6以上で葦1、レンガ7以上でレンガ1、木材8以上で木材1を得る。",
];
qa[137] = [
  "執事",
  "カードを出した時点で残りラウンド数が1/3/6/9ならば、それぞれ木材1/2/3/4を得る。ゲーム終了時に家が一番広い人は全員3点のボーナスを得る。",
];
qa[138] = [
  "収穫手伝い",
  "収穫のたび、食糧供給フェイズのはじめに誰か1人の畑1つから小麦1を取れる。相手は代わりに食料2をストックから得る。",
];
qa[139] = [
  "建築士",
  "家が5部屋以上になったら、ゲーム中に1度だけ好きなタイミングで無料で1部屋増築できる。",
];
qa[140] = [
  "調教師",
  "自分の家のどの部屋にも家畜を1頭ずつ置ける。種類が別でもよい。",
];
qa[141] = [
  "革なめし工",
  "食料にした猪と牛をこのカードの上に置く。ゲーム終了時に畜殺した猪が2/4/6頭または牛が2/3/4頭ならばそれぞれ1/2/3点のボーナスを得る。",
];
qa[142] = [
  "羊使い",
  "現在のラウンドに4,7,9,⑪を足す。そのラウンドにそれぞれ羊を1つずつ置き、ラウンドのはじめにその羊を得る。",
];
qa[143] = [
  "石打ち",
  "「改築」のアクションなしで、いつでもレンガの家を石の家に改築できる。（ただし資材は払うこと）",
];
qa[144] = [
  "産婆",
  "ほかの人が家族を増やすたび、その家族が自分より多いと食料1を得る。2人以上多ければ食料2を得る。（食料は相手からではなくストックから得る）",
];
qa[145] = [
  "牧師",
  "このカードを出したときか、それ以降に、家の広さが2部屋しかないのが自分だけである場合、一度だけ木材3、レンガ2、葦1、石材1を得る。",
];
qa[146] = [
  "厩番",
  "柵を1つ以上置くたびに無料で厩を1つ手に入れすぐに置く。（置く場所は柵の内側でも外側でもよい）",
];
qa[147] = [
  "猪猟師",
  "アクションのスペースから木材を取るとき、その中から2つだけ残してその代わりに猪を1得ることができる。",
];
qa[148] = ["かご編み", "収穫のたび、葦1（最大1つまで）を食料3にできる。"];
qa[149] = ["石持ち", "いつでも石材を食料にできる。石材1につき食料2。"];
qa[150] = [
  "メイド",
  "レンガの家に住み次第、それ以降のラウンドのスペースに食料1を置く。これらのラウンドの最初にその食料を得る。（すでにレンガか石の家に住んでいれば、すぐに食料を置く）",
];
qa[151] = [
  "職場長",
  "毎ラウンド、労働フェイズのはじめに共通のストックから食料1を取り、好きなアクションスペースに置く。",
];
qa[152] = [
  "猛獣使い",
  "「小劇場」で取った食料ですぐに家畜を入手できる。羊1頭につき食料2、猪1頭につき食料2、牛1頭につき食料3。",
];
qa[153] = ["旋盤職人", "いつでも木材を食料にできる。木材1に付き食料1。"];
qa[154] = [
  "家畜守",
  "同じ牧場の中に羊・猪・牛を飼える。自分の牧場全てに適用する。（ただし森の牧場を除く）",
];
qa[155] = [
  "農夫",
  "毎ラウンドのはじめ（フェイズ1の前）にほかの人より農場を多く使用していたら木材1を得る。",
];
qa[156] = ["陶工", "収穫で、毎回レンガ最大1を食料2にできる。"];
qa[157] = [
  "骨細工",
  "食料にした猪1頭につき自分の木材2までをこのカードの上に置ける。1,4,7,⑩番目の木材を除きこのカードの上にある木材1につき1点のボーナスを得る。",
];
qa[158] = [
  "羊番",
  "石の家に住み次第これ以降のラウンドスペースに羊を1頭ずつ置く。このラウンドのはじめにその羊を得る。（このカードを出したときすでに石の家ならばすぐに羊を置く）",
];
qa[159] = [
  "大学者",
  "小さい進歩を使う時や、代官・家庭教師で得点する時に、このカードを職業2つに数える。",
];
qa[160] = [
  "羊飼い",
  "収穫で繁殖フェイズのたびに、羊4頭以上あれば、子羊1頭でなく2頭得る。ただし子羊のための場所が必要。",
];
qa[161] = ["家具職人", "収穫のたび、木材（最大）1を食料2にできる。"];
qa[162] = [
  "林務官",
  "「種をまく」のアクションを行うたびにこのカードの上に木材を3つまで植えられる（図の通り）。小麦畑と同じように扱い、畑フェイズで収穫する。",
];
qa[163] = [
  "獣医",
  "このカードを出したとき白いマーカー4、黒いマーカー3、茶色のマーカー2を取って袋の中に入れる。各ラウンドのはじめに2つ引く。同じなら1つを袋に戻して、同じ色の家畜を1頭得る。同じでなければ2つとも袋に戻す。",
];
qa[164] = [
  "精肉屋",
  "いつでも家畜を食料にできる。羊1頭で食料1、猪1頭で食料2、牛1頭で食料3を得る。（かまどの印のある進歩を持っていなくてもよい）",
];
qa[165] = [
  "馬手",
  "石の家に住み次第、毎ラウンドのはじめに厩のアクションに家族を置かずに木材1で厩1（最大1つまで）を建てられる。",
];
qa[166] = [
  "厩作り",
  "柵で囲んでいない厩に、同じ家畜を3匹まで置くことができる。",
];
qa[167] = [
  "小農夫",
  "家畜2頭分だけの牧場に3頭飼えるようになる。持っている畑が全部で2つ以下なら、種をまくたびに小麦か野菜が1つ増える。",
];
qa[168] = [
  "畑作人",
  "ほかの人が種をまくたびに3人ゲームでは小麦1、それ以外は食料1を得る。（自分で種をまいても効果はない）",
];

var textDetermined = [];
for (let dc = 0; dc < qa.length; dc++) {
  textDetermined[dc] = qa[dc][1].split("");
}
for (let x = 0; x < qa.length; x++) {
  qa[x][2] = 0;
}
for (var gn = 0; gn < qa.length; gn++) {
  for (var j = gn + 1; j < qa.length; j++) {
    for (var textSplit = 0; textSplit < 100; textSplit++) {
      if (textDetermined[gn][textSplit] === textDetermined[j][textSplit]) {
      } else {
        if (qa[gn][2] < textSplit) {
          qa[gn][2] = textSplit;
        }
        if (qa[j][2] < textSplit) {
          qa[j][2] = textSplit;
        }
        break;
      }
    }
  }
}

export default qa;
