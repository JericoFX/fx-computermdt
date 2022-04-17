import {addMessages, dictionary, init, locale, _} from 'svelte-i18n';
import {get, derived, writable} from 'svelte/store';
// ...
const MESSAGE_FILE_URL_TEMPLATE = 'locales/{locale}.json';
let _activeLocale: string | number;
// Internal store for tracking network
// loading state
const isDownloading = writable(false);
async function setupI18n(options: {withLocale: any}) {
	// ...

	const {withLocale: locale_} = options;
	init({
		initialLocale: locale_,
		fallbackLocale: 'en',
	});
	const messagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace('{locale}', locale_);
	if (!hasLoadedLocale(locale_)) {
		isDownloading.set(true);
		// ...
		const messages = await loadJson(messagesFileUrl);

		_activeLocale = locale_;
		addMessages(locale_, messages);
		locale.set(locale_);
		isDownloading.set(false);
	}
}

const isLocaleLoaded = derived([isDownloading, dictionary], ([$isDownloading, $dictionary]) => !$isDownloading && $dictionary[_activeLocale] && Object.keys($dictionary[_activeLocale]).length > 0);
// ...
export {_, setupI18n, isLocaleLoaded, locale};
// import {get, derived, writable} from 'svelte/store';
// // ...
//

// let _activeLocale;
// // Internal store for tracking network
// // loading st

// const isDownloading = writable(false);

// async function setupI18n(options: {withLocale: any}) {
// 	const {withLocale: locale_} = options;
// 	init({
// 		initialLocale: locale_,
// 		fallbackLocale: 'en',
// 	});

// 	if (!hasLoadedLocale(locale_)) {
//
// 		language(messagesFileUrl);
// 		isDownloading.set(true);
// 		// ...
// 		const messages = await loadJson(messagesFileUrl);
// 		_activeLocale = locale_;
// 		addMessages(locale_, messages);
// 		locale.set(locale_);
// 		isDownloading.set(false);
// 	}
// }
async function loadJson(url: RequestInfo): Promise<any> {
	const response = await fetch(url);
	return await response.json();
}

// function language(locale: string) {
// 	// console.log(locale.replace('_', '-').split('-')[0]);

// 	return locale.replace('_', '-').split('-')[0];
// }

// const isLocaleLoaded = derived([isDownloading, dictionary], ([$isDownloading, $dictionary]) => !$isDownloading && $dictionary[_activeLocale] && Object.keys($dictionary[_activeLocale]).length > 0);
function hasLoadedLocale(locale: string | number) {
	// If the svelte-i18n dictionary has an entry for the
	// locale, then the locale has already been added
	return get(dictionary)[locale];
}
// // ...
// export {_, setupI18n, isLocaleLoaded, locale};
