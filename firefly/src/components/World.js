import React, { Component } from 'react'
import { Stage, Circle, Layer } from 'react-konva';
import Konva from 'konva';

export class World extends Component {

    move() {
        
    }

    render() {
        return (
            <div>
                <Stage width={window.innerWidth*.48} height={window.innerHeight*.90} style={{border: '10px solid black'}}>
                    <Layer>
                        <Circle x={window.innerWidth*.48*.5} y={window.innerHeight*.98*.5} draggable={true} radius={6} fill={"black"}/>
                        <Circle x={window.innerWidth*.48*.5} y={window.innerHeight*.98*.5} draggable={true} radius={6} fill={"red"}/>
                        <Circle x={window.innerWidth*.48*.5} y={window.innerHeight*.98*.5} draggable={true} radius={6} fill={"blue"}/>
                        <Circle x={window.innerWidth*.48*.5} y={window.innerHeight*.98*.5} draggable={true} radius={6} fill={"green"}/>
                    </Layer>
                </Stage>
            </div>
        )
    }
}

export default World