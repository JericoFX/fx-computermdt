import {wrap} from 'svelte-spa-router/wrap';
import Home from '../Pages/Apps/Home.svelte';
//Load async the pages
export default {
	'/': Home,
	'/reportTool/:title?/:name?/:lastname?/:citizenid?/:isvehicle?/:plate?/:observations?': wrap({asyncComponent: () => import('../Pages/Apps/Report/Report.svelte')}),
	'/about': wrap({asyncComponent: () => import('../Pages/Apps/About/About.svelte')}),
	'/Search': wrap({asyncComponent: () => import('../Pages/Apps/Search/Search.svelte')}),
	'/My/:reload': wrap({asyncComponent: () => import('../Pages/Mytool/MyTool.svelte')}),
};
