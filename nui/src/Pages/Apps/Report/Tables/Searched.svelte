<script lang="ts">
	import gridjsSvelte from 'gridjs-svelte';
	import ImagenShow from '../Modals/ImagenShow.svelte';
	import Grid from 'gridjs-svelte';
	import {createEventDispatcher, onMount} from 'svelte';
	import {h} from 'gridjs';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let data = [];
	export let caseID = '';

	function closeModal(): void {
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
	const ImagesColums = [
		{id: 'id', name: 'ID'},
		{id: 'description', name: 'Description'},
		{
			id: 'link',
			name: 'Data',
			formatter: (_: any, row: {cells: {data: any}[]}) => {
				return h(
					'button',
					{
						onClick: () => {
							openImage(row.cells[2].data, row.cells[1].data);
						},
					},
					'Open'
				);
			},
		},
	];
	let container;
	function openImage(link: string, description: string): ImagenShow {
		let o = true;
		let m = new ImagenShow({
			target: container,
			props: {
				open: o,
				link: link,
				description: description,
			},
		});
		m.$on('closeModal', (e) => (o = false));
		return m;
	}
	function tryJson(obs) {
		try {
			JSON.parse(obs);
		} catch (error) {
			return false;
		}
		return true;
	}
</script>

{#if open}
	<div bind:this={container} class="window absolute-center" style="z-index:3" style:max-height="70vh" style:max-width="100vh">
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
						<Grid data={data.evidences || []} columns={EvidenceColums} pagination={{enabled: true, limit: 1}} />
					</fieldset>
				</div>
				<div class="q-ml-sm">
					<fieldset>
						<legend> Polices Involved </legend>
						<Grid data={data.polices || []} columns={PolicesColums} pagination={{enabled: true, limit: 1}} />
					</fieldset>
				</div>
				<div class="q-ml-sm">
					<fieldset>
						<legend> Fines </legend>
						<Grid data={data.fines || []} columns={FinesColums} pagination={{enabled: true, limit: 1}} />
					</fieldset>
				</div>
				<div class="q-ml-sm">
					<fieldset>
						<legend> Images </legend>
						<Grid data={tryJson(data) === true ? JSON.parse(data).images : data.images} columns={ImagesColums} pagination={{enabled: true, limit: 1}} />
					</fieldset>
				</div>
			</div>
			<section class="field-row" style="justify-content: space-around">
				<button on:click={closeModal}>Close</button>
			</section>
		</div>
	</div>
{/if}
