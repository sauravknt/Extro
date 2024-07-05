import React from 'react'
import './Proccess.css'
import vision from "../Assets/bacground/machining.jpg"
import manif from "../Assets/bacground/maxresdefault22.jpg"
import manif2 from "../Assets/bacground/about-main.jpg"

const Proccess = () => {
  return (
    <div className="proccess-main">
        <h3>Manufacturing Process </h3>
        <hr />
    <div className="proccess">
      <div className="proccess-2">
      <p>
      1.	<b>Design and Prototyping: </b>The process begins with the design phase, where engineers and designers create a blueprint of the faucet. Once the design is finalized, prototypes are often produced to test functionality, durability, and aesthetics.
<br />2.	<b>Material Selection:</b> High-quality materials such as brass (with 56-59% copper composition) or SS 304 or synthetic rubber washers are commonly used for faucet manufacturing due to their durability and resistance to corrosion. The chosen material is then shaped into the various components of the faucet through processes like casting or machining.
<br />3.	<b>Component Manufacturing:</b> Each component of the faucet, including the body, spout, handles, and internal mechanisms, is manufactured separately. Precision machining techniques are often employed to ensure that each component meets the required specifications.
      </p>
      </div>
      <div className="proccess-1">
      <img src={vision} alt=""/>
      </div>
    
    </div>

{/*- section2-*/}
<div className="proccess">
      <div className="proccess-1">
      <img src={manif} alt="" />
      </div>
      <div className="proccess-2">
      <p>
      4.	<b>	Surface Preparation </b>Before chrome plating can be applied, the surface of the faucet components must be thoroughly cleaned and prepared. This typically involves processes such as degreasing, etching, and sandblasting to remove any contaminants and create a smooth surface for plating.
<br />5.	<b>Chrome Plating: </b> The chrome plating process involves electroplating a thin layer of chromium onto the surface of the faucet components. This not only provides a decorative chrome finish but also enhances the durability and corrosion resistance of the faucet.
<br />6.	<b>Assembly:</b> : Once the individual components have been manufactured and plated, they are assembled into the final faucet product. This often involves attaching handles, spouts, and other parts, as well as installing any internal mechanisms such as cartridges or valves.
      </p>
      </div>
    
    </div>

    {/*- section3-*/}
    <div className="proccess">
      <div className="proccess-2">
      <p>
      7.	<b>Quality Control: </b>The process begins with the design phase, where engineers and designers create a blueprint of the faucet. Once the design is finalized, prototypes are often produced to test functionality, durability, and aesthetics.
<br />8. <b>Packaging and Shipping:</b>Once the faucets have passed quality control inspections, they are packaged for shipment to retailers or distributors. Packaging materials are chosen to protect the faucet during transit and display it effectively in stores.
<br />	<b>By following these steps, manufacturers can produce high-quality CP faucets that meet the demands of consumers for both functionality and aesthetics.</b>
      </p>
      </div>
      <div className="proccess-1">
      <img src={manif2} alt=""/>
      </div>
    
    </div>
  </div>
  )
}

export default Proccess
