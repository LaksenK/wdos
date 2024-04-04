fetch("department.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        localStorage.setItem("departmentData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("departmentData"));
document.getElementById("dpIntro").innerHTML = data.main.Intro;
document.getElementById("dpIntp").innerHTML = data.main.Introp;
document.getElementById("dpMp").innerHTML = data.main.Intro_Description;
document.getElementById("dpA").innerHTML = data.main.Introp1;
document.getElementById("dpA").innerHTML = data.main.Introp1;
document.getElementById("parks").innerHTML = data.main.Introp2;
document.getElementById("area1").innerHTML = data.protectedareas[0].name;
document.getElementById("area2").innerHTML = data.protectedareas[1].name;
document.getElementById("area3").innerHTML = data.protectedareas[2].name;
document.getElementById("area4").innerHTML = data.protectedareas[3].name;
document.getElementById("area5").innerHTML = data.protectedareas[4].name;
document.getElementById("area6").innerHTML = data.protectedareas[5].name;
document.getElementById("area7").innerHTML = data.protectedareas[6].name;
document.getElementById("area8").innerHTML = data.protectedareas[7].name;
