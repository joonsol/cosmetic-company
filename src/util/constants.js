import homeImage1 from "../assets/home1.png"
import homeImage2 from "../assets/home2.png"
import homeImage3 from "../assets/home3.png"
import homeImage4 from "../assets/home4.png"
import aboutImage1 from "../assets/about_1.jpg"
import aboutImage2 from "../assets/about_2.jpg"
import productImage1 from "../assets/product1.png"
import productImage2 from "../assets/product2.png"
import productImage3 from "../assets/product3.png"
import productImage4 from "../assets/product4.png"
import productImage5 from "../assets/product5.png"
import productImage6 from "../assets/product6.png"

export const content = {
  home: {
    title: "Welcome to Our Company",
    description: "We are dedicated to providing the best services and products to our customers. With a strong commitment to excellence and innovation, we strive to meet the diverse needs of our clients while building lasting relationships. Discover how our expertise and passion can make a difference in your journey!"
    ,
    image: [
      {
        image: homeImage1,
        title: "Innovative Solutions",
        description: "Providing innovative solutions to modern problems.",
      },
      {
        image: homeImage2,
        title: "Customer Satisfaction",
        description: "Ensuring satisfaction with every service we deliver.",
      },
      {
        image: homeImage3,
        title: "Global Presence",
        description: "Expanding our reach to serve customers worldwide.",
      },
      {
        image: homeImage4,
        title: "Sustainable Future",
        description: "Committed to sustainability and responsible practices.",
      },
    ],
  },
  about: {
    title: "About Us",
    description: "Our company was founded in 2020 with a vision to innovate and lead the industry with our exceptional solutions.",
    mission: "To deliver value and satisfaction to every client.",
    vision: [
      {
        title: "Global Leadership",
        text: "To be the global leader in our field by 2030, achieving excellence in all aspects of our work.",
        image: aboutImage1
      },
      {
        title: "Innovation and Service",
        text: "To continuously innovate and provide exceptional service to our clients and stakeholders.",
        image: aboutImage2
      },

    ]
  },
  product: {
    title: "Our Products",
    description: "We offer a range of high-quality products tailored to meet the diverse needs of our clients.",
    title: "Our Cosmetic Products",
    description: "Explore our range of high-quality cosmetic products, crafted to enhance your natural beauty and meet your skincare needs.",
    items: [
      {
        name: "Hydrating Face Cream",
        description: "Deep hydration for a radiant complexion.",
        image: productImage1
      },
      {
        name: "Brightening Serum",
        description: "A powerful formula for even, glowing skin.",
        image: productImage2
      },
      {
        name: "Anti-Aging Night Cream",
        description: "Reduce fine lines and restore skin elasticity.",
        image: productImage3
      },
      {
        name: "Vitamin C Eye Gel",
        description: "Revitalize tired eyes with our nourishing gel.",
        image: productImage4
      },
      {
        name: "Moisturizing Lip Balm",
        description: "Keep your lips soft and hydrated all day long.",
        image: productImage5
      },
      {
        name: "SPF 50 Sunscreen",
        description: "Protect your skin with our lightweight, non-greasy formula.",
        image: productImage6
      },
      {
        name: "Hydrating Face Cream",
        description: "Deep hydration for a radiant complexion.",
        image: productImage1
      },
      {
        name: "Brightening Serum",
        description: "A powerful formula for even, glowing skin.",
        image: productImage2
      },
      {
        name: "Anti-Aging Night Cream",
        description: "Reduce fine lines and restore skin elasticity.",
        image: productImage3
      },
      {
        name: "Vitamin C Eye Gel",
        description: "Revitalize tired eyes with our nourishing gel.",
        image: productImage4
      },
      {
        name: "Moisturizing Lip Balm",
        description: "Keep your lips soft and hydrated all day long.",
        image: productImage5
      },
      {
        name: "SPF 50 Sunscreen",
        description: "Protect your skin with our lightweight, non-greasy formula.",
        image: productImage6
      },

    ]
  },
  service: {
    title: "Our Services",
    description: "We provide a variety of services to cater to the specific needs of our clients.",
    offerings: [
      {
        name: "Consulting",
        details: "Expert advice to grow your business.",
        icon: "emoji_objects"
      },
      {
        name: "Support",
        details: "24/7 customer support to assist you anytime.",
        icon: "emoji_events"
      },
      {
        name: "Custom Solutions",
        details: "Tailor-made solutions just for your requirements.",
        icon:"support_agent"
      }
    ]
  }
};

export default content;
