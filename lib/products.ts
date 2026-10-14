import type { Locale } from './site';

type L<T = string> = Record<Locale, T>;
type Ingredient = { n: string; d: string };

export type Product = {
  slug: string;
  sku: string;
  kind: 'single' | 'pack';
  price: number;
  compareAt?: number;
  size: string;
  image: string;
  includes?: string[];
  name: L;
  short: L;
  tags: L<string[]>;
  description: L<string[]>;
  ingredients: L<Ingredient[]>;
  howTo: L<string[]>;
  notes: L<string[]>;
  faq: L<{ q: string; a: string }[]>;
  seoTitle: L;
  seoDescription: L;
};

/* ثمن الباك: بدلو من هنا فقط. الثمن المشطوب كيتحسب أوتوماتيكيا من مجموع المنتجات. */
const PACK_PRICE = 299;

const singles: Product[] = [
  {
    slug: 'gel-nettoyant-visage',
    sku: 'NV-GEL-120',
    kind: 'single',
    price: 105,
    size: '120 ml',
    image: '/images/gel-nettoyant-visage',
    name: { ar: 'غسول الوجه بالألوفيرا والبابونج', fr: 'Gel nettoyant visage aloe vera et camomille' },
    short: {
      ar: 'غسول منق ومهدئ ومرطب، بخلاصات نباتية وزيوت عطرية.',
      fr: 'Un gel purifiant, apaisant et hydratant, aux extraits de plantes et huiles essentielles.',
    },
    tags: { ar: ['منق', 'مهدئ', 'مرطب'], fr: ['Purifiant', 'Apaisant', 'Hydratant'] },
    description: {
      ar: [
        'غسول الوجه NutraVie ينقي البشرة ويهدئها ويرطبها. تركيبته تجمع خلاصات الألوفيرا والبابونج والشاي الأخضر مع زيوت شجرة الشاي واللافندر والجوجوبا.',
        'ينظف بعوامل تنظيف لطيفة من أصل نباتي، مشتقة من جوز الهند أو الذرة، فيزيل الدهون الزائدة وآثار واقي الشمس دون أن يجفف البشرة.',
      ],
      fr: [
        "Le gel nettoyant NutraVie purifie, apaise et hydrate la peau. Sa formule associe des extraits d'aloe vera, de camomille et de thé vert aux huiles d'arbre à thé, de lavande et de jojoba.",
        "Il nettoie avec des agents lavants doux d'origine végétale, dérivés de la noix de coco ou du maïs, et retire l'excès de sébum et les restes d'écran solaire sans dessécher la peau.",
      ],
    },
    ingredients: {
      ar: [
        { n: 'ألوفيرا', d: 'مهدئ ومرطب' },
        { n: 'بابونج', d: 'مهدئ' },
        { n: 'شاي أخضر', d: 'مضاد للأكسدة' },
        { n: 'زيت شجرة الشاي', d: 'منق' },
        { n: 'زيت اللافندر', d: 'مهدئ' },
        { n: 'زيت الجوجوبا', d: 'مرطب' },
        { n: 'عوامل تنظيف نباتية', d: 'مشتقة من جوز الهند أو الذرة' },
      ],
      fr: [
        { n: 'Aloe vera', d: 'apaisant et hydratant' },
        { n: 'Camomille', d: 'apaisante' },
        { n: 'Thé vert', d: 'antioxydant' },
        { n: "Huile d'arbre à thé", d: 'purifiante' },
        { n: 'Huile de lavande', d: 'apaisante' },
        { n: 'Huile de jojoba', d: 'hydratante' },
        { n: 'Agents lavants végétaux', d: 'dérivés de la noix de coco ou du maïs' },
      ],
    },
    howTo: {
      ar: ['بللي وجهك بماء فاتر.', 'ضعي ضغطة واحدة من الغسول ودلكي بلطف.', 'اشطفي جيدا وجففي بمنشفة نظيفة.'],
      fr: ["Mouillez le visage à l'eau tiède.", 'Appliquez une pression de gel et massez doucement.', 'Rincez bien et séchez avec une serviette propre.'],
    },
    notes: {
      ar: [
        'بشرة دهنية معرضة للحبوب: صباحا ومساء.',
        'بشرة جافة، أو حساسة وجافة: في المساء فقط.',
        'تجنبي محيط العينين.',
      ],
      fr: [
        'Peau grasse à tendance acnéique : matin et soir.',
        'Peau sèche, ou sensible et sèche : le soir uniquement.',
        'Évitez le contour des yeux.',
      ],
    },
    faq: {
      ar: [
        { q: 'كم مرة أستعمل غسول الوجه في اليوم؟', a: 'للبشرة الدهنية المعرضة للحبوب: صباحا ومساء. للبشرة الجافة: في المساء فقط.' },
        { q: 'هل غسول الوجه مناسب للبشرة الدهنية؟', a: 'نعم. يحتوي على زيت شجرة الشاي المنقي والشاي الأخضر، وينظف دون أن يجفف البشرة.' },
      ],
      fr: [
        { q: 'Combien de fois par jour utiliser le gel nettoyant ?', a: 'Peau grasse à tendance acnéique : matin et soir. Peau sèche : le soir uniquement.' },
        { q: 'Le gel nettoyant convient-il aux peaux grasses ?', a: "Oui. Il contient de l'huile d'arbre à thé purifiante et du thé vert, et nettoie sans dessécher." },
      ],
    },
    seoTitle: {
      ar: 'غسول الوجه بالألوفيرا وزيت شجرة الشاي 120 مل',
      fr: 'Gel nettoyant visage aloe vera, camomille, arbre à thé 120 ml',
    },
    seoDescription: {
      ar: 'غسول وجه منق ومهدئ بالألوفيرا والبابونج والشاي الأخضر وزيت شجرة الشاي. 105 درهم، توصيل لجميع مدن المغرب والدفع عند الاستلام.',
      fr: "Gel nettoyant purifiant et apaisant à l'aloe vera, camomille, thé vert et arbre à thé. 105 DH, livraison partout au Maroc.",
    },
  },
  {
    slug: 'ecran-solaire-mineral-spf50',
    sku: 'NV-SPF-50',
    kind: 'single',
    price: 150,
    size: '50 ml',
    image: '/images/ecran-solaire-mineral-spf50',
    name: { ar: 'واقي شمسي معدني SPF 50+‎', fr: 'Écran solaire minéral SPF 50+' },
    short: {
      ar: 'حماية فعالة من الشمس بفلاتر معدنية، مع ترطيب وتخفيف لمظهر العيوب.',
      fr: 'Une protection solaire efficace à filtres minéraux, qui hydrate et atténue les imperfections.',
    },
    tags: { ar: ['غير مرئي', 'مرطب', 'حماية عالية'], fr: ['Invisible', 'Hydratant', 'Haute protection'] },
    description: {
      ar: [
        'واقي الشمس المعدني NutraVie يحمي بشرتك بفلترين معدنيين: أكسيد الزنك وثاني أكسيد التيتانيوم. يرطب البشرة ويخفف من مظهر العيوب.',
        'تركيبته تضم أيضا النياسيناميد (فيتامين B3)، فيتامين C، فيتامين E والجلسرين، مع خلاصات العرقسوس والشاي الأخضر المهدئة والمضادة للأكسدة.',
      ],
      fr: [
        "L'écran solaire minéral NutraVie protège la peau avec deux filtres minéraux : l'oxyde de zinc et le dioxyde de titane. Il hydrate et atténue l'apparence des imperfections.",
        'Sa formule contient aussi de la niacinamide (vitamine B3), de la vitamine C, de la vitamine E et de la glycérine, avec des extraits de réglisse et de thé vert, apaisants et antioxydants.',
      ],
    },
    ingredients: {
      ar: [
        { n: 'أكسيد الزنك', d: 'فلتر معدني' },
        { n: 'ثاني أكسيد التيتانيوم', d: 'فلتر معدني' },
        { n: 'نياسيناميد (فيتامين B3)', d: 'يخفف مظهر العيوب' },
        { n: 'فيتامين C', d: 'مضاد للأكسدة' },
        { n: 'فيتامين E', d: 'مضاد للأكسدة' },
        { n: 'جلسرين', d: 'مرطب' },
        { n: 'خلاصة العرقسوس', d: 'مهدئة' },
        { n: 'خلاصة الشاي الأخضر', d: 'مضادة للأكسدة' },
      ],
      fr: [
        { n: 'Oxyde de zinc', d: 'filtre minéral' },
        { n: 'Dioxyde de titane', d: 'filtre minéral' },
        { n: 'Niacinamide (vitamine B3)', d: 'atténue les imperfections' },
        { n: 'Vitamine C', d: 'antioxydante' },
        { n: 'Vitamine E', d: 'antioxydante' },
        { n: 'Glycérine', d: 'hydratante' },
        { n: 'Extrait de réglisse', d: 'apaisant' },
        { n: 'Extrait de thé vert', d: 'antioxydant' },
      ],
    },
    howTo: {
      ar: ['ضعيه في الصباح، مباشرة بعد الغسول أو على بشرة نظيفة.', 'وزعي كمية كافية على الوجه والعنق.', 'أعيدي وضعه كل ساعتين عند التعرض المباشر للشمس.'],
      fr: ['Appliquez-le le matin, juste après le gel nettoyant ou sur peau propre.', 'Répartissez une quantité généreuse sur le visage et le cou.', "Renouvelez toutes les deux heures en cas d'exposition directe."],
    },
    notes: {
      ar: [
        'بشرة دهنية: استعمليه مباشرة بعد غسول الصباح.',
        'بشرة جافة: يكفي وحده في الصباح دون غسول، فهو يرطب البشرة أيضا.',
        'تجنبي محيط العينين.',
      ],
      fr: [
        'Peau grasse : appliquez-le juste après le gel du matin.',
        "Peau sèche : il suffit seul le matin, sans gel, car il hydrate aussi la peau.",
        'Évitez le contour des yeux.',
      ],
    },
    faq: {
      ar: [
        { q: 'ما هي الفلاتر المستعملة في واقي الشمس NutraVie؟', a: 'فلاتر معدنية فقط: أكسيد الزنك وثاني أكسيد التيتانيوم.' },
        { q: 'هل أستعمل واقي الشمس حتى في الشتاء؟', a: 'نعم. الأشعة فوق البنفسجية تصل إلى البشرة طيلة السنة، حتى في الأيام الغائمة.' },
        { q: 'هل يصلح واقي الشمس للبشرة الجافة؟', a: 'نعم. يحتوي على الجلسرين ويمنح البشرة ترطيبا جيدا.' },
      ],
      fr: [
        { q: "Quels filtres contient l'écran solaire NutraVie ?", a: "Des filtres minéraux uniquement : oxyde de zinc et dioxyde de titane." },
        { q: "Faut-il mettre de l'écran solaire en hiver ?", a: "Oui. Les UV atteignent la peau toute l'année, même par temps couvert." },
        { q: "L'écran solaire convient-il aux peaux sèches ?", a: 'Oui. Il contient de la glycérine et apporte une bonne hydratation.' },
      ],
    },
    seoTitle: { ar: 'واقي شمسي معدني SPF 50+‎ بأكسيد الزنك والنياسيناميد', fr: 'Écran solaire minéral SPF 50+ oxyde de zinc et niacinamide' },
    seoDescription: {
      ar: 'واقي شمسي معدني SPF 50+‎ بأكسيد الزنك وثاني أكسيد التيتانيوم، مع النياسيناميد وفيتامين C. 150 درهم، توصيل لجميع مدن المغرب.',
      fr: 'Écran solaire minéral SPF 50+ à l’oxyde de zinc et dioxyde de titane, avec niacinamide et vitamine C. 150 DH, livraison partout au Maroc.',
    },
  },
  {
    slug: 'creme-de-nuit',
    sku: 'NV-NUIT-50',
    kind: 'single',
    price: 85,
    size: '50 ml',
    image: '/images/creme-de-nuit',
    name: { ar: 'كريم الليل بالريتينول وزبدة الشيا', fr: 'Crème de nuit au rétinol et beurre de karité' },
    short: {
      ar: 'كريم ليلي مجدد ومضاد للشيخوخة، غني بمكونات مغذية.',
      fr: 'Une crème de nuit régénérante et anti-âge, riche en actifs nourrissants.',
    },
    tags: { ar: ['مجدد', 'مرطب', 'مغذ', 'مضاد للأكسدة'], fr: ['Régénérante', 'Hydratante', 'Nourrissante', 'Antioxydante'] },
    description: {
      ar: [
        'كريم الليل NutraVie كريم مجدد ومضاد للشيخوخة. يجمع الريتينول (فيتامين A) لتجديد البشرة، حمض الهيالورونيك لترطيب عميق، والببتيدات لدعم بنية الجلد.',
        'فيتامين E وزبدة الشيا وزيت الجوجوبا تغذي البشرة وترطبها طيلة الليل.',
      ],
      fr: [
        "La crème de nuit NutraVie est un soin régénérant et anti-âge. Elle associe le rétinol (vitamine A) pour renouveler la peau, l'acide hyaluronique pour une hydratation profonde et des peptides pour soutenir la structure de la peau.",
        "La vitamine E, le beurre de karité et l'huile de jojoba nourrissent et hydratent la peau toute la nuit.",
      ],
    },
    ingredients: {
      ar: [
        { n: 'ريتينول (فيتامين A)', d: 'يجدد البشرة' },
        { n: 'حمض الهيالورونيك', d: 'ترطيب عميق' },
        { n: 'ببتيدات', d: 'تدعم بنية الجلد' },
        { n: 'فيتامين E', d: 'مضاد للأكسدة' },
        { n: 'زبدة الشيا', d: 'تغذية' },
        { n: 'زيت الجوجوبا', d: 'ترطيب' },
        { n: 'جلسرين', d: 'مرطب' },
      ],
      fr: [
        { n: 'Rétinol (vitamine A)', d: 'renouvelle la peau' },
        { n: 'Acide hyaluronique', d: 'hydratation profonde' },
        { n: 'Peptides', d: 'soutiennent la structure de la peau' },
        { n: 'Vitamine E', d: 'antioxydante' },
        { n: 'Beurre de karité', d: 'nourrissant' },
        { n: 'Huile de jojoba', d: 'hydratante' },
        { n: 'Glycérine', d: 'hydratante' },
      ],
    },
    howTo: {
      ar: ['في المساء، نظفي وجهك بغسول الوجه وجففيه.', 'ضعي كمية صغيرة على الوجه والعنق.', 'دلكي بلطف حتى يمتص الكريم، قبل النوم.'],
      fr: ['Le soir, nettoyez le visage avec le gel nettoyant et séchez.', 'Prélevez une petite quantité pour le visage et le cou.', "Massez doucement jusqu'à absorption, avant de dormir."],
    },
    notes: {
      ar: [
        'بشرة حساسة: ليلة نعم وليلة لا خلال الأسبوع الأول.',
        'يحتوي على الريتينول: استعمليه في المساء فقط، مع واقي الشمس في الصباح.',
        'لا ينصح بمنتجات الريتينول خلال الحمل والرضاعة. استشيري طبيبك.',
        'تجنبي محيط العينين.',
      ],
      fr: [
        'Peau sensible : un soir sur deux pendant la première semaine.',
        "Contient du rétinol : à utiliser le soir uniquement, avec un écran solaire le matin.",
        "Les soins au rétinol sont déconseillés pendant la grossesse et l'allaitement. Demandez l'avis de votre médecin.",
        'Évitez le contour des yeux.',
      ],
    },
    faq: {
      ar: [
        { q: 'كيف أبدأ استعمال كريم الريتينول؟', a: 'إذا كانت بشرتك حساسة، استعمليه ليلة نعم وليلة لا خلال الأسبوع الأول، ثم كل ليلة.' },
        { q: 'هل يمكن استعمال كريم الليل في النهار؟', a: 'لا. يحتوي على الريتينول ويستعمل في المساء فقط. في الصباح استعملي واقي الشمس.' },
        { q: 'هل يمكن استعمال كريم الريتينول خلال الحمل؟', a: 'لا ينصح بمنتجات الريتينول خلال الحمل والرضاعة. استشيري طبيبك قبل الاستعمال.' },
      ],
      fr: [
        { q: 'Comment commencer une crème au rétinol ?', a: 'Si votre peau est sensible, appliquez-la un soir sur deux la première semaine, puis chaque soir.' },
        { q: 'Peut-on utiliser la crème de nuit le jour ?', a: "Non. Elle contient du rétinol et s'utilise le soir uniquement. Le matin, appliquez l'écran solaire." },
        { q: 'Peut-on utiliser une crème au rétinol pendant la grossesse ?', a: "Les soins au rétinol sont déconseillés pendant la grossesse et l'allaitement. Demandez l'avis de votre médecin." },
      ],
    },
    seoTitle: { ar: 'كريم الليل بالريتينول وحمض الهيالورونيك 50 مل', fr: 'Crème de nuit rétinol, acide hyaluronique, karité 50 ml' },
    seoDescription: {
      ar: 'كريم ليلي مجدد ومضاد للشيخوخة بالريتينول، حمض الهيالورونيك، الببتيدات وزبدة الشيا. 85 درهم، توصيل لجميع مدن المغرب.',
      fr: 'Crème de nuit régénérante et anti-âge au rétinol, acide hyaluronique, peptides et beurre de karité. 85 DH, livraison partout au Maroc.',
    },
  },
];

const sum = singles.reduce((t, p) => t + p.price, 0);

const pack: Product = {
  slug: 'routine-complete',
  sku: 'NV-PACK-3',
  kind: 'pack',
  price: PACK_PRICE,
  compareAt: sum > PACK_PRICE ? sum : undefined,
  size: '3',
  image: '/images/routine-complete',
  includes: singles.map((p) => p.slug),
  name: { ar: 'روتين العناية الكامل بالبشرة', fr: 'Routine complète soin visage' },
  short: {
    ar: 'المنتجات الثلاثة في علبة واحدة: غسول الوجه، واقي الشمس وكريم الليل.',
    fr: 'Les trois soins dans un seul coffret : gel nettoyant, écran solaire et crème de nuit.',
  },
  tags: { ar: ['3 منتجات', 'صباح ومساء'], fr: ['3 soins', 'Matin et soir'] },
  description: {
    ar: [
      'روتين NutraVie الكامل يجمع الخطوات الثلاث التي تحتاجها بشرتك كل يوم: تنظيف، حماية في النهار وتجديد في الليل.',
      'ثلاثة منتجات صممت لتستعمل معا، بثمن أقل من شرائها منفردة.',
    ],
    fr: [
      'La routine complète NutraVie réunit les trois gestes dont la peau a besoin chaque jour : nettoyer, protéger le jour et régénérer la nuit.',
      'Trois soins pensés pour fonctionner ensemble, à un prix inférieur à celui des produits achetés séparément.',
    ],
  },
  ingredients: {
    ar: [
      { n: 'غسول الوجه', d: 'ألوفيرا، بابونج، شاي أخضر، زيت شجرة الشاي' },
      { n: 'واقي الشمس', d: 'أكسيد الزنك، ثاني أكسيد التيتانيوم، نياسيناميد' },
      { n: 'كريم الليل', d: 'ريتينول، حمض الهيالورونيك، ببتيدات، زبدة الشيا' },
    ],
    fr: [
      { n: 'Gel nettoyant', d: 'aloe vera, camomille, thé vert, arbre à thé' },
      { n: 'Écran solaire', d: 'oxyde de zinc, dioxyde de titane, niacinamide' },
      { n: 'Crème de nuit', d: 'rétinol, acide hyaluronique, peptides, karité' },
    ],
  },
  howTo: {
    ar: ['في الصباح: غسول الوجه ثم واقي الشمس.', 'في المساء: غسول الوجه ثم كريم الليل قبل النوم.', 'كيفي الروتين حسب نوع بشرتك كما في الجدول أسفله.'],
    fr: ['Le matin : gel nettoyant puis écran solaire.', 'Le soir : gel nettoyant puis crème de nuit avant de dormir.', 'Adaptez la routine à votre type de peau, comme indiqué plus bas.'],
  },
  notes: {
    ar: ['كريم الليل يحتوي على الريتينول: لا ينصح به خلال الحمل والرضاعة.'],
    fr: ["La crème de nuit contient du rétinol : déconseillée pendant la grossesse et l'allaitement."],
  },
  faq: {
    ar: [
      { q: 'ماذا يوجد في علبة الروتين الكامل؟', a: 'غسول الوجه 120 مل، واقي شمسي معدني SPF 50+‎ بحجم 50 مل وكريم الليل 50 مل.' },
      { q: 'هل الروتين مناسب للبشرة الدهنية والجافة؟', a: 'نعم، مع تغيير بسيط: البشرة الدهنية تستعمل الغسول صباحا ومساء، والبشرة الجافة في المساء فقط.' },
    ],
    fr: [
      { q: 'Que contient le coffret routine complète ?', a: 'Le gel nettoyant 120 ml, l’écran solaire minéral SPF 50+ 50 ml et la crème de nuit 50 ml.' },
      { q: 'La routine convient-elle aux peaux grasses et sèches ?', a: 'Oui, avec une petite différence : la peau grasse utilise le gel matin et soir, la peau sèche le soir uniquement.' },
    ],
  },
  seoTitle: { ar: 'روتين العناية بالبشرة الكامل: 3 منتجات', fr: 'Routine soin visage complète : coffret 3 produits' },
  seoDescription: {
    ar: `روتين كامل للعناية بالبشرة: غسول الوجه، واقي شمسي معدني وكريم الليل بالريتينول بـ ${PACK_PRICE} درهم. توصيل لجميع مدن المغرب والدفع عند الاستلام.`,
    fr: `Routine visage complète : gel nettoyant, écran solaire minéral et crème de nuit au rétinol à ${PACK_PRICE} DH. Livraison partout au Maroc, paiement à la livraison.`,
  },
};

export const products: Product[] = [pack, ...singles];
export const singleProducts = singles;
export const packProduct = pack;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
