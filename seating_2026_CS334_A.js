// This function is called when button is clicked
var m_array =
[-3.23478479, -2.55100096, -1.47689   , -1.28444242, -1.21046392, -0.38040442,
 -0.38027509, -0.30784858, -0.30655525, -0.29957126, -0.28314597, -0.27137666,
 -0.00068259,  0.0020334 ,  0.01522537,  0.02376135,  0.034496  ,  0.0485933 ,
  0.14481709,  0.17120103,  0.18141834,  0.19422231,  0.27880613,  0.28359145,
  0.28915277,  0.30208607,  0.30958739,  0.32562469,  0.40736318,  0.90503674,
  0.97914458,  0.98250724,  1.24091467,  1.53838068,  1.66021241,  1.66693773];


var m = 20031339.777777776;
var s = 7731.97582593476;
var P = 1873;
var r = 9;
var c = 4;

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
