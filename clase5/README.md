tsc --init
tsc --watch o tsc -w

lo más correcto sería crear un package.json: una forma es la normal con el new file y otra desde 
la terminal usando npm init -y y agregar "watch": "tsc -watch", en "scripts"

los metodos usamos snake_case y en el nombre de las variables camelCase

<script src="./dist/main.js" type="module"></script> agregar el type module en el index.html y se pone en el head,
sería lo mismo el type="module" a defer

y el tsconfig.json tiene que tener: 
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "module": "ESNext",
    "moduleResolution": "Node10",
    "target": "ES6"
    "allowSyntheticDefaultImports": true,
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}