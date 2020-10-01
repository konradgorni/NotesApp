import { db } from 'data/firebase/firebase';
// import { useSelector } from 'react-redux';
// import { showName, selectTasks } from 'data/testSlice';

export const fireStoreFetch = async (idUser) => {
  const docRef = db.collection('test').doc(idUser);
  return docRef
    .get()
    .then(function (doc) {
      if (doc.exists) {
        return doc.data();
      } else {
        console.log('No such document!');
      }
    })
    .catch(function (error) {
      console.log('Error getting document:', error);
    });
};
