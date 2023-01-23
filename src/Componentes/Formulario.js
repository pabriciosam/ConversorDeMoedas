import React, { Component } from "react";
import ListaDeMoedas from "./ListaDeMoedas";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ConverteMoedas } from './../Actions'

class Formulario extends Component {
    constructor(props){
        super(props)

        this.onValueChange = this.onValueChange.bind(this)
        this.onValueDeChange = this.onValueDeChange.bind(this)
        this.onValueParaChange = this.onValueParaChange.bind(this)
        this.envia = this.envia.bind(this)

        this.state = {
            de: '',
            para: '',
            valor: 0
        }
    }

    onValueChange(e){
        console.log(e.target.value)
        this.setState({valor: e.target.value})
    }

    onValueDeChange(e){
        console.log("DE: ", e.target.value)
        this.setState({de: e.target.value})
    }

    onValueParaChange(e){
        console.log("PARA: ", e.target.value)
        this.setState({para: e.target.value})
    }

    envia(){
        const dados = {
            de: this.state.de,
            para: this.state.para,
            valor: this.state.valor
        }

        this.props.ConverteMoedas(dados)
    }

    render() {
        return (
            <form>
                <div className="row justify-content-center">
                    <div className="input-group input-group-lg">
                        <input onChange={(e) => this.onValueChange(e)} type="number" className="form-control"></input>
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-6">
                        <label htmlFor='formSelectDe'>De:</label>
                        <ListaDeMoedas origem="De" onValueChange={this.onValueDeChange}></ListaDeMoedas>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor='formSelectPara'>Para:</label>
                        <ListaDeMoedas origem="Para" onValueChange={this.onValueParaChange}></ListaDeMoedas>
                    </div>
                </div>
                <div className="row">
                    <button type="button" onClick={this.envia} className="btn btn-primary btn-lg btn-block">Converter</button>
                </div>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ConverteMoedas }, dispatch)
}

export default connect(null, mapDispatchToProps)(Formulario)