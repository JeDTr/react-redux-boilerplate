import React, { useEffect, useState } from "react";
import { createBrowserHistory } from "history"
import { useFormContext } from "react-hook-form";

import Modal from "../Modal";
import Button from "../Button";

const history = createBrowserHistory();

const Prompt = () => {

  const [prompt, setPrompt] = useState(null);

  const {
    formState: { isDirty },
  } = useFormContext();

  const handleStay = () => {
    setPrompt(null);
  };

  const handleLeave = () => {
    setPrompt(null);
    prompt.unblock();
    history.push(prompt.location);
  };

  useEffect(() => {
    let unblock;

    if (isDirty) {
      unblock = history.block(({ location }) => {
        // setPrompt({ location, unblock });
        // return false;
      });
    }

    return unblock;
  }, [isDirty]);

  // useEffect(() => {
  //   const handleBeforeUnload = (e) => {
  //     const confirmationMessage = "o/";

  //     // Gecko + IE
  //     const event = e || window.event;
  //     event.returnValue = confirmationMessage;
  //     /* Safari, Chrome, and other
  //      * WebKit-derived browsers */
  //     return "";
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  // }, []);

  return (
    <Modal isOpen={!!prompt}>
      <h2>Are you sure you want to leave this page?</h2>
      <Button onClick={handleLeave}>Leave</Button>
      <Button onClick={handleStay}>Stay</Button>
    </Modal>
  );
};

export default Prompt;
