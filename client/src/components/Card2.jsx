import React,{useContext} from 'react'
import {userContext} from '../App'
import { useHistory } from 'react-router-dom'

const Card2 = ({obj}) => {

    const history = useHistory();

    const {setText,setMore} = useContext(userContext)

    const set = () =>{
        setText('')
        
        var t = document.getElementsByClassName('search_div')[0];
        var p = document.getElementsByClassName('border2')[0];
        t.style.transition = 'all .2s ease-in-out';
        t.style.width = '250px';
        p.style.borderBottom = '1px solid white';

        setMore(obj)
        localStorage.setItem('more',JSON.stringify(obj));
        history.push('/moreabout')

    }

    return (
        <div onClick={set}>
            <div className='card2_body'>    
                <div className='card2_img'>
                    <img src={obj.hImg} alt="" />
                </div>
                <div className="card2_detail">
                    <div>{obj.name}</div>
                    <div style={{
                        fontSize:'12px',
                        opacity:'.7'
                    }}>
                        {obj.desc1}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card2
