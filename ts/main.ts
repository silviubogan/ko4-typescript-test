// both of the following import lines result in: `ko` undefined

// import { ko } from "@tko/build.knockout";
import { ko } from "../node_modules/@tko/build.knockout/dist/build.knockout.es6";


alert("test: " + ko);