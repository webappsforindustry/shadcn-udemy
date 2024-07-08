/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'Content-Type, Authorization, next-router-state-tree, next-router-prefetch, next-url, rsc',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'accelerometer=(), autoplay=(), bluetooth=(), browsing-topics=(), camera=(), compute-pressure=(), display-capture=(), encrypted-media=(), gamepad=(), geolocation=(), gyroscope=(), idle-detection=(), local-fonts=(), magnetometer=(), microphone=(), midi=(), otp-credentials=(), payment=(), picture-in-picture=(), publickey-credentials-create=(), publickey-credentials-get=(), screen-wake-lock=(), serial=(), storage-access=(), usb=(), web-share=(), window-management=(), xr-spatial-tracking=()',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "base-uri 'self'; child-src 'self'; connect-src 'self'; default-src 'none'; font-src 'self' *.vercel.app; form-action 'self'; frame-ancestors 'self'; frame-src 'self'; img-src 'self' blob: data:;manifest-src 'self'; media-src 'self' blob: data:; object-src 'none'; sandbox allow-popups allow-forms allow-popups-to-escape-sandbox allow-scripts allow-presentation; script-src 'self'; script-src-attr 'self'; script-src-elem 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; style-src-elem 'self' 'unsafe-inline'; style-src-attr 'self' 'unsafe-inline'; worker-src 'self' *.vercel.app blob:;",
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000;includeSubdomains;',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
