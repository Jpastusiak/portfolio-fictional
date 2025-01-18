<!DOCTYPE html>
<html>
  <head>
    <title>Julia Fragale - Portfolio</title>
    <link rel="stylesheet" href="./style.css"/>
    <script src="./script.js"></script>
  </head>
  <body>
    <!-- Navigation Bar -->
    <nav>
      <div id="home">
        <div class="profile_name">
          Julia Fragale
          <div class="contact_info">
            <img src="html_finalprojimages/envelope.png" alt="https://icons8.com/icon/124377/circled-envelope"/>
          pastusiakjulia01@gmail.com
        </div>
        <div style="clear:both;"></div>
        <div class="contact_info">
          <img src="html_finalprojimages/phone.png" alt="https://icons8.com/icon/124377/circled-envelope"/>
          +13456764598

        </div>
        </div>
        <div class="topdiv">
          <a class="topmenu" href="#about-me">About Me</a>
          <a class="topmenu" href="#skills">Skills</a>
          <a class="topmenu" href="#projects">Projects</a>
          <a class="topmenu" href="#recommendations">Recommendations</a>
        </div>
      </div>    
    </nav>

    <!-- About Me -->
    <section id="about-me" class="container">
      <div>
        <img src="html_finalprojimages/ai-generated-8694039_1280.jpg" class="profile_image"/> <!--https://cdn.pixabay.com/photo/2024/04/13/14/49/ai-generated-8694039_1280.jpg-->
      </div>

      <div>
          <h1>
            Hi, I'm Julia Fragale! <img src="html_finalprojimages/waving-hand.png" width="60px"/>
          </h1>
          <p>
            I am a passionate designer with a strong enthusiasm for technology and a commitment to personal growth. Constantly eager to learn, I am currently focusing on expanding my skills in coding and AI to make a meaningful impact in the Med-Tech industry. My goal is to evolve into a full-stack developer, combining my design expertise with technical proficiency to contribute to innovative solutions that improve healthcare.
          </p>
      </div>
    </section>
              
    <!-- Skills -->
    <section id="skills">
      <h2>Skills</h2>
      <div style="clear:both;"></div>

      <div class="all_skills">
        <div class="skill">
          <img src="html_finalprojimages/html5.png"/>
          <h6>HTML</h6>
          <p>2 years experience</p>
        </div>  

        <div class="skill">
          <img src="html_finalprojimages/js.jpeg"/>
          <h6>JavaScript</h6>
          <p>2 years experience</p>
        </div>  

        <div class="skill">
            <img src="html_finalprojimages/web-3482970_1280.png"/> <!--https://cdn.pixabay.com/photo/2018/06/18/17/55/web-3482970_1280.png-->
            <h6>UX/UI</h6>
            <p>3 years experience</p>
          </div>

          <div class="skill">
            <img src="html_finalprojimages/post-it-1975188_1280.png"/>
            <h6>Design</h6>
            <p>4 years experience</p> <!--https://cdn.pixabay.com/photo/2017/01/12/17/16/post-it-1975188_1280.png-->
          </div>

          <div class="skill">
            <img src="html_finalprojimages/world-map-146505_1280.png"/>
            <h6>Languages: </br> Portuguese and English</h6>
            <p>Fluency</p> <!--https://cdn.pixabay.com/photo/2013/07/12/12/54/world-map-146505_1280.png-->
          </div>

      </div>
    </section>
          
    <!-- Projects -->
    <section class="projects" id="projects">
      <h2>
        Projects
      </h2>
      <div style="clear:both;"></div>

        <div id="projects-container" class="projects-container">
          <div class="project-card">
            <h3>Interaction Platform</h3>
            <ul>
              <li>A mobile application designed to facilitate seamless communication and union between users in different locations, integrating video calls, messaging, and real-time 3D envirionments.</li>
            </ul>
          </div>
          <hr>
          <div class="project-card">
            <h3>Interactive experience</h3>
            <ul>
              <li>An interactive audiovisual experience where viewers can influence the storyline and outcomes through real-time choices, blending traditional media with dynamic user participation.</li>
            </ul>
          </div>
          <hr>
          <div class="project-card">
            <h3>Game: Mermaid</h3>
            <ul>
              <li>A gamified environmental adventure where players control a mermaid character tasked with cleaning the ocean, rescuing marine life, and raising awareness about ocean pollution.</li>
            </ul>
          </div>
    </div>
    </section>
    <div style="clear:both;"></div>

    <!-- Recommendations -->
    <section id="recommendations">
      <h2>Recommendations</h2>
      <div style="clear:both;"></div>
      <div class="all_recommendations" id="all_recommendations">
        <div class="recommendation">
          <span>&#8220;</span>
          Julia is an incredibly proactive professional who thrives on learning and adapting. 
          Her problem-solving skills, effective task management, and ability to collaborate make her an exceptional team member.
          <span>&#8221;</span>
          <legend>Jonny R.</legend>
        </div>
        <div class="recommendation">
          <span>&#8220;</span>
          Julia's proactive approach and love for learning are truly inspiring. 
          She tackles challenges with ease, excels in problem resolution, and always contributes positively to team dynamics and task management.
          <span>&#8221;</span>
          <legend>Rachel G.</legend>
        </div>
        <div class="recommendation">
          <span>&#8220;</span>
          Julia consistently demonstrates great initiative and eagerness to learn. 
          She excels in task management, resolving problems swiftly, and her ability to collaborate makes her an outstanding asset to any team. 
          <span>&#8221;</span>
          <legend>Astarion A.</legend>
        </div>
      </div>
    </section>

    <!-- Recommendation Form -->
    <section id="contact">
      <div class="flex_center">
        <fieldset>
          <legend class="introduction">Leave a Recommendation</legend>          
          <input id="new_recommendation_name" type="text" placeholder="Name (Optional)"> <br/>
          <textarea id="new_recommendation" cols="500" rows="10" placeholder="Message"></textarea>
          <div class="flex_center">
            <button id="recommend_btn" onclick="addRecommendation()">Submit</button>
          </div>
        </fieldset>
      </div>
    </section>

    <div class="iconbutton">
      <a href="#home">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" width="63px">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
    </div>

    <div class="popup" id="popup" class="flex_center">
      <img src="html_finalprojimages/checkmark--outline.svg"/>
      <h3>Thank you so much for taking the time to write such a kind recommendation!</h3>
      <button onclick="showPopup(false)">Ok</button>
    </div>
  </body>
</html>
