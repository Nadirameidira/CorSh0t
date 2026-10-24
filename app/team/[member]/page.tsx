export const instant = false;
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getTeamMemberBySlug, teamMembers } from "@/data/team";

type Props = {
  params: Promise<{ member: string }>;
};

export async function generateStaticParams() {
  return teamMembers.map((m) => ({ member: m.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { member } = await params;
  const data = getTeamMemberBySlug(member);
  if (!data) return { title: "Member Not Found" };
  return {
    title: `${data.name} - Team Corshot`,
    description: data.bio,
  };
}

export default async function TeamDetailPage({ params }: Props) {
  const { member } = await params;
  const data = getTeamMemberBySlug(member);
  if (!data) notFound();

  return (
    <div className="team-detail-wrapper">
      <Link href="/team" className="team-detail-back">
        ← Kembali ke Tim
      </Link>

      <div className="team-detail-card">
        <div className="team-detail-photo">
          <Image
            src={data.photo}
            alt={data.name}
            fill
            sizes="200px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="team-detail-info">
          <h1 className="team-detail-name">{data.name}</h1>
          <p className="team-detail-role">{data.role}</p>
          <p className="team-detail-bio">{data.longBio}</p>

          <h3 className="team-detail-expertise-title">Keahlian:</h3>
          <div className="team-detail-badges">
            {data.expertise.map((exp) => (
              <span key={exp} className="team-badge">
                {exp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}