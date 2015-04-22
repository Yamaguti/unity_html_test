function main() {
  var u = new UnityObject2();
  u.initPlugin(jQuery("#unityPlayer")[0], "Example.unity3d");
}

$(document).ready(main);
