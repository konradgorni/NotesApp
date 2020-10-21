import { db } from 'data/firebase/firebase';

export const fireStoreFetch = async (idUser) => {
  const docRef = db.collection('users').doc(idUser);
  return docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        
        return doc.data().notes;
      }
      return null;
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};
