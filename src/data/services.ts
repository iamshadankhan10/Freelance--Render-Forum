// =============================================================================
// Services / Expertise Data -- Render Forum
// =============================================================================

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  tags?: string[];
}

export const services: Service[] = [
  {
    id: 'architecture',
    number: '01',
    title: 'Architecture',
    description: 'From concept through construction, we design buildings that are coherent, contextually responsive, and materially grounded. Our architectural work spans residential, commercial, and mixed-use typologies.',
    tags: ['Concept Design', 'Schematic Design', 'Construction Documentation'],
  },
  {
    id: 'interior-design',
    number: '02',
    title: 'Interior Design',
    description: "Interior spaces are designed with the same rigour as the buildings that contain them. We work across material selection, furniture curation, lighting design, and spatial planning to create interiors that feel authentic and enduring.",
    tags: ['Spatial Planning', 'Material Selection', 'Lighting Design', 'Furniture Curation'],
  },
  {
    id: 'spatial-design',
    number: '03',
    title: 'Spatial Design',
    description: 'For projects where the boundary between architecture and interior dissolves, our spatial design practice considers experience, sequence, and atmosphere as primary design drivers.',
    tags: ['Experiential Design', 'Wayfinding', 'Installation Design'],
  },
  {
    id: 'planning',
    number: '04',
    title: 'Planning & Consultation',
    description: "We provide thoughtful planning guidance and design consultation at the earliest stages of a project, helping clients understand the potential of a site or space before commitment.",
    tags: ['Site Analysis', 'Feasibility', 'Design Advisory'],
  },
];
