<script lang="ts">
	import {Callsign, UserInfo} from './store/store';
	import {fade} from 'svelte/transition';
	import {fetchNui} from './utils/fetchNui';
	$: call = '';

	async function modifyCallsign() {
		if (call.length > 3) {
			await fetchNui('modifyCallsign', {call: call}).then((cb) => {
				if (cb) {
					$UserInfo.callsign = call;
					$UserInfo = $UserInfo;
					$Callsign = call;
				}
			});
		}
	}
</script>

<div class="modal-overlay" transition:fade={{duration: 100}}>
	<div class="my-back fit" />
	<div class="window absolute-center" style="max-width:17vw;max-height:20vh;">
		<div class="title-bar">
			<div class="title-bar-text">Add Callsign</div>
			<div class="title-bar-controls">
				<button aria-label="Close" />
			</div>
		</div>
		<div class="window-body">
			<p class="text-center">
				Welcome <span class="text-center text-subtitle1 text-uppercase text-dark text-light">{$UserInfo.name}</span>
			</p>
			<p class=" text-center text-bold">To continue please ingress your Callsign</p>
			<div class="field-row"><input bind:value={call} type="text" class="input text-center full-width" name="" id="" /></div>
			<section class="field-row" style="display: flex;align-items: center;flex-direction: row;flex-wrap: nowrap;justify-content: space-around;">
				<button disabled={call.length < 3 ? true : false} on:click|preventDefault={modifyCallsign}>Aceptar</button>
				<!-- svelte-ignore a11y-label-has-associated-control -->
			</section>
		</div>
	</div>
</div>

<style>
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
	:root {
		font-family: 'Poppins', sans-serif;
	}
	/*:global(body){
		width: 1280px;
		height: 720px;
	}*/

	.my-back {
		background-color: rgba(255, 255, 55, 0.0001) !important;
	}
	.modal-overlay {
		z-index: 1000;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #00000080 !important;
	}
</style>
