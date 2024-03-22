import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

const Modal = forwardRef((_, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setVisible(true),
  }));

  if (!visible) return null;

  return (
    <>
      <div>Modal 🎉</div>
      <button onClick={() => setVisible(false)}>Close Modal</button>
    </>
  );
});

export default () => {
  const modalRef = useRef(null);

  return (
    <>
      <button onClick={() => modalRef.current?.show()}>Show Modal</button>
      <HeavyComponent />
      <Modal ref={modalRef} />
      <HeavyComponent />
    </>
  );
};
