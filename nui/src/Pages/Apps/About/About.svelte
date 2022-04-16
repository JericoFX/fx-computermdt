<script lang="ts">
	import {_} from '../../../utils/i18n';

	import {createEventDispatcher} from 'svelte';

	export let open = false;
	const dispatch = createEventDispatcher();

	const closeModal = () => {
		open = false;
		dispatch('closeAbout', false);
	};
</script>

{#if open}
	<div class="absolute-center">
		<div class="window" style="max-width: 300px">
			<div class="title-bar">
				<div class="title-bar-text">{$_('a-window-with-contents')}</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click={closeModal} />
				</div>
			</div>
			<div class="window-body">
				<p>{$_('helptest')}</p>
			</div>
		</div>
	</div>
{/if}
