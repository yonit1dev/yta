"use client";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Home() {
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const blogRef = useRef<HTMLElement>(null);
  const connectRef = useRef<HTMLElement>(null);

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <Navigation />

      <div className="container max-w-3xl mx-auto px-4 py-8 md:py-12">
        <section id="about" ref={aboutRef} className="mb-16 scroll-mt-20">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            Yonathan Tessema
          </h1>
          <div className="space-y-4 text-zinc-300">
            <p>
              Discovering the intersection of technology and business to create
              sustainable impact. Focusing on building solutions that address
              real challenges while prioritizing human experiences.
            </p>
          </div>
        </section>

        <section id="projects" ref={projectsRef} className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-6">What I Do</h2>
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {companies.map((company, index) => (
              <div
                key={index}
                className="border border-zinc-800 p-6 rounded-lg hover:border-zinc-700 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-zinc-900/20 flex flex-col h-[250px]"
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-medium mb-2">{company.name}</h3>
                  <p className="text-zinc-400 mb-2">{company.role}</p>
                  <p className="text-zinc-300 mb-4">{company.description}</p>
                </div>
                <Link href={company.link} target="_blank">
                  <Button
                    variant="outline"
                    className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border-zinc-700 hover:border-zinc-500 cursor-pointer"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="blog" ref={blogRef} className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-6">Blog</h2>
          <div className="border border-zinc-800 rounded-lg p-8 text-center">
            <h3 className="text-xl font-medium text-zinc-300 mb-2">
              Coming soon
            </h3>
            <p className="text-zinc-500 mb-4">
              Stay tuned for upcoming blog posts about technology and
              innovation.
            </p>
            <Link href="/blog">
              <Button
                variant="outline"
                className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border-zinc-700 hover:border-zinc-500 animate-slide-up"
              >
                View Blog
              </Button>
            </Link>
          </div>
        </section>

        <section id="connect" ref={connectRef} className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold mb-6">Connect</h2>
          <div className="flex flex-wrap gap-4">
            <Link href="mailto:contact@yonit.dev" target="_blank">
              <Button
                variant="outline"
                className="bg-black hover:bg-zinc-900 gap-2 hover:translate-y-[-2px] transition-transform duration-300 text-zinc-300 hover:text-white border-zinc-700 hover:border-zinc-500 animate-slide-up"
              >
                <Mail size={18} />
                Email
              </Button>
            </Link>
            <Link href="https://github.com/yonit1dev" target="_blank">
              <Button
                variant="outline"
                className="bg-black hover:bg-zinc-900 gap-2 hover:translate-y-[-2px] transition-transform duration-300 text-zinc-300 hover:text-white border-zinc-700 hover:border-zinc-500 animate-slide-up"
              >
                <Github size={18} />
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/yonitanosie" target="_blank">
              <Button
                variant="outline"
                className="bg-black hover:bg-zinc-900 gap-2 hover:translate-y-[-2px] transition-transform duration-300 text-zinc-300 hover:text-white border-zinc-700 hover:border-zinc-500 animate-slide-up"
              >
                <Linkedin size={18} />
                LinkedIn
              </Button>
            </Link>
            <Link href="https://x.com/yonathananosie" target="_blank">
              <Button
                variant="outline"
                className="bg-black hover:bg-zinc-900 gap-2 hover:translate-y-[-2px] transition-transform duration-300 text-zinc-300 hover:text-white border-zinc-700 hover:border-zinc-500 animate-slide-up"
              >
                <Twitter size={18} />
                Twitter
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

const companies = [
  {
    name: "MemhirET",
    role: "Technical Director",
    description: "Trying to make quality education accessible to everyone.",
    link: "https://memhiret.com",
  },
  {
    name: "YOLET Software Labs",
    role: "Technical Lead",
    description:
      "Creating software solutions localized to Ethiopia, prioritizing user experience.",
    link: "https://yoletent.com",
  },
];
