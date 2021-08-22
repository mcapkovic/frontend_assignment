import React from "react";
import { useSelector } from "react-redux";
import { shelterForm } from "../formSlice";

function postData(url = "", data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
}

function useFormPost(url) {
  const { firstName, lastName, email, phone, value, shelterID } =
    useSelector(shelterForm);
  const [{ messages, status, errors, succes }, setValues] = React.useState({});

  async function post(callback = () => {}) {
    const response = await postData(url, {
      firstName,
      lastName,
      email,
      phone,
      value,
      shelterID,
    });
    const data = await response.json();
    const status = response.status;
    const messages = data.messages;
    callback();

    setValues({
      status: response.status,
      messages: data.messages,
      errors: status === 200 ? null : messages,
      succes: status === 200 ? messages : null,
    });
  }
  return { messages, status, post, errors, succes };
}

export default useFormPost;
