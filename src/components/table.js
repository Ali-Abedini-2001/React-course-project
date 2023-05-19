import Tbody from './tbody';
import Thead from './thead';
const Table=(props) =>{
    const {deleteItem, isActive, userListProperty,title}=props;
    return(
        <table className="table" id="table">
        <Thead title={title}/>
        <Tbody deleteItem2={deleteItem} isActive={isActive} userListProperty={userListProperty}/>
      </table>
    )
}
export default Table;