import React, {useState, useEffect} from 'react';
import { useSelector } from "react-redux";
import TableBlog from './TableBlog';
import FormCreatePost from './FormCreatePost';



export default function BlogAdmin(props) {
  const listFull = useSelector(state=> state.listPosts)
  const { params } = props;
  const [listPost, setListPost] = useState([]);
  useEffect(()=>{
      if (params.id == 4) {
        setListPost(listFull);
      }
  },[params, listFull])
  let element = "";
  if (listFull.length != 0 ) {
    element= params.id == 4 ? <TableBlog list={listFull}/> : <FormCreatePost/>;
  }
  return (
    <div>{element}</div>
  )
}
