import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap"

document.querySelector("button").addEventListener("click", () => {
    alert("hello Webpack");
    setItem("token", "555555555555555555544444444444444444");
});


