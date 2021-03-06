# catch-webhooks

A sink for webhooks that produce JSON, with a UI that can be annotated 
and is preserved to localStorage, and logging on the server-side.


## Launch

Prerequisite:  You must have `ngrok` and `npx` installed.  Install with: `npm i -g ngrok npx`

```
npx catch-webhooks
```

This will use port 3003.  If you need it to use a different port because it's already allocated, you can use the alternate
form `npx catch-webhooks [port]`

The output will give you a public HTTPS URL as a destination for the webhooks (read the next section).

## Webhooks

Any POST webhook that matches the path `/webhook*` will be picked up.

Give the public URL and the desired path that is prefixed with `/webhook` to the external web service as the location where it should send its webhooks.
The webhooks that are captured will appear in your browser, which you can open at http://localhost:3003

For example, suppose your server was started with a public URL of http://00000000.ngrok.io (your address will be different than this), then you can immediately hand out an arbitrary number of webhook endpoints like the following, without having to make any code or configuration changes:

```
http://00000000.ngrok.io/webhook
http://00000000.ngrok.io/webhook/success
http://00000000.ngrok.io/webhook/failure
http://00000000.ngrok.io/webhook/foo
etc..
```
