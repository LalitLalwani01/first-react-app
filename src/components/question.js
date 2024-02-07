import Card from './card'
function Question() {
  let QandA = [
    { question: "1.Who is the President of India?", ans: "Drapaudi Murmu",options:["Radheshyam","Vishal","Ram Suthar","Drapaudi Murmu"]},
    { question: "2.What is the capital of India?", ans: "Delhi",options:["Jaipur","Kolkata","Delhi","Kerala"] },
    { question: "3.What is the capital of Rajasthan?", ans: "a",options:["Jaipur","Ajmer","Hanumangarh","Bikaner"] },
    { question: "4.What is the National Game of India?", ans: "c",options:["Table Tennis","Cricket","Hockey","Kho-Kho"] },
    { question: "5.What is the National Game of Australia?", ans: "b",options:["Table Tennis","Cricket","Vollyball","Kho-Kho"] },
  ];

  return <>
     <Card question={QandA} ></Card>

  </>;


}

export default Question;
