export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  longBio: string;
  expertise: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "mavuika",
    name: "Mavuika",
    role: "Frontend Developer",
    photo: "/mavuika.jpg",
    bio: "Berfokus pada pengembangan antarmuka yang bersih dan konsisten.",
    longBio:
      "Mavuika bertanggung jawab memastikan setiap komponen frontend berjalan konsisten di seluruh halaman. Ia terbiasa melakukan refactoring untuk menjaga kualitas kode dan cepat mengidentifikasi masalah teknis saat pengujian.",
    expertise: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "zhongli",
    name: "Zhongli",
    role: "Backend Developer",
    photo: "/zhongli.jpg",
    bio: "Merancang arsitektur backend yang stabil dan mudah dipelihara.",
    longBio:
      "Zhongli berfokus pada perancangan struktur data dan API yang dapat bertahan dalam jangka panjang. Ia mendahulukan solusi yang terukur dibanding perbaikan cepat, dan terbiasa menjelaskan keputusan teknis kepada tim.",
    expertise: ["Node.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    slug: "nahida",
    name: "Nahida",
    role: "Lead UI/UX Designer",
    photo: "/nahida.jpg",
    bio: "Mengutamakan kemudahan penggunaan di setiap desain.",
    longBio:
      "Nahida memimpin proses desain dengan pendekatan berbasis riset pengguna. Ia terbiasa mengiterasi desain berdasarkan feedback dan memastikan setiap keputusan visual memiliki alasan yang jelas.",
    expertise: ["Figma", "Prototyping", "User Research", "Design System"],
  },
  {
    slug: "raiden",
    name: "Raiden Shogun",
    role: "Quality Assurance",
    photo: "/raiden.jpg",
    bio: "Memastikan setiap fitur siap sebelum dirilis.",
    longBio:
      "Raiden bertanggung jawab menguji seluruh alur aplikasi, termasuk skenario yang jarang terjadi. Ia mencatat temuan secara terstruktur dan memastikan setiap perbaikan diverifikasi sebelum masuk ke production.",
    expertise: ["Manual Testing", "Automation Testing", "Cypress", "Jest"],
  },
  {
    slug: "venti",
    name: "Venti",
    role: "Project Manager",
    photo: "/venti.jpg",
    bio: "Menjaga ritme tim dan memastikan proyek berjalan sesuai rencana.",
    longBio:
      "Venti mengoordinasikan pekerjaan antar divisi dan memantau progres proyek secara berkala. Ia memastikan hambatan cepat teridentifikasi dan komunikasi tim tetap efektif.",
    expertise: ["Agile", "Scrum", "Jira", "Communication"],
  },
];

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((m) => m.slug === slug);
}