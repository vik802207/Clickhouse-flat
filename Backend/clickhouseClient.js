import { createClient } from '@clickhouse/client'

void (async () => {
  const client = createClient({
    url: 'https://rp9etccikx.asia-southeast1.gcp.clickhouse.cloud:8443',
    username: 'default',
    password: 'euS3i1AsT6F.i',
  })
  const rows = await client.query({
    query: 'SELECT 1',
    format: 'JSONEachRow',
  })
  console.log('Result: ', await rows.json())
})()