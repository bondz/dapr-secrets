# Dapr Bug Demo

This is a simple demo to show a bug in Dapr when running with the Multi-app run file template.

Clone the repo.

```bash
cd my-service
npm install
```

There's a single secret defined in the [`.dapr/secrets.json`](.dapr/secrets.json) file that the app (my-service) reads.

When running the app directly using dapr multi-app run in the root directory, the sidecar is never started.

```bash
dapr run -f .
```

It hangs for a while, eventually errors and exits.

![alt text](<cli.gif>)

However, if you use vscode and run the app using the launch configuration, it works fine.

![alt text](<launch.gif>)