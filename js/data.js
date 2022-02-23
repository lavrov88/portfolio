const projects = [
   {
      id: 'rides',
      name: 'Rides history',
      imgPreview: 'rides_preview_s.jpg',
      images: ['rides_preview.png', 'rides_mob_1.png', 'rides_mob_2.png'],
      description: "Catalogue of my group of friend's bicycle rides. Every ride has a data set consisting of members, statistics, photos and map with track.",
      functionality: [
         "List of rides that can be sorted by several parameters and filtered by members",
         "List separators and key parameters at the right side of list items are different for every type of sorting",
         "Ride's info section shows members, statistics, link to Strava, gallery with clickable photos",
         "For each ride there is map with track implemented with Yandex Maps constructor",
         "Mobile version has completely different layout adapted for small screen"
   ],
      stackShort: "React (react-router, CSS-modules)",
      stackFull: [
         'React (react-router-dom, CSS-modules, react-swipeable for mobile version)',
         'SCSS (nesting, variables)',
         'Yandex Maps constructor',
   ],
      github: "https://github.com/lavrov88/rides",
      deployed: "https://rides-history.herokuapp.com/"
   },
   {
      id: 'shaverma',
      name: 'Reactive shaverma',
      imgPreview: 'shaverma_small.jpg',
      images: ['shaverma_1.png','shaverma_2.png', 'shaverma_mob.png'],
      description: "Imitation of shaverma online store",
      functionality: [
         "One or two option for each shop item, depending on it's price",
         "The menu is fetched from fake server (json-server)",
         "Sorting by parameters and filtering by type (server-side)",
         "Counters for menu items placed in the cart, total items in the cart and total amount of money",
         "Items in the cart are grouped if all their parameters match",
         "Ability to change amount of items in the cart, delete them or clear all",
         "Adapted for mobile devices",
      ],
      stackShort: "React, Redux, TypeScript, Ant Design",
      stackFull: [
         'React (react-router-dom, CSS-modules, SCSS)',
         'Redux (react-redux, thunk)',
         'TypeScript (typed props, state, actions, etc)',
         'Ant Design for UI components'
      ],
      github: "https://github.com/lavrov88/shaverma",
      deployed: "https://reactive-shaverma.herokuapp.com/"
   },
   {
      id: 'shopping',
      name: 'Efficient shopping list',
      imgPreview: 'shopping_1.png',
      images: ['shopping_1.png', 'shopping_2.png', 'shopping_3.png', 'shopping_4.png', 'shopping_mob.png'],
      description: "Simple app, which help you to manage your shopping",
      functionality: "Not yet",
      stackShort: "Vanilla JS",
      stackFull: [
         
   ],
      github: "https://github.com/lavrov88/shopping",
      deployed: "https://lavrov88.github.io/shopping/"
   },
   {
      id: 'social',
      name: 'SamuraiJS social network',
      imgPreview: null,
      images: [],
      description: 'Learning project based on "SamuraiJS training course"',
      functionality: "Not yet",
      stackShort: "React, Redux, TypeScript",
      stackFull: "Not yet!",
      github: null,
      deployed: null
   },
   {
      id: 'portfolio',
      name: 'Portfolio',
      imgPreview: null,
      images: [],
      description: 'This page with my projects list',
      functionality: "Not yet",
      stackShort: "Vanilla JS, Bootstrap",
      stackFull: "Not yet!",
      github: 'https://github.com/lavrov88/portfolio',
      deployed: "https://lavrov88.github.io/portfolio/"
   }
]