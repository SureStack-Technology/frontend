import React from "react";
import { Helmet } from 'react-helmet-async';
import useLanguageStore from '../../stores/useLanguageStore';

const SEO = ({ titleKey, descriptionKey, type = "website" }) => {
    const { t, language } = useLanguageStore();

    // Dynamically fetch translated strings
    const title = t(titleKey);
    const description = t(descriptionKey);

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />

            {/* Open Graph / Facebook (Crucial for Social Sharing) */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content={language} />

            {/* Twitter Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;