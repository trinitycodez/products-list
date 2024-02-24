export type productDataDetails = {
    id: number,
    title: string
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
}
export type productData = {
    products: productDataDetails[]
}

export default class DataProduct {
    public data!:productData;
    public fulldata!:productDataDetails;
    constructor(public numRoute:string[]) {}

    async receiveApi () {
        this.data = await fetch("https://dummyjson.com/products")
        .then((res) =>
            res.json()
        )
        .then((res) => {
            return res
        })
        .catch((e:Error) => { 
            return e.message
        })
    }
    async receiveApiDetails () {
        this.fulldata = await fetch(`https://dummyjson.com/${this.numRoute[0]+'/'+this.numRoute[1]}`)
        .then((res) =>
            res.json()
        )
        .then((res) => {
            return res
        })
        .catch((e:Error) => { 
            return e.message
        })
    }
}