import { setItem } from "./utils/storage";
import "./index.scss";


document.getElementById("btnSayHello").addEventListener("click", () => {
    alert("Hello Webpack....");
    setItem("token", "96634-544444444444444444");
});


