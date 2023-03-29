import React from 'react'
import '../Components/Footer.css'



export default function Footer(props) {
  return (
    <>
      <div className='footerbase'>
        <div>
          <h1>Gajra Group Of Industries</h1>
          <div>
            Social Links
          </div>
        </div>
        <div className='addressstrip'>
          <div>
            <h3>Head Quater: Elve Corporation</h3>
            <address>
              <h3>Elve Chambers</h3>
              Green Street <br />
              Fort, Mumbai - 400 023 <br />
              Maharashtra (INDIA) <br />
              Tel: +91-22-22662088, 22661698, 22663527, 22663020<br />
              Fax: +91-22-22662742 <br />
              E-mail:elvgajra@bom3.vsnl.net.in <br />
              elve@gajra.com <br />
            </address>

          </div>
          <div>
            <h3>Transmission Manufacturing:</h3>
            <address>
                <h3>Gajra Gears pvt.ltd</h3>
                Station Road, Dewas - 455 001 <br/>
                Madhya Pradesh (INDIA) <br/>
                Tel: +91-7272- 427500 <br/>
                Fax: +91-7272-421002 <br/>
                E-mail: export@gajra.com
            </address>
        </div>
        <div>
            <h3>Differential Manufacturing:</h3>
            <address>
                <h3>Gajra Differential Gears pvt.ltd</h3>
                Lohar Pipliya, Near Kshipra <br/>
                A.B. Road, Dewas - 455 001 <br/>
                Madhya Pradesh (INDIA) <br/>
                Tel: +91-7272-264151, 264152, 264153, 264154 <br/>
                E-mail: gajradg@gajra.com
            </address>
        </div>
        </div>

      </div>
      <div style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>&#169; All Right Reserved Gajra Gear</div>
    </>
  )
}
