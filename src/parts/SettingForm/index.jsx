import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import useForm from "helpers/hooks/useForm";
import fieldErrors from "helpers/fieldErrors";
import users from "constants/api/users";
import media from "constants/api/medias";

import { populateProfile } from "store/actions/users";

import image2base64 from "utils/image2base64";
import { Gap, Input, Select } from "components";
import DefaultUser from "assets/images/default-user.png";
import {
  SettingWrapper,
  ImageWrapper,
  InputWrapper,
  Button,
} from "./SettingForm";

const SettingForm = ({ details }) => {
  const dispatch = useDispatch();
  const addPicture = useRef(null);
  const [errors, setErrors] = useState(null);

  const [state, setKey, setState] = useForm({
    name: details?.name ?? "",
    email: details?.email ?? "",
    password: details?.password ?? "",
    job: details?.job ?? "",
    otherJob: details?.otherJob ?? "",
    avatar: details?.avatar ?? "",
    previewAvatar: "",
  });

  function previewImage(e) {
    e.persist();
    image2base64(e.target.files[0]).then((image) => {
      setKey({
        target: {
          name: e.target.name,
          value: image,
        },
      });
    });
    state.previewAvatar = e.target.files[0].name;
  }

  async function submit(e) {
    e.preventDefault();

    const payload = {
      name: state.name,
      email: state.email,
      password: state.password,
      job: state.job,
    };

    if (payload.job === "others") payload.job = state.otherJob;

    //TODO: Kerjain bagian upload image

    if (state.avatar.indexOf("base64") > -1) {
      const avatar = await media.upload({
        image: state.avatar,
        imageType: "user",
      });
      payload.avatar = avatar.data.image;
    }

    users
      .update(payload)
      .then((res) => {
        toast.success("Profile successfully updated");
        setState({
          ...state,
          password: "",
        });
        setErrors(null);
        dispatch(
          populateProfile({
            ...details,
            ...res.data,
          })
        );
      })
      .catch((error) => setErrors(error?.response?.data?.message ?? "errors"));
  }

  const ERRORS = fieldErrors(errors);

  return (
    <SettingWrapper>
      <h2 className="title">Settings</h2>
      <p className="sub-title">Secure your data informations</p>
      <Gap height={20} />

      <ImageWrapper>
        <div className="item-wrap">
          <div className="image-preview">
            <div className="image">
              {state.avatar ? (
                <img src={state.avatar} alt="Preview" height="96" width="96" />
              ) : (
                <img src={DefaultUser} alt="Preview" />
              )}
            </div>
          </div>
          <div className="input">
            <span>
              {state.previewAvatar
                ? state.previewAvatar
                : "Add your picture..."}
            </span>
            <div>
              <input
                type="file"
                name="avatar"
                ref={addPicture}
                hidden
                onChange={previewImage}
              />
              <button
                className="image-browse"
                onClick={() => addPicture.current.click()}
              >
                Browse
              </button>
            </div>
          </div>
        </div>
      </ImageWrapper>

      <Gap height={30} />

      <form onSubmit={submit}>
        <InputWrapper>
          <Input
            name="name"
            type="text"
            onChange={setKey}
            value={state?.name}
            placeholder="Your Name"
            labelName="Full Name"
            error={ERRORS?.name?.message}
          />

          <Gap height={16} />

          <Input
            name="email"
            type="email"
            onChange={setKey}
            value={state?.email}
            placeholder="Your Email Address"
            labelName="Email Address"
            error={ERRORS?.email?.message}
          />

          <Gap height={16} />

          <Input
            name="password"
            type="password"
            onChange={setKey}
            value={state?.password}
            placeholder="Your Password"
            labelName="Password"
            error={ERRORS?.password?.message}
          />

          <Gap height={16} />

          <Select
            labelName="Occupation"
            name="job"
            value={state?.job}
            fallbackText="Select your Focus"
            onClick={setKey}
          >
            <option value="">Select your focus</option>
            <option value="Web Designer">Web Designer</option>
            <option value="Front-End Developer">Front-End Developer</option>
            <option value="Back-End Developer">Back-End Developer</option>
            <option value="Full-stack Developer">Full-stack Developer</option>
            <option value="others">Others</option>
          </Select>

          {state?.job === "others" && (
            <>
              <Gap height={16} />

              <Input
                name="otherJob"
                type="text"
                onChange={setKey}
                value={state?.otherJob}
                placeholder="Your Occupation"
                labelName="Other's Occupation"
              />
            </>
          )}

          <Gap height={30} />

          <Button type="submit">Save Changes</Button>
        </InputWrapper>
      </form>
    </SettingWrapper>
  );
};

export default SettingForm;
