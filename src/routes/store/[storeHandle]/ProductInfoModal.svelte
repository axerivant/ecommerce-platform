<script lang="ts">
	import {
		addProductToCart,
		viewingProductInfo,
		checkProductAddedToCart
	} from './store'

	const close = () => viewingProductInfo.set(null)

	const addToCart = () => {
		if ($viewingProductInfo === null) return
		addProductToCart($viewingProductInfo)
		close()
	}

	let product: Product | null
	$: isProductAddedToCart = checkProductAddedToCart(product)
	viewingProductInfo.subscribe((p) => (product = p))
</script>

{#if product}
	<div
		class="fixed top-0 left-0 bg-black/10 w-screen h-screen flex items-center justify-center z-10"
		on:click={close}
		on:keydown
	>
		<div
			class="bg-white rounded w-[56rem] p-12 flex flex-col gap-12"
			on:click|stopPropagation
			on:keydown
		>
			<div class="flex w-full justify-between">
				<h2 class="text-2xl font-bold">{product.name}</h2>
				<button on:click={close}>close</button>
			</div>
			<div class="flex gap-12">
				<img
					class="w-96 h-96 object-cover aspect-square"
					src={product.imageUrl}
					alt=""
				/>
				<div class="flex flex-col gap-6 items-start">
					<p class="">{product.description}</p>
					<div class="flex gap-6">
						<p class="text-xl font-semibold">
							${product.price}
						</p>
						{#if isProductAddedToCart}
							<p>product already in cart.</p>
						{:else}
							<button
								on:click={addToCart}
								class="bg-black text-white rounded-full p-4 py-1"
								>add to cart</button
							>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
