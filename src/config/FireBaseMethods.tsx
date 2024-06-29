import {
    getDatabase,
    onValue,
    push,
    ref,
    remove,
    set,
  } from "firebase/database";
  import app from "./FireBaseConfig";
  
  //Here we are sending data to the firebase dataBase
  const db = getDatabase(app);
  export const sendData = (nodeName: string, data: any) => {
    return new Promise((resolve, reject) => {
      data.uid = push(ref(db, `${nodeName}`)).key;
      const reference = ref(db, `${nodeName}/${data.uid}`);
  
      set(reference, data)
        .then(() => {
          resolve(data);
        })
        .catch((err:any) => {
          reject(err);
        });
    });
  };
  export const getData = (nodeName: string, uid?: any) => {
    return new Promise((resolve, reject) => {
      const reference = ref(db, `${nodeName}/${uid ? uid : ""}`);
      onValue(reference, (snap:any) => {
        if (snap.exists()) {
          if (uid) {
            resolve(snap.val());
          } else {
            resolve(Object.values(snap.val()));
          }
        } else {
          reject({ message: "Data not found" });
        }
      });
    });
  };
  
  export const editData = (nodeName: string, uid: any, body: any) => {
    return new Promise((resolve, reject) => {
      const reference = ref(db, `${nodeName}/${uid}`);
      set(reference, body)
        .then(() => {
          resolve({ message: "Record edited Successfully" });
        })
        .catch((err:any) => {
          reject(err);
        });
    });
  };
  
  export const delData = (nodeName: string, uid: any) => {
    return new Promise((resolve, reject) => {
      const reference = ref(db, `${nodeName}/${uid}`);
      remove(reference)
        .then(() => {
          resolve("Record deleted");
        })
        .catch((err:any) => {
          reject(err);
        });
    });
  };
  