import Link from "next/link";
import Image from "next/image";
import { teamMembers } from "@/data/team";

export default function TeamPage() {
  return (
    <div className="team-wrapper">
      <div className="team-header">
        <h1>Tim Kami</h1>
        <p>Kenali orang-orang hebat di balik layar Corshot.</p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <Link
            key={member.slug}
            href={`/team/${member.slug}`}
            className="team-card"
          >
            <div className="team-card-photo">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="team-card-body">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}