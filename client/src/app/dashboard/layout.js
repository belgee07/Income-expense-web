import { Header } from "@/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
