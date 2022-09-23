import Item from "./Item";

export default function List({data, setData}){
    return (
        <div className="list">
            {
                data.map(i=>{
                    return  <Item setData={setData} id={i.id} thing={i.thing} key={i.id}/>
                  }
                )
            }
        </div>
    )
}