import React, { Component } from 'react'
import { Stage, Circle, Layer, Image, Path } from 'react-konva';
import Konva from 'konva';

import useImage from 'use-image';

import logo from '../NightSky.svg';
import me from './avatar01.png';

import firefly from '../Firefly.svg';

const LionImage = (props) => {
    const [image] = useImage(props.i);
    console.log('hello');
    console.log([image]);
    if ([image][0] != undefined) {
        console.log('ASDF');
        [image][0].width = props.width;
        [image][0].height = props.height;
    }
    return <Image image={image} x={props.x} y={props.y} draggable={props.draggable}/>;
};

export class World extends Component {
    state = {
        targets: [
            {
                x: 400,
                y: 200,
                color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            },
            {
                x: ~~(Math.random() * 500),
                y: ~~(Math.random() * 500),
                color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            },
            {
                x: ~~(Math.random() * 500),
                y: ~~(Math.random() * 500),
                color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            },
            {
                x: ~~(Math.random() * 500),
                y: ~~(Math.random() * 500),
                color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
            },
        ]
    }

    save = () => {
        window.localStorage.setItem("world", JSON.stringify(this.state.targets));
    }

    load = () => {
        const loaded = JSON.parse(window.localStorage.getItem("world"));
        console.log(loaded);
        console.log(this.state);
        this.setState({
            ...this.state,
            targets: loaded
        })
        console.log(this.state);
    }

    render() {
        return (
            <div id="stage-container">
                <button onClick={this.save}>Save</button>
                <button onClick={this.load}>Load</button>
                <Stage container={"stage-container"} width={window.innerWidth} height={window.innerHeight * .90}>
                    <Layer>
                        <LionImage i={logo} width={window.innerWidth} height={window.innerHeight*.9} y={0} x={0}/>
                    </Layer>
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
    }

    render() {
        return (
            // <Circle
            //     x={this.state.x}
            //     y={this.state.y}
            //     draggable
            //     onDragEnd={this.handleDragEnd}
            //     radius={6}
            //     fill={this.props.color}
            // />
            <LionImage
                x={this.state.x}
                y={this.state.y}
                draggable={true}
                onDragEnd={this.handleDragEnd}
                width={50}
                height={50}
                fill={this.props.color}
                i={firefly}
            />
        )
    }
}

export default World