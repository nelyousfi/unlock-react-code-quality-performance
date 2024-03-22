import { useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const Modal = ({ onCloseModal }) => {
  return (
    <>
      <div>Modal 🎉</div>
      <button onClick={onCloseModal}>Close Modal</button>
    </>
  );
};

export default () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <button onClick={() => setModalVisible(true)}>Show Modal</button>
      <HeavyComponent />
      {modalVisible && <Modal onCloseModal={() => setModalVisible(false)} />}
      <HeavyComponent />
    </>
  );
};
