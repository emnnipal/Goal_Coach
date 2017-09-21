import * as firebase from 'firebase';

// const config = {
//   apiKey: "AIzaSyBAgifYpCJW9dqraezL_zc-pDK3JPs3f0E",
//   authDomain: "goalcoach-d442d.firebaseapp.com",
//   databaseURL: "https://goalcoach-d442d.firebaseio.com",
//   projectId: "goalcoach-d442d",
//   storageBucket: "",
//   messagingSenderId: "313154438567"
// };

const config = {
  apiKey: "AIzaSyDCIJPy1S8W2IoTj_2BiChI5XKjCk4FvZY",
  authDomain: "goalcoach-ac5d1.firebaseapp.com",
  databaseURL: "https://goalcoach-ac5d1.firebaseio.com",
  projectId: "goalcoach-ac5d1",
  storageBucket: "goalcoach-ac5d1.appspot.com",
  messagingSenderId: "118687677425"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
