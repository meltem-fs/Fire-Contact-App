import firebase from "./firebase";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";

export const AddUser = (value) => {
  const db = getDatabase();
  const userRef = ref(db, "user");
  const newUserRef = push(userRef);

  set(newUserRef, {
    name: value.name,
    phone: value.phone,
    gender: value.gender,
  });
  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
};

export const GetUser = () => {
  const [contactList, setContactList] = useState();
  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, "user");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const baglantiArray = [];

      for (let id in data) {
        baglantiArray.push({ id, ...data[id] });
      }
      setContactList(baglantiArray);
    });
  }, []);
  return { contactList };
};
export const DeleteUser = (id) => {
  const db = getDatabase();
  const userRef = ref(db, "user");
  remove(ref(db, "user/" + id));

  // Toastify("Kullanıcı bilgisi silindi")
};

export const EditUser = (info) => {
  const db = getDatabase();
  const updates = {};

  updates["user/" + info.id] = info;
  return update(ref(db), updates);
};
