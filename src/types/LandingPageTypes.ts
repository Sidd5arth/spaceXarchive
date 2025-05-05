export type ImageItem = { src: string; alt: string };

export type LandingPageProps = {
  imageGridItems: ImageItem[][];
  imageGridItemSize: { width: number; height: number };
  avatarItems: ImageItem[];
  badge: string;
  title: string;
  description: string;
  callToAction: { label: string };
  rating: number;
  ratingLabel: string;
};
