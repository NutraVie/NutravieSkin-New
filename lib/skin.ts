import type { Locale } from './site';

type L<T = string> = Record<Locale, T>;

export type SkinType = {
  slug: string;
  routine: number; // ترتيب النوع في dict.routine.types
  posts: string[];
  name: L;
  title: L;
  description: L;
  intro: L;
  problems: L<{ t: string; d: string }[]>;
  solutions: L<{ ing: string; does: string; product: string }[]>;
  caution: L<string[]>;
  faq: L<{ q: string; a: string }[]>;
};

const GEL = 'gel-nettoyant-visage';
const SPF = 'ecran-solaire-mineral-spf50';
const NUIT = 'creme-de-nuit';

export const skinTypes: SkinType[] = [
  {
    slug: 'peau-grasse',
    routine: 0,
    posts: ['peau-grasse-brillance-pores', 'boutons-visage-routine', 'taches-brunes-marques-boutons'],
    name: { ar: 'البشرة الدهنية المعرضة للحبوب', fr: 'Peau grasse à tendance acnéique' },
    title: {
      ar: 'روتين البشرة الدهنية والحبوب: المكونات والمنتجات المناسبة',
      fr: 'Routine peau grasse à tendance acnéique : actifs et soins',
    },
    description: {
      ar: 'مشاكل البشرة الدهنية (لمعان، مسام واسعة، حبوب) والمكونات التي تساعدها: زيت شجرة الشاي، النياسيناميد والريتينول. روتين صباح ومساء في ثلاث خطوات.',
      fr: 'Brillance, pores dilatés, boutons : les actifs qui aident la peau grasse (arbre à thé, niacinamide, rétinol) et une routine matin et soir.',
    },
    intro: {
      ar: 'البشرة الدهنية تفرز زيوتا أكثر مما تحتاج. النتيجة لمعان يعود بعد ساعات من الغسل، ومسام تنسد بسهولة. الهدف ليس تجفيف البشرة، بل تنظيفها بلطف وحمايتها وتجديدها.',
      fr: "La peau grasse produit plus de sébum que nécessaire. Résultat : une brillance qui revient quelques heures après le nettoyage et des pores qui se bouchent facilement. Le but n'est pas de dessécher la peau, mais de la nettoyer en douceur, la protéger et la renouveler.",
    },
    problems: {
      ar: [
        { t: 'لمعان زائد', d: 'الغدد الدهنية نشيطة، خصوصا في الجبهة والأنف والذقن.' },
        { t: 'مسام واسعة ورؤوس سوداء', d: 'الدهون والخلايا الميتة تتراكم داخل المسام.' },
        { t: 'حبوب متكررة', d: 'المسام المسدودة تتهيج بسهولة.' },
        { t: 'آثار بعد الحبوب', d: 'تبقى أسابيع، وتزداد وضوحا مع الشمس.' },
      ],
      fr: [
        { t: 'Excès de brillance', d: 'Les glandes sébacées sont très actives, surtout sur le front, le nez et le menton.' },
        { t: 'Pores dilatés et points noirs', d: "Le sébum et les cellules mortes s'accumulent dans les pores." },
        { t: 'Boutons à répétition', d: "Les pores obstrués s'irritent facilement." },
        { t: 'Marques après les boutons', d: 'Elles durent des semaines et foncent au soleil.' },
      ],
    },
    solutions: {
      ar: [
        { ing: 'زيت شجرة الشاي', does: 'ينقي البشرة عند كل غسل.', product: GEL },
        { ing: 'شاي أخضر', does: 'مضاد للأكسدة يناسب البشرة الدهنية.', product: GEL },
        { ing: 'عوامل تنظيف نباتية لطيفة', does: 'تزيل الدهون الزائدة دون تجفيف البشرة.', product: GEL },
        { ing: 'نياسيناميد (فيتامين B3)', does: 'يخفف مظهر المسام والعيوب.', product: SPF },
        { ing: 'أكسيد الزنك', does: 'يحمي من الشمس التي تجعل آثار الحبوب أغمق.', product: SPF },
        { ing: 'ريتينول', does: 'يجدد سطح البشرة ويحسن ملمسها.', product: NUIT },
      ],
      fr: [
        { ing: "Huile d'arbre à thé", does: 'Purifie la peau à chaque nettoyage.', product: GEL },
        { ing: 'Thé vert', does: 'Un antioxydant qui convient aux peaux grasses.', product: GEL },
        { ing: 'Agents lavants végétaux doux', does: "Retirent l'excès de sébum sans dessécher.", product: GEL },
        { ing: 'Niacinamide (vitamine B3)', does: "Atténue l'apparence des pores et des imperfections.", product: SPF },
        { ing: 'Oxyde de zinc', does: 'Protège du soleil, qui fonce les marques de boutons.', product: SPF },
        { ing: 'Rétinol', does: 'Renouvelle la surface de la peau et affine son grain.', product: NUIT },
      ],
    },
    caution: {
      ar: ['الحبوب الشديدة أو المؤلمة أو التي تترك ندوبا تحتاج استشارة طبيب جلد.', 'لا تغسلي وجهك أكثر من مرتين في اليوم: الغسل الزائد يهيج البشرة.'],
      fr: ['Des boutons sévères, douloureux ou qui laissent des cicatrices demandent un avis dermatologique.', "Ne lavez pas le visage plus de deux fois par jour : l'excès de nettoyage irrite la peau."],
    },
    faq: {
      ar: [
        { q: 'هل البشرة الدهنية تحتاج إلى ترطيب؟', a: 'نعم. البشرة الدهنية قد ينقصها الماء حتى مع كثرة الدهون. واقي الشمس في الصباح وكريم الليل في المساء يوفران الترطيب.' },
        { q: 'هل واقي الشمس يناسب البشرة الدهنية؟', a: 'نعم، وهو ضروري لأن الشمس تجعل آثار الحبوب أغمق. واقي NutraVie قوامه خفيف وغير مرئي ويحتوي على النياسيناميد.' },
        { q: 'متى تظهر النتائج؟', a: 'البشرة تتجدد في حوالي أربعة أسابيع. واظبي على الروتين شهرا على الأقل قبل الحكم عليه.' },
      ],
      fr: [
        { q: "La peau grasse a-t-elle besoin d'hydratation ?", a: "Oui. Une peau grasse peut manquer d'eau malgré l'excès de sébum. L'écran solaire le matin et la crème de nuit le soir apportent cette hydratation." },
        { q: "L'écran solaire convient-il aux peaux grasses ?", a: "Oui, et il est indispensable car le soleil fonce les marques de boutons. L'écran NutraVie a une texture légère et invisible, et contient de la niacinamide." },
        { q: 'Quand voit-on les résultats ?', a: 'La peau se renouvelle en quatre semaines environ. Gardez la routine au moins un mois avant de juger.' },
      ],
    },
  },
  {
    slug: 'peau-seche',
    routine: 1,
    posts: ['peau-seche-tiraillements', 'rides-ridules-routine-anti-age'],
    name: { ar: 'البشرة الجافة', fr: 'Peau sèche' },
    title: {
      ar: 'روتين البشرة الجافة: ترطيب وتغذية بالمكونات المناسبة',
      fr: 'Routine peau sèche : hydrater et nourrir avec les bons actifs',
    },
    description: {
      ar: 'مشاكل البشرة الجافة (شد، قشور، بهتان) والمكونات التي ترطبها وتغذيها: حمض الهيالورونيك، زبدة الشيا، زيت الجوجوبا والجلسرين. روتين صباح ومساء.',
      fr: 'Tiraillements, desquamation, teint terne : les actifs qui soulagent la peau sèche (acide hyaluronique, karité, jojoba) et sa routine.',
    },
    intro: {
      ar: 'البشرة الجافة ينقصها الماء والدهون معا. حاجزها الطبيعي ضعيف، فتفقد رطوبتها بسرعة. تحتاج تنظيفا أقل، وترطيبا وتغذية أكثر.',
      fr: "La peau sèche manque à la fois d'eau et de lipides. Sa barrière naturelle est fragile et elle perd vite son hydratation. Il lui faut moins de nettoyage, plus d'hydratation et de nutrition.",
    },
    problems: {
      ar: [
        { t: 'شد بعد الغسل', d: 'الغسل المتكرر يزيل الدهون القليلة التي تحمي البشرة.' },
        { t: 'قشور وخشونة', d: 'سطح البشرة يجف ويتقشر، خصوصا في الشتاء.' },
        { t: 'بهتان', d: 'البشرة الجافة تعكس الضوء أقل.' },
        { t: 'خطوط رفيعة أوضح', d: 'نقص الماء يبرز الخطوط حول العينين والفم.' },
      ],
      fr: [
        { t: 'Tiraillements après le nettoyage', d: 'Les lavages répétés retirent le peu de lipides qui protègent la peau.' },
        { t: 'Desquamation et rugosité', d: 'La surface de la peau se dessèche et pèle, surtout en hiver.' },
        { t: 'Teint terne', d: 'Une peau sèche reflète moins la lumière.' },
        { t: 'Ridules plus visibles', d: "Le manque d'eau marque les ridules autour des yeux et de la bouche." },
      ],
    },
    solutions: {
      ar: [
        { ing: 'حمض الهيالورونيك', does: 'يجذب الماء ويحتفظ به في البشرة.', product: NUIT },
        { ing: 'زبدة الشيا', does: 'تغذي البشرة وتحد من فقدان الماء.', product: NUIT },
        { ing: 'زيت الجوجوبا', does: 'يلين البشرة ويرطبها.', product: NUIT },
        { ing: 'جلسرين', does: 'مرطب يوجد في واقي الشمس وكريم الليل.', product: SPF },
        { ing: 'ألوفيرا', does: 'يهدئ ويرطب أثناء التنظيف.', product: GEL },
        { ing: 'فيتامين E', does: 'مضاد للأكسدة يحمي البشرة.', product: NUIT },
      ],
      fr: [
        { ing: 'Acide hyaluronique', does: "Attire l'eau et la retient dans la peau.", product: NUIT },
        { ing: 'Beurre de karité', does: "Nourrit la peau et limite la perte d'eau.", product: NUIT },
        { ing: 'Huile de jojoba', does: 'Assouplit et hydrate la peau.', product: NUIT },
        { ing: 'Glycérine', does: "Un hydratant présent dans l'écran solaire et la crème de nuit.", product: SPF },
        { ing: 'Aloe vera', does: 'Apaise et hydrate pendant le nettoyage.', product: GEL },
        { ing: 'Vitamine E', does: 'Un antioxydant qui protège la peau.', product: NUIT },
      ],
    },
    caution: {
      ar: ['استعملي ماء فاترا، فالماء الساخن يزيد الجفاف.', 'كريم الليل يحتوي على الريتينول: إذا شعرت بجفاف زائد، استعمليه ليلة نعم وليلة لا.'],
      fr: ["Utilisez de l'eau tiède : l'eau chaude accentue la sécheresse.", 'La crème de nuit contient du rétinol : si la peau tiraille davantage, appliquez-la un soir sur deux.'],
    },
    faq: {
      ar: [
        { q: 'لماذا لا أستعمل الغسول في الصباح؟', a: 'البشرة الجافة لا تفرز دهونا كثيرة في الليل. يكفي غسل الوجه بالماء صباحا، والاحتفاظ بالغسول للمساء.' },
        { q: 'هل واقي الشمس يكفي للترطيب في الصباح؟', a: 'واقي NutraVie يحتوي على الجلسرين ويمنح ترطيبا جيدا، ويكفي وحده في الصباح.' },
        { q: 'هل الريتينول يناسب البشرة الجافة؟', a: 'نعم، مع التدرج. كريم الليل يجمع الريتينول مع حمض الهيالورونيك وزبدة الشيا للحد من الجفاف.' },
      ],
      fr: [
        { q: 'Pourquoi ne pas utiliser le gel le matin ?', a: "La peau sèche produit peu de sébum la nuit. Un rinçage à l'eau suffit le matin, le gel se garde pour le soir." },
        { q: "L'écran solaire suffit-il pour hydrater le matin ?", a: "L'écran NutraVie contient de la glycérine et apporte une bonne hydratation. Il suffit seul le matin." },
        { q: 'Le rétinol convient-il aux peaux sèches ?', a: "Oui, progressivement. La crème de nuit associe le rétinol à l'acide hyaluronique et au karité pour limiter la sécheresse." },
      ],
    },
  },
  {
    slug: 'peau-sensible',
    routine: 2,
    posts: ['peau-sensible-rougeurs', 'comment-commencer-retinol'],
    name: { ar: 'البشرة الحساسة', fr: 'Peau sensible' },
    title: {
      ar: 'روتين البشرة الحساسة: تهدئة وحماية بلطف',
      fr: 'Routine peau sensible : apaiser et protéger en douceur',
    },
    description: {
      ar: 'مشاكل البشرة الحساسة (احمرار، وخز، تهيج) والمكونات المهدئة: البابونج، الألوفيرا، العرقسوس والفلاتر المعدنية. روتين تدريجي صباحا ومساء.',
      fr: 'Rougeurs, picotements, irritations : les actifs apaisants (camomille, aloe vera, réglisse, filtres minéraux) et une routine progressive.',
    },
    intro: {
      ar: 'البشرة الحساسة تتفاعل بسرعة مع الشمس والحرارة والمنتجات الجديدة. القاعدة معها: منتجات قليلة، مكونات مهدئة، وإدخال كل جديد بالتدريج.',
      fr: 'La peau sensible réagit vite au soleil, à la chaleur et aux nouveaux produits. La règle : peu de produits, des actifs apaisants et une introduction progressive.',
    },
    problems: {
      ar: [
        { t: 'احمرار', d: 'يظهر بعد الغسل، أو مع الحرارة وتغير الجو.' },
        { t: 'وخز أو حرقان', d: 'عند وضع بعض المنتجات.' },
        { t: 'تهيج مع الشمس', d: 'الأشعة فوق البنفسجية تزيد الاحمرار.' },
        { t: 'جفاف وشد', d: 'حاجز البشرة ضعيف ويفقد الماء بسرعة.' },
      ],
      fr: [
        { t: 'Rougeurs', d: 'Elles apparaissent après le nettoyage, avec la chaleur ou les changements de temps.' },
        { t: 'Picotements ou brûlures', d: "À l'application de certains produits." },
        { t: 'Réactions au soleil', d: 'Les UV accentuent les rougeurs.' },
        { t: 'Sécheresse et tiraillements', d: "La barrière de la peau est fragile et perd vite son eau." },
      ],
    },
    solutions: {
      ar: [
        { ing: 'بابونج', does: 'يهدئ البشرة أثناء التنظيف.', product: GEL },
        { ing: 'ألوفيرا', does: 'يهدئ ويرطب.', product: GEL },
        { ing: 'خلاصة العرقسوس', does: 'خلاصة مهدئة في واقي الشمس.', product: SPF },
        { ing: 'فلاتر معدنية', does: 'أكسيد الزنك وثاني أكسيد التيتانيوم، يختارها كثيرون من أصحاب البشرة الحساسة.', product: SPF },
        { ing: 'حمض الهيالورونيك وزبدة الشيا', does: 'يرطبان ويغذيان حاجز البشرة.', product: NUIT },
      ],
      fr: [
        { ing: 'Camomille', does: 'Apaise la peau pendant le nettoyage.', product: GEL },
        { ing: 'Aloe vera', does: 'Apaise et hydrate.', product: GEL },
        { ing: 'Extrait de réglisse', does: "Un extrait apaisant présent dans l'écran solaire.", product: SPF },
        { ing: 'Filtres minéraux', does: 'Oxyde de zinc et dioxyde de titane, souvent choisis par les peaux sensibles.', product: SPF },
        { ing: 'Acide hyaluronique et karité', does: 'Hydratent et nourrissent la barrière de la peau.', product: NUIT },
      ],
    },
    caution: {
      ar: [
        'جربي كل منتج على مساحة صغيرة خلف الأذن أو على الذراع، وانتظري 24 ساعة.',
        'الغسول يحتوي على زيوت عطرية (شجرة الشاي واللافندر) قد لا تتحملها بعض أنواع البشرة الحساسة جدا.',
        'كريم الليل يحتوي على الريتينول: ليلة نعم وليلة لا خلال الأسبوع الأول.',
        'إذا استمر الاحمرار أو الحرقان، أوقفي المنتج واستشيري طبيب جلد.',
      ],
      fr: [
        "Testez chaque produit sur une petite zone, derrière l'oreille ou sur le bras, et attendez 24 heures.",
        "Le gel contient des huiles essentielles (arbre à thé, lavande) que certaines peaux très réactives tolèrent mal.",
        'La crème de nuit contient du rétinol : un soir sur deux pendant la première semaine.',
        'Si les rougeurs ou les brûlures persistent, arrêtez le produit et consultez un dermatologue.',
      ],
    },
    faq: {
      ar: [
        { q: 'هل يمكن استعمال الريتينول على بشرة حساسة؟', a: 'نعم، بالتدريج: ليلة نعم وليلة لا في الأسبوع الأول، ثم كل ليلة إذا تحملته بشرتك.' },
        { q: 'لماذا واقي الشمس المعدني للبشرة الحساسة؟', a: 'الفلاتر المعدنية تبقى على سطح البشرة، ويختارها كثيرون من أصحاب البشرة الحساسة. والشمس نفسها تزيد الاحمرار.' },
        { q: 'بأي منتج أبدأ؟', a: 'أدخلي المنتجات واحدا واحدا: واقي الشمس أولا، ثم الغسول، ثم كريم الليل، مع بضعة أيام بين كل منتج.' },
      ],
      fr: [
        { q: 'Peut-on utiliser du rétinol sur une peau sensible ?', a: 'Oui, progressivement : un soir sur deux la première semaine, puis chaque soir si la peau le tolère.' },
        { q: "Pourquoi un écran minéral pour les peaux sensibles ?", a: 'Les filtres minéraux restent à la surface de la peau et sont souvent choisis par les peaux sensibles. Le soleil lui-même accentue les rougeurs.' },
        { q: 'Par quel produit commencer ?', a: "Introduisez les produits un par un : l'écran solaire d'abord, puis le gel, puis la crème de nuit, avec quelques jours entre chacun." },
      ],
    },
  },
];

export function getSkin(slug: string) {
  return skinTypes.find((s) => s.slug === slug);
}
