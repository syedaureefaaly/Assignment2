import Image from "next/image";

function ProductCards(){
    return (
      <div className="flex flex-col items-center gap-4 p-4 m-4 md:flex-wrap md:flex-row md:justify-center
        lg:flex-row lg:justify-between ">
            <div className="shadow-2xl rounded-lg w-full md:w-[48%] lg:w-[30%]">
                <Image 
                src="/zinger1.jpeg"
                alt="zinger burger"
                width={500}
                height={500}
                />
                <h1 className="text-center font-semibold">ZINGER BURGER</h1>
                <p className="text-center">Price: 850</p>
                <div className="flex items-center justify-center m-2 p-2">
                <button className="bg-blue-700 text-white rounded-md p-1 mx hover:bg-blue-400">Buy Now</button>
                </div>
            </div>
            <div className="shadow-2xl rounded-lg w-full md:w-[48%] lg:w-[30%]">
                <Image 
                src="/biryani2.jpeg"
                alt="pot biryani"
                width={500}
                height={500}
                />
                <h1 className="text-center font-semibold">POT BIRYANI</h1>
                <p className="text-center">Price: 500</p>
                <div className="flex items-center justify-center m-2 p-2">
                <button className="bg-blue-700 text-white rounded-md p-1 mx hover:bg-blue-400">Buy Now</button>
                </div>
            </div>
            <div className="shadow-2xl rounded-lg w-full md:w-[48%] md:mt-4 lg:w-[30%]">
                <Image 
                src="/pizza3.jpeg"
                alt="Creamy pizza"
                width={500}
                height={500}
                />
                <h1 className="text-center font-semibold">CREAMY PIZZA</h1>
                <p className="text-center">Price: 1200</p>
                <div className="flex items-center justify-center m-2 p-2">
                <button className="bg-blue-700 text-white rounded-md p-1 mx hover:bg-blue-400">Buy Now</button>
                </div>
            </div>
        </div>

    
    )
}

export default ProductCards;