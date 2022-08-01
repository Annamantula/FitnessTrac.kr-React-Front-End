import React, { useEffect } from "react";
import { getMyRoutines } from "../api";

const MyRoutines = ({ myInfo, setMyInfo }) => {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      async function getMyInfo() {
        const myNewInfo = await getMyRoutines(token);
        setMyInfo(myNewInfo);
      }
      getMyInfo();
    }
  }, []);

  
  return (
    <div id="myRoutinesBox">
        <h1 className="introTitle">Welcome {myInfo.username}!</h1>
      <h2 id="myRoutinesTitle">Here are your routines:</h2>
      {myInfo && myInfo.messages && myInfo.messages.length ? (
        myInfo.messages.map((message, index) => {
          return (
            <div key={`mymessagesmap: ${index}`}>
              {message.fromUser.username !== myInfo.username ? (
                <div id="myMessages" >
                  <h3>From: {message.fromUser.username}</h3>
                  <h3>In Response to: {message.post.title}</h3>
                  <p>Message: {message.content}</p>
                </div>
              ) : null}
            </div>
          );
        })
      ) : (
        <div id="noRoutines">You have not created any routines at this time.</div>
      )}
     
    </div>
  );
};
export default MyRoutines;