<script lang="ts">
	import {fetchNui} from '../../utils/fetchNui';
	import Accordion, {Panel, Header, Content} from '@smui-extra/accordion';
	import {OnDuty, Reports, UserInfo, IsBoss, currentAsignament, Callsign} from '../../store/store';
	import {slide} from 'svelte/transition';
	import {_} from '../../utils/i18n';
	let container: HTMLDivElement;
	import InfoAssigment from './InfoAssigment.svelte';
	import {useNuiEvent} from '../../utils/useNuiEvent';
	import {isEnvBrowser, SendMessage} from '../../utils/misc';
	// {id: string; title: string; name: string; lastname: string; citizenid: string; localization: string; data: []; type: string; assigned: []}
	// $Reports = [
	// 	{
	// 		algo: 152,
	// 		id: 'ZY2Yr',
	// 		title: 'KELLY',
	// 		name: 'Fatima',
	// 		lastname: 'Santurio',
	// 		citizenid: 'UAI83724',
	// 		plate: '',
	// 		location: 'Atlee Street',
	// 		coords: '{"x":442.8395690917969,"y":-977.9208984375,"z":30.6783447265625}',
	// 		observations: 'No observations',
	// 		data: '{"fines":[{"category":0,"id":104,"label":"Possession of Stolen Property","jailtime":3,"amount":150}],"polices":[],"evidences":[]}',
	// 		amount: 150,
	// 		type: 'report',
	// 		taked: 0,
	// 		callsign: '0',
	// 		isvehicle: 0,
	// 		date: null,
	// 	},
	// 	{
	// 		algo: 153,
	// 		id: 'zu9HU',
	// 		title: 'KELLY',
	// 		name: 'Fatima',
	// 		lastname: 'Santurio',
	// 		citizenid: 'UAI83724',
	// 		plate: '',
	// 		location: 'Atlee Street',
	// 		coords: '{"x":442.8395690917969,"y":-977.9208984375,"z":30.6783447265625}',
	// 		observations: 'No observations',
	// 		data: '{"fines":[{"category":0,"id":104,"label":"Possession of Stolen Property","jailtime":3,"amount":150}],"polices":[],"evidences":[]}',
	// 		amount: 150,
	// 		type: 'report',
	// 		taked: 0,
	// 		callsign: '0',
	// 		isvehicle: 0,
	// 		date: null,
	// 	},
	// 	{
	// 		algo: 154,
	// 		id: 'ui6aU',
	// 		title: 'KELLY',
	// 		name: 'Fatima',
	// 		lastname: 'Santurio',
	// 		citizenid: 'UAI83724',
	// 		plate: '',
	// 		location: 'Atlee Street',
	// 		coords: '{"x":442.8395690917969,"y":-977.9208984375,"z":30.6783447265625}',
	// 		observations: 'No observations',
	// 		data: '{"fines":[{"category":0,"id":104,"label":"Possession of Stolen Property","jailtime":3,"amount":150}],"polices":[],"evidences":[]}',
	// 		amount: 150,
	// 		type: 'report',
	// 		taked: 0,
	// 		callsign: '0',
	// 		isvehicle: 0,
	// 		date: null,
	// 	},
	// ];
	async function onAsign(data: any): Promise<void> {
		data.taked = true;
		if (!isEnvBrowser()) {
			try {
				await fetchNui('updateReport', {
					caseinfo: {...data},
					userData: {...$UserInfo},
				}).then((cb) => {
					if (!cb) {
						SendMessage('Error updating the report');
					}
				});
			} catch (err) {
				console.log(`27 ${err}`);
			}
		} else {
			let datas = $Reports.findIndex((e) => e.id === data.id);
			$Reports[datas] = {...$Reports[datas], callsign: 'Jerico', taked: true};
			$Reports = $Reports;
		}
	}
	async function deAssign({id, callsign}) {
		try {
			await fetchNui('deleteAssignment', {
				id: id,
				callsign: callsign,
			}).then(async (cb) => {
				if (!cb) {
					SendMessage('Error taking down the callsign');
				}
			});
		} catch (err) {
			console.log(`SideTab 107 ${err}`);
		}
	}
	function openInfo({observations, coords, location, id, callsign}): InfoAssigment {
		let open = true;

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
	async function detelteAssignament({id, isvehicle, plate}) {
		try {
			await fetchNui('deleteReport', {
				id: id,
				isvehicle: isvehicle,
				plate: plate,
			}).then((cb) => {
				if (!cb) {
					SendMessage('Error deleting the report');
				}
			});
		} catch (err) {
			console.log(`SearchReports 85 ${err}`);
		}
	}
</script>

<!-- class:light-dimmed={$OnDuty === false ? true : false} -->
<main>
	<div bind:this={container} class="calls full-height" style="z-index:801">
		<div class="window absolute-right " style="width:320px;max-height:71vh">
			<div class="window-body  hide-scrollbar scroll" style="height:70vh">
				<Accordion>
					{#each $Reports as data}
						<div transition:slide class="accordion-container q-mt-sm ">
							<Panel color={data.taked === 0 || data.taked === false ? 'primary' : 'secondary'}>
								<Header
									>{data.type?.toUpperCase()}
									{data.id}
									<span slot="description">{data.taked === 1 || data.taked === true ? data.callsign : 'Not Taked'}</span>
								</Header>

								<Content>
									{data.observations}
									<ul>
										<li class="q-mt-sm">{data.name}</li>
										<li class="q-mt-sm">
											{data.citizenid}
										</li>
										<li class="q-mt-sm">{data.location}</li>
									</ul>
								</Content>
							</Panel>
							<div class="field-row q-mt-sm" style="align-items: center;justify-content: space-around;">
								{#if !data.taked}
									<button on:click={() => onAsign(data)}>Assign</button>
								{:else if data.taked && $IsBoss}
									<button on:click={() => detelteAssignament(data)}>Delete</button>
									<button on:click={() => deAssign(data)}>Unassign</button>
								{:else if data.callsign === $UserInfo.callsign}
									<button on:click={() => deAssign(data)}>Unassign</button>
									<button on:click={() => detelteAssignament(data)}>Delete</button>
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
</style>
