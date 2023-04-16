import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>Top Nav</h1>
          <nav className={styles.nav}>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About us</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}