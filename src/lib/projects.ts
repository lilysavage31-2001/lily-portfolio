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
    solution: 'We kept the Shopify website clean and minimal, only adding interactions and elements that felt aligned with their products, tone of voice and direction, while feeling elevated and contemporary. Large editorial imagery leads, with minimal copy, so the texture of the honey and the ritual of using it do the selling. Images drift slowly and sections fade in on scroll, matching the brand’s invitation to slow down. Rounded frames with a blur on hover interaction echo the packaging. Navigation is grouped by benefit rather than product type, so honey, skincare and objects show up cohesively, as one routine.',
    recognition: '<a href="https://bestawards.co.nz/digital/e-commerce-websites/seachange/activist/" target="_blank" rel="noopener">Best Awards Bronze</a>',
  },
  '7': {
    name: 'PATINA X VILAR SECO',
    client: 'Patina\nVilar Seco',
    year: '2026',
    deliverables: 'Art Direction\nPhotography',
    solution: 'Photography of the Patina lingerie sets in the setting of the Vilar Seco bedroom, I photographed the collection without a model, in the guest rooms of a winery in Portugal. Each piece is placed into the room: draped over a brass bedframe, laid across a floral bedspread, hung on a wooden chair so the garments feel personal, as if just taken off. Soft natural light and faded, warm tones give the images the quality of an old photograph, a natural fit for a brand called Patina. The red of the lingerie is the only saturated colour, so it holds the eye in every frame. The imagery was shot for use across social media, the website and email, giving the brand one consistent editorial look from first impression to purchase.',
  },
  '6': {
    name: 'TAPESTRY',
    client: 'Tapestry\nA high-end property development in Wellington, NZ',
    year: '2026',
    deliverables: 'Brand Identity\nEditorial Design\nWebsite Design',
    solution: 'TAPESTRY is about fitting into the neighbourhood rather than standing apart from it. The logo is animated: the letters move around a badge that keeps changing shape, like threads being rewoven, for a building made for changing ways of living. The type balances a tall serif with a clean sans. The serif gives the brand a sense of permanence and character, while the sans handles practical details like amenities, keeping it modern and easy to read for a young audience. Deep red brings warmth and energy, darker oxblood grounds it, and warm cream keeps it soft and homely rather than corporate. The photography shows life around the building, not just the building itself.',
    halfSize: ['Tapestry_animation2'],
  },
  '5': {
    name: 'WINNIE CATHERINE',
    client: 'Winnie Catherine',
    collaborators: 'Photography by Katie Begbie\nHMU by Josie Wignall\nModel: Sabrina Brunton',
    year: '2026',
    deliverables: 'Art Direction of a series of editorial images to showcase Winnie’s AW collection. Visual outputs to be used for promotional material in the lead up to Winnie Catherine’s debut in New Zealand Fashion Week.',
    solution: 'Winnie Catherine’s garments are structured and strong, yet feminine and delicate. I built the shoot around that balance. The palette is limited to black, white and soft grey, so the focus stays on silhouette and form, letting each shape read clearly. Unexpected angles, from overhead and from behind, show the structure of the cut. Gentle, inward poses bring out the softness. Together they show both the garments and the feeling the brand wants its customer to have wearing them: composed, confident and quietly at ease.',
  },
  '4': {
    name: 'HOTEL DES ARTISTES',
    client: 'Hotel Des Artistes\n(Personal Project)',
    year: '2026 WIP',
    deliverables: 'Brand Identity\nPhotography',
    solution: 'The aim for this work in progress, is a mark that feels as though it has always been there, yet still reads as contemporary. Its shape borrows from old hotel stationery: an italic serif name above a stacked address, with a small date in a stamp-like frame. The modern feel comes from how it’s handled. It’s set black on cream with no colour and kept small, and on some pieces the type is turned on an angle. The patterned wallpaper, stripes and velvet supply all the richness, so the mark sits quietly within the interiors as part of the setting, much like a piece of stationary left on a chair.',
  },
  '3': {
    name: 'UNDERLENA X FRAME HOTEL',
    client: 'Underlena\nFrame Hotel',
    year: '2026',
    deliverables: 'Art Direction\nGraphic Design',
    solution: 'A series of photographs taken for Frame Hotel in Austin, Texas. The series leans into the room’s late-90s character: aqua glass mosaic tiles, a frameless glass shower and a bath set into a tiled ledge. Rather than styling it into something new, I let the bathroom’s era lead. Underlena’s red pieces are draped over the bath edge and laid across the tiles as if just taken off.',
  },
  '2': {
    name: 'FURTHER READING',
    client: 'Further Reading',
    year: '2026 WIP',
    deliverables: 'Brand Identity\nWebsite Design\nEditorial Design',
    solution: 'Further Reading is a work in progress project. The brand exists to provide new parents with resources, content and words of wisdom during their journey through parenthood. The brand needs to have a playful element, while remaining sophisticated and professional, retaing a trust-worthy precense. The brand communicates this through a custom hand-drawn child like font, paired with traditional serifs and Helvetica to tie back to childrens early learning material. ',
  },
  '1': {
    name: 'MAYFAIR',
    client: 'Mayfair by Forma Group\nA luxury property development in Wellington, NZ',
    year: '2026',
    deliverables: 'Brand Identity\nEditorial Design\nWebsite Design',
    solution: 'The brand identity for Mayfair Mount Victoria is a refined and elegant visual system with a crafted logo and emblem. The design is rooted in the natural setting of Mount Victoria, with colours, imagery and the use of soft gradients that evoke calmness, sophistication, and wellness. Created to appeal to residents looking to downsize without compromising on style, comfort, or lifestyle quality.',
  },
  '0': {
    name: 'LOVE JAMES',
    client: 'Love James',
    collaborators: 'Photography by Katie Begbie\nModel: Harper Sergeant',
    year: '2026',
    deliverables: 'Art Direction\nEditorial Design',
    solution: 'A test shoot in the studio, styled with Love James jewellery. The photographs are printed and re-photographed to add a tactility element to the images.  ',
  },
};
// ─────────────────────────────────────────────────────────────────
