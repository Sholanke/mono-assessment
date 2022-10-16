import { useState } from "react";

export default function useModal({ defaultValue = false }) {
  const [modalIsVisible, setModalVisibility] = useState(defaultValue);

  const openModal = () => {
    setModalVisibility(true);
  };
  const closeModal = () => {
    setModalVisibility(false);
  };

  return [modalIsVisible, openModal, closeModal];
}
