import { defineComponent } from "vue";
import { LocalScope } from "../lib/vue-local-scope";

export default defineComponent((props: { lorem: string }) => {
	return () => (
		<LocalScope lorem={props.lorem}>
			{/* @ts-expect-error Don't know how to make JSX Types for props work here */}
			{({ lorem }) => (
				<ol>
					<li>{lorem}</li>
					<li>{lorem}</li>
					<li>{lorem}</li>
				</ol>
			)}
		</LocalScope>
	);
});
