import React from "react"
import "./contentGamesItemsPage.scss"

function ContentGamesItemsPage(props) {
  return (
    <div className="content-wrapper">
      {props.children}
    </div>
  );
}
export default ContentGamesItemsPage;