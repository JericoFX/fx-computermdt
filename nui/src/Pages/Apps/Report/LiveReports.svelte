<script lang="ts">
	import Grid from 'gridjs-svelte';
	import {onMount} from 'svelte';
	import {Reports} from '../../../store/store';
	let grid:any;

	const columns = ['name', 'lastname', 'citizenid', 'message'];
	onMount(() => {
		grid.forceRender();
	});
	$: $Reports, run();
	function run(): void {
		if ($Reports === undefined) {
			$Reports = [];
			grid.forceRender();
		}
	}
</script>

<div class="full-width">
	<!-- svelte-ignore missing-declaration -->
	<Grid bind:instance={grid} data={$Reports || []} {columns} pagination={{enabled: true, limit: 6}} search />
</div>
