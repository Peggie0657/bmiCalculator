let data=JSON.parse(localStorage.getItem('bmiData'))||[]
const btn=document.querySelector('.btn') 
const list=document.querySelector('.list')
const resetBtn=document.getElementById('resetId')

btn.addEventListener('click',calculate)
resetBtn.addEventListener('click',reset)
list.addEventListener('click',dele)
updateList(data)

function calculate(e){
    let heightData=document.querySelector('.textHeight').value
    let weightData=document.querySelector('.textWeight').value
    if (!isNaN(heightData)&&!isNaN(weightData)) {
        if (heightData>0 && weightData>0) {
            document.querySelector('.warningHeight').innerHTML=('')
            document.querySelector('.warningWeight').innerHTML=('')
            let bmiResult=Math.round(weightData/((heightData*0.01)**2).toFixed(2))
            let result=''
            let bmi1=''
            let bmi2='BMI'
            let bmi3=''
            let today=new Date()
            let reset=''
            let year=today.getFullYear()
            let month=today.getMonth()+1
            let day=today.getDate()
            let dateAll=year+'/'+month+'/'+day
            if (bmiResult<18.5) {
                result="體重過輕"
                bmi1=bmiResult
                bmi3="過輕"
                reset='<img src="JavaScript_HomeWork-gh-pages/assets/icons_loop.png">'
                document.querySelector('.bmiResult').style.color='#31BAF9'
                document.querySelector('.bmiResult').style.fontSize='32px'
                document.querySelector('.btn').setAttribute("class",'btnLight')
                document.querySelector('.bmi').classList.add('light')
                document.querySelector('.condition').classList.add('light')
                document.querySelector('.bmiResult').innerHTML=bmi1
                document.querySelector('.bmi').innerHTML=bmi2
                document.querySelector('.condition').innerHTML=bmi3
                document.querySelector('.reset').innerHTML=reset
                document.querySelector('.reset').classList.add('resetLight')
            } else if (18.5<=bmiResult&&bmiResult<25) {
                result="理想體重"
                bmi1=bmiResult
                bmi3="理想"
                reset='<img src="JavaScript_HomeWork-gh-pages/assets/icons_loop.png">'
                document.querySelector('.bmiResult').style.color='#86D73F'
                document.querySelector('.bmiResult').style.fontSize='32px'
                document.querySelector('.btn').setAttribute("class",'btnNormal')
                document.querySelector('.bmi').classList.add('normal')
                document.querySelector('.condition').classList.add('normal')
                document.querySelector('.bmiResult').innerHTML=bmi1
                document.querySelector('.bmi').innerHTML=bmi2
                document.querySelector('.condition').innerHTML=bmi3
                document.querySelector('.reset').innerHTML=reset
                document.querySelector('.reset').classList.add('resetNormal')
            } else if (25<=bmiResult&&bmiResult<30) {
                result="體重過重"
                bmi1=bmiResult
                bmi3="過重"
                reset='<img src="JavaScript_HomeWork-gh-pages/assets/icons_loop.png">'
                document.querySelector('.bmiResult').style.color='#FF982D'
                document.querySelector('.bmiResult').style.fontSize='32px'
                document.querySelector('.btn').setAttribute("class",'btnHeavy')
                document.querySelector('.bmi').classList.add('heavy')
                document.querySelector('.condition').classList.add('heavy')
                document.querySelector('.bmiResult').innerHTML=bmi1
                document.querySelector('.bmi').innerHTML=bmi2
                document.querySelector('.condition').innerHTML=bmi3
                document.querySelector('.reset').innerHTML=reset
                document.querySelector('.reset').classList.add('resetHeavy')
            } else if (30<=bmiResult&&bmiResult<35) {
                result="輕度肥胖"
                bmi1=bmiResult
                bmi3="輕度肥胖"
                reset='<img src="JavaScript_HomeWork-gh-pages/assets/icons_loop.png">'
                document.querySelector('.bmiResult').style.color='#FF6C03'
                document.querySelector('.bmiResult').style.fontSize='32px'
                document.querySelector('.btn').setAttribute("class",'btnObese12')
                document.querySelector('.bmi').classList.add('obese12')
                document.querySelector('.condition').classList.add('obese12')
                document.querySelector('.bmiResult').innerHTML=bmi1
                document.querySelector('.bmi').innerHTML=bmi2
                document.querySelector('.condition').innerHTML=bmi3
                document.querySelector('.reset').innerHTML=reset
                document.querySelector('.reset').classList.add('resetObese12')
            } else if (35<=bmiResult&&bmiResult<40) {
                result="中度肥胖"
                bmi1=bmiResult
                bmi3="中度肥胖"
                reset='<img src="JavaScript_HomeWork-gh-pages/assets/icons_loop.png">'
                document.querySelector('.bmiResult').style.color='#FF6C03'
                document.querySelector('.bmiResult').style.fontSize='32px'
                document.querySelector('.btn').setAttribute("class",'btnObese12')
                document.querySelector('.bmi').classList.add('obese12')
                document.querySelector('.condition').classList.add('obese12')
                document.querySelector('.bmiResult').innerHTML=bmi1
                document.querySelector('.bmi').innerHTML=bmi2
                document.querySelector('.condition').innerHTML=bmi3
                document.querySelector('.reset').innerHTML=reset
                document.querySelector('.reset').classList.add('resetObese12')
            } else if (40 <= bmiResult) {
                result="重度肥胖"
                bmi1=bmiResult
                bmi3="重度肥胖"
                reset='<img src="JavaScript_HomeWork-gh-pages/assets/icons_loop.png">'
                document.querySelector('.bmiResult').style.color='#FF1200'
                document.querySelector('.bmiResult').style.fontSize='32px'
                document.querySelector('.btn').setAttribute("class",'btnObese3')
                document.querySelector('.bmi').classList.add('obese3')
                document.querySelector('.condition').classList.add('obese3')
                document.querySelector('.bmiResult').innerHTML=bmi1
                document.querySelector('.bmi').innerHTML=bmi2
                document.querySelector('.condition').innerHTML=bmi3
                document.querySelector('.reset').innerHTML=reset
                document.querySelector('.reset').classList.add('resetObese3')
            }
            let resultData={condition:result,bmi:bmiResult,weight:weightData,height:heightData,date:dateAll}
            data.push(resultData)
            updateList(data)
            localStorage.setItem('bmiData',JSON.stringify(data))
            document.querySelector('.textHeight').setAttribute("readonly",'readonly')
            document.querySelector('.textWeight').setAttribute("readonly",'readonly')
        }else if (heightData<=0 && weightData<=0) {
            document.querySelector('.warningHeight').innerHTML=('請輸入正確的值')
            document.querySelector('.warningWeight').innerHTML=('請輸入正確的值')
        }else if (heightData<=0) {
            document.querySelector('.warningHeight').innerHTML=('請輸入正確的值')
            document.querySelector('.warningWeight').innerHTML=('')
        }else if (weightData<=0) {
            document.querySelector('.warningWeight').innerHTML=('請輸入正確的值')
            document.querySelector('.warningHeight').innerHTML=('')
        }
    }else{
        if (isNaN(heightData)&&isNaN(weightData)) {
            document.querySelector('.warningHeight').innerHTML=('請輸入正確的值')
            document.querySelector('.warningWeight').innerHTML=('請輸入正確的值')
        }else if(isNaN(heightData)){
            document.querySelector('.warningHeight').innerHTML=('請輸入正確的值')
            document.querySelector('.warningWeight').innerHTML=('')
        }else if (isNaN(weightData)) {
            document.querySelector('.warningWeight').innerHTML=('請輸入正確的值')
            document.querySelector('.warningHeight').innerHTML=('')
        }
    }
}
function updateList(items){
    let str=''
    let all=''
    let len=items.length
    for (var i = 0; i < len; i++) {
        if (items[i].condition=="體重過輕") {
            str='<li style="border-left:7px solid #31BAF9;width:624px;height:62px;margin:8px auto;display:flex;justify-content:space-around;align-items:center;background-color:#ffffff;"><div>'+items[i].condition+'</div><div><span style="font-size:12px;">BMI</span><span style="margin-left:4px">'+items[i].bmi+'</span></div><div><span style="font-size:12px;">身高</span><span style="margin-left:4px">'+items[i].height+'</span></div><div><span style="font-size:12px;">體重</span><span style="margin-left:4px">'+items[i].weight+'</span></div><span style="font-size:12px;">'+items[i].date+'</span><img data-index='+i+' src="JavaScript_HomeWork-gh-pages/assets/cross-mark.png" style="width:14px;height:14px;cursor:pointer;"></li>'
        } else if (items[i].condition=="理想體重") {
            str='<li style="border-left:7px solid #86D73F;width:624px;height:62px;margin:8px auto;display:flex;justify-content:space-around;align-items:center;background-color:#ffffff;"><div>'+items[i].condition+'</div><div><span style="font-size:12px;">BMI</span><span style="margin-left:4px">'+items[i].bmi+'</span></div><div><span style="font-size:12px;">身高</span><span style="margin-left:4px">'+items[i].height+'</span></div><div><span style="font-size:12px;">體重</span><span style="margin-left:4px">'+items[i].weight+'</span></div><span style="font-size:12px;">'+items[i].date+'</span><img data-index='+i+' src="JavaScript_HomeWork-gh-pages/assets/cross-mark.png" style="width:14px;height:14px;cursor:pointer;"></li>'
        } else if (items[i].condition=="體重過重") {
            str='<li style="border-left:7px solid #FF982D;width:624px;height:62px;margin:8px auto;display:flex;justify-content:space-around;align-items:center;background-color:#ffffff;"><div>'+items[i].condition+'</div><div><span style="font-size:12px;">BMI</span><span style="margin-left:4px">'+items[i].bmi+'</span></div><div><span style="font-size:12px;">身高</span><span style="margin-left:4px">'+items[i].height+'</span></div><div><span style="font-size:12px;">體重</span><span style="margin-left:4px">'+items[i].weight+'</span></div><span style="font-size:12px;">'+items[i].date+'</span><img data-index='+i+' src="JavaScript_HomeWork-gh-pages/assets/cross-mark.png" style="width:14px;height:14px;cursor:pointer;"></li>'
        }  else if (items[i].condition=="輕度肥胖") {
            str='<li style="border-left:7px solid #FF6C03;width:624px;height:62px;margin:8px auto;display:flex;justify-content:space-around;align-items:center;background-color:#ffffff;"><div>'+items[i].condition+'</div><div><span style="font-size:12px;">BMI</span><span style="margin-left:4px">'+items[i].bmi+'</span></div><div><span style="font-size:12px;">身高</span><span style="margin-left:4px">'+items[i].height+'</span></div><div><span style="font-size:12px;">體重</span><span style="margin-left:4px">'+items[i].weight+'</span></div><span style="font-size:12px;">'+items[i].date+'</span><img data-index='+i+' src="JavaScript_HomeWork-gh-pages/assets/cross-mark.png" style="width:14px;height:14px;cursor:pointer;"></li>'
        } else if (items[i].condition=="中度肥胖") {
            str='<li style="border-left:7px solid #FF6C03;width:624px;height:62px;margin:8px auto;display:flex;justify-content:space-around;align-items:center;background-color:#ffffff;"><div>'+items[i].condition+'</div><div><span style="font-size:12px;">BMI</span><span style="margin-left:4px">'+items[i].bmi+'</span></div><div><span style="font-size:12px;">身高</span><span style="margin-left:4px">'+items[i].height+'</span></div><div><span style="font-size:12px;">體重</span><span style="margin-left:4px">'+items[i].weight+'</span></div><span style="font-size:12px;">'+items[i].date+'</span><img data-index='+i+' src="JavaScript_HomeWork-gh-pages/assets/cross-mark.png" style="width:14px;height:14px;cursor:pointer;"></li>'
        } else if (items[i].condition=="重度肥胖") {
            str='<li style="border-left:7px solid #FF1200;width:624px;height:62px;margin:8px auto;display:flex;justify-content:space-around;align-items:center;background-color:#ffffff;"><div>'+items[i].condition+'</div><div><span style="font-size:12px;">BMI</span><span style="margin-left:4px">'+items[i].bmi+'</span></div><div><span style="font-size:12px;">身高</span><span style="margin-left:4px">'+items[i].height+'</span></div><div><span style="font-size:12px;">體重</span><span style="margin-left:4px">'+items[i].weight+'</span></div><span style="font-size:12px;">'+items[i].date+'</span><img data-index='+i+' src="JavaScript_HomeWork-gh-pages/assets/cross-mark.png" style="width:14px;height:14px;cursor:pointer;"></li>'
        }
        all+=str}
    list.innerHTML=all
    }
function reset(e) {
    document.querySelector('.textWeight').value=''
    document.querySelector('.textHeight').value=''
    let btnC=document.getElementById('btnId').getAttribute('class')
    function change(str){
        document.getElementById('bmiResultId').classList.remove(str)
        document.getElementById('bmiId').classList.remove(str)
        document.getElementById('conditionId').classList.remove(str)
    }
    if (btnC=='btnLight') {
        e.preventDefault()
        document.querySelector('.btnLight').setAttribute("class",'btn')
        change("light")
        document.getElementById('resetId').classList.remove("resetLight")
        document.getElementById('conditionId').innerHTML=''
        document.getElementById('bmiId').innerHTML=''
        document.getElementById('resetId').innerHTML=''
        document.getElementById('bmiResultId').innerHTML='看結果'
        document.querySelector('.bmiResult').style.color='#424242'
        document.querySelector('.bmiResult').style.fontSize='24px'
    } else if (btnC=='btnNormal') {
        e.preventDefault()
        change("normal")
        document.querySelector('.btnNormal').setAttribute("class",'btn')
        document.getElementById('resetId').classList.remove("resetNormal")
        document.getElementById('conditionId').innerHTML=''
        document.getElementById('bmiId').innerHTML=''
        document.getElementById('resetId').innerHTML=''
        document.getElementById('bmiResultId').innerHTML='看結果'
        document.querySelector('.bmiResult').style.color='#424242'
        document.querySelector('.bmiResult').style.fontSize='24px'
    } else if (btnC=='btnHeavy') {
        e.preventDefault()
        change("heavy")
        document.querySelector('.btnHeavy').setAttribute("class",'btn')
        document.getElementById('resetId').classList.remove("resetHeavy")
        document.getElementById('conditionId').innerHTML=''
        document.getElementById('bmiId').innerHTML=''
        document.getElementById('resetId').innerHTML=''
        document.getElementById('bmiResultId').innerHTML='看結果'
        document.querySelector('.bmiResult').style.color='#424242'
        document.querySelector('.bmiResult').style.fontSize='24px'
    } else if (btnC=='btnObese12') {
        e.preventDefault()
        change("obese12")
        document.querySelector('.btnObese12').setAttribute("class",'btn')
        document.getElementById('resetId').classList.remove("resetObese12")
        document.getElementById('conditionId').innerHTML=''
        document.getElementById('bmiId').innerHTML=''
        document.getElementById('resetId').innerHTML=''
        document.getElementById('bmiResultId').innerHTML='看結果'
        document.querySelector('.bmiResult').style.color='#424242'
        document.querySelector('.bmiResult').style.fontSize='24px'
    } else if (btnC=='btnObese3') {
        e.preventDefault()
        change("obese3")
        document.querySelector('.btnObese3').setAttribute("class",'btn')
        document.getElementById('resetId').classList.remove("resetObese3")
        document.getElementById('conditionId').innerHTML=''
        document.getElementById('bmiId').innerHTML=''
        document.getElementById('resetId').innerHTML=''
        document.getElementById('bmiResultId').innerHTML='看結果'
        document.querySelector('.bmiResult').style.color='#424242'
        document.querySelector('.bmiResult').style.fontSize='24px'
    }
    document.querySelector('.textHeight').removeAttribute("readonly",'readonly')
    document.querySelector('.textWeight').removeAttribute("readonly",'readonly')
}
function dele(e){
    if(e.target.tagName !=='IMG'){return}
    var index=e.target.dataset.index
    data.splice(index,1)
    localStorage.setItem('bmiData',JSON.stringify(data))
    updateList(data)
}
