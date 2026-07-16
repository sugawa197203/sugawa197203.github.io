export interface TimeLineItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface EventTimeLineItem {
  id: string;
  title: string;
  date: string;
  description: string;
  xPath?: string;
  otherPath?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  date: string;
  description: string;
  imagePath: string;
  detailPath?: string;
  xPath?: string;
  githubPath?: string;
}

const sortByDateDesc = <T extends { date: string }>(items: T[]): T[] =>
  [...items].sort((a, b) => (a.date < b.date ? 1 : -1));

export const timeLineItems: TimeLineItem[] = sortByDateDesc([
  {
    id: "entrydaigaku",
    title: "東京農工大に入学",
    date: "2021-04-01",
    description: "<p>東京農工大学工学部知能情報システム工学科に入学しました.</p>",
  },
  {
    id: "cgengineer",
    title: "CGエンジニア検定 エキスパート合格",
    date: "2023-08-02",
    description: "<p>CGエンジニア検定のエキスパートに合格しました.</p>",
  },
  {
    id: "apgoukaku",
    title: "応用情報技術者試験合格",
    date: "2023-12-21",
    description: "<p>応用情報技術者試験にに合格しました.</p>",
  },
  {
    id: "detascience",
    title: "数理・データサイエンス・AI教育プログラム (応用基礎) 修了",
    date: "2024-03-28",
    description:
      "<p>数理・データサイエンス・AI教育プログラム (応用基礎) を修了しました.</p>",
  },
  {
    id: "graduation",
    title: "東京農工大卒業",
    date: "2025-03-31",
    description: "<p>東京農工大学を卒業しました.</p>",
  },
  {
    id: "entrymaster",
    title: "東京農工大学大学院入学",
    date: "2025-04-01",
    description: "<p>東京農工大学大学院に入学しました.</p>",
  },
]);

export const eventTimeLines: EventTimeLineItem[] = sortByDateDesc([
  {
    id: "mccmmancc2021",
    title: "MCCMMANCC2021 で登壇",
    date: "2021-12-26",
    description:
      "<p>MCCMMANCC2021で登壇しました．農工大のMCC，電通大のMMA，明治大のNCCの3大学のIT系サークル合同LT回です．</p>",
    xPath: "https://x.com/TUATMCC/status/1475046208720687109",
  },
  {
    id: "seccon4b2022",
    title: "SECCON Beginners CTF 2022 参加",
    date: "2022-06-05",
    description: "<p>SECCON Beginners CTF 2022に参加しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1533338894607224832",
  },
  {
    id: "nokosai2022",
    title: "農工祭2022 ゲーム展示",
    date: "2022-11-10",
    description:
      "<p>農工大の農学部の学祭の農工祭でイラストゲームを展示しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1590661453123842048",
  },
  {
    id: "mccmmancc2022",
    title: "MCCMMANCC2022 で登壇",
    date: "2022-12-18",
    description:
      "<p>MCCMMANCC2022で登壇しました．農工大のMCC，電通大のMMA，明治大のNCCの3大学のIT系サークル合同LT回です．</p>",
    xPath: "https://x.com/TUATMCC/status/1604278888313802752",
  },
  {
    id: "gassyuku2022",
    title: "MCCハッカソン合宿2022参加",
    date: "2023-03-22",
    description:
      "<p>MCCの2泊3日ハッカソン合宿に参加しました．オセロのクイズゲームを作りました．</p>",
    xPath: "https://x.com/TUATMCC/status/1638481678816645120",
  },
  {
    id: "satsukisai2023",
    title: "皐月祭2023 ゲーム展示",
    date: "2023-05-28",
    description:
      "<p>農工大の工学部の学祭の皐月祭でイラストレースを展示しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1661668112931106816",
  },
  {
    id: "seccon4b2023",
    title: "SECCON Beginners CTF 2023 参加",
    date: "2023-06-04",
    description: "<p>SECCON Beginners CTF 2023に参加しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1665227945835896833",
  },
  {
    id: "icpc2023",
    title: "ICPC2023国内予選参加",
    date: "2023-07-07",
    description: "<p>ICPC2023に参加しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1677184576391872512",
  },
  {
    id: "gassyuku2023summer",
    title: "MCCハッカソン夏合宿2023参加",
    date: "2023-09-28",
    description:
      "<p>MCCハッカソン合宿2023夏合宿に参加しました．上から落ちてくる同じサイズボールを合わせて大きくして消すゲームを作りました．</p>",
    xPath: "https://x.com/TUATMCC/status/1707373482533941689",
  },
  {
    id: "noukousai2023",
    title: "農工祭2023 ゲーム展示",
    date: "2023-11-09",
    description:
      "<p>農工大の農学部の学祭の農工祭でイラストレースとAvoidGameを展示しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1722620350977220726",
  },
  {
    id: "gassyuku2023spring",
    title: "MCCハッカソン春合宿2023参加",
    date: "2024-03-26",
    description:
      "<p>MCCハッカソン合宿春2023合宿に参加しました．カタン風ゲームを作ろうとしました．</p>",
    xPath: "https://x.com/TUATMCC/status/1775749278042108009",
  },
  {
    id: "satsukisai2024",
    title: "皐月祭2024 ゲーム展示",
    date: "2024-05-19",
    description:
      "<p>農工大の工学部の学祭の皐月祭でAvoidGameとBe A Bachelorを展示しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1791041039433941067",
  },
  {
    id: "techcircleexpo2",
    title: "Tech Circle Expo #2 で司会をしました.",
    date: "2024-06-15",
    description: "<p>Tech Circle Expoの歴史について登壇もしました．</p>",
    xPath: "https://x.com/TUATMCC/status/1792118379417137155",
    otherPath: "https://tech-circle-expo.connpass.com/event/317970/",
  },
  {
    id: "seccon4b2024",
    title: "SECCON Beginners CTF 2024 参加",
    date: "2024-06-15",
    description: "<p>SECCON Beginners CTF 2024に参加しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1665227945835896833",
  },
  {
    id: "icpc2024",
    title: "ICPC2024国内予選参加",
    date: "2024-07-05",
    description: "<p>ICPC2024に参加しました．</p>",
    xPath: "https://x.com/tuatkyopro/status/1809264876709368141",
  },
  {
    id: "giikuhaku20247-6",
    title: "技育博参加",
    date: "2024-07-06",
    description: "<p>技育博でAvoidGameの紹介をしました．</p>",
    xPath: "https://x.com/geek_pjt/status/1809453528378953935",
  },
  {
    id: "hacku-2024",
    title: "Open Hack U 2024 TOKYO vol.2 参加",
    date: "2024-08-31",
    description:
      "<p>Open Hack U 2024 TOKYO vol.2 に参加し，Whois? を作りました．</p>",
    xPath: "https://x.com/TUATMCC/status/1829832473460752714",
  },
  {
    id: "gassyuku2024summer",
    title: "MCCハッカソン夏合宿2024参加",
    date: "2024-09-26",
    description:
      "<p>MCCハッカソン合宿2024夏合宿に参加しました．ガウシアンスプラッティングするプログラムを作りました．</p>",
    xPath: "https://x.com/TUATMCC/status/1839240014619881708",
  },
  {
    id: "noukousai2024",
    title: "農工祭2024 ゲーム展示",
    date: "2024-11-08",
    description:
      "<p>農工大の農学部の学祭の農工祭でRico Shotを展示しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1854431248997048443",
  },
  {
    id: "giikuten2024",
    title: "技育展 2024 決勝進出",
    date: "2024-11-10",
    description:
      "<p>Who is? を応募したところ，技育展2024の決勝まで進出しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1846150667951567017",
  },
  {
    id: "techcircleexpo3",
    title: "Tech Circle Expo #3 で登壇しました.",
    date: "2024-11-30",
    description: "<p>printfでFSBする方法を登壇しました．</p>",
    otherPath: "https://tech-circle-expo.connpass.com/event/336619/",
  },
  {
    id: "isucon2024",
    title: "ISUCON14 参加",
    date: "2024-12-09",
    description: "<p>ISUCON14 に参加しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1866028902914887936",
  },
  {
    id: "techcircleexpo3-2",
    title: "Tech Circle Expo #3 で登壇しました.",
    date: "2025-03-01",
    description: "<p>コンパイル最適化について登壇しました．</p>",
    otherPath: "https://tech-circle-expo.connpass.com/event/346072/",
  },
  {
    id: "tuatpc2024",
    title: "TUATPC2025 Spring 運営",
    date: "2025-03-09",
    description:
      "<p>農工大のオンサイト競プロコンテスト TUATPC2025 Spring の運営を行いました．</p>",
    xPath: "https://micro-computer-club.connpass.com/event/342084/",
  },
  {
    id: "gassyuku2024spring",
    title: "MCCハッカソン春合宿2024参加",
    date: "2025-03-25",
    description:
      "<p>MCCハッカソン合宿春2024合宿に参加しました．ChatGPTのAPIを使ってFlatterアプリからM5Stackを操作するアプリケーションを作りました．</p>",
    xPath: "https://x.com/TUATMCC/status/1904492374019174720",
  },
  {
    id: "techgaragelt",
    title: "農工大ものづくり系サークルテックガレージLT登壇",
    date: "2025-04-18",
    description:
      "<p>農工大ものづくり系サークルとテックガレージのコラボLT会で，MCC代表としてアプリケーションの作り方について新入生向けに登壇しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1913230734791458867",
  },
  {
    id: "icpc2025",
    title: "ICPC2025国内予選参加",
    date: "2025-07-04",
    description: "<p>ICPC2025に参加しました．</p>",
  },
  {
    id: "seccon4b2025",
    title: "SECCON Beginners CTF 2025 参加",
    date: "2025-07-28",
    description:
      "<p>SECCON Beginners CTF 2025に参加しました．1872ptで880チーム中203位でした.</p>",
  },
  {
    id: "noukousai2025",
    title: "農工祭2025 ゲーム展示",
    date: "2025-11-24",
    description:
      "<p>農工大の農学部の学祭の農工祭でSPELL RUSHを展示しました．</p>",
    xPath: "https://x.com/TUATMCC/status/1988926901885542742",
  },
  {
    id: "gassyuku2025spring",
    title: "MCCハッカソン春合宿2025参加",
    date: "2026-03-20",
    description:
      "<p>MCCハッカソン合宿春2025合宿に参加しました．Flutterで農工大生限定の掲示板を作りました．(公開はしてません)</p>",
    xPath: "https://x.com/TUATMCC/status/2042073902562865316",
  },
  {
    id: "icpc2026",
    title: "ICPC2026国内予選参加",
    date: "2026-07-03",
    description: "<p>ICPC2026にコーチとして参加しました．</p>",
  },
]);

export const portfolioItems: PortfolioItem[] = sortByDateDesc([
  {
    id: "illustrace",
    title: "イラストレース",
    description:
      "<p>農工祭で展示するためのゲームとしてMCCのメンバーで作ったゲームです．<br>自分の紙に書いたイラストがテクスチャとして貼られたオブジェクトで遊ぶレースゲームです.</br>Unityを使って作成し, 通信には Mirror を使いました. 作成にあたり, 自分は企画, 設計, 実装を行いました.</br>学祭では数百人の大人から子供まで遊んでいただけました.</p>",
    imagePath: "/pub/portfolio/illustrace/1.webp",
    detailPath: "https://tuatmcc.com/news/2022-11-13-nokosai/",
    xPath: "https://x.com/TUATMCC/status/1661668112931106816",
    githubPath: "https://github.com/tuatmcc/SchoolFestibal2022_Unity",
    date: "2022-08-05",
  },
  {
    id: "avoidgame",
    title: "AvoidGame",
    description:
      "<p>農工祭で展示するためのゲームとしてMCCのメンバーで作ったゲームです．<br>モーションキャプチャーで前からやってくる障害物を避けたり, スコアを回収するゲームです.<br>Unityでゲームを作成し, モーションキャプチャーには MediaPipe を使い, Web カメラからの情報で骨格推定を行いました. 作成にあたり, 自分はリード, 進捗管理, 企画, 設計, 実装を行いました.<br>学祭では数百人の大人から子供まで遊んでいただけました.</p>",
    imagePath: "/pub/portfolio/avoidgame/1.webp",
    detailPath: "https://tuatmcc.com/news/2023-11-10-nokosai/",
    xPath: "https://x.com/TUATMCC/status/1722620350977220726",
    githubPath: "https://github.com/tuatmcc/AvoidGame",
    date: "2023-09-22",
  },
  {
    id: "beabachelor",
    title: "Be A Bachelor",
    description:
      "<p>皐月祭で展示するためのゲームとしてMCCのメンバーで作ったゲームです．<br>アケコンでキャラクターを操作して時間内で単位(スコア)を回収し切るか, 対戦バトルで相手より多くの単位を回収できるかを競うゲームです.<br>通信対戦のためのシステムをUDPClientを使ってフルスクラッチで作成しました. 作成にあたり, 自分は進捗管理, 企画, 設計, 実装を行いました.</p>",
    imagePath: "/pub/portfolio/beabachelor/1.webp",
    xPath: "https://x.com/TUATMCC/status/1791041039433941067",
    githubPath: "https://github.com/tuatmcc/BeABachelor",
    date: "2024-03-14",
  },
  {
    id: "whois",
    title: "Who is?",
    description:
      "<p>Open Hack U 2024 TOKYO vol.2 に参加した際に作成したWebアプリケーションです.<br>登録された人の顔をカメラ越しで見ると, その人の頭の上にゲームのネームプレートのように名前が表示され, タップするとプロフィールを確認できます. 作成にあたり, 自分はアプリケーションの内容の提案をし, APIサーバーの実装を行いました.<br>技育展2024では決勝まで進みました.</p>",
    imagePath: "/pub/portfolio/whois/1.webp",
    xPath: "https://x.com/TUATMCC/status/1829832473460752714",
    date: "2024-08-20",
  },
  {
    id: "ricoshot",
    title: "Rico Shot",
    description:
      "<p>皐月祭で展示するためのゲームとしてMCCのメンバーで作ったゲームです．<br>マルチプレイで遊べる対戦バトルです．作成にあたり, 自分は設計, 実装を行いました.</p>技育博では, DeNA賞受賞しました.</p>",
    imagePath: "/pub/portfolio/ricoshot/1.webp",
    xPath: "https://x.com/TUATMCC/status/1854431248997048443",
    githubPath: "https://github.com/tuatmcc/SchoolFestival2024_Unity",
    date: "2024-11-08",
  },
  {
    id: "dots",
    title: "DOTS",
    description:
      "<p>個人で作ったドット絵エディタです．<br>ブラウザで完結し、サーバーにアップロードとかはしないです. サーバーが耐える限りは無料で広告無しで公開します.</p>",
    imagePath: "/pub/portfolio/dots/1.webp",
    date: "2026-07-16",
  },
  {
    id: "wavconverter",
    title: "WAV Converter",
    description:
      "<p>個人で作った音声ファイルを変換するアプリケーションです．<br>ブラウザで完結し、サーバーにアップロードとかはしないです. サーバーが耐える限りは無料で広告無しで公開します.</p>",
    imagePath: "/pub/portfolio/wavconverter/1.webp",
    date: "2026-07-16",
  },
]);
