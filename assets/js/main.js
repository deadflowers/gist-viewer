/**
 * Main app module.
 */
import { createApp } from "https://unpkg.com/vue@3.2/dist/vue.esm-browser.js";
import FilterInput from "./FilterInput.js";
import Gists from "./Gists.js";

const USERNAME = "deadflowers";
const REPO_NAME = "gist-viewer";

const app = createApp({
  components: {
    Gists,
    GitHubCorner,
    FilterInput,
  },
  data() {
    return {
      username: USERNAME,
      filter: "",
    };
  },
  computed: {
    profileUrl() {
      return `https://github.com/${this.username}`;
    },
    repoUrl() {
      return `${this.profileUrl}/${REPO_NAME}`;
    },
    gistsUrl() {
      return `https://gist.github.com/${this.username}`;
    },
  },
  template: `
    <GitHubCorner :repoUrl="repoUrl"></GitHubCorner>

    <h2>User links</h2>
    <p> User: <b>Ray Kooyenga</b>`
   /*   Username: <b>@{{ username }}</b> */
    `</p>
    <p>
      <a :href="profileUrl">Profile</a>
      |
      <a :href="gistsUrl">Gists</a>
    </p>

    <h2>List of Gists</h2>

    <p>
      <i>Every time you load this page, the latest Gist details will be pulled in.</i>
    </p>

    <FilterInput v-model="filter"></FilterInput>

    <br>

    <Gists id="gists-widget" :username="username" :filter="filter"></Gists>
  `,
});

app.mount("#app");
