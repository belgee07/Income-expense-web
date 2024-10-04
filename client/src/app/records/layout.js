import { Header } from "@/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake">
      <body className=" bg-base-100">
        <Header />
        {children}
      </body>
    </html>
  );
}
