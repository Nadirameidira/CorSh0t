import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        © {year} Corshot Company Profile. All rights reserved.
      </p>
    </footer>
  );
}