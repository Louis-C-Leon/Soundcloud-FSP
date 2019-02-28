export const checkRegistered = (mail) => {
  return $.ajax({
    url: 'api/check_registered',
    data: { user: {email: mail}},
  });
};