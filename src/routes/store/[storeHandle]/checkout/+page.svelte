<script lang="ts">
	import { goto } from '$app/navigation'
	import { productsAddedToCart } from '../store'

	export let data
	console.log(data)
	// get stripe payment link from server
</script>

<main class="px-24 py-12 w-screen min-h-screen flex flex-col gap-12">
	<h1 class="text-3xl font-bold">checkout</h1>
	<div class="w-full flex flex-col items-center gap-6">
		<!-- product previews /-->
		{#each $productsAddedToCart as product}
			<div
				class="relative h-24 overflow-hidden border w-96 flex justify-between items-center rounded p-6"
			>
				<div>
					<img
						class="absolute top-0 left-0 h-24 aspect-square"
						src={product.imageUrl}
						alt=""
					/>
					<div class="ml-24">
						<p>{product.name}</p>
						<p class="text-black/60">${product.price}</p>
					</div>
				</div>
				<button class="w-fit ">-</button>
			</div>
		{/each}
		<!-- checkout /-->
		<input
			class="border p-3 w-96 rounded focus:border-black/60"
			type="email"
			placeholder="email for receipt"
		/>
		<div class="w-96 flex justify-between">
			<p class="font-bold">${data.subtotal}</p>
			<a
				href={data.stripePaymentLink}
				target="_blank"
				rel="noreferrer"
				class="bg-black text-white rounded-full p-4 py-1"
				>pay securely with stripe</a
			>
		</div>
		<p class="w-96 text-sm text-black/60">
			You will receive a receipt via email after your purchase. You may
			close this window if your payment was processed successfully with
			stripe. If not, you can try again.
		</p>
	</div>
</main>
