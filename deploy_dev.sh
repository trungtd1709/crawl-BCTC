echo "Pull new code ..."
git pull origin main

echo "Copy .env.example to .env"
cp .env.example .env

echo "Start app"
npm start