import React, { useEffect, useState } from "react";

export default function Label(props) {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  useEffect(() => {
    calcBackgroundColor();
    calcTextColor();
  });

  function calcBackgroundColor() {
    setBackgroundColor(`#${intToRGB(hashCode(props.label))}`);
  }
  function calcTextColor() {
    const rgb = hexToRGB(backgroundColor);
    const brightness = Math.round(
      (parseInt(rgb[0], 16) * 299 +
        parseInt(rgb[1], 16) * 587 +
        parseInt(rgb[2], 16) * 114) /
        1000
    );
    const color = brightness > 125 ? "black" : "white";
    setTextColor(color);
  }
  function hashCode(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }
  function intToRGB(i) {
    var c = (i & 0x00ffffff).toString(16).toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
  }

  function hexToRGB(h) {
    let rgb = ["0", "0", "0"];
    rgb[0] = "0x" + h[1] + h[2];
    rgb[1] = "0x" + h[3] + h[4];
    rgb[2] = "0x" + h[5] + h[6];
    return rgb;
  }

  const labelStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
  };

  return (
    <div className="label" style={labelStyle}>
      {props.label}
    </div>
  );
}
