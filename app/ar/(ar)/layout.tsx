import "./globals.css";
import Header from "@components/header_ar/header";
import Footer from "@/components/footer_ar/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="body-ar">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
