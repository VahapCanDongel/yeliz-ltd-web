export default function Footer(){
    return(
        <div className="bg-gray-800 w-full h-[100px] flex justify-center items-center flex-col lg:h-[150px]">
            <div className="text-slate-400 font-display2">
                Hours: 
                 <span className="p-2 text-slate-50">09:00 - 17:00</span>
                MON - FRI
            </div>

            <div className="text-slate-400 font-display2">
                Email: 
                 <span className="p-2 text-slate-50">info@yelizltd.co.uk</span>
            </div>   
        </div>
    )
}