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
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-leaf"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21c.5 -4.5 2.5 -8 7 -10" /><path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3l.014 0" /></svg>`,
          title: "Seasonal ingredients",
          description: "Menu changes every month based on what's fresh.",
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-fish"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16.69 7.44a6.973 6.973 0 0 0 -1.69 4.56c0 1.747 .64 3.345 1.699 4.571" /><path d="M2 9.504c7.715 8.647 14.75 10.265 20 2.498c-5.25 -7.761 -12.285 -6.142 -20 2.504" /><path d="M18 11v.01" /><path d="M11.5 10.5c-.667 1 -.667 2 0 3" /></svg>`,
          title: "Daily fresh fish",
          description: "Delivered every morning from local suppliers.",
        },
        {
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>`,
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
      title: "Location",
      address: ["Rua da Neblina, 609", "Jardins, São Paulo – SP"],
      phone: "+55 (11) 3456-7890",
      email: "ola@kiri.com.br",
    },
    hours: {
      title: "Hours",
      schedule: [
        { day: "Mon – Tue", time: "Closed" },
        { day: "Wed – Fri", time: "12h – 15h · 19h – 22h" },
        { day: "Saturday", time: "12h – 23h" },
        { day: "Sunday", time: "12h – 17h" },
      ],
    },
    map: "Map · Jardins, SP",
  },
};
