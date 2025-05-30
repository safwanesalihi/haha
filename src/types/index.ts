// This file contains common types and interfaces used across the application
// Centralizing types improves maintainability and consistency

/**
 * Section data interface for standardized section content
 */
export interface SectionData {
  index: number;
  title: string;
  image: string;
  imageAlt: string;
  content: string | React.ReactNode;
  ctaText: string;
  additionalContent?: React.ReactNode;
}
