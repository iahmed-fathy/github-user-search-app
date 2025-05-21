import setMessage from "./setMassage.js";
import setLoadingState from "./setLoadingState.js";
import setSearchResult from "./setSearchResult";

const usersApi = `https://api.github.com/search/users?q=`;

const performSearch = (searchTerm, isUserSelected) => {
  const typeQuery = isUserSelected ? "+type:user" : "+type:org";
  setMessage();
  if (!searchTerm.trim()) {
    setMessage("Please Fill Out The Search Field");
    return;
  }

  setLoadingState(true);
  fetch(`${usersApi}${searchTerm}${typeQuery}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response.items))
    .finally(() => setLoadingState(false));
};

export { performSearch };
