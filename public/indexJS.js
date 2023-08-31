const socket = io(); 
socket.emit("init_data");
socket.on("init_data", (obj) => {
  document.getElementById("primary_target").innerHTML = obj.primary_target;
  document.getElementById("critical_systems").innerHTML = JSON.stringify(obj.critical_systems);
  document.getElementById("activity_groups").innerHTML = JSON.stringify(obj.activity_groups);
  document.getElementById("adversaries").innerHTML = JSON.stringify(obj.adversaries);
  document.getElementById("ttps").innerHTML = JSON.stringify(obj.ttps);
});

