import type { Crystal } from "@/types/crystal";

export const crystals: Crystal[] = [
  // ─── TIGER'S EYE ────────────────────────────────────────────────────────────
  {
    slug: "tigers-eye",
    stoneType: "tigers-eye",
    name: {
      en: "Tiger's Eye",
      tr: "Kaplan Gözü",
      ar: "عين النمر",
    },
    subtitle: {
      en: "The Stone of Strength & Clarity",
      tr: "Güç ve Netlik Taşı",
      ar: "حجر القوة والوضوح",
    },
    summary: {
      en: "Tiger's Eye carries the energy of the earth and the warmth of the sun. A stone of courage, focus, and grounded confidence worn by those who choose to move forward with purpose.",
      tr: "Kaplan Gözü, toprağın enerjisini ve güneşin sıcaklığını bünyesinde taşır. Cesaret, odak ve köklü güvenin taşıdır — amacıyla ilerlemek isteyenlerin yanında yürür.",
      ar: "تحمل عين النمر طاقة الأرض ودفء الشمس. إنه حجر الشجاعة والتركيز والثقة الراسخة.",
    },
    description: {
      en: `Tiger's Eye is one of nature's most striking gemstones — its rich golden-brown bands shift and shimmer with a phenomenon called chatoyancy, creating the illusion of a living, breathing light within the stone.

For centuries, warriors carried Tiger's Eye into battle for courage. Merchants wore it for prosperity. Today, it remains one of the most powerful stones for anyone seeking clarity of mind, strength of will, and the confidence to act.

This stone does not rush. It grounds. It steadies. It reminds you that you are capable of more than you believe, and that every challenge is a threshold, not a wall.

Wear Tiger's Eye when you need to make clear decisions, stand firm in your convictions, or simply remind yourself of your own power.`,
      tr: `Kaplan Gözü, doğanın en etkileyici taşlarından biridir — zengin altın-kahverengi bantları, chatoyancy adı verilen bir fenomenle kayar ve parıldar; taşın içinde yaşayan, nefes alan bir ışık yanılsaması yaratır.

Yüzyıllar boyunca savaşçılar cesaret için Kaplan Gözü'nü yanlarında taşıdı. Tüccarlar zenginlik için giydi. Bugün hâlâ zihinsel netlik, irade gücü ve harekete geçme özgüveni arayanlar için en güçlü taşlardan biri olmaya devam ediyor.

Bu taş acele etmez. Köklenir. Sabitler. Düşündüğünüzden çok daha fazlasına sahip olduğunuzu ve her zorluğun bir duvar değil, bir eşik olduğunu hatırlatır.

Net kararlar almanız, inançlarınızda kararlı durmanız ya da sadece kendi gücünüzü kendinize hatırlatmanız gerektiğinde Kaplan Gözü'nü takın.`,
      ar: `عين النمر واحدة من أكثر الأحجار الكريمة إثارةً في الطبيعة — تتلألأ بظاهرة البريق القطي (chatoyancy)، مما يخلق وهم ضوء حي يتنفس داخل الحجر.

على مرّ القرون، حمل المحاربون عين النمر في المعارك طلباً للشجاعة، وارتداه التجار سعياً للازدهار. واليوم، يبقى من أقوى الأحجار لمن يبحث عن الوضوح الذهني وقوة الإرادة.

هذا الحجر لا يستعجل. يُرسّخ الأقدام. يُثبّت. يذكّرك بأنك قادر على أكثر مما تعتقد.`,
    },
    pullQuote: {
      en: "Wear it when the world asks you to be smaller than you are.",
      tr: "Dünya senden daha küçük olmanı istediğinde tak.",
      ar: "ارتده حين يطلب منك العالم أن تكون أصغر مما أنت عليه.",
    },
    image: "/images/products/set-tigers-eye-diamond-2.jpg",
    thumbnail: "/images/products/ring-tigers-eye-nature.jpg",
    color: "#8B5E3C",
    properties: {
      energy: {
        en: "Strength, Courage, Clarity",
        tr: "Güç, Cesaret, Netlik",
        ar: "القوة، الشجاعة، الوضوح",
      },
      chakra: {
        en: "Solar Plexus & Root",
        tr: "Güneş Sinir Ağı ve Kök",
        ar: "الضفيرة الشمسية والجذر",
      },
      zodiac: {
        en: "Capricorn, Leo",
        tr: "Oğlak, Aslan",
        ar: "الجدي، الأسد",
      },
      element: {
        en: "Earth & Fire",
        tr: "Toprak ve Ateş",
        ar: "الأرض والنار",
      },
      idealFor: {
        en: "Confidence, Focus, Decision-Making",
        tr: "Özgüven, Odak, Karar Verme",
        ar: "الثقة بالنفس، التركيز، اتخاذ القرار",
      },
      origin: "South Africa, Australia, India",
    },
    benefits: [
      { en: "Enhances mental clarity and focused thinking", tr: "Zihinsel netliği ve odaklanmış düşünceyi artırır", ar: "يعزز الوضوح الذهني والتفكير المركّز" },
      { en: "Builds courage and self-confidence", tr: "Cesaret ve öz güveni pekiştirir", ar: "يبني الشجاعة والثقة بالنفس" },
      { en: "Grounds anxious or scattered energy", tr: "Kaygılı veya dağınık enerjiyi dengeler", ar: "يُرسّخ الطاقة القلقة أو المتشتتة" },
      { en: "Supports clear, decisive action", tr: "Net ve kararlı eylemi destekler", ar: "يدعم العمل الواضح والحاسم" },
      { en: "Attracts prosperity and abundance", tr: "Bolluk ve refahı çeker", ar: "يجلب الازدهار والوفرة" },
      { en: "Protects against negative energies", tr: "Olumsuz enerjilerden korur", ar: "يحمي من الطاقات السلبية" },
    ],
    careInstructions: [
      { en: "Avoid prolonged exposure to direct sunlight — may fade colour over time", tr: "Doğrudan güneş ışığına uzun süre maruz bırakmayın — zaman içinde rengini solabilir", ar: "تجنب التعرض المطوّل لأشعة الشمس المباشرة" },
      { en: "Cleanse monthly under running water for 30 seconds", tr: "Aylık olarak 30 saniye akar su altında temizleyin", ar: "نظّفه شهرياً تحت الماء الجاري لمدة 30 ثانية" },
      { en: "Recharge by placing on natural earth or stone overnight", tr: "Doğal toprak veya taş üzerinde bir gece bırakarak şarj edin", ar: "اشحنه بوضعه على التراب الطبيعي طوال الليل" },
      { en: "Avoid contact with perfume, oils, and harsh chemicals", tr: "Parfüm, yağ ve sert kimyasallardan uzak tutun", ar: "تجنب ملامسة العطور والزيوت والمواد الكيميائية" },
      { en: "Store in the included velvet pouch when not wearing", tr: "Takmadığınızda dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق عند عدم الاستخدام" },
    ],
    pairsWith: ["green-aventurine", "obsidian", "jade"],
    accentColor: "#C9A050",
  },

  // ─── HOWLITE ────────────────────────────────────────────────────────────────
  {
    slug: "howlite",
    stoneType: "howlite",
    name: {
      en: "Howlite",
      tr: "Hovlit",
      ar: "هاولايت",
    },
    subtitle: {
      en: "The Stone of Calm & Patience",
      tr: "Huzur ve Sabır Taşı",
      ar: "حجر الهدوء والصبر",
    },
    summary: {
      en: "White as marble, veined like a quiet mind at rest. Howlite is the stone of stillness — it calms emotional storms, eases stress, and creates space for clarity where there was once chaos.",
      tr: "Mermer gibi beyaz, sakin bir zihin gibi damarlı. Hovlit, sessizliğin taşıdır — duygusal fırtınaları yatıştırır, stresi azaltır ve bir zamanlar kaosun hüküm sürdüğü yerde netlik için alan açar.",
      ar: "أبيض كالرخام، مُعرَّق كعقل هادئ في سكون. هاولايت هو حجر السكينة — يهدّئ العواصف العاطفية ويخلق مساحة للوضوح.",
    },
    description: {
      en: `Howlite is immediately recognisable — pure white with delicate grey veining that runs through it like the paths of still water. It is one of the most serene stones in the crystal world, and its energy reflects its appearance perfectly.

This is a stone for those who carry too much. Too many thoughts, too much worry, too many sleepless nights turning over what might have been said differently. Howlite absorbs that weight. It quiets the mental chatter that keeps you from peace.

Healers have long used Howlite to reduce anger, fear, and anxiety. Parents carry it. Students wear it before exams. Anyone who has ever needed to slow down and breathe has found a companion in this stone.

It also supports patience — not the passive kind, but the active, confident patience of someone who knows that the right moment is coming. Howlite reminds you that stillness is not weakness. It is wisdom.`,
      tr: `Hovlit hemen tanınır — içinden sessiz su yolları gibi geçen ince gri damarlarıyla saf beyaz. Kristal dünyasının en dingin taşlarından biridir ve enerjisi görünüşünü mükemmel biçimde yansıtır.

Bu, çok fazla şey taşıyanlar için bir taştır. Çok fazla düşünce, çok fazla endişe, söylenebileceklerin farklı söylenip söylenmeyeceğini döndüren pek çok uykusuz gece. Hovlit bu yükü emer. Sizi huzurdan alıkoyan zihinsel gürültüyü susturur.

Şifacılar uzun zamandır Hovlit'i öfke, korku ve kaygıyı azaltmak için kullanır. Ebeveynler taşır. Öğrenciler sınav öncesinde giyerek gelir. Bir adım geri çekilip nefes almaya ihtiyaç duyan herkes bu taşta bir yol arkadaşı bulmuştur.

Ayrıca sabırlı olmayı destekler — pasif türden değil, doğru anın geleceğini bilen birinin aktif, güvenli sabrı. Hovlit, sessizliğin zayıflık olmadığını hatırlatır. Bilgeliktir.`,
      ar: `هاولايت سهل التعرف عليه — أبيض ناصع بتعرقات رمادية دقيقة. إنه من أكثر الأحجار هدوءاً في عالم الكريستال.

هذا حجر لمن يحملون الكثير. أفكاراً كثيرة، وقلقاً كثيراً، وليالٍ بلا نوم. هاولايت يمتص ذلك الثقل ويُسكت الضوضاء الذهنية.`,
    },
    pullQuote: {
      en: "In a world that never stops, Howlite teaches you to be still.",
      tr: "Hiç durmayan bir dünyada Hovlit size durmasını öğretir.",
      ar: "في عالم لا يتوقف، يعلّمك هاولايت أن تسكن.",
    },
    image: "/images/products/set-howlite-teardrop-2.jpg",
    thumbnail: "/images/products/set-howlite-teardrop-1.jpg",
    color: "#D8D4CE",
    properties: {
      energy: {
        en: "Calm, Patience, Clarity",
        tr: "Huzur, Sabır, Netlik",
        ar: "الهدوء، الصبر، الوضوح",
      },
      chakra: {
        en: "Crown",
        tr: "Taç",
        ar: "تاج الرأس",
      },
      zodiac: {
        en: "Gemini",
        tr: "İkizler",
        ar: "الجوزاء",
      },
      element: {
        en: "Air",
        tr: "Hava",
        ar: "الهواء",
      },
      idealFor: {
        en: "Stress Relief, Better Sleep, Emotional Balance",
        tr: "Stres Giderme, Daha İyi Uyku, Duygusal Denge",
        ar: "تخفيف التوتر، النوم الأفضل، التوازن العاطفي",
      },
      origin: "Canada, United States",
    },
    benefits: [
      { en: "Calms an overactive or anxious mind", tr: "Aşırı aktif veya kaygılı bir zihni yatıştırır", ar: "يهدّئ العقل المفرط النشاط أو القلق" },
      { en: "Eases emotional anger and frustration", tr: "Duygusal öfke ve hayal kırıklığını azaltır", ar: "يخفف الغضب العاطفي والإحباط" },
      { en: "Supports restful, deeper sleep", tr: "Dinlendirici ve derin uykuyu destekler", ar: "يدعم النوم العميق والمريح" },
      { en: "Encourages patience in difficult situations", tr: "Zor durumlarda sabrı teşvik eder", ar: "يشجع الصبر في المواقف الصعبة" },
      { en: "Opens the mind to new perspectives", tr: "Zihni yeni bakış açılarına açar", ar: "يفتح العقل على آفاق جديدة" },
      { en: "Absorbs and neutralises negative energy", tr: "Olumsuz enerjiyi emer ve etkisiz hale getirir", ar: "يمتص الطاقة السلبية ويحيّدها" },
    ],
    careInstructions: [
      { en: "Howlite is porous — avoid submerging in water", tr: "Hovlit gözenek içerir — suya batırmayın", ar: "هاولايت مسامي — تجنب غمره في الماء" },
      { en: "Wipe gently with a dry or slightly damp soft cloth", tr: "Kuru veya hafif nemli yumuşak bir bezle nazikçe silin", ar: "امسحه برفق بقطعة قماش ناعمة جافة أو مبللة قليلاً" },
      { en: "Recharge under the full moon overnight", tr: "Dolunay altında bir gece bekletip şarj edin", ar: "اشحنه تحت ضوء القمر الكامل طوال الليل" },
      { en: "Avoid contact with perfumes, chemicals, and oils", tr: "Parfüm, kimyasal ve yağlarla temastan kaçının", ar: "تجنب ملامسة العطور والمواد الكيميائية والزيوت" },
      { en: "Store in the included velvet pouch between wears", tr: "Giymeler arasında dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق بين أوقات الارتداء" },
    ],
    pairsWith: ["moonstone", "clear-quartz", "jade"],
    accentColor: "#9E9189",
  },

  // ─── GREEN AVENTURINE ────────────────────────────────────────────────────────
  {
    slug: "green-aventurine",
    stoneType: "green-aventurine",
    name: {
      en: "Green Aventurine",
      tr: "Yeşil Aventurin",
      ar: "أفنتورين أخضر",
    },
    subtitle: {
      en: "The Stone of Luck & Growth",
      tr: "Şans ve Büyüme Taşı",
      ar: "حجر الحظ والنمو",
    },
    summary: {
      en: "Rich, deep green with a shimmer that catches light like morning dew on leaves. Aventurine is the stone of opportunity — it opens doors, invites luck, and encourages the heart to grow.",
      tr: "Yapraklardaki sabah çiğini yakalayan bir parıltıyla zengin, koyu yeşil. Aventurin fırsat taşıdır — kapıları açar, şans davet eder ve kalbin büyümesini teşvik eder.",
      ar: "أخضر عميق غني مع بريق يلتقط الضوء كالندى الصباحي على الأوراق. الأفنتورين هو حجر الفرص — يفتح الأبواب ويدعو الحظ.",
    },
    description: {
      en: `Green Aventurine is known throughout the crystal world as the stone of luck — and with good reason. Its deep forest green, flecked with golden aventurescence, carries the energy of growth, abundance, and new beginnings.

But Aventurine is not about passive luck. It is about recognising opportunity when it appears, having the heart-centred confidence to act, and remaining open to the abundance that life is always trying to offer. It does not create luck. It aligns you with it.

Aventurine works with the Heart Chakra, making it one of the most emotionally supportive stones available. It soothes grief, invites optimism, and gently encourages you to take the next step — even when that step is uncertain.

Wear Green Aventurine when you are beginning something new — a business, a relationship, a chapter. Let it remind you that growth is always possible, and that the earth itself began as something unformed and became everything beautiful.`,
      tr: `Yeşil Aventurin, kristal dünyasında şans taşı olarak bilinir — ve buna iyi bir neden var. Altın renkli parıltılarla bezenmiş derin orman yeşili, büyüme, bolluk ve yeni başlangıçların enerjisini taşır.

Ancak Aventurin pasif şansla ilgili değildir. Fırsat göründüğünde onu tanımak, kalp merkezli özgüvenle harekete geçmek ve yaşamın her zaman sunmaya çalıştığı bolluğa açık kalmakla ilgilidir. Şans yaratmaz. Sizi onunla hizalar.

Aventurin Kalp Çakrası ile çalışır ve bu da onu mevcut en duygusal açıdan destekleyici taşlardan biri yapar. Kederi yatıştırır, iyimserliği davet eder ve bir sonraki adımı atmak için — o adım belirsiz bile olsa — sizi nazikçe teşvik eder.

Yeni bir şeye başladığınızda — bir iş, bir ilişki, bir bölüm — Yeşil Aventurin'i takın. Size büyümenin her zaman mümkün olduğunu ve yeryüzünün kendisinin şekilsiz bir şey olarak başlayıp güzel olan her şeye dönüştüğünü hatırlatsın.`,
      ar: `الأفنتورين الأخضر معروف في عالم الكريستال بأنه حجر الحظ. أخضره الداكن يحمل طاقة النمو والوفرة والبدايات الجديدة.

لكن الأفنتورين لا يتعلق بالحظ السلبي. بل يتعلق بالتعرف على الفرص حين تظهر، والثقة بالنفس للتصرف. إنه لا يخلق الحظ — بل يوافقك معه.`,
    },
    pullQuote: {
      en: "Luck is not chance. It is alignment. Aventurine helps you find yours.",
      tr: "Şans tesadüf değildir. Uyumdur. Aventurin sizinkini bulmanıza yardımcı olur.",
      ar: "الحظ ليس مصادفة. إنه توافق. الأفنتورين يساعدك على إيجاد توافقك.",
    },
    image: "/images/products/set-aventurine-heart-2.jpg",
    thumbnail: "/images/products/set-aventurine-heart-1.jpg",
    color: "#4A6B52",
    properties: {
      energy: {
        en: "Luck, Growth, Heart Healing",
        tr: "Şans, Büyüme, Kalp İyileşmesi",
        ar: "الحظ، النمو، شفاء القلب",
      },
      chakra: {
        en: "Heart",
        tr: "Kalp",
        ar: "القلب",
      },
      zodiac: {
        en: "Taurus, Libra",
        tr: "Boğa, Terazi",
        ar: "الثور، الميزان",
      },
      element: {
        en: "Earth",
        tr: "Toprak",
        ar: "الأرض",
      },
      idealFor: {
        en: "New Beginnings, Abundance, Emotional Healing",
        tr: "Yeni Başlangıçlar, Bolluk, Duygusal İyileşme",
        ar: "البدايات الجديدة، الوفرة، الشفاء العاطفي",
      },
      origin: "India, Brazil, Russia",
    },
    benefits: [
      { en: "Invites luck and opportunity into daily life", tr: "Günlük hayata şans ve fırsatları davet eder", ar: "يدعو الحظ والفرص إلى الحياة اليومية" },
      { en: "Opens and heals the heart chakra", tr: "Kalp çakrasını açar ve iyileştirir", ar: "يفتح ويشفي شاكرا القلب" },
      { en: "Encourages optimism and emotional resilience", tr: "İyimserliği ve duygusal dayanıklılığı teşvik eder", ar: "يشجع التفاؤل والمرونة العاطفية" },
      { en: "Supports new beginnings and life transitions", tr: "Yeni başlangıçları ve hayat geçişlerini destekler", ar: "يدعم البدايات الجديدة والتحولات في الحياة" },
      { en: "Attracts abundance in love, career, and creativity", tr: "Aşkta, kariyerde ve yaratıcılıkta bolluğu çeker", ar: "يجلب الوفرة في الحب والعمل والإبداع" },
      { en: "Balances and harmonises emotional energy", tr: "Duygusal enerjiyi dengeler ve uyumlu kılar", ar: "يوازن الطاقة العاطفية وينسّقها" },
    ],
    careInstructions: [
      { en: "Cleanse under lukewarm running water monthly", tr: "Aylık olarak ılık akar su altında temizleyin", ar: "نظّفه شهرياً تحت الماء الفاتر الجاري" },
      { en: "Recharge on a windowsill in natural morning light", tr: "Pencere kenarında doğal sabah ışığında şarj edin", ar: "اشحنه على حافة النافذة في ضوء الصباح الطبيعي" },
      { en: "Avoid prolonged direct sunlight to preserve colour", tr: "Rengi korumak için uzun süreli doğrudan güneş ışığından kaçının", ar: "تجنب ضوء الشمس المباشر المطوّل للحفاظ على اللون" },
      { en: "Keep away from perfumes and chemical cleaners", tr: "Parfüm ve kimyasal temizleyicilerden uzak tutun", ar: "أبعده عن العطور والمنظفات الكيميائية" },
      { en: "Store in the included velvet pouch when not wearing", tr: "Takmadığınızda dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق عند عدم الارتداء" },
    ],
    pairsWith: ["tigers-eye", "clear-quartz", "jade"],
    accentColor: "#4A6B52",
  },

  // ─── JADE ───────────────────────────────────────────────────────────────────
  {
    slug: "jade",
    stoneType: "jade",
    name: {
      en: "Jade",
      tr: "Yeşim",
      ar: "اليشم",
    },
    subtitle: {
      en: "The Stone of Harmony & Healing",
      tr: "Uyum ve Şifa Taşı",
      ar: "حجر الانسجام والشفاء",
    },
    summary: {
      en: "Worn by emperors and healers for five thousand years. Jade is the stone of wisdom, longevity, and profound inner balance — connecting you to the timeless energy of the natural world.",
      tr: "İmparatorlar ve şifacılar tarafından beş bin yıldır giyilmiş. Yeşim, bilgelik, uzun ömür ve derin iç dengesinin taşıdır — sizi doğal dünyanın zamansız enerjisiyle bağlar.",
      ar: "ارتداه الأباطرة والمعالجون لخمسة آلاف سنة. اليشم هو حجر الحكمة وطول العمر والتوازن الداخلي العميق.",
    },
    description: {
      en: `Few stones carry the history that Jade does. For over five thousand years — across Chinese dynasties, Mayan temples, and Maori traditions — Jade has been revered as the most precious of all stones. Not for its rarity, but for what it represents: life, health, prosperity, and the harmony between human and earth.

Jade is a stone of deep wisdom. It does not work quickly or dramatically. It works the way great change always works — slowly, surely, from the inside out. It reminds you that true wellness is not a destination but a practice, and that the most valuable things in life cannot be hurried.

The Heart Chakra is Jade's home. It soothes. It balances. It dissolves patterns that no longer serve you, gently and without force. Those who wear Jade often report a growing sense of peace — not the absence of difficulty, but the presence of resilience.

Jade has protected kings and commoners alike. Wear it as your ancestors have for millennia — as a symbol of what endures.`,
      tr: `Yeşim gibi bir tarihe sahip taş azdır. Beş bin yılı aşkın süre boyunca — Çin hanedanlıklarında, Maya tapınaklarında ve Maori geleneklerinde — Yeşim en değerli taş olarak saygı görmüştür. Nadirliği için değil, temsil ettiği şeyler için: yaşam, sağlık, refah ve insan ile toprak arasındaki uyum.

Yeşim derin bir bilgelik taşıdır. Hızlı veya dramatik çalışmaz. Büyük değişimin her zaman işlediği şekilde çalışır — yavaş, güvenli, içten dışa. Size gerçek iyiliğin bir varış noktası değil, bir pratik olduğunu ve hayattaki en değerli şeylerin acele ettirilemeyeceğini hatırlatır.

Kalp Çakrası, Yeşim'in evidir. Yatıştırır. Dengeler. Size artık hizmet etmeyen kalıpları nazikçe ve zorlama olmadan çözer. Yeşim takanlar çoğunlukla artan bir huzur hissi bildirirler — zorluğun yokluğu değil, direncin varlığı.

Yeşim, hem krallara hem de sıradan insanlara hizmet etmiştir. Onu ataları gibi giyin — yüzyıllar boyu dayanıklılığın simgesi olarak.`,
      ar: `قليلة هي الأحجار التي تحمل تاريخ اليشم. لأكثر من خمسة آلاف سنة، عبر أسرات الصين ومعابد المايا والتقاليد الماورية، حظي اليشم بالتبجيل بوصفه أثمن الأحجار.

اليشم حجر حكمة عميقة. لا يعمل بسرعة أو بشكل درامي، بل يعمل كما تعمل التغيرات الكبرى دائماً — ببطء وثبات، من الداخل للخارج.`,
    },
    pullQuote: {
      en: "Five thousand years of wisdom, worn at the wrist.",
      tr: "Beş bin yıllık bilgelik, bileğinizde.",
      ar: "خمسة آلاف سنة من الحكمة، تُرتدى على المعصم.",
    },
    image: "/images/products/set-aventurine-heart-2.jpg",
    thumbnail: "/images/products/ring-jade-nature.jpg",
    color: "#4A7B5A",
    properties: {
      energy: {
        en: "Harmony, Wisdom, Protection",
        tr: "Uyum, Bilgelik, Koruma",
        ar: "الانسجام، الحكمة، الحماية",
      },
      chakra: {
        en: "Heart",
        tr: "Kalp",
        ar: "القلب",
      },
      zodiac: {
        en: "Taurus, Libra, Virgo",
        tr: "Boğa, Terazi, Başak",
        ar: "الثور، الميزان، العذراء",
      },
      element: {
        en: "Earth",
        tr: "Toprak",
        ar: "الأرض",
      },
      idealFor: {
        en: "Balance, Longevity, Inner Peace",
        tr: "Denge, Uzun Ömür, İç Huzuru",
        ar: "التوازن، طول العمر، السلام الداخلي",
      },
      origin: "Myanmar, China, New Zealand",
    },
    benefits: [
      { en: "Promotes deep emotional and physical harmony", tr: "Derin duygusal ve fiziksel uyumu teşvik eder", ar: "يعزز الانسجام العاطفي والجسدي العميق" },
      { en: "Invites wisdom and balanced decision-making", tr: "Bilgeliği ve dengeli karar almayı davet eder", ar: "يدعو إلى الحكمة واتخاذ القرارات المتوازنة" },
      { en: "Protects against negative energy and harm", tr: "Olumsuz enerji ve zarardan korur", ar: "يحمي من الطاقة السلبية والأذى" },
      { en: "Supports longevity and physical well-being", tr: "Uzun ömür ve fiziksel sağlığı destekler", ar: "يدعم طول العمر والعافية الجسدية" },
      { en: "Encourages self-sufficiency and self-trust", tr: "Öz yeterliliği ve öz güveni teşvik eder", ar: "يشجع الاكتفاء الذاتي والثقة بالنفس" },
      { en: "Attracts good fortune and prosperity", tr: "İyi talih ve refahı çeker", ar: "يجلب الحظ السعيد والازدهار" },
    ],
    careInstructions: [
      { en: "Cleanse with lukewarm water and a soft cloth monthly", tr: "Aylık olarak ılık su ve yumuşak bir bezle temizleyin", ar: "نظّفه شهرياً بالماء الفاتر وقطعة قماش ناعمة" },
      { en: "Recharge by placing in natural earth for a few hours", tr: "Birkaç saat doğal toprakta bırakarak şarj edin", ar: "اشحنه بوضعه في التراب الطبيعي لبضع ساعات" },
      { en: "Avoid harsh chemicals and abrasive cleaning", tr: "Sert kimyasallar ve aşındırıcı temizlemeden kaçının", ar: "تجنب المواد الكيميائية القاسية والتنظيف الكاشط" },
      { en: "Keep out of prolonged direct sunlight", tr: "Uzun süreli doğrudan güneş ışığından uzak tutun", ar: "أبعده عن ضوء الشمس المباشر المطوّل" },
      { en: "Store in the included velvet pouch between wears", tr: "Giymeler arasında dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق بين أوقات الارتداء" },
    ],
    pairsWith: ["howlite", "green-aventurine", "moonstone"],
    accentColor: "#4A6B52",
  },

  // ─── MOONSTONE ──────────────────────────────────────────────────────────────
  {
    slug: "moonstone",
    stoneType: "moonstone",
    name: {
      en: "Moonstone",
      tr: "Ay Taşı",
      ar: "حجر القمر",
    },
    subtitle: {
      en: "The Stone of Intuition & New Beginnings",
      tr: "Sezgi ve Yeni Başlangıçlar Taşı",
      ar: "حجر الحدس والبدايات الجديدة",
    },
    summary: {
      en: "Soft as moonlight, translucent as a dream half-remembered. Moonstone connects you to the cycles of nature, the wisdom of intuition, and the quiet power of beginning again.",
      tr: "Ay ışığı kadar yumuşak, yarım hatırlanan bir rüya kadar saydam. Ay Taşı sizi doğanın döngüleriyle, sezginin bilgeliğiyle ve yeniden başlamanın sessiz gücüyle bağlar.",
      ar: "ناعم كضوء القمر، شفاف كحلم نصف منسي. حجر القمر يربطك بدورات الطبيعة وحكمة الحدس.",
    },
    description: {
      en: `Moonstone glows from within. Its surface shimmers with a phenomenon called adularescence — a floating, ghostly light that moves as you turn the stone, as if the moon itself were caught inside.

This is not a stone of force or fire. Moonstone is feminine, intuitive, and deeply connected to the rhythms of the natural world — the tides, the seasons, the cycles of beginning and release that govern all living things.

For centuries, Moonstone was considered a sacred gift — worn by lovers, carried by travellers, placed in the hands of those standing at thresholds. It does not tell you where to go. It illuminates the path you already know.

Those drawn to Moonstone are often at a transition. Something is beginning, or something is ending. Moonstone holds that space with grace. It encourages trust in yourself — in your knowing, your feeling, your quiet inner voice that speaks most clearly when you stop and listen.

Wear Moonstone when you are ready to trust what you already know.`,
      tr: `Ay Taşı içten ışıldar. Yüzeyi adularesans adı verilen bir fenomenle titreşir — taşı çevirirken hareket eden, yüzen, hayaletimsi bir ışık sanki ayın kendisi içine kapanmış gibi.

Bu, güç veya ateşin taşı değildir. Ay Taşı dişil, sezgisel ve doğal dünyanın ritimlerine — gelgitlere, mevsimlere, tüm canlıları yöneten başlangıç ve bırakış döngülerine — derinden bağlıdır.

Yüzyıllar boyunca Ay Taşı kutsal bir hediye olarak görüldü — sevgililer tarafından giyildi, gezginler tarafından taşındı, eşiklerde duranlara verildi. Size nereye gideceğinizi söylemez. Halihazırda bildiğiniz yolu aydınlatır.

Ay Taşı'na çekilen insanlar çoğunlukla bir geçiştedir. Bir şey başlıyor ya da bir şey bitiyor. Ay Taşı bu alanı incelikle tutar. Kendinize — bilginize, hislerinize, durduğunuzda ve dinlediğinizde en net konuşan sessiz iç sesinize — güvenmenizi teşvik eder.

Halihazırda bildiklerinize güvenmeye hazır olduğunuzda Ay Taşı'nı takın.`,
      ar: `حجر القمر يتوهج من الداخل. سطحه يتلألأ بظاهرة البريق القمري (adularescence) — ضوء عائم يتحرك مع دوران الحجر.

هذا ليس حجر القوة أو النار. حجر القمر أنثوي، حدسي، مرتبط عميقاً بإيقاعات الطبيعة. لا يخبرك أين تذهب — بل ينير المسار الذي تعرفه في الداخل بالفعل.`,
    },
    pullQuote: {
      en: "Not all light comes from the sun. Some comes from within.",
      tr: "Tüm ışık güneşten gelmez. Kimileri içeriden gelir.",
      ar: "ليس كل الضوء يأتي من الشمس. بعضه يأتي من الداخل.",
    },
    image: "/images/products/set-moonstone-jade-spike.jpg",
    thumbnail: "/images/products/ring-moonstone-nature.jpg",
    color: "#E8E4DE",
    properties: {
      energy: {
        en: "Intuition, Femininity, New Beginnings",
        tr: "Sezgi, Feminen Enerji, Yeni Başlangıçlar",
        ar: "الحدس، الأنوثة، البدايات الجديدة",
      },
      chakra: {
        en: "Crown & Third Eye",
        tr: "Taç ve Üçüncü Göz",
        ar: "تاج الرأس والعين الثالثة",
      },
      zodiac: {
        en: "Cancer, Libra, Scorpio",
        tr: "Yengeç, Terazi, Akrep",
        ar: "السرطان، الميزان، العقرب",
      },
      element: {
        en: "Water",
        tr: "Su",
        ar: "الماء",
      },
      idealFor: {
        en: "Intuition, Emotional Cycles, New Chapters",
        tr: "Sezgi, Duygusal Döngüler, Yeni Bölümler",
        ar: "الحدس، الدورات العاطفية، الفصول الجديدة",
      },
      origin: "India, Sri Lanka, Madagascar",
    },
    benefits: [
      { en: "Heightens intuition and inner knowing", tr: "Sezgiyi ve iç bilgiyi güçlendirir", ar: "يعزز الحدس والمعرفة الداخلية" },
      { en: "Supports emotional balance through life cycles", tr: "Yaşam döngüleri boyunca duygusal dengeyi destekler", ar: "يدعم التوازن العاطفي عبر دورات الحياة" },
      { en: "Encourages new beginnings with grace", tr: "Yeni başlangıçları zarafetle teşvik eder", ar: "يشجع البدايات الجديدة بنعمة" },
      { en: "Connects you to feminine wisdom and creativity", tr: "Sizi dişil bilgelik ve yaratıcılıkla bağlar", ar: "يربطك بالحكمة الأنثوية والإبداع" },
      { en: "Soothes emotional overwhelm and hormonal shifts", tr: "Duygusal bunalmayı ve hormonal değişimleri yatıştırır", ar: "يهدّئ الانهيار العاطفي والتقلبات الهرمونية" },
      { en: "Deepens meditation and dream awareness", tr: "Meditasyonu ve rüya bilincini derinleştirir", ar: "يعمّق التأمل والوعي بالأحلام" },
    ],
    careInstructions: [
      { en: "Cleanse with a soft dry cloth — Moonstone prefers gentle care", tr: "Yumuşak kuru bir bezle temizleyin — Ay Taşı nazik bakım ister", ar: "نظّفه بقطعة قماش ناعمة جافة — حجر القمر يفضل العناية اللطيفة" },
      { en: "Recharge under the light of a full moon overnight", tr: "Bir gece boyunca dolunay ışığı altında şarj edin", ar: "اشحنه تحت ضوء القمر الكامل طوال الليل" },
      { en: "Avoid water immersion and harsh chemicals", tr: "Su daldırma ve sert kimyasallardan kaçının", ar: "تجنب الغمر في الماء والمواد الكيميائية القاسية" },
      { en: "Keep away from direct sunlight for extended periods", tr: "Uzun süre doğrudan güneş ışığından uzak tutun", ar: "أبعده عن ضوء الشمس المباشر لفترات طويلة" },
      { en: "Store in the included velvet pouch to protect its surface", tr: "Yüzeyini korumak için dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق لحماية سطحه" },
    ],
    pairsWith: ["howlite", "clear-quartz", "jade"],
    accentColor: "#9E9189",
  },
];

/** Returns a crystal by slug */
export function getCrystalBySlug(slug: string): Crystal | undefined {
  return crystals.find((c) => c.slug === slug);
}

/** Returns a crystal by stone type */
export function getCrystalByType(stoneType: string): Crystal | undefined {
  return crystals.find((c) => c.stoneType === stoneType);
}
