import ListData from "./ListData";
import React from "react";
import { favDisneySoundtrack } from "./utils/data";
import DataInput from "./InputData";

// function ContainerData(){
//     return(
//         <>
//             <div>
//                 <h1 align="center">The Most Memorable Disney Songs That Defined My Childhood</h1>
//             </div>
//             <ListData/>
//         </>
//     )
// }

class ContainerData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: favDisneySoundtrack()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddDataHandler = this.onAddDataHandler.bind(this);
    }

    onAddDataHandler({title, desc}) {
        this.setState((prevState) => {
            return {
                dataList: [
                    ...prevState.dataList, 
                    {
                        id: +new Date(),
                        title,
                        desc,
                        image: "./img/tangled.gif",
                    }
                ]
            }
        })
    }

    onDeleteHandler(id){
        const dataList = this.state.dataList.filter(favDisneySoundtrack => favDisneySoundtrack.id !== id);
        this.setState({dataList})
    }
    render() {
        return(
            <div className="data-app">
                <DataInput addData={this.onAddDataHandler}/>
                <h1>The Most Memorable Disney Songs That Defined My Childhood</h1>
                <ListData dataList={this.state.dataList} onDelete={this.onDeleteHandler}/>
            </div>
        );
    }
}

export default ContainerData;