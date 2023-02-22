import { Button, Modal } from "antd";
import { useState } from "react";
import { act_close_admin } from "../../actions";
import { useDispatch } from "react-redux";

export default function ModalLogout() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Do you want to log out?");
  const handleOk = () => {
    setModalText("The account will be log out after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      dispatch(act_close_admin());
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <div>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </div>
  );
}
