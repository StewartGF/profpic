export const getInstagramUserData = async ({ commit }, payload) => {
  //seteo el state en loading
  commit("SET_LOADING", true);
  let response = await fetch(`https://www.instagram.com/${payload}/?__a=1`);
  if (response.status == 404) {
    commit("SET_DOES_NOT_EXISTS", 2);
    commit("SET_LOADING", false); //se cumplió el objetivo, seteo el loading en false
    console.log(
      "%c oops un errorsillo, pero lo lanza cuando el usuario no existe, así que 🤷‍♂️🤐 ",
      "background: #41B883; color: white; font-size:14px"
    );
  } else {
    let data = await response.json();
    commit("SET_INSTAGRAM_USER_DATA", data.graphql);
    commit("SET_DOES_NOT_EXISTS", 1);
    commit("SET_LOADING", false); //se cumplió el objetivo, seteo el loading en false
  }
};

export const getTumblrUserData = async ({ commit }, payload) => {
  //seteo el loading
  commit("SET_LOADING", true);
  let response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.tumblr.com/v2/blog/${payload}.tumblr.com/avatar/512`
  );
  console.log(
    "%c--------  response",
    "background: #41B883; color: white; font-size:14px"
  );
  console.log(response.status);
  if (response.status == 404) {
    commit("SET_TUMBLR_USER_DATA", { exists: false });
    commit("SET_LOADING", false);
  } else {
    commit("SET_TUMBLR_USER_DATA", {
      exists: true,
      url: `https://api.tumblr.com/v2/blog/${payload}.tumblr.com/avatar/512`,
      username: payload,
    });
    commit("SET_LOADING", false);
  }
};
