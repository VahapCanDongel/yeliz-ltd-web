import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Testimonial from "../components/Testimonial"
import Title from "../components/Title"
import Image_1 from '../components/img/services_1.jpeg'
import Image_2 from '../components/img/services_2.jpeg'
import Image_3 from '../components/img/services_3.jpeg'
import Image_4 from '../components/img/services_4.jpeg'
import Image_5 from '../components/img/services_5.jpeg'

const display = {
        1 : {
            'description' : "Our comprehensive services begin with fabric sourcing from our mills in Europe to the Far East. We focus on key fabrics of the season to offer our customer’s ideal fabrics when required.",
            'img': Image_1
        },

        2 :{
            'description' : "Once all final checks have been made on each individual garment it is bagged and sealed and loaded onto our trailer to deliver as customer’s require either by airfreight  flat packed in boxes or hanging garments on road freight.",
            'img' : Image_2
        },

        3: {
            'description' : "Our specialised machinists will create numerous samples and seals until we achieve the golden seal for the main production. We manufacture from prototype till shipping to ensure each stage of production is carried out efficiently.",
            'img' :  Image_3
        },

        4 : {
            'description': "We have a fully equipped factory to concentrate on them detailed garments closely. We break down our sections as follows Preparing, Cutting, Making, Button, Pressing, Inside Checking, Quality control and Bagging Section.",
            'img': Image_4
        },
        
        5: {
            'description' : "Our professional pattern maker works hands on with instructions provided to create the master pattern and make a Toile for first sample fitting’s. Alterations and changes needed can be done on demand once approved we grade the master pattern to all sizes. Our technologists can view the graded patterns via the Gerber system to then prep for main production.",
            'img': Image_5
        }

}




export default function Services(){
    return(
        <div>
            <Navigation/>
            <Title title="Our Services"/>
            
            <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
                <div className="lg:grid lg:grid-cols-2 lg:items-center">
                    {
                    Object.entries(display).map(([key, value]) => 
                        <div className="p-3 m-6">
                            <div className="font-display3 text-justify p-2 lg:w-[400px]">
                                {value['description']}
                            </div>

                            <img src={value['img']} className="rounded-md lg:w-[400px]"/>
                        </div>
                    )
                    }
                </div>
                <div className="mt-20">
                    <Testimonial company="LT Fashion" person="Therese Lombi" statement="We have been working together Yeliz Ltd for more than 2 years. We remain faithful to Yeliz because of its ability to provide adequate work according to the specifications of its customers. Yeliz Limited’s seriousness and demands are remarkable from the first contact"/>
                </div>
            </div>
          

            <Footer></Footer>

        </div>
    )
}