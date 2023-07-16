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
                <Link href="/cabinets">Cabinet collections</Link>
              </li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
