import {writable} from 'svelte/store';

export const PoliceLists = writable([]);
export const PoliceEvidence = writable([]);
export const PoliceFines = writable([]);
export const IsBoss = writable(false);
export const Reports = writable([]);
export const UserInfo = writable([]);
export const currentAsignament = writable([]);
export const Callsign = writable('');
export const Langs = writable([]);
export const OnDuty = writable(false);
