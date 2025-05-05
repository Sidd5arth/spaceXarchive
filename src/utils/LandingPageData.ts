import { ImageItem, LandingPageProps } from "../types/LandingPageTypes";

export const AVATAR_ITEMS: ImageItem[] = [
  {
    src: "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1645857195444-2064b4ecabf3?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?&format&fit=facearea&facepad=3&w=900&h=900&q=80&ixlib=rb-1.2.1",
    alt: "",
  },
  {
    src: "https://images.unsplash.com/photo-1707672972137-64390186af62?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "",
  },
];

export const IMAGE_GRID_ITEMS: ImageItem[][] = [
  [
    {
      src: "https://images2.imgbox.com/cf/e3/b0i2QZU1_o.png",
      alt: "",
    },
    {
      src: "https://images2.imgbox.com/df/2c/DsfygPln_o.png",
      alt: "",
    },
    {
      src: "https://images2.imgbox.com/3a/d1/R1MaGiiV_o.png",
      alt: "",
    },
    {
      src: "https://images2.imgbox.com/fd/59/nv3Ih3Am_o.png",
      alt: "",
    },
  ],
  [
    {
      src: "https://images2.imgbox.com/28/c4/dc3rQbGy_o.png",
      alt: "",
    },
    {
      src: "https://images2.imgbox.com/66/4e/eQQSQrXp_o.png",
      alt: "",
    },
    {
      src: "https://images2.imgbox.com/dd/c6/Qns2WYDQ_o.png",
      alt: "",
    },
    {
      src: "https://images2.imgbox.com/48/d4/MKsibD8N_o.png",
      alt: "",
    },
  ],
  [
    {
      src: "https://images2.imgbox.com/9c/f7/BNIV5kBE_o.png",
      alt: "",
    },
    {
      src: "https://images2.imgbox.com/14/bd/jSZymxYh_o.png",
      alt: "",
    },
    {
      src: "https://images2.imgbox.com/84/18/ahmKQNIj_o.png",
      alt: "",
    },
    {
      src: "https://images2.imgbox.com/e2/f3/RZJ7ET73_o.png",
      alt: "",
    },
  ],
];

export const LandingPageData: LandingPageProps = {
  badge: "Unlock every details",
  title: "Dive into the ultimate SpaceX archive",
  description:
    "explore every launch from historic successes to early failures. Discover in-depth details, captivating articles, and immersive videos that bring the story of space exploration to life.",
  callToAction: { label: "Start Browsing", href: "/resources" },
  rating: 5,
  ratingLabel: "1,000+ people surfing the Archive",
  imageGridItems: IMAGE_GRID_ITEMS,
  imageGridItemSize: { width: 200, height: 300 },
  avatarItems: AVATAR_ITEMS,
};
