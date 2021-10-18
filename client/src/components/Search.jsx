import React,{useState,useContext,useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { userContext } from '../App'
import Card2 from './Card2';
import { useHistory } from 'react-router-dom'
import SearchMore from './SearchMore';

const Search = () => {

    const history = useHistory();
    const {text, setText} = useContext(userContext);

    const [show, setShow] = useState(false)
    const [dis, setDis] = useState(false)
    const [searchData, setSearchData] = useState([]);

    const { allData } = useContext(userContext);

    const incBar = () =>{
        var t = document.getElementsByClassName('search_div')[0];
        var p = document.getElementsByClassName('border2')[0];
        t.style.width = '360px';
        p.style.borderBottom = '1px solid #1f80e0';
    }

    // const decBar = () =>{
    //     setDis(true)
    //     set('')
    //     var t = document.getElementsByClassName('search_div')[0];
    //     var p = document.getElementsByClassName('border2')[0];
    //     t.style.transition = 'all .2s ease-in-out';
    //     t.style.width = '250px';
    //     p.style.borderBottom = '1px solid white';
    // }


    const set = (search_text) =>{
        setText(search_text);

        if(search_text === '' || search_text === ' ' ){
            setSearchData([])
            return;
        }

        const arr = allData.filter((e)=>{
            return (e.name.toLowerCase()).includes(search_text.toLowerCase());
        })
        setSearchData(arr)
    }

    const goThere = () =>{
        var temp = text;
        setText('')
        localStorage.setItem('search_data',JSON.stringify(searchData))
        var t = document.getElementsByClassName('search_div')[0];
        var p = document.getElementsByClassName('border2')[0];
        t.style.transition = 'all .2s ease-in-out';
        t.style.width = '250px';
        p.style.borderBottom = '1px solid white';
        history.push(`/searchdata/${temp}`)
    }

    return (
        <div className='search_div' 
        
        // onMouseDown={decBar}
        >
            <form style={{
                display:'flex'
            }}
            className='border2'
            onClick={incBar}
            >
            <input type="text" name="" value={text} onChange={(e)=>set(e.target.value)}  placeholder='Search'/>
            <SearchIcon  style={{
                opacity:'.7'  ,
                fontSize:'19px'
            }}/>
            </form>
            <div className='search_container' style={{
                display:text===''?'none':'flex',
                flexDirection:'column'
            }}>
                <div className='search_data'>

                {
                    searchData.slice(0,5).map(e=>{
                        return <Card2 obj={e}/>
                    })
                }
                </div>
                <div style={{
                    display:searchData.length > 5 ?'flex':'none'
                }}
                className='more'
                onClick={goThere}
                >
                    more result
                </div>
            </div>
        </div>
    )
}

export default Search
