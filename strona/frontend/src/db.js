import mainGb from './images/results/gb/mainGB.jpg';
import mainIzrael from './images/results/izrael/mainIzrael.jpg';
import mainFrance from './images/results/france/mainFrance.jpg';
import mainFinland from './images/results/finland/mainFinland.jpg';
import mainSweden from './images/results/sweden/mainSweden.jpg';
import mainDenmark from './images/results/denmark/mainDenmark.jpg'
import mainGreece from './images/results/greece/mainGreece.jpg';
import mainTurkey from './images/results/turkey/mainTurkey.jpg';
import mainItaly from './images/results/italy/mainItaly.jpg';


export const db = [
  {
    country: 'Wielka Brytania',
    dateFrom: '15.07.2023',
    dateTo: '20.07.2023',
    food: '2 posiłki',
    tripType: 'Zwiedzanie',
    price: 3500,
    mainImage: mainGb,
    
    details: [
      'Rodzaj wypoczynku: Zwiedzanie Londynu ',
      "Zakwaterowanie: Hotel 5* 'ME London by Melia'",
      'Wyżywienie: 2 posiłki - śniadnaie w formie bufetu i obiadokolacja ',
      'Transport: przelot z wybranego lotniska w Polsce na lotnisko London City, a następnie przejazd autokarem do hotelu',
      'Udogodnienia: opieka pilota, ubezpieczenie KL i NW, bilety wstępu, lokalni przewodnicy, tour guide, bilety komunikacji miejskie',
    ],
    days: [
      {
        day: 1,
        description:
          'Przelot z Polski do Wielkiej Brytanii, zakwaterowanie w hotelu, obiadokolacja, spacer po jednej z popularniejszych dzielnic Londynu, zakończony w dzielnicy Soho, charakteryzującej się barwnymi iluminacjami',
        attractions: ['Big Ben', 'Westminster Abbey', 'Plac Westminsterski', 'Piccadily Circus', 'Trafalgar Square', 'Regent Street'],
        dayImage: '',
      },
      {
        day: 2,
        description:
          'Po śniadaniu całodzienne zwiedzanie Londynu. W progranie zawarty rejs po Tamizie i tradycyjna popołudniowa herbata w Burlington House',
        attractions: [
          'Tower Bridge',
          'dzielnica City of London',
          'Tate Modern',
          'Katedra św. Pawła',
          'Convent Garden Market',
          'Pałac Buckingham',
          'Park St. James',
        ],
        dayImage: '',
      },
      {
        day: 3,
        description: 'Po śniadaniiu zapoznanie się z historią miasta w najpopularniejszych muzeach. Zakończenie dnia na ulicy China Town ',
        attractions: ['Muzeum Historii Naturalnej', 'Muzeum Wiktorii i Alberta', 'British Muzeum', 'Borough Market', 'Global Theatre'],
        dayImage: '',
      },
      {
        day: 4,
        description: '',
        attractions: ['London Eye', "Dworzec Kolejowy King's Cross", 'Cecil Court', "Neal's Yard"],
        dayImage: '',
      },
      {
        day: 5,
        description: 'Po śniadaniu wymeldowanie z hotelu, przejazd przez dzielnicę Nothing Hill i zakupy w Landenhall Market',
        attractions: ['Muzeum figur woskowych Madame Tussauds'],
        dayImage: '',
      },
    ],
    inPrice: ['Przelot', 'Bagaże', 'Transfer lotniskowy', 'Zakwaterowanie', 'Bilety wstępu', 'Transfer do atrakcji', 'Wyżywienie'],
  },

  {
    country: 'Izrael',
    dateFrom: '04.12.2023',
    dateTo: '08.12.2023',
    food: 'Bez wyżywienia',
    tripType: 'Zwiedzanie',
    price: 4000,
    mainImage: mainIzrael,
    details: [
      'Rodzaj wypoczynku: Aktywny z dużą ilością zwiedzenia ',
      "Zakwaterowanie: Pierwsza noc w Jerozolimie w hotelu 'Capsulein By Indiginn', Druga noc w Neve Zohar 'Ein Gedi Rooms', trzecia noc w Tel Awiwie w hotelu 'Gia Dormitory'",
      'Wyżywienie: We własnym zakresie',
      'Transport: przelot z Poznania/Krakowa na lotnisko w Tel Awiwie, a następnie transfer busem do Jerozolimy',
      'Udogodnienia: opieka pilota, ubezpieczenie KL i NW, bilety wstępu, lokalni przewodnicy, tour guide, bilety komunikacji miejskie',
    ],
    days: [
      {
        day: 1,
        description: 'Przelot do Izraela, transfer do Jerozolimy i zwiedzanie starego miasta.',
        attractions: [
          'Jaffa Gate',
          'Tower of Dawid',
          'Synagoga Hurva',
          'Ściana Płaczu',
          'Meczet Al Aksa',
          'Bazylika Grobu Świętego',
          'Via Dolorosa',
          'Meahane Yehuda Market',
        ],
        dayImage: '',
      },
      {
        day: 2,
        description:
          'Wejście o wschodzie słońca na Twierdzę Masada na pustyni, przejazd do Parku Narodowego i zakończenie dnia kąpielą w Morzu Martwym',
        attractions: ['Twierdza Masada', 'Park Narodowy Ein Gedi'],
        dayImage: '',
      },
      {
        day: 3,
        description: 'Przejazd do Jerozolimy, zwiedzanie muzeum historii Żydowskiej i powrót do Tel Awiwu',
        attractions: ['Jad Waszem', 'Góra Oliwna'],
        dayImage: '',
      },
      {
        day: 4,
        description: 'Spacer wzdłuż morza historyczną dzielnicą Tel Awiwu, transfer na lotnisko i powrót do Polski.',
        attractions: ['Old Jaffa'],
        dayImage: '',
      },
    ],
    inPrice: ['Przelot', 'Bagaże', 'Transfer lotniskowy', 'Zakwaterowanie', 'Bilety wstępu', 'Transfer do atrakcji'],
  },

  {
    country: 'Francja',
    dateFrom: '01.06.2023',
    dateTo: '05.06.2023',
    food: '2 posiłki',
    tripType: 'Zwiedzanie',
    price: 5500,
    mainImage: mainFrance,
    details: [
      'Rodzaj wypoczynku: Aktywny z dużą ilością zwiedzenia',
      "Zakwaterowanie: Hotel 4* 'Fred's VieuxPort'",
      'Wyżywienie: 2 posiłki - śniadnaie w formie bufetu i obiadokolacja',
      'Transport: przelot z wybranego lotniska w Polsce na lotnisko Orly, a następnie przejazd autokarem do hotelu',
      'Udogodnienia: opieka pilota, ubezpieczenie KL i NW, bilety wstępu, lokalni przewodnicy, tour guide, bilety komunikacji miejskie',
    ],
    days: [
      {
        day: 1,
        description: "Przelot do Paryża, przejazd metrem do hotelu, wieczorny spacer pod wieże Eiffle'a. ",
        attractions: ["oświetlona wieża Eiifle'a", 'Pola Marsowe'],
        dayImage: '',
      },
      {
        day: 2,
        description:
          "Wczesna pobudka, przejazd pod Łuk triumfalny, możliwość dokupienia wejścia na szczyt (60zł), spacer po okolicy w stronę mostu z widokiem na wieże Eiifle'a. Po obiedzie spacer w strone Luwru. Zwiedzanie muzeum potrwa około 3 godziny.",
        attractions: [
          'Łuk triumfalny',
          'Champs Elysees',
          'Grand Palais i Petit Palais',
          'Most Aleksandra III',
          'Plac De La Concorde',
          'Ogrody Tuileries',
        ],
        dayImage: '',
      },
      {
        day: 3,
        description:
          'Poranna pobudka i spacer w stronę Katedry Notre Dame. Tego dnia w programie mamy również odwiedzenie Panteonu, gdzie m.in. pochowana jest Maria Składowska-Curie z mężem i znajduje się wahadło Foucoulta. Dzień zakończymy spacerem po najpiękniejszym parku w Paryżu - ogrodach Luksemburskich',
        attractions: ['Katedra Notre Dame', 'Kaplica Sainte-Chapelle', 'Księgarnia Shaskpeare and Company', 'Ogrody Luksemburskie'],
        dayImage: '',
      },
      {
        day: 4,
        description:
          'Dzień ten poświęcimy na zobaczenia najważniejszych i najciekawszych muzeów w Paryżu. Zakończymy go jednak spacerem po dzielnicy Montmartre',
        attractions: ['Ateliere de Lumieres', 'Muzeum Magii', 'Opera Garnier', 'Muzeum perfum', 'Katedra Sacre Coeur'],
        dayImage: '',
      },
      {
        day: 5,
        description:
          'Ostatniego dnia naszej podróży wybierzemy się do Wersalu, gdzie zobaczymy najpiękniejszy zespół pałacowy, który był rezydencją królów francuskich.',
        attractions: [],
        dayImage: '',
      },
    ],
    inPrice: ['Przelot', 'Bagaże', 'Transfer lotniskowy', 'Zakwaterowanie', 'Bilety wstępu', 'Transfer do atrakcji', 'Wyżywienie'],
  },

  {
    country: 'Szwecja',
    dateFrom: '10.06.2023',
    dateTo: '14.06.2023',
    food: '2 posiłki',
    tripType: 'Zwiedzanie',
    price: 1450,
    mainImage: mainSweden,
    details: [
      'Rodzaj wypoczynku: Aktywny z dużą ilością zwiedzania',
      'Zakwaterowanie: Hotel 4* First Hotel G',
      'Wyżywienie: 2 posiłki - śniadnaie w formie bufetu i obiadokolacja',
      'Transport: przelot z wybranego lotniska w Polsce na lotnisko Orly, a następnie przejazd autokarem do hotelu',
      'Udogodnienia: opieka pilota, ubezpieczenie KL i NW, bilety wstępu, lokalni przewodnicy, tour guide, bilety komunikacji miejskie',
    ],
    days: [
      {
        day: 1,
        description: 'Poranny przelot na lotnisko w Goteborgu, przejazd nowoczesnym metrem do centrum, spacer po okolicy.',
        attractions: ['Kungsportsavenyen', 'Avenue Parade Street', 'Nya alien', 'Hisingsbron'],
        dayImage: '',
      },
      {
        day: 2,
        description:
          'Poranna pobudka, spacer po parku Rosengard i wizyta w nowoczesnym centrum naukowym Universum. Wieczorem spacer po zabytkowej dzielnicy Nordstaden zakończony tradycyjną Szwedzką fiką, czyli kawą i cynamonką',
        attractions: ['Rosengard', 'Universum', 'Nordenstaden'],
        dayImage: '',
      },
      {
        day: 3,
        description:
          'Ostatni dzień naszego wyjazdu spędzimy na promie zwiedzając wyspy archipelagu Goteborskiego, gdzie możemy przyjrzeć się szwedzkiej codzienności życia na wyspie.',
        attractions: ['wyspa Husvik', 'wyspa Vrango', 'wyspa Sjumansholmen'],
        dayImage: '',
      },
      {
        day: 4,
        description: 'Poranny spacer po centrum Goteborgu i wieczorny przelot do Polski',
        attractions: ['Goteborgsoperan', 'Skansen Kronan'],
        dayImage: '',
      },
    ],
    inPrice: ['Przelot', 'Bagaże', 'Transfer lotniskowy', 'Zakwaterowanie', 'Bilety wstępu', 'Transfer do atrakcji', 'Wyżywienie'],
  },

  {
    country: 'Finlandia',
    dateFrom: '01.07.2023',
    dateTo: '05.07.2023',
    food: '2 posiłki',
    tripType: 'Zwiedzanie',
    price: 3500,
    mainImage: mainFinland,
    details: [
      'Rodzaj wypoczynku: Aktywny z duż ilością zwiedzania. ',
      "Zakwaterowanie: Hotel 4* 'Orginal Sokos' ",
      'Wyżywienie: Śniadanie w formie bufetu i obiadokolacja.',
      'Transport: Przelot z dowlonego lotniska w Polsce do stolicy Finlandi - Helsinek. Następnie transfer komunikacją miejską do miejsca zakwaterowania.',
      'Udogodnienia: opieka pilota, ubezpieczenie KL i NW, bilety wstępu, lokalni przewodnicy, tour guide, bilety komunikacji miejskie',
    ],
    days: [
      {
        day: 1,
        description: 'Przelot do miejsca docelowego, zakwaterowanie w hotelu wieczorny spacer po centrum stolicy.',
        attractions: ['pomnik Bad Bad Boy,', 'Kolmikulma', 'Svenska Teatren', 'Kamppi Chapel - kaplica ciszy', 'Three blacksmiths', 'Esplandi'],
        dayImage: '',
      },
      {
        day: 2,
        description:
          'Dzień ten rozpoczniemy na najbardziej znanym targu rybnym w Finlandii, gdzie spróbujemy lokalnej kuchni m.in. mięsa z renifera. Później przepłyniemy promem na pobliską wyspę a natsępnie aby jeszcze bardziej poznać kulturę i tradycje finlandzkie, resztę dnia spędzimy w kompleksie basnów i saun, gdzie poznamy tradycyjny finlandzki sposób saunowania.',
        attractions: ['Kauppatori', 'Allas Sea Pool', 'Helsinki Market Hall', 'Suomenlinna'],
        dayImage: '',
      },
      {
        day: 3,
        description:
          'Tego dnia wybierzemy się pociągiem do parku narodowego oddalonego kilkanoaście kilometrów od Helsinek, gdzie będziemy mogli odetchnąć świeżym powietrzem, podziwiać naturę i zobaczyć renifera..',
        attractions: ['Sipoonkorpi National Park'],
        dayImage: '',
      },
      {
        day: 4,
        description: 'Ostatniego dnia poznamy historię miasta i zatopimy się w kulturze odwiedzając trzy najsłynniejsze muzea.',
        attractions: ['Amos Rex - muzeum sztuki nowoczesnej', 'Helsinki City Museum', 'Kisma - muzeum sztuki współczesnej'],
        dayImage: '',
      },
    ],
    inPrice: ['Przelot', 'Bagaże', 'Transfer lotniskowy', 'Zakwaterowanie', 'Bilety wstępu', 'Transfer do atrakcji', 'Wyżywienie'],
  },

  {
    country: 'Dania',
    dateFrom: '10.07.2023',
    dateTo: '15.07.2023',
    food: '2 posiłki',
    tripType: 'Zwiedzanie',
    price: 5500,
    mainImage: mainDenmark,
    details: [
      'Rodzaj wypoczynku: Aktywny, zwiedzanie i rozrywka',
      "Zakwaterowanie: Hotel 3* 'Savoy Hotel' ",
      'Wyżywienie: Śniadanie w formie bufetu i obiadokolacja. ',
      'Transport: Przelot z wybranego miasta w Polsce do stolicy Danii Kopenhagii, następnie transfer do hotelu.',
      'Udogodnienia: opieka pilota, ubezpieczenie KL i NW, bilety wstępu, lokalni przewodnicy, tour guide, bilety komunikacji miejskie',
    ],
    days: [
      {
        day: 1,
        description: 'Przelot do miejsca docelowego, zameldowanie w hotelu, wieczorny spacer po najbardziej charakterystycznym miejscu Kopenhagii.',
        attractions: ['Nyhaven', 'Opera - Operaparken', 'The equestriuan statue', 'Amaliehaven'],
        dayImage: '',
      },
      {
        day: 2,
        description: 'Dzień ten spędzimy zatapiając się w historii Dani w dawnym kompleksie i twierdzy obronnej króla.',
        attractions: ['pomnik Małej Syrenki', 'Kastellete', 'Langelinieparken', "St Alban's Church", 'Royals Pavilon'],
        dayImage: '',
      },
      {
        day: 3,
        description: 'Bardzo wczesna pobudka, transfer do słynnego duńskiego Legolandu. Cały dzień spędzimy w parku rozrywki',
        attractions: ['Legoland'],
        dayImage: '',
      },
      {
        day: 4,
        description:
          'Czwarty dzień naszej wycieczki spędzi poznjąc kulturę Danii. Wybierzemy się na trydycyjne duńskie cynamonki i hot-dogi, zajrzymy do letniej rezydencji rodziny królewskiej i największy sklepów lego.',
        attractions: ['Amalienborg', 'The Royal Theatre', 'Christianborg Palace', 'The Kings Garden'],
        dayImage: '',
      },
      {
        day: 5,
        description:
          'Ostatniego dnia zobaczymy ogromne muzeum i galerię sztuki i kościół powstały całkowicie z marmuru. Wieczorny przelot do Polski.',
        attractions: ['Glyptotek', 'Marmurowy Kościół'],
        dayImage: '',
      },
    ],
    inPrice: ['Przelot', 'Bagaże', 'Transfer lotniskowy', 'Zakwaterowanie', 'Bilety wstępu', 'Transfer do atrakcji', 'Wyżywienie'],
  },

  {
    country: 'Grecja',
    dateFrom: '12.07.2023',
    dateTo: '19.07.2023',
    food: 'All Inclusive',
    tripType: 'Wypoczynek',
    price: 3600,
    mainImage: mainGreece,
    details: [
      'Rodzaj wypoczynku: Relaks w kurorcie z basenami lub na najpiękniejszych greckich plażach.',
      'Zakwaterowanie: Hotel 5* Laguna Holiday Resort ',
      'Wyżywienie: All inclusive bazujące na kuchni śródziemnomorskiej i międzynarodowej.',
      'Transport: Przelot z wybranego lotniska w Polsce, transfer do hotelu',
      'Udogodnienia: opieka pilota, ubezpieczenie KL i NW',
    ],
    days: [
      {
        day: 1,
        description:
          'Tygodniowy pobyt w 5-gwaizdkowym kurorcie. Obiekt oferuj dostęp do basenów wewnętrznych jak i zewnętrznych z licznymi zjeżdżalniami. Hotel znajduje się bardzo blisko plaży więc każdy znajdzie coś dla siebie.',
        attractions: [],
        dayImage: '',
      },
    ],
    inPrice: ['Przelot', 'Bagaże', 'Transfer lotniskowy', 'Zakwaterowanie', 'Wyżywienie'],
  },

  {
    country: 'Turcja',
    dateFrom: '01.08.2023',
    dateTo: '09.08.2023',
    food: 'All Inclusive',
    tripType: 'Wypoczynek',
    price: 6000,
    mainImage: mainTurkey,
    details: [
      'Rodzaj wypoczynku: Relaks w kurorcie z basenami.',
      'Zakwaterowanie: Turunc Resort',
      'Wyżywienie: All inclusive bazujące na kuchni śródziemnomorskiej i międzynarodowej.',
      'Transport: Przelot z wybranego lotniska w Polsce, transfer do hotelu',
      'Udogodnienia: opieka pilota, ubezpieczenie KL i NW',
    ],
    days: [
      {
        day: 1,
        description:
          'Tydzień spędzony w najpiękniejszym turecki resorcie, oferującym przepiękne widoki na zatokę. Dostęp do licznych basenów wewnętrzych zewnętrznych, zjedżalni jaki i prywatnej plaży. ',
        attractions: [],
        dayImage: '',
      },
    ],
    inPrice: ['Przelot', 'Bagaże', 'Transfer lotniskowy', 'Zakwaterowanie', 'Bilety wstępu', 'Transfer do atrakcji', 'Wyżywienie'],
  },

  {
    country: 'Włochy',
    dateFrom: '03.08.2023',
    dateTo: '08.08.2023',
    food: '2 posiłki',
    tripType: 'Wypoczynek i zwiedzanie',
    price: 4600,
    mainImage: mainItaly,
    details: [
      'Rodzaj wypoczynku: Kilka dni spędzimy aktywnie, kilka wygrzawając się na słońcu na najpiękniejszych włoskich plażach.',
      'Zakwaterowanie: Hotel 3* Ankon Hotel',
      'Wyżywienie: Śniadanie w formie bufetu, obiadokolacja',
      'Transport: Przlot z Krakowa do Ankony, transfer do hotelu.',
      'Udogodnienia:  opieka pilota, ubezpieczenie KL i NW, bilety wstępu, lokalni przewodnicy, tour guide',
    ],
    days: [
      {
        day: 1,
        description: 'Przelot do miejsca docelowego Ankony, zameldowanie w hotelu, wieczorny spacer po centrum miasta portowego - Ankony',
        attractions: ['Piazza del Plebiscito', 'Cattedrale di San Ciriaco', 'Mole VanVitelliana'],
        dayImage: '',
      },
      {
        day: 2,
        description: 'Przejzd do pobliskiego miasteczka położonego na klifach - Numany, całodniowy relaks na plaży.',
        attractions: [],
        dayImage: '',
      },
      {
        day: 3,
        description: 'Całodniowe zwiedzanie państwa w państwie, czyli wycieczka do San Marino',
        attractions: ['Prima Torre - La Rocca', 'Grota Kuszników', 'Basilica del San Marino', 'Palazzo Valloni', 'Museo delle Curiosita'],
        dayImage: '',
      },
      {
        day: 4,
        description: 'Czwarty dzień naszej wycieczki spędzimy relaksując się na plaży w Ankonie.',
        attractions: [],
        dayImage: '',
      },
      {
        day: 5,
        description:
          'Ostatni dzień wyjazdu spędzimy aktywnie zwiedzając Park Narodowy z przepięknymi szlakami, dywanami kwiatowymi i wodospadami. Wieczorem wrócimy na lotnisko w Ankonie skąd mamy nocny przelot do Polski.',
        attractions: ['Parco Nazionale Monti Sibillini'],
        dayImage: '',
      },
    ],
    inPrice: ['Przelot', 'Bagaże', 'Transfer lotniskowy', 'Zakwaterowanie', 'Bilety wstępu', 'Transfer do atrakcji', 'Wyżywienie'],
  },
];



