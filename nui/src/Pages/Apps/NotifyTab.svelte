<script lang="ts">
	import Accordion from '@smui-extra/accordion/src/Accordion.svelte';
	import Panel from '@smui-extra/accordion/src/Panel.svelte';
	import Header from '@smui-extra/accordion/src/Header.svelte';
	import {Content} from '@smui-extra/accordion';
	import {slide} from 'svelte/transition';
	import {Callsign, Notify, UserInfo} from '../../store/store';
	import {useNuiEvent} from '../../utils/useNuiEvent';
	import {fetchNui} from '../../utils/fetchNui';

	async function deleteRow({uid, callsign}) {
		if (callsign === $UserInfo.callsign) {
			await fetchNui('takeHelp', {
				uid: uid,
				callsign: callsign,
				type: 'delete',
			}).then((cb) => {
				if (cb) {
					$Notify.splice(
						$Notify.findIndex((e) => e.uid === uid),
						1
					);
					$Notify = $Notify;
				}
			});
		} else {
			$Notify.splice(
				$Notify.findIndex((e) => e.uid === uid),
				1
			);
			$Notify = $Notify;
		}
	}
	function takeRow({uid, callsign}) {
		if (callsign === $UserInfo.callsign) {
		} else {
			fetchNui('takeHelp', {
				uid: uid,
				callsign: $UserInfo.callsign,
				type: 'help',
			});
		}
	}
	useNuiEvent('getHelpRequest', ({data}) => {
		$Notify = data;
		$Notify = $Notify;
	});
</script>

<div class="jerico absolute-center flex column wrap hide-scrollbar scroll full-height">
	<Accordion>
		{#each $Notify as d}
			{@const ccall = d.callsing === $UserInfo.callsign}

			<div transition:slide class="accordion-container relative-position q-mt-sm ">
				<Panel color={d.taked === true ? 'seconday' : 'primary'} variant="outlined" square>
					<Header class="text-white">
						{#if d.taked}
							Unit {d.takedby.toUpperCase()} has taked the call
						{:else}
							Unit {d.callsign} Need Help`
						{/if}
					</Header>
					<Content class="text-white">
						<p class="text-bold">Code: {d.code}</p>
						<p class="text-light">
							Detail: {d.text}
						</p>
						<p class="text-light">
							Street: {d.street}
						</p>
					</Content>
				</Panel>
				<div class="field-row q-px-sm" style="justify-content: space-around;">
					{#if !d.take}
						<div class="field-row">
							<img class="btn  q-px-sm" src="iconos/take.svg" alt="" on:click={() => takeRow(d)} />
						</div>
					{/if}
					{#if d.callsign === $UserInfo.callsign}
						<div class="field-row">
							<img class="btn  q-px-sm" src="iconos/delete.svg" on:click={() => deleteRow(d)} alt="" />
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</Accordion>
</div>

<style>
	.btn {
		width: 40px;
		opacity: 0.3;
		transition: 0.5s;
	}
	.btn:hover {
		opacity: 1;
	}
</style>
