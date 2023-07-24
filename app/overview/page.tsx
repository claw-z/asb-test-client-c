import Link from "next/link";

export default async function OverviewPage() {
  return (
    <div>
      <nav className="navbar">
        <Link href="/overview/cabinets">
          <button>cabinets</button>
        </Link>
        <Link href="/overview/owners">
          <button>owners</button>
        </Link>
      </nav>
    </div>
  );
}
