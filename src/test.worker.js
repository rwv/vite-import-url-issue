onmessage = (e) => {
  (async () => {
    const { value } = await import(e.data);
    postMessage(value);
  })();
};
