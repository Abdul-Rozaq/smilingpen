import { useEffect, useState } from "react";
import { db, storage, timestamp } from "../../utils/firebase";

const useStorage = (file, urlString, setImage) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = storage.ref(`images/${file.name}`);
    let collectionRef;

    if (urlString === "fact") collectionRef = db.collection("fact");

    if (urlString === "fashion") collectionRef = db.collection("fashion");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
        console.log(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        if (urlString === "fact") {
          await collectionRef.add({ url, createdAt });
          setUrl(url);
        }
        if (urlString === "fashion") {
          await collectionRef.add({ url, createdAt });
          setUrl(url);
        }
        if (urlString === "motivation") setImage(url);
      }
    );
  }, [file, urlString, setImage]);

  return { progress, url, error };
};

export default useStorage;
