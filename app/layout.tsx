import "./globals.css";

export const metadata = {
  title: "Keploy Go Quickstart",
  description: "My experience recording and replaying API tests with Keploy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <a href="/" className="logo">
            <span className="logo-mark">K</span>
            Keploy Docs
          </a>

          <div className="nav-links">
            <a href="#introduction">Quickstart</a>
            <a href="#quick-command-reference">Commands</a>
            <a
              href="https://github.com/keploy"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
