const { DaprClient } = require('@dapr/dapr');

async function start() {
  const client = new DaprClient({});

  const secret = await client.secret.get('service-secrets', 'database.url');

  console.log(secret);
}

start().catch((e) => {
  console.error(e);
  process.exit(1);
});
