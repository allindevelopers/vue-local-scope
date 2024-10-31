<script setup lang="ts" generic="T">
defineOptions({ inheritAttrs: false });
defineProps</* @vue-ignore */ T>();
defineSlots<{ default?(props: T): any }>();
</script>

<template>
	<slot v-bind="$attrs as T" />
</template>
