export const login = (user) => {
  return $.ajax({
    url: 'api/session',
    method: 'POST',
    data: { user },
  });
}

export const signup = (user) => {
  return $.ajax({
    url: 'api/users',
    method: 'POST',
    data: { user },
  });
}

export const logout = () => {
  return $.ajax({
    url: 'api/session',
    method: 'DELETE',
  });
}

export const checkEmail = (email) => {
  const regX = /.+@.+\..+/;
  if(email === "") {
    return(["Enter your email address."]);
  } else if (!regX.test(email)){
    return (["Enter a valid email address."]);
  } else {
    return []
  }
}

export const checkPassword = (pass) => {
  if(pass === "") {
    return (["Enter a password"]);
  } else if (pass.length < 6) {
    return (["Use at least 6 characters."]);
  } else {
    return []
  }
}

export const checkScreenName = (name) => {
  if(name === "") {
    return(["Enter your display name. You can change it later."]);
  } else {
    return []
  }
}
