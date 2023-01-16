<script lang="ts">
	import { goto } from '$app/navigation'
	import { productsAddedToCart, storeHandle } from './store'

	let products: Product[]
	productsAddedToCart.subscribe((p) => (products = p))
	// derived states
	$: numOfProducts = products.length

	let isShowingCartItems = false
	const toggleIsShowingCartItems = () =>
		(isShowingCartItems = !isShowingCartItems)

	const goToCheckoutPage = () => {
		const h = $storeHandle
		goto(`/store/${h}/checkout`)
	}
</script>

<div class="relative">
	<button
		on:click={toggleIsShowingCartItems}
		class="bg-black text-white rounded-full w-12 h-8 flex justify-center items-center"
	>
		<p>{numOfProducts}</p>
	</button>

	{#if isShowingCartItems}
		<div
			class="absolute top-12 right-0 w-48 bg-black rounded p-4 flex flex-col gap-6"
		>
			{#if numOfProducts > 0}
				{#each products as product}
					<div>
						<p class="text-white">{product.name}</p>
						<p class="text-white/60">${product.price}</p>
					</div>
				{/each}
				<button
					on:click={goToCheckoutPage}
					class="text-white/30 hover:text-white/60 text-sm"
					>go to checkout</button
				>
			{:else}
				<p class="text-white">Cart Empty.</p>
			{/if}
		</div>
	{/if}
</div>
