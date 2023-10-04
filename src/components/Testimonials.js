import Testimonial from "./Testimonial"

export default function Testimonials(){
    return(
        <div className="w-full h-[80%] flex flex-col items-center justify-center lg:flex-wrap">
            <div className="lg:grid lg:grid-cols-2 lg-gap-2">
            <Testimonial company='Karen Millen' statement="We have been working with Yeliz Ltd for nearly 20 years. Their close attention to detail, high quality and care for the product, gives us the confidence that they can achieve our complicated styling, with complex fabrication, to meet our quality standards and achieve on-time delivery." person="Fay Tear" role="Production Director"></Testimonial>
            <Testimonial company='LT FASHION' statement='We have been working together Yeliz Ltd for more than 2 years.

            We remain faithful to Yeliz because of its capacity to provide adequate work according to the specifications of its customers.

            His seriousness and demands are remarkable from the first contact.' person='Thérèse Lombi'></Testimonial>
            <Testimonial company='Inline London' statement='We have worked closely with Yeliz Ltd since 2010 and cannot recommend this company highly enough. The owner, Huseyin Gullu is a master tailor with exceptional skill in all matters concerning high end garment production. His attention to detail and hard work ethic filters through this family run business where pride and integrity are at the forefront of everything they do.  The fact Yeliz has a powerful history producing for some leading high street labels while at the same time accommodating our needs within the hospitality sector speaks volumes about their adaptability. ' person='Neil Thomas'></Testimonial>
            
            </div>
        </div>
    )
}