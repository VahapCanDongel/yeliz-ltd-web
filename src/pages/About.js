import Navigation from "../components/Navigation"
import PageLabel from "../components/PageLabel"
import ImageSlider from "../components/ImageSlider"
import Image_1 from "../components/img/slide_2.png"
import Image_2 from "../components/img/slide_3.png"
import Image_3 from "../components/img/slide_4.png"
import Image_4 from "../components/img/slide_5.png"
import Footer from "../components/Footer"
import Title from "../components/Title"

const headquarter_points = [
    "Fabric & Trim Purchasing.",
    "Production  Planning.",
    "Technical Support.",
    "Logistics for Import and Export.",
    "Sales and Customer liasion.",
    "6500sq. Metre storage capacity.",
    "Facilitates to hold raw material.",
    "Fabric sourcing from Europe and the Far East products.",
    "Pattern Maker - Traditional hands-on skills and Toiling"
]


const manufacturing_points = [
    "1000sq. Metre Work Area.",
    "Sample Garment Manufacture (Prototypes & Seals).",
    "Pre-production preparation.",
    "Range of machinery covering all specialist.",
    "Cutting, Stitching and Finishing Techniques.",
    "Dedicated lines of manufacture by product and brand."
]


const displayManufacturingItems = manufacturing_points.map((item) => 
    <li className="p-2 font-display3 text-slate-800">{item}</li>
) 

const displayItem =  headquarter_points.map((item) =>
    <li className="p-2 font-display3 text-slate-800">{item}</li>
)

export default function About(){
    return(
        <div className="w-full">
            <Navigation/>
            <Title title="Who We Are"/>
            <div className="w-full h-[70vh] lg:flex lg:justify-center lg:items-center lg:h-[80vh]">
                <ImageSlider images={[Image_1, Image_2, Image_3, Image_4]} interval={3000}/>
                <div className="text-lg font-display3 w-full text-justify flex items-center justify-center p-4 flex-col text-gray-700 lg:w-[30%]">
                Yeliz limited is a family run business. The roots of Yeliz limited go back to the 1950’s When the family business was in the tailoring sector. These inherited skills have been used to create a high-quality women's manufacturing company, established in 1982. 
                <span className="m-4"></span>
                We’ve begun to manufacture clothing in Northern Cyprus and Turkey in the 1990’s, with our highly qualified staff we can guarantee an immaculately finished garment. We are quality driven and we believe real luxury is understanding quality. 
                </div>
            </div>
            
            {/* Chnage this to be a component */}
            <div className="lg:flex lg:justify-center lg:items-center">
                <div className="flex flex-col justify-center items-center mt-20 lg:m-6">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-xl font-display">
                            Yeliz LTD Headquarters (Enflied UK)
                        </div>

                        <div className="text-lg font-display2 text-gray-800">
                            {displayItem}
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col justify-center items-center mt-8 lg:m-6">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-xl font-display">
                            Manufacturing (Lefkosa, North Cyprus)
                        </div>

                        <div className="text-lg font-display2 text-gray-800">
                            {displayManufacturingItems}
                        </div>
                    </div>
                </div>
            </div>
           

            <div className="flex flex-col justify-center items-center mt-20">
                <div className="flex flex-col justify-center items-center">
                    <div className="text-2xl font-display">
                        Mission Statement
                    </div>

                    <div className="text-lg font-display3 text-center text-gray-800 p-4 lg:w-[500px] lg:text-justify">
                        Our experiences and knowledge within the industry enable us to offer client certainty of immaculate finishes on our garments. 
                        <span className="m-4"></span>
                        We understand the importance of staff training and want our staff to become highly qualified in their position which leads to quality production, which is our main focus within the business. We want to offer customers top quality ladies wear.
                        <span className="m-4"></span>
                        We can adapt to each customer special needs to achieving an excellent production process from planning to sampling to main production finish. 
                        We always work carefully to keep up with government regulations whilst ensuring the highest standards of business ethics at the same time acting in an honest and responsible manner. 
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}