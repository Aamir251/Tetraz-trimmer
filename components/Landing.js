import Image from "next/image";
import background from "../public/images/background.jpg";
import backgroundRemoved from "../public/images/bg-removed.png"
import fog from "../public/images/fog.png";

import gsap from "gsap";
import { useEffect, useRef } from "react";

function Landing() {

    const h1Refs = useRef([]) //for h1 Tag
    h1Refs.current = [];

    const paraRefs = useRef([]); //for paragraph
    paraRefs.current = []

    const buttonRef = useRef(null);
    const imgRef = useRef(null);

    const addH1Refs = el => {
        if (!h1Refs.current.includes(el)) {
            if(el === null ) return
            h1Refs.current.push(el);
        }
    }

    
    const addParaRefs = (el) => {
      if (!paraRefs.current.includes(el)) {
          if(el === null ) return
          paraRefs.current.push(el);
      }
    }

    
    useEffect(() => {
        const landingTimeline = gsap.timeline();
        landingTimeline.from(imgRef, {
          scale : 1.4,
          opacity : 0.4,
          duration : 1,
          ease : "back.out(1.9)"
        })

        landingTimeline.from([...h1Refs.current], {
            yPercent : "100",
            stagger : {
                amount : 0.5
            }
        })
        
        landingTimeline.from([...paraRefs.current], {
          yPercent : "100",
          stagger : {
            amount : 0.3
          }
        }, 0.8)

        landingTimeline.from(buttonRef, {
          opacity : 0
        })
    },[])



    return (<div className="landing relative">
    <div ref={el => imgRef = el } className="absolute trimmer">
      <Image src={backgroundRemoved} alt="tetra trimmer" layout="responsive" priority={true}/>
    </div>
    <div className="absolute fog">
      <Image src={fog} alt="tetra trimmer" layout="responsive" priority={true}/>
    </div>
      <h1 className="absolute">
          <div className="outer">
            <div ref={addH1Refs} className="inner">Hybrid </div>
          </div>
          <div className="outer">
            <div ref={addH1Refs} className="inner"><span> Tetra</span> </div>
          </div>
            <br/>
            <div className="outer">
                <div ref={addH1Refs} className="inner">Trimmers</div>
            </div>
         </h1>
      <article className="absolute">
        <p>
          <div className="outer">
            <div ref={addParaRefs} className="inner"> We are taking beard game to the  </div>
          </div>
          <br/>
          <div className="outer">
            <div ref={addParaRefs} className="inner"> next level with our <span> hybrid </span> </div>
          </div>
          <br />
          <div className="outer">
            <div ref={addParaRefs} className="inner"> <span>techology</span> trimmers </div>
          </div>


          
        </p>
        <button ref={(el) => buttonRef = el } className="pointer primary">
          <span> Shop Now </span>
        </button>
    </article>
  </div>)
}

export default Landing;

