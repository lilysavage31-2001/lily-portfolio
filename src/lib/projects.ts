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
  recognition?: string;
  thumbnail?: string;
  halfSize?: string[];
}

export const projectData: Record<string, ProjectInfo> = {
  '9': {
    name: 'LOVE JAMES / ART DIRECTION',
    client: 'Love James',
    collaborators: 'Photography by Katie Begbie\nModel: Ali Rodinciuc',
    year: '2026',
    deliverables: 'Art Direction',
    solution: 'Love James is known for vintage bridal. The intention for this shoot was to showcase the dresses that belong beyond the wedding: at the after-party, or on women who aren’t brides.\n\nI treated the studio like a bedroom. Instead of the formality of a fitting, the space feels private and unhurried, a place to try things on the way you would at home: on the floor, across the sofa, half-dressed. Wide frames keep the room in the story, while soft natural light and a muted palette of blush, champagne and ivory make the dresses and the space feel like one wardrobe. The result is the feeling of visiting Love James itself: relaxed, intimate, yours to play in.',
  },
  '8': {
    name: 'ACTIVIST / GRAPHIC DESIGN',
    client: 'Activist Mānuka Honey',
    collaborators: 'Completed as designer at Seachange Studio\nDevelopment done by MADE Studio',
    year: '2025',
    deliverables: 'Website design\nEDM templates\nSocial media templates',
    solution: 'We kept the Shopify website clean and minimal, only adding interactions and elements that felt aligned with their products, tone of voice and direction, while feeling elevated and contemporary. Large editorial imagery leads, with minimal copy, so the texture of the honey and the ritual of using it do the selling. Images drift slowly and sections fade in on scroll, matching the brand’s invitation to slow down. Rounded frames with a blur on hover interaction echo the packaging. Navigation is grouped by benefit rather than product type, so honey, skincare and objects show up cohesively, as one routine.',
    recognition: '<a href="https://bestawards.co.nz/digital/e-commerce-websites/seachange/activist/" target="_blank" rel="noopener">Best Awards Bronze</a>',
  },
  '7': {
    name: 'PATINA X VILAR SECO / SOCIAL CONTENT',
    client: 'Patina\nVilar Seco',
    year: '2026',
    deliverables: 'Art Direction\nPhotography',
    solution: 'Photography of the Patina lingerie sets in the setting of the Vilar Seco bedroom, I photographed the collection without a model, in the guest rooms of a winery in Portugal. Each piece is placed into the room: draped over a brass bedframe, laid across a floral bedspread, hung on a wooden chair so the garments feel personal, as if just taken off. Soft natural light and faded, warm tones give the images the quality of an old photograph. The imagery was shot for use across social media, the website and email, giving the brand one consistent editorial look from first impression to purchase.',
  },
  '6': {
    name: 'TAPESTRY / GRAPHIC DESIGN',
    client: 'Tapestry\nA high-end property development in Wellington, NZ',
    year: '2026',
    deliverables: 'Brand Identity\nEditorial Design\nWebsite Design',
    solution: 'TAPESTRY is about fitting into the neighbourhood rather than standing apart from it. The logo is animated: the letters move around a badge that keeps changing shape, like threads being rewoven, for a building made for changing ways of living. The type balances a tall serif with a clean sans. The serif gives the brand a sense of permanence and character, while the sans handles practical details like amenities, keeping it modern and easy to read for a young audience. Deep red brings warmth and energy, darker oxblood grounds it, and warm cream keeps it soft and homely rather than corporate. The photography shows life around the building, not just the building itself.',
    halfSize: ['Tapestry_animation2'],
  },
  '5': {
    name: 'WINNIE CATHERINE / ART DIRECTION',
    client: 'Winnie Catherine',
    collaborators: 'Photography by Katie Begbie\nHMU by Josie Wignall\nModel: Sabrina Brunton',
    year: '2026',
    deliverables: 'Art Direction of a series of editorial images to showcase Winnie’s AW collection. Visual outputs to be used for promotional material in the lead up to Winnie Catherine’s debut in New Zealand Fashion Week.',
    solution: 'Winnie Catherine’s garments are structured and strong, yet feminine and delicate. I built the shoot around that balance. The palette is limited to black, white and soft grey, so the focus stays on silhouette and form, letting each shape read clearly. Unexpected angles, from overhead and from behind, show the structure of the cut. Gentle, inward poses bring out the softness. Together they show both the garments and the feeling the brand wants its customer to have wearing them: composed, confident and quietly at ease.',
  },
  '4': {
    name: 'HOTEL DES ARTISTES / GRAPHIC DESIGN',
    client: 'Hotel Des Artistes\n(Personal Project)',
    year: '2026 WIP',
    deliverables: 'Brand Identity\nPhotography',
    solution: 'The aim for this work in progress, is a mark that feels as though it has always been there, yet still reads as contemporary. Its shape borrows from old hotel stationery: an italic serif name above a stacked address, with a small date in a stamp-like frame. The modern feel comes from how it’s handled. It’s set black on cream with no colour and kept small, and on some pieces the type is turned on an angle. The patterned wallpaper, stripes and velvet supply all the richness, so the mark sits quietly within the interiors as part of the setting, much like a piece of stationery left on a chair.',
  },
  '3': {
    name: 'UNDERLENA X FRAME HOTEL / SOCIAL CONTENT',
    client: 'Underlena\nFrame Hotel',
    year: '2026',
    deliverables: 'Art Direction\nGraphic Design',
    solution: 'A series of photographs taken for Frame Hotel in Austin, Texas. The series leans into the room’s late-90s character: aqua glass mosaic tiles, a frameless glass shower and a bath set into a tiled ledge. Rather than styling it into something new, I let the bathroom’s era lead. Underlena’s red pieces are draped over the bath edge and laid across the tiles as if just taken off.',
  },
  '2': {
    name: 'FURTHER READING / GRAPHIC DESIGN',
    client: 'Further Reading',
    year: '2026 WIP',
    deliverables: 'Brand Identity\nWebsite Design\nEditorial Design',
    solution: 'Further Reading is a work in progress project. The brand exists to provide new parents with resources, content and words of wisdom during their journey through parenthood. The brand needs to have a playful element, while remaining sophisticated and professional, retaining a trustworthy presence. The brand communicates this through a custom hand-drawn child-like font, paired with traditional serifs and Helvetica to tie back to children’s early learning material. ',
  },
  '1': {
    name: 'SOUL CAPITAL / GRAPHIC DESIGN',
    client: 'SOUL CAPITAL',
    year: '2026',
    deliverables: 'Brand Identity',
    solution: 'Soul Capital’s core brand idea is ‘Move when it matters’. This speaks to the company’s measured and deliberate care when it comes to investment decision making. The visual identity needs to answer the question ‘How can we communicate partnership, connected impact & cue the financial world?’\n\nTo illustrate Soul Capital’s grounded conviction and confidence, and representing growth in a non linear way, I used a simple horizon line graphic. The horizon line is the connective thread, it speaks to the notion of a long term view and expansive horizons of opportunity, in a non-linear or cliche way.',
  },
  '0': {
    name: 'MCKIBBON’S / GRAPHIC DESIGN',
    client: 'McKibbon’s of Royalburn is a gourmet food store and deli celebrating premium, locally sourced produce.',
    collaborators: 'Completed as designer at Seachange Studio',
    year: '2025',
    deliverables: 'Brand Identity\nIllustration',
    solution: 'I contributed to the development of the McKibbons brand by defining an illustration style and applying it to a full set for use in the supermarket internal signage and in marketing applications. I also defined the overall imagery art direction, conducting research and curating stock photography to align with the brand’s visual direction.\n\nAfter delivering the McKibbons brand to the client, they requested some story telling pieces that tie in the history of the McKibbon name. William McKibbon was a pioneering farmer. To illustrate this heritage, I developed and crafted a set of badges to be used in small applications throughout the brand. Illustrations created in Midjourney.',
  },
};
// ─────────────────────────────────────────────────────────────────

// URL slug from the part of the name before the "/", e.g. "MCKIBBON’S / GRAPHIC DESIGN" → "mckibbons".
// Projects without a projectData entry keep their folder number.
export function projectSlug(id: string): string {
  const name = projectData[id]?.name;
  if (!name) return id;
  const slug = name
    .split('/')[0]
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return slug || id;
}

export function projectIdFromSlug(slug: string): string | undefined {
  return Object.keys(projectData).find((id) => projectSlug(id) === slug);
}
