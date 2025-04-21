const productsData = [
  {
    id: 1,
    name: 'Protein Whey',
    price: 29.99,
    image: `${process.env.PUBLIC_URL}/images/protein-whey.jpg`,
    description: 'Protein Whey is the perfect supplement for building muscle and improving recovery after intense workouts. Rich in essential amino acids, it helps in muscle repair and growth, making it an essential addition to your fitness routine.',
    advantages: [
      'Promotes muscle growth and recovery',
      'Rich in essential amino acids',
      'Easily digestible and quick absorption'
    ]
  },
  {
    id: 2,
    name: 'Creatine',
    price: 19.99,
    image: `${process.env.PUBLIC_URL}/images/creatine.jpg`,
    description: 'Creatine enhances your performance by boosting your strength and power during high-intensity workouts. It increases the production of ATP, which is the energy currency of your muscles, allowing you to train harder and longer.',
    advantages: [
      'Boosts strength and power',
      'Enhances high-intensity performance',
      'Supports muscle energy production'
    ]
  },
  {
    id: 3,
    name: 'BCAA',
    price: 24.99,
    image: `${process.env.PUBLIC_URL}/images/bcaa.jpg`,
    description: 'BCAA (Branched-Chain Amino Acids) helps reduce muscle fatigue, speed up recovery, and prevent muscle breakdown during exercise. It is ideal for endurance athletes and anyone looking to maintain lean muscle mass.',
    advantages: [
      'Reduces muscle fatigue',
      'Speeds up recovery',
      'Prevents muscle breakdown'
    ]
  },
  {
    id: 4,
    name: 'Vitamins',
    price: 14.99,
    image: `${process.env.PUBLIC_URL}/images/vitamins.jpg`,
    description: 'Our Vitamins supplement provides a comprehensive blend of essential vitamins and minerals to support overall health and wellness. It helps boost your immune system, increase energy levels, and improve overall vitality.',
    advantages: [
      'Supports overall health and wellness',
      'Boosts immune system',
      'Increases energy levels'
    ]
  },
];

export default productsData;
