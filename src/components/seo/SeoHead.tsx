
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SeoHead = ({
  title = "OG Clan - Elite Call of Duty Mobile Gaming Community",
  description = "Join OG Clan, Cameroon's premier Call of Duty Mobile gaming community. Compete in tournaments, master Battle Royale on maps like Blackout and Alcatraz, and dominate multiplayer battles.",
  image = "/lovable-uploads/121c8bf6-df5d-4619-8e8d-6ade33a6f709.png",
  url = "https://og-clan.com",
  type = "website"
}: SeoHeadProps) => {
  const fullTitle = title.includes("OG Clan") ? title : `${title} | OG Clan`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="OG Clan, Call of Duty Mobile, COD Mobile, Gaming Clan, Cameroon Gaming, Battle Royale, Blackout, Alcatraz, Multiplayer, Gaming Tournament" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="OG Clan" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Gaming-specific structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "OG Clan",
          "description": description,
          "url": url,
          "logo": fullImageUrl,
          "sameAs": [],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SeoHead;
