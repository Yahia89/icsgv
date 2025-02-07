// SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, preloadImage, priority = 'low' }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {preloadImage && (
        <link 
          rel="preload" 
          as="image" 
          href={preloadImage} 
          fetchpriority={priority}
          type="image/png"
        />
      )}
    </Helmet>
  );
};

export default SEO;
