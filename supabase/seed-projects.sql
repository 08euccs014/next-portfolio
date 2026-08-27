-- Replace placeholder starter projects with resume + Upwork case studies.
-- Public titles are domain-only (no client/product names).
-- Run in Supabase → SQL editor if REST insert is blocked by RLS.

delete from public.projects
where slug in (
  'ai-powered-document-assistant',
  'conversational-ai-platform',
  'react-native-mobile-app-with-ai',
  'fullstack-web-application',
  'ai-chatbot-integration',
  'microservices-architecture',
  'realtime-analytics-system',
  'ml-model-serving-platform',
  'vscode-extension-suite',
  'ai-model-training-pipeline',
  'figma-mockup-generation-tool',
  'smart-parking-solution',
  'ai-photography-face-recognition',
  'construction-compliance-saas',
  'restaurant-ocr-automation',
  'finance-application',
  'restaurant-operations-platform',
  'exercise-rehabilitation-platform',
  'iot-fleet-management',
  'freelance-hiring-marketplace',
  'custom-crm',
  'pharmacy-ordering-delivery',
  'ai-industry-classification',
  'test-automation-platform',
  'truck-telematics-driver-assessment'
);

insert into public.projects (
  slug, title, summary, description, category, icon, gradient,
  cover_image_url, live_url, github_url, role, timeline, outcome,
  tech_groups, workflow, screenshots, featured, published, sort_order
) values
(
  'figma-mockup-generation-tool',
  'Figma Mockup Generation Tool',
  'Figma-native mockup SaaS that turns designs into professional product presentations with AI image processing and real-time rendering.',
  'Built an AI-powered mockup and visual content generation platform that enables users to create professional product presentations and branded visuals with minimal manual effort. Contributed as an AI & Full-Stack Developer, building scalable systems for image processing, template management, and real-time mockup rendering across web applications.

Developed responsive frontend interfaces and backend APIs to support automated design workflows, customizable templates, and fast rendering performance. Integrated AI-driven features to streamline mockup generation, improve user productivity, and reduce repetitive design tasks.

Focused on delivering a smooth user experience, optimized platform performance, and scalable architecture capable of handling large image assets and real-time customization requests. The platform combined modern frontend technologies, backend infrastructure, and AI-assisted automation to simplify digital content creation for businesses and creators.',
  'AI/ML',
  'Brain',
  'from-[#EC4899] to-[#F97316]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/806fdd61-a003-4ddf-92c0-b33c54440016',
  null,
  null,
  'AI & Full-Stack Developer',
  null,
  'Shipped a scalable mockup SaaS with automated design workflows, template management, and real-time rendering.',
  '[{"label": "App", "items": ["React", "Next.js"]}, {"label": "AI", "items": ["AI image editing", "Image processing"]}, {"label": "Data", "items": ["PostgreSQL", "AWS RDS", "Vector database"]}]'::jsonb,
  '[{"title": "Ingest designs", "description": "Accept design assets and templates for mockup generation."}, {"title": "Generate", "description": "Run AI image-processing workflows to produce product mockups."}, {"title": "Render", "description": "Deliver real-time, customizable presentations in the web app."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/839217e4-b1cf-462d-b1c3-810f747c5f40", "caption": "Screenshot 1"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/814ab3c0-2edc-4538-a962-183f22ad9d89", "caption": "Screenshot 2"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/daef4e77-5628-4ac6-8fdc-8ea5c4de7337", "caption": "Screenshot 3"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/cb57a607-5f16-46bb-8a65-87894dbd3276", "caption": "Screenshot 4"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/b060ed35-9a36-4d70-b505-d9e6afe3a272", "caption": "Screenshot 5"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/36ff970e-9d57-41cc-9f3d-2c62e7958c4d", "caption": "Screenshot 6"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/36c63f38-4b46-45aa-bd48-3cf2b216b3f1", "caption": "Screenshot 7"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/32ecd369-eba4-431f-98f8-1f7691b82d9a", "caption": "Screenshot 8"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/4a4e6dc9-7e66-4bfb-87f5-1e7fe01c4290", "caption": "Screenshot 9"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/5727237c-750e-4008-9fd1-7e518d81d2e4", "caption": "Screenshot 10"}]'::jsonb,
  true,
  true,
  1
),
(
  'smart-parking-solution',
  'Smart Parking Solution',
  'Workplace parking for businesses and employees: find, book, pay, and manage spaces on web and React Native, with QR entry and admin dashboards.',
  'This is a workplace parking and space-management platform. Drivers locate, reserve, and pay from a React Native / Expo app with QR-based entry; owners and admins manage inventory, dynamic pricing, bookings, and analytics from a web dashboard. Work covered requirements, process flows, RBAC for enterprise vs individual customers, Google auth, camera QR scanning, and AI-assisted workflow validation across web and mobile.

Resume overlap: Parking Solution (NZ, 1 year) — hybrid React Native + React, Expo POC, QR scanner, email/Google auth, RBAC. Upwork also listed a shorter Smart Parking Management card with the same product shape (React, Highcharts, Node/Express, MongoDB).',
  'Mobile',
  'Smartphone',
  'from-[#06B6D4] to-[#8B5CF6]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/5627c32f-a3bf-4147-a965-0e06d4334db1',
  null,
  null,
  'Full-stack developer',
  '1 year',
  'Shipped driver booking + owner management with QR entry, payments, and real-time dashboards.',
  '[{"label": "Mobile", "items": ["React Native", "Expo"]}, {"label": "Web", "items": ["React", "Next.js-capable", "Highcharts"]}, {"label": "Backend", "items": ["Node.js", "Express", "MongoDB"]}]'::jsonb,
  '[{"title": "Book", "description": "Drivers find availability, reserve, and pay from mobile."}, {"title": "Enter", "description": "QR scan at the gate using the native camera."}, {"title": "Operate", "description": "Owners manage spaces, pricing, and RBAC from the web app."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/86f4a05c-18d8-4901-bab4-ad727277f571", "caption": "Screenshot 1"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/fb7967cf-7740-4560-be5d-42e5cf6b1ca1", "caption": "Screenshot 2"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/7d730fb8-388d-43e3-94d3-1f0cd3d8ce62", "caption": "Screenshot 3"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/e3870674-d0e0-4e0b-a6f1-75017a5e7089", "caption": "Screenshot 4"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/ffea54f4-9f6f-44a8-9dde-94b58c5139d1", "caption": "Screenshot 5"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/85f6f784-13bd-4f5c-9daf-072239aa610f", "caption": "Screenshot 6"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/711b3222-9b4c-4aa2-aa0d-7a16499ef656", "caption": "Screenshot 7"}]'::jsonb,
  true,
  true,
  2
),
(
  'ai-photography-face-recognition',
  'AI Photography Face Recognition Platform',
  'Guests scan a QR, upload a selfie, and get only the photos they appear in — 99.1% face-match accuracy for weddings and large events.',
  'Built an AI-powered event photo sharing platform that completely reimagines how people discover their memories after large events. Instead of forcing guests to scroll through thousands of photos or wait days for curated albums, the product delivers a simple experience, upload a selfie and instantly receive only the photos you appear in.

The platform was designed for weddings, corporate events, concerts, and large gatherings where photographers capture massive volumes of images, but post-event delivery becomes slow and chaotic. The product solves this with AI-driven facial recognition that automatically identifies guests across thousands of photos and builds private, personalized galleries for each individual.

I developed a full dual-sided system: a photographer dashboard for bulk uploads and event management, and a guest-facing mobile experience where users can access their photos instantly via a QR code, no login or manual tagging required.

A major challenge was ensuring facial recognition works reliably in real-world event conditions like crowd scenes, different lighting, motion blur, and partial faces. The system was tuned specifically for event photography workflows and achieved 99.1% accuracy in production environments.

The focus was on speed, privacy, and simplicity, guests only see their own photos, and photographers can process thousands of images without any manual sorting.

Built using AI face recognition models, mobile development (iOS & Android), cloud infrastructure, and real-time image processing systems.',
  'Mobile',
  'Smartphone',
  'from-[#6366F1] to-[#EC4899]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/b0004af8-315d-42c9-9e7f-e61d69386ac5',
  null,
  null,
  'Tech lead / full-stack',
  '1.2 years',
  '99.1% face-match accuracy with QR selfie galleries and photographer bulk upload.',
  '[{"label": "Mobile", "items": ["React Native", "React Native Paper"]}, {"label": "Web", "items": ["Next.js", "Redux Toolkit", "Tailwind CSS"]}, {"label": "Backend", "items": ["Node.js", "Express", "AWS Lambda", "DocumentDB", "S3", "Rekognition"]}, {"label": "AI", "items": ["Vector database", "Pinecone", "PGVector"]}]'::jsonb,
  '[{"title": "Upload", "description": "Photographers bulk-upload event photos to cloud storage."}, {"title": "Match", "description": "AWS facial recognition indexes faces against guest selfies."}, {"title": "Deliver", "description": "Guests scan a QR and download only their photos."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/03f80257-36ed-441d-beb1-98e0c5b9bcfd", "caption": "Screenshot 1"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/d625014d-358a-4343-a30c-cedfad18f7c2", "caption": "Screenshot 2"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/f70fea7a-4b60-4f5b-bafb-3e763441efc3", "caption": "Screenshot 3"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/71bba345-f2f7-4c7e-bd9c-474f2d8b34e1", "caption": "Screenshot 4"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/0025350f-28df-4c0b-9a58-cd674ae65cb5", "caption": "Screenshot 5"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/36971672-c53a-4594-b294-f28b96f0273e", "caption": "Screenshot 6"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/84a9c239-3ec0-4cbb-9c90-b65a6edb3d12", "caption": "Screenshot 7"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/385468b5-0d1f-4138-b571-ba8c3dfdeaec", "caption": "Screenshot 8"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/602a62a5-a774-401f-be28-fa158c0a1559", "caption": "Screenshot 9"}]'::jsonb,
  true,
  true,
  3
),
(
  'construction-compliance-saas',
  'Construction Compliance SaaS',
  'Stops energization delays by mapping test sheets, photos, and certificates to assets and showing what is still missing at closeout.',
  'Built a construction tech SaaS platform designed to eliminate one of the biggest hidden causes of delays in large infrastructure projects missing or incomplete compliance documentation at closeout.

In projects like data centers, hospitals, substations, and industrial facilities, the physical work is often completed on time, but energization gets delayed because critical paperwork is scattered across emails, folders, and subcontractors. It was built to solve this “paperwork bottleneck” with a real-time, structured system for tracking compliance.

I developed a platform where subcontractors can upload test sheets, photos, and certificates as they work, without changing their existing workflow. The system automatically organizes and maps each document to its corresponding cable or asset, then continuously checks for missing or incomplete evidence.

General contractors get a live dashboard showing exactly what is complete, what is missing, and what is blocking energization. This turns closeout from a reactive firefight into a controlled, transparent process.

The platform also generates audit-ready evidence packages in seconds, helping teams release retainage faster and avoid costly delays at handover.

Built using Next.js, React, Node.js, PostgreSQL, REST APIs, and a real-time document validation and ingestion engine.',
  'Web App',
  'Globe',
  'from-[#FCD34D] to-[#F97316]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/bea2f1fb-8fb7-44c3-b844-2f4114a8e166',
  null,
  null,
  'Full-stack developer',
  null,
  'Live completeness dashboard and audit-ready evidence packs in seconds.',
  '[{"label": "App", "items": ["Next.js", "React", "Node.js", "PostgreSQL"]}, {"label": "Domain", "items": ["Document automation"]}]'::jsonb,
  '[{"title": "Capture", "description": "Subs upload test sheets, photos, and certificates as they work."}, {"title": "Map", "description": "Documents are tied to cables/assets and checked for gaps."}, {"title": "Close out", "description": "GCs see blockers live and export an audit pack."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/e6fff43c-4023-4419-b2c0-d51c73c553d8", "caption": "Screenshot 1"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/c8605b01-4c06-4cd8-985d-7a7b35eefac1", "caption": "Screenshot 2"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/fad0a5f4-2561-4e80-a02e-dcc358d2262d", "caption": "Screenshot 3"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/fb19eb21-41e7-4fec-abae-15fba39d455f", "caption": "Screenshot 4"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/5b36ebc1-db9a-4b86-9861-2f03226648bf", "caption": "Screenshot 5"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/8545eb32-72bc-4ce3-88a8-e2fcb31385bc", "caption": "Screenshot 6"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/15f97443-c182-480e-a50e-6079638a968a", "caption": "Screenshot 7"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/5e2a5b6f-56d1-4215-be78-347bdd1b389d", "caption": "Screenshot 8"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/a4364e1a-6cee-4e08-9a46-bedaf663ece7", "caption": "Screenshot 9"}]'::jsonb,
  true,
  true,
  4
),
(
  'restaurant-ocr-automation',
  'Restaurant OCR Automation',
  'Google Vision + GPT-4 pipeline that turns handwritten invoices and kitchen forms into live food-cost and inventory data — 97%+ accuracy, 1,000+ docs/month.',
  'Worked with a multi-location restaurant chain to replace slow, paper-based operations with a fully automated AI and OCR-powered management system. The business was handling thousands of handwritten delivery notes, supplier invoices, kitchen forms, and staff summaries every month, making it difficult to track food costs, inventory, and supplier spending in real time.

I designed and developed an intelligent document processing pipeline that allowed staff to simply scan or upload documents from their phones. Using Google Vision OCR, GPT-4, and a custom AI validation layer, the system could accurately read handwritten notes, printed invoices, mixed document formats, and low-quality scans, then convert them into structured operational data within seconds.

All extracted information was automatically pushed into a centralized live dashboard where management could monitor inventory movement, supplier costs, food cost trends, account statements, and shift summaries across every restaurant location in real time. The platform processed over 1,000 documents per month with 97%+ extraction accuracy while completely eliminating manual data entry.

Tech Stack: Python, FastAPI, PostgreSQL, React.js, Node.js, Google Vision OCR, OpenAI GPT-4, REST APIs, Cloud Storage.',
  'AI/ML',
  'Brain',
  'from-[#8B5CF6] to-[#EC4899]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/9abd9138-4e8c-47c1-bb71-3f3c1a7dcadd',
  null,
  null,
  'AI engineer — end-to-end OCR automation',
  null,
  '97%+ extraction accuracy on 1,000+ documents per month; removed manual data entry.',
  '[{"label": "AI", "items": ["Python", "Google Vision OCR", "GPT-4", "Vector database", "Pinecone", "PGVector"]}, {"label": "App", "items": ["FastAPI", "React", "Node.js", "PostgreSQL", "AWS RDS"]}]'::jsonb,
  '[{"title": "Scan", "description": "Staff upload handwritten notes and invoices from phones."}, {"title": "Extract", "description": "Vision OCR + GPT-4 + validation turn scans into structured rows."}, {"title": "Operate", "description": "Dashboards show food cost, suppliers, and shift summaries live."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/8d37ce2d-39ac-4726-bd51-f263bfedcff2", "caption": "Screenshot 1"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/3bed6345-e84b-4981-9121-90cf06a63459", "caption": "Screenshot 2"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/3fd76e49-9401-459e-ae3f-eb6dde71aea5", "caption": "Screenshot 3"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/c1dd02b6-c0d1-439e-ace4-7a765f133b43", "caption": "Screenshot 4"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/83cd9c46-37fe-49c0-b3b2-43de310bd247", "caption": "Screenshot 5"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/5d92b19a-7cfe-4a20-842f-a3ff3d1fea7c", "caption": "Screenshot 6"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/6c5f2e52-22dc-451e-acb0-f23bd0d2d3a1", "caption": "Screenshot 7"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/6516c73e-f141-4571-8061-7119443fe24a", "caption": "Screenshot 8"}]'::jsonb,
  true,
  true,
  5
),
(
  'finance-application',
  'Finance Application',
  'Conversational finance coach: bank data, auto-categorization, shared budgets, and a LangChain/Gemini assistant that answers “can I afford this?” with user context.',
  'Built a full-stack FinTech SaaS platform designed as an AI-powered personal finance coach instead of a traditional budgeting app. The platform helps users actively manage money, track spending, and make better financial decisions through real-time insights and conversational AI guidance.

The system combines live banking data, smart transaction categorization, and a context-aware AI assistant that answers real financial questions like “Can I afford this?” based on actual user budgets. It also supports shared family/couple budgets with strict data separation, allowing private and household finances to coexist securely in one account.

A core engineering focus was privacy-first architecture with end-to-end encryption, multilingual support (English & Dutch), and seamless cross-platform experience across mobile and web. Users get a complete financial snapshot including accounts, cards, loans, and investments in a single live dashboard updated in real time.

Key features include AI budget coaching, automated transaction categorization, shared budgets, subscription-based SaaS infrastructure, and a real-time financial overview. The platform was built using React Native, Next.js, Node.js, PostgreSQL, Stripe, and OpenAI APIs with a secure, scalable backend architecture.

Resume (13yr): real-time LLM chat on mobile with FastAPI + WebSockets, LangChain structured tools over profiles/goals/transactions, ConversationBufferMemory, LangGraph/LangFuse, MongoDB + Postgres. Duration 1 year. Role: Sr. AI Engineer.',
  'AI/ML',
  'Brain',
  'from-[#10B981] to-[#3B82F6]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/b2688ca1-0ab2-4b9a-9259-244b40186891',
  null,
  null,
  'Sr. AI engineer / full-stack',
  '1 year',
  'Sub-100ms chat path with tool routing over live financial context; EN/NL; E2E encryption.',
  '[{"label": "AI", "items": ["LangChain", "LangGraph", "LangFuse", "Gemini", "OpenAI", "Vector database", "Pinecone", "PGVector"]}, {"label": "App", "items": ["React Native", "Next.js", "FastAPI", "Node.js", "WebSocket"]}, {"label": "Data", "items": ["PostgreSQL", "AWS RDS", "MongoDB", "Stripe"]}]'::jsonb,
  '[{"title": "Connect", "description": "Ingest bank/account data and categorize transactions."}, {"title": "Ground", "description": "LangChain tools read profiles, goals, and balances."}, {"title": "Coach", "description": "Stream Gemini answers over WebSockets with session memory."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/761ce3db-95f7-4bd5-aa7d-f8b106fc8818", "caption": "Screenshot 1"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/eb390f2d-d0d4-4f23-92bc-58893496d989", "caption": "Screenshot 2"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/939fbbef-145e-482c-84f8-c56af9c429d6", "caption": "Screenshot 3"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/ca49317b-2e87-46ca-81b6-9f608e0088e2", "caption": "Screenshot 4"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/9cf7b319-e32a-4817-8d5b-c5717b3222c8", "caption": "Screenshot 5"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/34d5f5cc-a0d0-493c-bf2a-a3bf3fb4291c", "caption": "Screenshot 6"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/5486ba3a-b6bc-49ec-ab44-5fe8034f505b", "caption": "Screenshot 7"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/3a29c409-2747-425e-b869-324518ae46b6", "caption": "Screenshot 8"}, {"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/e5cca0c7-9941-418b-a678-928c5679644b", "caption": "Screenshot 9"}]'::jsonb,
  true,
  true,
  6
),
(
  'restaurant-operations-platform',
  'Restaurant Operations Platform',
  'Dine-in, delivery, and inventory on React / React Native / Node, with LangChain modules for demand forecasting and menu recommendations.',
  'Developed a Food Restaurant Management Application to streamline operations across dine-in, delivery, and inventory. Built with React, Node.js, PostgreSQL, and React Native, the platform includes AI-powered modules using Python, LLMs, and LangChain for demand forecasting, smart inventory control, and personalized menu recommendations. The solution enables restaurants to boost efficiency, reduce waste, and deliver a better customer experience.',
  'Web App',
  'Globe',
  'from-[#F59E0B] to-[#EF4444]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/7e2b37f2-9538-42d2-9d9c-3f19329ef04e',
  null,
  null,
  'Full-stack developer',
  null,
  'One platform for dine-in, delivery, inventory, and AI demand/menu insights.',
  '[{"label": "App", "items": ["React", "React Native", "Node.js", "PostgreSQL", "AWS RDS"]}, {"label": "AI", "items": ["Python", "LangChain", "LLMs", "Vector database", "Pinecone", "PGVector"]}]'::jsonb,
  '[{"title": "Operate", "description": "Staff run dine-in and delivery from web and mobile."}, {"title": "Stock", "description": "Inventory stays in sync across locations."}, {"title": "Forecast", "description": "LangChain modules recommend menus and demand."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/e43f6c3c-b45d-4ecf-acdd-f372038ad7de", "caption": "Screenshot 1"}]'::jsonb,
  false,
  true,
  7
),
(
  'exercise-rehabilitation-platform',
  'Exercise & Rehabilitation Platform',
  'Membership platform for personalized workout plans, guided video, subscriptions, and trainer analytics.',
  'Designed and developed a membership-based online exercise and rehabilitation platform that enables patients and fitness members to access personalized workout plans, guided video sessions, and progress tracking. The system includes secure member logins, subscription management, virtual rehabilitation programs, and analytics for trainers/therapists - ensuring a scalable, engaging, and effective digital health experience.',
  'Web App',
  'Globe',
  'from-[#8B5CF6] to-[#06B6D4]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/cca1dd4b-2611-4c54-9526-094513e70562',
  null,
  null,
  'Full-stack developer',
  null,
  'Subscription rehab/fitness product with member login, video programs, and trainer analytics.',
  '[{"label": "App", "items": ["Next.js", "Node.js", "PostgreSQL"]}, {"label": "Infra", "items": ["AWS", "Payment gateway"]}]'::jsonb,
  '[{"title": "Subscribe", "description": "Members join via secure login and payments."}, {"title": "Train", "description": "Personalized plans and guided video sessions."}, {"title": "Track", "description": "Trainers/therapists see progress analytics."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/56170357-d7eb-4b52-820e-721afda485b2", "caption": "Screenshot 1"}]'::jsonb,
  false,
  true,
  8
),
(
  'iot-fleet-management',
  'IoT Fleet Management Platform',
  'GPS + diagnostics from in-vehicle devices, MQTT/WebSocket ingest, live fleet maps, route-deviation and engine-hours algorithms, React fleet UI.',
  'Developed an IoT-powered Connected Vehicle Solution for real-time fleet management, GPS tracking, and predictive diagnostics. Built on the MERN stack with IoT communication protocols (MQTT, WebSockets, REST APIs), the system enables vehicle data collection, storage, and visualization. Features include live fleet maps, engine/battery health monitoring, predictive maintenance alerts, and mobile access for drivers and owners.

Resume (4 years, USA): device-to-server protocols (GT06, AIS140), AWS IoT Core, Azure IoT Hub, Kafka, Redis, S3; route-deviation and machine working-hours algorithms; React + TypeScript + Redux fleet apps; led junior engineers.',
  'Architecture',
  'Zap',
  'from-[#F97316] to-[#EC4899]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/e342c8b2-d161-4bb3-801b-c7bc25f55500',
  null,
  null,
  'Technical lead / senior developer',
  '4 years',
  'Production IoT ingest at fleet scale with live maps and predictive maintenance.',
  '[{"label": "Ingest", "items": ["MQTT", "WebSocket", "TCP", "AWS IoT Core", "Azure IoT Hub", "Kafka"]}, {"label": "App", "items": ["Node.js", "React", "TypeScript", "Redux"]}, {"label": "Data", "items": ["MongoDB", "Redis", "S3"]}]'::jsonb,
  '[{"title": "Ingest", "description": "Devices stream location and diagnostics over MQTT/TCP."}, {"title": "Compute", "description": "Route deviation, engine hours, health alerts."}, {"title": "Show", "description": "Fleet maps and owner/driver mobile + web."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/5c943f27-c4c6-4dfa-9678-94d98f5d9909", "caption": "Screenshot 1"}]'::jsonb,
  false,
  true,
  9
),
(
  'freelance-hiring-marketplace',
  'Freelance Hiring Marketplace',
  'Hourly or fixed-price hiring with listings, escrow, chat, scheduling, and an admin commission dashboard.',
  'A web and mobile platform that allows users to hire freelancers and service providers on either an hourly or fixed-price basis. The system provides an intuitive booking flow, secure payments, and service tracking - offering a seamless experience for both clients and freelancers.

Key Features
- Service Listings & Profiles
- Flexible Hiring:  Hourly or fixed-cost basis.
- Booking Management: Real-time scheduling and order tracking.
- Secure Payments: Escrow.
- Chat & Notifications: In-app messaging and real-time updates.
- Admin Dashboard: Service approval, commission tracking, and reports.',
  'Web App',
  'Globe',
  'from-[#EC4899] to-[#F97316]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/fe86c6d3-8ec9-4ae9-8943-d4f0725fe2aa',
  null,
  null,
  'Full-stack developer',
  null,
  'Client + freelancer marketplace with escrow and real-time messaging.',
  '[{"label": "App", "items": ["React Native", "Node.js", "Laravel", "Python", "PostgreSQL"]}]'::jsonb,
  '[{"title": "List", "description": "Providers publish profiles and services."}, {"title": "Book", "description": "Clients hire hourly or fixed-price with escrow."}, {"title": "Deliver", "description": "Chat, tracking, and admin commissions."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/6d8cf24f-7f2d-4aca-8427-7844cd6052e5", "caption": "Screenshot 1"}]'::jsonb,
  false,
  true,
  10
),
(
  'custom-crm',
  'Custom CRM',
  'Lightweight CRM for contacts, leads, tasks, notes, and reporting — MERN plus Postgres/MySQL.',
  'Designed and developed a lightweight CRM solution to help businesses manage clients, leads, and tasks in one place. The system includes contact management, task tracking, notes, and reporting with a clean, intuitive UI.

Built with MERN stack + MySQL/PostgreSQL, this CRM is optimized for speed, scalability, and easy customization-allowing the client to extend features as their business grows.',
  'Web App',
  'Globe',
  'from-[#06B6D4] to-[#8B5CF6]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/17739a15-abaa-456e-b61c-7b54229c1762',
  null,
  null,
  'Full-stack developer',
  null,
  'Fast, customizable CRM the client can extend as they grow.',
  '[{"label": "App", "items": ["React", "React Native", "Node.js", "Python", "PostgreSQL", "MySQL"]}]'::jsonb,
  '[{"title": "Capture", "description": "Contacts and leads in one place."}, {"title": "Work", "description": "Tasks, notes, and follow-ups."}, {"title": "Report", "description": "Simple reporting UI for operators."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/5fe495ca-31d2-40c1-9142-54e489d951ab", "caption": "Screenshot 1"}]'::jsonb,
  false,
  true,
  11
),
(
  'pharmacy-ordering-delivery',
  'Pharmacy Ordering & Delivery',
  'Single-vendor pharmacy: browse, upload prescriptions, pay, and get delivery — web + React Native with live inventory.',
  'Developed a modern healthcare application for a single-vendor pharmacy, enabling patients to browse, order, and get medicines delivered seamlessly. The app features real-time inventory management, secure payments, and prescription uploads, ensuring a user-friendly experience on both web and mobile platforms.

Built with React.js, React Native, Node.js, and Python, the solution is scalable, secure, and optimized for performance, helping the client streamline operations and deliver a better healthcare experience to customers.',
  'Mobile',
  'Smartphone',
  'from-[#6366F1] to-[#EC4899]',
  'https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/3576c9d9-f010-442f-9dc8-f70805428b56',
  null,
  null,
  'Full-stack developer',
  null,
  'Web + mobile ordering with prescriptions, payments, and inventory.',
  '[{"label": "App", "items": ["React", "React Native", "Node.js", "Python"]}]'::jsonb,
  '[{"title": "Browse", "description": "Patients search medicines and upload prescriptions."}, {"title": "Pay", "description": "Secure checkout against live inventory."}, {"title": "Deliver", "description": "Pharmacy fulfills and delivers."}]'::jsonb,
  '[{"url": "https://www.upwork.com/att/download/portfolio/persons/uid/1904413552962152191/profile/projects/files/817d615c-48a5-4dd6-a954-e70ba5b756eb", "caption": "Screenshot 1"}]'::jsonb,
  false,
  true,
  12
),
(
  'ai-industry-classification',
  'AI Industry Classification API',
  'NLP + Claude/OpenAI pipeline that classifies companies into industry codes with confidence scoring, human-in-the-loop, and a real-time API on Lambda/SQS.',
  'Automated assignment of NAICS, SIC, and ISIC codes from company names, descriptions, and activities. Custom NLP on Claude Sonnet 3.5 v2 with TF-IDF, embeddings, and NER; hybrid rule-based then ML classification; confidence ranking; human-in-the-loop for low-confidence rows; REST API plus SQS bulk jobs; DynamoDB history; GitHub Actions / CodePipeline / CloudWatch. Role: AI Engineer. Duration: 0.7 year.',
  'AI/ML',
  'Brain',
  'from-[#FCD34D] to-[#F97316]',
  null,
  null,
  null,
  'AI Engineer',
  '0.7 year',
  'Real-time classification API with feedback loop and A/B model comparison.',
  '[{"label": "AI", "items": ["Python", "Claude Sonnet 3.5", "OpenAI", "NLP", "Vector database", "Pinecone", "PGVector"]}, {"label": "Cloud", "items": ["AWS Lambda", "SQS", "Step Functions", "DynamoDB", "PostgreSQL", "AWS RDS"]}]'::jsonb,
  '[{"title": "Parse", "description": "Clean company text and extract activity keywords."}, {"title": "Classify", "description": "Rules then LLM/ML, with confidence scores."}, {"title": "Correct", "description": "Low-confidence rows go to human review and retrain."}]'::jsonb,
  '[]'::jsonb,
  false,
  true,
  13
),
(
  'test-automation-platform',
  'Multi-Tenant Test Automation Platform',
  'Multi-tenant testing ecosystem: Selenium/Cucumber results, Next.js dashboards, Cognito, Stripe, Jira/XRay — APIs on Lambda + DynamoDB.',
  'Ecosystem for web-app testing across browsers using a Selenium cluster and Cucumber. Converted the product to multi-tenant to cut infra cost. Node.js Lambdas read DynamoDB test output; React/Next.js dashboards with custom charts; user and project management; Jira + XRay integrations; Stripe subscriptions; AWS Cognito auth. Role: Tech lead. Duration: 1.4 years. Country: USA.',
  'Developer Tools',
  'Code',
  'from-[#8B5CF6] to-[#EC4899]',
  null,
  null,
  null,
  'Tech lead',
  '1.4 years',
  'Multi-tenant testing SaaS with billing, Jira/XRay, and org dashboards.',
  '[{"label": "App", "items": ["Node.js", "Express", "React", "Next.js"]}, {"label": "AWS", "items": ["Lambda", "API Gateway", "DynamoDB", "Cognito", "Stripe"]}]'::jsonb,
  '[{"title": "Run", "description": "Selenium/Cucumber tests write results to DynamoDB."}, {"title": "Show", "description": "Next.js dashboards per org/project."}, {"title": "Bill", "description": "Cognito auth and Stripe subscriptions."}]'::jsonb,
  '[]'::jsonb,
  false,
  true,
  14
),
(
  'truck-telematics-driver-assessment',
  'Truck Telematics & Driver Assessment',
  'Multi-vendor tracker ingest, driving-behaviour from trip data, driver duties and monthly assessments — Node, Mongo, RabbitMQ, AngularJS.',
  'Integrated solution to track truck drivers from vehicle location devices and monitor driving behaviour from tracker trip data, plus duty management and monthly assessments. Cloud architecture for multiple device vendors; admin portal and REST APIs; cron jobs. Role: Sr. Software Developer. Duration: 1.5 years. Country: USA.',
  'Architecture',
  'Zap',
  'from-[#10B981] to-[#3B82F6]',
  null,
  null,
  null,
  'Senior software developer',
  '1.5 years',
  'Multi-vendor telematics ingest with admin portal and assessment workflows.',
  '[{"label": "Backend", "items": ["Node.js", "MongoDB", "RabbitMQ", "AWS"]}, {"label": "Admin", "items": ["AngularJS"]}]'::jsonb,
  '[{"title": "Ingest", "description": "Normalize feeds from multiple tracker vendors."}, {"title": "Score", "description": "Trips → driving behaviour and duty hours."}, {"title": "Assess", "description": "Admin portal for monthly driver assessments."}]'::jsonb,
  '[]'::jsonb,
  false,
  true,
  15
);

-- Pin AI/ML case studies first in the featured grid and listing.
update public.projects
set
  category = case slug
    when 'ai-photography-face-recognition' then 'AI/ML'
    else category
  end,
  featured = slug in (
    'figma-mockup-generation-tool',
    'ai-photography-face-recognition',
    'restaurant-ocr-automation',
    'finance-application',
    'ai-industry-classification'
  ),
  sort_order = case slug
    when 'figma-mockup-generation-tool' then 1
    when 'ai-photography-face-recognition' then 2
    when 'restaurant-ocr-automation' then 3
    when 'finance-application' then 4
    when 'ai-industry-classification' then 5
    when 'smart-parking-solution' then 6
    when 'construction-compliance-saas' then 7
    when 'restaurant-operations-platform' then 8
    when 'exercise-rehabilitation-platform' then 9
    when 'iot-fleet-management' then 10
    when 'freelance-hiring-marketplace' then 11
    when 'custom-crm' then 12
    when 'pharmacy-ordering-delivery' then 13
    when 'test-automation-platform' then 14
    when 'truck-telematics-driver-assessment' then 15
    else sort_order
  end;

