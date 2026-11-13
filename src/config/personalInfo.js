/**
 * ==============================================================================
 * 👤 PERSONAL INFORMATION CONFIGURATION
 * ==============================================================================
 * 
 * Edit this file to customize your personal portfolio details.
 * All components across 2D sections and 3D scenes read from this central file.
 */

export const personalInfo = {
  // --- Basic Identity ---
  name: "Radha Krishna",
  shortName: "KRISHNA", // Used for large 3D floating corridor text, preloader, and sky milestones
  brandName: "KRISHNA.DEV", // Displayed on 3D corridor walls & badges
  handle: "@krishna", // Shown on the entrance doors and social badges
  title: "Creative Engineer & AI/ML Student",
  
  // Tagline words split-animated across 3D corridor camera travel
  taglineWords: [
    { text: "Creative", splitDir: -1.8 },
    { text: "Engineer", splitDir: -0.6 },
    { text: "AI / ML", splitDir: 0.6 },
    { text: "Developer", splitDir: 1.8 }
  ],

  // 3D About Room sky subtitle
  subtitle: "< creative engineer • ai/ml student • web development • intelligent systems />",

  // --- Education, College & Age ---
  education: {
    degree: "B.Tech in Computer Science & Machine Learning (CSM)",
    shortDegree: "B.Tech CSM",
    year: "2nd Year",
    college: "Engineering College", // Replace with your exact College / University name (e.g. "Vignan's University" / "RVR & JC College of Engineering", etc.)
    status: "Undergraduate Student",
    graduationYear: "2028"
  },
  age: "19", // Edit your age here (e.g. "19", "20")

  // --- Location & Contact ---
  location: "Guntur, Andhra Pradesh, India",
  timezone: "India 🇮🇳 (UTC +5:30)",
  email: "radhakrishna628191@gmail.com", // Your active email address
  domain: "https://radhakrishnasure.vercel.app", // Your live deployment domain

  // --- Social Media Links ---
  // (Used across Footer, Contact Section, and 3D Floating Barrels in Contact Room)
  socials: {
    github: "https://github.com/radhakrishna131", // Your active GitHub repo/profile
    linkedin: "https://linkedin.com/in/krishna", // Your LinkedIn URL
    twitter: "https://twitter.com/krishna", // Your Twitter/X URL
    instagram: "https://instagram.com/krishna"
  },

  // --- Biography / About Paragraphs ---
  bio: {
    heading: "Building Intelligent & Creative Experiences.",
    subheading: "Where Artificial Intelligence, Motion, and Modern Web Engineering Converge.",
    intro: "I am Radha Krishna, an AI/ML and Web Development student based in Guntur, Andhra Pradesh, India. I specialize in building intelligent, creative web experiences—combining real-time web interactivity with machine learning fundamentals.",
    paragraph2: "Currently pursuing my 2nd year of B.Tech in Computer Science and Machine Learning (CSM), I combine academic curiosity with hands-on software development. I built MUST Material, an educational platform that organizes university study resources so engineering students can easily access notes and previous papers in one place.",
    paragraph3: "I enjoy bridging the gap between intelligent machine learning models and intuitive user interfaces—ensuring applications are accessible, responsive, and thoughtfully designed.",
    mission: "My mission is to create purposeful digital solutions that solve real problems, educate students, and push the boundaries of creative web development."
  },

  // --- Statistics ---
  stats: [
    { value: "12+", label: "Projects Shipped" },
    { value: "500+", label: "Students Helped" },
    { value: "2nd", label: "Year B.Tech CSM" },
    { value: "800+", label: "GitHub Contributions" },
    { value: "15+", label: "Technologies Explored" }
  ]
};

export default personalInfo;
