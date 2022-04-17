<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	import {slide} from 'svelte/transition';
	import {push} from 'svelte-spa-router';
	import Grid from 'gridjs-svelte';
	import Codes from '../../utils/codes';
	import ShortUniqueId from 'short-unique-id';

	import {Callsign, CodesPolice, Notify, UserInfo} from '../../store/store';
	import {h} from 'gridjs';
	import {fetchNui} from '../../utils/fetchNui';
	let uid = new ShortUniqueId({length: 5});
	let grid;
	let content;
	const dispatch = createEventDispatcher();
	export let open = false;
	const style = {
		table: {
			width: '100%',
			height: '100%',
		},
		header: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'row-reverse',
		},
		footer: {
			width: '100%',
		},
	};
	function closeModal() {
		open = false;
		dispatch('closeModal');
	}
	const columns = [
		{
			id: 'code',
			name: 'Code',
			width: '10%',
		},
		{
			id: 'value',
			name: 'Code Description',
			width: '20%',
		},
		{
			id: 'add',
			name: 'Action',
			formatter: (cell, row) => {
				return h(
					'button',
					{
						onClick: () => {
							addNotify(row.cells[0].data, row.cells[1].data);
						},
					},
					'Delete'
				);
			},
			width: '10%',
		},
	];
	function addNotify(id: string, value: string): void {
		if (!$Notify.some((e) => e.code === id && e.callsign === $UserInfo.callsign)) {
			fetchNui('sendHelpRequest', {
				uid: uid(),
				code: id,
				text: value,
				callsign: $UserInfo.callsign,
				taked: false,
			});
		}
	}
</script>

{#if open}
	<div bind:this={content} class="absolute-center " style="width:100%;max-width:100%;min-width:40%;height: 65vh;">
		<div class="window full-width">
			<div class="title-bar">
				<div class="title-bar-text">Set new Report</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click|preventDefault={() => push('/')} />
				</div>
			</div>
			<div class="window-body relative-position" style:max-height="64vh">
				<fieldset class="text-center">
					<div class="field-row" style="justify-content:center">
						<fieldset>
							<Grid bind:instance={grid} {style} {columns} data={Codes || []} pagination={{enabled: true, limit: 6}} search />
						</fieldset>
					</div>
				</fieldset>
				<!-- <fieldset class="full-width">
				<legend> Polices Online </legend>
				<Grid data={[]} autoWidth search pagination={{enabled: true, page: 4}} columns={['id', 'Name', 'Last Name', 'Send Email', 'Request Help']} />
			</fieldset> -->
				<section class="field-row" style="justify-content: space-around;align-content:center;">
					<button on:click={closeModal}>Close</button>
					<!-- svelte-ignore a11y-label-has-associated-control -->
				</section>
			</div>
		</div>
	</div>
{/if}
