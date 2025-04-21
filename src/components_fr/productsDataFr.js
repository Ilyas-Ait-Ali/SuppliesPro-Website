const productsData_fr = [
  {
    id: 1,
    name: 'Protéine Whey',
    price: 29.99,
    image: `${process.env.PUBLIC_URL}/images/protein-whey.jpg`,
    description: 'La protéine Whey est le complément parfait pour développer la masse musculaire et améliorer la récupération après des entraînements intensifs. Riche en acides aminés essentiels, elle aide à la réparation et à la croissance musculaire, ce qui en fait un ajout essentiel à votre routine de fitness.',
    advantages: [
      'Favorise la croissance et la récupération musculaire',
      'Riche en acides aminés essentiels',
      'Facile à digérer et absorption rapide'
    ]
  },
  {
    id: 2,
    name: 'Créatine',
    price: 19.99,
    image: `${process.env.PUBLIC_URL}/images/creatine.jpg`,
    description: 'La créatine améliore vos performances en augmentant votre force et votre puissance lors des entraînements à haute intensité. Elle augmente la production d\'ATP, la monnaie énergétique de vos muscles, vous permettant de vous entraîner plus dur et plus longtemps.',
    advantages: [
      'Augmente la force et la puissance',
      'Améliore les performances à haute intensité',
      'Soutient la production d\'énergie musculaire'
    ]
  },
  {
    id: 3,
    name: 'BCAA',
    price: 24.99,
    image: `${process.env.PUBLIC_URL}/images/bcaa.jpg`,
    description: 'Les BCAA (acides aminés à chaîne ramifiée) aident à réduire la fatigue musculaire, accélèrent la récupération et préviennent la dégradation musculaire pendant l\'exercice. Idéal pour les athlètes d\'endurance et tous ceux qui cherchent à maintenir une masse musculaire maigre.',
    advantages: [
      'Réduit la fatigue musculaire',
      'Accélère la récupération',
      'Prévient la dégradation musculaire'
    ]
  },
  {
    id: 4,
    name: 'Vitamines',
    price: 14.99,
    image: `${process.env.PUBLIC_URL}/images/vitamins.jpg`,
    description: 'Notre complément de vitamines offre un mélange complet de vitamines et de minéraux essentiels pour soutenir la santé et le bien-être général. Il aide à renforcer votre système immunitaire, à augmenter vos niveaux d\'énergie et à améliorer votre vitalité générale.',
    advantages: [
      'Soutient la santé et le bien-être général',
      'Renforce le système immunitaire',
      'Augmente les niveaux d\'énergie'
    ]
  },
];

export default productsData_fr;
