<script lang="ts">
	import {push} from 'svelte-spa-router';
	import {h, html} from 'gridjs';
	import colors from '../../../utils/vehicle-colors';
	import Grid from 'gridjs-svelte';
	import addBolo from './addBolo.svelte';
	import {_} from '../../../utils/i18n';
	import {fetchNui} from '../../../utils/fetchNui';
	import Acepted from '../Report/Modals/Acepted.svelte';
	import ShortUniqueId from 'short-unique-id';
	import {json} from 'svelte-i18n';
	let uid = new ShortUniqueId({length: 5});
	let content;
	$: Data = {
		id: uid(),
		title: 'Vehicle Missing',
		color: '1',
		vehicle: '',
		plate: 'none',
		category: '',
		name: '',
		lastname: '',
		citizenid: '',
		location: 'BOLO',
		coords: {x: 0, y: 0, z: 0},
		observations: '',
		type: 'B.O.L.O',
		taked: false,
		callsign: 'none',
		bolo: true,
		hasbolo: 0,
		isvehicle: true,
		data: {
			evidences: [],
			polices: [],
			fines: [],
		},
	};
	async function searchByPlate() {
		await fetchNui('getVehicleByPlate', {plate: Data.plate}).then((cb) => {
			if (cb) {
				(Data.lastname = cb.lastname), (Data.citizenid = cb.citizenid), (Data.color = cb.color), (Data.category = cb.category);

				console.log(cb.name);
				Data.vehicle = cb.name;
				Data.name = cb.firstname;
				Data.hasbolo = cb.bolo;
			}
		});
	}
	async function addBolos() {
		let open = true;

		let m = new addBolo({target: content, props: {open: open, message: `Vehicle model ${Data.vehicle} with the plate ${Data.plate} has been reported missing, Color ${colors[Data.color].Description}`}});

		m.$on('addObservations', async (e) => {
			const Datas = e.detail.message;
			Data.observations = Datas;
			open = false;
			let opensito = true;
			await fetchNui('sendNewReport', {report: Data, bolo: true}).then((cb) => {
				if (cb.type) {
					let m = new Acepted({
						target: content,
						props: {
							open: opensito,
							message: `B.O.L.O created with the id ${Data.id}`,
						},
					});
				} else {
					let m = new Acepted({
						target: content,
						props: {
							open: opensito,
							message: `Error creating the bolo`,
						},
					});
					m.$on('closeModal', () => (opensito = false));
				}
			});
		});
	}
</script>

<main>
	<div bind:this={content} class="window absolute-center" style="max-width:80vw;max-height:80vh;">
		<div class="title-bar">
			<div class="title-bar-text" />
			<div class="title-bar-controls">
				<button aria-label="Close" on:click|preventDefault={() => push('/')} />
			</div>
		</div>
		<div class="window-body" style="width:95%;height:95%">
			<div class="field-row row wrap" style="justify-content:space-around;">
				<fieldset>
					<fieldset>
						<div class="text-center">
							<label for="searchButton"> {$_('page.searchApp.app.search')}</label>
							<input bind:value={Data.plate} placeholder="INSERT PLATE" class="text-center" type="text" name="searchButton" id="searchButton" />
							<button disabled={Data.plate.length < 3 ? true : false} on:click={searchByPlate}>{$_('page.searchApp.app.search')}</button>
						</div>
					</fieldset>
					<fieldset class="float-left">
						<legend> {$_('page.searchApp.app.bdata')} </legend>

						<div class="field-row"><span class="label">{$_('page.home.app.vehicle')}:</span> <input bind:value={Data.vehicle} disabled type="text" class="input text-center" name="" id="" /></div>
						<div class="field-row"><span class="label">{$_('category')}:</span> <input bind:value={Data.category} disabled type="text" class="input text-center" name="" id="" /></div>
						<div class="field-row"><span class="label">{$_('color')}:</span> <input bind:value={Data.color} disabled type="text" class="input text-center" name="" id="" style={`background:${colors[Data.color ?? 1].Hex}`} /></div>
						<div class="field-row"><span class="label">{$_('owner')}:</span> <input bind:value={Data.name} disabled type="text" class="input text-center" name="" id="" /></div>
						<div class="field-row"><span class="label">{$_('last-name')}:</span> <input bind:value={Data.lastname} disabled type="text" class="input text-center" name="" id="" /></div>
						<div class="field-row"><span class="label">CitizenID:</span> <input disabled bind:value={Data.citizenid} type="text" class="input text-center" name="" id="" /></div>
					</fieldset>
				</fieldset>
			</div>
			<section class="field-row" style="display: flex;align-items: center;flex-direction: row;flex-wrap: nowrap;justify-content: space-around;">
				<button disabled={Data.hasbolo === 1 ? true : false} on:click={addBolos}>{Data.hasbolo === 1 ? 'B.O.L.O Active' : 'ADD B.O.L.O'} </button>
				<button on:click|preventDefault={() => push('/')}> Cancel</button>
				<!-- svelte-ignore a11y-label-has-associated-control -->
			</section>
		</div>
	</div>
</main>

<style>
	.label {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		text-align: left;
		width: 120px;
		line-height: 26px;
		margin-bottom: 10px;
	}
	.input {
		flex: 0 0 200px;
		margin-left: 1px;
	}
</style>
