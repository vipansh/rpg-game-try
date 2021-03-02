import { useState } from 'react'

export default function UseWalk(maxSteps) {

    const [dir, setDir] = useState(0)
    const [step, setStep] = useState(0)
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    const directions = {
        down: 0,
        left: 1,
        right: 2,
        up: 3,
    }

    const stepSize = 10

    const modifier = {
        down: { x: 0, y: stepSize },
        left: { x: -stepSize, y: 0 },
        right: { x: stepSize, y: 0 },
        up: { x: 0, y: -stepSize },
    }



    function move(dir) {

        if (window.width > 600) {
            setPosition(prev => ({
                x: prev.x + modifier[dir].x < 0 || prev.x + modifier[dir].x > 660 ? prev.x : prev.x + modifier[dir].x,
                y: prev.y + modifier[dir].y < 0 || prev.y + modifier[dir].y > 440 ? prev.y : prev.y + modifier[dir].y
            }))
        }
        else {
            setPosition(prev => ({
                x: prev.x + modifier[dir].x < 0 || prev.x + modifier[dir].x > 335 ? prev.x : prev.x + modifier[dir].x,
                y: prev.y + modifier[dir].y < 0 || prev.y + modifier[dir].y > 280 ? prev.y : prev.y + modifier[dir].y
            }))
        }
    }

    function walk(dir) {
        console.log(directions[dir])
        setDir(prev => {
            if (directions[dir] === prev) move(dir);
            return (directions[dir])
        })
        setStep(prev => prev < maxSteps - 1 ? prev + 1 : 0)

    }

    return {
        walk,
        dir,
        step,
        position,
    }
}
