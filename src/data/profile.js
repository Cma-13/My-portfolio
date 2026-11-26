// Everything written on the portfolio lives in this one file.
// To update the site, change the text here. No other file needs to change.

export const profile = {
  name: "Seema Singdan",
  role: "Junior software and AI developer",
  location: "Kathmandu, Nepal",
  intro:
    "I build web apps with Django and FastAPI, and lately AI tools that answer questions from your own documents. " +
    "BSc. CSIT student who likes turning messy real-world workflows into software that just works.",
  email: "singdanseema013@gmail.com",
  phone: "+977 9803625613",
  github: "https://github.com/Cma-13",
  linkedin: "https://www.linkedin.com/in/seema-s-16a712370/",
};

// "demo" (optional) adds a Live demo link next to the Code link
export const projects = [
  {
    name: "RAG Document Q&A Assistant",
    subtitle: "AI assistant for your own documents",
    summary:
      "Upload PDFs and ask questions. Answers come only from your documents, with the page they were found on.",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "pgvector", "Groq", "Ollama", "MCP", "Docker"],
    highlights: [
      "Hybrid search that combines vector similarity with Postgres full-text search",
      "An agent that calls search tools in a loop to combine answers from several documents",
      "MCP server so the knowledge base also works from Claude Desktop",
      "Login with JWT or Google, private documents per user, and OCR for scanned PDFs",
    ],
    github: "https://github.com/Cma-13/rag-assistant-tool",
  },
  {
    name: "Employee Management System",
    subtitle: "HR platform, team final year project",
    summary:
      "Employees check in with their face, apply for leave under real company rules and get paid with unpaid days deducted automatically.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Flask", "scikit-learn", "OpenCV"],
    highlights: [
      "Face recognition check-in and check-out with automatic Present, Late or Half Day status",
      "Leave approval score that blends a Random Forest, each employee's own history and HR rules, and explains why",
      "Payroll that deducts unpaid leave and absent days automatically, counting working days only",
      "Four services working together, admin-only routes, and tests that run on GitHub Actions",
    ],
    github: "https://github.com/Cma-13/EMS",
  },
  {
    name: "EkdamMithoo",
    subtitle: "Restaurant Management System",
    summary:
      "Runs a Nepali restaurant from the first order to the final bill, with a public website for the menu and table booking.",
    tech: ["Django", "Python", "SQLite", "Tailwind CSS", "JavaScript", "ESC/POS"],
    highlights: [
      "Live dashboards for waiter, kitchen, billing and owner that update as orders move",
      "Payments by cash, eSewa, Khalti or Fonepay, saved as bills with thermal receipt printing",
      "Owner dashboard with revenue, top dishes and online table bookings",
      "18 automated tests covering the order-to-bill flow",
    ],
    github: "https://github.com/Cma-13/RMS",
    // Live demo: logins for each role are shown on its staff login page
    demo: "https://seemasingdan77.pythonanywhere.com",
  },
  {
    name: "Spam Classification and Anomaly Detection",
    subtitle: "Machine learning project",
    summary:
      "Detects spam SMS by combining classic classifiers with clustering to catch unusual messages.",
    tech: ["Python", "scikit-learn", "Jupyter"],
    highlights: [
      "Naive Bayes, Random Forest and SVM classifiers compared side by side",
      "KMeans and DBSCAN clustering to find unusual messages",
      "PCA to visualise how the messages group together",
    ],
    github: "https://github.com/Cma-13/Hybrid-Pattern-Recognition-System-for-Spam-Classification-and-Anomaly-Detection",
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "C", "C++", "PHP"] },
  { group: "Backend", items: ["Django", "FastAPI", "REST APIs", "Node.js / Express", "Flask", "ASP.NET", "Java Servlet"] },
  { group: "Frontend", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { group: "Databases", items: ["PostgreSQL (pgvector)", "MySQL", "MongoDB", "SQLite"] },
  { group: "AI / ML", items: ["RAG", "LLM integration (Groq, Ollama)", "MCP", "scikit-learn"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Docker Compose", "Jira", "Jupyter Notebook", "WordPress"] },
];

export const education = [
  {
    title: "BSc. Computer Science and Information Technology (CSIT)",
    place: "Asian School of Management and Technology, Kathmandu",
    note: "Affiliated to Tribhuvan University",
    years: "2022 – present",
  },
  {
    title: "Higher Secondary Education (+2), Science",
    place: "NIST (National School of Sciences)",
    note: "GPA 3.59",
    years: "2019 – 2021",
  },
];

export const certificates = [
  { title: "Mastering AI with Effective Prompt Engineering", issuer: "National Academy of Vocational Training (NAVT)", date: "November 2026" },
  { title: "Python with Django Course", issuer: "Code IT", date: "July 2026" },
  { title: "Data Analytics with AI Workshop", issuer: "DLYTICA Academy", date: "July 2026" },
  { title: "Data Science with Python Bootcamp", issuer: "Dursikshya Education Network", date: "March 2025" },
];
