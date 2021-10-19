import React, { useState } from 'react'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import check from '../Images/filled-check.webp'
const PackContainer = () => {

    const [tog, setTog] = useState(true)

    return (
        <div className='pack_container'>
            <div className='table_container'>

                <div className='pack_details' style={{border:'none'}}>
                    <div style={{
                        width:'60%',
                        padding:'.6rem 0'
                    }}>

                    </div>
                    <div style={{
                        width:'18.5%',
                        padding:'.6rem 0',
                        backgroundColor:tog?'#1e2a48':'transparent',
                        display:'flex',
                        borderTopLeftRadius:'5px',
                        borderTopRightRadius:'5px',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6 >Super</h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        padding:'.6rem 0',
                        backgroundColor:!tog?'#1e2a48':'transparent',
                        borderTopLeftRadius:'5px',
                        borderTopRightRadius:'5px',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6 >Premium</h6>
                    </div>
                </div>
                <div className='pack_details' >
                    <div style={{
                        width:'60%',
                        padding:'.6rem 0'
                    }}> 
                        <h6>All content</h6>
                        <span style={{
                            fontSize:'12px',
                            color:'#1f80e0'
                        }}>Movies, live sports, TV, Specials</span>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:tog?'#1e2a48':'transparent',
                        padding:'.6rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        
                    }}>
                        <h6><CheckRoundedIcon fontSize='large'/></h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:!tog?'#1e2a48':'transparent',
                        padding:'.6rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6> <CheckRoundedIcon fontSize='large'/> </h6>
                    </div>
                </div>
                <div className='pack_details' >
                    <div style={{
                        width:'60%',
                        padding:'.6rem 0',
                        display:'flex',
                        alignItems:'center'
                    }}> 
                        <h6>Watch on TV or Laptop</h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        
                        backgroundColor:tog?'#1e2a48':'transparent',
                        padding:'.6rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6><CheckRoundedIcon fontSize='large'/></h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:!tog?'#1e2a48':'transparent',
                        padding:'.6rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6> <CheckRoundedIcon fontSize='large'/> </h6>
                    </div>
                </div>
                <div className='pack_details' >
                    <div style={{
                        width:'60%',
                        padding:'.6rem 0',
                        display:'flex',
                        alignItems:'center'
                    }}> 
                        <h6>Ads free movies and shows (except sports)</h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:tog?'#1e2a48':'transparent',
                        padding:'.6rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6><ClearRoundedIcon fontSize='large'/></h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:!tog?'#1e2a48':'transparent',
                        padding:'.6rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6> <CheckRoundedIcon fontSize='large'/> </h6>
                    </div>
                </div>
                <div className='pack_details' >
                    <div style={{
                        width:'60%',
                        padding:'.9rem 0',
                        display:'flex',
                        alignItems:'center'
                    }}> 
                        <h6>Number of devices that can be logged in</h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:tog?'#1e2a48':'transparent',
                        padding:'.9rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6>2</h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:!tog?'#1e2a48':'transparent',
                        padding:'.9rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6>4</h6>
                    </div>
                </div>
                <div className='pack_details' >
                    <div style={{
                        width:'60%',
                        padding:'.9rem 0',
                        display:'flex',
                        alignItems:'center'
                    }}> 
                        <h6>Max video quality</h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:tog?'#1e2a48':'transparent',
                        padding:'.9rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6>Full HD (1080p)</h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:!tog?'#1e2a48':'transparent',
                        padding:'.9rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6>4K (2160p)</h6>
                    </div>
                </div>
                <div className='pack_details' >
                    <div style={{
                        width:'60%',
                        padding:'.9rem 0',
                        display:'flex',
                        alignItems:'center'
                    }}> 
                        <h6>Max audio quality</h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:tog?'#1e2a48':'transparent',
                        padding:'.9rem 0',
                        display:'flex',
                        borderBottomLeftRadius:'5px',
                        borderBottomRightRadius:'5px',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6>Dolby 5.1</h6>
                    </div>
                    <div style={{
                        width:'18.5%',
                        margin:'0 0rem',
                        backgroundColor:!tog?'#1e2a48':'transparent',
                        borderBottomLeftRadius:'5px',
                        borderBottomRightRadius:'5px',
                        padding:'.9rem 0',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <h6>Dolby 5.1</h6>
                    </div>
                </div>
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
                    
                    <div>
                    <h6>Super</h6>
                    <h4 style={{margin:'0'}}>₹899<span style={{fontSize:'15px'}} >/Year</span></h4>

                    </div>
                    <div>
                        <img src={check} alt="" style={{
                            visibility: tog?'visible':'hidden',
                            position:'relative',
                            top:'-1.2rem',
                            right:'-1rem',
                            width:'20px'
                        }}/>
                    </div>
                </div>
                <div className='pack2' style={{
                    backgroundColor:tog===false?'rgba(31,128,224,0.4)':'transparent',
                    borderColor:tog===false?'#1f80e0':'#334366'
                }}
                onClick={()=>setTog(false)}
                >
                    
                    <div>
                    <h6>Premium</h6>
                    <h4 style={{margin:'0'}}>₹1499<span style={{fontSize:'15px'}} >/Year</span></h4>

                    </div>
                    <div>
                        <img src={check} alt="" style={{
                            visibility: tog==false?'visible':'hidden',
                            position:'relative',
                            top:'-1.2rem',
                            right:'-1rem',
                            width:'20px'
                        }}/>
                    </div>
                </div>
            </div>
            <div className='continue'>
                <h6 style={{margin:'0'}}>continue with {tog?'super':'premium'}</h6>
            </div>
        </div>
    )
}

export default PackContainer
