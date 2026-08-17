/*
|--------------------------------------------------------------------------
| PROJECT CONTENT DATA
|--------------------------------------------------------------------------
|
| DOC-ALIGNED CONTENT MODEL
|
| The website is not only a catalogue of illustrated books.
| Each book can eventually support:
|
| - Illustrated edition
| - Read Aloud / Audio
| - Multiple languages
| - Interactive illustrations
| - Additional information on illustration click
| - DIY tutorials
| - Videos / external resources
| - Printable activities
| - Songs
| - Colouring sheets
| - Bilderbuchkino
| - Kamishibai
|
| The same structure can be used across all books.
|
|--------------------------------------------------------------------------
*/


/*
|--------------------------------------------------------------------------
| SHARED BOOK CAPABILITIES
|--------------------------------------------------------------------------
|
| These are intentionally data-driven.
| A book can enable capabilities individually without changing the UI.
|
*/

const DEFAULT_BOOK_CAPABILITIES = {
  formats: {
    illustratedEdition: true,
    audioBook: false,
    readAloud: false,
    multilingual: false,
    interactiveEbook: false,
    interactivePdf: false,
    onlineEdition: false,
  },

  interactiveFeatures: {
    clickableIllustrations: false,
    illustrationInformation: false,
    diyTutorials: false,
    videos: false,
    externalResources: false,
  },

  learningResources: {
    stories: true,
    songs: false,
    crafts: false,
    colouringSheets: false,
    printableActivities: false,
  },

  presentationFormats: {
    bilderbuchkino: false,
    kamishibai: false,
  },

  audiences: {
    families: true,
    parents: true,
    children: true,
    kindergarten: false,
    preschool: false,
    libraries: false,
    lectureGroups: false,
    toddlerGroups: false,
  },

  resources: {
    audio: [],
    languages: [],
    illustrationInfo: [],
    diyTutorials: [],
    videos: [],
    downloads: [],
  },
};


/*
|--------------------------------------------------------------------------
| HELPER
|--------------------------------------------------------------------------
|
| Keeps every book structurally consistent.
| Individual books can override only what is actually available.
|
*/

function createBook(data) {
  return {
    ...data,

    capabilities: {
      ...DEFAULT_BOOK_CAPABILITIES,

      formats: {
        ...DEFAULT_BOOK_CAPABILITIES.formats,
        ...(data.capabilities?.formats || {}),
      },

      interactiveFeatures: {
        ...DEFAULT_BOOK_CAPABILITIES.interactiveFeatures,
        ...(data.capabilities?.interactiveFeatures || {}),
      },

      learningResources: {
        ...DEFAULT_BOOK_CAPABILITIES.learningResources,
        ...(data.capabilities?.learningResources || {}),
      },

      presentationFormats: {
        ...DEFAULT_BOOK_CAPABILITIES.presentationFormats,
        ...(data.capabilities?.presentationFormats || {}),
      },

      audiences: {
        ...DEFAULT_BOOK_CAPABILITIES.audiences,
        ...(data.capabilities?.audiences || {}),
      },

      resources: {
        ...DEFAULT_BOOK_CAPABILITIES.resources,
        ...(data.capabilities?.resources || {}),
      },
    },
  };
}


/*
|--------------------------------------------------------------------------
| FEATURED STORIES
|--------------------------------------------------------------------------
*/

export const FEATURED_STORIES = [
  createBook({
    id: "secret-garden",
    number: "01",
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    ageRange: "Ages 8–12",

    description:
      "A forgotten garden, a hidden world, and a story about finding your way back to wonder.",

    image:
      "https://images.unsplash.com/vector-1742996363326-7a2fb198a63d?q=80&w=764&auto=format&fit=crop",

    href: "/books/the-secret-garden",

    category: "Illustrated edition",

    /*
    |--------------------------------------------------------------
    | Current content
    |--------------------------------------------------------------
    */

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),

  createBook({
    id: "little-women",
    number: "02",
    title: "Little Women",
    author: "Louisa May Alcott",
    ageRange: "Ages 9–13",

    description:
      "Four sisters, one unforgettable home, and a story that grows with every generation.",

    image:
      "https://images.unsplash.com/photo-1578301978162-7aae4d755744?q=80&w=677&auto=format&fit=crop",

    href: "/books/little-women",

    category: "Illustrated edition",

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),

  createBook({
    id: "alice-in-wonderland",
    number: "03",
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    ageRange: "Ages 7–11",

    description:
      "Follow Alice down the rabbit hole and into a world where nothing is quite as it seems.",

    image:
      "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?q=80&w=789&auto=format&fit=crop",

    href: "/books/alice-in-wonderland",

    category: "Illustrated edition",

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),
];


/*
|--------------------------------------------------------------------------
| WHY ILLUSTRATED
|--------------------------------------------------------------------------
*/

export const WHY_ILLUSTRATED_PRINCIPLES = [
  {
    number: "01",
    title: "Beautifully illustrated",
    description:
      "Art that gives familiar worlds another way to be discovered.",
    accent: "#2B1516",
  },

  {
    number: "02",
    title: "Made for curious readers",
    description:
      "Thoughtful details that invite readers to slow down and look.",
    accent: "#5C6152",
  },

  {
    number: "03",
    title: "Designed to be revisited",
    description:
      "Editions made to become part of the stories you return to.",
    accent: "#EBE8D8",
  },
];


/*
|--------------------------------------------------------------------------
| EXPLORE COLLECTION
|--------------------------------------------------------------------------
|
| Full collection.
|
| IMPORTANT:
| The existing visual components only need:
|
| id
| number
| title
| author
| ageRange
| category
| description
| image
| href
|
| Everything under "capabilities" is additional DOC-aligned
| product data for the individual book experience.
|
*/

export const EXPLORE_COLLECTION_ITEMS = [
  createBook({
    id: "secret-garden",
    number: "01",
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    ageRange: "Ages 8+",
    category: "Illustrated edition",

    description:
      "A forgotten garden, a hidden world, and a story about finding your way back to wonder.",

    image:
      "https://cdn.sanity.io/images/ps8jihhe/production/f98ea737eee1ea28e19c0d588946b258b49c437a-1622x2449.jpg?w=1080&f=webp",

    href: "/books/the-secret-garden",

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),

  createBook({
    id: "little-women",
    number: "02",
    title: "Little Women",
    author: "Louisa May Alcott",
    ageRange: "Ages 9+",
    category: "Illustrated edition",

    description:
      "Four sisters, one unforgettable home, and a story that grows with every generation.",

    image:
      "https://cdn.sanity.io/images/ps8jihhe/production/e873cde69b52a09682426c7db4235837caf04bed-499x750.png?w=1080&f=webp",

    href: "/books/little-women",

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),

  createBook({
    id: "alice-in-wonderland",
    number: "03",
    title: "Alice in Wonderland",
    author: "Lewis Carroll",
    ageRange: "Ages 7+",
    category: "Illustrated edition",

    description:
      "Follow Alice down the rabbit hole and into a world where nothing is quite as it seems.",

    image:
      "https://cdn.sanity.io/images/ps8jihhe/production/77859de2370c5afc016b6d3d9a6659f9db53d230-334x500.jpg?w=1080&f=webp",

    href: "/books/alice-in-wonderland",

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),

  createBook({
    id: "the-little-prince",
    number: "04",
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    ageRange: "Ages 7+",
    category: "Illustrated edition",

    description:
      "A small prince travels between worlds, discovering friendship, imagination, and what truly matters.",

    image:
      "https://cdn.sanity.io/images/ps8jihhe/production/6eaf3dc8670e1ef0d47b014b90cfdcffd59854fb-328x500.jpg?w=1080&f=webp",

    href: "/books/the-little-prince",

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),

  createBook({
    id: "peter-pan",
    number: "05",
    title: "Peter Pan",
    author: "J. M. Barrie",
    ageRange: "Ages 8+",
    category: "Illustrated edition",

    description:
      "Fly beyond the ordinary and into Neverland, where childhood refuses to stay still.",

    image:
      "https://cdn.sanity.io/images/ps8jihhe/production/fde9f4b4a072acca2d46fb521f500d12a9f8b00c-333x500.jpg?w=1080&f=webp",

    href: "/books/peter-pan",

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),

  createBook({
    id: "charlottes-web",
    number: "06",
    title: "Charlotte's Web",
    author: "E. B. White",
    ageRange: "Ages 8+",
    category: "Illustrated edition",

    description:
      "A friendship between a pig and a spider becomes a gentle story about kindness and growing up.",

    image:
      "https://cdn.sanity.io/images/ps8jihhe/production/519e029f77f4f6267893a7042eca6b6251b79354-600x900.jpg?w=1080&f=webp",

    href: "/books/charlottes-web",

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),

  createBook({
    id: "the-wind-in-the-willows",
    number: "07",
    title: "The Wind in the Willows",
    author: "Kenneth Grahame",
    ageRange: "Ages 8+",
    category: "Illustrated edition",

    description:
      "Riverside adventures, unlikely friendships, and a world where every path leads somewhere unexpected.",

    image:
      "https://cdn.sanity.io/images/ps8jihhe/production/1dc660dbdb5ff64b55592ec0ec1638fd289cc8af-332x500.jpg?w=1080&f=webp",

    href: "/books/the-wind-in-the-willows",

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),

  createBook({
    id: "anne-of-green-gables",
    number: "08",
    title: "Anne of Green Gables",
    author: "L. M. Montgomery",
    ageRange: "Ages 9+",
    category: "Illustrated edition",

    description:
      "Meet Anne Shirley, an imaginative girl whose arrival turns an ordinary home into something extraordinary.",

    image:
      "https://cdn.sanity.io/images/ps8jihhe/production/bab34e62bafebe3371211e26c96b4db0ea3e611d-334x500.jpg?w=1080&f=webp",

    href: "/books/anne-of-green-gables",

    capabilities: {
      formats: {
        illustratedEdition: true,
      },

      audiences: {
        children: true,
        families: true,
        parents: true,
      },
    },
  }),
];