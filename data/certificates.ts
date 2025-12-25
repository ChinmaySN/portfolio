/**
 * Certificates and professional credentials.
 */

export interface Certificate {
  title: string;
  issuer: string;
  year: number;
  certificateUrl: string;
}

export const certificates: Certificate[] = [
  {
    title: 'Artificial Intelligence with Microsoft',
    issuer: 'IntrnForte',
    year: 2024,
    certificateUrl: '/certificates/microsoft.pdf',
  },
  {
    title: 'Full Stack Web Development',
    issuer: 'IntrnForte',
    year: 2024,
    certificateUrl: '/certificates/Full_Stack_Web_Development-Chinmay_S_Neelagiri.pdf',
  },
];
