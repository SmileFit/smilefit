// Site-wide content and copy

export const siteContent = {
  // Hero Section
  hero: {
    eyebrow: "Find outdoor sports classes in Italian cities",
    title: "Discover Outdoor Fitness Classes Near You",
    subtitle:
      "Connect with professional trainers and join outdoor fitness classes in your city. From yoga and pilates to HIIT and bootcamps - find the perfect class for your active lifestyle.",
    primaryCTA: {
      text: "Browse Classes",
      href: "/classes",
    },
    secondaryCTA: {
      text: "Contact Us",
      href: "/contact",
    },
  },

  // Features Section
  features: [
    {
      title: "Multiple Locations",
      description:
        "Classes in beautiful outdoor locations across Italian cities including Milan, Rome, Florence, Turin, and Bologna.",
      icon: "MapPin",
    },
    {
      title: "Flexible Schedule",
      description:
        "Morning, afternoon, and evening classes to fit your lifestyle. From sunrise yoga to sunset workouts.",
      icon: "Clock",
    },
    {
      title: "Expert Trainers",
      description:
        "Certified professionals with years of experience, passionate about helping you reach your fitness goals.",
      icon: "Users",
    },
  ],

  // How It Works Steps
  steps: [
    {
      number: 1,
      title: "Browse Classes",
      description:
        "Explore a variety of fitness classes offered by certified instructors in your city. Filter by type, location, and schedule.",
      icon: "Search",
    },
    {
      number: 2,
      title: "Find Your Fit",
      description:
        "Choose classes that match your schedule, fitness level, and interests. See instructor profiles and read class descriptions.",
      icon: "Calendar",
    },
    {
      number: 3,
      title: "Get In Touch",
      description:
        "Contact us to learn more about the class and reserve your spot. We'll help you get started on your fitness journey.",
      icon: "MessageCircle",
    },
  ],

  // Benefits Section
  benefits: [
    {
      title: "Certified Instructors",
      description:
        "All our instructors are certified professionals with extensive experience in their specialties.",
    },
    {
      title: "Beautiful Outdoor Locations",
      description:
        "Exercise in stunning parks, gardens, and beaches across Italy's most beautiful cities.",
    },
    {
      title: "Small Group Sizes",
      description:
        "Enjoy personalized attention with small class sizes that allow for individual guidance.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "Find classes throughout the week at times that work for your busy schedule.",
    },
  ],

  // Call to Action Banners
  ctaBanners: {
    home: {
      title: "Ready to Start Your Fitness Journey?",
      subtitle: "Join outdoor classes with expert trainers in your city",
      primaryCTA: {
        text: "Contact Us Today",
        href: "/contact",
      },
    },
    classes: {
      title: "Interested in a Class?",
      subtitle: "Contact us to learn more or reserve your spot",
      primaryCTA: {
        text: "Get In Touch",
        href: "/contact",
      },
    },
    howItWorks: {
      title: "Ready to Get Started?",
      subtitle: "Browse our classes and find the perfect fit for you",
      primaryCTA: {
        text: "Browse Classes",
        href: "/classes",
      },
    },
    instructors: {
      title: "Find Your Perfect Instructor",
      subtitle: "Contact us to connect with the right trainer for your goals",
      primaryCTA: {
        text: "Contact Us",
        href: "/contact",
      },
    },
  },

  // Testimonials (optional for Phase 1)
  testimonials: [
    {
      name: "Alessandro M.",
      location: "Milan",
      quote:
        "The morning yoga classes in Parco Sempione have transformed my daily routine. Maria is an incredible instructor!",
      rating: 5,
    },
    {
      name: "Francesca R.",
      location: "Rome",
      quote:
        "I love the HIIT workouts at Villa Borghese. Marco pushes me to my limits and the results are amazing.",
      rating: 5,
    },
    {
      name: "Giovanni T.",
      location: "Florence",
      quote:
        "Best fitness decision I've made. The outdoor setting makes exercise so much more enjoyable.",
      rating: 5,
    },
  ],

  // FAQ (optional for Phase 1)
  faq: [
    {
      question: "Do I need to bring my own equipment?",
      answer:
        "Most classes provide all necessary equipment. Check the class description or contact us for specific requirements.",
    },
    {
      question: "What happens if it rains?",
      answer:
        "Classes may be rescheduled or moved to a covered location depending on weather conditions. You'll be notified in advance.",
    },
    {
      question: "Are the classes suitable for beginners?",
      answer:
        "Yes! Most classes welcome all fitness levels. Instructors provide modifications for beginners and advanced participants.",
    },
    {
      question: "How do I reserve a spot?",
      answer:
        "Contact us through our contact form or email info@smilefit.com with your preferred class and we'll help you get started.",
    },
  ],
}

// Site configuration
export const siteConfig = {
  name: "SmileFit",
  description:
    "Join outdoor fitness classes with expert trainers in beautiful Italian cities.",
  email: "info@smilefit.com",
  social: {
    facebook: "https://facebook.com/smilefit",
    instagram: "https://instagram.com/smilefit",
    twitter: "https://twitter.com/smilefit",
  },
  cities: ["Milan", "Rome", "Florence", "Turin", "Bologna"],
  categories: [
    "Yoga",
    "HIIT",
    "Pilates",
    "Running",
    "Boxing",
    "Dance",
    "Zumba",
    "Meditation",
    "Functional Training",
    "Strength",
  ],
}
