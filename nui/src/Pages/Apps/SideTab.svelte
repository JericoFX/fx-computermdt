<script lang="ts">
	import { fetchNui } from "../../utils/fetchNui";
	import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
	import {
		OnDuty,
		Reports,
		UserInfo,
		IsBoss,
		currentAsignament,
		Callsign,
	} from "../../store/store";
	import { _ } from "../../utils/i18n";
	let container: HTMLDivElement;
	import InfoAssigment from "./InfoAssigment.svelte";
	// {id: string; title: string; name: string; lastname: string; citizenid: string; localization: string; data: []; type: string; assigned: []}
	async function onAsign(data: any): Promise<void> {
		data.taked = true;
		try {
			await fetchNui("updateReport", {
				caseinfo: { ...data },
				userData: { ...$UserInfo },
			}).then((cb) => {
				if (cb) {
				}
			});
		} catch (err) {
			console.log(`27 ${err}`);
		}
	}
	async function deAssign({ id, callsign }) {
		try {
			await fetchNui("deleteAssignment", {
				id: id,
				callsign: callsign,
			}).then(async (cb) => {
				if (cb) {
					$currentAsignament.splice(
						$currentAsignament.findIndex((e) => e.id === id),
						1
					);
					$currentAsignament = $currentAsignament;
				}
			});
		} catch (err) {
			console.log(`SideTab 44 ${err}`);
		}
	}
	function openInfo({
		observations,
		coords,
		location,
		id,
		callsign,
	}): InfoAssigment {
		let open = true;
	

		let m = new InfoAssigment({
			target: container,
			props: {
				open: open,
				data: [{ coords, location, id, callsign, observations }],
			},
		});
		m.$on("Close", () => (open = false));
		return m;
	}
	async function detelteAssignament({ id }) {
		try {
			await fetchNui("deleteReport", { id: id }).then((cb) => {
				if (cb) {
					$Reports.splice(
						$Reports.findIndex((e) => e.id === id),
						1
					);
					$currentAsignament.splice(
						$currentAsignament.findIndex((e) => e.id === id),
						1
					);
					$currentAsignament = $currentAsignament;
					$Reports = $Reports;
				}
			});
		} catch (err) {
			console.log(`SearchReports 85${err}`);
		}
	}
</script>

<main>
	<div bind:this={container} class="calls full-height" style="z-index:801">
		<div
			class:light-dimmed={$OnDuty === false ? true : false}
			class="window absolute-right full-height"
			style="width:320px"
		>
			<div class="window-body  full-height hide-scrollbar scroll">
				<Accordion>
					{#each $Reports as data}
						<div class="accordion-container q-mt-sm">
							<Panel
								color={data.taked === 0
									? "primary"
									: "secondary"}
							>
								<Header
									>{data.type.toUpperCase()}
									{data.id}

									<span slot="description"
										>{data.taked === 1
											? data.callsign
											: "Not Taked"}</span
									>
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
							<div
								class="field-row"
								style="align-items: center;justify-content: space-around;"
							>
								{#if !data.taked}
									<button on:click={() => onAsign(data)}
										>Assign</button
									>
								{:else if data.taked && $IsBoss}
									<button
										on:click={() =>
											detelteAssignament(data)}
										>Delete</button
									>
									<button on:click={() => deAssign(data)}
										>Unassign</button
									>
								{:else if data.callsign === $UserInfo.callsign}
									<button on:click={() => deAssign(data)}
										>Unassign</button
									>
								{:else if !data.taked && $IsBoss}
									<button
										on:click={() =>
											detelteAssignament(data)}
										>Delete</button
									>
								{/if}
								<button on:click={() => openInfo(data)}
									>Information</button
								>
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
