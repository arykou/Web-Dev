export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  url: string;
  category: string;
  like: number;
}

export var products = [
  {
    id: 1,
    name: 'Apple iPhone 13 128Gb black',
    price: 799,
    description: 'Our most advanced dual camera system. The chip with which everything is super-fast. The battery lasts up to 2.5 hours longer.',
    url:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    rat:'★★★★',
    category:'Phone',
    like:0
  },
  {
    id: 2,
    name: 'Smart watch Samsung Galaxy Watch 4 Classic SM-R890NZKACIS 46 mm black-black',
    price: 204,
    description: 'Platform Support: Android; Body material: aluminum; Body color: black; Interfaces: Bluetooth, ,NFC',
    url:'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6c/h85/62047597592606/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg',
    rat:'★★★★★',
    category:'Watch',
    like:0
  },
  {
    id: 3,
    name: 'Apple iPhone 11 128Gb White',
    price: 299,
    description: 'The functional and stylish smartphone Apple iPhone 11 in a metal case is able to provide not only everyday communication and entertainment, but also productive work.',
    url:'https://kaspi.kz/shop/p/apple-iphone-11-128gb-belyi-1005119/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6a/h4e/32287773589534/apple-iphone-11-128gb-belyj-1005119-1-Container.jpg',
    rat:'★★★',
    category:'Phone',
    like:0
  },
  {
    id: 4,
    name: 'Apple iPhone 14 128Gb Purple',
    price: 957,
    description: 'The iPhone 14 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.',
    url:'https://kaspi.kz/shop/p/apple-iphone-14-128gb-sirenevyi-106363117/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/ha3/63072545734686/apple-iphone-14-128gb-sirenevyj-106363117-1.jpg',
    rat:'★★★★',
    category:'Phone',
    like:0
  },
  {
    id: 5,
    name: 'Apple MacBook Pro 14 MKGP3 Gray',
    price: 2114,
    description: 'Our most powerful laptops, MacBook Pros are supercharged by M1 and M2 chips. ',
    url:'https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    rat:'★★★',
    category:'Laptop',
    like:0
  },
  {
    id: 6,
    name: 'Apple Watch Series 8 45 мм Aluminum Black',
    price: 996,
    description: 'Apple Watch is the ultimate device for a healthy life. Available in three models: Apple Watch Ultra, Apple Watch Series 8, and Apple Watch SE.',
    url:'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    rat:'★★★★',
    category:'Watch',
    like:0
  },
  {
    id: 7,
    name: 'Apple AirPods Pro 2nd generation White',
    price: 996,
    description: 'AirPods Pro take the listening experience to a new level of individuality',
    url:'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-belyi-106362968/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hba/hf8/62281477259294/apple-airpods-pro-2nd-generation-belyj-106362968-1.jpg',
    rat:'★★★★',
    category:'Headphones',
    like:0
  },
  {
    id: 8,
    name: ' Apple AirPods Max Green',
    price: 819,
    description: 'The new iPad Pro has the M2 chip, 12.9-inch Liquid Retina XDR display, 11-inch Liquid Retina display, Wi-Fi 6E, and support for Apple Pencil hover.',
    url:'https://kaspi.kz/shop/p/apple-airpods-max-zelenyi-101161547/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h12/33885799677982/apple-airpods-max-zelenyj-101161547-1-Container.jpg',
    rat:'★★★',
    category:'Headphones',
    like:0
    
  },
  {
    id: 9,
    name: ' Apple iPad Pro 2022 11 128GB Wi-Fi Gray',
    price: 990,
    description: 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.',
    url:'https://kaspi.kz/shop/search/?text=AirPods%20max',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/hca/64895798050846/apple-ipad-pro-2022-11-128gb-wi-fi-seryi-107276534-1.jpg',
    rat:'★★★',
    category:'Phone',
    like:0
  },
  {
    id: 10,
    name: 'Apple iPad mini 2021 8.3 64Gb Wi-Fi+Cellular Pink',
    price: 1001,
    description: 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.',
    url:'https://kaspi.kz/shop/p/apple-ipad-mini-2021-8-3-64gb-wi-fi-cellular-rozovyi-102301187/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/h5a/45595063943198/apple-ipad-mini-2021-wi-fi-cellular-64gb-rozovyj-102301187-1-Container.jpg',
    rat:'★★★★★',
    category:'Phone',
    like:0
  },
  {
    id: 11,
    name: 'Notebook ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 black',
    price: 839.84,
    description: 'Good and powerful computer in its class. Quality and price match.',
    url:'https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
    rat:'★★★',
    category:'Laptop',
    like:0
  },
  {
    id: 12,
    name: 'Smart watch Huawei WATCH Fit 2 Active blue',
    price: 147,
    description: 'Platform support: Android, ,iOS; Body material: plastic; Body color: silver; Screen technology: AMOLED',
    url:'https://kaspi.kz/shop/p/huawei-watch-fit-2-active-goluboi-105632685/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc2/hfc/62048116310046/huawei-watch-fit-2-goluboj-goluboj-105632685-1.jpg',
    rat:'★★★★★',
    category:'Watch',
    like:0
  },
  {
    id: 13,
    name: 'Headphones Samsung Galaxy Buds2 Pro (SM-R510NZAACIS) black',
    price: 159,
    description: 'Type: headset; Type: in-ear; Connection: wireless; Type of acoustic design: closed; Attachment type: no attachment',
    url:'https://kaspi.kz/shop/p/samsung-galaxy-buds2-pro-sm-r510nzaacis-chernyi-106128763/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/h62/61857930084382/samsung-sm-r510nzaacis-cernyj-106128763-1.jpg',
    rat:'★★★★',
    category:'Headphones',
    like:0
  },
  {
    id: 14,
    name: 'Headphones Xiaomi Redmi Buds Essential blue',
    price: 22,
    description: 'Type: in-ear; Connection: wireless; Type of acoustic design: closed; Attachment type: no attachment',
    url:'https://kaspi.kz/shop/p/xiaomi-redmi-buds-essential-goluboi-107983822/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h66/66744512184350/xiaomi-redmi-buds-essential-goluboi-107983822-1.jpg',
    rat:'★★★★',
    category:'Headphones',
    like:0
  },
  {
    id: 15,
    name: 'Smart watch Xiaomi Amazfit GTS 4 white-white',
    price: 133,
    description: 'Platform support: Android, ,iOS; Body material: aluminum; Body color: white; Screen technology: AMOLED',
    url:'https://kaspi.kz/shop/p/xiaomi-amazfit-gts-4-belyi-belyi-106677856/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/h7f/62875132755998/xiaomi-amazfit-gts-4-belyj-belyj-106677856-1.jpg',
    rat:'★★★★★',
    category:'Watch',
    like:0
  },
  {
    id: 16,
    name: 'Notebook HP 15s-fq5045ci 6K3C4EA silver',
    price: 822,
    description: 'Screen diagonal: 15.6 inch; Processor: Intel Core i5 1235U; Video Card: Intel Iris Xe',
    url:'https://kaspi.kz/shop/p/hp-15s-fq5045ci-6k3c4ea-serebristyi-106825696/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h67/63141147574302/hp-15s-fq5045ci-6k3c4ea-serebristyj-106825696-1.jpg',
    rat:'★★★★★',
    category:'Laptop',
    like:0
  },
  {
    id: 17,
    name: 'Headphones JBL Tune 510BT white',
    price: 52,
    description: 'Type: headset;Style: overhead; Connection: wireless; Type of acoustic design: closed',
    url:'https://kaspi.kz/shop/p/jbl-tune-510bt-belyi-101420096/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h52/33973207105566/jbl-tune-510bt-belyj-101420096-1-Container.jpg',
    rat:'★★★',
    category:'Headphones',
    like:0
  },
  {
    id: 18,
    name: 'Notebook HP 15s-fq5032ci 725W7EA silver',
    price: 762,
    description: 'Processor: Intel Core i5 1235U; Video Card: Intel Iris Xe Graphics; RAM size: 8 GB; Hard disk type: SSD',
    url:'https://kaspi.kz/shop/p/hp-15s-fq5032ci-725w7ea-serebristyi-107923100/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/h1f/66575448014878/hp-15s-fq5032ci-725w7ea-serebristyi-107923100-1.jpg',
    rat:'★★★★★',
    category:'Laptop',
    like:0
  },
  {
    id: 19,
    name: 'Smart watch Samsung Galaxy Watch 4 SM-R860 40 mm pink',
    price: 184,
    description: 'Platform Support: Android; Body material: aluminum; Body color: golden; Screen technology: Super AMOLED; RAM: 1 GB',
    url:'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-sm-r860-40-mm-rozovyi-102120670/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/h14/44807403274270/samsung-galaxy-watch-4-sm-r860-40-mm-rozovyi-102120670-1.jpg',
    rat:'★★★★★',
    category:'Watch',
    like:0
  },
  {
    id: 20,
    name: 'Notebook Acer Nitro 5 AN515-46 NH.QGZER.009 black',
    price: 972,
    description: 'Processor: AMD Ryzen 7 6800H; Video card: NVIDIA GeForce RTX 3060; RAM size: 16 GB; Hard disk type: SSD',
    url:'https://kaspi.kz/shop/p/acer-nitro-5-an515-46-nh-qgzer-009-chernyi-106111851/?c=151010000#!/item',
    photo: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h19/hb1/61796027957278/acer-nitro-5-an515-46-nh-qgzer-009-cernyj-106111851-1.jpg',
    rat:'★★★★★',
    category:'Laptop',
    like:0
  },
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/