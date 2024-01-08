# Task REST API

This is a simple REST API to be called by a bot while executing tasks. It runs on port 3001 by default but may be configured in the environment.

## Requirements

    node
    typescript

## Install

    npm install

## Run the app

    npm run start

# REST API

## Tasks

### Request

`GET /tasks`

    curl --location 'http://localhost:3001/tasks/'

### Response

```
[
    {
        id: string;
        description: string;
        duration: number;
    }
]
```

## Task

### Request

`GET /tasks/:id`

    curl --location 'http://localhost:3001/tasks/:id'

### Response

```
{
    id: string;
    description: string;
    duration: number;
}
```
