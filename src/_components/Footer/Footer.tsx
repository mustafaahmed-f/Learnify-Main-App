"use client";

import Link from "next/link";
import { Send, Globe, Share2, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-section border-border border-t">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* =========================
            DESKTOP
        ========================= */}
        <div className="hidden gap-10 md:grid md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-foreground text-lg font-semibold">Learnify</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Curating the world's best professional education to empower the
              next generation of industry leaders.
            </p>

            {/* Icons */}
            <div className="flex gap-3">
              <IconButton icon={<Globe size={16} />} />
              <IconButton icon={<Share2 size={16} />} />
              <IconButton icon={<AtSign size={16} />} />
            </div>
          </div>

          {/* Explore */}
          <FooterColumn
            title="Explore"
            links={["Courses", "Mentors", "Learning Paths", "Scholarships"]}
          />

          {/* Platform */}
          <FooterColumn
            title="Platform"
            links={["About Us", "Careers", "Help Center", "Terms of Service"]}
          />

          {/* Newsletter */}
          <div className="space-y-4 md:col-start-2 md:col-end-3 lg:col-span-1">
            <h4 className="text-foreground text-sm font-semibold">
              Stay Informed
            </h4>
            <p className="text-muted-foreground text-sm">
              Join our newsletter for weekly insights and course updates.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-muted border-border focus:ring-ring h-10 flex-1 rounded-lg border px-3 text-sm outline-none focus:ring-2"
              />
              <button className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-lg transition hover:opacity-90">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* =========================
            MOBILE
        ========================= */}
        <div className="space-y-6 text-center md:hidden">
          <h3 className="text-foreground text-xl font-semibold">Learnify</h3>

          <p className="text-muted-foreground text-sm">
            The Digital Curator. Authority in Education.
          </p>

          <div className="text-muted-foreground flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#">About Us</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Help Center</Link>
            <Link href="#">Careers</Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-border my-8 border-t" />

        {/* Bottom */}
        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p>© 2026 Learnify. Editorial Authority in Education.</p>

          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================
   Sub Components
========================= */

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="space-y-3 md:text-center lg:text-start">
      <h4 className="text-foreground text-sm font-semibold">{title}</h4>
      <ul className="text-muted-foreground space-y-2 text-sm">
        {links.map((link) => (
          <li key={link}>
            <Link href="#" className="hover:text-foreground transition">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground flex h-9 w-9 items-center justify-center rounded-full transition">
      {icon}
    </button>
  );
}
