export function fetchCircle(history, id) {
  const token = localStorage.token;
  const reqObj = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };
  return dispatch => {
    dispatch({ type: "LOADING_CIRCLE" });
    return fetch(`https://circles-backend.herokuapp.com/circles/${id}`, reqObj)
      .then(res => res.json())
      .then(circle => {
        dispatch({ type: "CIRCLE_SET", circle });
        history.push(`/circles/${id}`);
      });
  };
}

export function newCircleFetch(data, history) {
  const token = localStorage.token;
  const reqObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      circle: {
        name: data.name,
        img_url: data.img_url
      }
    })
  };
  return dispatch => {
    dispatch({ type: "CREATING_CIRCLE" });
    return fetch("https://circles-backend.herokuapp.com/circles", reqObj)
      .then(res => res.json())
      .then(circle => {
        data.userIds.map(id => {
          createInvite(circle.circle.id, id);
        });
        dispatch({ type: "CIRCLE_SET", circle });
        history.push(`/circles/${circle.circle.id}`);
      });
  };
}

const createInvite = (circleId, userId) => {
  const token = localStorage.token;
  const inviteObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accepts: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      circle_invite: {
        circle_id: circleId,
        user_id: userId
      }
    })
  };
  fetch("https://circles-backend.herokuapp.com/circle_invites", inviteObj);
};
