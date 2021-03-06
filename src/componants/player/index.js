import React from 'react'
import useKeyPress from '../../hooks/use-key-press'
import UseWalk from '../../hooks/use-walk'
import Actor from '../Actor'


const Player = ({ skin }) => {

    const { dir, step, walk, position } = UseWalk(3)

    useKeyPress((e) => {
        e.preventDefault()

        if ([37, 38, 39, 40].includes(e.which)) {

            walk(e.key.replace("Arrow", "").toLowerCase())
        }


    })



    const data = {
        h: 32,
        w: 32
    }
    return (
        <div>
            <Actor sprite={skin}
                data={data} step={step} dir={dir} position={position} />

            <div className="keys">
                <div className="up arr" onClick={() => { walk("up") }} ><i className="fa fa-arrow-up">⬆</i></div>
                <br />
                <div className="left arr" onClick={() => { walk("left") }}><i className="fa fa-arrow-left">⬅</i></div>
                <div className="down arr" onClick={() => { walk("down") }}><i className="fa fa-arrow-down">⬇</i></div>
                <div className="right arr" onClick={() => { walk("right") }}><i className="fa fa-arrow-right">➡</i></div>
            </div>
        </div>
    )
}

export default Player
