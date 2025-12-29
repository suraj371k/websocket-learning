## HTTP

HTTP is a stateless application-layer protocol that enables data communication between a client and a server on the web using a request–response model.

## STATELESS

**Stateless** means that the server **does not remember any information about previous requests** from a client.

## HTTP REQUEST CONTAINS

1. HTTP version type
2. a URL
3. an HTTP method
4. HTTP request headers
5. Optional HTTP body.

## HTTP METHODS

HTTP methods define the type of operation a client wants to perform on a resource, such as GET for read, POST for create, PUT/PATCH for update, and DELETE for remove.

## HTTP HEADERS

**HTTP Headers** are key–value pairs sent in HTTP requests and responses that provide **metadata** about the request, response, or body content.
****

### Types of HTTP Headers

1. **Request Headers**
    
    Sent by the client to provide information about the request.
    
    - `Host` – Server domain name
    - `User-Agent` – Client/browser details
    - `Authorization` – Authentication credentials
    - `Accept` – Expected response format
2. **Response Headers**
    
    Sent by the server with the response.
    
    - `Content-Type` – Type of data returned (JSON, HTML, etc.)
    - `Content-Length` – Size of response body
    - `Set-Cookie` – Stores data on the client
    - `Server` – Server software info
3. **General Headers**
    
    Used in both request and response.
    
    - `Cache-Control` – Caching rules
    - `Date` – Date and time of message
    
    ## HTTP RESPONSE
    
    An HTTP response is what web clients (often browsers) receive from an Internet server in answer to an HTTP request. These responses communicate valuable information based on what was asked for in the HTTP request.
    
    A typical HTTP response contains:
    
    1. an HTTP status code
    2. HTTP response headers
    3. optional HTTP body

# **HTTP status code**

HTTP status codes are 3-digit codes most often used to indicate whether an HTTP request has been successfully completed. Status codes are broken into the following 5 blocks:

1. 1xx Informational
2. 2xx Success
3. 3xx Redirection
4. 4xx Client Error
5. 5xx Server Error

# **HTTP request**

An HTTP request is the way Internet communications platforms such as web browsers ask for the information they need to load a website.

# **HTTP request body**

The body of a request is the part that contains the ‘body’ of information the request is transferring. The body of an HTTP request contains any information being submitted to the web server, such as a username and password, or any other data entered into a form.

## REQUEST RESPONSE CYCLE

The HTTP request–response cycle is the process where a client sends a request to a server, the server processes it, and returns a response with a status code, headers, and optional body.

## POLLING

**Polling** is a technique where a client **repeatedly sends requests to a server at regular intervals** to check if new data or updates are available.
****

Instead of the server pushing updates automatically, the client keeps asking:

> “Is there any new data now?”
> 

### Example

- A chat app checking every 5 seconds for new messages
- A frontend repeatedly calling an API to get updated status

### Types of Polling

1. **Short Polling**
    - Client sends a request
    - Server responds immediately (with or without new data)
    
2. **Long Polling**
    - Client sends a request
    - Server waits until new data is available, then responds

## **Server-Sent Events (SSE)**

**Server-Sent Events (SSE)** is a web technology that allows a server to **push real-time updates to the client over a single, long-lived HTTP connection**.

### Simple Explanation

Instead of the client repeatedly asking for updates (polling), the client opens a connection and the **server sends data automatically whenever an update occurs**.

### Why Polling is Not Ideal

- **High latency**: Updates are only received at fixed intervals, not instantly
- **Wasted resources**: Many requests return no new data
- **Server load**: Large number of repeated requests increases CPU and bandwidth usage
- **Poor scalability**: Becomes inefficient with many users