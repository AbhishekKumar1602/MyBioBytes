"use client"

import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <section className="mt-10 space-y-6 mx-auto">
      <div className="space-y-12">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}>
              <p className="text-sm text-emerald-300 font-semibold mb-10">
                Hello, I'm ABHISHEK.
              </p>
              <h1 className="text-4xl font-extrabold text-slate-100 italic">
                "Simplifying Complexity with DevOps – Driving Resilience, Security & Scalable Growth."
              </h1>
            </motion.div>
          </div>
          <aside className="flex items-start justify-end">
            <motion.div
              className="w-56 sm:w-72 md:w-80 aspect-square overflow-hidden rounded-lg shadow-lg"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}>
              <Image
                height={1000}
                width={1000}
                src="/profile.jpeg"
                alt="Profile"
                className="w-full h-full object-cover block"/>
            </motion.div>
          </aside>
        </div>
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.0, ease: "easeOut", delay: 1.0 }}>
          <div>
            <h2 className="text-4xl font-extrabold text-slate-100">About Me</h2>
            <div className="mt-6 flex gap-3">
            </div>
          </div>
          <div>
            <p className="text-slate-300 leading-relaxed text-lg font-semibold">
              "I’m a DevOps Engineer with a passion for building scalable, secure, 
              and cost-optimized cloud solutions. I enjoy automating infrastructure, 
              designing CI/CD pipelines, implementing Infrastructure as Code (IaC), 
              and containerizing and orchestrating applications. I also focus on 
              deploying monitoring solutions that ensure reliability. My goal is always 
              to create systems that are resilient,secure, efficient, and future-proof."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
