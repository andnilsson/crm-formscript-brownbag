```
mkdir brownbag-form-script
cd brownbag-form-script
npm init
npm install -g dyn365-deploy-cli
npm install --save crm-common-js
```

skapa mappar 'formscripts' och 'stq_'

skapa filen account.ts i formscripts
```
import {common} from 'crm-common-js';

function onLoad(){
    common.setFormNotification("hej hej", "0");
}
```

skapa tsconfig.json i roten:
```
{
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "sourceMap": true,
        "outDir": "stq_/scripts/"      
    }
}
```
lägg till webpack, sourcemaploader och typescript-loader och länka
```
npm install --save-dev- webpack source-map-loader ts-loader
npm link typescript
```
skapa upp filen webpack.config.js, kopiera innehållet från detta repo

kör webpack. Ts-filerna transpileras nu och läggs i byggmappen stq_
```
webpack
```


kör deploycli:n i prompten:
```
crm-deploy init
```
följ anvisningarna på skärmen

starta watchen:
```
crm-deploy
```

Alla ändringar i bygg-mappen trackas nu och kommer laddas upp i crm. Inget publiceras dock, det får man  göra manuellt just nu

Publicera

lägg till scriptet på accountformuläret, trigga funktionen onLoad på eventet onLoad

Du har nu gjort ett enkelt formulärscript i typescript, transpilerat och klart för användning i crm
