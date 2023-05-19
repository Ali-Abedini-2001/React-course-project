
const Thead=(props) =>{
    return(    
            <thead className="thead"> 
                <tr>
                    {props.title.map((item, index)=>
                    <th className="th" key={index}>{item}</th>)}
                </tr> 
         </thead>
    )
}
export default Thead; 
