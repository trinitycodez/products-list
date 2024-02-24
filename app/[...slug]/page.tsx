'use server'

import Image from "next/image";
import { redirect } from "next/navigation";
import DataProduct, { productDataDetails } from "../data-api";

type paramsType = { 
    params: {
        slug: string[]
    }
}

const ProductName = async ({params}:paramsType) => {
    console.log(params.slug)

    if (params.slug[0] !== "products" || (params.slug.length > 2)) redirect("/");
    
    const res = new DataProduct(params.slug);
    await res.receiveApiDetails();
    const fulldata:productDataDetails = res.fulldata;
    const {title, images, price, description, brand, discountPercentage } = fulldata;        

    console.log(fulldata);

    return (
        <div className="shadow-primary px-6 pt-6 pb-12 rounded-t-3xl rounded-b-xl w-[20rem] group/toggle overflow-x-hidden">
            {
                <>
                    <div className="flex w-[20rem] mb-6 group-hover/toggle:overflow-x-scroll ">
                        {
                            images && (
                            images.map((img, i)=>
                                <Image
                                    key={i}
                                    src={img}
                                    width={96}
                                    height={75}
                                    alt={`${title}`}
                                    style={{ objectFit: "fill", objectPosition: "top center" }}
                                    className="flex relative w-[19rem] h-[20rem] min-w-[20rem] min-h-[20rem] "                        
                                />
                            ))
                        }

                    </div>
                    <div className="flex flex-col">
                        <span><strong> Description: </strong> {description}</span> <br />
                        <span><strong> Price: </strong> {price}</span> <br />
                        <span><strong> Brand: </strong> {brand}</span> <br />
                        <span><strong> Discount: </strong> {discountPercentage}%</span>
                    </div>
                </>
            }
        </div>
    );
}

export default ProductName;