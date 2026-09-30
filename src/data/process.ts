// =============================================================================
// Process Data -- Render Forum
// =============================================================================

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: "We begin by listening -- to the client's aspirations, the site's character, and the wider context. A thorough understanding of brief, constraints, and opportunities forms the foundation.",
  },
  {
    number: '02',
    title: 'Define',
    description: 'From discovery, we crystallise a clear design vision. Key spatial ideas, material directions, and organisational principles are tested and refined before any formal design begins.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Spatial concepts become three-dimensional proposals. We work iteratively through drawings, models, and visualisations to develop a design that is both compelling and achievable.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'The approved design is developed into a comprehensive set of technical documents. Material specifications, structural coordination, and regulatory compliance are all addressed in detail.',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'We support the project through construction, maintaining design intent and quality standards from groundbreaking to handover. The goal is a finished space that exceeds expectations.',
  },
];
