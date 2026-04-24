// Shared data for all three homepage directions.
// Single source of truth so all variants stay in sync.

const PROFILE = {
  name: 'Jaehoon Choi',
  koreanName: '최재훈',
  role: 'Ph.D. Student',
  program: 'Interdisciplinary Program in Artificial Intelligence',
  institution: 'Seoul National University',
  lab: 'Human-Centered Computing Lab (HCCL)',
  labUrl: 'https://hcclab.notion.site/Human-Centered-Computing-Lab-HCCL-3fc9cecbb5a642d1ada697c83430dc47',
  email: 'hoon95@snu.ac.kr',
  linkedin: 'https://www.linkedin.com/in/jaehoon-choi-9299b7343/',
  linkedinHandle: 'jaehoon-choi',
  github: 'https://github.com/halfhoon',
  githubHandle: 'halfhoon',
  scholar: 'https://scholar.google.com/citations?user=P-nJLYoAAAAJ&hl=ko&oi=sra',
  scholarHandle: 'Jaehoon Choi',
  photo: 'assets/photo-kyoto.jpeg',
  // Add more photos here — the hero slider auto-rotates through them.
  photos: ['assets/photo-kyoto.jpeg', 'assets/photo-italy.jpeg', 'assets/photo-osaka.jpeg'],
  photoPositions: {
    'assets/photo-italy.jpeg': '72% 38%',
  },
};

const ABOUT_PARAGRAPHS = [
  "I'm a Ph.D. student in the Interdisciplinary Program in Artificial Intelligence at Seoul National University, working in the Human-Centered Computing Lab (HCCL).",
  "My research explores the evolving relationship between people and AI — at the intersection of human–computer interaction (HCI) and human–AI interaction (HAI). I study how AI shapes human experience, how people relate to AI as a social presence in everyday life, and how bias and fairness emerge in multimodal AI systems.",
  "My current work spans AI-mediated content experiences, conversational interaction, and accessible technology. I welcome interdisciplinary collaboration with researchers, designers, and developers building more human-centered AI.",
];

const RESEARCH_INTERESTS = [
  { tag: 'HCI', label: 'Human–Computer Interaction', desc: 'Designing how people think, feel, and act through technology.' },
  { tag: 'HAI', label: 'Human–AI Interaction', desc: 'Understanding how people relate to AI as a social presence.' },
  { tag: 'A11Y', label: 'Accessibility', desc: 'Building technology that meets people where they are.' },
  { tag: 'CA', label: 'Conversational Agents', desc: 'Designing voice and dialogue systems that listen well.' },
  { tag: 'COL', label: 'Human–AI Collaboration', desc: 'Exploring how people work with intelligent systems.' },
  { tag: 'MM', label: 'Multimodal AI & Fairness', desc: 'Revealing bias across voice, image, and text.' },
];

const EDUCATION = [
  {
    school: 'Seoul National University',
    degree: "Interdisciplinary Program in Artificial Intelligence (Integrated Master's & Ph.D.)",
    dates: 'Sep 2024 – Present',
    current: true,
  },
  {
    school: 'Kyung Hee University',
    degree: "Master's in Business Administration",
    dates: 'Mar 2021 – Aug 2023',
  },
];

const NOW_RESEARCH = [
  "AI delegation — when and how people hand decisions to AI",
  "Role & identity delegation — how AI substitutes for our social standing",
  "MLLM bias — surfacing asymmetries across voice, image, and text",
  "AI-Mediated Communication (AIMC)",
];

const NOW_OFFSCREEN = [
  { label: 'Wrestling', place: 'Seoul Wrestling Center', since: 2025, img: 'assets/offscreen-wrestling.jpeg' },
  { label: 'Jiu-jitsu',  place: 'Urban Jiu-Jitsu',        since: 2013, img: 'assets/offscreen-jiujitsu.jpeg' },
];

const NOW = [
  "Preparing five submissions for ACL 2026 and CHI 2026.",
  "Running studies on gender matching bias in multimodal AI teammates.",
  "Thinking about how pragmatic markers (\"um,\" \"I feel you\") reshape trust in voice agents.",
  "Reading about attribution theory and workplace stress in early-career employees.",
];

// Year, venue tier, topic tags drive filters and grouping.
const PUBLICATIONS = [
  {
    year: 2026, status: 'to appear', tier: 'findings',
    venueShort: 'ACL Findings', venueLong: 'Findings of the Association for Computational Linguistics: ACL 2026',
    title: 'Whose Voice, Whose Avatar? Gender Matching Bias in Multimodal AI Teammates',
    authors: [
      { name: 'Kyusik Kim', equal: true },
      { name: 'Jaehoon Choi', me: true, equal: true },
      { name: 'Hyunwoo Yoo' },
      { name: 'Bongwon Suh' },
    ],
    tags: ['HAI', 'Multimodal', 'Fairness'],
    abstract: 'How do people respond when an AI teammate\'s voice and avatar gender don\'t match? We find systematic trust and performance shifts tied to gender congruence across modalities.',
    scope: 'international',
  },
  {
    year: 2026, tier: 'full',
    venueShort: 'CHI', venueLong: 'Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems',
    title: '"What Keeps Fans on the Silent Field?": Understanding Lean-Back Football Fans via AI Sports Broadcasting in Non-Event Time',
    authors: [
      { name: 'Kyusik Kim' },
      { name: 'Jaehoon Choi', me: true },
      { name: 'Hoyeol Yang' },
      { name: 'Hyunsoo Choi' },
      { name: 'Minchae Kim' },
      { name: 'Minjeong Shin' },
      { name: 'Bongwon Suh' },
    ],
    tags: ['HCI', 'AI-Mediated'],
    doi: 'https://dl.acm.org/doi/full/10.1145/3772318.3791932',
    abstract: 'Lean-back football fans stay tuned during the quiet stretches between plays. We study how AI broadcast augmentation shapes engagement in non-event time.',
    scope: 'international',
  },
  {
    year: 2026, tier: 'poster',
    venueShort: 'CHI Poster', venueLong: 'Poster at the 2026 CHI Conference on Human Factors in Computing Systems',
    title: '"What Can I Control?": Designing an Attribution Reframing Chatbot for Early-Career Employees\' Workplace Stress Management',
    authors: [
      { name: 'Jung Lee' },
      { name: 'Jaehoon Choi', me: true },
      { name: 'Hyungwoo Song' },
      { name: 'Minjeong Shin' },
      { name: 'Bongwon Suh' },
    ],
    tags: ['HAI', 'Wellbeing', 'Chatbot'],
    doi: 'https://doi.org/10.1145/3772363.3798873',
    abstract: 'A chatbot that helps early-career employees reframe workplace stressors through attribution theory — distinguishing what\'s controllable from what isn\'t.',
    scope: 'international',
  },
  {
    year: 2026, status: 'to appear', tier: 'findings',
    venueShort: 'ACL Findings', venueLong: 'Findings of the Association for Computational Linguistics: ACL 2026',
    title: 'Visual Interference in Speech Evaluation: Cultural Asymmetry and Cross-Modal Bias in MLLMs',
    authors: [
      { name: 'Kyusik Kim' },
      { name: 'Hyunwoo Yoo' },
      { name: 'Jaehoon Choi', me: true },
      { name: 'Gail Rosen' },
      { name: 'Bongwon Suh' },
    ],
    tags: ['Multimodal', 'Fairness'],
    abstract: 'Visual context systematically biases speech evaluation in multimodal LLMs, with asymmetric effects across cultural groups.',
    scope: 'international',
  },
  {
    year: 2026, status: 'to appear', tier: 'findings',
    venueShort: 'ACL Findings', venueLong: 'Findings of the Association for Computational Linguistics: ACL 2026',
    title: 'CliniCAST: Benchmarking Acoustic Grounding and Text Dominance in Medical Triage',
    authors: [
      { name: 'Kyusik Kim' },
      { name: 'Hyunwoo Yoo' },
      { name: 'Jaehoon Choi', me: true },
      { name: 'Kitae Kim' },
      { name: 'Gail Rosen' },
      { name: 'Bongwon Suh' },
    ],
    tags: ['Multimodal', 'Healthcare'],
    abstract: 'A benchmark for medical triage that tests whether multimodal models truly listen or just read — text dominance persists when acoustic cues matter most.',
    scope: 'international',
  },
  {
    year: 2025, tier: 'ea',
    venueShort: 'CHI EA', venueLong: 'Extended Abstracts of the 2025 CHI Conference on Human Factors in Computing Systems',
    title: '"I feel you, but…": Exploring the Boundaries of Pragmatic Markers in Real-time Voice-based Conversational Agents',
    authors: [
      { name: 'Minjeong Shin', equal: true },
      { name: 'Jaehoon Choi', me: true, equal: true },
      { name: 'Hyungwoo Song' },
      { name: 'Junghwan Kim' },
      { name: 'Bongwon Suh' },
    ],
    tags: ['HAI', 'Voice', 'Conversation'],
    doi: 'https://doi.org/10.1145/3706599.3719797',
    abstract: 'Pragmatic markers like "I feel you" make voice agents warmer — until they don\'t. We map where empathy cues land and where they break trust.',
    scope: 'international',
  },
  {
    year: 2025, tier: 'full', status: 'demo',
    venueShort: 'ASSETS', venueLong: 'The International ACM SIGACCESS Conference on Computers and Accessibility',
    title: 'AltCAT: An Alt Text Authoring Tool with Automatic Generation and Culturally-Aware Translation',
    authors: [
      { name: 'Hyungwoo Song' },
      { name: 'Jaehoon Choi', me: true },
      { name: 'Minjeong Shin' },
      { name: 'Hyunggu Jung' },
      { name: 'Bongwon Suh' },
    ],
    tags: ['A11Y', 'Multimodal'],
    doi: 'https://doi.org/10.1145/3663547.3759732',
    abstract: 'An alt-text authoring tool that generates descriptions and adapts them across cultures — so blind and low-vision readers encounter images on their own terms.',
    scope: 'international',
  },
  {
    year: 2025, tier: 'full', status: 'demo',
    venueShort: 'IUI', venueLong: 'The ACM Conference on Intelligent User Interfaces',
    title: 'AltAuthor: A Context-Aware Alt Text Authoring Tool with Image Classification and LMM-Powered Accessibility Compliance',
    authors: [
      { name: 'Hyungwoo Song' },
      { name: 'Minjeong Shin' },
      { name: 'Yeonjoon Kim' },
      { name: 'Kyochul Jang' },
      { name: 'Jaehoon Choi', me: true },
      { name: 'Hyunggu Jung' },
      { name: 'Bongwon Suh' },
    ],
    tags: ['A11Y', 'HCI'],
    doi: 'https://doi.org/10.1145/3708557.3716366',
    abstract: 'Context-aware alt text, authored with the help of a large multimodal model — grounded in accessibility compliance, not guesswork.',
    scope: 'international',
  },
  {
    year: 2025, tier: 'domestic',
    venueShort: 'HCIK', venueLong: 'Proceedings of HCI Korea 2025',
    title: 'Design Guidelines for Enhancing Korean Voice Assistants with Discourse Markers Using LLMs',
    authors: [
      { name: 'Minjeong Shin', equal: true },
      { name: 'Jaehoon Choi', me: true, equal: true },
      { name: 'Junghwan Kim' },
      { name: 'Hyungwoo Song' },
      { name: 'Bongwon Suh' },
    ],
    tags: ['HAI', 'Voice', 'Korean'],
    abstract: 'Design guidelines for adding natural discourse markers to Korean voice assistants, drawing on LLM-generated alternatives.',
    scope: 'domestic',
  },
  {
    year: 2025, tier: 'domestic',
    venueShort: 'HCIK', venueLong: 'Proceedings of HCI Korea 2025',
    title: 'Proposal of a Personalized Multimedia E-book System Using Generative AI',
    authors: [
      { name: 'Hyeonseok Jeon', equal: true },
      { name: 'Yeonjoon Kim', equal: true },
      { name: 'Kyochul Jang' },
      { name: 'Minjeong Shin' },
      { name: 'Jaehoon Choi', me: true },
      { name: 'Bongwon Suh' },
    ],
    tags: ['AI-Mediated', 'Reading'],
    abstract: 'A personalized multimedia e-book system built on generative AI — reading as an adaptive, multisensory experience.',
    scope: 'domestic',
  },
  {
    year: 2025, tier: 'domestic',
    venueShort: 'HCIK', venueLong: 'Proceedings of HCI Korea 2025',
    title: 'Exploring the Use of Assistive Technology for Students with Disabilities in the Last Five Years: A Literature Review',
    authors: [
      { name: 'Hyungwoo Song' },
      { name: 'Seungbae Seo' },
      { name: 'Junghwan Kim' },
      { name: 'Yeonjoon Kim' },
      { name: 'Minjeong Shin' },
      { name: 'Kyochul Jang' },
      { name: 'Jaehoon Choi', me: true },
      { name: 'Hyunggu Jung' },
      { name: 'Bongwon Suh' },
    ],
    tags: ['A11Y'],
    abstract: 'A five-year literature review on assistive technology adoption among students with disabilities.',
    scope: 'domestic',
  },
  {
    year: 2023, tier: 'journal',
    venueShort: 'JIIS', venueLong: 'Journal of Intelligence and Information Systems',
    title: 'Comparing Corporate and Public ESG Perceptions Using Text Mining and ChatGPT Analysis: Based on Sustainability Reports and Social Media',
    authors: [
      { name: 'Jaehoon Choi', me: true },
      { name: 'Sung-Byung Yang' },
      { name: 'Sang-Hyeak Yoon' },
    ],
    tags: ['NLP', 'ESG'],
    abstract: 'Text mining meets ChatGPT to compare how corporations describe their ESG efforts versus how the public perceives them online.',
    scope: 'domestic',
  },
];

// Convert "Sung-Byung Yang" or "Kyusik Kim" to "Yang S.-B." / "Kim K." style.
// Me (author.me === true) stays full-name for self-highlight.
function abbrevName(full) {
  const parts = full.trim().split(/\s+/);
  if (parts.length < 2) return full;
  const last = parts[parts.length - 1];
  const firsts = parts.slice(0, -1).join(' ');
  const initials = firsts.split(/[\s-]/).map(w => w[0]).filter(Boolean);
  // Preserve hyphen in compound given names (e.g. Sung-Byung -> S.-B.)
  const hyphenated = firsts.includes('-');
  const init = hyphenated ? initials.join('.-') + '.' : initials.join('. ') + '.';
  return `${last} ${init}`;
}

// Helper — format authors with current me bolded, equal-contributor asterisks.
function formatAuthors(authors, { meStyle = 'italic' } = {}) {
  return authors.map((a, i) => {
    const suffix = a.equal ? '*' : '';
    if (a.me) {
      return (
        <span key={i}>
          <strong style={{ fontStyle: meStyle === 'italic' ? 'italic' : 'normal' }}>
            {a.name}{suffix}
          </strong>
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      );
    }
    return (
      <span key={i}>
        {abbrevName(a.name)}{suffix}{i < authors.length - 1 ? ', ' : ''}
      </span>
    );
  });
}

Object.assign(window, { PROFILE, ABOUT_PARAGRAPHS, RESEARCH_INTERESTS, EDUCATION, NOW, NOW_RESEARCH, NOW_OFFSCREEN, PUBLICATIONS, formatAuthors });
