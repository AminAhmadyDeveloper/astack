export const getUrl = (suffix?: string[]) => {
  const base = (() => {
    if (process.env.NODE_ENV === 'production') {
      return 'https://astack.aminahmadydeveloper.workers.dev/api';
    }
    return 'http://localhost:8080/api';
  })();
  return suffix?.length ? `${base}/${suffix.join('/')}` : base;
};

export const getWorkerUrl = (suffix?: string[]) => {
  const base = (() => {
    if (process.env.NODE_ENV === 'production') {
      return 'https://astack.aminahmadydeveloper.workers.dev/api';
    }
    return 'http://localhost:8080/api';
  })();
  return suffix?.length ? `${base}/${suffix.join('/')}` : base;
};
