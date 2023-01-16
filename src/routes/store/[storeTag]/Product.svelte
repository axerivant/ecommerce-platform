<script lang="ts">
	import ProductInfoModal from './ProductInfoModal.svelte'

	export let product: any

	let isHovering = false
	const toggleHover = () => (isHovering = !isHovering)

	let isShowingProductInfo = false
	const showProductInfo = () => (isShowingProductInfo = true)
</script>

<button
	class="h-72 w-72 rounded overflow-hidden"
	on:click={showProductInfo}
	on:mouseenter={toggleHover}
	on:mouseleave={toggleHover}
>
	<div
		class:overlay={isHovering}
		class="overlay absolute h-72 w-72 rounded bg-transparent transition-all"
	/>
	<img class="h-full w-full object-cover" src={product.imageUrl} alt="" />
</button>

{#if isShowingProductInfo}
	<ProductInfoModal />
{/if}

<style>
	.overlay {
		background: linear-gradient(
			180deg,
			rgba(25, 255, 21, 0) 0%,
			rgba(0, 0, 0, 0.87) 90.62%
		);
	}
</style>
