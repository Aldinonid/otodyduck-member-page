import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import useForm from "helpers/hooks/useForm";
import { medias, tools } from "constants/api";
import image2base64 from "utils/image2base64";

import { Gap, Modal, Input } from "components";
import { fetchTools } from "store/actions/tools";
import { Wrapper, Button, ImageWrapper } from "./ToolDetail";

const ToolDetail = ({ details }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const addPicture = useRef(null);
  const [modal, setmodal] = useState(false);

  const [state, setState] = useForm({
    id: details?.id,
    name: details?.name ?? "",
    url: details?.url ?? "",
    image: details?.image ?? "",
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
      image: state.image,
    };

    if (state.image.indexOf("base64") > -1) {
      const thumbnail = await medias.upload({
        image: state.image,
        imageType: "tool",
      });
      payload.image = thumbnail.data.image;
    }

    tools.edit(state.id, payload).then((res) => {
      toast.success("Tool has been edited !");
      dispatch(fetchTools(res.data));
      setmodal(false);
    });
  }

  function deleteTool() {
    tools.delete(state.id).then((res) => history.goBack());
  }

  return (
    <>
      <Wrapper>
        <h1 className="title">{details?.name}</h1>
        <Gap height={30} />
        <Button onClick={() => setmodal(true)}>Edit Tool</Button>
        <Button onClick={deleteTool} remove style={{ marginLeft: 20 }}>
          Delete Tool
        </Button>
        <Gap height={30} />
        <img src={details?.image} alt={details?.name ?? "Tool Name"} />
        <Gap height={20} />
        <ul>
          <li>
            <strong>Url:</strong>{" "}
            <a
              href={`${details?.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {details?.url}
            </a>
          </li>
        </ul>
      </Wrapper>
      <form onSubmit={submit}>
        <Modal open={modal} onClose={() => setmodal(false)} title="Edit Tool">
          <Input
            name="name"
            type="text"
            onChange={setState}
            value={state.name}
            placeholder="Name"
            labelName="Tool Name"
          />

          <Gap height={10} />

          <Input
            name="url"
            type="url"
            onChange={setState}
            value={state.url}
            placeholder="URL"
            labelName="Tool URL"
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
      <ToastContainer />
    </>
  );
};

export default ToolDetail;
