// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    tools: z.array(z.string()),
    date: z.date(),
  }),
});

const unlistedCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string(),
    tags: z.array(z.string()),
    tools: z.array(z.string()),
  }),
});

const experienceCollection = defineCollection({
  type: "content",
  schema: z.object({
    position: z.string(),
    description: z.string().optional(),
    descPoints: z.string().optional(),
    company: z.string(),
    start: z.date(),
    end: z.date(),
    link: z.string().optional(),
  }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  projects: projectsCollection,
  unlistedProjects: unlistedCollection,
  experience: experienceCollection,
};
