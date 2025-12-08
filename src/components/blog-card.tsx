import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from '@/lib/blogger';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  // Extract first image or use placeholder
  const thumbnail = post.images?.[0]?.url || '/placeholder-blog.jpg'; 
  
  // Create a snippet from content if available, or just use title
  // Since we fetch bodies: false for list, we might not have content here.
  // We can rely on title and date for the card.

  return (
    <Link href={`/blog/${post.id}`} className="block h-full group">
      <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white/50 backdrop-blur-sm">
        <div className="relative h-48 w-full overflow-hidden">
             {/* Use a generic placeholder if no image, or handle image loading gracefully */}
             {/* Since we don't have a guaranteed image, we can use a gradient or pattern */}
             {post.images && post.images.length > 0 ? (
                <img 
                  src={post.images[0].url} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
             ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                </div>
             )}
        </div>
        <CardHeader>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
            <span>{format(new Date(post.published), 'MMM d, yyyy')}</span>
            <span>•</span>
            <span>{post.author.displayName}</span>
          </div>
          <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">
             {/* We don't have snippet in the API response type we defined, 
                 but we could strip HTML from content if we fetched it. 
                 For now, let's just show the title and maybe some metadata. */}
             Click to read more about this topic.
          </p>
        </CardContent>
        <CardFooter className="mt-auto">
            <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                Read Article <ArrowRight className="ml-2 h-4 w-4" />
            </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
