<script lang="ts">
	import gridjsSvelte from 'gridjs-svelte';

	import Grid from 'gridjs-svelte';
	import {createEventDispatcher, onMount} from 'svelte';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let data = [];
	export let caseID = '';
	let grid;
	onMount(() => {
		grid.forceRender();
	});
	// $: if (data.length) {
	// 	;
	// }
	function closeModal() {
		open = false;
		dispatch('closeModal1', {});
	}
	const PolicesColums = ['Name', 'lastName', 'ID', 'Rank'];
	const EvidenceColums = ['ID', 'Label', 'Type', 'Street'];
	const FinesColums = [
		'ID',
		'Label',
		{
			name: 'Amount',
			formatter: (cell: any) => `$${cell}`,
		},
		'Jailtime',
	];
</script>

{#if open}
	<div class="window absolute-center" style="z-index:3" style:max-height="70vh" style:max-width="100vh">
		<div class="title-bar">
			<div class="title-bar-text">Data Viewer case: {caseID}</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click={closeModal} />
			</div>
		</div>
		<div class="window-body scroll" style:max-height="58vh">
			<div class="grid  scroll">
				<div class="q-ml-sm">
					<fieldset>
						<legend>Evidences</legend>
						<Grid data={data.evidences} columns={EvidenceColums} fixedHeader pagination={{enabled: true, limit: 1}} />
					</fieldset>
				</div>
				<div class="q-ml-sm">
					<fieldset>
						<legend> Polices Involved </legend>
						<Grid data={data.polices} columns={PolicesColums} fixedHeader pagination={{enabled: true, limit: 1}} />
					</fieldset>
				</div>
				<div class="q-ml-sm">
					<fieldset>
						<legend> Fines </legend>
						<Grid data={data.fines} columns={FinesColums} fixedHeader pagination={{enabled: true, limit: 1}} />
					</fieldset>
				</div>
			</div>
			<section class="field-row" style="justify-content: space-around">
				<button on:click={closeModal}>Close</button>
			</section>
		</div>
	</div>
{/if}
