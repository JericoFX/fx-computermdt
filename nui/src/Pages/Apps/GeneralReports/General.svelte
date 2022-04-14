<script lang="ts">
	import Grid from 'gridjs-svelte';
	import {push} from 'svelte-spa-router';
	import {useNuiEvent} from '../../../utils/useNuiEvent';
	import {Reports} from '../../../store/store';
	import {onMount} from 'svelte';
	import {Tables} from '../../../utils/misc';
	import {fetchNui} from '../../../utils/fetchNui';
	import {_} from '../../../utils/i18n';
	$: Reportss = [];
	$: Warrants = [];
	$: Bolo = [];
	let grid;
	let grid1;
	let grid2;
	export let params = {};

	$: if (params.Reload) {
		fetchNui('getReports');
	}
	useNuiEvent('updateReports', ({reports}) => {
		$Reports = reports;
		$Reports = $Reports;
		replaceData();
	});
	function replaceData() {
		Reportss = $Reports.filter((id) => id.type === 'basic');

		Warrants = $Reports.filter((id) => id.type === 'warrant');

		Bolo = $Reports.filter((id) => id.type === 'bolo');
		setTimeout(async () => {
			await grid
				.updateConfig({
					data: Reportss,
				})
				.forceRender();
			await grid1
				.updateConfig({
					data: Warrants,
				})
				.forceRender();
			await grid2
				.updateConfig({
					data: Bolo,
				})
				.forceRender();
		}, 1000);
		setTimeout(() => {}, 1000);
	}
	onMount(() => {
		replaceData();
		Tables();
	});
	async function closeApp() {
		await push('/');
	}
</script>

<main>
	<div class="absolute-center " style="width:83%;max-width:100%;min-width:40%;">
		<div class="window full-width full-height">
			<div class="title-bar">
				<div class="title-bar-text">{$_('page.generalApp.title')}</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click|preventDefault={closeApp} />
				</div>
			</div>
			<div class="window-body relative-position full-width" style="height:47vh">
				<section class="tabs">
					<menu role="tablist" aria-label="Tabs Template">
						<button role="tab" aria-controls="tab-A" aria-selected="true">{$_('page.generalApp.reports')}</button>
						<button role="tab" aria-controls="tab-B">{$_('page.generalApp.warrant')}</button>
						<button role="tab" aria-controls="tab-C">{$_('page.generalApp.bolo')}</button>
					</menu>
					<article role="tabpanel" id="tab-A">
						<fieldset>
							<legend> {$_('page.generalApp.reports')} </legend>
							<Grid bind:instance={grid} pagination={{enabled: true, limit: 6}} autoWidth data={Reportss} />
						</fieldset>
					</article>
					<article role="tabpanel" id="tab-B" style="display:none;">
						<fieldset>
							<legend> {$_('page.generalApp.warrant')} </legend>
							<Grid bind:instance={grid1} pagination={{enabled: true, limit: 6}} autoWidth data={Warrants} />
						</fieldset>
					</article>
					<article role="tabpanel" id="tab-C" style="display:none;">
						<fieldset>
							<legend> {$_('page.generalApp.bolo')} </legend>
							<Grid bind:instance={grid2} pagination={{enabled: true, limit: 6}} autoWidth data={Bolo} />
						</fieldset>
					</article>
				</section>

				<section class="field-row" style="justify-content: space-around">
					<button on:click|preventDefault={() => push('/')}>{$_('page.generalApp.reports')}</button>
				</section>
			</div>
		</div>
	</div>
</main>

<style>
	.nameField {
		display: inline-block;
		width: 80px;
		text-align: left;
		padding: 14px 10px 0 0;
		margin: 0 0 7px 0;
		text-transform: capitalize;
	}
	.inputField {
		display: inline-block;
		width: 130px;
		margin: 0;
		margin: 0 0 7px 0;
		text-transform: capitalize;
	}
	.impounded {
		background-color: red;
	}
</style>
