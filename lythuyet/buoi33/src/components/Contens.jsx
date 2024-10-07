/* eslint-disable no-unused-vars */
import React from "react";

function Contens() {
  console.log("2. render");

  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam maiores
      error distinctio dicta molestias magnam quasi, sit quo fugiat, temporibus
      adipisci quam molestiae at itaque dolores quae fuga repudiandae
      reprehenderit!
    </div>
  );
}
export default React.memo(Contens);
// React.memo ==> HOC
