/**
 * Takes the birthday of the individual and calculates the age based on todays date
 * @precondition dateOfBirth must not be null or empty and fit the proper date format "01/01/1999"
 * @postcondition none
 * @param {*} dateOfBirth 
 * @return {*} age  
 */
function getAge(dateOfBirth){
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}
var family = new Vue({
    el:'#familyData',
    data: {
        members:{
            brenda:{
                id:1,
                name:"Brenda Vollrath",
                age:getAge('07/24/1945'),
                bio:'Mother of seven kids - Grandmother of many more',
                image:'IMAGES/brenda.jpg'
            },
            alton:{
                id:2,
                name:"Alton Vollrath",
                age:getAge('08/21/1937'),
                bio:'Father of seven kids - Grandfather of many more',
                image:'IMAGES/Alton.jpg'
            },
            Harrison:{
                id:3,
                name:"Harrison Smith",
                age:getAge('02/25/1967'),
                bio:'Father of one - Karis Smith',
                image:'IMAGES/Harrison.jpg'
            },
            Sandy:{
                id:4,
                name:"Sandy Smith",
                age:getAge('06/28/1974'),
                bio:'Mother of one - Karis Smith',
                image:'IMAGES/Sandy.jpg'
            }
        }
    },
    methods: {

    }
})