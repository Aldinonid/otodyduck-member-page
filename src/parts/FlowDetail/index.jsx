import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useForm from "helpers/hooks/useForm";
import { flows, medias } from "constants/api";
import image2base64 from "utils/image2base64";

import { Gap, Modal, Input, Select } from "components";
import { Wrapper, Container, Button, ImageWrapper } from "./FlowDetail";

const FlowDetail = ({ data }) => {
  const history = useHistory();
  const CLASSES = useSelector((state) => state.classes);

  const addPicture = useRef(null);
  const [modalCourses, setmodalCourses] = useState(false);
  const [modalEditClass, seteditClass] = useState(false);
  const [state, setState] = useForm({
    id: data?.id ?? "",
    name: data?.name ?? "",
    thumbnail: data?.image ?? "",
    level: data?.level ?? "",
    courses: [],
    previewThumbnail: "",
    course: "",
  });

  if (data?.courses?.length > 0) {
    Object.values(data?.courses).forEach((item) => state.courses.push(item.id));
  }

  function previewImage(e) {
    e.persist();
    image2base64(e.target.files[0]).then((image) => {
      setState({
        target: {
          name: e.target.name,
          value: image,
        },
      });
    });
    state.previewThumbnail = e.target.files[0].name;
  }

  function addCourse(e) {
    const payload = {
      name: state.name,
      level: state.level,
      course_id: state.courses,
    };

    payload.course_id.push(state.course);

    flows
      .edit(state.id, payload)
      .then((res) => history.go())
      .catch((err) => toast.error(err?.response?.data?.message));
  }

  function deleteCourse(e) {
    const payload = {
      name: state.name,
      level: state.level,
      course_id: state.courses,
    };

    payload.course_id = payload.course_id.filter((item) => item !== e);

    flows
      .edit(state.id, payload)
      .then((res) => history.go())
      .catch((err) => toast.error(err?.response?.data?.message));
  }

  function deleteFlow() {
    flows.delete(state.id).then((res) => history.goBack());
  }

  async function submit(e) {
    e.preventDefault();
    const payload = {
      name: state.name,
      level: state.level,
      course_id: state.courses,
    };

    if (state.thumbnail.indexOf("base64") > -1) {
      const thumbnail = await medias.upload({
        image: state.thumbnail,
        imageType: "flow",
      });
      payload.image = thumbnail.data.image;
    }

    flows
      .edit(state.id, payload)
      .then((res) => history.go())
      .catch((err) => toast.error(err?.response?.data?.message));
  }

  return (
    <>
      <Wrapper>
        <h1 className="title">{data?.name}</h1>
        <Gap height={30} />
        <Button onClick={() => seteditClass(true)}>Edit Flow Learn</Button>
        <Button onClick={deleteFlow} remove style={{ marginLeft: 20 }}>
          Delete Flow Learn
        </Button>
        <Gap height={30} />

        <img src={data?.image} alt={data?.name ?? "Flow Learn Name"} />
        <Gap height={10} />
        <ul>
          <li>
            <strong>Level:</strong> {data?.level}
          </li>
          <li>
            <strong>Total Courses:</strong> {data?.total_course}
          </li>
        </ul>

        <Gap height={40} />

        <Button
          onClick={() => setmodalCourses(true)}
          style={{ marginRight: "20px" }}
        >
          Add Course
        </Button>

        <Container>
          <div className="col">
            <h1>Courses</h1>
            <ul>
              {data?.courses?.map((item, index) => {
                return (
                  <li key={index}>
                    <Button
                      onClick={() => deleteCourse(item.id)}
                      remove
                      style={{ marginRight: "20px" }}
                    >
                      X
                    </Button>
                    <p>{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </Wrapper>
      <form onSubmit={addCourse}>
        <Modal
          open={modalCourses}
          onClose={() => setmodalCourses(false)}
          title="Add Course"
        >
          <Select
            labelName="Course"
            name="course"
            value={state.course}
            fallbackText="Select Course"
            onClick={setState}
          >
            {Object.values(CLASSES?.data).map((item, index) => {
              return (
                <option value={item?.id} key={index}>
                  {item?.name}
                </option>
              );
            })}
          </Select>
        </Modal>
      </form>
      <form onSubmit={submit}>
        <Modal
          open={modalEditClass}
          onClose={() => seteditClass(false)}
          title="Edit Class"
        >
          <Input
            name="name"
            type="text"
            onChange={setState}
            value={state.name}
            placeholder="Flow Learn Name"
            labelName="Name"
          />

          <Gap height={10} />

          <Select
            labelName="Level"
            name="level"
            value={state.level}
            fallbackText="Select Flow Level"
            onClick={setState}
          >
            <option value="all level">All Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Select>

          <Gap height={16} />

          <ImageWrapper>
            <div className="item-wrap">
              <div className="image-preview">
                <div className="image">
                  {state.thumbnail ? (
                    <img
                      src={state.thumbnail}
                      alt="Preview"
                      height="200"
                      width="310"
                    />
                  ) : null}
                </div>
              </div>
              <div className="input">
                <span>
                  {state.previewThumbnail
                    ? state.previewThumbnail
                    : "Add your picture..."}
                </span>
                <div>
                  <input
                    type="file"
                    name="thumbnail"
                    ref={addPicture}
                    hidden
                    onChange={previewImage}
                  />
                  <button
                    type="button"
                    className="image-browse"
                    onClick={() => addPicture.current.click()}
                  >
                    Browse
                  </button>
                </div>
              </div>
            </div>
          </ImageWrapper>
        </Modal>
      </form>
      <ToastContainer />
    </>
  );
};

export default FlowDetail;
