export const profile = {
  name: "Suresh B",
  role: "Technical team lead, full-stack and AI engineer",
  location: "Suva, Fiji",
  intro:
    "I lead a team of six engineers from system design to production on AWS, working mainly in Next.js, TypeScript and Node.js, and I am now bringing AI agents into real products.",
  links: {
    linkedin: "https://www.linkedin.com/in/sureshbmcangl/",
    github: "https://github.com/sureshbjra",
    whatsapp:
      "https://wa.me/919489490751?text=Hi%20Suresh%2C%20I%20saw%20your%20profile%20and%20would%20like%20to%20talk.",
    phone: "tel:+919489490751",
  },
  phoneDisplay: "+91 94894 90751",
};

export const about = [
  "I have been building web and mobile products since 2016, mostly with the MERN stack, Next.js and Python. These days I split my time between leading a team, designing the architecture and writing the code that ships.",
  "My current focus is AI agents that do real work inside products: answering customers, handling bookings and support, and taking repetitive tasks off operations teams.",
  "I care about clean code, secure APIs, real-time features and apps that are easy to use.",
];

export type Stop = {
  id: string;
  place: string;
  /** Longitude and latitude, used to plot the stop on the hero chart. */
  lon: number;
  lat: number;
  label: "above" | "below" | "left" | "right";
};

export const stops: Stop[] = [
  { id: "chennai", place: "Chennai", lon: 80.3, lat: 13.1, label: "right" },
  { id: "bengaluru", place: "Bengaluru", lon: 77.6, lat: 12.97, label: "left" },
  { id: "pune", place: "Pune", lon: 73.9, lat: 18.5, label: "above" },
  { id: "australia", place: "Australia", lon: 134, lat: -25, label: "left" },
  { id: "suva", place: "Suva", lon: 178.4, lat: -18.1, label: "above" },
];

export type Role = {
  period: string;
  start: string;
  title: string;
  company: string;
  place: string;
  summary: string;
};

export const roles: Role[] = [
  {
    period: "May 2026 to now",
    start: "2026",
    title: "Tech lead, full stack and cloud",
    company: "BarM8 App",
    place: "Fiji",
    summary:
      "Lead a team of six developers and own system architecture, technical strategy, code quality and production delivery across real-time, geospatial, payment and ride-hailing platforms.",
  },
  {
    period: "Jul 2023 to Apr 2026",
    start: "2023",
    title: "Senior full-stack and AI developer",
    company: "BarM8 App",
    place: "Australia",
    summary:
      "Led development of the BarM8 dashboard and the bar and restaurant platform, including seat booking and venue management. Mentored junior developers, ran code reviews and explored LLM features for hospitality.",
  },
  {
    period: "Nov 2021 to Jun 2023",
    start: "2021",
    title: "MERN stack developer",
    company: "World Vision Infotech",
    place: "Pune, remote",
    summary:
      "Built client web applications on MongoDB, Express, React and Node.js, with secure REST APIs on Express and LoopBack and live updates over Socket.io.",
  },
  {
    period: "Oct 2019 to Oct 2021",
    start: "2019",
    title: "Senior MEAN stack developer",
    company: "Diaprix Web Solutions",
    place: "Bengaluru",
    summary:
      "Senior developer on Angular and Node.js products, including the Pola Cabs taxi booking platform.",
  },
  {
    period: "Nov 2017 to Oct 2019",
    start: "2017",
    title: "Senior full stack developer",
    company: "Diaprix Web Solutions",
    place: "Bengaluru",
    summary: "Full-stack development with Node.js and LoopBack.",
  },
  {
    period: "Jan 2016 to Oct 2017",
    start: "2016",
    title: "Junior full stack developer",
    company: "Eduquestindia Institute",
    place: "Chennai",
    summary:
      "Built course, scheduling and registration modules for a Singapore training institute's education platform.",
  },
];

export type Project = {
  id: string;
  name: string;
  kind: string;
  /** Leave out when the dates are not known yet. */
  period?: string;
  summary: string;
  points: string[];
  /** Leave out when the stack is not known yet. */
  stack?: string[];
};

export const projects: Project[] = [
  {
    id: "fiji-go",
    name: "Fiji Go",
    kind: "Taxi booking and ride-hailing for Fiji",
    period: "2025 to now",
    summary:
      "Connects passengers with registered taxi drivers across Fiji. Previously branded CanGo Fiji.",
    points: [
      "Customer app for booking a taxi and tracking the ride",
      "Driver app for receiving requests, accepting trips and managing rides",
      "Admin dashboard for drivers, vehicles, bookings, payments and operations",
      "Driver approval controlled by admins, with status reverting automatically when safety-critical details change",
      "SMS one-time-password verification and an OpenAPI 3.1 documented API",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL + PostGIS",
      "Prisma",
      "MapLibre",
      "AWS EC2 + S3",
    ],
  },
  {
    id: "fiji-track",
    name: "Fiji Track",
    kind: "GPS vehicle tracking dashboard",
    period: "2025 to now",
    summary:
      "A fleet dashboard that shows where every vehicle is, live, and records what happens inside each zone.",
    points: [
      "Live vehicle positions on interactive maps",
      "Polygon geofence zones with full audit logs",
      "Ten roles with view, create, edit and delete control per module",
      "Navigation that adapts to each person's permissions",
    ],
    stack: [
      "Next.js 15",
      "PostgreSQL + PostGIS",
      "Socket.io",
      "Redis",
      "MapLibre GL JS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    id: "barm8",
    name: "BarM8",
    kind: "Offers and events for bars and restaurants",
    period: "2023 to now",
    summary:
      "One place for venues to run promotional offers and events, and for customers to find them.",
    points: [
      "Customer app to browse venues, offers and events, with search and filters",
      "Venue profiles with images, locations and operating details",
      "Offers with validity periods, availability and expiry",
      "Event publishing tied to venues",
      "Admin control over customers, venues, offers and platform settings",
    ],
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Redux"],
  },
  {
    id: "vlc-pickles",
    name: "VLC Pickles",
    kind: "Online ordering for a home pickle kitchen",
    period: "2025 to now",
    summary:
      "A storefront in eight languages for a family kitchen in Kanyakumari that makes seafood and meat pickles, with WhatsApp ordering and a staff dashboard.",
    points: [
      "English, Tamil, Malayalam, Hindi, Telugu, Kannada, Bengali and Marathi, each a prerendered page, with visitors sent to their own language",
      "Cart checkout that sends the order on WhatsApp and saves it to the database under a matching order reference",
      "Prices checked on the server, so a tampered request cannot record a cheaper total",
      "Staff dashboard with sign-in for tracking and updating each order's status",
      "First screen tuned for mobile speed after a Google PageSpeed audit",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Motion", "Supabase"],
  },
  {
    id: "hospital-booking",
    name: "Hospital booking",
    kind: "Appointment slot booking and management",
    summary:
      "Lets patients book appointment slots, and gives hospital staff a dashboard to manage schedules and bookings.",
    points: [
      "Patients choose a doctor, a date and an open time slot",
      "Staff set each doctor's schedule and available slots",
      "Dashboard for viewing and managing appointments",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Motion", "PostgreSQL"],
  },
  {
    id: "pola-cabs",
    name: "Pola Cabs",
    kind: "Online taxi booking and cab management",
    period: "2018 to 2021",
    summary:
      "A booking platform connecting passengers with drivers, covering the trip from request to completion.",
    points: [
      "REST APIs for customers, drivers, vehicles and bookings",
      "Booking management and the full trip lifecycle",
      "Responsive customer and admin interfaces",
    ],
    stack: ["Node.js", "MongoDB", "Bootstrap", "JavaScript"],
  },
  {
    id: "eduquest",
    name: "Eduquest",
    kind: "Training platform for a Singapore institute",
    period: "2016 to 2017",
    summary:
      "Lets students and employers explore courses, check schedules and register for training programmes.",
    points: [
      "Course catalogue, search and programme pages",
      "Scheduling and calendar management",
      "Self-sponsored and employer-sponsored registration",
    ],
    stack: ["ASP.NET MVC", "SQL", "HTML5"],
  },
];

export const stack: { area: string; items: string[] }[] = [
  {
    area: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "React Native",
    ],
  },
  {
    area: "Backend",
    items: ["Node.js", "Express", "Python", "REST APIs", "Socket.io"],
  },
  {
    area: "Data",
    items: ["PostgreSQL", "PostGIS", "MongoDB", "Prisma", "Redis", "Supabase"],
  },
  {
    area: "Cloud and delivery",
    items: ["AWS", "Azure", "Kubernetes", "Docker", "CI/CD"],
  },
  {
    area: "AI",
    items: [
      "AI agents",
      "LLM integration",
      "Prompt engineering",
      "Workflow automation",
    ],
  },
];

export const education = "Anna University, Chennai";
