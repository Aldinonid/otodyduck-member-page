import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import useForm from "helpers/hooks/useForm";
import { medias, flows } from "constants/api";

import image2base64 from "utils/image2base64";
import { Gap, Modal, Input, Select, FlowCard } from "components";
import { Wrapper, Button, CardList, ImageWrapper } from "./Flow";

const Flow = ({ data }) => {
  const history = useHistory();
  const addPicture = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useForm({
    name: "",
    level: "",
    image: "",
    previewThumbnail: "",
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
      level: state.level,
      tool_id: [],
    };

    if (state.image.indexOf("base64") > -1) {
      const image = await medias.upload({
        image: state.image,
        imageType: "flow",
      });
      payload.image = image.data.image;
    }

    flows
      .create(payload)
      .then((res) => {
        history.go();
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  }

  return (
    <>
      <Wrapper>
        <h1 className="title">Flow Learn</h1>
        <Gap height={20} />
        <Button onClick={() => setIsOpen(true)}>Add New</Button>
        <Gap height={20} />
        <CardList>
          {Object.values(data)?.map?.((item, index) => (
            <FlowCard key={index} data={item} />
          ))}
        </CardList>
      </Wrapper>
      <form onSubmit={submit}>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Create New Flow Learn"
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
                  {state.image ? (
                    <img
                      src={state.image}
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
                    name="image"
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

export default Flow;
