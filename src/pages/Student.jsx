import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader';
import { Link } from 'react-router-dom';

function Student() {
    const [data, setData] = useState('');
    return (
        <div className='row'>
            <div className='d-flex justify-content-center pt-2 pb-2 mb-3 bg-success'>
                    <h3 className='text-light text-bold text-uppercase'>Student</h3>
                    <Link to='/faculty' className='link-warning ms-3 mt-1 text-decoration-none'>Faculty</Link>
                </div>
            <div className='col-md-12'>
            <div className='student-scanner'>
                <h2 className='text-center text-success m-0'>Scan QR Code</h2>
                {data? 
                <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                style={{ width: '100%' }}
            />
                
            : <p className='text-center text-danger'>Please connect webcam</p>}
                
                <h4 className='text-center text-success'>{data}</h4>
            </div>
            </div>

            
        </div>
    )
}

export default Student