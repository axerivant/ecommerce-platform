<script lang="ts">
	import { viewingProductInfo } from './store'

	const close = () => viewingProductInfo.set(null)
</script>

{#if $viewingProductInfo !== null}
	<div
		class="fixed top-0 left-0 bg-black/10 w-screen h-screen flex items-center justify-center z-10"
		on:click={close}
		on:keydown
	>
		<div class="bg-white rounded w-[56rem] p-12 flex flex-col gap-12">
			<div class="flex w-full justify-between">
				<h2 class="text-2xl font-bold">{$viewingProductInfo.name}</h2>
				<button on:click={close}>close</button>
			</div>
			<div class="flex gap-12">
				<img
					class="w-96 h-96 object-cover aspect-square"
					src={$viewingProductInfo.imageUrl}
					alt=""
				/>
				<div class="flex flex-col gap-6 items-start">
					<p class="">{$viewingProductInfo.description}</p>
					<div class="flex gap-6">
						<p class="text-xl font-semibold">
							${$viewingProductInfo.price}
						</p>
						<button
							class="bg-black text-white rounded-full p-4 py-1"
							>add to cart</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
