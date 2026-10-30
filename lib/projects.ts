export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  cover: string;
  logo?: string;
  role: string;
  client: string;
  industry: string;
  timeline?: string;
  tools: string[];
  color: "blue" | "purple" | "cyan";
  overview: string;
  problems?: string[];
  audience?: {
    target: string;
    channels?: string;
    usp?: string;
    painPoints: string[];
  };
  research?: {
    heading: string;
    description?: string;
    images: { src: string; alt: string; label?: string }[];
  }[];
  contentStrategy?: {
    mission: string;
    pillars: { pillar: string; strength: string }[];
  };
  campaigns?: {
    heading: string;
    goal?: string;
    kpis?: string[];
    items: { title: string; objective: string; detail: string }[];
    images?: { src: string; alt: string }[];
  };
  budget?: { label: string; value: string }[];
  results: { metric: string; label: string }[];
  reflection: string;
  gallery?: { src: string; alt: string }[];
  externalLinks?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "boston-pizza-four-points",
    title: "Boston Pizza / Four Points",
    subtitle: "Social media & local community marketing",
    summary:
      "Social content, promotional copy, Google Business Profile updates, and community outreach that built local awareness — 71.0K Instagram views and 42,552 Google Business Profile views from September to October.",
    cover: "/projects/campaign.jpg",
    role: "Digital Marketing Coordinator",
    client: "Boston Pizza / Four Points by Sheraton (Vaughan, ON)",
    industry: "Restaurant & Hospitality",
    timeline: "Jan 2026 — Present",
    tools: ["Canva", "Adobe Creative Suite", "Meta Business Suite", "Google Business Profile", "GA4", "Instagram", "Facebook"],
    color: "cyan",
    overview:
      "The objective was to build local awareness for restaurant offers and community events. My role covered social content, promotional copy, Google profile updates, and community outreach: planning and scheduling Instagram and Facebook content, creating promotional graphics and copy for lunch specials, Kids Eat Free, and other offers, updating Google Business Profile content, and supporting local marketing initiatives to strengthen brand awareness and customer engagement.",
    campaigns: {
      heading: "From Content to Local Awareness",
      goal: "A mix of digital execution and community marketing that grows visibility and builds local connections.",
      items: [
        {
          title: "Digital Execution",
          objective: "Plan and schedule content",
          detail: "Planned and scheduled Instagram, Facebook, and Google Business Profile content, and created testimonial reels and promotional content.",
        },
        {
          title: "Community Outreach",
          objective: "120 attendees reached",
          detail: "Reached 120 attendees at golf tournament outreach, with pizzas and event flyers distributed.",
        },
        {
          title: "Local Engagement",
          objective: "20+ nearby businesses",
          detail: "Visited 20+ nearby businesses with promotional materials.",
        },
      ],
    },
    results: [
      { metric: "42,552", label: "Google Business Profile views" },
      { metric: "71.0K", label: "Instagram views (+1.2K%)" },
      { metric: "39.8K", label: "Instagram reach (+1.7K%)" },
      { metric: "+52.6%", label: "Profile visits (1.1K)" },
      { metric: "120", label: "Attendees reached at golf tournament outreach" },
      { metric: "20+", label: "Nearby businesses visited with promotional materials" },
    ],
    reflection:
      "The mix of digital execution and community marketing grew visibility and built local connections. Next, I'm strengthening calls-to-action and tracking calls, directions, inquiries, reservations, link clicks, and partnership leads.",
    gallery: [
      { src: "/projects/metrics-top.jpg", alt: "Instagram and Facebook results for Boston Pizza, September to October" },
      { src: "/projects/metrics-bottom.jpg", alt: "Google Business Profile breakdown showing 42,552 views" },
      { src: "/projects/community.jpg", alt: "Boston Pizza Community Day photos from Vaughan" },
      { src: "/projects/design.jpg", alt: "Boston Pizza promotional graphic designs" },
      { src: "/projects/video.jpg", alt: "Frames from Boston Pizza short-form video" },
    ],
  },
  {
    slug: "career-hub",
    title: "Career Hub",
    subtitle: "Career development & job-readiness platform",
    summary:
      "A full digital marketing strategy — audience research, content systems, paid funnels, and creative — to help graduating students transition confidently into the job market.",
    cover:
      "https://static.wixstatic.com/media/2ef1a5_0d70b299b4e047ceb02bf8ec1fbb06e5~mv2.png/v1/fill/w_1200,h_730,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/landing%20page.png",
    logo: "https://static.wixstatic.com/media/2ef1a5_154fcc5fb1b04b85bd67b19aa3bff83d~mv2.png/v1/fill/w_320,h_320,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_154fcc5fb1b04b85bd67b19aa3bff83d~mv2.png",
    role: "Digital Marketing Strategist — Research, Content, Paid Media",
    client: "Career Hub — Career development & job readiness platform",
    industry: "Career Services & Job Readiness",
    tools: ["Persona Research", "Journey Mapping", "Meta Ads", "Google Search Ads", "Email Drip", "SEO Blogging"],
    color: "blue",
    overview:
      "Career Hub is a career development and job-readiness platform supporting graduating students in Ontario. It offers mentorship, resume help, language assistance, and networking with professionals to make the transition from school to work easier.",
    problems: [
      "Low brand awareness among students",
      "Low engagement on social channels",
      "Limited understanding of what Career Hub actually offers",
    ],
    audience: {
      target: "Graduating university students in Ontario (ages 21–30), particularly from Toronto, Ottawa, and Waterloo.",
      channels: "Blog, Instagram, LinkedIn, TikTok",
      usp: "Multilingual mentorship, resume crafting, and industry connections.",
      painPoints: [
        "Struggling to find jobs with no prior experience",
        "Lack of networking or industry connections",
        "Need for resume and interview guidance",
        "Overwhelmed by job market competition",
      ],
    },
    research: [
      {
        heading: "Persona",
        description: "A composite persona built from student pain points and career-readiness needs.",
        images: [
          {
            src: "https://static.wixstatic.com/media/2ef1a5_b94bfa4ab18045a5b271d0390560414c~mv2.png/v1/fill/w_935,h_624,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/persona.png",
            alt: "Career Hub target persona profile",
          },
        ],
      },
      {
        heading: "Journey Map",
        description: "Mapping the student journey from job-search anxiety to confident application.",
        images: [
          {
            src: "https://static.wixstatic.com/media/2ef1a5_b1eee5f707be4d3e8fcac2caac4e902c~mv2.png/v1/fill/w_842,h_703,al_c,q_90,enc_avif,quality_auto/JOURNEY%20MAP.png",
            alt: "Career Hub user journey map",
          },
        ],
      },
      {
        heading: "Concept Mapping",
        description: "Exploring how community, mentorship, and career-readiness themes interconnect.",
        images: [
          {
            src: "https://static.wixstatic.com/media/2ef1a5_9d1f59a1f5b64e1689b139e6f5746acb~mv2.jpg/v1/fill/w_980,h_635,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Concept%20map%20(Community).jpg",
            alt: "Concept map for Career Hub community themes",
          },
        ],
      },
      {
        heading: "Competitive Analysis",
        images: [
          {
            src: "https://static.wixstatic.com/media/2ef1a5_a4c6312fc53e4314ac7ef7533ce20514~mv2.png/v1/fill/w_708,h_718,al_c,lg_1,q_90,enc_avif,quality_auto/2ef1a5_a4c6312fc53e4314ac7ef7533ce20514~mv2.png",
            alt: "Competitive analysis of career-readiness platforms",
          },
        ],
      },
    ],
    contentStrategy: {
      mission:
        "Provide practical, supportive, multilingual career content that reduces job-search anxiety and guides new grads towards employment.",
      pillars: [
        { pillar: "Resume + interview guidance", strength: "Multilingual support" },
        { pillar: "Real stories from new grads", strength: "Personalized mentorship" },
        { pillar: "Job opportunities and alerts", strength: "Resume reviews" },
        { pillar: "Mentorship and career confidence", strength: "Industry connections" },
        { pillar: "30–60 sec actionable videos", strength: "Short-form accessibility" },
      ],
    },
    campaigns: {
      heading: "Paid Social Ads & Amplification Strategy",
      goal:
        "Drive new user sign-ups on Career Hub's free mentorship and job-readiness resources with final-year students and recent graduates across Canada.",
      kpis: [
        "Lead sign-ups — new accounts from LinkedIn lead forms or landing pages",
        "CTR — clicks on 'Sign Up for Free' / 'Learn More' CTAs",
        "Cost per lead (CPL) — average spend per sign-up",
        "Engagement rate (Instagram) — likes, shares, saves, comments",
        "Reach & impressions across the full campaign",
      ],
      items: [
        {
          title: "Instagram & TikTok Ads",
          objective: "Awareness + sign-ups",
          detail: "Story ads, reels, and testimonial-based creatives with CTAs like \"Sign up for mentorship\" and \"Get resume help.\"",
        },
        {
          title: "Google Search Ads",
          objective: "Capture high-intent traffic",
          detail: "Targeting keywords such as \"entry-level jobs,\" \"resume tips,\" and \"internships Canada.\"",
        },
        {
          title: "Lead Generation Ads",
          objective: "Collect mentorship leads",
          detail: "Instagram + LinkedIn lead forms capturing name, email, and program to qualify prospects.",
        },
      ],
      images: [
        {
          src: "https://static.wixstatic.com/media/2ef1a5_55e4f4b3d27542e29d0e15d3c6f2a412~mv2.png/v1/fill/w_353,h_471,q_90,enc_avif,quality_auto/2ef1a5_55e4f4b3d27542e29d0e15d3c6f2a412~mv2.png",
          alt: "Career Hub paid ad mockup 1",
        },
        {
          src: "https://static.wixstatic.com/media/2ef1a5_c0f4c9c6258e44318928d38053826e5e~mv2.png/v1/fill/w_353,h_471,q_90,enc_avif,quality_auto/2ef1a5_c0f4c9c6258e44318928d38053826e5e~mv2.png",
          alt: "Career Hub paid ad mockup 2",
        },
        {
          src: "https://static.wixstatic.com/media/2ef1a5_0566285fdac847628a1318194ae23797~mv2.png/v1/fill/w_353,h_471,q_90,enc_avif,quality_auto/2ef1a5_0566285fdac847628a1318194ae23797~mv2.png",
          alt: "Career Hub paid ad mockup 3",
        },
        {
          src: "https://static.wixstatic.com/media/2ef1a5_a332f30950c1464ba8dc9edd77e121cc~mv2.png/v1/fill/w_256,h_426,al_c,lg_1,q_85,enc_avif,quality_auto/2ef1a5_a332f30950c1464ba8dc9edd77e121cc~mv2.png",
          alt: "Career Hub paid ad mockup 4",
        },
      ],
    },
    budget: [
      { label: "Monthly Budget", value: "$1,000" },
      { label: "LinkedIn Ads", value: "$600" },
      { label: "Instagram Ads", value: "$250" },
      { label: "Creative Tools & Testing", value: "$150" },
    ],
    results: [
      { metric: "+20%", label: "Brand awareness" },
      { metric: "+10%", label: "Mentorship sign-ups" },
      { metric: "+15%", label: "Engagement growth (Instagram & LinkedIn)" },
    ],
    reflection:
      "Working on Career Hub strengthened my understanding of how digital marketing connects strategy, content, and audience needs. I learned to translate research into practical solutions, build targeted content for specific user groups, and develop multi-channel plans that feel consistent and purposeful — refining my skills in content creation, SEO writing, short-form video planning, and paid ad strategy along the way.",
    gallery: [
      {
        src: "https://static.wixstatic.com/media/2ef1a5_7d8c2445b717476a985f630689ed51f3~mv2.jpg/v1/fill/w_388,h_502,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_7d8c2445b717476a985f630689ed51f3~mv2.jpg",
        alt: "Career Hub email drip campaign design 1",
      },
      {
        src: "https://static.wixstatic.com/media/2ef1a5_17be2529e98f467b9ed2377534fbaa0a~mv2.jpg/v1/fill/w_388,h_502,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_17be2529e98f467b9ed2377534fbaa0a~mv2.jpg",
        alt: "Career Hub email drip campaign design 2",
      },
      {
        src: "https://static.wixstatic.com/media/2ef1a5_f862bc14c0514253b32d6ca05f9266c6~mv2.jpg/v1/fill/w_388,h_502,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_f862bc14c0514253b32d6ca05f9266c6~mv2.jpg",
        alt: "Career Hub email drip campaign design 3",
      },
      {
        src: "https://static.wixstatic.com/media/2ef1a5_01998bad658342d99455b8c3248aa16a~mv2.jpg/v1/fill/w_388,h_502,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_01998bad658342d99455b8c3248aa16a~mv2.jpg",
        alt: "Career Hub email drip campaign design 4",
      },
      {
        src: "https://static.wixstatic.com/media/2ef1a5_ec806b4b48ef4e7b890ebb8e65ca491f~mv2.jpg/v1/fill/w_388,h_502,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_ec806b4b48ef4e7b890ebb8e65ca491f~mv2.jpg",
        alt: "Career Hub email drip campaign design 5",
      },
    ],
    externalLinks: [
      {
        label: "Blog: Ontario Grads — Navigate Your Career Journey",
        href: "https://47031251.hs-sites.com/dcm-blog-s4/ontario-grads-navigate-your-career-journey-with-mentorship-local-insights",
      },
    ],
  },
  {
    slug: "abj-wedding-planner",
    title: "ABJ Wedding Planner",
    subtitle: "Digital growth & social media optimization",
    summary:
      "End-to-end digital marketing for ABJ Events across Canada and India — content planning, SEO, campaign analytics, and creative direction that grew followers from 1,742 to 10.9K organically.",
    cover:
      "https://static.wixstatic.com/media/2ef1a5_520e186881f646d482ea13c6dc13eae0~mv2.jpg/v1/fill/w_1200,h_811,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO.jpg",
    logo: "https://static.wixstatic.com/media/2ef1a5_ab89786767c34efcbaea7290bc78f405~mv2.jpg/v1/fill/w_300,h_112,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_ab89786767c34efcbaea7290bc78f405~mv2.jpg",
    role: "Social Media & Content Coordinator",
    client: "ABJ Wedding Planner (Canada & Kerala, India)",
    industry: "Weddings & Events",
    tools: ["Meta Business Suite", "Wix", "Setmore", "Linktree", "Meta Ads", "Email Marketing", "JustDial"],
    color: "purple",
    overview:
      "ABJ Wedding Planner needed to grow its digital presence in a highly competitive Kerala market. The goal: improve brand visibility, streamline client communication, and deliver measurable ROI through smarter marketing execution — managing the full digital workflow from content to paid advertising.",
    research: [
      {
        heading: "Social Media Management & Automation",
        description:
          "Managed the brand's entire social presence using Meta Business Suite to plan, schedule, and monitor content. Integrating Setmore as the booking system automated inquiries and appointment scheduling, removing a major bottleneck in client communication.",
        images: [],
      },
    ],
    campaigns: {
      heading: "Paid Advertising & Lead Generation",
      items: [
        {
          title: "Meta Ad Campaigns",
          objective: "Reach newly engaged couples",
          detail: "Targeted campaigns focused on key demographic areas across Kerala, with Linktree streamlining the journey from social to service pages.",
        },
        {
          title: "Integrated Lead Generation",
          objective: "Qualify leads across the funnel",
          detail: "Cross-channel campaigns combining Meta Ads, influencer collaborations, and email marketing to reach audiences at every decision stage.",
        },
      ],
      images: [
        {
          src: "https://static.wixstatic.com/media/2ef1a5_164376d1217f41f79116549640f8d8ac~mv2.jpeg/v1/fill/w_380,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_164376d1217f41f79116549640f8d8ac~mv2.jpeg",
          alt: "ABJ Wedding Planner Instagram analytics dashboard",
        },
        {
          src: "https://static.wixstatic.com/media/2ef1a5_46aba29ebf1e4db8a6b70d017e30543c~mv2.jpeg/v1/fill/w_472,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_46aba29ebf1e4db8a6b70d017e30543c~mv2.jpeg",
          alt: "ABJ Wedding Planner Facebook analytics dashboard",
        },
        {
          src: "https://static.wixstatic.com/media/2ef1a5_955cf640c7be45baaddb32b04fd05859~mv2.jpeg/v1/fill/w_320,h_618,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_955cf640c7be45baaddb32b04fd05859~mv2.jpeg",
          alt: "ABJ Wedding Planner engagement metrics",
        },
        {
          src: "https://static.wixstatic.com/media/2ef1a5_65439e3703914e3887657ef7b7db623d~mv2.jpeg/v1/fill/w_314,h_532,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_65439e3703914e3887657ef7b7db623d~mv2.jpeg",
          alt: "ABJ Wedding Planner reach insights",
        },
        {
          src: "https://static.wixstatic.com/media/2ef1a5_5fde3771111c4514ab21eed69fc8935f~mv2.jpeg/v1/fill/w_328,h_532,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_5fde3771111c4514ab21eed69fc8935f~mv2.jpeg",
          alt: "ABJ Wedding Planner audience behavior data",
        },
        {
          src: "https://static.wixstatic.com/media/2ef1a5_ad00db5812e648be9fd63af881cf3b4e~mv2.jpeg/v1/fill/w_586,h_532,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_ad00db5812e648be9fd63af881cf3b4e~mv2.jpeg",
          alt: "ABJ Wedding Planner content performance chart",
        },
      ],
    },
    results: [
      { metric: "10.9K", label: "Followers, up from 1,742 (organic)" },
      { metric: "63.5K", label: "Instagram Reels views" },
      { metric: "+734%", label: "Facebook views (642)" },
      { metric: "39K", label: "YouTube all-time views" },
      { metric: "5K", label: "YouTube subscribers" },
      { metric: "454", label: "Google Business Profile interactions" },
    ],
    reflection:
      "This project shows my ability to manage social media end-to-end, run paid boosts, automate communication, and use analytics to improve performance — a practical, business-focused approach to digital marketing in a competitive industry. Reels were the main driver of reach, while consistent posting and targeted boosts increased engagement and customer inquiries across every channel.",
    gallery: [
      { src: "/projects/abj-profiles.jpg", alt: "ABJ Wedding Planner Instagram and Facebook profiles" },
      { src: "/projects/abj-ig.jpg", alt: "ABJ Instagram performance graph, August to October" },
      { src: "/projects/abj-bottom.jpg", alt: "ABJ Google Business Profile, YouTube, and Facebook stats" },
      {
        src: "https://static.wixstatic.com/media/2ef1a5_68d49c6ce86f43d09f7f9c65a3d335bf~mv2.jpeg/v1/fill/w_704,h_784,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_68d49c6ce86f43d09f7f9c65a3d335bf~mv2.jpeg",
        alt: "ABJ Wedding Planner lead flow and customer journey diagram",
      },
      {
        src: "https://static.wixstatic.com/media/2ef1a5_1fc1672cd6c946dcb12ef4e7b6328067~mv2.jpg/v1/fill/w_612,h_566,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_1fc1672cd6c946dcb12ef4e7b6328067~mv2.jpg",
        alt: "ABJ Wedding Planner campaign creative",
      },
      {
        src: "https://static.wixstatic.com/media/2ef1a5_e47d863475304557bb884de24a294363~mv2.jpg/v1/fill/w_612,h_566,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202025-12-09%20at%2012_53_edited.jpg",
        alt: "ABJ Wedding Planner promotional creative",
      },
    ],
    externalLinks: [
      { label: "Instagram", href: "https://www.instagram.com/abj_wedding_planner/" },
      { label: "Facebook", href: "https://www.facebook.com/share/19x6eZvdaS/" },
    ],
  },
  {
    slug: "mint-leaves-posters",
    title: "Mint Leaves",
    subtitle: "Social media & promotional posters",
    summary:
      "A vibrant set of promotional and social posters designed in Canva to highlight weekly specials and strengthen Mint Leaves' presence on Instagram and Facebook.",
    cover:
      "https://static.wixstatic.com/media/2ef1a5_bbdfa89120bf47968701563ed2bee090~mv2.png/v1/fill/w_800,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_bbdfa89120bf47968701563ed2bee090~mv2.png",
    role: "Graphic & Social Media Designer",
    client: "Mint Leaves",
    industry: "Food & Beverage",
    tools: ["Canva", "Visual Storytelling", "Instagram", "Facebook"],
    color: "cyan",
    overview:
      "This project showcases promotional and social media posters designed for Mint Leaves, a restaurant brand. The goal was to create visually engaging content to attract customers, highlight weekly specials, and strengthen the brand's online presence — all designs created in Canva with a focus on vibrant colors, clear typography, and formats optimized for Instagram and Facebook.",
    results: [
      { metric: "12+", label: "Poster designs delivered" },
      { metric: "2", label: "Platforms optimized (IG + FB)" },
    ],
    reflection:
      "Designing for Mint Leaves sharpened my eye for fast, scroll-stopping visual storytelling — balancing brand consistency with the punchy, high-contrast layouts that perform best in a crowded social feed.",
    gallery: [
      { src: "https://static.wixstatic.com/media/2ef1a5_bbdfa89120bf47968701563ed2bee090~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_bbdfa89120bf47968701563ed2bee090~mv2.png", alt: "Mint Leaves poster 1" },
      { src: "https://static.wixstatic.com/media/2ef1a5_a986d9738c9f45cdb38fc284e4691438~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_a986d9738c9f45cdb38fc284e4691438~mv2.png", alt: "Mint Leaves poster 2" },
      { src: "https://static.wixstatic.com/media/2ef1a5_0cf2391877e54080ada7aa8ee29a2b21~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_0cf2391877e54080ada7aa8ee29a2b21~mv2.png", alt: "Mint Leaves poster 3" },
      { src: "https://static.wixstatic.com/media/2ef1a5_3135b6944c63458aa1686440127f42fa~mv2.png/v1/fill/w_620,h_738,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_3135b6944c63458aa1686440127f42fa~mv2.png", alt: "Mint Leaves poster 4" },
      { src: "https://static.wixstatic.com/media/2ef1a5_fa8514ddc22d42f3a1f0407047bb6ec1~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_fa8514ddc22d42f3a1f0407047bb6ec1~mv2.png", alt: "Mint Leaves poster 5" },
      { src: "https://static.wixstatic.com/media/2ef1a5_88e0f8579ee34b9a81f1b587c02a4b78~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_88e0f8579ee34b9a81f1b587c02a4b78~mv2.png", alt: "Mint Leaves poster 6" },
      { src: "https://static.wixstatic.com/media/2ef1a5_37dbb016ac5a4ea8b8b967d8c5d1d6a4~mv2.png/v1/fill/w_620,h_638,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_37dbb016ac5a4ea8b8b967d8c5d1d6a4~mv2.png", alt: "Mint Leaves poster 7" },
      { src: "https://static.wixstatic.com/media/2ef1a5_c1facd455f9246f9b87bafb3b44940cd~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_c1facd455f9246f9b87bafb3b44940cd~mv2.png", alt: "Mint Leaves poster 8" },
      { src: "https://static.wixstatic.com/media/2ef1a5_660b789f6f8d45dcbf4ef0f1044bb2ff~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_660b789f6f8d45dcbf4ef0f1044bb2ff~mv2.png", alt: "Mint Leaves poster 9" },
      { src: "https://static.wixstatic.com/media/2ef1a5_9248e6d9ef794b54be3eb48c8c505480~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_9248e6d9ef794b54be3eb48c8c505480~mv2.png", alt: "Mint Leaves poster 10" },
      { src: "https://static.wixstatic.com/media/2ef1a5_e0e827dd4c244beb911a9afd272aa16a~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_e0e827dd4c244beb911a9afd272aa16a~mv2.png", alt: "Mint Leaves poster 11" },
      { src: "https://static.wixstatic.com/media/2ef1a5_17c4e088d4ae41cfb5fb62894cd49a0a~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_17c4e088d4ae41cfb5fb62894cd49a0a~mv2.png", alt: "Mint Leaves poster 12" },
      { src: "https://static.wixstatic.com/media/2ef1a5_01341eac6b55421c85baabbd74d012f6~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_01341eac6b55421c85baabbd74d012f6~mv2.png", alt: "Mint Leaves poster 13" },
      { src: "https://static.wixstatic.com/media/2ef1a5_7107d068b87e4b74bbecae1ad3dc0ce5~mv2.png/v1/fill/w_620,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/2ef1a5_7107d068b87e4b74bbecae1ad3dc0ce5~mv2.png", alt: "Mint Leaves poster 14" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
