// var grate_people=['albert','hello']

// let  list1=document.getElementById("list")
// grate_people.forEach(artist=>{
//     let listItem=document.createElement('li')

//     listItem.textContent=artist
//     list1.appendChild(listItem)
// })

var quote=[
  {
    speech:"He alone sees truly who sees the Lord the same in every creature...seeing the same Lord everywhere, he does not harm himself or others.",
    lord:"images/krishna.webp",
    lord_name:"Lord Krishna",
    speech_color:"#99ddff",
    lord_color:"#ffff1a",
    back_color:"#ff6666"
  },
  {
    speech:"The soul is its own witness; the soul is its own refuge. Therefore, one should carefully watch over oneself.",
    lord:"images/mahavir1.jpeg",
    lord_name:"Lord Mahavir",
    speech_color:"#80ff80",
    lord_color:"#ffff1a",
    back_color:"#ffb3ff"
  }
  ,
  {
    speech:"Arise, awake, and stop not until the goal is reached.",
    lord:"images/swami.webp",
    lord_name:"Swami Vivekananda",
    speech_color:" #e6ffff",
    lord_color:"#ff4d94",
    back_color:"#334d00"
  },
  {
    speech:"The best way to find yourself is to lose yourself in the service of others.",
    lord:"images/krishna.webp",
    lord_name:"Lord Krishna",
    speech_color:" #ffff99",
    lord_color:"#269900",
    back_color:"#4d0000"
  },
  {
    speech:"You cannot believe in God until you believe in yourself.",
    lord:"images/swami1.jpeg",
    lord_name:"Swami Vivekananda",
    speech_color:"yellow",
    lord_color:"white",
    back_color:"#002200"
  },
   {
    speech:"The only way you can conquer me is through love, and there I am gladly conquered.",
    lord:"images/krishna2.webp",
    lord_name:"Lord Krishna",
    speech_color:"white",
    lord_color:" #80ff80",
    back_color:"#3333ff"
  },
   {
    speech:"You cannot believe in God until you believe in yourself.",
    lord:"images/swami2.jpeg",
    lord_name:"Swami Vivekananda",
    speech_color:"white",
    lord_color:" #80ff80",
    back_color:"#003300"
  },
  {
    speech:"Peace comes from within. Do not seek it without.",
    lord:"images/buddha1.jpeg",
    lord_name:"Lord Buddha",
    speech_color:"yellow",
    lord_color:"white",
    back_color:"#b30047"
  },
  {
    speech:"Non-violence is the highest religion.",
    lord:"images/mahavir2.jpeg",
    lord_name:"Lord Mahavir",
    speech_color:"white",
    lord_color:"red",
    back_color:"#b30047"
  },
  {
    speech:"When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    lord:"images/krishna3.webp",
    lord_name:"Lord Krishna",
    speech_color:"white",
    lord_color:"red",
    back_color:" #404040"
  },
  {
    speech:"Faith is the heroism of the intellect.",
    lord:"images/swami3.jpeg",
    lord_name:"Swami Vivakananda",
    speech_color:"white",
    lord_color:"#0000ff",
    back_color:" #003300"
  },
  
]
let index=0
function chengeQuotes(){
    let back_ground=document.getElementById("art_quote")
    let list=document.getElementById("cal")
    let img_div=document.getElementById("lord")
    let lord_name=document.getElementById("name1")
    
    
    let que=quote[index];


    back_ground.style.backgroundColor=que.back_color
    list.style.color=que.speech_color
    list.innerText=que.speech

    img_div.src=que.lord
   
    lord_name.style.color=que.lord_color
    lord_name.innerText=que.lord_name

    index=(index+1)%(quote.length)

}



