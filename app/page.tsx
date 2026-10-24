"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const services = [
  {
    title: "Web Development",
    desc: "Website company profile, landing page, dan web app yang cepat, responsif, dan SEO-friendly.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "UI/UX Design",
    desc: "Desain antarmuka yang bersih, mudah dipakai, dan sesuai kebutuhan pengguna Anda.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Mobile App",
    desc: "Aplikasi Android & iOS yang ringan, stabil, dan siap dirilis ke store.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    desc: "Kelola iklan, konten, dan sosial media agar bisnis Anda lebih mudah ditemukan.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
  {
    title: "Maintenance",
    desc: "Update rutin, backup, dan monitoring agar website tetap aman dan cepat.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Konsultasi IT",
    desc: "Diskusikan kebutuhan digital bisnis Anda dengan tim kami, tanpa biaya awal.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const clients = ["Telkom", "Gojek", "Tokopedia", "Traveloka", "Bukalapak", "Blibli"];

const workEnvPoints = [
  "Remote-friendly — bekerja dari mana saja, yang penting hasil.",
  "Jam kerja fleksibel, tidak micro-managing.",
  "Tools modern: GitHub, Figma, Notion, Slack.",
  "Buddy system & code review rutin untuk saling belajar.",
  "Budget tahunan untuk kursus, buku, dan konferensi.",
  "Tim kecil, komunikasi langsung, tanpa birokrasi berlebihan.",
];

export default function HomePage() {
  // Animasi scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">a Digital Agency the only one in Teyvat</span>
          <h1 className="hero-title">
            Wujudkan Ide Digital Anda Bersama{" "}
            <span className="accent">Corshot</span>
          </h1>
          <p className="hero-subtitle">
            Kami adalah tim kreatif dan developer profesional yang siap membantu
            bisnis Anda tumbuh melalui teknologi.
          </p>
          <div className="hero-actions">
            <Link href="/team" className="btn btn-primary btn-lg">
              Lihat Tim Kami
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Hubungi Kami
            </Link>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>


      <section className="logo-strip">
        <p className="logo-strip-title">Dipercaya oleh berbagai perusahaan</p>
        <div className="logo-grid">
          {clients.map((c) => (
            <div key={c} className="logo-item">
              {c}
            </div>
          ))}
        </div>
      </section>

     
      <section className="section section-alt reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Layanan</span>
            <h2 className="section-title">Apa yang Kami Jual</h2>
            <p className="section-desc">
              Solusi digital menyeluruh — dari desain, pengembangan, sampai
              pemeliharaan. Anda tinggal fokus ke bisnis, kami urus teknisnya.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="section reveal">
        <div className="container">
          <div className="env-wrapper">
            <div className="env-text">
              <span className="section-label">Environment Kerja</span>
              <h2 className="section-title">
                Tempat di mana orang berkembang
              </h2>
              <p className="section-desc">
                Kami percaya produk yang baik lahir dari tim yang bahagia. Itu
                sebabnya kami membangun budaya kerja yang sehat, terbuka, dan
                suportif.
              </p>
              <ul className="env-list">
                {workEnvPoints.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="env-image">
              <Image
                src="/office.jpg"
                alt="Suasana kantor Corshot"
                width={600}
                height={450}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="env-image-badge">
                <strong>20+</strong>
                <span>Anggota tim yang solid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section reveal">
        <div className="container">
          <h2 className="section-title">Siap mulai proyek Anda?</h2>
          <p className="section-desc">
            Ceritakan ide Anda, kami bantu wujudkan — tanpa biaya konsultasi awal.
          </p>
          <Link href="/contact" className="btn btn-lg">
            Mulai Diskusi
          </Link>
        </div>
      </section>
    </>
  );
}