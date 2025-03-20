"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <Navigation />

      <div className="container max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-8">Blog</h1>
        </div>

        <div className="border border-zinc-800 rounded-lg p-8 text-center">
          <h2 className="text-xl font-medium text-zinc-300 mb-2">
            No posts yet
          </h2>
          <p className="text-zinc-500 mb-4">
            Blog posts are coming soon. Check back later for updates!
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
