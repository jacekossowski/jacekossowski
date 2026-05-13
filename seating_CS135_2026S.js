// This function is called when button is clicked
var m_array =
 [-9.11029339,  0.07798554 ,  0.09304645,  0.09592106,  0.10077053,  0.10090925,
  0.10099884 , 0.10113564  , 0.10118573 , 0.10122427 , 0.10129459 , 0.10233789 ,
  0.10431467 , 0.10877398  , 0.1087788  , 0.1088366  , 0.10888958 , 0.10893775 ,
  0.10895606 , 0.10898399  , 0.10900326 , 0.10916606 , 0.10921038 , 0.10924217 ,
  0.1092441  , 0.10959186  , 0.10959572 , 0.10968723 , 0.10969109 , 0.10971613 ,
  0.1097932  , 0.10986738  , 0.10997624 , 0.10998491 , 0.10999839 , 0.11000803 ,
  0.11006679 , 0.11010821  , 0.11110238 , 0.11114862 , 0.11114959 , 0.11115055 ,
  0.11116982 , 0.11137116  , 0.11162452 , 0.11163704 , 0.11170447 , 0.11191256 ,
  0.11194724 , 0.11197614  , 0.11261387 , 0.11265818 , 0.11268227 , 0.1128364  ,
  0.11286241 , 0.11287012  , 0.11297031 , 0.11298765 , 0.11303967 , 0.11306086 ,
  0.1130782  , 0.11309747  , 0.11311866 , 0.11314563 , 0.11318513 , 0.11327183 ,
  0.11327472 , 0.11334408  , 0.11336046 , 0.11343945 , 0.11344812 , 0.11346932 ,
  0.11350303 , 0.11366969  , 0.11374002 , 0.11375543 , 0.11376988 , 0.11385273 ,
  0.11387392 , 0.11391727  , 0.11394425 , 0.11423517 , 0.11426119 , 0.1147891
 ];
                        
var m = 19925049.45238095;
var s = 1038051.964855616;
var P = 1877;
var r = 7;
var c = 12;

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
