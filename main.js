function main() {
  var u = new UnityObject2();
  u.initPlugin(jQuery("#unityPlayer")[0], "Build.unity3d");
}

$(document).ready(main);
