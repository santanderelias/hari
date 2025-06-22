document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    // The basic set of Hiragana characters (Gojuon) with 'type', 'group', and 'vowel' for categorization
    // Added dakuten and handakuten characters
    const hiraganaChart = [
        { type: 'character', hiragana: 'あ', romaji: 'a', group: 'a-row', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=A_Mnemonic', mnemonicText: 'Imagine "a" as an apple with a stem.' }, 
        { type: 'character', hiragana: 'い', romaji: 'i', group: 'a-row', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=I_Mnemonic', mnemonicText: 'Two eels "i"n a river.' }, 
        { type: 'character', hiragana: 'う', romaji: 'u', group: 'a-row', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=U_Mnemonic', mnemonicText: 'A "u"FO flying.' }, 
        { type: 'character', hiragana: 'え', romaji: 'e', group: 'a-row', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=E_Mnemonic', mnemonicText: 'A "e"lephant\'s trunk.' }, 
        { type: 'character', hiragana: 'お', romaji: 'o', group: 'a-row', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=O_Mnemonic', mnemonicText: 'A person saying "oh!"' },
        { type: 'character', hiragana: 'か', romaji: 'ka', group: 'ka-row', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=KA_Mnemonic', mnemonicText: 'The "ka"te that broke a "ka"ble.' }, 
        { type: 'character', hiragana: 'き', romaji: 'ki', group: 'ka-row', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=KI_Mnemonic', mnemonicText: 'A "ki"te string.' }, 
        { type: 'character', hiragana: 'く', romaji: 'ku', group: 'ka-row', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=KU_Mnemonic', mnemonicText: 'A "ku"ckoo bird beak.' }, 
        { type: 'character', hiragana: 'け', romaji: 'ke', group: 'ka-row', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=KE_Mnemonic', mnemonicText: 'A "ke"ttle with steam.' }, 
        { type: 'character', hiragana: 'こ', romaji: 'ko', group: 'ka-row', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=KO_Mnemonic', mnemonicText: 'Two "ko"ns lying down.' },
        { type: 'character', hiragana: 'さ', romaji: 'sa', group: 'sa-row', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=SA_Mnemonic', mnemonicText: 'A "sa"mple of rice.' }, 
        { type: 'character', hiragana: 'し', romaji: 'shi', group: 'sa-row', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=SHI_Mnemonic', mnemonicText: 'A "shi"ngle fishhook.' }, 
        { type: 'character', hiragana: 'す', romaji: 'su', group: 'sa-row', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=SU_Mnemonic', mnemonicText: 'A "su"gar cube.' }, 
        { type: 'character', hiragana: 'せ', romaji: 'se', group: 'sa-row', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=SE_Mnemonic', mnemonicText: 'A "se"ahorse.' }, 
        { type: 'character', hiragana: 'そ', romaji: 'so', group: 'sa-row', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=SO_Mnemonic', mnemonicText: 'A "so"wing needle.' },
        { type: 'character', hiragana: 'た', romaji: 'ta', group: 'ta-row', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=TA_Mnemonic', mnemonicText: 'A "ta"ble.' }, 
        { type: 'character', hiragana: 'ち', romaji: 'chi', group: 'ta-row', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=CHI_Mnemonic', mnemonicText: 'A "chi"cken\'s foot.' }, 
        { type: 'character', hiragana: 'つ', romaji: 'tsu', group: 'ta-row', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=TSU_Mnemonic', mnemonicText: 'A "tsu"nami wave.' }, 
        { type: 'character', hiragana: 'て', romaji: 'te', group: 'ta-row', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=TE_Mnemonic', mnemonicText: 'A "te"mple gate.' }, 
        { type: 'character', hiragana: 'と', romaji: 'to', group: 'ta-row', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=TO_Mnemonic', mnemonicText: 'A "to"rtise shell.' },
        { type: 'character', hiragana: 'な', romaji: 'na', group: 'na-row', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=NA_Mnemonic', mnemonicText: 'A "na"ked man kneeling.' }, 
        { type: 'character', hiragana: 'に', romaji: 'ni', group: 'na-row', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=NI_Mnemonic', mnemonicText: 'Two "ni"dget wrestlers.' }, 
        { type: 'character', hiragana: 'ぬ', romaji: 'nu', group: 'na-row', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=NU_Mnemonic', mnemonicText: 'A "nu"dle with a loop.' }, 
        { type: 'character', hiragana: 'ね', romaji: 'ne', group: 'na-row', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=NE_Mnemonic', mnemonicText: 'A "ne"st for birds.' }, 
        { type: 'character', hiragana: 'の', romaji: 'no', group: 'na-row', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=NO_Mnemonic', mnemonicText: 'A "no" sign.' },
        { type: 'character', hiragana: 'は', romaji: 'ha', group: 'ha-row', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=HA_Mnemonic', mnemonicText: 'A "ha"t on a hook.' }, 
        { type: 'character', hiragana: 'ひ', romaji: 'hi', group: 'ha-row', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=HI_Mnemonic', mnemonicText: 'A "hi"ll with a cliff.' }, 
        { type: 'character', hiragana: 'ふ', romaji: 'fu', group: 'ha-row', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=FU_Mnemonic', mnemonicText: 'Mount "Fu"ji.' }, 
        { type: 'character', hiragana: 'へ', romaji: 'he', group: 'ha-row', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=HE_Mnemonic', mnemonicText: 'A "he"avenly gate.' }, 
        { type: 'character', hiragana: 'ほ', romaji: 'ho', group: 'ha-row', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=HO_Mnemonic', mnemonicText: 'A "ho"use with a chimney.' },
        { type: 'character', hiragana: 'ま', romaji: 'ma', group: 'ma-row', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=MA_Mnemonic', mnemonicText: 'A "ma"gician\'s wand.' }, 
        { type: 'character', hiragana: 'み', romaji: 'mi', group: 'ma-row', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=MI_Mnemonic', mnemonicText: 'Three "mi"crobes.' }, 
        { type: 'character', hiragana: 'む', romaji: 'mu', group: 'ma-row', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=MU_Mnemonic', mnemonicText: 'A "mu"shroom with a curly stem.' }, 
        { type: 'character', hiragana: 'め', romaji: 'me', group: 'ma-row', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=ME_Mnemonic', mnemonicText: 'A "me"rry-go-round.' }, 
        { type: 'character', hiragana: 'も', romaji: 'mo', group: 'ma-row', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=MO_Mnemonic', mnemonicText: 'A "mo"ose head.' },
        { type: 'character', hiragana: 'や', romaji: 'ya', group: 'ya-row', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=YA_Mnemonic', mnemonicText: 'A "ya"cht sail.' }, 
        { type: 'character', hiragana: 'ゆ', romaji: 'yu', group: 'ya-row', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=YU_Mnemonic', mnemonicText: 'A "yu"rt from above.' }, 
        { type: 'character', hiragana: 'よ', romaji: 'yo', group: 'ya-row', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=YO_Mnemonic', mnemonicText: 'A "yo"-yo string.' },
        { type: 'character', hiragana: 'ら', romaji: 'ra', group: 'ra-row', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=RA_Mnemonic', mnemonicText: 'A "ra"bbit ear.' }, 
        { type: 'character', hiragana: 'り', romaji: 'ri', group: 'ra-row', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=RI_Mnemonic', mnemonicText: 'A "ri"ver flowing.' }, 
        { type: 'character', hiragana: 'る', romaji: 'ru', group: 'ra-row', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=RU_Mnemonic', mnemonicText: 'A "ru"ler.' }, 
        { type: 'character', hiragana: 'れ', romaji: 're', group: 'ra-row', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=RE_Mnemonic', mnemonicText: 'A "re"d arrow.' }, 
        { type: 'character', hiragana: 'ろ', romaji: 'ro', group: 'ra-row', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=RO_Mnemonic', mnemonicText: 'A "ro"ad sign.' },
        { type: 'character', hiragana: 'わ', romaji: 'wa', group: 'wa-row', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=WA_Mnemonic', mnemonicText: 'A "wa"ve.' }, 
        { type: 'character', hiragana: 'を', romaji: 'wo', group: 'wa-row', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=WO_Mnemonic', mnemonicText: 'A "wo"lfe howling.' },
        { type: 'character', hiragana: 'ん', romaji: 'n', group: 'n-alone', vowel: null, mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=N_Mnemonic', mnemonicText: 'A "n"oodle.' },

        // Dakuten characters
        { type: 'character', hiragana: 'が', romaji: 'ga', group: 'ga-row-dakuten', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=GA_Mnemonic', mnemonicText: 'Ka with two dots (ten-ten) becomes ga. Imagine a "ga"me controller.' },
        { type: 'character', hiragana: 'ぎ', romaji: 'gi', group: 'ga-row-dakuten', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=GI_Mnemonic', mnemonicText: 'Ki with ten-ten becomes gi. "Gi"ft box.' },
        { type: 'character', hiragana: 'ぐ', romaji: 'gu', group: 'ga-row-dakuten', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=GU_Mnemonic', mnemonicText: 'Ku with ten-ten becomes gu. "Gu"n shape.' },
        { type: 'character', hiragana: 'げ', romaji: 'ge', group: 'ga-row-dakuten', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=GE_Mnemonic', mnemonicText: 'Ke with ten-ten becomes ge. "Ge"ometry triangle.' },
        { type: 'character', hiragana: 'ご', romaji: 'go', group: 'ga-row-dakuten', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=GO_Mnemonic', mnemonicText: 'Ko with ten-ten becomes go. "Go"ogle maps marker.' },

        { type: 'character', hiragana: 'ざ', romaji: 'za', group: 'za-row-dakuten', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=ZA_Mnemonic', mnemonicText: 'Sa with ten-ten becomes za. "Za"bra crossing.' },
        { type: 'character', hiragana: 'じ', romaji: 'ji', group: 'za-row-dakuten', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=JI_Mnemonic', mnemonicText: 'Shi with ten-ten becomes ji. "Ji"gsaw puzzle piece.' },
        { type: 'character', hiragana: 'ず', romaji: 'zu', group: 'za-row-dakuten', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=ZU_Mnemonic', mnemonicText: 'Su with ten-ten becomes zu. "Zu"m-zoom car.' },
        { type: 'character', hiragana: 'ぜ', romaji: 'ze', group: 'za-row-dakuten', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=ZE_Mnemonic', mnemonicText: 'Se with ten-ten becomes ze. "Ze"bra stripes.' },
        { type: 'character', hiragana: 'ぞ', romaji: 'zo', group: 'za-row-dakuten', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=ZO_Mnemonic', mnemonicText: 'So with ten-ten becomes zo. "Zo"rro mark.' },

        { type: 'character', hiragana: 'だ', romaji: 'da', group: 'da-row-dakuten', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=DA_Mnemonic', mnemonicText: 'Ta with ten-ten becomes da. "Da"nce shoe.' },
        { type: 'character', hiragana: 'ぢ', romaji: 'ji', group: 'da-row-dakuten', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=DI_Mnemonic', mnemonicText: 'Chi with ten-ten becomes ji.' },
        { type: 'character', hiragana: 'づ', romaji: 'zu', group: 'da-row-dakuten', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=DU_Mnemonic', mnemonicText: 'Tsu with ten-ten becomes zu.' },
        { type: 'character', hiragana: 'で', romaji: 'de', group: 'da-row-dakuten', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=DE_Mnemonic', mnemonicText: 'Te with ten-ten becomes de. "De"sk.' },
        { type: 'character', hiragana: 'ど', romaji: 'do', group: 'da-row-dakuten', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=DO_Mnemonic', mnemonicText: 'To with ten-ten becomes do. "Do"g house.' },

        { type: 'character', hiragana: 'ば', romaji: 'ba', group: 'ba-row-dakuten', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=BA_Mnemonic', mnemonicText: 'Ha with ten-ten becomes ba. "Ba"ll.' },
        { type: 'character', hiragana: 'び', romaji: 'bi', group: 'ba-row-dakuten', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=BI_Mnemonic', mnemonicText: 'Hi with ten-ten becomes bi. "Bi"rd wing.' },
        { type: 'character', hiragana: 'ぶ', romaji: 'bu', group: 'ba-row-dakuten', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=BU_Mnemonic', mnemonicText: 'Fu with ten-ten becomes bu. "Bu"bbles.' },
        { type: 'character', hiragana: 'べ', romaji: 'be', group: 'ba-row-dakuten', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=BE_Mnemonic', mnemonicText: 'He with ten-ten becomes be. "Be"ll.' },
        { type: 'character', hiragana: 'ぼ', romaji: 'bo', group: 'ba-row-dakuten', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=BO_Mnemonic', mnemonicText: 'Ho with ten-ten becomes bo. "Bo"at.' },

        // Handakuten characters
        { type: 'character', hiragana: 'ぱ', romaji: 'pa', group: 'pa-row-handakuten', vowel: 'a', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=PA_Mnemonic', mnemonicText: 'Ha with circle (maru) becomes pa. "Pa"rty popper.' },
        { type: 'character', hiragana: 'ぴ', romaji: 'pi', group: 'pa-row-handakuten', vowel: 'i', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=PI_Mnemonic', mnemonicText: 'Hi with maru becomes pi. "Pi"ano key.' },
        { type: 'character', hiragana: 'ぷ', romaji: 'pu', group: 'pa-row-handakuten', vowel: 'u', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=PU_Mnemonic', mnemonicText: 'Fu with maru becomes pu. "Pu"sh pin.' },
        { type: 'character', hiragana: 'ぺ', romaji: 'pe', group: 'pa-row-handakuten', vowel: 'e', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=PE_Mnemonic', mnemonicText: 'He with maru becomes pe. "Pe"g.' },
        { type: 'character', hiragana: 'ぽ', romaji: 'po', group: 'pa-row-handakuten', vowel: 'o', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=PO_Mnemonic', mnemonicText: 'Ho with maru becomes po. "Po"t.' },

        // Combination characters (Yōon) - using a generic mnemonic for now
        { type: 'character', hiragana: 'きゃ', romaji: 'kya', group: 'combination-row', vowel: 'a', mnemonicText: 'Combination of き and ゃ' },
        { type: 'character', hiragana: 'きゅ', romaji: 'kyu', group: 'combination-row', vowel: 'u', mnemonicText: 'Combination of き and ゅ' },
        { type: 'character', hiragana: 'きょ', romaji: 'kyo', group: 'combination-row', vowel: 'o', mnemonicText: 'Combination of き and ょ' },
        { type: 'character', hiragana: 'しゃ', romaji: 'sha', group: 'combination-row', vowel: 'a', mnemonicText: 'Combination of し and ゃ' },
        { type: 'character', hiragana: 'しゅ', romaji: 'shu', group: 'combination-row', vowel: 'u', mnemonicText: 'Combination of し and ゅ' },
        { type: 'character', hiragana: 'しょ', romaji: 'sho', group: 'combination-row', vowel: 'o', mnemonicText: 'Combination of し and ょ' },
        { type: 'character', hiragana: 'ちゃ', romaji: 'cha', group: 'combination-row', vowel: 'a', mnemonicText: 'Combination of ち and ゃ' },
        { type: 'character', hiragana: 'ちゅ', romaji: 'chu', group: 'combination-row', vowel: 'u', mnemonicText: 'Combination of ち and ゅ' },
        { type: 'character', hiragana: 'ちょ', romaji: 'cho', group: 'combination-row', vowel: 'o', mnemonicText: 'Combination of ち and ょ' },
        { type: 'character', hiragana: 'にゃ', romaji: 'nya', group: 'combination-row', vowel: 'a', mnemonicText: 'Combination of に and ゃ' },
        { type: 'character', hiragana: 'にゅ', romaji: 'nyu', group: 'combination-row', vowel: 'u', mnemonicText: 'Combination of に and ゅ' },
        { type: 'character', hiragana: 'にょ', romaji: 'nyo', group: 'combination-row', vowel: 'o', mnemonicText: 'Combination of に and ょ' },
        { type: 'character', hiragana: 'ひゃ', romaji: 'hya', group: 'combination-row', vowel: 'a', mnemonicText: 'Combination of ひ and ゃ' },
        { type: 'character', hiragana: 'ひゅ', romaji: 'hyu', group: 'combination-row', vowel: 'u', mnemonicText: 'Combination of ひ and ゅ' },
        { type: 'character', hiragana: 'ひょ', romaji: 'hyo', group: 'combination-row', vowel: 'o', mnemonicText: 'Combination of ひ and ょ' },
        { type: 'character', hiragana: 'みゃ', romaji: 'mya', group: 'combination-row', vowel: 'a', mnemonicText: 'Combination of み and ゃ' },
        { type: 'character', hiragana: 'みゅ', romaji: 'myu', group: 'combination-row', vowel: 'u', mnemonicText: 'Combination of み and ゅ' },
        { type: 'character', hiragana: 'みょ', romaji: 'myo', group: 'combination-row', vowel: 'o', mnemonicText: 'Combination of み and ょ' },
        { type: 'character', hiragana: 'りゃ', romaji: 'rya', group: 'combination-row', vowel: 'a', mnemonicText: 'Combination of り and ゃ' },
        { type: 'character', hiragana: 'りゅ', romaji: 'ryu', group: 'combination-row', vowel: 'u', mnemonicText: 'Combination of り and ゅ' },
        { type: 'character', hiragana: 'りょ', romaji: 'ryo', group: 'combination-row', vowel: 'o', mnemonicText: 'Combination of り and ょ' },
        
        // Combination characters with Dakuten
        { type: 'character', hiragana: 'ぎゃ', romaji: 'gya', group: 'combination-dakuten-row', vowel: 'a', mnemonicText: 'Combination of ぎ and ゃ' },
        { type: 'character', hiragana: 'ぎゅ', romaji: 'gyu', group: 'combination-dakuten-row', vowel: 'u', mnemonicText: 'Combination of ぎ and ゅ' },
        { type: 'character', hiragana: 'ぎょ', romaji: 'gyo', group: 'combination-dakuten-row', vowel: 'o', mnemonicText: 'Combination of ぎ and ょ' },
        { type: 'character', hiragana: 'じゃ', romaji: 'ja', group: 'combination-dakuten-row', vowel: 'a', mnemonicText: 'Combination of じ and ゃ' },
        { type: 'character', hiragana: 'じゅ', romaji: 'ju', group: 'combination-dakuten-row', vowel: 'u', mnemonicText: 'Combination of じ and ゅ' },
        { type: 'character', hiragana: 'じょ', romaji: 'jo', group: 'combination-dakuten-row', vowel: 'o', mnemonicText: 'Combination of じ and ょ' },
        { type: 'character', hiragana: 'ぢゃ', romaji: 'ja', group: 'combination-dakuten-row', vowel: 'a', mnemonicText: 'Combination of ぢ and ゃ' },
        { type: 'character', hiragana: 'ぢゅ', romaji: 'ju', group: 'combination-dakuten-row', vowel: 'u', mnemonicText: 'Combination of ぢ and ゅ' },
        { type: 'character', hiragana: 'ぢょ', romaji: 'jo', group: 'combination-dakuten-row', vowel: 'o', mnemonicText: 'Combination of ぢ and ょ' },
        { type: 'character', hiragana: 'びゃ', romaji: 'bya', group: 'combination-dakuten-row', vowel: 'a', mnemonicText: 'Combination of び and ゃ' },
        { type: 'character', hiragana: 'びゅ', romaji: 'byu', group: 'combination-dakuten-row', vowel: 'u', mnemonicText: 'Combination of び and ゅ' },
        { type: 'character', hiragana: 'びょ', romaji: 'byo', group: 'combination-dakuten-row', vowel: 'o', mnemonicText: 'Combination of び and ょ' },

        // Combination characters with Handakuten
        { type: 'character', hiragana: 'ぴゃ', romaji: 'pya', group: 'combination-handakuten-row', vowel: 'a', mnemonicText: 'Combination of ぴ and ゃ' },
        { type: 'character', hiragana: 'ぴゅ', romaji: 'pyu', group: 'combination-handakuten-row', vowel: 'u', mnemonicText: 'Combination of ぴ and ゅ' },
        { type: 'character', hiragana: 'ぴょ', romaji: 'pyo', group: 'combination-handakuten-row', vowel: 'o', mnemonicText: 'Combination of ぴ and ょ' }
    ];

    // Hiragana words data (no group/vowel filtering for words currently)
    const hiraganaWords = [
        { type: 'word', hiragana: 'ねこ', romaji: 'neko', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=NEKO_Mnemonic', mnemonicText: 'Neko means cat. Think of a cat named "Neko".' },      // cat
        { type: 'word', hiragana: 'いぬ', romaji: 'inu', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=INU_Mnemonic', mnemonicText: 'Inu means dog. Imagine an "inu" running.' },      // dog
        { type: 'word', hiragana: 'みず', romaji: 'mizu', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=MIZU_Mnemonic', mnemonicText: 'Mizu means water. A bottle of "mizu".' },      // water
        { type: 'word', hiragana: 'たべる', romaji: 'taberu', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=TABERU_Mnemonic', mnemonicText: 'Taberu means to eat. Think of "tab"le and "beru"y.' },  // to eat
        { type: 'word', hiragana: 'がっこう', romaji: 'gakkou', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=GAKKOU_Mnemonic', mnemonicText: 'Gakkou means school. "Gak" as in "gag", "kou" as in "cow".' }, // school
        { type: 'word', hiragana: 'くるま', romaji: 'kuruma', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=KURUMA_Mnemonic', mnemonicText: 'Kuruma means car. A car with a "kuru" sound.' },  // car
        { type: 'word', hiragana: 'ほん', romaji: 'hon', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=HON_Mnemonic', mnemonicText: 'Hon means book. A "hon"est book.' },      // book
        { type: 'word', hiragana: 'えき', romaji: 'eki', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=EKI_Mnemonic', mnemonicText: 'Eki means station. The "eki"t from the station.' },      // station
        { type: 'word', hiragana: 'でんわ', romaji: 'denwa', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=DENWA_Mnemonic', mnemonicText: 'Denwa means telephone. "Den" and "wa" sounds.' },  // telephone
        { type: 'word', hiragana: 'おきる', romaji: 'okiru', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=OKIRU_Mnemonic', mnemonicText: 'Okiru means to wake up. "Ok, I\'ll ru"n now.' },   // to wake up
        { type: 'word', hiragana: 'こんにちは', romaji: 'konnichiwa', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=KONNICHIWA_Mnemonic', mnemonicText: 'Konnichiwa means hello. Common greeting.' }, // hello
        { type: 'word', hiragana: 'ありがとう', romaji: 'arigatou', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=ARIGATOU_Mnemonic', mnemonicText: 'Arigatou means thank you. A very common phrase.' },   // thank you
        { type: 'word', hiragana: 'さようなら', romaji: 'sayounara', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=SAYOUNARA_Mnemonic', mnemonicText: 'Sayounara means goodbye. Saying "sayou" to a "nara".' },   // goodbye
        { type: 'word', hiragana: 'おやすみ', romaji: 'oyasumi', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=OYASUMI_Mnemonic', mnemonicText: 'Oyasumi means good night. "Oya" from "oh yeah", "sumi" from "sleepy".' },      // good night
        { type: 'word', hiragana: 'すし', romaji: 'sushi', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=SUSHI_Mnemonic', mnemonicText: 'Sushi, the food.' },
        { type: 'word', hiragana: 'てんぷら', romaji: 'tempura', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=TEMPURA_Mnemonic', mnemonicText: 'Tempura, the dish.' },
        { type: 'word', hiragana: 'せんせい', romaji: 'sensei', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=SENSEI_Mnemonic', mnemonicText: 'Sensei means teacher. A "sensei" has a good "sense".' }, // teacher
        { type: 'word', hiragana: 'がくせい', romaji: 'gakusei', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=GAKKOU_Mnemonic', mnemonicText: 'Gakkou means school. "Gak" as in "gag", "kou" as in "cow".' }, // student
        { type: 'word', hiragana: 'にほん', romaji: 'nihon', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=NIHON_Mnemonic', mnemonicText: 'Nihon means Japan. "Ni" from "knee", "hon" from "home".' }  // good morning
    ];

    // Japanese Numbers Data
    const japaneseNumbers = [
        { type: 'number', hiragana: 'いち', romaji: 'ichi', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=ICHI_Mnemonic', mnemonicText: 'One (ichi) is a single, straight line.' },
        { type: 'number', hiragana: 'に', romaji: 'ni', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=NI_Mnemonic', mnemonicText: 'Two (ni) looks like two knees bent down.' },
        { type: 'number', hiragana: 'さん', romaji: 'san', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=SAN_Mnemonic', mnemonicText: 'Three (san) has three horizontal lines, like mountains (san).' },
        { type: 'number', hiragana: 'よん', romaji: 'yon', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=YON_Mnemonic', mnemonicText: 'Four (yon) looks like a sailing yacht with four sails.' },
        { type: 'number', hiragana: 'ご', romaji: 'go', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=GO_Mnemonic', mnemonicText: 'Five (go) is a strong arm pointing to "go" for five.' },
        { type: 'number', hiragana: 'ろく', romaji: 'roku', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=ROKU_Mnemonic', mnemonicText: 'Six (roku) looks like a rock falling and bouncing 6 times.' },
        { type: 'number', hiragana: 'なな', romaji: 'nana', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=NANA_Mnemonic', mnemonicText: 'Seven (nana) is like two number 7s.' },
        { type: 'number', hiragana: 'はち', romaji: 'hachi', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=HACHI_Mnemonic', mnemonicText: 'Eight (hachi) looks like a fancy hat, for eight.' },
        { type: 'number', hiragana: 'きゅう', romaji: 'kyuu', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=KYUU_Mnemonic', mnemonicText: 'Nine (kyuu) looks like a cue stick for billiards.' },
        { type: 'number', hiragana: 'じゅう', romaji: 'juu', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=JUU_Mnemonic', mnemonicText: 'Ten (juu) is like a cross with two lines.' },
        { type: 'number', hiragana: 'ひゃく', romaji: 'hyaku', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=HYAKU_Mnemonic', mnemonicText: 'Hundred (hyaku). Think "hy"drant with a hundred streams.' },
        { type: 'number', hiragana: 'せん', romaji: 'sen', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=SEN_Mnemonic', mnemonicText: 'Thousand (sen). Imagine a thousand blades of grass.' },
        { type: 'number', hiragana: 'まん', romaji: 'man', mnemonicImage: 'https://placehold.co/150x150/e0e0e0/000?text=MAN_Mnemonic', mnemonicText: 'Ten thousand (man). A "man" holding ten thousand coins.' },
    ];


    // Constants for mastery system
    // Number of consecutive correct answers for a *single character* to be considered "mastered" (level 1)
    const CHAR_MASTERY_CORRECT_STREAK_REQUIRED_DEFAULT = 5; 
    // Max mastery level for a character (0: not mastered, 1: mastered)
    const CHAR_MAX_MASTERY_LEVEL = 1; 

    // For words, we can keep the old system or define new constants
    const WORD_MASTERY_THRESHOLD_PER_LEVEL = 3; // Word mastery can still be multi-level
    const WORD_MAX_MASTERY_LEVEL = 5; 
    
    // Constants for Number Mastery
    const NUMBER_MASTERY_THRESHOLD_PER_LEVEL = 3; 
    const NUMBER_MAX_MASTERY_LEVEL = 5; 

    // --- STATE MANAGEMENT ---
    const defaultCharacterState = {
        currentItem: null,
        currentIndex: -1,
        score: 0,
        level: 1,
        practiceType: 'characters',
        failedItemsQueue: [], 
        selectedFilterOption: 'vowels', 
        autoProgressEnabled: true,
        charMasteryStreakRequired: CHAR_MASTERY_CORRECT_STREAK_REQUIRED_DEFAULT,
        lastIncorrectItemHiragana: null,
        consecutiveIncorrectCount: 0
    };

    const defaultWordState = {
        currentItem: null,
        currentIndex: -1,
        score: 0,
        level: 1,
        practiceType: 'words',
        correctAnswersInCurrentLevel: 0,
        levelUpThreshold: 3, 
        failedItemsQueue: [], 
        selectedFilterOption: null, // Not used for words
        autoProgressEnabled: false,
        lastIncorrectItemHiragana: null,
        consecutiveIncorrectCount: 0
    };

    // Default Number State
    const defaultNumberState = {
        currentItem: null,
        currentIndex: -1,
        score: 0,
        level: 1,
        practiceType: 'numbers',
        correctAnswersInCurrentLevel: 0,
        levelUpThreshold: 3, 
        failedItemsQueue: [], 
        selectedFilterOption: null, // Not used for numbers
        autoProgressEnabled: true,
        lastIncorrectItemHiragana: null,
        consecutiveIncorrectCount: 0
    };

    let currentState = { ...defaultCharacterState }; 
    const rePresentDelay = 1; 

    let reviewSessionActive = false; 
    let currentReviewQueue = []; 

    // --- LOCAL STORAGE FUNCTIONS ---
    /**
     * Saves the current application state to local storage.
     * Includes global settings and per-item mastery data.
     * @param {string} type - 'characters', 'words', or 'numbers' to determine which state to save.
     */
    function saveState(type) {
        try {
            const stateToSave = { ...currentState }; 
            let targetData;
            if (type === 'characters') {
                targetData = hiraganaChart;
            } else if (type === 'words') {
                targetData = hiraganaWords;
            } else if (type === 'numbers') {
                targetData = japaneseNumbers;
            }

            stateToSave.itemMasteryData = targetData.map(item => ({
                hiragana: item.hiragana,
                romaji: item.romaji, 
                masteryLevel: item.masteryLevel,
                correctStreak: item.correctStreak
            }));

            if (type === 'characters') {
                localStorage.setItem('hiraganaCharacterState', JSON.stringify(stateToSave));
            } else if (type === 'words') {
                localStorage.setItem('hiraganaWordState', JSON.stringify(stateToSave));
            } else if (type === 'numbers') {
                localStorage.setItem('hiraganaNumberState', JSON.stringify(stateToSave));
            }
            localStorage.setItem('lastPracticeType', currentState.practiceType); 
        } catch (e) {
            console.error("Error saving to localStorage:", e);
        }
    }

    /**
     * Loads the application state from local storage.
     * Initializes per-item mastery data if not found in saved state or on first launch.
     * @param {string} type - 'characters', 'words, or 'numbers' to determine which state to load.
     * @returns {Object} The loaded or default state.
     */
    function loadState(type) {
        let savedStateKey;
        let defaultStateObject;
        let targetDataArray;

        if (type === 'characters') {
            savedStateKey = 'hiraganaCharacterState';
            defaultStateObject = defaultCharacterState;
            targetDataArray = hiraganaChart;
        } else if (type === 'words') {
            savedStateKey = 'hiraganaWordState';
            defaultStateObject = defaultWordState;
            targetDataArray = hiraganaWords;
        } else if (type === 'numbers') {
            savedStateKey = 'hiraganaNumberState';
            defaultStateObject = defaultNumberState;
            targetDataArray = japaneseNumbers;
        }

        try {
            const savedState = localStorage.getItem(savedStateKey);
            if (savedState) {
                const parsedState = JSON.parse(savedState);
                parsedState.failedItemsQueue = parsedState.failedItemsQueue || [];
                parsedState.selectedFilterOption = parsedState.selectedFilterOption || 'vowels'; 
                parsedState.autoProgressEnabled = typeof parsedState.autoProgressEnabled === 'boolean' ? parsedState.autoProgressEnabled : true; 
                parsedState.charMasteryStreakRequired = parsedState.charMasteryStreakRequired || CHAR_MASTERY_CORRECT_STREAK_REQUIRED_DEFAULT;
                parsedState.lastIncorrectItemHiragana = parsedState.lastIncorrectItemHiragana || null;
                parsedState.consecutiveIncorrectCount = parsedState.consecutiveIncorrectCount || 0;

                targetDataArray.forEach(item => {
                    const savedItemData = parsedState.itemMasteryData?.find(saved => saved.hiragana === item.hiragana && saved.romaji === item.romaji);
                    if (savedItemData) {
                        item.masteryLevel = savedItemData.masteryLevel;
                        item.correctStreak = savedItemData.correctStreak;
                    } else {
                        item.masteryLevel = 0;
                        item.correctStreak = 0;
                    }
                });
                delete parsedState.itemMasteryData; 
                return parsedState;
            }
        } catch (e) {
            console.error(`Error loading state for ${type} from localStorage:`, e);
        }
        
        // If no saved state or error, return default and ensure global items are initialized
        const initialState = { ...defaultStateObject };
        targetDataArray.forEach(item => {
            item.masteryLevel = 0;
            item.correctStreak = 0;
        });
        return initialState;
    }

    // --- DOM ELEMENTS ---
    const elements = {
        display: document.getElementById('hiragana-display'),
        input: document.getElementById('romaji-input'),
        form: document.getElementById('answer-form'),
        feedback: document.getElementById('feedback'),
        scoreDisplay: document.getElementById('score-display'),
        levelDisplay: document.getElementById('level-display'),
        instructionText: document.getElementById('instruction-text'),
        modeDropdownBtn: document.getElementById('mode-dropdown-btn'),
        modeDropdownMenu: document.getElementById('mode-dropdown-menu'),
        modeCharactersBtn: document.querySelector('#mode-dropdown-menu button[data-mode="characters"]'),
        modeWordsBtn: document.querySelector('#mode-dropdown-menu button[data-mode="words"]'),
        modeNumbersBtn: document.querySelector('#mode-dropdown-menu button[data-mode="numbers"]'),
        mnemonicToggleButton: document.getElementById('mnemonic-toggle-btn'),
        mnemonicOverlay: document.getElementById('mnemonic-overlay'),
        mnemonicCloseBtn: document.getElementById('mnemonic-close-btn'),
        mnemonicTitle: document.getElementById('mnemonic-title'),
        mnemonicImage: document.getElementById('mnemonic-image'),
        mnemonicText: document.getElementById('mnemonic-text'),
        statsBtn: document.getElementById('stats-btn'),         
        settingsBtn: document.getElementById('settings-btn'),   
        statsModal: document.getElementById('stats-modal'),     
        settingsModal: document.getElementById('settings-modal'), 
        modalCloseBtns: document.querySelectorAll('.modal-close-btn'), 
        mistakeList: document.getElementById('mistake-list'), 
        startReviewBtn: document.getElementById('start-review-btn'), 
        clearMistakesBtn: document.getElementById('clear-mistakes-btn'),
        characterSettingsSection: document.getElementById('character-settings'), 
        characterMasterySettingsSection: document.getElementById('character-mastery-settings'), 
        characterSelectionOptionsContainer: document.getElementById('character-selection-options-container'),
        masterySliderContainer: document.getElementById('mastery-slider-container'),
        characterFilterOptions: document.getElementById('character-filter-options'), 
        saveSettingsBtn: document.getElementById('save-settings-btn'), 
        autoProgressToggle: document.getElementById('auto-progress-toggle'), 
        toastContainer: document.querySelector('.toast-container'),
        charMasteredList: document.getElementById('char-mastered-list'),
        charLearningList: document.getElementById('char-learning-list'),
        charNotStartedList: document.getElementById('char-not-started-list'),
        wordMasteredList: document.getElementById('word-mastered-list'),
        wordLearningList: document.getElementById('word-learning-list'),
        wordNotStartedList: document.getElementById('word-not-started-list'),
        numMasteredList: document.getElementById('num-mastered-list'),
        numLearningList: document.getElementById('num-learning-list'),
        numNotStartedList: document.getElementById('num-not-started-list'),
        masteryStreakSlider: document.getElementById('mastery-streak-slider'), 
        masteryStreakDisplay: document.getElementById('mastery-streak-display'),  
        startOverBtn: document.getElementById('start-over-btn'),
        collapsibleHeaders: document.querySelectorAll('.collapsible-header')
    };

    // --- UI CONTROL FUNCTIONS ---
    function showModal(modalElement) {
        modalElement.classList.add('active');
    }

    function hideModal(modalElement) {
        modalElement.classList.remove('active');
    }

    /**
     * Displays a notification toast message.
     * @param {string} message - The message to display.
     * @param {string} type - The type of toast (e.g., 'info', 'success', 'warning', 'danger').
     * @param {number} duration - How long the toast should be visible in milliseconds. Set to 0 for no auto-hide.
     * @param {string} [buttonText=null] - Text for an optional button inside the toast.
     * @param {Function} [buttonAction=null] - Callback function for the optional button.
     */
    function showNotification(message, type = 'info', duration = 3000, buttonText = null, buttonAction = null) {
        const toast = document.createElement('div');
        toast.classList.add('toast', `toast-${type}`);

        const messageSpan = document.createElement('span'); 
        messageSpan.textContent = message;
        toast.appendChild(messageSpan);

        // Add a button if buttonText and buttonAction are provided
        if (buttonText && buttonAction) { 
            const button = document.createElement('button');
            button.classList.add('toast-update-btn');
            button.textContent = buttonText;
            button.addEventListener('click', () => {
                buttonAction(); // Execute the provided action (e.g., skip waiting)
                toast.classList.remove('show');
                toast.addEventListener('transitionend', () => toast.remove());
            });
            toast.appendChild(button);
        }
        
        elements.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('show');
        }, 100); 

        // Auto-hide unless duration is explicitly 0
        if (duration > 0) { 
            setTimeout(() => {
                toast.classList.remove('show');
                toast.addEventListener('transitionend', () => toast.remove());
            }, duration);
        }
        // If duration is 0, the toast stays until clicked (if it has a button) or page changes
    }

    function populateMistakeList() {
        elements.mistakeList.innerHTML = ''; 
        // Determine which failed queue to use based on current practice type
        const failedQueue = currentState.failedItemsQueue;

        if (failedQueue.length === 0) {
            elements.mistakeList.innerHTML = '<p class="text-muted">No mistakes to review yet!</p>';
            elements.startReviewBtn.disabled = true;
            elements.clearMistakesBtn.style.display = 'none';
        } else {
            failedQueue.forEach(item => {
                const span = document.createElement('span');
                span.textContent = `${item.hiragana} (${item.romaji})`;
                elements.mistakeList.appendChild(span);
            });
            elements.startReviewBtn.disabled = false;
            elements.clearMistakesBtn.style.display = 'inline-block';
        }
    }

    /**
     * Dynamically determines the category of a Hiragana item.
     * @param {Object} item - The Hiragana item object.
     * @returns {string} The category ('vowel', 'basic', 'dakuten', 'handakuten', 'combination').
     */
    const getCategory = (item) => {
        if (item.romaji.length === 1 && ['a', 'i', 'u', 'e', 'o'].includes(item.romaji)) return 'vowel';
        if (item.group && item.group.includes('dakuten')) return 'dakuten';
        if (item.group && item.group.includes('handakuten')) return 'handakuten';
        if (item.group && item.group.includes('combination')) return 'combination';
        return 'basic'; // Default for gojuon characters without diacritics/combinations
    };

    /**
     * Checks if all characters in the current active set have reached their max mastery level.
     * If so, increments the global level.
     */
    function checkCharacterGlobalLevelProgression() {
        if (currentState.practiceType !== 'characters' || !currentState.autoProgressEnabled) {
            return; // Only applies to auto-progress character mode
        }

        const currentFilteredCharacters = getFilteredCharacters();
        const allCharactersMasteredInCurrentSet = currentFilteredCharacters.every(char => 
            char.masteryLevel === CHAR_MAX_MASTERY_LEVEL
        );

        if (allCharactersMasteredInCurrentSet) {
            if (currentState.level < 9) { // Max character level before words unlock
                currentState.level++;
                showNotification(`Congratulations! You mastered all characters in Level ${currentState.level - 1}! Unlocking Level ${currentState.level}!`, 'success', 5000);
                // No need to reset streaks as mastery is binary now
            } else if (currentState.level === 9) {
                currentState.level++; // Advance to Level 10
                showNotification(`Congratulations! You mastered all Hiragana characters! Word practice is now fully unlocked.`, 'success', 6000);
            }
            saveState(currentState.practiceType);
            updateStatsDisplay(); 
            showNextItem(); // Display a new character based on the new level
        }
    }

    /**
     * Populates the settings modal with character filtering radio buttons and mastery slider.
     */
    function populateSettingsModal() {
        // Hide/show character specific settings based on current mode
        if (currentState.practiceType === 'characters') {
            elements.characterSettingsSection.style.display = 'block';
            elements.characterMasterySettingsSection.style.display = 'block';
        } else {
            elements.characterSettingsSection.style.display = 'none';
            elements.characterMasterySettingsSection.style.display = 'none';
        }

        elements.characterFilterOptions.innerHTML = ''; 

        // Set the auto-progress toggle state
        elements.autoProgressToggle.checked = currentState.autoProgressEnabled;

        const filterOptions = [
            { value: 'vowels', label: 'Only Vowels (あ, い, う, え, お, ん)' },
            { value: 'a', label: 'Only A-vowel characters' },
            { value: 'i', label: 'Only I-vowel characters' },
            { value: 'u', label: 'Only U-vowel characters' },
            { value: 'e', label: 'Only E-vowel characters' },
            { value: 'o', label: 'Only O-vowel characters' },
            { value: 'combination', label: 'Only Combination Characters (きゃ, しゃ, ちょ...)' }, 
            { value: 'dakuten', label: 'Only Dakuten (゛) Characters' },
            { value: 'handakuten', label: 'Only Handakuten (゜) Characters' },
            { value: 'all-characters', label: 'All Hiragana Characters' } 
        ];

        filterOptions.forEach(option => {
            const div = document.createElement('div');
            div.classList.add('form-check', 'mb-2');

            const input = document.createElement('input');
            input.classList.add('form-check-input');
            input.type = 'radio';
            input.name = 'characterFilter'; 
            input.id = `filter-${option.value}`;
            input.value = option.value;
            input.checked = (currentState.selectedFilterOption === option.value); // Use currentState.selectedFilterOption
            // Set disabled status based on auto-progress toggle
            input.disabled = currentState.autoProgressEnabled; 

            const label = document.createElement('label');
            label.classList.add('form-check-label');
            label.htmlFor = `filter-${option.value}`;
            label.textContent = option.label;

            div.appendChild(input);
            div.appendChild(label);
            elements.characterFilterOptions.appendChild(div);
        });

        // Set slider value and display
        elements.masteryStreakSlider.value = currentState.charMasteryStreakRequired;
        elements.masteryStreakDisplay.textContent = currentState.charMasteryStreakRequired;
        
        // Control visibility of filter options and slider based on auto-progress toggle
		elements.characterSelectionOptionsContainer.style.display = elements.autoProgressToggle.checked ? 'none' : 'block';
        elements.masterySliderContainer.style.display = elements.autoProgressToggle.checked ? 'none' : 'block';
    }

    /**
     * Applies the selected character filter setting.
     */
    function applySettings() {
        if (currentState.practiceType === 'characters') {
            const newAutoProgressEnabled = elements.autoProgressToggle.checked;
            let newCharacterFilter = currentState.selectedFilterOption;
            let newCharMasteryStreak = parseInt(elements.masteryStreakSlider.value);

            if (newAutoProgressEnabled) {
                showNotification('Automatic level progression enabled!', 'info');
            } else {
                const selectedManualFilter = document.querySelector('input[name="characterFilter"]:checked')?.value;
                if (!selectedManualFilter) {
                    showNotification('Please select a character filtering option for manual mode!', 'warning');
                    return; 
                }
                newCharacterFilter = selectedManualFilter;
                showNotification('Manual character selection enabled!', 'info');
            }

            currentState.autoProgressEnabled = newAutoProgressEnabled;
            currentState.selectedFilterOption = newCharacterFilter;
            currentState.charMasteryStreakRequired = newCharMasteryStreak; 
        }
        // No settings specific to words or numbers yet, but can be added here
        saveState(currentState.practiceType);
        hideModal(elements.settingsModal);
        showNextItem(); 
    }

    // --- GAME LOGIC FUNCTIONS ---
    function updateStatsDisplay() {
        elements.scoreDisplay.textContent = currentState.score;
        elements.levelDisplay.textContent = currentState.level;
        populateMistakeList(); 
        renderProgressVisualizations(); // Update visualizations when stats are shown
    }

    function adjustFontSizeToFit() {
        const displayElement = elements.display;
        let currentFontSize = 120; 
        displayElement.style.fontSize = `${currentFontSize}px`;
        displayElement.style.whiteSpace = 'nowrap'; 

        while (displayElement.scrollWidth > displayElement.clientWidth && currentFontSize > 10) {
            currentFontSize -= 2; 
            displayElement.style.fontSize = `${currentFontSize}px`;
        }

        if (displayElement.scrollWidth > displayElement.clientWidth && currentFontSize <= 10) {
            displayElement.style.whiteSpace = 'normal'; 
            displayElement.style.wordBreak = 'break-word'; 
        }
    }

    /**
     * Gets the list of characters to practice based on the current filter logic.
     * @returns {Array} An array of character objects.
     */
    function getFilteredCharacters() {
        let charactersToUse = [];

        // Helper to filter characters by their dynamically determined category
        const filterByCategory = (categoryName) => hiraganaChart.filter(item => getCategory(item) === categoryName);
        // Modified filterByVowelSound to explicitly check for 'basic' category
        const filterByVowelSound = (vowel) => hiraganaChart.filter(item => item.vowel === vowel && getCategory(item) === 'basic');

        if (currentState.autoProgressEnabled) {
            let cumulativeChars = [];
            
            // Level 1: Vowels + 'ん' explicitly
            cumulativeChars = hiraganaChart.filter(item => 
                (item.romaji.length === 1 && ['a', 'i', 'u', 'e', 'o'].includes(item.romaji)) || item.romaji === 'n'
            );

            if (currentState.level >= 2) { 
                // Add basic 'a' vowel characters (excluding dakuten/handakuten/combinations)
                cumulativeChars = [...new Set([...cumulativeChars, ...filterByVowelSound('a')])]; 
            }
            if (currentState.level >= 3) { 
                // Add basic 'i' vowel characters
                cumulativeChars = [...new Set([...cumulativeChars, ...filterByVowelSound('i')])]; 
            }
            if (currentState.level >= 4) { 
                // Add basic 'u' vowel characters
                cumulativeChars = [...new Set([...cumulativeChars, ...filterByVowelSound('u')])]; 
            }
            if (currentState.level >= 5) { 
                // Add basic 'e' vowel characters
                cumulativeChars = [...new Set([...cumulativeChars, ...filterByVowelSound('e')])]; 
            }
            if (currentState.level >= 6) { 
                // Add basic 'o' vowel characters
                cumulativeChars = [...new Set([...cumulativeChars, ...filterByVowelSound('o')])]; 
            }

            // New order for advanced character types
            if (currentState.level >= 7) { // Combinations introduced at Level 7
                cumulativeChars = [...new Set([...cumulativeChars, ...hiraganaChart.filter(item => item.group && item.group.includes('combination'))])]; 
            }
            if (currentState.level >= 8) { // Dakuten introduced at Level 8
                cumulativeChars = [...new Set([...cumulativeChars, ...hiraganaChart.filter(item => item.group && item.group.includes('dakuten'))])]; 
            }
            if (currentState.level >= 9) { // Handakuten introduced at Level 9
                cumulativeChars = [...new Set([...cumulativeChars, ...hiraganaChart.filter(item => item.group && item.group.includes('handakuten'))])]; 
            }
            
            charactersToUse = cumulativeChars;

        } else { // Manual selection based on selectedFilterOption
            const selectedFilter = currentState.selectedFilterOption;
            switch (selectedFilter) {
                case 'vowels':
                    charactersToUse = hiraganaChart.filter(item => 
                        (item.romaji.length === 1 && ['a', 'i', 'u', 'e', 'o'].includes(item.romaji)) || item.romaji === 'n'
                    );
                    break;
                case 'a':
                case 'i':
                case 'u':
                case 'e':
                case 'o':
                    // For manual selection of a vowel row, it means basic characters with that vowel sound.
                    charactersToUse = hiraganaChart.filter(item => item.vowel === selectedFilter && getCategory(item) === 'basic');
                    break;
                case 'dakuten':
                    charactersToUse = filterByCategory('dakuten');
                    break;
                case 'handakuten':
                    charactersToUse = filterByCategory('handakuten');
                    break;
                case 'combination':
                    charactersToUse = filterByCategory('combination');
                    break;
                case 'all-characters':
                    charactersToUse = hiraganaChart.filter(item => item.type === 'character'); // All characters
                    break;
                default:
                    charactersToUse = hiraganaChart.filter(item => 
                        (item.romaji.length === 1 && ['a', 'i', 'u', 'e', 'o'].includes(item.romaji)) || item.romaji === 'n'
                    );
                    break;
            }
        }
        // Ensure no duplicates by converting to Set and back to Array
        return Array.from(new Set(charactersToUse));
    }

    // New variable to store the last displayed Hiragana to prevent immediate repeats
    let lastDisplayedHiragana = null;

    /**
     * Selects and displays a new random Hiragana item based on current settings.
     */
    function showNextItem() {
        let filteredDataList = []; 
        let instruction = '';

        // Remove active class from all mode buttons and set current active button
        // Note: The mode buttons are now in the footer, so we select them from there.
        document.querySelectorAll('.bottom-nav-bar .mode-btn').forEach(btn => btn.classList.remove('active'));

        if (currentState.practiceType === 'characters') {
            instruction = 'Type the Romaji for the character below.';
            document.querySelector('.bottom-nav-bar button[data-mode="characters"]').classList.add('active'); 
            filteredDataList = getFilteredCharacters();
            
            if (filteredDataList.length === 0) {
                elements.display.textContent = 'No characters selected for practice!';
                elements.input.disabled = true;
                elements.form.querySelector('button').disabled = true;
                showNotification('No characters to practice based on current settings. Adjust settings or clear mistakes.', 'warning', 5000);
                return;
            }

        } else if (currentState.practiceType === 'words') { 
            instruction = 'Type the Romaji for the word below.';
            document.querySelector('.bottom-nav-bar button[data-mode="words"]').classList.add('active'); 
            filteredDataList = hiraganaWords; 

        } else if (currentState.practiceType === 'numbers') { 
            instruction = 'Type the Romaji for the number below.';
            document.querySelector('.bottom-nav-bar button[data-mode="numbers"]').classList.add('active'); 
            filteredDataList = japaneseNumbers;
        }
        
        elements.instructionText.textContent = instruction;

        let itemToDisplay = null;

        if (reviewSessionActive && currentReviewQueue.length > 0) {
            itemToDisplay = currentReviewQueue.shift(); 
            if (currentReviewQueue.length === 0) {
                reviewSessionActive = false;
                showNotification('Review session complete! Returning to regular practice.', 'info');
            }
        } else if (currentState.failedItemsQueue.length > 0) {
            const foundFailedItem = currentState.failedItemsQueue.find(failedItem => 
                filteredDataList.some(activeItem => 
                    activeItem.hiragana === failedItem.hiragana && activeItem.romaji === failedItem.romaji
                )
            );

            if (foundFailedItem) {
                itemToDisplay = foundFailedItem;
                // Remove from failed queue if it was found and is being reviewed
                currentState.failedItemsQueue = currentState.failedItemsQueue.filter(item => item !== foundFailedItem);
            } else {
                // Fallback to prioritized random if a failed item isn't in the current filtered list
                itemToDisplay = getRandomPrioritizedItem(filteredDataList);
            }

        } else {
            itemToDisplay = getRandomPrioritizedItem(filteredDataList);
        }

        if (!itemToDisplay) {
            elements.display.textContent = 'No items available with current settings.';
            elements.input.disabled = true;
            elements.form.querySelector('button').disabled = true;
            showNotification('No items to practice based on current settings. Adjust settings or clear mistakes.', 'warning', 5000);
            return;
        }

        currentState.currentItem = itemToDisplay; 
        currentState.currentIndex = filteredDataList.indexOf(itemToDisplay); 

        elements.display.textContent = currentState.currentItem.hiragana;
        elements.input.value = ''; 
        elements.input.focus(); 
        elements.feedback.textContent = ''; 
        elements.feedback.classList.remove('correct', 'incorrect'); 

        adjustFontSizeToFit();
    }

    /**
     * Helper function to get a random item, prioritizing unmastered ones, avoiding immediate repeats.
     * @param {Array} dataList - The list of items to choose from (e.g., hiraganaChart, hiraganaWords, japaneseNumbers).
     * @returns {Object} A randomly selected item.
     */
    function getRandomPrioritizedItem(dataList) {
        let unmasteredItems = dataList.filter(item => {
            if (currentState.practiceType === 'characters') {
                return item.masteryLevel < CHAR_MAX_MASTERY_LEVEL;
            } else { // words or numbers
                return item.masteryLevel < (currentState.practiceType === 'words' ? WORD_MAX_MASTERY_LEVEL : NUMBER_MAX_MASTERY_LEVEL);
            }
        });

        let potentialItems = unmasteredItems.length > 0 ? unmasteredItems : dataList;

        // Filter out the last displayed item if there are other options
        if (lastDisplayedHiragana && potentialItems.length > 1) {
            let nonRepeatItems = potentialItems.filter(item => item.hiragana !== lastDisplayedHiragana);
            if (nonRepeatItems.length > 0) {
                potentialItems = nonRepeatItems;
            }
            // If nonRepeatItems is empty, it means all potentialItems are the same as lastDisplayedHiragana,
            // in which case a repeat is unavoidable, and we proceed with original potentialItems.
        }

        const selectedItem = potentialItems[Math.floor(Math.random() * potentialItems.length)];
        
        // Update the last displayed item after selection
        lastDisplayedHiragana = selectedItem.hiragana; 

        return selectedItem;
    }


    function checkAnswer() {
        const userAnswer = elements.input.value.trim().toLowerCase();
        
        if (!userAnswer) return; 

        elements.feedback.textContent = '';
        elements.feedback.classList.remove('correct', 'incorrect');
        elements.input.classList.remove('shake');

        // Find the actual item in the global data array based on current practice type
        let currentItemInMasteryData;
        if (currentState.practiceType === 'characters') {
            currentItemInMasteryData = hiraganaChart.find(item => item.hiragana === currentState.currentItem.hiragana && item.romaji === currentState.currentItem.romaji);
        } else if (currentState.practiceType === 'words') {
            currentItemInMasteryData = hiraganaWords.find(item => item.hiragana === currentState.currentItem.hiragana && item.romaji === currentState.currentItem.romaji);
        } else if (currentState.practiceType === 'numbers') { 
            currentItemInMasteryData = japaneseNumbers.find(item => item.hiragana === currentState.currentItem.hiragana && item.romaji === currentState.currentItem.romaji);
        }


        if (userAnswer === currentState.currentItem.romaji) {
            elements.feedback.textContent = 'Correct!';
            elements.feedback.classList.add('correct');
            currentState.score++; 
            
            // Update mastery for the specific item
            if (currentItemInMasteryData) {
                currentItemInMasteryData.correctStreak++;
                if (currentState.practiceType === 'characters') {
                    if (currentItemInMasteryData.correctStreak >= currentState.charMasteryStreakRequired && currentItemInMasteryData.masteryLevel < CHAR_MAX_MASTERY_LEVEL) {
                        currentItemInMasteryData.masteryLevel = CHAR_MAX_MASTERY_LEVEL; 
                        currentItemInMasteryData.correctStreak = 0; 
                        showNotification(`You've mastered "${currentItemInMasteryData.hiragana}"!`, 'success', 2000);
                    }
                } else if (currentState.practiceType === 'words') {
                    if (currentItemInMasteryData.correctStreak >= WORD_MASTERY_THRESHOLD_PER_LEVEL && currentItemInMasteryData.masteryLevel < WORD_MAX_MASTERY_LEVEL) {
                        currentItemInMasteryData.masteryLevel++;
                        currentItemInMasteryData.correctStreak = 0; 
                        showNotification(`You've leveled up mastery for "${currentItemInMasteryData.hiragana}"! (Level ${currentItemInMasteryData.masteryLevel})`, 'success', 2000);
                    }
                } else if (currentState.practiceType === 'numbers') { 
                    if (currentItemInMasteryData.correctStreak >= NUMBER_MASTERY_THRESHOLD_PER_LEVEL && currentItemInMasteryData.masteryLevel < NUMBER_MAX_MASTERY_LEVEL) {
                        currentItemInMasteryData.masteryLevel++;
                        currentItemInMasteryData.correctStreak = 0; 
                        showNotification(`You've leveled up mastery for "${currentItemInMasteryData.hiragana}"! (Level ${currentItemInMasteryData.masteryLevel})`, 'success', 2000);
                    }
                }
            }
            
            const failedIndex = currentState.failedItemsQueue.findIndex(item => 
                item.hiragana === currentState.currentItem.hiragana && item.romaji === currentState.currentItem.romaji
            );
            if (failedIndex > -1) {
                currentState.failedItemsQueue.splice(failedIndex, 1);
            }
            
            if (currentState.practiceType === 'characters') {
                checkCharacterGlobalLevelProgression(); 
            } else { // Word and Number practice modes retain the old global level logic
                currentState.correctAnswersInCurrentLevel++;
                if (currentState.correctAnswersInCurrentLevel >= currentState.levelUpThreshold) {
                    currentState.level++;
                    currentState.correctAnswersInCurrentLevel = 0;
                    showNotification(`Congratulations! You reached Level ${currentState.level} in ${currentState.practiceType}! Keep up the great work!`, 'success');
                }
            }

            updateStatsDisplay(); 
            saveState(currentState.practiceType); 
            
            elements.mnemonicToggleButton.style.display = 'none';

            // Reset consecutive incorrect counter on correct answer
            currentState.consecutiveIncorrectCount = 0;
            currentState.lastIncorrectItemHiragana = null;

            setTimeout(() => {
                showNextItem();
            }, 800);

        } else {
            elements.feedback.textContent = 'Not quite! Try again!'; 
            elements.feedback.classList.add('incorrect');
            elements.input.classList.add('shake'); 
            
            // Reset streak on incorrect answer
            if (currentItemInMasteryData) {
                currentItemInMasteryData.correctStreak = 0;
            }

            // Handle repeated incorrect answers
            if (currentState.lastIncorrectItemHiragana === currentState.currentItem.hiragana) {
                currentState.consecutiveIncorrectCount++;
            } else {
                currentState.lastIncorrectItemHiragana = currentState.currentItem.hiragana;
                currentState.consecutiveIncorrectCount = 1;
            }

            if (currentState.consecutiveIncorrectCount >= 2) { 
                showNotification(`Oops! Correct answer for "${currentState.currentItem.hiragana}" was "${currentState.currentItem.romaji}".`, 'danger', 4000);
                // Reset count after showing the specific notification to prevent repeat for every subsequent wrong answer
                currentState.consecutiveIncorrectCount = 0;
                currentState.lastIncorrectItemHiragana = null;
            }

            const isAlreadyFailed = currentState.failedItemsQueue.some(item => 
                item.hiragana === currentState.currentItem.hiragana && item.romaji === currentState.currentItem.romaji
            );
            if (!isAlreadyFailed) {
                currentState.failedItemsQueue.push(currentState.currentItem);
            }
            if (reviewSessionActive) {
                currentReviewQueue.push(currentState.currentItem);
            }
            
            // Only reset correctAnswersInCurrentLevel for word/number mode, as character mode uses individual mastery
            if (currentState.practiceType === 'words' || currentState.practiceType === 'numbers') { 
                currentState.correctAnswersInCurrentLevel = 0; 
            }
            saveState(currentState.practiceType); 

            if (currentState.currentItem.mnemonicImage || currentState.currentItem.mnemonicText) {
                elements.mnemonicToggleButton.style.display = 'flex';
            }

            setTimeout(() => {
                elements.input.classList.remove('shake');
            }, 300);
        }
    }

    /**
     * Renders the progress visualizations in the stats modal.
     */
    function renderProgressVisualizations() {
        // Clear previous lists
        elements.charMasteredList.innerHTML = '<h6>Mastered (⭐)</h6>';
        elements.charLearningList.innerHTML = '<h6>Learning (🟡)</h6>';
        elements.charNotStartedList.innerHTML = '<h6>Not Started (⚪)</h6>';
        elements.wordMasteredList.innerHTML = '<h6>Mastered (⭐)</h6>';
        elements.wordLearningList.innerHTML = '<h6>Learning (🟡)</h6>';
        elements.wordNotStartedList.innerHTML = '<h6>Not Started (⚪)</h6>';
        elements.numMasteredList.innerHTML = '<h6>Mastered (⭐)</h6>'; 
        elements.numLearningList.innerHTML = '<h6>Learning (🟡)</h6>'; 
        elements.numNotStartedList.innerHTML = '<h6>Not Started (⚪)</h6>'; 

        // Hide/Show progress sections based on current mode for clarity, or just show all.
        // For simplicity, let's keep them all visible in stats for now, but in a more complex app,
        // you might show only relevant sections.

        // Helper to add an item to the correct list
        const addItemToList = (item, listType) => {
            const span = document.createElement('span');
            span.classList.add('item-tag');
            let indicator = '';
            let className = '';
            
            let itemMaxMastery;
            if (listType === 'char') itemMaxMastery = CHAR_MAX_MASTERY_LEVEL;
            else if (listType === 'word') itemMaxMastery = WORD_MAX_MASTERY_LEVEL;
            else if (listType === 'num') itemMaxMastery = NUMBER_MAX_MASTERY_LEVEL; 

            if (item.masteryLevel === itemMaxMastery) {
                indicator = '⭐';
                className = 'mastered';
            } else if (item.masteryLevel > 0) {
                indicator = '🟡';
                className = 'learning';
            } else {
                indicator = '⚪';
                className = 'not-started';
            }
            
            span.innerHTML = `<span class="status-indicator">${indicator}</span> ${item.hiragana} <small>(${item.romaji})</small>`;
            if (listType === 'char' && item.masteryLevel < CHAR_MAX_MASTERY_LEVEL) { 
                 span.innerHTML += ` (${item.correctStreak}/${currentState.charMasteryStreakRequired})`; 
            } else if (listType === 'word' && item.masteryLevel < WORD_MAX_MASTERY_LEVEL) { 
                 span.innerHTML += ` (Lvl ${item.masteryLevel}/${WORD_MAX_MASTERY_LEVEL})`;
            } else if (listType === 'num' && item.masteryLevel < NUMBER_MAX_MASTERY_LEVEL) { 
                 span.innerHTML += ` (Lvl ${item.masteryLevel}/${NUMBER_MAX_MASTERY_LEVEL})`;
            }
            span.classList.add(className);

            if (listType === 'char') {
                if (item.masteryLevel === CHAR_MAX_MASTERY_LEVEL) elements.charMasteredList.appendChild(span);
                else if (item.masteryLevel > 0) elements.charLearningList.appendChild(span);
                else elements.charNotStartedList.appendChild(span);
            } else if (listType === 'word') {
                if (item.masteryLevel === WORD_MAX_MASTERY_LEVEL) elements.wordMasteredList.appendChild(span);
                else if (item.masteryLevel > 0) elements.wordLearningList.appendChild(span);
                else elements.wordNotStartedList.appendChild(span);
            } else if (listType === 'num') { 
                if (item.masteryLevel === NUMBER_MAX_MASTERY_LEVEL) elements.numMasteredList.appendChild(span);
                else if (item.masteryLevel > 0) elements.numLearningList.appendChild(span);
                else elements.numNotStartedList.appendChild(span);
            }
        };

        // Populate character lists
        hiraganaChart.forEach(char => addItemToList(char, 'char'));

        // Populate word lists
        hiraganaWords.forEach(word => addItemToList(word, 'word'));

        // Populate number lists 
        japaneseNumbers.forEach(num => addItemToList(num, 'num'));
    }

    // --- EVENT LISTENERS ---

    const forceLowercase = () => {
        elements.input.value = elements.input.value.toLowerCase();
    };

    elements.input.addEventListener('input', forceLowercase);
    elements.input.addEventListener('keyup', forceLowercase); // Additional check
    elements.input.addEventListener('change', forceLowercase); // Check when focus is lost

    elements.form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        checkAnswer(); 
    });

    // Mode dropdown button listener
    elements.modeDropdownBtn.addEventListener('click', (event) => {
        // Toggle the dropdown menu visibility by toggling a class
        elements.modeDropdownMenu.classList.toggle('show');
        event.stopPropagation(); // Prevent clicks on document from closing immediately
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.mode-dropdown-container')) {
            elements.modeDropdownMenu.classList.remove('show');
        }
    });

    // Mode selection buttons inside dropdown
    document.querySelectorAll('.bottom-nav-bar .mode-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            saveState(currentState.practiceType); // Save current mode's state before switching

            const newPracticeType = event.target.dataset.mode;

            // Condition to unlock word/number practice
            if (newPracticeType === 'words') {
                const charState = loadState('characters'); 
                if (charState.level < 10) { 
                    showNotification("Great job! Master all Hiragana characters (Level 10) to unlock Word practice!", 'info', 4000);
                    elements.modeDropdownMenu.classList.remove('show'); // Close dropdown
                    return; 
                }
            } else if (newPracticeType === 'numbers') { 
                const charState = loadState('characters');
                if (charState.level < 5) { 
                    showNotification("Practice more characters! Reach at least Level 5 in character practice to unlock Number practice!", 'info', 4000);
                    elements.modeDropdownMenu.classList.remove('show'); // Close dropdown
                    return; 
                }
            }

            currentState = loadState(newPracticeType); 
            currentState.practiceType = newPracticeType; 
            reviewSessionActive = false;
            currentReviewQueue = [];
            lastDisplayedHiragana = null; // Reset last displayed item on mode change

            updateStatsDisplay(); 
            showNextItem(); 
            showNotification(`Switched to ${newPracticeType.charAt(0).toUpperCase() + newPracticeType.slice(1)} Practice!`, 'info', 2000);
            elements.modeDropdownMenu.classList.remove('show'); // Close dropdown after selection
        });
    });


    elements.mnemonicToggleButton.addEventListener('click', () => {
        if (currentState.currentItem) {
            elements.mnemonicTitle.textContent = `Mnemonic for "${currentState.currentItem.hiragana}"`;
            if (currentState.currentItem.mnemonicImage) {
                elements.mnemonicImage.src = currentState.currentItem.mnemonicImage;
                elements.mnemonicImage.style.display = 'block';
            } else {
                elements.mnemonicImage.style.display = 'none';
            }
            if (currentState.currentItem.mnemonicText) {
                elements.mnemonicText.textContent = currentState.currentItem.mnemonicText;
            } else {
                elements.mnemonicText.textContent = 'No mnemonic text available for this item.';
            }
            showModal(elements.mnemonicOverlay);
        }
    });

    elements.statsBtn.addEventListener('click', () => {
        updateStatsDisplay(); // Update stats and visualizations before showing modal
        showModal(elements.statsModal);
    });

    elements.settingsBtn.addEventListener('click', () => {
        //populateSettingsModal(); 
        showModal(elements.settingsModal);
    });

    elements.saveSettingsBtn.addEventListener('click', applySettings);

    // Listener for auto-progress toggle in settings to show/hide relevant settings
		elements.autoProgressToggle.addEventListener('change', () => {
        currentState.autoProgressEnabled = elements.autoProgressToggle.checked; // Update state immediately

       //  Control visibility
        if (currentState.autoProgressEnabled) {
			console.log('enabled')
			//elements.characterSelectionOptionsContainer.style.display = 'none';
			//elements.masterySliderContainer.style.display = 'none';
        } else {
			console.log('disabled')
			//elements.characterSelectionOptionsContainer.style.display = 'block';
			//elements.masterySliderContainer.style.display = 'block';
        }
        
        // Update disabled state of radio buttons
        document.querySelectorAll('input[name="characterFilter"]').forEach(radio => {
            radio.disabled = currentState.autoProgressEnabled;
        });
    });

    // Listener for the mastery streak slider to update its display
    elements.masteryStreakSlider.addEventListener('input', () => {
        elements.masteryStreakDisplay.textContent = elements.masteryStreakSlider.value;
    });

    elements.modalCloseBtns.forEach(button => {
        button.addEventListener('click', (event) => {
            const modalId = event.target.dataset.modalId || event.target.closest('.modal-custom-overlay').id;
            hideModal(document.getElementById(modalId));
        });
    });

    document.querySelectorAll('.modal-custom-overlay').forEach(overlay => {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                hideModal(overlay);
            }
        });
    });

    elements.startReviewBtn.addEventListener('click', () => {
        if (currentState.failedItemsQueue.length > 0) {
            currentReviewQueue = [...currentState.failedItemsQueue];
            reviewSessionActive = true;
            hideModal(elements.statsModal); 
            showNextItem(); 
            showNotification('Starting review session for your missed items!', 'info');
        } else {
            showNotification('No mistakes to review!', 'info');
        }
    });

    elements.clearMistakesBtn.addEventListener('click', () => {
        // Replaced confirm with showModal for consistency and better UX
        const confirmationModal = document.createElement('div');
        confirmationModal.classList.add('modal-custom-overlay');
        confirmationModal.innerHTML = `
            <div class="modal-custom-content">
                <h3>Confirm Action</h3>
                <p>Are you sure you want to clear all recorded mistakes? This cannot be undone.</p>
                <button id="confirm-clear-btn" class="btn btn-danger me-2">Yes, Clear</button>
                <button id="cancel-clear-btn" class="btn btn-secondary">Cancel</button>
            </div>
        `;
        document.body.appendChild(confirmationModal);
        showModal(confirmationModal);

        document.getElementById('confirm-clear-btn').addEventListener('click', () => {
            currentState.failedItemsQueue = [];
            saveState(currentState.practiceType);
            updateStatsDisplay(); 
            showNotification('All mistakes cleared!', 'success');
            hideModal(confirmationModal);
            confirmationModal.remove(); // Remove modal from DOM
        });

        document.getElementById('cancel-clear-btn').addEventListener('click', () => {
            hideModal(confirmationModal);
            confirmationModal.remove(); // Remove modal from DOM
        });
    });

    // Event listener for the "Start Over" button
    elements.startOverBtn.addEventListener('click', () => {
        const confirmMessage = `Are you sure you want to reset all your progress for ${currentState.practiceType} mode? This action cannot be undone.`;
        // Replaced confirm with showModal for consistency and better UX
        const confirmationModal = document.createElement('div');
        confirmationModal.classList.add('modal-custom-overlay');
        confirmationModal.innerHTML = `
            <div class="modal-custom-content">
                <h3>Confirm Action</h3>
                <p>${confirmMessage}</p>
                <button id="confirm-reset-btn" class="btn btn-danger me-2">Yes, Reset</button>
                <button id="cancel-reset-btn" class="btn btn-secondary">Cancel</button>
            </div>
        `;
        document.body.appendChild(confirmationModal);
        showModal(confirmationModal);

        document.getElementById('confirm-reset-btn').addEventListener('click', () => {
            let targetDataArray;
            let localStorageKey;
            let defaultStateToApply;

            if (currentState.practiceType === 'characters') {
                targetDataArray = hiraganaChart;
                localStorageKey = 'hiraganaCharacterState';
                defaultStateToApply = defaultCharacterState;
            } else if (currentState.practiceType === 'words') {
                targetDataArray = hiraganaWords;
                localStorageKey = 'hiraganaWordState';
                defaultStateToApply = defaultWordState;
            } else if (currentState.practiceType === 'numbers') { 
                targetDataArray = japaneseNumbers;
                localStorageKey = 'hiraganaNumberState';
                defaultStateToApply = defaultNumberState;
            }

            // Reset current state to default for the active practice type
            currentState = { ...defaultStateToApply };
            localStorage.removeItem(localStorageKey);

            // Reset mastery data for all items in the *active* data array
            targetDataArray.forEach(item => {
                item.masteryLevel = 0;
                item.correctStreak = 0;
            });
            
            showNotification(`Progress for ${currentState.practiceType} mode reset!`, 'info', 3000);
            hideModal(elements.settingsModal);
            hideModal(confirmationModal); // Hide both settings and confirmation modals
            confirmationModal.remove(); // Remove modal from DOM
            updateStatsDisplay();
            showNextItem();
        });

        document.getElementById('cancel-reset-btn').addEventListener('click', () => {
            hideModal(confirmationModal);
            confirmationModal.remove(); // Remove modal from DOM
        });
    });

    // Collapsible sections logic
    elements.collapsibleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.dataset.target;
            const content = document.getElementById(targetId);
            if (content) {
                const isCollapsed = header.classList.contains('collapsed');
                // Toggle the class for header and content
                header.classList.toggle('collapsed', !isCollapsed);
                content.classList.toggle('expanded', isCollapsed);

                // Set max-height for smooth transition
                if (isCollapsed) {
                    content.style.maxHeight = content.scrollHeight + "px"; // Expand
                } else {
                    content.style.maxHeight = "0"; // Collapse
                }

                // Rotate the arrow icon (already handled by CSS based on .collapsed class)
            }
        });
    });

    window.addEventListener('resize', adjustFontSizeToFit);

    // --- INITIALIZATION ---
    // Ensure all items have mastery properties on first load if not present
    [hiraganaChart, hiraganaWords, japaneseNumbers].forEach(dataArray => { 
        dataArray.forEach(item => {
            if (item.masteryLevel === undefined) item.masteryLevel = 0;
            if (item.correctStreak === undefined) item.correctStreak = 0;
        });
    });

    const initialPracticeType = localStorage.getItem('lastPracticeType') || 'characters';
    currentState = loadState(initialPracticeType);
    
    // Set the active mode button on load
    // Need to select the button from the footer for activation
    const initialModeButton = document.querySelector(`.bottom-nav-bar button[data-mode="${initialPracticeType}"]`);
    if (initialModeButton) {
        initialModeButton.classList.add('active');
    }


    // Collapse all collapsible sections by default on load
    elements.collapsibleHeaders.forEach(header => {
        header.classList.add('collapsed');
        const content = document.getElementById(header.dataset.target);
        if (content) {
            content.classList.remove('expanded');
            content.style.maxHeight = '0'; // Ensure it's visually collapsed
        }
    });

    // Check if the app was just updated (before showing the first item)
    if (sessionStorage.getItem('appUpdated')) {
        showNotification('App Updated! ✅', 'success', 4000); // Green success notification
        sessionStorage.removeItem('appUpdated'); // Clear the flag
    }

    updateStatsDisplay(); 
    showNextItem();

    // --- Service Worker and Update System Logic ---
   let newWorker = null; // Stores the new service worker
    let refreshing = false; // Flag to prevent multiple reloads

    if ('serviceWorker' in navigator) {
        // Register the service worker using a path relative to the current HTML file
        // This assumes sw.js is in the same directory as index.html, or accessible via this relative path.
        navigator.serviceWorker.register('sw.js')
            .then(reg => {
                console.log('Service Worker registered with scope:', reg.scope);

                reg.addEventListener('updatefound', () => {
                    newWorker = reg.installing;
                    if (newWorker) {
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed') {
                                if (navigator.serviceWorker.controller) {
                                    console.log('New update available (state: installed)!');
                                    // Show the yellow toast with the update button, duration 0 makes it persistent
                                    showNotification('A new version is available!', 'warning', 0, 'Update Now', () => {
                                        if (newWorker) {
                                            newWorker.postMessage({ type: 'SKIP_WAITING' });
                                        }
                                    });
                                } else {
                                    console.log('Service Worker installed for the first time or activated on refresh.');
                                }
                            }
                        });
                    }
                });
            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });

        // Listen for the 'controllerchange' event to reload the page once the new service worker is active
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (refreshing) return;
            console.log('Service Worker controller changed. Reloading for update.');
            sessionStorage.setItem('appUpdated', 'true'); // Set flag before reload
            window.location.reload();
            refreshing = true;
        }); 
    
});
