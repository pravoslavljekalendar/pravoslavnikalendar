const CACHE_NAME ='pravoslavna-riznica-final-v68';
const OFFLINE_ASSETS = [
  './',
  './index.html',
  './psaltir.html',
  './molitvenik.html',
  './novi-zavet.html',
  './ohridski-prolog.html',
  './duhovne-pouke.html',
  './duhovne-poucne-price.html',
  './praznici.html',
  './post-i-trapave-sedmice.html',
  './vaskrsnji-kalendar.html',

  
  './akatist-presvetoj-bogorodici.html',
  './akatist-svetom-nektariju-eginskom.html',
  './akatist-svetoj-kseniji-petrogradskoj.html',

 
  './jednom-za-ceo-zivot.html',
  './sedam-znakova-novog-rodjenja.html',
  './boziji-promisao.html',
  './januar-2026.html',
  './februar-2026.html',
  './mart-2026.html',
  './april-2026.html',
  './maj-2026.html',
  './jun-2026.html',
  './jul-2026.html',
  './avgust-2026.html',
  './septembar-2026.html',
  './oktobar-2026.html',
  './novembar-2026.html',
  './decembar-2026.html',
  './prolog-januar.html',
  './prolog-februar.html',
  './prolog-mart.html',
  './prolog-april.html',
  './prolog-maj.html',
  './prolog-jun.html',
  './prolog-jul.html',
  './prolog-avgust.html',
  './prolog-septembar.html',
  './prolog-oktobar.html',
  './prolog-novembar.html',
  './prolog-decembar.html',
  './zitije-bozic.html',
  './zitije-arandjelovdan.html',
  './zitije-blagovesti.html',
  './zitije-bogojavljenje.html',
  './zitije-cveti.html',
  './zitije-djurdjevdan.html',
  './zitije-duhovski-ponedeljak.html',
  './zitije-duhovski-utorak.html',
  './zitije-ivanjdan.html',
  './zitije-jovankrstitelj.html',
  './zitije-kirilo-metodije.html',
  './zitije-konstantin-jelena.html',
  './zitije-vidovdan.html',
  './zitije-krstovdan.html',
  './zitije-mala-gospojina.html',
  './zitije-mitrovdan.html',
  './zitije-nikoljdan.html',
  './zitije-petar-cetinjski.html',
  './zitije-petrovdan.html',
  './zitije-preobrazenje.html',
  './zitije-prorok-ilija.html',
  './zitije-sabor.html',
  './zitije-silazak-duha-svetoga.html',
  './zitije-sretenje-gospodnje.html',
  './zitije-sv-sava.html',
  './zitije-sveta-petka.html',
  './zitije-sveta-tri-jerarha.html',
  './zitije-sveti-prvomucenik-stefan.html',
  './zitije-sveti-vasilije-veliki.html',
  './zitije-usekovanje.html',
  './zitije-uspenije.html',
  './zitije-vasilije-ostroski.html',
  './zitije-vaskrs.html',
  './zitije-vaskrsni-ponedeljak.html',
  './zitije-vaskrsni-utorak.html',
  './zitije-vavedenje.html',
  './zitije-vaznesenje.html',
  './zitije-veliki-petak.html',

   './ikone-danas/jun19-1.jpg',
  './ikone-danas/jun19-2.jpg',
  
  './screen1.png',
  './screen2.png',
  './screen3.png',
  './screen4.png',
  './screen5.png',
  './screen6.png',
  './screen7.png',
  './vidovdan.jpg',
  './veliki-petak.jpg',
  './vaznesenje.jpg',
  './vavedenje.jpg',
  './vaskrsni-utorak.jpg',
  './vaskrsni-ponedeljak.jpg',
  './vaskrs.jpg',
  './vasilije-ostroski.jpg',
  './uspenije.jpg',
  './usekovanje.jpg',
  './trojerucica.png',
  './tisina-snaga.png',
  './sveti-vasilije-veliki.jpg',
  './sveti-prvomucenik-stefan.jpg',
  './sveta-tri-jerarha.jpg',
  './sveta-petka.jpg',
  './sve-primi-mirno.png',
  './sv-sava.jpg',
  './stiker-bog.png',
  './svako-dobro.png',
  './sretenje-gospodnje.jpg',
  './snaga.png',
  './silazak-duha-svetoga.jpg',
  './serafimi.png',
  './sabor.jpg',
  './prorok-ilija.jpg',
  './pricest.png',
  './preobrazenje.jpg',
  './prastaj-i-ljubi.png',
  './pokajnik.png',
  './petrovdan.jpg',
  './petar-cetinjski.jpg',
  './papir.png',
  './papir.jpg',
  './oprostaj.png',
  './nikoljdan.jpg',
  './nikolaj.jpg',
  './mojstiker.png',
  './mitrovdan.jpg',
  './mala-gospojina.jpg',
  './ljubi-i-prastaj.png',
  './krstovdan.jpg',
  './krst.png',
 './krst-ornament-veliki.png',
  './konstantin-jelena.jpg',
  './kirilo-metodije.jpg',
  './justin.jpg',
  './jovankrstitelj.jpg',
  './ivanjdan.jpg',
  './isceliteljka.png',
  './ikona.png',
  './hram.png',
  './gospode-oprosti-i-osvetli-mi-put.png',
  './duhovski-utorak.jpg',
  './duhovski-ponedeljak.jpg',
  './djurdjevdan.jpg',
  './cveti.jpg',
  './bozija-volja.png',
  './bozic.jpg',
  './bogorodica.png',
  './bogorodica-pehar.png',
  './bogorodica-hrist.png',
  './bogojavljenje.jpg',
  './bog-cuti.png',
  './blagovesti.jpg',
  './arandjelovdan.jpg',
  './andjeo.png',
  './jovan-1.html', './jovan-2.html', './jovan-3.html', './jovan-4.html', './jovan-5.html',
  './jovan-6.html', './jovan-7.html', './jovan-8.html', './jovan-9.html', './jovan-10.html',
  './jovan-11.html', './jovan-12.html', './jovan-13.html', './jovan-14.html', './jovan-15.html',
  './jovan-16.html', './jovan-17.html', './jovan-18.html', './jovan-19.html', './jovan-20.html',
  './jovan-21.html',
  './matej-1.html', './matej-2.html', './matej-3.html', './matej-4.html', './matej-5.html',
  './matej-6.html', './matej-7.html', './matej-8.html', './matej-9.html', './matej-10.html',
  './matej-11.html', './matej-12.html', './matej-13.html', './matej-14.html', './matej-15.html',
  './matej-16.html', './matej-17.html', './matej-18.html', './matej-19.html', './matej-20.html',
  './matej-21.html', './matej-22.html', './matej-23.html', './matej-24.html', './matej-25.html',
  './matej-26.html', './matej-27.html', './matej-28.html',
  './marko-1.html', './marko-2.html', './marko-3.html', './marko-4.html', './marko-5.html',
  './marko-6.html', './marko-7.html', './marko-8.html', './marko-9.html', './marko-10.html',
  './marko-11.html', './marko-12.html', './marko-13.html', './marko-14.html', './marko-15.html', 
  './marko-16.html',
  './luka-1.html', './luka-2.html', './luka-3.html', './luka-4.html', './luka-5.html',
  './luka-6.html', './luka-7.html', './luka-8.html', './luka-9.html', './luka-10.html',
  './luka-11.html', './luka-12.html', './luka-13.html', './luka-14.html', './luka-15.html',
  './luka-16.html', './luka-17.html', './luka-18.html', './luka-19.html', './luka-20.html',
  './luka-21.html', './luka-22.html', './luka-23.html', './luka-24.html',
  './o-molitvi-sv-jovan-krostantski.html',
  './jutarnje-molitve.html',
  './molitveno-pravilo-serafima-sarovskog.html',
  './bogorodice-djevo.html',
  './simbol-vere.html',
  './molitva-za-decu.html',
  './molitva-za-roditelje.html',
  './molitva-za-otvorenje-uma.html',
  './molitva-svetog-filareta.html',
  './velikoposna-molitva-svetog-jefrema-sirina.html',
  './molitva-pokajnika.html',
  './molitve-andjelu-cuvaru.html',
  './molitva-isusu-hristu.html',
  './molitve-svetim-arhangelima-za-svaki-dan-u-nedelji.html',
  './molitve-presvetoj-bogorodici-za-svaki-dan-u-nedelji.html',
  './molitva-za-spasenje-od-rasejanosti-uma.html',
  './molitva-bogorodici.html',
  './molitva-u-tuzi-dusevnoj.html',
  './molitva-za-upokojene.html',
  './molitva-za-upokojene-prestavljenih.html',
  './molitva-za-zastitu-od-necistih-sila.html',
  './pokajna-molitva.html',
  './molitva-za-oprostaj-greha.html',
  './molitva-presvetoj-bogorodici-brzopomocnici.html',
  './molitve-za-svetu-tajnu-braku.html',
  './molitva-presvetoj-bogorodici-u-nevolji-i-potistenosti.html',
  './molitve-svetom-vasiliju-ostroskom.html',
  './molitva-protiv-hulnih-pomisli.html',
  './zahvalna-molitva.html',
  './molitva-za-umnozenje-ljubavi.html',
  './molitva-za-one-koji-putuju.html',
  './molitva-svetom-naumu-ohridskom-cudotvorcu.html',
  './molitva-za-bolesnika.html',
  './molitva-pred-ispovest.html',
  './podsetnik-za-ispovest.html',
  './molitva-pred-sveto-pricesce.html',
  './molitva-posle-svetog-pricesca.html',
  './molitve-pre-i-posle-ucenja.html',
  './molitve-pre-spavanja.html',
  './molitva-pre-uzimanja-nafore-i-svete-vode.html',
  './hrabrost-za-molitvu.html',
  './ucenje-starca-vasilija-o-isusovoj-molitvi.html',
  './manifest.json',
  './svetitelji.json'
];

// 1. INSTALL (safe preload)
self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of OFFLINE_ASSETS) {
        try {
          await cache.add(url);
        } catch (e) {
          console.log('Preskačem:', url);
        }
      }
    })
  );
});

// 2. ACTIVATE (clean old caches)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null))
      )
    )
  );

  self.clients.claim();
});

// 3. FETCH (STABLE iOS SAFE VERSION)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    (async () => {
      try {
        // 1. CACHE FIRST
        const cached = await caches.match(event.request);
        if (cached) return cached;

        // 2. NETWORK
        const response = await fetch(event.request);

        // 3. SAVE TO CACHE
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, response.clone());

        return response;

      } catch (err) {

        // 4. NAVIGATION FALLBACK (ključ za Safari)
        if (event.request.mode === 'navigate') {
          const fallback = await caches.match('./index.html');
          return fallback || new Response('Offline', { status: 200 });
        }

        // 5. safe fallback (NE NULL!)
        return new Response('', { status: 200 });
      }
    })()
  );
});
