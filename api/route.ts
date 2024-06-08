const routes: { [key: string]: string } = {
  "docker-vercel.libcuda.so": "https://registry-1.docker.io",
  "quay-vercel.libcuda.so": "https://quay.io",
  "gcr-vercel.libcuda.so": "https://gcr.io",
  "k8s-gcr-vercel.libcuda.so": "https://k8s.gcr.io",
  "k8s-vercel.libcuda.so": "https://registry.k8s.io",
  "ghcr-vercel.libcuda.so": "https://ghcr.io",
  "cloudsmith-vercel.libcuda.so": "https://docker.cloudsmith.io",
};

function routeByHosts(host: string) {
  if (host in routes) {
    return routes[host];
  }
  // if (MODE == "debug") {
  //   return TARGET_UPSTREAM;
  // }
  return "";
}

export { routes, routeByHosts };