import React from "react";
import Navbar from "../../components/custom-ui/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-light-bg min-h-screen text-dark-text">
      <Navbar />
      <main className="w-full max-w-6xl mx-auto">{children}</main>
    </section>
  );
};

export default DashboardLayout;
