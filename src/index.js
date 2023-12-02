import { setItem } from "./utils/storage";
import "./index.scss";


document.getElementById("btnSayHello").addEventListener("click", () => {
    alert("Hello Webpack....");
    const arr=[50,60,70,80,85,90,95];
    console.log(getItem([...arr]));
    console.log(arr);
    
    setItem("token", "96634-544444444444444444");
});

const getItem=(arr)=>{
    return arr.filter((item)=> item>75).reduce((acc,curr)=> acc+curr,1000)
}


