import React from 'react';

export default function IssueLabels(props) {
  function hexToRGB(h) {
    let rgb = ["0", "0", "0"];
    rgb[0] = "0x" + h[1] + h[2];
    rgb[1] = "0x" + h[3] + h[4];
    rgb[2] = "0x" + h[5] + h[6];
    return rgb;
  }
  function calcTextColor(backgroundColor) {
    const rgb = hexToRGB(backgroundColor);
    const brightness = Math.round(((parseInt(rgb[0], 16) * 299) +
      (parseInt(rgb[1], 16) * 587) +
      (parseInt(rgb[2], 16) * 114)) / 1000);
    const color = (brightness > 125) ? 'black' : 'white';
    return(color);
  }
  const labelsList = props.issue.labels.map(
    (label) => (
      <p className="label" style={{backgroundColor: '#'+label.color, color: calcTextColor(label.color)}}>{label.name}</p>
    ));
  return (
    <div className="issueLabels">
      {labelsList}
    </div>
  )
}
