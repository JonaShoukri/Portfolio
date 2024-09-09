import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords }) => {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Jonas Shoukri",
        "jobTitle": "Full Stack Developer",
        "description": "Full-stack developer and software engineer based in Montreal, Canada, specializing in React, .NET, and multi-tier system design.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Montreal",
            "addressCountry": "Canada"
        },
        "url": "https://jonasshoukri.com",
        "sameAs": [
            "https://www.linkedin.com/in/jonas-shoukri-832967215/",
            "https://github.com/jonashoukri"
        ]
    };

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            {/* Adding the JSON-LD structured data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaMarkup)}
            </script>
        </Helmet>
    );
};

export default SEO;
