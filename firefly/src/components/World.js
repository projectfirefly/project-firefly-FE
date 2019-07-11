import React, { Component } from 'react'
import { Stage, Circle, Layer } from 'react-konva';
import Konva from 'konva';

export class World extends Component {
    state = {
        targets: [
            {
                x: 400,
                y: 200,
                color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            },
            {
                x: ~~(Math.random() * 500),
                y: ~~(Math.random() * 500),
                color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            },
            {
                x: ~~(Math.random() * 500),
                y: ~~(Math.random() * 500),
                color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            },
            {
                x: ~~(Math.random() * 500),
                y: ~~(Math.random() * 500),
                color: '#'+(Math.random()*0xFFFFFF<<0).toString(16)
            },
        ]
    }

    render() {
        return (
            <div id="stage-container">
                <Stage container={"stage-container"} width={window.innerWidth * .48} height={window.innerHeight * .90} style={{ border: '10px solid black' }}>
                    <Layer>
                        {this.state.targets.map((target) => (
                            <Target x={target.x} y={target.y} color={target.color} key={target.x} />
                        ))}
                    </Layer>
                </Stage>
            </div>
        )
    }
}

class Target extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: props.x,
            y: props.y,
            color: props.color
        }
    }

    handleDragEnd = (e) => {
        this.setState({
            x: e.target.x(),
            y: e.target.y()
        })
        console.log(JSON.stringify(this.state));
        var a = 100;
        var b = 200;
        a = a ^ b;
        b = b ^ a;
        a = a ^ b;
        console.log(a);
        console.log(b);
    }

    render() {
        return (
            <Circle
                x={this.state.x}
                y={this.state.y}
                draggable
                onDragEnd={this.handleDragEnd}
                radius={6}
                fill={this.props.color}
            />
        )
    }
}

export default World