import React, {useState, useEffect, useContext, createContext} from "react";
import TableAdmin from "./TableAdmin";
import DrawerForm from "./Drawer";
import { useSelector } from "react-redux";
import { Provider } from "react";

export const userContext = createContext();
export default function UserAdmin(props) {
  const listFull = useSelector(state=> state.listUser)
  const { params } = props;
  const [listUser, setListUser] = useState([]);

  let element = "";

  useEffect(()=>{
    let listRender;
      if (params.id == 1) {
        listRender = listFull;
      } else if (params.id == 2) {
        listRender = listFull.filter(user=>{
          return user.status == false;
        })
      } else {
        listRender = listFull.filter(user=>{
          return user.rank; 
        });
      }
      setListUser(listRender);
  },[listFull,params])
  
  element = <TableAdmin list={listUser}/>

  return (
      <userContext.Provider value={""}>
        {element}
        <DrawerForm/>
      </userContext.Provider>
  
  );
}
