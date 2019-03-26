# Webhook Catcher with UI

A sink for webhooks that produce JSON, with a UI that can be annotated 
and is preserved to localStorage, and logging on the server-side.


## Launch
To make the app available externally for webhooks, you can use ngrok.

Currently, the backend and frontend run on separate ports (frontend: 3000, backend: 3003).  Here is how
you start both:

```
yarn start
cd frontend
yarn start
```

This should launch a dev server and open your browser to http://localhost:3000
Next, you'll want to expose the backend server, which you can do with as follows: `ngrok http 3003`
which will give you an internet routable URL that you can use for configuring your webhooks with
the external service.

## Supported webhooks

Any POST webhook that matches the path `/webhook*` will be picked up.
For example, suppose your ngrok server was started and had opened a route to your server through http://00000000.ngrok.io (your address will be different than this), then you can immediately use an arbitrary number of webhook endpoints like the following, without having to make any code or configuration changes:

```
http://00000000.ngrok.io/webhook
http://00000000.ngrok.io/webhook/success
http://00000000.ngrok.io/webhook/failure
http://00000000.ngrok.io/webhook/foo
etc..
```
