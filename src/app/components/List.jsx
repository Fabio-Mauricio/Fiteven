export const List = ({}) => {
    return (
        <ul className="list rounded-box flex flex-col gap-5 uppercase font-bold">
  
  <li className="list-row flex items-center">
    <div className="text-7xl font-thin opacity-30 tabular-nums">01</div>
    <div className="list-col-grow">
      <div>Organize</div>
     
    </div>
    <button className="btn btn-square btn-ghost">
    </button>
  </li>
  
  <li className="list-row flex items-center">
    <div className="text-7xl font-thin opacity-30 tabular-nums">02</div>
   
    <div className="list-col-grow">
      <div>Faça</div>
      
    </div>
    <button className="btn btn-square btn-ghost">
    </button>
  </li>
  
  <li className="list-row flex items-center">
    <div className="text-7xl font-thin opacity-30 tabular-nums">03</div>
    
    <div className="list-col-grow">
      <div>Evolua</div>
    
    </div>
    <button className="btn btn-square btn-ghost">
    </button>
  </li>
  
</ul>
    )
}