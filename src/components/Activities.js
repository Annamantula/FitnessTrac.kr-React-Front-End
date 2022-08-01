import React, { useEffect, useState } from "react";
import { fetchAllActivities } from "../api";
import { NavLink } from "react-router-dom";

const Activities = ({ activities, setActivities, isLoggedIn, username }) => {
  async function getAllActivities() {
    const fetchActivities = await fetchAllActivities();
    setActivities(fetchActivities);
  }
  useEffect(() => {
    getAllActivities();
  }, []);
//   console.log(activities, "successfully used the api call from activities.js")
  let getActivities = [];

    getActivities = activities.map((activity) => {
        console.log(activity.name, "is this single activity")
      return (
          <h1>Hello World</h1>
        // <div className="activitydescriptionBox" key={activity.id}>
        //   <h5 className="name">Name: {activity.name}</h5>
        //   <p className="description">Description: {activity.description}</p>
        // </div>
      );
    });
  
};
export default Activities;
