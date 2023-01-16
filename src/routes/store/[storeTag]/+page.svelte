<script lang="ts">
	import StoreData from './data.json'
	import Product from './Product.svelte'
</script>

<main class="px-24 py-12 w-screen min-h-screen flex flex-col gap-12">
	<div class="flex justify-between">
		<h1 class="text-3xl font-bold">{StoreData.name}</h1>
		<div>cart</div>
	</div>
	<div class="flex flex-wrap gap-6">
		{#each StoreData.products as p}
			<Product product={p} />
		{/each}
	</div>
</main>
