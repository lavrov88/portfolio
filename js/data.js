const projects = [
   {
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
      deployed: "https://rides-history.herokuapp.com/"
   },
   {
      id: 'shaverma',
      name: 'Reactive shaverma',
      imgPreview: 'shaverma_small.jpg',
      images: ['shaverma_1.png','shaverma_2.png', 'shaverma_mob.png'],
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
      id: 'shopping',
      name: 'Efficient shopping list',
      imgPreview: 'shopping_1.png',
      images: ['shopping_1.png', 'shopping_2.png', 'shopping_3.png', 'shopping_4.png', 'shopping_mob.png'],
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
      id: 'todo-list',
      name: 'Todo List',
      imgPreview: 'todo_1.png',
      images: ['todo_1.png', 'todo_2.png', 'todo_3.png'],
      description: 'Simple todo app with ability to edit tasks and change their priority',
      functionality: [
         'Add, delete, edit tasks, toggle them as completed or change priority',
         'New task can be added by pressing "+" button or Enter on keyboard',
         'Task options appears on hover. On mobile version there is options button at the right side.',
         "App data is saved to local storage and  is being loaded when the app starts",
         "Too long names of tasks are trimmed. Also empty new task's name is checked.",
      ],
      stackShort: "HTML, CSS, JS",
      stackFull: [
         'HTML, CSS, JS'
      ],
      github: 'https://github.com/lavrov88/todo-list',
      deployed: "https://lavrov88.github.io/todo-list/"
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