import React from 'react'

function Touche(props) {
    let ligne1 = props.boutton.ligne1 ;
    let ligne2 = props.boutton.ligne2 ;
    let ligne3 = props.boutton.ligne3 ;
    let ligne4 = props.boutton.ligne4 ;
    return (
        <div className="clavier">
            <div  className="menu">
                <div ref={props.reference} ><input type="checkbox" className ="OnOff" onChange = {props.handleOff} /></div>
                <div onClick = {props.handleC}>C</div>
                <div onClick = {props.handleDelete}><span className="fa fa-arrow-left"></span></div>
            </div>
            <table>
                <tbody>
                    <tr>
                        {
                            ligne1.map((element,index) => {
                                return <td key = {index} onClick = {() => props.handleChange(element)}>{element}</td>
                            })
                        }
                    </tr>
                    <tr>
                        {
                            ligne2.map((element,index) => {
                                return <td key = {index} onClick = {() => props.handleChange(element)} >{element}</td>
                            })
                        }
                    </tr>
                    <tr>
                         {
                            ligne3.map((element,index) => {
                                return <td key = {index} onClick = {() => props.handleChange(element)}>{element}</td>
                            })
                        }
                    </tr>
                    <tr>
                        {
                            ligne4.map((element,index) => {
                                if(element === "="){
                                    return <td key = {index} onClick = {props.handleResult} >{element}</td>
                                }
                                return <td key = {index} onClick = {() => props.handleChange(element)} >{element}</td>
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Touche
