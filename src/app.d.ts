interface StoreData {
	name: string
	ownner: Owner
	products: Product[]
}

interface Owner {
	name: string
	uid: string
}

interface Product {
	name: string
	imageUrl: string
	description: string
	price: number
}
