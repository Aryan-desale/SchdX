let endDate;

let fakearr1 = [];

let thumbnailElement;

let captionTxt;

let captionEncoded;

let timeValue;

let url;

let fakeImage;

let srcWidth;

let instaloginbutton = document.querySelector('.instaLogin');

let fakeImgUrl;

let srcHeight;

let compressedImageBlob;

let quality = 0.9;

let dropZoneElement;

let captionBox;

let commentFirst;

let commentEncode;

let save = document.querySelector('.save-btn');

let discard = document.querySelector('.cancel-btn');

let arr = [];

let postTimeArr = [];

let seconds;

let imgUrl = ' ';

let pastEvent = [];

let date3;
let fakearr = [];

let check = ' ';

let l = 1;

let date2;

let j = 1;

let date1;

var langCode = {
  ab: {
    name: 'Abkhaz',
    nativeName: 'аҧсуа',
  },
  aa: {
    name: 'Afar',
    nativeName: 'Afaraf',
  },
  af: {
    name: 'Afrikaans',
    nativeName: 'Afrikaans',
  },
  ak: {
    name: 'Akan',
    nativeName: 'Akan',
  },
  sq: {
    name: 'Albanian',
    nativeName: 'Shqip',
  },
  am: {
    name: 'Amharic',
    nativeName: 'አማርኛ',
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
  },
  an: {
    name: 'Aragonese',
    nativeName: 'Aragonés',
  },
  hy: {
    name: 'Armenian',
    nativeName: 'Հայերեն',
  },
  as: {
    name: 'Assamese',
    nativeName: 'অসমীয়া',
  },
  av: {
    name: 'Avaric',
    nativeName: 'авар мацӀ, магӀарул мацӀ',
  },
  ae: {
    name: 'Avestan',
    nativeName: 'avesta',
  },
  ay: {
    name: 'Aymara',
    nativeName: 'aymar aru',
  },
  az: {
    name: 'Azerbaijani',
    nativeName: 'azərbaycan dili',
  },
  bm: {
    name: 'Bambara',
    nativeName: 'bamanankan',
  },
  ba: {
    name: 'Bashkir',
    nativeName: 'башҡорт теле',
  },
  eu: {
    name: 'Basque',
    nativeName: 'euskara, euskera',
  },
  be: {
    name: 'Belarusian',
    nativeName: 'Беларуская',
  },
  bn: {
    name: 'Bengali',
    nativeName: 'বাংলা',
  },
  bh: {
    name: 'Bihari',
    nativeName: 'भोजपुरी',
  },
  bi: {
    name: 'Bislama',
    nativeName: 'Bislama',
  },
  bs: {
    name: 'Bosnian',
    nativeName: 'bosanski jezik',
  },
  br: {
    name: 'Breton',
    nativeName: 'brezhoneg',
  },
  bg: {
    name: 'Bulgarian',
    nativeName: 'български език',
  },
  my: {
    name: 'Burmese',
    nativeName: 'ဗမာစာ',
  },
  ca: {
    name: 'Catalan',
    nativeName: 'Català',
  },
  ch: {
    name: 'Chamorro',
    nativeName: 'Chamoru',
  },
  ce: {
    name: 'Chechen',
    nativeName: 'нохчийн мотт',
  },
  ny: {
    name: ' Chewa',
    nativeName: 'chiCheŵa, chinyanja',
  },
  zh: {
    name: 'Chinese',
    nativeName: '中文 (Zhōngwén), 汉语, 漢語',
  },
  cv: {
    name: 'Chuvash',
    nativeName: 'чӑваш чӗлхи',
  },
  kw: {
    name: 'Cornish',
    nativeName: 'Kernewek',
  },
  co: {
    name: 'Corsican',
    nativeName: 'corsu, lingua corsa',
  },
  cr: {
    name: 'Cree',
    nativeName: 'ᓀᐦᐃᔭᐍᐏᐣ',
  },
  hr: {
    name: 'Croatian',
    nativeName: 'hrvatski',
  },
  cs: {
    name: 'Czech',
    nativeName: 'česky, čeština',
  },
  da: {
    name: 'Danish',
    nativeName: 'dansk',
  },
  dv: {
    name: ' Maldivian;',
    nativeName: 'ދިވެހި',
  },
  nl: {
    name: 'Dutch',
    nativeName: 'Nederlands, Vlaams',
  },
  en: {
    name: 'English',
    nativeName: 'English',
  },
  eo: {
    name: 'Esperanto',
    nativeName: 'Esperanto',
  },
  et: {
    name: 'Estonian',
    nativeName: 'eesti, eesti keel',
  },
  ee: {
    name: 'Ewe',
    nativeName: 'Eʋegbe',
  },
  fo: {
    name: 'Faroese',
    nativeName: 'føroyskt',
  },
  fj: {
    name: 'Fijian',
    nativeName: 'vosa Vakaviti',
  },
  fi: {
    name: 'Finnish',
    nativeName: 'suomi, suomen kieli',
  },
  fr: {
    name: 'French',
    nativeName: 'français, langue française',
  },
  ff: {
    name: ' Fulah',
    nativeName: 'Fulfulde, Pulaar, Pular',
  },
  gl: {
    name: 'Galician',
    nativeName: 'Galego',
  },
  ka: {
    name: 'Georgian',
    nativeName: 'ქართული',
  },
  de: {
    name: 'German',
    nativeName: 'Deutsch',
  },
  el: {
    name: 'Greek',
    nativeName: 'Ελληνικά',
  },
  gn: {
    name: 'Guaraní',
    nativeName: 'Avañeẽ',
  },
  gu: {
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
  },
  ht: {
    name: 'Creole',
    nativeName: 'Kreyòl ayisyen',
  },
  ha: {
    name: 'Hausa',
    nativeName: 'Hausa, هَوُسَ',
  },
  he: {
    name: 'Hebrew (modern)',
    nativeName: 'עברית',
  },
  hz: {
    name: 'Herero',
    nativeName: 'Otjiherero',
  },
  hi: {
    name: 'Hindi',
    nativeName: 'हिन्दी, हिंदी',
  },
  ho: {
    name: 'Hiri Motu',
    nativeName: 'Hiri Motu',
  },
  hu: {
    name: 'Hungarian',
    nativeName: 'Magyar',
  },
  ia: {
    name: 'Interlingua',
    nativeName: 'Interlingua',
  },
  id: {
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
  },
  ie: {
    name: 'Interlingue',
    nativeName: 'Originally called Occidental; then Interlingue after WWII',
  },
  ga: {
    name: 'Irish',
    nativeName: 'Gaeilge',
  },
  ig: {
    name: 'Igbo',
    nativeName: 'Asụsụ Igbo',
  },
  ik: {
    name: 'Inupiaq',
    nativeName: 'Iñupiaq, Iñupiatun',
  },
  io: {
    name: 'Ido',
    nativeName: 'Ido',
  },
  is: {
    name: 'Icelandic',
    nativeName: 'Íslenska',
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
  },
  iu: {
    name: 'Inuktitut',
    nativeName: 'ᐃᓄᒃᑎᑐᑦ',
  },
  ja: {
    name: 'Japanese',
    nativeName: '日本語 (にほんご／にっぽんご)',
  },
  jv: {
    name: 'Javanese',
    nativeName: 'basa Jawa',
  },
  kl: {
    name: 'Greenlandic',
    nativeName: 'kalaallisut, kalaallit oqaasii',
  },
  kn: {
    name: 'Kannada',
    nativeName: 'ಕನ್ನಡ',
  },
  kr: {
    name: 'Kanuri',
    nativeName: 'Kanuri',
  },
  ks: {
    name: 'Kashmiri',
    nativeName: 'कश्मीरी, كشميري‎',
  },
  kk: {
    name: 'Kazakh',
    nativeName: 'Қазақ тілі',
  },
  km: {
    name: 'Khmer',
    nativeName: 'ភាសាខ្មែរ',
  },
  ki: {
    name: 'Kikuyu',
    nativeName: 'Gĩkũyũ',
  },
  rw: {
    name: 'Kinyarwanda',
    nativeName: 'Ikinyarwanda',
  },
  ky: {
    name: 'Kyrgyz',
    nativeName: 'кыргыз тили',
  },
  kv: {
    name: 'Komi',
    nativeName: 'коми кыв',
  },
  kg: {
    name: 'Kongo',
    nativeName: 'KiKongo',
  },
  ko: {
    name: 'Korean',
    nativeName: '한국어 (韓國語), 조선말 (朝鮮語)',
  },
  ku: {
    name: 'Kurdish',
    nativeName: 'Kurdî, كوردی‎',
  },
  kj: {
    name: 'Kwanyama',
    nativeName: 'Kuanyama',
  },
  la: {
    name: 'Latin',
    nativeName: 'latine, lingua latina',
  },
  lb: {
    name: 'Luxembourgish',
    nativeName: 'Lëtzebuergesch',
  },
  lg: {
    name: 'Luganda',
    nativeName: 'Luganda',
  },
  li: {
    name: ' Limburgan',
    nativeName: 'Limburgs',
  },
  ln: {
    name: 'Lingala',
    nativeName: 'Lingála',
  },
  lo: {
    name: 'Lao',
    nativeName: 'ພາສາລາວ',
  },
  lt: {
    name: 'Lithuanian',
    nativeName: 'lietuvių kalba',
  },
  lu: {
    name: 'Luba-Katanga',
    nativeName: '',
  },
  lv: {
    name: 'Latvian',
    nativeName: 'latviešu valoda',
  },
  gv: {
    name: 'Manx',
    nativeName: 'Gaelg, Gailck',
  },
  mk: {
    name: 'Macedonian',
    nativeName: 'македонски јазик',
  },
  mg: {
    name: 'Malagasy',
    nativeName: 'Malagasy fiteny',
  },
  ms: {
    name: 'Malay',
    nativeName: 'bahasa Melayu, بهاس ملايو',
  },
  ml: {
    name: 'Malayalam',
    nativeName: 'മലയാളം',
  },
  mt: {
    name: 'Maltese',
    nativeName: 'Malti',
  },
  mi: {
    name: 'Māori',
    nativeName: 'te reo Māori',
  },
  mr: {
    name: 'Marathi',
    nativeName: 'मराठी',
  },
  mh: {
    name: 'Marshallese',
    nativeName: 'Kajin M̧ajeļ',
  },
  mn: {
    name: 'Mongolian',
    nativeName: 'монгол',
  },
  na: {
    name: 'Nauru',
    nativeName: 'Ekakairũ Naoero',
  },
  nv: {
    name: 'Navajo',
    nativeName: 'Diné bizaad, Dinékʼehǰí',
  },
  nb: {
    name: 'Norwegian Bokmål',
    nativeName: 'Norsk bokmål',
  },
  nd: {
    name: 'North Ndebele',
    nativeName: 'isiNdebele',
  },
  ne: {
    name: 'Nepali',
    nativeName: 'नेपाली',
  },
  ng: {
    name: 'Ndonga',
    nativeName: 'Owambo',
  },
  nn: {
    name: 'Norwegian Nynorsk',
    nativeName: 'Norsk nynorsk',
  },
  no: {
    name: 'Norwegian',
    nativeName: 'Norsk',
  },
  ii: {
    name: 'Nuosu',
    nativeName: 'ꆈꌠ꒿ Nuosuhxop',
  },
  nr: {
    name: 'South Ndebele',
    nativeName: 'isiNdebele',
  },
  oc: {
    name: 'Occitan',
    nativeName: 'Occitan',
  },
  oj: {
    name: 'Ojibwe, Ojibwa',
    nativeName: 'ᐊᓂᔑᓈᐯᒧᐎᓐ',
  },
  cu: {
    name: 'Old Church Slavonic',
    nativeName: 'ѩзыкъ словѣньскъ',
  },
  om: {
    name: 'Oromo',
    nativeName: 'Afaan Oromoo',
  },
  or: {
    name: 'Oriya',
    nativeName: 'ଓଡ଼ିଆ',
  },
  os: {
    name: 'Ossetic',
    nativeName: 'ирон æвзаг',
  },
  pa: {
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ, پنجابی',
  },
  pi: {
    name: 'Pāli',
    nativeName: 'पाऴि',
  },
  fa: {
    name: 'Persian',
    nativeName: 'فارسی',
  },
  pl: {
    name: 'Polish',
    nativeName: 'polski',
  },
  ps: {
    name: 'Pashto',
    nativeName: 'پښتو',
  },
  pt: {
    name: 'Portuguese',
    nativeName: 'Português',
  },
  qu: {
    name: 'Quechua',
    nativeName: 'Runa Simi, Kichwa',
  },
  rm: {
    name: 'Romansh',
    nativeName: 'rumantsch grischun',
  },
  rn: {
    name: 'Kirundi',
    nativeName: 'kiRundi',
  },
  ro: {
    name: 'Romanian',
    nativeName: 'română',
  },
  ru: {
    name: 'Russian',
    nativeName: 'русский язык',
  },
  sa: {
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
  },
  sc: {
    name: 'Sardinian',
    nativeName: 'sardu',
  },
  sd: {
    name: 'Sindhi',
    nativeName: 'सिन्धी, سنڌي، سندھی',
  },
  se: {
    name: 'Northern Sami',
    nativeName: 'Davvisámegiella',
  },
  sm: {
    name: 'Samoan',
    nativeName: 'gagana faa Samoa',
  },
  sg: {
    name: 'Sango',
    nativeName: 'yângâ tî sängö',
  },
  sr: {
    name: 'Serbian',
    nativeName: 'српски језик',
  },
  gd: {
    name: 'Scottish Gaelic',
    nativeName: 'Gàidhlig',
  },
  sn: {
    name: 'Shona',
    nativeName: 'chiShona',
  },
  si: {
    name: 'Sinhala',
    nativeName: 'සිංහල',
  },
  sk: {
    name: 'Slovak',
    nativeName: 'slovenčina',
  },
  sl: {
    name: 'Slovene',
    nativeName: 'slovenščina',
  },
  so: {
    name: 'Somali',
    nativeName: 'Soomaaliga, af Soomaali',
  },
  st: {
    name: 'Southern Sotho',
    nativeName: 'Sesotho',
  },
  es: {
    name: 'Spanish',
    nativeName: 'español, castellano',
  },
  su: {
    name: 'Sundanese',
    nativeName: 'Basa Sunda',
  },
  sw: {
    name: 'Swahili',
    nativeName: 'Kiswahili',
  },
  ss: {
    name: 'Swati',
    nativeName: 'SiSwati',
  },
  sv: {
    name: 'Swedish',
    nativeName: 'svenska',
  },
  ta: {
    name: 'Tamil',
    nativeName: 'தமிழ்',
  },
  te: {
    name: 'Telugu',
    nativeName: 'తెలుగు',
  },
  tg: {
    name: 'Tajik',
    nativeName: 'тоҷикӣ, toğikī, تاجیکی',
  },
  th: {
    name: 'Thai',
    nativeName: 'ไทย',
  },
  ti: {
    name: 'Tigrinya',
    nativeName: 'ትግርኛ',
  },
  bo: {
    name: 'Tibetan',
    nativeName: 'བོད་ཡིག',
  },
  tk: {
    name: 'Turkmen',
    nativeName: 'Türkmen, Түркмен',
  },
  tl: {
    name: 'Tagalog',
    nativeName: 'Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔',
  },
  tn: {
    name: 'Tswana',
    nativeName: 'Setswana',
  },
  to: {
    name: 'Tonga',
    nativeName: 'faka Tonga',
  },
  tr: {
    name: 'Turkish',
    nativeName: 'Türkçe',
  },
  ts: {
    name: 'Tsonga',
    nativeName: 'Xitsonga',
  },
  tt: {
    name: 'Tatar',
    nativeName: 'татарча, tatarça, تاتارچا‎',
  },
  tw: {
    name: 'Twi',
    nativeName: 'Twi',
  },
  ty: {
    name: 'Tahitian',
    nativeName: 'Reo Tahiti',
  },
  ug: {
    name: 'Uighur',
    nativeName: 'Uyƣurqə, ئۇيغۇرچە‎',
  },
  uk: {
    name: 'Ukrainian',
    nativeName: 'українська',
  },
  ur: {
    name: 'Urdu',
    nativeName: 'اردو',
  },
  uz: {
    name: 'Uzbek',
    nativeName: 'zbek, Ўзбек, أۇزبېك‎',
  },
  ve: {
    name: 'Venda',
    nativeName: 'Tshivenḓa',
  },
  vi: {
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
  },
  vo: {
    name: 'Volapük',
    nativeName: 'Volapük',
  },
  wa: {
    name: 'Walloon',
    nativeName: 'Walon',
  },
  cy: {
    name: 'Welsh',
    nativeName: 'Cymraeg',
  },
  wo: {
    name: 'Wolof',
    nativeName: 'Wollof',
  },
  fy: {
    name: 'Western Frisian',
    nativeName: 'Frysk',
  },
  xh: {
    name: 'Xhosa',
    nativeName: 'isiXhosa',
  },
  yi: {
    name: 'Yiddish',
    nativeName: 'ייִדיש',
  },
  yo: {
    name: 'Yoruba',
    nativeName: 'Yorùbá',
  },
  za: {
    name: 'Zhuang',
    nativeName: 'Saɯ cueŋƅ, Saw cuengh',
  },
};

let FB_APP_ID = process.env.APP_ID;

let IMGUR_CLIENT_ID = process.env.IMGUR_CLIENT_ID;

let INSTA_CLIENT_ID = process.env.INSTA_CLIENT_ID;

let uplodValue;

let accessToken;

let creationId;

let publishId;

var today = Math.round(+new Date() / 1000);

let ts = new Date();

let instaId;

let igId;

var priorDate = Math.round(new Date().setDate(ts.getDate() - 30));

priorDate = Math.round(new Date(priorDate).getTime() / 1000);

let finalEvent;

let length;

if (localStorage.l !== undefined) {
  l = JSON.parse(localStorage.l);

  j = JSON.parse(localStorage.l);
}

document.addEventListener('DOMContentLoaded', function () {
  defineLocalStorage();

  if (localStorage.code.length == 0) {
    document.querySelector('.instaLogin').style.display = 'none';
    document.querySelector('#fb-btn').style.display = 'block';
  } else if (
    localStorage.code !== 'undefined' &&
    localStorage.code.length > 2
  ) {
    document.querySelector('.instaLogin').style.display = 'none';
    document.querySelector('#fb-btn').style.display = 'block';

    if (localStorage.getItem('code') == 'access_denied') {
      document.querySelector('.instaLogin').style.display = 'block';
      document.querySelector('#fb-btn').style.display = 'none';

      alert(
        'Please allow acces to Instagram to succesfully use all the features'
      );
    }
  } else if (localStorage.code == 'undefined' && localStorage.code == null) {
    url = window.location.href;

    let extracted = url.slice(url.indexOf('=')).slice(1);

    extracted = extracted.slice(0, -2);

    localStorage.code = extracted;
    document.querySelector('.navigation').style.display = 'none';
  }

  var calendarEl = document.getElementById('calendar');

  let calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    initialView: 'dayGridMonth',
    selectable: true,
    headerToolbar: {
      right: 'today',
      left: 'prev,next',
      center: 'title',
    },
    editable: true,
    events: arr,

    eventClick: function (info) {
      info.jsEvent.preventDefault(); // don't let the browser navigate

      if (confirm('Are you sure you want to delete this! ')) {
        let eventId = info.event.id;

        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id == eventId) {
            // arr.splice(i, 1);

            localStorage.removeItem(`session ${eventId}`);

            // localStorage.removeItem(`Post on ${eventId}`);

            calendar.getEventById(info.event.id).remove(); // Save it!
          }

          for (let j = 0; j <= postTimeArr.length; j++) {
            if (arr[i].postOn == postTimeArr[j]) {
              // arr.splice(i, 1);

              localStorage.removeItem(`Post on ${+eventId + +1}`);
            }
          }
        }
      } else {
        // Do nothing!

        if (info.event.url) {
          window.open(info.event.url);
        }
      }
    },

    dateClick: function click(info) {
      endDate = info.dateStr;

      let initial = endDate.split('-');
      var mydate = new Date(initial[0], initial[1] - 1, initial[2]);
      let displayDate = mydate.toDateString();

      localStorage.enddate = info.dateStr;

      setTimeout(cal, 2000);

      function cal() {
        if (today <= endDate && imgUrl.length == 1 && check.length == 1) {
          openForm();
          setTimeout(eventAdd, 5000);
        } else if (today > endDate) {
          alert('Please select a date that is in the future!');
        } else {
          return;
        }
      }

      function eventAdd() {
        if (imgUrl.length > 1 && today <= endDate && check.length > 1) {
          localStorage.l = JSON.parse(l);

          calendar.addEvent({
            title: `Post on  ${displayDate} on ${timeValue}`,
            url: `${imgUrl}`,
            start: `${today}`,
            end: `${endDate}`,
            id: `${l}`,
          });

          fakearr.push({
            title: `Post on ${displayDate}`,
            url: `${imgUrl}`,
            start: `${today}`,
            end: `${endDate}`,
            id: `${l}`,
            postOn: `${date3}`,
            comment: `${commentEncode}`,
            caption: `${captionEncoded}`,
          });

          l = l + 1;

          localStorage.l = JSON.parse(l);

          imgUrl = ' ';

          check = ' ';

          newEvent();
        } else {
          setTimeout(eventAdd, 2000);
        }
      }

      function newEvent() {
        localStorage.arrlength = fakearr.length;

        if (fakearr.length > 0) {
          for (let i = 0; i < fakearr.length; i++) {
            if (localStorage.getItem(`session ${maxSessionID()}`) == null) {
              localStorage.setItem(
                `session ${maxSessionID()}`,
                JSON.stringify(fakearr[i])
              );
              localStorage.setItem(
                `Post on ${maxSessionID()}`,
                JSON.stringify(`${date3}`)
              );

              fakearr.splice(i, 1);

              defineLocalStorage();
            }
          }
        }
      }

      function maxSessionID() {
        localStorage.j = JSON.parse(l);

        while (localStorage.getItem(`session ${j}`) !== null) {
          j = j + 1;
        }

        localStorage.j = JSON.parse(j);

        return j;
      }

      var today = new Date();

      let now = Date.now();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;

      date1 = new Date();
      date2 = new Date(`${endDate}`);
    },
  });

  calendar.render();
});

function statusChangeCallback(response) {
  if (response.status === 'connected') {
    instaInfo();

    setElements(true);
  } else {
    setElements(false);
  }
}

window.fbAsyncInit = function () {
  FB.init({
    appId: `${FB_APP_ID}`,
    cookie: true, // Enable cookies to allow the server to access the session.
    xfbml: true, // Parse social plugins on this webpage.
    version: 'v13.0', // Use this Graph API version for this call.
  });

  FB.getLoginStatus(function (response) {
    // Called after the JS SDK has been initialized.
    statusChangeCallback(response); // Returns the login status.
  });
};

function checkLoginState() {
  // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function (response) {
    // See the onlogin handler
    statusChangeCallback(response);
  });
}

document.querySelector('#fb-btn').addEventListener('click', function () {
  FB.login(function (response) {
    if (response.status === 'connected') {
      instaInfo();

      setElements(true);
    } else {
      setElements(false);
    }
  });
});

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk.js';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

function setElements(isLoggedIn) {
  if (isLoggedIn) {
    document.querySelector('#fb-btn').style.display = 'none';
    document.querySelector('.logout').style.display = 'block';
    document.querySelector('.navigation').style.display = 'block';
    document.querySelector('#container').style.display = 'block';
    document.querySelector('#calendar').style.display = 'block';
    document.querySelector('.instaLogin').style.display = 'none';
  } else {
    document.querySelector('.logout').style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
    document.querySelector('#container').style.display = 'none';
    document.querySelector('#calendar').style.display = 'none';
  }
}

document.querySelector('.logout').addEventListener('click', () => {
  FB.logout(function () {
    setElements(false);
    document.querySelector('.avatar').src = ' ';

    deleteCookie(`fblo_${FB_APP_ID}`);
  });
});

function deleteCookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

instaloginbutton.addEventListener('click', () => {
  window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${INSTA_CLIENT_ID}&redirect_uri=https://www.schd-x.com/&scope=user_profile,user_media&response_type=code`;

  checkAuth();
});

function checkAuth() {
  url = window.location.href;

  let extracted = url.slice(url.indexOf('=')).slice(1);

  extracted = extracted.slice(0, -2);

  localStorage.code = extracted;

  if (localStorage.code !== 'undefined' && localStorage.code.length > 2) {
    document.querySelector('.instaLogin').style.display = 'none';
    document.querySelector('#fb-btn').style.display = 'block';
  }
}

function instaInfo() {
  FB.api('/me/accounts', 'GET', {}, function (response) {
    accessToken = `${response.data[0].access_token}`;

    localStorage.accessToken = accessToken;

    let pageId = `${response.data[0].id}`;

    FB.api(
      `/${pageId}`,
      'GET',
      { fields: 'connected_instagram_account' },
      function (response) {
        // Insert your code here

        instaId = `${response.id}`;

        FB.api(
          `${instaId}`,
          'GET',
          {
            fields:
              'biography,followers_count,id,profile_picture_url,username,name',
          },
          function (response) {
            // Insert your code here

            if (response.profile_picture_url !== ' ') {
              localStorage.profileImg = response.profile_picture_url;
            }

            document.querySelector('.avatar').src = localStorage.profileImg;

            document.querySelector(
              '.flw-heading'
            ).innerHTML = `${response.followers_count}`;

            axios
              .get(
                `https://graph.facebook.com/v11.0/${instaId}/insights?metric=impressions,reach&period=days_28&since=${priorDate}&until=${today}&access_token=${accessToken}`
              )
              .then((res) => {
                let impressions = res.data.data[0].values[0];

                let finalImpressions = Object.entries(impressions);

                let reach = res.data.data[1].values[0];

                let finalReach = Object.entries(reach);

                document.querySelector(
                  '.impression-heading'
                ).innerHTML = `${finalImpressions[0][1]}`;

                document.querySelector(
                  '.reach-heading'
                ).innerHTML = `${finalReach[0][1]}`;
              });

            axios
              .get(
                `https://graph.facebook.com/v11.0/${instaId}/insights?metric=profile_views,email_contacts,follower_count,phone_call_clicks,text_message_clicks,website_clicks&period=day&since=${priorDate}&until=${today}&access_token=${accessToken}`
              )
              .then((res) => {
                let profileViews = res.data.data[0].values;

                let finalProfileViews = Object.entries(profileViews);

                let profileArr = 0;

                for (let i = 0; i < finalProfileViews.length; i++) {
                  profileArr += finalProfileViews[i][1].value;
                }

                document.querySelector(
                  '.profile-heading'
                ).innerHTML = `${profileArr}`;

                let email = res.data.data[1].values;

                let finalEmail = Object.entries(email);

                let emailArr = 0;

                for (let i = 0; i < finalEmail.length; i++) {
                  emailArr += finalEmail[i][1].value;
                }

                document.querySelector(
                  '.email-heading'
                ).innerHTML = `${emailArr}`;

                let growth = res.data.data[2].values;

                let finalGrowth = Object.entries(growth);

                let growthArrValue = [];

                let growthArrDate = [];

                let arrDate = [];

                let date;

                let finalDate = [];

                const dateTimeFormat = new Intl.DateTimeFormat('en', {
                  month: 'long',
                  day: 'numeric',
                });

                for (let i = 0; i < finalGrowth.length; i++) {
                  growthArrValue.push(finalGrowth[i][1].value);

                  growthArrDate.push(finalGrowth[i][1].end_time);

                  arrDate.push(growthArrDate[i].substr(0, 10));

                  date = new Date(arrDate[i]);

                  finalDate.push(dateTimeFormat.format(date));
                }

                let growthChart = {
                  debug: true,
                  type: 'line',
                  title_label_text: 'Growth',
                  legend_position: 'inside bottom right',
                  defaultPoint_tooltip: '%value, %name',
                  xAxis: {},
                  series: [
                    {
                      name: 'Follows',
                      points: [
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                        ['', 1],
                      ],
                    },
                  ],
                };

                for (let j = 0; j < arrDate.length; j++) {
                  growthChart.series[0].points[j][0] = finalDate[j];

                  growthChart.series[0].points[j][1] = growthArrValue[j];

                  setLine();
                }

                function setLine() {
                  var chart1 = JSC.chart('growthDiv', growthChart);
                }

                let phoneCallClicks = res.data.data[3].values;

                let finalPhoneCallClicks = Object.entries(phoneCallClicks);

                let phoneArr = 0;

                for (let i = 0; i < finalPhoneCallClicks.length; i++) {
                  phoneArr += finalPhoneCallClicks[i][1].value;
                }

                document.querySelector(
                  '.phone-heading'
                ).innerHTML = `${phoneArr}`;

                let textMsgClick = res.data.data[4].values;

                let finalTextMsgClick = Object.entries(textMsgClick);

                let textArr = 0;

                for (let i = 0; i < finalTextMsgClick.length; i++) {
                  textArr += finalTextMsgClick[i][1].value;
                }

                document.querySelector('.msg-heading').innerHTML = `${textArr}`;

                let websiteClicks = res.data.data[4].values;

                let finalWebsiteClicks = Object.entries(websiteClicks);

                let websiteArr = 0;

                for (let i = 0; i < finalWebsiteClicks.length; i++) {
                  websiteArr += finalWebsiteClicks[i][1].value;
                }

                document.querySelector(
                  '.website-heading'
                ).innerHTML = `${websiteArr}`;
              });

            axios
              .get(
                `https://graph.facebook.com/v11.0/${instaId}/insights?metric=audience_city,audience_country,audience_gender_age,audience_locale,online_followers&period=lifetime&access_token=${accessToken}`
              )
              .then((res) => {
                let genderAge = res.data.data[2].values[0].value;

                let finalGenderAge = Object.entries(genderAge);

                let audienceCity = res.data.data[0].values[0].value;

                let finalAudienceCity = Object.entries(audienceCity);

                let audienceCountry = res.data.data[1].values[0].value;

                let finalAudienceCountry = Object.entries(audienceCountry);

                let audienceLanguage = res.data.data[3].values[0].value;

                let finalAudienceLanguage = Object.entries(audienceLanguage);

                JSC.chart('cityChartDiv', {
                  debug: true,
                  title_position: 'center',
                  legend: {
                    position: 'inside left bottom',
                    template: '%value {%percentOfTotal:n1}% %icon %name',
                  },
                  defaultSeries_type: 'pie donut',
                  defaultPoint: {
                    label_text: '<b>%name</b> ',
                    outline: { color: 'white', width: 3 },
                  },
                  title_label_text: 'Most audience',
                  annotations: [
                    {
                      label_text: '<b>Females</b>',
                      position: 'inside top left',
                      margin_left: 280,
                    },
                    {
                      label_text: '<b>Males</b>',
                      position: 'inside top right',
                      margin_right: 230,
                    },
                  ],
                  yAxis: { label_text: 'No.of Audience', formatString: 'n' },
                  series: [
                    {
                      name: 'Females',
                      points: [
                        {
                          name: finalGenderAge[0][0].split('.')[1],
                          y: finalGenderAge[0][1],
                        },
                        {
                          name: finalGenderAge[1][0].split('.')[1],
                          y: finalGenderAge[1][1],
                        },
                        {
                          name: finalGenderAge[2][0].split('.')[1],
                          y: finalGenderAge[2][1],
                        },
                        {
                          name: finalGenderAge[3][0].split('.')[1],
                          y: finalGenderAge[3][1],
                        },
                      ],
                    },
                    {
                      name: 'Males',
                      points: [
                        {
                          x: finalGenderAge[4][0].split('.')[1],
                          y: finalGenderAge[4][1],
                        },
                        {
                          x: finalGenderAge[5][0].split('.')[1],
                          y: finalGenderAge[5][1],
                        },
                        {
                          x: finalGenderAge[6][0].split('.')[1],
                          y: finalGenderAge[6][1],
                        },
                        {
                          x: finalGenderAge[7][0].split('.')[1],
                          y: finalGenderAge[7][1],
                        },
                      ],
                    },
                  ],
                });

                let mapAud = {
                  debug: true,
                  type: 'map',
                  legend_visible: true,
                  chartArea: {
                    outline_color: '#bbbbbb',
                    fill: 'white',
                  },
                  /* Disable zooming */
                  axisToZoom: 'false',
                  mapping: {
                    projection: false,
                  },
                  defaultPoint_tooltip: '%country',

                  series: [
                    {
                      map: 'world',
                      color: '#4176d1',
                    },
                    {
                      map: 'in',
                      color: '#4176d1',
                    },
                    {
                      map: ' ',
                      color: ' ',
                    },
                    {
                      map: ' ',
                      color: ' ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                    {
                      map: '  ',
                      color: '  ',
                    },
                  ],
                };

                for (let i = 0; i < finalAudienceCountry.length; i++) {
                  mapAud.series[i + 1].map = `${finalAudienceCountry[
                    i
                  ][0].toLocaleLowerCase()}`;

                  mapAud.series[i + 1].points = finalAudienceCountry[i][1];

                  mapAud.series[i + 1].color = '#32a852';

                  setMap();
                }

                function setMap() {
                  var chart = JSC.chart('mapDiv', mapAud);
                }

                let lang = {
                  type: 'horizontal column',
                  title_label: {
                    text: 'No.of language speakers in different countries',
                    style: {
                      fontFamily: 'Raleway',
                      color: 'black',
                      fontWeight: 900,
                      fontSize: 20,
                    },
                  },
                  legend_visible: true,

                  series: [
                    {
                      points: [
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                        { x: '' },
                      ],
                    },
                  ],
                };

                for (let i = 0; i < finalAudienceLanguage.length; i++) {
                  var getCountryNames = new Intl.DisplayNames(['en'], {
                    type: 'region',
                  });
                  let checkName = getCountryNames.of(
                    finalAudienceLanguage[i][0].split('_')[1]
                  );

                  let language = finalAudienceLanguage[i][0].split('_')[0];

                  language = langCode[`${language}`].name;

                  lang.series[0].points[
                    i
                  ].x = `No.of ${language} speakers in ${checkName} are`;

                  lang.series[0].points[i].y = finalAudienceLanguage[i][1];

                  setLocale();
                }

                function setLocale() {
                  let audienceLocale = JSC.chart('langDiv', lang);
                }
              });
          }
        );
      }
    );
  });
}

function autoPost(index) {
  var newHeaders = new Headers();
  newHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  var urlencoded = new URLSearchParams();
  urlencoded.append('image_url', `${arr[index].url}`);
  urlencoded.append('caption', `${arr[index].caption}`);
  urlencoded.append('access_token', `${accessToken}`);

  var requestOptions = {
    method: 'POST',
    headers: newHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  fetch(`https://graph.facebook.com/${instaId}/media`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      creationId = result.id;

      publish(index);
    })
    .catch((error) => {
      alert('Sorry There is some error please try again in some thime.');
    });
}

function publish(index) {
  var pubHeaders = new Headers();
  pubHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  var urlencoded = new URLSearchParams();
  urlencoded.append('creation_id', `${creationId}`);
  urlencoded.append('access_token', `${accessToken}`);

  var requestOptions = {
    method: 'POST',
    headers: pubHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  fetch(`https://graph.facebook.com/${instaId}/media_publish?`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      publishId = result.id;
      console.log(publishId);

      for (let j = 0; j <= localStorage.l; j++) {
        if (
          localStorage.getItem(`session ${j}`) !== 'undefined' &&
          localStorage.getItem(`session ${j}`) !== null
        ) {
          if (
            arr[index].postOn ==
            JSON.parse(localStorage.getItem(`session ${j}`)).postOn
          ) {
            localStorage.removeItem(`session ${j}`);
          }
        }
      }

      if (arr[index].comment.length > 0) {
        postComment(index);
      }
    })
    .catch(() => alert('Sorry theres something wrong please try again'));
}

function postComment(index) {
  var requestOptions = {
    method: 'POST',
    redirect: 'follow',
  };

  fetch(
    `https://graph.facebook.com/v13.0/${publishId}/comments?message=${arr[index].comment}&access_token=${accessToken}`,
    requestOptions
  )
    .then(() => {
      for (let j = 0; j <= localStorage.l; j++) {
        if (
          localStorage.getItem(`session ${j}`) !== 'undefined' &&
          localStorage.getItem(`session ${j}`) !== null
        ) {
          if (
            arr[index].postOn ==
            JSON.parse(localStorage.getItem(`session ${j}`)).postOn
          ) {
            localStorage.removeItem(`session ${j}`);
          }
        }
      }
    })
    .catch((error) => alert('Sorry theres something wrong please try again'));
}

save.addEventListener('click', () => {
  captionTxt = document.querySelector('#caption-box').value;

  captionEncoded = captionTxt;

  commentFirst = document.querySelector('.first-cmnt').value;

  commentEncode = encodeURIComponent(commentFirst);

  document.querySelector('#caption-box').value = '';

  document.getElementsByName('cap')[0].placeholder = 'Write caption here.... ';

  document.querySelector('.first-cmnt').value = '';

  document.getElementsByName('comment')[0].placeholder = 'Show First Comment ';

  thumbnailElement.style.backgroundImage = 'none';

  let thumb = document.querySelector('.drop-zone__thumb');

  thumb.remove();

  let element = document.createElement('span');

  element.innerHTML = 'Drop file here or click to upload';

  element.classList.add('drop-zone__prompt');

  document.querySelector('.drop-zone').appendChild(element);

  timeValue = document.querySelector('.time-pickable').value;

  let timearr = {
    '01': '13',
    '02': '14',
    '03': '15',
    '04': '16',
    '05': '17',
    '06': '18',
    '07': '19',
    '08': '20',
    '09': '21',
    10: '22',
    11: '23',
    12: '00',
  };

  let hour = timeValue.slice(0, 2);

  let minute = timeValue.slice(3, 5);

  let second = '00';

  let meridiem = timeValue.slice(6, 8);

  if (meridiem == 'pm') {
    hour = timearr[hour];
  }

  date2 = date2.toString().replace('05:30:00', `${hour}:${minute}:${second}`);

  date1 = new Date(`${date1}`);

  date3 = new Date(`${date2}`);

  seconds = date3 - date1;

  closeForm();

  check = 'saved';
});

discard.addEventListener('click', () => {
  closeForm();
});

function openForm() {
  document.getElementById('popupForm').style.display = 'block';
}
function closeForm() {
  document.getElementById('popupForm').style.display = 'none';
}

document.querySelectorAll('.drop-zone__input').forEach((inputElement) => {
  dropZoneElement = inputElement.closest('.drop-zone');

  dropZoneElement.addEventListener('click', (e) => {
    inputElement.click();
  });

  inputElement.addEventListener('change', async (e) => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Client-ID ${IMGUR_CLIENT_ID}`);

    if (srcWidth == undefined && srcHeight == undefined) {
      fakeImage = document.createElement('img');

      fakeImage.style.display = 'none';

      let files = e.target.files[0];

      fakeImage.src = await fileToDataUri(files);

      let fakeImageSrc = fakeImage.src;

      fakeImage.addEventListener('load', () => {
        crop(fakeImageSrc, 0.8);
      });
    }

    function fileToDataUri(field) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          resolve(reader.result);
        });

        if (field) {
          reader.readAsDataURL(field);
        }
      });
    }

    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZoneElement.classList.add('drop-zone--over');
  });

  ['dragleave', 'dragend'].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove('drop-zone--over');
    });
  });

  dropZoneElement.addEventListener('drop', (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove('drop-zone--over');
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  thumbnailElement = dropZoneElement.querySelector('.drop-zone__thumb');

  // First time - remove the prompt
  if (dropZoneElement.querySelector('.drop-zone__prompt')) {
    dropZoneElement.querySelector('.drop-zone__prompt').remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement('div');
    thumbnailElement.classList.add('drop-zone__thumb');
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
}

function showImg() {
  if (imgUrl.length > 0) {
    thumbnailElement.style.backgroundImage = `url('${imgUrl}')`;

    // imgUrl = ' ';
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}

function activate() {
  document.querySelectorAll('.time-pickable').forEach((timePickable) => {
    let activePicker = null;

    timePickable.addEventListener('focus', () => {
      if (activePicker) return;

      activePicker = show(timePickable);

      const onClickAway = ({ target }) => {
        if (
          target === activePicker ||
          target === timePickable ||
          activePicker.contains(target)
        ) {
          return;
        }

        document.removeEventListener('mousedown', onClickAway);
        document.body.removeChild(activePicker);
        activePicker = null;
      };

      document.addEventListener('mousedown', onClickAway);
    });
  });

  function show(timePickable) {
    const picker = buildPicker(timePickable);
    const { bottom: top, left } = timePickable.getBoundingClientRect();

    picker.style.top = '39em';
    picker.style.left = '54.5em';

    document.body.appendChild(picker);

    return picker;
  }

  function buildPicker(timePickable) {
    const hourOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(
      numberToOption
    );
    const minuteOptions = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
      39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
      57, 58, 59,
    ].map(numberToOption);

    let element = document.querySelector('.timePicker');

    if (!element) {
      const picker = document.createElement('div');

      document.querySelector('.time-display').append(picker);

      picker.classList.add('time-picker');

      picker.innerHTML = `
		<select class="time-picker__select">
			${hourOptions.join('')}
		</select>
		:
		<select class="time-picker__select">
			${minuteOptions.join('')}
		</select>
		<select class="time-picker__select">
			<option value="am">am</option>
			<option value="pm">pm</option>
		</select>
	`;

      const selects = getSelectsFromPicker(picker);

      selects.hour.addEventListener(
        'change',
        () => (timePickable.value = getTimeStringFromPicker(picker))
      );
      selects.minute.addEventListener(
        'change',
        () => (timePickable.value = getTimeStringFromPicker(picker))
      );
      selects.meridiem.addEventListener(
        'change',
        () => (timePickable.value = getTimeStringFromPicker(picker))
      );

      if (timePickable.value) {
        const { hour, minute, meridiem } =
          getTimePartsFromPickable(timePickable);

        selects.hour.value = hour;
        selects.minute.value = minute;
        selects.meridiem.value = meridiem;
      }

      return picker;
    }
  }

  function getTimePartsFromPickable(timePickable) {
    const pattern = /^(\d+):(\d+) (am|pm)$/;
    const [hour, minute, meridiem] = Array.from(
      timePickable.value.match(pattern)
    ).splice(1);

    return {
      hour,
      minute,
      meridiem,
    };
  }

  function getSelectsFromPicker(timePicker) {
    const [hour, minute, meridiem] = timePicker.querySelectorAll(
      '.time-picker__select'
    );

    return {
      hour,
      minute,
      meridiem,
    };
  }

  function getTimeStringFromPicker(timePicker) {
    const selects = getSelectsFromPicker(timePicker);

    return `${selects.hour.value}:${selects.minute.value} ${selects.meridiem.value}`;
  }

  function numberToOption(number) {
    const padded = number.toString().padStart(2, '0');

    return `<option value="${padded}">${padded}</option>`;
  }
}

activate();

function postOnTime() {
  let todayDate = new Date();

  todayDate = todayDate.toString();

  String.prototype.replaceAt = function (index, replacement) {
    return (
      this.substring(0, index) +
      replacement +
      this.substring(index + replacement.length)
    );
  };

  todayDate = todayDate.replaceAt(22, '00');

  for (let i = 0; i < postTimeArr.length; i++) {
    if (todayDate == postTimeArr[i]) {
      let index = arr.findIndex((p) => p.postOn == `${todayDate}`);

      autoPost(index);
    }
  }

  return;
}

setInterval(postOnTime, 60000);

function defineLocalStorage() {
  for (let i = 0; i <= localStorage.l; i++) {
    if (localStorage.getItem(`session ${i}`) == 'undefined') {
      localStorage.removeItem(`session ${i}`);
    } else if (
      localStorage.getItem(`session ${i}`) ==
      localStorage.getItem(`session ${i - 1}`)
    ) {
      localStorage.removeItem(`session ${i}`);
    }
  }

  if (localStorage.arrlength >= 0) {
    for (let i = 0; i <= localStorage.l; i++) {
      if (
        localStorage.getItem(`session ${i}`) !== 'undefined' &&
        localStorage.getItem(`session ${i}`) !== null
      ) {
        if (arr[i] !== JSON.parse(localStorage.getItem(`session ${i}`))) {
          arr.push(JSON.parse(localStorage.getItem(`session ${i}`)));
        }
      }

      if (
        localStorage.getItem(`Post on ${i}`) !== 'undefined' &&
        localStorage.getItem(`Post on ${i}`) !== null
      ) {
        postTimeArr.push(JSON.parse(localStorage.getItem(`Post on ${i}`)));
      }
    }
  }
}

function crop(url, aspectRatio) {
  // we return a Promise that gets resolved with our canvas element
  return new Promise((resolve) => {
    // this image will hold our source image data
    const inputImage = new Image();

    // we want to wait for our image to load
    inputImage.onload = () => {
      // let's store the width and height of our image
      const inputWidth = inputImage.naturalWidth;
      const inputHeight = inputImage.naturalHeight;

      // get the aspect ratio of the input image
      const inputImageAspectRatio = inputWidth / inputHeight;

      // if it's bigger than our target aspect ratio
      let outputWidth = inputWidth;
      let outputHeight = inputHeight;

      if (
        inputImageAspectRatio >= aspectRatio &&
        inputImageAspectRatio <= 1.77
      ) {
        return;
      } else if (inputImageAspectRatio > aspectRatio) {
        outputWidth = inputHeight * aspectRatio;
      } else if (inputImageAspectRatio < aspectRatio) {
        outputHeight = inputWidth / aspectRatio;
      }

      // calculate the position to draw the image at
      const outputX = (outputWidth - inputWidth) * 0.5;
      const outputY = (outputHeight - inputHeight) * 0.1;

      // create a canvas that will present the output image
      const outputImage = document.createElement('canvas');

      // set it to the same size as the image
      outputImage.width = outputWidth;
      outputImage.height = outputHeight;

      // draw our image at position 0, 0 on the canvas
      const ctx = outputImage.getContext('2d');
      ctx.drawImage(inputImage, outputX, outputY);
      resolve(outputImage);

      outputImage.toBlob(
        (blob) => {
          if (blob) {
            compressedImageBlob = blob;
          }
        },
        'image/jpeg',
        quality
      );

      setTimeout(setAspectRatio, 3000);
    };

    inputImage.src = url;
  });
}

function setAspectRatio() {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Client-ID ${IMGUR_CLIENT_ID}`);

  var formdata = new FormData();
  formdata.append('image', compressedImageBlob);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  fetch('https://api.imgur.com/3/image', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      srcWidth = result.data.width;

      srcHeight = result.data.height;
      let totalsize = result.data.size;

      let imageType = result.data.type;

      let totalSizeMB = totalsize / Math.pow(1024, 2);

      if (imageType == 'image/jpeg' && totalSizeMB <= 8.0) {
        imgUrl = result.data.link;

        localStorage.imgurl = result.data.link;

        setTimeout(showImg, 3000);
      } else if (imageType !== 'image/jpeg' || totalSizeMB > 8.0) {
        alert('Please select a Image in JPEG format and below 8 MB');
      }

      if (imgUrl == undefined) {
        alert('Something is wrong refresh the page and try again.');

        imgUrl = ' ';
      }
    })
    .catch(() => {
      alert('Something is wrong refresh the page and try again.');

      imgUrl = ' ';
    });
}

function myFunction() {
  var x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}
