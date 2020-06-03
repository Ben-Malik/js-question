const isHasMajorVowelHarmony = (word) => {
  
  //Variables to be used as reference to soft and hard vowels.
  const hardVowels = [ 'a', 'ı', 'o', 'u'];
  const softVowels = [ 'e', 'i', 'ö', 'ü' ];

  // Varibales made constants and they're only assigned once
  const doesWordIncludeHardVowel = word.split('').some(char => hardVowels.includes(char));
  const doesWordIncludeSoftVowel = word.split('').some(char => softVowels.includes(char));

  return !(doesWordIncludeHardVowel && doesWordIncludeSoftVowel);
}

export default isHasMajorVowelHarmony;
