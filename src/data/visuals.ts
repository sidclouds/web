export type VisualItem = {
  id: string;
  image: string;
  altKey: string;
  credit?: string;
};

export const visuals: VisualItem[] = [
  {
    id: 'anime-girl',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Anime_girl.png',
    altKey: 'visuals.animeGirl',
    credit: 'Wikimedia Commons',
  },
  {
    id: 'fantasy-garden',
    image: 'https://cdn.pixabay.com/photo/2023/03/11/22/22/ai-generated-7845471_1280.jpg',
    altKey: 'visuals.fantasyGarden',
    credit: 'Pixabay',
  },
  {
    id: 'city-night',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/18/Illustration_of_a_city_of_buildings_at_night_created_by_Stable_Diffusion.webp',
    altKey: 'visuals.cityNight',
    credit: 'Wikimedia Commons',
  },
];
