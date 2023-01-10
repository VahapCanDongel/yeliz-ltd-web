export default function PageLabel({pagelabel}){
    return(
        <div className="w-full h-[130px] bg-black text-slate-50 font-display flex items-center justify-center text-5x lg:invisible">
            {pagelabel}
        </div>
    )
}