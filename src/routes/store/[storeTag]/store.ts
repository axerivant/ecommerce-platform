import { writable, type Writable } from 'svelte/store'

export const viewingProductInfo: Writable<any> = writable(null)
viewingProductInfo.subscribe((p) =>
	console.log('STATE-CHANGE:viewingProductInfo    ', p)
)
