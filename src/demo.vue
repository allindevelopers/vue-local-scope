<script setup lang="ts">
import { onMounted, ref } from "vue";
import ExampleSfc from "./demo-sfc.vue";
import ExampleTsx from "./demo-tsx";

const lorem = ref(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`);

onMounted(() => {
	setTimeout(() => {
		lorem.value = `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
	}, 3000);
});
</script>

<template>
	<h1>Example SFC</h1>
	<ExampleSfc :lorem="lorem" />

	<h1>Example TSX</h1>
	<ExampleTsx :lorem="lorem" />
</template>
