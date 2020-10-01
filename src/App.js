import React, { useEffect, useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Title from "./components/Title";
import InfoCards from "./components/InfoCards";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [numberOfRepos, setNumberOfRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [userInput, setUserInput] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [repos, setRepos] = useState([]);

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
  };

  const fetchData = (input) => {
    const userDataUrl = fetch(`https://api.github.com/users/${input}`);
    const reposListUrl = fetch(`https://api.github.com/users/${input}/repos`);
    Promise.all([userDataUrl, reposListUrl])
      .then((res) => Promise.all(res.map((response) => response.json())))
      .then((finaldata) => {
        const userData = finaldata[0];
        const reposListData = finaldata[1];
        setUserData(userData);
        setRepos(reposListData);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid className="p-0 App">
      <NavigationBar submit={handleSubmit} change={handleSearch} />
      <Title />
      <InfoCards
        picture={avatar}
        avatar={avatar}
        name={name}
        userName={userName}
        numRepos={numberOfRepos}
        gitLink={githubLink}
        theFollowed={following}
        theFollowers={followers}
        repos={repos}
      />
      <Container fluid className="search-data"></Container>
    </Container>
  );
};

export default App;
