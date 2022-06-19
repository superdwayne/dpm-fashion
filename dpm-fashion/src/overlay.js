import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
      
    }}
    className="scroll">
    <div style={{ height: "100vh" }}>
      <div className="dot">
        
    </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        {/* <p>IDENTITY / </p>
       <h2> A NEW IDENTITY. FOR THE NEW REAL.</h2>
        <p>As the world evolves and embraces screenwear, we see a new sub-culture emerge where the digital and physical come together as the new real. FARFETCH GENESIS is a new group of 10,001 NFTs distinct but familiar "hyperintelligent" modern polymaths formed around the "new real" expression of fashion. They see style, technology and community come together as a new force to curate, model and create the future of luxury.</p> */}
      </div>
    </div>

    <div style={{ height: "100vh" }}>
      <div className="dot">
        
    </div>
    </div>


    <div style={{ height: "200vh" }}>
      <div className="dot" id="left">
        {/* <p>DAO COMMUNITY /  </p>
        <h2>CO-CREATION & CO-OWNERSHIP.</h2>
        <p>
        Genesis is building a community that has exclusive access to Metaverse Native brands, to the Farfetch VIP ecosystem and to bridges between IRL and URL fashion & culture. NFTs, Interoperable Assets and co-created and co-owned brands of the future form our new platform.
        </p> */}
      </div>
    </div>

    <div style={{ height: "100vh" }}>
      <div className="dot">
        
    </div>
    </div>

    <div style={{ height: "200vh" }}>
      <div className="dot" >
        {/* <p>CREATION /   </p>
        <h2>MNVB METAVERSE FASHION  PLATFORM</h2>
        <p>
        MNVB, The world's first decentralised fashion brand 
Web3 x Web2. Genesis is Farfetch rethinking Fashion and Culture, embracing web3 principles and connecting the fashion, crypto and gaming ecosystem together into new creative expressions at the intersection of culture, music, art & technology. Genesis aims to be at the forefront of building a metaverse inclusive of fashion.         </p> */}
      </div>
    </div>

    {/* <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>headphone</h1>
        Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>rocket</h1>A rocket (from Italian: rocchetto, lit. 'bobbin/spool')[nb 1][1] is a projectile that spacecraft, aircraft or other
        vehicle use to obtain thrust from a rocket engine.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>turbine</h1>A turbine (/ˈtɜːrbaɪn/ or /ˈtɜːrbɪn/) (from the Greek τύρβη, tyrbē, or Latin turbo, meaning vortex)[1][2] is a
        rotary mechanical device that extracts energy from a fluid flow and converts it into useful work.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>table</h1>A table is an item of furniture with a flat top and one or more legs, used as a surface for working at, eating from or
        on which to place things.[1][2]
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>laptop</h1>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and
        alphanumeric keyboard.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1>zeppelin</h1>A Zeppelin is a type of rigid airship named after the German inventor Count Ferdinand von Zeppelin (German
        pronunciation: [ˈt͡sɛpəliːn]) who pioneered rigid airship development at the beginning of the 20th century.
      </div>
    </div> */}
    {/* <span className="caption" ref={caption}>
      0.00
    </span> */}
  </div>
))

export default Overlay
