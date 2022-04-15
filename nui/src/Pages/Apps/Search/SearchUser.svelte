<script lang="ts">
	import { h, html } from "gridjs";
	import colors from "../../../utils/vehicle-colors";
	import Grid from "gridjs-svelte";
	import { push } from "svelte-spa-router";
	import { fetchNui } from "../../../utils/fetchNui";
	import UserList from "../../Apps/Report/Modals/UserList.svelte";
	import { onMount } from "svelte";
	import ActiveBolos from "./Data/ActiveBolos.svelte";
	import { isEnvBrowser } from "../../../utils/misc";
	import Actions from "./Data/Actions.svelte";
	import { _ } from "../../../utils/i18n";
	import { waitLocale } from "svelte-i18n";
	let content;
	$: searchValue = "";
	let grid;
	onMount(() => {
		grid.forceRender();
	});

	$: SearchData = {
		name: "",
		lastName: "",
		bolo: false,
		citizenID: "",
		rank: "",
		jobName: "",
		vehicles: [],
		reports: [],
		observations: "",
		reset: function () {
			this.name = "";
			this.lastName = "";
			this.citizenID = "";
			this.rank = "";
			this.jobName = "";
			this.vehicles = [];
			this.reports = [];
			this.bolo = false;
			this.observations = "";
		},
	};
	$: datas = [];
	$: activeReports = SearchData.reports.length > 0 ? false : true;
	const style = {
		table: {
			width: "100%",
		},
		header: {
			display: "flex",
			alignItems: "center",
			flexDirection: "row-reverse",
		},
		footer: {
			width: "100%",
		},
	};
	const columns = [
		{ id: "plate", name: "Plate", width: "10%" },
		{ id: "model", name: "Model", width: "10%" },
		{
			id: "color",
			name: "Color",
			formatter: (
				cell: any,
				row: { cells: { data: string | number }[] }
			) =>
				html(
					`<input  type="text" class="" name="" id="asd" style="background:${
						colors[row.cells[2].data].Hex
					}; width:10%;" />`
				),
			width: "10%",
		},
		{
			id: "category",
			name: "Category",
			width: "10%",
		},
		{
			id: "bolo",
			name: "B.O.L.O",
			formatter: (cell, row) =>
				html(
					`<input placeholder=${
						row.cells[4].data === 1 ? "YES" : "NO"
					}  type="text" class="" name="" id="" style="background:${
						row.cells[4].data === 1 ? "red" : "white"
					};width:24%;"  />`
				),
			width: "10%",
		},
		{
			name: "Action",
			formatter: (cell, row) => {
				return h(
					"button",
					{
						onClick: () => {
							openActionmenu(
								row.cells[0].data,
								row.cells[4].data
							);
						},
					},
					"Actions"
				);
			},
			width: "10%",
		},
	];
	const getData = async () => {
		await grid
			.updateConfig({
				data: [],
			})
			.forceRender();
		SearchData.reset();
		let open = true;
		if (!isEnvBrowser()) {
			await fetchNui("searchPlayer", {
				name: searchValue,
				app: "search",
			}).then((cb) => {
				let m = new UserList({
					target: content,
					props: {
						open: open,
						data: cb,
					},
				});

				m.$on("sendData", async (cb1) => {
					const Data = cb1.detail;
					SearchData.citizenID = Data.citizenid;
					(SearchData.name = Data.Name),
					(SearchData.lastName = Data.LastName);
					SearchData.jobName = cb[0].JobName;
					SearchData.rank = cb[0].Rank;
					SearchData.reports = cb[0].Reports;
					SearchData.bolo = cb[0].bolo;
					datas = cb[0].Vehicles;
					datas = datas;

					try {
						await grid
							.updateConfig({
								data: datas,
							})
							.forceRender();
					} catch(err) {
						console.log(`SearchUser ${err}`)
					}
				});
				m.$on("closeModal", () => {
					open = false;
				});
			});
		}
	};
	function openActiveReports(): ActiveBolos {
		let open = true;
		if (!isEnvBrowser()) {
			let m = new ActiveBolos({
				target: content,
				props: { open: open, data: SearchData.reports },
			});
			m.$on("closeModal", () => (open = false));
			return m;
		}
	}
	function openActionmenu(plate: string, bolo: number): Actions {
		let open = true;
		let m = new Actions({
			target: content,
			props: {
				open: open,
				Plate: plate ?? "Is Null!!!",
				activebolo: bolo,
			},
		});
		m.$on("closeModal1", () => (open = false));
		return m;
	}
</script>

<div
	bind:this={content}
	class="absolute-center "
	style="width:97%;max-width:100%;min-width:40%;"
>
	<div class="window full-width full-height">
		<div class="title-bar">
			<div class="title-bar-text">{$_("page.searchApp.title")}</div>
			<div class="title-bar-controls">
				<button
					aria-label="Close"
					on:click|preventDefault={() => push("/")}
				/>
			</div>
		</div>
		<div class="window-body ">
			<fieldset>
				<fieldset>
					<div class="text-center">
						<label for="searchButton">
							{$_("page.searchApp.app.search")}</label
						>
						<input
							bind:value={searchValue}
							class="text-center"
							type="text"
							name="searchButton"
							id="searchButton"
						/>
						<button
							disabled={searchValue.length <= 3 ? true : false}
							on:click|preventDefault={getData}
							>{$_("page.home.app.search")}</button
						>
					</div>
				</fieldset>
				<fieldset class="float-left">
					<legend> {$_("page.searchApp.app.bdata")} </legend>

					<div class="field-row">
						<span class="label"
							>{$_("page.searchApp.app.name")}:</span
						>
						<input
							placeholder={SearchData.name}
							disabled
							type="text"
							class="input text-center"
							name=""
							id=""
						/>
					</div>
					<div class="field-row">
						<span class="label"
							>{$_("page.searchApp.app.lname")}:</span
						>
						<input
							placeholder={SearchData.lastName}
							disabled
							type="text"
							class="input text-center"
							name=""
							id=""
						/>
					</div>
					<div class="field-row">
						<span class="label">CitizenID:</span>
						<input
							placeholder={SearchData.citizenID}
							disabled
							type="text"
							class="input text-center"
							name=""
							id=""
						/>
					</div>
					<div class="field-row">
						<span class="label"
							>{$_("page.searchApp.app.job")}:</span
						>
						<input
							placeholder={SearchData.jobName}
							disabled
							type="text"
							class="input text-center"
							name=""
							id=""
						/>
					</div>
					<div class="field-row">
						<span class="label"
							>{$_("page.searchApp.app.rank")}:</span
						>
						<input
							placeholder={SearchData.rank}
							disabled
							type="text"
							class="input text-center"
							name=""
							id=""
						/>
					</div>
					<div class="field-row">
						<span class="label"
							>{$_("page.searchApp.app.reports")}:</span
						>
						<button
							on:click|preventDefault={openActiveReports}
							disabled={activeReports}
							class="input"
						>
							{activeReports ? "No" : "Yes"}
						</button>
					</div>
				</fieldset>
				<fieldset class="float-left q-ml-lg" style="width:60%;">
					<legend> {$_("page.searchApp.app.vehicles")} </legend>
					<Grid
						bind:instance={grid}
						autoWidth={false}
						{style}
						data={datas}
						{columns}
						pagination={{ enabled: true, limit: 2 }}
					/>
				</fieldset>
			</fieldset>

			<section
				class="field-row"
				style="display: flex;align-items: center;flex-direction: row;flex-wrap: nowrap;justify-content: space-around;"
			>
				<button on:click|preventDefault={() => push("/")}
					>{$_("Cerrar")}</button
				>
				<!-- svelte-ignore a11y-label-has-associated-control -->
			</section>
		</div>
	</div>
</div>

<style>
	.label {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		text-align: left;
		width: 120px;
		line-height: 26px;
		margin-bottom: 10px;
	}
	.input {
		flex: 0 0 200px;
		margin-left: 1px;
	}
</style>
