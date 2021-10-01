function introduction(name) {
    const introPhrase = `Hi, my name is ${name}.`;
    return introPhrase;
}

function introductionWithLanguage(name, language) {
    const introPhrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return introPhrase;
}

function introductionWithLanguageOptional(name, language="JavaScript") {
    const introPhrase = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    return introPhrase;
}