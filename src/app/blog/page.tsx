import { getPosts } from "@/lib/blogger";
import { BlogCard } from "@/components/blog-card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on software development, AI, and technology.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No posts found. Check back later!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
