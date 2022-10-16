import React, { createContext, useContext, useState } from "react";
import { BaseToast } from "../components/ui/baseToast";
import uuid from "react-uuid";
import { deleteItemById } from "../utils/dataTypes";

const toastContext = createContext([]);

export default function ToastProvider({ children }) {
  const [allToast, setToast] = useState([]);

  const addToast = (toast) => {
    if (toast) {
      setToast((prev) => [...prev, { ...toast, id: uuid() }]);
    }
  };

  const deleteToast = (toastToDelete) => {
    const filteredToasts = deleteItemById(toastToDelete.id, allToast);
    setToast(filteredToasts);
  };

  return (
    <toastContext.Provider value={{ allToast, addToast, deleteToast }}>
      {children}
      <BaseToast />
    </toastContext.Provider>
  );
}

export const useToast = () => {
  return useContext(toastContext);
};
