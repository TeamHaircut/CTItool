const socket = io(); 
socket.emit("init_data");
socket.on("init_data", (serverData) => {
  Object.keys(serverData).forEach((key) => {
    document.getElementById(key).innerHTML = getGraph(serverData[key]);
  }); 
});

function getGraph(data) {
  var graphString = "";
  Object.values(data).forEach((group) => {
    graphString = graphString + group.node +": ";
    var childNode = "";
    if(group.links) {
      Object.values(group.links).forEach((link) => {
        childNode = childNode + " " + link;
      });    
    }
    graphString = graphString + childNode + "<br>";
  });
  return graphString;
}