import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import img from "../public/images/2.jpg"
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Perfection() {


    const perfectionRef = useRef(null);
    const imgCover = useRef(null);
    const imgContainer = useRef(null);
    const h3 = useRef(null);

    useEffect(() => {
        gsap.to(imgCover, {
            height : 0,
            duration : 0.6,
            scrollTrigger : {
                trigger : perfectionRef,
                start : "top 30%"
            }
        });

        gsap.to(imgContainer, {
            yPercent : "-10",
            scrollTrigger : {
                trigger : perfectionRef,
                start : "bottom bottom",
                end : "bottom 40%",
                scrub : 1
            }
        })


        gsap.to(imgContainer, {
            width : "75%",
            left : "10%",
            duration : 2,
            scrollTrigger  :{
                trigger : perfectionRef,
                start : "bottom 80%",
                pin : true,
                scrub : 1.2
            }
        });

        gsap.from([...h3.children], {
            opacity : 0,
            stagger : {
                amount : 0.5,
            },
            delay : 1,
            scrollTrigger : {
                trigger : perfectionRef,
                start : "bottom 80%",
                scrub : 1.2,
                pin : true
            }
        })
    },[])

    return <section ref={el => perfectionRef = el }  className="relative perfection">
        <article>
            <h2 className="absolute">Designed For <br /> <span>Perfection</span></h2>
            <p className="absolute">
                We have designed for that perfectly even trim every single time, so that you can be at your best, always.
            </p>

            <div ref={el => imgContainer = el } className="img-container absolute">
                <div ref={ el => imgCover = el } className="absolute cover"></div>
                <Image src={img}/>
            </div>
            <h3 ref = { el => h3 = el } className="absolute">
                <span>Elegantly</span>
                <span>Designed, </span>
                <span>Superiorly </span>
                <span>Engineered</span>
            </h3>
        </article>
    </section>
}

export default Perfection;