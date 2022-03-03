var NS = 1;
var AC = 1;
var AS = 1;
var ES = 1;
function Read_Text() {
  var H = document.getElementById("height").value;
  var W = document.getElementById("weight").value;
  var A = document.getElementById("age").value;

  AS = document.getElementById("as").value;
  AC = document.getElementById("ac").value;

  var e = document.getElementById("ms");
  var MS = e.value;

  if ((A == null || A == "", W == null || W == "", H == null || H == "")) {
    Show_Toast("Please Fill All The Fields");
  } else {
    var BMI = W / (H * H);
    if (6 <= A && A <= 12) {
      NS = 600;
    } else if (13 <= A && A <= 18) {
      NS = 540;
    } else if (19 <= A && A <= 60) {
      NS = 480;
    }

    if (MS == 1) {
      NS = NS - 60;
    } else if (MS == 2) {
      NS = NS - 30;
    } else if (MS == 3) {
      NS = NS;
    } else if (MS == 4) {
      NS = NS + 30;
    } else if (MS == 5) {
      NS = NS + 60;
    }
    console.log(NS);
    if (BMI > 25) {
      console.log(NS);
      NS = (BMI - 25) * 7 + NS;
    } else if (BMI < 18.5) {
      NS = NS - (18.5 - BMI) * 10;
    }
    Show_Toast(timeConvert(NS));
  }
}

function timeConvert(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + " hour(s) and " + rminutes + " minute(s).";
}

function a() {
  var TS = document.getElementById("ts").value;
  var TC = document.getElementById("tc").value;
  var hour = document.getElementById("lns1").value;
  var minute = document.getElementById("lns2").value;
  var LNS = hour * 60 + parseInt(minute);
  var NSS = document.getElementById("nss").value;
  var DE = document.getElementById("DE").value;
  var ta = (TS - AS) / 300;
  console.log(ta);
  if (ta < 1) {
    ES = NS;
  } else if (ta > 1 || ta < 20) {
    ES = ((TS - AS) / 300) * 3 + NS;
  } else if (ta > 20) {
    if (TS - AS > 0) {
      ES = NS + 60;
    } else if (TS - AS < 0) {
      ES = NS - 60;
    }
  }
  console.log(ES);
  ES = (TC - AC) * 0.25 + ES;
  ES = (NS - LNS) * (NSS / 100) + ES;
  if (DE == 1) {
    ES = ES - 90;
  } else if (DE == 2) {
    ES = ES - 45;
  } else if (DE == 3) {
    ES = ES;
  } else if (DE == 4) {
    ES = ES + 45;
  } else if (DE == 5) {
    ES = ES + 90;
  }
  Show_Toast1(timeConvert(ES));
}

function Show_Toast(text) {
  var x = document.getElementById("snackbar");

  document.getElementById("snack").innerHTML = text;

  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function Show_Toast1(text) {
  var x = document.getElementById("snackbar1");

  document.getElementById("snack1").innerHTML = text;

  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function clock(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  if (rhours > 24) {
    rhours = rhours % 24;
  }
  if (rhours == 24) {
    rhours = 0;
  }
  return rhours + " : " + rminutes;
}

function splitime(time) {
  const myArray = time.split(":", 2);
  var hour = parseInt(myArray[0]);
  const myArray2 = myArray[1].split(" ", 2);
  var minute = myArray2[0];
  if (myArray2[1] == "PM") {
    hour = parseInt(hour) + 12;
    if (hour == "24") {
      hour = 00;
    }
  }
  return hour * 60 + parseInt(minute);
}

function show_time(x) {
  alert(x);
}

function timeplus() {
  show_time(clock(splitime(document.getElementById("time").value) + ES));
}
function hour(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours;
}
function minute(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rminutes;
}

function timeminus(time, addh, addm) {
  let timer = time;
  var formatted = moment(timer, "HH:mm");
  let a = moment(formatted).subtract(addh, "h").format();
  alert(moment(a).subtract(addm, "m").format("hh:mm A"));
}

function showtime() {
  var get = document.getElementById("timeminus").value;
  timeminus(get, hour(ES), minute(ES));
}
