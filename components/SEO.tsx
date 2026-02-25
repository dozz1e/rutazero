import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = "/images/inicio.webp", // Default OG image
  type = "website",
}) => {
  const location = useLocation();
  const baseUrl = "https://rutazero.cl";
  const currentUrl = `${baseUrl}/#${location.pathname}`;

  const siteName = "Ruta Zero | Logística & Carga Pesada";
  const fullTitle = title ? `${title} | Ruta Zero` : siteName;
  const defaultDescription =
    "Especialistas en transporte de carga sobredimensionada, logística minera y proyectos industriales en todo Chile. Seguridad y eficiencia en cada kilómetro.";
  const metaDescription = description || defaultDescription;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    const updateMeta = (name: string, content: string, property = false) => {
      let element = document.querySelector(
        property ? `meta[property="${name}"]` : `meta[name="${name}"]`,
      );
      if (!element) {
        element = document.createElement("meta");
        if (property) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("description", metaDescription);

    // Open Graph
    updateMeta("og:title", fullTitle, true);
    updateMeta("og:description", metaDescription, true);
    updateMeta("og:url", currentUrl, true);
    updateMeta("og:image", `${baseUrl}${image}`, true);
    updateMeta("og:type", type, true);
    updateMeta("og:site_name", "Ruta Zero Chile", true);

    // Twitter
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", fullTitle);
    updateMeta("twitter:description", metaDescription);
    updateMeta("twitter:image", `${baseUrl}${image}`);
  }, [fullTitle, metaDescription, currentUrl, image, type]);

  return null; // This component doesn't render anything
};

export default SEO;
