import React, { useState } from "react";

import Modal from "@/components/Modal";
import Calendar from "@/components/Calendar";

const Home = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <div>
      <div>Page Home</div>
      <button type="button" onClick={() => setOpenModal(true)}>
        Open Modal
      </button>
      <Modal isOpen={isOpenModal} onClose={() => setOpenModal(false)}>
        Hello there!
      </Modal>
      <Calendar />
    </div>
  );
};

export default Home;
