import React from "react";

class Calcul extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            distance : 0,
            poids : 0,
            modeTransport : 0,
            coutT : 0
        }
    }
    handleOnchange= (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name] : value
        });
    }    

    calculer = (e)=>{
        e.preventDefault();
        if (this.state.modeTransport === 'normal') {
            if (this.state.poids < 10) {
                const coutTotal = this.state.distance * 0.5;
                this.setState({coutT : coutTotal})
            } else {
                const coutTotal = this.state.distance * (this.state.poids / 0.5) * 0.3;
                this.setState({coutT : coutTotal})
            }
        } else {
            if (this.state.poids < 10) {
                const coutTotal = this.state.distance * 0.5;
                this.setState({coutT : coutTotal*0.2})
            } else {
                const coutTotal = this.state.distance * (this.state.poids / 0.5) * 0.3;
                this.setState({coutT : coutTotal*0.2})
            }
        }
       
        
    }
    
    render() {
        return (
            <section>
                <form onSubmit={this.calculer}>
                    <div className="form-group">
                        <label>Distance:</label>
                        <div>
                            <input type='number' name="distance" onChange={this.handleOnchange}/>KM
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Poids:</label>
                        <div>
                            <input type='number' name="poids" onChange={this.handleOnchange}/>KG
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Mode de transport:</label>
                        <div className="radio-btns">
                            <input type='radio' name="modeTransport" value="express" onChange={this.handleOnchange}/> Express
                            <input type='radio' name="modeTransport" value="normal" onChange={this.handleOnchange}/> Normal
                        </div>
                    </div>
                    <hr/>
                    <div className="form-control">
                        <button>Calculer</button>
                    </div>
                    <div className="from-group">
                        <label>Cout total:</label>
                        <input type='text' name="coutT" value={this.state.coutT}  disabled/>
                    </div>
                </form>
            </section>
        );
    }
}

export default Calcul;