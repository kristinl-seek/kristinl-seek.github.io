<!-- Week 1 Practice: 
     <h3>I can google HTML elements. This is h3</h3>
    <h4>this is h4</h4>
    <h5>this is h5</h5>
    <h6>this is h6</h6>
    <p>p this starts a new paragraph: h2, h3, h4, h5, h6, and p those are my 5 googled elements</p> -->

<!-- <h1>This is your first heading for your website</h1>
    <h2></h2> -->
<!-- <p>This starts a new paragraph</p> -->
<!-- This is how to do a note, highlight then command/is a comment about the h2 headings -->

<!-- A media query is a CSS rule that allows you to apply different styles based on the characteristics of the device or browser window viewing the content. This can include factors like:

Screen width: This is the most common use case for media queries. You can apply different styles for different screen sizes, such as mobile, tablet, and desktop.
Screen height: Similar to screen width, you can target specific screen heights.
Orientation: You can apply different styles for portrait and landscape orientations.
Color depth: This allows you to apply different styles based on the number of colors a device can display.
Resolution: You can target devices with different screen resolutions.
Aspect ratio: This allows you to target devices with different aspect ratios (e.g., widescreen vs. standard).
Syntax:

CSS
@media (media-feature: value) {
  /* CSS rules to apply */
}
Use code with caution.

Example:

CSS
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
  .navbar {
    display: none;
  }
}
Use code with caution.

In this example, the CSS rules within the media query will only be applied when the screen width is less than or equal to 768 pixels (e.g., on mobile devices). This allows you to create a responsive design that adapts to different screen sizes. 

Google: "wire frame kits" 

<Copied code from gallery template
!-- headDOCTYPE 
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Portfolio</title>
        <link rel=""stylesheet" href="landingpage.css">
    </head>
    <body>
        < Nav Bar>
        <div class=""nav-bar">
            <div class="link-wrapper">
                <div class="nav-link">
                    <a href="#">Home</a>
                </div>
                <div class="nav-link"> == $0
                    <a href="aboutme.html">About</a>
                </div>
                <div class="nav-link">
                    <a href="portfolio.html">Portfolio</a>
                </div>
                <div class="nav-link">
                    <a href="contact.html">Contact</a>
                </div>
            </div>
        </div>
         < Header>
          <div class="header-wrapper"></div>
    </body>
    </head>

</html> 

header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #b3b3b1;
  color: rgb(6, 0, 0);
  padding: 20px; 
  width: 100%;
  margin: 0 auto; 
  box-shadow: 0px 4 px 6px rgba(0,0,0,0.2);
  flex-wrap: wrap;
}

header img{
  border-radius: 50%;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  height: auto; 
  object-fit: cover;
}

.centerHeader{
  text-align: center; 
}

.intro{
  max-width: 500px;
  text-align: center;
}
/*Styling for Main */

.bodySections{
  padding: 10px;
  width:80%;
  /*align-items:center;*/
  justify-content: space-evenly;
  display: flex;
}

main{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
}

/*Styling for section*/
section{
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.3);
  padding: 20px;
  margin-bottom: 20px; /* adds space at the BOTTOM of each "card" */
  width:100%;/* makes the section take up the full width of the MAIN container    */
  max-width: 800px; /* Limits the width to a MAX of 800px*/
}

.h1Styling{
  font-size : 50px;
  font-style: italic;
}
/*h2{
  border : solid brown 2px ;
  width :fit-content;
}*/

.skillsSection{
  background-color: white;
}
.skills{
 /* border: dashed hotpink 3px;*/
  width: fit-content;
}
footer{
  background-color: #E3F6CB;
  height : 20px;
  font-size : 20px;
}
.centerFooter{
  text-align: center;
}
.linkedinStyling{
  text-decoration : none;
}

body {
  margin: 0 auto;
  padding: 0;
}

.text-over-image {
    position: relative;
}
.text-over-image. {
    position: absolute;
    top: 10;
    left: 0;
    width: 10%;
    height: 10%;
    z-index: -1; /* Send image to the background */
  }

  footer {
    background-color: rgb(250, 251, 251);
    height: 100px;
    font-size:40px;
  }
  .centerFooter {
    text-align: center;
  }
  
a{
  text-decoration: none;
  color:rgb(168, 12, 12);
}-->

<!-->10-12-24
// greeting.style.fontFamily = "Roboto";/

this is the javascript code that I couldn't get to style with the correct font
I'm not going to use this feature on my site anyways, so I'm going to comment it
out for now and not worry about it

Here is my landingpage css code: 
/*
#greeting {
  font-family:'Roboto Slab', serif;
}*/-->

<!--
This is the code that I wrote for my original About me page. 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kristin Lillywhite Instructional Design</title>
    <link rel="stylesheet" href="/aboutme.css">
</head>
    
<body>
    < Nav Bar
     <div class="nav-bar">
        <div class="link-wrapper">
            <div class="nav-link">
                <a href="landingpage.html">Home</a>
            </div>
            <div class="nav-link">
                <a href="aboutme.html">About Me</a>
            </div>
            <div class="nav-link">
                <a href="portfolio.html">Portfolio</a>
            </div>
            <div class="nav-link">
                <a href="contact.html">Contact</a>
            </div>
        </div>
    </div>
            
    < Header>
    <--<div class="header-wrapper">
        <div class="about-container">
            <p class="about-title">About Me</p>
        </div>
        
    <header>
        <img src="assets/LI author headshot.jfif" width="200"" alt="kristin lillywhite headshot">
        <div class="intro">
            <h1>Kristin Lillywhite</h1>
            <p>Resilient and insatiably curious skilled instructional designer. Let's connect!</p>
        </div>
    </header>

    <main>
            <section>
             <h2>About Me </h2>
             <p> Dedicated and versitle instructional designer with a passion for bridging the gap between complex concepts and effective learning experiences. Leveraging a strong foundation in e-Learning and a proven ability to teach, I am seeking to apply my skills to instructional design to develop engaging and innovative learning materials that empower learners to understand and appreciate the intricacies of the world.</p>
            </section>
         
             <section class="skillsSection">
                 <h2 class="skills">Skills</h2>
                 <h4> These are just a few of the skills that set me apart:</h4>
                 <p>Core Instructional Design Skills
                     <ul>
                         <li> Learning Theories: PBL, Bloom's Taxonomy, Vygotsky's Zone of Proximal Development, and adult learning principles</li>
             
                             <li>Instructional Design Models: Familiarity with models like ADDIE, SAM, or the 4D Model.</li>
                 
                             <li>Curriculum Development: Ability to create comprehensive learning plans, objectives, and assessments.</li>
                             <li>Content Development: Skill in creating engaging and informative content, including instructional materials, presentations, and assessments.</li>
                     </ul>
           </section>
     
             <section>
                 <h2>Work Experience</h2>
                 <h4>I would love to discuss how these work experiences have shaped me as a professional. This showcases my ability to add value in a variy of industries</h4>
                     <ul>
                             <li><em> Research Assistant - 
                                 </em>, Seek Labs, April 2024</li>
                             <li> Science Instructor, Beehive Science and Technology Academy, 2022-2023</li>
                             <li> Biotechnology Instructor, Murray High School, 2021-2023</li>
                             <li> Research Assistant, Huntsman Cancer Institue, 2021 - 2022</li>
                         </ul>
                     </ul>
             </section>
  
    </main>
      
        <footer > 
        <p class="centerFooter">Connect with me on <a href="https://www.linkedin.com/in/kristin-lillywhite/">LinkedIn</a></p> 
        </footer>
         
</body>

</html>--> 

<!-->
header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #b3b3b1;
    color: rgb(6, 0, 0);
    padding: 20px; 
    width: 100%;
    margin: 0 auto; 
    box-shadow: 0px 4 px 6px rgba(0,0,0,0.2);
    flex-wrap: wrap;
  }
  
  header img{
    border-radius: 50%;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    max-width: 100%;
    height: auto; 
    object-fit: cover;
  }
  
  .centerHeader{
    text-align: center; 
  }
  
  .intro{
    max-width: 500px;
    text-align: center;
  }
  *Styling for Main *
  
  .bodySections{
    padding: 10px;
    width:80%;
    *align-items:center;*
    justify-content: space-evenly;
    display: flex;
  }
  
  main{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 30px;
  }
  
  *Styling for section*
  section{
    background-color: #fefefe;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.3);
    padding: 20px;
    margin-bottom: 20px; * adds space at the BOTTOM of each "card" *
    width:100%;/* makes the section take up the full width of the MAIN container    *
    max-width: 800px; /* Limits the width to a MAX of 800px*
  }
  
  .h1Styling{
    font-size : 50px;
    font-style: italic;
  }
  /*h2{
    border : solid brown 2px ;
    width :fit-content;
  }*
  
  .skillsSection{
    background-color: white;
  }
  .skills{
   /* border: dashed hotpink 3px;*
  }
  footer{
    background-color: #E3F6CB;
    height : 20px;
    font-size : 20px;
  }
  .centerFooter{
    text-align: center;
  }
  .linkedinStyling{
    text-decoration : none;
  }
  
  body {
    margin: 0 auto;
    padding: 0;
  }
  
  .text-over-image {
      position: relative;
  }
  .text-over-image{
      position: absolute;
      top: 10;
      left: 0;
      width: 10%;
      height: 10%;
      z-index: -1; /* Send image to the background *
    }
  
    footer {
      background-color: rgb(250, 251, 251);
      height: 100px;
      font-size:40px;
    }
    .centerFooter {
      text-align: center;
    }
    
  a{
    text-decoration: none;
    color:rgb(168, 12, 12);
  }
  -->