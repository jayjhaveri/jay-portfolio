
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import PrimaryButton from "../components/PrimaryButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <PrimaryButton to="/">
          Return to Home
        </PrimaryButton>
      </div>
    </Layout>
  );
};

export default NotFound;
