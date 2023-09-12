import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <ul>
              <li>
                <Link href="/">Station</Link>
              </li>
              <li>
                <Link href="/owners">Owners</Link>
              </li>
              <li>
              <Link href="/fuck">Fuck</Link>
              </li>
              <li>
              <Link href="/chart">Chart</Link>
              </li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
