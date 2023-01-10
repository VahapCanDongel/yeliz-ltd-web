import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Title from "../components/Title"

export default function Contact(){
    return(
        <div>
            <Navigation/>
            <Title title="Contact Us"/>
            <div className="flex justify-center items-center flex-col mt-8">
                <div className="flex justify-center items-center flex-col m-3">
                    <label className="font-display3 text-2xl mr-auto">First Name</label>
                    <input type='text' className="w-[300px] h-[60px] border-[1px] border-slate-600 text-slate-800 focus:outline-0 p-3 font-display3 rounded-sm "/>    
                </div>

                <div className="flex justify-center items-center flex-col m-3">
                    <label className="font-display3 text-2xl mr-auto">Last Name</label>
                    <input type='text' className="w-[300px] h-[60px] border-[1px] border-slate-600 text-slate-800 focus:outline-0 p-3 font-display3 rounded-sm "/>    
                </div>

                <div className="flex justify-center items-center flex-col m-3">
                    <label className="font-display3 text-2xl mr-auto">Email</label>
                    <input type='text' className="w-[300px] h-[60px] border-[1px] border-slate-600 text-slate-800 focus:outline-0 p-3 font-display3 rounded-sm "/>    
                </div>

                <div className="flex justify-center items-center flex-col m-3">
                    <label className="font-display3 text-2xl mr-auto">Subject</label>
                    <input type='text' className="w-[300px] h-[60px] border-[1px] border-slate-600 text-slate-800 focus:outline-0 p-3 font-display3 rounded-sm "/>    
                </div>

                <div className="flex justify-center items-center flex-col m-3">
                    <label className="font-display3 text-2xl mr-auto">Message:</label>
                    <textarea type='text' className="w-[300px] h-[160px] border-[1px] border-slate-600 text-slate-800 focus:outline-0 p-3 font-display3 rounded-sm resize-none"/>    
                </div>

                <button className="w-[150px] h-[60px] bg-black text-slate-50 font-display3 text-lg ml-auto mr-12 mb-10 mt-5 rounded-sm lg:mr-[605px] lg:mb-10">Submit</button>
                

                <Footer/>

            </div>  
        </div>
    )
}