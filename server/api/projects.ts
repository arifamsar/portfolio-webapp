export default defineEventHandler(() => {
  return {
    title: "My Projects",
    description: "A showcase of my recent work and personal projects.",
    projects: [
      {
        cover: "https://placehold.co/600x400/png",
        title: "Project Title One",
        description: "A brief, engaging description of Project One. Highlight its purpose and key features.",
        stack: ["Vue.js", "Nuxt.js", "TailwindCSS"],
        link: "https://example.com/project1"
      },
      {
        cover: "https://placehold.co/600x400/png",
        title: "Project Title Two",
        description: "A brief, engaging description of Project Two. Highlight its purpose and key features.",
        stack: ["React", "Node.js", "MongoDB"],
        link: "https://example.com/project2"
      },
      {
        cover: "https://placehold.co/600x400/png",
        title: "Project Title Three",
        description: "A brief, engaging description of Project Three. Highlight its purpose and key features.",
        stack: ["Angular", "Firebase", "TypeScript"],
        link: "https://example.com/project3"
      }
    ]
  }
})