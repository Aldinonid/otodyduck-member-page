import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import useForm from "helpers/hooks/useForm";
import { users } from "constants/api";

import NoImage from "assets/images/no-image.jpg";
import { Gap, Modal, Select, Input } from "components";
import { fetchUser } from "store/actions/users";
import { Wrapper, Button } from "./UserDetail";

const UserDetail = ({ details }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [modalRole, setmodalRole] = useState(false);
  const [modalPassword, setmodalPassword] = useState(false);

  const [state, setState] = useForm({
    id: details?.id,
    role: details?.role ?? "",
    password: ""
  });
  
  function changeRole(e) {
    e.preventDefault();

    const payload = {
      name: details?.name,
      email: details?.email,
      password: details?.password,
      job: details?.job,
      role: state.role,
    };

    users.edit(state.id, payload).then((res) => {
      toast.success("User role has been changed !");
      dispatch(fetchUser(res.data));
      setmodalRole(false);
    });
  }

  function deleteTool() {
    users.delete(state.id).then((res) => history.goBack());
  }

  function resetPassword(e) {
    e.preventDefault();
    const payload = {
      name: details?.name,
      email: details?.email,
      password: state.password,
      job: details?.job,
      role: details?.role
    }

    users.edit(details?.id, payload).then(res => {
      toast.success("Password has been changed !")
      dispatch(fetchUser(res.data))
      setmodalPassword(false);
    }).catch(err => toast.error(err?.response?.data?.message[0]?.message))
    // }).catch(err => console.log(err?.response?.data?.message[0]?.message))
  }

  return (
    <>
      <Wrapper>
        <h1 className="title">{details?.name}</h1>
        <Gap height={30} />
        <Button onClick={() => setmodalRole(true)}>Change Role</Button>
        <Button onClick={() => setmodalPassword(true)} style={{ marginLeft: 20 }}>Reset Password</Button>
        <Button onClick={deleteTool} remove style={{ marginLeft: 20 }}>
          Delete User
        </Button>
        <Gap height={30} />
        <img
          src={details?.avatar ?? NoImage}
          alt={details?.avatar ?? "User Avatar"}
        />
        <Gap height={20} />
        <ul>
          <li>
            <strong>Name:</strong> {details?.name}
          </li>
          <li>
            <strong>Job:</strong> {details?.job}
          </li>
          <li>
            <strong>Email:</strong> {details?.email}
          </li>
          <li>
            <strong>Role:</strong> {state.role}
          </li>
        </ul>
      </Wrapper>
      <form onSubmit={changeRole}>
        <Modal
          open={modalRole}
          onClose={() => setmodalRole(false)}
          title="Change User Role"
        >
          <Select
            labelName="Roles"
            name="role"
            value={state?.role}
            fallbackText="Select User Role"
            onClick={setState}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </Select>
        </Modal>
      </form>
      <form onSubmit={resetPassword}>
        <Modal
          open={modalPassword}
          onClose={() => setmodalPassword(false)}
          title="Change User Password"
        >

          <Input
            name="password"
            type="password"
            onChange={setState}
            value={state.password}
            placeholder="Type User Password"
            labelName="Password"
          />

        </Modal>
      </form>
      <ToastContainer />
    </>
  );
};

export default UserDetail;
