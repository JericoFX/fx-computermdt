<script lang="ts">
	import {_, setupI18n, isLocaleLoaded} from './utils/i18n';
	import {fade} from 'svelte/transition';
	import Router, {push} from 'svelte-spa-router';
	import routes from './utils/routes';
	import WindowsBar from './Pages/WindowsBar.svelte';
	import {useNuiEvent} from './utils/useNuiEvent';
	import {isEnvBrowser} from './utils/misc';
	let open = isEnvBrowser() ? true : false;
	import CCallsign from './CCallsign.svelte';
	import {fetchNui} from './utils/fetchNui';
	import {Callsign, IsBoss, Langs, OnDuty, Reports, UserInfo} from './store/store';
	import SideTab from './Pages/Apps/SideTab.svelte';
	import {onMount} from 'svelte';

	$: types = 'pc';
	let defaultLangs = isEnvBrowser() ? 'en' : 'en';
	useNuiEvent('openTablet', ({isvisible, defaultLang, onduty, userdata, type, langs}) => {
		open = isvisible;
		types = type;
		$UserInfo = userdata;
		$IsBoss = userdata.isboss;
		$Langs = langs;
		$Callsign = userdata.callsign;
		defaultLangs = defaultLang;
		$OnDuty = onduty;
	});
	onMount(() => {
		setupI18n({withLocale: defaultLangs});
	});

	useNuiEvent('updateReports', ({reports}) => {
		$Reports = reports;
		console.log(JSON.stringify($Reports));
	});
	function handleKeydown(event: {keyCode: number}) {
		if (event.keyCode === 27) {
			open = !open;
			types = '';
			fetchNui('exitMDT');
		}
		1;
	}
	const Data: {name: string; icon: string; path: string}[] = [
		{
			name: 'report',
			icon: 'iconos/agreement.png',
			path: '/reportTool',
		},
		{
			name: 'user',
			icon: 'iconos/search.png',
			path: '/Search',
		},
		{
			name: 'mytool',
			icon: 'iconos/user.png',
			path: `/My/${true}`,
		},
	];
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open && $isLocaleLoaded === true}
	<img transition:fade={{duration: 100}} src={types === 'pc' ? 'iconos/background.png' : 'iconos/car.png'} class="absolute-center" style:width="72.39vw" style:height="88.55vh" style:top="51.5%" alt="" srcset="" />
	<div class="background  non-selectable absolute-center" style:width="66.66vw" style:height="74.92vh">
		<!-- <Home /> -->
		{#if $Callsign === 'NO CALLSIGN'}
			<CCallsign />
		{:else}
			<div class="apps">
				{#each Data as apps}
					<div class="iconos" on:dblclick={() => push(apps.path)}>
						<img src={apps.icon} alt={apps.name} srcset="" style:width="48px" />
						<br />
						<p class="menu-title text-center text-white text-h6">
							{$_(`page.home.app.${apps.name}`)}
						</p>
					</div>
				{/each}
			</div>
			<SideTab />
			<Router {routes} />
		{/if}

		<WindowsBar />
	</div>
{/if}

<style>
	@import 'https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css';
	:root {
		font-family: 'Poppins', sans-serif;
	}
	/*:global(body){
		width: 1280px;
		height: 720px;
	}*/
	.background {
		background-image: url('https://img.wallpapersafari.com/desktop/1920/1080/32/22/xtjhUq.jpg');
		width: 100%;
		height: 100vh;
		background-repeat: no-repeat;
	}
	.apps {
		float: left;
		text-align: center;
		list-style: none;
	}
	.iconos {
		border-radius: 0.2em;
		text-decoration: none;
		border: solid 1px transparent;
		display: block;
		padding: 3px;
		color: #ffffff;
		text-shadow: 0.2em 0.1em 0.3em #000000;
	}
	.iconos:hover {
		border: solid 1px #bbd6ec;
		box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.13);
		-webkit-box-shadow: inset 0 0 1px #fff;
		background-color: #5ca9e836;
	}
</style>
