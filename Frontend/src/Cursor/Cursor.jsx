// import React, { useEffect,useRef } from 'react';
// import "./Cursor.css"

// const Cursor=()=>{
// const cursor =useRef()

// useEffect(()=>{
//     window.addEventListener("mousemove",(e)=>{
// const x=e.clientX;
// const  y=e.clientY;

// cursor.current.style.left =x +"px";
// cursor.current.style.top =y +"px";


//     })
// },[])

//     return(
//         <div ref={cursor} style={{width:40,height:40,position:'fixed',borderRadius:50,pointerEvents:'none',border:2 ,borderColor:'purple',borderStyle:'solid',marginTop:-10,marginLeft:-15}} className='cursorCustome'></div>

//     )
// }
// export default Cursor;








import React, { useEffect,useRef } from 'react';
// import "./Cursor.css"
import AnimatedCursor from "react-animated-cursor"

const Cursor=()=>{
return(
    <div className="App">
    <AnimatedCursor
      innerSize={10}
      outerSize={20}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>       
)
}
export default Cursor;
