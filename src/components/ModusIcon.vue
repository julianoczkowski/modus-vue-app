<template>
  <i 
    :class="iconClasses"
    :style="iconStyles"
    :aria-hidden="decorative"
    :aria-label="!decorative ? ariaLabel : undefined"
  >
    {{ name }}
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ModusIconName } from "@/types/modus";

interface Props {
  name: ModusIconName;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | string;
  color?: string;
  decorative?: boolean;
  ariaLabel?: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: "md",
  decorative: true,
  className: "",
});

const iconClasses = computed(() => {
  const classes = ["modus-icons"];
  
  // Add size class if it's a predefined size
  if (["xs", "sm", "md", "lg", "xl"].includes(props.size)) {
    classes.push(`icon-${props.size}`);
  }
  
  // Add custom class if provided
  if (props.className) {
    classes.push(props.className);
  }
  
  return classes.join(" ");
});

const iconStyles = computed(() => {
  const styles: Record<string, string> = {};
  
  // Add custom size if not predefined
  if (!["xs", "sm", "md", "lg", "xl"].includes(props.size)) {
    styles.fontSize = props.size;
  }
  
  // Add custom color
  if (props.color) {
    styles.color = props.color;
  }
  
  return styles;
});
</script>

<style scoped>
/* Icon sizes using standard Modus approach */
.icon-xs {
  font-size: 12px;
}

.icon-sm {
  font-size: 14px;
}

.icon-md {
  font-size: 16px;
}

.icon-lg {
  font-size: 20px;
}

.icon-xl {
  font-size: 24px;
}

/* Icon spacing utilities */
.icon-spacing-right {
  margin-right: 8px;
}

.icon-spacing-left {
  margin-left: 8px;
}

.icon-spacing-top {
  margin-top: 4px;
}

.icon-spacing-bottom {
  margin-bottom: 4px;
}

/* Icon color utilities using Modus tokens */
.icon-primary {
  color: var(--modus-wc-color-primary);
}

.icon-secondary {
  color: var(--modus-wc-color-base-content);
}

.icon-success {
  color: var(--modus-wc-color-green);
}

.icon-warning {
  color: var(--modus-wc-color-yellow);
}

.icon-danger {
  color: var(--modus-wc-color-red);
}

.icon-muted {
  color: var(--modus-wc-color-secondary);
}
</style>