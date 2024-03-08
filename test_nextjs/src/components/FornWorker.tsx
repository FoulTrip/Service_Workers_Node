"use client";

import React, { FormEvent, useState } from "react";
import axios from "axios";

interface messageProps {
  message: string;
}

function FormWorker({
  subcriptionProp,
}: {
  subcriptionProp: PushSubscription;
}) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/notifications", {
        subscription: subcriptionProp,
        message,
      });

      setMessage("");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write the message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default FormWorker;
