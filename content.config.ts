import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    about: defineCollection({
      type: 'page',
      source: 'content/about.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects.json',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        projects: z.array(
          z.object({
            cover: z.string().optional(),
            title: z.string(),
            description: z.string(),
            stack: z.array(z.string()),
            link: z.string(),
          }),
        ),
      }),
    }),
  },
})
