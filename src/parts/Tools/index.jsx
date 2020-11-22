import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import useForm from "helpers/hooks/useForm";
import { medias, tools } from "constants/api";

import image2base64 from "utils/image2base64";
import { Gap, Modal, Input, ToolCard } from "components";
import { Wrapper, Button, CardList, ImageWrapper } from "./Tools";

const Tools = ({ data }) => {
  const history = useHistory();
  const addPicture = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useForm({
    name: "",
    url: "",
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
      url: state.url,
    };

    if (state.image.indexOf("base64") > -1) {
      const image = await medias.upload({
        image: state.image,
        imageType: "tool",
      });
      payload.image = image.data.image;
    }

    tools
      .create(payload)
      .then((res) => {
        history.go();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Wrapper>
        <h1 className="title">Tools</h1>
        <Gap height={20} />
        <Button onClick={() => setIsOpen(true)}>Add New</Button>
        <Gap height={20} />
        <CardList>
          {Object.values(data.data)?.map?.((item, index) => (
            <ToolCard key={index} data={item} />
          ))}
        </CardList>
      </Wrapper>
      <form onSubmit={submit}>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          title="Create New Tool"
        >
          <Input
            name="name"
            type="text"
            onChange={setState}
            value={state.name}
            placeholder="Tool Name"
            labelName="Name"
          />

          <Gap height={16} />

          <Input
            name="url"
            type="text"
            onChange={setState}
            value={state.description}
            placeholder="Tool URL Address"
            labelName="URL"
          />

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
    </>
  );
};

export default Tools;
