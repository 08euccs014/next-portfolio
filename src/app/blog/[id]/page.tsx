import { getPost } from "@/lib/blogger";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

export const revalidate = 3600;

interface BlogPostPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <article className="prose prose-lg max-w-none">
          <header className="mb-8 not-prose">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-gray-500">
               <div className="flex items-center space-x-2">
                  {post.author.image.url && (
                    <img src={post.author.image.url} alt={post.author.displayName} className="w-8 h-8 rounded-full" />
                  )}
                  <span className="font-medium text-gray-900">{post.author.displayName}</span>
               </div>
               <span>•</span>
               <time dateTime={post.published}>
                 {format(new Date(post.published), 'MMMM d, yyyy')}
               </time>
            </div>
          </header>

          {/* Render HTML content safely */}
          <div 
            className="mt-8"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
