const TOOLS = [
  { n: "ChatGPT", c: "Writing", b: "POPULAR", tags: ["chat", "writing"], u: "https://chatgpt.com/", dEn: "Fast drafts, rewrites, brainstorming and everyday reasoning.", dBn: "দ্রুত ড্রাফট, পুনর্লিখন, আইডিয়া ও দৈনন্দিন যুক্তি।" },
  { n: "Claude", c: "Writing", b: "POPULAR", tags: ["long-form", "analysis"], u: "https://claude.ai/", dEn: "Long-form writing, structured documents and careful analysis.", dBn: "দীর্ঘ লেখা, গঠনবদ্ধ ডকুমেন্ট ও সতর্ক বিশ্লেষণ।" },
  { n: "Gemini", c: "Research", b: "FREE", tags: ["multimodal", "google"], u: "https://gemini.google.com/", dEn: "Multimodal research, images and Google Workspace workflows.", dBn: "মাল্টিমোডাল রিসার্চ, ছবি ও Google Workspace ওয়ার্কফ্লো।" },
  { n: "Perplexity", c: "Research", b: "FREE", tags: ["search", "citations"], u: "https://www.perplexity.ai/", dEn: "Sourced answers with citations for quick, reliable research.", dBn: "সূত্রসহ উত্তর — দ্রুত ও নির্ভরযোগ্য রিসার্চ।" },
  { n: "Figma", c: "Design", b: "POPULAR", tags: ["ui", "prototype"], u: "https://www.figma.com/", dEn: "Interface design with AI-assisted layouts and components.", dBn: "AI-সহায়ক লেআউট ও কম্পোনেন্টে ইন্টারফেস ডিজাইন।" },
  { n: "Canva", c: "Design", b: "FREE", tags: ["social", "templates"], u: "https://www.canva.com/", dEn: "Social sets, thumbnails and presentations in minutes.", dBn: "মিনিটে সোশ্যাল পোস্ট, থাম্বনেইল ও প্রেজেন্টেশন।" },
  { n: "GitHub Copilot", c: "Development", b: "PAID", tags: ["code", "editor"], u: "https://github.com/features/copilot", dEn: "Code completion and pair programming inside your editor.", dBn: "এডিটরের ভেতরে কোড কমপ্লিশন ও পেয়ার প্রোগ্রামিং।" },
  { n: "Cursor", c: "Development", b: "POPULAR", tags: ["code", "refactor"], u: "https://www.cursor.com/", dEn: "AI-first code editor for fast editing and refactors.", dBn: "দ্রুত এডিট ও রিফ্যাক্টরের জন্য AI-ফার্স্ট কোড এডিটর।" },
  { n: "Notion", c: "Productivity", b: "FREE", tags: ["notes", "projects"], u: "https://www.notion.so/", dEn: "Projects, notes and reusable playbooks in one workspace.", dBn: "প্রোজেক্ট, নোট ও পুনঃব্যবহারযোগ্য প্লেবুক এক ওয়ার্কস্পেসে।" },
  { n: "Trello", c: "Productivity", b: "FREE", tags: ["boards", "clients"], u: "https://trello.com/", dEn: "Simple visual boards for client work and content pipelines.", dBn: "ক্লায়েন্ট কাজ ও কনটেন্ট পাইপলাইনের সহজ ভিজ্যুয়াল বোর্ড।" },
  { n: "ElevenLabs", c: "Audio", b: "FREE", tags: ["voice", "tts"], u: "https://elevenlabs.io/", dEn: "Natural voiceovers for drafts, videos and demos.", dBn: "ড্রাফট, ভিডিও ও ডেমোর জন্য স্বাভাবিক ভয়েসওভার।" },
  { n: "Runway", c: "Video", b: "PAID", tags: ["generative", "vfx"], u: "https://runwayml.com/", dEn: "Generative video, cleanup and visual effects.", dBn: "জেনারেটিভ ভিডিও, ক্লিনআপ ও ভিজ্যুয়াল ইফেক্ট।" },
  { n: "Grammarly", c: "Writing", b: "FREE", tags: ["grammar", "tone"], u: "https://www.grammarly.com/", dEn: "Tone, clarity and grammar checks for client-ready copy.", dBn: "ক্লায়েন্ট-রেডি কপির টোন, স্পষ্টতা ও ব্যাকরণ যাচাই।" },
  { n: "Midjourney", c: "Design", b: "PAID", tags: ["image", "art"], u: "https://www.midjourney.com/", dEn: "High-quality concept art and image generation.", dBn: "উচ্চমানের কনসেপ্ট আর্ট ও ইমেজ জেনারেশন।" },
  { n: "DALL·E", c: "Design", b: "FREEMIUM", tags: ["image", "editing"], u: "https://openai.com/dall-e-3", dEn: "Image generation and editing from plain text prompts.", dBn: "সাধারণ টেক্সট প্রম্পট থেকে ইমেজ তৈরি ও এডিট।" },
  { n: "Leonardo AI", c: "Design", b: "FREEMIUM", tags: ["assets", "characters"], u: "https://leonardo.ai/", dEn: "Game assets, product shots and consistent characters.", dBn: "গেম অ্যাসেট, প্রোডাক্ট শট ও ধারাবাহিক ক্যারেক্টার।" },
  { n: "CapCut", c: "Video", b: "FREE", tags: ["editing", "captions"], u: "https://www.capcut.com/", dEn: "Fast video editing, captions and short-form templates.", dBn: "দ্রুত ভিডিও এডিট, ক্যাপশন ও শর্টফর্ম টেমপ্লেট।" },
  { n: "Descript", c: "Video", b: "PAID", tags: ["transcript", "podcast"], u: "https://www.descript.com/", dEn: "Edit audio and video by editing the transcript.", dBn: "ট্রান্সক্রিপ্ট এডিট করে অডিও ও ভিডিও সম্পাদনা।" },
  { n: "Suno", c: "Audio", b: "FREE", tags: ["music", "songs"], u: "https://suno.com/", dEn: "Full songs and instrumentals from a text prompt.", dBn: "টেক্সট প্রম্পট থেকে পূর্ণ গান ও ইনস্ট্রুমেন্টাল।" },
  { n: "Murf", c: "Audio", b: "PAID", tags: ["voice", "ads"], u: "https://murf.ai/", dEn: "Studio-quality voiceovers for courses and ads.", dBn: "কোর্স ও বিজ্ঞাপনের জন্য স্টুডিও মানের ভয়েসওভার।" },
  { n: "Otter.ai", c: "Productivity", b: "FREE", tags: ["meetings", "notes"], u: "https://otter.ai/", dEn: "Meeting notes, transcripts and action items automatically.", dBn: "মিটিং নোট, ট্রান্সক্রিপ্ট ও অ্যাকশন আইটেম স্বয়ংক্রিয়ভাবে।" },
  { n: "Zapier", c: "Productivity", b: "FREEMIUM", tags: ["automation", "apps"], u: "https://zapier.com/", dEn: "Connect apps and automate repetitive busywork.", dBn: "অ্যাপ সংযুক্ত করে বিরক্তিকর পুনরাবৃত্ত কাজ অটোমেট করুন।" },
  { n: "Make", c: "Productivity", b: "FREEMIUM", tags: ["automation", "visual"], u: "https://www.make.com/", dEn: "Visual automation for multi-step workflows.", dBn: "মাল্টি-স্টেপ ওয়ার্কফ্লোর ভিজ্যুয়াল অটোমেশন।" },
  { n: "HubSpot", c: "Marketing", b: "FREEMIUM", tags: ["crm", "email"], u: "https://www.hubspot.com/", dEn: "CRM, email and pipelines for small teams.", dBn: "ছোট টিমের জন্য CRM, ইমেইল ও পাইপলাইন।" },
  { n: "Mailchimp", c: "Marketing", b: "FREEMIUM", tags: ["newsletter", "audience"], u: "https://mailchimp.com/", dEn: "Newsletters, campaigns and audience segments.", dBn: "নিউজলেটার, ক্যাম্পেইন ও অডিয়েন্স সেগমেন্ট।" },
  { n: "Buffer", c: "Marketing", b: "FREE", tags: ["social", "scheduling"], u: "https://buffer.com/", dEn: "Plan and schedule social posts across channels.", dBn: "বিভিন্ন চ্যানেলে সোশ্যাল পোস্ট পরিকল্পনা ও শিডিউল।" },
  { n: "Semrush", c: "Marketing", b: "PAID", tags: ["seo", "keywords"], u: "https://www.semrush.com/", dEn: "Keyword, competitor and technical SEO research.", dBn: "কিওয়ার্ড, প্রতিযোগী ও টেকনিক্যাল SEO রিসার্চ।" },
  { n: "Ahrefs", c: "Marketing", b: "PAID", tags: ["seo", "backlinks"], u: "https://ahrefs.com/", dEn: "Backlinks, keyword gaps and site audits.", dBn: "ব্যাকলিংক, কীওয়ার্ড গ্যাপ ও সাইট অডিট।" },
  { n: "Google Analytics", c: "Marketing", b: "FREE", tags: ["traffic", "conversions"], u: "https://analytics.google.com/", dEn: "Traffic, conversions and audience behaviour.", dBn: "ট্রাফিক, কনভার্সন ও অডিয়েন্স আচরণ।" },
  { n: "Hugging Face", c: "Development", b: "FREE", tags: ["models", "datasets"], u: "https://huggingface.co/", dEn: "Open models, datasets and AI demos.", dBn: "ওপেন মডেল, ডেটাসেট ও AI ডেমো।" },
  { n: "Replit", c: "Development", b: "FREEMIUM", tags: ["build", "browser"], u: "https://replit.com/", dEn: "Build and ship small apps from the browser.", dBn: "ব্রাউজার থেকেই ছোট অ্যাপ তৈরি ও প্রকাশ।" },
  { n: "Vercel", c: "Development", b: "FREEMIUM", tags: ["deploy", "frontend"], u: "https://vercel.com/", dEn: "Fast frontend deploys and preview links.", dBn: "দ্রুত ফ্রন্টএন্ড ডিপ্লয় ও প্রিভিউ লিংক।" },
  { n: "Supabase", c: "Development", b: "FREEMIUM", tags: ["database", "auth"], u: "https://supabase.com/", dEn: "Postgres database, auth and storage for apps.", dBn: "অ্যাপের জন্য Postgres ডেটাবেস, অথ ও স্টোরেজ।" },
  { n: "Excel Copilot", c: "Data", b: "PAID", tags: ["spreadsheet", "charts"], u: "https://www.microsoft.com/microsoft-365/excel", dEn: "Formulas, analysis and charts inside spreadsheets.", dBn: "স্প্রেডশিটের ভেতরে ফর্মুলা, বিশ্লেষণ ও চার্ট।" },
  { n: "Tableau", c: "Data", b: "PAID", tags: ["dashboards", "bi"], u: "https://www.tableau.com/", dEn: "Interactive dashboards for business data.", dBn: "ব্যবসায়িক ডেটার ইন্টারঅ্যাকটিভ ড্যাশবোর্ড।" },
  { n: "Datawrapper", c: "Data", b: "FREE", tags: ["charts", "maps"], u: "https://www.datawrapper.de/", dEn: "Clean, embeddable charts and maps in minutes.", dBn: "মিনিটে পরিচ্ছন্ন, এমবেডযোগ্য চার্ট ও ম্যাপ।" }
];

const ARTICLES = [
  {
    tag: "Productivity",
    read: 6,
    tEn: "The one-page system that keeps projects calm",
    tBn: "প্রোজেক্ট শান্ত রাখে যে এক-পেজ সিস্টেম",
    dEn: "Three sections, ten minutes a day, and the next action is always obvious.",
    dBn: "তিনটি অংশ, দিনে দশ মিনিট — পরের কাজটি সবসময় স্পষ্ট।",
    bodyEn: `<p>Most projects do not fail from a lack of effort. They fail because the next action is unclear. A one-page system fixes that with three sections: what matters this week, what is blocked, and what is done.</p><h3>Keep it brutally short</h3><p>If the page needs scrolling, it is too long. Write outcomes, not activity. “Audit live” beats “work on SEO”.</p><h3>Review at the same time daily</h3><p>Ten quiet minutes in the morning remove the need for constant context switching. The page becomes the single source of truth.</p><blockquote>Clarity is a feature. Protect it.</blockquote>`,
    bodyBn: `<p>বেশিরভাগ প্রোজেক্ট কাজের অভাবে ব্যর্থ হয় না — ব্যর্থ হয় পরের কাজটি অস্পষ্ট থাকায়। এক-পেজ সিস্টেম তিনটি অংশে তা ঠিক করে: এই সপ্তাহে যা গুরুত্বপূর্ণ, যা আটকে আছে, আর যা শেষ হয়েছে।</p><h3>যতটা সম্ভব সংক্ষিপ্ত রাখুন</h3><p>পেজে স্ক্রল করতে হলে তা বেশি লম্বা। কাজের বর্ণনা নয়, ফলাফল লিখুন। “SEO নিয়ে কাজ” নয় — “লাইভ অডিট”।</p><h3>প্রতিদিন একই সময়ে রিভিউ</h3><p>সকালের দশ মিনিট নীরবতা বারবার মন বদলের প্রয়োজন কমিয়ে দেয়। পেজটিই হয়ে ওঠে একমাত্র সত্যের উৎস।</p><blockquote>স্পষ্টতা একটি ফিচার। এটি রক্ষা করুন।</blockquote>`
  },
  {
    tag: "AI Tools",
    read: 5,
    tEn: "Choose an AI tool without collecting twenty of them",
    tBn: "বিশটি AI টুল না কিনেও সঠিকটি বেছে নিন",
    dEn: "Start with the task, not the tool. Three tests keep the stack small and useful.",
    dBn: "টুল নয়, কাজ থেকে শুরু করুন। তিনটি পরীক্ষায় স্ট্যাক ছোট ও কাজের থাকে।",
    bodyEn: `<p>Start with the task, not the tool. Name the exact job — rewrite a proposal, summarise research, clean a transcript — then try two tools and keep the one that fits the workflow.</p><h3>Three tests</h3><ul><li>Does it save real time this week?</li><li>Does the output need heavy rewriting?</li><li>Does it fit the budget without stress?</li></ul><p>If a tool fails two of three, retire it. A small stack used daily beats a large one opened once.</p>`,
    bodyBn: `<p>টুল দিয়ে শুরু করবেন না, কাজ দিয়ে শুরু করুন। নির্দিষ্ট কাজটি নাম দিন — প্রপোজাল নতুন করে লেখা, রিসার্চ সারসংক্ষেপ, ট্রান্সক্রিপ্ট পরিষ্কার করা। তারপর দুটি টুল চেষ্টা করুন, যেটি ওয়ার্কফ্লোতে মানায় সেটিই রাখুন।</p><h3>তিনটি পরীক্ষা</h3><ul><li>এটি কি এই সপ্তাহে সত্যিই সময় বাঁচাচ্ছে?</li><li>আউটপুট কি আবার অনেকটা লিখতে হচ্ছে?</li><li>বাজেটে কি চাপ ছাড়াই ফিট হচ্ছে?</li></ul><p>তিনটির মধ্যে দুটিতে ব্যর্থ হলে টুলটি বাদ দিন। প্রতিদিন ব্যবহৃত ছোট স্ট্যাক, বছরেও একবার খোলা বড় স্ট্যাকের চেয়ে ভালো।</p>`
  },
  {
    tag: "Freelancing",
    read: 4,
    tEn: "A better first line for every client proposal",
    tBn: "প্রতিটি ক্লায়েন্ট প্রপোজালের সেরা প্রথম লাইন",
    dEn: "Open with an observation about their business, not your biography.",
    dBn: "নিজের পরিচয় নয়, তাদের ব্যবসা সম্পর্কে একটি পর্যবেক্ষণ দিয়ে শুরু করুন।",
    bodyEn: `<p>Open with what you noticed about their business, not your biography. One specific observation proves you read the brief and makes the rest of the proposal feel earned.</p><h3>Then keep the structure tight</h3><p>Observation, plan, price, next step. Four short blocks. Clients can say yes without rereading.</p><p>Send it quickly, follow up once, and move on. Volume with quality is the only reliable pipeline.</p>`,
    bodyBn: `<p>নিজের পরিচয় দিয়ে নয়, তাদের ব্যবসা সম্পর্কে যা লক্ষ্য করেছেন তা দিয়ে শুরু করুন। একটি নির্দিষ্ট পর্যবেক্ষণ প্রমাণ করে আপনি ব্রিফ পড়েছেন, আর বাকি প্রপোজালটি অর্জিত মনে হয়।</p><h3>তারপর গঠনটি Tight রাখুন</h3><p>পর্যবেক্ষণ, পরিকল্পনা, মূল্য, পরের পদক্ষেপ। চারটি ছোট ব্লক। ক্লায়েন্ট আবার না পড়েই “হ্যাঁ” বলতে পারেন।</p><p>দ্রুত পাঠান, একবার ফলোআপ করুন, তারপর এগিয়ে যান। গুণমানসহ পরিমাণই একমাত্র নির্ভরযোগ্য পাইপলাইন।</p>`
  },
  {
    tag: "SEO",
    read: 7,
    tEn: "SEO foundations that still work in 2026",
    tBn: "২০২৬-এও কাজ করে এমন SEO ভিত্তি",
    dEn: "Search rewards clarity, speed and genuine usefulness — in that order.",
    dBn: "সার্চ স্পষ্টতা, গতি ও সত্যিকারের উপযোগিতাকে পুরস্কৃত করে — এই ক্রমেই।",
    bodyEn: `<p>Search engines have changed, but the foundations have not. One page should answer one search intent better than anything else that exists. Start there before chasing tools.</p><h3>The four checks</h3><ul><li>Does the title promise exactly what the page delivers?</li><li>Is the page fast on a mid-range phone?</li><li>Are headings a readable outline of the answer?</li><li>Do internal links guide the reader to the next step?</li></ul><h3>Content that earns links</h3><p>Original data, real screenshots and honest comparisons attract links naturally. Thin summaries of other articles do not.</p><blockquote>Write for the person who is one search away from solving their problem.</blockquote>`,
    bodyBn: `<p>সার্চ ইঞ্জিন বদলেছে, কিন্তু ভিত্তি বদলায়নি। একটি পেজ একটি সার্চ ইনটেন্টের সেরা উত্তর দেবে — পৃথিবীর অন্য যেকোনো কিছুর চেয়ে ভালো। টুলের পেছনে ছোটার আগে এখানেই শুরু করুন।</p><h3>চারটি যাচাই</h3><ul><li>টাইটেল কি ঠিক সেই প্রতিশ্রুতি দিচ্ছে যা পেজে আছে?</li><li>মধ্যম মানের ফোনে পেজটি কি দ্রুত?</li><li>হেডিংগুলো কি উত্তরের পাঠযোগ্য রূপরেখা?</li><li>ইন্টারনাল লিংক কি পাঠককে পরের ধাপে নিচ্ছে?</li></ul><h3>লিংক অর্জন করে এমন কনটেন্ট</h3><p>মৌলিক ডেটা, আসল স্ক্রিনশট ও সৎ তুলনা প্রাকৃতিকভাবে লিংক আনে। অন্যের লেখার পাতলা সারসংক্ষেপ আনে না।</p><blockquote>যে মানুষ এক সার্চ দূরত্বে তার সমস্যার সমাধান খুঁজছে, তার জন্য লিখুন।</blockquote>`
  },
  {
    tag: "Focus",
    read: 5,
    tEn: "Deep work in 25-minute blocks",
    tBn: "২৫ মিনিটের ব্লকে গভীর কাজ",
    dEn: "The timer is not the magic. Deciding what not to do is.",
    dBn: "জাদু টাইমারে নয় — কী করবেন না তা ঠিক করাতেই।",
    bodyEn: `<p>A 25-minute timer works because it makes the commitment small enough to start. The real rule is simple: one task, no messages, no new tabs until the block ends.</p><h3>Before you press start</h3><p>Write the exact outcome on paper or in the workspace. “Draft the intro” is a task. “Work on the site” is a mood.</p><h3>When the timer rings</h3><p>Stop even if you are in flow — note the next action, then take five minutes away from the screen. Four solid blocks beat eight distracted hours.</p>`,
    bodyBn: `<p>২৫ মিনিটের টাইমার কাজ করে কারণ এটি প্রতিশ্রুতিকে এত ছোট করে যে শুরু করা যায়। আসল নিয়ম সহজ: একটি কাজ, কোনো মেসেজ নেই, ব্লক শেষ না হওয়া পর্যন্ত নতুন ট্যাব নেই।</p><h3>শুরু চাপার আগে</h3><p>সঠিক ফলাফলটি কাগজে বা ওয়ার্কস্পেসে লিখুন। “ভূমিকা ড্রাফট” একটি টাস্ক। “সাইট নিয়ে কাজ” একটি মনোভাব।</p><h3>টাইমার বাজলে</h3><p>ফ্লোতে থাকলেও থামুন — পরের কাজটি লিখে রাখুন, তারপর পাঁচ মিনিট স্ক্রিন থেকে দূরে যান। চারটি কঠিন ব্লক আটটি বিভ্রান্ত ঘণ্টার চেয়ে ভালো।</p>`
  },
  {
    tag: "Systems",
    read: 6,
    tEn: "Build a second brain you actually reopen",
    tBn: "যে সেকেন্ড ব্রেইন আপনি আবার খুলবেন",
    dEn: "Store less, connect more, and make capture take under ten seconds.",
    dBn: "কম জমা রাখুন, বেশি সংযুক্ত করুন — ক্যাপচার হোক দশ সেকেন্ডে।",
    bodyEn: `<p>Most note systems die because they are designed for storing, not for thinking. The useful version has fewer folders, shorter notes and one reliable place for new ideas.</p><h3>Capture in ten seconds</h3><p>If an idea takes longer than ten seconds to save, it will never be saved. Keep one inbox — the Notes tab here is enough — and sort it later.</p><h3>Write for your future self</h3><p>Every note should end with one sentence: what to do with it. A note without a next action is a museum piece.</p><ul><li>One inbox, many notes</li><li>One idea per note</li><li>One next action per note</li></ul>`,
    bodyBn: `<p>বেশিরভাগ নোট সিস্টেম মরে যায় কারণ সেগুলো ভাবার জন্য নয়, জমা রাখার জন্য তৈরি। কাজের ভার্সনে ফোল্ডার কম, নোট ছোট, আর নতুন আইডিয়ার জন্য একটিই নির্ভরযোগ্য জায়গা।</p><h3>দশ সেকেন্ডে ক্যাপচার</h3><p>একটি আইডিয়া সংরক্ষণে দশ সেকেন্ডের বেশি লাগলে তা কখনোই সংরক্ষিত হবে না। একটি ইনবক্স রাখুন — এখানে Notes ট্যাবই যথেষ্ট — পরে সাজিয়ে নিন।</p><h3>ভবিষ্যতের নিজের জন্য লিখুন</h3><p>প্রতিটি নোট শেষ করুন এক বাক্যে: এটি দিয়ে কী করবেন। পরের কাজ ছাড়া নোট জাদুঘরের বস্তু।</p><ul><li>এক ইনবক্স, অনেক নোট</li><li>প্রতি নোটে এক আইডিয়া</li><li>প্রতি নোটে এক পরের কাজ</li></ul>`
  }
];

const PROFILE = {
  email: "Polash@programmer.net",
  whatsapp: "https://wa.me/8801723328481"
};

const STORE_PREFIX = "polash-os:";
const THEME_KEY = STORE_PREFIX + "theme";
const LANG_KEY = STORE_PREFIX + "lang";
const FAV_KEY = STORE_PREFIX + "favs";
const TASK_KEY = STORE_PREFIX + "tasks";
const NOTE_KEY = STORE_PREFIX + "notes";
const FOCUS_KEY = STORE_PREFIX + "focus";

const TITLES = {
  home: { doc: ["Dashboard", "ড্যাশবোর্ড"], sub: ["Overview", "ওভারভিউ"] },
  tools: { doc: ["AI Tools", "AI টুলস"], sub: ["36 curated tools", "৩৬টি কিউরেটেড টুল"] },
  insights: { doc: ["Insights", "ইনসাইটস"], sub: ["Practical playbooks", "ব্যবহারিক প্লেবুক"] },
  workspace: { doc: ["Workspace", "ওয়ার্কস্পেস"], sub: ["Tasks, notes, focus", "টাস্ক, নোট, ফোকাস"] },
  contact: { doc: ["Contact", "যোগাযোগ"], sub: ["Work together", "একসাথে কাজ"] }
};

const CAT_LABEL = {
  Writing: "লেখা",
  Research: "রিসার্চ",
  Design: "ডিজাইন",
  Development: "ডেভেলপমেন্ট",
  Video: "ভিডিও",
  Audio: "অডিও",
  Productivity: "প্রোডাক্টিভিটি",
  Marketing: "মার্কেটিং",
  Data: "ডেটা"
};

const TAG_LABEL = {
  Productivity: "প্রোডাক্টিভিটি",
  "AI Tools": "AI টুলস",
  Freelancing: "ফ্রিল্যান্সিং",
  SEO: "SEO",
  Focus: "মনোযোগ",
  Systems: "সিস্টেম"
};

const BADGE_LABEL = {
  FREE: ["Free", "ফ্রি"],
  PAID: ["Paid", "পেইড"],
  FREEMIUM: ["Freemium", "ফ্রিমিয়াম"],
  POPULAR: ["Popular", "জনপ্রিয়"]
};

const ICONS = {
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6"/></svg>`,
  external: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>`,
  star: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 4 2.5 5.2 5.5.8-4 3.9.9 5.6L12 16.9 7.1 19.5 8 13.9 4 10l5.5-.8z"/></svg>`,
  check: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M6 7l1 13h10l1-13"/></svg>`,
  pencil: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4l11-11-4-4L4 16z"/><path d="m13.5 6.5 4 4"/></svg>`,
  home: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10.5 12 4l8 6.5V20h-5v-6H9v6H4z"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6"/></svg>`,
  book: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h9l5 5v11H5z"/><path d="M13 4v6h6"/></svg>`,
  note: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h9l4 4V20H6z"/><path d="M14.5 3.5V8H19"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="8"/><path d="M12 9v4.5l3 2"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.6 2.5 14 0 17-2.5-3-2.5-14.4 0-17z"/></svg>`,
  share: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.2 10.8 7.6-3.6M8.2 13.2l7.6 3.6"/></svg>`,
  copy: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>`,
  download: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M8 11l4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>`
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const esc = (value) => String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
const t = (en, bn) => (state.lang === "bn" ? bn : en);

function storeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function storeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {}
}

function storeDel(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {}
}

function dateKey() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function locale() {
  return state.lang === "bn" ? "bn-BD" : "en-GB";
}

const state = {
  lang: (() => {
    try {
      return localStorage.getItem(LANG_KEY) === "en" ? "en" : "bn";
    } catch (error) {
      return "bn";
    }
  })(),
  route: "home",
  wsTab: "tasks",
  q: "",
  cat: "All",
  favOnly: false,
  sort: "name",
  articleTag: "All",
  favs: new Set(storeGet(FAV_KEY, [])),
  tasks: storeGet(TASK_KEY, null),
  notes: storeGet(NOTE_KEY, []),
  editingNote: null,
  palette: { items: [], active: 0 },
  timer: { mode: "focus", duration: 1500, remaining: 1500, running: false, id: null }
};

let focusStats = storeGet(FOCUS_KEY, null);
if (!focusStats || focusStats.date !== dateKey()) {
  focusStats = { date: dateKey(), minutes: 0, sessions: 0 };
  storeSet(FOCUS_KEY, focusStats);
}

if (!Array.isArray(state.tasks)) {
  const seed = state.lang === "bn"
    ? ["সাইটের নাম, লোগো ও রঙ চূড়ান্ত করুন", "প্রথম তিনটি AI টুল স্টার করুন", "২৫ মিনিটের একটি ফোকাস সেশন শেষ করুন"]
    : ["Finalise the site name, logo and colours", "Star your first three AI tools", "Finish one 25-minute focus session"];
  state.tasks = seed.map((text, index) => ({ id: Date.now() + index, text, done: false, at: Date.now() - index * 60000 }));
  storeSet(TASK_KEY, state.tasks);
}

if (!Array.isArray(state.notes)) state.notes = [];

let deferredPrompt = null;

const els = {
  pageTitle: $("#pageTitle"),
  pageSub: $("#pageSub"),
  sidebar: $("#sidebar"),
  backdrop: $("#backdrop"),
  scrollProgress: $("#scrollProgress"),
  liveClock: $("#liveClock"),
  liveDate: $("#liveDate"),
  todayLabel: $("#todayLabel"),
  greeting: $("#greeting"),
  toolGrid: $("#toolGrid"),
  toolEmpty: $("#toolEmpty"),
  toolCount: $("#toolCount"),
  categoryChips: $("#categoryChips"),
  toolSearch: $("#toolSearch"),
  favOnlyBtn: $("#favOnlyBtn"),
  toolSort: $("#toolSort"),
  featuredTools: $("#featuredTools"),
  articleGrid: $("#articleGrid"),
  articleChips: $("#articleChips"),
  taskList: $("#taskList"),
  taskEmpty: $("#taskEmpty"),
  taskInput: $("#taskInput"),
  taskProgress: $("#taskProgress"),
  taskProgressText: $("#taskProgressText"),
  noteList: $("#noteList"),
  noteEmpty: $("#noteEmpty"),
  noteTitle: $("#noteTitle"),
  noteBody: $("#noteBody"),
  noteStatus: $("#noteStatus"),
  noteCount: $("#noteCount"),
  timerLabel: $("#timerLabel"),
  timerStartLabel: $("#timerStartLabel"),
  timerRingFg: $("#timerRingFg"),
  timerModeLabel: $("#timerModeLabel"),
  timerCard: $(".timer-card"),
  focusToday: $("#focusToday"),
  modalRoot: $("#modalRoot"),
  paletteRoot: $("#paletteRoot"),
  paletteInput: $("#paletteInput"),
  paletteList: $("#paletteList"),
  toasts: $("#toasts"),
  navTaskBadge: $("#navTaskBadge"),
  taskBadge: $("#taskBadge")
};

function catLabel(cat) {
  return state.lang === "bn" ? CAT_LABEL[cat] || cat : cat;
}

function badgeLabel(badge) {
  const pair = BADGE_LABEL[badge] || [badge, badge];
  return state.lang === "bn" ? pair[1] : pair[0];
}

function badgeClass(badge) {
  return badge === "POPULAR" ? "badge-gold" : badge === "FREE" ? "badge-green" : badge === "FREEMIUM" ? "badge-cyan" : "badge-violet";
}

function tagLabel(tag) {
  return state.lang === "bn" ? TAG_LABEL[tag] || tag : tag;
}

function toolDesc(tool) {
  return state.lang === "bn" ? tool.dBn : tool.dEn;
}

function monogram(name) {
  const clean = name.replace(/[^A-Za-z0-9]/g, "");
  return (clean.charAt(0) || "A").toUpperCase();
}

function toolColor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) {
    hash = (hash * 31 + name.charCodeAt(i)) % 360;
  }
  return "linear-gradient(135deg, hsl(" + hash + " 88% 64%), hsl(" + ((hash + 42) % 360) + " 82% 50%))";
}

function toast(message, kind) {
  const node = document.createElement("div");
  node.className = "toast" + (kind === "err" ? " err" : "");
  node.textContent = message;
  els.toasts.appendChild(node);
  setTimeout(() => {
    node.classList.add("out");
    setTimeout(() => node.remove(), 300);
  }, 3000);
}

function setTheme(theme, announce) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {}
  $("#themeBtn").setAttribute("aria-pressed", String(theme === "light"));
  if (announce) {
    toast(theme === "light" ? t("Light theme", "লাইট থিম") : t("Dark theme", "ডার্ক থিম"));
  }
}

function toggleTheme() {
  setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light", true);
}

function applyLang(lang) {
  state.lang = lang === "en" ? "en" : "bn";
  document.documentElement.lang = state.lang;
  try {
    localStorage.setItem(LANG_KEY, state.lang);
  } catch (error) {}

  $$("[data-en][data-bn]").forEach((el) => {
    el.textContent = state.lang === "bn" ? el.dataset.bn : el.dataset.en;
  });

  $$("[data-en-placeholder]").forEach((el) => {
    el.placeholder = state.lang === "bn"
      ? el.dataset.bnPlaceholder || el.placeholder
      : el.dataset.enPlaceholder || el.placeholder;
  });

  $("#langBtn").textContent = state.lang === "bn" ? "EN" : "বাং";

  renderTools();
  renderChips();
  renderFeatured();
  renderArticleChips();
  renderArticles();
  renderTasks();
  renderNotes();
  renderStats();
  updateTimerUI();
  updatePageMeta();
  updateClock();
}

function updatePageMeta() {
  const meta = TITLES[state.route] || TITLES.home;
  const doc = state.lang === "bn" ? meta.doc[1] : meta.doc[0];
  const sub = state.lang === "bn" ? meta.sub[1] : meta.sub[0];
  els.pageTitle.textContent = doc;
  els.pageSub.textContent = sub;
  document.title = doc + " — Polash AI OS";
}

function updateClock() {
  const now = new Date();
  const langLocale = locale();
  const time = new Intl.DateTimeFormat(langLocale, { hour: "2-digit", minute: "2-digit", hour12: false }).format(now);
  const date = new Intl.DateTimeFormat(langLocale, { weekday: "long", day: "numeric", month: "long" }).format(now);
  els.liveClock.textContent = time;
  els.liveDate.textContent = date;
  els.todayLabel.textContent = date;

  const hour = now.getHours();
  let greeting;
  if (hour < 5) greeting = t("Good night", "শুভ রাত্রি");
  else if (hour < 12) greeting = t("Good morning", "শুভ সকাল");
  else if (hour < 16) greeting = t("Good afternoon", "শুভ দুপুর");
  else if (hour < 20) greeting = t("Good evening", "শুভ সন্ধ্যা");
  else greeting = t("Good evening", "শুভ সন্ধ্যা");
  els.greeting.textContent = greeting;
}

function go(route) {
  if (!TITLES[route]) route = "home";
  if (location.hash === "#" + route) {
    activate(route);
  } else {
    location.hash = route;
  }
}

function activate(route) {
  if (!TITLES[route]) route = "home";
  state.route = route;
  const viewId = "view" + route.charAt(0).toUpperCase() + route.slice(1);
  $$(".view-panel").forEach((panel) => {
    panel.hidden = panel.id !== viewId;
  });
  $$(".nav-item[data-route]").forEach((link) => {
    const isActive = link.dataset.route === route;
    link.classList.toggle("active", isActive && (route !== "workspace" || link.dataset.tab === state.wsTab));
  });
  if (route === "workspace") {
    setWsTab(state.wsTab || "tasks");
  }
  updatePageMeta();
  closeSidebar();
  window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function setWsTab(tab) {
  if (!["tasks", "notes", "focus"].includes(tab)) tab = "tasks";
  state.wsTab = tab;
  $$(".tab[data-ws]").forEach((button) => {
    const on = button.dataset.ws === tab;
    button.classList.toggle("active", on);
    button.setAttribute("aria-selected", String(on));
  });
  ["tasks", "notes", "focus"].forEach((key) => {
    const panel = $("#ws" + key.charAt(0).toUpperCase() + key.slice(1));
    if (panel) panel.hidden = key !== tab;
  });
  $$(".nav-item[data-tab]").forEach((link) => {
    link.classList.toggle("active", state.route === "workspace" && link.dataset.tab === tab);
  });
}

function openSidebar() {
  els.sidebar.classList.add("open");
  els.backdrop.hidden = false;
}

function closeSidebar() {
  els.sidebar.classList.remove("open");
  els.backdrop.hidden = true;
}

function filterTools() {
  const term = state.q.trim().toLowerCase();
  let list = TOOLS.filter((tool) => {
    const matchCat = state.cat === "All" || tool.c === state.cat;
    const matchFav = !state.favOnly || state.favs.has(tool.n);
    const haystack = (tool.n + " " + tool.c + " " + tool.tags.join(" ") + " " + tool.dEn + " " + tool.dBn).toLowerCase();
    return matchCat && matchFav && (!term || haystack.includes(term));
  });

  if (state.sort === "name") {
    list.sort((a, b) => a.n.localeCompare(b.n));
  } else if (state.sort === "category") {
    list.sort((a, b) => a.c.localeCompare(b.c) || a.n.localeCompare(b.n));
  } else {
    const rank = { POPULAR: 0, FREE: 1, FREEMIUM: 2, PAID: 3 };
    list.sort((a, b) => rank[a.b] - rank[b.b] || a.n.localeCompare(b.n));
  }

  return list;
}

function renderTools() {
  const list = filterTools();
  els.toolGrid.innerHTML = list.map((tool) => {
    const starred = state.favs.has(tool.n);
    return '<article class="tool-card">' +
      '<div class="tool-top">' +
      '<span class="tool-logo" style="background:' + toolColor(tool.n) + '">' + esc(monogram(tool.n)) + '</span>' +
      '<div><h3 class="tool-name">' + esc(tool.n) + '</h3><span class="tool-cat">' + esc(catLabel(tool.c)) + '</span></div>' +
      '<span class="badge ' + badgeClass(tool.b) + '">' + esc(badgeLabel(tool.b)) + '</span>' +
      '</div>' +
      '<p class="tool-desc">' + esc(toolDesc(tool)) + '</p>' +
      '<div class="tool-tags">' + tool.tags.map((tag) => '<span class="tag">' + esc(tag) + '</span>').join("") + '</div>' +
      '<div class="tool-actions">' +
      '<button class="fav-btn' + (starred ? " on" : "") + '" type="button" data-fav="' + esc(tool.n) + '" aria-label="' + esc(t("Star tool", "টুল স্টার করুন")) + '" aria-pressed="' + starred + '">' + ICONS.star + '</button>' +
      '<a class="launch-btn" href="' + esc(tool.u) + '" target="_blank" rel="noopener">' + esc(t("Open tool", "টুল খুলুন")) + ICONS.external + '</a>' +
      '</div>' +
      '</article>';
  }).join("");
  els.toolEmpty.hidden = list.length > 0;
  els.toolCount.textContent = list.length + " / " + TOOLS.length;
  els.favOnlyBtn.classList.toggle("active", state.favOnly);
  els.favOnlyBtn.setAttribute("aria-pressed", String(state.favOnly));
}

function renderChips() {
  const cats = ["All"].concat(Array.from(new Set(TOOLS.map((tool) => tool.c))));
  els.categoryChips.innerHTML = cats.map((cat) => {
    const label = cat === "All" ? t("All", "সব") : catLabel(cat);
    const count = cat === "All" ? TOOLS.length : TOOLS.filter((tool) => tool.c === cat).length;
    return '<button type="button" class="chip' + (state.cat === cat ? " active" : "") + '" data-cat="' + esc(cat) + '">' +
      esc(label) + ' <span style="opacity:.6;font-size:10px">' + count + '</span></button>';
  }).join("");
}

function renderFeatured() {
  const starred = TOOLS.filter((tool) => state.favs.has(tool.n));
  const popular = TOOLS.filter((tool) => !state.favs.has(tool.n) && tool.b === "POPULAR");
  const list = starred.concat(popular).slice(0, 4);
  els.featuredTools.innerHTML = list.map((tool) => {
    return '<a class="feature-card" href="' + esc(tool.u) + '" target="_blank" rel="noopener">' +
      '<span class="feature-logo" style="background:' + toolColor(tool.n) + '">' + esc(monogram(tool.n)) + '</span>' +
      '<span class="feature-text"><b>' + esc(tool.n) + '</b><small>' + esc(catLabel(tool.c)) + '</small></span>' +
      ICONS.external +
      '</a>';
  }).join("");
}

function renderArticleChips() {
  const tags = ["All"].concat(Array.from(new Set(ARTICLES.map((article) => article.tag))));
  els.articleChips.innerHTML = tags.map((tag) => {
    const label = tag === "All" ? t("All", "সব") : tagLabel(tag);
    return '<button type="button" class="chip' + (state.articleTag === tag ? " active" : "") + '" data-atag="' + esc(tag) + '">' + esc(label) + '</button>';
  }).join("");
}

function renderArticles() {
  const list = ARTICLES.map((article, index) => ({ article, index }))
    .filter((entry) => state.articleTag === "All" || entry.article.tag === state.articleTag);

  els.articleGrid.innerHTML = list.map(({ article, index }) => {
    const title = state.lang === "bn" ? article.tBn : article.tEn;
    const desc = state.lang === "bn" ? article.dBn : article.dEn;
    return '<button class="article-card" type="button" data-article="' + index + '">' +
      '<span class="article-top"><span class="badge badge-violet">' + esc(tagLabel(article.tag)) + '</span><span class="article-meta">' + article.read + " " + esc(t("min read", "মিনিট পড়া")) + '</span></span>' +
      '<h3>' + esc(title) + '</h3>' +
      '<p>' + esc(desc) + '</p>' +
      '<span class="card-link">' + esc(t("Read article", "পড়ুন")) + '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg></span>' +
      '</button>';
  }).join("");
}

function formatShortDate(timestamp) {
  return new Intl.DateTimeFormat(locale(), { day: "numeric", month: "short" }).format(new Date(timestamp));
}

function renderTasks() {
  const list = state.tasks.slice().sort((a, b) => Number(a.done) - Number(b.done) || b.at - a.at);
  els.taskList.innerHTML = list.map((task) => {
    return '<li class="task-item' + (task.done ? " done" : "") + '" data-id="' + task.id + '">' +
      '<button class="task-check" type="button" data-task-toggle="' + task.id + '" aria-label="' + esc(t("Toggle task", "টাস্ক বদলান")) + '">' + ICONS.check + '</button>' +
      '<span class="task-text">' + esc(task.text) + '</span>' +
      '<span class="task-date">' + esc(formatShortDate(task.at)) + '</span>' +
      '<button class="task-del" type="button" data-task-del="' + task.id + '" aria-label="' + esc(t("Delete task", "টাস্ক মুছুন")) + '">' + ICONS.trash + '</button>' +
      '</li>';
  }).join("");

  const total = state.tasks.length;
  const done = state.tasks.filter((task) => task.done).length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  els.taskProgress.style.width = percent + "%";
  els.taskProgressText.textContent = done + " / " + total;
  els.taskEmpty.hidden = total > 0;
  els.taskBadge.textContent = String(total - done);
  els.taskBadge.dataset.zero = total - done === 0 ? "true" : "false";
}

function saveTasks() {
  storeSet(TASK_KEY, state.tasks);
}

function renderNotes() {
  const list = state.notes.slice().sort((a, b) => b.updated - a.updated);
  els.noteList.innerHTML = list.map((note) => {
    const title = note.title || t("Untitled note", "শিরোনামহীন নোট");
    const preview = note.body.replace(/\s+/g, " ").slice(0, 90);
    return '<div class="note-item" data-id="' + note.id + '">' +
      '<div class="note-body"><b>' + esc(title) + '</b><small>' + esc(preview || t("No content", "কোনো বিষয়বস্তু নেই")) + '</small>' +
      '<time>' + esc(formatShortDate(note.updated)) + '</time></div>' +
      '<div class="note-actions">' +
      '<button type="button" data-note-open="' + note.id + '" aria-label="' + esc(t("Edit note", "নোট সম্পাদনা")) + '">' + ICONS.pencil + '</button>' +
      '<button type="button" data-note-del="' + note.id + '" aria-label="' + esc(t("Delete note", "নোট মুছুন")) + '">' + ICONS.trash + '</button>' +
      '</div></div>';
  }).join("");
  els.noteEmpty.hidden = list.length > 0;
  els.noteCount.textContent = String(list.length);
}

function renderStats() {
  const open = state.tasks.filter((task) => !task.done).length;
  const done = state.tasks.length - open;
  const minutes = focusStats.minutes;
  const sessions = focusStats.sessions;

  $("#statTools").textContent = TOOLS.length;
  $("#statFav").textContent = state.favs.size;
  $("#statTasks").textContent = open;
  $("#statTasksDelta").textContent = t(done + " done", done + " সম্পন্ন");
  $("#statFocus").textContent = t(minutes + "m", minutes + " মিনিট");
  $("#statSessions").textContent = t(sessions + " sessions", sessions + " সেশন");

  $("#todayTasks").textContent = open;
  $("#todayFocus").textContent = minutes;
  $("#todayFavs").textContent = state.favs.size;
  els.navTaskBadge.textContent = String(open);
  els.navTaskBadge.dataset.zero = open === 0 ? "true" : "false";
}

function updateFocusText() {
  els.focusToday.textContent = t(
    "Today: " + focusStats.minutes + " minutes · " + focusStats.sessions + " sessions",
    "আজ: " + focusStats.minutes + " মিনিট · " + focusStats.sessions + " সেশন"
  );
}

const RING_LENGTH = 2 * Math.PI * 86;

function updateTimerUI() {
  const timer = state.timer;
  const minutes = Math.floor(timer.remaining / 60);
  const seconds = timer.remaining % 60;
  els.timerLabel.textContent = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");

  const progress = timer.duration > 0 ? timer.remaining / timer.duration : 0;
  els.timerRingFg.style.strokeDasharray = RING_LENGTH.toFixed(2);
  els.timerRingFg.style.strokeDashoffset = (RING_LENGTH * (1 - progress)).toFixed(2);

  let modeText;
  const isFocus = timer.mode === "focus";
  if (timer.remaining === 0) {
    modeText = t("Session complete", "সেশন সম্পন্ন");
  } else if (timer.running) {
    modeText = isFocus ? t("Focusing…", "মনোযোগ চলছে…") : t("On a break", "বিরতিতে");
  } else if (timer.remaining < timer.duration) {
    modeText = t("Paused", "বিরতিতে");
  } else {
    modeText = isFocus ? t("Ready to focus", "ফোকাসের জন্য প্রস্তুত") : t("Ready for a break", "বিরতির জন্য প্রস্তুত");
  }
  els.timerModeLabel.textContent = modeText;

  if (els.timerStartLabel) {
    if (timer.running) {
      els.timerStartLabel.textContent = t("Pause", "বিরতি");
    } else if (timer.remaining === 0) {
      els.timerStartLabel.textContent = t("Start again", "আবার শুরু");
    } else if (timer.remaining < timer.duration) {
      els.timerStartLabel.textContent = t("Resume", "চালিয়ে যান");
    } else {
      els.timerStartLabel.textContent = t("Start", "শুরু");
    }
  }

  els.timerCard.classList.toggle("breaktime", timer.mode === "break");
  els.timerCard.classList.toggle("done", timer.remaining === 0);
  $$(".timer-modes .chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.mode === timer.mode);
  });
  updateFocusText();
}

function startTimer() {
  const timer = state.timer;
  if (timer.running) {
    timer.running = false;
    clearInterval(timer.id);
    timer.id = null;
    updateTimerUI();
    return;
  }
  if (timer.remaining === 0) {
    timer.remaining = timer.duration;
  }
  timer.running = true;
  timer.id = setInterval(() => {
    if (timer.remaining > 0) timer.remaining -= 1;
    if (timer.remaining <= 0) {
      timer.remaining = 0;
      timer.running = false;
      clearInterval(timer.id);
      timer.id = null;
      completeSession();
    }
    updateTimerUI();
  }, 1000);
  updateTimerUI();
}

function completeSession() {
  if (state.timer.mode === "focus") {
    focusStats.minutes += Math.round(state.timer.duration / 60);
    focusStats.sessions += 1;
    focusStats.date = dateKey();
    storeSet(FOCUS_KEY, focusStats);
    renderStats();
    toast(t("Session complete · +25 focus minutes", "সেশন সম্পন্ন · +২৫ ফোকাস মিনিট"));
  } else {
    toast(t("Break over — back to work", "বিরতি শেষ — কাজে ফিরুন"));
  }
}

function resetTimer() {
  const timer = state.timer;
  timer.running = false;
  clearInterval(timer.id);
  timer.id = null;
  timer.remaining = timer.duration;
  updateTimerUI();
}

function setTimerMode(mode) {
  const timer = state.timer;
  timer.mode = mode;
  timer.duration = mode === "focus" ? 25 * 60 : 5 * 60;
  timer.remaining = timer.duration;
  timer.running = false;
  clearInterval(timer.id);
  timer.id = null;
  updateTimerUI();
}

function openArticle(index) {
  const article = ARTICLES[index];
  if (!article) return;
  const title = state.lang === "bn" ? article.tBn : article.tEn;
  const body = state.lang === "bn" ? article.bodyBn : article.bodyEn;
  openModal({
    tag: tagLabel(article.tag),
    title,
    meta: article.read + " " + t("min read", "মিনিট পড়া"),
    body
  });
}

function openModal(options) {
  els.modalRoot.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-label="' + esc(options.title) + '">' +
    '<div class="modal-head"><div><span class="modal-tag">' + esc(options.tag || "") + '</span><h2>' + esc(options.title) + '</h2></div>' +
    '<button class="modal-close" type="button" aria-label="' + esc(t("Close", "বন্ধ")) + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>' +
    (options.meta ? '<p class="modal-meta">' + esc(options.meta) + '</p>' : "") +
    '<div class="modal-body">' + options.body + '</div>' +
    '<div class="modal-foot"><button class="btn btn-ghost modal-close" type="button">' + esc(t("Close", "বন্ধ")) + '</button></div>' +
    '</div>';
  els.modalRoot.classList.add("open");
  els.modalRoot.setAttribute("aria-hidden", "false");
  const closeBtn = $(".modal-close", els.modalRoot);
  if (closeBtn) closeBtn.focus();
}

function closeModal() {
  els.modalRoot.classList.remove("open");
  els.modalRoot.setAttribute("aria-hidden", "true");
  els.modalRoot.innerHTML = "";
}

function copyLink() {
  const url = location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => toast(t("Link copied", "লিংক কপি হয়েছে"))).catch(() => toast(t("Could not copy link", "লিংক কপি করা যায়নি"), "err"));
    return;
  }
  const temp = document.createElement("textarea");
  temp.value = url;
  document.body.appendChild(temp);
  temp.select();
  try {
    document.execCommand("copy");
    toast(t("Link copied", "লিংক কপি হয়েছে"));
  } catch (error) {
    toast(t("Could not copy link", "লিংক কপি করা যায়নি"), "err");
  }
  temp.remove();
}

function shareSite() {
  const data = { title: "Polash AI OS 2.0", text: t("Build • Learn • Earn • Grow", "তৈরি • শিখুন • উপার্জন • বৃদ্ধি"), url: location.href };
  if (navigator.share) {
    navigator.share(data).catch(() => {});
    return;
  }
  copyLink();
}

function installApp() {
  if (!deferredPrompt) {
    toast(t("Use your browser menu → Install app", "ব্রাউজার মেনু → Install app ব্যবহার করুন"));
    return;
  }
  deferredPrompt.prompt();
  deferredPrompt.userChoice.finally(() => {
    deferredPrompt = null;
  });
}

function buildPaletteItems(query) {
  const q = query.trim().toLowerCase();
  const items = [];
  const matches = (label, keywords) => !q || (label + " " + (keywords || "")).toLowerCase().includes(q);

  const commands = [
    { label: t("Go to Dashboard", "ড্যাশবোর্ডে যান"), keywords: "home overview", hint: "1", icon: "home", run: () => go("home") },
    { label: t("Go to AI Tools", "AI টুলসে যান"), keywords: "tools library", hint: "2", icon: "grid", run: () => go("tools") },
    { label: t("Go to Insights", "ইনসাইটসে যান"), keywords: "articles blog", hint: "3", icon: "book", run: () => go("insights") },
    { label: t("Go to Workspace", "ওয়ার্কস্পেসে যান"), keywords: "tasks notes focus", hint: "4", icon: "check", run: () => go("workspace") },
    { label: t("Go to Contact", "যোগাযোগে যান"), keywords: "email whatsapp", hint: "5", icon: "arrow", run: () => go("contact") },
    { label: t("Add a task", "নতুন টাস্ক যোগ করুন"), keywords: "todo task", icon: "plus", run: () => { go("workspace"); setWsTab("tasks"); setTimeout(() => els.taskInput.focus(), 120); } },
    { label: t("Write a note", "নতুন নোট লিখুন"), keywords: "notes write", icon: "note", run: () => { go("workspace"); setWsTab("notes"); setTimeout(() => els.noteTitle.focus(), 120); } },
    { label: t("Start a focus session", "ফোকাস সেশন শুরু করুন"), keywords: "timer pomodoro", icon: "clock", run: () => { go("workspace"); setWsTab("focus"); if (!state.timer.running) startTimer(); } },
    { label: t("Toggle theme", "থিম বদলান"), keywords: "dark light appearance", icon: "moon", run: toggleTheme },
    { label: t("Switch language", "ভাষা বদলান"), keywords: "english bangla bengali", icon: "globe", run: () => applyLang(state.lang === "bn" ? "en" : "bn") },
    { label: t("Share this site", "সাইট শেয়ার করুন"), keywords: "share link", icon: "share", run: shareSite },
    { label: t("Copy page link", "পেজ লিংক কপি করুন"), keywords: "copy url", icon: "copy", run: copyLink }
  ];

  if (deferredPrompt) {
    commands.push({ label: t("Install app", "অ্যাপ ইনস্টল করুন"), keywords: "pwa install", icon: "download", run: installApp });
  }

  const navGroup = t("Navigate", "নেভিগেট");
  const actionGroup = t("Actions", "অ্যাকশন");
  const toolGroup = t("AI tools", "AI টুলস");

  commands.slice(0, 5).forEach((command) => {
    if (matches(command.label, command.keywords)) items.push({ group: navGroup, label: command.label, hint: command.hint, icon: command.icon, run: command.run });
  });
  commands.slice(5).forEach((command) => {
    if (matches(command.label, command.keywords)) items.push({ group: actionGroup, label: command.label, hint: command.hint || "", icon: command.icon, run: command.run });
  });

  let toolList = TOOLS.filter((tool) => {
    const haystack = (tool.n + " " + tool.c + " " + tool.tags.join(" ") + " " + tool.dEn).toLowerCase();
    return !q || haystack.includes(q);
  });
  if (!q) {
    toolList = TOOLS.filter((tool) => state.favs.has(tool.n)).concat(TOOLS.filter((tool) => tool.b === "POPULAR" && !state.favs.has(tool.n)));
  }
  toolList.slice(0, q ? 10 : 5).forEach((tool) => {
    items.push({
      group: toolGroup,
      label: tool.n,
      hint: catLabel(tool.c),
      iconText: monogram(tool.n),
      iconBg: toolColor(tool.n),
      run: () => window.open(tool.u, "_blank", "noopener")
    });
  });

  return items;
}

function renderPalette() {
  const items = state.palette.items;
  if (!items.length) {
    els.paletteList.innerHTML = '<p class="palette-empty">' + esc(t("No matches. Try another word.", "কিছু পাওয়া যায়নি। অন্য শব্দ চেষ্টা করুন।")) + '</p>';
    return;
  }
  let html = "";
  let group = null;
  items.forEach((item, index) => {
    if (item.group !== group) {
      group = item.group;
      html += '<div class="palette-group">' + esc(group) + '</div>';
    }
    const active = index === state.palette.active ? " active" : "";
    const icon = item.iconText
      ? '<span class="pi-ico" style="background:' + item.iconBg + ';color:#0b1020">' + esc(item.iconText) + '</span>'
      : '<span class="pi-ico">' + (ICONS[item.icon] || ICONS.arrow) + '</span>';
    html += '<button type="button" class="palette-item' + active + '" data-idx="' + index + '">' + icon +
      '<span class="pi-text">' + esc(item.label) + '</span>' +
      (item.hint ? '<span class="pi-hint">' + esc(item.hint) + '</span>' : "") + '</button>';
  });
  els.paletteList.innerHTML = html;
  const activeEl = $(".palette-item.active", els.paletteList);
  if (activeEl) activeEl.scrollIntoView({ block: "nearest" });
}

function openPalette() {
  state.palette.items = buildPaletteItems("");
  state.palette.active = 0;
  els.paletteInput.value = "";
  renderPalette();
  els.paletteRoot.classList.add("open");
  els.paletteRoot.setAttribute("aria-hidden", "false");
  setTimeout(() => els.paletteInput.focus(), 30);
}

function closePalette() {
  els.paletteRoot.classList.remove("open");
  els.paletteRoot.setAttribute("aria-hidden", "true");
}

function movePalette(step) {
  const count = state.palette.items.length;
  if (!count) return;
  state.palette.active = (state.palette.active + step + count) % count;
  renderPalette();
}

function runPaletteItem() {
  const item = state.palette.items[state.palette.active];
  if (!item) return;
  closePalette();
  item.run();
}

function exportData() {
  const payload = {
    app: "Polash AI OS",
    version: 2,
    exportedAt: new Date().toISOString(),
    favorites: Array.from(state.favs),
    tasks: state.tasks,
    notes: state.notes,
    focus: focusStats
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "polash-ai-os-backup.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast(t("Backup downloaded", "ব্যাকআপ ডাউনলোড হয়েছে"));
}

function resetWorkspace() {
  const ok = window.confirm(t(
    "Erase all tasks, notes, favorites and focus history stored on this device?",
    "এই ডিভাইসে সংরক্ষিত সব টাস্ক, নোট, ফেভারিট ও ফোকাস হিস্ট্রি মুছে ফেলবেন?"
  ));
  if (!ok) return;
  [FAV_KEY, TASK_KEY, NOTE_KEY, FOCUS_KEY].forEach(storeDel);
  window.location.reload();
}

function formValues() {
  return {
    name: $("#cName").value.trim(),
    email: $("#cEmail").value.trim(),
    need: $("#cNeed").value,
    message: $("#cMsg").value.trim()
  };
}

function messageText(values) {
  return "Name: " + values.name + "\nEmail: " + values.email + "\nNeed: " + values.need + "\n\n" + values.message;
}

function validateContact(values) {
  if (!values.name || !values.message || !/^\S+@\S+\.\S+$/.test(values.email)) {
    toast(t("Enter your name, a valid email and a message.", "নাম, বৈধ ইমেইল ও বার্তা দিন।"), "err");
    return false;
  }
  return true;
}

function bindEvents() {
  $("#menuBtn").addEventListener("click", () => {
    if (els.sidebar.classList.contains("open")) closeSidebar();
    else openSidebar();
  });

  els.backdrop.addEventListener("click", closeSidebar);

  $("#sbToggle").addEventListener("click", () => {
    document.body.classList.toggle("sb-collapsed");
  });

  $$(".nav-item[data-route]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      if (link.dataset.tab) state.wsTab = link.dataset.tab;
      go(link.dataset.route);
    });
  });

  $$("[data-goto]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.tab) state.wsTab = button.dataset.tab;
      go(button.dataset.goto);
    });
  });

  $("#paletteBtn").addEventListener("click", openPalette);
  $("#openPaletteHero").addEventListener("click", openPalette);

  $("#themeBtn").addEventListener("click", toggleTheme);
  $("#langBtn").addEventListener("click", () => applyLang(state.lang === "bn" ? "en" : "bn"));
  $("#avatarBtn").addEventListener("click", () => go("contact"));

  $("#toolSearch").addEventListener("input", (event) => {
    state.q = event.target.value;
    renderTools();
  });

  els.categoryChips.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-cat]");
    if (!chip) return;
    state.cat = chip.dataset.cat;
    renderChips();
    renderTools();
  });

  els.favOnlyBtn.addEventListener("click", () => {
    state.favOnly = !state.favOnly;
    renderTools();
  });

  els.toolSort.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderTools();
  });

  els.toolGrid.addEventListener("click", (event) => {
    const favButton = event.target.closest("[data-fav]");
    if (!favButton) return;
    const name = favButton.dataset.fav;
    if (state.favs.has(name)) {
      state.favs.delete(name);
      toast(t(name + " removed from starred", name + " স্টার তালিকা থেকে সরানো হয়েছে"));
    } else {
      state.favs.add(name);
      toast(t(name + " starred", name + " স্টার করা হয়েছে"));
    }
    storeSet(FAV_KEY, Array.from(state.favs));
    renderTools();
    renderFeatured();
    renderStats();
  });

  els.articleChips.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-atag]");
    if (!chip) return;
    state.articleTag = chip.dataset.atag;
    renderArticleChips();
    renderArticles();
  });

  els.articleGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-article]");
    if (!card) return;
    openArticle(Number(card.dataset.article));
  });

  $$(".tab[data-ws]").forEach((button) => {
    button.addEventListener("click", () => setWsTab(button.dataset.ws));
  });

  $("#taskForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const text = els.taskInput.value.trim();
    if (!text) {
      toast(t("Write a task first.", "আগে একটি টাস্ক লিখুন।"), "err");
      els.taskInput.focus();
      return;
    }
    state.tasks.push({ id: Date.now(), text, done: false, at: Date.now() });
    saveTasks();
    els.taskInput.value = "";
    renderTasks();
    renderStats();
    toast(t("Task added", "টাস্ক যোগ হয়েছে"));
  });

  els.taskList.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-task-toggle]");
    if (toggle) {
      const id = Number(toggle.dataset.taskToggle);
      const task = state.tasks.find((entry) => entry.id === id);
      if (task) {
        task.done = !task.done;
        saveTasks();
        renderTasks();
        renderStats();
      }
      return;
    }
    const del = event.target.closest("[data-task-del]");
    if (del) {
      const id = Number(del.dataset.taskDel);
      state.tasks = state.tasks.filter((entry) => entry.id !== id);
      saveTasks();
      renderTasks();
      renderStats();
    }
  });

  $("#clearDone").addEventListener("click", () => {
    const before = state.tasks.length;
    state.tasks = state.tasks.filter((task) => !task.done);
    if (before === state.tasks.length) {
      toast(t("Nothing completed yet", "এখনো কিছু সম্পন্ন হয়নি"));
      return;
    }
    saveTasks();
    renderTasks();
    renderStats();
    toast(t("Completed tasks cleared", "সম্পন্ন টাস্ক মুছে ফেলা হয়েছে"));
  });

  $("#noteForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = els.noteTitle.value.trim();
    const body = els.noteBody.value.trim();
    if (!title && !body) {
      toast(t("Add a title or some text first.", "আগে শিরোনাম বা কিছু লেখা দিন।"), "err");
      return;
    }
    if (state.editingNote) {
      const note = state.notes.find((entry) => entry.id === state.editingNote);
      if (note) {
        note.title = title;
        note.body = body;
        note.updated = Date.now();
      }
    } else {
      state.notes.unshift({ id: Date.now(), title, body, updated: Date.now() });
    }
    storeSet(NOTE_KEY, state.notes);
    state.editingNote = null;
    els.noteTitle.value = "";
    els.noteBody.value = "";
    els.noteStatus.textContent = t("Saved on this device", "এই ডিভাইসে সংরক্ষিত");
    setTimeout(() => { els.noteStatus.textContent = ""; }, 2400);
    renderNotes();
  });

  els.noteList.addEventListener("click", (event) => {
    const openBtn = event.target.closest("[data-note-open]");
    if (openBtn) {
      const note = state.notes.find((entry) => entry.id === Number(openBtn.dataset.noteOpen));
      if (!note) return;
      state.editingNote = note.id;
      els.noteTitle.value = note.title;
      els.noteBody.value = note.body;
      els.noteTitle.focus();
      els.noteStatus.textContent = t("Editing — save to update", "সম্পাদনা চলছে — আপডেট করতে সংরক্ষণ করুন");
      return;
    }
    const del = event.target.closest("[data-note-del]");
    if (del) {
      const id = Number(del.dataset.noteDel);
      state.notes = state.notes.filter((entry) => entry.id !== id);
      if (state.editingNote === id) {
        state.editingNote = null;
        els.noteTitle.value = "";
        els.noteBody.value = "";
      }
      storeSet(NOTE_KEY, state.notes);
      renderNotes();
      toast(t("Note deleted", "নোট মুছে ফেলা হয়েছে"));
    }
  });

  $$(".timer-modes .chip").forEach((chip) => {
    chip.addEventListener("click", () => setTimerMode(chip.dataset.mode));
  });
  $("#timerStart").addEventListener("click", startTimer);
  $("#timerReset").addEventListener("click", resetTimer);

  $("#exportData").addEventListener("click", exportData);
  $("#resetData").addEventListener("click", resetWorkspace);

  $("#sendWhatsApp").addEventListener("click", () => {
    const values = formValues();
    if (!validateContact(values)) return;
    window.open(PROFILE.whatsapp + "?text=" + encodeURIComponent(messageText(values)), "_blank", "noopener");
    $("#formStatus").textContent = t("Opening WhatsApp…", "WhatsApp খুলছে…");
  });

  $("#sendEmail").addEventListener("click", () => {
    const values = formValues();
    if (!validateContact(values)) return;
    location.href = "mailto:" + PROFILE.email + "?subject=" + encodeURIComponent("Project inquiry — " + values.need) + "&body=" + encodeURIComponent(messageText(values));
    $("#formStatus").textContent = t("Opening your email app…", "ইমেইল অ্যাপ খুলছে…");
  });

  $("#contactForm").addEventListener("submit", (event) => event.preventDefault());

  els.paletteRoot.addEventListener("click", (event) => {
    if (event.target === els.paletteRoot) closePalette();
    const item = event.target.closest("[data-idx]");
    if (item) {
      state.palette.active = Number(item.dataset.idx);
      runPaletteItem();
    }
  });

  els.paletteRoot.addEventListener("mousemove", (event) => {
    const item = event.target.closest("[data-idx]");
    if (!item) return;
    const index = Number(item.dataset.idx);
    if (index !== state.palette.active) {
      state.palette.active = index;
      $$(".palette-item", els.paletteList).forEach((node, nodeIndex) => {
        node.classList.toggle("active", nodeIndex === index);
      });
    }
  });

  els.paletteInput.addEventListener("input", (event) => {
    state.palette.items = buildPaletteItems(event.target.value);
    state.palette.active = 0;
    renderPalette();
  });

  els.modalRoot.addEventListener("click", (event) => {
    if (event.target === els.modalRoot || event.target.closest(".modal-close")) closeModal();
  });

  document.addEventListener("keydown", (event) => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (els.paletteRoot.classList.contains("open")) closePalette();
      else openPalette();
      return;
    }
    if (event.key === "Escape") {
      closePalette();
      closeModal();
      closeSidebar();
      return;
    }
    if (els.paletteRoot.classList.contains("open")) {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        movePalette(1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        movePalette(-1);
      } else if (event.key === "Enter") {
        event.preventDefault();
        runPaletteItem();
      }
      return;
    }
    if (typing) return;
    if (event.key === "/") {
      event.preventDefault();
      openPalette();
      return;
    }
    if (/^[1-5]$/.test(event.key)) {
      go(["home", "tools", "insights", "workspace", "contact"][Number(event.key) - 1]);
    }
  });

  window.addEventListener("hashchange", () => {
    const route = location.hash.replace("#", "") || "home";
    activate(route);
  });

  window.addEventListener("scroll", () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0;
    els.scrollProgress.style.width = value + "%";
  }, { passive: true });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
  });

  window.addEventListener("online", () => toast(t("Back online", "আবার অনলাইনে")));
  window.addEventListener("offline", () => toast(t("Offline mode — everything still works", "অফলাইন মোড — সবকিছু এখনো কাজ করে")));
}

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .1 });
  $$(".reveal:not(.visible)").forEach((el) => observer.observe(el));
}

function init() {
  setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark", false);
  bindEvents();
  applyLang(state.lang);
  updateClock();
  setInterval(updateClock, 1000);
  $("#year").textContent = new Date().getFullYear();
  const initial = location.hash.replace("#", "");
  activate(TITLES[initial] ? initial : "home");
  observeReveals();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
}

init();
