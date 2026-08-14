export const content = {
  home: {
    hero: {
      label: "Est. 2018 · São Paulo",
      title: "Through the mist, \na quiet meal",
      subtitle:
        "Simple ingredients, careful hands, and a space that feels like a breath of fresh air.",
    },
    divider: "Our Promise",
    features: {
      cards: [
        {
          icon: "leaf",
          title: "Seasonal ingredients",
          description: "Menu changes every month based on what's fresh.",
        },
        {
          icon: "fish",
          title: "Daily fresh fish",
          description: "Delivered every morning from local suppliers.",
        },
        {
          icon: "clock",
          title: "No rush",
          description: "We pace the meal for you. No table limits.",
        },
      ],
    },
  },
  menu: {
    title: "Today's menu",
    subtitle: "All prices in BRL · Serves one",
    sections: [
      {
        name: "Starters",
        plates: [
          {
            image: "edamame",
            name: "Edamame",
            price: 18,
            description: "Lightly salted, steamed young soybeans",
          },
          {
            image: "gyoza",
            name: "Gyoza (6 pcs)",
            price: 42,
            description: "Pan-fried pork and cabbage dumplings, ponzu dip",
          },
          {
            image: "miso",
            name: "Miso soup",
            price: 22,
            description: "Tofu, wakame, spring onion",
          },
        ],
      },
      {
        name: "Main",
        plates: [
          {
            image: "salmon",
            name: "Salmon donburi",
            price: 78,
            description: "Sashimi-grade salmon over warm rice, sesame, nori",
          },
          {
            image: "tonkatsu",
            name: "Tonkatsu teishoku",
            price: 68,
            description: "Breaded pork cutlet, rice, miso soup, pickles",
          },
          {
            image: "ramen",
            name: "Vegetable ramen",
            price: 58,
            description: "Kombu broth, seasonal vegetables, soft-boiled egg",
          },
        ],
      },
      {
        name: "Dessert",
        plates: [
          {
            image: "matcha",
            name: "Matcha panna cotta",
            price: 32,
            description: "Served with azuki bean paste",
          },
          {
            image: "mochi",
            name: "Mochi ice cream (2 pcs)",
            price: 28,
            description: "Seasonal flavors — ask your server",
          },
        ],
      },
    ],
  },
  contact: {
    title: "Find us",
    subtitle: "Reservations recommended on weekends",
    location: {
      icon: "mapPin",
      title: "Location",
      address: {
        icon: "home",
        value: ["Rua da Neblina, 609", "Jardins, São Paulo – SP"],
      },
      phone: {
        icon: "phone",
        value: "+55 (11) 3456-7890",
      },
      email: {
        icon: "mail",
        value: "ola@kiri.com.br",
      },
    },
    hours: {
      icon: "clock",
      title: "Hours",
      schedule: [
        { day: "Mon - Tue", time: "Closed" },
        { day: "Wed - Fri", time: "12h - 15h · 19h - 22h" },
        { day: "Saturday", time: "12h - 23h" },
        { day: "Sunday", time: "12h - 17h" },
      ],
    },
    map: "Map · Jardins, SP",
  },
};
