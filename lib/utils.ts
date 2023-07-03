declare let window: Window & {
  ethereum: any;
};

export const request = async (method: string, params: any[]) => {
  return window.ethereum.request({ method, params });
};

export const sendCallback = async (method: string, params: any[]) => {
  return new Promise((resolve, reject) => {
    window.ethereum.send({ method, params }, (err: any, res: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export const sendPromise = async (method: string, params: any[]) => {
  return window.ethereum.send(method, params);
};

export const sendAsync = async (method: string, params: any[]) => {
  return new Promise((resolve, reject) => {
    window.ethereum.sendAsync({ method, params }, (err: any, res: any) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

export const bypass = async (method: string, params: any[]) => {
  window.postMessage({
    target: 'metamask-contentscript',
    data: {
      name: 'metamask-provider',
      data: { method, params },
    },
  });
};
