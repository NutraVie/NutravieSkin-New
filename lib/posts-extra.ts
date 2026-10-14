import type { Post } from './posts';

const DATE = '2026-10-11';

export const extraPosts: Post[] = [
  {
    slug: 'peau-grasse-brillance-pores',
    date: DATE,
    product: 'gel-nettoyant-visage',
    skin: 'peau-grasse',
    title: {
      ar: 'لمعان البشرة الدهنية والمسام الواسعة: الأسباب والحل',
      fr: 'Peau grasse qui brille et pores dilatés : causes et solutions',
    },
    description: {
      ar: 'لماذا تلمع البشرة الدهنية وتتسع مسامها؟ وما المكونات التي تساعد: زيت شجرة الشاي، الشاي الأخضر والنياسيناميد.',
      fr: "Pourquoi la peau grasse brille-t-elle et pourquoi ses pores se dilatent-ils ? Les actifs qui aident : arbre à thé, thé vert, niacinamide.",
    },
    sections: {
      ar: [
        { h: 'لماذا تلمع البشرة الدهنية؟', p: ['الغدد الدهنية في الوجه تفرز زيوتا تحمي البشرة. عند البشرة الدهنية تكون هذه الغدد أكثر نشاطا، بسبب الوراثة والهرمونات والحرارة.', 'اللمعان يظهر أولا في الجبهة والأنف والذقن، ويعود بعد ساعات قليلة من الغسل.'] },
        { h: 'لماذا تبدو المسام واسعة؟', p: ['المسام لا تفتح ولا تغلق. تبدو أوسع عندما تمتلئ بالدهون والخلايا الميتة. وعندما تتأكسد هذه المادة على السطح تتحول إلى رؤوس سوداء.'] },
        { h: 'الخطأ الأكثر شيوعا: التجفيف', p: ['كثيرون يغسلون وجوههم مرات عديدة بمنظفات قوية. البشرة تفقد حاجزها وتتهيج، واللمعان يعود كما كان.', 'الأفضل تنظيف لطيف مرتين في اليوم فقط.'] },
        { h: 'المكونات التي تساعد', p: ['في غسول الوجه NutraVie: زيت شجرة الشاي ينقي البشرة، والشاي الأخضر مضاد للأكسدة، وعوامل تنظيف نباتية لطيفة مشتقة من جوز الهند أو الذرة تزيل الدهون دون تجفيف.', 'في واقي الشمس: النياسيناميد يخفف مظهر المسام والعيوب. وفي كريم الليل: الريتينول يجدد سطح البشرة ويحسن ملمسها.'] },
        { h: 'الروتين المقترح', p: ['صباحا: غسول الوجه ثم واقي الشمس مباشرة. مساء: غسول الوجه ثم كريم الليل.', 'امنحي الروتين أربعة أسابيع على الأقل، وهي المدة التي تتجدد فيها البشرة.'] },
      ],
      fr: [
        { h: 'Pourquoi la peau grasse brille-t-elle ?', p: ["Les glandes sébacées du visage produisent un film gras qui protège la peau. Chez les peaux grasses, elles sont plus actives, sous l'effet de l'hérédité, des hormones et de la chaleur.", 'La brillance apparaît d’abord sur le front, le nez et le menton, et revient quelques heures après le nettoyage.'] },
        { h: 'Pourquoi les pores paraissent-ils dilatés ?', p: ["Les pores ne s'ouvrent pas et ne se ferment pas. Ils paraissent plus larges quand ils se remplissent de sébum et de cellules mortes. En s'oxydant à la surface, ce mélange forme les points noirs."] },
        { h: "L'erreur la plus courante : décaper", p: ['Beaucoup lavent leur visage plusieurs fois par jour avec des nettoyants agressifs. La peau perd sa barrière, s’irrite, et la brillance revient.', 'Mieux vaut un nettoyage doux, deux fois par jour seulement.'] },
        { h: 'Les actifs qui aident', p: ["Dans le gel nettoyant NutraVie : l'huile d'arbre à thé purifie, le thé vert est antioxydant, et des agents lavants végétaux doux, dérivés de la noix de coco ou du maïs, retirent le sébum sans dessécher.", "Dans l'écran solaire : la niacinamide atténue l'apparence des pores et des imperfections. Dans la crème de nuit : le rétinol renouvelle la surface de la peau et affine son grain."] },
        { h: 'La routine conseillée', p: ['Le matin : gel nettoyant puis écran solaire. Le soir : gel nettoyant puis crème de nuit.', 'Laissez à la routine au moins quatre semaines, le temps que la peau se renouvelle.'] },
      ],
    },
  },
  {
    slug: 'boutons-visage-routine',
    date: DATE,
    product: 'routine-complete',
    skin: 'peau-grasse',
    title: {
      ar: 'حبوب الوجه: كيف تتكون وما الروتين المناسب لها',
      fr: 'Boutons sur le visage : causes et routine adaptée',
    },
    description: {
      ar: 'كيف تتكون حبوب الوجه، ما الأخطاء التي تزيدها، وروتين بسيط للبشرة المعرضة للحبوب بمكونات منقية ومهدئة.',
      fr: "Comment se forment les boutons, les erreurs qui les aggravent et une routine simple pour peau à tendance acnéique, aux actifs purifiants et apaisants.",
    },
    sections: {
      ar: [
        { h: 'كيف تتكون الحبة؟', p: ['كل حبة تبدأ بمسام مسدودة. الدهون الزائدة تختلط بالخلايا الميتة وتغلق المسام، ثم تتهيج المنطقة فتظهر الحبة.', 'لهذا تكثر الحبوب في البشرة الدهنية، وفي فترات التغير الهرموني.'] },
        { h: 'أخطاء تزيد الحبوب', p: ['عصر الحبوب باليد ينقل التهيج ويترك آثارا. فرك الوجه بقوة يهيج البشرة أكثر.', 'ترك واقي الشمس خطأ أيضا: الشمس لا تجفف الحبوب، بل تجعل آثارها أغمق.'] },
        { h: 'ماذا تفعل مكونات الروتين؟', p: ['الغسول ينظف المسام بلطف: زيت شجرة الشاي ينقي، والبابونج والألوفيرا يهدئان البشرة المتهيجة.', 'واقي الشمس يحمي بفلاتر معدنية، ومعه النياسيناميد الذي يخفف مظهر العيوب. كريم الليل يحتوي على الريتينول الذي يجدد سطح البشرة، ما يساعد المسام على البقاء نظيفة.'] },
        { h: 'الروتين خطوة بخطوة', p: ['صباحا: غسول الوجه ثم واقي الشمس. مساء: غسول الوجه ثم كريم الليل قبل النوم.', 'غيري غطاء الوسادة مرة في الأسبوع، وأبعدي يديك عن وجهك.'] },
        { h: 'متى تستشيرين الطبيب؟', p: ['منتجات العناية تساعد البشرة المعرضة للحبوب، لكنها ليست علاجا. إذا كانت الحبوب كثيرة أو مؤلمة أو تترك ندوبا، استشيري طبيب جلد.'] },
      ],
      fr: [
        { h: 'Comment se forme un bouton ?', p: ["Tout bouton commence par un pore obstrué. L'excès de sébum se mêle aux cellules mortes et bouche le pore, puis la zone s'irrite et le bouton apparaît.", "C'est pourquoi les boutons sont fréquents sur les peaux grasses et lors des variations hormonales."] },
        { h: 'Les erreurs qui aggravent', p: ["Percer les boutons propage l'irritation et laisse des marques. Frotter le visage irrite encore plus la peau.", "Oublier l'écran solaire est aussi une erreur : le soleil ne sèche pas les boutons, il fonce leurs marques."] },
        { h: 'Ce que font les actifs de la routine', p: ["Le gel nettoie les pores en douceur : l'arbre à thé purifie, la camomille et l'aloe vera apaisent la peau irritée.", "L'écran solaire protège avec des filtres minéraux et contient de la niacinamide, qui atténue les imperfections. La crème de nuit contient du rétinol, qui renouvelle la surface de la peau et aide les pores à rester dégagés."] },
        { h: 'La routine pas à pas', p: ['Le matin : gel nettoyant puis écran solaire. Le soir : gel nettoyant puis crème de nuit avant de dormir.', "Changez la taie d'oreiller chaque semaine et évitez de toucher votre visage."] },
        { h: 'Quand consulter ?', p: ["Les soins aident les peaux à tendance acnéique, mais ce ne sont pas des traitements. Si les boutons sont nombreux, douloureux ou laissent des cicatrices, consultez un dermatologue."] },
      ],
    },
  },
  {
    slug: 'peau-seche-tiraillements',
    date: DATE,
    product: 'creme-de-nuit',
    skin: 'peau-seche',
    title: {
      ar: 'البشرة الجافة: لماذا تشد وتتقشر وكيف ترطبينها',
      fr: 'Peau sèche qui tiraille : causes et solutions',
    },
    description: {
      ar: 'أسباب شد البشرة الجافة وتقشرها، والمكونات التي ترطبها وتغذيها: حمض الهيالورونيك، زبدة الشيا، زيت الجوجوبا والجلسرين.',
      fr: 'Les causes des tiraillements et de la desquamation, et les actifs qui hydratent et nourrissent : acide hyaluronique, karité, jojoba, glycérine.',
    },
    sections: {
      ar: [
        { h: 'ما الذي ينقص البشرة الجافة؟', p: ['سطح البشرة يشبه جدارا: الخلايا هي الطوب، والدهون هي الإسمنت بينها. في البشرة الجافة هذا الإسمنت قليل، فيتبخر الماء بسهولة.', 'النتيجة: شد بعد الغسل، قشور، وبشرة باهتة.'] },
        { h: 'ما الذي يزيد الجفاف؟', p: ['الماء الساخن، الغسل المتكرر، المنظفات القوية، المكيف والتدفئة، وبرد الشتاء.', 'ولهذا ننصح البشرة الجافة باستعمال الغسول في المساء فقط.'] },
        { h: 'ترطيب وتغذية: الفرق بينهما', p: ['الترطيب يعني إعطاء البشرة ماء. حمض الهيالورونيك والجلسرين يجذبان الماء ويحتفظان به.', 'التغذية تعني تعويض الدهون. زبدة الشيا وزيت الجوجوبا يلينان البشرة ويحدان من تبخر الماء. البشرة الجافة تحتاج الاثنين معا.'] },
        { h: 'أين تجدين هذه المكونات؟', p: ['كريم الليل NutraVie يجمع حمض الهيالورونيك وزبدة الشيا وزيت الجوجوبا والجلسرين وفيتامين E.', 'واقي الشمس يحتوي على الجلسرين ويرطب البشرة في الصباح. والغسول يحتوي على الألوفيرا وزيت الجوجوبا.'] },
        { h: 'الروتين المقترح', p: ['صباحا: اغسلي وجهك بالماء الفاتر فقط، ثم واقي الشمس. مساء: غسول الوجه ثم كريم الليل.', 'ضعي كريم الليل على بشرة ما زالت رطبة قليلا ليحتفظ بالماء.'] },
      ],
      fr: [
        { h: 'Que manque-t-il à la peau sèche ?', p: ["La surface de la peau ressemble à un mur : les cellules sont les briques, les lipides le ciment. Sur une peau sèche, ce ciment manque et l'eau s'évapore facilement.", 'Résultat : tiraillements après le nettoyage, desquamation, teint terne.'] },
        { h: "Ce qui aggrave la sécheresse", p: ["L'eau chaude, les lavages répétés, les nettoyants agressifs, la climatisation, le chauffage et le froid de l'hiver.", "C'est pourquoi nous conseillons aux peaux sèches de garder le gel pour le soir."] },
        { h: 'Hydrater et nourrir : la différence', p: ["Hydrater, c'est apporter de l'eau. L'acide hyaluronique et la glycérine attirent l'eau et la retiennent.", "Nourrir, c'est compenser le manque de lipides. Le beurre de karité et l'huile de jojoba assouplissent la peau et limitent l'évaporation. La peau sèche a besoin des deux."] },
        { h: 'Où trouver ces actifs ?', p: ["La crème de nuit NutraVie réunit acide hyaluronique, beurre de karité, huile de jojoba, glycérine et vitamine E.", "L'écran solaire contient de la glycérine et hydrate la peau le matin. Le gel contient de l'aloe vera et de l'huile de jojoba."] },
        { h: 'La routine conseillée', p: ["Le matin : rincez le visage à l'eau tiède, puis écran solaire. Le soir : gel nettoyant puis crème de nuit.", "Appliquez la crème de nuit sur une peau encore légèrement humide pour retenir l'eau."] },
      ],
    },
  },
  {
    slug: 'peau-sensible-rougeurs',
    date: DATE,
    product: 'ecran-solaire-mineral-spf50',
    skin: 'peau-sensible',
    title: {
      ar: 'البشرة الحساسة: احمرار ووخز، وكيف تهدئينها',
      fr: 'Peau sensible : rougeurs, picotements et comment les apaiser',
    },
    description: {
      ar: 'لماذا تحمر البشرة الحساسة وتتهيج؟ المكونات المهدئة (بابونج، ألوفيرا، عرقسوس) وطريقة إدخال المنتجات بالتدريج.',
      fr: 'Pourquoi la peau sensible rougit-elle et réagit-elle ? Les actifs apaisants (camomille, aloe vera, réglisse) et la bonne façon d’introduire un soin.',
    },
    sections: {
      ar: [
        { h: 'ما هي البشرة الحساسة؟', p: ['البشرة الحساسة ليست نوعا مستقلا: قد تكون دهنية أو جافة. ما يميزها أنها تتفاعل أكثر من غيرها: احمرار، وخز، حرقان أو شد.', 'السبب غالبا حاجز بشرة ضعيف يسمح للمهيجات بالدخول بسهولة.'] },
        { h: 'ما الذي يهيجها؟', p: ['الشمس، الحرارة والبرد، الماء الساخن، الفرك، وتغيير منتجات كثيرة في وقت واحد.'] },
        { h: 'المكونات المهدئة في الروتين', p: ['في الغسول: البابونج والألوفيرا معروفان بخصائصهما المهدئة. في واقي الشمس: خلاصة العرقسوس مهدئة، والفلاتر معدنية (أكسيد الزنك وثاني أكسيد التيتانيوم).', 'في كريم الليل: حمض الهيالورونيك وزبدة الشيا يرطبان ويغذيان حاجز البشرة.'] },
        { h: 'ما يجب الانتباه له', p: ['الغسول يحتوي على زيوت عطرية (شجرة الشاي واللافندر)، وكريم الليل يحتوي على الريتينول. بعض أنواع البشرة الحساسة جدا لا تتحملها.', 'لهذا جربي كل منتج على مساحة صغيرة خلف الأذن وانتظري 24 ساعة قبل وضعه على الوجه.'] },
        { h: 'الروتين التدريجي', p: ['أدخلي منتجا واحدا كل بضعة أيام: واقي الشمس أولا، ثم الغسول في المساء، ثم كريم الليل ليلة نعم وليلة لا خلال الأسبوع الأول.', 'إذا استمر الاحمرار أو الحرقان، أوقفي المنتج واستشيري طبيب جلد.'] },
      ],
      fr: [
        { h: "Qu'est-ce qu'une peau sensible ?", p: ["La peau sensible n'est pas un type à part : elle peut être grasse ou sèche. Ce qui la distingue, c'est qu'elle réagit plus que les autres : rougeurs, picotements, brûlures ou tiraillements.", 'La cause est souvent une barrière cutanée fragile qui laisse passer les irritants.'] },
        { h: "Ce qui l'irrite", p: ["Le soleil, la chaleur et le froid, l'eau chaude, les frottements et le fait de changer plusieurs produits à la fois."] },
        { h: 'Les actifs apaisants de la routine', p: ["Dans le gel : la camomille et l'aloe vera sont connus pour leurs propriétés apaisantes. Dans l'écran solaire : l'extrait de réglisse est apaisant, et les filtres sont minéraux (oxyde de zinc et dioxyde de titane).", "Dans la crème de nuit : l'acide hyaluronique et le beurre de karité hydratent et nourrissent la barrière de la peau."] },
        { h: 'Les points de vigilance', p: ["Le gel contient des huiles essentielles (arbre à thé, lavande) et la crème de nuit contient du rétinol. Certaines peaux très réactives les tolèrent mal.", "Testez donc chaque produit sur une petite zone derrière l'oreille et attendez 24 heures avant de l'appliquer sur le visage."] },
        { h: 'La routine progressive', p: ["Introduisez un produit tous les quelques jours : l'écran solaire d'abord, puis le gel le soir, puis la crème de nuit un soir sur deux la première semaine.", 'Si les rougeurs ou les brûlures persistent, arrêtez le produit et consultez un dermatologue.'] },
      ],
    },
  },
  {
    slug: 'taches-brunes-marques-boutons',
    date: DATE,
    product: 'ecran-solaire-mineral-spf50',
    skin: 'peau-grasse',
    title: {
      ar: 'البقع الداكنة وآثار الحبوب: لماذا تظهر وكيف تخففين مظهرها',
      fr: 'Taches brunes et marques de boutons : les atténuer',
    },
    description: {
      ar: 'أسباب البقع الداكنة وآثار الحبوب، ودور واقي الشمس والنياسيناميد وفيتامين C والعرقسوس والريتينول في تخفيف مظهرها.',
      fr: "Les causes des taches brunes et des marques de boutons, et le rôle de l'écran solaire, de la niacinamide, de la vitamine C, de la réglisse et du rétinol.",
    },
    sections: {
      ar: [
        { h: 'من أين تأتي البقع الداكنة؟', p: ['عندما تتهيج البشرة بسبب حبة أو جرح أو شمس، تنتج صبغة الميلانين بكثرة في تلك المنطقة. تبقى البقعة بعد أن تشفى الحبة.', 'هذه البقع أكثر شيوعا في البشرة السمراء والحنطية.'] },
        { h: 'الشمس: السبب الأول لبقائها', p: ['الأشعة فوق البنفسجية تحفز إنتاج الميلانين، فتجعل البقع أغمق وتطيل مدتها.', 'بدون واقي شمسي يومي، أي منتج آخر يفقد جزءا كبيرا من فائدته.'] },
        { h: 'المكونات التي تساعد', p: ['واقي الشمس NutraVie يجمع الحماية المعدنية SPF 50+‎ مع النياسيناميد الذي يخفف مظهر العيوب، وفيتامين C المضاد للأكسدة، وخلاصة العرقسوس.', 'كريم الليل يحتوي على الريتينول الذي يسرع تجدد سطح البشرة، فتتوحد مع الوقت.'] },
        { h: 'كم تحتاج من الوقت؟', p: ['البقع لا تختفي في أيام. توقعي من شهرين إلى ثلاثة أشهر من الروتين المنتظم لملاحظة فرق واضح.', 'لا تعصري الحبوب: كل حبة تعصر تترك أثرا جديدا.'] },
        { h: 'متى تستشيرين الطبيب؟', p: ['إذا كانت البقع واسعة، أو ظهرت فجأة، أو تغير شكلها أو لونها، استشيري طبيب جلد.'] },
      ],
      fr: [
        { h: "D'où viennent les taches brunes ?", p: ["Quand la peau est agressée par un bouton, une blessure ou le soleil, elle produit trop de mélanine à cet endroit. La tache reste après la guérison du bouton.", 'Ces taches sont plus fréquentes sur les peaux mates et foncées.'] },
        { h: 'Le soleil, première cause de leur persistance', p: ['Les UV stimulent la production de mélanine : ils foncent les taches et prolongent leur durée.', "Sans écran solaire quotidien, tout autre soin perd une grande partie de son intérêt."] },
        { h: 'Les actifs qui aident', p: ["L'écran solaire NutraVie associe la protection minérale SPF 50+ à la niacinamide, qui atténue les imperfections, à la vitamine C antioxydante et à l'extrait de réglisse.", "La crème de nuit contient du rétinol, qui accélère le renouvellement de la surface de la peau et unifie le teint avec le temps."] },
        { h: 'Combien de temps faut-il ?', p: ['Les taches ne partent pas en quelques jours. Comptez deux à trois mois de routine régulière pour voir une vraie différence.', 'Ne percez pas les boutons : chaque bouton percé laisse une nouvelle marque.'] },
        { h: 'Quand consulter ?', p: ["Si les taches sont étendues, apparaissent soudainement ou changent de forme ou de couleur, consultez un dermatologue."] },
      ],
    },
  },
  {
    slug: 'comment-commencer-retinol',
    date: DATE,
    product: 'creme-de-nuit',
    skin: 'peau-sensible',
    title: {
      ar: 'كيف تبدئين الريتينول دون تهيج البشرة',
      fr: 'Comment commencer le rétinol sans irriter sa peau',
    },
    description: {
      ar: 'ما هو الريتينول، ماذا يفعل للبشرة، وكيف تدخلينه في روتينك بالتدريج حسب نوع بشرتك، مع الاحتياطات الضرورية.',
      fr: "Ce qu'est le rétinol, ce qu'il fait pour la peau et comment l'introduire progressivement selon votre type de peau, avec les précautions à connaître.",
    },
    sections: {
      ar: [
        { h: 'ما هو الريتينول؟', p: ['الريتينول شكل من فيتامين A. يسرع تجدد خلايا سطح البشرة، ولهذا يستعمل لتحسين الملمس، وتخفيف مظهر الخطوط الرفيعة والآثار.', 'هو من أكثر مكونات العناية دراسة، لكنه يحتاج صبرا وتدرجا.'] },
        { h: 'لماذا يسبب تهيجا في البداية؟', p: ['تسريع التجدد قد يسبب جفافا وتقشرا خفيفا واحمرارا في الأسابيع الأولى. هذا شائع، ويخف عندما تتعود البشرة.'] },
        { h: 'طريقة البدء', p: ['البشرة الحساسة: ليلة نعم وليلة لا خلال الأسبوع الأول، ثم كل ليلة إذا تحملته.', 'ضعي كمية صغيرة على بشرة نظيفة وجافة تماما، وتجنبي محيط العينين وزوايا الأنف والفم.'] },
        { h: 'لماذا كريم الليل وليس سيروم قويا؟', p: ['كريم الليل NutraVie يجمع الريتينول مع حمض الهيالورونيك وزبدة الشيا وزيت الجوجوبا. هذه المكونات ترطب وتغذي، فتحد من الجفاف الذي يرافق الريتينول.'] },
        { h: 'ثلاث قواعد لا تهمل', p: ['واقي الشمس كل صباح: الريتينول يجعل البشرة أكثر حساسية للشمس.', 'في المساء فقط. ولا ينصح بمنتجات الريتينول خلال الحمل والرضاعة: استشيري طبيبك.'] },
      ],
      fr: [
        { h: "Qu'est-ce que le rétinol ?", p: ["Le rétinol est une forme de vitamine A. Il accélère le renouvellement des cellules de surface, d'où son usage pour affiner le grain de peau et atténuer les ridules et les marques.", "C'est l'un des actifs les plus étudiés, mais il demande de la patience et de la progressivité."] },
        { h: 'Pourquoi irrite-t-il au début ?', p: ['Accélérer le renouvellement peut provoquer sécheresse, légère desquamation et rougeurs les premières semaines. C’est fréquent et cela s’atténue quand la peau s’habitue.'] },
        { h: 'Comment commencer', p: ['Peau sensible : un soir sur deux la première semaine, puis chaque soir si la peau le tolère.', 'Appliquez une petite quantité sur peau propre et bien sèche, en évitant le contour des yeux, les ailes du nez et les coins de la bouche.'] },
        { h: 'Pourquoi une crème de nuit plutôt qu’un sérum fort ?', p: ["La crème de nuit NutraVie associe le rétinol à l'acide hyaluronique, au beurre de karité et à l'huile de jojoba. Ces actifs hydratent et nourrissent, ce qui limite la sécheresse liée au rétinol."] },
        { h: 'Trois règles à ne pas oublier', p: ["Écran solaire chaque matin : le rétinol rend la peau plus sensible au soleil.", "Le soir uniquement. Les soins au rétinol sont déconseillés pendant la grossesse et l'allaitement : demandez l'avis de votre médecin."] },
      ],
    },
  },
  {
    slug: 'rides-ridules-routine-anti-age',
    date: DATE,
    product: 'creme-de-nuit',
    skin: 'peau-seche',
    title: {
      ar: 'الخطوط الرفيعة والتجاعيد: روتين بسيط مضاد للشيخوخة',
      fr: 'Ridules et rides : une routine anti-âge simple',
    },
    description: {
      ar: 'لماذا تظهر الخطوط الرفيعة والتجاعيد، ودور واقي الشمس والريتينول والببتيدات وحمض الهيالورونيك في روتين مضاد للشيخوخة.',
      fr: "Pourquoi les rides apparaissent, et le rôle de l'écran solaire, du rétinol, des peptides et de l'acide hyaluronique dans une routine anti-âge.",
    },
    sections: {
      ar: [
        { h: 'لماذا تظهر التجاعيد؟', p: ['مع العمر تنتج البشرة كولاجين أقل وتتجدد ببطء. لكن العامل الخارجي الأول هو الشمس: الأشعة فوق البنفسجية مسؤولة عن جزء كبير من علامات التقدم في السن الظاهرة على الوجه.', 'الجفاف يزيد الخطوط وضوحا، ولهذا تبدو أوضح في البشرة الجافة.'] },
        { h: 'الخطوة الأهم: واقي الشمس', p: ['أفضل منتج مضاد للشيخوخة هو واقي الشمس اليومي. واقي NutraVie يجمع فلاتر معدنية SPF 50+‎ مع فيتامين C وفيتامين E المضادين للأكسدة.'] },
        { h: 'في الليل: تجديد وترطيب', p: ['كريم الليل يحتوي على الريتينول الذي يجدد سطح البشرة، والببتيدات التي تدعم بنية الجلد.', 'حمض الهيالورونيك يرطب بعمق فتبدو الخطوط الرفيعة أقل وضوحا، وزبدة الشيا تغذي البشرة.'] },
        { h: 'متى أبدأ؟', p: ['واقي الشمس في أي سن. أما الريتينول فيبدأ به كثيرون في أواخر العشرينات، بالتدريج.', 'الوقاية أسهل من التصحيح: روتين بسيط ومنتظم أفضل من منتجات كثيرة تستعمل بتقطع.'] },
        { h: 'ما الذي تنتظرينه؟', p: ['منتجات العناية تحسن مظهر البشرة وملمسها مع الوقت، لكنها لا تمحو التجاعيد العميقة. انتظري من 8 إلى 12 أسبوعا لتقييم النتيجة.'] },
      ],
      fr: [
        { h: 'Pourquoi les rides apparaissent-elles ?', p: ["Avec l'âge, la peau produit moins de collagène et se renouvelle plus lentement. Mais le premier facteur externe est le soleil : les UV sont responsables d'une grande part des signes visibles de l'âge sur le visage.", "La sécheresse accentue les ridules, c'est pourquoi elles se voient davantage sur une peau sèche."] },
        { h: "Le geste le plus important : l'écran solaire", p: ["Le meilleur soin anti-âge reste l'écran solaire quotidien. Celui de NutraVie associe des filtres minéraux SPF 50+ aux vitamines C et E, antioxydantes."] },
        { h: 'La nuit : renouveler et hydrater', p: ["La crème de nuit contient du rétinol, qui renouvelle la surface de la peau, et des peptides, qui soutiennent sa structure.", "L'acide hyaluronique hydrate en profondeur et rend les ridules moins visibles, le beurre de karité nourrit la peau."] },
        { h: 'Quand commencer ?', p: ["L'écran solaire à tout âge. Le rétinol, beaucoup le commencent vers la fin de la vingtaine, progressivement.", "Prévenir est plus facile que corriger : une routine simple et régulière vaut mieux que beaucoup de produits utilisés par à-coups."] },
        { h: 'À quoi s’attendre ?', p: ["Les soins améliorent l'aspect et le grain de la peau avec le temps, mais n'effacent pas les rides profondes. Comptez 8 à 12 semaines pour juger du résultat."] },
      ],
    },
  },
];
