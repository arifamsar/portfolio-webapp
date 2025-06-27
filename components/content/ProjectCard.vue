<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProjectCardProps {
  project: {
    cover?: string;
    title: string;
    description: string;
    stack: string[];
    link: string;
  };
}

const props = defineProps<ProjectCardProps>();
</script>

<template>
  <Card class="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-primary/20 hover:border-primary/50">
    <img v-if="props.project.cover" :src="props.project.cover" :alt="props.project.title" class="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle class="text-primary">{{ props.project.title }}</CardTitle>
      <CardDescription>{{ props.project.description }}</CardDescription>
    </CardHeader>
    <CardContent class="flex-grow">
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in props.project.stack" :key="tech" class="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-semibold border border-primary/30">
          {{ tech }}
        </span>
      </div>
    </CardContent>
    <CardFooter>
      <Button asChild variant="outline" class="w-full border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground">
        <a :href="props.project.link" target="_blank" rel="noopener noreferrer">View Project</a>
      </Button>
    </CardFooter>
  </Card>
</template>
