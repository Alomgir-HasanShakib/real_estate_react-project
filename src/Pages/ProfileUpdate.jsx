import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Contexts/Authentication/Authentication";
import { useForm } from "react-hook-form";

const ProfileUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { updateUserProfile } = useContext(AuthContext);

  const handleUpdate = (data) => {
    const { name, photourl } = data;

    if (name) {
      updateUserProfile(name);
    } else if (photourl) {
      updateUserProfile(name, photourl);
    }
  };
  return (
    <div className="max-w-screen-sm bg-lighten p-4 md:p-16 mx-auto mt-24 rounded-md">
      <Helmet>
        <title>Your Homies | ProfileUpdate</title>
      </Helmet>
      <h2 className="md:text-3xl font-bold text-primary pb-10 text-center">
        Update Your Profile Here
      </h2>
      <div>
        <form className="space-y-2" onSubmit={handleSubmit(handleUpdate)}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Photo Url"
              {...register("photourl")}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="name"
              {...register("name")}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email")}
            />
          </label>

          <input
            type="submit"
            value="Log In"
            className="btn w-full bg-primary text-white hover:bg-transparent hover:border-primary hover:text-primary"
          />
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
