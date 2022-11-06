const listMessages = [
    'Parabéns pelo seu aniversário!',
    'Muitas felicidades pelo seu aniversário.',
    'Felicidade e muitos anos de vida.',
    'Seja bem-vindo!',
    'Feliz Natal e próspero ano novo',
];

for ( const index of listMessages ) {
    
    if (index.includes('aniversário') ||
    index.includes('anos') ||
    index.includes('vida'))
       console.log(index);

}




