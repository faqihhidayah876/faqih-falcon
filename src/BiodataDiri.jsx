import React from 'react';
import './App.css';

// 1. CHILD COMPONENT (Header)
const Header = () => (
  <header className="bio-header">
    <h1>Faqih</h1>
    <p>Information Systems Student | Web & AI Enthusiast</p>
  </header>
);

// 2. CHILD COMPONENT (About)
const About = () => (
  <section className="bio-section">
    <h2>Tentang Saya</h2>
    <p>Mahasiswa Sistem Informasi semester 4. Berpengalaman 
        di Laravel dan sedang antusias mengeksplorasi ekosistem React.js.</p>
  </section>
);

// 3. NESTED CHILD COMPONENT DENGAN PROPS
// Komponen ini menerima data "title" dan "desc" dari Parent-nya
const ProjectCard = ({ title, desc }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

// 4. CHILD COMPONENT (Projects - Parent dari ProjectCard)
const Projects = () => (
  <section className="bio-section">
    <h2>Portofolio Proyek</h2>
    <div className="project-grid">
      {/* Menerapkan Component dengan Props */}
      <ProjectCard 
        title="SAHAJA AI" 
        desc="Chatbot website berbasis Laravel dengan integrasi API AI." 
      />
      <ProjectCard 
        title="SkillUp" 
        desc="Platform literasi digital untuk komunitas marginal." 
      />
      <ProjectCard 
        title="Dashboard Gizi" 
        desc="Sistem deteksi dini stunting (Proyek PKM-PM)." 
      />
    </div>
  </section>
);

// 5. CHILD COMPONENT (Experience)
const Experience = () => (
  <section className="bio-section">
    <h2>Pengalaman Organisasi</h2>
    <ul>
      <li><strong>BLM Komisi 2</strong> - Mengurus aturan dan perundang-undangan.</li>
    </ul>
  </section>
);

// 6. CHILD COMPONENT (Contact)
const Contact = () => (
  <footer className="bio-footer">
    <p>Mari terhubung: github.com/faqih-falcon</p>
  </footer>
);

// ==========================================
// PARENT COMPONENT UTAMA
// ==========================================
const BiodataDiri = () => {
  return (
    <div className="container-utama">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default BiodataDiri;