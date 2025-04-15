import { Recipe } from '../../../../types/restaurant/types';

export const initialRecipes: Recipe[] = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    price: 12.99,
    description:
      'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
    imageUrl:
      'https://i0.wp.com/dineandfash.com/wp-content/uploads/2020/05/Classic-Spaghetti-Carbonara.jpg?w=810&ssl=1',
    prepTime: '20 minutes',
    cuisineType: 'Italian',
  },
  {
    id: 2,
    name: 'Kung Pao Chicken',
    price: 13.99,
    description:
      'Spicy stir-fried chicken with peanuts, chili peppers, and vegetables.',
    imageUrl:
      'https://www.onceuponachef.com/images/2018/05/Kung-Pao-Chicken-16-1200x1480.jpg',
    prepTime: '25 minutes',
    cuisineType: 'Chinese',
  },
  {
    id: 3,
    name: 'Bibimbap',
    price: 11.99,
    description:
      'Korean mixed rice bowl topped with vegetables, beef, egg, and spicy gochujang sauce.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/4/44/Dolsot-bibimbap.jpg',
    prepTime: '30 minutes',
    cuisineType: 'Korean',
  },
  {
    id: 4,
    name: 'Pad Thai',
    price: 10.99,
    description:
      'Traditional Thai stir-fried noodles with shrimp, peanuts, bean sprouts, and tangy tamarind sauce.',
    imageUrl:
      'https://www.samaheats.com/wp-content/uploads/2023/02/IMG_6399-2.png',
    prepTime: '20 minutes',
    cuisineType: 'Thai',
  },
  {
    id: 5,
    name: 'Peking Duck',
    price: 24.99,
    description:
      'Crispy roasted duck served with pancakes, cucumber, and hoisin sauce.',
    imageUrl:
      'https://whattocooktoday.com/wp-content/uploads/2015/03/peking-duck-2-1.jpg',
    prepTime: '1 hour',
    cuisineType: 'Chinese',
  },
  {
    id: 6,
    name: 'Tteokbokki',
    price: 8.99,
    description: 'Spicy Korean rice cakes in a savory gochujang sauce.',
    imageUrl:
      'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-09-tteokbokki%2Ftteokbokki-523',
    prepTime: '15 minutes',
    cuisineType: 'Korean',
  },
  {
    id: 7,
    name: 'Dim Sum Platter',
    price: 15.5,
    description:
      'Assorted steamed dumplings and buns served with dipping sauces.',
    imageUrl: 'https://i.redd.it/0blqosm2qb851.jpg',
    prepTime: '30 minutes',
    cuisineType: 'Chinese',
  },
  {
    id: 8,
    name: 'Bulgogi',
    price: 14.5,
    description:
      'Marinated Korean beef grilled to perfection, served with rice and vegetables.',
    imageUrl:
      'https://www.thepyperskitchen.com/wp-content/uploads/2023/05/APC_7152.jpeg',
    prepTime: '35 minutes',
    cuisineType: 'Korean',
  },
  {
    id: 9,
    name: 'Margherita Pizza',
    price: 10.99,
    description:
      'Thin crust pizza topped with fresh tomatoes, mozzarella, basil, and olive oil.',
    imageUrl:
      'https://cookingitalians.com/wp-content/uploads/2024/11/Margherita-Pizza.jpg',
    prepTime: '15 minutes',
    cuisineType: 'Italian',
  },
  {
    id: 10,
    name: 'Chicken Tikka Masala',
    price: 14.99,
    description: 'Tender chicken chunks in a creamy spiced tomato sauce.',
    imageUrl:
      'https://www.recipetineats.com/tachyon/2018/04/Chicken-Tikka-Masala_0-SQ.jpg',
    prepTime: '40 minutes',
    cuisineType: 'Indian',
  },
  {
    id: 11,
    name: 'Beef Tacos',
    price: 8.99,
    description:
      'Soft tortillas filled with seasoned beef, topped with lettuce, cheese, and salsa.',
    imageUrl: 'https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg',
    prepTime: '25 minutes',
    cuisineType: 'Mexican',
  },
  {
    id: 12,
    name: 'Sushi Platter',
    price: 18.5,
    description:
      'Assorted selection of fresh sushi, including nigiri, sashimi, and maki rolls.',
    imageUrl:
      'https://labellakosher.com/wp-content/uploads/2024/09/Sushi-Platters.jpg',
    prepTime: '30 minutes',
    cuisineType: 'Japanese',
  },
  {
    id: 13,
    name: 'Ramen Bowl',
    price: 12.5,
    description:
      'Hearty Japanese noodle soup with pork, egg, vegetables, and a savory broth.',
    imageUrl:
      'https://www.elmundoeats.com/wp-content/uploads/2021/02/FP-Quick-30-minutes-chicken-ramen-500x500.jpg',
    prepTime: '35 minutes',
    cuisineType: 'Japanese',
  },
  {
    id: 14,
    name: 'Curry Laksa',
    price: 13.5,
    description:
      'Spicy and fragrant noodle soup with a coconut milk base, shrimp, and tofu.',
    imageUrl:
      'https://woonheng.com/wp-content/uploads/2020/10/Curry-Laksa-scaled.jpg',
    prepTime: '30 minutes',
    cuisineType: 'Malaysian',
  },
  {
    id: 15,
    name: 'Pierogi',
    price: 9.99,
    description:
      'Traditional Polish dumplings filled with potatoes, cheese, and onions.',
    imageUrl:
      'https://polishfeast.com/wp-content/uploads/2024/03/Polish-Pierogi-Ruskie-225x225.jpg',
    prepTime: '40 minutes',
    cuisineType: 'Polish',
  },
  {
    id: 16,
    name: 'Falafel Wrap',
    price: 7.99,
    description:
      'Crispy falafel balls wrapped in pita with fresh vegetables and tahini sauce.',
    imageUrl:
      'https://cookingwithayeh.com/wp-content/uploads/2024/03/Falafel-Wrap-SQ-1.jpg',
    prepTime: '20 minutes',
    cuisineType: 'Middle Eastern',
  },
  {
    id: 17,
    name: 'Beef Burger',
    price: 11.99,
    description:
      'Juicy grilled beef patty served with lettuce, tomato, and cheese on a toasted bun.',
    imageUrl:
      'https://simplehomeedit.com/wp-content/uploads/2024/03/Homemade-Beef-Burgers-4.webp',
    prepTime: '15 minutes',
    cuisineType: 'American',
  },
  {
    id: 18,
    name: 'Paella',
    price: 19.99,
    description:
      'Spanish rice dish loaded with seafood, chicken, and vegetables, seasoned with saffron.',
    imageUrl:
      'https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Paella-7.jpg',
    prepTime: '45 minutes',
    cuisineType: 'Spanish',
  },
  {
    id: 19,
    name: 'Fish and Chips',
    price: 12.5,
    description: 'Crispy battered fish served with fries and tartar sauce.',
    imageUrl:
      'https://images.getrecipekit.com/20220707143834-atlantic_cod_fish_chips_recipe_1024x1024.webp?aspect_ratio=4:3&quality=90&',
    prepTime: '25 minutes',
    cuisineType: 'British',
  },
  {
    id: 20,
    name: 'Croissant',
    price: 3.99,
    description:
      'Buttery, flaky French pastry perfect for breakfast or a snack.',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/1200px-Croissant-Petr_Kratochvil.jpg',
    prepTime: '15 minutes',
    cuisineType: 'French',
  },
];
