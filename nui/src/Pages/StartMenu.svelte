<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import {fade} from 'svelte/transition';
	import {push} from 'svelte-spa-router';
	import {_} from "../utils/i18n"
	const dispatch = createEventDispatcher();
	export let open = false;
	const Data: {name: string; icon: string; path: string}[] = [
		{
			name: "report",
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
	async function changeApp(path: string) {
		dispatch('closeStart', {});
		open = false;
		await push(`${path}`);
	}
</script>

<div transition:fade={{duration: 100}} class="absolute-bottom-left" style="bottom:90%">
	<div id="startmenu">
		<ul id="programs">
			{#each Data as apps}
				<!-- svelte-ignore a11y-missing-attribute -->
				<li on:click={() => changeApp(apps.path)}><a><img src={apps.icon} alt="" />{$_(`page.home.app.${apps.name}`)}</a></li>
			{/each}
		</ul>
		<ul id="links" class="" />
	</div>
</div>

<style>
	#meta a img {
		margin: 0 10px 0 0;
		border: solid 1px #000;
	}

	#startmenu {
		border: solid 1px #102a3e;
		overflow: visible;
		display: inline-block;
		margin: 60px 0 5px 5px;
		-moz-border-radius: 5px;
		-webkit-border-radius: 5px;
		border-radius: 5px;
		position: relative;
		box-shadow: inset 0 0 1px #fff;
		-moz-box-shadow: inset 0 0 1px #fff;
		-webkit-box-shadow: inset 0 0 1px #fff;
		background-color: #619bb9;
		background: -moz-linear-gradient(top, rgba(50, 123, 165, 0.75), rgba(46, 75, 90, 0.75) 50%, rgba(92, 176, 220, 0.75));
		background: -webkit-gradient(linear, center top, center bottom, from(#327aa4), color-stop(45%, #2e4b5a), to(#5cb0dc));
	}
	#programs,
	#links {
		float: left;
		display: block;
		padding: 0;
		list-style: none;
	}
	#programs {
		background: #fff;
		border: solid 1px #365167;
		margin: 7px 0 7px 7px;
		box-shadow: 0 0 1px #fff;
		-moz-box-shadow: 0 0 1px #fff;
		-webkit-box-shadow: 0 0 1px #fff;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
			border-radius: 3px;
	}
	#programs a {
		border: solid 1px transparent;
		display: block;
		padding: 3px;
		margin: 3px;
		color: #4b4b4b;
		text-decoration: none;
		min-width: 220px;
	}
	#programs a:hover {
		border: solid 1px #7da2ce;
		-moz-border-radius: 3px;
		-webkit-border-radius: 3px;
			border-radius: 3px;
		box-shadow: inset 0 0 1px #fff;
		-moz-box-shadow: inset 0 0 1px #fff;
		-webkit-box-shadow: inset 0 0 1px #fff;
		background-color: #cfe3fd;
		background: -moz-linear-gradient(top, #dcebfd, #c2dcfd);
		background: -webkit-gradient(linear, center top, center bottom, from(#dcebfd), to(#c2dcfd));
	}
	#programs a img {
		border: 0;
		vertical-align: middle;
		margin: 0 5px 0 0;
	}
	#links {
		margin: 7px;
		margin-top: -30px;
	}
</style>
