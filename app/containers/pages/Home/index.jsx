import React, { useState, useContext, useEffect } from "react";
import { UNSAFE_NavigationContext } from "react-router-dom";

import Modal from "@/components/Modal";
// import Calendar from "@/components/Calendar";

const Home = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const { navigator } = useContext(UNSAFE_NavigationContext);

  useEffect(() => {
    console.log(navigator.block);
  }, [navigator]);

  return (
    <div>
      <div>Page Home</div>
      <button type="button" onClick={() => setOpenModal(true)}>
        Open Modal
      </button>
      <Modal isOpen={isOpenModal} onClose={() => setOpenModal(false)}>
        Hello there!
      </Modal>
      {/* <Calendar /> */}
    </div>
  );
};

export default Home;
