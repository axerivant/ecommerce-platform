import { get, writable, type Writable } from 'svelte/store'

// store handle
export const storeHandle: Writable<string | null> = writable(null)
export const setStoreHandle = (h: string) => storeHandle.set(h)

// clicked-on product modal
export const viewingProductInfo: Writable<Product | null> = writable(null)
viewingProductInfo.subscribe((p) =>
	console.log('STATE-CHANGE:viewingProductInfo    ', p)
)

// products added to cart
export const productsAddedToCart: Writable<Product[]> = writable([
	{
		name: 'Essential Toolkit',
		imageUrl: 'https://source.unsplash.com/random',
		description:
			'Lorem ipsum dolor sit amet consectetur. Porttitor senectus a magna sit cursus pulvinar massa tempus. Mi elit tincidunt amet viverra placerat nulla orci. In nulla nunc nibh ullamcorper amet eget volutpat. Rhoncus facilisi cursus nulla vel.',
		price: 36
	},
	{
		name: 'Essential Toolkit',
		imageUrl: 'https://source.unsplash.com/random',
		description:
			'Lorem ipsum dolor sit amet consectetur. Porttitor senectus a magna sit cursus pulvinar massa tempus. Mi elit tincidunt amet viverra placerat nulla orci. In nulla nunc nibh ullamcorper amet eget volutpat. Rhoncus facilisi cursus nulla vel.',
		price: 36
	}
])
productsAddedToCart.subscribe((p) =>
	console.log('STATE-CHANGE:productsAddedToCart    ', p)
)
export const addProductToCart = (p: Product) =>
	productsAddedToCart.update((prev) => [p, ...prev])
export const clearProductsAddedToCart = () => productsAddedToCart.set([])
export const checkProductAddedToCart = (p: Product | null) => {
	if (!p) return false
	return get(productsAddedToCart).includes(p)
}
