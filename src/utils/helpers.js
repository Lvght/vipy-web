import React from "react";
import { Link } from "react-router-dom";

export function getDateSince(dateString) {
    let currentDate = new Date();
    let date = new Date(dateString);
    let timeSince = currentDate.getTime() / 1000 - date.getTime() / 1000;
    if (timeSince >= 60) {
      if (timeSince / 60 >= 60) {
        if (timeSince / 60 / 60 >= 24) {
          if (timeSince / 60 / 60 / 24 >= 7) {
            const a = date;
            return "Postado em " + a.toLocaleDateString();
          } else return parseInt(timeSince / 60 / 60 / 24) + "d atrás";
        } else return parseInt(timeSince / 60 / 60) + "h atrás";
      } else return parseInt(timeSince / 60) + "m atrás";
    } else return parseInt(timeSince) + "s atrás";
}

export class Logo extends React.Component{

    render(){
      return  (<div className="logo">
            <Link to="/timeline">
              <img alt="vipyLogo" src="/Logotipo.svg" />
            </Link>
          </div>)}
  }
