import Image_1 from "./img/slide_2.png"
import Image_2 from "./img/slide_3.png"
import Image_3 from "./img/slide_4.png"
import Image_4 from "./img/slide_5.png"

import ImageSlider from "./ImageSlider"

export default function Section(){
    return(
        <div className='w-full h-[40%] flex justify-center items-center lg:h-fit shadow-md'>
            <ImageSlider images={[Image_1, Image_2, Image_3, Image_4]} interval={3000}/>
        </div>
    )
}