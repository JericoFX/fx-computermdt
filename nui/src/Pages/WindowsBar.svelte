<script lang="ts">
	import StartMenu from './StartMenu.svelte';
	import {setupI18n} from '../utils/i18n';
	import {Langs} from '../store/store';
	import {fade} from 'svelte/transition';
	let container;
	$: active = false;
	let openmenu = false;
	function closeMenu(_bools: any) {
		openmenu = false;
	}
	function changeLang(index: any) {
		console.log(index);

		setupI18n({withLocale: index});
		active = false;
	}
</script>

<div class="absolute-bottom-right" style="z-index:1;">
	<img on:click={() => (active = !active)} src="iconos/agreement.png" class="q-mr-lg q-mb-sm" alt="" style="width:18px" />
</div>
{#if active}
	<div transition:fade={{duration: 100}} class="window absolute-bottom-right" style="bottom:7%;height:auto">
		<div class="window-body">
			{#each $Langs as lang}
				<div class="field-row">
					<button on:click|preventDefault={() => changeLang(lang.index)}> {lang.lang}</button>
				</div>
			{/each}
		</div>
	</div>
{/if}
<div bind:this={container} class="bar absolute-bottom no-padding no-margin">
	{#if openmenu}
		<StartMenu on:closeStart={closeMenu} />
	{/if}
	<div id="bottom">
		<img on:click={() => (openmenu = !openmenu)} id="start" src="iconos/start-button.png" alt="asd" />
	</div>
</div>

<style>
	#bottom {
		z-index: 800;
		width: 100%;
		height: 41px;
		background: -webkit-linear-gradient(65deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
		background: -moz-linear-gradient(65deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
		background: -ms-linear-gradient(65deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
		background: -o-linear-gradient(65deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
		background: linear-gradient(65deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
		border-top: 1px solid rgba(0, 0, 0, 0.5);
		-webkit-box-shadow: inset 0 1px 0px rgba(255, 255, 255, 0.4);
		-moz-box-shadow: inset 0 1px 0px rgba(255, 255, 255, 0.4);
		box-shadow: inset 0 1px 0px rgba(255, 255, 255, 0.4);
	}

	
	#start {
		width: 40px;
		height: 40px;
		filter: brightness(0.6);
		transition: filter 0.3s;
	}
	#start:hover {
		filter: brightness(1);
	}
</style>
