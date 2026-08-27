-- Replaces all professional journey roles with the four resume entries.
-- Run in Supabase → SQL editor.

delete from public.experiences;

insert into public.experiences (
  title, company, location, period, employment_type, description,
  achievements, technologies, icon, gradient, published, sort_order
) values
(
  'AI/ML Engineer & AI Solutions Architect',
  '',
  'Remote',
  'August 2024 – Present',
  'Full-time',
  'Designing and developing production-ready AI/ML solutions focused on Generative AI, LLMs, AI agents, NLP, RAG and intelligent automation.',
  '[
    "Developing LLM applications using Python, LangChain, LangGraph, OpenAI, Anthropic and Gemini.",
    "Building AI agents with tool calling, memory, workflow orchestration and multi-step reasoning.",
    "Working on RAG, embeddings, vector databases, semantic search and NLP-based classification.",
    "Implementing human-in-the-loop feedback and confidence-based AI workflows.",
    "Designing scalable AI backends using Python, FastAPI, Node.js and AWS.",
    "Leveraging 13+ years of software engineering experience to build complete production systems around AI."
  ]'::jsonb,
  '["Python","LangChain","LangGraph","OpenAI","Anthropic","Gemini","RAG","Vector database","Pinecone","PGVector","PostgreSQL","AWS RDS","FastAPI","Node.js","AWS"]'::jsonb,
  'Brain',
  'from-[#EC4899] to-[#F97316]',
  true,
  1
),
(
  'Sr. Tech Lead | AI, Cloud & Full-Stack Engineering',
  '',
  'Remote',
  'September 2020 – July 2024',
  'Full-time',
  'Led architecture and development of scalable AI, cloud and full-stack applications.',
  '[
    "Developed LLM-powered conversational applications using Python, LangChain, LangGraph and Gemini.",
    "Built AI-based industry classification systems using NLP, machine learning, LLMs, embeddings, NER and confidence scoring.",
    "Implemented multi-model classification combining rule-based and AI-driven predictions, with human-in-the-loop feedback workflows.",
    "Designed real-time AI systems using FastAPI and WebSockets.",
    "Worked with AWS Lambda, SQS, DynamoDB, Step Functions and CloudWatch.",
    "Led development using Node.js, React, Next.js, React Native and TypeScript."
  ]'::jsonb,
  '["Python","LangChain","LangGraph","Gemini","Vector database","Pinecone","PGVector","PostgreSQL","AWS RDS","FastAPI","WebSockets","AWS Lambda","SQS","DynamoDB","Step Functions","Node.js","React","Next.js","React Native","TypeScript"]'::jsonb,
  'Zap',
  'from-[#4A4E8C] to-[#6366F1]',
  true,
  2
),
(
  'Tech Lead | IoT, Computer Vision & Cloud',
  '',
  'Remote',
  'August 2018 – August 2020',
  'Full-time',
  'Led development of connected-device, cloud and intelligent application solutions involving real-time data, image processing and scalable backend systems.',
  '[
    "Designed scalable cloud solutions supporting connected devices and high-volume communication.",
    "Developed REST APIs using Node.js, MongoDB, Redis and AWS.",
    "Worked with device-to-server communication and real-time data processing.",
    "Developed algorithms for route deviation, vehicle activity and operational metrics.",
    "Worked on computer vision and facial recognition capabilities using AWS AI services.",
    "Designed integrations and POCs for third-party systems.",
    "Led technical solution design and supervised developers.",
    "Developed applications using React.js, TypeScript and Redux."
  ]'::jsonb,
  '["Node.js","MongoDB","Redis","AWS","Computer Vision","React.js","TypeScript","Redux"]'::jsonb,
  'Database',
  'from-[#06B6D4] to-[#8B5CF6]',
  true,
  3
),
(
  'Sr. Software Developer | IoT & Cloud Solutions',
  '',
  'Remote',
  'January 2015 – August 2018',
  'Full-time',
  'Developed cloud-connected IoT and web/mobile applications focused on scalable backend systems, device communication and data-driven solutions.',
  '[
    "Designed cloud architecture supporting multiple IoT device vendors and communication protocols.",
    "Developed REST APIs and backend services using Node.js, MongoDB and AWS.",
    "Integrated sensor and device-provider platforms into centralized cloud systems.",
    "Developed algorithms for vehicle tracking, route analysis and operational metrics.",
    "Built administration portals and monitoring applications.",
    "Worked with RabbitMQ, scheduled jobs and asynchronous processing.",
    "Developed web applications using AngularJS and React.js.",
    "Participated in architecture, system integration, POCs and production deployments."
  ]'::jsonb,
  '["Node.js","MongoDB","AWS","RabbitMQ","AngularJS","React.js","IoT"]'::jsonb,
  'Code',
  'from-[#10B981] to-[#3B82F6]',
  true,
  4
);
