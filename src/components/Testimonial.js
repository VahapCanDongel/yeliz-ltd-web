export default function Testimonial({company, statement, person, role}){
    return(
        <div className="p-5 md:flex md:flex-col md:justify-center md:items-center w-[400px] lg:m-8">
            <div className="text-2xl font-display mb-3">
                {company}
            </div>

            <div>
                <div className="text-lg text-gray-500 font-display3 text-justify mb-3 italic lg:w-[400px]">
                    "{statement}"
                </div>

                <div className="text-[18px] font-display font-bold">
                    {person}
                </div>

                <div className="text-[15px] font-display2 font-bold">
                    {role}
                </div>
            </div>
            
        </div>
    )
}