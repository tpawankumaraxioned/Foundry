***************package.json
npm init -y

***************tailwindcss install 
npm install tailwindcss

***************install autoprefixer
npm install autoprefixer

*************install postcss-cli
npm install postcss-cli

************* generate tailwind.config.js & postcss.config.js file
npx tailwind init -p

************create src/styles.css & public folder
@tailwind base;
@tailwind components;
@tailwind utilities;

************package.json (with watch & time to process css file)
"scripts": {
  "build": "postcss ./src/styles.css -o ./css/styles.css -w --verbose"
},
then,

npm run build 

***************add style link in index file

****************enable jit mode (tailwind.config.js) file

****************o/p file mdhe used kelele classes fkt generate hotil not all tailwind classes
module.exports = {
 mode: 'jit',
 purge: [
    './**/*.html'
  ],
