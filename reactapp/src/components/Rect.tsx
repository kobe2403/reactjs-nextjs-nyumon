import React, { Component } from "react"

interface ISquareProps {
    x: string;
    y: string;
    w: string;
    h: string;
    r: string;
    c: string;
}

class Rect extends React.Component<ISquareProps, {}> {
    x = "0"
    y = "0"
    width = "0"
    height = "0"
    radius = "0"
    color = "white"
    style = {}

    constructor(props:any) {
        super(props)
        this.x = props.x
        this.y = props.y
        this.width = props.w
        this.height = props.h
        this.color = props.c
        this.radius = props.r
        this.style = {
            backgroundColor: this.color,
            position: "absolute",
            left: this.x + "px",
            top: this.y + "px",
            width: this.width + "px",
            height: this.height + "px",
            borderRadius: this.radius + "px",
        }
    }

    render() {
        return <div style={this.style}></div>
    }
}

export default Rect