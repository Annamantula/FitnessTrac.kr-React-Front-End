import React, { useEffect, useState } from "react";
import {
  RemoveActivityFromRoutine,
  fetchAllActivities,
  getMyInfo,
} from "../api";

//Inconsistensy: bug. In one specific case you need to refresh in order to get a clean delete. 
// If Nick is not who is grading this, please ask him about this bug.

const RemoveActivity = ({
  routineActivityId,
  theOnlyRoutine,
  setTheOnlyRoutine,
}) => {
  return (
    <button
      onClick={async (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        let response = await RemoveActivityFromRoutine(
          token,
          routineActivityId
        );
        const updateActivities = theOnlyRoutine.activities.filter(
          (activity) => activity.routineActivityId != routineActivityId
        );
        setTheOnlyRoutine({ ...theOnlyRoutine, activities: updateActivities });
      }}
    id ="rmvActvt">
      Remove Activity
    </button>
  );
};

export default RemoveActivity;
