import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Title from "../components/Title"

export default function Contact(){
    return(
        <div>
            <Navigation/>
            <Title title="Contact Us"/>
            <div className="w-full">
                <form action="https://formsubmit.co/info@yelizltd.co.uk" method="POST" className="flex justify-center items-center flex-col mt-8">
                        <div className="flex justify-center items-center flex-col m-3">
                            <label className="font-display3 text-2xl mr-auto" >First Name</label>
                            <input type='text' name="First Name" required className="w-[300px] h-[60px] border-[1px] border-slate-600 text-slate-800 focus:outline-0 p-3 font-display3 rounded-sm "/>    
                        </div>

                        <div className="flex justify-center items-center flex-col m-3">
                            <label className="font-display3 text-2xl mr-auto">Last Name</label>
                            <input type='text' name="Last Name" required className="w-[300px] h-[60px] border-[1px] border-slate-600 text-slate-800 focus:outline-0 p-3 font-display3 rounded-sm "/>    
                        </div>

                        <div className="flex justify-center items-center flex-col m-3">
                            <label className="font-display3 text-2xl mr-auto">Email</label>
                            <input type='email' required name="Email" className="w-[300px] h-[60px] border-[1px] border-slate-600 text-slate-800 focus:outline-0 p-3 font-display3 rounded-sm "/>    
                        </div>

                        <div className="flex justify-center items-center flex-col m-3">
                            <label className="font-display3 text-2xl mr-auto">Subject</label>
                            <input type='text' name="Subject" required className="w-[300px] h-[60px] border-[1px] border-slate-600 text-slate-800 focus:outline-0 p-3 font-display3 rounded-sm "/>    
                        </div>

                        <div className="flex justify-center items-center flex-col m-3">
                            <label className="font-display3 text-2xl mr-auto">Message:</label>
                            <textarea type='text' name="Message" required className="w-[300px] h-[160px] border-[1px] border-slate-600 text-slate-800 focus:outline-0 p-3 font-display3 rounded-sm resize-none"/>    
                        </div>

                        <button className="w-[150px] h-[60px] bg-black text-slate-50 font-display3 text-lg  mt-5 mb-10 lg:mb-10 rounded-sm">Submit</button>
                </form>
            </div>
            <Footer/>

        </div>
    )
}