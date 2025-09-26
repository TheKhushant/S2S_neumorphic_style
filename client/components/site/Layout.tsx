import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/30">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
