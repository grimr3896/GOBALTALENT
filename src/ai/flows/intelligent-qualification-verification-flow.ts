'use server';
/**
 * @fileOverview This file implements a Genkit flow for intelligent qualification verification.
 * It analyzes an applicant's resume against job qualifications and provides an assessment of their fit.
 *
 * - intelligentQualificationVerification - A function that handles the qualification verification process.
 * - IntelligentQualificationVerificationInput - The input type for the intelligentQualificationVerification function.
 * - IntelligentQualificationVerificationOutput - The return type for the intelligentQualificationVerification function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const IntelligentQualificationVerificationInputSchema = z.object({
  resumeDataUri: z
    .string()
    .describe(
      "The applicant's resume as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'. Accepted MIME types: application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document."
    ),
  requiredQualifications: z
    .string()
    .describe(
      'A detailed string describing the required qualifications for the job.'
    ),
});

export type IntelligentQualificationVerificationInput = z.infer<
  typeof IntelligentQualificationVerificationInputSchema
>;

const IntelligentQualificationVerificationOutputSchema = z.object({
  assessment: z
    .string()
    .describe(
      "A detailed assessment of the applicant's fit, highlighting strengths and potential gaps."
    ),
  strengths: z
    .array(z.string())
    .describe(
      'A list of specific qualifications and skills from the resume that match the job requirements.'
    ),
  gaps: z
    .array(z.string())
    .describe(
      'A list of specific qualifications and skills from the job requirements that are missing or weakly represented in the resume.'
    ),
  overallFitScore: z
    .number()
    .min(0)
    .max(100)
    .describe(
      'A numerical score (0-100) indicating the overall fit of the applicant based on the resume and qualifications, where 100 is a perfect fit.'
    ),
});

export type IntelligentQualificationVerificationOutput = z.infer<
  typeof IntelligentQualificationVerificationOutputSchema
>;

export async function intelligentQualificationVerification(
  input: IntelligentQualificationVerificationInput
): Promise<IntelligentQualificationVerificationOutput> {
  return intelligentQualificationVerificationFlow(input);
}

const intelligentQualificationVerificationPrompt = ai.definePrompt({
  name: 'intelligentQualificationVerificationPrompt',
  input: { schema: IntelligentQualificationVerificationInputSchema },
  output: { schema: IntelligentQualificationVerificationOutputSchema },
  prompt: `You are an intelligent qualification verification assistant. Your task is to analyze an applicant's resume and compare it against a set of required job qualifications.\n\nProvide a detailed assessment of the applicant's fit for the job, highlighting their strengths and potential gaps. Finally, provide an overall fit score from 0 to 100.\n\nResume: {{media url=resumeDataUri}}\n\nRequired Qualifications: {{{requiredQualifications}}}\n`,
});

const intelligentQualificationVerificationFlow = ai.defineFlow(
  {
    name: 'intelligentQualificationVerificationFlow',
    inputSchema: IntelligentQualificationVerificationInputSchema,
    outputSchema: IntelligentQualificationVerificationOutputSchema,
  },
  async (input) => {
    const { output } = await intelligentQualificationVerificationPrompt(input);
    return output!;
  }
);
