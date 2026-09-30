// =============================================================================
// Project Data -- Render Forum
// =============================================================================

export type ProjectCategory = 'Architecture' | 'Interiors' | 'Residential' | 'Commercial';

export interface Project {
  id: string;
  slug: string;
  title: string;
  location?: string;
  category: ProjectCategory;
  year?: string;
  coverImage: string;
  gallery: string[];
  description?: string;
  area?: string;
  tagline?: string;
}

export const projects: Project[] = [
  {
    id: '01',
    slug: 'urban-retail-complex',
    title: 'Urban Retail Complex',
    location: 'Project Location, Year',
    category: 'Commercial',
    year: '2025',
    coverImage: '/img/Building1.png',
    gallery: ['/img/Building1.png', '/img/Interior1.png'],
    tagline: 'Where commerce meets contemporary form.',
    description: "A dynamic mixed-use retail complex designed to activate the urban streetscape. The building's angular facade creates a bold civic presence while the layered interior programming fosters diverse commercial activity. Materials were selected for durability and visual coherence across scales.",
    area: 'Available on request',
  },
  {
    id: '02',
    slug: 'private-residence-i',
    title: 'Private Residence I',
    location: 'Project Location, Year',
    category: 'Residential',
    year: '2025',
    coverImage: '/img/Building2.png',
    gallery: ['/img/Building2.png', '/img/Interior2.png', '/img/Interior3.png'],
    tagline: 'A home articulated through light and material.',
    description: 'A carefully composed private residence that balances openness and privacy through considered material choices. Perforated copper screens modulate light and create textured shadow across the facade. Landscaping is woven into the architecture at every level, softening boundaries between interior and exterior.',
    area: 'Available on request',
  },
  {
    id: '03',
    slug: 'executive-boardroom',
    title: 'Executive Boardroom',
    location: 'Project Location, Year',
    category: 'Interiors',
    year: '2024',
    coverImage: '/img/Interior1.png',
    gallery: ['/img/Interior1.png', '/img/Interior2.png'],
    tagline: 'Precision and presence in a corporate setting.',
    description: 'An executive meeting space designed to project authority and clarity. Warm timber panels, polished marble surfaces, and considered lighting create a layered interior that balances formality with warmth. The glazed partition system maintains visual connection while providing acoustic separation.',
    area: 'Available on request',
  },
  {
    id: '04',
    slug: 'contemporary-living',
    title: 'Contemporary Living',
    location: 'Project Location, Year',
    category: 'Interiors',
    year: '2024',
    coverImage: '/img/Interior2.png',
    gallery: ['/img/Interior2.png', '/img/Interior3.png'],
    tagline: 'Warmth and refinement in daily living.',
    description: 'A residential interior defined by tonal restraint and material richness. The living space unfolds through a series of carefully composed layers -- sculptural furniture, artisan wall panels, and a warm palette of cream, mocha, and gold. Each element is chosen for its contribution to the overall atmosphere of ease and sophistication.',
    area: 'Available on request',
  },
  {
    id: '05',
    slug: 'sanctuary-suite',
    title: 'Sanctuary Suite',
    location: 'Project Location, Year',
    category: 'Interiors',
    year: '2024',
    coverImage: '/img/Interior3.png',
    gallery: ['/img/Interior3.png', '/img/Interior2.png'],
    tagline: 'Rest, refined.',
    description: 'A private bedroom sanctuary designed as a retreat from the everyday. Layered lighting, tactile textures, and a tightly curated material palette create a space of deep calm. Soft daylight enters through sheer curtain panels; pendant lamps provide intimate warmth for evening hours.',
    area: 'Available on request',
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getAdjacentProjects = (slug: string): { prev: Project | null; next: Project | null } => {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
};

export const categories: Array<{ label: string; value: string }> = [
  { label: 'All', value: 'all' },
  { label: 'Architecture', value: 'Architecture' },
  { label: 'Interiors', value: 'Interiors' },
  { label: 'Residential', value: 'Residential' },
  { label: 'Commercial', value: 'Commercial' },
];
