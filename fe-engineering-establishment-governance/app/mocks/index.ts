export async function enableMocking(children: React.ReactNode) {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('@/app/mocks/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}
