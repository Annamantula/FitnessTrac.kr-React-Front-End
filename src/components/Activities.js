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
  let getActivities = [];

  getActivities = activities.map((activity) => {
    return (
      <div
        className="activitydescriptionBox"
        key={`activityMap = ${activity.id}`}
      >
        <h5 className="name">Name: {activity.name}</h5>
        <p className="description">Description: {activity.description}</p>
      </div>
    );
  });
  return (
    <div>
      <h3>Activities</h3>
      {getActivities}
    </div>
  );
};
export default Activities;
