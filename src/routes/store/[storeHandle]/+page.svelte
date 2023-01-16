<script lang="ts">
	import { page } from '$app/stores'
	import Cart from './Cart.svelte'
	import StoreData from './data.json'
	import Product from './Product.svelte'
	import ProductInfoModal from './ProductInfoModal.svelte'
	import { setStoreHandle } from './store'

	const storeHandle = $page.params.storeHandle
	setStoreHandle(storeHandle)
</script>

<!-- modals /-->
<ProductInfoModal />

<main class="px-24 py-12 w-screen min-h-screen flex flex-col gap-12">
	<div class="flex justify-between">
		<h1 class="text-3xl font-bold">{StoreData.name}</h1>
		<Cart />
	</div>
	<div class="flex flex-wrap gap-6">
		{#each StoreData.products as p}
			<Product product={p} />
		{/each}
	</div>
</main>
