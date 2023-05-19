const Tbody=(props)=>{
    return(
        <tbody>
          {
           props.isActive && props.userListProperty.map((item,index)=>{
            return(
              <tr key={item.id}>
                <td id="userData">{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>{item.class}</td>
                <td>{item.time}</td>
                <td>{item.actionflag && (
                   <div>
                    <button className="btn1">نمایش</button>
                    <button className="btn2">ویرایش</button>
                    <button className="btn3" onClick={() => props.deleteItem2(item.id)}>حذف</button>
                   </div>
                )}</td>
              </tr>
            )
           })
        }
        </tbody>
    )
}
export default Tbody;