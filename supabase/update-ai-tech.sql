-- Add vector / Postgres stack to AI roles and AI-based case studies.
-- Run in Supabase → SQL editor.

update public.experiences
set technologies = '["Python","LangChain","LangGraph","OpenAI","Anthropic","Gemini","RAG","Vector database","Pinecone","PGVector","PostgreSQL","AWS RDS","FastAPI","Node.js","AWS"]'::jsonb
where title = 'AI/ML Engineer & AI Solutions Architect';

update public.experiences
set technologies = '["Python","LangChain","LangGraph","Gemini","Vector database","Pinecone","PGVector","PostgreSQL","AWS RDS","FastAPI","WebSockets","AWS Lambda","SQS","DynamoDB","Step Functions","Node.js","React","Next.js","React Native","TypeScript"]'::jsonb
where title = 'Sr. Tech Lead | AI, Cloud & Full-Stack Engineering';

update public.projects
set tech_groups = '[{"label": "App", "items": ["React", "Next.js"]}, {"label": "AI", "items": ["AI image editing", "Image processing"]}, {"label": "Data", "items": ["PostgreSQL", "AWS RDS", "Vector database"]}]'::jsonb
where slug = 'figma-mockup-generation-tool';

update public.projects
set tech_groups = '[{"label": "Mobile", "items": ["React Native", "React Native Paper"]}, {"label": "Web", "items": ["Next.js", "Redux Toolkit", "Tailwind CSS"]}, {"label": "Backend", "items": ["Node.js", "Express", "AWS Lambda", "DocumentDB", "S3", "Rekognition"]}, {"label": "AI", "items": ["Vector database", "Pinecone", "PGVector"]}]'::jsonb
where slug = 'ai-photography-face-recognition';

update public.projects
set tech_groups = '[{"label": "AI", "items": ["Python", "Google Vision OCR", "GPT-4", "Vector database", "Pinecone", "PGVector"]}, {"label": "App", "items": ["FastAPI", "React", "Node.js", "PostgreSQL", "AWS RDS"]}]'::jsonb
where slug = 'restaurant-ocr-automation';

update public.projects
set tech_groups = '[{"label": "AI", "items": ["LangChain", "LangGraph", "LangFuse", "Gemini", "OpenAI", "Vector database", "Pinecone", "PGVector"]}, {"label": "App", "items": ["React Native", "Next.js", "FastAPI", "Node.js", "WebSocket"]}, {"label": "Data", "items": ["PostgreSQL", "AWS RDS", "MongoDB", "Stripe"]}]'::jsonb
where slug = 'finance-application';

update public.projects
set tech_groups = '[{"label": "App", "items": ["React", "React Native", "Node.js", "PostgreSQL", "AWS RDS"]}, {"label": "AI", "items": ["Python", "LangChain", "LLMs", "Vector database", "Pinecone", "PGVector"]}]'::jsonb
where slug = 'restaurant-operations-platform';

update public.projects
set tech_groups = '[{"label": "AI", "items": ["Python", "Claude Sonnet 3.5", "OpenAI", "NLP", "Vector database", "Pinecone", "PGVector"]}, {"label": "Cloud", "items": ["AWS Lambda", "SQS", "Step Functions", "DynamoDB", "PostgreSQL", "AWS RDS"]}]'::jsonb
where slug = 'ai-industry-classification';
