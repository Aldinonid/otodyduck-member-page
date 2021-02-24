import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import useForm from "helpers/hooks/useForm";
import formatThousands from "helpers/formatThousands";
import { courses, medias, chapters, lessons } from "constants/api";
import { changeStatus } from "store/actions/classes";
import image2base64 from "utils/image2base64";

import { Gap, Modal, Input, Select, MultiSelect } from "components";
import { Wrapper, Container, Button, ImageWrapper } from "./MyCourseDetail";

const MyCourseDetail = ({ data }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const USER = useSelector((state) => state.users);
  const TOOLS = useSelector((state) => state.tools);

  const addPicture = useRef(null);
  const [modalChapter, setmodalChapter] = useState(false);
  const [modalVideo, setmodalVideo] = useState(false);
  const [modalEditClass, seteditClass] = useState(false);
  const [state, setState] = useForm({
    id: data?.id ?? "",
    name: data?.name ?? "",
    type: data?.type ?? "free",
    thumbnail: data?.thumbnail ?? "",
    level: data?.level ?? "",
    price: data?.price ?? 0,
    category: data?.category ?? "",
    description: data?.description ?? "",
    tools: data?.tools ?? [],
    previewThumbnail: "",
  });
  const [chapter, setchapter] = useForm({
    course_id: data?.id,
    name: "",
  });
  const [lesson, setlesson] = useForm({
    name: "",
    video: "",
    chapter_id: 0,
  });
  const [tool, setTool] = useState([]);

  //* Assign "id, name" di toolCourse jadi "value, label" *//
  TOOLS.data.forEach((item) => {
    item.value = item.id;
    item.label = item.name;
  });

  if (state.tools) {
    state.tools.forEach((item) => {
      item.value = item.id;
      item.label = item.name;
    });
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

  function publishClass() {
    const payload = {
      name: state.name,
      status: "published",
      tool_id: [],
    };

    if (state.tools.length === 0) {
      return toast.error("Please add tools before publish !");
    } else {
      state.tools.forEach((item) => payload.tool_id.push(item.id));
    }

    courses.edit(state.id, payload).then((res) => {
      dispatch(changeStatus(res.data.status));
      toast.success("Class has been Published !");
    });
  }

  function draftClass() {
    const payload = {
      name: state.name,
      status: "draft",
      tool_id: [],
    };

    state.tools.forEach((item) => payload.tool_id.push(item.id));

    courses.edit(state.id, payload).then((res) => {
      dispatch(changeStatus(res.data.status));
      toast.warning("Class has been Drafted !");
    });
  }

  //? Chapter Function ?//
  function submitChapter(e) {
    e.preventDefault();

    chapters
      .create(chapter)
      .then((res) => history.go())
      .catch((err) => toast.error("Please fill in chapter name"));
  }

  function deleteChapter(e) {
    chapters
      .delete(e)
      .then(history.go())
      .catch((err) => toast.error(err?.response?.data?.message));
  }

  //? Lessons Function ?//
  function submitLesson(e) {
    e.preventDefault();

    lessons
      .create(lesson)
      .then((res) => history.go())
      .catch((err) => toast.error("Please fill in all field"));
  }

  function deleteLesson(e) {
    lessons
      .delete(e)
      .then(history.go())
      .catch((err) => toast.error(err?.response?.data?.message));
  }

  function deleteClass() {
    courses.delete(state.id).then((res) => history.goBack());
  }

  async function submit(e) {
    e.preventDefault();
    const payload = {
      name: state.name,
      certificate: false,
      type: state.type,
      status: data?.status,
      price: state.price,
      level: state.level,
      description: state.description,
      category: state.category,
      mentor_id: USER?.id,
      tool_id: [],
    };

    if (tool) {
      tool.map((item) => payload.tool_id.push(item.value));
    } else {
      return toast.error("Please fill in Tools");
    }

    if (state.thumbnail.indexOf("base64") > -1) {
      const thumbnail = await medias.upload({
        image: state.thumbnail,
        imageType: "course",
      });
      payload.thumbnail = thumbnail.data.image;
    }

    courses
      .edit(state.id, payload)
      .then((res) => history.go())
      .catch((err) => toast.error(err?.response?.data?.message));
  }

  return (
    <>
      <Wrapper>
        <h1 className="title">{data?.name}</h1>
        <Gap height={30} />
        <Button onClick={() => seteditClass(true)}>Edit Class</Button>
        <Button onClick={deleteClass} remove style={{ marginLeft: 20 }}>
          Delete Class
        </Button>
        <Gap height={30} />

        <img src={data?.thumbnail} alt={data?.name ?? "Class Name"} />
        <Gap height={10} />
        <ul>
          <li>
            <strong>Type:</strong> {data?.type}
          </li>
          <li>
            <strong>Level:</strong> {data?.level}
          </li>
          <li>
            <strong>Price:</strong> {`Rp. ${formatThousands(data?.price)}`}
          </li>
          <li>
            <strong>Status:</strong> {data?.status}
          </li>
          <li>
            <strong>Category:</strong> {data?.category}
          </li>
          <li>
            <strong>Description:</strong> {data?.description}
          </li>
          <li>
            <strong>Total Videos:</strong> {data?.total_videos}
          </li>
        </ul>
        <Gap height={20} />
        {data?.status === "draft" ? (
          <Button onClick={publishClass}>Publish Class</Button>
        ) : (
          <Button onClick={draftClass} remove>
            Revert Class
          </Button>
        )}

        <Gap height={40} />

        <Button
          onClick={() => setmodalChapter(true)}
          style={{ marginRight: "20px" }}
        >
          Add Chapter
        </Button>
        <Button onClick={() => setmodalVideo(true)}>Add Lesson</Button>

        <Container>
          <div className="col">
            <h1>Chapters</h1>
            <ul>
              {data?.chapter?.map((item, index) => {
                return (
                  <li key={index}>
                    <Button
                      onClick={() => deleteChapter(item.id)}
                      remove
                      style={{ marginRight: "20px" }}
                    >
                      X
                    </Button>
                    {/* <h4>{`${index + 1}.`}</h4> */}
                    <p>{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col">
            <h1>Lessons</h1>
            <ul>
              {data?.chapter?.map((item) => {
                return item?.lesson.map((lesson, index) => {
                  return (
                    <li key={index}>
                      <Button
                        onClick={() => deleteLesson(lesson.id)}
                        remove
                        style={{ marginRight: "20px" }}
                      >
                        X
                      </Button>
                      {/* <h4>{`${index + 1}.`}</h4> */}
                      <p>{lesson.name}</p>
                    </li>
                  );
                });
              })}
            </ul>
          </div>
        </Container>
      </Wrapper>
      <form onSubmit={submitChapter}>
        <Modal
          open={modalChapter}
          onClose={() => setmodalChapter(false)}
          title="Create New Chapter"
        >
          <Input
            name="name"
            type="text"
            onChange={setchapter}
            value={chapter.name}
            placeholder="Name"
            labelName="Chapter Name"
          />
        </Modal>
      </form>
      <form onSubmit={submitLesson}>
        <Modal
          open={modalVideo}
          onClose={() => setmodalVideo(false)}
          title="Create New Video"
        >
          <Input
            name="name"
            type="text"
            onChange={setlesson}
            value={lesson.name}
            placeholder="Name"
            labelName="Video Title"
          />

          <Gap height={10} />

          <Input
            name="video"
            type="text"
            onChange={setlesson}
            value={lesson.video}
            placeholder="Video ID"
            labelName="Video Youtube ID"
          />

          <Select
            labelName="Chapter"
            name="chapter_id"
            value={lesson.chapter_id}
            fallbackText="Select Chapter for this lesson"
            onClick={setlesson}
          >
            {data?.chapter?.map((item, index) => {
              return (
                <option key={index} value={item.id}>
                  {item.name}
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
            option={TOOLS.data}
            onChange={setTool}
            defaultValue={state.tools}
          />

          <Gap height={10} />

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

          {state.type === "premium" && (
            <>
              {" "}
              <Gap height={10} />
              <Input
                name="price"
                type="number"
                onChange={setState}
                value={state.price}
                placeholder="Course Price"
                labelName="Price"
              />{" "}
            </>
          )}

          <Gap height={10} />

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

export default MyCourseDetail;
