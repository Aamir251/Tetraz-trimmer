import Image from "next/image";
import bg from "../public/images/bg.png"
import gradient from "../public/images/gradient.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
function Landing2(){

    const gradientRef = useRef(null)
    const landingRef = useRef(null);

    useEffect(() => {
        gsap.to(gradientRef, {
            scale : 2,
            yPercent : "70",
            xPercent : "50",
            scrollTrigger : {
                trigger : gradientRef,
                start : "bottom 90%",
                end : "bottom top",
                scrub : true
           }
        })
    },[])
    return <div ref = { el => landingRef = el } className="landing2 relative">
        <div className="absolute bg">
            <Image src={bg} alt="tetra trimmer" layout="responsive" priority={true}/>
        </div>
        <div ref={el => gradientRef = el} className="absolute gradient">
            <Image src={gradient} alt="tetra trimmer" layout="responsive" priority={true}/>
        </div>
    </div>
}

export default Landing2;