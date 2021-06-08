import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";



function GoToPage(){
  window.location.replace('/findJobs');
  return <p> This is Find job page</p>
  }



function CustomChatbot(props) {
  const config = {
    width: "350px",
    height: "450px",
    floating: true,
    
   
  };

  const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#42a5f5",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#42a5f5",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a" 
    
  };
  
  const steps = [
    
    {
      id: "Greet",
      message: "Hi I'm a Genie Jobs Bot let's start looking for your dream job. I will use my super powers to fulfil your dreams",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please let me know your name?",
      trigger: "Waiting user input for name"
    },
    {
      id: "Waiting user input for name",
      user: true,
      /* 
      validator: (value) => {
        if (isNaN(value)) {
          return 'value should be a Name';
        }
        return true;
      },
      */
      trigger: "Asking options what I Can Help you?"
    },
    
    {
      id:'Asking options what I Can Help you?', 
      message:'Hi {previousValue}, Do you agree to the Terms and Conditions of Access Jobs?', 
      trigger:'intro-user',
    },
    
    {
      id:'intro-user', 
      options:[
      {value:'y', label:'Yes', trigger:'yes-response'},
      {value:'n', label:'No', trigger:'no-response'},
      ] 
    },
    {
      id:'yes-response', 
      message:'Great!', 
      end:true,
    },
    {
      id:'no-response', 
      message:'Sorry to hear that, i cant to help you :(.', 
      end:true,
    },
    {
      id: "yes-response",
      message: "Ok thank to hear that , Please click on what you need?",
      trigger: "Displaying options to what you need?"
    },
    {
      id: "Displaying options to what you need?",
      options: [
        {
          value: "Find Jobs",
          label: "Find Jobs",
          trigger: "Asking for If you need a jobs what type you need?"
        },

        { 
        value: "Post Jobs",
        label: "Post Jobs", 
        trigger: "It is a Company to post job" }
      ]
    },
    {
      id: "It is a Company to post job",
      message:"Hi Sir please, you can post many jobs you need after login, if you need to help to Know how can you posting a job? ", 
      trigger: "Asking for posting a job"
    },
    
    {
      id: "Asking for posting a job",
      options: [
        { 
          value: true, 
          label: "Yes", 
          trigger: "company chose the choisess after he dont need to go post job" },

        { value: false, 
          label: "No", 
          trigger: "Done" }
      ]
    },
    {
      id: "Asking for If you need a jobs what type you need?",
      
      message: "What type of jobs you need?, Please Select one ",
      trigger: "Full-Time"
    },
    {
      id: "Full-Time",
      options: [
        {
          value: true,
          label: "Full-Time",
          component:<GoToPage />,
          asMessage: true,
          trigger:"tanks"
        },
        {
          value: true,
          label: "Part-Time",
          component:<GoToPage />,
          asMessage: true,
          trigger:"tanks"
        },{
          value: true,
          label: "By-Contract",
          component:<GoToPage />,
          asMessage: true,
          trigger:"tanks"
        }
      ]
    },

    {
      id: "tanks",
      message: "Thanks for use me :)",
      end: true
    },

    
    {
      id: "company chose the choisess after he dont need to go post job",
      options: [
        {
          value: true,
          label: "See Our Services",
          
          trigger:"tanks"
        },
        {
          value: true,
          label: "See Our Pricing",
          
          trigger:"tanks"
        },{
          value: true,
          label: "See All Jobs",
         
          trigger:"tanks"
        }
      ]
    },
   

    
    {
      id: "Done",
      message: "How can i help you sir??",
      end: true
    },
    
    
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />
    </ThemeProvider>
  );
}

export default CustomChatbot;
