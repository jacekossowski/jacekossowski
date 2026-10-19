// This function is called when button is clicked
var m_array =
[-7.14134927,  0.12554661,  0.12556795,  0.13282855,  0.13325165,  0.13379749,
  0.13436544,  0.13548381,  0.13555242,  0.13559435,  0.13819853,  0.13820615,
  0.1382092 ,  0.13826028,  0.13867042,  0.138691  ,  0.13879468,  0.1388915 ,
  0.13891208,  0.13944878,  0.14008229,  0.14009906,  0.14011583,  0.14020502,
  0.14069521,  0.14072037,  0.14073638,  0.14077069,  0.14084082,  0.14084387,
  0.14117168,  0.14123953,  0.14130281,  0.14133864,  0.1413737 ,  0.14137523,
  0.14149111,  0.14149873,  0.14152389,  0.14156658,  0.14170761,  0.14232969,
  0.14235942,  0.14246234,  0.1430219 ,  0.14303028,  0.14312634,  0.14798859,
  0.14802137,  0.14955522,  0.14999967,  0.15044488];


var m = 19846970.78846154;
var s = 1311737.6619089062;
var P = 1873;
var r = 6;
var c = 10;

function funcA(x){

    if ( x >= m_array[m_array.length-1]){
	return -1;
    }
    if (x <= m_array[0]){
	return -1;
    }
    for (let i=0; i<m_array.length-1; i++){
        if (x > m_array[i] && x < m_array[i+1]){
            return (i+1);
	}
    }

    return -1;
}

function funcB(id){
    var A = (id - m)/s;
    var B = funcA(A);
    if (B == -1)
	return -1;
    var C = (B*P) % (r*c);
    var D = C-1;
    var E = Math.floor(D/c)+1
    var F = (D % c) + 1
    return [E, F]
}


function findSeating() {
    var studentID = document.getElementById("myTextbox").value;
        var assignedSeatTextBox = document.getElementById("assignedSeat");

        // Assign the paragraph element a value
    assignedSeatTextBox.innerHTML = String(funcB(studentID));

    }

document.getElementById("myButton").addEventListener("click", findSeating);
