import type { Locale } from './site';

type L<T = string> = Record<Locale, T>;

export type Product = {
  slug: string;
  sku: string;
  kind: 'single' | 'pack';
  price: number;
  compareAt?: number;
  size: string;
  image: string;
  includes?: string[];
  step?: L;
  name: L;
  short: L;
  tags: L<string[]>;
  description: L<string[]>;
  ingredients: L<string[]>;
  howTo: L<string[]>;
  faq: L<{ q: string; a: string }[]>;
  seoTitle: L;
  seoDescription: L;
};

/* ثمن الباك: بدلو من هنا فقط. الثمن المشطوب كيتحسب أوتوماتيكيا من مجموع المنتجات. */
const PACK_PRICE = 259;

const singles: Product[] = [
  {
    slug: 'gel-nettoyant-visage',
    sku: 'NV-GEL-120',
    kind: 'single',
    price: 85,
    size: '120 ml',
    image: '/images/gel-nettoyant-visage',
    step: { ar: 'صباحا ومساء', fr: 'Matin et soir' },
    name: { ar: 'غسول الوجه بالألوفيرا والبابونج', fr: 'Gel nettoyant visage aloe vera et camomille' },
    short: {
      ar: 'جل منظف لطيف ينظف البشرة ويهدئها دون أن يجففها.',
      fr: 'Un gel doux qui nettoie et apaise la peau sans la dessécher.',
    },
    tags: { ar: ['تنظيف لطيف', 'مهدئ', 'مرطب'], fr: ['Nettoyage doux', 'Apaisant', 'Hydratant'] },
    description: {
      ar: [
        'غسول الوجه NutraVie جل خفيف بالألوفيرا والبابونج والشاي الأخضر. يزيل الأوساخ والدهون الزائدة وآثار واقي الشمس، ويترك البشرة نظيفة ومرتاحة.',
        'هو الخطوة الأولى في روتين العناية: بشرة نظيفة تستقبل الكريم وواقي الشمس بشكل أفضل.',
      ],
      fr: [
        "Le gel nettoyant NutraVie est un gel léger à l'aloe vera, à la camomille et au thé vert. Il retire les impuretés, l'excès de sébum et les restes d'écran solaire, et laisse la peau propre et confortable.",
        "C'est la première étape de la routine : une peau propre reçoit mieux la crème et la protection solaire.",
      ],
    },
    ingredients: { ar: ['ألوفيرا', 'بابونج', 'شاي أخضر'], fr: ['Aloe vera', 'Camomille', 'Thé vert'] },
    howTo: {
      ar: ['بللي وجهك بماء فاتر.', 'ضعي ضغطة واحدة من الجل ودلكي بلطف لمدة 30 ثانية.', 'اشطفي جيدا وجففي بمنشفة نظيفة.'],
      fr: ["Mouillez le visage à l'eau tiède.", 'Appliquez une pression de gel et massez doucement pendant 30 secondes.', 'Rincez bien et séchez avec une serviette propre.'],
    },
    faq: {
      ar: [
        { q: 'كم مرة أستعمل غسول الوجه في اليوم؟', a: 'مرتين: في الصباح، وفي المساء قبل كريم الليل.' },
        { q: 'كم تدوم عبوة 120 مل؟', a: 'تقريبا شهرين مع استعمال مرتين في اليوم بضغطة واحدة.' },
      ],
      fr: [
        { q: "Combien de fois par jour utiliser le gel nettoyant ?", a: 'Deux fois : le matin, puis le soir avant la crème de nuit.' },
        { q: 'Combien de temps dure le flacon de 120 ml ?', a: "Environ deux mois, à raison d'une pression matin et soir." },
      ],
    },
    seoTitle: {
      ar: 'غسول الوجه بالألوفيرا والبابونج 120 مل',
      fr: 'Gel nettoyant visage aloe vera, camomille, thé vert 120 ml',
    },
    seoDescription: {
      ar: 'غسول وجه لطيف بالألوفيرا والبابونج والشاي الأخضر. 85 درهم، توصيل لجميع مدن المغرب والدفع عند الاستلام.',
      fr: "Gel nettoyant doux à l'aloe vera, camomille et thé vert. 85 DH, livraison partout au Maroc, paiement à la livraison.",
    },
  },
  {
    slug: 'ecran-solaire-mineral-spf50',
    sku: 'NV-SPF-50',
    kind: 'single',
    price: 130,
    size: '50 ml',
    image: '/images/ecran-solaire-mineral-spf50',
    step: { ar: 'كل صباح', fr: 'Chaque matin' },
    name: { ar: 'واقي شمسي معدني SPF 50+‎', fr: 'Écran solaire minéral SPF 50+‎' },
    short: {
      ar: 'حماية يومية من الشمس بفلاتر معدنية، بلمسة غير مرئية ومرطبة.',
      fr: 'Une protection solaire quotidienne à filtres minéraux, au fini invisible et hydratant.',
    },
    tags: { ar: ['غير مرئي', 'مرطب', 'حماية عالية'], fr: ['Invisible', 'Hydratant', 'Haute protection'] },
    description: {
      ar: [
        'واقي الشمس المعدني NutraVie بمعامل حماية SPF 50+‎ يحمي بشرتك كل يوم من أشعة الشمس. قوامه خفيف، يرطب البشرة ولا يترك أثرا أبيض ظاهرا.',
        'شمس المغرب قوية طيلة السنة، ولذلك واقي الشمس هو آخر خطوة في روتين الصباح، صيفا وشتاء.',
      ],
      fr: [
        "L'écran solaire minéral NutraVie SPF 50+‎ protège la peau du soleil au quotidien. Sa texture légère hydrate et ne laisse pas de film blanc visible.",
        "Le soleil marocain est fort toute l'année : l'écran solaire est la dernière étape de la routine du matin, été comme hiver.",
      ],
    },
    ingredients: { ar: ['فلاتر معدنية'], fr: ['Filtres minéraux'] },
    howTo: {
      ar: ['ضعيه كآخر خطوة في روتين الصباح، على بشرة نظيفة.', 'وزعي كمية كافية على الوجه والعنق قبل الخروج بـ 15 دقيقة.', 'أعيدي وضعه كل ساعتين عند التعرض المباشر للشمس.'],
      fr: ['Appliquez-le en dernière étape de la routine du matin, sur peau propre.', 'Répartissez une quantité généreuse sur le visage et le cou, 15 minutes avant de sortir.', "Renouvelez toutes les deux heures en cas d'exposition directe."],
    },
    faq: {
      ar: [
        { q: 'هل أستعمل واقي الشمس حتى في الشتاء؟', a: 'نعم. الأشعة فوق البنفسجية تصل إلى البشرة طيلة السنة، حتى في الأيام الغائمة.' },
        { q: 'هل يترك أثرا أبيض على البشرة؟', a: 'قوامه خفيف وغير مرئي بعد توزيعه جيدا على البشرة.' },
      ],
      fr: [
        { q: "Faut-il mettre de l'écran solaire en hiver ?", a: "Oui. Les UV atteignent la peau toute l'année, même par temps couvert." },
        { q: 'Laisse-t-il des traces blanches ?', a: 'Sa texture légère devient invisible une fois bien répartie sur la peau.' },
      ],
    },
    seoTitle: { ar: 'واقي شمسي معدني SPF 50+‎ للوجه 50 مل', fr: 'Écran solaire minéral SPF 50+‎ visage 50 ml' },
    seoDescription: {
      ar: 'واقي شمسي معدني SPF 50+‎ بلمسة غير مرئية ومرطبة. 130 درهم، توصيل لجميع مدن المغرب والدفع عند الاستلام.',
      fr: 'Écran solaire minéral SPF 50+‎ invisible et hydratant. 130 DH, livraison partout au Maroc, paiement à la livraison.',
    },
  },
  {
    slug: 'creme-de-nuit',
    sku: 'NV-NUIT-50',
    kind: 'single',
    price: 65,
    size: '50 ml',
    image: '/images/creme-de-nuit',
    step: { ar: 'كل مساء', fr: 'Chaque soir' },
    name: { ar: 'كريم الليل بفيتامين A و E وزبدة الشيا', fr: 'Crème de nuit vitamines A, E et beurre de karité' },
    short: {
      ar: 'كريم مغذ يرطب البشرة ويجددها خلال النوم.',
      fr: 'Une crème nourrissante qui hydrate et régénère la peau pendant la nuit.',
    },
    tags: { ar: ['مجدد', 'مرطب', 'مغذ', 'مضاد للأكسدة'], fr: ['Régénérante', 'Hydratante', 'Nourrissante', 'Antioxydante'] },
    description: {
      ar: [
        'كريم الليل NutraVie يجمع فيتامين A وفيتامين E وزبدة الشيا. يغذي البشرة ويرطبها في الوقت الذي تجدد فيه نفسها، لتستيقظي ببشرة ناعمة ومرتاحة.',
        'لأنه يحتوي على فيتامين A، يستعمل في المساء فقط، مع واقي الشمس في الصباح.',
      ],
      fr: [
        "La crème de nuit NutraVie associe vitamine A, vitamine E et beurre de karité. Elle nourrit et hydrate la peau au moment où elle se régénère, pour un réveil avec une peau souple et confortable.",
        "Comme elle contient de la vitamine A, elle s'utilise uniquement le soir, avec un écran solaire le matin.",
      ],
    },
    ingredients: { ar: ['فيتامين A', 'فيتامين E', 'زبدة الشيا'], fr: ['Vitamine A', 'Vitamine E', 'Beurre de karité'] },
    howTo: {
      ar: ['نظفي وجهك بغسول الوجه وجففيه.', 'ضعي كمية صغيرة على الوجه والعنق.', 'دلكي بحركات دائرية حتى يمتص الكريم.'],
      fr: ['Nettoyez le visage avec le gel nettoyant et séchez.', 'Prélevez une petite quantité pour le visage et le cou.', "Massez en mouvements circulaires jusqu'à absorption."],
    },
    faq: {
      ar: [
        { q: 'هل يمكن استعمال كريم الليل في النهار؟', a: 'لا، هو مخصص للمساء. في النهار استعملي واقي الشمس.' },
        { q: 'متى أضع كريم الليل؟', a: 'في المساء، بعد تنظيف الوجه مباشرة وقبل النوم.' },
      ],
      fr: [
        { q: 'Peut-on utiliser la crème de nuit le jour ?', a: "Non, elle est faite pour le soir. En journée, utilisez l'écran solaire." },
        { q: 'Quand appliquer la crème de nuit ?', a: 'Le soir, juste après le nettoyage du visage et avant de dormir.' },
      ],
    },
    seoTitle: { ar: 'كريم الليل بفيتامين A و E وزبدة الشيا 50 مل', fr: 'Crème de nuit vitamine A, vitamine E, karité 50 ml' },
    seoDescription: {
      ar: 'كريم ليلي مغذ ومجدد بفيتامين A و E وزبدة الشيا. 65 درهم، توصيل لجميع مدن المغرب والدفع عند الاستلام.',
      fr: 'Crème de nuit nourrissante et régénérante aux vitamines A, E et beurre de karité. 65 DH, livraison partout au Maroc.',
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
      'روتين NutraVie الكامل يجمع الخطوات الثلاث التي تحتاجها بشرتك كل يوم: تنظيف، حماية في النهار وتغذية في الليل.',
      'ثلاثة منتجات صممت لتستعمل معا، بثمن أقل من شرائها منفردة.',
    ],
    fr: [
      'La routine complète NutraVie réunit les trois gestes dont la peau a besoin chaque jour : nettoyer, protéger le jour et nourrir la nuit.',
      'Trois soins pensés pour fonctionner ensemble, à un prix inférieur à celui des produits achetés séparément.',
    ],
  },
  ingredients: {
    ar: ['ألوفيرا', 'بابونج', 'شاي أخضر', 'فيتامين A', 'فيتامين E', 'زبدة الشيا'],
    fr: ['Aloe vera', 'Camomille', 'Thé vert', 'Vitamine A', 'Vitamine E', 'Beurre de karité'],
  },
  howTo: {
    ar: ['في الصباح: غسول الوجه ثم واقي الشمس.', 'في المساء: غسول الوجه ثم كريم الليل.', 'واظبي على الروتين كل يوم.'],
    fr: ["Le matin : gel nettoyant puis écran solaire.", 'Le soir : gel nettoyant puis crème de nuit.', 'Gardez la routine chaque jour.'],
  },
  faq: {
    ar: [
      { q: 'ماذا يوجد في علبة الروتين الكامل؟', a: 'غسول الوجه 120 مل، واقي شمسي معدني SPF 50+‎ 50 مل وكريم الليل 50 مل.' },
      { q: 'بأي ترتيب أستعمل المنتجات؟', a: 'صباحا: الغسول ثم واقي الشمس. مساء: الغسول ثم كريم الليل.' },
    ],
    fr: [
      { q: 'Que contient le coffret routine complète ?', a: 'Le gel nettoyant 120 ml, l’écran solaire minéral SPF 50+‎ 50 ml et la crème de nuit 50 ml.' },
      { q: 'Dans quel ordre utiliser les produits ?', a: 'Le matin : gel puis écran solaire. Le soir : gel puis crème de nuit.' },
    ],
  },
  seoTitle: { ar: 'روتين العناية بالبشرة الكامل: 3 منتجات', fr: 'Routine soin visage complète : coffret 3 produits' },
  seoDescription: {
    ar: `روتين كامل للعناية بالبشرة: غسول الوجه، واقي شمسي SPF 50+‎ وكريم الليل بـ ${PACK_PRICE} درهم. توصيل لجميع مدن المغرب والدفع عند الاستلام.`,
    fr: `Routine visage complète : gel nettoyant, écran solaire SPF 50+‎ et crème de nuit à ${PACK_PRICE} DH. Livraison partout au Maroc, paiement à la livraison.`,
  },
};

export const products: Product[] = [pack, ...singles];
export const singleProducts = singles;
export const packProduct = pack;

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
