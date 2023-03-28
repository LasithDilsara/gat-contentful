import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>



export default function Home() {
  return (
  <Layout> 
  <div class="row">
  <div class="column"><img className="img1" src="https://www.ceylonelements.lk/wp-content/uploads/2022/10/Untitled-1.png"></img></div>
  <div class="column"><h1 className="skincare">Skincare</h1>
  <button><a href="#">Click Here</a></button>
  </div>
  </div> 



  <div class="row1">
  <div class="column1"><h1 className="skincare1">Haircare</h1><button className="btn"><a href="#">Click Here</a></button></div>
  <div class="column1">
  <img className="img3" src="https://www.ceylonelements.lk/wp-content/uploads/2022/10/Untitled-2.jpg"></img>
  </div>
  </div>


  <img className="img4" src="https://www.ceylonelements.lk/wp-content/uploads/2022/10/promo-banner.jpg"></img>


  <div class="row">
  <div class="column"><img className="img1" src="https://www.ceylonelements.lk/wp-content/uploads/2022/10/Untitled-1.png"></img></div>
  <div class="column"><h2 className="skincare">“The story of Ceylon Elements is a tale of trust and transparency, arising from our unfailing commitment to deliver effective skincare solutions"“The story of Ceylon Elements is a tale of trust and transparency, arising from our unfailing commitment to deliver effective skincare solutions"</h2>
  <button><a href="#">Click Here</a></button>
  </div>
  </div>



  <div class="row1">
  <div class="column1"><h2 className="skincare1">We pride ourselves in the purity of our products and honour the science behind the oil extraction process,
which is performed in-house, making us the only skincare company in Sri Lanka to have our own cutting-edge technology. This internal expertise has led to the creation of a range of serums and moisturisers which offer visible anti-ageing and brightening benefits after short term use.</h2><button className="btn"><a href="#">Click Here</a></button></div>
  <div class="column1">
  <img className="img3" src="https://www.ceylonelements.lk/wp-content/uploads/2022/10/Untitled-2.jpg"></img>
  </div>
  </div>
    </Layout>
  )
}
