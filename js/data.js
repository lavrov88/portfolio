const projects = [{
    id: 'rides',
    name: 'Rides history',
    imgPreview: 'rides_preview_s.jpg',
    images: ['rides_preview.png', 'rides_mob_1.png', 'rides_mob_2.png'],
    description: "Catalog of my group of friend's bicycle rides. Every ride has a data set consisting of members, statistics, photos and map with track.",
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
    deployed: "https://lavrov88.github.io/rides/"
  },
  {
    id: 'shopping',
    name: 'Smart shopping list',
    imgPreview: 'shopping_1.png',
    images: ['shopping_1.png', 'shopping_2.png', 'shopping_3.png', 'shopping_mob.png'],
    description: "Shopping app with easy access to all lists and ability to quickly create several items.",
    functionality: [
      "All lists together are placed on a screen, goods can be turned to bought by one click",
      "You can add several new goods at one moment. Just write them in add-goods menu, separating with commas.",
      "Bought goods move to the end of a list (with 2 sec delay for more convenient multi-element control). You can delete them from separated list or from all lists using menu button.",
      "Goods can be sorted, renamed or deleted in list options",
      "Lists also can be sorted, renamed, added, deleted. Their color can be changed.",
      "Mobile layout, dark theme and saving data in local storage are included"
    ],
    stackShort: "HTML, CSS, JS",
    stackFull: [
      "HTML, CSS, JS"
    ],
    github: "https://github.com/lavrov88/shopping",
    deployed: "https://lavrov88.github.io/shopping/"
  },
  {
    id: 'shaverma',
    name: 'Reactive shaverma',
    imgPreview: 'shaverma_small.jpg',
    images: ['shaverma_1.png', 'shaverma_2.png', 'shaverma_mob.png'],
    description: "Shaverma online store imitation",
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
    id: 'contacts',
    name: 'Contacts',
    imgPreview: 'contacts_1.png',
    images: ['contacts_1.png', 'contacts_2.png', 'contacts_3.png', 'contacts_4.png'],
    description: 'List of contacts received from the server',
    functionality: [
      "List of cards with contacts with ability to add, edit or delete them",
      "Contacts are stored on the server and fetched by REST API",
      "Search is available with all contacts fields (server-side)",
      "App has login page with verification from server",
    ],
    stackShort: "React, Redux, Axios Ant Design",
    stackFull: [
      'React',
      'Redux, redux-thunk',
      'TypeScript (actions, reducers, props types)',
      'And Design (UI elements)',
      'Axios (HTTP-requests)',
      'json-server, json-server-auth (fake server with auth)',
    ],
    github: 'https://github.com/lavrov88/contacts',
    deployed: ''
  },
  {
    id: 'flight-search-result',
    name: 'Flight search result',
    imgPreview: 'flights_1.png',
    images: ['flights_1.png', 'flights_2.png'],
    description: 'List of cards with flight information - search results block imitation in purchasing air tickets system',
    functionality: [
      "Flight data is taken from mock json-file",
      "List can be sorted, filtered by transfers, price or airline",
      "Reactive controls: filters changing immediately brings a new search results",
      "Faceted filtering: options selection in filters affects the availability of options in other filters"
    ],
    stackShort: "React, Redux, TypeScript",
    stackFull: [
      'React',
      'Redux',
      'TypeScript (actions, reducers, props types)'
    ],
    github: 'https://github.com/lavrov88/flight-search-result',
    deployed: 'https://lavrov88.github.io/flight-search-result/'
  },
  {
    id: 'routes',
    name: 'Routes List',
    imgPreview: 'routes_1.jpg',
    images: ['routes_1.jpg', 'routes_2.jpg'],
    description: 'Editable list of points with generation of routes between them',
    functionality: [
      "Route points can be changed using selector for active route",
      "Displaying map and route using OpenStreetMap data",
      "Width of route's list and map can be changed by mouse dragging"
    ],
    stackShort: "React, Redux, Leaflet, Ant Design",
    stackFull: [
      'React',
      'Redux',
      'And Design (UI elements)',
      'Leaflet, react-leaflet, leaflet-routing-machine (map-frameworks)',
      'React-split (draggable border betweet list and map)',
    ],
    github: 'https://github.com/lavrov88/routes',
    deployed: 'https://lavrov88.github.io/routes/'
  },
  {
    id: 'social',
    name: 'SamuraiJS social network',
    imgPreview: 'social_1.png',
    images: ['social_1.png', 'social_2.png', 'social_3.png', 'social_4.png'],
    description: 'Learning project based on "<a href="https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8" target="_blank">React: way of Samurai training course</a>"',
    functionality: [
      "Social network client. Connected with REST API to the learning server.",
      "Displaying profile page with information, photo and status",
      "Ability to edit profile data, status and upload a new photo",
      "List of all users where you can follow them (if logged) or open their profile pages",
      "Login and logout. The current user is displayed in the header",
      "Sending posts and messages is only works as test on client side, without a server",
      "No mobile version yet"
    ],
    stackShort: "React, Redux, TypeScript",
    stackFull: [
      'React (react-router-dom, React.lazy, React.Suspense CSS-modules, SCSS)',
      'Redux (react-redux, thunk, redux-form)',
      'TypeScript (partially)',
      'REST API, Axios (fetching from <a href="https://social-network.samuraijs.com/docs" target="_blank">SamuraiJS backend</a>)'
    ],
    github: 'https://github.com/lavrov88/social',
    deployed: 'https://lavrov88.github.io/social/'
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    imgPreview: 'portfolio_1.png',
    images: ['portfolio_1.png'],
    description: 'This page with my projects list',
    functionality: [
      "Just list with my works and popup with details and more screens"
    ],
    stackShort: "Vanilla JS, Bootstrap",
    stackFull: [
      'HTML, CSS, JS',
      'Bootstrap 5 (styles, modals, buttons, cards)'
    ],
    github: 'https://github.com/lavrov88/portfolio',
    deployed: ""
  }
]