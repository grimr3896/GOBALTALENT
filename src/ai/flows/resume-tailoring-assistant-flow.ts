'use server';
/**
 * @fileOverview A Genkit flow that helps applicants tailor their resume to a specific job description.
 *
 * - resumeTailoringAssistant - A function that suggests improvements and keywords for a resume based on a job description.
 * - ResumeTailoringAssistantInput - The input type for the resumeTailoringAssistant function.
 * - ResumeTailoringAssistantOutput - The return type for the resumeTailoringAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResumeTailoringAssistantInputSchema = z.object({
  resumeText: z
    .string()
    .describe(
      'The full text content of the applicant\'s resume or CV, ideally extracted from a PDF or DOCX file.'
    ),
  jobDescriptionText: z
    .string()
    .describe(
      'The full text content of the job description for the target role, including required qualifications and responsibilities.'
    ),
});
export type ResumeTailoringAssistantInput = z.infer<
  typeof ResumeTailoringAssistantInputSchema
>;

const ResumeTailoringAssistantOutputSchema = z.object({
  missingKeywords: z
    .array(z.string())
    .describe(
      'A list of important keywords, skills, or qualifications found in the job description that are NOT explicitly mentioned in the provided resume.'
    ),
  suggestions: z
    .array(z.string())
    .describe(
      'A list of concrete and actionable suggestions for how the applicant can improve their resume to better align with the job description. These should focus on adding relevant experiences, skills, or rephrasing existing content.'
    ),
  overallMatchScore: z
    .number()
    .min(0)
    .max(100)
    .describe(
      'An overall percentage score (0-100) indicating how well the current resume matches the job description. 100 indicates a perfect match.'
    ),
});
export type ResumeTailoringAssistantOutput = z.infer<
  typeof ResumeTailoringAssistantOutputSchema
>;

export async function resumeTailoringAssistant(
  input: ResumeTailoringAssistantInput
): Promise<ResumeTailoringAssistantOutput> {
  return resumeTailoringAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resumeTailoringAssistantPrompt',
  input: {schema: ResumeTailoringAssistantInputSchema},
  output: {schema: ResumeTailoringAssistantOutputSchema},
  prompt: `You are an expert career coach and resume analyst. Your task is to analyze an applicant's resume against a specific job description and provide targeted feedback to help them optimize their application.

First, carefully read the provided Job Description to understand the key requirements, skills, and experience needed for the role.

Next, thoroughly review the Applicant's Resume. Compare the content of the resume against the job description.

Based on your analysis, provide the following:

1.  **missingKeywords**: Identify critical keywords, skills, or qualifications from the Job Description that are either completely absent from the Resume or are not sufficiently highlighted. List these as individual strings.
2.  **suggestions**: Provide concrete, actionable suggestions for how the applicant can modify or add content to their resume to better match the job description. For each suggestion, explain *what* they should add/change and *why* it's important for this specific role. Focus on relevant experiences, achievements, and skills that directly address the job requirements.
3.  **overallMatchScore**: Assign an overall percentage score (0-100) reflecting how well the current resume aligns with the job description. Consider factors like direct matches, relevant experience, and the absence of key requirements. A higher score means a better fit.

Applicant's Resume:
---
{{{resumeText}}}
---

Job Description:
---
{{{jobDescriptionText}}}
---

Ensure your output is a valid JSON object matching the defined schema.`,
});

const resumeTailoringAssistantFlow = ai.defineFlow(
  {
    name: 'resumeTailoringAssistantFlow',
    inputSchema: ResumeTailoringAssistantInputSchema,
    outputSchema: ResumeTailoringAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
