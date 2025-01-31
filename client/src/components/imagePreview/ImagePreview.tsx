import { useEffect, useState } from "react";

type ImagePreviewProps = {
  image: File | null;
  style?: React.CSSProperties;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({ image, style }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (image) {
      const url = URL.createObjectURL(image);
      setImageUrl(url);

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [image]);

  if (!imageUrl) return null;

  return <img src={imageUrl} alt="Prévisualisation" style={style} />;
};

export default ImagePreview;
