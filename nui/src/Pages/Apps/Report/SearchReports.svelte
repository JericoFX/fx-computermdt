<script lang="ts">
	import {h} from 'gridjs';
	import {_} from 'svelte-i18n';
	import {fade} from 'svelte/transition';
	import Grid from 'gridjs-svelte';
	import {isEnvBrowser} from '../../../utils/misc';
	import {fetchNui} from '../../../utils/fetchNui';
	import Searched from './Tables/Searched.svelte';
	import {IsBoss, Reports} from '../../../store/store';
	import {useNuiEvent} from '../../../utils/useNuiEvent';

	let grid;
	let container;
	$: selection = [0];
	$: values = '';
	$: Reportes = [];
	export let data = '';
	if (data === 'trigger') {
		newFunction();
	}
	const columns = [
		{
			id: 'id',
			name: 'ID',
		},
		'Title',
		'Name',
		{
			id: 'lastname',
			name: 'Last Name',
		},
		{id: 'citizenid', name: 'Citizenid'},
		{
			id: 'location',
			name: 'Location',
		},
		{
			id: 'data',
			name: 'Data',
			formatter: (_: any, row: {cells: {data: any}[]}) => {
				return h(
					'button',
					{
						onClick: () => {
							openDataContainer(row.cells[0].data, row.cells[7].data);
						},
					},
					'Open'
				);
			},
		},
		$IsBoss
			? {
					id: 'delete',
					name: 'Delete Report',
					formatter: (_cell: any, row: {cells: {data: string}[]}) => {
						return h(
							'button',
							{
								onClick: () => {
									deleteReport(row.cells[0].data);
								},
							},
							'Delete'
						);
					},
			  }
			: {
					id: 'delete',
					name: "Can't Delete",
			  },
	];

	async function newFunction() {
		fetchNui('getReportData', {type: 'all', value: values}).then((cb) => {
			if (cb) {
				Reportes = cb;
				grid
					.updateConfig({
						data: Reportes,
					})
					.forceRender();
			}
		});
	}

	async function deleteReport(id: string) {
		if (!isEnvBrowser()) {
			await fetchNui('deleteReport', {id: id}).then((cb) => {
				if (cb) {
					Reportes.splice(
						Reportes.findIndex((e) => e.id === id),
						1
					);
					Reportes = Reportes;
					grid
						.updateConfig({
							data: Reportes,
						})
						.forceRender();
				}
			});
		}
	}
	function openDataContainer(id: any, data: any): void {
		let open = true;
		if (!isEnvBrowser()) {
			let m = new Searched({
				target: container,
				props: {
					open: open,
					data: data,
					caseID: id,
				},
			});
			m.$on('closeModal', () => (open = false));
		}
	}
	function SearchBy(): void {
		grid
			.updateConfig({
				data: $Reports,
			})
			.forceRender();

		if (!isEnvBrowser()) {
			fetchNui('getReportData', {type: selection, value: values}).then((cb) => {
				if (cb) {
					grid
						.updateConfig({
							data: cb,
						})
						.forceRender();
				}
			});
		}
	}
	fetchNui('getReportData', {type: 'all', value: values}).then((cb) => {
		if (cb) {
			Reportes = cb;
			Reportes = Reportes;
			grid
				.updateConfig({
					data: Reportes,
				})
				.forceRender();
		}
	});
	function ReloadData(): void {
		fetchNui('getReportData', {type: 'all', value: values}).then((cb) => {
			if (cb) {
				Reportes = cb;
				Reportes = Reportes;
				grid
					.updateConfig({
						data: Reportes,
					})
					.forceRender();
			}
		});
	}
	useNuiEvent('updateReports', ({reports}) => {
		Reportes = reports;

		grid
			.updateConfig({
				data: Reportes,
			})
			.forceRender();
	});
	const menu = [
		{name: $_('page.rsapp.rsmenu.rname'), value: 'name'},
		{name: $_('page.rsapp.rsmenu.rcid'), value: 'citizenid'},
		{name: $_('page.rsapp.rsmenu.rlocation'), value: 'localization'},
		{name: $_('page.rsapp.rsmenu.rsid'), value: 'id'},
		{name: $_('page.rsapp.rsmenu.rspolice'), value: 'data'},
	];
</script>

<div bind:this={container} class="grid full-width full-height scroll hide-scrollbar">
	<fieldset>
		<div class="text-center">
			<label for="asd">{$_('page.rsapp.rsbuttons.rsbsearch')}</label>
			<input bind:value={values} type="text" name="asd" id="ss" />
			<button on:click|preventDefault={SearchBy}>{$_('page.rsapp.rsbuttons.rsbsearch')}</button>
			<button on:click|preventDefault={ReloadData}>{$_('page.rsapp.rsbuttons.rsbreload')}</button>
			<!-- <button class="no-padding"> <img src="iconos/info.png" alt="" style:width="16px" /></button> -->
		</div>
		<fieldset>
			Search By:
			<div class="field-row" style="justify-content:space-between;">
				{#each menu as data}
					<div class="field-row">
						<input checked bind:group={selection} type="radio" id={data.name} name="box" value={data.value} />
						<label for={data.name}>{data.name}</label>
					</div>
				{/each}
			</div>
		</fieldset>
	</fieldset>
	<Grid bind:instance={grid} pagination={{enabled: true, limit: 4}} autoWidth data={$Reports} {columns} />
	<!-- <div id="gridID" class="hide-scrollbar relative-position full-height" style="overflow:scroll;" /> -->
</div>
<div id="gridID" />
