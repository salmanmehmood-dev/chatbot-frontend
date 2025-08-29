export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Digital Agency",
    "description": "We are a leading digital agency that builds exceptional digital experiences for great teams.",
    "url": "https://yourdigitalagency.com",
    "logo": "https://yourdigitalagency.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "customer service",
      "email": "hello@digitalagency.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Street, Suite 100",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://twitter.com/digitalagency",
      "https://linkedin.com/company/digitalagency",
      "https://instagram.com/digitalagency"
    ],
    "service": [
      {
        "@type": "Service",
        "name": "Web Development",
        "description": "Creating responsive and fast websites with modern technologies"
      },
      {
        "@type": "Service", 
        "name": "Mobile Development",
        "description": "Building native and cross-platform mobile applications"
      },
      {
        "@type": "Service",
        "name": "UI/UX Design", 
        "description": "Designing beautiful and intuitive user interfaces"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
