import React from "react";
import fireflyStyles from "./FireflyWorldStyles";
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        item: monitor.getItem(),
    }
}

const FireflyContainer = () => {
    const { connectDropTarget, item } = this.props;
    //variable for the styles
    const classes = fireflyStyles();

    return connectDropTarget(
        <div className={classes.fireflyContainer}>
        
        </div>
    )
    
}



export default DropTarget('item', {}, collect)(FireflyContainer);