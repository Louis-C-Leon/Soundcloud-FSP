export const checkRegistered = (mail) => {
  return $.ajax({
    url: 'api/check_registered',
    data: { user: {email: mail}},
  })
};

export const fetchUser = (id) => {
  return $.ajax({
    url: `api/users/${id}`,
  })
}

export const fetchUsers = () => {
  return $.ajax({
    url: "api/users",
  });
}