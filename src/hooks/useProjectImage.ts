import { useState, useEffect } from 'react';

interface ProjectImageResult {
  image: string | null;
  loading: boolean;
  error: boolean;
}

export const useProjectImage = (url: string, fallbackImage: string): ProjectImageResult => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) {
      setImage(fallbackImage);
      setLoading(false);
      return;
    }

    const fetchProjectImage = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(`/api/screenshot?url=${encodeURIComponent(url)}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }

        const data = await response.json();
        
        // OGP画像を優先し、なければTwitter画像、なければfallback
        const imageUrl = data.ogImage || data.twitterImage || fallbackImage;
        setImage(imageUrl);
      } catch (err) {
        console.error('Error fetching project image:', err);
        setError(true);
        setImage(fallbackImage);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectImage();
  }, [url, fallbackImage]);

  return { image, loading, error };
};
