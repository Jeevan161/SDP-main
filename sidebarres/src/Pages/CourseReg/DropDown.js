import React, { useEffect,useState } from 'react'
import './DropDown.css';
function DropDown() {
    const types =[
        {id:"1",name:"Regular"},
        {id:"2",name:"Honurs"},
       
      ];
     
     const  cluts =[
        {id:"1",typeid:"1",name:"S-1"},
        {id:"2",typeid:"1",name:"S-2"},
        {id:"3",typeid:"1",name:"S-3"},
        {id:"4",typeid:"2",name:"S-4"},
        {id:"5",typeid:"2",name:"S-5"},
        {id:"6",typeid:"2",name:"S-6"}
      ];
      const [type ,setType]=useState([]);
      useEffect(()=>{
         setType(types);
      },[])
      const [clut ,setClust]=useState([]);
      useEffect(()=>{
         setClust(cluts);
      },[])
      const handleType =(id) =>{
        const dt = cluts.filter(x=> x.typeid===id)
        setClust(dt);
      }
  return (
    <div>
<select id='clust'className='form-control select-class'  style={{borderRadius:"50px",height:"35px",marginLeft:-7,marginTop:20,maxWidth:"200px"}} >
    <option value="0" style={{marginLeft:'80px'}}>Select Section</option>
    {
        clut &&
        clut !== undefined?
        clut.map((ctr,index)=> {
            return(
                <option key={index} value={ctr.id}>{ctr.name}</option>
            )
        })
        :"No Clust"
    }
</select>
    </div>
  );
}

export default DropDown