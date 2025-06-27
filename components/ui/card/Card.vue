<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'
import { type CardVariants, cardVariants } from '.'

interface Props extends PrimitiveProps {
  variant?: CardVariants['variant']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  as: 'div',
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(cardVariants({ variant }), props.class)"
  >
    <slot />
  </Primitive>
</template>
