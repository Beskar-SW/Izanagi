import React from "react";
import './App.css'

export default function QuickOrders(){
    const [orders, setOrders] = React.useState([]);
    const [precios, setPrecios] = React.useState([]);
    const [prueba, setPrueba] = React.useState({});

    const handleClick = () => {
        var div = document.getElementById("Orders");
        var tempdiv = document.createElement("div");
        tempdiv.className = "Order"

        var inputText = document.createElement("input");
        var inputPrice = document.createElement("input");
        var button = document.createElement("button");

        inputText.setAttribute("type", "text");
        inputPrice.setAttribute("type", "number");

        button.textContent = "Delete";
        button.addEventListener("click", (e) => {
            var div = document.getElementById("Orders");
            var children = div.children;
            for(var i = 0; i < children.length; i++){
                if(children[i].children[0].value === e.target.value){
                    div.removeChild(children[i]);
                }
            }
        });


        inputText.setAttribute("placeholder", "Nombre del producto");
        inputPrice.setAttribute("placeholder", "Precio del producto");
        inputPrice.setAttribute("inputmode", "numeric");
        inputPrice.setAttribute("pattern", "[0-9]+");
        inputPrice.setAttribute("required", "true");


        tempdiv.appendChild(button);
        tempdiv.appendChild(inputText);
        tempdiv.appendChild(inputPrice);
        div.appendChild(tempdiv);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var temp = [];
        var temp2 = [];
        var div = document.getElementById("Orders");
        var children = div.children;
        for(var i = 0; i < children.length; i++){
            var children2 = children[i].children;
            temp.push(children2[1].value);
            temp2.push(children2[2].value);
        }
         
        var json = {}
        json.orders = temp;
        json.precios = temp2;
        setPrueba(json);

        setOrders(temp);
        setPrecios(temp2);
    }

    const Delete = (e) => {
        e.preventDefault();
        var div = document.getElementById("Orders");
        var children = div.children;
        for(var i = 0; i < children.length; i++){
            if(children[i].children[0].value === e.target.value){
                div.removeChild(children[i]);
            }
        }
    }

    return(
        <div id="QuickOrders">
            
            <div className="Orders" id="Orders">
                <div className="Order">
                    <button onClick={Delete}>Delete</button>
                    <input type={"text"} placeholder="Nombre del producto"></input>
                    <input type={"number"} placeholder="Precio del producto" inputMode="numeric" pattern="[0-9]+" required></input>
                </div>
            </div>

            {orders}<br></br>
            {precios}<br></br>

            <button onClick={handleClick}>Añadir Articulo</button>
            <button onClick={handleSubmit}>Generar cuenta</button>
        </div>
    );
}

