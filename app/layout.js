import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="emerald" lang="en">
      <body>{children}</body>
    </html>
  );
}
