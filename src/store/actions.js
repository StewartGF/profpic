export const getInstagramUserData = async ({ commit }, payload) => {
  let response = await fetch(`https://www.instagram.com/${payload}/?__a=1`);
  let data = await response.json();
  console.log(data.graphql);
  commit("SET_INSTAGRAM_USER_DATA", data.graphql);
};
export const getTumblrUserData = async ({ commit }, payload) => {
  let response = await fetch(`https://www.instagram.com/${payload}/?__a=1`);
  let data = await response.json();
  console.log(data.graphql);
  commit("SET_TUMBLR_USER_DATA", data.graphql);
};
