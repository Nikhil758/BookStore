import { createClient } from 'ioredis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

export const getUser = async () => {
    const user = await client.get(`user`);
    return user;
  };
  
  export const setUser = async (data) => {
    await client.set(`user`, JSON.stringify(data));
  };