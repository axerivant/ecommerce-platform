// initialize stripe sdk
import { STRIPE_API_KEY } from '$env/static/private'
import StripeSDK from 'stripe'

const stripe = new StripeSDK(STRIPE_API_KEY, {
	apiVersion: '2022-11-15'
})

export async function getStripePaymentLink(subtotal: number) {
	const tempProduct = await stripe.products.create({
		name: "Axer Ivant's Garage Sale"
	})

	const price = await stripe.prices.create({
		currency: 'usd',
		unit_amount: subtotal * 100,
		product: tempProduct.id
	})

	const link = await stripe.paymentLinks.create({
		line_items: [{ price: price.id, quantity: 1 }]
	})

	return link
}
