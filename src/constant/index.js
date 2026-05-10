export const navLinks = [
  { id: "home", title: "Home", link: "/", icon: "🏠" },
  { id: "collection", title: "Collection", link: "/collection", icon: "🛍️" },
  {
    id: "about", title: "About", link: "/about", icon: "ℹ️"
  },
  { id: "contact", title: "Contact", link: "/contact", icon: "📞" }
]


export const aboutPageText = [
  {
    text: `We don't just create products — we create movement. Driven by
                innovation and inspired by athletes, our mission is to redefine
                performance and style. Every design is built to push limits,
                break barriers, and empower individuals to go beyond what they
                thought was possible. From the streets to the stadium, we bring
                together technology, comfort, and bold design to deliver an
                experience that performs as hard as you do.` , image: "./banner-for-about-page-containt.jpg"
  },
  {
    text: ` Our products are built at the intersection of innovation and
                style. From high-performance running shoes to everyday
                streetwear, each piece is crafted with attention to detail,
                advanced materials, and athlete-driven design. Whether you're
                training, competing, or expressing your style — our collection
                is designed to elevate every step.` , image: "./banner-for-about-page-containt.jpg"
  },
  {
    text: ` Innovation First We combine cutting-edge technology with modern
                design. Athlete Inspired Built with insights from real
                performers and real experiences. Unmatched Comfort Every product
                is designed to feel as good as it looks. Bold Identity Not just
                gear — a statement of who you are.` , image: "./banner-for-about-page-containt.jpg"
  }, {
    text: `Step into the future of performance. Explore the collection and
                redefine your limits.` , image: "./banner-for-about-page-containt.jpg"
  }, {
    text: `We don't just create products — we create movement. Driven by
                innovation and inspired by athletes, our mission is to redefine
                performance and style. Every design is built to push limits,
                break barriers, and empower individuals to go beyond what they
                thought was possible. From the streets to the stadium, we bring
                together technology, comfort, and bold design to deliver an
                experience that performs as hard as you do.` , image: "./banner-for-about-page-containt.jpg"
  }
]

export const productsType = [
  {
    id: 1,
    name: "Air Jordan 1",
    type: "Air Jordan",
    img: "./nike-shoe/air-jorden/air-jorden-1-mid-se.avif",
  },
  {
    id: 2,
    name: "Air Force 1",
    img: "./nike-shoe/air-force/nike-air-force-1'07-next-nature.avif",
    type: "air force",
  },
  {
    id: 3,
    name: "Graphic Tees",
    img: "./nike-shoe/graphic-tree/jorden.avif",
    type: "graphic tree"
  },
  {
    id: 4,
    name: "Pegasus Premium",
    img: "./public/nike-shoe/pegasus-premium/nike-pegasus-premium-4.avif",
    type: "pegasus premium"
  },
  {
    id: 5,
    name: "Tights",
    img: "./nike-shoe/tights/nike-swift.avif",
    type: "tights"
  },
  {
    id: 6,
    name: "Structure",
    img: "./nike-shoe/structure/nike-structure-plus-2.avif",
    type: "structure"
  },
  {
    id: 7,
    name: "Jackets",
    img: "./nike-shoe/jackets/nike-stride-fly-nike.avif",
    type: "jacket"
  },
  {
    id: 8,
    name: "Vomero 18",
    img: "./nike-shoe/vomiro-18/nike-vomiro-18-4.avif",
    type: "vomiro 18"
  },
  {
    id: 9,
    name: "Dunk",
    img: "./nike-shoe/dunk/nike-dunk-low-retro-se.avif",
    type: "dunk"
  },
  {
    id: 10,
    name: "Bottoms",
    img: "./nike-shoe/bottoms/nike-air.avif",
    type: "bottom"
  },
  {
    id: 11,
    name: "P-6000",
    img: "./nike-shoe/p-6000/nike-p-6000-gold.avif",
    type: "p-6000"
  },
  {
    id: 12,
    name: "Caps",
    img: "./nike-shoe/caps/nike-club.avif",
    type: "cap"
  },
  {
    id: 13,
    name: "Air Max",
    img: "./nike-shoe/air-max/nike-air-max-90-4.avif",
    type: "Air max"
  },
  {
    id: 14,
    name: "Sports Bras",
    img: "./nike-shoe/sports-bras/nike-swift.avif",
    type: "sports bras"
  },
  {
    id: 15,
    name: "Court Vision",
    img: "./nike-shoe/court-vision/nike-court-vision-low-3.avif",
    type: "court vision"
  },
  {
    id: 16,
    name: "Shorts",
    img: "./nike-shoe/shorts/nike-club-2.avif",
    type: "shorts"
  },
];


// filters for product section
export const filters = [
  { label: "Gender", options: ["Men", "Women", "Kids"] },
  { label: "Size", options: ["6", "7", "8", "9", "10", "11", "12"] },
  { label: "Shop By Price", options: ["Under ₹5,000", "₹5,000–₹10,000", "₹10,000–₹20,000", "Above ₹20,000"] },
  { label: "Product Label", options: ["Just In", "Sale", "Sustainable"] },
  { label: "Launched In", options: ["2024", "2023", "2022"] },
  { label: "Colour", options: ["Black", "White", "Red", "Blue", "Green"] },
  { label: "Shoe Height", options: ["Low", "Mid", "High"] },
];


// products for product
export const products = [
  // nike air force
  {
    id: 1,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "air force",
    size: [6, 7, 8, 9, 10,],
    badge: "Just In",
    name: "air force 1'07",
    category: "Men's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/air-force/nike-air-force-1'07-2.avif",
  },
  {
    id: 2,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "Air force",
    size: [6, 7, 8, 9, 10, 11, 13],
    badge: "slae",
    name: "air force 1'07",
    category: "women's Shoes",
    price: "₹15,495",
    colors: [],
    img: "./nike-shoe/air-force/nike-air-force-1'07.avif",
  },

  // nike air jorden
  {
    id: 3,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "Air Jordan",
    size: [6, 7, 8, 9, 10, 11],
    badge: " slae",
    name: "Air Jordan 1 Low SE",
    category: "Men's Shoes",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/air-jorden/air-jorden-1-mid-2.avif",
  },
  {
    id: 4,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "Air Jordan",
    size: [6, 7, 8, 9, 10, 11],
    badge: "slae",
    name: "air jorden 1 mid se",
    category: "women's Shoes",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/air-jorden/air-jorden-1-mid-se.avif",
  },


  // air max
  {
    id: 5,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "Air max",
    size: [6, 7, 8, 9, 10, 11],
    badge: "Just In",
    name: "air max 90",
    category: "Men's Shoes",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/air-max/nike-air-max-90-2.avif",
  },
  {
    id: 6,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "Air Jordan",
    size: [6, 7, 8, 9, 10, 11],
    badge: "Just In",
    name: "air max 95 og",
    category: "womens's Shoes",
    price: "₹11,495",
    colors: [],
    img: "../../public/nike-shoe/air-max/nike-air-max-95-og.avif",
  },


  // bottoms
  {
    id: 7,
    title: "cloth",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "bottom",
    badge: "Just In",
    name: "nike academy",
    category: "Men's bottom",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/bottoms/nike-academy.avif",
  },
  {
    id: 8,
    title: "cloth",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "bottom",
    badge: "Just In",
    name: "nike air 2",
    category: "Men's bottom",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/bottoms/nike-air-2.avif",
  },

  // cap
  {
    id: 9,
    title: "cap",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "cap",
    badge: "Just In",
    name: "nike club",
    category: "Men's cap",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/caps/nike-club.avif",
  },

  // court vision
  {
    id: 10,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "court vision",
    size: [6, 7, 8, 9, 10, 11],
    badge: "Just In",
    name: "court vision low",
    category: "men's Shoes",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/court-vision/nike-court-vision-low.avif",
  },
  {
    id: 11,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "court vision",
    size: [6, 7, 8, 9, 10, 11],
    badge: "Just In",
    name: "court vision low next nature",
    category: "womens's Shoes",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/court-vision/nike-court-vision-low-next-nature.avif",
  },

  // dunk
  {
    id: 12,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "dunk",
    size: [6, 7, 8, 9, 10, 11],
    badge: "Just In",
    name: "dunk low",
    category: "womens's Shoes",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/dunk/nike-dunk-low.avif",
  },
  {
    id: 13,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "dunk",
    size: [6, 7, 8, 9, 10, 11],
    badge: "Just In",
    name: "dunk low retro se",
    category: "men's Shoes",
    price: "₹11,495",
    colors: [],
    img: "../../public/nike-shoe/dunk/nike-dunk-low-retro-se.avif",
  },

  // graphic tree
  {
    id: 14,
    title: "cloth",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "graphic tree",
    badge: "Just In",
    name: "jorden flight",
    category: "men's Shoes",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/graphic-tree/jorden-flight.avif",
  },
  {
    id: 15,
    title: "cloth",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "graphic tree",
    badge: "Just In",
    name: "jorden",
    category: "men's Shoes",
    price: "₹11,495",
    colors: [],
    img: "../../public/nike-shoe/graphic-tree/jorden.avif",
  },

  // jacket
  {
    id: 16,
    title: "cloth",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "jacket",
    badge: "Just In",
    name: "nike swift",
    category: "men's Shoes",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/jackets/nike-swift.avif",
  },
  {
    id: 17,
    title: "cloth",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "jacket",
    badge: "Just In",
    name: "nike shortswear",
    category: "men's Shoes",
    price: "₹11,495",
    colors: [],
    img: "./nike-shoe/jackets/nike-shortswear.avif",
  },

  // p-6000
  {
    id: 18,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "p-6000",
    size: [6, 7, 8, 9, 10,],
    badge: "Just In",
    name: "nike p 6000",
    category: "Men's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/p-6000/nike-p-6000.avif",
  },
  {
    id: 19,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "p-6000",
    size: [6, 7, 8, 9, 10,],
    badge: "Just In",
    name: "nike p 6000",
    category: "Men's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/p-6000/nike-p-600-2.avif.avif",
  },

  // pegasus premium
  {
    id: 20,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "pegasus premium",
    size: [6, 7, 8, 9, 10,],
    badge: "Just In",
    name: "nike pegasus premium",
    category: "Men's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/pegasus-premium/nike-pegasus-premium.avif",
  },

  {
    id: 21,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "pegasus premium",
    size: [6, 7, 8, 9, 10,],
    badge: "Just In",
    name: "nike pegasus premium",
    category: "Men's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/pegasus-premium/nike-pegasus-premium-2.avif",
  },

  // shorts
  {
    id: 22,
    title: "cloth",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "shorts",
    badge: "Just In",
    name: "nike club",
    category: "women's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/shorts/nike-club.avif",
  },
  {
    id: 23,
    title: "cloth",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "shorts",
    badge: "Just In",
    name: "nike club",
    category: "women's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/shorts/nike-club-2.avif",
  },

  // sports bras
  {
    id: 24,
    title: "cloth",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "sports bras",
    badge: "Just In",
    name: "nike swift",
    category: "women's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/sports-bras/nike-swift.avif",
  },

  // structure
  {
    id: 25,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "structure",
    size: [6, 7, 8, 9, 10,],
    badge: "Just In",
    name: "nike structure plus",
    category: "Men's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/structure/nike-structure-plus.avif",
  },
  {
    id: 26,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "structure",
    size: [6, 7, 8, 9, 10,],
    badge: "Just In",
    name: "nike structure 26",
    category: "Men's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/structure/nike-structure-26.avif",
  },

  // tights
  {
    id: 27,
    title: "cloth",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "tights",
    badge: "Just In",
    name: "nike swift",
    category: "Men's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/tights/nike-swift.avif",
  },

  // vomiro 18
  {
    id: 28,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "vomiro 18",
    size: [6, 7, 8, 9, 10,],
    badge: "Just In",
    name: "vomiro 18",
    category: "Men's Shoes",
    price: "₹11,500",
    colors: [],
    img: "./nike-shoe/vomiro-18/nike-vomiro-18.avif",
  },
  {
    id: 29,
    title: "shoe",
    desc: `Built for speed, comfort, and everyday performance. These Nike shoes feature lightweight cushioning, responsive support, and a breathable design that keeps you moving confidently all day long.`,
    type: "vomiro 18",
    size: [6, 7, 8, 9, 10,],
    badge: "Just In",
    name: "vomiro 18 se",
    category: "Men's Shoes",
    price: "₹11,500",
    colors: [],
    img: "../../public/nike-shoe/vomiro-18/nike-vomiro-18-se.avif",
  },
];
