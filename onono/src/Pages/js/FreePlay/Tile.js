/**
 * Returns Board component that includes tiles
 */

 import React from 'react'
 import './Board.css'
 import wrap_mon from './wrap_mon.png'
 import maxresdefault from './maxresdefault.jpg'
 import hepl from './hepl.jpg'
 import {useState} from 'react'
 
 function Tile(props) {
     let id = props.id
     console.log(id)
     const [background, setBackground] = useState(props.src)
 
     function updateTile(id) {
         console.log("waku waku")
         if (id == 1) {
            console.log(id)
            setBackground(wrap_mon)
            id = 2
         } else if (id == 2) {
            console.log(id)
            setBackground(maxresdefault)
            id = 3
         } else {
            console.log(id)
            setBackground(hepl)
            id = 1
         }
     }
 
     return (
         <img src={background} height="150" width="150" onClick={e=>updateTile(id)}/>
     );
 }
 
 export default Tile