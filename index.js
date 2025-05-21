// [x] Create Function => performSearch(searchTerm, isUserSelected)
// [x] Call performSearch Inside Button Eventlistener

/*
  performSearch
  - [x] Fetch Data From Url.
  - If OK, Then Show Data In The Page.
  - If Not, Show Error Massage.
 */

import {
  searchTerm,
  isUserSelected,
  buttonElement,
} from "./scripts/elements.js";
import { performSearch } from "./scripts/performSearch.js";

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  performSearch(searchTerm.value, isUserSelected.checked);
});
