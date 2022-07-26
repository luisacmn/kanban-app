import Column from "../components/Column";
import "./kanban.css"

const Kanban = () => {

    return (
        <div className="container-fluid">
            <div className="row" id="kanban-row">
                <Column title="ToDo" /> 
                <Column title="Doing" />
                <Column title="Done" />
            </div>
        </div>
    )
}

export default Kanban;

