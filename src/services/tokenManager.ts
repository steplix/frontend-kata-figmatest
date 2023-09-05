export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // return axios.get(ME_URL);
  return typeof window !== 'undefined'
    ? JSON.parse(
        (localStorage.getItem('sessionUser') as string) ||
          (sessionStorage.getItem('sessionUser') as string),
      )
    : null;
}

export function setUserToken(newToken: { access_token: string; refresh_token: string }) {
  const user = getUserByToken();

  user.token.access_token = newToken.access_token;
  user.token.refresh_token = newToken.refresh_token;
  if (localStorage.getItem('sessionUser')) {
    localStorage.removeItem('sessionUser');
    localStorage.setItem('sessionUser', JSON.stringify(user));
  } else {
    sessionStorage.removeItem('sessionUser');
    sessionStorage.setItem('sessionUser', JSON.stringify(user));
  }
}

export function removeUserToken() {
  localStorage.removeItem('sessionUser');
  sessionStorage.removeItem('sessionUser');
}
