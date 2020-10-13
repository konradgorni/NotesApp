import { db } from 'data/firebase/firebase';

export const fireStoreFetch = async (idUser) => {
  const docRef = db.collection('users').doc(idUser);
  return docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log(doc.data());
        return doc.data().notes;
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error);
    });
};
