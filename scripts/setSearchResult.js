import { cards } from "./elements";

const setSearchResult = (response) => {
  let result = ``;
  if (response?.length === 0) {
    result = `<p>No Result Found</p>`;
  } else if (response === null) {
    result = "";
  } else if (response?.length) {
    response.map((item) => {
      result += `
      <article class="card">
        <a href="${item.html_url}" target="_blank">
          <img class="img" loading="lazy" src="${item.avatar_url}"/>
          <h2 class="name">${item.login}</h2>
        </a>
      </article>
      `;
    });
  }
  cards.innerHTML = result;
};

export default setSearchResult;
