import axios from 'axios';
export default async (method, url, body = null, headers = null) => {
  try {
    const res = await axios[method](url, body, headers);
    if (res && res.data) {
      return res.data;
    }
    if (res && res.status == 200) {
      throw 'DATA_NOT_FOUND';
    }
    throw 'UNKNOWN_ERROR';
  } catch (err) {
    console.warn({ err });
    return { err };
  }
};
