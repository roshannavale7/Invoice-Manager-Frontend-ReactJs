import React from './featured.css'
import {People,Description,Payment,LocalMall} from "@material-ui/icons"

export default function Featured() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle"><People className="featuredIcon"/>Clients</span><br/>
            <span className="featuredCount">14</span>
            
        </div>

        <div className="featuredItem">
            <span className="featuredTitle"><Description className="featuredIcon"/>Invoices</span><br/>
                            <span className="featuredCount">17</span>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle"><Payment className="featuredIcon"/>Payments</span><br/>
            
                <span className="featuredCount">46070.00</span>
            
        </div>

        <div className="featuredItem">
            <span className="featuredTitle"><LocalMall className="featuredIcon"/>Products</span><br/>
                            <span className="featuredCount">15</span>
            
        </div>




      
    </div>
  )
}
