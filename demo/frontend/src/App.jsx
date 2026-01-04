import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = useMemo(() => io("http://localhost:5000"), []);

  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });

    // socket.on("welcome", (s) => console.log(s));

    socket.on("receive-message" , (data) => {
        console.log(data)
    })

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <>
      <h1>Welcome to socket.io</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter message"
        />
        <button type="submit">send</button>
      </form>
    </>
  );
}

export default App;
