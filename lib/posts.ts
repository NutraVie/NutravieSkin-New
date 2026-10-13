import type { Locale } from './site';

type L<T = string> = Record<Locale, T>;
type Section = { h: string; p: string[] };

export type Post = {
  slug: string;
  date: string;
  product: string;
  title: L;
  description: L;
  sections: L<Section[]>;
};

export const posts: Post[] = [
  {
    slug: 'ordre-routine-soin-visage',
    date: '2026-10-10',
    product: 'routine-complete',
    title: {
      ar: 'ترتيب روتين العناية بالبشرة صباحا ومساء',
      fr: 'Routine soin visage : dans quel ordre appliquer ses produits',
    },
    description: {
      ar: 'ما هو الترتيب الصحيح لمنتجات العناية بالبشرة؟ دليل بسيط لروتين الصباح والمساء في ثلاث خطوات.',
      fr: "Quel ordre suivre pour sa routine visage ? Un guide simple pour le matin et le soir, en trois étapes.",
    },
    sections: {
      ar: [
        { h: 'لماذا يهم الترتيب؟', p: ['كل منتج يؤدي دورا مختلفا. المنظف يهيئ البشرة، الكريم يغذيها، وواقي الشمس يحميها. إذا تغير الترتيب، يقل مفعول المنتجات.', 'القاعدة العامة: نبدأ بالتنظيف، وننتهي بالحماية في النهار وبالتغذية في الليل.'] },
        { h: 'روتين الصباح', p: ['اغسلي وجهك بغسول لطيف لإزالة الدهون التي تراكمت خلال الليل.', 'اختمي بواقي الشمس، حتى في الأيام الغائمة وحتى إن بقيت في البيت قرب النافذة. واقي الشمس دائما آخر خطوة.'] },
        { h: 'روتين المساء', p: ['نظفي وجهك جيدا لإزالة واقي الشمس والغبار وآثار اليوم.', 'ضعي كريم الليل على بشرة نظيفة وجافة. الليل هو الوقت الذي تجدد فيه البشرة نفسها.'] },
        { h: 'أخطاء شائعة', p: ['استعمال منتجات كثيرة دفعة واحدة. روتين قصير تواظبين عليه أفضل من روتين طويل تتركينه بعد أسبوع.', 'نسيان واقي الشمس في الشتاء، وفرك الوجه بقوة عند التنظيف.'] },
      ],
      fr: [
        { h: "Pourquoi l'ordre compte", p: ["Chaque soin a un rôle. Le nettoyant prépare la peau, la crème la nourrit, l'écran solaire la protège. Dans le désordre, les produits sont moins efficaces.", 'La règle : on commence par nettoyer, on termine par protéger le jour et par nourrir la nuit.'] },
        { h: 'La routine du matin', p: ["Lavez le visage avec un gel doux pour retirer le sébum accumulé pendant la nuit.", "Terminez par l'écran solaire, même par temps couvert et même à l'intérieur près d'une fenêtre. L'écran solaire est toujours la dernière étape."] },
        { h: 'La routine du soir', p: ["Nettoyez bien le visage pour retirer l'écran solaire, la poussière et les traces de la journée.", "Appliquez la crème de nuit sur peau propre et sèche. La nuit est le moment où la peau se régénère."] },
        { h: 'Les erreurs courantes', p: ["Utiliser trop de produits à la fois. Une routine courte que l'on garde vaut mieux qu'une routine longue abandonnée au bout d'une semaine.", "Oublier l'écran solaire en hiver, et frotter le visage trop fort au nettoyage."] },
      ],
    },
  },
  {
    slug: 'ecran-solaire-mineral-ou-chimique',
    date: '2026-10-10',
    product: 'ecran-solaire-mineral-spf50',
    title: {
      ar: 'واقي الشمس المعدني أم الكيميائي: ما الفرق؟',
      fr: 'Écran solaire minéral ou chimique : quelle différence ?',
    },
    description: {
      ar: 'الفرق بين واقي الشمس المعدني والكيميائي، معنى SPF 50+‎ وكيف تستعملين واقي الشمس بالطريقة الصحيحة.',
      fr: "La différence entre écran solaire minéral et chimique, ce que veut dire SPF 50+‎ et comment bien l'appliquer.",
    },
    sections: {
      ar: [
        { h: 'نوعان من الفلاتر', p: ['واقي الشمس المعدني يعتمد على فلاتر معدنية مثل أكسيد الزنك وثاني أكسيد التيتانيوم. تبقى هذه الفلاتر على سطح البشرة وتحميها من الأشعة فوق البنفسجية.', 'واقي الشمس الكيميائي يعتمد على فلاتر عضوية تمتص الأشعة داخل الطبقة السطحية للبشرة.'] },
        { h: 'ماذا يعني SPF 50+‎؟', p: ['SPF هو معامل الحماية من أشعة UVB المسؤولة عن حروق الشمس. كلما ارتفع الرقم، زادت الحماية. SPF 50+‎ هو أعلى فئة حماية على الملصقات.', 'لكن الرقم وحده لا يكفي: الكمية وإعادة الوضع مهمتان بنفس القدر.'] },
        { h: 'طريقة الاستعمال الصحيحة', p: ['ضعي كمية كافية على الوجه والعنق، 15 دقيقة قبل الخروج.', 'أعيدي وضعه كل ساعتين عند التعرض المباشر للشمس، وبعد السباحة أو التعرق.'] },
        { h: 'أيهما تختارين؟', p: ['أفضل واق شمسي هو الذي تستعملينه كل يوم. إذا كانت بشرتك حساسة، يختار كثيرون الفلاتر المعدنية.'] },
      ],
      fr: [
        { h: 'Deux familles de filtres', p: ["L'écran minéral utilise des filtres minéraux comme l'oxyde de zinc et le dioxyde de titane. Ils restent à la surface de la peau et la protègent des UV.", "L'écran chimique utilise des filtres organiques qui absorbent les UV dans la couche superficielle de la peau."] },
        { h: 'Que veut dire SPF 50+‎ ?', p: ["Le SPF mesure la protection contre les UVB, responsables des coups de soleil. Plus l'indice est élevé, plus la protection est forte. SPF 50+‎ est la catégorie la plus haute sur les étiquettes.", "L'indice ne fait pas tout : la quantité et le renouvellement comptent autant."] },
        { h: 'Bien appliquer', p: ['Appliquez une quantité généreuse sur le visage et le cou, 15 minutes avant de sortir.', "Renouvelez toutes les deux heures en cas d'exposition directe, et après la baignade ou la transpiration."] },
        { h: 'Lequel choisir ?', p: ["Le meilleur écran solaire est celui que l'on met chaque jour. Les peaux sensibles se tournent souvent vers les filtres minéraux."] },
      ],
    },
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
