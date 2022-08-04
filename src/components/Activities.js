import React, { useEffect, useState } from "react";
import { fetchAllActivities } from "../api";
import { NavLink } from "react-router-dom";
import { CreateActivity } from "./";


const Activities = ({ activities, setActivities, isLoggedIn}) => {
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
      {isLoggedIn ? //  setActivities, activities
         <NavLink to="/CreateActivity">Click Here to Create New Activity</NavLink>
      : null}
      <h3>Activities</h3>
      {getActivities}
    </div>
  );
};
export default Activities;
