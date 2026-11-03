/**
 * ============================================================================
 * SEO KEYWORDS, SEARCH CONSOLE & KNOWLEDGE GRAPH CONFIGURATION
 * Profile: Gyanranjan Priyam — Frontend Developer & UI/UX Designer
 * Domains: priyam.tech | gyanranjanpriyam.tech | blogs.priyam.tech
 * ============================================================================
 * 
 * 💡 EASY WORDS / QUICK ADD SECTION:
 * You can easily add any new keyword, phrase, tag, or synonym to the `EASY_WORDS`
 * array below. Any word added here is automatically included in your website's
 * SEO meta tags, Google Search Console discovery, and social preview metadata.
 * ============================================================================
 */

import { SITE_URL, BLOG_URL } from '@/lib/config';

/**
 * ─── "WHO IS", "ABOUT MYSELF", GCEK & CODEBREAKERS HIGH-INTENT KEYWORDS ───
 * Specialized conversational, voice-search, Google Knowledge Graph & identity queries.
 */
export const WHO_IS_ABOUT_KEYWORDS = [
  // ─── "ABOUT MYSELF" / BIO / PROFILE QUERIES ───
  'about myself',
  'about my self',
  'about myself developer',
  'about myself frontend developer',
  'about myself designer',
  'about myself engineer',
  'about myself portfolio',
  'about myself electrical engineer',
  'about myself gcek',
  'about myself odisha',
  'about myself nayagarh',
  'about myself gyanranjan',
  'about myself gyanranjan priyam',
  'about myself priyam',
  'about gyanranjan',
  'about priyam',
  'about gyanranjan priyam',
  'about gr_priyam',
  'about gyanranjanpriyam',
  'tell me about gyanranjan priyam',
  'tell me about priyam',
  'tell me about gyanranjan',
  'tell me about gr_priyam',
  'know about gyanranjan priyam',
  'know about priyam',
  'know about gyanranjan',
  'know about gr_priyam',
  'all about gyanranjan priyam',
  'all about priyam',
  'all about gyanranjan',
  'all about gr_priyam',
  'biography of gyanranjan priyam',
  'biography of priyam',
  'biography of gyanranjan',
  'bio of gyanranjan priyam',
  'bio of priyam',
  'bio of gr_priyam',
  'profile of gyanranjan priyam',
  'profile of priyam',
  'profile of gyanranjan',
  'portfolio about myself',
  'frontend developer about myself',
  'ui ux designer about myself',
  'student developer about myself',
  'electrical engineering student about myself',
  'creative developer about myself',

  // ─── "WHO IS" CONVERSATIONAL & VOICE SEARCH QUERIES ───
  'who is gyanranjan priyam',
  'who is priyam',
  'who is gyanranjan',
  'who is gr_priyam',
  'who is gyanranjan-priyam',
  'who is GyanranjanPriyam',
  'who is the developer gyanranjan priyam',
  'who is frontend developer priyam',
  'who is ui designer gyanranjan priyam',
  'who is programmer priyam',
  'who is gyanranjan priyam developer',
  'who is gyanranjan priyam designer',
  'who is gyanranjan priyam engineer',
  'who is gyanranjan priyam electrical engineering',
  'who is gyanranjan priyam from gcek',
  'who is gyanranjan priyam from odisha',
  'who is gyanranjan priyam from nayagarh',
  'who is frontend developer gyanranjan',
  'who is creative developer priyam',
  'who is student developer gyanranjan priyam',
  'who is event coordinator of codebreakers',
  'who is event coordinator codebreakers gcek',
  'who built codebreakers website',
  'who created insprano registration portal',
  'who is developer of techfest platform',
  'who built hackverse 26 website',
  'who is organizing team coordinator hackverse 26',
  'who is gfg campus mantri gcek',
  'who won sih internal round 1st position gcek',
  'who is best frontend developer in gcek',
  'who is best web designer in gcek',
  'who is top coder gcek',
  'who is top student developer in gcek',

  // ─── GCEK (GOVERNMENT COLLEGE OF ENGINEERING KALAHANDI) ───
  'gcek',
  'GCEK',
  'GCEK Kalahandi',
  'gcek kalahandi',
  'Government College of Engineering Kalahandi',
  'Government College of Engineering, Kalahandi',
  'gcek bhawanipatna',
  'gcek jaipatna',
  'gcek bandopala',
  'gcek electrical engineering',
  'gcek ee',
  'gcek btech electrical',
  'gcek students',
  'gcek student portfolio',
  'gcek coder',
  'gcek frontend developer',
  'gcek ui designer',
  'gcek top developer',
  'gcek coding club',
  'gcek technical fest',
  'gcek insprano',
  'insprano gcek',
  'gcek alumni',
  'gcek campus',
  'gcek website',
  'gcek engineering college',
  'gcek bput odisha',

  // ─── CODEBREAKERS CODING CLUB & HACKVERSE ───
  'codebreakers',
  'CodeBreakers',
  'codebreakers gcek',
  'CodeBreakers GCEK',
  'codebreakers club',
  'codebreakers coding club',
  'codebreakers technical society',
  'codebreakers gcek tech',
  'codebreakers event coordinator',
  'CodeBreakers Event Coordinator',
  'codebreakers core team',
  'codebreakers gyanranjan priyam',
  'codebreakers priyam',
  'gyanranjan priyam codebreakers',
  'priyam codebreakers',
  'codebreakers hackverse',
  'hackverse',
  'hackverse 26',
  'hackverse 2026',
  'hackverse gcek',
  'hackverse codebreakers',
  'hackverse codebreakers gcek',
  'gcek codebreakers team',
  'gcek coding society',
  'official coding club gcek',
  'technical community of government college of engineering kalahandi',

  // ─── CONVERSATIONAL & DISCOVERY QUESTIONS ───
  'where does gyanranjan priyam study',
  'where is gyanranjan priyam from',
  'which college is gyanranjan priyam in',
  'what college does gyanranjan priyam attend',
  'what does gyanranjan priyam do',
  'what are gyanranjan priyam skills',
  'what projects did gyanranjan priyam make',
  'how to contact gyanranjan priyam',
  'how to hire gyanranjan priyam',
  'why hire gyanranjan priyam',
  'what is gyanranjan priyam gpa',
  'what is gyanranjan priyam qualification',
  'what is gyanranjan priyam degree',
  'gyanranjan priyam contact email',
  'gyanranjan priyam portfolio link',
  'gyanranjan priyam github link',
  'gyanranjan priyam linkedin profile',
  'gyanranjan priyam twitter x profile',
];

export const EASY_WORDS = [
  ...WHO_IS_ABOUT_KEYWORDS,
  // ─── CORE BRANDING & DOMAINS ───
  'Gyanranjan Priyam',
  'Priyam',
  'Gyanranjan',
  'gr_priyam',
  'priyam.tech',
  'gyanranjanpriyam.tech',
  'blogs.priyam.tech',
  'https://priyam.tech',
  'https://www.priyam.tech',
  'https://gyanranjanpriyam.tech',
  'https://blogs.priyam.tech',

  // ─── CODEBREAKERS GCEK & HACKVERSE ───
  'CodeBreakers',
  'CodeBreakers GCEK',
  'CodeBreakers Kalahandi',
  'CodeBreakers Government College of Engineering Kalahandi',
  'Event Coordinator at CodeBreakers',
  'CodeBreakers Event Coordinator',
  'codebreakersgcek.tech',
  'https://www.codebreakersgcek.tech',
  'blogs.codebreakersgcek.tech',
  'HackVerse',
  'HackVerse 26',
  'HackVerse CodeBreakers',
  'hackverse.codebreakersgcek.tech',
  'HackVerse GCEK',
  'HackVerse Kalahandi',
  '24H State Hackathon GCEK',
  'INSPRANO 2025',
  'INSPRANO Tech Fest',
  'INSPRANO Registration Portal',

  // ─── GEEKSFORGEEKS & HACKATHON MILESTONES ───
  'GeeksforGeeks Campus Mantri',
  'GFG Campus Mantri',
  'GFG Student Ambassador GCEK',
  'Smart India Hackathon SIH Internal Round Winner',
  'SIH 1st Position GCEK',
  'SIH26102',
  'SIH26097',
  'CTTC Bhubaneswar VLSI Internship',
  'Central Tool Room and Training Centre Bhubaneswar',

  // ─── ADD YOUR EASY WORDS / PHRASES HERE ───
  'Frontend Developer Portfolio 2026',
  'UI UX Designer Portfolio',
  'Creative Developer Portfolio',
  'Next.js Portfolio',
  'React Developer Portfolio',
  'Hire Frontend Developer',
  'Hire UI Designer',
  'Hire Next.js Developer',
  'Freelance Frontend Developer',
  'Freelance UI UX Designer',
  'Student Frontend Developer',
  'Electrical Engineering Student Coder',
  'Open Source Contributor',
  'Software Project Showcase',
  'Clean Code',
  'Responsive Web Design',
  'Interactive Web Animations',
  'Best Developer Portfolio 2026',
  'Web App Creator',
  'Tailwind CSS Templates',
  'Website Templates Store',
  'Next.js Starter Templates',
  'TechFest Platform',
  'SAMS School LMS',
  'College Management System CMS',
  'Inventory POS Management System',
  'Orbit Mobile Project Management',

  // ─── NAME + ROLE COMPOUND SEARCH PHRASES ───
  'Gyanranjan Priyam developer',
  'Gyanranjan Priyam frontend developer',
  'Gyanranjan Priyam designer',
  'Gyanranjan Priyam UI UX designer',
  'Gyanranjan Priyam portfolio',
  'Gyanranjan Priyam engineer',
  'Gyanranjan Priyam projects',
  'Gyanranjan Priyam GitHub',
  'Gyanranjan Priyam resume',
  'Gyanranjan Priyam CV',
  'Gyanranjan Priyam website',
  'Gyanranjan Priyam developer India',
  'Gyanranjan Priyam freelance',
  'Gyanranjan Priyam Electrical Engineering',
  'Gyanranjan Priyam Odisha',
  'Gyanranjan Priyam Nayagarh',
  'Gyanranjan Priyam GCEK',
  'Gyanranjan Priyam BTech',
  'Priyam frontend developer',
  'Priyam UI designer',
  'Priyam portfolio',
  'Priyam GitHub',

  // ─── GENERIC DISCOVERY PHRASES ───
  'hire a frontend developer',
  'hire a UI designer',
  'hire a web designer',
  'hire Next.js developer India',
  'hire React developer India',
  'find frontend developer',
  'need a modern web developer',
  'need a UI UX designer',
  'best student frontend developer India',
  'top frontend portfolio India',
  'developer for hire India',
  'young frontend developer India',
  'college student frontend developer',
  'BTech student frontend portfolio',
  'fresher frontend developer portfolio',
  'junior frontend developer portfolio',
  'developer portfolio website',
  'designer portfolio website',
];

/**
 * ─── CATEGORIZED KEYWORD DICTIONARIES ───
 */

// 1. Identity & Name Variations
export const IDENTITY_KEYWORDS = [
  // ─── Core Name Variations ───
  'Gyanranjan Priyam',
  'GyanranjanPriyam',
  'Gyanranjan',
  'Priyam',
  'GYANRANJAN PRIYAM',
  'GYANRANJAN',
  'PRIYAM',
  'gyanranjan priyam',
  'gyanranjan',
  'priyam',
  'gr_priyam',
  'gr priyam',
  'G. Priyam',
  'GP',
  'Gyanranjan Priyam Developer',
  'Gyanranjan Priyam Designer',
  'Priyam Developer',
  'Priyam Designer',
  'Priyam Web Developer',
  'Gyanranjan EE',
  'Priyam GCEK',
  'Gyanranjan Priyam GCEK',
  'Gyanranjan Priyam Nayagarh',
  'Gyanranjan Priyam Odisha',

  // ─── Odia Script Variations (Native Language Search) ───
  'ଜ୍ଞାନରଞ୍ଜନ ପ୍ରିୟମ୍',
  'ଜ୍ଞାନ ରଞ୍ଜନ ପ୍ରିୟମ୍',
  'ଜ୍ଞାନରଞ୍ଜନ',
  'ପ୍ରିୟମ୍',
  'ଓଡ଼ିଆ ଡେଭଲପର',
  'ଓଡ଼ିଆ ଡିଜାଇନର',
  'ଜ୍ଞାନରଞ୍ଜନ ପ୍ରିୟମ୍ ନୟାଗଡ଼',
  'ଜ୍ଞାନରଞ୍ଜନ ପ୍ରିୟମ୍ କଳାହାଣ୍ଡି',
  'ଜ୍ଞାନରଞ୍ଜନ ପ୍ରିୟମ୍ ଭୁବନେଶ୍ୱର',
  'ଓଡ଼ିଆ ଫ୍ରଣ୍ଟଏଣ୍ଡ ଡେଭଲପର',

  // ─── Hindi Script Variations ───
  'ज्ञानरंजन प्रियम',
  'ज्ञान रंजन प्रियम',
  'ज्ञानरंजन',
  'प्रियम',
  'ज्ञानरंजन प्रियम डेवलपर',
  'ज्ञानरंजन प्रियम डिजाइनर',
  'ज्ञानरंजन प्रियम फ्रंटएंड डेवलपर',

  // ─── Common Misspellings, Typos & Pronunciations ───
  'Gyanaranjan Priyam',
  'Gyanranjan Priyam developer',
  'Gyanranjan Priyam designer',
  'Gyanranjan Priya',
  'Gyanranjan Prem',
  'Gyanaranjan',
  'Gyanranjan P',
  'G Priyam',
  'G.Priyam',

  // ─── Direct Contact & Social Media Handles ───
  'gyanranjanpriyam.tech',
  'priyam.tech',
  'blogs.priyam.tech',
  'contact.gyanranjan@gmail.com',
  'hello@priyam.tech',
  'github.com/Gyanranjan-Priyam',
  'Gyanranjan-Priyam GitHub',
  'linkedin.com/in/gyanranjan-priyam',
  'gyanranjan-priyam LinkedIn',
  'twitter.com/gr_priyam',
  'x.com/gr_priyam',
  '@gr_priyam',
  'instagram.com/gyanranjan_priyam',

  // ─── Name + Location Combinations (Local Search) ───
  'Gyanranjan Priyam Odisha',
  'Gyanranjan Priyam Nayagarh',
  'Gyanranjan Priyam Kalahandi',
  'Gyanranjan Priyam Bhawanipatna',
  'Gyanranjan Priyam Bhubaneswar',
  'Gyanranjan Priyam India',
  'Gyanranjan Priyam Cuttack',
  'Priyam Odisha',
  'Priyam Nayagarh',
  'Priyam Kalahandi',
  'Nayagarh developer Gyanranjan Priyam',
  'Kalahandi developer Gyanranjan Priyam',

  // ─── Name + Role Combinations ───
  'Gyanranjan Priyam frontend developer',
  'Gyanranjan Priyam UI UX designer',
  'Gyanranjan Priyam web developer',
  'Gyanranjan Priyam react developer',
  'Gyanranjan Priyam nextjs developer',
  'Gyanranjan Priyam creative developer',
  'Gyanranjan Priyam electrical engineer',
  'Gyanranjan Priyam software engineer',
  'Gyanranjan Priyam web designer',
  'Gyanranjan Priyam design engineer',
  'Gyanranjan Priyam coder',
  'Gyanranjan Priyam programmer',
  'Gyanranjan Priyam freelancer',
  'Gyanranjan Priyam template designer',
];

// 2. UI/UX Design, Creative Frontend & Design Systems
export const DESIGN_FRONTEND_KEYWORDS = [
  // ─── Design Disciplines ───
  'UI Design',
  'UX Design',
  'UI UX Design',
  'Product Design',
  'Visual Design',
  'Interface Design',
  'Interaction Design',
  'Design Systems',
  'Design Tokens',
  'Component Design',
  'Wireframing',
  'Prototyping',
  'High Fidelity Prototyping',
  'Responsive Design',
  'Mobile First Design',
  'Web Typography',
  'Fluid Typography',
  'Color Systems',
  'Dark Mode Design',
  'Light Mode Design',
  'Adaptive UI',
  'Clean UI',
  'Minimalist Design',
  'Bento Grid UI',
  'Modern Web Aesthetics',
  'Blueprint UI Design',
  'Glassmorphism UI',
  'Micro-interactions',
  'Web Animation Design',
  'Creative Frontend Engineering',

  // ─── Design Tools & Workflows ───
  'Figma',
  'Figma Designer',
  'Figma to Code',
  'Figma to Next.js',
  'Figma to React',
  'Figma to Tailwind CSS',
  'Component Library Design',
  'UI Kit Creation',
  'Canva',
  'Adobe XD',
  'Whimsical Wireframes',

  // ─── Creative Animation & Visual Frameworks ───
  'Framer Motion',
  'Motion React',
  'GSAP Animation',
  'GSAP ScrollTrigger',
  'Tailwind CSS v4',
  'Shadcn UI',
  'Radix UI Primitives',
  'Lucide Icons',
  'Tabler Icons',
  'SVG Animation',
  'Canvas Animation',
  'Smooth Scroll Lenis',
  'Sound Effects UI',
  'Haptic Feedback UI',
  'Accessible Web Interfaces',
  'WCAG Accessible Design',
];

// 3. Engineering, Degrees & Education
export const EDUCATION_KEYWORDS = [
  // ─── Degrees & Academic Disciplines ───
  'Electrical Engineer',
  'Electrical Engineering',
  'Electrical Engineering Student',
  'Electrical and Electronics Engineering',
  'EE Student',
  'BTech Electrical Engineering',
  'B.Tech Electrical Engineering',
  'BTech Electrical 2024-2028',
  'B.Tech Electrical Engineering Kalahandi',
  'Bachelor of Technology',
  'Bachelor of Technology in Electrical Engineering',
  'Undergraduate Engineering Student',
  'Electrical Engineer turned Frontend Developer',
  'Non-CSE Student Coder',
  'Self-Taught Frontend Developer',
  'Curriculum and Code Balance',

  // ─── Institution — GCEK (Government College of Engineering Kalahandi) ───
  'GCEK',
  'GCEK Kalahandi',
  'GCEK Bhawanipatna',
  'GCEK Jaipatna',
  'GCEK Bandopala',
  'Government College of Engineering Kalahandi',
  'Government College of Engineering, Kalahandi',
  'GCE Kalahandi',
  'Government Engineering College Kalahandi',
  'GCEK Electrical Department',
  'GCEK BTech',
  'GCEK Student',
  'GCEK Campus',
  'GCEK Engineering College Odisha',
  'GCEK Tech Community',
  'GCEK Coding Club',
  'GCEK Event Coordinator',
  'Gyanranjan Priyam GCEK',
  'Priyam GCEK',

  // ─── University Affiliation — BPUT Odisha ───
  'Biju Patnaik University of Technology',
  'BPUT',
  'BPUT Odisha',
  'BPUT Rourkela',
  'BPUT Electrical Engineering',
  'BPUT BTech',
  'BPUT Student',

  // ─── Schooling & Intermediate Education ───
  'Divine Higher Secondary School',
  'Divine Higher Secondary School Nayagarh',
  'Higher Secondary Certificate Science',
  'CHSE Odisha Science',
  'CHSE Odisha 84.83%',
  'Divine HSS Nayagarh Odisha',
  'Secondary Schooling Nayagarh',
  'Schooling in Nayagarh',

  // ─── Generic Student / Graduate Categories ───
  'Engineering Student India',
  'Engineering Student Odisha',
  'BTech Student India',
  'BTech Student Odisha',
  'Engineering Fresher',
  'Frontend Fresher 2026',
  'Frontend Fresher 2027',
  'College Student Developer',
  'University Student Developer',
  'Student Developer Community',
  'Student Innovator India',
];

// 4. Professional Titles & Roles
export const ROLE_KEYWORDS = [
  // Formal titles
  'Frontend Developer',
  'Front End Developer',
  'Frontend Engineer',
  'UI UX Designer',
  'UI Designer',
  'UX Designer',
  'Web Designer',
  'Web Developer',
  'Creative Developer',
  'Design Engineer',
  'React.js Developer',
  'React Developer',
  'Next.js Developer',
  'Next.js Specialist',
  'TypeScript Developer',
  'Tailwind CSS Specialist',
  'Design System Engineer',
  'Full-Stack Developer',
  'Mobile App Developer',
  'Electrical Engineering Student',

  // Leadership & Community Roles
  'Event Coordinator CodeBreakers',
  'Event Coordinator GCE Kalahandi Technical Community',
  'CodeBreakers Event Coordinator',
  'HackVerse Organising Team Coordinator',
  'HackVerse Management Team',
  'HackVerse Development Head',
  'GeeksforGeeks Campus Mantri',
  'GFG Student Ambassador',
  'Campus Ambassador Lead',
  'Tech Fest Organizer',
  'INSPRANO Organizer',

  // Search intent terms
  'Coder',
  'Programmer',
  'Web Dev',
  'Frontend Coder India',
  'Developer India',
  'Indian Frontend Developer',
  'Indian UI Designer',
  'Freelance Frontend Developer',
  'Freelance UI Designer',
  'Self-Taught Developer',
  'Student Developer India',
  'Junior Frontend Developer',
  'Remote Frontend Developer',
  'Remote React Developer India',
];

// 5. Tech Stack & Frontend Frameworks
export const TECH_STACK_KEYWORDS = [
  // Frontend Frameworks & Libraries
  'React.js',
  'React',
  'React 19',
  'React Hooks',
  'Next.js',
  'Next.js 15',
  'Next.js 16',
  'Next.js App Router',
  'React Server Components',
  'RSC',
  'Next.js Server Actions',
  'Vite',
  'React Native',
  'Expo',
  'Framer Motion',
  'Motion',
  'GSAP',
  'Lenis Scroll',
  'Radix UI',
  'Shadcn UI',
  'Tailwind CSS',
  'Tailwind CSS v4',

  // Languages
  'JavaScript',
  'JavaScript ES6+',
  'TypeScript',
  'Python',
  'Dart',
  'SQL',
  'HTML5',
  'CSS3',
  'Verilog HDL',

  // Styling & Design Implementation
  'Responsive Design',
  'CSS Modules',
  'CSS Grid',
  'Flexbox',
  'Tailwind Merge',
  'clsx',
  'Lucide React',
  'Tabler Icons',
  'Sonner Toast',
  'Rough Notation',
  'Caveat Font',
  'Cabinet Grotesk',
  'Satoshi Variable Font',

  // Backend & Databases (Supporting Stack)
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'MongoDB',
  'Supabase',
  'Prisma ORM',
  'Better Auth',
  'Stripe',
  'Stripe API',
  'Razorpay',
  'Razorpay Integration',
  'REST APIs',
  'WebSocket',
  'Arcjet Rate Limiting',
  'AWS S3',
  'AWS EC2',
  'AWS Lambda',

  // Tools, DevOps & Deployment
  'Git',
  'GitHub',
  'Vercel',
  'Netlify',
  'Docker',
  'Linux',
  'Bun',
  'pnpm',
  'npm',
  'CI/CD',
  'Turborepo',
  'Monorepo Architecture',

  // Mobile & App Development
  'Flutter',
  'React Native Expo',
  'Mobile UI Design',
  'Offline First Architecture',
];

// 6. Location, Regional & Freelance
export const LOCATION_FREELANCE_KEYWORDS = [
  // ─── Native Place & Hometown (Nayagarh District, Odisha) ───
  'Web Developer Nayagarh',
  'Developer Nayagarh',
  'Frontend Developer Nayagarh',
  'UI Designer Nayagarh',
  'Coder Nayagarh',
  'Nayagarh Odisha Developer',
  'Nayagarh Tech Talent',
  'Nayagarh Town',
  'Ranpur',
  'Khandapada',
  'Odagaon',
  'Daspalla',
  'Best Developer in Nayagarh',
  'Top Coder in Nayagarh',

  // ─── College & Campus Location (Kalahandi District, Odisha) ───
  'Developer Kalahandi',
  'Frontend Developer Kalahandi',
  'UI Designer Kalahandi',
  'Web Developer Bhawanipatna',
  'Frontend Developer Bhawanipatna',
  'Bhawanipatna Kalahandi',
  'Developer Jaipatna',
  'GCEK Kalahandi Location',
  'Kalahandi Tech Community',
  'Western Odisha Developer',

  // ─── Major Odisha Cities & Tech Hubs ───
  'Web Developer Odisha',
  'Frontend Developer Odisha',
  'UI UX Designer Odisha',
  'UI Designer Odisha',
  'Developer Odisha',
  'Software Engineer Odisha',
  'Developer Bhubaneswar',
  'Frontend Developer Bhubaneswar',
  'UI Designer Bhubaneswar',
  'Infocity Bhubaneswar',
  'Developer Cuttack',
  'Developer Rourkela',
  'Developer Sambalpur',
  'Developer Puri',
  'Developer Balasore',
  'Freelancer Odisha',
  'Tech Talent Odisha',
  'Odisha Tech Community',
  'Odisha Developer Network',

  // ─── Odia Identity & Regional Culture ───
  'Odia Developer',
  'Odia Frontend Developer',
  'Odia Designer',
  'Odia UI UX Designer',
  'Odia Coder',
  'Odia Programmer',
  'Odia Tech Creator',
  'Best Odia Frontend Developer',
  'Top Odia UI Designer',
  'Odia Youth in Tech',

  // ─── India / National Identity ───
  'Frontend Developer India',
  'UI UX Designer India',
  'Next.js Developer India',
  'React Developer India',
  'Web Designer India',
  'Creative Developer India',
  'Indian Frontend Developer',
  'Indian UI Designer',
  'Best Student Frontend Developer India',
  'Top Developer Portfolio India',

  // ─── Freelance, Remote & Hiring Intent ───
  'Freelance Frontend Developer',
  'Freelance UI UX Designer',
  'Freelance Next.js Developer',
  'Freelance React Developer India',
  'Hire Remote Frontend Developer',
  'Hire Remote React Developer',
  'Hire UI Designer India',
  'Hire Web Designer for Startup',
  'Affordable Frontend Developer India',
  'Contract Frontend Developer',
  'Website Redesign Specialist',
  'Landing Page Designer for Hire',
  'SaaS UI Designer',
  'Open for Work 2026',
  'Available for Freelance',
  'Available for Internships',
  'Open for Full Time Frontend Roles',
];

// 7. Featured Projects
export const PROJECT_KEYWORDS = [
  // TechFest Platform / Insprano
  'TechFest Platform',
  'INSPRANO 2025 Registration Portal',
  'INSPRANO Dashboard',
  'Event Management System Next.js',
  'registration-insprano.vercel.app',
  'Gyanranjan-Priyam/insprano-dashboard',
  'College Fest Registration Platform',
  'QR Code Ticket Generator Next.js',
  'Better Auth Next.js 16 Project',

  // SAMS School LMS
  'SAMS School LMS',
  'School Learning Management System',
  'lms-gyanranjan.vercel.app',
  'Gyanranjan-Priyam/lms',
  'LMS with Stripe Integration',
  'Next.js LMS Platform',
  'Course Analytics Dashboard',

  // College Management System (CMS)
  'College Management System',
  'College CMS Portal',
  'cms-gyanranjanpriyam.netlify.app',
  'Gyanranjan-Priyam/cms',
  'Student Certification Workflow Portal',
  'Enterprise College Admissions Portal',

  // Inventory AI Management System (IMS)
  'Inventory AI Management System',
  'Inventory POS System',
  'ims-gyanranjanpriyam.netlify.app',
  'Gyanranjan-Priyam/ims',
  'Store Management with Razorpay',
  'Predictive Stock Analytics System',

  // Orbit – Mobile Project Management
  'Orbit Mobile Project Management',
  'Offline-First Task Management App',
  'React Native Supabase App',
  'Expo Team Collaboration App',

  // CodeBreakers Website & Blogs
  'CodeBreakers Community Website',
  'codebreakersgcek.tech',
  'blogs.codebreakersgcek.tech',
  'CodeBreakers Technical Blog',
  'Gyanranjan-Priyam/codebreakers',
  'Gyanranjan-Priyam/codebreakers-blog',

  // Templates Store
  'Website Templates by Priyam',
  'Next.js Starter Templates',
  'Tailwind CSS Portfolio Templates',
  'Wensity UI Templates',
  'Interactive Landing Page Templates',
];

// 8. CodeBreakers GCEK & HackVerse Flagship Tech Fest
export const CODEBREAKERS_KEYWORDS = [
  'CodeBreakers',
  'CodeBreakers GCEK',
  'CodeBreakers Kalahandi',
  'CodeBreakers GCE Kalahandi',
  'CodeBreakers Government College of Engineering Kalahandi',
  'CodeBreakers Coding Club',
  'Technical Community of Government College of Engineering Kalahandi',
  'Official Coding Club GCEK',
  'Official Technical Society GCEK',
  'Event Coordinator at CodeBreakers',
  'CodeBreakers Event Coordinator',
  'CodeBreakers Core Team',
  'codebreakersgcek.tech',
  'https://www.codebreakersgcek.tech',
  'blogs.codebreakersgcek.tech',
  'https://blogs.codebreakersgcek.tech',
  'codebreakers gyanranjan priyam',
  'gyanranjan priyam codebreakers',
  'priyam codebreakers',
  'HackVerse',
  'HackVerse 26',
  'HackVerse 2026',
  'HackVerse CodeBreakers',
  'HackVerse CodeBreakers GCEK',
  'hackverse.codebreakersgcek.tech',
  'HackVerse GCEK',
  'HackVerse Kalahandi',
  'HackVerse Hackathon',
  'GCEK State Hackathon 2026',
  'CodeBreakers INSPRANO',
  'CodeBreakers Hackathons',
  'CodeBreakers Workshops',
  'CodeBreakers Tech Community',
];

// 9. Achievements & Milestones
export const ACHIEVEMENTS_KEYWORDS = [
  'Smart India Hackathon 2024 SIH Internal Round 1st Position',
  'SIH Internal Round Winner GCEK',
  'SIH26102 and SIH26097 Problem Statements',
  'GeeksforGeeks Campus Mantri Journey',
  'GeeksforGeeks Campus Mantri Completion',
  'GFG Student Ambassador GCEK',
  'CTTC Bhubaneswar VLSI Internship',
  'Central Tool Room & Training Centre Bhubaneswar Internship',
  'Verilog HDL Chip Design Training',
  'HackVerse 26 Organising Team Coordinator',
  'HackVerse 26 Development Head',
  'College Level Hackathon Winner',
  'Competitive Programming Rankings',
  'CodeChef Platform Rankings',
  'LeetCode Problem Solving',
  'Mentored 20+ Junior Students',
  'Electrical Engineering Academic Excellence GPA 8.3',
  'Divine Higher Secondary School 84.83%',
];

// 10. Long-Tail SEO & Question-Based Keywords
export const LONG_TAIL_KEYWORDS = [
  // Portfolio / Discovery
  'best frontend developer portfolio 2026',
  'best developer portfolio website design',
  'top frontend portfolio India 2026',
  'creative developer portfolio website',
  'interactive portfolio with sound effects and animations',
  'nextjs portfolio with tailwind css',
  'react portfolio website dark mode',
  'portfolio website inspiration 2026',
  'developer personal website Gyanranjan Priyam',
  'frontend engineer portfolio website',
  'electrical engineering student portfolio website',
  'fresher frontend developer portfolio website',
  'junior web designer portfolio website',
  'clean blueprint style portfolio website',

  // Hiring Intent
  'hire frontend developer India',
  'hire UI UX designer from India',
  'hire React developer freelance',
  'hire Next.js developer freelance India',
  'hire modern web designer for startup',
  'affordable frontend developer India',
  'best freelance frontend developer India',
  'developer available for remote frontend work',
  'hire developer to build MVP landing page',
  'hire developer for Next.js website redesign',
  'need frontend developer for project',
  'looking for UI designer for web app',

  // Google Question Queries ("how to" / "what is")
  'how to transition from electrical engineering to web development',
  'how to learn coding as a non CS student',
  'how to become a GeeksforGeeks Campus Mantri',
  'how to win Smart India Hackathon internal round',
  'how to organise a college hackathon',
  'how to build a hackathon portal in Next.js',
  'how to build event registration platform Next.js',
  'how to build school LMS with Stripe API',
  'how to build clean interactive developer portfolio',
  'tools used to build production level websites 2026',
  'how to balance college curriculum and coding',
  'how to design responsive dark mode websites in Tailwind',

  // Project-Specific Searches
  'Next.js 16 event registration portal GitHub',
  'Next.js LMS with Stripe integration GitHub',
  'College management system React Node.js GitHub',
  'Inventory management system Razorpay React GitHub',
  'React Native Expo offline-first task manager',
  'best open source frontend projects 2026',
  'final year engineering frontend project ideas',

  // Trending Tech Searches 2026
  'Next.js 16 App Router best practices',
  'Tailwind CSS v4 modern portfolio design',
  'Shadcn UI custom components design',
  'Framer Motion smooth scroll animations',
  'best frontend developer tools 2026',
  'frontend developer roadmap 2026',
  'UI designer to frontend developer transition',
];

/**
 * ─── MASTER KEYWORD LIST ───
 * Combines all categories and easy words, removing any duplicates.
 */
export const ALL_KEYWORDS = Array.from(
  new Set([
    ...EASY_WORDS,
    ...CODEBREAKERS_KEYWORDS,
    ...IDENTITY_KEYWORDS,
    ...DESIGN_FRONTEND_KEYWORDS,
    ...EDUCATION_KEYWORDS,
    ...ROLE_KEYWORDS,
    ...TECH_STACK_KEYWORDS,
    ...LOCATION_FREELANCE_KEYWORDS,
    ...PROJECT_KEYWORDS,
    ...ACHIEVEMENTS_KEYWORDS,
    ...LONG_TAIL_KEYWORDS,
  ])
);

/**
 * ─── PAGE-SPECIFIC KEYWORD COLLECTIONS ───
 */

export const HOME_PAGE_KEYWORDS = ALL_KEYWORDS;

export const PROJECTS_PAGE_KEYWORDS = Array.from(
  new Set([
    ...EASY_WORDS,
    ...CODEBREAKERS_KEYWORDS,
    ...PROJECT_KEYWORDS,
    ...TECH_STACK_KEYWORDS,
    ...DESIGN_FRONTEND_KEYWORDS,
    'Projects Showcase',
    'Open Source GitHub Repositories',
    'Frontend Developer Portfolio Projects',
    'Next.js Production Builds',
    'React Full-Stack Projects',
    'Interactive Web Applications',
    'UI UX Design Case Studies',
  ])
);

export const TEMPLATES_PAGE_KEYWORDS = Array.from(
  new Set([
    ...EASY_WORDS,
    ...DESIGN_FRONTEND_KEYWORDS,
    ...TECH_STACK_KEYWORDS,
    'Website Templates',
    'Next.js Templates',
    'Tailwind CSS Templates',
    'Portfolio Starter Kits',
    'Landing Page Templates',
    'SaaS Starter Templates',
    'Developer Portfolio Templates',
    'Modern UI Templates',
    'Wensity UI Templates',
    'Production Ready Website Starters',
    'Responsive Web Templates',
  ])
);

export const RESUME_PAGE_KEYWORDS = Array.from(
  new Set([
    ...WHO_IS_ABOUT_KEYWORDS,
    ...EASY_WORDS,
    ...IDENTITY_KEYWORDS,
    ...EDUCATION_KEYWORDS,
    ...ROLE_KEYWORDS,
    ...ACHIEVEMENTS_KEYWORDS,
    'Gyanranjan Priyam Resume',
    'Gyanranjan Priyam CV',
    'Gyanranjan Priyam Curriculum Vitae',
    'Frontend Developer Resume',
    'UI UX Designer Resume',
    'Electrical Engineer Resume',
    'Download Gyanranjan Priyam Resume PDF',
    'GCEK Student Resume',
    'Frontend Developer Skills Resume',
    'Government College of Engineering Kalahandi Resume',
  ])
);

export const ABOUT_PAGE_KEYWORDS = Array.from(
  new Set([
    ...WHO_IS_ABOUT_KEYWORDS,
    ...EASY_WORDS,
    ...CODEBREAKERS_KEYWORDS,
    ...IDENTITY_KEYWORDS,
    ...EDUCATION_KEYWORDS,
    ...ROLE_KEYWORDS,
    ...LOCATION_FREELANCE_KEYWORDS,
    'About Gyanranjan Priyam',
    'Who is Gyanranjan Priyam',
    'Gyanranjan Priyam Biography',
    'Gyanranjan Priyam Story',
    'Electrical Engineering to Frontend Journey',
    'Event Coordinator CodeBreakers',
    'CodeBreakers GCEK Event Coordinator',
    'GCEK Kalahandi Student',
    'Nayagarh Developer Story',
    'Self-Taught Frontend Developer Journey',
    'Developer from Odisha India',
    'Odia Developer Profile',
    'GFG Campus Mantri Experience',
    'Academic Credentials GPA 8.3',
  ])
);

export const CONTACT_PAGE_KEYWORDS = Array.from(
  new Set([
    ...EASY_WORDS,
    ...LOCATION_FREELANCE_KEYWORDS,
    'Contact Gyanranjan Priyam',
    'Hire Gyanranjan Priyam',
    'Hire Priyam',
    'Email Gyanranjan Priyam',
    'contact.gyanranjan@gmail.com',
    'hello@priyam.tech',
    'How to Contact Gyanranjan Priyam',
    'Gyanranjan Priyam WhatsApp',
    'Gyanranjan Priyam Message',
    'Gyanranjan Priyam Freelance',
    'Schedule a Meeting with Priyam',
    'Cal.com Meeting Priyam',
    'Hire Remote Frontend Developer India',
    'Hire UI UX Designer India',
    'Hire React Next.js Developer Odisha',
    'Software Project Collaboration',
    'Freelance Web Design Consultation',
  ])
);

export const BLOG_PAGE_KEYWORDS = Array.from(
  new Set([
    ...EASY_WORDS,
    ...CODEBREAKERS_KEYWORDS,
    ...DESIGN_FRONTEND_KEYWORDS,
    ...TECH_STACK_KEYWORDS,
    'Technical Blog Gyanranjan Priyam',
    'Frontend Developer Blog',
    'UI UX Design Articles',
    'CodeBreakers Tech Articles',
    'HackVerse 26 Playbook',
    'Smart India Hackathon SIH Journey',
    'GeeksforGeeks Campus Mantri Experience',
    'CTTC Bhubaneswar VLSI Internship Article',
    'Transition from Electrical Engineering to Web Development',
    'Tools to Build Production Websites 2026',
    'Developer Grind and Curriculum Balance',
    'Developer Blog Odisha',
    'Priyam Articles and Notes',
  ])
);

export const ACHIEVEMENTS_PAGE_KEYWORDS = Array.from(
  new Set([
    ...EASY_WORDS,
    ...EDUCATION_KEYWORDS,
    ...ACHIEVEMENTS_KEYWORDS,
    'Achievements and Honors',
    'Smart India Hackathon SIH Internal Round 1st Position',
    'SIH26102 and SIH26097 Problem Statements',
    'GeeksforGeeks Campus Mantri Certificate of Completion',
    'GFG Student Ambassador Journey',
    'CTTC Bhubaneswar VLSI Chip Design Internship',
    'HackVerse 26 Organising Coordinator',
    'INSPRANO 2025 Tech Fest Platform Builder',
    'College Level Hackathon Awards',
    'Competitive Programming Milestones',
    'GCE Kalahandi Honors',
    'Engineering Student Achievements Odisha',
  ])
);

export const NOT_FOUND_PAGE_KEYWORDS = [
  '404 Page Not Found',
  'Error 404',
  'Gyanranjan Priyam Portfolio',
  'Return to Priyam Tech Home',
];

/**
 * ─── PER-ARTICLE TAILORED SEO CONFIGURATION ───
 * Maps each of Gyanranjan Priyam's 8 real blog posts with canonical URLs,
 * categories, tags, and specialized keyword discovery terms.
 */
export const BLOG_POSTS_SEO: Record<
  string,
  {
    slug: string;
    canonicalUrl: string;
    category: string;
    tags: string[];
    primaryKeywords: string[];
  }
> = {
  'from-electrical-engineering-to-web-development-my-unexpected-journey-into-coding': {
    slug: 'from-electrical-engineering-to-web-development-my-unexpected-journey-into-coding',
    canonicalUrl: `${BLOG_URL}/posts/from-electrical-engineering-to-web-development-my-unexpected-journey-into-coding`,
    category: 'Career & Journey',
    tags: ['Personal', 'Web Development', 'React', 'Career', 'Learning'],
    primaryKeywords: [
      'electrical engineering to web development',
      'non-CSE student to software developer',
      'how to learn coding as a non CS student',
      'self-taught programmer roadmap',
      'learning React without coding background',
      'HTML CSS JavaScript learning journey',
      'student coding club technical lead',
      'transition from core engineering to tech',
      'beginner to fullstack web developer',
      'self-taught coding journey college',
      'GCE Kalahandi CodeBreakers',
      'learning software development in college',
      'Gyanranjan Priyam journey',
    ],
  },

  'my-role-in-hackverse-26-organising-managing-and-building-the-hackathon': {
    slug: 'my-role-in-hackverse-26-organising-managing-and-building-the-hackathon',
    canonicalUrl: `${BLOG_URL}/posts/my-role-in-hackverse-26-organising-managing-and-building-the-hackathon`,
    category: 'Engineering & Leadership',
    tags: ['HackVerse', 'Hackathon', 'CodeBreakers', 'Leadership', 'Event Management', 'Web Development'],
    primaryKeywords: [
      'HackVerse 26 hackathon',
      'how to organise a college hackathon',
      'hackathon organizing team coordinator',
      'CodeBreakers GCE Kalahandi',
      'hackathon development head',
      'hackathon portal development Next.js',
      'student hackathon management playbook',
      'hackathon screening and evaluation system',
      'tech event coordination and planning',
      'building a hackathon website',
      'student club event leadership',
      'HackVerse Kalahandi 2026',
    ],
  },

  'securing-1st-position-in-sih-internal-round-and-our-problem-statement-journey': {
    slug: 'securing-1st-position-in-sih-internal-round-and-our-problem-statement-journey',
    canonicalUrl: `${BLOG_URL}/posts/securing-1st-position-in-sih-internal-round-and-our-problem-statement-journey`,
    category: 'Hackathons & Engineering',
    tags: ['Smart India Hackathon', 'SIH', 'Hackathon', 'Problem Statement', 'Leadership', 'Teamwork'],
    primaryKeywords: [
      'Smart India Hackathon internal round 1st position',
      'SIH problem statement selection guide',
      'SIH26102',
      'SIH26097',
      'how to win Smart India Hackathon internal round',
      'SIH PPT presentation tips',
      'hackathon system architecture blueprint',
      'Smart India Hackathon team strategy',
      'college hackathon screening round',
      'GCE Kalahandi SIH winners',
      'engineering hackathon winning strategy',
    ],
  },

  'my-journey-to-becoming-a-gfg-campus-mantri-doubts-a-shaky-interview-and-an-unexpected-yes': {
    slug: 'my-journey-to-becoming-a-gfg-campus-mantri-doubts-a-shaky-interview-and-an-unexpected-yes',
    canonicalUrl: `${BLOG_URL}/posts/my-journey-to-becoming-a-gfg-campus-mantri-doubts-a-shaky-interview-and-an-unexpected-yes`,
    category: 'Campus Leadership',
    tags: ['Personal', 'GFG', 'Career', 'Learning', 'Campus', 'GeeksforGeeks'],
    primaryKeywords: [
      'how to become GeeksforGeeks Campus Mantri',
      'GFG Campus Mantri interview experience',
      'GeeksforGeeks student ambassador interview questions',
      'GFG Campus Mantri telephonic round',
      'how to apply for GeeksforGeeks Campus Mantri',
      'overcoming imposter syndrome college interviews',
      'GeeksforGeeks student ambassador tips',
      'campus representative interview preparation',
      'student tech community leadership',
      'college ambassador application journey',
    ],
  },

  'successfully-completing-my-geeksforgeeks-campus-mantri-journey-months-of-growth-and-leadership': {
    slug: 'successfully-completing-my-geeksforgeeks-campus-mantri-journey-months-of-growth-and-leadership',
    canonicalUrl: `${BLOG_URL}/posts/successfully-completing-my-geeksforgeeks-campus-mantri-journey-months-of-growth-and-leadership`,
    category: 'Campus Leadership',
    tags: ['GeeksforGeeks', 'Campus Mantri', 'Student Ambassador', 'Leadership', 'Community Building'],
    primaryKeywords: [
      'GeeksforGeeks Campus Mantri completion',
      'GFG Campus Mantri certificate of completion',
      'GeeksforGeeks student ambassador journey',
      'campus ambassador tenure experience',
      'student tech community building',
      'campus leadership and community growth',
      'organizing GeeksforGeeks coding events',
      'tech networking for engineering students',
      'student ambassador career benefits',
      'GCE Kalahandi GeeksforGeeks chapter',
    ],
  },

  'my-one-month-vlsi-internship-at-cttc-bhubaneswar-from-logic-gates-to-chip-design': {
    slug: 'my-one-month-vlsi-internship-at-cttc-bhubaneswar-from-logic-gates-to-chip-design',
    canonicalUrl: `${BLOG_URL}/posts/my-one-month-vlsi-internship-at-cttc-bhubaneswar-from-logic-gates-to-chip-design`,
    category: 'Electronics & VLSI',
    tags: ['VLSI', 'Chip Design', 'Verilog', 'Hardware Description Language', 'CTTC Bhubaneswar', 'Internship'],
    primaryKeywords: [
      'VLSI internship CTTC Bhubaneswar',
      'CTTC Bhubaneswar VLSI training review',
      'Verilog HDL tutorial for beginners',
      'chip design flow RTL to silicon',
      'digital electronics summer internship',
      'Verilog testbench waveform simulation',
      'finite state machines Verilog',
      'combinational sequential circuit design',
      'semiconductor engineering student internship',
      'CTTC Bhubaneswar internship experience',
      'Central Tool Room and Training Centre Bhubaneswar',
    ],
  },

  'the-tools-i-actually-use-to-build-production-level-websites': {
    slug: 'the-tools-i-actually-use-to-build-production-level-websites',
    canonicalUrl: `${BLOG_URL}/posts/the-tools-i-actually-use-to-build-production-level-websites`,
    category: 'Web Development & Tools',
    tags: ['Web Development', 'Frontend Development', 'Production Websites', 'Modern Tech Stack', 'Tooling'],
    primaryKeywords: [
      'production web development tools',
      'modern frontend developer tech stack 2026',
      'Next.js production architecture',
      'best web developer tools 2026',
      'how to build production ready websites',
      'developer tooling stack',
      'pragmatic software engineering',
      'Tailwind CSS v4 and TypeScript best practices',
      'building scalable websites Next.js',
      'GitHub Copilot developer workflow',
      'web performance and reliability optimization',
    ],
  },

  'when-code-meets-curriculum-the-unspoken-grind-of-being-a-student-and-a-developer': {
    slug: 'when-code-meets-curriculum-the-unspoken-grind-of-being-a-student-and-a-developer',
    canonicalUrl: `${BLOG_URL}/posts/when-code-meets-curriculum-the-unspoken-grind-of-being-a-student-and-a-developer`,
    category: 'Student Life & Career',
    tags: ['Personal', 'Student Life', 'Developer', 'Engineering', 'Productivity', 'Mindset'],
    primaryKeywords: [
      'balancing college curriculum and coding',
      'engineering student developer routine',
      'student developer grind and burnout management',
      'electrical engineering student software developer',
      'college exams and coding project balance',
      'time management for student programmers',
      'student developer productivity tips',
      'managing engineering GPA and programming',
    ],
  },
};

/**
 * Retrieves all tailored SEO metadata and keyword keys for a specific blog article.
 * @param slug - The article slug
 * @returns Complete SEO configuration object for the article
 */
export function getBlogPostSeo(slug: string) {
  const data = BLOG_POSTS_SEO[slug] || {
    slug,
    canonicalUrl: `${BLOG_URL}/posts/${slug}`,
    category: 'Web Development',
    tags: ['Frontend', 'Web Development', 'Design'],
    primaryKeywords: [
      'Gyanranjan Priyam',
      'Frontend Developer',
      'UI UX Designer',
      'Web Development Article',
    ],
  };

  const combinedKeywords = Array.from(
    new Set([
      ...data.primaryKeywords,
      ...data.tags,
      ...EASY_WORDS.slice(0, 15),
      'Gyanranjan Priyam',
      'Priyam',
      'Frontend Developer',
      'UI UX Designer',
      'Odisha Developer',
      'Technical Article',
    ])
  );

  return {
    ...data,
    keywords: combinedKeywords,
  };
}

/**
 * ─── HELPER FUNCTIONS ───
 */

/**
 * Formats a list of keywords or string into a clean, deduplicated, comma-separated string.
 * @param customKeywords - Additional keywords to include
 * @param includeEasyWords - Whether to include the EASY_WORDS array (default: true)
 * @returns Comma-separated keyword string
 */
export function formatKeywords(
  customKeywords: string[] | string = [],
  includeEasyWords = true
): string {
  const combined: string[] = [];

  if (includeEasyWords) {
    combined.push(...EASY_WORDS);
  }

  if (Array.isArray(customKeywords)) {
    combined.push(...customKeywords);
  } else if (
    typeof customKeywords === 'string' &&
    customKeywords.trim().length > 0
  ) {
    const splitWords = customKeywords
      .split(',')
      .map((w) => w.trim())
      .filter(Boolean);
    combined.push(...splitWords);
  }

  if (combined.length === 0) {
    combined.push(...ALL_KEYWORDS);
  }

  const unique = Array.from(new Set(combined));
  return unique.join(', ');
}

export default {
  WHO_IS_ABOUT_KEYWORDS,
  EASY_WORDS,
  IDENTITY_KEYWORDS,
  DESIGN_FRONTEND_KEYWORDS,
  EDUCATION_KEYWORDS,
  ROLE_KEYWORDS,
  TECH_STACK_KEYWORDS,
  LOCATION_FREELANCE_KEYWORDS,
  PROJECT_KEYWORDS,
  CODEBREAKERS_KEYWORDS,
  ACHIEVEMENTS_KEYWORDS,
  LONG_TAIL_KEYWORDS,
  ALL_KEYWORDS,
  HOME_PAGE_KEYWORDS,
  PROJECTS_PAGE_KEYWORDS,
  TEMPLATES_PAGE_KEYWORDS,
  RESUME_PAGE_KEYWORDS,
  ABOUT_PAGE_KEYWORDS,
  CONTACT_PAGE_KEYWORDS,
  BLOG_PAGE_KEYWORDS,
  ACHIEVEMENTS_PAGE_KEYWORDS,
  NOT_FOUND_PAGE_KEYWORDS,
  BLOG_POSTS_SEO,
  getBlogPostSeo,
  formatKeywords,
};

