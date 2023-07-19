ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration:2500,
    delay:300
});

ScrollReveal().reveal('.box,.row img,.card', { delay: 600 ,origin:'left'});

ScrollReveal().reveal('.cont ,#about,.skills-box', { delay: 200 ,origin:'bottom'});


ScrollReveal().reveal('.span,.typewriter h1,#skills', { delay: 200 ,origin:'right',interval: 300});


ScrollReveal().reveal('.typewriter,#me', { delay: 200 ,origin:'top'});