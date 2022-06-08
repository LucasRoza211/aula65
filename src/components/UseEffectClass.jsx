import React from "react";

export default class UseEffectClass extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            clicks: 0,
        }
    }
    componentDidMount(){
        document.title = `Cliques: ${this.state.clicks} `
    }
    componentDidUpdate(){
        document.title = `Cliques: ${this.state.clicks} `
    }
    render() {
        return(
            <div>
                <h4>UseEffect em classe</h4>
                <p>Número de clicks: {this.state.clicks} </p>
                <button onClick={() => this.setState({clicks: this.state.clicks + 1})} >Clique aqui!</button>
            </div>
        )
    }
}