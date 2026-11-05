const url="https://api.frankfurter.dev/v2/rate"
let dropdowns=document.querySelectorAll(".comb")
for(let dropdown of dropdowns){
    for(let code in countrylist){
    op=document.createElement("option")
    op.innerText=code
    op.value=code
    if(dropdown.name=='from' && code=='USD'){
        op.selected=code
    }
    else if(dropdown.name=='to' && code=='INR'){
        op.selected=code
    }
    dropdown.append(op)
}
dropdown.addEventListener("change",(e)=>{
    updateflag(e.target)
        })
}
const updateflag=(element)=>{
    currcode=element.value
    country=countrylist[currcode]
    let flag_url=`https://flagcdn.com/w40/${country.toLowerCase()}.png`
    if(element.name=="from"){
    img=document.querySelector("#start")
    img.src=flag_url
}
else{
     img=document.querySelector("#end")
     img.src=flag_url
}
}
let btn=document.querySelector("button")
let amt=document.querySelector("#amount")
s1=document.querySelector("#from")
s2=document.querySelector("#to")
txt=document.querySelector("p")
currconverter=async()=>{
    baseurl=`${url}/${s1.value}/${s2.value}`
    response=await fetch(baseurl)
    data=await response.json()
    if(amt.value>0){
    txt.innerText=`${amt.value}${s1.value}=${amt.value*data['rate']}${s2.value}`
    }
    else{
        amt.value='1'
    }
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault()
    currconverter()
})