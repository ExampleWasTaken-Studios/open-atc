# WebSocket Message Format (WMF)
**Latest version: `1`**

> Please note that this document is not complete at the moment. It only serves as a standard for the initial implementation of the things defined inside it.

---
<!-- TOC -->
* [WebSocket Message Format (WMF)](#websocket-message-format-wmf)
  * [Introduction](#introduction)
  * [Naming conventions](#naming-conventions)
  * [Fields](#fields)
  * [Message Type](#message-type)
  * [Request Type](#request-type)
  * [Update Type](#update-type)
  * [Event Type](#event-type)
  * [Payload Type](#payload-type)
    * [Request Payload](#request-payload)
      * [`get_system_resource_report`](#getsystemresourcereport)
<!-- TOC -->

## Introduction
To stay consistent and reduce bugs we use our own websocket message format standard called `WebSocket Message Format` or `WMF` for short.  
Fields are always noted from the root element.

Example:
```json
{
  "username": "John",
  "settings": {
    "volume": 10
  }
}
```
This JSON document would be noted as `username` and `settings.volume`.

## Naming conventions
- Fields must use `camelCase`.
- Optional fields are denoted by a `?`-suffix.
- Type designators of type string must use `lower_snake_case`. 

## Fields

| Field           | Description                                                                                                                                              | Type                          | Since |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|-------|
| `version`       | Indicates the WMF version used by the message.                                                                                                           | Integer                       | 1     |
| `type`          | The type of the message.                                                                                                                                 | [Message type](#message-type) | 1     |
| `requestType?`  | The type of the request.                                                                                                                                 | [Request type](#request-type) | 1     |
| `updateType?`   | The type of the update.                                                                                                                                  | [Update type](#update-type)   | 1     |
| `eventType?`    | The type of the event.                                                                                                                                   | [Event type](#event-type)     | 1     |
| `timestamp`     | The UNIX time the message was generated.                                                                                                                 | Integer                       | 1     |    
| `messageId`     | The ID of the message.                                                                                                                                   | UUID                          | 1     |
| `userId`        | The ID of the user.                                                                                                                                      | UUID                          | 1     |
| `sessionId`     | The ID of the session.                                                                                                                                   | UUID                          | 1     |
| `requestId`     | The ID of the request.                                                                                                                                   | UUID                          | 1     |
| `responseId?`   | The ID of the response to a request.                                                                                                                     | UUID                          | 1     |
| `responseCode?` | The response code of a response. Response codes are derived from [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). | Integer                       |       |
| `payload`       | The payload of the message.                                                                                                                              | [Payload type](#payload-type) | 1     |


## Message Type
The messages sent to and from the server can be of very different nature. The type is used to indicate to the receiver how to process the received data.
All values are of type `string`.

| Type       | Description                                                                                                                                                                                        | Origin (Server, Client) | Since |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------|-------|
| `request`  | Indicates that the sender requests some kind of data from the receiver. Any message sent as reaction to a message of this type will be of type `response`. (See [**Request type**](#request-type)) | S,C                     | 1     |
| `response` | Indicates that the sender responds to a message of type `request`. All messages of this type will include a response ID and the request ID which they respond to.                                  | S,C                     | 1     |
| `event`    | Indicates that an event fired on the server. (See [**Event type**](#event-type))                                                                                                                   | S                       | 1     |
| `update`   | Indicates that the server sends an update to the client. (See [**Update type**](#update-type))                                                                                                     | S                       | 1     |
| `error`    | Indicates that an error occurred on the server.                                                                                                                                                    | S                       | 1     |


## Request Type
The request tells the receiver what the sender wants to receive as response.

| Type                         | Description                                                     | Origin | Since |
|------------------------------|-----------------------------------------------------------------|--------|-------|
| `get_system_resource_report` | The client requests a system resource report.                   | C      | 1     |


## Update Type
They are used to send server-produced data to the client.

| Type       | Description                                                               | Origin | Since |
|------------|---------------------------------------------------------------------------|--------|-------|
| `airspace` | Messages of this type contain all vehicles currently inside the airspace. | S      | 1     |


## Event Type
Events fire mostly from one of the core systems.

| Type                  | Description                                                                                                              | Origin | Since |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------|--------|-------|
| `client_connected`    | Indicates that a new client established a new connection to the server. This event is not sent to the triggering client. | S      | 1     |
| `client_disconnected` | Indicates that a client disconnected from the server.                                                                    | S      | 1     |


## Payload Type
The payload field holds the actual data of the message. Depending on the message type, this field varies considerably. Whenever no payload is required, set the payload field `null`.

### Request Payload
#### `get_system_resource_report`
Request does not require payload to be sent.
















