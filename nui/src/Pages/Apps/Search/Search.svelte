<script lang="ts">
	import SearchUser from './SearchUser.svelte';
	import SearchVehicle from './SearchVehicle.svelte';

	import {push} from 'svelte-spa-router';
	import {h, html} from 'gridjs';
	import colors from '../../../utils/vehicle-colors';
	import Grid from 'gridjs-svelte';

	import {_} from '../../../utils/i18n';
	let content;
	let selected;
	let grid;
	const Apps = [
		{
			name: 'Vehicles',
			component: SearchVehicle,
			icon: 'iconos/carpool.svg',
		},
		{
			name: 'Users',
			component: SearchUser,
			icon: 'iconos/user_groupsvg.svg',
		},
	];
</script>

<main>
	<div class="window absolute-center" style="width:19vw;max-height:20vh;">
		<div class="title-bar">
			<div class="title-bar-text" />
			<div class="title-bar-controls">
				<button aria-label="Close" on:click|preventDefault={() => push('/')} />
			</div>
		</div>
		<div class="window-body" style="width:95%;height:95%">
			<div class="field-row row wrap" style="justify-content:space-around;">
				{#each Apps as ap}
					<button on:click={() => (selected = ap.component)}
						><img src={ap.icon} alt="" />
						<p><span> {ap.name}</span></p></button
					>
				{/each}
			</div>
		</div>
	</div>
	<svelte:component this={selected} />
</main>

<style>
</style>
