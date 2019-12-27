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
            Brenda:{
                id:1,
                name:"Brenda Vollrath",
                age:getAge('07/24/1945'),
                birthday:'07/24/1945',
                bio:'Mother of seven kids - Grandmother of many more',
                image:'IMAGES/brenda.jpg'
            },
            Alton:{
                id:2,
                name:"Alton Vollrath",
                age:getAge('08/21/1937'),
                birthday:'08/21/1937',
                bio:'Father of seven kids - Grandfather of many more',
                image:'IMAGES/Alton.jpg'
            },
            Harrison:{
                id:3,
                name:"Harrison Smith",
                age:getAge('02/25/1967'),
                birthday:'02/25/1967',
                bio:'Father of one - Karis Smith',
                image:'IMAGES/Harrison.jpg'
            },
            Sandy:{
                id:4,
                name:"Sandy Smith",
                age:getAge('06/28/1974'),
                birthday:'06/28/1974',
                bio:'Mother of one - Karis Smith',
                image:'IMAGES/Sandy.jpg'
            },
            Donald:{
                id:5,
                name:"Donald Smith",
                age:getAge('07/31/1968'),
                birthday:'07/31/1968',
                bio:'Brother, despite everything, we will always love him. He made poor decisions but it is important to remmber that we can forgive him when he seeks forgivness. Do not let his worst actions define him. People can change, and if we are willing to let them do it and accept them when they do, then that change can be permanent. Forgivness can only be given to those who seek it, but if they should seek it, we should consider the path forward.',
                image:'IMAGES/Donald.jpg'
            },
            Matt:{
                id:6,
                name:"Matthew Smith",
                age:getAge('08/01/1970'),
                birthday:'08/01/1970',
                bio:"Borther",
                image:'IMAGES/Matt.jpg'
            },
            Joe:{
                id:7,
                name:"Joseph Smith",
                age:getAge('01/24/1973'),
                birthday:'01/24/1973',
                bio:"Brother, and a crazy one",
                image:'IMAGES/Joe.jpg'
            },
            Tracy:{
                id:8,
                name:"Tracy Vollrath",
                age:getAge('09/30/1974'),
                birthday:'09/30/1974',
                bio:"Another brother, another crazy one",
                image:'IMAGES/Tracy.jpg'
            },
            Katie:{
                id:9,
                name:"Katie Mitchell",
                age:getAge('11/02/1977'), 
                birthday:'11/02/1977',
                bio:"Rich Sister type beat",
                image:'IMAGES/Katie.jpg'
            },
            Jason:{
                id:10,
                name:"Jason Mitchell",
                age:getAge('06/14/1977'), 
                birthday:'06/14/1977',
                bio:"Rich In-Law type beat",
                image:'IMAGES/Jason.jpg'
            },
            Cody:{
                id:11,
                name:"Cody Vollrath",
                age:getAge('09/15/1997'),
                birthday:'09/15/1997',
                bio:'Brogammer',
                image:'IMAGES/Cody.jpg'
            },
            Haleigh:{
                id:12,
                name:"Haleigh Riddle",
                age:getAge('02/27/1991'),
                birthday:'02/27/1991',
                bio:'Photography',
                image:'IMAGES/Haleigh.jpg'
            },
            Nikki:{
                id:13,
                name:"Nikki Smith",
                age:getAge('05/30/1992'),
                birthday:'05/30/1992',
                bio:'Works',
                image:'IMAGES/Nikki.jpg'
            }
        }
    },
    methods: {

    }
})