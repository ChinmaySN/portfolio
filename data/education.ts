/**
 * Education data: degrees, institutions, and years.
 */

export interface Education {
  degree: string;
  institution: string;
  year: number;
  field?: string;
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    institution: 'Global Academy of Technology',
    year: 2027,
    field: 'Electronics and Communication Engineering',
  },
];
