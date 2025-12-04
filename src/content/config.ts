import { defineCollection, z } from "astro:content";

const languages = ["en", "cz"] as const;

export const technologies = [
  "javascript",
  "typescript",
  "wordpress",
  "react",
  "node",
  "php",
  "html",
  "css",
  "express",
  "tailwind",
  "graphql",
  "mongodb",
  "postgres",
  "mysql",
  "firebase",
  "aws",
  "docker",
  "astro",
  "alpinejs",
  "fastify",
  "nextjs",
  "svelte",
  "vue",
  "nuxt",
  "angular",
  "nestjs",
  "deno",
  "sapper",
  "apollo",
] as const;

export const collections = {
  projects: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      datePublished: z.date().refine((date) => date <= new Date(), {
        message: "Date can't be in the future",
      }),
      language: z.enum(languages).optional(),
      technologies: z.array(z.string()).optional(),
      description: z
        .string()
        .max(150, "Description must be shorter than 150 chars")
        .optional(),
      image: z.string().optional(),
      alt: z.string().optional(),
      logo: z.string().optional(),
    }),
  }),
  // NOTE: Blog collection is currently not used
  // blog: defineCollection({
  //   type: "content",
  //   schema: z.object({
  //     title: z.string(),
  //     datePublished: z.date().refine((date) => date <= new Date(), {
  //       message: "Date can't be in the future",
  //     }),
  //     language: z.enum(languages).optional(),
  //     description: z
  //       .string()
  //       .max(150, "Description must be shorter than 150 chars")
  //       .optional(),
  //     image: z.string().optional(),
  //     alt: z.string().optional(),
  //   }),
  // }),
};
