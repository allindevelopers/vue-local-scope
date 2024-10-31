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

With Full Type Completion

<img width="397" alt="image" src="https://github.com/user-attachments/assets/7e38ec79-815c-455f-bec7-5e777114e3b0">

> [!NOTE]  
> Can be used in JSX but types are not infered
