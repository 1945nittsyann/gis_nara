var overMap = new Object();
overMap.layerNum = 1;
overMap.maxZoom = -1;
overMap.minZoom = 0; //最小ズームレベル（0で世界全体）
overMap.defoZoom = -1; //最初に表示されるズームレベル（-1の場合、全体が表示されるように自動設定）
overMap.legendFont = "13px 'メイリオ','ＭＳ Ｐゴシック'"; //凡例のフォント
overMap.tileLayer = ['k_cj4']; //背景に選択できるタイルマップ
overMap.tileLayerOpacity = [1]; //背景のタイルマップごとの透過度
overMap.overLayTile = []; //背景に重ね合わせるタイル
overMap.overLayTileOpacity = []; //背景に重ね合わせるタイルごとの透過度
overMap.mapWidth = 0; //地図の幅ピクセル（0の場合は画面サイズに合わせる）
overMap.mapHeight = 0; //地図の高さピクセル
overMap.top = 0; //地図の左上の位置
overMap.left = 5; //地図の左上の位置
overMap.titleHeight = 30; //地図のタイトルの高さ
overMap.sideBarWidth = 150;  //左サイドバーの幅
overMap.screenLayerStrings ='レイヤ: ' ; //レイヤの表示
overMap.screenMissingValueStrings = '欠損値'; //欠損値の凡例文字
overMap.screenOpacityStrings = '透過度:'; //透過度の文字
overMap.screenOneLayerStrings = '表示/非表示'; //表示／非表示ボタンの文字
overMap.screenLegendVisibilityStrings = '凡例表示'; //凡例表示ボタンの文字
overMap.circleMDplusText = '正の値'; //記号モードで正の場合の凡例文字
overMap.circleMDminusText = '負の値'; //記号モードで負の場合の凡例文字
overMap.doubleWindowEnabled = true; //2画面を可能にするか
overMap.doubleWindowsFlag = false; //最初から2画面か
overMap.sidebar_leftMapBGcol = 'ffffe0'; //左画面用サイドバーの背景色
overMap.sidebar_rightMapBGcol = 'e0ffff'; //右画面用サイドバーの背景色
layIniData = new Array();
layIniData[0] = new layIniInfo();
layIniData[0].name = '2018蓄電池設備';
layIniData[0].shape = 'point';
layIniData[0].zindex = 0;
layIniData[0].obj_Num = 34;
layIniData[0].lineColor = '#000000';
layIniData[0].lineWidth = 1;
layIniData[0].pointObjectRadius = 2;
layIniData[0].opacity = 0.8;
layIniData[0].visible = true;
layIniData[0].legendVisible = true;
layIniData[0].mappingData = 0;
layIniData[0].selectedMappingData = ['2017年発電量\t(kWh)\tpaint'];
layIniData[0].legend = [
 '#FF0000\t#FF00FF\t#FFFF00\t#00FFFF\t#0000FF\t25,000\t20,000\t15,000\t10,000'
];
layIniData[0].selectedInfoData = ['施設・事業所名\tCAT\t','所在地\tCAT\t','機能\tCAT\t','設備容量\t(kW)\t','蓄電池\t(kWh)\t','再エネ利用率\t(%)\t','リンク\tCAT\t'];
layIniData[0].objData = [
  '2018-1\t135.765079\t34.635166\t29052\t奈良県郡山総合庁舎\t大和郡山市\t防災拠点\t20\t20\t7.0\t<a href="2018picture/1koriyama_sogocyosya.jpg" target="blank">写真</a>',
  '2018-2\t135.8179\t34.52228\t33317\t奈良県橿原総合庁舎\t橿原市\t防災拠点\t20\t20\t9.1\t<a href="2018picture/2narakashiwara_sogocyosya.jpg" target="blank">写真</a>',
  '2018-3\t135.8165\t34.68036\t52417\tなら100年会館\t奈良市\t防災拠点・避難所・帰宅困難者支援施設\t40\t55\t3.0\t<a href="2018picture/3nara100nenkaikan.jpg" target="blank">写真</a>',
  '2018-4\t135.791\t34.72195\t20589\t奈良市北部会館\t奈良市\t避難所・福祉避難所・帰宅困難者支援施設\t15\t15\t4.6\t<a href="2018picture/4narahokubukaikan.jpg" target="blank">写真</a>',
  '2018-5\t135.9635\t34.61003\t7735\t針テラス情報館\t奈良市\t防災拠点・避難所\t10\t15\t8.5\t<a href="2018picture/5hariterasu.jpg" target="blank">写真</a>',
  '2018-6\t135.8186\t34.59871\t11608\t天理市立前栽小学校\t天理市\t避難所・要援護者避難施設\t15\t22\t6.0\t<a href="2018picture/6tenrizensaisyogakko.jpg" target="blank">写真</a>',
  '2018-7\t135.7823\t34.64833\t19980\t大和郡山市 三の丸会館 （中央公民館・体育館）\t大和郡山市\t避難所\t15\t15\t7.7\t<a href="2018picture/7yamatokoriyama_sannomaru.jpg" target="blank">写真</a>',
  '2018-8\t135.7402\t34.46333\t12385\t御所市役所\t御所市\t防災拠点・避難所・帰宅困難者支援施設\t10\t15\t14.1\t-----',
  '2018-9\t135.7224\t34.71832\t18751\t生駒市北コミュニティセンター　ＩＳＴＡはばたき\t生駒市\t防災拠点・避難所・帰宅困難者支援施設\t20\t20\t3.0\t<a href="2018picture/9ikomakitakomi.jpg" target="blank">写真</a>',
  '2018-10\t135.7051\t34.62004\t10947\t平群町立プリズムへぐり\t平群町\t帰宅困難者支援施設\t10\t15\t2.8\t<a href="2018picture/10prizum_heguri.jpg" target="blank">写真</a>',
  '2018-11\t135.7063\t34.62352\t15222\t平群町活性化センター （道の駅くまがしステーション）\t平群町\t避難所\t10\t15\t4.4\t<a href="2018picture/11heguri_katseiC.jpg" target="blank">写真</a>',
  '2018-12\t135.6981\t34.63103\t9324\t平群町立はなさとこども園\t平群町\t福祉避難所\t10\t15\t9.7\t<a href="2018picture/12heguri_hanasatokodomoen.jpg" target="blank">写真</a>',
  '2018-13\t135.6994\t34.63209\t10953\t平群町ふれあい交流センター\t平群町\t福祉避難所\t10\t15\t48.3\t<a href="2018picture/13heguri_fureaikoryuC.jpg" target="blank">写真</a>',
  '2018-14\t135.6946\t34.61059\t25592\t三郷町立学校給食センター\t三郷町\t防災拠点・避難所\t20\t20\t10.0\t-----',
  '2018-15\t135.6669\t34.60393\t23604\t養護老人ホーム「三室園」\t三郷町\t避難所・帰宅困難者支援施設\t20\t20\t5.8\t<a href="2018picture/15mimuroen.jpg" target="blank">写真</a>',
  '2018-16\t135.6928\t34.6004\t15107\t三郷町立三郷小学校\t三郷町\t防災拠点・避難所・帰宅困難者支援施設\t10\t15\t14.3\t-----',
  '2018-17\t135.6977\t34.61147\t14684\t三郷町立三郷北小学校\t三郷町\t防災拠点・避難所\t10\t20\t16.6\t-----',
  '2018-18\t135.7756\t34.57254\t19540\t三宅町立三宅小学校\t三宅町\t防災拠点・避難所・帰宅困難者支援施設\t15\t15\t21.0\t<a href="2018picture/18miyakeSyogakko.jpg" target="blank">写真</a>',
  '2018-19\t135.7726\t34.5745\t18407\t三宅町立三宅幼児園（保育所棟）\t三宅町\t避難所・福祉避難所\t14\t10\t24.5\t<a href="2018picture/19_20miyakeyojien.jpg" target="blank">写真</a>',
  '2018-20\t135.7731\t34.5745\t13947\t三宅町立三宅幼児園（幼稚園棟）\t三宅町\t避難所・福祉避難所\t9\t10\t57.9\t<a href="2018picture/19_20miyakeyojien.jpg" target="blank">写真</a>',
  '2018-21\t136.1339\t34.48501\t15419\t御杖村立御杖保育所\t御杖村\t避難所\t12\t14\t40.0\t<a href="2018picture/21mitsuehoikusyo.jpg" target="blank">写真</a>',
  '2018-22\t135.6925\t34.58191\t20077\t王寺町立王寺南小学校\t王寺町\t避難所\t16\t20\t20.9\t-----</a>',
  '2018-23\t135.7351\t34.55195\t11234\t広陵町・香芝市共同中学校給食センター\t広陵町\t帰宅困難者支援施設・その他\t15\t15\t4.4\t<a href="2018picture/23koryokashiba_kyusyokuC.jpg" target="blank">写真</a>',
  '2018-24\t135.7482\t34.54975\t10512\t広陵町立中央体育館\t広陵町\t避難所・帰宅困難者支援施設\t10\t15\t15.2\t<a href="2018picture/24koryotaikukan.jpg" target="blank">写真</a>',
  '2018-25\t135.8504\t34.39268\t7390\t吉野町立吉野小学校\t吉野町\t避難所\t10\t15\t8.1\t<a href="2018picture/25yoshino_syogakko.jpg" target="blank">写真</a>',
  '2018-26\t135.8736\t34.39604\t12645\t吉野町立吉野中学校\t吉野町\t防災拠点\t10\t15\t9.5\t<a href="2018picture/26yoshino_cyugakko.jpg" target="blank">写真</a>',
  '2018-27\t135.8329\t34.39835\t18923\t大淀町立旭ヶ丘総合センター\t大淀町\t避難所\t15\t15\t100.0\t-----</a>',
  '2018-28\t135.764\t34.40335\t12571\t大淀町立大淀西部幼稚園\t大淀町\t防災拠点\t10\t15\t63.2\t<a href="2018picture/28oyodoseibuyochien.jpg" target="blank">写真</a>',
  '2018-29\t135.793\t34.38465\t21269\t大淀町水道部電気棟中央監視システム\t大淀町\tあらゆる災害発生時に利用する施設\t16\t15\t17.1\t<a href="2018picture/29ooyodocyoSuidobu.jpg" target="blank">写真</a>',
  '2018-30\t135.637\t34.17457\t9013\t野迫川村立野迫川中学校\t野迫川村\t避難所\t10\t15\t5.1\t-----',
  '2018-31\t135.7658\t33.93457\t11402\t十津川村特別養護老人ホーム「高森の郷」\t十津川村\t避難所\t10\t15\t2.0\t<a href="2018picture/31takomorinosato.jpg" target="blank">写真</a>',
  '2018-32\t135.7617\t34.09964\t9788\t十津川北部保健センター\t十津川村\t避難所\t10\t15\t21.0\t<a href="2018picture/32totsugawa_hokubuhokenC.jpg" target="blank">写真</a>',
  '2018-33\t135.793\t33.99951\t10871\t十津川村体育文化センター\t十津川村\t避難所\t10\t15\t13.0\t<a href="2018picture/33totsugawa_taikubunkaC.jpg" target="blank">写真</a>',
  '2018-34\t135.7967\t33.98715\t14856\t十津川村立十津川中学校\t十津川村\t避難所\t10\t15\t9.0\t<a href="2018picture/34totsugawacyugakko.jpg" target="blank">写真</a>',
];
