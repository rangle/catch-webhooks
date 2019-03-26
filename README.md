# Webhook Transcript Log

A sink for webhooks that produce JSON, with a UI that can be annotated 
and is preserved to localStorage, and logging on the server-side.



## Launch
To make the app available externally for webhooks, you can use ngrok.
With ngrok, you can open a path with `ngrok http 3003`

Currently, the backend and frontend run on separate ports (frontend: 3000, backend: 3003).  Here is how
you start both:

```
yarn start
cd frontend
yarn start
```

This should launch a dev server and open your browser to http://localhost:3000

