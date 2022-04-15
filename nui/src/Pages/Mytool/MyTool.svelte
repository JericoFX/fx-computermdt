<script lang="ts">
	import {currentAsignament, OnDuty, UserInfo} from '../../store/store';
	import Grid from 'gridjs-svelte';
	import {push} from 'svelte-spa-router';

	import {onMount} from 'svelte';
	import {fetchNui} from '../../utils/fetchNui';
	import {h} from 'gridjs';
	let content: HTMLDivElement;
	let grid;
	let duty = false;
	const style = {
		table: {
			width: '100%',
		},
		header: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row-reverse',
		},
		footer: {
			width: '100%',
		},
	};
	export let params = {};
	$: if (params.reload) {
		fetchNui('getMycalls', {cs: $UserInfo.callsign}).then((cb) => {
			$currentAsignament = cb;
			grid
				.updateConfig({
					data: $currentAsignament ?? [],
				})
				.forceRender();
		});
		params.reload = false;
	}
	const columns = [
		{
			id: 'casid',
			name: 'Case ID',
			width:"10%"
		},
		{
			id: 'name',
			name: 'Citizen Name',
				width:"10%"
		},
		{
			id: 'citizenid',
			name: 'Citizenid',
				width:"10%"
		},
		{
			id: 'coordinates',
			name: 'Coordinates',
			formatter: (cell, row) => {
				return h(
					'button',
					{
						onClick: () => {
							setDestination(row.cells[3].data);
						},
					},
					'Set'
				);
			},
				width:"10%"
		},
		{
			id: 'delete',
			name: 'Delete',
			formatter: (cell, row) => {
				return h(
					'button',
					{
						onClick: () => {
							deleteAssign(row.cells[0].data);
						},
					},
					'Delete'
				);
			},
				width:"10%"
		},
	];
	async function setDestination(coords: any): Promise<void> {
		await fetchNui('setDestination', {coords: coords});
	}

	function deleteAssign(id: string) {

		fetchNui('deleteAssignment', {id: id}).then(async (cb) => {
			if (cb) {
				$currentAsignament.splice(
					$currentAsignament.findIndex((e) => e.id === id),
					1
				);
				$currentAsignament = $currentAsignament;
				await grid
					.updateConfig({
						data: $currentAsignament,
					})
					.forceRender();
			}
		});
	}
	onMount(() => {
		grid.forceRender();
	});
	async function changeduty() {
		await fetchNui('changeDuty', {user: $UserInfo.citizenid, duty: $OnDuty}).then((cb) => {
			$OnDuty = cb;
			console.log(cb);
		});
	}
</script>

<div bind:this={content} class="absolute-center " style="width:70%;max-width:100%;min-width:40%;">
	<div class="window full-width full-height">
		<div class="title-bar">
			<div class="title-bar-text">MY TOOL</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click|preventDefault={() => push('/')} />
			</div>
		</div>
		<div class="window-body relative-position full-height" style:max-height="100vh">
			<fieldset class="text-center">
				<div class="field-row" style="justify-content:center">
					<p class="nameField text-h6 text-weight-light ">On Duty:</p>
					<span class:dutyon={$OnDuty ? true : false} class="inputField text-h6 text-weight-medium">{$OnDuty === true ? 'YES' : 'NO'}</span>
				</div>
				<div class="field-row" style="justify-content:center">
					<fieldset>
						<Grid bind:instance={grid} {style} {columns} data={$currentAsignament || []} />
					</fieldset>
				</div>
			</fieldset>
			<!-- <fieldset class="full-width">
				<legend> Polices Online </legend>
				<Grid data={[]} autoWidth search pagination={{enabled: true, page: 4}} columns={['id', 'Name', 'Last Name', 'Send Email', 'Request Help']} />
			</fieldset> -->
			<section class="field-row" style="justify-content: space-around;align-content:center;">
				<button on:click={changeduty}>Change Duty</button>
				<button>Request Back Up </button>
				<!-- svelte-ignore a11y-label-has-associated-control -->
			</section>
		</div>
	</div>
</div>

<style>
	.nameField {
		display: inline-block;
		width: 12vh;
		text-align: left;
		padding: 0 10px 0 0;
		margin: 0 0 7px 0;
	}
	.inputField {
		display: inline-block;
		width: 20.77vw;
		margin: 0;
		margin: 0 0 7px 0;
	}
	.dutyon {
		color: green;
	}
</style>
