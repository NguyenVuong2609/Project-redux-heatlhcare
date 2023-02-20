import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Typography } from "antd";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import * as types from "../../actions";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import DrawerBlogForm from "./DrawerBlog";



export default function TableBlog(props) {
  const { list } = props;
  const { Text } = Typography;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  const [show, setShow] = useState(false);
  const [idDelete, setIdDelete] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleConfirm = ()=> {
    dispatch(types.act_delete_post(idDelete));
    setIdDelete("");
    setShow(false);
  };

  
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => {
            handleSearch(selectedKeys, confirm, dataIndex);
          }}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) => text,
  });
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "10%",
      ...getColumnSearchProps("title"),
    },
    {
      title: "Sub-title",
      dataIndex: "sub-title",
      key: "sub-title",
      width: "20%",
      ...getColumnSearchProps("sub-title"),
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
      width: "50%",
      ...getColumnSearchProps("body"),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      width: "10%",
      render: (status) => {
        return status ? (
          <Text type="success">Actived </Text>
        ) : (
          <Text type="danger">Pending </Text>
        );
      }
    },
    {
      title: "Actions",
      key: "actions",
      render: (post) => {
        return (
          <Space>
            <Button onClick={()=> {
              dispatch(types.act_view_post(post, true));
            }}
            >
              Edit
            </Button>
            <Button onClick={()=>{
              handleShow();
              setIdDelete(post.id)
            }}
            >
              Delete
            </Button>
          </Space>
        ) 
      },
    },
  ];
 
  return <>
  <Table columns={columns} dataSource={list} />;
  <DrawerBlogForm/>
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this item?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleConfirm}>Yes</Button>
        </Modal.Footer>
      </Modal>
  </>
}
