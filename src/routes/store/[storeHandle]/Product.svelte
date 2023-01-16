<script lang="ts">
	import { viewingProductInfo } from './store'

	export let product: any

	const showProductInfo = () => viewingProductInfo.set(product)

	let isHovering = false
</script>

<button class="h-72 w-72 rounded overflow-hidden" on:click={showProductInfo}>
	<div
		class="overlay absolute h-72 w-72 rounded bg-transparent transition-all"
		on:mouseenter={() => (isHovering = true)}
		on:mouseleave={() => (isHovering = false)}
	>
		<div class="absolute bottom-2 left-6 flex flex-col items-start">
			{#if true}
				<p class="font-semibold text-white">{product.name}</p>
				<p class="text-white/60">{product.price}</p>
			{/if}
		</div>
	</div>
	<img class="h-full w-full object-cover" src={product.imageUrl} alt="" />
</button>

<style>
	.overlay:hover {
		background: linear-gradient(
			180deg,
			rgba(25, 255, 21, 0) 0%,
			rgba(0, 0, 0, 0.87) 90.62%
		);
	}
</style>
