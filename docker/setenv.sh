#!/bin/sh

echo "NODE_ENV="${NODE_ENV} > .env
echo "OPENCAGE_API_URL="${OPENCAGE_API_URL} >> .env
echo "OPENCAGE_API_KEY="${OPENCAGE_API_KEY} >> .env
echo "GOOGLE_API_URL="${GOOGLE_API_URL} >> .env
echo "GOOGLE_API_KEY="${GOOGLE_API_KEY} >> .env
echo "GEOAPIFY_API_URL="${GEOAPIFY_API_URL} >> .env
echo "GEOAPIFY_API_KEY="${GEOAPIFY_API_KEY} >> .env
echo "API_LISTEN_PORT="${API_LISTEN_PORT} >> .env

#node server.js
pm2-runtime start ecosystem.config.cjs