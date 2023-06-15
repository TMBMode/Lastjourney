import { HttpsProxyAgent } from 'https-proxy-agent';
import { conf } from "../config.mjs";

// base URL for fetch
export const baseUrl = {
  send:
    'https://discord.com/api/v9/interactions',
  retrieve:
    `https://discord.com/api/v10/channels/${conf.channel_id}` +
    `/messages?limit=${conf.get_limit}`
};

// proxy agent
export const proxyAgent = (
  conf.proxy ? new HttpsProxyAgent(conf.proxy) : null
);

// request headers
export const headers = () => ({
  'Content-Type': 'application/json',
  'Authorization': conf.authorization
});

// request body
export const payload = (prompt) => ({
  type: 2,
  application_id: conf.application_id,
  guild_id: conf.guild_id,
  channel_id: conf.channel_id,
  session_id: conf.session_id,
  data: {
    version: conf.data_version,
    id: conf.data_id,
    name: 'imagine',
    type: 1,
    options: [{
      type: 3,
      name: 'prompt',
      value: prompt,
      attachments: []
    }]
  }
});