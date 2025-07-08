export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tools: string[];
  previewImage: string;
  media: (
    | { type: 'image'; url: string }
    | { type: 'video'; url: string }
    | { type: 'youtube'; youtubeId: string }
  )[];
  documents?: {
    title: string;
    url: string;
  }[];
  demoUrl?: string;
}
export interface Category {
  id: string;
  title: string;
  projects: Project[];
}