//adding forms
function addBtn(btnVal, a) {
    // alert(a);
    const getVal = document.getElementById(btnVal.value);
    const getID = document.getElementById(btnVal.id);
    if (getID.innerText != "Cancel") {
        getVal.style.display = "block";
        getID.innerText = "Cancel";

    }
    else {
        getVal.style.display = "none";
        getID.innerText = "+ Add";
        inputs = [];
        let vals = document.querySelectorAll(`input[name = ${a}]`);
        for (var i of vals) {
            i.value = '';
        }
    }
}
//saving form inputs
var c = 0;
function saveBtn(btnVal, a) {
    let inputs = [];
    var counter = 0;
    let inp = document.querySelectorAll(`input[name = ${btnVal.value} ]`);
    // inputs.push(Date.now());
    console.log(inputs[0])
    for (var i of inp) {
        if (i.value != "") {
            counter++
        }
        inputs.push(i.value);
        console.log(inputs)
    }
    if (counter == inp.length) {
        var r = confirm('Save this infos?')
        if (r == true) {
            console.table(inputs)
            document.getElementById(btnVal.name).style.display = "none";
            document.getElementById(a).innerText = "+ Add";
            let tableId = document.getElementById(`${btnVal.name}DataTable`);
            tableId.style.display = "Block";
            let vals = document.querySelectorAll(`input[name = ${btnVal.value}]`);

            let tr = document.createElement('tr')
            let td = [];
            for (var i of vals) {
                td[i] = document.createElement('td');
                td[i].className = ' py-2 px-4';
                td[i].style.width = '20%'
                td[i].name = `td${btnVal.name}`;
                td[i].innerText = `${i.value}`;
                tr.appendChild(td[i]);
                i.value = '';
            }
            tr.id = `data${c++}`;
            tr.className = 'dataTable';
            // var btn = addDel(tr.id, tableId);
            let btn = document.createElement('button');
            btn.type = 'button';
            btn.innerText = 'Delete';
            btn.className = 'btn-danger px-2 py-2 my-4';
            btn.name = `delbtn${btnVal.name}`;//delbtnedu//delbtnwor
            btn.onclick = function () {
                this.parentElement.removeChild(this);
                document.getElementById(tr.id).remove();

                let arrBot = document.querySelectorAll(`button[name = delbtn${btnVal.name}]`);//delbtnedu or delbtnwor
                if (arrBot.length == 0) {
                    tableId.style.display = 'none';
                }
            }
            tr.appendChild(btn);
            tableId.appendChild(tr);

        }
    }
    else alert("Please input all fields");
}
//setting date min
function ondate(val, d) {
    document.querySelector(`input[id = ${d}]`).min = val.value;
}

function chck(val) {
    let inpText = document.getElementById(`${val.value}`);
    if (inpText.disabled == false) {
        inpText.disabled = true;
    }
    else inpText.disabled = false;

}

function conNumber(contNum) {
    if (!/^(09|639)\d{9}$/.test(contNum.value)) {
        alert(`${contNum.value} Not valid! \n Please enter a valid contact number. Thank you! `);
        document.getElementById(`${contNum.id}`).focus();
    }
}

function zipKey(val) {
    if (val.value.length == 4) {
        val.value = '';
    }

}

function submitBtn() {

    const selection = document.getElementById("position");
    const selected = [...selection.options]
        .filter((option) => option.selected)
        .map((option) => option.value);
    console.log(selected);
    //Job Position
    // alert("1")

    const rad = document.querySelectorAll("input[name = 'gender']");
    let gen;
    for (var c of rad) {
        if (c.checked) {
            gen = c.value
        }
    }
    console.log(gen);
    //Gender
    // alert("2")

    const inputingState = document.getElementById("inputState");
    const inputState = [...inputingState.options]
        .filter((option) => option.selected)
        .map((option) => option.value);
    console.log(inputState);
    //   State or Region
    // alert("3")
    /////////////////

    let arrBtn1 = document.querySelectorAll(`button[name ='delbtnedu']`);
    let arrBtn2 = document.querySelectorAll(`button[name ='delbtnwor']`);
    let eduArr = [];
    let worArr = [];

    if (arrBtn1.length != 0) {
        let table = document.getElementById('eduDataTable');
        for (var r = 0; r < table.rows.length; r++) {
            for (var i = 0; i < 6; i++) {
                eduArr[i] = table.rows[r].cells[i].innerText;
                console.log(eduArr[i]);
                alert(eduArr[i]);
            }
        }
    }

    if (arrBtn2.length != 0) {
        let table = document.getElementById('worDataTable');
        for (var r = 0; r < table.rows.length; r++) {
            for (var i = 0; i < 5; i++) {
                worArr[i] = table.rows[r].cells[i].innerText;
                console.log(eduArr[i]);
                alert(worArr[i]);
            }
        }
    }



    ////////////////

    const checkboxes = document.querySelectorAll("input[name = 'skill']:checked");
    let checkedValues = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.value == 'otext1') {
            checkedValues.push(document.getElementById('otext1').value);
        }
        else if (checkbox.value == 'otext2') {
            checkedValues.push(document.getElementById('otext2').value);
        }
        else if (checkbox.value == 'otext3') {
            checkedValues.push(document.getElementById('otext3').value);
        }
        else if (checkbox.value == 'otext4') {
            checkedValues.push(document.getElementById('otext4').value);
        }
        else checkedValues.push(checkbox.value);
    });
    console.log(checkedValues)
    //Skills

    // alert('4')

    // let infos = document.querySelectorAll("input[name = 'info']");
    // let info = [];
    // for (var i of infos) {
    //     info[i] = i.value
    //     console.log(info[i])
    // }
    // alert('YEY')
    let allDATA = [];
    let applicationData = {
        id: Date.now(),
        position: selected,
        gender: gen,
        firstname: document.getElementById('fName').value,
        middlename: document.getElementById('mName').value,
        lastname: document.getElementById('lName').value,
        email: document.getElementById('email').value,
        contactnumber: document.getElementById('contactNumber').value,
        birtdate: document.getElementById('bDate').value,
        address1: document.getElementById('inputAddress1').value,
        address2: document.getElementById('inputAddress2').value,
        cityormunicipality: document.getElementById('inputCity').value,
        postalcode: document.getElementById('inputZip').value,
        stateregion: inputState,
        skills: checkedValues,
        message: document.getElementById('floatingTextarea2').value
        // institution: 
        // major:
        // degree:
        // schoollocation:
        // from:
        // to:
        // title:
        // company:
        // officelocation:
        // from:
        // to:

    };

    allDATA = localStorage.getItem('applicantInfo') ? JSON.parse(localStorage.getItem('applicantInfo')) : [];

    allDATA.push(applicationData);
    allDATA.push(eduArr);
    allDATA.push(worArr);

    localStorage.setItem("applicantInfo", JSON.stringify(allDATA));
    console.table(allDATA);

    var t = confirm('Sending your application!');
    if (t == true) {
        return true;
    }
    else return true;
}
// localStorage.setItem(`${btnVal.value}`, JSON.stringify(inputs));
