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
                <Link href="/owners">Sound System Owners</Link>
              </li>
              <li>
              <Link href="/chart">Chart Example</Link>
              </li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
