import React from "react";

class DataInput extends React.Component {
    constructor(props) {
        super(props);
        // inisialisasi state
        this.state = {
            title : '',
            desc : '',
        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onDescChangeEventHandler = this.onDescChangeEventHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState({
            title: event.target.value,
        });
    }

    onDescChangeEventHandler(event) {
        this.setState({
            desc: event.target.value,
        });
    }

    onSubmitHandler(event) {
        event.preventDefault(); // Mencegah pengiriman formulir ke URL yang diberikan
        // Lakukan sesuatu dengan nilai judul dan deskripsi yang ada di state, seperti mengirim ke server
        this.props.addData(this.state);
        //clear column 
        this.setState(() => {
            return{
                title: "",
                desc: "",
            };
        });
    }

    render() {
        return(
            <form className="data-input" onSubmit={this.onSubmitHandler}>
                <input
                type="text"
                placeholder="Song Title"
                value={this.state.title}
                onChange={this.onTitleChangeEventHandler}
                />

                <input
                    placeholder="Song Description"
                    value={this.state.desc}
                    onChange={this.onDescChangeEventHandler}
                />

                <button type="submit">Add</button>
            </form>
        );
    }
}

export default DataInput;