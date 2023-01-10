import Navigation from "../components/Navigation"
import Title from "../components/Title"
import Footer from "../components/Footer"
import p_image from "../components/img/portoflio-images/p_image_1.jpeg"
import p_image_2 from "../components/img/portoflio-images/p_image_2.jpeg"
import p_image_3 from "../components/img/portoflio-images/p_image_3.jpeg"
import p_image_4 from "../components/img/portoflio-images/p_image_4.jpeg"
import p_image_5 from "../components/img/portoflio-images/p_image_5.jpeg"
const images = [p_image, p_image_2, p_image_3, p_image_4, p_image_5]
export default function Portfolio(){
    return(
        <div>
            <Navigation/>
            <Title title="Portfolio"/>
            <div className="flex flex-col justify-center items-center">
                <div className="lg:grid lg:grid-cols-2">
                    {
                        images.map((image) => 
                            <img src={image} className="w-[300px] rounded-md m-4"/>
                        )
                    
                    }
                </div>
               
            </div>
            <Footer />
        </div>
    )
}