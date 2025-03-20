"use client";

import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import Navigation from "@/components/navigation";
import { notFound } from "next/navigation";
import Footer from "@/components/footer";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <Navigation />

      <div className="container max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div ref={headerRef} className="mb-8">
          <Link href="/blog">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 hover:translate-y-[-2px] transition-transform duration-300"
            >
              <ArrowLeft size={16} />
              Back to Blog
            </Button>
          </Link>
        </div>

        <article ref={contentRef} className="prose prose-invert max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center text-zinc-500 mb-8 gap-2">
            <div className="flex items-center">
              <Calendar size={14} className="mr-2" />
              <span>{post.date}</span>
            </div>
            {post.tags && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-zinc-900 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6 text-zinc-300">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
}

const blogPosts = [
  {
    slug: "people-centered-design",
    title: "People-Centered Design: Beyond User Experience",
    date: "Jan 12, 2024",
    tags: ["Design", "UX"],
    content: [
      "When we talk about human-centered design in technology, we often focus narrowly on user experience - making interfaces intuitive and workflows efficient.",
      "But truly people-centered technology requires us to think more broadly about the impact our solutions have on communities, cultures, and societies.",
      "In Ethiopia, where technology adoption is rapidly increasing but digital literacy varies widely, this broader perspective is essential.",
      "This article explores how we can move beyond conventional UX approaches to consider the full spectrum of ways technology affects people's lives.",
      "I share frameworks and methodologies we've developed at YOLET Software Labs to ensure our solutions not only work well for individual users but also contribute positively to community wellbeing and development.",
    ],
  },
];
