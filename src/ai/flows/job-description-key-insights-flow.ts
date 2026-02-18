'use server';
/**
 * @fileOverview This file contains a Genkit flow for extracting key insights from a job description.
 *
 * - jobDescriptionKeyInsights - A function that takes a job description and returns key responsibilities, qualifications, and benefits.
 * - JobDescriptionKeyInsightsInput - The input type for the jobDescriptionKeyInsights function.
 * - JobDescriptionKeyInsightsOutput - The return type for the jobDescriptionKeyInsights function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const JobDescriptionKeyInsightsInputSchema = z.object({
  jobDescription: z.string().describe('The full job description text.'),
});
export type JobDescriptionKeyInsightsInput = z.infer<typeof JobDescriptionKeyInsightsInputSchema>;

const JobDescriptionKeyInsightsOutputSchema = z.object({
  keyResponsibilities: z
    .string()
    .describe(
      'A concise summary of the main responsibilities of the role, presented as a bulleted list.'
    ),
  essentialQualifications: z
    .string()
    .describe(
      'A concise summary of the mandatory qualifications and skills required for the role, presented as a bulleted list.'
    ),
  primaryBenefits: z
    .string()
    .describe(
      'A concise summary of the primary benefits offered for this role (e.g., salary, allowances, perks), presented as a bulleted list.'
    ),
});
export type JobDescriptionKeyInsightsOutput = z.infer<typeof JobDescriptionKeyInsightsOutputSchema>;

export async function jobDescriptionKeyInsights(
  input: JobDescriptionKeyInsightsInput
): Promise<JobDescriptionKeyInsightsOutput> {
  return jobDescriptionKeyInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'jobDescriptionKeyInsightsPrompt',
  input: { schema: JobDescriptionKeyInsightsInputSchema },
  output: { schema: JobDescriptionKeyInsightsOutputSchema },
  prompt: `As an expert career advisor, analyze the following job description and extract the most crucial information for an applicant.

Your task is to identify and summarize:
1.  Key Responsibilities: What are the main duties and tasks of this role?
2.  Essential Qualifications: What are the absolute must-have skills, experience, and educational requirements?
3.  Primary Benefits: What are the main perks, compensation details, or advantages of this role?

Present each section as a concise bulleted list. If a section is not explicitly mentioned or is unclear, state "Not specified" or "No explicit benefits mentioned."

Job Description:
---
{{{jobDescription}}}
---
`,
});

const jobDescriptionKeyInsightsFlow = ai.defineFlow(
  {
    name: 'jobDescriptionKeyInsightsFlow',
    inputSchema: JobDescriptionKeyInsightsInputSchema,
    outputSchema: JobDescriptionKeyInsightsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
