import React from "react"

export default function Links(props){
    return (
        <div class="personalLinksLogo">                    
            <a href={props.link}>
                <img src={props.source} alt={props.alternative} style={{width: props.width }}/>
            </a>
         </div>
    )
}