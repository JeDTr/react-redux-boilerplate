import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormContext } from "react-hook-form";

import Modal from "../Modal";
import Button from "../Button";

const Prompt = () => {
  const history = useHistory();

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
    if (isDirty) {
      const unblock = history.block((location) => {
        setPrompt({ location, unblock });
        return false;
      });
    }
  }, [isDirty]);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const confirmationMessage = "o/";

      // Gecko + IE
      const event = e || window.event;
      event.returnValue = confirmationMessage;
      /* Safari, Chrome, and other
       * WebKit-derived browsers */
      return "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <Modal isOpen={!!prompt}>
      <h2>Are you sure you want to leave this page?</h2>
      <Button onClick={handleLeave}>Leave</Button>
      <Button onClick={handleStay}>Stay</Button>
    </Modal>
  );
};

export default Prompt;
