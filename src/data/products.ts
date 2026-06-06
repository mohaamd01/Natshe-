import type { Product } from "@/types/product";

export const products: Product[] = [
  // ─── CRYSTAL SETS ───────────────────────────────────────────────────────────
  {
    id: "set-tigers-eye-diamond",
    slug: "tigers-eye-diamond-bracelet-necklace-set",
    name: {
      en: "Tiger's Eye Diamond Set",
      tr: "Kaplan Gözü Elmas Set",
      ar: "طقم عين النمر الماسي",
    },
    shortDescription: {
      en: "Matching Tiger's Eye bracelet and geometric diamond pendant necklace.",
      tr: "Eşleşen Kaplan Gözü bileklik ve geometrik elmas kolye seti.",
      ar: "سوار وعقد بقلادة ماسية هندسية من عين النمر المتناسقة.",
    },
    description: {
      en: "This striking set pairs a natural Tiger's Eye beaded bracelet with a faceted diamond-cut Tiger's Eye pendant on an adjustable black cord. Each bead displays the stone's signature golden-brown chatoyancy — the living light that has made Tiger's Eye one of the most revered stones in the world. Wear it as a daily reminder of your strength.",
      tr: "Bu çarpıcı set, doğal Kaplan Gözü boncuk bilekliği ile ayarlanabilir siyah kordon üzerinde fasetli elmas kesim Kaplan Gözü kolye ucuyla eşleştirir. Her boncuk, Kaplan Gözü'nü dünyanın en saygın taşlarından biri yapan imza altın-kahverengi chatoyancy'yi — o yaşayan ışığı — sergiler. Gücünüzün günlük hatırlatıcısı olarak giyebileceğiniz bir set.",
      ar: "يجمع هذا الطقم المذهل سوار خرز عين النمر الطبيعي مع قلادة عين النمر المقطوعة على شكل ماس. كل خرزة تعرض البريق الذهبي البني المميز للحجر. ارتده كتذكير يومي بقوتك.",
    },
    price: 42,
    category: "crystal-sets",
    stone: "tigers-eye",
    stoneName: {
      en: "Tiger's Eye",
      tr: "Kaplan Gözü",
      ar: "عين النمر",
    },
    images: [
      { src: "/images/products/set-tigers-eye-diamond-2.jpg", alt: "Tiger's Eye Diamond Set — styled flat lay" },
      { src: "/images/products/set-tigers-eye-diamond-1.jpg", alt: "Tiger's Eye Diamond Set — detail view" },
    ],
    includes: [
      { en: "Natural Tiger's Eye beaded bracelet (8mm beads)", tr: "Doğal Kaplan Gözü boncuk bileklik (8mm boncuklar)", ar: "سوار خرز عين النمر الطبيعي (خرز 8 مم)" },
      { en: "Tiger's Eye faceted diamond pendant", tr: "Kaplan Gözü fasetli elmas kolye ucu", ar: "قلادة عين النمر المقطوعة على شكل ماس" },
      { en: "Adjustable black waxed cord necklace", tr: "Ayarlanabilir siyah balmumu ip kolye", ar: "قلادة حبل شمعي أسود قابل للتعديل" },
      { en: "Silver-tone accent bead", tr: "Gümüş ton aksesuar boncuk", ar: "خرزة تمييز بلون فضي" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Strength, Courage, Clarity", tr: "Güç, Cesaret, Netlik", ar: "القوة، الشجاعة، الوضوح" },
      chakra: { en: "Solar Plexus", tr: "Güneş Sinir Ağı", ar: "الضفيرة الشمسية" },
      idealFor: { en: "Confidence & Focus", tr: "Özgüven ve Odak", ar: "الثقة بالنفس والتركيز" },
      material: { en: "100% Natural Tiger's Eye", tr: "100% Doğal Kaplan Gözü", ar: "عين النمر الطبيعي 100%" },
    },
    careInstructions: [
      { en: "Avoid contact with water, perfume, and oils", tr: "Su, parfüm ve yağlarla temastan kaçının", ar: "تجنب ملامسة الماء والعطور والزيوت" },
      { en: "Cleanse monthly under moonlight", tr: "Aylık olarak ay ışığı altında temizleyin", ar: "نظّفه شهرياً تحت ضوء القمر" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["tigers-eye", "bracelet", "necklace", "set", "strength", "courage"],
    isBestSeller: true,
    isFeatured: true,
    collectionSlug: "tigers-eye-collection",
    relatedProductIds: ["set-tigers-eye-star", "ring-tigers-eye", "necklace-tigers-eye-wirewrapped"],
  },

  {
    id: "set-tigers-eye-star",
    slug: "tigers-eye-star-bracelet-necklace-set",
    name: {
      en: "Tiger's Eye Star Set",
      tr: "Kaplan Gözü Yıldız Set",
      ar: "طقم عين النمر النجمي",
    },
    shortDescription: {
      en: "Natural Tiger's Eye bracelet paired with a five-pointed star pendant.",
      tr: "Kaplan Gözü bileklik ile beş kollu yıldız kolye seti.",
      ar: "سوار عين النمر الطبيعي مع قلادة نجمة خماسية.",
    },
    description: {
      en: "A celestial pairing for the bold and the dreaming. The five-pointed Tiger's Eye star pendant swings from an adjustable black cord, while the beaded bracelet anchors you in grounded earth energy. This set bridges ambition and action — a reminder that you can reach for the stars and remain rooted at the same time.",
      tr: "Cesur ve hayalci olanlar için göksel bir ikili. Beş kollu Kaplan Gözü yıldız kolye ucu ayarlanabilir siyah kordonda sallanırken, boncuk bileklik sizi köklü toprak enerjisinde demirliyor. Bu set hırs ve eylemi köprüler — yıldızlara uzanırken ayakları yere basmaya devam edebileceğinizin hatırlatıcısı.",
      ar: "ثنائي سماوي للجريئين والحالمين. قلادة نجمة عين النمر خماسية مع سوار الخرز الذي يثبتك في طاقة الأرض الراسخة.",
    },
    price: 42,
    category: "crystal-sets",
    stone: "tigers-eye",
    stoneName: { en: "Tiger's Eye", tr: "Kaplan Gözü", ar: "عين النمر" },
    images: [
      { src: "/images/products/set-tigers-eye-star-2.jpg", alt: "Tiger's Eye Star Set — styled flat lay" },
      { src: "/images/products/set-tigers-eye-star-1.jpg", alt: "Tiger's Eye Star Set — product view" },
    ],
    includes: [
      { en: "Natural Tiger's Eye beaded bracelet (8mm beads)", tr: "Doğal Kaplan Gözü boncuk bileklik (8mm boncuklar)", ar: "سوار خرز عين النمر الطبيعي (خرز 8 مم)" },
      { en: "Tiger's Eye five-pointed star pendant", tr: "Kaplan Gözü beş kollu yıldız kolye ucu", ar: "قلادة نجمة خماسية من عين النمر" },
      { en: "Adjustable black waxed cord necklace", tr: "Ayarlanabilir siyah balmumu ip kolye", ar: "قلادة حبل شمعي أسود قابل للتعديل" },
      { en: "Silver-tone accent bead", tr: "Gümüş ton aksesuar boncuk", ar: "خرزة تمييز بلون فضي" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Ambition, Protection, Groundedness", tr: "Hırs, Koruma, Köklülük", ar: "الطموح، الحماية، الثبات" },
      chakra: { en: "Solar Plexus & Root", tr: "Güneş Sinir Ağı ve Kök", ar: "الضفيرة الشمسية والجذر" },
      idealFor: { en: "Goal-Setting & Manifestation", tr: "Hedef Belirleme ve Gerçekleştirme", ar: "تحديد الأهداف والتجلي" },
      material: { en: "100% Natural Tiger's Eye", tr: "100% Doğal Kaplan Gözü", ar: "عين النمر الطبيعي 100%" },
    },
    careInstructions: [
      { en: "Avoid contact with water, perfume, and oils", tr: "Su, parfüm ve yağlarla temastan kaçının", ar: "تجنب ملامسة الماء والعطور والزيوت" },
      { en: "Cleanse monthly under moonlight", tr: "Aylık olarak ay ışığı altında temizleyin", ar: "نظّفه شهرياً تحت ضوء القمر" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["tigers-eye", "bracelet", "necklace", "set", "star", "ambition"],
    isBestSeller: true,
    collectionSlug: "tigers-eye-collection",
    relatedProductIds: ["set-tigers-eye-diamond", "ring-tigers-eye"],
  },

  {
    id: "set-howlite-teardrop",
    slug: "howlite-teardrop-bracelet-necklace-set",
    name: {
      en: "Howlite Teardrop Set",
      tr: "Hovlit Gözyaşı Seti",
      ar: "طقم هاولايت الدمعة",
    },
    shortDescription: {
      en: "White Howlite bracelet with a smooth teardrop pendant — calm in motion.",
      tr: "Beyaz Hovlit bileklik ve düzgün gözyaşı kolye ucu — hareket halinde huzur.",
      ar: "سوار هاولايت الأبيض مع قلادة دمعة ناعمة — هدوء في الحركة.",
    },
    description: {
      en: "White as still water, veined with the quiet complexity of a settled mind. This Howlite set pairs a polished beaded bracelet with a smooth teardrop pendant — each piece a study in elegant simplicity. Howlite is worn for calm, for patience, for the moments when the world moves too fast and you need to remember how to breathe.",
      tr: "Durgun su kadar beyaz, sakin bir zihnin sessiz karmaşıklığıyla damarlı. Bu Hovlit seti, cilalı boncuk bilekliği pürüzsüz gözyaşı kolye ucuyla eşleştirir — her parça zarif sadeliğin bir çalışması. Hovlit, sakinlik için, sabır için, dünyanın çok hızlı hareket ettiği ve nefes almayı hatırlamanız gereken anlar için giyilir.",
      ar: "أبيض كالماء الراكد، مُعرَّق بالتعقيد الهادئ لعقل مستقر. يجمع هذا الطقم سوار خرز مصقول مع قلادة دمعة ناعمة.",
    },
    price: 38,
    category: "crystal-sets",
    stone: "howlite",
    stoneName: { en: "Howlite", tr: "Hovlit", ar: "هاولايت" },
    images: [
      { src: "/images/products/set-howlite-teardrop-2.jpg", alt: "Howlite Teardrop Set — styled flat lay" },
      { src: "/images/products/set-howlite-teardrop-1.jpg", alt: "Howlite Teardrop Set — product view" },
    ],
    includes: [
      { en: "Natural Howlite beaded bracelet (8mm beads)", tr: "Doğal Hovlit boncuk bileklik (8mm boncuklar)", ar: "سوار خرز هاولايت الطبيعي (خرز 8 مم)" },
      { en: "Howlite smooth teardrop pendant", tr: "Hovlit pürüzsüz gözyaşı kolye ucu", ar: "قلادة دمعة ناعمة من هاولايت" },
      { en: "Black waxed cord necklace with clasp", tr: "Klips kilitle siyah balmumu ip kolye", ar: "قلادة حبل شمعي أسود مع مشبك" },
      { en: "Silver-tone clasp hardware", tr: "Gümüş ton klips donanımı", ar: "إكسسوارات مشبك بلون فضي" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Calm, Patience, Clarity", tr: "Huzur, Sabır, Netlik", ar: "الهدوء، الصبر، الوضوح" },
      chakra: { en: "Crown", tr: "Taç", ar: "تاج الرأس" },
      idealFor: { en: "Stress Relief & Sleep", tr: "Stres Giderme ve Uyku", ar: "تخفيف التوتر والنوم" },
      material: { en: "100% Natural Howlite", tr: "100% Doğal Hovlit", ar: "هاولايت الطبيعي 100%" },
    },
    careInstructions: [
      { en: "Do not submerge in water — Howlite is porous", tr: "Suya batırmayın — Hovlit gözenek içerir", ar: "لا تغمره في الماء — هاولايت مسامي" },
      { en: "Wipe gently with a dry soft cloth", tr: "Kuru ve yumuşak bir bezle nazikçe silin", ar: "امسحه برفق بقطعة قماش ناعمة جافة" },
      { en: "Recharge under the full moon", tr: "Dolunay altında şarj edin", ar: "اشحنه تحت القمر الكامل" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["howlite", "bracelet", "necklace", "set", "calm", "stress", "white"],
    isBestSeller: true,
    collectionSlug: "howlite-collection",
    relatedProductIds: ["set-howlite-spike", "set-moonstone-spike"],
  },

  {
    id: "set-howlite-spike",
    slug: "howlite-spike-bracelet-necklace-set",
    name: {
      en: "Howlite Crystal Point Set",
      tr: "Hovlit Kristal Uç Seti",
      ar: "طقم هاولايت الكريستالي",
    },
    shortDescription: {
      en: "Howlite bracelet with a faceted crystal point pendant — clarity and peace.",
      tr: "Hovlit bileklik ve fasetli kristal uç kolye ucu — netlik ve huzur.",
      ar: "سوار هاولايت مع قلادة كريستالية متعددة الأوجه — وضوح وسلام.",
    },
    description: {
      en: "The crystal point is one of the most ancient and intentional forms in gemstone work — its facets draw and focus energy, making it a powerful companion for meditation, clarity, and intentional living. This Howlite Crystal Point Set combines that power with the stone's innate calming energy. Wear it when you need to find your centre.",
      tr: "Kristal uç, taş işçiliğindeki en kadim ve niyetli formlardan biridir — faseteleri enerjiyi çeker ve odaklar, bu da onu meditasyon, netlik ve niyetli yaşam için güçlü bir yol arkadaşı yapar. Bu Hovlit Kristal Uç Seti, bu gücü taşın doğasında var olan yatıştırıcı enerjiyle birleştirir. Merkezinizi bulmanız gerektiğinde takın.",
      ar: "نقطة الكريستال من أقدم الأشكال وأكثرها توجيهاً في عمل الأحجار الكريمة. يجمع هذا الطقم تلك القوة مع الطاقة المهدئة الفطرية لهاولايت.",
    },
    price: 38,
    category: "crystal-sets",
    stone: "howlite",
    stoneName: { en: "Howlite", tr: "Hovlit", ar: "هاولايت" },
    images: [
      { src: "/images/products/set-howlite-spike-2.jpg", alt: "Howlite Crystal Point Set — styled flat lay" },
      { src: "/images/products/set-howlite-spike-1.jpg", alt: "Howlite Crystal Point Set — product view" },
    ],
    includes: [
      { en: "Natural Howlite beaded bracelet (8mm beads)", tr: "Doğal Hovlit boncuk bileklik (8mm boncuklar)", ar: "سوار خرز هاولايت الطبيعي (خرز 8 مم)" },
      { en: "Howlite faceted crystal point pendant", tr: "Hovlit fasetli kristal uç kolye ucu", ar: "قلادة نقطة كريستال هاولايت المتعددة الأوجه" },
      { en: "Black waxed cord necklace", tr: "Siyah balmumu ip kolye", ar: "قلادة حبل شمعي أسود" },
      { en: "Silver-tone accent bead and hardware", tr: "Gümüş ton aksesuar boncuk ve donanım", ar: "خرزة تمييز وإكسسوارات بلون فضي" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Focus, Clarity, Calm", tr: "Odak, Netlik, Huzur", ar: "التركيز، الوضوح، الهدوء" },
      chakra: { en: "Crown", tr: "Taç", ar: "تاج الرأس" },
      idealFor: { en: "Meditation & Mental Clarity", tr: "Meditasyon ve Zihinsel Netlik", ar: "التأمل والوضوح الذهني" },
      material: { en: "100% Natural Howlite", tr: "100% Doğal Hovlit", ar: "هاولايت الطبيعي 100%" },
    },
    careInstructions: [
      { en: "Do not submerge in water — Howlite is porous", tr: "Suya batırmayın — Hovlit gözenek içerir", ar: "لا تغمره في الماء — هاولايت مسامي" },
      { en: "Wipe gently with a dry soft cloth", tr: "Kuru ve yumuşak bir bezle nazikçe silin", ar: "امسحه برفق بقطعة قماش ناعمة جافة" },
      { en: "Recharge under the full moon", tr: "Dolunay altında şarj edin", ar: "اشحنه تحت القمر الكامل" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["howlite", "bracelet", "necklace", "set", "crystal point", "meditation"],
    collectionSlug: "howlite-collection",
    relatedProductIds: ["set-howlite-teardrop", "set-moonstone-spike"],
  },

  {
    id: "set-aventurine-heart",
    slug: "aventurine-heart-bracelet-necklace-set",
    name: {
      en: "Aventurine Heart Set",
      tr: "Aventurin Kalp Seti",
      ar: "طقم الأفنتورين القلب",
    },
    shortDescription: {
      en: "Deep green Aventurine bracelet with a heart-shaped pendant — love and luck.",
      tr: "Derin yeşil Aventurin bileklik ve kalp şeklinde kolye ucu — sevgi ve şans.",
      ar: "سوار أفنتورين أخضر عميق مع قلادة على شكل قلب — حب وحظ.",
    },
    description: {
      en: "The heart is the most universal symbol of love, and Green Aventurine is the stone most associated with it. Together, they create a set that speaks directly to the heart — to its capacity for love, its resilience, its constant renewal. This set is a beautiful gift for yourself or for someone you love, on any occasion or none at all.",
      tr: "Kalp, sevginin en evrensel sembolüdür ve Yeşil Aventurin onunla en çok ilişkilendirilen taştır. Birlikte, doğrudan kalbe seslenen bir set oluştururlar — sevme kapasitesine, dayanıklılığına, sürekli yenilenmesine. Bu set, kendinize ya da sevdiğiniz birine, herhangi bir vesileyle ya da hiçbir neden olmaksızın güzel bir hediyedir.",
      ar: "القلب هو الرمز الأكثر عالمية للحب، والأفنتورين الأخضر هو الحجر الأكثر ارتباطاً به. معاً يخلقان طقماً يتحدث مباشرة إلى القلب.",
    },
    price: 40,
    category: "crystal-sets",
    stone: "green-aventurine",
    stoneName: { en: "Green Aventurine", tr: "Yeşil Aventurin", ar: "أفنتورين أخضر" },
    images: [
      { src: "/images/products/set-aventurine-heart-2.jpg", alt: "Aventurine Heart Set — styled flat lay" },
      { src: "/images/products/set-aventurine-heart-1.jpg", alt: "Aventurine Heart Set — product view" },
    ],
    includes: [
      { en: "Natural Green Aventurine beaded bracelet (8mm beads)", tr: "Doğal Yeşil Aventurin boncuk bileklik (8mm boncuklar)", ar: "سوار خرز أفنتورين أخضر طبيعي (خرز 8 مم)" },
      { en: "Green Aventurine polished heart pendant", tr: "Yeşil Aventurin cilalı kalp kolye ucu", ar: "قلادة قلب مصقول من الأفنتورين الأخضر" },
      { en: "Black waxed cord necklace", tr: "Siyah balmumu ip kolye", ar: "قلادة حبل شمعي أسود" },
      { en: "Silver-tone accent bead", tr: "Gümüş ton aksesuar boncuk", ar: "خرزة تمييز بلون فضي" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Love, Luck, Growth", tr: "Sevgi, Şans, Büyüme", ar: "الحب، الحظ، النمو" },
      chakra: { en: "Heart", tr: "Kalp", ar: "القلب" },
      idealFor: { en: "Love, New Beginnings & Gifting", tr: "Sevgi, Yeni Başlangıçlar ve Hediye", ar: "الحب والبدايات الجديدة والهدايا" },
      material: { en: "100% Natural Green Aventurine", tr: "100% Doğal Yeşil Aventurin", ar: "أفنتورين أخضر طبيعي 100%" },
    },
    careInstructions: [
      { en: "Cleanse under lukewarm running water monthly", tr: "Aylık olarak ılık akar su altında temizleyin", ar: "نظّفه شهرياً تحت الماء الفاتر الجاري" },
      { en: "Recharge in natural morning light", tr: "Doğal sabah ışığında şarj edin", ar: "اشحنه في ضوء الصباح الطبيعي" },
      { en: "Avoid prolonged direct sunlight", tr: "Uzun süreli doğrudan güneş ışığından kaçının", ar: "تجنب ضوء الشمس المباشر المطوّل" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["aventurine", "bracelet", "necklace", "set", "heart", "love", "green", "gift"],
    isBestSeller: true,
    isFeatured: true,
    collectionSlug: "aventurine-collection",
    relatedProductIds: ["set-jade-spike", "ring-jade"],
  },

  {
    id: "set-jade-spike",
    slug: "jade-crystal-point-bracelet-necklace-set",
    name: {
      en: "Jade Crystal Point Set",
      tr: "Yeşim Kristal Uç Seti",
      ar: "طقم يشم الكريستالي",
    },
    shortDescription: {
      en: "Soft mint Jade bracelet with a luminous crystal point pendant.",
      tr: "Açık mint Yeşim bileklik ve kristal uç kolye ucu.",
      ar: "سوار يشم نعناعي ناعم مع قلادة كريستال مضيئة.",
    },
    description: {
      en: "New Jade — also called Serpentine — carries a softer, quieter energy than its darker cousin, but no less powerful. This pale mint-green stone is one of the most gentle healers in the crystal world, inviting a deep sense of peace, clarity, and connection to the natural world. The crystal point pendant amplifies that energy beautifully.",
      tr: "Yeni Yeşim — Serpantinit olarak da bilinir — daha koyu kuzenine göre daha yumuşak ve sessiz ama hiç daha az güçlü olmayan bir enerji taşır. Bu açık mint-yeşil taş, kristal dünyasının en nazik şifacılarından biridir; derin bir huzur, netlik ve doğal dünyayla bağlantı duygusu davet eder. Kristal uç kolye ucu bu enerjiyi güzel bir şekilde güçlendirir.",
      ar: "اليشم الجديد — المعروف أيضاً بالسيرپنتين — يحمل طاقة أكثر هدوءاً ولطفاً. هذا الحجر الأخضر النعناعي الشاحب أحد أكثر الشافيين لطفاً في عالم الكريستال.",
    },
    price: 40,
    category: "crystal-sets",
    stone: "jade",
    stoneName: { en: "New Jade", tr: "Yeni Yeşim", ar: "يشم جديد" },
    images: [
      { src: "/images/products/set-jade-spike-1.jpg", alt: "Jade Crystal Point Set — product view" },
      { src: "/images/products/set-moonstone-jade-spike.jpg", alt: "Jade and Moonstone Set — styled" },
    ],
    includes: [
      { en: "Natural New Jade beaded bracelet (8mm beads)", tr: "Doğal Yeni Yeşim boncuk bileklik (8mm boncuklar)", ar: "سوار خرز يشم جديد طبيعي (خرز 8 مم)" },
      { en: "New Jade faceted crystal point pendant", tr: "Yeni Yeşim fasetli kristal uç kolye ucu", ar: "قلادة نقطة كريستال يشم جديد متعددة الأوجه" },
      { en: "Black waxed cord necklace", tr: "Siyah balmumu ip kolye", ar: "قلادة حبل شمعي أسود" },
      { en: "Silver-tone hardware", tr: "Gümüş ton donanım", ar: "إكسسوارات بلون فضي" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Peace, Healing, Clarity", tr: "Huzur, Şifa, Netlik", ar: "السلام، الشفاء، الوضوح" },
      chakra: { en: "Heart & Crown", tr: "Kalp ve Taç", ar: "القلب وتاج الرأس" },
      idealFor: { en: "Healing & Inner Balance", tr: "Şifa ve İç Denge", ar: "الشفاء والتوازن الداخلي" },
      material: { en: "100% Natural New Jade (Serpentine)", tr: "100% Doğal Yeni Yeşim (Serpantinit)", ar: "يشم جديد طبيعي 100% (سيرپنتين)" },
    },
    careInstructions: [
      { en: "Cleanse under lukewarm running water monthly", tr: "Aylık olarak ılık akar su altında temizleyin", ar: "نظّفه شهرياً تحت الماء الفاتر الجاري" },
      { en: "Recharge by placing on natural earth or stone", tr: "Doğal toprak veya taş üzerine koyarak şarj edin", ar: "اشحنه بوضعه على التراب الطبيعي أو الحجر" },
      { en: "Avoid harsh chemicals and perfumes", tr: "Sert kimyasallar ve parfümlerden kaçının", ar: "تجنب المواد الكيميائية القاسية والعطور" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["jade", "new jade", "bracelet", "necklace", "set", "crystal point", "healing"],
    collectionSlug: "jade-collection",
    relatedProductIds: ["set-aventurine-heart", "ring-jade"],
  },

  {
    id: "set-moonstone-spike",
    slug: "moonstone-crystal-point-bracelet-necklace-set",
    name: {
      en: "Moonstone Crystal Point Set",
      tr: "Ay Taşı Kristal Uç Seti",
      ar: "طقم حجر القمر الكريستالي",
    },
    shortDescription: {
      en: "Translucent white Moonstone bracelet with a glowing crystal point pendant.",
      tr: "Saydam beyaz Ay Taşı bileklik ve parlayan kristal uç kolye ucu.",
      ar: "سوار حجر قمر أبيض شفاف مع قلادة كريستال متوهجة.",
    },
    description: {
      en: "Translucent, luminous, and otherworldly — this Moonstone set glows with a quiet inner light. The clear beads of the bracelet catch and scatter light like water, while the crystal point pendant holds it, focused and still. For those who live by intuition, by feeling, by the quiet wisdom of the in-between: this is your stone.",
      tr: "Saydam, ışıltılı ve bu dünyadan değil gibi — bu Ay Taşı seti sessiz bir iç ışıkla parlar. Bilekliğin şeffaf boncukları ışığı su gibi yakalar ve saçarken, kristal uç kolye ucu onu odaklanmış ve sakin tutar. Sezgiyle, hisle, aradaki sessiz bilgelikle yaşayanlar için: bu sizin taşınız.",
      ar: "شفاف، مضيء، وعالمي المظهر — طقم حجر القمر هذا يتوهج بضوء داخلي هادئ. لمن يعيشون بالحدس والمشاعر والحكمة الهادئة.",
    },
    price: 44,
    category: "crystal-sets",
    stone: "moonstone",
    stoneName: { en: "Moonstone", tr: "Ay Taşı", ar: "حجر القمر" },
    images: [
      { src: "/images/products/set-moonstone-jade-spike.jpg", alt: "Moonstone Crystal Point Set — styled" },
      { src: "/images/products/ring-moonstone-nature.jpg", alt: "Moonstone in natural setting" },
    ],
    includes: [
      { en: "Natural Moonstone beaded bracelet (8mm beads)", tr: "Doğal Ay Taşı boncuk bileklik (8mm boncuklar)", ar: "سوار خرز حجر القمر الطبيعي (خرز 8 مم)" },
      { en: "Moonstone faceted crystal point pendant", tr: "Ay Taşı fasetli kristal uç kolye ucu", ar: "قلادة نقطة كريستال حجر القمر المتعددة الأوجه" },
      { en: "Black waxed cord necklace", tr: "Siyah balmumu ip kolye", ar: "قلادة حبل شمعي أسود" },
      { en: "Silver-tone clasp and hardware", tr: "Gümüş ton klips ve donanım", ar: "مشبك وإكسسوارات بلون فضي" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Intuition, Femininity, New Beginnings", tr: "Sezgi, Feminen Enerji, Yeni Başlangıçlar", ar: "الحدس، الأنوثة، البدايات الجديدة" },
      chakra: { en: "Crown & Third Eye", tr: "Taç ve Üçüncü Göz", ar: "تاج الرأس والعين الثالثة" },
      idealFor: { en: "Intuition & Emotional Balance", tr: "Sezgi ve Duygusal Denge", ar: "الحدس والتوازن العاطفي" },
      material: { en: "100% Natural Moonstone", tr: "100% Doğal Ay Taşı", ar: "حجر القمر الطبيعي 100%" },
    },
    careInstructions: [
      { en: "Wipe with a soft dry cloth — avoid water immersion", tr: "Yumuşak kuru bir bezle silin — suya batırmayın", ar: "امسحه بقطعة قماش ناعمة جافة — تجنب الغمر في الماء" },
      { en: "Recharge under the full moon overnight", tr: "Dolunay altında bir gece bekletip şarj edin", ar: "اشحنه تحت القمر الكامل طوال الليل" },
      { en: "Avoid prolonged sunlight exposure", tr: "Uzun süreli güneş ışığına maruziyetten kaçının", ar: "تجنب التعرض المطوّل لضوء الشمس" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["moonstone", "bracelet", "necklace", "set", "crystal point", "intuition", "white"],
    isFeatured: true,
    relatedProductIds: ["set-howlite-teardrop", "ring-moonstone"],
  },

  // ─── CRYSTAL RINGS ──────────────────────────────────────────────────────────
  {
    id: "ring-tigers-eye",
    slug: "tigers-eye-gold-claw-ring",
    name: {
      en: "Tiger's Eye Gold Claw Ring",
      tr: "Kaplan Gözü Altın Pençe Yüzüğü",
      ar: "خاتم عين النمر الذهبي المخلب",
    },
    shortDescription: {
      en: "Natural Tiger's Eye bead set in a sculpted gold claw band.",
      tr: "Altın pençe bandında doğal Kaplan Gözü boncuk.",
      ar: "خرزة عين النمر الطبيعية في حلقة ذهبية منحوتة على شكل مخلب.",
    },
    description: {
      en: "The signature Aura Stor gold claw ring — a sculpted gold-tone band with talon tips that hold a polished natural Tiger's Eye bead. Each bead is unique, displaying the stone's characteristic golden-brown silk that shifts with light. Bold, distinctive, and unmistakably Aura Stor.",
      tr: "İmza Aura Stor altın pençe yüzüğü — cilalı doğal Kaplan Gözü boncuğu tutan pençe uçlarıyla heykeltıraşlıkla işlenmiş altın ton band. Her boncuk benzersizdir; taşın ışıkla kayan karakteristik altın-kahverengi ipeksi görünümünü sergiler. Cesur, farklı ve tartışmasız Aura Stor.",
      ar: "خاتم مخلب أورا ستور الذهبي المميز — حلقة ذهبية منحوتة بأطراف مخلب تمسك خرزة عين النمر المصقولة. كل خرزة فريدة تعرض الحرير الذهبي البني للحجر.",
    },
    price: 35,
    category: "crystal-rings",
    stone: "tigers-eye",
    stoneName: { en: "Tiger's Eye", tr: "Kaplan Gözü", ar: "عين النمر" },
    images: [
      { src: "/images/products/ring-tigers-eye-nature.jpg", alt: "Tiger's Eye Gold Claw Ring on river stone" },
    ],
    includes: [
      { en: "Natural Tiger's Eye bead", tr: "Doğal Kaplan Gözü boncuk", ar: "خرزة عين النمر الطبيعية" },
      { en: "Gold-tone sculpted claw band", tr: "Altın ton heykeltıraş pençe band", ar: "حلقة ذهبية منحوتة على شكل مخلب" },
      { en: "Adjustable sizing (fits most)", tr: "Ayarlanabilir beden (çoğuna uyar)", ar: "مقاس قابل للتعديل (يناسب معظم الأحجام)" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Strength, Courage, Clarity", tr: "Güç, Cesaret, Netlik", ar: "القوة، الشجاعة، الوضوح" },
      chakra: { en: "Solar Plexus", tr: "Güneş Sinir Ağı", ar: "الضفيرة الشمسية" },
      idealFor: { en: "Daily Wear & Confidence", tr: "Günlük Kullanım ve Özgüven", ar: "الارتداء اليومي والثقة بالنفس" },
      material: { en: "Natural Tiger's Eye, Gold-Tone Band", tr: "Doğal Kaplan Gözü, Altın Ton Band", ar: "عين النمر الطبيعية، حلقة بلون ذهبي" },
    },
    careInstructions: [
      { en: "Remove before washing hands or swimming", tr: "El yıkamadan veya yüzmeden önce çıkarın", ar: "أخرجه قبل غسل اليدين أو السباحة" },
      { en: "Wipe with a soft dry cloth after wear", tr: "Taşıdıktan sonra yumuşak kuru bir bezle silin", ar: "امسحه بقطعة قماش ناعمة جافة بعد الارتداء" },
      { en: "Avoid contact with perfume and chemicals", tr: "Parfüm ve kimyasallarla temastan kaçının", ar: "تجنب ملامسة العطور والمواد الكيميائية" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["tigers-eye", "ring", "gold", "claw", "statement"],
    isBestSeller: true,
    collectionSlug: "tigers-eye-collection",
    relatedProductIds: ["ring-jade", "ring-moonstone", "set-tigers-eye-diamond"],
  },

  {
    id: "ring-jade",
    slug: "jade-gold-claw-ring",
    name: {
      en: "Jade Gold Claw Ring",
      tr: "Yeşim Altın Pençe Yüzüğü",
      ar: "خاتم اليشم الذهبي المخلب",
    },
    shortDescription: {
      en: "Deep forest green Jade bead in the sculptural Aura Stor gold claw setting.",
      tr: "Heykelsi Aura Stor altın pençe ayarında derin orman yeşili Yeşim boncuk.",
      ar: "خرزة يشم خضراء داكنة في إطار مخلب أورا ستور الذهبي المنحوت.",
    },
    description: {
      en: "Rich, deep forest green — the colour of ancient forests, of growth, of the living world at its most abundant. This Jade Gold Claw Ring brings the stone's five-thousand-year legacy of wisdom and prosperity into a beautifully wearable form. Set in the Aura Stor signature gold claw band, the natural Jade bead sits with quiet authority.",
      tr: "Zengin, derin orman yeşili — kadim ormanların, büyümenin, yaşayan dünyanın en bol halinin rengi. Bu Yeşim Altın Pençe Yüzüğü, taşın beş bin yıllık bilgelik ve refah mirasını güzel bir şekilde giyilebilir forma taşır. Aura Stor imza altın pençe bandında, doğal Yeşim boncuğu sessiz bir otoriteyle oturur.",
      ar: "أخضر الغابة العميق الغني — لون الغابات القديمة والنمو. يجلب هذا الخاتم إرث اليشم الخمسة الآلاف سنة من الحكمة والازدهار في شكل قابل للارتداء.",
    },
    price: 35,
    category: "crystal-rings",
    stone: "jade",
    stoneName: { en: "Jade", tr: "Yeşim", ar: "اليشم" },
    images: [
      { src: "/images/products/ring-jade-nature.jpg", alt: "Jade Gold Claw Ring on river stone" },
      { src: "/images/products/ring-jade-hand.jpg", alt: "Jade Gold Claw Ring worn on hand" },
    ],
    includes: [
      { en: "Natural Jade bead", tr: "Doğal Yeşim boncuk", ar: "خرزة يشم طبيعية" },
      { en: "Gold-tone sculpted claw band", tr: "Altın ton heykeltıraş pençe band", ar: "حلقة ذهبية منحوتة على شكل مخلب" },
      { en: "Adjustable sizing (fits most)", tr: "Ayarlanabilir beden (çoğuna uyar)", ar: "مقاس قابل للتعديل (يناسب معظم الأحجام)" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Harmony, Wisdom, Protection", tr: "Uyum, Bilgelik, Koruma", ar: "الانسجام، الحكمة، الحماية" },
      chakra: { en: "Heart", tr: "Kalp", ar: "القلب" },
      idealFor: { en: "Balance & Prosperity", tr: "Denge ve Refah", ar: "التوازن والازدهار" },
      material: { en: "Natural Jade, Gold-Tone Band", tr: "Doğal Yeşim, Altın Ton Band", ar: "يشم طبيعي، حلقة بلون ذهبي" },
    },
    careInstructions: [
      { en: "Cleanse with a soft damp cloth and dry immediately", tr: "Yumuşak nemli bir bezle temizleyin ve hemen kurulayın", ar: "نظّفه بقطعة قماش ناعمة مبللة وجففه فوراً" },
      { en: "Avoid harsh chemicals and perfumes", tr: "Sert kimyasallar ve parfümlerden kaçının", ar: "تجنب المواد الكيميائية القاسية والعطور" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["jade", "ring", "gold", "claw", "green", "harmony"],
    isBestSeller: true,
    isFeatured: true,
    collectionSlug: "jade-collection",
    relatedProductIds: ["ring-moonstone", "ring-tigers-eye", "set-aventurine-heart"],
  },

  {
    id: "ring-moonstone",
    slug: "moonstone-gold-claw-ring",
    name: {
      en: "Moonstone Gold Claw Ring",
      tr: "Ay Taşı Altın Pençe Yüzüğü",
      ar: "خاتم حجر القمر الذهبي المخلب",
    },
    shortDescription: {
      en: "Ethereal translucent Moonstone bead in the Aura Stor gold claw setting.",
      tr: "Aura Stor altın pençe ayarında eteral saydam Ay Taşı boncuk.",
      ar: "خرزة حجر القمر الشفافة الأثيرية في إطار مخلب أورا ستور الذهبي.",
    },
    description: {
      en: "Translucent, glowing, and impossibly delicate — the Moonstone Gold Claw Ring is perhaps the most ethereal piece in the Aura Stor collection. The pale, luminous bead seems to hold light rather than reflect it. In the gold claw setting, it looks both ancient and entirely modern. A ring for the intuitive, the creative, the quietly powerful.",
      tr: "Saydam, parlayan ve inanılmaz derecede narin — Ay Taşı Altın Pençe Yüzüğü, Aura Stor koleksiyonunun belki de en eteral parçasıdır. Soluk, ışıltılı boncuk ışığı yansıtmak yerine tutuyormuş gibi görünür. Altın pençe ayarında, hem kadim hem de tamamen modern görünür. Sezgisel, yaratıcı, sessizce güçlü olanlar için bir yüzük.",
      ar: "شفاف ومتوهج ورقيق بشكل لا يصدق — خاتم حجر القمر الذهبي ربما أكثر القطع أثيرية في مجموعة أورا ستور.",
    },
    price: 38,
    category: "crystal-rings",
    stone: "moonstone",
    stoneName: { en: "Moonstone", tr: "Ay Taşı", ar: "حجر القمر" },
    images: [
      { src: "/images/products/ring-moonstone-nature.jpg", alt: "Moonstone Gold Claw Ring on river stone" },
      { src: "/images/products/ring-moonstone-hand.jpg", alt: "Moonstone Gold Claw Ring worn on hand" },
    ],
    includes: [
      { en: "Natural Moonstone bead", tr: "Doğal Ay Taşı boncuk", ar: "خرزة حجر قمر طبيعية" },
      { en: "Gold-tone sculpted claw band", tr: "Altın ton heykeltıraş pençe band", ar: "حلقة ذهبية منحوتة على شكل مخلب" },
      { en: "Adjustable sizing (fits most)", tr: "Ayarlanabilir beden (çoğuna uyar)", ar: "مقاس قابل للتعديل (يناسب معظم الأحجام)" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Intuition, Grace, New Beginnings", tr: "Sezgi, Zarafet, Yeni Başlangıçlar", ar: "الحدس، الأناقة، البدايات الجديدة" },
      chakra: { en: "Crown & Third Eye", tr: "Taç ve Üçüncü Göz", ar: "تاج الرأس والعين الثالثة" },
      idealFor: { en: "Intuition & Emotional Balance", tr: "Sezgi ve Duygusal Denge", ar: "الحدس والتوازن العاطفي" },
      material: { en: "Natural Moonstone, Gold-Tone Band", tr: "Doğal Ay Taşı, Altın Ton Band", ar: "حجر القمر الطبيعي، حلقة بلون ذهبي" },
    },
    careInstructions: [
      { en: "Handle with care — Moonstone is delicate", tr: "Dikkatli kullanın — Ay Taşı hassastır", ar: "تعامل معه بعناية — حجر القمر هش" },
      { en: "Wipe with a soft dry cloth", tr: "Yumuşak kuru bir bezle silin", ar: "امسحه بقطعة قماش ناعمة جافة" },
      { en: "Avoid water, perfume, and chemicals", tr: "Su, parfüm ve kimyasallardan uzak tutun", ar: "تجنب الماء والعطور والمواد الكيميائية" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["moonstone", "ring", "gold", "claw", "ethereal", "intuition"],
    isFeatured: true,
    relatedProductIds: ["ring-jade", "ring-moss-agate", "set-moonstone-spike"],
  },

  {
    id: "ring-moss-agate",
    slug: "moss-agate-gold-claw-ring",
    name: {
      en: "Moss Agate Gold Claw Ring",
      tr: "Yosun Akik Altın Pençe Yüzüğü",
      ar: "خاتم عقيق الطحلب الذهبي المخلب",
    },
    shortDescription: {
      en: "Rare dendritic Moss Agate bead — cream with botanical green inclusions.",
      tr: "Nadir botanik yeşil kalıntılı Yosun Akik boncuk — krem ve yeşil.",
      ar: "خرزة عقيق الطحلب الشجيري النادرة — كريمية مع إشمالات خضراء نباتية.",
    },
    description: {
      en: "No two Moss Agate stones are alike. Each bead is a tiny landscape — cream and white with dendritic inclusions of deep green that look like ferns, trees, or forest paths frozen in stone. The Moss Agate Gold Claw Ring is one of our most uniquely individual pieces. Your ring will never be identical to anyone else's. That is its gift.",
      tr: "İki Yosun Akik taşı birbirinin aynı değildir. Her boncuk küçük bir manzaradır — taşa donmuş eğrelti otları, ağaçlar veya orman yolları gibi görünen derin yeşil dendritik kalıntılarla krem ve beyaz. Yosun Akik Altın Pençe Yüzüğü, en benzersiz bireysel parçalarımızdan biridir. Yüzüğünüz hiçbir zaman başkasının yüzüğüyle aynı olmayacak. Bu onun armağanıdır.",
      ar: "لا يوجد حجران من عقيق الطحلب متطابقان. كل خرزة منظر طبيعي صغير — كريمية وبيضاء بإشمالات خضراء داكنة تشبه السراخس أو الأشجار أو مسارات الغابة.",
    },
    price: 38,
    category: "crystal-rings",
    stone: "moss-agate",
    stoneName: { en: "Moss Agate", tr: "Yosun Akik", ar: "عقيق الطحلب" },
    images: [
      { src: "/images/products/ring-moss-agate-nature.jpg", alt: "Moss Agate Gold Claw Ring on river stone" },
      { src: "/images/products/ring-moss-agate-hand.jpg", alt: "Moss Agate Gold Claw Ring worn on hand" },
    ],
    includes: [
      { en: "Natural Moss Agate / Dendritic Agate bead (unique pattern)", tr: "Doğal Yosun Akik / Dendritik Akik boncuk (benzersiz desen)", ar: "خرزة عقيق الطحلب / عقيق شجيري طبيعية (نمط فريد)" },
      { en: "Gold-tone sculpted claw band", tr: "Altın ton heykeltıraş pençe band", ar: "حلقة ذهبية منحوتة على شكل مخلب" },
      { en: "Adjustable sizing (fits most)", tr: "Ayarlanabilir beden (çoğuna uyar)", ar: "مقاس قابل للتعديل (يناسب معظم الأحجام)" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Nature, Growth, Uniqueness", tr: "Doğa, Büyüme, Benzersizlik", ar: "الطبيعة، النمو، التفرد" },
      chakra: { en: "Heart", tr: "Kalp", ar: "القلب" },
      idealFor: { en: "Creativity & Personal Growth", tr: "Yaratıcılık ve Kişisel Gelişim", ar: "الإبداع والنمو الشخصي" },
      material: { en: "Natural Moss Agate, Gold-Tone Band", tr: "Doğal Yosun Akik, Altın Ton Band", ar: "عقيق الطحلب الطبيعي، حلقة بلون ذهبي" },
    },
    careInstructions: [
      { en: "Wipe with a soft damp cloth and dry thoroughly", tr: "Yumuşak nemli bir bezle silin ve iyice kurulayın", ar: "امسحه بقطعة قماش ناعمة مبللة وجففه جيداً" },
      { en: "Avoid harsh chemicals and ultrasonic cleaners", tr: "Sert kimyasallar ve ultrasonik temizleyicilerden kaçının", ar: "تجنب المواد الكيميائية القاسية والمنظفات بالموجات فوق الصوتية" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["moss agate", "dendritic", "ring", "gold", "claw", "unique", "nature"],
    isNewArrival: true,
    relatedProductIds: ["ring-jade", "ring-moonstone"],
  },

  {
    id: "ring-dalmatian-jasper",
    slug: "dalmatian-jasper-gold-claw-ring",
    name: {
      en: "Dalmatian Jasper Gold Claw Ring",
      tr: "Dalmaçyalı Jasper Altın Pençe Yüzüğü",
      ar: "خاتم جاسبر الدالماتي الذهبي المخلب",
    },
    shortDescription: {
      en: "Playful cream and black Dalmatian Jasper in the gold claw setting.",
      tr: "Altın pençe ayarında oyuncu krem ve siyah Dalmaçyalı Jasper.",
      ar: "جاسبر دالماتي مرح باللونين الكريمي والأسود في إطار المخلب الذهبي.",
    },
    description: {
      en: "Named for the beloved spotted dog breed it resembles, Dalmatian Jasper is one of the most joyful and distinctive stones in the natural world. Cream-white dotted with black tourmaline and iron oxide inclusions, each bead is entirely unique. Its energy is grounding yet lighthearted — a stone that reminds you not to take life too seriously, while keeping you rooted in what matters.",
      tr: "Andırdığı sevilen benekli köpek cinsinden adını alan Dalmaçyalı Jasper, doğal dünyanın en neşeli ve ayırt edici taşlarından biridir. Siyah turmalin ve demir oksit kalıntılarıyla noktalanmış krem-beyaz, her boncuk tamamen benzersizdir. Enerjisi köklendirici ama neşeli — sizi önemli olana köklenmiş tutarken hayatı çok ciddiye almamayı hatırlatan bir taş.",
      ar: "سُمّي على اسم سلالة الكلاب المرقطة التي يشبهها، جاسبر الدالماتي من أكثر الأحجار مرحاً وتميزاً في الطبيعة.",
    },
    price: 35,
    category: "crystal-rings",
    stone: "dalmatian-jasper",
    stoneName: { en: "Dalmatian Jasper", tr: "Dalmaçyalı Jasper", ar: "جاسبر الدالماتي" },
    images: [
      { src: "/images/products/ring-dalmatian-nature.jpg", alt: "Dalmatian Jasper Gold Claw Ring on river stone" },
      { src: "/images/products/ring-dalmatian-jasper-hand.jpg", alt: "Dalmatian Jasper Ring worn on hand" },
    ],
    includes: [
      { en: "Natural Dalmatian Jasper bead (unique spot pattern)", tr: "Doğal Dalmaçyalı Jasper boncuk (benzersiz nokta deseni)", ar: "خرزة جاسبر الدالماتي الطبيعية (نمط بقع فريد)" },
      { en: "Gold-tone sculpted claw band", tr: "Altın ton heykeltıraş pençe band", ar: "حلقة ذهبية منحوتة على شكل مخلب" },
      { en: "Adjustable sizing (fits most)", tr: "Ayarlanabilir beden (çoğuna uyar)", ar: "مقاس قابل للتعديل (يناسب معظم الأحجام)" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Joy, Playfulness, Grounding", tr: "Neşe, Oyunculuk, Köklülük", ar: "الفرح، المرح، الثبات" },
      chakra: { en: "Root & Sacral", tr: "Kök ve Sakral", ar: "الجذر والعجزي" },
      idealFor: { en: "Lightheartedness & Inner Child", tr: "Neşe ve İç Çocuk", ar: "الخفة والطفل الداخلي" },
      material: { en: "Natural Dalmatian Jasper, Gold-Tone Band", tr: "Doğal Dalmaçyalı Jasper, Altın Ton Band", ar: "جاسبر الدالماتي الطبيعي، حلقة بلون ذهبي" },
    },
    careInstructions: [
      { en: "Wipe with a soft damp cloth and dry thoroughly", tr: "Yumuşak nemli bir bezle silin ve iyice kurulayın", ar: "امسحه بقطعة قماش ناعمة مبللة وجففه جيداً" },
      { en: "Avoid prolonged water exposure", tr: "Uzun süreli su temasından kaçının", ar: "تجنب التعرض المطوّل للماء" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["dalmatian jasper", "ring", "gold", "claw", "spotted", "grounding", "joy"],
    isNewArrival: true,
    relatedProductIds: ["ring-moss-agate", "ring-jade"],
  },

  {
    id: "ring-black-pearl",
    slug: "black-pearl-gold-claw-ring",
    name: {
      en: "Black Pearl Gold Claw Ring",
      tr: "Siyah İnci Altın Pençe Yüzüğü",
      ar: "خاتم اللؤلؤ الأسود الذهبي المخلب",
    },
    shortDescription: {
      en: "Deep black obsidian-like bead in the signature Aura Stor gold claw.",
      tr: "İmza Aura Stor altın pençesinde derin siyah obsidyen benzeri boncuk.",
      ar: "خرزة سوداء عميقة تشبه الأوبسيديان في مخلب أورا ستور الذهبي المميز.",
    },
    description: {
      en: "Bold and unapologetic, the Black Pearl Gold Claw Ring is the most striking piece in the ring collection. The deep black bead — rich, lustrous, and grounding — sits in sharp, beautiful contrast against the warm gold of the claw setting. This is a ring for those who are not afraid to be seen. Protection, power, and elegance in a single gesture.",
      tr: "Cesur ve özür dilemez, Siyah İnci Altın Pençe Yüzüğü, yüzük koleksiyonunun en çarpıcı parçasıdır. Derin siyah boncuk — zengin, parlak ve köklendirici — pençe ayarının sıcak altınına karşı keskin, güzel bir kontrast oluşturur. Bu, görülmekten korkmayan kişiler için bir yüzük. Tek bir jestte koruma, güç ve zarafet.",
      ar: "جريء وصريح، خاتم اللؤلؤ الأسود الذهبي هو أكثر القطع إثارة في مجموعة الخواتم. الخرزة السوداء العميقة تتناقض بشكل جميل مع الذهب الدافئ للمخلب.",
    },
    price: 35,
    category: "crystal-rings",
    stone: "obsidian",
    stoneName: { en: "Black Pearl", tr: "Siyah İnci", ar: "لؤلؤ أسود" },
    images: [
      { src: "/images/products/ring-black-pearl-hand.jpg", alt: "Black Pearl Gold Claw Ring worn on hand" },
    ],
    includes: [
      { en: "Natural black stone bead", tr: "Doğal siyah taş boncuk", ar: "خرزة حجرية سوداء طبيعية" },
      { en: "Gold-tone sculpted claw band", tr: "Altın ton heykeltıraş pençe band", ar: "حلقة ذهبية منحوتة على شكل مخلب" },
      { en: "Adjustable sizing (fits most)", tr: "Ayarlanabilir beden (çoğuna uyar)", ar: "مقاس قابل للتعديل (يناسب معظم الأحجام)" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Protection, Power, Grounding", tr: "Koruma, Güç, Köklülük", ar: "الحماية، القوة، الثبات" },
      chakra: { en: "Root", tr: "Kök", ar: "الجذر" },
      idealFor: { en: "Strength & Protection", tr: "Güç ve Koruma", ar: "القوة والحماية" },
      material: { en: "Natural Black Stone, Gold-Tone Band", tr: "Doğal Siyah Taş, Altın Ton Band", ar: "حجر أسود طبيعي، حلقة بلون ذهبي" },
    },
    careInstructions: [
      { en: "Remove before washing hands or swimming", tr: "El yıkamadan veya yüzmeden önce çıkarın", ar: "أخرجه قبل غسل اليدين أو السباحة" },
      { en: "Wipe with a soft dry cloth", tr: "Yumuşak kuru bir bezle silin", ar: "امسحه بقطعة قماش ناعمة جافة" },
      { en: "Avoid harsh chemicals", tr: "Sert kimyasallardan kaçının", ar: "تجنب المواد الكيميائية القاسية" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["black", "ring", "gold", "claw", "bold", "protection", "statement"],
    isBestSeller: true,
    relatedProductIds: ["ring-tigers-eye", "ring-jade"],
  },

  // ─── STANDALONE NECKLACES ───────────────────────────────────────────────────
  {
    id: "necklace-tigers-eye-wirewrapped",
    slug: "tigers-eye-wire-wrapped-pendant-necklace",
    name: {
      en: "Tiger's Eye Wire-Wrapped Necklace",
      tr: "Kaplan Gözü Tel Sarmalı Kolye",
      ar: "عقد عين النمر الملفوف بالسلك",
    },
    shortDescription: {
      en: "Hand wire-wrapped raw Tiger's Eye on a silver snake chain.",
      tr: "Gümüş yılan zincir üzerinde el işi tel sarmalı ham Kaplan Gözü.",
      ar: "عين نمر خام ملفوفة يدوياً بالسلك على سلسلة فضية.",
    },
    description: {
      en: "A raw, unpolished Tiger's Eye stone — held in a delicate spiral of hand-worked silver wire. This pendant does not hide its nature. It shows you exactly what it is: a piece of the earth, caught mid-transformation. Worn on a fine silver snake chain, it sits at the collarbone with quiet authority. Each piece is uniquely wrapped and one-of-a-kind.",
      tr: "Ham, cilalanmamış bir Kaplan Gözü taşı — el işi gümüş telin narin sarmalında tutuluyor. Bu kolye ucu doğasını gizlemez. Size tam olarak ne olduğunu gösterir: dönüşümün ortasında yakalanmış bir parça toprak. İnce gümüş yılan zincirinde giyildiğinde, köprücük kemiklerinin üzerinde sessiz bir otoriteyle durur. Her parça benzersiz şekilde sarılmış ve tek tanedir.",
      ar: "حجر عين نمر خام غير مصقول — محتجز في حلزون رفيع من السلك الفضي المعمول يدوياً. هذا القلاة لا يخفي طبيعته.",
    },
    price: 48,
    category: "crystal-necklaces",
    stone: "tigers-eye",
    stoneName: { en: "Tiger's Eye", tr: "Kaplan Gözü", ar: "عين النمر" },
    images: [
      { src: "/images/products/necklace-tigers-eye-wirewrapped.jpg", alt: "Tiger's Eye Wire-Wrapped Necklace" },
    ],
    includes: [
      { en: "Raw natural Tiger's Eye stone (unique shape)", tr: "Ham doğal Kaplan Gözü taşı (benzersiz şekil)", ar: "حجر عين نمر خام طبيعي (شكل فريد)" },
      { en: "Hand wire-wrapped silver-tone setting", tr: "El işi tel sarmalı gümüş ton ayar", ar: "إطار فضي اللون ملفوف بالسلك يدوياً" },
      { en: "Fine silver-tone snake chain necklace", tr: "İnce gümüş ton yılan zincir kolye", ar: "عقد سلسلة حية فضية اللون رفيعة" },
      { en: "Aura Stor velvet gift pouch", tr: "Aura Stor kadife hediye kesesi", ar: "كيس هدية مخملي من أورا ستور" },
    ],
    properties: {
      energy: { en: "Raw Strength, Authenticity, Courage", tr: "Ham Güç, Özgünlük, Cesaret", ar: "القوة الخام، الأصالة، الشجاعة" },
      chakra: { en: "Solar Plexus", tr: "Güneş Sinir Ağı", ar: "الضفيرة الشمسية" },
      idealFor: { en: "Statement Wear & Authenticity", tr: "Dikkat Çekici Kullanım ve Özgünlük", ar: "الارتداء البارز والأصالة" },
      material: { en: "Natural Raw Tiger's Eye, Silver-Tone Wire & Chain", tr: "Doğal Ham Kaplan Gözü, Gümüş Ton Tel ve Zincir", ar: "عين النمر الخام الطبيعي، سلك وسلسلة فضية اللون" },
    },
    careInstructions: [
      { en: "Handle with care — wire wrapping is delicate", tr: "Dikkatli kullanın — tel sarmalar hassastır", ar: "تعامل معه بعناية — اللفائف السلكية هشة" },
      { en: "Avoid water and chemicals", tr: "Su ve kimyasallardan uzak tutun", ar: "تجنب الماء والمواد الكيميائية" },
      { en: "Wipe with a soft dry cloth", tr: "Yumuşak kuru bir bezle silin", ar: "امسحه بقطعة قماش ناعمة جافة" },
      { en: "Store in the included velvet pouch", tr: "Dahil edilen kadife kesede saklayın", ar: "احفظه في الكيس المخملي المرفق" },
    ],
    tags: ["tigers-eye", "necklace", "wire-wrapped", "raw", "pendant", "artisan"],
    isFeatured: true,
    isNewArrival: true,
    collectionSlug: "tigers-eye-collection",
    relatedProductIds: ["set-tigers-eye-diamond", "set-tigers-eye-star"],
  },
];

/** Returns a product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Returns products by category */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

/** Returns featured products */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

/** Returns best sellers */
export function getBestSellers(limit = 8): Product[] {
  return products.filter((p) => p.isBestSeller).slice(0, limit);
}

/** Returns related products by IDs */
export function getRelatedProducts(ids: string[]): Product[] {
  return products.filter((p) => ids.includes(p.id));
}

/** Returns products in a collection */
export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collectionSlug === collectionSlug);
}

/** Returns products by stone type */
export function getProductsByStone(stone: string): Product[] {
  return products.filter((p) => p.stone === stone);
}
