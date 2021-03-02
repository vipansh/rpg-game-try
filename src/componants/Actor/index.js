import React from 'react'
import Sprite from '../sprite'


const Actor = ({ sprite, data, step = 0, dir = 0, position = { x: 340, y: 0 } }) => {


    const { h, w } = data



    return (
        <div>
            <Sprite image={sprite}
                data={{
                    x: step * w,
                    y: dir * h,
                    w,
                    h,
                }} position={position} />
        </div>
    )
}

export default Actor
