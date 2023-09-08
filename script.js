let container = document.querySelector('div')

let container1 = document.createElement('div')

container1.className = `container1`

container.append(container1)


let findUs = document.createElement('h1')
findUs.innerText = 'Find Us'

container1.append(findUs)

let boxWrapper = document.createElement('div')
boxWrapper.className = 'boxWrapper'

container1.append(boxWrapper)


let box = document.createElement('div')
box.className = 'box'

boxWrapper.append(box)


let boxTitle = document.createElement('h2')
boxTitle.innerText = 'Parduotuvė 1'

box.append(boxTitle)

let boxContent = document.createElement('div')
boxContent.className = 'boxContent'

box.append(boxContent)



let contentTitle = document.createElement('div')
contentTitle.className = 'contentTitle'

boxContent.append(contentTitle)

contentTitle.innerText = 'Phone:'

let contentItem = document.createElement ('a')
contentItem.className = 'contentItem'

contentTitle.append(contentItem)

contentItem.innerText = ' +37066666666'



let contentTitle1 = document.createElement('div')
contentTitle1.className = 'contentTitle1'

boxContent.append(contentTitle1)

contentTitle1.innerText = 'Email:'

let contentItem1 = document.createElement ('a')
contentItem1.className = 'contentItem1'

contentTitle1.append(contentItem1)

contentItem1.innerText = ' shop1@parduotuve.lt'



let contentTitle2 = document.createElement('div')
contentTitle2.className = 'contentTitle2'

boxContent.append(contentTitle2)

contentTitle2.innerText = 'Address:'

let contentItem2 = document.createElement ('a')
contentItem2.className = 'contentItem2'

contentTitle2.append(contentItem2)

contentItem2.innerText = ' Rotušės aikštė 1, Kaunas'


let box2 = document.createElement('div')
box2.className = 'box2'

boxWrapper.append(box2)


let boxTitle2 = document.createElement('h2')
boxTitle2.innerText = 'Parduotuvė 2'

box2.append(boxTitle2)

let boxContent2 = document.createElement('div')
boxContent2.className = 'boxContent2'

box2.append(boxContent2)

let contentTitle21 = document.createElement('div')
contentTitle21.className = 'contentTitle21'

boxContent2.append(contentTitle21)

contentTitle21.innerText = 'Phone:'

let contentItem21 = document.createElement('a')
contentItem21.className = 'contentItem21'

contentTitle21.append(contentItem21)

contentItem21.innerText = ' +37066666666'


let contentTitle22 = document.createElement('div')
contentTitle22.className = 'contentTitle22'

boxContent2.append(contentTitle22)

contentTitle22.innerText = 'Email:'

let contentItem22 = document.createElement('a')
contentItem22.className = 'contentItem22'

contentTitle22.append(contentItem22)

contentItem22.innerText = ' shop1@parduotuve.lt'


let contentTitle23 = document.createElement('div')
contentTitle23.className = 'contentTitle23'

boxContent2.append(contentTitle23)

contentTitle23.innerText = 'Address:'

let contentItem23 = document.createElement('a')
contentItem23.className = 'contentItem23'

contentTitle23.append(contentItem23)

contentItem23.innerText = ' Rotušės aikštė 1, Kaunas'