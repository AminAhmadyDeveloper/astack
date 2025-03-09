export const getUrl = (suffix?: string[]) => {
  const base = (() => {
    if (typeof window !== 'undefined') return '';
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
  })();
  return suffix?.length ? `${base}/${suffix.join('/')}` : base;
};

export const getWorkerUrl = (suffix?: string[]) => {
  const base = (() => {
    if (process.env.NODE_ENV === 'production') {
      return 'astack.aminahmadydeveloper.workers.dev';
    }
    return 'http://localhost:8080/api';
  })();
  return suffix?.length ? `${base}/${suffix.join('/')}` : base;
};
