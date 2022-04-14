<script lang="ts">
	import {fetchNui} from '../../utils/fetchNui';
	import Accordion, {Panel, Header, Content} from '@smui-extra/accordion';
	import {OnDuty, Reports, UserInfo} from '../../store/store';
	import {_} from '../../utils/i18n';
	let container: HTMLDivElement;
	import InfoAssigment from './InfoAssigment.svelte';
	$: value = false;
	// {id: string; title: string; name: string; lastname: string; citizenid: string; localization: string; data: []; type: string; assigned: []}
	async function onAsign(data: {lastname?: string; id?: string; title?: string; citizenid?: string; name?: string; algo?: number; location: string; coords: {}; observations?: string; callsign?: string; taked: any; data?: string; type?: string}) {
		data.taked = true;
		await fetchNui('updateReport', {caseinfo: {...data}, userData: {...$UserInfo}}).then((cb) => {
			if (cb) {
			}
		});
	}

	function openInfo({observations, coords, location, id, callsign}): InfoAssigment {
		let open = true;
		console.log(observations, coords, location, id, callsign);

		let m = new InfoAssigment({
			target: container,
			props: {
				open: open,
				data: [{coords, location, id, callsign, observations}],
			},
		});
		m.$on('Close', () => (open = false));
		return m;
	}
</script>

<main>
	<div bind:this={container} class="calls full-height" style="z-index:801">
		<div class:light-dimmed={$OnDuty === false ? true : false} class="window absolute-right full-height" style="width:320px">
			<div class="window-body  full-height hide-scrollbar scroll">
				<Accordion>
					{#each $Reports as data}
						<div class="accordion-container q-mt-sm">
							<Panel color={data.taked === 0 ? 'primary' : 'secondary'}>
								<Header
									>{data.type.toUpperCase()}
									{data.id}

									<span slot="description">{data.taked === 1 ? data.callsign : 'Not Taked'}</span>
								</Header>

								<Content>
									{data.observations}
									<ul>
										<li class="q-mt-sm">{data.name}</li>
										<li class="q-mt-sm">{data.citizenid}</li>
										<li class="q-mt-sm">{data.location}</li>
									</ul>
								</Content>
							</Panel>
							<div class="field-row" style="align-items: center;justify-content: space-around;">
								{#if !data.taked}
									<button on:click={() => onAsign(data)}>Assign</button>
								{/if}
								<button on:click={() => openInfo(data)}>Information</button>
							</div>
						</div>
					{/each}
				</Accordion>
			</div>
		</div>
	</div>
</main>

<style>
	.jericotext {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		writing-mode: vertical-rl;
		text-orientation: upright;
		/* identical< to box height */

		text-align: center;

		color: #000000;
	}
	.buttonnsito {
		width: 85px;
		height: 22px;
		background: #483b3b;
	}
	.buttonnsito:hover {
		background: #302727;
	}
</style>
