// SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, preloadImage }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {preloadImage && (
        <link rel="preload" as="image" href={preloadImage} type="image/jpeg" />
      )}
      {/* Add more tags as needed */}
    </Helmet>
  );
};

export default SEO;
