// All site content lives here so pages stay presentational.

export const org = {
  name: "Adibasi Welfare Society",
  short: "AWS",
  place: "Ghorabandha, Jamshedpur",
  address: ["Ghorabandha, Jamshedpur", "Jharkhand, India - 831001"],
  phones: ["+91 9204858570", "+91 6572268293"],
  email: "adibasi.jsr@gmail.com",
  hours: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
  founded: 1998,
  tagline: "Empowering Tribal Communities",
  intro:
    "Dedicated to the welfare, development, and empowerment of tribal communities through education, healthcare, employment, and sustainable development initiatives.",
  mapQuery: "Ghorabandha, Jamshedpur, Jharkhand",
}

export const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`

export const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Work", href: "/our-work" },
  { name: "Partners", href: "/customers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export const heroStats = [
  { value: "1000+", label: "Families supported" },
  { value: "25+", label: "Years of service" },
  { value: "50+", label: "Villages reached" },
  { value: "500+", label: "People employed" },
]

export const vision =
  "To create a world where tribal communities thrive with dignity, preserving their rich cultural heritage while embracing sustainable development and modern opportunities."

export const mission =
  "To empower tribal communities through comprehensive welfare programs, education, healthcare, employment generation, and sustainable development initiatives that honor their traditions."

export const story = [
  "Founded in 1998, the Adibasi Welfare Society emerged from a deep commitment to uplift and empower tribal communities in Jharkhand. What started as a small initiative has grown into a comprehensive organization serving over 1000 families across 50+ villages.",
  "Our journey has been marked by unwavering dedication to preserving tribal culture while providing modern opportunities for growth and development. We believe in sustainable progress that honors tradition.",
  "Today, we stand as a bridge between tribal communities and the modern world, ensuring that progress doesn't come at the cost of cultural identity.",
]

export const aboutStats = [
  { value: "50+", label: "Infrastructure projects" },
  { value: "₹10Cr+", label: "Annual turnover" },
  { value: "500+", label: "Employees" },
  { value: "15+", label: "Awards received" },
]

export const milestones = [
  {
    year: "1998",
    title: "Foundation",
    description: "Adibasi Welfare Society was established with a vision to empower tribal communities.",
  },
  {
    year: "2005",
    title: "First Training Center",
    description: "Opened our first skill development center for women's empowerment.",
  },
  {
    year: "2010",
    title: "Industrial Partnerships",
    description: "Started partnerships with major industrial companies for employment generation.",
  },
  {
    year: "2015",
    title: "Healthcare Initiative",
    description: "Launched comprehensive healthcare programs for tribal communities.",
  },
  {
    year: "2020",
    title: "Digital Literacy",
    description: "Introduced computer training and digital literacy programs.",
  },
  {
    year: "2024",
    title: "Sustainable Growth",
    description: "Achieved sustainable growth with 500+ employees and multiple service verticals.",
  },
]

export const policies = [
  {
    title: "Health & Safety Policy",
    text: "We prioritize the health and safety of our community members and employees, implementing comprehensive safety protocols and healthcare initiatives.",
  },
  {
    title: "Environment Policy",
    text: "Committed to environmental sustainability, we promote eco-friendly practices and conservation efforts that align with tribal values of living in harmony with nature.",
  },
]

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  image: string
  achievements: string[]
}

export const services: Service[] = [
  {
    slug: "employment",
    title: "Employment Generation",
    short: "Creating sustainable job opportunities for tribal communities in various sectors.",
    description:
      "Creating sustainable job opportunities for tribal communities in various sectors including industrial, construction, and service industries.",
    image: "/images/gallery/employment-females.jpeg",
    achievements: ["500+ jobs created", "25+ partner companies", "80% retention rate"],
  },
  {
    slug: "training",
    title: "Skill Development & Training",
    short: "Skill development and vocational training programs to enhance employability.",
    description:
      "Comprehensive skill development and vocational training programs to enhance employability and entrepreneurship among tribal youth.",
    image: "/images/gallery/tailoring-training.jpeg",
    achievements: ["1000+ trained", "15+ skill programs", "90% success rate"],
  },
  {
    slug: "health-education",
    title: "Education & Healthcare",
    short: "Comprehensive education and healthcare services for holistic development.",
    description:
      "Holistic education and healthcare services ensuring comprehensive development and well-being of tribal communities.",
    image: "/images/gallery/health-camp.jpeg",
    achievements: ["50+ villages covered", "Free health camps", "Digital literacy programs"],
  },
  {
    slug: "transport",
    title: "Transportation Services",
    short: "Transportation services connecting remote tribal areas to urban centers.",
    description:
      "Reliable transportation services connecting remote tribal areas to urban centers, facilitating access to employment and opportunities.",
    image: "/images/gallery/bus-fleet.jpeg",
    achievements: ["20+ buses", "Daily services", "Safe transportation"],
  },
  {
    slug: "material-handling",
    title: "Material Handling",
    short: "Efficient material handling and logistics services for industrial partners.",
    description:
      "Professional material handling and logistics services for industrial partners, providing employment while maintaining quality standards.",
    image: "/images/gallery/infrastructure-equipment.jpeg",
    achievements: ["Modern equipment", "24/7 operations", "Quality assurance"],
  },
  {
    slug: "cleaning",
    title: "Industrial Cleaning",
    short: "Professional cleaning services for industrial and commercial establishments.",
    description:
      "Comprehensive cleaning services for industrial and commercial establishments, ensuring hygiene and safety standards.",
    image: "/images/gallery/industrial-cleaning.png",
    achievements: ["Industrial standards", "Trained staff", "Eco-friendly methods"],
  },
]

export const impactStats = [
  { value: "1000+", label: "Families impacted" },
  { value: "15+", label: "Training programs" },
  { value: "85%", label: "Employment rate" },
  { value: "50+", label: "Villages served" },
]

export const partners = [
  {
    name: "Tata Steel",
    logo: "/tata-steel-logo.png",
    description: "Leading steel manufacturing company",
    services: ["Material Handling", "Industrial Cleaning", "Employment Services"],
    since: "2005",
  },
  {
    name: "JUSCO",
    logo: "/jusco-logo.png",
    description: "Jamshedpur Utilities & Services Company",
    services: ["Transportation", "Facility Management", "Workforce Solutions"],
    since: "2008",
  },
  {
    name: "Tata Power",
    logo: "/tata-power-logo.png",
    description: "Integrated power company",
    services: ["Industrial Services", "Material Handling", "Safety Management"],
    since: "2010",
  },
  {
    name: "Tata Motors",
    logo: "/tata-motors-logo.png",
    description: "Automotive manufacturing company",
    services: ["Logistics Support", "Industrial Cleaning", "Employment Generation"],
    since: "2012",
  },
]

export const partnerStats = [
  { value: "25+", label: "Partner companies" },
  { value: "500+", label: "Jobs created" },
  { value: "25+", label: "Years of excellence" },
  { value: "95%", label: "Client retention" },
]

export const whyPartner = [
  "Trained and dedicated tribal workforce",
  "Commitment to excellence and standards",
  "Contributing to community development",
  "Long-term partnership approach",
]

export type Photo = { src: string; title: string; description: string; tag: string }

export const gallery: Photo[] = [
  {
    src: "/images/gallery/tailoring-training.jpeg",
    title: "Dress Making Training",
    description: "Women learning tailoring and dress making skills for employment generation",
    tag: "Training",
  },
  {
    src: "/images/gallery/employment-females.jpeg",
    title: "Employment for Women",
    description: "Empowering women through industrial employment opportunities",
    tag: "Employment",
  },
  {
    src: "/images/gallery/health-camp.jpeg",
    title: "Free Health Checkup Camp",
    description: "Providing free healthcare services to tribal communities",
    tag: "Health",
  },
  {
    src: "/images/gallery/computer-education.jpeg",
    title: "Computer Training Program",
    description: "Digital literacy and computer skills training for youth",
    tag: "Education",
  },
  {
    src: "/images/gallery/bus-fleet.jpeg",
    title: "AWS Bus Services",
    description: "Transportation services connecting tribal areas to employment centers",
    tag: "Transport",
  },
  {
    src: "/images/gallery/infrastructure-equipment.jpeg",
    title: "Infrastructure and Equipment",
    description: "Modern equipment and infrastructure for material handling services",
    tag: "Infrastructure",
  },
  {
    src: "/images/gallery/industrial-cleaning.png",
    title: "Industrial Cleaning",
    description: "Professional cleaning teams serving industrial establishments",
    tag: "Services",
  },
]

export const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000]

export const impactAreas = [
  {
    title: "Education & Training",
    description: "Support skill development programs and educational initiatives",
    impact: "₹1000 can train 1 person for a month",
    image: "/images/gallery/computer-education.jpeg",
  },
  {
    title: "Healthcare Services",
    description: "Provide medical care and health camps for tribal communities",
    impact: "₹2500 can organize a health camp for 50 people",
    image: "/images/gallery/health-camp.jpeg",
  },
  {
    title: "Employment Generation",
    description: "Create sustainable job opportunities for tribal families",
    impact: "₹5000 can support job placement for 5 individuals",
    image: "/images/gallery/employment-females.jpeg",
  },
  {
    title: "Infrastructure Development",
    description: "Build facilities and infrastructure for community development",
    impact: "₹10000 can contribute to building community centers",
    image: "/images/gallery/infrastructure-equipment.jpeg",
  },
]

export const donationNotes = [
  "Donations are eligible for tax deduction under Section 80G",
  "Official receipt will be provided for all donations",
  "100% of your donation goes directly to community programs",
]

export const waysToHelp = [
  { title: "Volunteer", text: "Join our programs and make a direct impact" },
  { title: "Corporate Partnership", text: "Partner with us for CSR initiatives" },
  { title: "Spread the Word", text: "Help us reach more people in need" },
]
