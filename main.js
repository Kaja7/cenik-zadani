let vybranyPlan

const selectPlan = (planNumber) => {
    if (planNumber === '#plan1')
    firstPlanElm = document.getElementById('plan1')
    firstPlanElm.classList.add('plan--selected')
    secondPlanElm.classList.remove('plan--selected')
    thirdPlanElm.classList.remove('plan--selected')
    if (planNumber === '#plan2')
    secondPlanElm = document.getElementById('plan2')
    secondPlanElm.classList.add('plan--selected')
    firstPlanElm.classList.remove('plan--selected')
    thirdPlanElm.classList.remove('plan--selected')
    if (planNumber === '#plan3')
    thirdPlanElm = document.getElementById('plan3')
    thirdPlanElm.classList.add('plan--selected')
    firstPlanElm.classList.remove('plan--selected')
    secondPlanElm.classList.remove('plan--selected')
    
}