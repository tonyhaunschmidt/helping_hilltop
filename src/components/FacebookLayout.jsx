"use client";
import { useState } from "react";
import Container from "./Container";
import FacebookCard from "./FacebookCard";

export default function FacebookLayout() {
  const [facebookFeed, setFacebookFeed] = useState([]);

  // access token - EAA0Y06mB5W0BO5NKg01ZAVY1F4aHMeSlOB5xPD9SpkjZAk1N6yWDJENKiSGpzKNcZAMtlNVkXIPQSGA6o0U1hpCw1HZAPIAIaRDtO3ueUXTajiwSKlmtMIyR7Kyusx7mxlnryQy69jBE3rZCOK6D5ODnnph06d4x5ZCWvr69fBnNtf4cIls3SLjbZAazcotW1ziZC3cWkGXXUKpv
  // id - 226326230802065    or    118270061237381

  const id = "226326230802065";
  const token =
    "EAA0Y06mB5W0BO3E9WZCW20J5MnodEj0GdpA4zO5xqIyIYgLNiRJVhznNsPZCJA5K1whvGr8Rrvf5IrWcefYBH9e1h9zPKxunFLzyuRQXjTVIbZCdQBisNNJ9pAMAoH0Go4NL9VZCkmHWbDDKIU9fGzWWibZB6t8iEqZCZBoT6J7EfsGAZCQ014EVaPz2K2tFB87B5OlhnNhohYtw";

  const callAPI = async () => {
    console.log("hi");
    try {
      const res = await fetch(
        `https://graph.facebook.com/v18.0/${id}/accounts?limit=600&access_token=${token}`
      );
      const data = await res.json();
      console.log(data);
      // setFacebookFeed(data);
    } catch (err) {
      console.log(err);
    }
  };

  callAPI();

  return (
    <Container>
      <div className="grid grid-cols-4 gap-2">
        {facebookFeed?.map((card, index) => (
          <div key={index}>
            <FacebookCard card={card} />
          </div>
        ))}
      </div>
    </Container>
  );
}
