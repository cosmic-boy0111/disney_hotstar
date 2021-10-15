import React,{useContext} from 'react'
import '../Style/Home.css'
import {userContext} from '../App'
import Carousal from './Carousal'
import '../Style/Disney.css'
import StudioHolder from './StudioHolder'
import ReactPlayer from 'react-player'
import v1 from '../Videos/v1.mp4'
import v2 from '../Videos/v2.mp4'
import v3 from '../Videos/v3.mp4'
import v4 from '../Videos/v4.mp4'
import v5 from '../Videos/v5.mp4'



const Disney = () => {

    const { disneyBanner } = useContext(userContext)

    const Studios = [
        {
            img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6347/746347-h',
            path:'disney',
            video:v1,
            id:0,
        },
        
        {
            img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6348/746348-h',
            path:'pixar',
            video:v2,
            id:1
        },
        
        {
            img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6349/746349-h',
            path:'marvel',
            video:v3,
            id:2
        },
        
        {
            img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6357/746357-h',
            path:'starwars',
            video:v4,
            id:3
        },
        
        {
            img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6355/746355-h',
            path:'geo',
            video:v5,
            id:4
        },

    ]

    return (
        <div className='body2'>
            <Carousal data={disneyBanner} />

            <div className='studio_holder'>

                {
                    Studios.map((e)=>{
                        return <StudioHolder obj={e}/>
                    })
                }
            </div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quam numquam mollitia reprehenderit commodi sequi, architecto facilis iusto aliquam veniam consequatur quo pariatur aut repudiandae, molestias voluptatum laudantium fuga, obcaecati explicabo quaerat tenetur voluptatem aperiam fugiat. Repellat odio quas minus atque, fugiat iure nemo facere est reprehenderit fuga ipsa harum laboriosam earum in, commodi obcaecati ipsum autem praesentium! Perferendis, minima magnam expedita consectetur ipsam veniam unde nihil illo enim! Quod ipsam eligendi amet sunt assumenda corrupti voluptatum eos, libero exercitationem, doloribus iure quisquam porro aperiam autem earum maiores eaque non vitae harum repudiandae animi officia modi? Dolorum totam accusamus quaerat.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, ullam repellendus non, quo illo facilis maiores voluptatum voluptatibus quidem voluptas natus porro iste vel incidunt error nemo, delectus debitis consectetur. Dolor quaerat, recusandae explicabo unde ad nisi cumque, iste accusamus facilis asperiores aspernatur minus dignissimos animi qui fugit eligendi culpa eos expedita impedit enim earum totam repudiandae accusantium. Officiis dolorem iure quae repudiandae minima dolore ab eaque cupiditate ipsum asperiores in earum reiciendis quia facere quisquam incidunt, nostrum, quod, provident magnam quasi molestias nihil doloribus eum! Quis repudiandae eligendi repellat rerum. Iure qui ex a soluta, expedita saepe! Mollitia, similique? Debitis alias minima provident beatae inventore sed eos illo cum totam nostrum at atque neque, temporibus, incidunt quasi ab tenetur? Dignissimos adipisci vel fugit, quod nesciunt ipsum eveniet inventore tenetur ea laborum veritatis placeat expedita quas a nemo cumque provident mollitia! Ullam nihil ad iure minus laboriosam accusamus dolorem porro suscipit sit dignissimos nostrum quam veritatis excepturi culpa eius nobis quas, incidunt laborum blanditiis magni atque fugit! Ab magni minus delectus maxime, ipsa deleniti aliquid temporibus suscipit nesciunt alias quas ut nemo et unde veritatis molestiae animi error soluta consequuntur. Deserunt illo repudiandae, est nam architecto necessitatibus nihil laudantium! Rem explicabo exercitationem ad, nam amet suscipit sunt obcaecati possimus sequi ipsa, iure impedit similique pariatur eaque, facere repudiandae eos? Porro magnam repellendus sunt hic sit beatae rem, numquam maiores officia eaque nulla sed? Tempore quo quas, voluptatem eum nulla, maiores nemo deserunt eligendi nesciunt reiciendis veritatis quia sit! Maxime veritatis molestias consequuntur error obcaecati autem iusto incidunt vero eveniet molestiae? Aliquid saepe corporis aliquam, quo sequi vero animi vel assumenda iusto corrupti repellat deserunt temporibus magni, possimus quam odio laboriosam totam dolores! Molestiae et harum eligendi impedit voluptatum rem architecto accusantium consequatur possimus voluptas pariatur, ad laborum ducimus saepe natus eos sunt veniam optio veritatis voluptate. Deserunt quisquam quas porro rerum expedita quos officiis architecto sed aspernatur aut neque eligendi accusantium minima earum ut maiores in animi illum perferendis, atque qui dolorum facilis tenetur? Exercitationem quae rem natus cupiditate porro cumque excepturi soluta asperiores, ipsa recusandae nihil nostrum esse sed aspernatur rerum veniam suscipit fugit repudiandae commodi harum, ipsam velit laboriosam fugiat voluptates. Quia, est eum ullam delectus architecto molestias illum quod dolorem eaque, quibusdam voluptatibus laborum labore nesciunt. Expedita quae perspiciatis voluptatum consectetur earum totam cupiditate saepe qui iusto, velit et dolorem veritatis, quasi odit. Aut non totam deserunt voluptates provident sit iusto officiis, iure repudiandae et. Non aliquam, quaerat delectus corporis tenetur nihil eos facilis cumque debitis ad vitae culpa aliquid blanditiis minima, hic velit eligendi consectetur quia ea nesciunt quos incidunt? Assumenda asperiores id incidunt necessitatibus magnam reprehenderit architecto possimus? A repudiandae quia, deserunt delectus modi eos fugit voluptas. Quis neque veniam nam similique hic nulla doloribus quidem dignissimos earum voluptatum est amet accusantium veritatis, dolor praesentium placeat repellendus molestiae impedit sapiente. Atque incidunt est hic voluptatum fugiat. Omnis quo voluptas facilis laborum laboriosam adipisci, quos quis explicabo facere molestiae soluta expedita optio suscipit doloremque perspiciatis excepturi?
        </div>
    )
}

export default Disney

