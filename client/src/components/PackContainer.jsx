import React, { useState } from 'react'
import BasicTable from './Table'
const PackContainer = () => {

    const [tog, setTog] = useState(true)

    return (
        <div className='pack_container'>
            <div className='table_container'>

            <BasicTable />
            </div>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                margin:'1rem 0'
            }}>
                <div className='pack1' style={{
                    backgroundColor:tog?'rgba(31,128,224,0.4)':'transparent',
                    borderColor:tog?'#1f80e0':'#334366'
                }}
                onClick={()=>setTog(true)}
                >
                    <h6>Super</h6>
                    <h4 style={{margin:'0'}}>₹899<span style={{fontSize:'15px'}} >/Year</span></h4>
                </div>
                <div className='pack2' style={{
                    backgroundColor:tog===false?'rgba(31,128,224,0.4)':'transparent',
                    borderColor:tog===false?'#1f80e0':'#334366'
                }}
                onClick={()=>setTog(false)}
                >
                    <h6>Premium</h6>
                    <h4 style={{margin:'0'}}>₹1499<span style={{fontSize:'15px'}} >/Year</span></h4>
                </div>
            </div>
            <div className='continue'>
                <h6 style={{margin:'0'}}>continue with {tog?'super':'premium'}</h6>
            </div>
        </div>
    )
}

export default PackContainer
