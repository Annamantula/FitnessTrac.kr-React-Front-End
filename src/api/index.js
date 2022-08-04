const APIURL = `https://fitnesstrac-kr.herokuapp.com/api`;

export const registerPerson = async (username, password) => {
  const response = await fetch(`${APIURL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const result = await response.json();
  const token = result.token;
  return token;
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    const token = result.token;
    return token;
  } catch (error) {
    console.error("Trouble fetching users", error);
  }
};

export const getMyInfo = async (token) => {
  const response = await fetch(`${APIURL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  const data = result;

  return data;
};

export const fetchAllActivities = async () => {
  const response = await fetch(`${APIURL}/activities`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  const data = result;
  return data;
};

export const fetchAllRoutines = async () => {
  const response = await fetch(`${APIURL}/routines`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  const data = result;
  return data;
};

export const createRoutine = async (token, addRoutine) => {
  const response = await fetch(`${APIURL}/routines`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(addRoutine),
  });
  const result = await response.json();
  return result;
};

export const removeRoutine = async (token, routineId) => {
  const response = await fetch(`${APIURL}/routines/${routineId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
};

export const modifyRoutine = async (token, routineId, name, goal) => {
  const response = await fetch(`${APIURL}/routines/${routineId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      goal,
    }),
  });
  const result = await response.json();
  return result;
};

export const addActivitytoRoutine = async (
  activityId,
  count,
  duration,
  routineId
) => {
  const response = await fetch(`${APIURL}/routines/${routineId}/activities`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      activityId,
      count,
      duration,
    }),
  });
  const result = await response.json();
  return result;
};

export const RemoveActivityFromRoutine = async (token, routineActivityId) => {
    try{
    const response = await fetch(`${APIURL}/routine_activities/${routineActivityId}`, 
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    return result;
} catch(error){
    throw error
}
  };


  export const createNewActivity = async (token, addActivity) => {
    const response = await fetch(`${APIURL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(addActivity),
    });
    const result = await response.json();
    return result;
  }; 

  // const modifiedActivity = await modifyActivity(token, routineActivityId, count, duration)
  export const modifyActivity = async (token, routineActivityId, count, duration) => {
    const response = await fetch(`${APIURL}/routine_activities/${routineActivityId} `, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        count,
        duration,
    }),
    });
    const result = await response.json();
    return result;
  };
  