export interface Company {
  name: string;
  launchDate: string;
  logo?: string;
  category: string;
  description: string;
}

export const companies: Company[] = [
  {
    name: "Facebook",
    launchDate: "2004-02-04",
    category: "Social Media",
    description: "Social networking platform founded by Mark Zuckerberg",
  },
  {
    name: "Twitter",
    launchDate: "2006-03-21",
    category: "Social Media",
    description: "Microblogging and social networking service",
  },
  {
    name: "Instagram",
    launchDate: "2010-10-06",
    category: "Social Media",
    description: "Photo and video sharing social network",
  },
  {
    name: "Snapchat",
    launchDate: "2011-07-08",
    category: "Social Media",
    description: "Multimedia messaging app with disappearing content",
  },
  {
    name: "TikTok",
    launchDate: "2016-09-01",
    category: "Social Media",
    description: "Short-form video hosting service",
  },
  {
    name: "Google",
    launchDate: "1998-09-04",
    category: "Technology",
    description: "Search engine and technology company",
  },
  {
    name: "Amazon",
    launchDate: "1994-07-05",
    category: "E-commerce",
    description: "Online marketplace and technology company",
  },
  {
    name: "Apple",
    launchDate: "1976-04-01",
    category: "Technology",
    description: "Consumer electronics and software company",
  },
  {
    name: "Microsoft",
    launchDate: "1975-04-04",
    category: "Technology",
    description: "Software and technology company",
  },
  {
    name: "Netflix",
    launchDate: "1997-08-29",
    category: "Entertainment",
    description: "Streaming service and production company",
  },
  {
    name: "Spotify",
    launchDate: "2008-10-07",
    category: "Music",
    description: "Audio streaming and media services provider",
  },
  {
    name: "Uber",
    launchDate: "2009-03-01",
    category: "Transportation",
    description: "Ride-hailing and delivery services",
  },
  {
    name: "Airbnb",
    launchDate: "2008-08-01",
    category: "Travel",
    description: "Online marketplace for lodging and tourism activities",
  },
  {
    name: "Tesla",
    launchDate: "2003-07-01",
    category: "Automotive",
    description: "Electric vehicle and clean energy company",
  },
  {
    name: "Reddit",
    launchDate: "2005-06-23",
    category: "Social Media",
    description: "Social news aggregation and discussion website",
  },
  {
    name: "LinkedIn",
    launchDate: "2003-05-05",
    category: "Social Media",
    description: "Professional networking platform",
  },
  {
    name: "YouTube",
    launchDate: "2005-02-14",
    category: "Video",
    description: "Video sharing and streaming platform",
  },
  {
    name: "WhatsApp",
    launchDate: "2009-01-01",
    category: "Messaging",
    description: "Cross-platform messaging and VoIP service",
  },
  {
    name: "Zoom",
    launchDate: "2011-04-21",
    category: "Communication",
    description: "Video conferencing platform",
  },
  {
    name: "Slack",
    launchDate: "2013-08-01",
    category: "Communication",
    description: "Business communication platform",
  },
  {
    name: "Twitch",
    launchDate: "2011-06-06",
    category: "Streaming",
    description: "Live streaming platform focused on video games",
  },
  {
    name: "Pinterest",
    launchDate: "2010-01-01",
    category: "Social Media",
    description: "Image sharing and social media service",
  },
  {
    name: "Dropbox",
    launchDate: "2007-06-01",
    category: "Cloud Storage",
    description: "File hosting service with cloud storage and file synchronization",
  },
  {
    name: "Stripe",
    launchDate: "2010-09-01",
    category: "Fintech",
    description: "Online payment processing platform",
  },
  {
    name: "Shopify",
    launchDate: "2006-06-01",
    category: "E-commerce",
    description: "E-commerce platform for online stores",
  },
  
  {
    name: "ChatGPT",
    launchDate: "2022-11-30",
    category: "AI",
    description: "Conversational AI chatbot developed by OpenAI",
  },
  {
    name: "DALL-E",
    launchDate: "2021-01-05",
    category: "AI",
    description: "AI system by OpenAI that creates images from textual descriptions",
  },
  {
    name: "Midjourney",
    launchDate: "2022-07-12",
    category: "AI",
    description: "AI-powered text-to-image generator",
  },
  {
    name: "Stable Diffusion",
    launchDate: "2022-08-22",
    category: "AI",
    description: "Latent text-to-image diffusion model capable of generating photo-realistic images",
  },
  {
    name: "Anthropic Claude",
    launchDate: "2023-03-14",
    category: "AI",
    description: "A conversational AI assistant focused on helpfulness and harmlessness",
  },
  {
    name: "Gemini",
    launchDate: "2023-12-06",
    category: "AI",
    description: "Google's multimodal AI model, formerly known as Bard",
  },
  {
    name: "Perplexity AI",
    launchDate: "2022-08-01",
    category: "AI",
    description: "AI-powered search engine that answers questions with cited sources",
  },
  {
    name: "Jasper",
    launchDate: "2021-01-28",
    category: "AI",
    description: "AI content generation platform for marketers and businesses",
  },
  {
    name: "Notion AI",
    launchDate: "2023-02-22",
    category: "AI",
    description: "AI writing assistant integrated with Notion's workspace platform",
  },
  {
    name: "Replika",
    launchDate: "2017-03-15",
    category: "AI",
    description: "AI companion designed to be a personal friend",
  },
  
  {
    name: "BeReal",
    launchDate: "2020-12-01",
    category: "Social Media",
    description: "Social media platform focusing on authentic, unfiltered moments",
  },
  {
    name: "Clubhouse",
    launchDate: "2020-03-17",
    category: "Social Media",
    description: "Audio-chat social networking app",
  },
  {
    name: "Discord",
    launchDate: "2015-05-13",
    category: "Communication",
    description: "VoIP and instant messaging social platform",
  },
  {
    name: "Figma",
    launchDate: "2016-09-27",
    category: "Design",
    description: "Collaborative interface design tool",
  },
  {
    name: "Notion",
    launchDate: "2016-06-01",
    category: "Productivity",
    description: "All-in-one workspace for notes, tasks, wikis, and databases",
  },
  {
    name: "Threads",
    launchDate: "2023-07-05",
    category: "Social Media",
    description: "Text-based conversation app by Instagram",
  },
  {
    name: "Bluesky",
    launchDate: "2023-02-28",
    category: "Social Media",
    description: "Decentralized social network",
  },
  {
    name: "Mastodon",
    launchDate: "2016-10-05",
    category: "Social Media",
    description: "Free and open-source self-hosted social networking service",
  },
  {
    name: "Substack",
    launchDate: "2017-07-18",
    category: "Publishing",
    description: "Platform for subscription newsletters",
  }
];

export const findCompany = (name: string): Company | undefined => {
  const searchTerm = name.toLowerCase().trim();
  return companies.find(company => 
    company.name.toLowerCase() === searchTerm
  );
};

export const searchCompanies = (searchTerm: string): Company[] => {
  if (!searchTerm.trim()) return [];
  
  const term = searchTerm.toLowerCase().trim();
  return companies
    .filter(company => company.name.toLowerCase().includes(term))
    .slice(0, 5); // Limit results to top 5
};
