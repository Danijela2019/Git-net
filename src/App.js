import React, { useEffect, useState, useCallback } from "react";
import Container from "react-bootstrap/Container";

import Title from "./components/Title";
import InfoBoard from "./components/InfoBoard";
import NavigationBar from "./components/NavigationBar";
import AlertField from "./components/AlertField";
import LoadingIndicator from "./components/LoadingIndicator";
import AllReposBoard from "./components/AllReposBoard";

const App = () => {
  const [data, setData] = useState({
    name: "",
    userName: "",
    numberOfRepos: "",
    avatar: "",
    followers: "",
    following: "",
    gitHubLink: "",
  });
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [allReposInfo, setAllReposInfo] = useState(false);

  const fetchData = useCallback((input) => {
    setLoading(true);
    const setUserData = ({
      name,
      login,
      public_repos,
      avatar_url,
      html_url,
      followers,
      following,
    }) => {
      setData((prevData) => {
        return {
          ...prevData,
          name: name,
          userName: login,
          numberOfRepos: public_repos,
          avatar: avatar_url,
          followers: followers,
          following: following,
          githubLink: html_url,
        };
      });
    };

    const userDataUrl = fetch(`https://api.github.com/users/${input}`);
    const reposListUrl = fetch(`https://api.github.com/users/${input}/repos`);
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
  }, []);

  useEffect(() => {
    fetchData("example");
  }, [fetchData]);

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
          picture={data.avatar}
          name={data.name}
          userName={data.userName}
          numRepos={data.numberOfRepos}
          gitLink={data.githubLink}
          theFollowed={data.following}
          theFollowers={data.followers}
          repos={repos}
          viewRepos={viewAllRepos}
        />
      )}
      {allReposInfo ? <AllReposBoard repos={repos} /> : null}
    </Container>
  );
};

export default App;
