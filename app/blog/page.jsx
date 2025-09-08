"use client"

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "github-markdown-css/github-markdown.css"; 
import "highlight.js/styles/github-dark.css";

const posts = [
  {
    id: "migrate-monolith",
    title: "How I migrated a monolith to containers",
    date: "Apr 12, 2025",
    readTime: "8 min read",
    excerpt: "Short excerpt from the post. Explain the problem and the approach.",
    mdPath: "/blogs/migrate-monolith.md",
  },
  {
    id: "reserved-instances",
    title: "Cost saving with reserved instances",
    date: "Jan 20, 2025",
    readTime: "6 min",
    excerpt: "Short excerpt with tips and measurable results.",
    mdPath: "/blogs/reserved-instances.md",
  },
];

export default function Blog() {
  const [openPost, setOpenPost] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!openPost) return;

    let cancelled = false;
    setLoading(true);
    setErr(null);
    setContent("");
    fetch(openPost.mdPath)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${openPost.mdPath}: ${res.status}`);
        return res.text();
      })
      .then((md) => {
        if (!cancelled) {
          setContent(md);
        }
      })
      .catch((e) => {
        if (!cancelled) setErr(e.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [openPost]);
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpenPost(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  function onOverlayClick(e) {
    if (overlayRef.current && e.target === overlayRef.current) {
      setOpenPost(null);
    }
  }
  return (
    <section className="space-y-6 mx-auto">
      <h1 className="text-4xl font-extrabold">Blog</h1>
      <div className={`mt-6 grid md:grid-cols-2 gap-4 ${openPost ? "pointer-events-none" : ""}`}>
        {posts.map((p) => (
          <article
            key={p.id}
            className="card cursor-pointer"
            onClick={() => setOpenPost(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setOpenPost(p);
            }}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-slate-400">
              {p.date} · {p.readTime}
            </p>
            <p className="text-slate-300 mt-2">{p.excerpt}</p>
          </article>
        ))}
      </div>
      {openPost && (
        <div
          ref={overlayRef}
          onClick={onOverlayClick}
          className="fixed inset-0 z-50 flex items-start justify-center px-4 py-8"
          style={{
            backgroundColor: "rgba(2,6,23,0.6)",
            backdropFilter: "blur(6px)",
          }}
          aria-modal="true"
          role="dialog"
          aria-label={openPost.title}>
          <div
            className="w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-auto"
            style={{ maxHeight: "90vh" }}>
            <div className="flex items-start justify-between p-4 border-b border-slate-800">
              <div>
                <h2 className="text-xl font-semibold">{openPost.title}</h2>
                <p className="text-sm text-slate-400">{openPost.date} · {openPost.readTime}</p>
              </div>
              <button
                onClick={() => setOpenPost(null)}
                className="ml-4 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
                aria-label="Close">
                <svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
            <div>
              {loading && <p>Loading post…</p>}
              {err && <p className="text-rose-400">Error: {err}</p>}
              {!loading && !err && content && (
                <div className="markdown-body bg-transparent text-slate-200 p-6">
                  <ReactMarkdown
                    children={content}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeHighlight]}
                    skipHtml={false}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
