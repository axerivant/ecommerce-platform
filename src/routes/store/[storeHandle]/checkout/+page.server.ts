import { get } from 'svelte/store'
import { productsAddedToCart } from '../store'
import { getStripePaymentLink } from './checkout'

export async function load() {
	// assemble purchase info
	let products = get(productsAddedToCart)
	let subtotal = 0
	products.forEach((p) => {
		subtotal += p.price
	})

	let stripePaymentLink = await (await getStripePaymentLink(subtotal)).url

	return {
		subtotal,
		stripePaymentLink
	}
}
