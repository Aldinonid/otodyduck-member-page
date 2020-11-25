import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import useForm from "helpers/hooks/useForm";
import courses from "constants/api/courses";
import media from "constants/api/medias";
import tools from "constants/api/tools";

import image2base64 from "utils/image2base64";
import {
  Gap,
  Modal,
  Input,
  Select,
  MultiSelect,
  MentorClassCard,
} from "components";
import { Wrapper, Button, ImageWrapper, CardList } from "./MyCourses";

const MyCourses = ({ data }) => {
  const history = useHistory();
  const USER = useSelector((state) => state.users);
  const addPicture = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useForm({
    name: "",
    type: "free",
    thumbnail: "",
    level: "",
    category: "",
    description: "",
    previewThumbnail: "",
  });
  const [toolCourse, settoolCourse] = useState([]);
  const [tool, setTool] = useState([]);

  //? Logic for Tools ?//
  useEffect(() => {
    tools
      .get()
      .then((res) => settoolCourse(res.data))
      .catch((err) => console.log(err));
  }, []);

  //* Assign "id, name" di toolCourse jadi "value, label" *//
  toolCourse.forEach((item) => {
    item.value = item.id;
    item.label = item.name;
  });

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

  async function submit(e) {
    e.preventDefault();

    const payload = {
      name: state.name,
      certificate: false,
      type: state.type,
      status: "draft",
      level: state.level,
      description: state.description,
      category: state.category,
      mentor_id: USER?.id,
      tool_id: [],
    };

    if (tool) {
      tool.map((item) => payload.tool_id.push(item.value));
    }

    if (state.thumbnail.indexOf("base64") > -1) {
      const thumbnail = await media.upload({
        image: state.thumbnail,
        imageType: "course",
      });
      payload.thumbnail = thumbnail.data.image;
    }

    courses
      .create(payload)
      .then((res) => {
        history.go();
      })
      .catch((err) => toast.error("Something went Wrong"));
  }

  return (
    <>
      <Wrapper>
        <h1 className="title">My Courses</h1>
        <Gap height={20} />
        <Button onClick={() => setIsOpen(true)}>Add New</Button>
        <Gap height={20} />

        <CardList>
          {data?.map?.((item, index) => (
            <MentorClassCard key={index} data={item} />
          ))}
        </CardList>
      </Wrapper>
      <form onSubmit={submit}>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Create New Course"
        >
          <Input
            name="name"
            type="text"
            onChange={setState}
            value={state.name}
            placeholder="Course Name"
            labelName="Title"
          />

          <Gap height={10} />

          <Select
            labelName="Type"
            name="type"
            value={state.type}
            fallbackText="Select Course Type"
            onClick={setState}
          >
            <option value="free">Free</option>
            <option value="premium">Premium</option>
          </Select>

          <Gap height={10} />

          <Select
            labelName="Level"
            name="level"
            value={state.level}
            fallbackText="Select Course Level"
            onClick={setState}
          >
            <option value="all level">All Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </Select>

          <Gap height={10} />

          <Input
            name="description"
            type="text"
            onChange={setState}
            value={state.description}
            placeholder="Description"
            labelName="Description"
          />

          <Gap height={10} />

          <Select
            labelName="Category"
            name="category"
            value={state.category}
            fallbackText="Select Course Category"
            onClick={setState}
          >
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="soft skill">Soft Skill</option>
          </Select>

          <Gap height={10} />

          <MultiSelect
            labelName="Tools"
            name="tools"
            placeholder="Select Tools For This Course"
            option={toolCourse}
            onChange={setTool}
          />

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

export default MyCourses;
