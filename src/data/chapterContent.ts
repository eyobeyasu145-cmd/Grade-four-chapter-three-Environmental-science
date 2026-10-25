import { NoteTopic, ClimateZone, WeatherInstrument, MineralResource, FlashCard } from '../types';

export const CHAPTER_INFO = {
  grade: '4ኛ ክፍል (Grade 4)',
  subject: 'አካባቢ ሳይንስ (Environmental Science)',
  chapter: 'ምዕራፍ ሦስት (Chapter 3)',
  title: 'የተፈጥሮ አካባቢያችን (Our Natural Environment)',
  source: 'የተማሪ መጽሐፍ ገጽ 60 - 90',
  overview: 'ይህ ምዕራፍ ስለ አካባቢያችን ምንነት፣ የአየር ሁኔታ እና የአየር ንብረት ልዩነት፣ የሙቀት መለኪያ መሳሪያዎችና ስሌቶች፣ የድሬዳዋ የተፈጥሮ ሃብቶች (ማዕድናት፣ ውሃ፣ የዱር እንስሳት፣ ደን) እና የቆሻሻ አወጋገድ ስርዓት በዝርዝር የሚያስተምር ነው።'
};

export const NOTE_TOPICS: NoteTopic[] = [
  {
    id: 'intro-env',
    title: '1. አካባቢ ምንድን ነው? (What is Environment?)',
    englishTitle: 'Concept of Environment & Its Components',
    icon: 'Globe',
    badge: 'መሰረታዊ ፅንሰ-ሃሳብ',
    summary: 'አካባቢ ማለት ለሰውም ሆነ ለሌሎች ህይወት ላላቸው ነገሮች አስፈላጊ የሆኑ የህይወት ደጋፊ ስርዓትን የሚያጠቃልል ፅንሰ-ሃሳብ ነው።',
    keyPoints: [
      {
        title: 'አካባቢ በ 3 ዋና ዋና ክፍሎች ይከፈላል',
        description: 'አካባቢ የተፈጥሮ (አካላዊና ህይወታዊ) እንዲሁም ማህበራዊና ባህላዊ ሁኔታዎችን በውስጡ ይይዛል።',
        example: 'በምንኖርበት መንደር ውስጥ አፈርና አየር (አካላዊ)፣ ዛፎችና ውሾች (ህይወታዊ)፣ እና ቤቶቻችንና ትምህርት ቤታችን (ማህበራዊ/ባህላዊ) አብረው ይገኛሉ።',
        examTip: 'ፈተና ላይ "አካላዊ" እና "ህይወታዊ" አካባቢዎችን ለይታችሁ እንድትጽፉ ይጠየቃል!'
      },
      {
        title: 'ሀ. አካላዊ አካባቢ (Physical / Abiotic Environment)',
        description: 'ህይወት የሌላቸው ግን ለህይወት መኖር እጅግ ወሳኝ የሆኑ የተፈጥሮ ነገሮች ናቸው። አየር፣ ውሃ፣ አፈር፣ የፀሐይ ብርሃን የመሳሰሉትን ያጠቃልላል።',
        example: 'ያለ አየር መተንፈስ፣ ያለ ውሃ መጠጣት፣ ያለ አፈር ደግሞ እህል ማብቀል አንችልም። እነዚህ ሁሉ አካላዊ አካባቢዎች ናቸው።'
      },
      {
        title: 'ለ. ህይወታዊ አካባቢ (Biological / Biotic Environment)',
        description: 'ህይወት ያላቸውን ነገሮች ሁሉ ያጠቃልላል። ሰውን፣ እፅዋትን፣ እንስሳትን እና በአይናችን የማይታዩ ጥቃቅን ህዋሳትን (ማይክሮ ኦርጋኒዝም) ያጠቃልላል።',
        example: 'በጓሮህ የሚበቅለው የጎመን ተክል፣ ድመት፣ ላም፣ እንዲሁም ባክቴሪያዎች ህይወታዊ አካባቢ ናቸው።'
      },
      {
        title: 'ሐ. ማህበራዊና ባህላዊ አካባቢ (Socio-Cultural Environment)',
        description: 'በሰው ልጅ እውቀት፣ ክሂል፣ መሳሪያዎችና ተቋም የተሰሩ ወይም የተደራጁ ነገሮች ናቸው።',
        example: 'ህንፃዎች፣ መንደሮች፣ ከተሞች፣ አውራ ጎዳናዎች፣ ፋብሪካዎችና ትምህርት ቤቶች።'
      }
    ],
    importantTerms: [
      { term: 'አካባቢ', english: 'Environment', meaning: 'ለህያዋን ነገሮች በሙሉ አስፈላጊ የሆነ የህይወት ደጋፊ ስርዓት', example: 'ንጹህ አካባቢ ለጤናማ ኑሮ አስፈላጊ ነው።' },
      { term: 'አካላዊ አካባቢ', english: 'Physical Environment', meaning: 'ህይወት የሌላቸው የተፈጥሮ ነገሮች (አየር፣ ውሃ፣ አፈር)', example: 'አፈሩ አዝርእት እንዲበቅል ያደርጋል።' },
      { term: 'ህይወታዊ አካባቢ', english: 'Biological Environment', meaning: 'ህይወት ያላቸው ፍጥረታት (ሰው፣ እፅዋት፣ እንስሳት)', example: 'የዱር እንስሳት በጫካ ውስጥ ይኖራሉ።' },
      { term: 'ማይክሮ ኦርጋኒዝም', english: 'Microorganism', meaning: 'በአይን የማይታዩ ጥቃቅን ህዋሳት', example: 'አፈር ውስጥ የሚገኙ ጠቃሚ ባክቴሪያዎች።' }
    ]
  },
  {
    id: 'weather-climate',
    title: '2. የአየር ሁኔታ እና የአየር ንብረት (Weather vs Climate)',
    englishTitle: 'Weather, Climate, Instruments & Ethiopia Climate Zones',
    icon: 'CloudSun',
    badge: 'ዋና የፈተና ርዕስ',
    summary: 'የአየር ሁኔታ የአጭር ጊዜ (የዕለት ተዕለት) የአየር ባህሪ ሲሆን፣ የአየር ንብረት ደግሞ የአንድ ሰፊ አካባቢ የረጅም ጊዜ (የዓመታት) አማካይ የአየር ጠባይ ነው።',
    keyPoints: [
      {
        title: 'የአየር ሁኔታ (Weather) ምንድን ነው?',
        description: 'በአንድ ውስን በሆነ አካባቢ ለአጭር ጊዜ (በየደቂቃው፣ በየሰዓቱና በየቀኑ) የሚከሰት የአየር ለውጥ ነው።',
        example: 'ጥዋት ላይ ብርድ ሆኖ ከሰዓት በኋላ ፀሐይ መውጣቱ ወይም ዝናብ መዝነቡ የዕለቱ "የአየር ሁኔታ" ይባላል።',
        examTip: 'የአየር ሁኔታ = አጭር ጊዜ + ትንሽ ቦታ። የአየር ንብረት = ረጅም ጊዜ + ሰፊ ቦታ!'
      },
      {
        title: 'የአየር ንብረት (Climate) ምንድን ነው?',
        description: 'በአንድ ሰፋ ባለ አካባቢ ለረጅም ጊዜ የሚከሰት አማካይ የአየር ሁኔታ ወይም የአየር ጠባይ ነው።',
        example: 'የድሬዳዋ ከተማ በዓመቱ አብዛኛውን ጊዜ ሞቃትና ፀሐያማ መሆኗ የድሬዳዋ "የአየር ንብረት" (ቆላ) መሆኑን ያሳያል።'
      },
      {
        title: 'የአየር ንብረት እና የአየር ሁኔታ ይዘቶች (Elements)',
        description: 'የሙቀት መጠን፣ የዝናብ መጠን፣ የነፋስ ፍጥነትና አቅጣጫ፣ የአየር ግፊት፣ እና ደመና ዋና ዋና ይዘቶች ናቸው።',
        example: 'ቴሌቪዥን ላይ የሚነገረው የነገ የሙቀት መጠን እና የዝናብ ሁኔታ እነዚህን ይዘቶች ያሳያል።'
      },
      {
        title: 'ከፍታ እና የሙቀት መጠን ግንኙነት (Altitude & Temperature)',
        description: 'የአንድ ቦታ ከፍታ በጨመረ ቁጥር የሙቀት መጠን እየቀነሰ (ቅዝቃዜ እየጨመረ) ይሄዳል! ከፍታ ሲቀንስ ደግሞ ሙቀት ይጨምራል።',
        example: 'ከድሬዳዋ ይልቅ ወደ ተራራማዋ ቁሉቢ (Kulubi) ስንሄድ ከፍታው ስለሚጨምር በጣም ይበርዳል።',
        examTip: 'ፈተና ጥያቄ፡ "ከፍታ ሲጨምር ሙቀት ምን ይሆናል?" -> መልስ፡ "ይቀንሳል"!'
      },
      {
        title: 'ሰው ሰራሽ ዝናብ (Cloud Seeding / Artificial Rain)',
        description: 'በደመና ውስጥ ያሉ የውሃ ጠብታዎች በራሳቸው መውረድ ሳይችሉ ሲቀሩ፣ በአውሮፕላን ወይም ከመሬት ወደ ሰማይ ኬሚካል በመርጨት ዝናብ እንዲዘንብ ማድረግ ነው።',
        example: 'ድርቅ በሚከሰትበት ጊዜ በሳይንሳዊ መንገድ ደመናን ኬሚካል በመርጨት ፈጥኖ እንዲዘንብ ማድረግ ይቻላል።'
      }
    ],
    importantTerms: [
      { term: 'የአየር ሁኔታ', english: 'Weather', meaning: 'ለአጭር ጊዜ በአንድ ውስን ቦታ የሚከሰት የአየር ለውጥ', example: 'የዛሬው አየር ሁኔታ ዝናባማ ነው።' },
      { term: 'የአየር ንብረት', english: 'Climate', meaning: 'ለረጅም ጊዜ በሰፊ አካባቢ የሚከሰት አማካይ የአየር ጠባይ', example: 'የኢትዮጵያ ደጋማ ቦታዎች ቀዝቃዛ አየር ንብረት አላቸው።' },
      { term: 'ሰው ሰራሽ ዝናብ', english: 'Cloud Seeding', meaning: 'ኬሚካል በደመና ላይ በመርጨት ዝናብ ማዝነብ', example: 'በአውሮፕላን ኬሚካል ረጭቶ ዝናብ መፍጠር።' },
      { term: 'የአየር ግፊት', english: 'Air Pressure', meaning: 'በመሬት ስበት ሳቢያ የተጠቀጠቀ አየር የሚያደርሰው ጫና', example: 'ከፍታ ሲጨምር የአየር ግፊት ይቀንሳል።' }
    ]
  },
  {
    id: 'natural-resources',
    title: '3. የድሬዳዋ አስተዳደር የተፈጥሮ ሃብቶች (Natural Resources)',
    englishTitle: 'Renewable & Non-Renewable Resources, Minerals, Water & Wildlife',
    icon: 'Trees',
    badge: 'ሀብቶችና ማዕድናት',
    summary: 'የተፈጥሮ ሃብት ማለት በተፈጥሮ የሚገኙ ህይወት ያላቸውና ህይወት የሌላቸው ነገሮች ሲሆኑ በሁለት ይከፈላሉ፡ ታዳሽ (ሊተኩ የሚችሉ) እና የማይታደሱ (የማይተኩ)።',
    keyPoints: [
      {
        title: 'ታዳሽ የተፈጥሮ ሃብቶች (Renewable Resources)',
        description: 'እራሳቸውን በመዋለድ፣ በመራባትና በተፈጥሮ ዑደት ሊተኩ የሚችሉ ሃብቶች ናቸው።',
        example: 'ዛፎች፣ ውሃ፣ እንስሳት፣ አየር እና አፈር።',
        examTip: 'ዛፎችን ቆርጠን ሌላ ከተከልን ይተካሉ፤ እንስሳት ይወልዳሉ። ስለዚህ ታዳሽ ናቸው!'
      },
      {
        title: 'የማይታደሱ የተፈጥሮ ሃብቶች (Non-Renewable Resources)',
        description: 'እራሳቸውን መተካት የማይችሉ፣ ያለማቋረጥ ጥቅም ላይ ከዋሉ የሚያልቁና የሚጠፉ ሃብቶች ናቸው።',
        example: 'ወርቅ፣ የተፈጥሮ ዘይት (ነዳጅ)፣ የድንጋይ ከሰል፣ ብረት፣ አልማዝ፣ እና የተለያዩ ማዕድናት።',
        examTip: 'ወርቅ ወይም ነዳጅ ከመሬት ተቆፍሮ ካለቀ በራሱ ሊባዛ ወይም ሊተካ አይችልም!'
      },
      {
        title: 'በድሬዳዋ የሚገኙ ዋና ዋና ማዕድናት',
        description: 'ድሬዳዋ ከፍተኛ የማዕድን ክምችት ያላት ከተማ ናት። የኖራ ድንጋይ፣ የሸክላ አፈር፣ እምነበረድ፣ አምባ አራዳም አለት፣ ባልጩት፣ ጄሶ፣ አሸዋ እና የፀሐይ ብርሃን ኃይል አላት።',
        example: 'የኖራ ድንጋይና የሸክላ አፈር ተቀላቅለው በድሬዳዋ የሚገኙ ግዙፍ የሲሚንቶ ፋብሪካዎችን ይመግባሉ።'
      },
      {
        title: 'የድሬዳዋ የውሃ እና የዱር እንስሳት ሃብት',
        description: 'በድሬዳዋ ቋሚ ወንዝ ባይኖርም በክረምት የሚፈሱ ወንዞች አሏት (ደቻቱ፣ ቡትጂ፣ ቃለአድ)። የከርሰ ምድር ውሃ የሚያጠና ሳይንስ ጂኦ ሃይድሮሎጂ ይባላል።',
        example: 'የደቻቱ ወንዝ በክረምት ከፍተኛ ውሃ ይዞ ይፈሳል። የዱር እንስሳት ደግሞ አንበሳ፣ ነብር፣ ድክ ድክ፣ ገረኑክ፣ ሚዳቆና ዝንጀሮ ይገኙበታል።'
      },
      {
        title: 'የደን መመናመን እና አረንጓዴ አሻራ (Green Legacy)',
        description: 'በአሁኑ ወቅት የድሬዳዋ የተፈጥሮ እፅዋት ሽፋን 28% ብቻ ነው። ይህን ለመከላከል ዛፎችን መትከል (አረንጓዴ አሻራ) ወሳኝ ነው።',
        example: 'በተቆረጠ ዛፍ ምትክ 2 እና 3 ችግኞችን መትከልና መንከባከብ።'
      }
    ],
    importantTerms: [
      { term: 'ታዳሽ ሃብት', english: 'Renewable Resource', meaning: 'በመራባት ወይም በተፈጥሮ ሊተካ የሚችል ሃብት', example: 'ዛፎች፣ ውሃ፣ እንስሳት' },
      { term: 'የማይታደስ ሃብት', english: 'Non-Renewable Resource', meaning: 'አንዴ ካለቀ ዳግም የማይገኝ ሃብት', example: 'ወርቅ፣ ነዳጅ፣ ድንጋይ ከሰል' },
      { term: 'ጂኦ ሃይድሮሎጂ', english: 'Geo-hydrology', meaning: 'የከርሰ ምድር ውሃን የሚያጠና ሳይንስ', example: 'ከመሬት ስር ስላለው ንጹህ ውሃ የሚያጠና ሳይንስ ነው።' },
      { term: 'አረንጓዴ አሻራ', english: 'Green Legacy', meaning: 'የአካባቢን አየር ለመጠበቅ ዛፍ የመትከል ህዝባዊ ንቅናቄ', example: 'በየደጃችን ችግኝ መትከል' }
    ]
  },
  {
    id: 'waste-management',
    title: '4. የቆሻሻ አወጋገድ (Waste Management)',
    englishTitle: 'Types of Waste, Disposal Methods & Environmental Impact',
    icon: 'Trash2',
    badge: 'ተግባራዊ ንጽህና',
    summary: 'ቆሻሻ አካባቢያችንን የሚበክሉ፣ ውበት የሚያሳጡና በሽታ የሚያመጡ ነገሮች ሲሆኑ በሁለት ይከፈላሉ፡ ደረቅ ቆሻሻ እና ፈሳሽ ቆሻሻ።',
    keyPoints: [
      {
        title: 'የቆሻሻ አይነቶች (Types of Waste)',
        description: '1. ደረቅ ቆሻሻ (Dry waste): ፕላስቲክ፣ ቆርቆሮ፣ ወረቀት፣ የእንጨት ፍቅፋቂ፣ የምግብ ትርፍራፊ። 2. ፈሳሽ ቆሻሻ (Liquid waste): ከመጸዳጃ ቤት፣ ከእቃ ማጠቢያና ከፋብሪካ የሚወጣ ፈሳሽ።',
        example: 'የበላኸው ሙዝ ልጣጭ ደረቅ ቆሻሻ ሲሆን፣ እጅህን ስትታጠብ የሚወርደው ሳሙናማ ውሃ ፈሳሽ ቆሻሻ ነው።'
      },
      {
        title: 'ደረቅ ቆሻሻን የማስወገጃ 4 ዋና ዋና ዘዴዎች',
        description: '1. መቅበር (Burying): የሚበሰብሱና መጥፎ ሽታ ያላቸውን በመሬት ውስጥ መቅበር። 2. ማቃጠል (Burning): በከፍተኛ ሙቀት ማቃጠል (የቆሻሻን መጠን በ 30% ይቀንሳል)። 3. መልሶ መጠቀም (Reuse & Recycle): አጥቦ መጠቀም ወይም ወደ አዲስ እቃ መቀየር። 4. ማበስበስ (Composting): የእፅዋት ቅሪትንና የምግብ ትራፊን አበስብሶ ለአፈር ማዳበሪያ ማድረግ።',
        example: 'የምግብ ትራፊን አበስብሰን ማዳበሪያ ማድረግ ተፈጥሮአዊና እጅግ ጠቃሚ ዘዴ ነው።',
        examTip: 'ፈተና ጥያቄ፡ "ቆሻሻን በማቃጠል መጠኑን በስንት ፐርሰንት መቀነስ ይቻላል?" -> መልስ፡ "በ 30%"!'
      },
      {
        title: 'ፈሳሽ ቆሻሻ አወጋገድ (Soak Pit / የማስረጊያ ጉድጓድ)',
        description: 'ፈሳሽ ቆሻሻ በቦይ ወይም በቱቦ ተወስዶ ክዳን ባለው የማስረጊያ ጉድጓድ ውስጥ መግባት አለበት። በውስጡ ትላልቅ ድንጋይ፣ ኮረትና አሸዋ ይጨመርበታል።',
        example: 'የመታጠቢያ ውሃ በክፍት መንገድ ላይ መፍሰስ የለበትም፤ በሽታና ትንኝ ይፈጥራል!'
      },
      {
        title: 'በድሬዳዋ የቆሻሻ አወጋገድ ሁኔታ እና ችግሩ',
        description: 'በድሬዳዋ 84% የሚሆነው ቆሻሻ በግዴለሽነት በሜዳ ላይ ወይም በውሃ ቦይ ውስጥ ይጣላል! ይህም ለአይጥ፣ ዝንብ፣ ትንኝ እና ተላላፊ በሽታዎች መራባት ምክንያት ይሆናል።',
        example: 'ቆሻሻን በተዘጋጀ ገንዳ ውስጥ ክዳን ባለው እቃ ማስቀመጥ የሁላችንም ሃላፊነት ነው።'
      }
    ],
    importantTerms: [
      { term: 'ደረቅ ቆሻሻ', english: 'Dry Waste', meaning: 'ጠንካራ የሆኑ የተጣሉ እቃዎች (ፕላስቲክ፣ አጥንት፣ ቆርቆሮ)', example: 'የፕላስቲክ ጠርሙሶች' },
      { term: 'ፈሳሽ ቆሻሻ', english: 'Liquid Waste', meaning: 'ከመኖሪያ ቤትና ከፋብሪካ የሚወጡ የተበከሉ ፈሳሾች', example: 'የቆሸሸ የሳሙና ውሃ' },
      { term: 'ማበስበስ (ኮምፖስት)', english: 'Composting', meaning: 'ኦርጋኒክ ቆሻሻን አበስብሶ የተፈጥሮ ማዳበሪያ ማድረግ', example: 'የደረቁ ቅጠሎችን አበስብሶ አፈርን ማለምለም' },
      { term: 'የማስረጊያ ጉድጓድ', english: 'Soak Pit', meaning: 'ፈሳሽ ቆሻሻ መሬት ውስጥ ሰርጎ እንዲገባ የተዘጋጀ ጉድጓድ', example: 'በኮረትና አሸዋ የተሞላ የተከደነ ጉድጓድ' }
    ]
  }
];

export const WEATHER_INSTRUMENTS: WeatherInstrument[] = [
  {
    name: 'ቴርሞሜትር',
    english: 'Thermometer',
    use: 'የአየር የሙቀት መጠንን ለመለካት',
    description: 'ሁለት ዓይነት ቴርሞሜትር አለ፡ ከፍተኛ (Maximum) እና ዝቅተኛ (Minimum) ቴርሞሜትር። የሙቀት መለኪያ አሃዱ ዲግሪ ሴልሺየስ (°C) ነው።',
    example: 'የሰውነትህን ትኩሳት ስትታመም በቴርሞሜትር እንደሚለካው ሁሉ የአየሩም ሙቀት በዚህ ይለካል።',
    iconName: 'Thermometer'
  },
  {
    name: 'ሬይንጌጅ',
    english: 'Rain Gauge',
    use: 'የዝናብ መጠንን ለመለካት',
    description: 'በአንድ የተወሰነ ጊዜ የዘነበውን የዝናብ ውፍረት በሚሊሜትር (mm) የሚለካ ሲሊንደራዊ ዕቃ ነው።',
    example: 'የድሬዳዋ ዓመታዊ አማካይ የዝናብ መጠን እስከ 604 ሚሜ (mm) መሆኑ በዚህ መሳሪያ ተለክቷል።',
    iconName: 'CloudRain'
  },
  {
    name: 'ሜርኩሪ ባሮሜትር',
    english: 'Mercury Barometer',
    use: 'የከባቢ አየር ግፊትን ለመለካት',
    description: 'በመሬት ስበት ሳቢያ አየር የሚያሳድረውን ክብደትና ጫና (ግፊት) ለመለካት ያገለግላል።',
    example: 'ከፍታ ሲጨምር የአየር ግፊት ይቀንሳል፤ ይህን ልዩነት ባሮሜትር ያሳየናል።',
    iconName: 'Gauge'
  },
  {
    name: 'አኒሞሜትር',
    english: 'Anemometer',
    use: 'የነፋስን ፍጥነት ለመለካት',
    description: 'ነፋሱ በሰዓት ስንት ኪሎሜትር ፍጥነት እየነፈሰ እንደሆነ በካፕ ቅርጽ በሚሽከረከሩ ጭልፋዎች ይለካል።',
    example: 'ነፋሱ አውሎ ነፋስ መሆኑን ወይም መለስተኛ ንፋስ መሆኑን ፍጥነቱን ለክቶ ይነግረናል።',
    iconName: 'Wind'
  },
  {
    name: 'ዊንድቬን',
    english: 'Wind Vane',
    use: 'የነፋስን አቅጣጫ ለመለየት',
    description: 'ነፋሱ ከየትኛው አቅጣጫ (ከሰሜን፣ ከደቡብ፣ ከምስራቅ ወይስ ከምዕራብ) እየነፈሰ እንደሆነ በቀስት ያሳያል።',
    example: 'ቀስቱ ወደ ሰሜን ከጠቆመ ነፋሱ ከሰሜን አቅጣጫ እየመጣ መሆኑን እናውቃለን።',
    iconName: 'Compass'
  }
];

export const CLIMATE_ZONES: ClimateZone[] = [
  {
    name: 'ቁር / ውርጭ',
    english: 'Kur / Wurch (Alpine / Coldest)',
    altitudeRange: '3000 ሜትር እና በላይ',
    tempRange: 'ከ 10°C በታች',
    characteristics: 'እጅግ በጣም ቀዝቃዛ፣ ውርጭ የበዛበት፣ ከፍተኛ ተራራማ ቦታዎች።',
    examplePlaces: 'የራስ ዳሸን ተራራ ጫፍ፣ የባሌ ተራሮች',
    clothingTip: 'ወፍራም ጃኬት፣ ኮፍያ እና ጓንት መልበስ ያስፈልጋል!',
    color: 'from-blue-600 to-indigo-800'
  },
  {
    name: 'ደጋ',
    english: 'Dega (Highland / Cool)',
    altitudeRange: '2300 - 3300 ሜትር',
    tempRange: '10°C - 15°C',
    characteristics: 'ቀዝቃዛና ለኑሮ ምቹ፣ ብዙ እርሻና ህዝብ የሚገኝበት አካባቢ።',
    examplePlaces: 'ቁሉቢ (Kulubi)፣ አዲስ አበባ፣ ደብረ ብርሃን',
    clothingTip: 'ሹራብ ወይም ካፖርት መልበስ ተመራጭ ነው።',
    color: 'from-teal-600 to-cyan-700'
  },
  {
    name: 'ወይናደጋ',
    english: 'Weyna Dega (Midland / Temperate)',
    altitudeRange: '1500 - 2300 ሜትር',
    tempRange: '15°C - 20°C',
    characteristics: 'መካከለኛ ሙቀትና ቅዝቃዜ ያለው፣ እጅግ ምርጥ የአየር ጠባይ።',
    examplePlaces: 'ሐረር፣ ሐዋሳ፣ ባህር ዳር',
    clothingTip: 'ቀለል ያለ መደበኛ ልብስ መልበስ ይቻላል።',
    color: 'from-emerald-500 to-green-600'
  },
  {
    name: 'ቆላ',
    altName: 'የድሬዳዋ ክልል!',
    english: 'Kolla (Lowland / Warm)',
    altitudeRange: '500 - 1500 ሜትር',
    tempRange: '20°C - 25°C',
    characteristics: 'ሞቃታማ፣ ዝናቡ አነስተኛ የሆነ፣ የቁጥቋጦ እፅዋት የሚበቅሉበት።',
    examplePlaces: 'ድሬዳዋ (ከባህር ጠለል በላይ 950-1250 ሜትር፣ አማካይ ሙቀት 23.5°C)',
    clothingTip: 'ቀጫጭን እና የጥጥ ልብሶች ይመረጣሉ፤ ብዙ ውሃ መጠጣት ያስፈልጋል!',
    color: 'from-amber-500 to-orange-600'
  },
  {
    name: 'በረሃ',
    english: 'Bereha (Desert / Hot & Arid)',
    altitudeRange: 'ከ 500 ሜትር በታች',
    tempRange: 'ከ 25°C በላይ',
    characteristics: 'እጅግ በጣም ከፍተኛ ሙቀት፣ ዝናብ በጣም አነስተኛ፣ አሸዋማና ደረቅ።',
    examplePlaces: 'የአፋር ዳሎል (Dallol)፣ የሱማሌ ቆላማ አካባቢዎች',
    clothingTip: 'ቀጭን ነጭ ልብስ እና ከፀሐይ የሚከላከል ባርኔጣ ያስፈልጋል!',
    color: 'from-orange-600 to-red-700'
  }
];

export const DIRE_DAWA_MINERALS: MineralResource[] = [
  { name: 'የኖራ ድንጋይ (Limestone)', english: 'Limestone', use: 'ከሸክላ አፈር ጋር ተደባልቆ ለሲሚንቶ ምርት ግብዓትነት ያገለግላል', foundIn: 'ደጋጨብሳ (Degachebsa)', category: 'ግንባታ' },
  { name: 'የሸክላ አፈር (Clay)', english: 'Clay', use: 'ለሲሚንቶ ፋብሪካዎችና ለግንባታ (ከ11 ሚሊዮን ቶን በላይ ክምችት)', foundIn: 'መልካ ጀብዱ፣ አሰሊሶ፣ ጎላደግ፣ ገደንሰር', category: 'ግንባታ' },
  { name: 'አምባ አራዳም አለት', english: 'Amba Aradam Rock', use: 'አይረን፣ ኦክሳይድ እና ሲሊካ የያዘ፤ ለብርጭቆ፣ መስታወትና ሴራሚክስ', foundIn: 'ኢጀአነኒ (Ijeanani)', category: 'ሴራሚክስና መስታወት' },
  { name: 'አሸዋ (Sand)', english: 'Sand', use: 'እጅግ ከፍተኛ ጥራት ያለው ለኮንክሪት፣ ህንፃና ቡሉኬት ማምረቻ', foundIn: 'በድሬዳዋ በብዛት', category: 'ግንባታ' },
  { name: 'እምነበረድ ድንጋይ (Marble)', english: 'Marble', use: 'ለህንፃ ግንባታ ማሳመሪያና ለቅርጻ ቅርጽ ስራ', foundIn: 'ደጋጨብሳ፣ ኢጀአነኒ፣ ገደንሰር፣ ሁላሁሉል', category: 'ግንባታ' },
  { name: 'ኳርትዝ እና ሲሊካ (Quartz & Silica)', english: 'Quartz & Silica', use: 'ለመስታወትና ለጌጣጌጥ መስሪያ', foundIn: 'ኮርቱ (Kortu)', category: 'ሴራሚክስና መስታወት' },
  { name: 'ፊልድስፓር እና ማይካ', english: 'Feldspar & Mica', use: 'ለተለያዩ ቀለማት ሴራሚክስና ብርጭቆ ማምረቻ', foundIn: 'በለዋ፣ ደበሌ፣ አዋሌ', category: 'ሴራሚክስና መስታወት' },
  { name: 'ባልጩት (Basalt/Flint)', english: 'Basalt', use: 'ለመንገድ ግንባታና ለሴራሚክስ ስራ', foundIn: 'ጎላደግ፣ ጭሪሚጢ', category: 'ግንባታ' },
  { name: 'ከኖራ ጋር የተቀላቀለ ጄሶ (Gypsum)', english: 'Gypsum', use: 'ሲሚንቶ ለማምረት፣ ለግንባታና ለቀለማት', foundIn: 'ደበሌ (Debele)', category: 'ግንባታ' },
  { name: 'ፔግማታይት እና አረንጓዴ ማይካ', english: 'Pegmatite & Green Mica', use: 'ለጌጣጌጥ መስሪያ ስራዎች', foundIn: 'መልካቀሮ፣ ቃሊቻ', category: 'ጌጣጌጥ' },
  { name: 'ጉጉባ አፈር', english: 'Guguba Soil', use: 'ለግንባታና ለሲሚንቶ ምርት', foundIn: 'መልካ ጀብዱ፣ ገንደሪጌ፣ ጎሮ', category: 'ግንባታ' },
  { name: 'የድንጋይ ከሰል (Coal)', english: 'Coal', use: 'ለሀይል ማመንጫነት (Energy generation)', foundIn: 'በድሬዳዋ ምስራቃዊ ክፍል', category: 'ሀይል' }
];

export const FLASHCARDS_DATA: FlashCard[] = [
  { id: 'fc1', question: 'የአየር ሁኔታ (Weather) ምንድን ነው?', answer: 'በአንድ ውስን ቦታ ለአጭር ጊዜ (በየደቂቃው፣ ሰዓቱና ቀኑ) የሚከሰት የአየር ለውጥ ነው።', category: 'አየር ሁኔታ' },
  { id: 'fc2', question: 'የአየር ንብረት (Climate) ምንድን ነው?', answer: 'በአንድ ሰፋ ባለ አካባቢ ለረጅም ጊዜ የሚከሰት አማካይ የአየር ሁኔታ ወይም ጠባይ ነው።', category: 'አየር ንብረት' },
  { id: 'fc3', question: 'ከፍታ ሲጨምር የሙቀት መጠን ምን ይሆናል?', answer: 'የሙቀት መጠን ይቀንሳል (ቅዝቃዜ ይጨምራል)።', category: 'ከፍታና ሙቀት' },
  { id: 'fc4', question: 'የሙቀት መጠን መለኪያ መሳሪያ ምን ይባላል?', answer: 'ቴርሞሜትር (Thermometer) ይባላል።', category: 'መሳሪያዎች' },
  { id: 'fc5', question: 'የዝናብ መጠን መለኪያ መሳሪያ ማን ይባላል?', answer: 'ሬይንጌጅ (Rain Gauge) ይባላል።', category: 'መሳሪያዎች' },
  { id: 'fc6', question: 'የነፋስን ፍጥነት የምንለካበት መሳሪያ ምን ይባላል?', answer: 'አኒሞሜትር (Anemometer) ይባላል።', category: 'መሳሪያዎች' },
  { id: 'fc7', question: 'የነፋስን አቅጣጫ ለመለየት የሚያገለግለው መሳሪያ ማን ይባላል?', answer: 'ዊንድቬን (Wind Vane) ይባላል።', category: 'መሳሪያዎች' },
  { id: 'fc8', question: 'የከባቢ አየር ግፊትን ለመለካት ምን እንጠቀማለን?', answer: 'ሜርኩሪ ባሮሜትር (Mercury Barometer) እንጠቀማለን።', category: 'መሳሪያዎች' },
  { id: 'fc9', question: 'የድሬዳዋ ከተማ ከባህር ጠለል በላይ ከፍታዋ ስንት ነው?', answer: 'ከ 950 እስከ 1250 ሜትር ነው።', category: 'ድሬዳዋ' },
  { id: 'fc10', question: 'ድሬዳዋ በየትኛው የአየር ንብረት ክልል ትመደባለች?', answer: 'በ "ቆላ" (Kolla) የአየር ንብረት ክልል ውስጥ ትመደባለች (አማካይ ሙቀት 23.5°C)።', category: 'ድሬዳዋ' },
  { id: 'fc11', question: 'የድሬዳዋ ዓመታዊ አማካይ የዝናብ መጠን ስንት ነው?', answer: 'እስከ 604 ሚሊ ሜትር (604 mm) ነው።', category: 'ድሬዳዋ' },
  { id: 'fc12', question: 'ታዳሽ የተፈጥሮ ሃብት ማለት ምን ማለት ነው?', answer: 'በመዋለድ፣ በመራባትና በተፈጥሮ እራሳቸውን መተካት የሚችሉ ሃብቶች (ለምሳሌ፡ ዛፎች፣ እንስሳት፣ ውሃ) ናቸው።', category: 'የተፈጥሮ ሃብት' },
  { id: 'fc13', question: 'የማይታደስ የተፈጥሮ ሃብት ምንድን ነው?', answer: 'እራሳቸውን መተካት የማይችሉና ጥቅም ላይ ከዋሉ የሚያልቁ ሃብቶች (ለምሳሌ፡ ወርቅ፣ ነዳጅ፣ ድንጋይ ከሰል) ናቸው።', category: 'የተፈጥሮ ሃብት' },
  { id: 'fc14', question: 'ቆሻሻን በማቃጠል የቆሻሻን መጠን በስንት ፐርሰንት መቀነስ ይቻላል?', answer: 'በ 30 በመቶ (30%) መቀነስ ይቻላል።', category: 'ቆሻሻ' },
  { id: 'fc15', question: 'የከርሰ ምድር ውሃን የሚያጠና ሳይንስ ምን ይባላል?', answer: 'ጂኦ ሃይድሮሎጂ (Geo-hydrology) ይባላል።', category: 'ሳይንስ' },
  { id: 'fc16', question: 'አረንጓዴ አሻራ ማለት ምን ማለት ነው?', answer: 'የአካባቢን አየር ንብረት ለመጠበቅ ሁሉም ሰው ዛፍ በመትከል የሚያደርገው ተሳትፎ ነው።', category: 'አካባቢ ጥበቃ' }
];
