<script lang="ts">
	import { fetchNui } from "../../../../utils/fetchNui";
	import Searching from "./Searching.svelte";
	import { createEventDispatcher } from "svelte";
	import UserList from "./UserList.svelte";
	export let open = false;
	export let type = "";
	$: searchName = "";
	const dispatch = createEventDispatcher();
	const closeModal = () => {
		open = false;
		dispatch("closeModal", false);
	};
	let zearch = false;
	async function OpenSearchMenu(): Promise<void> {
		let open = true;
		try {
			await fetchNui("searchPlayer", {
				name: searchName,
				app: "report",
				type: type
			}).then((cb) => {
				if (cb) {
					let m = new UserList({
						target: document.getElementById("id"),
						props: {
							open: open,
							data: cb,
						},
					});
					m.$on("sendData", (cb) => {
						const Data = cb.detail;
						const send = {
							Name: String,
							LastName: String,
							citizenid: String,
						};
						send.Name = Data.Name;
						send.LastName = Data.LastName;
						send.citizenid = Data.citizenid;
						dispatch("closeSearch", send);

						dispatch("closeModal", false);
					});
					open = false;
					return m;
				}
			});
		} catch (err) {
			console.log(`Search ${err}`);
		}
	}
</script>

{#if open}
	<div class="absolute-center">
		<div class="window" style="max-width: 100vh">
			<div class="title-bar">
				<div class="title-bar-text">Search by {type}</div>
				<div class="title-bar-controls">
					<button aria-label="Close" on:click={closeModal} />
				</div>
			</div>
			<div class="window-body">
				<label for="Search" label="Search">
					<input
						bind:value={searchName}
						type="text"
						name="Search"
						id="Search"
					/>
				</label>
				<button
					disabled={searchName.length < 3}
					on:click={() => OpenSearchMenu()}>Search</button
				>
			</div>
		</div>
	</div>
	<div id="id" />
{/if}
