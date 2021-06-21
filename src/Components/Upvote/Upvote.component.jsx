import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// styles
import { UpvoteDiv } from "./Upvote.styles";

import { axiosWithAuth } from "../../utils/axiosWithAuth.service";

export default function Upvote(props) {
  const { currentUpvote, id } = props;
  const [upvote, setUpvote] = useState(currentUpvote);
  const location = useLocation();

  const getUpvote = () => {
    axiosWithAuth()
      .get(`/issues/issue/${id}/upvote`)
      .then((res) => {
        setUpvote(res.data);
      });
  };

  const upvotePost = (event) => {
    event.preventDefault();
    let newCount = upvote + 1;
    axiosWithAuth()
      .patch(`/issues/issue/${id}/upvote`, { upvote: newCount })
      .then((res) => {
        console.log("response from upvote", res);
        getUpvote();
      });
  };

  useEffect(() => {
    getUpvote();
  }, [location]);

  return (
    <UpvoteDiv>
      <button type="button" onClick={upvotePost}>
        {" "}
        <i className="fas fa-arrow-circle-up"></i> Upvote <span> {upvote}</span>
      </button>
    </UpvoteDiv>
  );
}
