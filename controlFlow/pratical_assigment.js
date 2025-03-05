
// Practice task

let isLoggedInPracticeTask = confirm("Are you log in");
let person = prompt( "What are you : \n Employee \n Enrolled Member \n Subscriber \n Non-Subscriber " )

let message ;

switch(person) {
    case "Employee":
        message = "Full access to Dietary Services";
        break;
    case "Enrolled Member":
        message = "Full access to Dietary Services and one-on-one interaction with a dietician";
        break;
    case "Subscriber":
        message = "Partial access to Dietary Services";
        break;
    case "Non-Subscriber":
        message = "not access";
        break;
    default:
        message = "not access";
        break;
}

alert(message);