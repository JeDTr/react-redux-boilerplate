import React, { useState } from "react";

import Modal from "@/components/Modal";

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
    </div>
  );
};

export default Home;
