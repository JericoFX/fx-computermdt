<script lang="ts">
	import {h} from 'gridjs';
	import {_} from 'svelte-i18n';
	import {fade} from 'svelte/transition';
	import Grid from 'gridjs-svelte';
	import {isEnvBrowser} from '../../../utils/misc';
	import {fetchNui} from '../../../utils/fetchNui';
	import Searched from './Tables/Searched.svelte';
	import {Callsign, IsBoss, Reports} from '../../../store/store';
	import ObservationsModal from './Modals/ObservationsModal.svelte';
	import {onDestroy, onMount} from 'svelte';

	let grid: any;
	let container: HTMLDivElement;
	$: selection = [0];
	$: values = '';

	onMount(() => {
		grid.forceRender();
	});
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
	const columns = [
		{
			id: 'id',
			name: 'ID',
		},
		{
			id: 'title',
			name: 'Title',
		},
		{id: 'name', name: 'Name'},
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
			id: 'isvehicle',
			name: 'Vehicle Involved',
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
					'View Data'
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
									deleteReport(row.cells[0].data, row.cells[6].data);
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
	async function deleteReport(id: string, isvehicle: string) {
		if (!isEnvBrowser()) {
			try {
				await fetchNui('deleteReport', {
					id: id,
					callsign: $Callsign,
					isvehicle: isvehicle,
				}).then((cb) => {
					if (cb) {
						grid
							.updateConfig({
								data: $Reports,
							})
							.forceRender();
					}
				});
			} catch (err) {
				console.log(`SearchReports ${err}`);
			}
		}
	}
	function openDataContainer(id: any, data: any): Searched {
		let open = true;
		console.log(JSON.stringify(data));
		if (!isEnvBrowser()) {
			let m = new Searched({
				target: container,
				props: {
					open: open,
					data: data,
					caseID: id,
				},
			});
			m.$on('closeModal1', () => (open = false));
			return m;
		}
	}
	async function SearchBy(): Promise<void> {
		await grid
			.updateConfig({
				data: $Reports,
			})
			.forceRender();

		if (!isEnvBrowser()) {
			try {
				await fetchNui('getReportData', {
					type: selection,
					value: values,
				}).then(async (cb) => {
					if (cb) {
						await grid
							.updateConfig({
								data: cb,
							})
							.forceRender();
					}
				});
			} catch (err) {
				console.log(`SearchReports ${err}`);
			}
		}
	}
	function ReloadData() {
		grid
			.updateConfig({
				data: $Reports,
			})
			.forceRender();
	}
	const menu = [
		{name: $_('page.rsapp.rsmenu.rname'), value: 'name'},
		{name: $_('page.rsapp.rsmenu.rcid'), value: 'citizenid'},
		{name: $_('page.rsapp.rsmenu.rlocation'), value: 'localization'},
		{name: $_('page.rsapp.rsmenu.rsid'), value: 'id'},
		{name: $_('page.rsapp.rsmenu.rspolice'), value: 'data'},
	];
</script>

<div transition:fade bind:this={container} class="grid full-width full-height scroll hide-scrollbar">
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
	<Grid bind:instance={grid} {style} pagination={{enabled: true, limit: 3}} autoWidth data={$Reports || []} {columns} />
	<!-- <div id="gridID" class="hide-scrollbar relative-position full-height" style="overflow:scroll;" /> -->
</div>
