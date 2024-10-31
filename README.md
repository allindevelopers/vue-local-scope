# @allindevelopers/vue-local-scope

Allows to reuse an expression that is repeating multiple times in a Vue Template

```vue
<script setup lang="ts">
import { LocalScope } from "@allindevelopers/vue-local-scope";
</script>

<template>
	<LocalScope lorem="Lorem Ipsum Dolor Sit Amet" #default="{ lorem }">
		<ol>
			<li>{{ lorem }}</li>
			<li>{{ lorem }}</li>
			<li>{{ lorem }}</li>
		</ol>
	</LocalScope>
</template>
```

> [!NOTE]  
> Can be used in JSX but types are not infered
