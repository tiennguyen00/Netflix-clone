import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase.prod';

export default function useContent(target) {
  const [content, setContent] = useState([]);

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, target));
    const allContents = querySnapshot.docs.map((item) => ({
      ...item.data(),
      docId: item.id,
    }));
    setContent(allContents);
  }, []);
  return { [target]: content };
}
