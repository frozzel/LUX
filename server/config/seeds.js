const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Gucci' },
    { name: 'Prada' },
    { name: 'Balenciaga' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Gucci',
      category: categories[0]._id,
      description:
        'Influential, innovative and progressive, Gucci is reinventing a wholly modern approach to fashion. The House has redefined luxury for the 21st century, further reinforcing its position as one of the world’s most desirable fashion houses. Eclectic, contemporary, romantic—Gucci products represent the pinnacle of Italian craftsmanship and are unsurpassed for their quality and attention to detail. Gucci is part of the Kering Group. A global Luxury group, Kering manages the development of a series of renowned Houses in Fashion, Leather Goods, Jewellery and Watches.',
      image: 'GucciLogo.png',
      price: 100.00,
      quantity: 100
    },
    {
      name: 'Gucci Diana medium tote bag',
      description:
        'In celebration of a new year, as well as the arrival of Spring, the House presents a wide-ranging selection of colorful leather accessories featuring various combinations of materials alongside the Gucci logo. The Web stripe appears in vibrant new colorways in a contemporary revival of an archival detail. This Gucci Diana tote bag is defined by a criss-cross Web stripe.',
      image: 'diana-tote.png',
      category: categories[0]._id,
      price: 7900.00,
      quantity: 100
    },
    {
      name: 'GG Marmont small shoulder bag',
      description:
        'In soft, vibrant hues, pastels continue to be explored throughout the latest collections. Made in matelassé chevron leather with a heart on the back in a light shade of lilac the now recognizable small GG Marmont chain shoulder bag has a softly structured shape and a flap closure with Double G hardware. Designed to be worn multiple ways, the chain strap slides to change between a shoulder and a top handle bag.',
      image: 'guccipurp.avif',
      category: categories[0]._id,
      price: 2550.00,
      quantity: 100
    },
    {
      name: 'GG Marmont medium shoulder bag',
      category: categories[0]._id,
      description:
        'The medium GG Marmont chain shoulder bag has a softly structured shape and an oversized flap closure with Double G hardware. The sliding chain strap can be worn multiple ways, changing between a shoulder and a top handle bag. Made in matelassé chevron leather with a heart on the back.',
      image: 'guccibasic.avif',
      price: 2980.00,
      quantity: 50
    },
    {
      name: 'Prada',
      category: categories[1]._id,
      description:
        'The Group combines the distinctive elements of its know-how with principles inspired by the enhancement of people, the protection of the environment, the respect of ethical values and the promotion of culture, believing that in this way it can pursue an inclusive economic development.',
      image: 'pradalogo.jpg',
      price: 100.00,
      quantity: 100
    },
    {
      name: 'Prada Re-Edition 1995 brushed-leather mini handbag',
      category: categories[1]._id,
      description:
        'This handbag, a re-edition of an iconic Prada bag of 1995, is characterized by its elegant geometric silhouette with distinct, minimalist lines. Formal allure and practicality meet in its design with a central zipper closure, enhanced by the sophisticated accent of the screen-printed lettering logo. The accessory is made of fine brushed leather, an expression of the brands expertise.',
      image: 'parada1.webp',
      price: 3300.00,
      quantity: 30
    },
    {
      name: 'Medium Prada Galleria Saffiano leather bag',
      category: categories[1]._id,
      description:
      'Production of the Prada Galleria bag, composed of 83 pieces, is an authentic fusion between industrial precision and the refined accuracy of craftsmanship that can only be performed by hand. The design is clean and elegant yet innately pragmatic, an aesthetic language blending form and function that combines history and modernity. Originating the definition of "timeless", the Galleria bag has become a hallmark of Pradas identity in the twenty-first century. The accessory, presented in the medium version, is made of iconic Saffiano, a calf leather patented by Mario Prada that is resistant to scratches and water and defined by its crosshatch texture.',
      image: 'prada2.webp',
      price: 4300.00,
      quantity: 30
    },
    {
      name: 'Prada Cleo brushed leather shoulder bag',
      category: categories[1]._id,
      description:
      "The Prada Cleo bag with sophisticated allure reinterprets an iconic design of the brand from the nineties. The sleek, curved lines emphasized by the particular sloped construction of the bottom and sides give this hobo bag a soft, light look. Brushed leather, a distinctive element of Prada collections, is a modern and versatile material that lends itself to always new combinations and contrasts. The enamel triangle logo decorates the silhouette.",
      image: 'prada3.webp',
      price: 3950.00,
      quantity: 100
    },
    {
      name: 'Balenciaga',
      category: categories[2]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'BalLogo.webp',
      price: 1000.00,
      quantity: 1000
    },
    {
      name: "WOMEN'S CRUSH SMALL CHAIN BAG QUILTED IN PINK",
      category: categories[2]._id,
      description:
      "Carbon footprint: we work to continually reduce the environmental footprint of our products. The remaining carbon emissions associated with all activities in this product’s life cycle are carefully calculated, and we commit to invest funds into carbon removal projects that protect and restore natural ecosystems to tackle climate change.",  
      image: 'bal1.jpg',
      price: 2650.00,
      quantity: 100
    },
    {
      name: "WOMEN'S LE CAGOLE XS SHOULDER BAG IN RED",
      category: categories[2]._id,
      description:
      "Le Cagole XS Shoulder Bag in red Arena lambskin, aged-silver hardware",
      image: 'bal2.jpg',
      price: 2500.00,
      quantity: 100
    },
    {
      name: "WOMEN'S NEO CAGOLE XS HANDBAG WITH RHINESTONES IN WHITE",
      category: categories[2]._id,
      description:
      "Neo Cagole XS Handbag in white Arena lambskin, aged-silver hardware with rhinestones",
      image: 'bal3.jpg',
      price: 2900.00,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
