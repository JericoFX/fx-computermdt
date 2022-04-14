import {wrap} from 'svelte-spa-router/wrap';
import Home from '../Pages/Apps/Home.svelte';

export default {
	'/': Home,
	'/reportTool': wrap({asyncComponent: () => import('../Pages/Apps/Report/Report.svelte')}),
	'/about': wrap({asyncComponent: () => import('../Pages/Apps/About/About.svelte')}),
	'/Search': wrap({asyncComponent: () => import('../Pages/Apps/Search/Search.svelte')}),
	//'/General/:Reports?/:Warrants?/:BOLO?/:Reload': wrap({asyncComponent: () => import('../Pages/Apps/GeneralReports/General.svelte')}),
	'/My/:reload': wrap({asyncComponent: () => import('../Pages/Mytool/MyTool.svelte')}),
};
