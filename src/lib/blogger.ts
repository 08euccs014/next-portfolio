import { google } from 'googleapis';

const blogger = google.blogger('v3');

const auth = new google.auth.GoogleAuth({
  keyFile: process.cwd() + '/lively-paratext-480611-k2-23fd8f33de60.json',
  scopes: ['https://www.googleapis.com/auth/blogger.readonly'],
});

const blogId = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  published: string;
  url: string;
  author: {
    displayName: string;
    image: {
      url: string;
    };
  };
  images?: {
    url: string;
  }[];
}

export async function getPosts(): Promise<BlogPost[]> {
  if (!blogId) {
    console.error('NEXT_PUBLIC_BLOGGER_BLOG_ID is not set');
    return [];
  }

  try {
    const authClient = await auth.getClient();
    const res = await blogger.posts.list({
      auth: authClient,
      blogId: blogId,
      maxResults: 10,
      fetchBodies: false, // We don't need full body for list
      fetchImages: true,
    });

    return (res.data.items || []).map((item: any) => ({
      id: item.id,
      title: item.title,
      content: item.content || '', // Content might be empty if fetchBodies is false
      published: item.published,
      url: item.url,
      author: {
        displayName: item.author.displayName,
        image: {
          url: item.author.image.url,
        },
      },
      images: item.images || [],
    }));
  } catch (error) {
    console.error('Error fetching posts from Blogger:', error);
    return [];
  }
}

export async function getPost(id: string): Promise<BlogPost | null> {
  if (!blogId) {
    console.error('NEXT_PUBLIC_BLOGGER_BLOG_ID is not set');
    return null;
  }

  try {
    const authClient = await auth.getClient();
    const res = await blogger.posts.get({
      auth: authClient,
      blogId: blogId,
      postId: id,
      fetchBody: true,
      fetchImages: true,
    });

    const item = res.data;
    return {
      id: item.id!,
      title: item.title!,
      content: item.content!,
      published: item.published!,
      url: item.url!,
      author: {
        displayName: item.author!.displayName!,
        image: {
          url: item.author!.image!.url!,
        },
      },
      images: item.images || [],
    };
  } catch (error) {
    console.error(`Error fetching post ${id} from Blogger:`, error);
    return null;
  }
}
