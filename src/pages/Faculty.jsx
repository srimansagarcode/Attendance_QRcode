import React, { useState } from 'react'
import ReactDOM from "react-dom";
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom';

function Faculty() {

    const [value, setValue] = useState('Information Technology')
    return (
        <div>
            <div className='row'>
                <div className='d-flex justify-content-center pt-2 pb-2 mb-3 bg-success'>
                    <h3 className='text-light text-bold text-uppercase'>Faculty</h3>
                    <Link to='/student' className='link-warning ms-3 mt-1 text-decoration-none'>Student</Link>
                </div>
                <div className='col-md-12 d-flex justify-content-center'>

                    <div className="mb-3 row">
                        <label for="genarateQRcode" className="form-label">Genarate QR Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="genarateQRcode"
                            value={value}

                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 250, width: "100%" }}>
                <QRCode
                    size={250}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    title='English'
                    value={value}
                    viewBox={`0 0 256 256`}
                />

            </div>

        </div>
    )
}
export default Faculty