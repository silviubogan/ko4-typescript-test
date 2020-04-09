Before running `./watch.sh` you must install some npm packages:

```bash
npm i -g watchify tsify typescript
```

Using the given tsconfig.json file, I cannot import the ko4 package well. I could change some of the things in tsconfig.json but I do not know how to make it compatible with all the used modules in my main project. I chose to use ES6 import syntax because it is future-proof.