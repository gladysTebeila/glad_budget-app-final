
import AddItem from './addItem';
import {DisplayTransection} from './displayTransection'

function Home(props){
    return(
        <div className="container">
            <DisplayTransection list={props.list}/>
            <AddItem add={props.add}/>
        </div>
    )
}
export default Home;