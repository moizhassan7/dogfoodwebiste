
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-montys-beige py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-montys-green">404</h1>
          <p className="text-xl text-montys-green-light mb-8">Oops! Page not found</p>
          <p className="mb-8 max-w-md mx-auto">
            We couldn't find the page you're looking for. Perhaps you'd like to browse our dog food offerings instead?
          </p>
          <a href="/" className="btn-primary">
            Return to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
