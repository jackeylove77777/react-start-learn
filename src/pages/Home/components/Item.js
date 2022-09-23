

export default function Item({setData, id, thing}){
    function deleteData(){
        setData(function (prev){
            return prev.filter(i=>i.id!==id)
        })
    }
    return(
        <div className="list-item">
            <span>{thing}</span>
            <button className="list-item-button" onClick={deleteData}>删除</button>
        </div>
    )
}