export default function Welcome(){
    return(
        <div className=" bg-slate-200 flex w-full h-[60%] flex-col justify-center items-center">
            <div className="text-[120px] font-passion lg:text-[250px]">
                Hello!
            </div>
            <div className="flex items-center flex-col">
                <div className="text-3xl font-display lg:text-4xl">
                    Welcome to Yeliz LTD
                </div>
                <div className="text-xl text-center font-display lg:text-2xl">
                    online home to the global manufacturer of women's fashion
                </div>
            </div>
            


            <button className="bg-black text-slate-50 p-3 mb-[100px] mt-2">
                View Our Work
            </button>

            


        </div>
    )
}