<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	const dispatch = createEventDispatcher();
	export let open = false;
	export let message = '';
	let description = '';
	function closeModal() {
		open = false;
		dispatch('closeModal', {description});
	}
</script>

{#if open}
	<div class="window absolute-center" style:max-width="100vh">
		<div class="title-bar" />
		<div class="window-body">
			<fieldset>
				<div class="field-row q-mt-lg justify-center">
					<span class="q-mx-md">
						{message}
					</span>
				</div>
				<div class="field-row q-mt-lg justify-center">
					<p class="q-mt-lg">
						<input bind:value={description} type="text" />
					</p>
				</div>
			</fieldset>
			<section>
				<div class="field-row q-mt-lg" style="justify-content:center">
					<button on:click={closeModal}>OK</button>
				</div>
			</section>
		</div>
	</div>
{/if}
