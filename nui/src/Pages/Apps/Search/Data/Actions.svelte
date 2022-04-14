<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import Acepted from '../../Report/Modals/Acepted.svelte';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let Plate = '';
	export let activebolo = 0;
	let container;
	const options = [
		{text: 'Add B.O.L.O', value: 'bolo', disabled: false},
		{text: 'Add Warrant', value: 'warrant', disabled: false},
	];
	$: activebolo === 1 ? (options[0].disabled = true) : false;
	$: selection = '';
	function closeModal(cas: boolean) {
		if (cas) {
			let op = true;

			let m = new Acepted({
				target: container,
				props: {
					open: op,
					message: 'B.O.L.O created!',
				},
			});
			m.$on('closeModal', () => {
				op = false;
				open = false;
				dispatch('closeModal1', {});
			});
		} else {
			open = false;
			dispatch('closeModal1', {});
		}
	}
</script>

{#if open}
	<div bind:this={container} class="window absolute-center" style:max-width="100vh">
		<div class="title-bar">
			<div class="title-bar-text">{Plate}</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click|preventDefault={() => closeModal(false)} />
			</div>
		</div>
		<div class="window-body">
			<fieldset class="text-center">
				<select bind:value={selection}>
					{#each options as d}
						<option disabled={d.disabled} value={d.value}>{d.text}</option>
					{/each}
				</select>
			</fieldset>

			{#if selection === 'bolo' && activebolo === 0}
				<fieldset class="q-mt-md">
					<legend>Information</legend>
					<div class="field-row full-width">
						<textarea placeholder="Add information" name="Info" id="" cols="8" rows="8" style="position:relative;width:312px;height:58px;" />
					</div>
				</fieldset>
			{:else}
				<fieldset>
					<legend>No Info Detected</legend>
				</fieldset>
			{/if}
			<section>
				<div class="field-row q-mt-lg" style="justify-content:center">
					<button on:click={() => closeModal(true)}>Ok</button>
				</div>
			</section>
		</div>
	</div>
{/if}
