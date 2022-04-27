<script lang="ts">
	import {_} from '../../../utils/i18n';
	import {fetchNui} from '../../../utils/fetchNui';
	import PoliceList from './Modals/PoliceList.svelte';
	import {fade} from 'svelte/transition';
	import {push} from 'svelte-spa-router';
	import About from '../About/About.svelte';
	import ShortUniqueId from 'short-unique-id';
	import Search from './Modals/Search.svelte';
	import Polices from './Tables/Polices.svelte';
	import {PoliceEvidence, PoliceFines, PoliceLists, Reports} from '../../../store/store';
	import Evidences from './Tables/Evidences.svelte';
	import {isEnvBrowser, SendMessage} from '../../../utils/misc';
	import Acepted from './Modals/Acepted.svelte';
	import {onDestroy, onMount} from 'svelte';
	import SearchReports from './SearchReports.svelte';
	import Fines from './Tables/Fines.svelte';
	import {Tables} from '../../../utils/misc';
	export let params = {
		name: null,
		lastname: '',
		citizenid: '',
		plate: '',
		title: null,
		isvehicle: false,
		observations: '',
	};

	let container;
	let uid = new ShortUniqueId({length: 5});
	onMount(() => {
		Tables();
	});

	const Values = [
		{id: 'bolo', text: 'Bolo'},
		{id: 'warrant', text: 'Warrant'},
		{id: 'basic', text: 'Basic'},
		{id: 'report', text: 'Report'},
	];
	$: select = 0;
	let reportData = {
		id: uid(),
		name: '',
		lastname: '',
		rank: '',
		citizenid: '',
		location: '',
		coords: '',
		plate: '',
		bolo: false,
		observations: 'No observations',
		title: '',
		type: Values[3].id,
		amount: 0,
		isvehicle: false,
		data: {
			evidences: [],
			polices: [],
			fines: [],
		},
		reset: () => {
			(this.name = ''),
				(this.lastname = ''),
				(this.rank = ''),
				(this.citizenid = ''),
				(this.location = ''),
				(this.coords = ''),
				(this.observations = 'No observations'),
				(this.title = ''),
				(this.type = Values[2].id),
				(this.amount = 0),
				(this.data = {
					evidences: [],
					polices: [],
					fines: [],
				});
			this.isvehicle = false;
			this.plate = '';
		},
	};
	$: if (params.title !== null) {
		reportData = {
			...params,
			id: uid(),
			location: '',
			type: Values[0].id,
			bolo: true,
			amount: 0,
			data: {
				evidences: [],
				polices: [],
				fines: [],
			},
			rank: '',
			coords: '',
			reset: () => {
				(this.name = ''),
					(this.lastname = ''),
					(this.rank = ''),
					(this.citizenid = ''),
					(this.location = ''),
					(this.coords = ''),
					(this.observations = 'No observations'),
					(this.title = ''),
					(this.type = Values[2].id),
					(this.amount = 0),
					(this.data = {
						evidences: [],
						polices: [],
						fines: [],
					});
				this.isvehicle = false;
				this.plate = '';
			},
		};
	} else {
	}
	reportData.data.evidences = $PoliceEvidence;
	reportData.data.polices = $PoliceLists;
	reportData.data.fines = $PoliceFines;

	$: amountFines = $PoliceFines.reduce((n, {amount}) => n + amount, 0);
	$: disabled = false;
	$: disableLocale = false;
	let jerico = 0;
	let Int = setInterval(() => {
		jerico = Math.random() * 100;
	}, 5000);

	function openAbout() {
		let open = true;
		let m = new About({
			target: container,
			props: {
				open: open,
			},
		});
		m.$on('closeAbout', () => (open = false));
		return m;
	}
	/*
*Param Type:String
this param represent the type of the search, by name, by citizenid etc etc..
*/
	function openSearch(type: string): Search {
		let open = true;
		let m = new Search({
			target: container,
			props: {
				open: open,
				type: type,
			},
		});
		m.$on('closeSearch', (cb) => {
			//Getting the data from another svelte document
			const Data = cb.detail;
			reportData.citizenid = Data[0]?.citizenid || Data.citizenid;
			reportData.name = Data[0]?.Name || Data.Name;
			reportData.lastname = Data[0]?.LastName || Data.LastName;
			disabled = true;
		});
		m.$on('closeModal', (cb) => (open = false));
		return m;
	}

	async function openPolices() {
		let open = true;
		try {
			await fetchNui('getAllPolices').then((cb) => {
				let m = new Polices({
					target: container,
					props: {
						open: open,
						polices: cb,
					},
				});
				m.$on('closeAbout', () => (open = false));
			});
		} catch (err) {
			console.log(`Report ${err}`);
		}
	}
	async function openEvidence(view: boolean): Promise<void> {
		let open = true;
		if (!isEnvBrowser()) {
			try {
				await fetchNui('getEvidence').then((cb) => {
					if (cb) {
						let m = new Evidences({
							target: container,
							props: {
								open: open,
								Evidence: view === true ? $PoliceEvidence : cb,

								viewEvidence: view,
							},
						});
						m.$on('closeAbout', () => (open = false));
					}
				});
			} catch (err) {
				console.log(`Report 160 ${err}`);
			}
		} else {
			let m = new Evidences({
				target: container,
				props: {
					open: open,
					Evidence: $PoliceEvidence,

					viewEvidence: view,
				},
			});
			m.$on('closeAbout', () => (open = false));
		}
	}
	async function getCurrentLocation(): Promise<void> {
		await fetchNui('getCurrentLocation').then((cb) => (reportData.location = cb));
		disableLocale = true;
	}
	function openPoliceList(): PoliceList {
		let open = true;
		let m = new PoliceList({
			target: container,
			props: {
				open: open,
			},
		});
		m.$on('closeAbout', () => (open = false));
		return m;
	}
	let reportOpen = true;

	async function sendReport() {
		let open = true;
		reportData.amount = amountFines;
		if (reportData.isvehicle && reportData.plate.length < 4) {
			let m = new Acepted({
				target: container,
				props: {
					open: open,
					message: $_('please-fill-the-plate'),
				},
			});
			m.$on('closeModal', () => (open = false));
			return;
		} else {
			if (!isEnvBrowser()) {
				try {
					reportData.bolo = reportData.isvehicle;
					await fetchNui('sendNewReport', {
						report: reportData,
					}).then((cb) => {
						if (cb) {
							let m = new Acepted({
								target: container,
								props: {
									open: open,
									message: $_('report-created', {values: {0: reportData.id}}),
								},
							});
							if (!$Reports.some((e) => e.id === reportData.id) && reportData.type !== 'basic') {
								$Reports.push(reportData);
								$Reports = $Reports;
							}
							reportData.id = uid();

							resetTables();
							reportData.reset();
							m.$on('closeModal', () => (open = false));
						} else {
							let m = new Acepted({
								target: container,
								props: {
									open: open,
									message: $_('error-creating-the-report'),
								},
							});
							m.$on('closeModal', () => (open = false));
						}
					});
				} catch (err) {}
			} else {
				let m = new Acepted({
					target: container,
					props: {
						open: open,
						message: $_('report-created', {values: {0: reportData.id}}),
					},
				});
				reportData.id = uid();
				m.$on('closeModal', () => (open = false));
			}
		}
	}
	function openFines(show: boolean): void {
		let open = true;
		let m = new Fines({
			target: container,
			props: {
				open: open,
				show: show,
			},
		});
		m.$on('closeModal', () => (open = false));
	}
	function resetTables() {
		$PoliceEvidence.length = 0;
		$PoliceFines.length = 0;
	}
	async function getClosestPlayerData(): Promise<void> {
		try {
			await fetchNui('getClosestPlayerData', {}).then((cb) => {
				if (cb) {
					reportData.name = cb.name;
					reportData.citizenid = cb.citizenid;
					reportData.lastname = cb.lastname;
					disabled = true;
				} else {
					SendMessage('NO PLAYER DETECTED');
				}
			});
		} catch (error) {
			console.log(error);
		}
	}
	onDestroy(() => {
		// if (reportData.name !== '') {
		// 	reportData.reset();
		// }

		clearInterval(Int);
		resetTables();
	});
</script>

<div transition:fade={{duration: 100}} class="absolute-center">
	<div class="window" style="max-width: 200vh;width:102vh">
		<div class="title-bar">
			<div class="title-bar-text">{$_('page.report.title')}</div>
			<div class="title-bar-controls">
				<button aria-label="Close" on:click={() => push('/')} />
			</div>
		</div>
		<ul role="menubar" class="can-hover">
			<li role="menuitem" tabindex="0" aria-haspopup="true">
				{$_('page.report.menu.add')}
				<ul role="menu">
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem" class="has-divider">
						<a on:click={getClosestPlayerData}> {$_('page.report.menu.addmenu.close')}</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem">
						<a on:click={getCurrentLocation}>{$_('page.report.menu.addmenu.street')}</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem">
						<a on:click={openPolices}>{$_('page.report.menu.addmenu.police')}</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem">
						<a on:click={() => openEvidence(false)}>{$_('page.report.menu.addmenu.evidence')}</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem">
						<a on:click={() => openFines(false)}>{$_('page.report.menu.addmenu.fine')}</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem"><a>Add Images</a></li>
				</ul>
			</li>
			<li role="menuitem" tabindex="0" aria-haspopup="true">
				{$_('page.report.menu.search')}
				<ul role="menu">
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem">
						<a on:click={() => openSearch('name')}>{$_('page.report.menu.searchmenu.name')}</a>
					</li>
					<li role="menuitem">
						<!-- svelte-ignore a11y-missing-attribute -->
						<a on:click={() => openSearch('plate')}>By Vehicle Plate</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
				</ul>
			</li>
			<li role="menuitem" tabindex="0" aria-haspopup="true">
				{$_('page.report.menu.view')}
				<ul role="menu">
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem">
						<a on:click={openPoliceList}> {$_('page.report.menu.viewmenu.vpolice')}</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem">
						<a on:click={() => openEvidence(true)}>{$_('page.report.menu.viewmenu.vevidence')}</a>
					</li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem">
						<a on:click={() => openFines(true)}>{$_('page.report.menu.viewmenu.vfines')}</a>
					</li>
				</ul>
			</li>

			<li role="menuitem" tabindex="0" aria-haspopup="true">
				Help
				<ul role="menu">
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem"><a>View Help</a></li>
					<!-- svelte-ignore a11y-missing-attribute -->
					<li role="menuitem"><a on:click={openAbout}>About</a></li>
				</ul>
			</li>
		</ul>
		<div class="window-body " style="height:47vh">
			<section class="tabs relative-position full-width" style="max-width: 200vh">
				<menu role="tablist" aria-label="Tabsitos">
					<button role="tab" aria-selected="true" aria-controls="reports-tab">{$_('page.report.rcreate')}</button>
					<button role="tab" aria-controls="search-reports-tab">{$_('page.report.rsearch')}</button>
				</menu>

				<article role="tabpanel" id="reports-tab">
					<div class="jerico relative-position full-width">
						<fieldset>
							<fieldset class="float-left">
								<legend>{$_('page.report.rbody.rinfo')}</legend>
								<div class="infoUser">
									<div class="field-row">
										<span>
											<label class="nameField" for="User">
												{$_('page.report.rbody.rtitle')}
											</label>
											<input bind:value={reportData.title} type="text" class="inputField" name="Something" id="Title" />
										</span>
									</div>
									<div class="field-row">
										<span>
											<label class="nameField" for="User">
												{$_('page.report.rbody.rname')}
											</label>
											<input {disabled} bind:value={reportData.name} type="text" class="inputField" name="Something" id="User" />
										</span>
									</div>
									<div class="field-row ">
										<span>
											<label class="nameField" for="LName"> {$_('page.report.rbody.rlname')}</label>
											<input {disabled} bind:value={reportData.lastname} class="inputField" type="text" name="LName" id="LName" />
										</span>
									</div>
									<div class="field-row ">
										<span>
											<label class="nameField" for="CID">
												{$_('page.report.rbody.rcid')}
											</label>
											<input {disabled} bind:value={reportData.citizenid} class="inputField" type="text" name="CID" id="CID" />
										</span>
									</div>
									<div class="field-row ">
										<span>
											<label class="nameField" for="Local">
												{$_('page.report.rbody.rlocation')}
											</label>
											<input disabled={disableLocale} bind:value={reportData.location} class="inputField" type="text" name="Local" id="Local" />
										</span>
									</div>
									{#if reportData.isvehicle}
										<div class="field-row ">
											<span>
												<label class="nameField" for="Plate"> Plate: </label>
												<input bind:value={reportData.plate} class="inputField" type="text" name="Plate" id="Local" />
											</span>
										</div>
									{/if}
								</div>
							</fieldset>

							<fieldset class="float-left q-ml-md" style:max-width="629px">
								<legend class="text-center">{$_('page.report.rbody.robs')}</legend>
								<div class="infoUser">
									<div class="field-row-stacked">
										<textarea bind:value={reportData.observations} name="Observations" class="text-h6" id="jere" cols="8" rows="8" style="width:32.760416666666664vw;height:24.24557752341311vh;max-width:32.760416666666664vw;;min-width:15.625vw;max-height:24.24557752341311vh;min-height: 24.24557752341311vh;" />
									</div>
								</div>
							</fieldset>
							<fieldset class="float-left full-width">
								<div class="field-row" style="justify-content: space-between">
									<select bind:value={reportData.type}>
										{#each Values as val}
											<option value={val.id}>{val.text}</option>
										{/each}
									</select>
									<input bind:checked={reportData.isvehicle} type="checkbox" id="example2" />
									<label for="example2">Is Vehicle</label>
								</div>
							</fieldset>
						</fieldset>

						<section class="field-row" style="justify-content: space-around">
							<button>{$_('page.report.rbuttons.rcancel')}</button>
							<button disabled={reportData.title.length < 3} on:click={sendReport}>{$_('page.report.rbuttons.radd')}</button>
							<!-- svelte-ignore a11y-label-has-associated-control -->
						</section>
					</div>
				</article>

				<!-- SEARCH TABS -->
				<article role="tabpanel" id="search-reports-tab" style="display:none;">
					<div class="jerico relative-position full-width">
						<SearchReports />
					</div>
				</article>
			</section>
		</div>
		<div class="status-bar">
			<p class="status-bar-field">Report ID: {reportData.id}</p>
			<p class="status-bar-field">Report Tool</p>
			<p class="status-bar-field">CPU Usage: {jerico.toFixed(0)}%</p>
		</div>
	</div>
</div>
<div bind:this={container} />

<style>
	#search-reports-tab {
		height: 40vh;
	}
	.nameField {
		display: inline-block;
		width: 4.16vw;
		text-align: left;
		padding: 14px 10px 0 0;
		margin: 0 0 7px 0;
	}
	.inputField {
		display: inline-block;
		width: 6.77vw;
		margin: 0;
		margin: 0 0 7px 0;
	}
</style>
