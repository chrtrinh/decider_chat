import { auth } from "./firebase";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Chat from "./Chat";
import { selectUser, login, logout } from "./features/userSlice";
import Login from "./Login";
import Sidebar from "./Sidebar";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //Logged In
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        //Logged Out
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {user ? (
        <div className="app__container">
          <Sidebar />
          <Chat />
        </div>
      ) : (
        <h2>
          <Login />
        </h2>
      )}
    </div>
  );
}

export default App;
