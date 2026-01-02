## WEBSOCKET

WebSocket is a communication protocol that provides **full-duplex, bidirectional communication** over a single TCP connection. Once established, both client and server can send messages to each other at any time without the overhead of repeatedly opening new connections.

## How It Works

1. **Handshake**: Starts with an HTTP request with an `Upgrade` header
2. **Protocol Switch**: Server agrees, connection upgrades from HTTP to WebSocket
3. **Persistent Connection**: Connection stays open for continuous communication
4. **Both-way Communication**: Either side can send data whenever needed
5. **Closure**: Either side can close the connection when done

## SOCKET.IO

[Socket.IO](http://socket.io/) is a real-time communication library that uses WebSockets under the hood and provides event-based, reliable, bi-directional communication with automatic reconnection and fallback support.

## How It Works

- It establishes a **persistent connection** between client and server
- Uses **WebSocket** as the primary transport
- Falls back to **HTTP long polling** if WebSocket is not supported
- Communication is **event-based.**

## ENGINE.IO

**Engine.IO is a low-level transport layer that provides reliable real-time communication by managing connections using WebSocket or HTTP long-polling.**

## Connection State Recovery

> Connection State Recovery is a Socket.IO feature that allows a client to automatically restore its previous connection state after a temporary disconnection, without losing messages or room memberships.
> 

## Why It Is Needed

In real-time apps:

- Network drops
- Page refresh
- Mobile switches networks

Without recovery:

- Client reconnects as a **new user**
- Misses messages
- Loses room subscriptions

Connection State Recovery **solves this**.

## What Gets Recovered?

When a client reconnects, Socket.IO can restore:

- Room memberships
- Missed packets (messages)
- Session ID (socket state)
- Namespace connection

## How It Works

1. **Initial Connection**
    - Server assigns a unique **session ID (sid)** to the client
    - Server starts storing outgoing packets temporarily
2. **Disconnection Happens**
    - Network issue or refresh
    - Server does **not immediately discard** the socket state
3. **Reconnection Attempt**
    - Client reconnects with the **same sid**
    - Engine.IO handles transport reconnection
4. **State Recovery**
    - Server checks if the sid is still valid
    - Restores:
        - Previous rooms
        - Missed messages
        - Socket context
5. **Resume Communication**
    - Client continues as if it was never disconnected

```jsx
const io = new Server(server, {
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000
  }
});
```

## How To Initialize [Socket.io](http://Socket.io) in Express

```jsx
import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(3000);
```