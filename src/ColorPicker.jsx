import React, {useEffect, useState} from 'react'

function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF")
    const [TextColor,setTextColor] = useState()
    const styles = {
        backgroundColor:color
    }

    const ClickHandle = (event) => {
        setColor(event.target.value)
    }

    return(<div className='container'>
        <h1>Color Picker</h1>
            <div className='colorBox' style={styles}>
            </div>
            <p className='thiscolor'>{color}</p>

            <input type="color" className='btn' value={color} onChange={(e) => ClickHandle(e)}/>
    </div>)
}

export default ColorPicker