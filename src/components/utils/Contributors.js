import React, { useEffect, useState } from "react";

export default function Contributors(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [contributors, setContributors] = useState({});
  useEffect(() => {
    const contributors = props.users.map((user, index) => (
      <div>
        <img className="avatarBig" src={user.avatar_url} alt={user.login} />
        <a href={`${user.html_url}`}>{user.login}</a>
      </div>
    ));
    setContributors(contributors);
    setIsLoading(false);
  }, []);

  return (
    <div className="col-md-4">
      {isLoading ? (
        ""
      ) : (
        <div className="card">
          <h4 className="card-title">Разработчики</h4>
          <div className="contributors">{contributors}</div>
        </div>
      )}
    </div>
  );
}
