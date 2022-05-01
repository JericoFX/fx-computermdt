<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import {PoliceImages} from '../../../../store/store';
	import Grid from 'gridjs-svelte';
	import {h} from 'gridjs';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let link = '';
	export let description = '';
	function closeModal() {
		open = false;
		dispatch('closeModal', {});
	}
</script>

{#if open}
	<div class="window absolute-center " style="max-width: 100vw; max-height: 100vh;width:58vw; z-index:8888">
		<div class="title-bar">
			<div class="title-bar-text">{description}</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click={closeModal} />
			</div>
		</div>
		<div class="window-body">
			<fieldset>
				<div class="fit" style="width:70vw;height:50vh">
					<img src={link} alt={link} srcset="" style="width: 100%; height: 100%;" />
				</div>
			</fieldset>
		</div>
	</div>
{/if}
