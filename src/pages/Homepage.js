import React from 'react'
import Player from '../componants/player'

export const Homepage = () => {
    const [skin, setSkin] = React.useState("m2")
    return (
        <div>
            Choose A Player
            <div className="choose-player" onClick={() => { setSkin("f1") }}>  f1</div>
            <div className="choose-player" onClick={() => { setSkin("f2") }}>  f2</div>
            <div className="choose-player" onClick={() => { setSkin("m1") }}>  m1</div>
            <div className="choose-player" onClick={() => { setSkin("m2") }}>  m2</div>
            <div className="main-container">
                <Player skin={`${skin}.png`} />
            </div>

        </div>
    )
}
