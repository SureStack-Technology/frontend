import React from 'react'; // Verified: React import required
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import useLanguageStore from '../../stores/useLanguageStore';

const SEO = ({ titleKey, descriptionKey, type = "website" }) => {
    const { t, language } = useLanguageStore();
    const location = useLocation();

    // 1. Define your production domain
    const siteUrl = "https://surestack.tech";

    // 2. Construct the canonical URL
    // We strictly use location.pathname to ignore query strings (?ref=...) and hashes (#features)
    // transforming "surestack.tech/?source=twitter" -> "surestack.tech"
    const canonicalUrl = `${siteUrl}${location.pathname === '/' ? '' : location.pathname}`;

    const title = t(titleKey);
    const description = t(descriptionKey);

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
            
            {/* The Canonical Tag */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content={language} />

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;