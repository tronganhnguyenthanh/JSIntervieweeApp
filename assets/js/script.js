function loginAccount(){
  let username = document.querySelector(".login-input").value
  let password = document.querySelector(".login-password").value
  if(username === ""){
   document.querySelector("#error").innerHTML = "<p>" + " Please enter your username " + "</p>"
   return false
  }
  if(password === ""){
   document.querySelector("#error").innerHTML = "<p>" + " Please enter your password " + "</p>"
   return false
  }
  if(password.length < 8){
    document.querySelector("#error").innerHTML = "<p>" + "Your password must be at least 8 characters" + "</p>"
    return false
  }else{
    window.location.href = "form.html"
  }
}

function saveInfoInterviewee(){
  let firstName = document.querySelector(".login-firstname").value
  let lastName = document.querySelector(".login-lastname").value
  let email = document.querySelector(".login-email").value
  let mobile = document.querySelector(".login-phone").value
  let checkIn = document.querySelector(".login-checkin").value
  let checkOut = document.querySelector(".login-checkout").value
  let candidates = {
   firstName:firstName,
   lastName:lastName,
   email:email,
   mobile:mobile,
   checkIn:checkIn,
   checkOut:checkOut
  }

  if(candidates.firstName === ""){
    document.querySelector("#error").innerHTML = "<p>" + " Please enter your firstname" + "</p>"
    return false
  }

  if(candidates.lastName === ""){
    document.querySelector("#error").innerHTML = "<p>" + " Please enter your lastname" + "</p>"
    return false
  }

  if(candidates.email === ""){
    document.querySelector("#error").innerHTML = "<p>" + " Please enter your email" + "</p>"
    return false
  }

  if(candidates.mobile === ""){
    document.querySelector("#error").innerHTML = "<p>" + " Please enter your mobile" + "</p>"
    return false   
  }

  if(candidates.mobile.length < 10){
    document.querySelector("#error").innerHTML = "<p>" + " Please enter at least 10 characters" + "</p>"
    return false
  }

  if(candidates.checkIn === ""){
    document.querySelector("#error").innerHTML = "<p>" + " Please choose your checkin time" + "</p>"
    return false
  }

  if(candidates.checkOut === ""){
   document.querySelector("#error").innerHTML = "<p>" + " Please choose your checkout time" + "</p>"
   return false
  }
  localStorage.setItem("firstName", candidates.firstName)
  localStorage.setItem("lastName", candidates.lastName)
  localStorage.setItem("email", candidates.email)
  localStorage.setItem("mobile", candidates.mobile)
  localStorage.setItem("checkin", candidates.checkIn)
  localStorage.setItem("checkout", candidates.checkOut)
  window.location.href = "view-candidate.html"
}

function getInfoCandidateInDetail(){
  let showFirstName = localStorage.getItem("firstName")
  let showLastName = localStorage.getItem("lastName")
  let showEmail = localStorage.getItem("email")
  let showMobile = localStorage.getItem("mobile")
  let showCheckIn = localStorage.getItem("checkin")
  let showCheckOut = localStorage.getItem("checkout")
  let output = "<label>"
   output = `<div class="candidate">
        Firstname: 
        <span class="info">${showFirstName}</span>
        <br/> Lastname: <span class="info">${showLastName}</span>
        <br/> Email: <span class="info">
          <a href="mailto:${showEmail}">${showEmail}</a>
        </span>
        <br/> Mobile: <span class="info">
          <a href="tel:${showMobile}">${showMobile}</a>
        </span>
       <br/> Checkin: <span class="info">${showCheckIn}</span>
       <br/> Checkout: <span class="info">${showCheckOut}</span>
     </span>
   </div>`
  output += "</label>"
  document.querySelector("#webpage").innerHTML = output
}

getInfoCandidateInDetail()