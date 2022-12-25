import { useState } from 'react';
import './App.css';
import DropdownComponent from "./components/DropdownComponent";
import RestaurantComponent from "./components/RestaurantComponent";
import RestaurantData from "./data/RestaurantData";
import { FaUserCircle, } from "react-icons/fa";
import { TbNotification } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";

function App() {
  const [dataNames,setDataNames] = useState(RestaurantData)
  const [names,setNames] = useState("")
  const [dataFilter] = useState(["name","categories","categories2","categories3"])

  const ChangeRestaurantData=(e)=>{
    const category = e.target.value
    if(category === "All Restaurant"){
      setDataNames(RestaurantData)
    }else{
      const result = RestaurantData.filter((element)=>{
        return element.name === category
      })
      setDataNames(result)
    }  
  }

  const searchRestaurants=(dataNames)=>{
    return dataNames.filter((item)=>{
      // eslint-disable-next-line
      return dataFilter.some((filter)=>{
          if(item[filter]){
            return item[filter]
              .toString()
              .toLowerCase()
              .indexOf(names.toLowerCase())>-1
          }
      })
  })
  }
  return (
    <div className="container">
      <div className="top-nav">
        <div className="icons">
        <TbNotification className="noti"/>
        <FaUserCircle className="user"/>
        </div>
        <select className="select-2">
            <option>pakkphong</option>
            <option>Settings</option>
        </select>
      </div>
      <aside>
        <h1>Logo</h1><h1>Logo</h1>
      </aside>
        <main>
          <div>
          <h5>Place List</h5>
          </div>
        <div className="search-container">
          <DropdownComponent ChangeRestaurantData={ChangeRestaurantData}/>
          <span className="i">|</span>
        <div>
        <labal htmlFor="search-form">
          
          <input type="text" 
          className="search-input" 
          placeholder="Search name..."
          value={names}
          onChange={(e)=>setNames(e.target.value)}
          />
        </labal>
        <BiSearch className="btn-search"/>
        </div>
      </div>
      <div className="content">
          {searchRestaurants(dataNames).map((data,index)=>{
              return <RestaurantComponent key={index} {...data}/>
          })}
      </div>
        </main>
    </div>
  )
}

export default App