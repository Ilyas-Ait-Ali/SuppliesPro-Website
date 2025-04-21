const sportsEquipmentsData = [
  {
    id: 5,
    name: 'Dumbbells',
    price: 49.99,
    image: `${process.env.PUBLIC_URL}/images/dumbbells.jpg`,
    description: 'High-quality dumbbells perfect for strength training and muscle building. Available in various weights to suit your needs.',
    advantages: [
      'Improves muscle strength',
      'Versatile for different exercises',
      'Durable and long-lasting'
    ]
  },
  {
    id: 6,
    name: 'Jump Rope',
    price: 14.99,
    image: `${process.env.PUBLIC_URL}/images/jump-rope.jpg`,
    description: 'A durable jump rope that helps improve cardiovascular fitness and coordination. Adjustable length to fit all users.',
    advantages: [
      'Enhances cardiovascular fitness',
      'Improves coordination',
      'Portable and easy to use'
    ]
  },
  {
    id: 7,
    name: 'Yoga Mat',
    price: 29.99,
    image: `${process.env.PUBLIC_URL}/images/yoga-mat.jpg`,
    description: 'Non-slip yoga mat with cushioning for comfort during your yoga or pilates sessions. Lightweight and easy to carry.',
    advantages: [
      'Provides cushioning and support',
      'Non-slip surface',
      'Lightweight and portable'
    ]
  },
  {
    id: 8,
    name: 'Kettlebell',
    price: 39.99,
    image: `${process.env.PUBLIC_URL}/images/kettlebell.jpg`,
    description: 'High-quality kettlebell for strength training, conditioning, and endurance workouts. Available in various weights.',
    advantages: [
      'Enhances strength and conditioning',
      'Versatile for various workouts',
      'Durable construction'
    ]
  },
  // Add more products as needed
];

export default sportsEquipmentsData;
