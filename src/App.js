import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Title from "./components/Title";
import InfoBoard from "./components/InfoBoard";
import NavigationBar from "./components/NavigationBar";
import AlertField from "./components/AlertField";
import LoadingIndicator from "./components/LoadingIndicator";
import AllReposBoard from "./components/AllReposBoard";

const App = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [numberOfRepos, setNumberOfRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [userInput, setUserInput] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [allReposInfo, setAllReposInfo] = useState(false);

  useEffect(() => {
    fetchData("example");
  }, []);

  const setUserData = ({
    name,
    login,
    public_repos,
    avatar_url,
    html_url,
    followers,
    following,
  }) => {
    setName(name);
    setUserName(login);
    setNumberOfRepos(public_repos);
    setAvatar(avatar_url);
    setGithubLink(html_url);
    setFollowers(followers);
    setFollowing(following);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(userInput);
    setUserInput("");
    setAllReposInfo(false);
  };

  const viewAllRepos = () => {
    setAllReposInfo(true);
  };

  const fetchData = (input) => {
    setLoading(true);
    const url = `https://api.github.com/users/${input}`;
    const userDataUrl = fetch(url);
    const reposListUrl = fetch(`${url}/repos`);
    Promise.all([userDataUrl, reposListUrl])
      .then((res) => Promise.all(res.map((response) => response.json())))
      .then((finalData) => {
        if (finalData[0].message) {
          setLoading(false);
          setError(finalData[0].message);
        } else {
          const userData = finalData[0];
          const reposListData = finalData[1];
          setLoading(false);
          setUserData(userData);
          setRepos(reposListData);
          setError(null);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid className="p-0 App">
      <NavigationBar
        submit={handleSubmit}
        change={handleSearch}
        value={userInput}
      />
      <Title />
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <AlertField errorMessage={error} />
      ) : (
        <InfoBoard
          picture={avatar}
          avatar={avatar}
          name={name}
          userName={userName}
          numRepos={numberOfRepos}
          gitLink={githubLink}
          theFollowed={following}
          theFollowers={followers}
          repos={repos}
          viewRepos={viewAllRepos}
        />
      )}
      {allReposInfo ? <AllReposBoard repos={repos} /> : null}
    </Container>
  );
};

export default App;
