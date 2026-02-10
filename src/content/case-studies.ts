export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  clientLogo: string;
  category: string;
  industry: string;
  servicesProvided: string[];
  timeline: string;
  objectives: string[];
  tasksIDid: string[];
  deliverables: string[];
  toolsStack: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  metrics?: Metric[];
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  galleryImages: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "babydocshop",
    clientName: "BabyDocShop.ie",
    clientLogo: "/Client/BabyDoc_Shop_Logo.webp",
    category: "Ecommerce Ops + Growth",
    industry: "Retail / Baby Products",
    servicesProvided: ["Ecommerce Ops", "CRO", "Reporting", "Campaign Management"],
    timeline: "Ongoing",
    objectives: [
      "Scale monthly revenue from €10k to €60k+",
      "Optimize ecommerce operations for efficiency",
      "Improve conversion rates across mobile and desktop",
      "Establish a robust KPI tracking and reporting system"
    ],
    tasksIDid: [
      "Ecommerce operations management: Maintained catalog hygiene, implemented dynamic pricing strategies, and coordinated inventory across physical and digital storefronts.",
      "Conversion Rate Optimization (CRO): Identified and fixed UX friction points on PDPs and collection pages, leading to a significant reduction in checkout abandonment.",
      "Merchandising Strategy: Executed A/B tests on product bundling, upsells, and cross-sells to increase Average Order Value (AOV).",
      "Campaign Execution: Supported seasonal promotions and flash sales, coordinating email and SMS marketing efforts for maximum impact.",
      "KPI & Data Analysis: Established weekly reporting focused on revenue, AOV, conversion rates, and ROAS, providing actionable insights for growth."
    ],
    deliverables: [
      "Optimized Shopify Storefront",
      "Weekly Performance Dashboards",
      "Marketing Automation Flows",
      "Operational Manual for Catalog Management"
    ],
    toolsStack: ["Shopify", "Google Analytics 4", "Klaviyo", "Metabase", "Hotjar"],
    challenges: [
      "Low conversion rates on mobile devices which accounted for 70% of traffic.",
      "Fragmented inventory data between the physical warehouse and the online store."
    ],
    solutions: [
      "Implemented a mobile-first UI overhaul and streamlined the checkout process.",
      "Integrated a real-time inventory synchronization tool to prevent overselling."
    ],
    results: [
      "Revenue improved from €10k/month to €65k+/month.",
      "140% growth in overall conversion rate.",
      "35% increase in Average Order Value (AOV) through strategic bundling."
    ],
    metrics: [
      { label: "Revenue Growth", value: "650%", description: "from €10k to €65k+" },
      { label: "Conversion Rate", value: "+140%", description: "post-optimization" },
      { label: "Mobile Revenue", value: "3x", description: "increase in mobile sales" }
    ],
    galleryImages: ["/founder/Founder.png"]
  },
  {
    slug: "dealzook",
    clientName: "Dealzook",
    clientLogo: "/Client/DealZook_logo.webp",
    category: "Frontend Design + UI",
    industry: "Consumer Tech / Deals",
    servicesProvided: ["Frontend Development", "UI/UX Design", "Component Architecture"],
    timeline: "3 Months",
    objectives: [
      "Design and implement a high-performance frontend for a deals platform.",
      "Create a reusable component system for consistent UI across the app.",
      "Ensure a seamless responsive experience for power users."
    ],
    tasksIDid: [
      "UI Layout Design: Crafted intuitive layouts for the homepage, category filters, and product detail pages to maximize deal discoverability.",
      "Scalable Component System: Built a robust library of React components including cards, navigation elements, and complex forms.",
      "Interaction Engineering: Implemented smooth transitions and interactive states to enhance the premium feel of the platform.",
      "Frontend Performance: Optimized asset delivery and DOM structures to ensure lightning-fast load times."
    ],
    deliverables: [
      "High-fidelity Figma Mockups",
      "React/Tailwind Component Library",
      "Production-ready Frontend Codebase"
    ],
    toolsStack: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript"],
    challenges: [
      "Managing complex state for real-time deal updates without sacrificing performance."
    ],
    solutions: [
      "Utilized efficient state management and memoization patterns to handle dynamic content."
    ],
    results: [
      "Successful launch of the new deal portal.",
      "90+ PageSpeed score across all key pages.",
      "Positive user feedback on the revamped deals UI."
    ],
    galleryImages: ["/founder/Founder.png"]
  },
  {
    slug: "prevot-associates",
    clientName: "PreVot Associates",
    clientLogo: "/Client/Prevot_&_Associates_logo.webp",
    category: "Website Design",
    industry: "Professional Services / Consulting",
    servicesProvided: ["Web Design", "Information Architecture", "Lead Gen Strategy"],
    timeline: "2 Months",
    objectives: [
      "Create a professional digital presence that reflects institutional authority.",
      "Optimize the site for lead capture and consulting inquiries.",
      "Build a clear information architecture for complex service offerings."
    ],
    tasksIDid: [
      "Information Architecture: Designed a comprehensive sitemap and navigation flow to guide users through the firm's diverse services.",
      "Institutional Branding: Applied a sophisticated typography hierarchy and color palette aligned with the firm's legacy.",
      "Page Design: Developed custom layouts for 'About', 'Services', and 'Contact', incorporating credibility blocks and case studies.",
      "Lead Capture Strategy: Strategically placed CTAs and designed high-converting consultation forms."
    ],
    deliverables: [
      "Full Website Design",
      "Brand Style Guide",
      "Lead Management Workflow Integration"
    ],
    toolsStack: ["Figma", "WordPress", "Elementor", "Adobe Suite"],
    challenges: [
      "Communicating complex consulting services in a way that is accessible to new clients."
    ],
    solutions: [
      "Developed a 'Service Pillar' layout that breaks down offerings into digestible modules."
    ],
    results: [
      "40% increase in monthly lead inquiries.",
      "Significantly reduced bounce rate on service pages.",
      "Enhanced brand perception among corporate clients."
    ],
    galleryImages: ["/founder/Founder.png"]
  },
  {
    slug: "hairdoc",
    clientName: "HairDoc",
    clientLogo: "/Client/HairDoc_logo.webp",
    category: "Website Design",
    industry: "Healthcare / Cosmetics",
    servicesProvided: ["UX Research", "UI Design", "Booking Integration"],
    timeline: "2.5 Months",
    objectives: [
      "Design a trust-focused platform for medical cosmetic treatments.",
      "Simplify the consultation booking process.",
      "Showcase clinical results through a gallery-first approach."
    ],
    tasksIDid: [
      "Service-Led UX: Mapped out user journeys for various treatments, ensuring easy access to 'Before/After' results and pricing.",
      "Authority Layout: Designed doctor profiles and certification blocks to establish medical credibility and trust.",
      "Booking Optimization: Re-engineered the consultation funnel to reduce steps and integrated WhatsApp/Call CTAs.",
      "Mobile-First Experience: Ensured the booking process is seamless on mobile, catering to a primary mobile audience."
    ],
    deliverables: [
      "Design Wireframes & Prototypes",
      "Custom Booking Flow UI",
      "Mobile-Optimized Layouts"
    ],
    toolsStack: ["Figma", "Webflow", "Wati (WhatsApp API)"],
    challenges: [
      "Users were hesitant to book without seeing clear results and doctor credentials."
    ],
    solutions: [
      "Implemented a high-visibility 'Results Gallery' and prominent doctor authority sections."
    ],
    results: [
      "50% increase in direct booking inquiries.",
      "30% boost in WhatsApp consultation starts.",
      "Improved search rankings for local treatment keywords."
    ],
    galleryImages: ["/founder/Founder.png"]
  },
  {
    slug: "m-magazine",
    clientName: "M Magazine Bay Area",
    clientLogo: "/Client/mdigitalbayarea_logo.webp",
    category: "Media Ops + Audience Growth",
    industry: "Media / Lifestyle",
    servicesProvided: ["Content Strategy", "Digital Ops", "Audience Development"],
    timeline: "Ongoing",
    objectives: [
      "Streamline digital publishing workflows.",
      "Grow and engage the Bay Area audience across digital channels.",
      "Enhance brand consistency and online authority."
    ],
    tasksIDid: [
      "Content Operations: Established a digital publishing calendar and workflow to ensure consistent daily content output.",
      "Profile Optimization: Audited and revamped social media profiles for brand alignment and engagement hooks.",
      "Audience Growth: Developed a distribution checklist for articles, including SEO basics and cross-platform sharing strategies.",
      "Engagement Testing: Experimented with new content formats (short-form video, polls) to improve audience retention."
    ],
    deliverables: [
      "Digital Publishing Workflow Map",
      "Content Style Guide",
      "Weekly Audience Growth Reports"
    ],
    toolsStack: ["WordPress", "Later", "Google Search Console", "Canva"],
    challenges: [
      "Low audience retention and inconsistent posting frequency."
    ],
    solutions: [
      "Implemented a 'Content Pillar' system to ensure a mix of high-value and viral content."
    ],
    results: [
      "Improved audience reach and engagement (25% MoM growth).",
      "Established a reliable 24/7 publishing cadence.",
      "Increased organic search traffic to the magazine site."
    ],
    metrics: [
      { label: "Reach Growth", value: "25%", description: "Month-over-month increase" },
      { label: "Retention", value: "+15%", description: "improvement in repeat visitors" }
    ],
    galleryImages: ["/founder/Founder.png"]
  },
  {
    slug: "global-corporate-tour",
    clientName: "Global Corporate Tour",
    clientLogo: "/Client/Global_corporate_tour_Logo.webp",
    category: "Backend Dashboard",
    industry: "Travel / Corporate",
    servicesProvided: ["Dashboard IA", "Admin UI Design", "Backend Specs"],
    timeline: "4 Months",
    objectives: [
      "Design an enterprise dashboard for managing corporate travel tours.",
      "Create clear workflows for tour operators and admins.",
      "Provide detailed backend specifications for core system modules."
    ],
    tasksIDid: [
      "Dashboard IA: Defined modules for traveler management, tour scheduling, and financial tracking.",
      "Admin Panel UI: Designed high-fidelity wireframes and screens for data-heavy admin views with advanced filtering.",
      "Technical Specs: Authored detailed requirements for CRUD operations, field validation, and data entities.",
      "QA Iteration: Conducted regular feedback loops with developers to ensure UI/UX fidelity during implementation."
    ],
    deliverables: [
      "Full Dashboard Design System",
      "Technical Requirement Document (PRD)",
      "Interactive Admin Prototypes"
    ],
    toolsStack: ["Figma", "Jira", "React Admin Templates"],
    challenges: [
      "Visualizing complex multi-day tour itineraries for massive groups."
    ],
    solutions: [
      "Designed a timeline-based view that allows admins to manage schedules intuitively."
    ],
    results: [
      "Reduction in tour management time by 30%.",
      "Successful integration of the new traveler data module.",
      "Improved data accuracy across travel bookings."
    ],
    galleryImages: ["/founder/Founder.png"]
  },
  {
    slug: "ozuna-tortilla-factory",
    clientName: "Ozuna Tortilla Factory",
    clientLogo: "/Client/Ozuna_logo.webp",
    category: "Website Design",
    industry: "Food / Manufacturing",
    servicesProvided: ["Web Design", "Brand Storytelling", "Lead Generation"],
    timeline: "1.5 Months",
    objectives: [
      "Modernize the digital presence of a traditional food manufacturer.",
      "Create a clear wholesale inquiry flow.",
      "Showcase the quality and process of tortilla manufacturing."
    ],
    tasksIDid: [
      "Brand-Forward Design: Created a warm, heritage-focused aesthetic that highlights the factory's quality and history.",
      "Product Strategy: Designed dedicated pages for retail and wholesale products with clear specs and inquiry forms.",
      "Process Storytelling: Developed sections for 'Our Process' and 'Quality Control' to build B2B trust.",
      "Mobile Optimization: Ensured the factory's site is accessible for busy restaurant owners on the go."
    ],
    deliverables: [
      "Mobile-Responsive Website",
      "Wholesale Inquiry System",
      "Brand Photography Guide"
    ],
    toolsStack: ["Figma", "WordPress", "Gravity Forms"],
    challenges: [
      "The brand looked dated and didn't appeal to modern organic/natural food buyers."
    ],
    solutions: [
      "Updated visual identity with high-quality process visuals and clean typography."
    ],
    results: [
      "Significant increase in wholesale inquiries via the new web form.",
      "Improved brand visibility in local search results.",
      "Enhanced credibility with regional grocery chain buyers."
    ],
    galleryImages: ["/founder/Founder.png"]
  }
];
