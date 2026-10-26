// ─── PROJECT INFO ────────────────────────────────────────────────
// Edit each project's details here. The key is the folder number (id).
// thumbnail: part of a filename to use as the Projects page thumbnail
//   instead of the first image (can be a video).
// halfSize: parts of filenames to show at half size on the project page.
export interface ProjectInfo {
  name: string;
  client?: string;
  collaborators?: string;
  year?: string;
  deliverables?: string;
  brief?: string;
  solution?: string;
  thumbnail?: string;
  halfSize?: string[];
}

export const projectData: Record<string, ProjectInfo> = {
  '9': {
    name: 'LOVE JAMES',
    client: 'Love James',
    collaborators: 'Photography by Katie Begbie\nModel: Ali Rodinciuc',
    year: '2026',
    deliverables: 'Art Direction',
    solution: 'Love James is known for vintage bridal. The intention for this shoot was to showcase the dresses that belong beyond the wedding: at the after-party, or on women who aren’t brides.\n\nI treated the studio like a bedroom. Instead of the formality of a fitting, the space feels private and unhurried, a place to try things on the way you would at home: on the floor, across the sofa, half-dressed. Wide frames keep the room in the story, while soft natural light and a muted palette of blush, champagne and ivory make the dresses and the space feel like one wardrobe. The result is the feeling of visiting Love James itself: relaxed, intimate, yours to play in.',
  },
  '8': {
    name: 'ACTIVIST',
    client: 'Activist Mānuka Honey',
    collaborators: 'Completed as designer at Seachange Studio\nDevelopment done by MADE Studio',
    year: '2025',
    deliverables: 'Website design\nEDM templates\nSocial media templates',
  },
  '7': {
    name: 'PATINA X VILAR SECO',
    client: 'Patina\nVilar Seco',
    year: '2026',
    deliverables: 'Art Direction\nPhotography',
  },
  '6': {
    name: 'TAPESTRY',
    client: 'Tapestry\nA high-end property development in Wellington, NZ',
    year: '2026',
    deliverables: 'Brand Identity\nEditorial Design\nWebsite Design',
    halfSize: ['Tapestry_animation2'],
  },
  '5': {
    name: 'WINNIE CATHERINE',
    client: 'Winnie Catherine',
    collaborators: 'Photography by Katie Begbie\nHMU by Josie Wignall\nModel: Sabrina Brunton',
    year: '2026',
    deliverables: 'Art Direction',
  },
  '4': {
    name: 'HOTEL DES ARTISTES',
    client: 'Hotel Des Artistes\n(Personal Project)',
    year: 'WIP',
    deliverables: 'Brand Identity\nPhotography',
  },
  '3': {
    name: 'UNDERLENA X FRAME HOTEL',
    client: 'Underlena\nFrame Hotel',
    year: '2026',
    deliverables: 'Art Direction\nGraphic Design',
  },
  '2': {
    name: 'FURTHER READING',
    client: 'Further Reading',
    year: 'WIP',
    deliverables: 'Brand Identity\nWebsite Design\nEditorial Design',
  },
  '1': {
    name: 'MAYFAIR',
    client: 'Mayfair by Forma Group\nA luxury property development in Wellington, NZ',
    year: '2026',
    deliverables: 'Brand Identity\nEditorial Design\nWebsite Design',
  },
  '0': {
    name: 'LOVE JAMES',
    client: 'Love James',
    collaborators: 'Photography by Katie Begbie\nModel: Harper Sergeant',
    year: '2026',
    deliverables: 'Art Direction\nEditorial Design',
    solution: 'xxx',
  },
};
// ─────────────────────────────────────────────────────────────────
