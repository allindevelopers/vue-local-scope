<script setup lang="ts" generic="T">
import { LocalScope } from "../lib/vue-local-scope";

defineProps<{ lorem: string }>();
</script>

<template>
	<LocalScope :lorem="lorem" #default="{ lorem }">
		<ol>
			<li>{{ lorem }}</li>
			<li>{{ lorem }}</li>
			<li>{{ lorem }}</li>
		</ol>
	</LocalScope>
</template>
