export interface GitaVerse {
  chapter: number;
  verse: number;
  sanskrit: string;
  english: string;
  hindi: string;
  commentary: string;
}

export interface GitaChapter {
  chapter: number;
  title: string;
  description: string;
  totalVerses: number;
}

export const chapters: GitaChapter[] = [
  {
    chapter: 1,
    title: "Arjuna Vishada Yoga",
    description: "The Yoga of Arjuna's Dejection",
    totalVerses: 47,
  },
  {
    chapter: 2,
    title: "Sankhya Yoga",
    description: "The Yoga of Knowledge",
    totalVerses: 72,
  },
  {
    chapter: 3,
    title: "Karma Yoga",
    description: "The Yoga of Action",
    totalVerses: 43,
  },
  {
    chapter: 4,
    title: "Jnana Karma Sanyasa Yoga",
    description: "The Yoga of Knowledge and Action",
    totalVerses: 42,
  },
  {
    chapter: 5,
    title: "Karma Sanyasa Yoga",
    description: "The Yoga of Renunciation of Action",
    totalVerses: 29,
  },
  {
    chapter: 6,
    title: "Dhyana Yoga",
    description: "The Yoga of Meditation",
    totalVerses: 47,
  },
  {
    chapter: 7,
    title: "Jnana Vijnana Yoga",
    description: "The Yoga of Knowledge and Realization",
    totalVerses: 30,
  },
  {
    chapter: 8,
    title: "Aksara Brahma Yoga",
    description: "The Yoga of the Imperishable Brahman",
    totalVerses: 28,
  },
  {
    chapter: 9,
    title: "Raja Vidya Raja Guhya Yoga",
    description: "The Yoga of Royal Knowledge and Royal Secret",
    totalVerses: 34,
  },
  {
    chapter: 10,
    title: "Vibhuti Yoga",
    description: "The Yoga of Divine Manifestations",
    totalVerses: 42,
  },
  {
    chapter: 11,
    title: "Vishvarupa Darshana Yoga",
    description: "The Yoga of the Vision of the Universal Form",
    totalVerses: 55,
  },
  {
    chapter: 12,
    title: "Bhakti Yoga",
    description: "The Yoga of Devotion",
    totalVerses: 20,
  },
  {
    chapter: 13,
    title: "Kshetra Kshetrajna Vibhaga Yoga",
    description: "The Yoga of Field and Knower of Field",
    totalVerses: 35,
  },
  {
    chapter: 14,
    title: "Gunatraya Vibhaga Yoga",
    description: "The Yoga of Division of Three Gunas",
    totalVerses: 27,
  },
  {
    chapter: 15,
    title: "Purushottama Yoga",
    description: "The Yoga of the Supreme Person",
    totalVerses: 20,
  },
  {
    chapter: 16,
    title: "Daivasura Sampad Vibhaga Yoga",
    description: "The Yoga of Divine and Demoniacal Natures",
    totalVerses: 24,
  },
  {
    chapter: 17,
    title: "Shraddhatraya Vibhaga Yoga",
    description: "The Yoga of Division of Faith",
    totalVerses: 28,
  },
  {
    chapter: 18,
    title: "Moksha Sanyasa Yoga",
    description: "The Yoga of Liberation and Renunciation",
    totalVerses: 78,
  },
];

// Expanded verses dataset with the provided data
export const verses: GitaVerse[] = [
  // Chapter 1 verses

  {
    chapter: 1,
    verse: 1,
    sanskrit:
      "धृतराष्ट्र उवाच |\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||१-१||",
    english:
      "1.1 Dhritarashtra said  What did my people and the sons of Pandu do when they had assembled\ntogether eager for battle on the holy plain of Kurukshetra, O Sanjaya.",
    hindi:
      "।।1.1।।धृतराष्ट्र ने कहा -- हे संजय ! धर्मभूमि कुरुक्षेत्र में एकत्र हुए युद्ध के इच्छुक (युयुत्सव:) मेरे और पाण्डु के पुत्रों ने क्या किया?",
    commentary: "A simple summary of verse 1.1",
  },
  {
    chapter: 1,
    verse: 2,
    sanskrit:
      "सञ्जय उवाच |\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा |\nआचार्यमुपसंगम्य राजा वचनमब्रवीत् ||१-२||",
    english:
      "1.2. Sanjaya said  Having seen the army of the Pandavas drawn up in battle-array,\nKing Duryodhana then approached his teacher (Drona) and spoke these words.",
    hindi:
      "।।1.2।।संजय ने कहा -- पाण्डव-सैन्य की व्यूह रचना देखकर राजा दुर्योधन ने आचार्य द्रोण के पास जाकर ये वचन कहे।",
    commentary: "A simple summary of verse 1.2",
  },
  {
    chapter: 1,
    verse: 3,
    sanskrit:
      "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् |\nव्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ||१-३||",
    english:
      '1.3. "Behold, O Teacher! this mighty army of the sons of Pandu,\narrayed by the son of Drupada, thy wise disciple.',
    hindi:
      "।।1.3।।हे आचार्य ! आपके बुद्धिमान शिष्य द्रुपदपुत्र (धृष्टद्द्युम्न) द्वारा व्यूहाकार खड़ी की गयी पाण्डु पुत्रों की इस महती सेना को देखिये।",
    commentary: "A simple summary of verse 1.3",
  },
  {
    chapter: 1,
    verse: 4,
    sanskrit:
      "अत्र शूरा महेष्वासा भीमार्जुनसमा युधि |\nयुयुधानो विराटश्च द्रुपदश्च महारथः ||१-४||",
    english:
      "1.4. Here are heroes, mighty archers, eal in battle to Bhima\nand Arjuna, Yoyudhana (Satyaki), Virata and Drupada, of the great car (mighty\nwarriors).",
    hindi:
      "।।1.4।।इस सेना में महान् धनुर्धारी शूर योद्धा है ,  जो युद्ध में भीम और अर्जुन के समान हैं , जैसे --  युयुधान, विराट तथा महारथी राजा द्रुपद।",
    commentary: "A simple summary of verse 1.4",
  },
  {
    chapter: 1,
    verse: 5,
    sanskrit:
      "धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् |\nपुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुंगवः ||१-५||",
    english:
      '1.5. "Dhrishtaketu, chekitana and the valiant king of Kasi, Purujit\nand Kuntibhoja and Saibya, the best men.',
    hindi:
      "।।1.5।।धृष्टकेतु, चेकितान, बलवान काशिराज,  पुरुजित्, कुन्तिभोज और मनुष्यों में श्रेष्ठ शैब्य।",
    commentary: "A simple summary of verse 1.5",
  },
  {
    chapter: 1,
    verse: 6,
    sanskrit:
      "युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान् |\nसौभद्रो द्रौपदेयाश्च सर्व एव महारथाः ||१-६||",
    english:
      '1.6. "The strong Yodhamanyu and the brave Uttamaujas, the son\nof Subhadra (Abhimanyu, the son of Subhadra and Arjuna), and the sons of\nDraupadi, all of great chariots (great heroes).',
    hindi:
      "।।1.6।।पराक्रमी युधामन्यु,  बलवान् उत्तमौजा,  सुभद्रापुत्र (अभिमन्यु) और द्रोपदी के पुत्र -- ये सब महारथी हैं।",
    commentary: "A simple summary of verse 1.6",
  },
  {
    chapter: 1,
    verse: 7,
    sanskrit:
      "अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम |\nनायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते ||१-७||",
    english:
      '1.7. "Know also, O best among the twice-born! the names of those\nwho are the most distinguished amongst ourselves, the leaders of my army;\nthese I name to thee for thy information.',
    hindi:
      "।।1.7।।हे द्विजोत्तम ! हमारे पक्ष में भी जो विशिष्ट योद्धागण हैं , उनको आप जान लीजिये; आपकी जानकारी के लिये अपनी सेना के नायकों के नाम मैं आपको बताता हूँ।",
    commentary: "A simple summary of verse 1.7",
  },
  {
    chapter: 1,
    verse: 8,
    sanskrit:
      "भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः |\nअश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च ||१-८||",
    english:
      '1.8. "Thyself and Bhishma, and Karna and also Kripa, the victorious\nin war, Asvatthama, Vikarna, and also Bhurisrava, the son of Somadatta.',
    hindi:
      "।।1.8।।एक तो स्वयं आप, भीष्म, कर्ण, और युद्ध विजयी कृपाचार्य तथा अश्वत्थामा, विकर्ण और सोमदत्त का पुत्र है।",
    commentary: "A simple summary of verse 1.8",
  },
  {
    chapter: 1,
    verse: 9,
    sanskrit:
      "अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः |\nनानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः ||१-९||",
    english:
      '1.9. "And also many other heroes who are ready to give up their\nlives for my sake, armed with various weapons and missiles, all well-skilled\nin battle.',
    hindi:
      "।।1.9।।मेरे लिए प्राण त्याग करने के लिए तैयार, अनेक प्रकार के शस्त्रास्त्रों से सुसज्जित तथा युद्ध में कुशल और भी अनेक शूर वीर हैं।",
    commentary: "A simple summary of verse 1.9",
  },
  {
    chapter: 1,
    verse: 10,
    sanskrit:
      "अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम् |\nपर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम् ||१-१०||",
    english:
      '1.10. "This army of ours marshalled by Bhishma is insufficient,\nwhereas that army of theirs marshelled by Bhima is sufficient.',
    hindi:
      "।।1.10।।भीष्म के द्वारा हमारी रक्षित सेना अपर्याप्त है; किन्तु भीम द्वारा रक्षित उनकी सेना पर्याप्त है अथवा, भीष्म के द्वारा रक्षित हमारी सेना अपरिमित है किन्तु भीम के द्वारा रक्षित उनकी सेना परिमित ही है।",
    commentary: "A simple summary of verse 1.10",
  },
  {
    chapter: 1,
    verse: 11,
    sanskrit:
      "अयनेषु च सर्वेषु यथाभागमवस्थिताः |\nभीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि ||१-११||",
    english:
      '1.11. "Therefore do ye all, stationed in your respective positions,\nin the several divisions of the army, protect Bhishma alone."',
    hindi:
      "।।1.11।।विभिन्न मोर्चों पर अपने-अपने स्थान पर स्थित रहते हुए आप सब लोग भीष्म पितामह की ही सब ओर से रक्षा करें।",
    commentary: "A simple summary of verse 1.11",
  },
  {
    chapter: 1,
    verse: 12,
    sanskrit:
      "तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः |\nसिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान् ||१-१२||",
    english:
      "1.12. His glorious grandsire (Bhishma), the oldest of the Kauravas,\nin order to cheer Duryodhana, now roared like a lion, and blew his conch.",
    hindi:
      "।।1.12।।उस समय कौरवों में वृद्ध, प्रतापी पितामह भीष्म ने उस (दुर्योधन) के हृदय में हर्ष उत्पन्न करते हुये उच्च स्वर में गरज कर शंखध्वनि की।",
    commentary: "A simple summary of verse 1.12",
  },
  {
    chapter: 1,
    verse: 13,
    sanskrit:
      "ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः |\nसहसैवाभ्यहन्यन्त स शब्दस्तुमुलोऽभवत् ||१-१३||",
    english:
      "1.13. Then (following Bhishma), conches and kettledrums, tabors,\ndrums and cow horns blared forth ite suddenly (from the Kaurava side)\nand the sound was tremendous.",
    hindi:
      "।।1.13।।तत्पश्चात् शंख, नगारे, ढोल व शृंगी आदि वाद्य एक साथ ही बज उठे, जिनका बड़ा भयंकर शब्द हुआ।",
    commentary: "A simple summary of verse 1.13",
  },
  {
    chapter: 1,
    verse: 14,
    sanskrit:
      "ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ |\nमाधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः ||१-१४||",
    english:
      "1.14. Then, also, Madhava (Krishna) and the son of Pandu (Arjuna),\nseated in the magnificent chariot, yoked with white horses, blew divine\nconches.",
    hindi:
      "।।1.14।।इसके उपरान्त श्वेत अश्वों से युक्त भव्य रथ में बैठे हुये माधव (श्रीकृष्ण) और पाण्डुपुत्र अर्जुन ने भी अपने दिव्य शंख बजाये।",
    commentary: "A simple summary of verse 1.14",
  },
  {
    chapter: 1,
    verse: 15,
    sanskrit:
      "पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः |\nपौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः ||१-१५||",
    english:
      "1.15. Hrishikesha blew the Panchajanya and Arjuna blew the Devadatta\nand Bhima (the wolf-bellied), the doer of terrible deeds, blew the great\nconch Paundra.",
    hindi:
      "।।1.15।।भगवान् हृषीकेश ने पांचजन्य, धनंजय (अर्जुन) ने देवदत्त तथा भयंकर कर्म करने वाले भीम ने पौण्डू नामक महाशंख बजाया।",
    commentary: "A simple summary of verse 1.15",
  },
  {
    chapter: 1,
    verse: 16,
    sanskrit:
      "अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः |\nनकुलः सहदेवश्च सुघोषमणिपुष्पकौ ||१-१६||",
    english:
      "1.16. The king Yodhishthira, the son of Kunti, blew the Anantavijaya;\nNakula and Sahadeva blew the Sughosha and the Manipushpaka.",
    hindi:
      "।।1.16।।कुन्तीपुत्र राजा युधिष्ठिर ने अनन्त विजय नामक शंख और नकुल व सहदेव ने क्रमश:  सुघोष और मणिपुष्पक नामक शंख बजाये।",
    commentary: "A simple summary of verse 1.16",
  },
  {
    chapter: 1,
    verse: 17,
    sanskrit:
      "काश्यश्च परमेष्वासः शिखण्डी च महारथः |\nधृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः ||१-१७||",
    english:
      "1.17. The king of Kasi, an exellent archer, Sikhandi, the mighty\ncar-warrior, Dhrishtadyumna and Virata and Satyaki, the unconered.",
    hindi:
      "।।1.17।।श्रेष्ठ धनुषवाले काशिराज, महारथी शिखण्डी, धृष्टद्युम्न,  राजा विराट और अजेय सात्यकि।",
    commentary: "A simple summary of verse 1.17",
  },
  {
    chapter: 1,
    verse: 18,
    sanskrit:
      "द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते |\nसौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक् ||१-१८||",
    english:
      "1.18. Drupada and the sons of Draupadi, O Lord of the earth, and\nthe son of Subhadra, the mighty-armed, blew their conches separately.",
    hindi:
      "।।1.18।।हे राजन् ! राजा द्रुपद,  द्रौपदी के पुत्र और महाबाहु सौभद्र (अभिमन्यु) इन सब ने अलग-अलग शंख बजाये।",
    commentary: "A simple summary of verse 1.18",
  },
  {
    chapter: 1,
    verse: 19,
    sanskrit:
      "स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत् |\nनभश्च पृथिवीं चैव तुमुलोऽभ्यनुनादयन् (or लोव्यनु) ||१-१९||",
    english:
      "1.19. That tumultuous sound rent the hearts of (the members of)\nDhritarashtra's party, making both the heaven and the earth resound.",
    hindi:
      "।।1.19।।वह भयंकर घोष आकाश और पृथ्वी पर गूँजने लगा और उसने धृतराष्ट्र के पुत्रों के हृदय विदीर्ण कर दिये।",
    commentary: "A simple summary of verse 1.19",
  },
  {
    chapter: 1,
    verse: 20,
    sanskrit:
      "अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान् कपिध्वजः |\nप्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः |\nहृषीकेशं तदा वाक्यमिदमाह महीपते ||१-२०||",
    english:
      "1.20. Then, seeing the people of Dhritarashtra’s party standing\narrayed and the discharge of weapons about to begin, Arjuna, the son of\nPandu, whose ensign was a monkey, took up his bow and said the following\nto Krishna, O Lord of the earth.",
    hindi:
      "।।1.20।।हे महीपते ! इस प्रकार जब युद्ध प्रारम्भ होने वाला ही था कि कपिध्वज अर्जुन ने धृतराष्ट्र के पुत्रों को स्थित देखकर धनुष उठाकर भगवान् हृषीकेश से ये शब्द कहे।",
    commentary: "A simple summary of verse 1.20",
  },
  {
    chapter: 1,
    verse: 21,
    sanskrit: "अर्जुन उवाच |\nसेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत ||१-२१||",
    english:
      "1.21 Arjuna said  In the middle between the two armies, place my chariot,\nO krishna, so that I may behold those who stand here desirous to fight,\nand know with whom I must fight, when the battle is about to commence.",
    hindi:
      "।।1.21।।अर्जुन ने कहा -- हे! अच्युत मेरे रथ को दोनों सेनाओं के मध्य खड़ा कीजिये।",
    commentary: "A simple summary of verse 1.21",
  },
  {
    chapter: 1,
    verse: 22,
    sanskrit:
      "यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान् |\nकैर्मया सह योद्धव्यमस्मिन् रणसमुद्यमे ||१-२२||",
    english:
      "1.22. Arjuna said  In the middle between the two armies, place my chariot,\nO krishna, so that I may behold those who stand here desirous to fight,\nand know with whom I must fight, when the battle is about to commence.",
    hindi:
      "।।1.22।।जिससे मैं युद्ध की इच्छा से खड़े इन लोगों का निरीक्षण कर सकूँ कि इस युद्ध में मुझे किनके साथ युद्ध करना है।",
    commentary: "A simple summary of verse 1.22",
  },
  {
    chapter: 1,
    verse: 23,
    sanskrit:
      "योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः |\nधार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः ||१-२३||",
    english:
      "1.23. For I desire to observe those who are assembled here to fight,\nwishing to please in battle the evil-minded Duryodhana (the son of Dhritarashtra).",
    hindi:
      "।।1.23।।दुर्बुद्धि धार्तराष्ट्र (दुर्योधन) का युद्ध में प्रिय चाहने वाले जो ये राजा लोग यहाँ एकत्र हुए हैं, उन युद्ध करने वालों को मैं देखूँगा।",
    commentary: "A simple summary of verse 1.23",
  },
  {
    chapter: 1,
    verse: 24,
    sanskrit:
      "सञ्जय उवाच |\nएवमुक्तो हृषीकेशो गुडाकेशेन भारत |\nसेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम् ||१-२४||",
    english:
      "1.24. Sanjaya said  Thus addressed by Arjuna, Krishna, having stationed that\nbest of chariots, O Dhritarashtra, in the midst of the two armies.",
    hindi:
      "।।1.24।।संजय ने कहा -- हे भारत (धृतराष्ट्र) ! अर्जुन के इस प्रकार कहने पर भगवान् हृषीकेश ने दोनों सेनाओं के मध्य उत्तम रथ को खड़ा करके।",
    commentary: "A simple summary of verse 1.24",
  },
  {
    chapter: 1,
    verse: 25,
    sanskrit:
      "भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम् |\nउवाच पार्थ पश्यैतान्समवेतान्कुरूनिति ||१-२५||",
    english:
      '1.25. In front of Bhishma and Drona, and all the rulers of the\nearth, said: "O Arjuna (son of Pritha), behold these Kurus gathered together."',
    hindi:
      '।।1.25।। भीष्म, द्रोण तथा पृथ्वी के समस्त शासकों के समक्ष उन्होंने कहा, "हे पार्थ यहाँ एकत्र हुये कौरवों को देखो"।',
    commentary: "A simple summary of verse 1.25",
  },
  {
    chapter: 1,
    verse: 26,
    sanskrit:
      "तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान् |\nआचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा ||१-२६||",
    english:
      "1.26. Then, Arjuna (son of Pritha) saw there (in the armies) stationed,\nfathers and grandfathers, teachers, maternal uncles, brothers, sons, grandsons\nand friends too.",
    hindi:
      "।।1.26।।वहाँ अर्जुन ने उन दोनों सेनाओं में खड़े पिता के भाइयों,  पितामहों,  आचार्यों,  मामों, भाइयों, पुत्रों,  पौत्रों,  मित्रों,  श्वसुरों और सुहृदों को भी देखा।",
    commentary: "A simple summary of verse 1.26",
  },
  {
    chapter: 1,
    verse: 27,
    sanskrit:
      "श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि |\nतान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान् ||१-२७||",
    english:
      "1.27. (He saw) fathers-in-law and friends also in both the armies.\nThe son of Kunti, Arjuna, seeing all those kinsmen thus standing arrayed,\nspoke this, sorrowfully filled with deep pity.",
    hindi:
      "।।1.27।।इस प्रकार उन सब बन्धु-बान्धवों को खड़े देखकर कुन्ती पुत्र अर्जुन का मन करुणा से भर गया और विषादयुक्त होकर उसने यह कहा।",
    commentary: "A simple summary of verse 1.27",
  },
  {
    chapter: 1,
    verse: 28,
    sanskrit:
      "कृपया परयाविष्टो विषीदन्निदमब्रवीत् |\nअर्जुन उवाच |\nदृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम् ||१-२८||",
    english:
      "1.28. Arjuna said  Seeing these, my kinsmen, O krishna, arrayed, eager to fight.",
    hindi:
      "।।1.28 1.29।।अर्जुन ने कहा -- हे कृष्ण ! युद्ध की इच्छा रखकर उपस्थित हुए इन स्वजनों को देखकर मेरे अंग शिथिल हुये जाते हैं, मुख भी सूख रहा है और मेरे शरीर में कम्प तथा रोमांच हो रहा है।।",
    commentary: "A simple summary of verse 1.28",
  },
  {
    chapter: 1,
    verse: 29,
    sanskrit:
      "सीदन्ति मम गात्राणि मुखं च परिशुष्यति |\nवेपथुश्च शरीरे मे रोमहर्षश्च जायते ||१-२९||",
    english:
      "1.29. My limbs fail and my mouth is parched, my body ivers and\nmy hair stands on end.",
    hindi:
      "।।1.28 1.29।।अर्जुन ने कहा -- हे कृष्ण !  युद्ध की इच्छा रखकर उपस्थित हुए इन स्वजनों को देखकर मेरे अंग शिथिल हुये जाते हैं,  मुख भी सूख रहा है और मेरे शरीर में कम्प तथा रोमांच हो रहा है।",
    commentary: "A simple summary of verse 1.29",
  },
  {
    chapter: 1,
    verse: 30,
    sanskrit:
      "गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते |\nन च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः ||१-३०||",
    english:
      "1.30. The (bow) Gandiva slips from my hand, and also my skins burns\nall over; I am unable even to stand and my mind is reeling, as it were.",
    hindi:
      "।।1.30।।मेरे हाथ से गाण्डीव (धनुष) गिर रहा है और त्वचा जल रही है। मेरा मन भ्रमित सा हो रहा है,  और मैं खड़े रहने में असमर्थ हूँ।",
    commentary: "A simple summary of verse 1.30",
  },
  {
    chapter: 1,
    verse: 31,
    sanskrit:
      "निमित्तानि च पश्यामि विपरीतानि केशव |\nन च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे ||१-३१||",
    english:
      "1.31. And I see adverse omens, O Kesava. I do not see any good\nin killing my kinsmen in battle.",
    hindi:
      "।।1.31।।हे केशव ! मैं शकुनों को भी विपरीत ही देख रहा हूँ और युद्ध में (आहवे) अपने स्वजनों को मारकर कोई कल्याण भी नहीं देखता हूँ।",
    commentary: "A simple summary of verse 1.31",
  },
  {
    chapter: 1,
    verse: 32,
    sanskrit:
      "न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च |\nकिं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा ||१-३२||",
    english:
      "1.32. I desire not victory, O Krishna, nor kingdom, nor pleasures.\nOf what avail is dominion to us, O Krishna, or pleasures or even life?",
    hindi:
      "।।1.32।।हे कृष्ण ! मैं न विजय चाहता हूँ, न राज्य और न सुखों को ही चाहता हूँ। हे गोविन्द ! हमें राज्य से अथवा भोगों से और जीने से भी क्या प्रयोजन है?।",
    commentary: "A simple summary of verse 1.32",
  },
  {
    chapter: 1,
    verse: 33,
    sanskrit:
      "येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च |\nत इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च ||१-३३||",
    english:
      "1.33. Those for whose sake we desire kingdom, enjoyments and pleasures,\nstand here in battle, having renounced life and wealth.",
    hindi:
      "।।1.33।।हमें जिनके लिये राज्य,  भोग और सुखादि की इच्छा है,  वे ही लोग धन और जीवन की आशा को त्यागकर युद्ध में खड़े हैं।",
    commentary: "A simple summary of verse 1.33",
  },
  {
    chapter: 1,
    verse: 34,
    sanskrit:
      "आचार्याः पितरः पुत्रास्तथैव च पितामहाः |\nमातुलाः श्वशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा ||१-३४||",
    english:
      "1.34. Teachers, fathers, sons and also grandfathers, maternal uncles,\nfathers-in-law, grandsons, brothers-in-law and other relatives,-",
    hindi:
      "।।1.34।।वे लोग गुरुजन,  ताऊ,  चाचा,  पुत्र,  पितामह,   श्वसुर,  पोते,  श्यालक तथा अन्य सम्बन्धी हैं।",
    commentary: "A simple summary of verse 1.34",
  },
  {
    chapter: 1,
    verse: 35,
    sanskrit:
      "एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन |\nअपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते ||१-३५||",
    english:
      "1.35. These I do not wish to kill, though they kill me, O Krishna,\neven for the sake of dominion over the three worlds; leave alone killing\nthem for the sake of the earth.",
    hindi:
      "।।1.35।।हे मधुसूदन !  इनके मुझे मारने पर अथवा त्रैलोक्य के राज्य के लिये भी मैं इनको मारना नहीं चाहता,  फिर पृथ्वी के लिए कहना ही क्या है।",
    commentary: "A simple summary of verse 1.35",
  },
  {
    chapter: 1,
    verse: 36,
    sanskrit:
      "निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन |\nपापमेवाश्रयेदस्मान्हत्वैतानाततायिनः ||१-३६||",
    english:
      "1.36. By killing these sons of Dhritarashtra, what pleasure can\nbe ours, O Janardana? Only sin will accrue to us from killing these felons.",
    hindi:
      "।।1.36।।हे जनार्दन ! धृतराष्ट्र के पुत्रों की हत्या करके हमें क्या प्रसन्नता होगी?  इन आततायियों को मारकर तो हमें केवल पाप ही लगेगा।",
    commentary: "A simple summary of verse 1.36",
  },
  {
    chapter: 1,
    verse: 37,
    sanskrit:
      "तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान् |\nस्वजनं हि कथं हत्वा सुखिनः स्याम माधव ||१-३७||",
    english:
      "1.37. Therefore, we should not kill the sons of Dhritarashtra,\nour relatives; for how can we be happy by killing our own people, O Madhava\n(Krishna)?",
    hindi:
      "।।1.37।।हे माधव  !  इसलिये अपने बान्धव धृतराष्ट्र के पुत्रों को मारना हमारे लिए योग्य नहीं है,  क्योंकि स्वजनों को मारकर हम कैसे सुखी होंगे।",
    commentary: "A simple summary of verse 1.37",
  },
  {
    chapter: 1,
    verse: 38,
    sanskrit:
      "यद्यप्येते न पश्यन्ति लोभोपहतचेतसः |\nकुलक्षयकृतं दोषं मित्रद्रोहे च पातकम् ||१-३८||",
    english:
      "1.38. Though they, with intelligence overpowered by greed, see\nno evil in the destruction of families, and no sin in hostility to friends,",
    hindi:
      "।।1.38।।यद्यपि लोभ से भ्रष्टचित्त हुये ये लोग कुलनाशकृत दोष और मित्र द्रोह में पाप नहीं देखते हैं।",
    commentary: "A simple summary of verse 1.38",
  },
  {
    chapter: 1,
    verse: 39,
    sanskrit:
      "कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम् |\nकुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन ||१-३९||",
    english:
      "1.39. Why should not we who clearly see evil in the destruction\nof families, learn to turn away from this sin, O Janardana (Krishna)?",
    hindi:
      "।।1.39।।परन्तु,  हेे जनार्दन !  कुलक्षय से होने वाले दोष को जानने वाले हम लोगों को इस पाप से विरत होने के लिए क्यों नहीं सोचना चाहिये।",
    commentary: "A simple summary of verse 1.39",
  },
  {
    chapter: 1,
    verse: 40,
    sanskrit:
      "कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः |\nधर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत ||१-४०||",
    english:
      "1.40. In the destruction of a family, the immemorial religious\nrites of that family perish; on the destruction of spirituality, impiety,\nindeed, overcomes the whole family.",
    hindi:
      "।।1.40।।कुल के नष्ट होने से सनातन धर्म नष्ट हो जाते हैं। धर्म नष्ट होने पर सम्पूर्ण कुल को अधर्म (पाप) दबा लेता है।",
    commentary: "A simple summary of verse 1.40",
  },
  {
    chapter: 1,
    verse: 41,
    sanskrit:
      "अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः |\nस्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः ||१-४१||",
    english:
      "1.41. By the prevalence of impiety, O Krishna, the women of\nthe family become corrupt; and , women being corrupted, O Varshenya (descendant\nof Vrishni), there arises intermingling of castes.",
    hindi:
      "।।1.41।।हे कृष्ण ! पाप के अधिक बढ़ जाने से कुल की स्त्रियां दूषित हो जाती हैं,  और हे वार्ष्णेय ! स्त्रियों के दूषित होने पर वर्णसंकर उत्पन्न होता है।",
    commentary: "A simple summary of verse 1.41",
  },
  {
    chapter: 1,
    verse: 42,
    sanskrit:
      "सङ्करो नरकायैव कुलघ्नानां कुलस्य च |\nपतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः ||१-४२||",
    english:
      "1.42. Confusion of castes leads to hell the slayers of the family,\nfor their forefathers fall, deprived of the offerings of rice-ball and\nwater (libations).",
    hindi:
      "।।1.42।।वह वर्णसंकर कुलघातियों को और कुल को नरक में ले जाने का कारण बनता है। पिण्ड और जलदान की क्रिया से वंचित इनके पितर भी नरक में गिर जाते हैं।",
    commentary: "A simple summary of verse 1.42",
  },
  {
    chapter: 1,
    verse: 43,
    sanskrit:
      "दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः |\nउत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः ||१-४३||",
    english:
      "1.43. By these evil deeds of the destroyers of the family, which\ncause confusion of castes, the eternal religious rites of the caste and\nthe family are destroyed.",
    hindi:
      "।।1.43।।इन वर्णसंकर कारक दोषों से कुलघाती दोषों से सनातन कुलधर्म और जातिधर्म नष्ट हो जाते हैं।",
    commentary: "A simple summary of verse 1.43",
  },
  {
    chapter: 1,
    verse: 44,
    sanskrit:
      "उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन |\nनरके नियतं वासो भवतीत्यनुशुश्रुम (or नरकेऽनियतं) ||१-४४||",
    english:
      "1.44. We have heard, O Janardana, that inevitable is the dwelling\nfor an unknown period in hell for those men in whose families the religious\npractices have been destroyed.",
    hindi:
      "।।1.44।।हे जनार्दन !  हमने सुना है कि जिनके यहां कुल धर्म नष्ट हो जाता है,  उन मनुष्यों का अनियत काल तक नरक में वास होता है।",
    commentary: "A simple summary of verse 1.44",
  },
  {
    chapter: 1,
    verse: 45,
    sanskrit:
      "अहो बत महत्पापं कर्तुं व्यवसिता वयम् |\nयद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः ||१-४५||",
    english:
      "1.45. Alas! We are involved in a great sin, in that we are\nprepared to kill our kinsmen, through greed for the pleasures of a kingdom.",
    hindi:
      "।।1.45।।अहो  !  शोक है कि हम लोग बड़ा भारी पाप करने का निश्चय कर बैठे हैं,  जो कि इस राज्यसुख के लोभ से अपने कुटुम्ब का नाश करने के लिये तैयार हो गये हैं।",
    commentary: "A simple summary of verse 1.45",
  },
  {
    chapter: 1,
    verse: 46,
    sanskrit:
      "यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः |\nधार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत् ||१-४६||",
    english:
      "1.46. If the sons of Dhritarashtra with weapons in hand should\nslay me in battle, unresisting and unarmed, that would be better for me.",
    hindi:
      "।।1.46।।यदि मुझ शस्त्ररहित और प्रतिकार न करने वाले को ये शस्त्रधारी कौरव रण में मारें,  तो भी वह मेरे लिये कल्याणकारक होगा।",
    commentary: "A simple summary of verse 1.46",
  },
  {
    chapter: 1,
    verse: 47,
    sanskrit:
      "सञ्जय उवाच |\nएवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत् |\nविसृज्य सशरं चापं शोकसंविग्नमानसः ||१-४७||",
    english:
      "1.47. Sanjaya said  Having thus spoken in the midst of the battlefield, Arjuna,\ncasting away his bow and arrow, sat down on the seat of the chariot with\nhis mind overwhelmed with sorrow.",
    hindi:
      "।।1.47।।संजय ने कहा  --  रणभूमि (संख्ये) में शोक से उद्विग्न मनवाला अर्जुन इस प्रकार कहकर बाणसहित धनुष को त्याग कर रथ के पिछले भाग में बैठ गया।",
    commentary: "A simple summary of verse 1.47",
  },
  {
    chapter: 2,
    verse: 1,
    sanskrit:
      "सञ्जय उवाच |\nतं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम् |\nविषीदन्तमिदं वाक्यमुवाच मधुसूदनः ||२-१||",
    english:
      "2.1 Sanjaya said  To him who was thus overcome with pity and who was despondent, with eyes full of tears and agitated, Madhusudana (the destroyer of Madhu) or Krishna spoke these words.",
    hindi:
      "।।2.1।। संजय ने कहा -- इस प्रकार करुणा और विषाद से अभिभूत,  अश्रुपूरित नेत्रों वाले आकुल अर्जुन से मधुसूदन ने यह वाक्य कहा।।",
    commentary: "A simple summary of verse 2.1",
  },
  {
    chapter: 2,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच |\nकुतस्त्वा कश्मलमिदं विषमे समुपस्थितम् |\nअनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन ||२-२||",
    english:
      "2.2 The Blessed Lord said  Whence is this perilous strait come upon thee, this dejection which is unworthy of you, disgraceful, and which will close the gates of heaven upon you, O Arjuna?",
    hindi:
      "।।2.2।। श्री भगवान् ने कहा -- हे अर्जुन ! तुमको इस विषम स्थल में यह मोह कहाँ से उत्पन्न हुआ?  यह आर्य आचरण के विपरीत न तो स्वर्ग प्राप्ति का साधन ही है और न कीर्ति कराने वाला ही है।।",
    commentary: "A simple summary of verse 2.2",
  },
  {
    chapter: 2,
    verse: 3,
    sanskrit:
      "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते |\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ||२-३||",
    english:
      "2.3 Yield not to impotence, O Arjuna, son of Pritha. It does not befit thee. Cast off this mean weakness of the heart! Stand up, O scorcher of the foes!",
    hindi:
      "।।2.3।। हे पार्थ क्लीव (कायर) मत बनो। यह तुम्हारे लिये अशोभनीय है, हे ! परंतप हृदय की क्षुद्र दुर्बलता को त्यागकर खड़े हो जाओ।।",
    commentary: "A simple summary of verse 2.3",
  },
  {
    chapter: 2,
    verse: 4,
    sanskrit:
      "अर्जुन उवाच |\nकथं भीष्ममहं सङ्ख्ये द्रोणं च मधुसूदन |\nइषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन ||२-४||",
    english:
      "2.4 Arjuna said  How, O Madhusudana, shall I fight in battle with arrows against Bhishma and Drona, who are fit to be worshipped, O destroyer of enemies?",
    hindi:
      "।।2.4।। अर्जुन ने कहा -- हे मधुसूदन ! मैं रणभूमि में किस प्रकार भीष्म और द्रोण के साथ बाणों से युद्ध करूँगा। हे अरिसूदन, वे दोनों ही पूजनीय हैं।।",
    commentary: "A simple summary of verse 2.4",
  },
  {
    chapter: 2,
    verse: 5,
    sanskrit:
      "गुरूनहत्वा हि महानुभावान्\nश्रेयो भोक्तुं भैक्ष्यमपीह लोके |\nहत्वार्थकामांस्तु गुरूनिहैव\nभुञ्जीय भोगान् रुधिरप्रदिग्धान् ||२-५||",
    english:
      "2.5 Better it is, indeed, in this world to accept alms than to slay the most noble teachers. But if I kill them, even in this world all my enjoyments of wealth and fulfilled desires will be stained with (their) blood.",
    hindi:
      "।।2.5।। इन महानुभाव गुरुजनों को मारने से इस लोक में भिक्षा का अन्न भी ग्रहण करना अधिक कल्याण कारक है, क्योंकि गुरुजनों को मारकर मैं इस लोक में रक्तरंजित अर्थ और काम रूप भोगों को ही भोगूँगा।।",
    commentary: "A simple summary of verse 2.5",
  },
  {
    chapter: 2,
    verse: 6,
    sanskrit:
      "न चैतद्विद्मः कतरन्नो गरीयो\nयद्वा जयेम यदि वा नो जयेयुः |\nयानेव हत्वा न जिजीविषामस्-\nतेऽवस्थिताः प्रमुखे धार्तराष्ट्राः ||२-६||",
    english:
      "2.6 I can hardly tell which will be better, that we should  coner them or that they should coner us. Even the sons of Dhritarashtra, after slaying whom we do not wish to live, stand facing us.",
    hindi:
      "।।2.6।। हम नहीं जानते कि हमें क्या करना उचित है। हम यह भी नहीं जानते कि हम जीतेंगे, या वे हमको जीतेंगे, जिनको मारकर हम जीवित नहीं रहना चाहते वे ही धृतराष्ट्र के पुत्र हमारे सामने युद्ध के लिए खड़े हैं।।",
    commentary: "A simple summary of verse 2.6",
  },
  {
    chapter: 2,
    verse: 7,
    sanskrit:
      "कार्पण्यदोषोपहतस्वभावः\nपृच्छामि त्वां धर्मसम्मूढचेताः |\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे\nशिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम् ||२-७||",
    english:
      "2.7 My heart is overpowered by the taint of pity; my mind is confused as to duty. I ask Thee: Tell me decisively what is good for me. I am Thy disciple. Instruct me who has taken refuge in Thee.",
    hindi:
      "।।2.7।। करुणा के कलुष से अभिभूत और कर्तव्यपथ पर संभ्रमित हुआ मैं आपसे पूछता हूँ, कि मेरे लिये जो श्रेयष्कर हो, उसे आप निश्चय करके कहिये, क्योंकि मैं आपका शिष्य हूँ; शरण में आये मुझको आप उपदेश दीजिये।।",
    commentary: "A simple summary of verse 2.7",
  },
  {
    chapter: 2,
    verse: 8,
    sanskrit:
      "न हि प्रपश्यामि ममापनुद्याद्\nयच्छोकमुच्छोषणमिन्द्रियाणाम् |\nअवाप्य भूमावसपत्नमृद्धं\nराज्यं सुराणामपि चाधिपत्यम् ||२-८||",
    english:
      "2.8 I do not see that it would remove this sorrow that burns up my senses, even if I should attain prosperous and unrivalled dominion on earth or lordship over the gods.",
    hindi:
      "।।2.8।। पृथ्वी पर निष्कण्टक समृद्ध राज्य को और देवताओं के स्वामित्व को प्राप्त होकर भी मैं उस उपाय को नहीं देखता हूँ, जो मेरी इन्द्रियों को सुखाने वाले इस शोक को दूर कर सके।।",
    commentary: "A simple summary of verse 2.8",
  },
  {
    chapter: 2,
    verse: 9,
    sanskrit:
      "सञ्जय उवाच |\nएवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप |\nन योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह ||२-९||",
    english:
      '2.9 Sanjaya said  Having spoken thus to Hrishikesha (the Lord of the senses), Arjuna (the coneror of sleep), the destroyer of foes, said to Krishna, "I will not fight" and became silent.',
    hindi:
      '।।2.9।। संजय ने कहा -- इस प्रकार गुडाकेश परंतप अर्जुन भगवान् हृषीकेश से यह कहकर कि हे गोविन्द "मैं युद्ध नहीं करूँगा" चुप हो गया।।',
    commentary: "A simple summary of verse 2.9",
  },
  {
    chapter: 2,
    verse: 10,
    sanskrit:
      "तमुवाच हृषीकेशः प्रहसन्निव भारत |\nसेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः ||२-१०||",
    english:
      "2.10 To him who was despondent in the midst of the two armies, Krishna, as if smiling, O Bharata, spoke these words.",
    hindi:
      "।।2.10।। हे भारत (धृतराष्ट्र) ! दोनों सेनाओं के बीच में उस शोकमग्न अर्जुन को भगवान् हृषीकेश ने हँसते हुए से यह वचन कहे।।",
    commentary: "A simple summary of verse 2.10",
  },
  {
    chapter: 2,
    verse: 11,
    sanskrit:
      "श्रीभगवानुवाच |\nअशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे |\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ||२-११||",
    english:
      "2.11 The Blessed Lord said  Thou hast grieved for those that should not be grieved for, yet thou speakest words of wisdom. The wise grieve neither for the living nor for the dead.",
    hindi:
      "।।2.11।। श्री भगवान् ने कहा -- (अशोच्यान्) जिनके लिये शोक करना उचित नहीं है, उनके लिये तुम शोक करते हो और ज्ञानियों के से वचनों को कहते हो, परन्तु ज्ञानी पुरुष मृत (गतासून्) और जीवित (अगतासून्) दोनों के लिये शोक नहीं करते हैं।।",
    commentary: "A simple summary of verse 2.11",
  },
  {
    chapter: 2,
    verse: 12,
    sanskrit:
      "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः |\nन चैव न भविष्यामः सर्वे वयमतः परम् ||२-१२||",
    english:
      "2.12 Nor at any time indeed was I not, nor thou, nor these rulers of men, nor verily shall we ever cease to be hereafter.",
    hindi:
      "।।2.12।। वास्तव में न तो ऐसा ही है कि मैं किसी काल में नहीं था अथवा तुम नहीं थे अथवा ये राजालोग नहीं थे और न ऐसा ही है कि इससे आगे हम सब नहीं रहेंगे।।",
    commentary: "A simple summary of verse 2.12",
  },
  {
    chapter: 2,
    verse: 13,
    sanskrit:
      "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा |\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ||२-१३||",
    english:
      "2.13 Just as in this body the embodied (soul) passes into childhood, youth and old age, so also does it pass into another body; the firm man does not grieve thereat.",
    hindi:
      "।।2.13।। जैसे इस देह में देही जीवात्मा की कुमार, युवा और वृद्धावस्था होती है, वैसे ही उसको अन्य शरीर की प्राप्ति होती है;  धीर पुरुष इसमें मोहित नहीं होता है।।",
    commentary: "A simple summary of verse 2.13",
  },
  {
    chapter: 2,
    verse: 14,
    sanskrit:
      "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः |\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ||२-१४||",
    english:
      "2.14 The contacts of the senses with the objects, O son of Kunti, which cause heat and cold, pleasure and pain, have a beginning and an end; they are impermanent; endure them bravely, O Arjuna.",
    hindi:
      "।।2.14।। हे कुन्तीपुत्र ! शीत और उष्ण और सुख दुख को देने वाले इन्द्रिय और विषयों के संयोग का प्रारम्भ और अन्त होता है;  वे अनित्य हैं,  इसलिए,  हे भारत ! उनको तुम सहन करो।।",
    commentary: "A simple summary of verse 2.14",
  },
  {
    chapter: 2,
    verse: 15,
    sanskrit:
      "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ |\nसमदुःखसुखं धीरं सोऽमृतत्वाय कल्पते ||२-१५||",
    english:
      "2.15 That firm man whom, surely, these afflict not, O chief among men, to whom pleasure and pain are the same, is fit for attaining immortality.",
    hindi:
      "।।2.15।। हे पुरुषश्रेष्ठ ! दुख और सुख में समान भाव से रहने वाले जिस धीर पुरुष को ये व्यथित नहीं कर सकते हैं वह अमृतत्व (मोक्ष) का अधिकारी होता है।।",
    commentary: "A simple summary of verse 2.15",
  },
  {
    chapter: 2,
    verse: 16,
    sanskrit:
      "नासतो विद्यते भावो नाभावो विद्यते सतः |\nउभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः ||२-१६||",
    english:
      "2.16 The unreal hath no being; there is non-being of the real; the truth about both has been seen by the knowers of the Truth (or the seers of the Essence).",
    hindi:
      "।।2.16।। असत् वस्तु का तो अस्तित्व नहीं है और सत् का कभी अभाव नहीं है। इस प्रकार इन दोनों का ही तत्त्व,  तत्त्वदर्शी ज्ञानी पुरुषों के द्वारा देखा गया है।।",
    commentary: "A simple summary of verse 2.16",
  },
  {
    chapter: 2,
    verse: 17,
    sanskrit:
      "अविनाशि तु तद्विद्धि येन सर्वमिदं ततम् |\nविनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति ||२-१७||",
    english:
      "2.17 Know that to be indestructible, by Which all this is pervaded. None can cause the destruction of That, the Imperishable.",
    hindi:
      "।।2.17।। उस वस्तु को तुम अविनाशी जानों,  जिससे यह सम्पूर्ण जगत् व्याप्त है। इस अव्यय का नाश करने में कोई भी समर्थ नहीं है।।",
    commentary: "A simple summary of verse 2.17",
  },
  {
    chapter: 2,
    verse: 18,
    sanskrit:
      "अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः |\nअनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत ||२-१८||",
    english:
      "2.18 These bodies of the embodied Self, Which is eternal, indestructible and immeasurable, are said to have an end. Therefore fight, O Arjuna.",
    hindi:
      "।।2.18।। इस नाशरहित अप्रमेय नित्य देही आत्मा के ये सब शरीर नाशवान् कहे गये हैं। इसलिये हे भारत ! तुम युद्ध करो।।",
    commentary: "A simple summary of verse 2.18",
  },
  {
    chapter: 2,
    verse: 19,
    sanskrit:
      "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम् |\nउभौ तौ न विजानीतो नायं हन्ति न हन्यते ||२-१९||",
    english:
      "2.19 He who takes the Self to be the slayer and he who thinks It is slain, neither of them ï1knowsï1. It slays not, nor is It slain.",
    hindi:
      "।।2.19।। जो इस आत्मा को मारने वाला समझता है और जो इसको मरा समझता है वे दोनों ही नहीं जानते हैं,  क्योंकि यह आत्मा न मरता है और न मारा जाता है।।",
    commentary: "A simple summary of verse 2.19",
  },
  {
    chapter: 2,
    verse: 20,
    sanskrit:
      "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः |\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ||२-२०||",
    english:
      "2.20 It is not born, nor does It ever die; after having been, It again ceases not to be; unborn, eternal, changeless and ancient, It is not killed when the body is killed.",
    hindi:
      "।।2.20।। यह आत्मा किसी काल में भी न जन्मता है और न मरता है और न यह एक बार होकर फिर अभावरूप होने वाला है। यह आत्मा अजन्मा, नित्य, शाश्वत और पुरातन है,  शरीर के नाश होने पर भी इसका नाश नहीं होता।।",
    commentary: "A simple summary of verse 2.20",
  },
  {
    chapter: 2,
    verse: 21,
    sanskrit:
      "वेदाविनाशिनं नित्यं य एनमजमव्ययम् |\nकथं स पुरुषः पार्थ कं घातयति हन्ति कम् ||२-२१||",
    english:
      "2.21 Whosoever knows It to be indestructible, eternal, unborn and inexhaustible, how can that man slay, O Arjuna, or cause to be slain?",
    hindi:
      "।।2.21।। हे पार्थ ! जो पुरुष इस आत्मा को अविनाशी,  नित्य और अव्ययस्वरूप जानता है,  वह कैसे किसको मरवायेगा और कैसे किसको मारेगा?",
    commentary: "A simple summary of verse 2.21",
  },
  {
    chapter: 2,
    verse: 22,
    sanskrit:
      "वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि |\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही ||२-२२||",
    english:
      "2.22 Just as a man casts off worn-out clothes and puts on new ones, so also the embodied Self casts off worn-out bodies and enters others which are new.",
    hindi:
      "।।2.22।। जैसे मनुष्य जीर्ण वस्त्रों को त्यागकर दूसरे नये वस्त्रों को धारण करता है, वैसे ही देही जीवात्मा पुराने शरीरों को त्याग कर दूसरे नए शरीरों को प्राप्त होता है।।",
    commentary: "A simple summary of verse 2.22",
  },
  {
    chapter: 2,
    verse: 23,
    sanskrit:
      "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः |\nन चैनं क्लेदयन्त्यापो न शोषयति मारुतः ||२-२३||",
    english:
      "2.23 Weapons cut It not, fire burns It not, water wets It not, wind dries It not.",
    hindi:
      "।।2.23।। इस आत्मा को शस्त्र काट नहीं सकते और न अग्नि इसे जला सकती है ; जल इसे गीला नहीं कर सकता और वायु इसे सुखा नहीं सकती।।",
    commentary: "A simple summary of verse 2.23",
  },
  {
    chapter: 2,
    verse: 24,
    sanskrit:
      "अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च |\nनित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः ||२-२४||",
    english:
      "2.24 This Self cannot be cut, burnt, wetted, nor dried up. It is eternal, all-pervading, stable, immovable and ancient.",
    hindi:
      "।।2.24।। क्योंकि यह आत्मा अच्छेद्य (काटी नहीं जा सकती),  अदाह्य (जलाई नहीं जा सकती),  अक्लेद्य (गीली नहीं हो सकती ) और अशोष्य (सुखाई नहीं जा सकती) है;  यह नित्य,  सर्वगत,  स्थाणु (स्थिर),  अचल और सनातन है।।",
    commentary: "A simple summary of verse 2.24",
  },
  {
    chapter: 2,
    verse: 25,
    sanskrit:
      "अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते |\nतस्मादेवं विदित्वैनं नानुशोचितुमर्हसि ||२-२५||",
    english:
      "2.25 This (Self) is said to be unmanifested, unthinkable and unchangeable. Therefore, knowing This to be such, thou shouldst not grieve.",
    hindi:
      "।।2.25।। यह आत्मा अव्यक्त,  अचिन्त्य और अविकारी कहा जाता है;  इसलिए इसको इस प्रकार जानकर तुमको शोक करना उचित नहीं है।।",
    commentary: "A simple summary of verse 2.25",
  },
  {
    chapter: 2,
    verse: 26,
    sanskrit:
      "अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम् |\nतथापि त्वं महाबाहो नैवं शोचितुमर्हसि ||२-२६||",
    english:
      "2.26 But even if thou thinkest of It as being constantly born and constantly dying, even then, O mighty-armed, thou shouldst not grieve.",
    hindi:
      "।।2.26।। और यदि तुम आत्मा को नित्य जन्मने और नित्य मरने वाला मानो तो भी,  हे महाबाहो !  इस प्रकार शोक करना तुम्हारे लिए उचित नहीं है।।",
    commentary: "A simple summary of verse 2.26",
  },
  {
    chapter: 2,
    verse: 27,
    sanskrit:
      "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च |\nतस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि ||२-२७||",
    english:
      "2.27 For certain is death for the born, and certain is birth for the dead; therefore, over the inevitable thou shouldst not grieve.",
    hindi:
      "।।2.27।। जन्मने वाले की मृत्यु निश्चित है और मरने वाले का जन्म निश्चित है;  इसलिए जो अटल है अपरिहार्य - है उसके विषय में तुमको शोक नहीं करना चाहिये।।",
    commentary: "A simple summary of verse 2.27",
  },
  {
    chapter: 2,
    verse: 28,
    sanskrit:
      "अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत |\nअव्यक्तनिधनान्येव तत्र का परिदेवना ||२-२८||",
    english:
      "2.28 Beings are unmanifested in their beginning, manifested in their middle state, O Arjuna, and unmanifested again in their end. What is there to grieve about?",
    hindi:
      "।।2.28।। हे भारत ! समस्त प्राणी जन्म से पूर्व और मृत्यु के बाद अव्यक्त अवस्था में रहते हैं और बीच में व्यक्त होते हैं। फिर उसमें चिन्ता या शोक की क्या बात है ?",
    commentary: "A simple summary of verse 2.28",
  },
  {
    chapter: 2,
    verse: 29,
    sanskrit:
      "आश्चर्यवत्पश्यति कश्चिदेन-\nमाश्चर्यवद्वदति तथैव चान्यः |\nआश्चर्यवच्चैनमन्यः शृणोति\nश्रुत्वाप्येनं वेद न चैव कश्चित् ||२-२९||",
    english:
      "2.29 One sees This (the Self) as a wonder; another speaks of It as a wonder; another hears of It as a wonder; yet having heard, none understands It at all.",
    hindi:
      "।।2.29।। कोई इसे आश्चर्य के समान देखता है;  कोई इसके विषय में आश्चर्य के समान कहता है;  और कोई अन्य पुरुष इसे आश्चर्य के समान सुनता है;  और फिर कोई सुनकर भी नहीं जानता।।",
    commentary: "A simple summary of verse 2.29",
  },
  {
    chapter: 2,
    verse: 30,
    sanskrit:
      "देही नित्यमवध्योऽयं देहे सर्वस्य भारत |\nतस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि ||२-३०||",
    english:
      "2.30 This, the Indweller in the body of everyone, is ever indestructible, O Arjuna; therefore, thou shouldst not grieve for any creature.",
    hindi:
      "।।2.30।। हे भारत ! यह देही आत्मा सबके शरीर में सदा ही अवध्य है, इसलिए समस्त प्राणियों के लिए तुम्हें शोक करना उचित नहीं।।",
    commentary: "A simple summary of verse 2.30",
  },
  {
    chapter: 2,
    verse: 31,
    sanskrit:
      "स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि |\nधर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते ||२-३१||",
    english:
      "2.31 Further, having regard to thy duty, shouldst not waver, for there is nothing higher for a Kshatriya than a righteous war.",
    hindi:
      "।।2.31।। और स्वधर्म को भी देखकर तुमको विचलित होना उचित नहीं है,  क्योंकि धर्मयुक्त युद्ध से बढ़कर दूसरा कोई कल्याणकारक कर्त्तव्य क्षत्रिय के लिये नहीं है।।",
    commentary: "A simple summary of verse 2.31",
  },
  {
    chapter: 2,
    verse: 32,
    sanskrit:
      "यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम् |\nसुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम् ||२-३२||",
    english:
      "2.32 Happy are the Kshatriyas, O Arjuna! who are called upon to fight in such a battle that comes of itself as an open door to heaven.",
    hindi:
      "।।2.32।। और हे पार्थ ! अपने आप प्राप्त हुए और स्वर्ग के लिए खुले हुए द्वाररूप इस प्रकार के युद्ध को भाग्यवान क्षत्रिय लोग ही पाते हैं।।",
    commentary: "A simple summary of verse 2.32",
  },
  {
    chapter: 2,
    verse: 33,
    sanskrit:
      "अथ चेत्त्वमिमं धर्म्यं संग्रामं न करिष्यसि |\nततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि ||२-३३||",
    english:
      "2.33 But if thou wilt not fight this righteous war, then having abandoned thine own duty and fame, thou shalt incur sin.",
    hindi:
      "।।2.33।। और यदि तुम इस धर्मयुद्ध को स्वीकार नहीं करोगे,  तो स्वधर्म और कीर्ति को खोकर पाप को प्राप्त करोगे।।",
    commentary: "A simple summary of verse 2.33",
  },
  {
    chapter: 2,
    verse: 34,
    sanskrit:
      "अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम् |\nसम्भावितस्य चाकीर्तिर्मरणादतिरिच्यते ||२-३४||",
    english:
      "2.34 People, too, will recount thy everlasting dishonour; and to one who has been honoured, dishonour is worse than death.",
    hindi:
      "।।2.34।। और सब लोग तुम्हारी बहुत काल तक रहने वाली अपकीर्ति को भी कहते रहेंगे;  और सम्मानित पुरुष के लिए अपकीर्ति मरण से भी अधिक होती है।।",
    commentary: "A simple summary of verse 2.34",
  },
  {
    chapter: 2,
    verse: 35,
    sanskrit:
      "भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः |\nयेषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम् ||२-३५||",
    english:
      "2.35 The great car-warriors will think that thou hast withdrawn from the battle through fear; and thou wilt be lightly held by them who have thought much of thee.",
    hindi:
      "।।2.35।। और जिनके लिए तुम बहुत माननीय हो उनके लिए अब तुम तुच्छता को प्राप्त होओगे,  वे महारथी लोग तुम्हें भय के कारण युद्ध से निवृत्त हुआ मानेंगे।।",
    commentary: "A simple summary of verse 2.35",
  },
  {
    chapter: 2,
    verse: 36,
    sanskrit:
      "अवाच्यवादांश्च बहून्वदिष्यन्ति तवाहिताः |\nनिन्दन्तस्तव सामर्थ्यं ततो दुःखतरं नु किम् ||२-३६||",
    english:
      "2.36 Thy enemies also, cavilling at thy power, will speak many abusive words. What is more painful than this?",
    hindi:
      "।।2.36।। तुम्हारे शत्रु तुम्हारे सार्मथ्य की निन्दा करते हुए बहुत से अकथनीय वचनों को कहेंगे,  फिर उससे अधिक दु:ख क्या होगा ?",
    commentary: "A simple summary of verse 2.36",
  },
  {
    chapter: 2,
    verse: 37,
    sanskrit:
      "हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम् |\nतस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः ||२-३७||",
    english:
      "2.37 Slain, thou wilt obtain heaven; victorious, thou wilt enjoy the earth; therefore, stand up, O son of Kunti, resolved to fight.",
    hindi:
      "।।2.37।। युद्ध में मरकर तुम स्वर्ग प्राप्त करोगे या जीतकर पृथ्वी को भोगोगे;  इसलिय, हे कौन्तेय ! युद्ध का निश्चय कर तुम खड़े हो जाओ।।",
    commentary: "A simple summary of verse 2.37",
  },
  {
    chapter: 2,
    verse: 38,
    sanskrit:
      "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ |\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि ||२-३८||",
    english:
      "2.38 Having made pleasure and pain, gain and loss, victory and defeat the same, engage thou in battle for the sake of battle; thus thou shalt not incur sin.",
    hindi:
      "।।2.38।। सुख-दु:ख,  लाभ-हानि और जय-पराजय को समान करके युद्ध के लिये तैयार हो जाओ;  इस प्रकार तुमको पाप नहीं होगा।।",
    commentary: "A simple summary of verse 2.38",
  },
  {
    chapter: 2,
    verse: 39,
    sanskrit:
      "एषा तेऽभिहिता साङ्ख्ये बुद्धिर्योगे त्विमां शृणु |\nबुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि ||२-३९||",
    english:
      "2.39 This, which has been taught to thee, is wisdon concerning Sankhya. Now listen to wisdom concerning Yoga, endowed with which, O Arjuna, thou shalt cast off the bonds of action.",
    hindi:
      "।।2.39।। हे पार्थ ! तुम्हें सांख्य विषयक ज्ञान कहा गया और अब इस (कर्म) योग से सम्बन्धित ज्ञान को सुनो जिस ज्ञान से युक्त होकर तुम कर्मबन्ध का नाश कर सकोगे।।",
    commentary: "A simple summary of verse 2.39",
  },
  {
    chapter: 2,
    verse: 40,
    sanskrit:
      "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते |\nस्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात् ||२-४०||",
    english:
      "2.40 In this there is no loss of effort, nor is there any harm (production of contrary results or transgression). Even a little of this knowledge (even a little practice of this Yoga) protects one from great fear.",
    hindi:
      "।।2.40।। इसमें क्रमनाश और प्रत्यवाय दोष नहीं है। इस धर्म (योग) का अल्प अभ्यास भी महान् भय से रक्षण करता है।।",
    commentary: "A simple summary of verse 2.40",
  },
  {
    chapter: 2,
    verse: 41,
    sanskrit:
      "व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन |\nबहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम् ||२-४१||",
    english:
      "2.41 Here, O joy of the Kurus, there is but a single one-pointed determination; many-branched and endless are the thoughts of the irresolute.",
    hindi:
      "।।2.41।। हे कुरुनन्दन ! इस (विषय) में निश्चयात्मक बुद्धि एक ही है, अज्ञानी पुरुषों की बुद्धियां (संकल्प) बहुत भेदों वाली और अनन्त होती हैं।।",
    commentary: "A simple summary of verse 2.41",
  },
  {
    chapter: 2,
    verse: 42,
    sanskrit:
      "यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः |\nवेदवादरताः पार्थ नान्यदस्तीति वादिनः ||२-४२||",
    english:
      '2.42 Flowery speech is uttered by the unwise, taking pleasure in the eulogising words of the Vedas, O Arjuna, saying, "There is nothing else."',
    hindi:
      "।।2.42।। हे पार्थ  अविवेकी पुरुष वेदवाद में रमते हुये जो यह पुष्पिता (दिखावटी शोभा की) वाणी बोलते हैं? इससे (स्वर्ग से) बढ़कर और कुछ नहीं है।।।",
    commentary: "A simple summary of verse 2.42",
  },
  {
    chapter: 2,
    verse: 43,
    sanskrit:
      "कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम् |\nक्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति ||२-४३||",
    english:
      "2.43 Full of desires, having heaven as their goal, (they utter speech which is directed to ends) leading to new births as the result of their works, and prescribe various methods abounding in specific actions, for the attainment of pleasure and power.",
    hindi:
      "।।2.43।। कामनाओं से युक्त? स्वर्ग को ही श्रेष्ठ मानने वाले लोग भोग और ऐश्वर्य को प्राप्त कराने वाली अनेक क्रियाओं को बताते हैं जो (वास्तव में) जन्मरूप कर्मफल को देने वाली होती हैं।।",
    commentary: "A simple summary of verse 2.43",
  },
  {
    chapter: 2,
    verse: 44,
    sanskrit:
      "भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम् |\nव्यवसायात्मिका बुद्धिः समाधौ न विधीयते ||२-४४||",
    english:
      "2.44 For those who are attached to pleasure and power, whose minds are drawn away by such teaching, ï1thatï1 determinate reason is not formed which is steadily bent on meditation and Samadhi (superconscious state).",
    hindi:
      "।।2.44।।उससे जिनका चित्त हर लिया गया है ऐसे भोग और एश्र्वर्य‌ मॆ आसक्ति रखने वाले पुरुषों के अन्तकरण मे निश्चयात्मक् बुद्धि नही हॊती अर्थात वे ध्यान का अभ्यास करने योग्य‌ नही होते।",
    commentary: "A simple summary of verse 2.44",
  },
  {
    chapter: 2,
    verse: 45,
    sanskrit:
      "त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन |\nनिर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान् ||२-४५||",
    english:
      "2.45 The Vedas deal with the three attributes (of Nature); be thou above these three attributes. O Arjuna, free yourself from the pairs of opposites, and ever remain in the ality of Sattva (goodness), freed from (the thought of) acisition and preservation, and be established in the Self.",
    hindi:
      "।।2.45।। हे अर्जुन  वेदों का विषय तीन गुणों से सम्बन्धित (संसार से) है  तुम त्रिगुणातीत? निर्द्वन्द्व? नित्य सत्त्व (शुद्धता) में स्थित? योगक्षेम से रहित और आत्मवान् बनो।।",
    commentary: "A simple summary of verse 2.45",
  },
  {
    chapter: 2,
    verse: 46,
    sanskrit:
      "यावानर्थ उदपाने सर्वतः सम्प्लुतोदके |\nतावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः ||२-४६||",
    english:
      "2.46 To the Brahmana who has known the Self, all the Vedas are of as much use as is a reservoir of water in a place where there is a flood.",
    hindi:
      "।।2.46।। सब ओर से परिपूर्ण जलराशि के होने पर मनुष्य का छोटे जलाशय में जितना प्रयोजन रहता है? आत्मज्ञानी ब्राह्मण का सभी वेदों में उतना ही प्रयोजन रहता है।।",
    commentary: "A simple summary of verse 2.46",
  },
  {
    chapter: 2,
    verse: 47,
    sanskrit:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||२-४७||",
    english:
      "2.47 Thy right is to work only, but never with its fruits; let not the fruits of action be thy motive, nor let thy attachment be to inaction.",
    hindi:
      "।।2.47।। कर्म करने मात्र में तुम्हारा अधिकार है? फल में कभी नहीं। तुम कर्मफल के हेतु वाले मत होना और अकर्म में भी तुम्हारी आसक्ति न हो।।",
    commentary: "A simple summary of verse 2.47",
  },
  {
    chapter: 2,
    verse: 48,
    sanskrit:
      "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय |\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ||२-४८||",
    english:
      "2.48 Perform action, O Arjuna, being steadfast in Yoga, abandoning attachment and balanced in success and failure. Evenness of mind is called Yoga.",
    hindi:
      "।।2.48।। हे धनंजय  आसक्ति को त्याग कर तथा सिद्धि और असिद्धि में समभाव होकर योग में स्थित हुये तुम कर्म करो। यह समभाव ही योग कहलाता है।।",
    commentary: "A simple summary of verse 2.48",
  },
  {
    chapter: 2,
    verse: 49,
    sanskrit:
      "दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय |\nबुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः ||२-४९||",
    english:
      "2.49 Far lower than the Yoga of wisdon is action, O Arjuna. Seek thou refuge in wisdom; wretched are they whose motive is the fruit.",
    hindi:
      "।।2.49।। इस बुद्धियोग की तुलना में(सकाम) कर्म अत्यन्त निकृष्ट हैं? इसलिये हे धनंजय  तुम बद्धि की शरण लो फल की इच्छा करनेवाले कृपण (दीन) हैं।।",
    commentary: "A simple summary of verse 2.49",
  },
  {
    chapter: 2,
    verse: 50,
    sanskrit:
      "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते |\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम् ||२-५०||",
    english:
      "2.50 Endowed with wisdom (evenness of mind), one casts off in this life both good and evil deeds; therefore, devote thyself to Yoga; Yoga is skill in action.",
    hindi:
      "।।2.50।। समत्वबुद्धि युक्त पुरुष यहां (इस जीवन में) पुण्य और पाप इन दोनों कर्मों को त्याग देता है? इसलिये तुम योग से युक्त हो जाओ। कर्मों में कुशलता योग है।।",
    commentary: "A simple summary of verse 2.50",
  },
  {
    chapter: 2,
    verse: 51,
    sanskrit:
      "कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः |\nजन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम् ||२-५१||",
    english:
      "2.51 The wise, possessed of knowledge, having abandoned the fruits of their actions, and being freed from the fetters of birth, go to the place which is beyond all evil.",
    hindi:
      "।।2.51।। बुद्धियोग युक्त मनीषी लोग कर्मजन्य फलों को त्यागकर जन्मरूप बन्धन से मुक्त हुये अनामय अर्थात् निर्दोष पद को प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 2.51",
  },
  {
    chapter: 2,
    verse: 52,
    sanskrit:
      "यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति |\nतदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च ||२-५२||",
    english:
      "2.52 When thy intellect crosses beyond the mire of delusion, then thou shalt attain to indifference as to what has been heard and what has yet to be heard.",
    hindi:
      "।।2.52।। जब तुम्हारी बुद्धि मोहरूप दलदल (कलिल) को तर जायेगी तब तुम उन सब वस्तुओं से निर्वेद (वैराग्य) को प्राप्त हो जाओगे? जो सुनने योग्य और सुनी हुई हैं।।",
    commentary: "A simple summary of verse 2.52",
  },
  {
    chapter: 2,
    verse: 53,
    sanskrit:
      "श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला |\nसमाधावचला बुद्धिस्तदा योगमवाप्स्यसि ||२-५३||",
    english:
      "2.53 When thy intellect, which is perplexed by the Veda text, which thou hast read, shall stand immovable and steady in the Self, then thou shalt attain Self-realisation.",
    hindi:
      "।।2.53।। जब अनेक प्रकार के विषयों को सुनने से विचलित हुई तुम्हारी बुद्धि आत्मस्वरूप में अचल और स्थिर हो जायेगी तब तुम (परमार्थ) योग को प्राप्त करोगे।।",
    commentary: "A simple summary of verse 2.53",
  },
  {
    chapter: 2,
    verse: 54,
    sanskrit:
      "अर्जुन उवाच |\nस्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव |\nस्थितधीः किं प्रभाषेत किमासीत व्रजेत किम् ||२-५४||",
    english:
      "2.54 Arjuna said  What, O Krishna, is the description of him who has steady wisdom, and is merged in the superconscious state? How does one of steady wisdom speak, how does he sit, how does he walk?",
    hindi:
      "।।2.54।। अर्जुन ने कहा -- हे केशव  समाधि में स्थित स्थिर बुद्धि वाले पुरुष का क्या लक्षण है स्थिर बुद्धि पुरुष कैसे बोलता है कैसे बैठता है  कैसे चलता है",
    commentary: "A simple summary of verse 2.54",
  },
  {
    chapter: 2,
    verse: 55,
    sanskrit:
      "श्रीभगवानुवाच |\nप्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान् |\nआत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते ||२-५५||",
    english:
      "2.55 The Blessed Lord said  When a man completely casts off, O Arjuna, all the desires of the mind and is satisfied in the Self by the Self, then is he said to be one of steady wisdom.",
    hindi:
      "।।2.55।। श्री भगवान् ने कहा -- हे पार्थ? जिस समय पुरुष मन में स्थित सब कामनाओं को त्याग देता है और आत्मा से ही आत्मा में सन्तुष्ट रहता है? उस समय वह स्थितप्रज्ञ कहलाता है।।",
    commentary: "A simple summary of verse 2.55",
  },
  {
    chapter: 2,
    verse: 56,
    sanskrit:
      "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः |\nवीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते ||२-५६||",
    english:
      "2.56 He whose mind is not shaken by adversity, who does not hanker after pleasures, and is free from attachment, fear and anger, is called a sage of steady wisdom.",
    hindi:
      "।।2.56।। दुख में जिसका मन उद्विग्न नहीं होता सुख में जिसकी स्पृहा निवृत्त हो गयी है? जिसके मन से राग? भय और क्रोध नष्ट हो गये हैं? वह मुनि स्थितप्रज्ञ कहलाता है।।",
    commentary: "A simple summary of verse 2.56",
  },
  {
    chapter: 2,
    verse: 57,
    sanskrit:
      "यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम् |\nनाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता ||२-५७||",
    english:
      "2.57 He who is everywhere without attachment, on meeting with anything good or bad, who neither rejoices not hastes, his wisdom is fixed.",
    hindi:
      "।।2.57।। जो सर्वत्र अति स्नेह से रहित हुआ उन शुभ तथा अशुभ वस्तुओं को प्राप्त कर न प्रसन्न होता है और न द्वेष करता है? उसकी प्रज्ञा प्रतिष्ठित (स्थिर) है।।",
    commentary: "A simple summary of verse 2.57",
  },
  {
    chapter: 2,
    verse: 58,
    sanskrit:
      "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः |\nइन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ||२-५८||",
    english:
      "2.58 When, like the tortoise which withdraws on all sides its limbs, he withdraws his senses from the sense-objects, then his wisdom becomes steady.",
    hindi:
      "।।2.58।। कछुवा अपने अंगों को जैसे समेट लेता है वैसे ही यह पुरुष जब सब ओर से अपनी इन्द्रियों को इन्द्रियों के विषयों से परावृत्त कर लेता है? तब उसकी बुद्धि स्थिर होती है।।",
    commentary: "A simple summary of verse 2.58",
  },
  {
    chapter: 2,
    verse: 59,
    sanskrit:
      "विषया विनिवर्तन्ते निराहारस्य देहिनः |\nरसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते ||२-५९||",
    english:
      "2.59 The objects of the senses turn away from the abstinent man leaving the longing (behind); but his longing also turns away on seeing the Supreme.",
    hindi:
      "।।2.59।। निराहारी देही पुरुष से विषय तो निवृत्त (दूर) हो जाते हैं? परन्तु (उनके प्रति) राग नहीं  परम तत्व को देखने पर इस (पुरुष) का राग भी निवृत्त हो जाता है।।",
    commentary: "A simple summary of verse 2.59",
  },
  {
    chapter: 2,
    verse: 60,
    sanskrit:
      "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः |\nइन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः ||२-६०||",
    english:
      "2.60 The turbulent senses, O Arjuna, do violently carry away the mind of a wise man though he be striving (to control them).",
    hindi:
      "।।2.60।। हे कौन्तेय  (संयम का) प्रयत्न करते हुए बुद्धिमान (विपश्चित) पुरुष के भी मन को ये इन्द्रियां बलपूर्वक हर लेती हैं।।",
    commentary: "A simple summary of verse 2.60",
  },
  {
    chapter: 2,
    verse: 61,
    sanskrit:
      "तानि सर्वाणि संयम्य युक्त आसीत मत्परः |\nवशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता ||२-६१||",
    english:
      "2.61 Having restrained them all he should sit steadfast, intent on Me; his wisdom is steady whose senses are under control.",
    hindi:
      "।।2.61।। उन सब इन्द्रियों को संयमित कर युक्त और मत्पर होवे। जिस पुरुष की इन्द्रियां वश में होती हैं? उसकी प्रज्ञा प्रतिष्ठित होती है।।",
    commentary: "A simple summary of verse 2.61",
  },
  {
    chapter: 2,
    verse: 62,
    sanskrit:
      "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते |\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ||२-६२||",
    english:
      "2.62 When a man thinks of the objects, attachment for them arises; from attachment desire is born; from desire anger arises.",
    hindi:
      "।।2.62।। विषयों का चिन्तन करने वाले पुरुष की उसमें आसक्ति हो जाती है? आसक्ति से इच्छा और इच्छा से क्रोध उत्पन्न होता है।।",
    commentary: "A simple summary of verse 2.62",
  },
  {
    chapter: 2,
    verse: 63,
    sanskrit:
      "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः |\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ||२-६३||",
    english:
      "2.63 From anger comes delusion; from delusion loss of memory; from loss of memory the destruction of discrimination; from the destruction of discrimination he perishes.",
    hindi:
      "।।2.63।। क्रोध से उत्पन्न होता है मोह और मोह से स्मृति विभ्रम। स्मृति के भ्रमित होने पर बुद्धि का नाश होता है और बुद्धि के नाश होने से वह मनुष्य नष्ट हो जाता है।।",
    commentary: "A simple summary of verse 2.63",
  },
  {
    chapter: 2,
    verse: 64,
    sanskrit:
      "रागद्वेषविमुक्तैस्तु विषयानिन्द्रियैश्चरन् | (or वियुक्तैस्तु)\nआत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति ||२-६४||",
    english:
      "2.64 But the self-controlled man, moving among the objects with the senses under restraint and free from attraction and repulsion, attains to peace.",
    hindi:
      "।।2.64।। आत्मसंयमी (विधेयात्मा) पुरुष रागद्वेष से रहित अपने वश में की हुई (आत्मवश्यै) इन्द्रियों द्वारा विषयों को भोगता हुआ प्रसन्नता (प्रस्ेााद) प्राप्त करता है।।",
    commentary: "A simple summary of verse 2.64",
  },
  {
    chapter: 2,
    verse: 65,
    sanskrit:
      "प्रसादे सर्वदुःखानां हानिरस्योपजायते |\nप्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते ||२-६५||",
    english:
      "2.65 In that peace all pains are destroyed; for the intellect of the tranil-minded soon becomes steady.",
    hindi:
      "।।2.65।। प्रसाद के होने पर सम्पूर्ण दुखों का अन्त हो जाता है और प्रसन्नचित्त पुरुष की बुद्धि ही शीघ्र ही स्थिर हो जाती है।।",
    commentary: "A simple summary of verse 2.65",
  },
  {
    chapter: 2,
    verse: 66,
    sanskrit:
      "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना |\nन चाभावयतः शान्तिरशान्तस्य कुतः सुखम् ||२-६६||",
    english:
      "2.66 There is no knowledge of the Self to the unsteady and to the unsteady no meditation is possible, and to the unmeditative there can be no peace, and to the man who has no peace, how can there be happiness?",
    hindi:
      "।।2.66।। (संयमरहित) अयुक्त पुरुष को (आत्म) ज्ञान नहीं होता और अयुक्त को भावना और ध्यान की क्षमता नहीं होती भावना रहित पुरुष को शान्ति नहीं मिलती अशान्त पुरुष को सुख कहाँ",
    commentary: "A simple summary of verse 2.66",
  },
  {
    chapter: 2,
    verse: 67,
    sanskrit:
      "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते |\nतदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि ||२-६७||",
    english:
      "2.67 For the mind, which follows in the wake of the wandering senses, carries away his discrimination, as the wind (carries away) a boat on the waters.",
    hindi:
      "।।2.67।। जल में वायु जैसे नाव को हर लेता है वैसे ही विषयों में विरचती हुई इन्द्रियों के बीच में जिस इन्द्रिय का अनुकरण मन करता है? वह एक ही इन्द्रिय इसकी प्रज्ञा को हर लेती है।।",
    commentary: "A simple summary of verse 2.67",
  },
  {
    chapter: 2,
    verse: 68,
    sanskrit:
      "तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः |\nइन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ||२-६८||",
    english:
      "2.68 Therefore, O mighty-armed Arjuna, his knowledge is steady whose senses are completely restrained from sense-objects.",
    hindi:
      "।।2.68।। इसलिये? हे महाबाहो  जिस पुरुष की इन्द्रियाँ सब प्रकार इन्द्रियों के विषयों के वश में की हुई होती हैं? उसकी बुद्धि स्थिर होती है।।",
    commentary: "A simple summary of verse 2.68",
  },
  {
    chapter: 2,
    verse: 69,
    sanskrit:
      "या निशा सर्वभूतानां तस्यां जागर्ति संयमी |\nयस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः ||२-६९||",
    english:
      "2.69 That which is night to all beings, in that the self-controlled man is awake; when all beings are awake, that is night for the Muni (sage) who sees.",
    hindi:
      "।।2.69।। सब प्रणियों के लिए जो रात्रि है? उसमें संयमी पुरुष जागता है और जहाँ सब प्राणी जागते हैं? वह (तत्त्व को) देखने वाले मुनि के लिए रात्रि है।।",
    commentary: "A simple summary of verse 2.69",
  },
  {
    chapter: 2,
    verse: 70,
    sanskrit:
      "आपूर्यमाणमचलप्रतिष्ठं\nसमुद्रमापः प्रविशन्ति यद्वत् |\nतद्वत्कामा यं प्रविशन्ति सर्वे\nस शान्तिमाप्नोति न कामकामी ||२-७०||",
    english:
      "2.70 He attains peace into whom all desires enter as waters enter the ocean which, filled from all sides, remains unmoved; but not the man who is full of desires.",
    hindi:
      "।।2.70।। जैसे सब ओर से परिपूर्ण अचल प्रतिष्ठा वाले समुद्र में (अनेक नदियों के) जल (उसे विचलित किये बिना) समा जाते हैं? वैसे ही जिस पुरुष के प्रति कामनाओं के विषय उसमें (विकार उत्पन्न किये बिना) समा जाते हैं? वह पुरुष शान्ति प्राप्त करता है? न कि भोगों की कामना करने वाला पुरुष।।",
    commentary: "A simple summary of verse 2.70",
  },
  {
    chapter: 2,
    verse: 71,
    sanskrit:
      "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः |\nनिर्ममो निरहङ्कारः स शान्तिमधिगच्छति ||२-७१||",
    english:
      "2.71 That man attains peace who, abandoning all desires, moves about without longing, without the sense of mine and without egoism.",
    hindi:
      "।।2.71।। जो पुरुष सब कामनाओं को त्यागकर स्पृहारहित? ममभाव रहित और निरहंकार हुआ विचरण करता है? वह शान्ति प्राप्त करता है।।",
    commentary: "A simple summary of verse 2.71",
  },
  {
    chapter: 2,
    verse: 72,
    sanskrit:
      "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति |\nस्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति ||२-७२||",
    english:
      "2.72 This is the Brahmic seat (eternal state), O son of Pritha. Attaining to this, none is deluded. Being established therein, even at the end of life, one attains to oneness with Brahman.",
    hindi:
      "।।2.72।। हे पार्थ  यह ब्राह्मी स्थिति है। इसे प्राप्त कर पुरुष मोहित नहीं होता। अन्तकाल में भी इस निष्ठा में स्थित होकर ब्रह्मनिर्वाण (ब्रह्म के साथ एकत्व) को प्राप्त होता है।।",
    commentary: "A simple summary of verse 2.72",
  },
  {
    chapter: 3,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच |\nज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन |\nतत्किं कर्मणि घोरे मां नियोजयसि केशव ||३-१||",
    english:
      "3.1 Arjuna said  If Thou thinkest that knowledge is superior to action, O Krishna, why then, O Kesava, dost Thou ask me to engage in this terrible action?",
    hindi:
      "।।3.1।। हे जनार्दन  यदि आपको यह मान्य है कि कर्म से ज्ञान श्रेष्ठ है तो फिर हे केशव  आप मुझे इस भयंकर कर्म में क्यों प्रवृत्त करते हैं",
    commentary: "A simple summary of verse 3.1",
  },
  {
    chapter: 3,
    verse: 2,
    sanskrit:
      "व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे |\nतदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम् ||३-२||",
    english:
      "3.2 With this apparently perplexing speech, Thou confusest, as it were, my understanding; therefore tell me that one way for certain by which I may attain bliss.",
    hindi:
      "।।3.2।। आप इस मिश्रित वाक्य से मेरी बुद्धि को मोहितसा करते हैं अत आप उस एक (मार्ग) को निश्चित रूप से कहिये जिससे मैं परम श्रेय को प्राप्त कर सकूँ।।",
    commentary: "A simple summary of verse 3.2",
  },
  {
    chapter: 3,
    verse: 3,
    sanskrit:
      "श्रीभगवानुवाच |\nलोकेऽस्मिन् द्विविधा निष्ठा पुरा प्रोक्ता मयानघ |\nज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम् ||३-३||",
    english:
      "3.3 The Blessed Lord said  In this world there is a twofold path, as I said before, O sinless one; the path of knowledge of the Sankhyas and the path of action of the Yogins.",
    hindi:
      "।।3.3।। श्री भगवान् ने कहा  हे निष्पाप (अनघ) अर्जुन  इस श्लोक में दो प्रकार की निष्ठा मेरे द्वारा पहले कही गयी है ज्ञानियों की (सांख्यानां) ज्ञानयोग से और योगियों की कर्मयोग से।।",
    commentary: "A simple summary of verse 3.3",
  },
  {
    chapter: 3,
    verse: 4,
    sanskrit:
      "न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते |\nन च संन्यसनादेव सिद्धिं समधिगच्छति ||३-४||",
    english:
      "3.4 Not by non-performance of actions does man reach actionlessness; nor by mere renunciation does he attain to perfection.",
    hindi:
      "।।3.4।। कर्मों के न करने से मनुष्य नैर्ष्कम्य को प्राप्त नहीं होता और न कर्मों के संन्यास से ही वह सिद्धि (पूर्णत्व) प्राप्त करता है।।",
    commentary: "A simple summary of verse 3.4",
  },
  {
    chapter: 3,
    verse: 5,
    sanskrit:
      "न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत् |\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः ||३-५||",
    english:
      "3.5 Verily none can ever remain for even a moment without performing action; for everyone is made to act helplessly indeed by the alities born of Nature.",
    hindi:
      "।।3.5।। कोई भी पुरुष कभी क्षणमात्र भी बिना कर्म किए नहीं रह सकता क्योंकि प्रकृति से उत्पन्न गुणों के द्वारा अवश हुए सब (पुरुषों) से कर्म करवा लिया जाता है।।",
    commentary: "A simple summary of verse 3.5",
  },
  {
    chapter: 3,
    verse: 6,
    sanskrit:
      "कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् |\nइन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते ||३-६||",
    english:
      "3.6 He who, restraining the organs of action, sits thinking of the sense-objects in mind, he of deluded understanding is called a hypocrite.",
    hindi:
      "।।3.6।। जो मूढ बुद्धि पुरुष कर्मेन्द्रियों का निग्रह कर इन्द्रियों के भोगों का मन से स्मरण (चिन्तन) करता रहता है वह मिथ्याचारी (दम्भी) कहा जाता है।।",
    commentary: "A simple summary of verse 3.6",
  },
  {
    chapter: 3,
    verse: 7,
    sanskrit:
      "यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन |\nकर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते ||३-७||",
    english:
      "3.7 But whosoever, controlling the senses by the mind, O Arjuna, engages himself in Karma Yoga with the organs of action, without attachment, he excels.",
    hindi:
      "।।3.7।। परन्तु हे अर्जुन  जो पुरुष मन से इन्द्रियों को वश में करके अनासक्त हुआ कर्मेंन्द्रियों से कर्मयोग का आचरण करता है वह श्रेष्ठ है।।",
    commentary: "A simple summary of verse 3.7",
  },
  {
    chapter: 3,
    verse: 8,
    sanskrit:
      "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः |\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः ||३-८||",
    english:
      "3.8 Do thou perform (thy) bounden duty, for action is superior to inaction and even the maintenance of the body would not be possible for thee by inaction.",
    hindi:
      "।।3.8।। तुम (अपने) नियत (कर्तव्य) कर्म करो क्योंकि अकर्म से श्रेष्ठ कर्म है। तुम्हारे अकर्म होने से (तुम्हारा) शरीर निर्वाह भी नहीं सिद्ध होगा।।",
    commentary: "A simple summary of verse 3.8",
  },
  {
    chapter: 3,
    verse: 9,
    sanskrit:
      "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः |\nतदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर ||३-९||",
    english:
      "3.9 The world is bound by actions other than those performed for the sake of sacrifice; do thou, therefore, O son of Kunti (Arjuna), perform action for that sake (for sacrifice alone), free from attachment.",
    hindi:
      "।।3.9।। यज्ञ के लिये किये हुए कर्म के अतिरिक्त अन्य कर्म में प्रवृत्त हुआ यह पुरुष कर्मों द्वारा बंधता है इसलिए हे कौन्तेय आसक्ति को त्यागकर यज्ञ के निमित्त ही कर्म का सम्यक् आचरण करो।।",
    commentary: "A simple summary of verse 3.9",
  },
  {
    chapter: 3,
    verse: 10,
    sanskrit:
      "सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः |\nअनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक् ||३-१०||",
    english:
      '3.10 The Creator, having in the beginning (of creation) created mankind together with sacrifice, said, "By this shall ye propagate; let this be the milch cow of your desires (the cow which yields all the desired objects)."',
    hindi:
      "।।3.10।। प्रजापति (सृष्टिकर्त्ता) ने (सृष्टि के) आदि में यज्ञ सहित प्रजा का निर्माण कर कहा इस यज्ञ द्वारा तुम वृद्धि को प्राप्त हो और यह यज्ञ तुम्हारे लिये इच्छित कामनाओं को पूर्ण करने वाला (इष्टकामधुक्) होवे।।",
    commentary: "A simple summary of verse 3.10",
  },
  {
    chapter: 3,
    verse: 11,
    sanskrit:
      "देवान्भावयतानेन ते देवा भावयन्तु वः |\nपरस्परं भावयन्तः श्रेयः परमवाप्स्यथ ||३-११||",
    english:
      "3.11 With this do ye nourish the gods and may those gods nourish you; thus nourishing one another, ye shall attain to the highest good.",
    hindi:
      "।।3.11।। तुम लोग इस यज्ञ द्वारा देवताओं की उन्नति करो और वे देवतागण तुम्हारी उन्नति करें। इस प्रकार परस्पर उन्नति करते हुये परम श्रेय को तुम प्राप्त होगे।।",
    commentary: "A simple summary of verse 3.11",
  },
  {
    chapter: 3,
    verse: 12,
    sanskrit:
      "इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः |\nतैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः ||३-१२||",
    english:
      "3.12 The gods, nourished by the sacrifice, will give you the desired objects. So, he who enjoys the objects given by the gods without offering (in return) to them, is verily a thief.",
    hindi:
      "।।3.12।। यज्ञ द्वारा पोषित देवतागण तुम्हें इष्ट भोग प्रदान करेंगे। उनके द्वारा दिये हुये भोगों को जो पुरुष उनको दिये बिना ही भोगता है वह निश्चय ही चोर है।।",
    commentary: "A simple summary of verse 3.12",
  },
  {
    chapter: 3,
    verse: 13,
    sanskrit:
      "यज्ञशिष्टाशिनः सन्तो मुच्यन्ते सर्वकिल्बिषैः |\nभुञ्जते ते त्वघं पापा ये पचन्त्यात्मकारणात् ||३-१३||",
    english:
      "3.13 The righteous who eat the remnants of the sacrifice are freed from all sins; but those sinful ones who cook food (only) for their own sake verily eat sin.",
    hindi:
      "।।3.13।। यज्ञ के अवशिष्ट अन्न को खाने वाले श्रेष्ठ पुरुष सब पापों से मुक्त हो जाते हैं किन्तु जो लोग केवल स्वयं के लिये ही पकाते हैं वे तो पापों को ही खाते हैं।।",
    commentary: "A simple summary of verse 3.13",
  },
  {
    chapter: 3,
    verse: 14,
    sanskrit:
      "अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः |\nयज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः ||३-१४||",
    english:
      "3.14 From food come forth beings; from rain food is produced; from sacrifice arises rain and sacrifice is born of action.",
    hindi:
      "।।3.14।। समस्त प्राणी अन्न से उत्पन्न होते हैं अन्न की उत्पत्ति पर्जन्य से। पर्जन्य की उत्पत्ति यज्ञ से और यज्ञ कर्मों से उत्पन्न होता है।।",
    commentary: "A simple summary of verse 3.14",
  },
  {
    chapter: 3,
    verse: 15,
    sanskrit:
      "कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम् |\nतस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम् ||३-१५||",
    english:
      "3.15 Know thou that action comes from Brahma and Brahma comes from the Imperishable. Therefore, the all-pervading (Brahma) ever rests in sacrifice.",
    hindi:
      "।।3.15।। कर्म की उत्पत्ति ब्रह्माजी से होती है और ब्रह्माजी अक्षर तत्त्व से व्यक्त होते हैं। इसलिये सर्व व्यापी ब्रह्म सदा ही यज्ञ में प्रतिष्ठित है।।",
    commentary: "A simple summary of verse 3.15",
  },
  {
    chapter: 3,
    verse: 16,
    sanskrit:
      "एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः |\nअघायुरिन्द्रियारामो मोघं पार्थ स जीवति ||३-१६||",
    english:
      "3.16 He who does not follow here the wheel thus set revolving, who is of sinful life, rejoicing in the senses, he lives in vain, O Arjuna.",
    hindi:
      "।।3.16।। जो पुरुष यहाँ इस प्रकार प्रवर्तित हुए चक्र का अनुवर्तन नहीं करता हे पार्थ इंन्द्रियों में रमने वाला वह पाप आयु पुरुष व्यर्थ ही जीता है।।",
    commentary: "A simple summary of verse 3.16",
  },
  {
    chapter: 3,
    verse: 17,
    sanskrit:
      "यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः |\nआत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते ||३-१७||",
    english:
      "3.17 But for that man who rejoices only in the Self, who is satisfied with the Self and who is content in the Self alone, verily there is nothing to do.",
    hindi:
      "।।3.17।। परन्तु जो मनुष्य आत्मा में ही रमने वाला आत्मा में ही तृप्त तथा आत्मा में ही सन्तुष्ट हो उसके लिये कोई कर्तव्य नहीं रहता।।",
    commentary: "A simple summary of verse 3.17",
  },
  {
    chapter: 3,
    verse: 18,
    sanskrit:
      "नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन |\nन चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः ||३-१८||",
    english:
      "3.18 For him there is no interest whatever in what is done or what is not done; nor does he depend on any being for any object.",
    hindi:
      "।।3.18।। इस जगत् में उस पुरुष का कृत और अकृत से कोई प्रयोजन नहीं है और न वह किसी वस्तु के लिये भूतमात्र पर आश्रित होता है।।",
    commentary: "A simple summary of verse 3.18",
  },
  {
    chapter: 3,
    verse: 19,
    sanskrit:
      "तस्मादसक्तः सततं कार्यं कर्म समाचर |\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ||३-१९||",
    english:
      "3.19 Therefore without attachment, do thou always perform action which should be done; for by performing action without attachment man reaches the Supreme.",
    hindi:
      "।।3.19।। इसलिए,  तुम अनासक्त होकर सदैव कर्तव्य कर्म का सम्यक् आचरण करो;  क्योकि,  अनासक्त पुरुष कर्म करता हुआ परमात्मा को प्राप्त होता है।।",
    commentary: "A simple summary of verse 3.19",
  },
  {
    chapter: 3,
    verse: 20,
    sanskrit:
      "कर्मणैव हि संसिद्धिमास्थिता जनकादयः |\nलोकसंग्रहमेवापि सम्पश्यन्कर्तुमर्हसि ||३-२०||",
    english:
      "3.20 Janaka and others attained perfection verily by action only; even with a view to the protection of the masses thou shouldst perform action.",
    hindi:
      "।।3.20।। जनकादि (ज्ञानी जन) भी कर्म द्वारा ही संसिद्धि को प्राप्त हुये लोक संग्रह (लोक रक्षण) को भी देखते हुये;  तुम कर्म करने योग्य हो।।",
    commentary: "A simple summary of verse 3.20",
  },
  {
    chapter: 3,
    verse: 21,
    sanskrit:
      "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः |\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ||३-२१||",
    english:
      "3.21 Whatsoever a great man does, that the other men also do; whatever he sets up as the standard, that the world (mankind) follows.",
    hindi:
      "।।3.21।। श्रेष्ठ पुरुष जैसा आचरण करता है, अन्य लोग भी वैसा ही अनुकरण करते हैं; वह पुरुष जो कुछ प्रमाण कर देता है, लोग भी उसका अनुसरण करते हैं।।",
    commentary: "A simple summary of verse 3.21",
  },
  {
    chapter: 3,
    verse: 22,
    sanskrit:
      "न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन |\nनानवाप्तमवाप्तव्यं वर्त एव च कर्मणि ||३-२२||",
    english:
      "3.22 There is nothing in the three worlds, O Arjuna, that should be done by Me, nor is there anything unattained that should be attained; yet I engage Myself in action.",
    hindi:
      "।।3.22।। यद्यपि मुझे त्रैलोक्य में कुछ भी कर्तव्य नहीं हैं तथा किंचित भी प्राप्त होने योग्य (अवाप्तव्यम्) वस्तु अप्राप्त नहीं है, तो भी मैं कर्म में ही बर्तता हूँ।।",
    commentary: "A simple summary of verse 3.22",
  },
  {
    chapter: 3,
    verse: 23,
    sanskrit:
      "यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः |\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ||३-२३||",
    english:
      "3.23 For, should I not ever engage Myself in action, unwearied, men would in every way follow My path, O Arjuna.",
    hindi:
      "।।3.23।। यदि मैं सावधान हुआ (अतन्द्रित:) कदाचित कर्म में न लगा रहूँ तो, हे पार्थ ! सब प्रकार से मनुष्य मेरे मार्ग (र्वत्म) का अनुसरण करेंगे।।",
    commentary: "A simple summary of verse 3.23",
  },
  {
    chapter: 3,
    verse: 24,
    sanskrit:
      "उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम् |\nसङ्करस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः ||३-२४||",
    english:
      "3.24 These worlds would perish if I did not perform action; I should be the author of confusion of castes and destruction of these beings.",
    hindi:
      "।।3.24।। यदि मैं कर्म न करूँ, तो ये समस्त लोक नष्ट हो जायेंगे; और मैं वर्णसंकर का कर्ता तथा इस प्रजा का हनन करने वाला होऊँगा।।",
    commentary: "A simple summary of verse 3.24",
  },
  {
    chapter: 3,
    verse: 25,
    sanskrit:
      "सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत |\nकुर्याद्विद्वांस्तथासक्तश्चिकीर्षुर्लोकसंग्रहम् ||३-२५||",
    english:
      "3.25 As the ignorant men act from attachment to action, O Bharata (Arjuna), so should the wise act without attachment, wishing the welfare of the world.",
    hindi:
      "।।3.25।। हे भारत ! कर्म में आसक्त हुए अज्ञानीजन जैसे कर्म करते हैं वैसे ही विद्वान् पुरुष अनासक्त होकर, लोकसंग्रह (लोक कल्याण) की इच्छा से कर्म करे।।",
    commentary: "A simple summary of verse 3.25",
  },
  {
    chapter: 3,
    verse: 26,
    sanskrit:
      "न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम् |\nजोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन् ||३-२६||",
    english:
      "3.26 Let no wise man unsettle the mind of ignorant people who are attached to action; he should engage them in all actions, himself fulfilling them with devotion.",
    hindi:
      "।।3.26।। ज्ञानी पुरुष, कर्मों में आसक्त अज्ञानियों की बुद्धि में भ्रम उत्पन्न न करे, स्वयं (भक्ति से) युक्त होकर कर्मों का सम्यक् आचरण कर, उनसे भी वैसा ही कराये।।",
    commentary: "A simple summary of verse 3.26",
  },
  {
    chapter: 3,
    verse: 27,
    sanskrit:
      "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः |\nअहङ्कारविमूढात्मा कर्ताहमिति मन्यते ||३-२७||",
    english:
      '3.27 All actions are wrought in all cases by the alities of Nature only. He whose mind is deluded by egoism thinks, "I am the doer."',
    hindi:
      '।।3.27।। सम्पूर्ण कर्म प्रकृति के गुणों द्वारा किये जाते हैं, अहंकार से मोहित हुआ पुरुष,  "मैं कर्ता हूँ"  ऐसा मान लेता है।।',
    commentary: "A simple summary of verse 3.27",
  },
  {
    chapter: 3,
    verse: 28,
    sanskrit:
      "तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः |\nगुणा गुणेषु वर्तन्त इति मत्वा न सज्जते ||३-२८||",
    english:
      "3.28 But he who knows the Truth, O mighty-armed (Arjuna), about the divisions of the alities and (their) functions, knowing that the Gunas as senses move amidst the Gunas as the sense-objects, is not attached.",
    hindi:
      '।।3.28।। परन्तु हे महाबाहो ! गुण और कर्म के विभाग के सत्य (तत्त्व)को जानने वाला ज्ञानी पुरुष यह जानकर कि "गुण गुणों में बर्तते हैं" (कर्म में) आसक्त नहीं होता।।',
    commentary: "A simple summary of verse 3.28",
  },
  {
    chapter: 3,
    verse: 29,
    sanskrit:
      "प्रकृतेर्गुणसम्मूढाः सज्जन्ते गुणकर्मसु |\nतानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत् ||३-२९||",
    english:
      "3.29 Those deluded by the alities of Nature are attached to the functions of the alities. The man of perfect knowledge should not unsettle the foolish one who is of imperfect knowledge.",
    hindi:
      "।।3.29।। प्रकृति के गुणों से मोहित हुए पुरुष गुण और कर्म में आसक्त होते हैं, उन अपूर्ण ज्ञान वाले (अकृत्स्नविद:) मंदबुद्धि पुरुषों को पूर्ण ज्ञान प्राप्त पुरुष विचलित न करे।।",
    commentary: "A simple summary of verse 3.29",
  },
  {
    chapter: 3,
    verse: 30,
    sanskrit:
      "मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा |\nनिराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः ||३-३०||",
    english:
      "3.30 Renouncing all actions in Me, with the mind centred in the Self, free from hope and egoism, and from (mental) fever, do thou fight.",
    hindi:
      "।।3.30।। सम्पूर्ण कर्मों का मुझ में संन्यास करके,  आशा और ममता से रहित होकर,  संतापरहित हुए तुम युद्ध करो।।",
    commentary: "A simple summary of verse 3.30",
  },
  {
    chapter: 3,
    verse: 31,
    sanskrit:
      "ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः |\nश्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः ||३-३१||",
    english:
      "3.31 Those men who constantly practise this teaching of Mine with faith and without cavilling, they too are freed from actions.",
    hindi:
      "।।3.31।। जो मनुष्य दोष बुद्धि से रहित (अनसूयन्त:) और श्रद्धा से युक्त हुए सदा मेरे इस मत (उपदेश) का अनुष्ठानपूर्वक पालन करते हैं, वे कर्मों से (बन्धन से) मुक्त हो जाते हैं।।",
    commentary: "A simple summary of verse 3.31",
  },
  {
    chapter: 3,
    verse: 32,
    sanskrit:
      "ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम् |\nसर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः ||३-३२||",
    english:
      "3.32 But those who carp at My teaching and do not practise it, deluded of all knowledge, and devoid of discrimination, know them to be doomed to destruction.",
    hindi:
      "।।3.32।। परन्तु जो दोष दृष्टि वाले मूढ़ लोग इस मेरे मत का पालन नहीं करते, उन सब ज्ञानों में मोहित चित्तवालों को नष्ट हुये ही तुम समझो।।",
    commentary: "A simple summary of verse 3.32",
  },
  {
    chapter: 3,
    verse: 33,
    sanskrit:
      "सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि |\nप्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति ||३-३३||",
    english:
      "3.33 Even a wise man acts in accordance with his own nature; beings will follow Nature; what can \nrestraint do?",
    hindi:
      "।।3.33।। ज्ञानवान् पुरुष भी अपनी प्रकृति के अनुसार चेष्टा करता है। सभी प्राणी अपनी प्रकृति पर ही जाते हैं, फिर इनमें (किसी का) निग्रह क्या करेगा।।",
    commentary: "A simple summary of verse 3.33",
  },
  {
    chapter: 3,
    verse: 34,
    sanskrit:
      "इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ |\nतयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ ||३-३४||",
    english:
      "3.34 Attachment and aversion for the objects of the senses abide in the senses; let none come under their sway; for, they are his foes.",
    hindi:
      "।।3.34।। इन्द्रियइन्द्रिय (अर्थात् प्रत्येक इन्द्रिय) के विषय के प्रति (मन में) रागद्वेष रहते हैं;  मनुष्य को चाहिये कि वह उन दोनों के वश में न हो;  क्योंकि वे इसके (मनुष्य के) शत्रु हैं।।",
    commentary: "A simple summary of verse 3.34",
  },
  {
    chapter: 3,
    verse: 35,
    sanskrit:
      "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् |\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ||३-३५||",
    english:
      "3.35 Better is one's own duty, though devoid of merit than the duty of another well discharged. Better is death in one's own duty; the duty of another is fraught with fear (is productive of danger).",
    hindi:
      "।।3.35।। सम्यक् प्रकार से अनुष्ठित परधर्म की अपेक्षा गुणरहित स्वधर्म का पालन श्रेयष्कर है;  स्वधर्म में मरण कल्याणकारक है (किन्तु) परधर्म भय को देने वाला है।।",
    commentary: "A simple summary of verse 3.35",
  },
  {
    chapter: 3,
    verse: 36,
    sanskrit:
      "अर्जुन उवाच |\nअथ केन प्रयुक्तोऽयं पापं चरति पूरुषः |\nअनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः ||३-३६||",
    english:
      "3.36 Arjuna said  But impelled by what does man commit sin, though against his wishes, O Varshneya (Krishna), constrained as it were, by force?",
    hindi:
      "।।3.36।। अर्जुन ने कहा -- हे वार्ष्णेय ! फिर यह पुरुष बलपूर्वक बाध्य किये हुये के समान अनिच्छा होते हुये भी किसके द्वारा प्रेरित होकर पाप का आचरण करता है?",
    commentary: "A simple summary of verse 3.36",
  },
  {
    chapter: 3,
    verse: 37,
    sanskrit:
      "श्रीभगवानुवाच |\nकाम एष क्रोध एष रजोगुणसमुद्भवः |\nमहाशनो महापाप्मा विद्ध्येनमिह वैरिणम् ||३-३७||",
    english:
      "3.37 The Blessed Lord said  It is desire, it is anger both of the ality of Rajas, all-devouring, all-sinful; know this as the foe here (in this world).",
    hindi:
      "।।3.37।। श्रीभगवान् ने कहा -- रजोगुण में उत्पन्न हुई यह 'कामना' है,  यही क्रोध है; यह महाशना (जिसकी भूख बड़ी हो) और महापापी है, इसे ही तुम यहाँ (इस जगत् में) शत्रु जानो।।",
    commentary: "A simple summary of verse 3.37",
  },
  {
    chapter: 3,
    verse: 38,
    sanskrit:
      "धूमेनाव्रियते वह्निर्यथादर्शो मलेन च |\nयथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम् ||३-३८||",
    english:
      "3.38 As fire is enveloped by smoke, as a mirror by dust, and as an embryo by the amnion, so is this enveloped by that.",
    hindi:
      "।।3.38।। जैसे धुयें से अग्नि और धूलि से दर्पण ढक जाता है तथा जैसे भ्रूण गर्भाशय से ढका रहता है, वैसे उस (काम) के द्वारा यह (ज्ञान) आवृत होता है।।",
    commentary: "A simple summary of verse 3.38",
  },
  {
    chapter: 3,
    verse: 39,
    sanskrit:
      "आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा |\nकामरूपेण कौन्तेय दुष्पूरेणानलेन च ||३-३९||",
    english:
      "3.39 O Arjuna, wisdom is enveloped by this constant enemy of the wise in the form of desire, which is unappeasable as fire.",
    hindi:
      "।।3.39।। हे कौन्तेय ! अग्नि के समान जिसको तृप्त करना कठिन है ऐसे कामरूप,  ज्ञानी के इस नित्य शत्रु द्वारा ज्ञान आवृत है।।",
    commentary: "A simple summary of verse 3.39",
  },
  {
    chapter: 3,
    verse: 40,
    sanskrit:
      "इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते |\nएतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम् ||३-४०||",
    english:
      "3.40 The senses, the mind and the intellect are said to be its seat; through these it deludes the embodied by veiling his wisdom.",
    hindi:
      "।।3.40।। इन्द्रियाँ,  मन और बुद्धि इसके निवास स्थान कहे जाते हैं;  यह काम इनके द्वारा ही ज्ञान को आच्छादित करके देही पुरुष को मोहित करता है।।",
    commentary: "A simple summary of verse 3.40",
  },
  {
    chapter: 3,
    verse: 41,
    sanskrit:
      "तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ |\nपाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम् ||३-४१||",
    english:
      "3.41 Therefore, O best of the Bharatas (Arjuna), controlling the senses first, do thou kill this sinful thing, the destroyer of knowledge and realisation.",
    hindi:
      "।।3.41।। इसलिये, हे अर्जुन ! तुम पहले इन्द्रियों को वश में करके, ज्ञान और विज्ञान के नाशक इस कामरूप पापी को नष्ट करो।।",
    commentary: "A simple summary of verse 3.41",
  },
  {
    chapter: 3,
    verse: 42,
    sanskrit:
      "इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः |\nमनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः ||३-४२||",
    english:
      "3.42 They say that the senses are superior (to the body); superior to the senses is the mind; superior to the mind is the intellect; one who is superior even to the intellect is He (the Self).",
    hindi:
      "।।3.42।। (शरीर से) परे (श्रेष्ठ) इन्द्रियाँ कही जाती हैं;  इन्द्रियों से परे मन है और मन से परे बुद्धि है, और जो बुद्धि से भी परे है, वह है आत्मा।।",
    commentary: "A simple summary of verse 3.42",
  },
  {
    chapter: 3,
    verse: 43,
    sanskrit:
      "एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना |\nजहि शत्रुं महाबाहो कामरूपं दुरासदम् ||३-४३||",
    english:
      "3.43 Thus knowing Him Who is superior to the intellect and restraining the self by the Self, slay thou, O mighty-armed Arjuna, the enemy in the form of desire, hard to coner.",
    hindi:
      "।।3.43।। इस प्रकार बुद्धि से परे (शुद्ध) आत्मा को जानकर आत्मा (बुद्धि) के द्वारा आत्मा (मन) को वश में करके, हे महाबाहो ! तुम इस दुर्जेय (दुरासदम्) कामरूप शत्रु को मारो।।",
    commentary: "A simple summary of verse 3.43",
  },
  {
    chapter: 4,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच |\nइमं विवस्वते योगं प्रोक्तवानहमव्ययम् |\nविवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत् ||४-१||",
    english:
      "4.1 The Blessed Lord said  I taught this imperishable Yoga to Vivasvan; he told it to Manu; Manu proclaimed it to Ikshvaku.",
    hindi:
      "।।4.1।। श्रीभगवान् ने कहा ---  मैंने इस अविनाशी योग को विवस्वान् (सूर्य देवता) से कहा (सिखाया);  विवस्वान् ने मनु से कहा;  मनु ने इक्ष्वाकु से कहा।।",
    commentary: "A simple summary of verse 4.1",
  },
  {
    chapter: 4,
    verse: 2,
    sanskrit:
      "एवं परम्पराप्राप्तमिमं राजर्षयो विदुः |\nस कालेनेह महता योगो नष्टः परन्तप ||४-२||",
    english:
      "4.2 This, handed down thus in regular succession, the royal sages knew. This Yoga, by long lapse of time, has been lost here, O Parantapa (burner of the foes).",
    hindi:
      "।।4.2।। इस प्रकार परम्परा से प्राप्त हुये इस योग को राजर्षियों ने जाना, (परन्तु) हे परन्तप ! वह योग बहुत काल (के अन्तराल) से यहाँ (इस लोक में) नष्टप्राय हो गया।।",
    commentary: "A simple summary of verse 4.2",
  },
  {
    chapter: 4,
    verse: 3,
    sanskrit:
      "स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः |\nभक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम् ||४-३||",
    english:
      "4.3 That same ancient Yoga has been today taught to thee by Me, for thou art My devotee and My friend; it is the supreme secret.",
    hindi:
      "।।4.3।। वह ही यह पुरातन योग आज मैंने तुम्हें कहा (सिखाया) क्योंकि तुम मेरे भक्त और मित्र हो। यह उत्तम रहस्य है।।",
    commentary: "A simple summary of verse 4.3",
  },
  {
    chapter: 4,
    verse: 4,
    sanskrit:
      "अर्जुन उवाच |\nअपरं भवतो जन्म परं जन्म विवस्वतः |\nकथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति ||४-४||",
    english:
      "4.4 Arjuna said  Later on was Thy birth, and prior to it was the birth of Vivasvan (the Sun); how am I to understand that Thou taughtest this Yoga in the beginning?",
    hindi:
      "।।4.4।। अर्जुन ने कहा -- आपका जन्म अपर अर्थात् पश्चात का है और विवस्वान् का जन्म (आपके) पूर्व का है, इसलिये यह मैं कैसे जानूँ कि (सृष्टि के) आदि में आपने (इस योग को) कहा था?",
    commentary: "A simple summary of verse 4.4",
  },
  {
    chapter: 4,
    verse: 5,
    sanskrit:
      "श्रीभगवानुवाच |\nबहूनि मे व्यतीतानि जन्मानि तव चार्जुन |\nतान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप ||४-५||",
    english:
      "4.5 The Blessed Lord said  Many births of Mine have passed as well as of thine, O Arjuna; I know them all but thou knowest not, O Parantapa (scorcher of foes).",
    hindi:
      "।।4.5।। श्रीभगवान् ने कहा -- हे अर्जुन ! मेरे और तुम्हारे बहुत से जन्म हो चुके हैं, (परन्तु) हे परन्तप ! उन सबको मैं जानता हूँ और तुम नहीं जानते।।",
    commentary: "A simple summary of verse 4.5",
  },
  {
    chapter: 4,
    verse: 6,
    sanskrit:
      "अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन् |\nप्रकृतिं स्वामधिष्ठाय सम्भवाम्यात्ममायया ||४-६||",
    english:
      "4.6 Though I am unborn, of imperishable nature, and though I am the Lord of all beings, yet, governing My own Nature, I am born by My own Maya.",
    hindi:
      "।।4.6।। यद्यपि मैं अजन्मा और अविनाशी स्वरूप हूँ और भूतमात्र का ईश्वर हूँ (तथापि) अपनी प्रकृति को अपने अधीन रखकर (अधिष्ठाय) मैं अपनी माया से जन्म लेता हूँ।।",
    commentary: "A simple summary of verse 4.6",
  },
  {
    chapter: 4,
    verse: 7,
    sanskrit:
      "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत |\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||४-७||",
    english:
      "4.7 Whenever there is decline of righteousness, O Arjuna, and rise of unrighteousness, then I manifest Myself.",
    hindi:
      "।।4.7।। हे भारत ! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है,  तब-तब मैं स्वयं को प्रकट करता हूँ।।",
    commentary: "A simple summary of verse 4.7",
  },
  {
    chapter: 4,
    verse: 8,
    sanskrit:
      "परित्राणाय साधूनां विनाशाय च दुष्कृताम् |\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ||४-८||",
    english:
      "4.8 For the protection of the good, for the destruction of the wicked and for the establishment of righteousness, I am born in every age.",
    hindi:
      "।।4.8।। साधु पुरुषों के रक्षण,  दुष्कृत्य करने वालों के नाश,  तथा धर्म संस्थापना के लिये,  मैं प्रत्येक युग में प्रगट होता हूँ।।",
    commentary: "A simple summary of verse 4.8",
  },
  {
    chapter: 4,
    verse: 9,
    sanskrit:
      "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः |\nत्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन ||४-९||",
    english:
      "4.9 He who thus know, in their true light, My divine birth and action, having abandoned the body, is not born again, he comes to Me, O Arjuna.",
    hindi:
      "।।4.9।। हे अर्जुन ! मेरा जन्म और कर्म दिव्य है,  इस प्रकार जो पुरुष तत्त्वत:  जानता है, वह शरीर को त्यागकर फिर जन्म को नहीं प्राप्त होता;  वह मुझे ही प्राप्त होता है।।",
    commentary: "A simple summary of verse 4.9",
  },
  {
    chapter: 4,
    verse: 10,
    sanskrit:
      "वीतरागभयक्रोधा मन्मया मामुपाश्रिताः |\nबहवो ज्ञानतपसा पूता मद्भावमागताः ||४-१०||",
    english:
      "4.10 Freed from attachment, fear and anger, absorbed in Me, taking refuge in Me, purified by the fire of knowledge, many have attained to My Being.",
    hindi:
      "।।4.10।। राग भय और क्रोध से रहित मनमय मेरे शरण हुए बहुत से पुरुष ज्ञान रुप तप से पवित्र‌ हुए मेरे स्वरुप को प्राप्त हुए हैं।।",
    commentary: "A simple summary of verse 4.10",
  },
  {
    chapter: 4,
    verse: 11,
    sanskrit:
      "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम् |\nमम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः ||४-११||",
    english:
      "4.11 In whatever way men approach Me even so do I reward them; My path do men tread in all ways, O Arjuna.",
    hindi:
      "।।4.11।। जो मुझे जैसे भजते हैं,  मैं उन पर वैसे ही अनुग्रह करता हूँ;  हे पार्थ सभी मनुष्य सब प्रकार से, मेरे ही मार्ग का अनुवर्तन करते हैं।।",
    commentary: "A simple summary of verse 4.11",
  },
  {
    chapter: 4,
    verse: 12,
    sanskrit:
      "काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः |\nक्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा ||४-१२||",
    english:
      "4.12 Those who long for success in action in this world sacrifice to the gods; because success is ickly attained by men through action.",
    hindi:
      "।।4.12।। (सामान्य मनुष्य) यहाँ (इस लोक में) कर्मों के फल को चाहते हुये देवताओं को पूजते हैं;  क्योंकि मनुष्य लोक में कर्मों के फल शीघ्र ही प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 4.12",
  },
  {
    chapter: 4,
    verse: 13,
    sanskrit:
      "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः |\nतस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम् ||४-१३||",
    english:
      "4.13 The fourfold caste has been created by Me according to the differentiation of Guna and Karma; though I am the author thereof know Me as non-doer and immutable.",
    hindi:
      "।।4.13।। गुण और कर्मों के विभाग से चातुर्वण्य मेरे द्वारा रचा गया है। यद्यपि मैं उसका कर्ता हूँ, तथापि तुम मुझे अकर्ता और अविनाशी जानो।।",
    commentary: "A simple summary of verse 4.13",
  },
  {
    chapter: 4,
    verse: 14,
    sanskrit:
      "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा |\nइति मां योऽभिजानाति कर्मभिर्न स बध्यते ||४-१४||",
    english:
      "4.14 Actions do not taint Me, nor have I a desire for the fruit of actions. He who knows Me thus is not bound by actions.",
    hindi:
      "।।4.14।। कर्म मुझे लिप्त नहीं करते;  न मुझे कर्मफल में स्पृहा है। इस प्रकार मुझे जो जानता है, वह भी कर्मों से नहीं बन्धता है।।",
    commentary: "A simple summary of verse 4.14",
  },
  {
    chapter: 4,
    verse: 15,
    sanskrit:
      "एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः |\nकुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम् ||४-१५||",
    english:
      "4.15 Having known this, the ancient seekers after freedom also performed action; therefore do thou also perform action, as did the ancients in days of yore.",
    hindi:
      "।।4.15।। पूर्व के मुमुक्ष पुरुषों द्वारा भी इस प्रकार जानकर ही कर्म किया गया है;  इसलिये तुम भी पूर्वजों द्वारा सदा से किये हुए कर्मों को ही करो।।",
    commentary: "A simple summary of verse 4.15",
  },
  {
    chapter: 4,
    verse: 16,
    sanskrit:
      "किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः |\nतत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात् ||४-१६||",
    english:
      "4.16 What is action? What is inaction? As to this even the wise are confused. Therefore I shall teach thee such action (the nature of action and inaction) by knowing which thou shalt be liberated from the evil (of Samsara, the wheel of birth and death).",
    hindi:
      "।।4.16।। कर्म क्या है और अकर्म क्या है? इस विषय में बुद्धिमान पुरुष भी भ्रमित हो जाते हैं। इसलिये मैं तुम्हें कर्म कहूँगा,  (अर्थात् कर्म और अकर्म का स्वरूप समझाऊँगा) जिसको जानकर तुम अशुभ (संसार बन्धन) से मुक्त हो जाओगे।।",
    commentary: "A simple summary of verse 4.16",
  },
  {
    chapter: 4,
    verse: 17,
    sanskrit:
      "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः |\nअकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः ||४-१७||",
    english:
      "4.17 For verily (the true nature) of action (enjoined by the scriptures) should be known, also (that) \nof forbidden (or unlawful) action, and of inaction; hard to understand is the nature (path) of action.",
    hindi:
      "।।4.17।। कर्म का (स्वरूप) जानना चाहिये और विकर्म का (स्वरूप) भी जानना चाहिये ; (बोद्धव्यम्) तथा अकर्म का भी (स्वरूप) जानना चाहिये (क्योंकि) कर्म की गति गहन है।।",
    commentary: "A simple summary of verse 4.17",
  },
  {
    chapter: 4,
    verse: 18,
    sanskrit:
      "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः |\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् ||४-१८||",
    english:
      "4.18 He who seeth inaction in action and action in inaction, he is wise among men; he is a Yogi and performer of all actions.",
    hindi:
      "।।4.18।। जो पुरुष कर्म में अकर्म और अकर्म में कर्म देखता है,  वह मनुष्यों में बुद्धिमान है,  वह योगी सम्पूर्ण कर्मों को करने वाला है।।",
    commentary: "A simple summary of verse 4.18",
  },
  {
    chapter: 4,
    verse: 19,
    sanskrit:
      "यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः |\nज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः ||४-१९||",
    english:
      "4.19 He whose undertakings are all devoid of desires and (selfish) purposes and whose actions have been burnt by the fire of knowledge,  him the wise call a sage.",
    hindi:
      "।।4.19।। जिसके समस्त कार्य कामना और संकल्प से रहित हैं,  ऐसे उस ज्ञानरूप अग्नि के द्वारा भस्म हुये कर्मों वाले पुरुष को ज्ञानीजन पण्डित कहते हैं।।",
    commentary: "A simple summary of verse 4.19",
  },
  {
    chapter: 4,
    verse: 20,
    sanskrit:
      "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः |\nकर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः ||४-२०||",
    english:
      "4.20 Having abandoned attachment to the fruits of the action, ever content, depending on nothing, he does not do anything though engaged in activity.",
    hindi:
      "।।4.20।। जो पुरुष,  कर्मफलासक्ति को त्यागकर,  नित्यतृप्त और सब आश्रयों से रहित है वह कर्म में प्रवृत्त होते हुए भी (वास्तव में) कुछ भी नहीं करता है।।",
    commentary: "A simple summary of verse 4.20",
  },
  {
    chapter: 4,
    verse: 21,
    sanskrit:
      "निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः |\nशारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम् ||४-२१||",
    english:
      "4.21 Without hope and with the mind and the self controlled, having abandoned all covetousness, doing mere bodily action, he incurs no sin.",
    hindi:
      "।।4.21।। जो आशा रहित है तथा जिसने चित्त और आत्मा (शरीर) को संयमित किया है,  जिसने सब परिग्रहों का त्याग किया है,  ऐसा पुरुष शारीरिक कर्म करते हुए भी पाप को नहीं प्राप्त होता है।।",
    commentary: "A simple summary of verse 4.21",
  },
  {
    chapter: 4,
    verse: 22,
    sanskrit:
      "यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः |\nसमः सिद्धावसिद्धौ च कृत्वापि न निबध्यते ||४-२२||",
    english:
      "4.22 Content with what comes to him without effort, free from the pairs of opposites and envy, even-minded in success and failure, though acting, he is not bound.",
    hindi:
      "।।4.22।। यदृच्छया (अपने आप) जो कुछ प्राप्त हो उसमें ही सन्तुष्ट रहने वाला,  द्वन्द्वों से अतीत तथा मत्सर से रहित,  सिद्धि व असिद्धि में समभाव वाला पुरुष कर्म करके भी नहीं बन्धता है।।",
    commentary: "A simple summary of verse 4.22",
  },
  {
    chapter: 4,
    verse: 23,
    sanskrit:
      "गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः |\nयज्ञायाचरतः कर्म समग्रं प्रविलीयते ||४-२३||",
    english:
      "4.23 To one who is devoid of attchment, who is liberated, whose mind is established in knowledge, who works for the sake of sacrifice (for the sake of God), the whole action is dissolved.",
    hindi:
      "।।4.23।। जो आसक्तिरहित और मुक्त है,  जिसका चित्त ज्ञान में स्थित है,  यज्ञ के लिये आचरण करने वाले ऐसे पुरुष के समस्त कर्म लीन हो जाते हैं।।",
    commentary: "A simple summary of verse 4.23",
  },
  {
    chapter: 4,
    verse: 24,
    sanskrit:
      "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् |\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ||४-२४||",
    english:
      "4.24 Brahman is the oblation; Brahman is the melted butter (ghee); by Brahman is the oblation poured into the fire of Brahman; Brahman verily shall be reached by him who always sees Brahman in action.",
    hindi:
      "।।4.24।। अर्पण (अर्थात् अर्पण करने का साधन श्रुवा) ब्रह्म है और हवि (शाकल्य अथवा हवन करने योग्य द्रव्य) भी ब्रह्म है;  ब्रह्मरूप अग्नि में ब्रह्मरूप कर्ता के द्वारा जो हवन किया गया है,  वह भी ब्रह्म ही है। इस प्रकार ब्रह्मरूप कर्म में समाधिस्थ पुरुष का गन्तव्य भी ब्रह्म ही है।।",
    commentary: "A simple summary of verse 4.24",
  },
  {
    chapter: 4,
    verse: 25,
    sanskrit:
      "दैवमेवापरे यज्ञं योगिनः पर्युपासते |\nब्रह्माग्नावपरे यज्ञं यज्ञेनैवोपजुह्वति ||४-२५||",
    english:
      "4.25 Some Yogies perform sacrifice to the gods alone; while others (who have realised the Self) offer the self as sacrifice by the Self in the fire of Brahman alone.",
    hindi:
      "।।4.25।। कोई योगीजन देवताओं के पूजनरूप यज्ञ को ही करते हैं ; और दूसरे (ज्ञानीजन) ब्रह्मरूप अग्नि में यज्ञ के द्वारा यज्ञ को हवन करते हैं।।",
    commentary: "A simple summary of verse 4.25",
  },
  {
    chapter: 4,
    verse: 26,
    sanskrit:
      "श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति |\nशब्दादीन्विषयानन्य इन्द्रियाग्निषु जुह्वति ||४-२६||",
    english:
      "4.26 Some again offer the organ of hearing and other senses as sacrifice in the fire of restraint; others offer sound and other objects of the senses as sacrifice in the fire of the senses.",
    hindi:
      "।।4.26।। अन्य (योगीजन) श्रोत्रादिक सब इन्द्रियों को संयमरूप अग्नि में हवन करते हैं,  और अन्य (लोग) शब्दादिक विषयों को इन्द्रियरूप अग्नि में हवन करते हैं।।",
    commentary: "A simple summary of verse 4.26",
  },
  {
    chapter: 4,
    verse: 27,
    sanskrit:
      "सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे |\nआत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते ||४-२७||",
    english:
      "4.27 Others again sacrifice all the functions of the senses and those of the breath (vital energy or Prana) in the fire of the Yoga of self-restraint kindled by knowledge.",
    hindi:
      "।।4.27।। दूसरे (योगीजन) सम्पूर्ण इन्द्रियों के तथा प्राणों के कर्मों को ज्ञान से प्रकाशित आत्मसंयमयोगरूप अग्नि में हवन करते हैं।।",
    commentary: "A simple summary of verse 4.27",
  },
  {
    chapter: 4,
    verse: 28,
    sanskrit:
      "द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे |\nस्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः ||४-२८||",
    english:
      "4.28 Others again offer wealth, austerity and Yoga as sacrifice, while the ascetics of self-restraint and rigid vows offer study of scriptures and knowledge as sacrifice.",
    hindi:
      "।।4.28।। कुछ (साधक) द्रव्ययज्ञ, तपयज्ञ और योगयज्ञ करने वाले होते हैं;  और दूसरे कठिन व्रत करने वाले स्वाध्याय और ज्ञानयज्ञ करने वाले योगीजन होते हैं।।",
    commentary: "A simple summary of verse 4.28",
  },
  {
    chapter: 4,
    verse: 29,
    sanskrit:
      "अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे |\nप्राणापानगती रुद्ध्वा प्राणायामपरायणाः ||४-२९||",
    english:
      "4.29 Others offer as sacrifice the outgoing breath in the incoming, and the incoming in the outgoing, restraining the course of the outgoing and the incoming breaths, solely absorbed in the restraint of the breath.",
    hindi:
      "।।4.29।। अन्य (योगीजन) अपानवायु में प्राणवायु को हवन करते हैं,  तथा प्राण में अपान की आहुति देते हैं,  प्राण और अपान की गति को रोककर,  वे प्राणायाम के ही समलक्ष्य समझने वाले होते हैं।।",
    commentary: "A simple summary of verse 4.29",
  },
  {
    chapter: 4,
    verse: 30,
    sanskrit:
      "अपरे नियताहाराः प्राणान्प्राणेषु जुह्वति |\nसर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः ||४-३०||",
    english:
      "4.30 Others who regulate their diet offer life-breaths in life-breaths. All these are knowers of sacrifice, whose sins are destroyed by sacrifice.",
    hindi:
      "।।4.30।। दूसरे नियमित आहार करने वाले (साधक जन) प्राणों को प्राणों में हवन करते हैं। ये सभी यज्ञ को जानने वाले हैं, जिनके पाप यज्ञ के द्वारा नष्ट हो चुके हैं।।",
    commentary: "A simple summary of verse 4.30",
  },
  {
    chapter: 4,
    verse: 31,
    sanskrit:
      "यज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम् |\nनायं लोकोऽस्त्ययज्ञस्य कुतोऽन्यः कुरुसत्तम ||४-३१||",
    english:
      "4.31 Those who eat the remnants of the sacrifice, which are like nectar, go to the eternal Brahman. This world is not for the man who does not perform sacrifice; how then can he have the other, O Arjuna?",
    hindi:
      "।।4.31।। हे कुरुश्रेष्ठ ! यज्ञ के अवशिष्ट अमृत को भोगने वाले पुरुष सनातन ब्रह्म को प्राप्त होते हैं। यज्ञ रहित पुरुष को यह लोक भी नहीं मिलता,  फिर परलोक कैसे मिलेगा?",
    commentary: "A simple summary of verse 4.31",
  },
  {
    chapter: 4,
    verse: 32,
    sanskrit:
      "एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे |\nकर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे ||४-३२||",
    english:
      "4.32 Thus, manifold sacrifices are spread out before Brahman (literally) at the mouth or face of Brahman). Know them all as born of action and thus knowing, thou shalt be liberated.",
    hindi:
      "।।4.32।। ऐसे अनेक प्रकार के यज्ञों का ब्रह्मा के मुख अर्थात् वेदों में प्रसार है अर्थात् वर्णित हैं। उन सब को कर्मों से उत्पन्न हुए जानो;  इस प्रकार जानकर तुम मुक्त हो जाओगे।।",
    commentary: "A simple summary of verse 4.32",
  },
  {
    chapter: 4,
    verse: 33,
    sanskrit:
      "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप |\nसर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते ||४-३३||",
    english: "Swami Sivananda did not comment on this sloka",
    hindi:
      "।।4.33।। हे परन्तप ! द्रव्यों से सम्पन्न होने वाले यज्ञ की अपेक्षा ज्ञानयज्ञ श्रेष्ठ है। हे पार्थ ! सम्पूर्ण अखिल कर्म ज्ञान में समाप्त होते हैं,  अर्थात् ज्ञान उनकी पराकाष्ठा है।।",
    commentary: "A simple summary of verse 4.33",
  },
  {
    chapter: 4,
    verse: 34,
    sanskrit:
      "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया |\nउपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः ||४-३४||",
    english:
      "4.34 Know That by long prostration, by estion and by service; the wise who have realised the Truth will instruct thee in (that) knowledge.",
    hindi:
      "।।4.34।। उस (ज्ञान) को (गुरु के समीप जाकर) साष्टांग प्रणिपात,  प्रश्न तथा सेवा करके जानो;  ये तत्त्वदर्शी ज्ञानी पुरुष तुम्हें ज्ञान का उपदेश करेंगे।।",
    commentary: "A simple summary of verse 4.34",
  },
  {
    chapter: 4,
    verse: 35,
    sanskrit:
      "यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव |\nयेन भूतान्यशेषेण द्रक्ष्यस्यात्मन्यथो मयि (var अशेषाणि) ||४-३५||",
    english:
      "4.35 Knowing ï1thatï1 thou shalt not, O Arjuna, again get deluded like this; and by that thou shalt see all beings in thy Self and also in Me.",
    hindi:
      "।।4.35।। जिसको जानकर तुम पुन इस प्रकार मोह को नहीं प्राप्त होगे,  और हे पाण्डव ! जिसके द्वारा तुम भूतमात्र को अपने आत्मस्वरूप में तथा मुझमें भी देखोगे।।",
    commentary: "A simple summary of verse 4.35",
  },
  {
    chapter: 4,
    verse: 36,
    sanskrit:
      "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः |\nसर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि ||४-३६||",
    english:
      "4.36 Even if thou art the most sinful of all sinners, yet thou shalt verily cross all sins by the raft of knowledge.",
    hindi:
      "।।4.36।। यदि तुम सब पापियों से भी अधिक पाप करने वाले हो,  तो भी ज्ञानरूपी नौका द्वारा,  निश्चय ही सम्पूर्ण पापों का तुम संतरण कर जाओगे।।",
    commentary: "A simple summary of verse 4.36",
  },
  {
    chapter: 4,
    verse: 37,
    sanskrit:
      "यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन |\nज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा ||४-३७||",
    english:
      "4.37 As the blazing fire reduces fuel to ashes, O Arjuna, so does the fire of knowledge reduce all actions to ashes.",
    hindi:
      "।।4.37।। जैसे प्रज्जवलित अग्नि ईन्धन को भस्मसात् कर देती है,  वैसे ही,  हे अर्जुन ! ज्ञानरूपी अग्नि सम्पूर्ण कर्मों को भस्मसात् कर देती है।।",
    commentary: "A simple summary of verse 4.37",
  },
  {
    chapter: 4,
    verse: 38,
    sanskrit:
      "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते |\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ||४-३८||",
    english:
      "4.38 Verily, there is no purifier in this world like knowledge. He who is perfected in Yoga finds it in the Self in time.",
    hindi:
      "।।4.38।। इस लोक में ज्ञान के समान पवित्र करने वाला,  निसंदेह,  कुछ भी नहीं है। योग में संसिद्ध पुरुष स्वयं ही उसे (उचित) काल में आत्मा में प्राप्त करता है।।",
    commentary: "A simple summary of verse 4.38",
  },
  {
    chapter: 4,
    verse: 39,
    sanskrit:
      "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः |\nज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति ||४-३९||",
    english:
      "4.39 The man who is full of faith, who is devoted to it, and who has subdued the senses obtains (this) knowledge; and having obtained the knowledge he attains at once to the supreme peace.",
    hindi:
      "।।4.39।। श्रद्धावान्,  तत्पर और जितेन्द्रिय पुरुष ज्ञान प्राप्त करता है। ज्ञान को प्राप्त करके शीघ्र ही वह परम शान्ति को प्राप्त होता है।।",
    commentary: "A simple summary of verse 4.39",
  },
  {
    chapter: 4,
    verse: 40,
    sanskrit:
      "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति |\nनायं लोकोऽस्ति न परो न सुखं संशयात्मनः ||४-४०||",
    english:
      "4.40 The ignorant the faithless, the doubting self goes to destruction; there is neither this world nor the other, nor happiness for the doubting.",
    hindi:
      "।।4.40।। अज्ञानी तथा श्रद्धारहित और संशययुक्त पुरुष नष्ट हो जाता है,  (उनमें भी) संशयी पुरुष के लिये न यह लोक है,  न परलोक और न सुख।।",
    commentary: "A simple summary of verse 4.40",
  },
  {
    chapter: 4,
    verse: 41,
    sanskrit:
      "योगसंन्यस्तकर्माणं ज्ञानसञ्छिन्नसंशयम् |\nआत्मवन्तं न कर्माणि निबध्नन्ति धनञ्जय ||४-४१||",
    english:
      "4.41 He who has renounced actions by Yoga, whose doubts are rent asunder by knowledge, and who is self-possessed  actions do not bind him, O Arjuna.",
    hindi:
      "।।4.41।। जिसने योगद्वारा कर्मों का संन्यास किया है,  ज्ञानद्वारा जिसके संशय नष्ट हो गये हैं,  ऐसे आत्मवान् पुरुष को,  हे धनंजय ! कर्म नहीं बांधते हैं।।",
    commentary: "A simple summary of verse 4.41",
  },
  {
    chapter: 4,
    verse: 42,
    sanskrit:
      "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः |\nछित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत ||४-४२||",
    english:
      "4.42 Therefore with the sword of the knowledge (of the Self) cut asunder the doubt of the self born of ignorance, residing in thy heart, and take refuge in Yoga. Arise, O Arjuna.",
    hindi:
      "।।4.42।। इसलिये अपने हृदय में स्थित अज्ञान से उत्पन्न आत्मविषयक संशय को ज्ञान खड्ग से काटकर,  हे भारत ! योग का आश्रय लेकर खड़े हो जाओ।।",
    commentary: "A simple summary of verse 4.42",
  },
  {
    chapter: 5,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच |\nसंन्यासं कर्मणां कृष्ण पुनर्योगं च शंससि |\nयच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम् ||५-१||",
    english:
      "5.1 Arjuna said  Renunciation of actions, O Krishna, Thou praisest, and again Yoga. Tell me conclusively that which is the better of the two.",
    hindi:
      "।।5.1।। अर्जुन ने कहा हे --  कृष्ण ! आप कर्मों के संन्यास की और फिर योग (कर्म के आचरण) की प्रशंसा करते हैं। इन दोनों में एक जो निश्चय पूर्वक श्रेयस्कर है, उसको मेरे लिए कहिये।।",
    commentary: "A simple summary of verse 5.1",
  },
  {
    chapter: 5,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच |\nसंन्यासः कर्मयोगश्च निःश्रेयसकरावुभौ |\nतयोस्तु कर्मसंन्यासात्कर्मयोगो विशिष्यते ||५-२||",
    english:
      "5.2 The Blessed Lord said  Renunciation and the Yoga of action both lead to the highest bliss; but of the two, the Yoga of action is superior to the renunciation of action.",
    hindi:
      "।।5.2।। श्रीभगवान् ने कहा --  कर्मसंन्यास और कर्मयोग ये दोनों ही परम कल्याणकारक हैं;  परन्तु उन दोनों में कर्मसंन्यास से कर्मयोग श्रेष्ठ है।।",
    commentary: "A simple summary of verse 5.2",
  },
  {
    chapter: 5,
    verse: 3,
    sanskrit:
      "ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति |\nनिर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते ||५-३||",
    english:
      "5.3 He should be known as a perpertual Sannyasi who neither hates nor desires; for, free from the pairs of opposites, O mighty-armed Arjuna, he is easily set free from bondage.",
    hindi:
      "।।5.3।। जो पुरुष न किसी से द्वेष करता है और न किसी की आकांक्षा,  वह सदा संन्यासी ही समझने योग्य है;  क्योंकि,  हे महाबाहो ! द्वन्द्वों से रहित पुरुष सहज ही बन्धन मुक्त हो जाता है।।",
    commentary: "A simple summary of verse 5.3",
  },
  {
    chapter: 5,
    verse: 4,
    sanskrit:
      "साङ्ख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः |\nएकमप्यास्थितः सम्यगुभयोर्विन्दते फलम् ||५-४||",
    english:
      "5.4 Children, not the wise, speak of knowledge and the Yoga of action or the performance of action as though they are distinct and different; he who is truly established in one obtains the fruits of both.",
    hindi:
      "।।5.4।। बालक अर्थात् बालबुद्धि के लोग सांख्य (संन्यास) और योग को परस्पर भिन्न समझते हैं;  किसी एक में भी सम्यक् प्रकार से स्थित हुआ पुरुष दोनों के फल को प्राप्त कर लेता है।।",
    commentary: "A simple summary of verse 5.4",
  },
  {
    chapter: 5,
    verse: 5,
    sanskrit:
      "यत्साङ्ख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते |\nएकं साङ्ख्यं च योगं च यः पश्यति स पश्यति ||५-५||",
    english:
      "5.5 That place which is reached by the Sankhyas or the Jnanis is reached by the Yogis (Karma Yogis). He sees, who sees knowledge and the performance of action (Karma Yoga) as one.",
    hindi:
      "।।5.5।। जो स्थान ज्ञानियों द्वारा प्राप्त किया जाता है,  उसी स्थान पर कर्मयोगी भी पहुँचते हैं। इसलिए जो पुरुष सांख्य और योग को (फलरूप से) एक ही देखता है,  वही (वास्तव में) देखता है।।",
    commentary: "A simple summary of verse 5.5",
  },
  {
    chapter: 5,
    verse: 6,
    sanskrit:
      "संन्यासस्तु महाबाहो दुःखमाप्तुमयोगतः |\nयोगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति ||५-६||",
    english:
      "5.6 But renunciation, O mighty-armed Arjuna, is hard to attain without Yoga; the Yoga-harmonised sage ickly goes to Brahman.",
    hindi:
      "।।5.6।। परन्तु,  हे महाबाहो ! योग के बिना संन्यास प्राप्त होना कठिन है;  योगयुक्त मननशील पुरुष परमात्मा को शीघ्र ही प्राप्त होता है।।",
    commentary: "A simple summary of verse 5.6",
  },
  {
    chapter: 5,
    verse: 7,
    sanskrit:
      "योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः |\nसर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते ||५-७||",
    english:
      "5.7 He who is devoted to the path of action, whose mind is ite pure, who has conered the self, who has subdued his senses and who realises his Self as the Self in all beings, though acting, is not tainted.",
    hindi:
      "।।5.7।। जो पुरुष योगयुक्त, विशुद्ध अन्तकरण वाला, शरीर को वश में किये हुए, जितेन्द्रिय तथा भूतमात्र में स्थित आत्मा के साथ एकत्व अनुभव किये हुए है वह कर्म करते हुए भी उनसे लिप्त नहीं होता।।",
    commentary: "A simple summary of verse 5.7",
  },
  {
    chapter: 5,
    verse: 8,
    sanskrit:
      "नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित् |\nपश्यञ्शृण्वन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपञ्श्वसन् ||५-८||",
    english:
      '5.8 "I do nothing at all," thus would the harmonised knower of Truth think  seeing, hearing, touching, smelling, eating, going, sleeping, breathing.',
    hindi:
      '।।5.8।। तत्त्ववित् युक्त पुरुष यह सोचेगा (अर्थात् जानता है) कि  "मैं किंचित् मात्र कर्म नहीं करता हूँ"  देखता हुआ, सुनता हुआ, स्पर्श करता हुआ, सूंघता हुआ, खाता हुआ, चलता हुआ, सोता हुआ, श्वास लेता हुआ,।।',
    commentary: "A simple summary of verse 5.8",
  },
  {
    chapter: 5,
    verse: 9,
    sanskrit:
      "प्रलपन्विसृजन्गृह्णन्नुन्मिषन्निमिषन्नपि |\nइन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन् ||५-९||",
    english:
      "5.9 Speaking, letting go, seizing, opening and closing the eyes  convinced that the senses move among the sense-objects.",
    hindi:
      "।।5.9।। बोलता हुआ,  त्यागता हुआ,  ग्रहण करता हुआ  तथा आँखों को खोलता और बन्द करता हुआ (वह) निश्चयात्मक रूप से जानता है कि सब इन्द्रियाँ अपने-अपने विषयों में विचरण कर रही हैं।।",
    commentary: "A simple summary of verse 5.9",
  },
  {
    chapter: 5,
    verse: 10,
    sanskrit:
      "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः |\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा ||५-१०||",
    english:
      "5.10 He who does actions, offering them to Brahman, and abandoning attachment, is not tainted by sin, just as a lotus-leaf is not tainted by water.",
    hindi:
      "।।5.10।। जो पुरुष सब कर्म ब्रह्म में अर्पण करके और आसक्ति को त्यागकर करता है,  वह पुरुष कमल के पत्ते के सदृश पाप से लिप्त नहीं होता।।",
    commentary: "A simple summary of verse 5.10",
  },
  {
    chapter: 5,
    verse: 11,
    sanskrit:
      "कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि |\nयोगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वात्मशुद्धये ||५-११||",
    english:
      "5.11 Yogis, having abandoned attachment, perform actions only by the body, mind, intellect, and even by the senses, for the purification of the self.",
    hindi:
      "।।5.11।। योगीजन, शरीर, मन, बुद्धि और इन्द्रियों द्वारा आसक्ति को त्याग कर आत्मशुद्धि (चित्तशुद्धि) के लिए कर्म करते हैं।।",
    commentary: "A simple summary of verse 5.11",
  },
  {
    chapter: 5,
    verse: 12,
    sanskrit:
      "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम् |\nअयुक्तः कामकारेण फले सक्तो निबध्यते ||५-१२||",
    english:
      "5.12 The united one (the well poised or the harmonised) having abandoned the fruit of action attains to the eternal peace: the non-united only (the unsteady or the unbalanced) impelled by desire, attached to the fruit, is bound.",
    hindi:
      "।।5.12।। युक्त पुरुष कर्मफल का त्याग करके परम शान्ति को प्राप्त होता है;  और अयुक्त पुरुष फल में आसक्त हुआ कामना के द्वारा बँधता है।।",
    commentary: "A simple summary of verse 5.12",
  },
  {
    chapter: 5,
    verse: 13,
    sanskrit:
      "सर्वकर्माणि मनसा संन्यस्यास्ते सुखं वशी |\nनवद्वारे पुरे देही नैव कुर्वन्न कारयन् ||५-१३||",
    english:
      "5.13 Mentally renouncing all actions and self-controlled, the embodied one rests happily in the nine-gated city, neither acting nor causing others (body and senses) to act.",
    hindi:
      "।।5.13।। सब कर्मों का मन से संन्यास करके संयमी पुरुष नवद्वार वाली शरीर रूप नगरी में सुख से रहता हुआ न कर्म करता है और न करवाता है।।",
    commentary: "A simple summary of verse 5.13",
  },
  {
    chapter: 5,
    verse: 14,
    sanskrit:
      "न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः |\nन कर्मफलसंयोगं स्वभावस्तु प्रवर्तते ||५-१४||",
    english:
      "5.14 Neither agency nor actions does the Lord create for the world, nor union with the fruits of actions. But it is Nature that acts.",
    hindi:
      "।।5.14।। लोकमात्र के लिए प्रभु (ईश्वर) न कर्तृत्व, न कर्म और न कर्मफल के संयोग को रचता है। परन्तु प्रकृति (सब कुछ) करती है।।",
    commentary: "A simple summary of verse 5.14",
  },
  {
    chapter: 5,
    verse: 15,
    sanskrit:
      "नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः |\nअज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः ||५-१५||",
    english:
      "5.15 The Lord takes neither the demerit nor even the merit of any; knowledge is enveloped by ignorance, thery beings are deluded.",
    hindi:
      "।।5.15।। विभु परमात्मा न किसी के पापकर्म को और न पुण्यकर्म को ही ग्रहण करता है;  (किन्तु) अज्ञान से ज्ञान ढका हुआ है,  इससे सब जीव मोहित होते हैं।।",
    commentary: "A simple summary of verse 5.15",
  },
  {
    chapter: 5,
    verse: 16,
    sanskrit:
      "ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः |\nतेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम् ||५-१६||",
    english:
      "5.16 But to those whose ignorance is destroyed by the knowledge of the Self, like the sun, knowledge reveals the Supreme (Brahman).",
    hindi:
      "।।5.16।। परन्तु जिनका वह अज्ञान आत्मज्ञान से नष्ट हो जाता है,  उनके लिए वह ज्ञान,  सूर्य के सदृश,  परमात्मा को प्रकाशित करता है।।",
    commentary: "A simple summary of verse 5.16",
  },
  {
    chapter: 5,
    verse: 17,
    sanskrit:
      "तद्बुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणाः |\nगच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषाः ||५-१७||",
    english:
      "5.17 Their intellect absorbed in That, their self being That, established in That, with That for their supreme goal, they go whence there is no return, their sins dispelled by knowledge.",
    hindi:
      "।।5.17।। जिनकी बुद्धि उस (परमात्मा) में स्थित है,  जिनका मन तद्रूप हुआ है,  उसमें ही जिनकी निष्ठा है,  वह (ब्रह्म) ही जिनका परम लक्ष्य है,  ज्ञान के द्वारा पापरहित पुरुष अपुनरावृत्ति को प्राप्त होते हैं,  अर्थात् उनका पुनर्जन्म नहीं होता है।।",
    commentary: "A simple summary of verse 5.17",
  },
  {
    chapter: 5,
    verse: 18,
    sanskrit:
      "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि |\nशुनि चैव श्वपाके च पण्डिताः समदर्शिनः ||५-१८||",
    english:
      "5.18 Sages look with an eal eye on a Brahmana endowed with learning and humility, on a cow, on an elephant, and even on a dog and an outcaste.",
    hindi:
      "।।5.18।। (ऐसे वे) ज्ञानीजन विद्या और विनय से सम्पन्न ब्राह्मण,  तथा गाय,  हाथी,  श्वान और चाण्डाल में भी सम तत्त्व को देखते हैं।।",
    commentary: "A simple summary of verse 5.18",
  },
  {
    chapter: 5,
    verse: 19,
    sanskrit:
      "इहैव तैर्जितः सर्गो येषां साम्ये स्थितं मनः |\nनिर्दोषं हि समं ब्रह्म तस्माद् ब्रह्मणि ते स्थिताः ||५-१९||",
    english:
      "5.19 Even here (in this world) birth (everything) is overcome by those whose minds rest in eality; Brahman is spotless indeed and eal; therefore they are established in Brahman.",
    hindi:
      "।।5.19।। जिनका मन समत्वभाव में स्थित है,  उनके द्वारा यहीं पर यह सर्ग जीत लिया जाता है; क्योंकि ब्रह्म निर्दोष और सम है इसलिये वे ब्रह्म में ही स्थित हैं।।",
    commentary: "A simple summary of verse 5.19",
  },
  {
    chapter: 5,
    verse: 20,
    sanskrit:
      "न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम् |\nस्थिरबुद्धिरसम्मूढो ब्रह्मविद् ब्रह्मणि स्थितः ||५-२०||",
    english:
      "5.20 Resting in Brahman, with steady intellect and undeluded, the knower of Brahman neither rejoiceth on obtaining what is pleasant nor grieveth on obtaining what is unpleasant.",
    hindi:
      "।।5.20।। जो स्थिरबुद्धि,  संमोहरहित ब्रह्मवित् पुरुष ब्रह्म में स्थित है,  वह प्रिय वस्तु को प्राप्त होकर हर्षित नहीं होता और अप्रिय को पाकर उद्विग्न नहीं होता।।",
    commentary: "A simple summary of verse 5.20",
  },
  {
    chapter: 5,
    verse: 21,
    sanskrit:
      "बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम् |\nस ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते ||५-२१||",
    english:
      "5.21 With the self unattached to external contacts he finds happiness in the Self; with the self engaged in    the meditation of Brahman he attains to the endless happiness.",
    hindi:
      "।।5.21।। बाह्य विषयों में आसक्तिरहित अन्त:करण वाला पुरुष आत्मा में ही सुख प्राप्त करता है;  ब्रह्म के ध्यान में समाहित चित्त वाला पुरुष अक्षय सुख प्राप्त करता है।।",
    commentary: "A simple summary of verse 5.21",
  },
  {
    chapter: 5,
    verse: 22,
    sanskrit:
      "ये हि संस्पर्शजा भोगा दुःखयोनय एव ते |\nआद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः ||५-२२||",
    english:
      "5.22 The enjoyments that are born of contacts are only generators of pain, for they have a beginning and an end, O Arjuna; the wise man does not rejoice in them.",
    hindi:
      "।।5.22।। हे कौन्तेय (इन्द्रिय तथा विषयों के) संयोग से उत्पन्न होने वाले जो भोग हैं वे दु:ख के ही हेतु हैं, क्योंकि वे आदि-अन्त वाले हैं। बुद्धिमान् पुरुष उनमें नहीं रमता।।",
    commentary: "A simple summary of verse 5.22",
  },
  {
    chapter: 5,
    verse: 23,
    sanskrit:
      "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात् |\nकामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः ||५-२३||",
    english:
      "5.23 He who is able, while still here (in this world) to withstand, before the liberation from the body, the impulse born out of desire and anger  he is a Yogi, he is a happy man.",
    hindi:
      "।।5.23।। जो मनुष्य इसी लोक में शरीर त्यागने के पूर्व ही काम और क्रोध से उत्पन्न हुए वेग को सहन करने में समर्थ है,  वह योगी (युक्त) और सुखी मनुष्य है।।",
    commentary: "A simple summary of verse 5.23",
  },
  {
    chapter: 5,
    verse: 24,
    sanskrit:
      "योऽन्तःसुखोऽन्तरारामस्तथान्तर्ज्योतिरेव यः |\nस योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति ||५-२४||",
    english:
      "5.24 He who is happy within, who rejoices within, and who is illuminated within, that Yogi attains absolute freedom or Moksha, himself becoming Brahman.",
    hindi:
      "।।5.24।। जो पुरुष अन्तरात्मा में ही सुख वाला,  आत्मा में ही आराम वाला तथा आत्मा में ही ज्ञान वाला है,  वह योगी ब्रह्मरूप बनकर ब्रह्मनिर्वाण अर्थात् परम मोक्ष को प्राप्त होता है।।",
    commentary: "A simple summary of verse 5.24",
  },
  {
    chapter: 5,
    verse: 25,
    sanskrit:
      "लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः |\nछिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः ||५-२५||",
    english:
      "5.25 The sages (Rishis) obtain absolute freedom or Moksha  they whose sins have been destroyed, whose dualities (perception of dualities or experience of the pairs of opposites) are torn asunder, who are self-controlled, and intent on the welfare of all beings.",
    hindi:
      "।।5.25।। वे ऋषिगण मोक्ष को प्राप्त होते हैं - जिनके पाप नष्ट हो गये हैं, जो छिन्नसंशय, संयमी और भूतमात्र के हित में रमने वाले हैं।।",
    commentary: "A simple summary of verse 5.25",
  },
  {
    chapter: 5,
    verse: 26,
    sanskrit:
      "कामक्रोधवियुक्तानां यतीनां यतचेतसाम् |\nअभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम् ||५-२६||",
    english:
      "5.26 Absolute freedom (or Brahmic bliss) exists on all sides for those self-controlled ascetics who are free from desire and anger, who have controlled their thoughts and who have realised the Self.",
    hindi:
      "।।5.26।। काम और क्रोध से रहित,  संयतचित्त वाले तथा आत्मा को जानने वाले यतियों के लिए सब ओर मोक्ष (या ब्रह्मानन्द) विद्यमान रहता है।।",
    commentary: "A simple summary of verse 5.26",
  },
  {
    chapter: 5,
    verse: 27,
    sanskrit:
      "स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः |\nप्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ ||५-२७||",
    english:
      "5.27 Shutting out (all) external contacts and fixing the gaze between the eyrow, ealising the outgoing and incoming breaths moving within the nostrils.",
    hindi:
      "।।5.27।। बाह्य विषयों को बाहर ही रखकर नेत्रों की दृष्टि को भृकुटि के बीच में स्थित करके तथा नासिका में विचरने वाले प्राण और अपानवायु को सम करके,।।",
    commentary: "A simple summary of verse 5.27",
  },
  {
    chapter: 5,
    verse: 28,
    sanskrit:
      "यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायणः |\nविगतेच्छाभयक्रोधो यः सदा मुक्त एव सः ||५-२८||",
    english:
      "5.28 With the senses, the mind and the intellect (ever) controlled, having liberation as his supreme goal, free from desire, fear and anger  the sage is verily liberated for ever.",
    hindi:
      "।।5.28।। जिस पुरुष की इन्द्रियाँ,  मन और बुद्धि संयत हैं, ऐसा मोक्ष परायण मुनि इच्छा, भय और क्रोध से रहित है, वह सदा मुक्त ही है।।",
    commentary: "A simple summary of verse 5.28",
  },
  {
    chapter: 5,
    verse: 29,
    sanskrit:
      "भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम् |\nसुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति ||५-२९||",
    english:
      "5.29 He who knows Me as the enjoyer of sacrifices and austerities, the great Lord of all the worlds and the friend of all beings, attains to peace.",
    hindi:
      "।।5.29।। (साधक भक्त) मुझे यज्ञ और तपों का भोक्ता और सम्पूर्ण लोकों का महान् ईश्वर तथा भूतमात्र का सुहृद् (मित्र) जानकर शान्ति को प्राप्त होता है।।",
    commentary: "A simple summary of verse 5.29",
  },
  {
    chapter: 6,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच |\nअनाश्रितः कर्मफलं कार्यं कर्म करोति यः |\nस संन्यासी च योगी च न निरग्निर्न चाक्रियः ||६-१||",
    english:
      "6.1 The Blessed Lord said  He who performs his bounden duty without depending on the fruits of his actions  he is a Sannyasi and a Yogi; not he who is without fire and without action.",
    hindi:
      "।।6.1।। श्रीभगवान् ने कहा -- जो पुरुष कर्मफल पर आश्रित न होकर कर्तव्य कर्म करता है, वह संन्यासी और योगी है, न कि वह जिसने केवल अग्नि का और क्रियायों का त्याग किया है।।",
    commentary: "A simple summary of verse 6.1",
  },
  {
    chapter: 6,
    verse: 2,
    sanskrit:
      "यं संन्यासमिति प्राहुर्योगं तं विद्धि पाण्डव |\nन ह्यसंन्यस्तसङ्कल्पो योगी भवति कश्चन ||६-२||",
    english:
      "6.2 Do thou, O Arjuna, know Yoga to be that which they call renunciation; no one verily becomes a Yogi who has not renounced thoughts.",
    hindi:
      "।।6.2।। हे पाण्डव ! जिसको (शास्त्रवित्) संन्यास कहते हैं, उसी को तुम योग समझो; क्योंकि संकल्पों को न त्यागने वाला कोई भी पुरुष योगी नहीं होता।।",
    commentary: "A simple summary of verse 6.2",
  },
  {
    chapter: 6,
    verse: 3,
    sanskrit:
      "आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते |\nयोगारूढस्य तस्यैव शमः कारणमुच्यते ||६-३||",
    english:
      "6.3 For a sage who wishes to attain to Yoga, action is said to be the means; for the same sage who has attained to Yoga, inaction (iescence) is said to be the means.",
    hindi:
      "।।6.3।। योग में आरूढ़ होने की इच्छा वाले मुनि के लिए कर्म करना ही हेतु (साधन) कहा है और योगारूढ़ हो जाने पर उसी पुरुष के लिए शम को (शांति, संकल्पसंन्यास) साधन कहा गया है।।",
    commentary: "A simple summary of verse 6.3",
  },
  {
    chapter: 6,
    verse: 4,
    sanskrit:
      "यदा हि नेन्द्रियार्थेषु न कर्मस्वनुषज्जते |\nसर्वसङ्कल्पसंन्यासी योगारूढस्तदोच्यते ||६-४||",
    english:
      "6.4 When a man is not attached to the sense-objects or to actions, having renounced all thoughts, then he is said to have attained to Yoga.",
    hindi:
      "।।6.4।। जब (साधक) न इन्द्रियों के विषयों में और न कर्मों में आसक्त होता है तब सर्व संकल्पों के संन्यासी को योगारूढ़ कहा जाता है।।",
    commentary: "A simple summary of verse 6.4",
  },
  {
    chapter: 6,
    verse: 5,
    sanskrit:
      "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् |\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ||६-५||",
    english:
      "6.5 One should raise oneself by one's Self alone; let not one lower oneself; for the Self alone is the friend of oneself, and the Self alone is the enemy of oneself.",
    hindi:
      "।।6.5।। मनुष्य को अपने द्वारा अपना उद्धार करना चाहिये और अपना अध: पतन नहीं करना चाहिये; क्योंकि आत्मा ही आत्मा का मित्र है और आत्मा (मनुष्य स्वयं) ही आत्मा का (अपना) शत्रु है।।",
    commentary: "A simple summary of verse 6.5",
  },
  {
    chapter: 6,
    verse: 6,
    sanskrit:
      "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः |\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत् ||६-६||",
    english:
      "6.6 The Self is the friend of the self of him by whom the self has been conered by the Self, but to the unconered self, this Self stands in the position of an enemy, like an (external) foe.",
    hindi:
      "।।6.6।। जिसने आत्मा (इंद्रियों,आदि) को आत्मा के द्वारा जीत लिया है, उस पुरुष का आत्मा उसका मित्र होता है, परन्तु अजितेन्द्रिय के लिए आत्मा शत्रु के समान स्थित होता है।।",
    commentary: "A simple summary of verse 6.6",
  },
  {
    chapter: 6,
    verse: 7,
    sanskrit:
      "जितात्मनः प्रशान्तस्य परमात्मा समाहितः |\nशीतोष्णसुखदुःखेषु तथा मानापमानयोः ||६-७||",
    english:
      "6.7 The Supreme Self of him who is self-controlled and peaceful is balanced in cold and heat, pleasure and pain, as also in honour and dishonour.",
    hindi:
      "।।6.7।। शीत-उष्ण, सुख-दु:ख तथा मान-अपमान में जो प्रशान्त रहता है, ऐसे जितात्मा पुरुष के लिये परमात्मा सम्यक् प्रकार से स्थित है, अर्थात्, आत्मरूप से विद्यमान है।।",
    commentary: "A simple summary of verse 6.7",
  },
  {
    chapter: 6,
    verse: 8,
    sanskrit:
      "ज्ञानविज्ञानतृप्तात्मा कूटस्थो विजितेन्द्रियः |\nयुक्त इत्युच्यते योगी समलोष्टाश्मकाञ्चनः ||६-८||",
    english:
      "6.8 The Yogi who is satisfied with the knowledge and the wisdom (of the Self), who has conered the senses, and to whom a clod of earth, a piece of stone and gold are the same, is said to be harmonied (i.e., is said to have attained Nirvikalpa Samadhi).",
    hindi:
      "।।6.8।। जो योगी ज्ञान और विज्ञान से तृप्त है, जो विकार रहित (कूटस्थ) और जितेन्द्रिय है, जिसको मिट्टी, पाषाण और कंचन समान है, वह (परमात्मा से) युक्त कहलाता है।।",
    commentary: "A simple summary of verse 6.8",
  },
  {
    chapter: 6,
    verse: 9,
    sanskrit:
      "सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु |\nसाधुष्वपि च पापेषु समबुद्धिर्विशिष्यते ||६-९||",
    english:
      "6.9 He who is of the same mind to the good-hearted, friends, enemies, the indifferent, the neutral, the hateful, the relatives, the righteous and the unrighteous, excels.",
    hindi:
      "।।6.9।। जो पुरुष सुहृद्, मित्र, शत्रु, उदासीन, मध्यस्थ, द्वेषी और बान्धवों में तथा धर्मात्माओं में और पापियों में भी समान भाव वाला है, वह श्रेष्ठ है।।",
    commentary: "A simple summary of verse 6.9",
  },
  {
    chapter: 6,
    verse: 10,
    sanskrit:
      "योगी युञ्जीत सततमात्मानं रहसि स्थितः |\nएकाकी यतचित्तात्मा निराशीरपरिग्रहः ||६-१०||",
    english:
      "6.10 Let the Yogi try constantly to keep the mind steady, remaining in solitude, alone, with the mind and the body controlled, and free from hope and covetousness.",
    hindi:
      "।।6.10।। शरीर और मन को संयमित किया हुआ योगी एकान्त स्थान पर अकेला रहता हुआ आशा और परिग्रह से मुक्त होकर निरन्तर मन को आत्मा में स्थिर करे।।",
    commentary: "A simple summary of verse 6.10",
  },
  {
    chapter: 6,
    verse: 11,
    sanskrit:
      "शुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मनः |\nनात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम् ||६-११||",
    english:
      "6.11 In a clean spot, having established a firm seat of his own, neither too high nor too low, made of a cloth, a skin and Kusa-grass, one over the other.",
    hindi:
      "।।6.11।। शुद्ध (स्वच्छ) भूमि में कुश, मृगशाला और उस पर वस्त्र रखा हो ऐसे अपने आसन को न अति ऊँचा और न अति नीचा स्थिर स्थापित करके....৷৷.।।",
    commentary: "A simple summary of verse 6.11",
  },
  {
    chapter: 6,
    verse: 12,
    sanskrit:
      "तत्रैकाग्रं मनः कृत्वा यतचित्तेन्द्रियक्रियः |\nउपविश्यासने युञ्ज्याद्योगमात्मविशुद्धये ||६-१२||",
    english:
      "6.12 There, having made the mind one-pointed, with the actions of the mind and the senses controlled, let him, seated on the seat, practise Yoga for the purification of the self.",
    hindi:
      "।।6.12।। वहाँ (आसन में बैठकर) मन को एकाग्र करके, चित्त और इन्द्रियों की क्रियाओं को वश में किये हुये आत्मशुद्धि के लिए योग का अभ्यास करे।।",
    commentary: "A simple summary of verse 6.12",
  },
  {
    chapter: 6,
    verse: 13,
    sanskrit:
      "समं कायशिरोग्रीवं धारयन्नचलं स्थिरः |\nसम्प्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन् ||६-१३||",
    english:
      "6.13 Let him firmly hold his body, head and neck erect and still, gazing at the tip of his nose, without looking around.",
    hindi:
      "।।6.13।। काया, सिर और ग्रीवा को समान और अचल धारण किये हुए स्थिर होकर अपनी नासिका के अग्र भाग को देखकर अन्य दिशाओं को न देखता हुआ।।",
    commentary: "A simple summary of verse 6.13",
  },
  {
    chapter: 6,
    verse: 14,
    sanskrit:
      "प्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थितः |\nमनः संयम्य मच्चित्तो युक्त आसीत मत्परः ||६-१४||",
    english:
      "6.14 Serene-minded, fearless, firm in the vow of a Brahmachari, having controlled the mind, thinking of Me and balanced in mind, let him sit, having Me as his supreme goal.",
    hindi:
      "।।6.14।। (साधक को) प्रशान्त अन्त:करण, निर्भय और ब्रह्मचर्य ब्रत में स्थित होकर, मन को संयमित करके चित्त को मुझमें लगाकर मुझे ही परम लक्ष्य समझकर बैठना चाहिए।।",
    commentary: "A simple summary of verse 6.14",
  },
  {
    chapter: 6,
    verse: 15,
    sanskrit:
      "युञ्जन्नेवं सदात्मानं योगी नियतमानसः |\nशान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति ||६-१५||",
    english:
      "6.15 Thus always keeping the mind balanced, the Yogi, with the mind controlled, attains to the peace abiding in Me, which culminates in liberation.",
    hindi:
      "।।6.15।। इस प्रकार सदा मन को स्थिर करने का प्रयास करता हुआ संयमित मन का योगी मुझमें स्थित परम निर्वाण (मोक्ष) स्वरूप शांति को प्राप्त होता है।।",
    commentary: "A simple summary of verse 6.15",
  },
  {
    chapter: 6,
    verse: 16,
    sanskrit:
      "नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः |\nन चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन ||६-१६||",
    english:
      "6.16 Verily Yoga is not possible for him who eats too much, nor for him who does not eat at all, nor for him who sleeps too much, nor for him who is (always) awake, O Arjuna.",
    hindi:
      "।।6.16।। परन्तु, हे अर्जुन ! यह योग उस पुरुष के लिए सम्भव नहीं होता, जो अधिक खाने वाला है या बिल्कुल न खाने वाला है तथा जो अधिक सोने वाला है या सदा जागने वाला है।।",
    commentary: "A simple summary of verse 6.16",
  },
  {
    chapter: 6,
    verse: 17,
    sanskrit:
      "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु |\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा ||६-१७||",
    english:
      "6.17 Yoga becomes the destroyer of pain for him who is moderate in eating and recreation (such \nas walking, etc.), who is moderate in exertion in actions, who is moderate in sleep and wakefulness.",
    hindi:
      "।।6.17।। उस पुरुष के लिए योग दु:खनाशक होता है, जो युक्त आहार और विहार करने वाला है, यथायोग्य चेष्टा करने वाला है और परिमित शयन और जागरण करने वाला है।।",
    commentary: "A simple summary of verse 6.17",
  },
  {
    chapter: 6,
    verse: 18,
    sanskrit:
      "यदा विनियतं चित्तमात्मन्येवावतिष्ठते |\nनिःस्पृहः सर्वकामेभ्यो युक्त इत्युच्यते तदा ||६-१८||",
    english:
      "6.18 When the perfectly controlled mind rests in the Self only, free from longing for all the objects of desires, then it is said, 'He is united'.",
    hindi:
      "।।6.18।। वश में किया हुआ चित्त जिस कालमें अपने स्वरुपमें ही स्थित हो जाता है और स्वयं सम्पूर्ण पदार्थों नि: स्पृह हो जाता है, उस कालमें वह योगी कहा जाता है।",
    commentary: "A simple summary of verse 6.18",
  },
  {
    chapter: 6,
    verse: 19,
    sanskrit:
      "यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता |\nयोगिनो यतचित्तस्य युञ्जतो योगमात्मनः ||६-१९||",
    english:
      "6.19 As a lamp placed in a windless spot does not flicker  to such is compared the Yogi of controlled mind, practising Yoga in the Self (or absorbed in the Yoga of the Self).",
    hindi:
      "।।6.19।। जैसे स्पन्दनरहित वायुके स्थानमें स्थित दीपककी लौ चेष्टारहित हो जाती है, योगका अभ्यास करते हुए यतचित्तवाले योगीके चित्तकी वैसी ही उपमा कही गयी है।।",
    commentary: "A simple summary of verse 6.19",
  },
  {
    chapter: 6,
    verse: 20,
    sanskrit:
      "यत्रोपरमते चित्तं निरुद्धं योगसेवया |\nयत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति ||६-२०||",
    english:
      "6.20 When the mind, restrained by the practice of Yoga attains to quietude and when seeing the Self by the self, he is satisfied in his own Self.",
    hindi:
      "।।6.20।। योगका सेवन करनेसे जिस अवस्थामें निरुध्द चित्त उपराम हो जाता है तथा जिस अवस्थामें स्वयं अपने-आपमें अपने-आपको देखता हुआ अपने-आपमें सन्तुष्ट हो जाता है।।",
    commentary: "A simple summary of verse 6.20",
  },
  {
    chapter: 6,
    verse: 21,
    sanskrit:
      "सुखमात्यन्तिकं यत्तद् बुद्धिग्राह्यमतीन्द्रियम् |\nवेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वतः ||६-२१||",
    english:
      "6.21 When he (the Yogi) feels that Infinite Bliss which can be grasped by the (pure) intellect and which transcends the senses, and established wherein he never moves from the Reality.",
    hindi:
      "।।6.21।। जो सुख आत्यन्तिक, अतीन्द्रिय और बुध्दिग्राह्म है, उस सुखका जिस अवस्थामें अनुभव करता है और जिस सुखमें स्थित हुआ यह ध्यानयोगी फिर कभी तत्वसे विचलित नहीं होता है।।",
    commentary: "A simple summary of verse 6.21",
  },
  {
    chapter: 6,
    verse: 22,
    sanskrit:
      "यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः |\nयस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते ||६-२२||",
    english:
      "6.22 Which, having obtained, he thinks there is no other gain superior to it; wherein estabished, he is not moved even by heavy sorrow.",
    hindi:
      "।।6.22।। जिस लाभकी प्राप्ति होनेपर उससे अधिक कोई दूसरा लाभ उसके माननेमें भी नहीं आता और जिसमें स्थित होनेपर वह बड़े भारी दु:ख से भी विचलित नहीं होता है।।",
    commentary: "A simple summary of verse 6.22",
  },
  {
    chapter: 6,
    verse: 23,
    sanskrit:
      "तं विद्याद् दुःखसंयोगवियोगं योगसंज्ञितम् |\nस निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा ||६-२३||",
    english:
      "6.23 Let that be known by the name of Yoga, the severance from union with pain. This Yoga should be practised with determination and with an undesponding mind.",
    hindi:
      "।।6.23।। दु:ख के संयोग से वियोग है, उसीको 'योग' नामसे जानना चाहिये । (वह योग जिस ध्यानयोग लक्ष्य है,) उस ध्यानयोका अभ्यास न उकताये हुए चित्तसे   निश्चयपूर्वक करना चाहिये।।",
    commentary: "A simple summary of verse 6.23",
  },
  {
    chapter: 6,
    verse: 24,
    sanskrit:
      "सङ्कल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः |\nमनसैवेन्द्रियग्रामं विनियम्य समन्ततः ||६-२४||",
    english:
      "6.24 Abandoning without reserve all desires born of Sankalpa (thought and imagination) and completely restraining the whole group of the senses by the mind from all sides.",
    hindi:
      "।।6.24।। संकल्प से उत्पन्न समस्त कामनाओं को नि:शेष रूप से परित्याग कर मन के द्वारा इन्द्रिय समुदाय को सब ओर से सम्यक् प्रकार वश में करके।।",
    commentary: "A simple summary of verse 6.24",
  },
  {
    chapter: 6,
    verse: 25,
    sanskrit:
      "शनैः शनैरुपरमेद् बुद्ध्या धृतिगृहीतया |\nआत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत् ||६-२५||",
    english:
      "6.25 Little by little let him attain to ietude by the intellect held firmly; having made the mind establish itself in the Self, let him not think of anything.",
    hindi:
      "।।6.25।। शनै: शनै: धैर्ययुक्त बुद्धि के द्वारा (योगी) उपरामता (शांति) को प्राप्त होवे;  मन को आत्मा में स्थित करके फिर अन्य कुछ भी चिन्तन न करे।।",
    commentary: "A simple summary of verse 6.25",
  },
  {
    chapter: 6,
    verse: 26,
    sanskrit:
      "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् |\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत् ||६-२६||",
    english:
      "6.26 From whatever cause the restless and unsteady mind wanders away, from that let him restrain it and bring it under the control of the Self alone.",
    hindi:
      "।।6.26।। यह चंचल और अस्थिर मन जिन कारणों से (विषयों में) विचरण करता है, उनसे संयमित करके उसे आत्मा के ही वश में लावे अर्थात् आत्मा में स्थिर करे।।",
    commentary: "A simple summary of verse 6.26",
  },
  {
    chapter: 6,
    verse: 27,
    sanskrit:
      "प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम् |\nउपैति शान्तरजसं ब्रह्मभूतमकल्मषम् ||६-२७||",
    english:
      "6.27 Supreme Bliss verily comes to this Yogi whose mind is ite peaceful, whose passion is ieted, who has become Brahman and who is free from sin.",
    hindi:
      "।।6.27।। जिसका मन प्रशान्त है, जो पापरहित (अकल्मषम्) है और जिसका रजोगुण (विक्षेप) शांत हुआ है, ऐसे ब्रह्मरूप हुए इस योगी को उत्तम सुख प्राप्त होता है।।",
    commentary: "A simple summary of verse 6.27",
  },
  {
    chapter: 6,
    verse: 28,
    sanskrit:
      "युञ्जन्नेवं सदात्मानं योगी विगतकल्मषः |\nसुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते ||६-२८||",
    english:
      "6.28 The Yogi, always engaging the mind thus (in the practice of Yoga), freed from sins, easily enjoys the Infinite Bliss of contact with Brahman (the Eternal).",
    hindi:
      "।।6.28।। इस प्रकार मन को सदा आत्मा में स्थिर करने का योग करने वाला पापरहित योगी सुखपूर्वक ब्रह्मसंस्पर्श का परम सुख प्राप्त करता है।।",
    commentary: "A simple summary of verse 6.28",
  },
  {
    chapter: 6,
    verse: 29,
    sanskrit:
      "सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि |\nईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः ||६-२९||",
    english:
      "6.29 With the mind harmonised by Yoga he sees the Self abiding in all beings and all beings in the Self; he sees the same everywhere.",
    hindi:
      "।।6.29।। योगयुक्त अन्त:करण वाला और सर्वत्र समदर्शी योगी आत्मा को सब भूतों में और भूतमात्र को आत्मा में देखता है।।",
    commentary: "A simple summary of verse 6.29",
  },
  {
    chapter: 6,
    verse: 30,
    sanskrit:
      "यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति |\nतस्याहं न प्रणश्यामि स च मे न प्रणश्यति ||६-३०||",
    english:
      "6.30 He who sees Me everywhere and sees everything in Me, he never becomes separated from Me, nor do I become separated from him.",
    hindi:
      "।।6.30।। जो पुरुष मुझे सर्वत्र देखता है और सबको मुझमें देखता है, उसके लिए मैं नष्ट नहीं होता (अर्थात् उसके लिए मैं दूर नहीं होता) और वह मुझसे वियुक्त नहीं होता।।",
    commentary: "A simple summary of verse 6.30",
  },
  {
    chapter: 6,
    verse: 31,
    sanskrit:
      "सर्वभूतस्थितं यो मां भजत्येकत्वमास्थितः |\nसर्वथा वर्तमानोऽपि स योगी मयि वर्तते ||६-३१||",
    english:
      "6.31 He who, being established in unity, worships Me Who dwells in all beings, that Yogi abides in Me, whatever may be his mode of living.",
    hindi:
      "।।6.31।। जो पुरुष एकत्वभाव मंे स्थित हुआ सम्पूर्ण भूतों में स्थित मुझे भजता है, वह योगी सब प्रकार से वर्तता हुआ (रहता हुआ) मुझमें स्थित रहता है।।",
    commentary: "A simple summary of verse 6.31",
  },
  {
    chapter: 6,
    verse: 32,
    sanskrit:
      "आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन |\nसुखं वा यदि वा दुःखं स योगी परमो मतः ||६-३२||",
    english:
      "6.32 He who, through the likeness of the Self, O Arjuna, sees eality everywhere, be it pleasure or pain, he is regarded as the highest Yogi.",
    hindi:
      "।।6.32।। हे अर्जुन ! जो पुरुष अपने समान सर्वत्र सम देखता है, चाहे वह सुख हो या दु:ख, वह परम योगी माना गया है।।",
    commentary: "A simple summary of verse 6.32",
  },
  {
    chapter: 6,
    verse: 33,
    sanskrit:
      "अर्जुन उवाच |\nयोऽयं योगस्त्वया प्रोक्तः साम्येन मधुसूदन |\nएतस्याहं न पश्यामि चञ्चलत्वात्स्थितिं स्थिराम् ||६-३३||",
    english:
      "6.33 Arjuna said  This Yoga of eanimity taught by Thee, O Krishna, I do not see its steady continuance, because of the restlessness (of the mind).",
    hindi:
      "।।6.33।। अर्जुन ने कहा --  हे मधुसूदन ! जो यह साम्य योग आपने कहा, मैं मन के चंचल होने से इसकी चिरस्थायी स्थिति को नहीं देखता हूं।।",
    commentary: "A simple summary of verse 6.33",
  },
  {
    chapter: 6,
    verse: 34,
    sanskrit:
      "चञ्चलं हि मनः कृष्ण प्रमाथि बलवद् दृढम् |\nतस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम् ||६-३४||",
    english:
      "6.34 The mind verily is restless, turbulent, strong and unyielding, O Krishna: I deem it as difficult to control it as to control the wind.",
    hindi:
      "।।6.34।। क्योंकि हे कृष्ण ! यह मन चंचल और प्रमथन स्वभाव का तथा बलवान् और दृढ़ है; उसका निग्रह करना मैं वायु के समान अति दुष्कर मानता हूँ ।।",
    commentary: "A simple summary of verse 6.34",
  },
  {
    chapter: 6,
    verse: 35,
    sanskrit:
      "श्रीभगवानुवाच |\nअसंशयं महाबाहो मनो दुर्निग्रहं चलम् |\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ||६-३५||",
    english:
      "6.35 The Blessed Lord said  Undoubtedly, O mighty-armed Arjuna, the mind is difficult to control and restless; but by practice and by dispassion it may be restrained.",
    hindi:
      "।।6.35।। श्रीभगवान् कहते हैं --  हे महबाहो ! नि:सन्देह मन चंचल और कठिनता से वश में होने वाला है; परन्तु, हे कुन्तीपुत्र ! उसे अभ्यास और वैराग्य के द्वारा वश में किया जा सकता है।।",
    commentary: "A simple summary of verse 6.35",
  },
  {
    chapter: 6,
    verse: 36,
    sanskrit:
      "असंयतात्मना योगो दुष्प्राप इति मे मतिः |\nवश्यात्मना तु यतता शक्योऽवाप्तुमुपायतः ||६-३६||",
    english:
      "6.36 I think Yoga is hard to be attained by one of uncontrolled self, but the self-controlled and striving one can attain to it by the (proper) means.",
    hindi:
      "।।6.36।। असंयत मन के पुरुष द्वारा योग प्राप्त होना कठिन है, परन्तु स्वाधीन मन वाले प्रयत्नशील पुरुष द्वारा उपाय से योग प्राप्त होना संभव है, यह मेरा मत है।।",
    commentary: "A simple summary of verse 6.36",
  },
  {
    chapter: 6,
    verse: 37,
    sanskrit:
      "अर्जुन उवाच |\nअयतिः श्रद्धयोपेतो योगाच्चलितमानसः |\nअप्राप्य योगसंसिद्धिं कां गतिं कृष्ण गच्छति ||६-३७||",
    english:
      "6.37 Arjuna said  He who is unable to control himself though he has the faith, and whose mind wanders away from Yoga, what end does he, having failed to attain perfection in Yoga, mee,t O Krishna?",
    hindi:
      "।।6.37।। अर्जुन ने कहा -- हे कृष्ण ! जिसका मन योग से चलायमान हो गया है, ऐसा अपूर्ण प्रयत्न वाला (अयति) श्रद्धायुक्त पुरुष योग की सिद्धि को न प्राप्त होकर किस गति को प्राप्त होता है?",
    commentary: "A simple summary of verse 6.37",
  },
  {
    chapter: 6,
    verse: 38,
    sanskrit:
      "कच्चिन्नोभयविभ्रष्टश्छिन्नाभ्रमिव नश्यति |\nअप्रतिष्ठो महाबाहो विमूढो ब्रह्मणः पथि ||६-३८||",
    english: "Swami Sivananda did not comment on this sloka",
    hindi:
      "।।6.38।। हे महबाहो ! क्या वह ब्रह्म के मार्ग में मोहित तथा आश्रयरहित पुरुष छिन्न-भिन्न मेघ के समान दोनों ओर से भ्रष्ट हुआ नष्ट तो नहीं हो जाता है?",
    commentary: "A simple summary of verse 6.38",
  },
  {
    chapter: 6,
    verse: 39,
    sanskrit:
      "एतन्मे संशयं कृष्ण छेत्तुमर्हस्यशेषतः |\nत्वदन्यः संशयस्यास्य छेत्ता न ह्युपपद्यते ||६-३९||",
    english:
      "6.39 This doubt of mine, O Krishna, do Thou dispel completely; because it is not possible for any but Thee to dispel this doubt.",
    hindi:
      "।।6.39।। हे कृष्ण ! मेरे इस संशय को नि:शेष रूप से छेदन (निराकरण) करने के लिए आप ही योग्य है; क्योंकि आपके अतिरिक्त अन्य कोई इस संशय का छेदन करन वाला (छेत्ता) मिलना संभव नहीं है।।",
    commentary: "A simple summary of verse 6.39",
  },
  {
    chapter: 6,
    verse: 40,
    sanskrit:
      "श्रीभगवानुवाच |\nपार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते |\nन हि कल्याणकृत्कश्चिद् दुर्गतिं तात गच्छति ||६-४०||",
    english:
      "6.40 The Blessed Lord said  O Arjuna, neither in this world, nor in the next world is there destruction for him; none, verily, who does good, O My son, ever comes to grief.",
    hindi:
      "।।6.40।। श्रीभगवान् ने कहा -- हे पार्थ ! उस पुरुष का, न तो इस लोक में और न ही परलोक में ही नाश होता है; हे तात ! कोई भी शुभ कर्म करने वाला दुर्गति को नहीं प्राप्त होता है।।",
    commentary: "A simple summary of verse 6.40",
  },
  {
    chapter: 6,
    verse: 41,
    sanskrit:
      "प्राप्य पुण्यकृतां लोकानुषित्वा शाश्वतीः समाः |\nशुचीनां श्रीमतां गेहे योगभ्रष्टोऽभिजायते ||६-४१||",
    english:
      "6.41 Having attained to the worlds of the righteous and having dwelt there for everlasting years, he who fell from Yoga is rorn in a house of the pure and wealthy.",
    hindi:
      "।।6.41।। योगभ्रष्ट पुरुष पुण्यवानों के लोकों को प्राप्त होकर वहाँ दीर्घकाल तक वास करके शुद्ध आचरण वाले श्रीमन्त (धनवान) पुरुषों के घर में जन्म लेता है।।",
    commentary: "A simple summary of verse 6.41",
  },
  {
    chapter: 6,
    verse: 42,
    sanskrit:
      "अथवा योगिनामेव कुले भवति धीमताम् |\nएतद्धि दुर्लभतरं लोके जन्म यदीदृशम् ||६-४२||",
    english:
      "6.42 Or he is born in a family of even the wise Yogis; verily a birth like this is very difficult to obtain in this world.",
    hindi:
      "।।6.42।। अथवा, (साधक) ज्ञानवान् योगियों के ही कुल में जन्म लेता है, परन्तु इस प्रकार का जन्म इस लोक में नि:संदेह अति दुर्लभ है।।",
    commentary: "A simple summary of verse 6.42",
  },
  {
    chapter: 6,
    verse: 43,
    sanskrit:
      "तत्र तं बुद्धिसंयोगं लभते पौर्वदेहिकम् |\nयतते च ततो भूयः संसिद्धौ कुरुनन्दन ||६-४३||",
    english:
      "6.43 Thee he comes in touch with the knowledge acired in his former body and strives more than before for perfection, O Arjuna.",
    hindi:
      "।।6.43।। हे कुरुनन्दन ! वह पुरुष वहाँ पूर्व देह में प्राप्त किये गये ज्ञान से सम्पन्न होकर योगसंसिद्धि के लिए उससे भी अधिक प्रयत्न करता है।।",
    commentary: "A simple summary of verse 6.43",
  },
  {
    chapter: 6,
    verse: 44,
    sanskrit:
      "पूर्वाभ्यासेन तेनैव ह्रियते ह्यवशोऽपि सः |\nजिज्ञासुरपि योगस्य शब्दब्रह्मातिवर्तते ||६-४४||",
    english:
      "6.44 By that very former practice he is borne on in spite of himself. Even he who merely wishes to know Yoga goes beyond the Brahmic word.",
    hindi:
      "।।6.44।। उसी पूर्वाभ्यास के कारण वह अवश हुआ योग की ओर आकर्षित होता है। योग का जो केवल जिज्ञासु है वह शब्दब्रह्म का अतिक्रमण करता है।।",
    commentary: "A simple summary of verse 6.44",
  },
  {
    chapter: 6,
    verse: 45,
    sanskrit:
      "प्रयत्नाद्यतमानस्तु योगी संशुद्धकिल्बिषः |\nअनेकजन्मसंसिद्धस्ततो याति परां गतिम् ||६-४५||",
    english:
      "6.45 But the Yogi who strives with assiduity, purified of sins and perfected gradually through many births, reaches the highest goal.",
    hindi:
      "।।6.45।। परन्तु प्रयत्नपूर्वक अभ्यास करने वाला योगी सम्पूर्ण पापों से शुद्ध होकर अनेक जन्मों से (शनै: शनै:) सिद्ध होता हुआ, तब परम गति को प्राप्त होता है।।",
    commentary: "A simple summary of verse 6.45",
  },
  {
    chapter: 6,
    verse: 46,
    sanskrit:
      "तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः |\nकर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन ||६-४६||",
    english:
      "6.46 The Yogi is thought to be superior to the ascetics and even superior to men of knowledge (obtained through the study of scriptures); he is also superior to men of action; therefore be thou a Yogi, O Arjuna.",
    hindi:
      "।।6.46।। क्योंकि योगी तपस्वियों से श्रेष्ठ है और (केवल शास्त्र के) ज्ञान वालों से भी श्रेष्ठ माना गया है तथा कर्म करने वालों से भी योगी श्रेष्ठ है, इसलिए हे अर्जुन तुम योगी बनो।।",
    commentary: "A simple summary of verse 6.46",
  },
  {
    chapter: 6,
    verse: 47,
    sanskrit:
      "योगिनामपि सर्वेषां मद्गतेनान्तरात्मना |\nश्रद्धावान्भजते यो मां स मे युक्ततमो मतः ||६-४७||",
    english:
      "6.47 And among all the Yogis he who, full of faith and with his inner self merged in Me, worships Me is deemed by Me to be the most devout.",
    hindi:
      "।।6.47।। समस्त योगियों में जो भी श्रद्धावान् योगी मुझ में युक्त हुये अन्तरात्मा से (अर्थात् एकत्व भाव से मुझे भजता है, वह मुझे युक्ततम (सर्वश्रेष्ठ) मान्य है।।",
    commentary: "A simple summary of verse 6.47",
  },
  {
    chapter: 7,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच |\nमय्यासक्तमनाः पार्थ योगं युञ्जन्मदाश्रयः |\nअसंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु ||७-१||",
    english:
      "7.1 The Blessed Lord said  O Arjuna, hear how you shall without doubt know Me fully, with the mind intent on Me, practising Yoga and taking refuge in Me.",
    hindi:
      "।।7.1।। हे पार्थ ! मुझमें असक्त हुए मन वाले तथा मदाश्रित होकर योग का अभ्यास करते हुए जिस प्रकार तुम मुझे समग्ररूप से, बिना किसी संशय के, जानोगे वह सुनो।।",
    commentary: "A simple summary of verse 7.1",
  },
  {
    chapter: 7,
    verse: 2,
    sanskrit:
      "ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः |\nयज्ज्ञात्वा नेह भूयोऽन्यज्ज्ञातव्यमवशिष्यते ||७-२||",
    english:
      "7.2 I shall declare to thee in full this knowledge combined with realisation, after knowing which nothing more here remains to be known.",
    hindi:
      "।।7.2।। मैं तुम्हारे लिए विज्ञान सहित इस ज्ञान को अशेष रूप से कहूँगा जिसको जानकर यहाँ (जगत् में) फिर और कुछ जानने योग्य (ज्ञातव्य) शेष नहीं रह जाता है।।",
    commentary: "A simple summary of verse 7.2",
  },
  {
    chapter: 7,
    verse: 3,
    sanskrit:
      "मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये |\nयततामपि सिद्धानां कश्चिन्मां वेत्ति तत्त्वतः ||७-३||",
    english:
      "7.3 Among thousands of men, one perchance strives for perfection; even among those successful strivers, only one perchance knows Me in essence.",
    hindi:
      "।।7.3।। सहस्रों मनुष्यों में कोई ही मनुष्य पूर्णत्व की सिद्धि के लिए प्रयत्न करता है और उन प्रयत्नशील साधकों में भी कोई ही पुरुष मुझे तत्त्व से जानता है।।",
    commentary: "A simple summary of verse 7.3",
  },
  {
    chapter: 7,
    verse: 4,
    sanskrit:
      "भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च |\nअहंकार इतीयं मे भिन्ना प्रकृतिरष्टधा ||७-४||",
    english:
      "7.4 Earth, water, fire, air, ether, mind, intellect and egoism  thus is My Nature divided eightfold.",
    hindi:
      "।।7.4।। पृथ्वी, जल, अग्नि, वायु और आकाश तथा मन, बुद्धि और अहंकार - यह आठ प्रकार से विभक्त हुई मेरी प्रकृति है।।",
    commentary: "A simple summary of verse 7.4",
  },
  {
    chapter: 7,
    verse: 5,
    sanskrit:
      "अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम् |\nजीवभूतां महाबाहो ययेदं धार्यते जगत् ||७-५||",
    english:
      "7.5 This is the inferior Prakriti, O mighty-armed (Arjuna); know thou as different from it My higher Prakriti (Nature), the very life-element, by which this world is upheld.",
    hindi:
      "।।7.5।। हे महाबाहो ! यह अपरा प्रकृति है। इससे भिन्न मेरी जीवरूपी पराप्रकृति को जानो, जिससे यह जगत् धारण किया जाता है।।",
    commentary: "A simple summary of verse 7.5",
  },
  {
    chapter: 7,
    verse: 6,
    sanskrit:
      "एतद्योनीनि भूतानि सर्वाणीत्युपधारय |\nअहं कृत्स्नस्य जगतः प्रभवः प्रलयस्तथा ||७-६||",
    english:
      "7.6 Know that these two (Natures) are the womb of all beings. So I am the source and dissolution of the whole universe.",
    hindi:
      "।।7.6।। यह जानो कि समम्पूर्ण भूत इन दोनों प्रकृतियों से उत्पत्ति वाले हैं। (अत:) मैं सम्पूर्ण जगत् का उत्पत्ति तथा प्रलय स्थान हूँ।।",
    commentary: "A simple summary of verse 7.6",
  },
  {
    chapter: 7,
    verse: 7,
    sanskrit:
      "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय |\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ||७-७||",
    english:
      "7.7 There is nothing whatsoever higher than Me, O Arjuna. All this is strung on Me, as clusters of gems on a string.",
    hindi:
      "।।7.7।। हे धनंजय ! मुझसे श्रेष्ठ (परे) अन्य किचिन्मात्र वस्तु नहीं है। यह सम्पूर्ण जगत् सूत्र में मणियों के सदृश मुझमें पिरोया हुआ है।।",
    commentary: "A simple summary of verse 7.7",
  },
  {
    chapter: 7,
    verse: 8,
    sanskrit:
      "रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः |\nप्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु ||७-८||",
    english:
      "7.8 I am the sapidity in water, O Arjuna; I am the light in the moon and the sun; I am the syllable Om in all the Vedas, sound in ether and virility in men.",
    hindi:
      "।।7.8।। हे कौन्तेय ! जल में मैं रस हूँ, चन्द्रमा और सूर्य में प्रकाश हूँ, सब वेदों में प्रणव (ँ़कार) हूँ तथा आकाश में शब्द और पुरुषों में पुरुषत्व हूँ।।",
    commentary: "A simple summary of verse 7.8",
  },
  {
    chapter: 7,
    verse: 9,
    sanskrit:
      "पुण्यो गन्धः पृथिव्यां च तेजश्चास्मि विभावसौ |\nजीवनं सर्वभूतेषु तपश्चास्मि तपस्विषु ||७-९||",
    english:
      "7.9 I am the sweet fragrance in the earth and the brilliance in the fire, the life in all beings, and I am the austerity in ascetics.",
    hindi:
      "।।7.9।। पृथ्वी में पवित्र गन्ध हूँ और अग्नि में तेज हूँ; सम्पूर्ण भूतों में जीवन हूँ और तपस्वियों में मैं तप हूँ।।",
    commentary: "A simple summary of verse 7.9",
  },
  {
    chapter: 7,
    verse: 10,
    sanskrit:
      "बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम् |\nबुद्धिर्बुद्धिमतामस्मि तेजस्तेजस्विनामहम् ||७-१०||",
    english:
      "7.10 Know Me, O Arjuna, as the eternal seed of all beings; I am the intelligence of the intelligent; the splendour of the splendid objects am I.",
    hindi:
      "।।7.10।। हे पार्थ ! सम्पूर्ण भूतों का सनातन बीज (कारण) मुझे ही जानो; मैं बुद्धिमानों की बुद्धि और तेजस्वियों का तेज हूँ।।",
    commentary: "A simple summary of verse 7.10",
  },
  {
    chapter: 7,
    verse: 11,
    sanskrit:
      "बलं बलवतां चाहं कामरागविवर्जितम् |\nधर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ ||७-११||",
    english:
      "7.11 Of the strong, I am the strength devoid of desire and attachment, and in (all) beings, I am the desire unopposed to Dharma, O Arjuna.",
    hindi:
      "।।7.11।। हे भरत श्रेष्ठ ! मैं बलवानों का कामना तथा आसक्ति से रहित बल हूँ और सब भूतों में धर्म के अविरुद्ध अर्थात् अनुकूल काम हूँ।।",
    commentary: "A simple summary of verse 7.11",
  },
  {
    chapter: 7,
    verse: 12,
    sanskrit:
      "ये चैव सात्त्विका भावा राजसास्तामसाश्च ये |\nमत्त एवेति तान्विद्धि न त्वहं तेषु ते मयि ||७-१२||",
    english:
      "7.12 Whatever beings (and objects) that are pure, active and inert, know that they proceed from Me. They are in Me, yet I am not in them.",
    hindi:
      "।।7.12।। जो भी सात्त्विक (शुद्ध), राजसिक (क्रियाशील) और तामसिक (जड़) भाव हैं, उन सबको तुम मेरे से उत्पन्न हुए जानो; तथापि मैं उनमें नहीं हूँ, वे मुझमें हैं।।",
    commentary: "A simple summary of verse 7.12",
  },
  {
    chapter: 7,
    verse: 13,
    sanskrit:
      "त्रिभिर्गुणमयैर्भावैरेभिः सर्वमिदं जगत् |\nमोहितं नाभिजानाति मामेभ्यः परमव्ययम् ||७-१३||",
    english:
      "7.13 Deluded by these Natures (states or things) composed of the three alities of Nature all this world does not know Me as distinct from them and immutable.",
    hindi:
      "।।7.13।। त्रिगुणों से उत्पन्न इन भावों (विकारों) से सम्पूर्ण जगत् (लोग) मोहित हुआ इन (गुणों) से परे अव्यय स्वरूप मुझे नहीं जानता है।।",
    commentary: "A simple summary of verse 7.13",
  },
  {
    chapter: 7,
    verse: 14,
    sanskrit:
      "दैवी ह्येषा गुणमयी मम माया दुरत्यया |\nमामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ||७-१४||",
    english:
      "7.14 Verily, this divine illusion of Mine, made up of the (three) alities (of Nature) is difficult to cross over; those who take refuge in Me alone, cross over this illusion.",
    hindi:
      "।।7.14।। यह दैवी त्रिगुणमयी मेरी माया बड़ी दुस्तर है। परन्तु जो मेरी शरण में आते हैं, वे इस माया को पार कर जाते हैं।।",
    commentary: "A simple summary of verse 7.14",
  },
  {
    chapter: 7,
    verse: 15,
    sanskrit:
      "न मां दुष्कृतिनो मूढाः प्रपद्यन्ते नराधमाः |\nमाययापहृतज्ञाना आसुरं भावमाश्रिताः ||७-१५||",
    english:
      "7.15 The evil-doers and the deluded who are the lowest of men do not seek Me; they whose knowledge is destroyed by illusion follow the ways of demons.",
    hindi:
      "।।7.15।। दुष्कृत्य करने वाले, मूढ, नराधम पुरुष मुझे नहीं भजते हैं; माया के द्वारा जिनका ज्ञान हर लिया गया है, वे आसुरी भाव को धारण किये रहते हैं।।",
    commentary: "A simple summary of verse 7.15",
  },
  {
    chapter: 7,
    verse: 16,
    sanskrit:
      "चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन |\nआर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ ||७-१६||",
    english:
      "7.16 Four kinds of virtuous men worship Me, O Arjuna, and they are the distressed, the seekr of knowledge, the seekr of wealth and the wise, O lord of the Bharatas.",
    hindi:
      "।।7.16।। हे भरत श्रेष्ठ अर्जुन ! उत्तम कर्म करने वाले (सुकृतिन:) आर्त, जिज्ञासु, अर्थार्थी और ज्ञानी ऐसे चार प्रकार के लोग मुझे भजते हैं।।",
    commentary: "A simple summary of verse 7.16",
  },
  {
    chapter: 7,
    verse: 17,
    sanskrit:
      "तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते |\nप्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रियः ||७-१७||",
    english:
      "7.17 Of them the wise, ever steadfast and devoted to the One, excels (is the best); for I am exceedingly dear to the wise and he is dear to Me.",
    hindi:
      "।।7.17।। उनमें भी मुझ से नित्ययुक्त, अनन्य भक्ति वाला ज्ञानी श्रेष्ठ है, क्योंकि ज्ञानी को मैं अत्यन्त प्रिय हूँ और वह मुझे अत्यन्त प्रिय है।।",
    commentary: "A simple summary of verse 7.17",
  },
  {
    chapter: 7,
    verse: 18,
    sanskrit:
      "उदाराः सर्व एवैते ज्ञानी त्वात्मैव मे मतम् |\nआस्थितः स हि युक्तात्मा मामेवानुत्तमां गतिम् ||७-१८||",
    english:
      "7.18 Noble indeed are all these; but I deem the wise man as My very Self; for, steadfast in mind he is established in Me alone as the supreme goal.",
    hindi:
      "।।7.18।। (यद्यपि) ये सब उत्कृष्ट हैं, परन्तु ज्ञानी तो मेरा स्वरूप ही है ऐसा मेरा मत है, क्योंकि वह स्थिर बुद्धि ज्ञानी अति उत्तम गतिस्वरूप मुझमें अच्छी प्रकार स्थित है।।",
    commentary: "A simple summary of verse 7.18",
  },
  {
    chapter: 7,
    verse: 19,
    sanskrit:
      "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते |\nवासुदेवः सर्वमिति स महात्मा सुदुर्लभः ||७-१९||",
    english:
      "7.19 At the end of many births the wise man comes to Me, realising that all this is Vaasudeva (the innermost Self); such a great soul (Mahatma) is very hard to find.",
    hindi:
      "।।7.19।। बहुत जन्मों के अन्त में (किसी एक जन्म विशेष में) ज्ञान को प्राप्त होकर कि 'यह सब वासुदेव है' ज्ञानी भक्त मुझे प्राप्त होता है; ऐसा महात्मा अति दुर्लभ है।।",
    commentary: "A simple summary of verse 7.19",
  },
  {
    chapter: 7,
    verse: 20,
    sanskrit:
      "कामैस्तैस्तैर्हृतज्ञानाः प्रपद्यन्तेऽन्यदेवताः |\nतं तं नियममास्थाय प्रकृत्या नियताः स्वया ||७-२०||",
    english:
      "7.20 Those whose wisdom has been rent away by this or that desire, go to other gods, following this or that rite, led by their own nature.",
    hindi:
      "।।7.20।। भोगविशेष की कामना से जिनका ज्ञान हर लिया गया है, ऐसे पुरुष अपने स्वभाव से प्रेरित हुए अन्य देवताओं को विशिष्ट नियम का पालन करते हुए भजते हैं।।",
    commentary: "A simple summary of verse 7.20",
  },
  {
    chapter: 7,
    verse: 21,
    sanskrit:
      "यो यो यां यां तनुं भक्तः श्रद्धयार्चितुमिच्छति |\nतस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम् ||७-२१||",
    english:
      "7.21 Whatsoever form any devotee desires to worship with faith  that (same) faith of his I make firm and unflinching.",
    hindi:
      "।।7.21।। जो-जो (सकामी) भक्त जिस-जिस (देवता के) रूप को श्रद्धा से पूजना चाहता है, उस-उस (भक्त) की मैं उस ही देवता के प्रति श्रद्धा को स्थिर करता हूँ।।",
    commentary: "A simple summary of verse 7.21",
  },
  {
    chapter: 7,
    verse: 22,
    sanskrit:
      "स तया श्रद्धया युक्तस्तस्याराधनमीहते |\nलभते च ततः कामान्मयैव विहितान्हि तान् ||७-२२||",
    english:
      "7.22 Endowed with that faith, he engages in the worship of that (form) and from it he obtains his desire, these being verily ordained by Me (alone).",
    hindi:
      "।।7.22।। वह (भक्त) उस श्रद्धा से युक्त होकर उस देवता का पूजन करता है और उससे मेरे द्वारा विधान किये हुये इच्छित भोगों को नि:सन्देह प्राप्त करता है।।",
    commentary: "A simple summary of verse 7.22",
  },
  {
    chapter: 7,
    verse: 23,
    sanskrit:
      "अन्तवत्तु फलं तेषां तद्भवत्यल्पमेधसाम् |\nदेवान्देवयजो यान्ति मद्भक्ता यान्ति मामपि ||७-२३||",
    english:
      "7.23 Verily the reward (fruit) that accrues to those men of small intelligence is finite. The worshippers of the gods go to them, but My devotees come to Me.",
    hindi:
      "।।7.23।। परन्तु उन अल्प बुद्धि पुरुषों का वह फल नाशवान् होता है। देवताओं के पूजक देवताओं को प्राप्त होते हैं और मेरे भक्त मुझे ही प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 7.23",
  },
  {
    chapter: 7,
    verse: 24,
    sanskrit:
      "अव्यक्तं व्यक्तिमापन्नं मन्यन्ते मामबुद्धयः |\nपरं भावमजानन्तो ममाव्ययमनुत्तमम् ||७-२४||",
    english:
      "7.24 The foolish think of Me, the Unmanifest, as having manifestation, knowing not My higher, immutable and most excellent nature.",
    hindi:
      "।।7.24।। बुद्धिहीन पुरुष मेरे अनुत्तम (सर्वोत्तम) अव्यय परम भाव को न जानते हुए मुझ अव्यक्त को व्यक्त मानते हैं।।",
    commentary: "A simple summary of verse 7.24",
  },
  {
    chapter: 7,
    verse: 25,
    sanskrit:
      "नाहं प्रकाशः सर्वस्य योगमायासमावृतः |\nमूढोऽयं नाभिजानाति लोको मामजमव्ययम् ||७-२५||",
    english:
      "7.25 I am not manifest to all (as I am) veiled by the Yoga-Maya. This deluded world does not know Me, the unborn and imperishable.",
    hindi:
      "।।7.25।। अपनी योगमाया से आवृत्त मैं सबको प्रत्यक्ष नहीं होता हूँ। यह मोहित लोक (मनुष्य) मुझ जन्मरहित, अविनाशी को नहीं जानता है।।",
    commentary: "A simple summary of verse 7.25",
  },
  {
    chapter: 7,
    verse: 26,
    sanskrit:
      "वेदाहं समतीतानि वर्तमानानि चार्जुन |\nभविष्याणि च भूतानि मां तु वेद न कश्चन ||७-२६||",
    english:
      "7.26 I know, O Arjuna, the beings of the past, the present and the future, but no one knows Me.",
    hindi:
      "।।7.26।। हे अर्जुन ! पूर्व में व्यतीत हुए और वर्तमान में स्थित तथा भविष्य में होने वाले भूतमात्र को मैं जानता हूँ, परन्तु मुझे कोई भी पुरुष नहीं जानता हैं।।",
    commentary: "A simple summary of verse 7.26",
  },
  {
    chapter: 7,
    verse: 27,
    sanskrit:
      "इच्छाद्वेषसमुत्थेन द्वन्द्वमोहेन भारत |\nसर्वभूतानि सम्मोहं सर्गे यान्ति परन्तप ||७-२७||",
    english:
      "7.27 By the delusion of the pairs of opposites arising from desire and aversion, O Bharata, all beings are subject to delusion at birth, O Parantapa.",
    hindi:
      "।।7.27।। हे परन्तप भारत ! इच्छा और द्वेष से उत्पन्न द्वन्द्वमोह से भूतमात्र उत्पत्ति काल में ही संमोह (अविवेक) को प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 7.27",
  },
  {
    chapter: 7,
    verse: 28,
    sanskrit:
      "येषां त्वन्तगतं पापं जनानां पुण्यकर्मणाम् |\nते द्वन्द्वमोहनिर्मुक्ता भजन्ते मां दृढव्रताः ||७-२८||",
    english:
      "7.28 But those men of virtuous deeds whose sins have come to an end, and who are freed from the delusion of the pairs of opposites, worship Me, steadfast in their vows.",
    hindi:
      "।।7.28।। परन्तु जिन पुण्यकर्मी पुरुषों का पाप नष्ट हो गया है, वे द्वन्द्वमोह से निर्मुक्त और दृढ़वती पुरुष मुझे भजते हैं।।",
    commentary: "A simple summary of verse 7.28",
  },
  {
    chapter: 7,
    verse: 29,
    sanskrit:
      "जरामरणमोक्षाय मामाश्रित्य यतन्ति ये |\nते ब्रह्म तद्विदुः कृत्स्नमध्यात्मं कर्म चाखिलम् ||७-२९||",
    english:
      "7.29 Those who strive for liberation from old age and death, taking refuge in Me, realise in full ï1thatï1 Brahman, the whole knowledge of the Self and all action.",
    hindi:
      "।।7.29।। जो मेरे शरणागत होकर जरा और मरण से मुक्ति पाने के लिए यत्न करते हैं, वे पुरुष उस ब्रह्म को, सम्पूर्ण अध्यात्म को और सम्पूर्ण कर्म को जानते हैं।।",
    commentary: "A simple summary of verse 7.29",
  },
  {
    chapter: 7,
    verse: 30,
    sanskrit:
      "साधिभूताधिदैवं मां साधियज्ञं च ये विदुः |\nप्रयाणकालेऽपि च मां ते विदुर्युक्तचेतसः ||७-३०||",
    english:
      "7.30 Those who know Me with the Adhibhuta (pertaining to the elements), Adhidaiva (pertaining to the gods) and the Adhiyajna (pertaining to the sacrifice) know Me even at the time of death, steadfast in mind.",
    hindi:
      "।।7.30।। जो पुरुष अधिभूत और अधिदैव तथा अधियज्ञ के सहित मुझे जानते हैं, वे युक्तचित्त वाले पुरुष अन्तकाल में भी मुझे जानते हैं।।",
    commentary: "A simple summary of verse 7.30",
  },
  {
    chapter: 8,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच |\nकिं तद् ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम |\nअधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते ||८-१||",
    english: "Swami Sivananda did not comment on this sloka",
    hindi:
      "।।8.1।। अर्जुन ने कहा -हे पुरुषोत्तम ! वह ब्रह्म क्या है अध्यात्म क्या है? तथा कर्म क्या है? और अधिभूत नाम से क्या कहा गया है? तथा अधिदैव नाम से क्या कहा जाता है,",
    commentary: "A simple summary of verse 8.1",
  },
  {
    chapter: 8,
    verse: 2,
    sanskrit:
      "अधियज्ञः कथं कोऽत्र देहेऽस्मिन्मधुसूदन |\nप्रयाणकाले च कथं ज्ञेयोऽसि नियतात्मभिः ||८-२||",
    english:
      "8.2 Who and how is Adhiyajna here in this body, O destroyer of Madhu (Krishna)? And how at the time of death, art Thou to be known by the self-controlled?",
    hindi:
      "।।8.2।। और हे मधुसूदन ! यहाँ अधियज्ञ कौन है? और वह इस शरीर में कैसे है? और संयत चित्त वाले पुरुषों द्वारा अन्त समय में आप किस प्रकार जाने जाते हैं,",
    commentary: "A simple summary of verse 8.2",
  },
  {
    chapter: 8,
    verse: 3,
    sanskrit:
      "श्रीभगवानुवाच |\nअक्षरं ब्रह्म परमं स्वभावोऽध्यात्ममुच्यते |\nभूतभावोद्भवकरो विसर्गः कर्मसंज्ञितः ||८-३||",
    english:
      "8.3 The Blessed Lord said  Brahman is the Imperishable, the Supreme; Its essential nature is called Self-knowledge; the offering (to the gods) which causes existence and manifestation of beings and which also sustains them is called action.",
    hindi:
      "।।8.3।। श्रीभगवान् ने कहा -- परम अक्षर (अविनाशी) तत्त्व ब्रह्म है; स्वभाव (अपना स्वरूप) अध्यात्म कहा जाता है; भूतों के भावों को उत्पन्न करने वाला विसर्ग (यज्ञ, प्रेरक बल) कर्म नाम से जाना जाता है।।",
    commentary: "A simple summary of verse 8.3",
  },
  {
    chapter: 8,
    verse: 4,
    sanskrit:
      "अधिभूतं क्षरो भावः पुरुषश्चाधिदैवतम् |\nअधियज्ञोऽहमेवात्र देहे देहभृतां वर ||८-४||",
    english:
      "8.4 Adhibhuta (knowledge of the elements) pertains to My perishable Nature and the Purusha or the Soul is the Adhidaiva; I alone am the Adhiyajna here in this body, O best among the embodied (men).",
    hindi:
      "।।8.4।। हे देहधारियों में श्रेष्ठ अर्जुन ! नश्वर वस्तु (पंचमहाभूत) अधिभूत और पुरुष अधिदैव है; इस शरीर में मैं ही अधियज्ञ हूँ।।",
    commentary: "A simple summary of verse 8.4",
  },
  {
    chapter: 8,
    verse: 5,
    sanskrit:
      "अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम् |\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः ||८-५||",
    english:
      "8.5 And whosoever, leaving the body, goes forth remembering Me alone, at the time of death, he attains My Being: there is no doubt about this.",
    hindi:
      "।।8.5।। और जो कोई पुरुष अन्तकाल में मुझे ही स्मरण करता हुआ शरीर को त्याग कर जाता है, वह मेरे स्वरूप को प्राप्त होता है, इसमें कुछ भी संशय नहीं।।",
    commentary: "A simple summary of verse 8.5",
  },
  {
    chapter: 8,
    verse: 6,
    sanskrit:
      "यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम् |\nतं तमेवैति कौन्तेय सदा तद्भावभावितः ||८-६||",
    english:
      "8.6 Whosoever at the end leaves the body, thinking of any being, to that being only does he go, O son of Kunti (Arjuna), because of his constant thought of that being.",
    hindi:
      "।।8.6।। हे कौन्तेय ! (यह जीव) अन्तकाल में जिस किसी भी भाव को स्मरण करता हुआ शरीर को त्यागता है, वह सदैव उस भाव के चिन्तन के फलस्वरूप उसी भाव को ही प्राप्त होता है।।",
    commentary: "A simple summary of verse 8.6",
  },
  {
    chapter: 8,
    verse: 7,
    sanskrit:
      "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च |\nमय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयः (orसंशयम्) ||८-७||",
    english:
      "8.7 Therefore at all times remember Me only and fight. With mind and intellect fixed (or absorbed) in Me, thou shalt doubtessly come to Me alone.",
    hindi:
      "।।8.7।। इसलिए, तुम सब काल में मेरा निरन्तर स्मरण करो; और युद्ध करो मुझमें अर्पण किये मन, बुद्धि से युक्त हुए निःसन्देह तुम मुझे ही प्राप्त होओगे।।",
    commentary: "A simple summary of verse 8.7",
  },
  {
    chapter: 8,
    verse: 8,
    sanskrit:
      "अभ्यासयोगयुक्तेन चेतसा नान्यगामिना |\nपरमं पुरुषं दिव्यं याति पार्थानुचिन्तयन् ||८-८||",
    english:
      "8.8 With the mind not moving towards any other thing, made steadfast by the method of habitual meditation, and constantly meditating, one goes to the Supreme Person, the Resplendent, O Arjuna.",
    hindi:
      "।।8.8।। हे पार्थ ! अभ्यासयोग से युक्त अन्यत्र न जाने वाले चित्त से निरन्तर चिन्तन करता हुआ (साधक) परम दिव्य पुरुष को प्राप्त होता है।।",
    commentary: "A simple summary of verse 8.8",
  },
  {
    chapter: 8,
    verse: 9,
    sanskrit:
      "कविं पुराणमनुशासितार-\nमणोरणीयंसमनुस्मरेद्यः |\nसर्वस्य धातारमचिन्त्यरूप-\nमादित्यवर्णं तमसः परस्तात् ||८-९||",
    english:
      "8.9 Whosoever meditates on the Omniscient, the Ancient, the Ruler (of the whole world), minuter than an atom, the supporter of all, of inconceivable form, effulgent like the sun and beyond the darkness of ignorance.",
    hindi:
      "।।8.9।। जो पुरुष सर्वज्ञ, प्राचीन (पुराण), सबके नियन्ता, सूक्ष्म से भी सूक्ष्मतर, सब के धाता, अचिन्त्यरूप, सूर्य के समान प्रकाश रूप और (अविद्या) अन्धकार से परे तत्त्व का अनुस्मरण करता है।।",
    commentary: "A simple summary of verse 8.9",
  },
  {
    chapter: 8,
    verse: 10,
    sanskrit:
      "प्रयाणकाले मनसाऽचलेन\nभक्त्या युक्तो योगबलेन चैव |\nभ्रुवोर्मध्ये प्राणमावेश्य सम्यक्\nस तं परं पुरुषमुपैति दिव्यम् ||८-१०||",
    english:
      "8.10 At the time of death, with unshaken mind, endowed with devotio, by the power of Yoga, fixing the whole life-breath in the middle of the two eyrows, he reaches that resplendent Supreme Person.",
    hindi:
      "।।8.10।। वह (साधक) अन्तकाल में योगबल से प्राण को भ्रकुटि के मध्य सम्यक् प्रकार स्थापन करके निश्चल मन से भक्ति युक्त होकर उस परम दिव्य पुरुष को प्राप्त होता है।।",
    commentary: "A simple summary of verse 8.10",
  },
  {
    chapter: 8,
    verse: 11,
    sanskrit:
      "यदक्षरं वेदविदो वदन्ति\nविशन्ति यद्यतयो वीतरागाः |\nयदिच्छन्तो ब्रह्मचर्यं चरन्ति\nतत्ते पदं संग्रहेण प्रवक्ष्ये ||८-११||",
    english:
      "8.11 That which is declared Imperishable by those who know the Vedas, that which the self-controlled (ascetics or Sannyasins) and passion-free enter, that desiring which celibacy is practised  that goal I will declare to thee in brief.",
    hindi:
      "।।8.11।। वेद के जानने वाले विद्वान जिसे अक्षर कहते हैं; रागरहित यत्नशील पुरुष जिसमें प्रवेश करते हैं; जिसकी इच्छा से (साधक गण) ब्रह्मचर्य का पालन करते हैं - उस पद (लक्ष्य) को मैं तुम्हें संक्षेप में कहूँगा।।",
    commentary: "A simple summary of verse 8.11",
  },
  {
    chapter: 8,
    verse: 12,
    sanskrit:
      "सर्वद्वाराणि संयम्य मनो हृदि निरुध्य च |\nमूध्न्यार्धायात्मनः प्राणमास्थितो योगधारणाम् ||८-१२||",
    english:
      "8.12 Having closed all the gates, confined the mind in the heart and fixed the life-breath in the head, engaged in the practice of concentration.",
    hindi:
      "।।8.12।। सब (इन्द्रियों के) द्वारों को संयमित कर मन को हृदय में स्थिर करके और प्राण को मस्तक में स्थापित करके योगधारणा में स्थित हुआ।।",
    commentary: "A simple summary of verse 8.12",
  },
  {
    chapter: 8,
    verse: 13,
    sanskrit:
      "ओमित्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन् |\nयः प्रयाति त्यजन्देहं स याति परमां गतिम् ||८-१३||",
    english:
      "8.13 Uttering the one-syllabled Om  the Brahman  and remembering Me, he who departs, leaving the body, attains to the Supreme Goal.",
    hindi:
      "।।8.13।। जो पुरुष ओऽम् इस एक अक्षर ब्रह्म का उच्चारण करता हुआ और मेरा स्मरण करता हुआ शरीर का त्याग करता है, वह परम गति को प्राप्त होता है।।",
    commentary: "A simple summary of verse 8.13",
  },
  {
    chapter: 8,
    verse: 14,
    sanskrit:
      "अनन्यचेताः सततं यो मां स्मरति नित्यशः |\nतस्याहं सुलभः पार्थ नित्ययुक्तस्य योगिनः ||८-१४||",
    english:
      "8.14 I am easily attainable by that ever-steadfast Yogi who constantly and daily remembers Me (for a long time), not thinking of anything else (with a single mind or one-pointed mind), O Partha (Arjuna).",
    hindi:
      "।।8.14।। हे पार्थ ! जो अनन्यचित्त वाला पुरुष मेरा स्मरण करता है, उस नित्ययुक्त योगी के लिए मैं सुलभ हूँ अर्थात् सहज ही प्राप्त हो जाता हूँ।।",
    commentary: "A simple summary of verse 8.14",
  },
  {
    chapter: 8,
    verse: 15,
    sanskrit:
      "मामुपेत्य पुनर्जन्म दुःखालयमशाश्वतम् |\nनाप्नुवन्ति महात्मानः संसिद्धिं परमां गताः ||८-१५||",
    english:
      "8.15 Having attained Me these great souls do not again take birth (here) which is the place of pain \nand is non-eternal: they have reached the highest perfection (liberation).",
    hindi:
      "।।8.15।। परम सिद्धि को प्राप्त हुये महात्माजन मुझे प्राप्त कर अनित्य दुःख के आलयरूप (गृहरूप) पुनर्जन्म को नहीं प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 8.15",
  },
  {
    chapter: 8,
    verse: 16,
    sanskrit:
      "आब्रह्मभुवनाल्लोकाः पुनरावर्तिनोऽर्जुन |\nमामुपेत्य तु कौन्तेय पुनर्जन्म न विद्यते ||८-१६||",
    english:
      "8.16 (All) the worlds including the world of Brahma are subject to return again, O Arjuna; but he who reaches Me, O son of Kunti, has no rirth.",
    hindi:
      "।।8.16।। हे अर्जुन ! ब्रह्म लोक तक के सब लोग पुनरावर्ती स्वभाव वाले हैं। परन्तु, हे कौन्तेय ! मुझे प्राप्त होने पर पुनर्जन्म नहीं होता।।",
    commentary: "A simple summary of verse 8.16",
  },
  {
    chapter: 8,
    verse: 17,
    sanskrit:
      "सहस्रयुगपर्यन्तमहर्यद् ब्रह्मणो विदुः |\nरात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः ||८-१७||",
    english:
      "8.17 Those people who know the day of Brahma which is of a duration of a thousand Yugas (ages) and the night which is also of a thousand Yugas duration, they know day and night.",
    hindi:
      "।।8.17।। जो लोग ब्रह्मा जी के एक दिन की अवधि जानते हैं जो कि सहस्र वर्ष की है तथा एक सहस्र वर्ष की अवधि की एक रात्रि को जानते हैं वे दिन और रात्रि को जानने वाले पुरुष हैं।।",
    commentary: "A simple summary of verse 8.17",
  },
  {
    chapter: 8,
    verse: 18,
    sanskrit:
      "अव्यक्ताद् व्यक्तयः सर्वाः प्रभवन्त्यहरागमे |\nरात्र्यागमे प्रलीयन्ते तत्रैवाव्यक्तसंज्ञके ||८-१८||",
    english:
      "8.18 From the Unmanifested all the manifested (worlds) proceed at the coming of the 'day'; at the coming of the 'night' they dissolve verily into ï1thatï1 alone which is called the Unmanifested.",
    hindi:
      "।।8.18।। (ब्रह्माजी के) दिन का उदय होने पर अव्यक्त से (यह) व्यक्त (चराचर जगत्) उत्पन्न होता है; और (ब्रह्माजी की) रात्रि के आगमन पर उसी अव्यक्त में लीन हो जाता है।।",
    commentary: "A simple summary of verse 8.18",
  },
  {
    chapter: 8,
    verse: 19,
    sanskrit:
      "भूतग्रामः स एवायं भूत्वा भूत्वा प्रलीयते |\nरात्र्यागमेऽवशः पार्थ प्रभवत्यहरागमे ||८-१९||",
    english:
      "8.19 This same multitude of beings, being born again and again, is dissolved, helplessly, O Arjuna (into the Unmanifested) at the coming of the night and comes forth at the coming of the day.",
    hindi:
      "।।8.19।। हे पार्थ ! वही यह भूतसमुदाय, है जो पुनः पुनः उत्पन्न होकर लीन होता है। अवश हुआ (यह भूतग्राम) रात्रि के आगमन पर लीन तथा दिन के उदय होने पर व्यक्त होता है।।",
    commentary: "A simple summary of verse 8.19",
  },
  {
    chapter: 8,
    verse: 20,
    sanskrit:
      "परस्तस्मात्तु भावोऽन्योऽव्यक्तोऽव्यक्तात्सनातनः |\nयः स सर्वेषु भूतेषु नश्यत्सु न विनश्यति ||८-२०||",
    english:
      "8.20 But verily there exists, higher than this Unmanifested, another unmanifested Eternal, which is not destroyed when all beings are destroyed.",
    hindi:
      "।।8.20।। परन्तु उस अव्यक्त से परे अन्य जो सनातन अव्यक्त भाव है, वह समस्त भूतों के नष्ट होने पर भी नष्ट नहीं होता।।",
    commentary: "A simple summary of verse 8.20",
  },
  {
    chapter: 8,
    verse: 21,
    sanskrit:
      "अव्यक्तोऽक्षर इत्युक्तस्तमाहुः परमां गतिम् |\nयं प्राप्य न निवर्तन्ते तद्धाम परमं मम ||८-२१||",
    english:
      "8.21 What is called the Unmanifested and the Imperishable, That they say is the highest goal. They who reach It do not return (to this Samsara). That is My highest abode (place or state).",
    hindi:
      "।।8.21।। जो अव्यक्त अक्षर कहा गया है, वही परम गति (लक्ष्य) है। जिसे प्राप्त होकर (साधकगण) पुनः (संसार को) नहीं लौटते, वह मेरा परम धाम है।।",
    commentary: "A simple summary of verse 8.21",
  },
  {
    chapter: 8,
    verse: 22,
    sanskrit:
      "पुरुषः स परः पार्थ भक्त्या लभ्यस्त्वनन्यया |\nयस्यान्तःस्थानि भूतानि येन सर्वमिदं ततम् ||८-२२||",
    english:
      "8.22 That highest Purusha, O Arjuna, is attainable by unswerving devotion to Him alone within Whom all beings dwell and by Whom all this is pervaded.",
    hindi:
      "।।8.22।। हे पार्थ ! जिस (परमात्मा) के अन्तर्गत समस्त भूत हैं और जिससे यह सम्पूर्ण (जगत्) व्याप्त है, वह परम पुरुष अनन्य भक्ति से ही प्राप्त करने योग्य है।।",
    commentary: "A simple summary of verse 8.22",
  },
  {
    chapter: 8,
    verse: 23,
    sanskrit:
      "यत्र काले त्वनावृत्तिमावृत्तिं चैव योगिनः |\nप्रयाता यान्ति तं कालं वक्ष्यामि भरतर्षभ ||८-२३||",
    english:
      "8.23 Now I will tell thee, O chief of Bharatas, the times departing at which the Yogis will return or not return.",
    hindi:
      "।।8.23।। हे भरतश्रेष्ठ ! जिस काल में (मार्ग में) शरीर त्याग कर गये हुए योगीजन अपुनरावृत्ति को, और (या) पुनरावृत्ति को प्राप्त होते हैं, वह काल (मार्ग) मैं तुम्हें बताऊँगा।।",
    commentary: "A simple summary of verse 8.23",
  },
  {
    chapter: 8,
    verse: 24,
    sanskrit:
      "अग्निर्जोतिरहः शुक्लः षण्मासा उत्तरायणम् |\nतत्र प्रयाता गच्छन्ति ब्रह्म ब्रह्मविदो जनाः ||८-२४||",
    english:
      "8.24 Fire, light daytime, the bright fortnight, the six months of the northern path of the sun (the northern solstice)  departing then (by these) men who know Brahman go to Brahman.",
    hindi:
      "।।8.24।। जो ब्रह्मविद् साधकजन मरणोपरान्त अग्नि, ज्योति, दिन, शुक्लपक्ष और उत्तरायण के छः मास वाले मार्ग से जाते हैं, वे ब्रह्म को प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 8.24",
  },
  {
    chapter: 8,
    verse: 25,
    sanskrit:
      "धूमो रात्रिस्तथा कृष्णः षण्मासा दक्षिणायनम् |\nतत्र चान्द्रमसं ज्योतिर्योगी प्राप्य निवर्तते ||८-२५||",
    english:
      "8.25 Attaining to the lunar light by smoke, night time, the dark fortnight also, the six months of the southern path of the sun (the southern solstice), the Yogi returns.",
    hindi:
      "।।8.25।। धूम, रात्रि, कृष्णपक्ष और दक्षिणायन के छः मास वाले मार्ग से चन्द्रमा की ज्योति को प्राप्त कर, योगी (संसार को) लौटता है।।",
    commentary: "A simple summary of verse 8.25",
  },
  {
    chapter: 8,
    verse: 26,
    sanskrit:
      "शुक्लकृष्णे गती ह्येते जगतः शाश्वते मते |\nएकया यात्यनावृत्तिमन्ययावर्तते पुनः ||८-२६||",
    english:
      "8.26 The bright and the dark paths of the world are verily thought to be eternal; by the one (the bright path) a man goes not to return and by the other (the dark path) he returns.",
    hindi:
      "।।8.26।। जगत् के ये दो प्रकार के शुक्ल और कृष्ण मार्ग सनातन माने गये हैं । इनमें एक (शुक्ल) के द्वारा (साधक) अपुनरावृत्ति को तथा अन्य (कृष्ण) के द्वारा पुनरावृत्ति को प्राप्त होता है।।",
    commentary: "A simple summary of verse 8.26",
  },
  {
    chapter: 8,
    verse: 27,
    sanskrit:
      "नैते सृती पार्थ जानन्योगी मुह्यति कश्चन |\nतस्मात्सर्वेषु कालेषु योगयुक्तो भवार्जुन ||८-२७||",
    english:
      "8.27 Knowing these paths, O Arjuna, no Yogi is deluded; therefore at all times be steadfast in Yoga.",
    hindi:
      "।।8.27।। हे पार्थ इन दो मार्गों को (तत्त्व से) जानने वाला कोई भी योगी मोहित नहीं होता। इसलिए, हे अर्जुन ! तुम सब काल में योगयुक्त बनो।।",
    commentary: "A simple summary of verse 8.27",
  },
  {
    chapter: 8,
    verse: 28,
    sanskrit:
      "वेदेषु यज्ञेषु तपःसु चैव\nदानेषु यत्पुण्यफलं प्रदिष्टम् |\nअत्येति तत्सर्वमिदं विदित्वा\nयोगी परं स्थानमुपैति चाद्यम् ||८-२८||",
    english:
      "8.28 Whatever fruit of merit is declared (in the scriptures) to accrue from (the study of) the Vedas, (the performance of) sacrifices, (the practice of) austerities, and gifts  beyond all this goes the Yogi, having known this; and he attains to the Supreme Primeval (first or ancient) Abode.",
    hindi:
      "।।8.28।। योगी पुरुष यह सब (दोनों मार्गों के तत्त्व को) जानकर वेदाध्ययन, यज्ञ, तप और दान करने में जो पुण्य फल कहा गया है, उस सबका उल्लंघन कर जाता है और आद्य (सनातन), परम स्थान को प्राप्त होता है।।",
    commentary: "A simple summary of verse 8.28",
  },
  {
    chapter: 9,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच |\nइदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे |\nज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात् ||९-१||",
    english:
      "9.1 The Blessed Lord said  I shall now declare to thee who does not cavil, the greatest secret, the knowledge combined with experience (Self-realisation). Having known this thou shalt be free evil.",
    hindi:
      "।।9.1।। श्रीभगवान् ने कहा -- तुम अनसूयु (दोष दृष्टि रहित) के लिए मैं इस गुह्यतम ज्ञान को विज्ञान के सहित कहूँगा, जिसको जानकर तुम अशुभ (संसार बंधन) से मुक्त हो जाओगे।।",
    commentary: "A simple summary of verse 9.1",
  },
  {
    chapter: 9,
    verse: 2,
    sanskrit:
      "राजविद्या राजगुह्यं पवित्रमिदमुत्तमम् |\nप्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम् ||९-२||",
    english:
      "9.2 This is the kingl science, the kingly secret, the supreme purifier, realisable by direct intuitional knowledge, according to righteousness, very easy to perform and imperishable.",
    hindi:
      "।।9.2।। यह ज्ञान राजविद्या (विद्याओं का राजा) और राजगुह्य (सब गुह्यों अर्थात् रहस्यों का राजा) एवं पवित्र, उत्तम, प्रत्यक्ष ज्ञानवाला और धर्मयुक्त है, तथा करने में सरल और अव्यय है।।",
    commentary: "A simple summary of verse 9.2",
  },
  {
    chapter: 9,
    verse: 3,
    sanskrit:
      "अश्रद्दधानाः पुरुषा धर्मस्यास्य परन्तप |\nअप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि ||९-३||",
    english:
      "9.3 Those who have no faith in this Dharma (knowledge of the Self), O Parantapa (Arjuna), return to the path of this world of death without attaining Me.",
    hindi:
      "।।9.3।। हे परन्तप ! इस धर्म में श्रद्धारहित पुरुष मुझे प्राप्त न होकर मृत्युरूपी संसार में रहते हैं (भ्रमण करते हैं)।।",
    commentary: "A simple summary of verse 9.3",
  },
  {
    chapter: 9,
    verse: 4,
    sanskrit:
      "मया ततमिदं सर्वं जगदव्यक्तमूर्तिना |\nमत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः ||९-४||",
    english:
      "9.4 All this world is pervaded by Me in My unmanifest aspect; all beings exist in Me, but I do not dwell in them.",
    hindi:
      "।।9.4।। यह सम्पूर्ण जगत् मुझ (परमात्मा) के अव्यक्त स्वरूप से व्याप्त है; भूतमात्र मुझमें स्थित है, परन्तु मैं उनमें स्थित नहीं हूं।।",
    commentary: "A simple summary of verse 9.4",
  },
  {
    chapter: 9,
    verse: 5,
    sanskrit:
      "न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम् |\nभूतभृन्न च भूतस्थो ममात्मा भूतभावनः ||९-५||",
    english:
      "9.5 Nor do beings exist in Me (in reality); behold My divine Yoga, supporting all beings, but not dwelling in them, is My Self, the efficient cause of beings.",
    hindi:
      "।।9.5।। और (वस्तुत:) भूतमात्र मुझ में स्थित नहीं है; मेरे ईश्वरीय योग को देखो कि भूतों को धारण करने वाली और भूतों को उत्पन्न करने वाली मेरी आत्मा उन भूतों में स्थित नहीं है।।",
    commentary: "A simple summary of verse 9.5",
  },
  {
    chapter: 9,
    verse: 6,
    sanskrit:
      "यथाकाशस्थितो नित्यं वायुः सर्वत्रगो महान् |\nतथा सर्वाणि भूतानि मत्स्थानीत्युपधारय ||९-६||",
    english:
      "9.6 As the mighty wind, moving everywhere, rests always in the ether, even so, know thou that all beings rest in Me.",
    hindi:
      "।।9.6।। जैसे सर्वत्र विचरण करने वाली महान् वायु सदा आकाश में स्थित रहती हैं, वैसे ही सम्पूर्ण भूत मुझमें स्थित हैं, ऐसा तुम जानो।।",
    commentary: "A simple summary of verse 9.6",
  },
  {
    chapter: 9,
    verse: 7,
    sanskrit:
      "सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम् |\nकल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम् ||९-७||",
    english:
      "9.7 All beings, O Arjuna, go into My Nature at the end of a Kalpa; I send them forth again at the beginning of (the next) Kalpa.",
    hindi:
      "।।9.7।। हे कौन्तेय ! (एक) कल्प के अन्त में समस्त भूत मेरी प्रकृति को प्राप्त होते हैं; और (दूसरे) कल्प के प्रारम्भ में उनको मैं फिर रचता हूँ।।",
    commentary: "A simple summary of verse 9.7",
  },
  {
    chapter: 9,
    verse: 8,
    sanskrit:
      "प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः |\nभूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वशात् ||९-८||",
    english:
      "9.8 Animating My Nature, I again and again send forth all this multitude of beings, helpless by the force of the Nature.",
    hindi:
      "।।9.8।। प्रकृति को अपने वश में करके (अर्थात् उसे चेतनता प्रदान कर) स्वभाव के वश से परतन्त्र (अवश) हुए इस सम्पूर्ण भूत समुदाय को मैं पुन:-पुन: रचता हूँ।।",
    commentary: "A simple summary of verse 9.8",
  },
  {
    chapter: 9,
    verse: 9,
    sanskrit:
      "न च मां तानि कर्माणि निबध्नन्ति धनञ्जय |\nउदासीनवदासीनमसक्तं तेषु कर्मसु ||९-९||",
    english:
      "9.9 These acts do not bind Me, O Arjuna, sitting like one indifferent, unattached to those acts.",
    hindi:
      "।।9.9।। हे धनंजय ! उन कर्मों में आसक्ति रहित और उदासीन के समान स्थित मुझ (परमात्मा) को वे कर्म नहीं बांधते हैं।।",
    commentary: "A simple summary of verse 9.9",
  },
  {
    chapter: 9,
    verse: 10,
    sanskrit:
      "मयाध्यक्षेण प्रकृतिः सूयते सचराचरम् |\nहेतुनानेन कौन्तेय जगद्विपरिवर्तते ||९-१०||",
    english:
      "9.10 Under Me as supervisor, Nature produces the moving and the unmoving; because of this, O Arjuna, the world revolves.",
    hindi:
      "।।9.10।। हे कौन्तेय ! मुझ अध्यक्ष के कारण ( अर्थात् मेरी अध्यक्षता में) प्रकृति चराचर जगत् को उत्पन्न करती है; इस कारण यह जगत् घूमता रहता है।।",
    commentary: "A simple summary of verse 9.10",
  },
  {
    chapter: 9,
    verse: 11,
    sanskrit:
      "अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम् |\nपरं भावमजानन्तो मम भूतमहेश्वरम् ||९-११||",
    english:
      "9.11 Fools disregard Me, clad in human form, not knowing My higher Being as the great Lord of (all) beings.",
    hindi:
      "।।9.11।। समस्त भूतों के महान् ईश्वर रूप मेरे परम भाव को नहीं जानते हुए मूढ़ लोग मनुष्य शरीरधारी मुझ परमात्मा का अनादर करते हैं।।",
    commentary: "A simple summary of verse 9.11",
  },
  {
    chapter: 9,
    verse: 12,
    sanskrit:
      "मोघाशा मोघकर्माणो मोघज्ञाना विचेतसः |\nराक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिताः ||९-१२||",
    english:
      "9.12 Of vain hopes, of vain actions, of vain knowledge and senseless, they verily are possessed of the deceitful nature of demons and undivine beings.",
    hindi:
      "।।9.12।। वृथा आशा, वृथा कर्म और वृथा ज्ञान वाले अविचारीजन राक्षसों के और असुरों के मोहित करने वाले स्वभाव को धारण किये रहते हैं।।",
    commentary: "A simple summary of verse 9.12",
  },
  {
    chapter: 9,
    verse: 13,
    sanskrit:
      "महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः |\nभजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम् ||९-१३||",
    english:
      "9.13 But the great souls, O Arjuna, partaking of My divine nature, worship Me with a single mind (with the mind devoted to nothing else), knowing Me as the imperishable source of beings.",
    hindi:
      "।।9.13।। हे पार्थ ! परन्तु दैवी प्रकृति के आश्रित महात्मा पुरुष मुझे समस्त भूतों का आदिकारण और अव्ययस्वरूप जानकर अनन्यमन से युक्त होकर मुझे भजते हैं।।",
    commentary: "A simple summary of verse 9.13",
  },
  {
    chapter: 9,
    verse: 14,
    sanskrit:
      "सततं कीर्तयन्तो मां यतन्तश्च दृढव्रताः |\nनमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते ||९-१४||",
    english:
      "9.14 Always glorifying Me, striving,firm in vows, prostrating themselves before Me, they worship Me with devotion always steadfast.",
    hindi:
      "।।9.14।। सतत मेरा कीर्तन करते हुए, प्रयत्नशील, दढ़व्रती पुरुष मुझे नमस्कार करते हुए, नित्ययुक्त होकर भक्तिपूर्वक मेरी उपासना करते हैं।।",
    commentary: "A simple summary of verse 9.14",
  },
  {
    chapter: 9,
    verse: 15,
    sanskrit:
      "ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते |\nएकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम् ||९-१५||",
    english:
      "9.15 Others also sacrificing with the wisdom-sacrifice worship Me, the All-faced, as one, as distinct, and as manifold.",
    hindi:
      "।।9.15।। कोई मुझे ज्ञानयज्ञ के द्वारा पूजन करते हुए एकत्वभाव से उपासते हैं, कोई पृथक भाव से, कोई बहुत प्रकार से मुझ विराट स्वरूप (विश्वतो मुखम्) को उपासते हैं।।",
    commentary: "A simple summary of verse 9.15",
  },
  {
    chapter: 9,
    verse: 16,
    sanskrit:
      "अहं क्रतुरहं यज्ञः स्वधाहमहमौषधम् |\nमन्त्रोऽहमहमेवाज्यमहमग्निरहं हुतम् ||९-१६||",
    english:
      "9.16 I am the Kratu; I am the Yajna; I am the offering (food) to the manes; I am the medicinal herbs and all the plants; I am the Mantra; I am also the Ghee or the melted butter; I am the fire; I am the oblation.",
    hindi:
      "।।9.16।। मैं ऋक्रतु हूँ; मैं यज्ञ हूँ; स्वधा और औषध मैं हूँ, मैं मन्त्र हूँ, घी हूँ, मैं अग्नि हूँ और हुतं अर्थात् हवन कर्म मैं हूँ।।",
    commentary: "A simple summary of verse 9.16",
  },
  {
    chapter: 9,
    verse: 17,
    sanskrit:
      "पिताहमस्य जगतो माता धाता पितामहः |\nवेद्यं पवित्रमोंकार ऋक्साम यजुरेव च ||९-१७||",
    english:
      "9.17 I am the father of this world, the mother, the dispenser of the fruits of actions and the \ngrandfather; the (one) thing to be known, the purifier, the sacred monosyllable (Om), and also the Rik-, the Sama-and the Yajur-Vedas.",
    hindi:
      "।।9.17।। मैं ही इस जगत् का पिता, माता, धाता (धारण करने वाला) और पितामह हूँमैं वेद्य (जानने योग्य) वस्तु हूँ, पवित्र, ओंकार, ऋग्वेद, सामवेद और यजुर्वेद भी मैं ही हूँ।।",
    commentary: "A simple summary of verse 9.17",
  },
  {
    chapter: 9,
    verse: 18,
    sanskrit:
      "गतिर्भर्ता प्रभुः साक्षी निवासः शरणं सुहृत् |\nप्रभवः प्रलयः स्थानं निधानं बीजमव्ययम् ||९-१८||",
    english:
      "9.18 I am the goal, the supporter, the Lord, the witness, the abode, the shelter, the friend, the origin, the dissolution, the foundation, the treasure-house and the seed which is imperishable.",
    hindi:
      "।।9.18।। गति (लक्ष्य), भरण-पोषण करने वाला, प्रभु (स्वामी), साक्षी, निवास, शरणस्थान तथा मित्र और उत्पत्ति, प्रलयरूप तथा स्थान (आधार), निधान और अव्यय कारण भी मैं हूँ।।",
    commentary: "A simple summary of verse 9.18",
  },
  {
    chapter: 9,
    verse: 19,
    sanskrit:
      "तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च |\nअमृतं चैव मृत्युश्च सदसच्चाहमर्जुन ||९-१९||",
    english:
      "9.19 (As the sun) I give heat; I withhold and send forth the rain; I am immortality and also death, existence and non-existence, O Arjuna.",
    hindi:
      "।।9.19।। हे अर्जुन ! मैं ही (सूर्य रूप में) तपता हूँ; मैं वर्षा का निग्रह और उत्सर्जन करता हूँ। मैं ही अमृत और मृत्यु एवं सत् और असत् हूँ।।",
    commentary: "A simple summary of verse 9.19",
  },
  {
    chapter: 9,
    verse: 20,
    sanskrit:
      "त्रैविद्या मां सोमपाः पूतपापा\nयज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते |\nते पुण्यमासाद्य सुरेन्द्रलोक-\nमश्नन्ति दिव्यान्दिवि देवभोगान् ||९-२०||",
    english:
      "9.20 The knowers of the three Vedas, the drinkers of Soma, purified of all sins, worshipping Me by sacrifices, pray for the way to heaven; they reach the holy world of the Lord of the gods and enjoy in heavn the divine pleasures of the gods.",
    hindi:
      "।।9.20।। तीनों वेदों के ज्ञाता (वेदोक्त सकाम कर्म करने वाले), सोमपान करने वाले एवं पापों से पवित्र हुए पुरुष मुझे यज्ञों के द्वारा पूजकर स्वर्ग प्राप्ति चाहते हैं; वे पुरुष अपने पुण्यों के फलरूप इन्द्रलोक को प्राप्त कर स्वर्ग में दिव्य देवताओं के भोग भोगते हैं।।",
    commentary: "A simple summary of verse 9.20",
  },
  {
    chapter: 9,
    verse: 21,
    sanskrit:
      "ते तं भुक्त्वा स्वर्गलोकं विशालं\nक्षीणे पुण्ये मर्त्यलोकं विशन्ति |\nएवं त्रयीधर्ममनुप्रपन्ना\nगतागतं कामकामा लभन्ते ||९-२१||",
    english:
      "9.21 They, having enjoyed the vast heaven, enter the world of mortals when their merit is exhausted; thus abiding by the injunctions of the ï1threeï1 (Vedas) and desiring (objects of) desires, they attain to the state of going and returning.",
    hindi:
      "।।9.21।। वे उस विशाल स्वर्गलोक को भोगकर, पुण्यक्षीण होने पर, मृत्युलोक को प्राप्त होते हैं। इस प्रकार तीनों वेदों में कहे गये कर्म के शरण हुए और भोगों की कामना वाले पुरुष आवागमन (गतागत) को प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 9.21",
  },
  {
    chapter: 9,
    verse: 22,
    sanskrit:
      "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते |\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||९-२२||",
    english:
      "9.22 For those men who worship Me alone, thinking of no other, for those ever-united, I secure what is not already possessed and preserve what they already possess.",
    hindi:
      "।।9.22।। अनन्य भाव से मेरा चिन्तन करते हुए जो भक्तजन मेरी ही उपासना करते हैं, उन नित्ययुक्त पुरुषों का योगक्षेम मैं वहन करता हूँ।।",
    commentary: "A simple summary of verse 9.22",
  },
  {
    chapter: 9,
    verse: 23,
    sanskrit:
      "येऽप्यन्यदेवता भक्ता यजन्ते श्रद्धयान्विताः |\nतेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम् ||९-२३||",
    english:
      "9.23 Even those devotees who, endowed with faith, worship other gods, worship Me alone, O Arjuna, b the wrong method.",
    hindi:
      "।।9.23।। हे कौन्तेय ! श्रद्धा से युक्त जो भक्त अन्य देवताओं को पूजते हैं, वे भी मुझे ही अविधिपूर्वक पूजते हैं।।",
    commentary: "A simple summary of verse 9.23",
  },
  {
    chapter: 9,
    verse: 24,
    sanskrit:
      "अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च |\nन तु मामभिजानन्ति तत्त्वेनातश्च्यवन्ति ते ||९-२४||",
    english:
      "9.24 (For) I alone am the enjoyer and also the Lord of all sacrifices; but they do not know Me in essence (in reality), and hence they fall (return to this mortal world).",
    hindi:
      "।।9.24।। क्योंकि सब यज्ञों का भोक्ता और स्वामी मैं ही हूँ, परन्तु वे मुझे तत्त्वत: नहीं जानते हैं, इसलिए वे गिरते हैं, अर्थात् संसार को प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 9.24",
  },
  {
    chapter: 9,
    verse: 25,
    sanskrit:
      "यान्ति देवव्रता देवान्पितॄन्यान्ति पितृव्रताः |\nभूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम् ||९-२५||",
    english:
      "9.25 The worshippers of the gods go to them; to the manes go the ancestor-worshippers; to the deities who preside over the elements go their worshippers; but My devotees come to Me.",
    hindi:
      "।।9.25।। देवताओं के पूजक देवताओं को प्राप्त होते हैं, पितरपूजक पितरों को जाते हैं, भूतों का यजन करने वाले भूतों को प्राप्त होते हैं और मुझे पूजने वाले भक्त मुझे ही प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 9.25",
  },
  {
    chapter: 9,
    verse: 26,
    sanskrit:
      "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति |\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ||९-२६||",
    english:
      "9.26 Whoever offers Me with devotion a leaf, a flower, a fruit or a little water  that, so offered devotedly by the pure-minded, I accept.",
    hindi:
      "।।9.26।। जो कोई भी भक्त मेरे लिए पत्र, पुष्प, फल, जल आदि भक्ति से अर्पण करता है, उस शुद्ध मन के भक्त का वह भक्तिपूर्वक अर्पण किया हुआ (पत्र पुष्पादि) मैं भोगता हूँ अर्थात् स्वीकार करता हूँ।।",
    commentary: "A simple summary of verse 9.26",
  },
  {
    chapter: 9,
    verse: 27,
    sanskrit:
      "यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् |\nयत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् ||९-२७||",
    english:
      "9.27 Whatever thou doest, whatever thou eatest, whatever thou offerest in sacrifice, whatever thou givest, whatever thou practisest as austerity, O Arjuna, do it as an offering unto Me.",
    hindi:
      "।।9.27।। हे कौन्तेय ! तुम जो कुछ कर्म करते हो, जो कुछ खाते हो, जो कुछ हवन करते हो, जो कुछ दान देते हो और जो कुछ तप करते हो, वह सब तुम मुझे अर्पण करो।।",
    commentary: "A simple summary of verse 9.27",
  },
  {
    chapter: 9,
    verse: 28,
    sanskrit:
      "शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनैः |\nसंन्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि ||९-२८||",
    english:
      "9.28 Thus shalt thou be freed from the bonds of actions yielding good and evil fruits; with the mind steadfast in the Yoga of renunciation, and liberated, thou shalt come unto Me.",
    hindi:
      "।।9.28।। इस प्रकार तुम शुभाशुभ फलस्वरूप कर्मबन्धनों से मुक्त हो जाओगे; और संन्यासयोग से युक्तचित्त हुए तुम विमुक्त होकर मुझे ही प्राप्त हो जाओगे।।",
    commentary: "A simple summary of verse 9.28",
  },
  {
    chapter: 9,
    verse: 29,
    sanskrit:
      "समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः |\nये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम् ||९-२९||",
    english:
      "9.29 The same am I to all beings; to Me there is none hateful or dear; but those who worship Me with devotion are in Me and I am also in them.",
    hindi:
      "।।9.29।। मैं समस्त भूतों में सम हूँ; न कोई मुझे अप्रिय है और न प्रिय; परन्तु जो मुझे भक्तिपूर्वक भजते हैं, वे मुझमें और मैं भी उनमें हूँ।।",
    commentary: "A simple summary of verse 9.29",
  },
  {
    chapter: 9,
    verse: 30,
    sanskrit:
      "अपि चेत्सुदुराचारो भजते मामनन्यभाक् |\nसाधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः ||९-३०||",
    english:
      "9.30 Even if the most sinful worships Me, with devotion to none else, he too should indeed by regarded as righteous for he has rightly resolved.",
    hindi:
      "।।9.30।। यदि कोई अतिशय दुराचारी भी अनन्यभाव से मेरा भक्त होकर मुझे भजता है, वह साधु ही मानने योग्य है, क्योंकि वह यथार्थ निश्चय वाला है।।",
    commentary: "A simple summary of verse 9.30",
  },
  {
    chapter: 9,
    verse: 31,
    sanskrit:
      "क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति |\nकौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति ||९-३१||",
    english:
      "9.31 Soon he becomes righteous and attains to eternal peace; O Arjuna, proclaim thou for certain that My devotee never perishes.",
    hindi:
      "।।9.31।। हे कौन्तेय, वह शीघ्र ही धर्मात्मा बन जाता है और शाश्वत शान्ति को प्राप्त होता है। तुम निश्चयपूर्वक सत्य जानो कि मेरा भक्त कभी नष्ट नहीं होता।।",
    commentary: "A simple summary of verse 9.31",
  },
  {
    chapter: 9,
    verse: 32,
    sanskrit:
      "मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः |\nस्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम् ||९-३२||",
    english:
      "9.32 For, taking refuge in Me, they also who, O Arjuna, may be of a sinful birth  women, Vaisyas as well as Sudras  attain the Supreme Goal.",
    hindi:
      "।।9.32।। हे पार्थ ! स्त्री, वैश्य और शूद्र ये जो कोई पापयोनि वाले हों, वे भी मुझ पर आश्रित (मेरे शरण) होकर परम गति को प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 9.32",
  },
  {
    chapter: 9,
    verse: 33,
    sanskrit:
      "किं पुनर्ब्राह्मणाः पुण्या भक्ता राजर्षयस्तथा |\nअनित्यमसुखं लोकमिमं प्राप्य भजस्व माम् ||९-३३||",
    english:
      "9.33 How much more (easily) then the hold Brahmins and devoted royal saints (attain the goal); having come to this impermanent and unhappy world, do thou worship Me.",
    hindi:
      "।।9.33।। फिर क्या कहना है कि पुण्यशील ब्राह्मण और राजर्षि भक्तजन (परम गति को प्राप्त होते हैं); (इसलिए) इस अनित्य और सुखरहित लोक को प्राप्त होकर (अब) तुम भक्तिपूर्वक मेरी ही पूजा करो।।",
    commentary: "A simple summary of verse 9.33",
  },
  {
    chapter: 9,
    verse: 34,
    sanskrit:
      "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु |\nमामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः ||९-३४||",
    english:
      "9.34 Fix thy mind on Me; by devoted to Me; sacrifice unto Me; bow down to Me; having thus united thy whole self to Me, taking Me as the supreme goal, thou shalt come unto Me.",
    hindi:
      "।।9.34।। (तुम) मुझमें स्थिर मन वाले बनो; मेरे भक्त और मेरे पूजन करने वाले बनो; मुझे नमस्कार करो; इस प्रकार मत्परायण (अर्थात् मैं ही जिसका परम लक्ष्य हूँ ऐसे) होकर आत्मा को मुझसे युक्त करके तुम मुझे ही प्राप्त होओगे।।",
    commentary: "A simple summary of verse 9.34",
  },
  {
    chapter: 10,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच |\nभूय एव महाबाहो शृणु मे परमं वचः |\nयत्तेऽहं प्रीयमाणाय वक्ष्यामि हितकाम्यया ||१०-१||",
    english:
      "10.1 The Blessed Lord said  Again, O mighty-armed Arjuna, listen to my supreme word which I will declare to thee who who art beloved, for thy welfare.",
    hindi:
      "।।10.1।। श्रीभगवान् ने कहा -- हे महाबाहो ! पुन: तुम मेरे परम वचनों का श्रवण करो, जो मैं तुझ अतिशय प्रेम रखने वाले के लिये हित की इच्छा से कहूँगा।।",
    commentary: "A simple summary of verse 10.1",
  },
  {
    chapter: 10,
    verse: 2,
    sanskrit:
      "न मे विदुः सुरगणाः प्रभवं न महर्षयः |\nअहमादिर्हि देवानां महर्षीणां च सर्वशः ||१०-२||",
    english:
      "10.2 Neither the hosts of the gods nor the great sages know My origin; for in every way I am the source of all the gods and the great sages.",
    hindi:
      "।।10.2।। मेरी उत्पत्ति (प्रभव) को न देवतागण जानते हैं और न महर्षिजन; क्योंकि मैं सब प्रकार से देवताओं और महर्षियों का भी आदिकारण हूँ।।",
    commentary: "A simple summary of verse 10.2",
  },
  {
    chapter: 10,
    verse: 3,
    sanskrit:
      "यो मामजमनादिं च वेत्ति लोकमहेश्वरम् |\nअसम्मूढः स मर्त्येषु सर्वपापैः प्रमुच्यते ||१०-३||",
    english:
      "10.3 He who knows Me as unborn and beginningless, as the great Lord of the worlds, he, among mortals, is undeluded and he is liberated from all sins.",
    hindi:
      "।।10.3।। जो मुझे अजन्मा, अनादि और लोकों के महान् ईश्वर के रूप में जानता है, र्मत्य मनुष्यों में ऐसा संमोहरहित (ज्ञानी) पुरुष सब पापों से मुक्त हो जाता है।।",
    commentary: "A simple summary of verse 10.3",
  },
  {
    chapter: 10,
    verse: 4,
    sanskrit:
      "बुद्धिर्ज्ञानमसम्मोहः क्षमा सत्यं दमः शमः |\nसुखं दुःखं भवोऽभावो भयं चाभयमेव च ||१०-४||",
    english:
      "10.4 Intellect, wisdom, non-delusion, forgiveness, truth, self-restraint, calmness, happiness, pain, existence or birth, non-existence or death, fear and also fearlessness.",
    hindi:
      "।।10.4।। बुद्धि, ज्ञान, मोह का अभाव, क्षमा, सत्य, दम (इन्द्रिय संयम), शम (मन: संयम), सुख, दु:ख, जन्म और मृत्यु, भय और अभय।।",
    commentary: "A simple summary of verse 10.4",
  },
  {
    chapter: 10,
    verse: 5,
    sanskrit:
      "अहिंसा समता तुष्टिस्तपो दानं यशोऽयशः |\nभवन्ति भावा भूतानां मत्त एव पृथग्विधाः ||१०-५||",
    english:
      "10.5 Non-injury, eanimity, contentment, austerity, beneficence, fame, ill-fame  (these) different kinds of alities of beings arise from Me alone.",
    hindi:
      "।।10.5।। अहिंसा, समता, सन्तोष, तप, दान. यश और अपयश ऐसे ये प्राणियों के नानाविध भाव मुझ से ही प्रकट होते हैं।।",
    commentary: "A simple summary of verse 10.5",
  },
  {
    chapter: 10,
    verse: 6,
    sanskrit:
      "महर्षयः सप्त पूर्वे चत्वारो मनवस्तथा |\nमद्भावा मानसा जाता येषां लोक इमाः प्रजाः ||१०-६||",
    english:
      "10.6 The seven great sages, the ancient four and also the Manus, possessed of powers like Me (on account of their minds being fixed on Me), were born of (My) mind; from them are these creatures born in this world.",
    hindi:
      "।।10.6।। सात महर्षिजन, पूर्वकाल के चार (सनकादि) तथा (चौदह) मनु ये मेरे प्रभाव वाले मेरे संकल्प से उत्पन्न हुए हैं, जिनकी संसार (लोक) में यह प्रजा है।।",
    commentary: "A simple summary of verse 10.6",
  },
  {
    chapter: 10,
    verse: 7,
    sanskrit:
      "एतां विभूतिं योगं च मम यो वेत्ति तत्त्वतः |\nसोऽविकम्पेन योगेन युज्यते नात्र संशयः ||१०-७||",
    english:
      "10.7 He who in truth knows these manifold manifestations of My Being and (this) Yoga-power of Mine becomes established in the unshakable Yoga; there is no doubt about it.",
    hindi:
      "।।10.7।। जो पुरुष इस मेरी विभूति और योग को तत्त्व से जानता है, वह पुरुष अविकम्प योग (अर्थात् निश्चल ध्यान योग) से युक्त हो जाता है, इसमें कुछ भी संशय नहीं है।।",
    commentary: "A simple summary of verse 10.7",
  },
  {
    chapter: 10,
    verse: 8,
    sanskrit:
      "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते |\nइति मत्वा भजन्ते मां बुधा भावसमन्विताः ||१०-८||",
    english:
      "10.8 I am the source of all; from Me everything evolves; understanding thus, the wise, endowed with meditation, worship Me.",
    hindi:
      "।।10.8।। मैं ही सबका प्रभव स्थान हूँ; मुझसे ही सब (जगत्) विकास को प्राप्त होता है, इस प्रकार जानकर बुधजन भक्ति भाव से युक्त होकर मुझे ही भजते हैं।।",
    commentary: "A simple summary of verse 10.8",
  },
  {
    chapter: 10,
    verse: 9,
    sanskrit:
      "मच्चित्ता मद्गतप्राणा बोधयन्तः परस्परम् |\nकथयन्तश्च मां नित्यं तुष्यन्ति च रमन्ति च ||१०-९||",
    english:
      "10.9 With their mind and their life wholly absorbed in Me, enlightening each other and ever speaking of Me, they are satisfied and delighted.",
    hindi:
      "।।10.9।। मुझमें ही चित्त को स्थिर करने वाले और मुझमें ही प्राणों (इन्द्रियों) को अर्पित करने वाले भक्तजन, सदैव परस्पर मेरा बोध कराते हुए, मेरे ही विषय में कथन करते हुए सन्तुष्ट होते हैं और रमते हैं।।",
    commentary: "A simple summary of verse 10.9",
  },
  {
    chapter: 10,
    verse: 10,
    sanskrit:
      "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम् |\nददामि बुद्धियोगं तं येन मामुपयान्ति ते ||१०-१०||",
    english:
      "10.10 To them who are ever steadfast, worshipping Me with love, I give the Yoga of discrimination by which they come to Me.",
    hindi:
      "।।10.10।। उन (मुझ से) नित्य युक्त हुए और प्रेमपूर्वक मेरा भजन करने वाले भक्तों को, मैं वह 'बुद्धियोग' देता हूँ जिससे वे मुझे प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 10.10",
  },
  {
    chapter: 10,
    verse: 11,
    sanskrit:
      "तेषामेवानुकम्पार्थमहमज्ञानजं तमः |\nनाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता ||१०-११||",
    english:
      "10.11 Out of mere compassion for them, I, dwelling within their Self, destroy the darkness born of ignorance by the luminous lamp of knowledge.",
    hindi:
      "।।10.11।। उनके ऊपर अनुग्रह करने के लिए मैं उनके अन्त:करण में स्थित होकर, अज्ञानजनित अन्धकार को प्रकाशमय ज्ञान के दीपक द्वारा नष्ट करता हूँ।।",
    commentary: "A simple summary of verse 10.11",
  },
  {
    chapter: 10,
    verse: 12,
    sanskrit:
      "अर्जुन उवाच |\nपरं ब्रह्म परं धाम पवित्रं परमं भवान् |\nपुरुषं शाश्वतं दिव्यमादिदेवमजं विभुम् ||१०-१२||",
    english:
      "10.12 Arjuna said  Thou art the Supreme Brahman, the supreme abode (or the supreme light), the supreme purifier, eternal, divine Person, the primeval God, unborn andn omnipresent.",
    hindi:
      "।।10.12।। अर्जुन ने कहा आप -परम ब्रह्म, परम धाम और परम पवित्र हंै; सनातन दिव्य पुरुष, देवों के भी आदि देव, जन्म रहित और सर्वव्यापी हैं।।",
    commentary: "A simple summary of verse 10.12",
  },
  {
    chapter: 10,
    verse: 13,
    sanskrit:
      "आहुस्त्वामृषयः सर्वे देवर्षिर्नारदस्तथा |\nअसितो देवलो व्यासः स्वयं चैव ब्रवीषि मे ||१०-१३||",
    english:
      "10.13 All the sages have thus declared Thee, as also the divine sage Narada; so also Asita, Devala and Vyasa; and now Thou Thyself sayest so to me.",
    hindi:
      "।।10.13।। ऐसा आपको समस्त ऋषिजन कहते हैं;  वैसे ही देवर्षि नारद, असित, देवल ऋषि तथा व्यास और स्वयं आप भी मेरे प्रति कहते हैं।।",
    commentary: "A simple summary of verse 10.13",
  },
  {
    chapter: 10,
    verse: 14,
    sanskrit:
      "सर्वमेतदृतं मन्ये यन्मां वदसि केशव |\nन हि ते भगवन्व्यक्तिं विदुर्देवा न दानवाः ||१०-१४||",
    english:
      "10.14 I believe all this that Thou sayest to me to be true, O Krishna; verily, O blessed Lord! neither the gods nor the demons know Thy manifestation (origin).",
    hindi:
      "।।10.14।। हे केशव ! जो कुछ भी आप मेरे प्रति कहते हैं, इस सबको मैं सत्य मानता हूँ। हे भगवन्, आपके (वास्तविक) स्वरूप को न देवता जानते हैं और न दानव।।",
    commentary: "A simple summary of verse 10.14",
  },
  {
    chapter: 10,
    verse: 15,
    sanskrit:
      "स्वयमेवात्मनात्मानं वेत्थ त्वं पुरुषोत्तम |\nभूतभावन भूतेश देवदेव जगत्पते ||१०-१५||",
    english: "Swami Sivananda did not comment on this sloka",
    hindi:
      "।।10.15।। हे पुरुषोत्तम ! हे भूतभावन ! हे भूतेश ! हे देवों के देव ! हे जगत् के स्वामी ! आप स्वयं ही अपने आप को जानते हैं।।",
    commentary: "A simple summary of verse 10.15",
  },
  {
    chapter: 10,
    verse: 16,
    sanskrit:
      "वक्तुमर्हस्यशेषेण दिव्या ह्यात्मविभूतयः |\nयाभिर्विभूतिभिर्लोकानिमांस्त्वं व्याप्य तिष्ठसि ||१०-१६||",
    english:
      "10.16 Thou shouldst indeed tell, without reserve, of Thy divine glories by which Thou existest, pervading all these worlds. (None else can do so.)",
    hindi:
      "।।10.16।। आप ही उन अपनी दिव्य विभूतियों को अशेषत: कहने के लिए योग्य हैं, जिन विभूतियों के द्वारा इन समस्त लोकों को आप व्याप्त करके स्थित हैं।।",
    commentary: "A simple summary of verse 10.16",
  },
  {
    chapter: 10,
    verse: 17,
    sanskrit:
      "कथं विद्यामहं योगिंस्त्वां सदा परिचिन्तयन् |\nकेषु केषु च भावेषु चिन्त्योऽसि भगवन्मया ||१०-१७||",
    english:
      "10.17 How shall I, ever meditating, know Thee, O Yogin? In what aspects or things, O blessed \nLord, art Thou to be thought of by me?",
    hindi:
      "।।10.17।। हे योगेश्वर ! मैं किस प्रकार निरन्तर चिन्तन करता हुआ आपको जानूँ, और हे भगवन् ! आप किनकिन भावों में मेरे द्वारा चिन्तन करने योग्य हैं।।",
    commentary: "A simple summary of verse 10.17",
  },
  {
    chapter: 10,
    verse: 18,
    sanskrit:
      "विस्तरेणात्मनो योगं विभूतिं च जनार्दन |\nभूयः कथय तृप्तिर्हि शृण्वतो नास्ति मेऽमृतम् ||१०-१८||",
    english:
      "10.18 Tell me again in detail, O Krishna, of Thy Yogic power and glory; for I am not satiated with what I have heard of Thy life-giving and nectar-like speech.",
    hindi:
      "।।10.18।। हे जनार्दन ! अपनी योग शक्ति और विभूति को पुन: विस्तारपूर्वक कहिए, क्योंकि आपके अमृतमय वचनों को सुनते हुए मुझे तृप्ति नहीं होती।।",
    commentary: "A simple summary of verse 10.18",
  },
  {
    chapter: 10,
    verse: 19,
    sanskrit:
      "श्रीभगवानुवाच |\nहन्त ते कथयिष्यामि दिव्या ह्यात्मविभूतयः |\nप्राधान्यतः कुरुश्रेष्ठ नास्त्यन्तो विस्तरस्य मे ||१०-१९||",
    english:
      "10.19 The Blessed Lord said  Very well! Now I will declare to thee My divine glories in their prominence, O Arjuna; there is no end to their detailed description.",
    hindi:
      "।।10.19।। श्रीभगवान् ने कहा -हन्त अब मैं तुम्हें अपनी दिव्य विभूतियों को प्रधानता से कहूँगा। हे कुरुश्रेष्ठ मेरे विस्तार का अन्त नहीं है।।",
    commentary: "A simple summary of verse 10.19",
  },
  {
    chapter: 10,
    verse: 20,
    sanskrit:
      "अहमात्मा गुडाकेश सर्वभूताशयस्थितः |\nअहमादिश्च मध्यं च भूतानामन्त एव च ||१०-२०||",
    english:
      "10.20 I am the Self, O Gudakesa, seated in the hearts of all beings; I am the beginning, the middle and also the end of all beings.",
    hindi:
      "।।10.20।। हे गुडाकेश (निद्राजित्) ! मैं समस्त भूतों के हृदय में स्थित सबकी आत्मा हूँ तथा सम्पूर्ण भूतों का आदि, मध्य और अन्त भी मैं ही हूँ।।",
    commentary: "A simple summary of verse 10.20",
  },
  {
    chapter: 10,
    verse: 21,
    sanskrit:
      "आदित्यानामहं विष्णुर्ज्योतिषां रविरंशुमान् |\nमरीचिर्मरुतामस्मि नक्षत्राणामहं शशी ||१०-२१||",
    english:
      "10.21 Among the (twelve) Adityas, I am Vishnu; among luminaries, the radiant sun; I am Marichi among the (seven or forty-nine) Maruts; among stars the moon am I.",
    hindi:
      "।।10.21।। मैं (बारह) आदित्यों में विष्णु और ज्योतियों में अंशुमान् सूर्य हूँ; मैं (उनचास) मरुतों (वायु देवताओं) में मरीचि हूँ और नक्षत्रों में शशी (चन्द्रमा) हूँ।।",
    commentary: "A simple summary of verse 10.21",
  },
  {
    chapter: 10,
    verse: 22,
    sanskrit:
      "वेदानां सामवेदोऽस्मि देवानामस्मि वासवः |\nइन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना ||१०-२२||",
    english:
      "10.22 Among the Vedas I am the Sama-Veda; I am Vasava among the gods; among the senses I am the mind; and I am intelligence among living beings.",
    hindi:
      "।।10.22।। मैं वेदों में सामवेद हूँ, देवों में वासव (इन्द्र) हूँ; मैं इन्द्रियों में मन और भूतप्राणियों में चेतना (ज्ञानशक्ति) हूँ।।",
    commentary: "A simple summary of verse 10.22",
  },
  {
    chapter: 10,
    verse: 23,
    sanskrit:
      "रुद्राणां शङ्करश्चास्मि वित्तेशो यक्षरक्षसाम् |\nवसूनां पावकश्चास्मि मेरुः शिखरिणामहम् ||१०-२३||",
    english:
      "10.23 And, among the Rudras I am Sankara; among the Yakshas and Rakshasas, the Lord of wealth (Kubera); among the Vasus I am Pavaka (fire); and among the (seven) mountains I am the Meru.",
    hindi:
      "।।10.23।। मैं (ग्यारह) रुद्रों में शंकर हूँ और यक्ष तथा राक्षसों में धनपति कुबेर (वित्तेश) हूँ; (आठ) वसुओं में अग्नि हूँ तथा शिखर वाले पर्वतों में मेरु हूँ।।",
    commentary: "A simple summary of verse 10.23",
  },
  {
    chapter: 10,
    verse: 24,
    sanskrit:
      "पुरोधसां च मुख्यं मां विद्धि पार्थ बृहस्पतिम् |\nसेनानीनामहं स्कन्दः सरसामस्मि सागरः ||१०-२४||",
    english:
      "10.24 And, among the household priests (of kings), O Arjuna, know Me to be the chief, Brihaspati; among the army generals I am Skana; among lakes I am the ocean.\n'",
    hindi:
      "।।10.24।। हे पार्थ ! पुरोहितों में मुझे बृहस्पति जानो; मैं सेनापतियों में स्कन्द और जलाशयों में समुद्र हूँ।।",
    commentary: "A simple summary of verse 10.24",
  },
  {
    chapter: 10,
    verse: 25,
    sanskrit:
      "महर्षीणां भृगुरहं गिरामस्म्येकमक्षरम् |\nयज्ञानां जपयज्ञोऽस्मि स्थावराणां हिमालयः ||१०-२५||",
    english:
      "10.25 Among the great sages I am Bhrigu; among words I am the one syllable (Om); among sacrifices I am the sacrifice of silent repetition; among the immovable things I am the Himalayas.",
    hindi:
      "।।10.25।। मैं महर्षियों में भृगु और वाणी (शब्दों) में एकाक्षर ओंकार हूँ। मैं यज्ञों में जपयज्ञ और स्थावरों (अचलों) में हिमालय हूँ।।",
    commentary: "A simple summary of verse 10.25",
  },
  {
    chapter: 10,
    verse: 26,
    sanskrit:
      "अश्वत्थः सर्ववृक्षाणां देवर्षीणां च नारदः |\nगन्धर्वाणां चित्ररथः सिद्धानां कपिलो मुनिः ||१०-२६||",
    english:
      "10.26 Among all the trees ( I am) the Peepul; among the divine sages, I am Narada; among Gandharvas, Chitraratha; among the perfected, the sage Kapila.",
    hindi:
      "।।10.26।। मैं समस्त वृक्षों में अश्वत्थ (पीपल) हूँ और देवर्षियों में नारद हूँ; मैं गन्धर्वों में चित्ररथ और सिद्ध पुरुषों में कपिल मुनि हूँ।।",
    commentary: "A simple summary of verse 10.26",
  },
  {
    chapter: 10,
    verse: 27,
    sanskrit:
      "उच्चैःश्रवसमश्वानां विद्धि माममृतोद्भवम् |\nऐरावतं गजेन्द्राणां नराणां च नराधिपम् ||१०-२७||",
    english:
      "10.27 Know Me as Ucchaisravas born of nectar, among horses; among lordly elephants (I am) the Airavata; and, among men, the king.",
    hindi:
      "।।10.27।। अश्वों में अमृत से उत्पन्न हुए उच्चैश्रवा नामक अश्व, हाथियों में ऐरावत और मनुष्यों में राजा मुझे ही जानो।।",
    commentary: "A simple summary of verse 10.27",
  },
  {
    chapter: 10,
    verse: 28,
    sanskrit:
      "आयुधानामहं वज्रं धेनूनामस्मि कामधुक् |\nप्रजनश्चास्मि कन्दर्पः सर्पाणामस्मि वासुकिः ||१०-२८||",
    english:
      "10.28 Among weapons I am the thunderbolt; among cows I am the wish-fulfilling cow called Kamadhenu; I am the progenitor, the god of love; among serpents I am Vasuki.",
    hindi:
      "।।10.28।। मैं शस्त्रों में वज्र और धेनुओं (गायों) में कामधेनु हूँ, प्रजा उत्पत्ति का हेतु कन्दर्प (कामदेव) मैं हूँ और सर्पों में वासुकि हूँ।।",
    commentary: "A simple summary of verse 10.28",
  },
  {
    chapter: 10,
    verse: 29,
    sanskrit:
      "अनन्तश्चास्मि नागानां वरुणो यादसामहम् |\nपितॄणामर्यमा चास्मि यमः संयमतामहम् ||१०-२९||",
    english:
      "10.29 I am Ananta among the Nagas; I am Varuna among water-deities; Aryaman among the Manes I am; I am Yama among the governors.",
    hindi:
      "।।10.29।। मैं नागों में अनन्त (शेषनाग) हूँ और जल देवताओं में वरुण हूँ; मैं पितरों में अर्यमा हँ और नियमन करने वालों में यम हूँ।।",
    commentary: "A simple summary of verse 10.29",
  },
  {
    chapter: 10,
    verse: 30,
    sanskrit:
      "प्रह्लादश्चास्मि दैत्यानां कालः कलयतामहम् |\nमृगाणां च मृगेन्द्रोऽहं वैनतेयश्च पक्षिणाम् ||१०-३०||",
    english:
      "10.30 And, I am Prahlada among the demons, among the reckoners I am time; among beasts I am the lion, and Vainateya (Garuda) among birds.",
    hindi:
      "।।10.30।। मैं दैत्यों में प्रह्लाद और गणना करने वालों में काल हूँ, मैं 'पशुओं' में सिंह (मृगेन्द्र) और पक्षियों में गरुड़ हूँ।।",
    commentary: "A simple summary of verse 10.30",
  },
  {
    chapter: 10,
    verse: 31,
    sanskrit:
      "पवनः पवतामस्मि रामः शस्त्रभृतामहम् |\nझषाणां मकरश्चास्मि स्रोतसामस्मि जाह्नवी ||१०-३१||",
    english:
      "10.31 Among the purifiers (or the speeders) I am the wind; Rama among the warriors am I; among the fishes I am the shark; among the streams I am the Ganga.",
    hindi:
      "।।10.31।। मैं पवित्र करने वालों में वायु हूँ और शस्त्रधारियों में राम हूँ; तथा मत्स्यों (जलचरों) में मैं मगरमच्छ और नदियों में मैं गंगा हूँ।।",
    commentary: "A simple summary of verse 10.31",
  },
  {
    chapter: 10,
    verse: 32,
    sanskrit:
      "सर्गाणामादिरन्तश्च मध्यं चैवाहमर्जुन |\nअध्यात्मविद्या विद्यानां वादः प्रवदतामहम् ||१०-३२||",
    english:
      "10.32 Among creations I am the beginning, the middle and also the end, O Arjuna; among the sciences I am the science of the Self; and I am the logic among controversialists.",
    hindi:
      "।।10.32।। हे अर्जुन ! सृष्टियों का आदि, अन्त और मध्य भी मैं ही हूँ, मैं विद्याओं में अध्यात्मविद्या और विवाद करने वालों में (अर्थात् विवाद के प्रकारों में) मैं वाद हूँ।।",
    commentary: "A simple summary of verse 10.32",
  },
  {
    chapter: 10,
    verse: 33,
    sanskrit:
      "अक्षराणामकारोऽस्मि द्वन्द्वः सामासिकस्य च |\nअहमेवाक्षयः कालो धाताहं विश्वतोमुखः ||१०-३३||",
    english:
      "10.33 Among the letters of the alphabets, the letter 'A' I am and the dual among the compounds. I am verily the inexhaustible or everlasting time; I am the dispenser (of the fruits of actions) having \nfaces in all directions.",
    hindi:
      "।।10.33।। मैं अक्षरों (वर्णमाला) में अकार और समासों में द्वन्द्व (नामक समास) हूँ; मैं अक्षय काल और विश्वतोमुख (विराट् स्वरूप) धाता हूँ।।",
    commentary: "A simple summary of verse 10.33",
  },
  {
    chapter: 10,
    verse: 34,
    sanskrit:
      "मृत्युः सर्वहरश्चाहमुद्भवश्च भविष्यताम् |\nकीर्तिः श्रीर्वाक्च नारीणां स्मृतिर्मेधा धृतिः क्षमा ||१०-३४||",
    english:
      "10.34 And I am the all-devouring Death, and the prosperity of those who are to be prosperous; among the feminine alities (I am) fame, prosperity, speech, memory, intelligence, firmness and forgiveness.",
    hindi:
      "।।10.34।। मैं सर्वभक्षक मृत्यु और भविष्य में होने वालों की उत्पत्ति का कारण हूँ; स्त्रियों में कीर्ति, श्री, वाक (वाणी), स्मृति, मेधा, धृति और क्षमा हूँ।।",
    commentary: "A simple summary of verse 10.34",
  },
  {
    chapter: 10,
    verse: 35,
    sanskrit:
      "बृहत्साम तथा साम्नां गायत्री छन्दसामहम् |\nमासानां मार्गशीर्षोऽहमृतूनां कुसुमाकरः ||१०-३५||",
    english:
      "10.35 Among the hymns also I am the Brihatsaman; among metres Gayatri am I; among the montsh I am the Margasirsha; among the seasons (I am) the flowery season.",
    hindi:
      "।।10.35।। सामों (गेय मन्त्रों) में मैं बृहत्साम और छन्दों में गायत्री छन्द हूँ; मैं मासों में मार्गशीर्ष (दिसम्बरजनवरी के भाग) और ऋतुओं में वसन्त हूँ।।",
    commentary: "A simple summary of verse 10.35",
  },
  {
    chapter: 10,
    verse: 36,
    sanskrit:
      "द्यूतं छलयतामस्मि तेजस्तेजस्विनामहम् |\nजयोऽस्मि व्यवसायोऽस्मि सत्त्वं सत्त्ववतामहम् ||१०-३६||",
    english:
      "10.36 I am the gambling of the fraudulent; I am the splendour of the splendid; I am victory; I am determination (of those who are determined); I am the goodness of the good.",
    hindi:
      "।।10.36।। मैं छल करने वालों में द्यूत हूँ और तेजस्वियों में तेज हूँ, मैं विजय हूँ; मैं व्यवसाय (उद्यमशीलता) हूँ और सात्विक पुरुषों का सात्विक भाव हूँ।।",
    commentary: "A simple summary of verse 10.36",
  },
  {
    chapter: 10,
    verse: 37,
    sanskrit:
      "वृष्णीनां वासुदेवोऽस्मि पाण्डवानां धनञ्जयः |\nमुनीनामप्यहं व्यासः कवीनामुशना कविः ||१०-३७||",
    english:
      "10.37 Among the Vrishnis I am Vaasudeva; among the Pandavas I am Arjuna; among the sages I am Vyasa; among the Poets I am Usanas, the poet.",
    hindi:
      "।।10.37।। मैं वृष्णियों में वासुदेव हूँ और पाण्डवों में धनंजय, मैं मुनियों में व्यास और कवियों में उशना कवि हूँ।।",
    commentary: "A simple summary of verse 10.37",
  },
  {
    chapter: 10,
    verse: 38,
    sanskrit:
      "दण्डो दमयतामस्मि नीतिरस्मि जिगीषताम् |\nमौनं चैवास्मि गुह्यानां ज्ञानं ज्ञानवतामहम् ||१०-३८||",
    english:
      "10.38 Of those who punish, I am the sceptre; among those who seek victory, I am statesmanship; and also among secrets, I am silence; knowledge among knowers I am.",
    hindi:
      "।।10.38।। मैं दमन करने वालों का दण्ड हूँ और विजयेच्छुओं की नीति हूँ; मैं गुह्यों में मौन हूँ और ज्ञानवानों का ज्ञान हूँ।।",
    commentary: "A simple summary of verse 10.38",
  },
  {
    chapter: 10,
    verse: 39,
    sanskrit:
      "यच्चापि सर्वभूतानां बीजं तदहमर्जुन |\nन तदस्ति विना यत्स्यान्मया भूतं चराचरम् ||१०-३९||",
    english:
      "10.39 And whatever is the seed of all beings, that also am I, O Arjuna; there is no being, whether moving or unmoving, that can exist without Me.",
    hindi:
      "।।10.39।। हे अर्जुन ! जो समस्त भूतों की उत्पत्ति का बीज (कारण) है, वह भी में ही हूँ, क्योंकि ऐसा कोई चर और अचर भूत नहीं है, जो मुझसे रहित है।।",
    commentary: "A simple summary of verse 10.39",
  },
  {
    chapter: 10,
    verse: 40,
    sanskrit:
      "नान्तोऽस्ति मम दिव्यानां विभूतीनां परन्तप |\nएष तूद्देशतः प्रोक्तो विभूतेर्विस्तरो मया ||१०-४०||",
    english:
      "10.40 There is no end to My divine gloreis, O Arjuna, but this is a brief statement by Me of the particulars of My divine glories.",
    hindi:
      "।।10.40।। हे परन्तप ! मेरी दिव्य विभूतियों का अन्त नहीं है; अपनी विभूतियों का यह विस्तार मैंने एक देश से अर्थात् संक्षेप में कहा है।।",
    commentary: "A simple summary of verse 10.40",
  },
  {
    chapter: 10,
    verse: 41,
    sanskrit:
      "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा |\nतत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम् ||१०-४१||",
    english:
      "10.41 Whatever being there is glorious, prosperous or powerful, that know thou to be a manifestation of a part of My splendour.",
    hindi:
      "।।10.41।। जो कोई भी विभूतियुक्त, कान्तियुक्त अथवा शक्तियुक्त वस्तु (या प्राणी) है, उसको तुम मेरे तेज के अंश से ही उत्पन्न हुई जानो।।",
    commentary: "A simple summary of verse 10.41",
  },
  {
    chapter: 10,
    verse: 42,
    sanskrit:
      "अथवा बहुनैतेन किं ज्ञातेन तवार्जुन |\nविष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत् ||१०-४२||",
    english:
      "10.42 But, of what avail to thee is the knowledge of all these details, O Arjuna? I exist, supporting this whole world by one part of Myself.",
    hindi:
      "।।10.42।। अथवा हे अर्जुन ! बहुत जानने से तुम्हारा क्या प्रयोजन है? मैं इस सम्पूर्ण जगत् को अपने एक अंश मात्र से धारण करके स्थित हूँ।।",
    commentary: "A simple summary of verse 10.42",
  },
  {
    chapter: 11,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच |\nमदनुग्रहाय परमं गुह्यमध्यात्मसंज्ञितम् |\nयत्त्वयोक्तं वचस्तेन मोहोऽयं विगतो मम ||११-१||",
    english:
      "11.1 Arjuna said  By this word (explanation) of the highest secret concerning the Self which Thou hast spoken, for the sake of blessing me, my delusion is gone.",
    hindi:
      "।।11.1।। अर्जुन ने कहा -- मुझ पर अनुग्रह करने के लिए जो परम गोपनीय, अध्यात्मविषयक वचन (उपदेश) आपके द्वारा कहा गया, उससे मेरा मोह दूर हो गया है।।",
    commentary: "A simple summary of verse 11.1",
  },
  {
    chapter: 11,
    verse: 2,
    sanskrit:
      "भवाप्ययौ हि भूतानां श्रुतौ विस्तरशो मया |\nत्वत्तः कमलपत्राक्ष माहात्म्यमपि चाव्ययम् ||११-२||",
    english:
      "11.2 The origin and the destruction of beings verily have been heard by me in detail from Thee, O lotus-eyed Lord, and also Thy inexhaustible greatness.",
    hindi:
      "।।11.2।। हे कमलनयन ! मैंने भूतों की उत्पत्ति और प्रलय आपसे विस्तारपूर्वक सुने हैं तथा आपका अव्यय माहात्म्य (प्रभाव) भी सुना है।।",
    commentary: "A simple summary of verse 11.2",
  },
  {
    chapter: 11,
    verse: 3,
    sanskrit:
      "एवमेतद्यथात्थ त्वमात्मानं परमेश्वर |\nद्रष्टुमिच्छामि ते रूपमैश्वरं पुरुषोत्तम ||११-३||",
    english:
      "11.3 (Now) O Supreme Lord, as Thou hast thus described Thyself, O Supreme Person, I wish to see Thy divine form.",
    hindi:
      "।।11.3।। हे परमेश्वर ! आप अपने को जैसा कहते हो, यह ठीक ऐसा ही है। (परन्तु) हे पुरुषोत्तम ! मैं आपके ईश्वरीय रूप को प्रत्यक्ष देखना चाहता हूँ।।",
    commentary: "A simple summary of verse 11.3",
  },
  {
    chapter: 11,
    verse: 4,
    sanskrit:
      "मन्यसे यदि तच्छक्यं मया द्रष्टुमिति प्रभो |\nयोगेश्वर ततो मे त्वं दर्शयात्मानमव्ययम् ||११-४||",
    english:
      "11.4 If Thou, O Lord, thinkest it possible for me to see it, do Thou, then, O Lord of the Yogins, show me Thy imperishable Self.",
    hindi:
      "।।11.4।। हे प्रभो ! यदि आप मानते हैं कि मेरे द्वारा वह आपका रूप देखा जाना संभव है, तो हे योगेश्वर ! आप अपने अव्यय रूप का दर्शन कराइये।।",
    commentary: "A simple summary of verse 11.4",
  },
  {
    chapter: 11,
    verse: 5,
    sanskrit:
      "श्रीभगवानुवाच |\nपश्य मे पार्थ रूपाणि शतशोऽथ सहस्रशः |\nनानाविधानि दिव्यानि नानावर्णाकृतीनि च ||११-५||",
    english:
      "11.5 The Blessed Lord said  Behold, O Arjuna, forms of Mine, by the hundreds and thousands, of different sorts, divine, and of various colours and shapes.",
    hindi:
      "।।11.5।। श्रीभगवान् ने कहा -- हे पार्थ ! मेरे सैकड़ों तथा सहस्रों नाना प्रकार के और नाना वर्ण तथा आकृति वाले दिव्य रूपों को देखो।।",
    commentary: "A simple summary of verse 11.5",
  },
  {
    chapter: 11,
    verse: 6,
    sanskrit:
      "पश्यादित्यान्वसून्रुद्रानश्विनौ मरुतस्तथा |\nबहून्यदृष्टपूर्वाणि पश्याश्चर्याणि भारत ||११-६||",
    english:
      "11.6 Behold the Adityas, the Vasus, the Rudras, the two Asvins and also the Maruts; behold many wonders never seen before, O Arjuna.",
    hindi:
      "।।11.6।। हे भारत ! (मुझमें) आदित्यों, वसुओं, रुद्रों तथा अश्विनीकुमारों और मरुद्गणों को देखो, तथा और भी अनेक इसके पूर्व कभी न देखे हुए आश्चर्यों को देखो।।",
    commentary: "A simple summary of verse 11.6",
  },
  {
    chapter: 11,
    verse: 7,
    sanskrit:
      "इहैकस्थं जगत्कृत्स्नं पश्याद्य सचराचरम् |\nमम देहे गुडाकेश यच्चान्यद् द्रष्टुमिच्छसि ||११-७||",
    english:
      "11.7 Now behold, O Arjuna, in this, My body, the whole universe centred in one  including the moving and the unmoving  and whatever else thou desirest to see.",
    hindi:
      "।।11.7।। हे गुडाकेश ! आज (अब) इस मेरे शरीर में एक स्थान पर स्थित हुए चराचर सहित सम्पूर्ण जगत् को देखो तथा और भी जो कुछ तुम देखना चाहते हो, उसे भी देखो।।",
    commentary: "A simple summary of verse 11.7",
  },
  {
    chapter: 11,
    verse: 8,
    sanskrit:
      "न तु मां शक्यसे द्रष्टुमनेनैव स्वचक्षुषा |\nदिव्यं ददामि ते चक्षुः पश्य मे योगमैश्वरम् ||११-८||",
    english:
      "11.8 But thou art not able to behold Me with these thine own eyes; I give thee the divine eye; behold My lordly Yoga.",
    hindi:
      "।।11.8।। परन्तु तुम अपने इन्हीं (प्राकृत) नेत्रों के द्वारा मुझे देखने में समर्थ नहीं हो; (इसलिए) मैं तुम्हें दिव्यचक्षु देता हूँ, जिससे तुम मेरे ईश्वरीय 'योग' को देखो।।",
    commentary: "A simple summary of verse 11.8",
  },
  {
    chapter: 11,
    verse: 9,
    sanskrit:
      "सञ्जय उवाच |\nएवमुक्त्वा ततो राजन्महायोगेश्वरो हरिः |\nदर्शयामास पार्थाय परमं रूपमैश्वरम् ||११-९||",
    english:
      "11.9 Sanjaya said  Having thus spoken, O king, the great Lord of Yoga, hari (Krishna), showed to Arjuna His supreme form as the Lord.",
    hindi:
      "।।11.9।। संजय ने कहा -- हे राजन् ! महायोगेश्वर हरि ने इस प्रकार कहकर फिर अर्जुन के लिए परम ऐश्वर्ययुक्त रूप को दर्शाया।।",
    commentary: "A simple summary of verse 11.9",
  },
  {
    chapter: 11,
    verse: 10,
    sanskrit:
      "अनेकवक्त्रनयनमनेकाद्भुतदर्शनम् |\nअनेकदिव्याभरणं दिव्यानेकोद्यतायुधम् ||११-१०||",
    english:
      "11.10 With numerous mouths and eyes, with numerous wonderful sights, with numerous divine ornaments, with numerous divine weapons uplifted (such a form He showed).",
    hindi:
      "।।11.10।। उस अनेक मुख और नेत्रों से युक्त तथा अनेक अद्भुत दर्शनों वाले एवं बहुत से दिव्य भूषणों से युक्त और बहुत से दिव्य शस्त्रों को हाथों में उठाये हुये।।",
    commentary: "A simple summary of verse 11.10",
  },
  {
    chapter: 11,
    verse: 11,
    sanskrit:
      "दिव्यमाल्याम्बरधरं दिव्यगन्धानुलेपनम् |\nसर्वाश्चर्यमयं देवमनन्तं विश्वतोमुखम् ||११-११||",
    english:
      "11.11 Wearing divine garlands (necklaces) and apparel, anointed with divine unguents, the all-wonderful, resplendent (Being) endless with faces on all sides.",
    hindi:
      "।।11.11।। दिव्य माला और वस्त्रों को धारण किये हुये और दिव्य गन्ध का लेपन किये हुये एवं समस्त प्रकार के आश्चर्यों से युक्त अनन्त, विश्वतोमुख (विराट् स्वरूप) परम देव (को अर्जुन ने देखा)।।",
    commentary: "A simple summary of verse 11.11",
  },
  {
    chapter: 11,
    verse: 12,
    sanskrit:
      "दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता |\nयदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः ||११-१२||",
    english:
      "11.12 If the splendour of a thousand suns were to blaze out at once (simultaneously) in the sky, that would be the splendour of that mighty Being (great Soul).",
    hindi:
      "।।11.12।। आकाश में सहस्र सूर्यों के एक साथ उदय होने से उत्पन्न जो प्रकाश होगा, वह उस (विश्वरूप) परमात्मा के प्रकाश के सदृश होगा।।",
    commentary: "A simple summary of verse 11.12",
  },
  {
    chapter: 11,
    verse: 13,
    sanskrit:
      "तत्रैकस्थं जगत्कृत्स्नं प्रविभक्तमनेकधा |\nअपश्यद्देवदेवस्य शरीरे पाण्डवस्तदा ||११-१३||",
    english:
      "11.13 There, in the body of the God of gods, Arjuna then saw the whole universe resting in one, with its many groups.",
    hindi:
      "।।11.13।। पाण्डुपुत्र अर्जुन ने उस समय अनेक प्रकार से विभक्त हुए सम्पूर्ण जगत् को देवों के देव श्रीकृष्ण के शरीर में एक स्थान पर स्थित देखा।।",
    commentary: "A simple summary of verse 11.13",
  },
  {
    chapter: 11,
    verse: 14,
    sanskrit:
      "ततः स विस्मयाविष्टो हृष्टरोमा धनञ्जयः |\nप्रणम्य शिरसा देवं कृताञ्जलिरभाषत ||११-१४||",
    english:
      "11.14 Then, Arjuna, filled with wonder and with his hair standing on end, bowed down his head to the God and spoke with joined palms.",
    hindi:
      "।।11.14।। उसके उपरान्त वह आश्चर्यचकित हुआ हर्षित रोमों वाला (जिसे रोमांच का अनुभव हो रहा हो) धनंजय अर्जुन विश्वरूप देव को (श्रद्धा भक्ति सहित) शिर से प्रणाम करके हाथ जोड़कर बोला।।",
    commentary: "A simple summary of verse 11.14",
  },
  {
    chapter: 11,
    verse: 15,
    sanskrit:
      "अर्जुन उवाच |\nपश्यामि देवांस्तव देव देहे\nसर्वांस्तथा भूतविशेषसङ्घान् |\nब्रह्माणमीशं कमलासनस्थ-\nमृषींश्च सर्वानुरगांश्च दिव्यान् ||११-१५||",
    english:
      "11.15 Arjuna said  I see all the gods, O God, in Thy body, and (also) hosts of various classes of beings, Brahma, the Lord, seated on the lotus, all the sages and the celestial serpents.",
    hindi:
      "।।11.15।। अर्जुन ने कहा -- हे देव! मैं आपके शरीर में समस्त देवों को तथा अनेक भूतविशेषों के समुदायों को और कमलासन पर स्थित सृष्टि के स्वामी ब्रह्माजी को, ऋषियों को और दिव्य सर्पों को देख रहा हूँ।।",
    commentary: "A simple summary of verse 11.15",
  },
  {
    chapter: 11,
    verse: 16,
    sanskrit:
      "अनेकबाहूदरवक्त्रनेत्रं\nपश्यामि त्वां सर्वतोऽनन्तरूपम् |\nनान्तं न मध्यं न पुनस्तवादिं\nपश्यामि विश्वेश्वर विश्वरूप ||११-१६||",
    english:
      "11.16 I see Thee of boundless form on every side with many arms, stomachs, mouths and eyes: neither the end nor the middle nor also the beginning do I see, O Lord of the universe, O Cosmic Form.",
    hindi:
      "।।11.16।। हे विश्वेश्वर! मैं आपकी अनेक बाहु, उदर, मुख और नेत्रों से युक्त तथा सब ओर से अनन्त रूपों वाला देखता हूँ। हे विश्वरूप! मैं आपके न अन्त को देखता हूँ और न मध्य को और न आदि को।।",
    commentary: "A simple summary of verse 11.16",
  },
  {
    chapter: 11,
    verse: 17,
    sanskrit:
      "किरीटिनं गदिनं चक्रिणं च\nतेजोराशिं सर्वतो दीप्तिमन्तम् |\nपश्यामि त्वां दुर्निरीक्ष्यं समन्ताद्\nदीप्तानलार्कद्युतिमप्रमेयम् ||११-१७||",
    english:
      "11.17 I see Thee with the diadem, the club and the discus, a mass of radiance shining \neverywhere, very hard to look at, blazing all round like burning fire and the sun, and immeasurable.",
    hindi:
      "।।11.17।। मैं आपका मुकुटयुक्त, गदायुक्त और चक्रधारण किये हुये तथा सब ओर से प्रकाशमान् तेज का पुंज, दीप्त अग्नि और सूर्य के समान ज्योतिर्मय, देखने में अति कठिन और अप्रमेयस्वरूप सब ओर से देखता हूँ।।",
    commentary: "A simple summary of verse 11.17",
  },
  {
    chapter: 11,
    verse: 18,
    sanskrit:
      "त्वमक्षरं परमं वेदितव्यं\nत्वमस्य विश्वस्य परं निधानम् |\nत्वमव्ययः शाश्वतधर्मगोप्ता\nसनातनस्त्वं पुरुषो मतो मे ||११-१८||",
    english:
      "11.18 Thou art the Imperishable, the Supreme Being, worthy to be known. Thou art the great treasure-house of this universe; Thou art the imperishable protector of the eternal Dhrama; Thou art the Primal Person, I deem.",
    hindi:
      "।।11.18।। आप ही जानने योग्य (वेदितव्यम्) परम अक्षर हैं; आप ही इस विश्व के परम आश्रय (निधान) हैं ! आप ही शाश्वत धर्म के रक्षक हैं और आप ही सनातन पुरुष हैं,ऐसा मेरा मत है।।",
    commentary: "A simple summary of verse 11.18",
  },
  {
    chapter: 11,
    verse: 19,
    sanskrit:
      "अनादिमध्यान्तमनन्तवीर्य-\nमनन्तबाहुं शशिसूर्यनेत्रम् |\nपश्यामि त्वां दीप्तहुताशवक्त्रं\nस्वतेजसा विश्वमिदं तपन्तम् ||११-१९||",
    english:
      "11.19 I see Thee without beginning, middle or end, infinite in power, of endless arms, the sun and the moon being Thy eyes, the burning fire Thy mouth, heating the whole universe with Thy radiance.",
    hindi:
      "।।11.19।। मैं आपको आदि, अन्त और मध्य से रहित तथा अनंत सार्मथ्य से युक्त और अनंत बाहुओं वाला तथा चन्द्रसूर्यरूपी नेत्रों वाला और दीप्त अग्निरूपी मुख वाला तथा अपने तेज से इस विश्व को तपाते हुए देखता हूँ।।",
    commentary: "A simple summary of verse 11.19",
  },
  {
    chapter: 11,
    verse: 20,
    sanskrit:
      "द्यावापृथिव्योरिदमन्तरं हि\nव्याप्तं त्वयैकेन दिशश्च सर्वाः |\nदृष्ट्वाद्भुतं रूपमुग्रं तवेदं\nलोकत्रयं प्रव्यथितं महात्मन् ||११-२०||",
    english:
      "11.20 This space between the earth and the heaven and all the arters are filled by Thee alone; having seen this, Thy wonderful and teriible form, the three worlds are trembling with fear, O great-souled Being.",
    hindi:
      "।।11.20।। हे महात्मन् ! स्वर्ग और पृथ्वी के मध्य का यह आकाश तथा समस्त दिशाएं अकेले आप से ही व्याप्त हैं; आपके इस अद्भुत और उग्र रूप को देखकर तीनों लोक अतिव्यथा (भय) को प्राप्त हो रहे हैं।।",
    commentary: "A simple summary of verse 11.20",
  },
  {
    chapter: 11,
    verse: 21,
    sanskrit:
      "अमी हि त्वां सुरसङ्घा विशन्ति\nकेचिद्भीताः प्राञ्जलयो गृणन्ति |\nस्वस्तीत्युक्त्वा महर्षिसिद्धसङ्घाः\nस्तुवन्ति त्वां स्तुतिभिः पुष्कलाभिः ||११-२१||",
    english:
      "11.21 Verily, into Thee enter these hosts of gods; some extol Thee in fear with joined palms; saying 'may it be well', bands of great sages and perfected ones praise Thee with hymns complete.",
    hindi:
      "।।11.21।। ये समस्त देवताओं के समूह आप में ही प्रवेश कर रहे हैं और कई एक भयभीत होकर हाथ जोड़े हुए आप की स्तुति करते हैं; महर्षि और सिद्धों के समुदाय 'कल्याण होवे' (स्वस्तिवाचन करते हुए) ऐसा कहकर, उत्तम (या सम्पूर्ण) स्रोतों द्वारा आपकी स्तुति करते हैं।।",
    commentary: "A simple summary of verse 11.21",
  },
  {
    chapter: 11,
    verse: 22,
    sanskrit:
      "रुद्रादित्या वसवो ये च साध्या\nविश्वेऽश्विनौ मरुतश्चोष्मपाश्च |\nगन्धर्वयक्षासुरसिद्धसङ्घा\nवीक्षन्ते त्वां विस्मिताश्चैव सर्वे ||११-२२||",
    english:
      "11.22 The Rudras, Adityas, Vasus, Sadhyas, Visvedevas, the two Asvins, Maruts, the manes and the hosts of celestial singers, Yakshas, demons and the perfected ones, are all looking at Thee, in great amazement.",
    hindi:
      "।।11.22।। रुद्रगण, आदित्य, वसु और साध्यगण, विश्वेदेव तथा दो अश्विनीकुमार, मरुद्गण और उष्मपा, गन्धर्व, यक्ष, असुर और सिद्धगणों के समुदाय- ये सब ही विस्मित होते हुए आपको देखते हैं।।",
    commentary: "A simple summary of verse 11.22",
  },
  {
    chapter: 11,
    verse: 23,
    sanskrit:
      "रूपं महत्ते बहुवक्त्रनेत्रं\nमहाबाहो बहुबाहूरुपादम् |\nबहूदरं बहुदंष्ट्राकरालं\nदृष्ट्वा लोकाः प्रव्यथितास्तथाहम् ||११-२३||",
    english:
      "11.23 Having seen Thy immeasurable form with many mouths and eyes, O mighty-armed, with many arms, thighs and feet, with many stomachs and fearful with many teeth  the worlds are terrified and so am I.",
    hindi:
      "।।11.23।। हे महाबाहो! आपके बहुत मुख तथा नेत्र वाले, बहुत बाहु, उरु (जंघा) तथा पैरों वाले, बहुत-ंंसी उदरों वाले तथा बहुतसी विकराल दाढ़ों वाले महान् रूप को देखकर सब लोग व्यथित हो रहे हैं और उसी प्रकार मैं भी (व्याकुल हो रहा हूँ)।।",
    commentary: "A simple summary of verse 11.23",
  },
  {
    chapter: 11,
    verse: 24,
    sanskrit:
      "नभःस्पृशं दीप्तमनेकवर्णं\nव्यात्ताननं दीप्तविशालनेत्रम् |\nदृष्ट्वा हि त्वां प्रव्यथितान्तरात्मा\nधृतिं न विन्दामि शमं च विष्णो ||११-२४||",
    english:
      "11.24 On seeing Thee (the Cosmic Form) touching the sky, shining in many colours, with mouths wide open, with large fiery eyes, I am terrified at heart and find neither courage nor peace, O Vishnu.",
    hindi:
      "।।11.24।। हे विष्णो! आकाश के साथ स्पर्श किये हुए देदीप्यमान अनेक रूपों से युक्त तथा विस्तरित मुख और प्रकाशमान विशाल नेत्रों से युक्त आपको देखकर भयभीत हुआ मैं धैर्य और शान्ति को नहीं प्राप्त हो रहा हूँ।।",
    commentary: "A simple summary of verse 11.24",
  },
  {
    chapter: 11,
    verse: 25,
    sanskrit:
      "दंष्ट्राकरालानि च ते मुखानि\nदृष्ट्वैव कालानलसन्निभानि |\nदिशो न जाने न लभे च शर्म\nप्रसीद देवेश जगन्निवास ||११-२५||",
    english:
      "11.25 Having seen Thy mouths fearful with teeth (blazing) like the fires of cosmic dissolution, I know not the four arters, nor do I find peace. Have mercy, O Lord of the gods, O abode of the universe.",
    hindi:
      "।।11.25।। आपके विकराल दाढ़ों वाले और प्रलयाग्नि के समान प्रज्वलित मुखों को देखकर, मैं न दिशाओं को जान पा रहा हूँ और न शान्ति को प्राप्त हो रहा हूँ; इसलिए हे देवेश!  हे जगन्निवास! आप प्रसन्न हो जाइए।।",
    commentary: "A simple summary of verse 11.25",
  },
  {
    chapter: 11,
    verse: 26,
    sanskrit:
      "अमी च त्वां धृतराष्ट्रस्य पुत्राः\nसर्वे सहैवावनिपालसङ्घैः |\nभीष्मो द्रोणः सूतपुत्रस्तथासौ\nसहास्मदीयैरपि योधमुख्यैः ||११-२६||",
    english:
      "11.26 All the sons of Dhritarashtra, with the hosts of kings of the earth, Bhishma, Drona and Karna, with the chief among our warriors.",
    hindi:
      "।।11.26।। और ये समस्त धृतराष्ट्र के पुत्र राजाओं के समुदाय सहित आप में प्रवेश करते हैं। भीष्म, द्रोण तथा कर्ण और हमारे पक्ष के भी प्रधान योद्धाओं के सहित.।।",
    commentary: "A simple summary of verse 11.26",
  },
  {
    chapter: 11,
    verse: 27,
    sanskrit:
      "वक्त्राणि ते त्वरमाणा विशन्ति\nदंष्ट्राकरालानि भयानकानि |\nकेचिद्विलग्ना दशनान्तरेषु\nसन्दृश्यन्ते चूर्णितैरुत्तमाङ्गैः ||११-२७||",
    english:
      "11.27 Some hurriedly enter Thy mouths with their terrible teeth, fearful to behold. Some are found sticking in the gaps between the teeth with their heads crushed to powder.",
    hindi:
      "।।11.27।। तीव्र वेग से आपके विकराल दाढ़ों वाले भयानक मुखों में प्रवेश करते हैं और कई एक चूर्णित शिरों सहित आपके दांतों के बीच में फँसे हुए दिख रहे हैं।।",
    commentary: "A simple summary of verse 11.27",
  },
  {
    chapter: 11,
    verse: 28,
    sanskrit:
      "यथा नदीनां बहवोऽम्बुवेगाः\nसमुद्रमेवाभिमुखा द्रवन्ति |\nतथा तवामी नरलोकवीरा\nविशन्ति वक्त्राण्यभिविज्वलन्ति ||११-२८||",
    english:
      "11.28 Verily, just as many torrents of rivers flow towards the ocean, even so these heroes in the world of men enter Thy flaming mouths.",
    hindi:
      "।।11.28।। जैसे नदियों के बहुत से जलप्रवाह समुद्र की ओर वेग से बहते हैं, वैसे ही मनुष्यलोक के ये वीर योद्धागण आपके प्रज्वलित मुखों में प्रवेश करते हैं।।",
    commentary: "A simple summary of verse 11.28",
  },
  {
    chapter: 11,
    verse: 29,
    sanskrit:
      "यथा प्रदीप्तं ज्वलनं पतङ्गा\nविशन्ति नाशाय समृद्धवेगाः |\nतथैव नाशाय विशन्ति लोकास्-\nतवापि वक्त्राणि समृद्धवेगाः ||११-२९||",
    english:
      "11.29 As moths hurriedly rush into a blazing fire for (their own) destruction, so also these creatures hurriedly rush into Thy mouths for (their own) destruction.",
    hindi:
      "।।11.29।। जैसे पतंगे अपने नाश के लिए प्रज्वलित अग्नि में अतिवेग से प्रवेश करते हैं, वैसे ही ये लोग भी अपने नाश के लिए आपके मुखों में अतिवेग से प्रवेश करते हैं।।",
    commentary: "A simple summary of verse 11.29",
  },
  {
    chapter: 11,
    verse: 30,
    sanskrit:
      "लेलिह्यसे ग्रसमानः समन्ताल्-\nलोकान्समग्रान्वदनैर्ज्वलद्भिः |\nतेजोभिरापूर्य जगत्समग्रं\nभासस्तवोग्राः प्रतपन्ति विष्णो ||११-३०||",
    english:
      "11.30 Thou lickest up, devouring all the worlds on every side with Thy flaming mouths. Thy fierce rays, filling the whole world with radiance, are burning, O Vishnu!",
    hindi:
      "।।11.30।। हे विष्णो! आप प्रज्वलित मुखों के द्वारा इन समस्त लोकों का ग्रसन करते हुए आस्वाद ले रहे हैं, आपका उग्र प्रकाश सम्पूर्ण जगत् को तेज के द्वारा परिपूर्ण करके तपा रहा है।।",
    commentary: "A simple summary of verse 11.30",
  },
  {
    chapter: 11,
    verse: 31,
    sanskrit:
      "आख्याहि मे को भवानुग्ररूपो\nनमोऽस्तु ते देववर प्रसीद |\nविज्ञातुमिच्छामि भवन्तमाद्यं\nन हि प्रजानामि तव प्रवृत्तिम् ||११-३१||",
    english:
      "11.31 Tell me, who Thou art, so fierce of form. Salutations to Thee, O God Supreme: have mercy. I desire to know Thee, the original Being. I know not indeed Thy working.",
    hindi:
      "।।11.31।। (कृपया) मेरे प्रति कहिये, कि उग्ररूप वाले आप कौन हैं? हे देवों में श्रेष्ठ! आपको नमस्कार है, आप प्रसन्न होइये। आदि स्वरूप आपको मैं (तत्त्व से) जानना चाहता हूँ, क्योंकि आपकी प्रवृत्ति (अर्थात् प्रयोजन को) को मैं नहीं समझ पा रहा हूँ।।",
    commentary: "A simple summary of verse 11.31",
  },
  {
    chapter: 11,
    verse: 32,
    sanskrit:
      "श्रीभगवानुवाच |\nकालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः |\nऋतेऽपि त्वां न भविष्यन्ति सर्वे\nयेऽवस्थिताः प्रत्यनीकेषु योधाः ||११-३२||",
    english:
      "11.32 The Blessed Lord said  I am the full-grown world-destroying Time, now engaged in destroying the worlds. Even without thee, none of the warriors arrayed in the hostile armies shall live.",
    hindi:
      "।।11.32।। श्रीभगवान् ने कहा -- मैं लोकों का नाश करने वाला प्रवृद्ध काल हूँ। इस समय, मैं इन लोकों का संहार करने में प्रवृत्त हूँ। जो प्रतिपक्षियों की सेना में स्थित योद्धा हैं, वे सब तुम्हारे बिना भी नहीं रहेंगे।।",
    commentary: "A simple summary of verse 11.32",
  },
  {
    chapter: 11,
    verse: 33,
    sanskrit:
      "तस्मात्त्वमुत्तिष्ठ यशो लभस्व\nजित्वा शत्रून् भुङ्क्ष्व राज्यं समृद्धम् |\nमयैवैते निहताः पूर्वमेव\nनिमित्तमात्रं भव सव्यसाचिन् ||११-३३||",
    english:
      "11.33 Therefore, stand up and obtain fame. Coner the enemies and enjoy the unrivalled kingdom. Verily by Me have they been already slain; be thou a mere instrument, O Arjuna.",
    hindi:
      "।।11.33।। इसलिए तुम उठ खड़े हो जाओ और यश को प्राप्त करो; शत्रुओं को जीतकर समृद्ध राज्य को भोगो। ये सब पहले से ही मेरे द्वारा मारे जा चुके हैं। हे सव्यसाचिन्! तुम केवल निमित्त ही बनो।।",
    commentary: "A simple summary of verse 11.33",
  },
  {
    chapter: 11,
    verse: 34,
    sanskrit:
      "द्रोणं च भीष्मं च जयद्रथं च\nकर्णं तथान्यानपि योधवीरान् |\nमया हतांस्त्वं जहि मा व्यथिष्ठा\nयुध्यस्व जेतासि रणे सपत्नान् ||११-३४||",
    english:
      "11.34 Drona, Bhishma, Jayadratha, Karna and other brave warriors  these are already slain by Me: do thou kill; be not distressed with fear; fight and thou shalt coner thy enemies in battle.",
    hindi:
      "।।11.34।। द्रोण, भीष्म, जयद्रथ, कर्ण तथा और भी बहुत से मेरे द्वारा मारे गये वीर योद्धाओं को तुम मारो; भय मत करो; युद्ध करो; तुम युद्ध में शत्रुओं को जीतोगे।।",
    commentary: "A simple summary of verse 11.34",
  },
  {
    chapter: 11,
    verse: 35,
    sanskrit:
      "सञ्जय उवाच |\nएतच्छ्रुत्वा वचनं केशवस्य\nकृताञ्जलिर्वेपमानः किरीटी |\nनमस्कृत्वा भूय एवाह कृष्णं\nसगद्गदं भीतभीतः प्रणम्य ||११-३५||",
    english:
      "11.35 Sanjaya said  Having heard that speech of Lord Krishna, Arjuna, with joined palms, trembling, prostrating himself, again addressed Krishna, in a choked voice, bowing down, overwhelmed with fear.",
    hindi:
      "।।11.35।। संजय ने कहा -- केशव भगवान् के इस वचन को सुनकर मुकुटधारी अर्जुन हाथ जोड़े हुए, कांपता हुआ नमस्कार करके पुन: भयभीत हुआ श्रीकृष्ण के प्रति गद्गद् वाणी से बोला।।",
    commentary: "A simple summary of verse 11.35",
  },
  {
    chapter: 11,
    verse: 36,
    sanskrit:
      "अर्जुन उवाच |\nस्थाने हृषीकेश तव प्रकीर्त्या\nजगत्प्रहृष्यत्यनुरज्यते च |\nरक्षांसि भीतानि दिशो द्रवन्ति\nसर्वे नमस्यन्ति च सिद्धसङ्घाः ||११-३६||",
    english:
      "11.36 Arjuna said  It is meet, O Krishna, that the world delights and rejoices in Thy praise; demons fly in fear to all arters and the hosts of the perfected ones bow to Thee.",
    hindi:
      "।।11.36।। अर्जुन ने कहा -- यह योग्य ही है कि आपके कीर्तन से जगत् अति हर्षित होता है और अनुराग को भी प्राप्त होता है। भयभीत राक्षस लोग समस्त दिशाओं में भागते हैं और समस्त सिद्धगणों के समुदाय आपको नमस्कार करते हैं।।",
    commentary: "A simple summary of verse 11.36",
  },
  {
    chapter: 11,
    verse: 37,
    sanskrit:
      "कस्माच्च ते न नमेरन्महात्मन्\nगरीयसे ब्रह्मणोऽप्यादिकर्त्रे |\nअनन्त देवेश जगन्निवास\nत्वमक्षरं सदसत्तत्परं यत् ||११-३७||",
    english:
      "11.37 And why should they not, O great Soul, bow to Thee Who art greater (than all else), the primal cause even of the Creator (Brahma), O Infinite Being, O Lord of the gods, O Abode of the universe; Thou art the imperishable, the Being, the non-being and That which is the supreme (that which is beyond the Being and the non-being).",
    hindi:
      "।।11.37।। हे महात्मन् ! ब्रह्मा के भी आदि कर्ता और सबसे श्रेष्ठ आपके लिए वे कैसे नमस्कार नहीं करें? (क्योंकि) हे अनन्त! हे देवेश! हे जगन्निवास! जो सत् असत् और इन दोनों से परे अक्षरतत्त्व है, वह आप ही हैं।।",
    commentary: "A simple summary of verse 11.37",
  },
  {
    chapter: 11,
    verse: 38,
    sanskrit:
      "त्वमादिदेवः पुरुषः पुराणस्-\nत्वमस्य विश्वस्य परं निधानम् |\nवेत्तासि वेद्यं च परं च धाम\nत्वया ततं विश्वमनन्तरूप ||११-३८||",
    english:
      "11.38 Thou art the primal God, the ancient Purusha, the supreme refuge of this universe, the knower, the knowable and the supreme Abode. By Thee is the universe pervaded, O Being of infinite forms.",
    hindi:
      "।।11.38।। आप आदिदेव और पुराण (सनातन) पुरुष हैं। आप इस जगत् के परम आश्रय, ज्ञाता, ज्ञेय, (जानने योग्य) और परम धाम हैं। हे अनन्तरूप आपसे ही यह विश्व व्याप्त है।।",
    commentary: "A simple summary of verse 11.38",
  },
  {
    chapter: 11,
    verse: 39,
    sanskrit:
      "वायुर्यमोऽग्निर्वरुणः शशाङ्कः\nप्रजापतिस्त्वं प्रपितामहश्च |\nनमो नमस्तेऽस्तु सहस्रकृत्वः\nपुनश्च भूयोऽपि नमो नमस्ते ||११-३९||",
    english:
      "11.39 Thou art Vayu, Yama, Agni, Varuna, the moon, the Creator, and the great-grandfather. Salutations, salutations unto Thee, a thousand times, and again salutations, salutations unto Thee.",
    hindi:
      "।।11.39।। आप वायु, यम, अग्नि, वरुण, चन्द्रमा, प्रजापति (ब्रह्मा) और प्रपितामह (ब्रह्मा के भी कारण) हैं; आपके लिए सहस्र बार नमस्कार, नमस्कार है, पुन: आपको बारम्बार नमस्कार, नमस्कार है।।",
    commentary: "A simple summary of verse 11.39",
  },
  {
    chapter: 11,
    verse: 40,
    sanskrit:
      "नमः पुरस्तादथ पृष्ठतस्ते\nनमोऽस्तु ते सर्वत एव सर्व |\nअनन्तवीर्यामितविक्रमस्त्वं\nसर्वं समाप्नोषि ततोऽसि सर्वः ||११-४०||",
    english:
      "11.40 Salutations to Thee, in front and behind! Salutations to Thee on every side! O All!! Thou infinite in power and prowess, pervadest all; wherefore Thou art all.",
    hindi:
      "।।11.40।। हे अनन्तसार्मथ्य वाले भगवन्! आपके लिए अग्रत: और पृष्ठत: नमस्कार है, हे सर्वात्मन्! आपको सब ओर से नमस्कार है। आप अमित विक्रमशाली हैं और आप सबको व्याप्त किये हुए हैं, इससे आप सर्वरूप हैं।।",
    commentary: "A simple summary of verse 11.40",
  },
  {
    chapter: 11,
    verse: 41,
    sanskrit:
      "सखेति मत्वा प्रसभं यदुक्तं\nहे कृष्ण हे यादव हे सखेति |\nअजानता महिमानं तवेदं\nमया प्रमादात्प्रणयेन वापि ||११-४१||",
    english:
      "11.41 Whatever I have presumptuously said from carelessness or love, addressing Thee as O Krishna! O Yadava! O Friend! regarding Thee merely as a friend, unknowing of this, Thy greatness.",
    hindi:
      '।।11.41।। हे भगवन्! आपको सखा मानकर आपकी इस महिमा को न जानते हुए मेरे द्वारा प्रमाद से अथवा प्रेम से भी "हे कृष्ण हे! यादव हे सखे!" इस प्रकार जो कुछ बलात् कहा गया है।।',
    commentary: "A simple summary of verse 11.41",
  },
  {
    chapter: 11,
    verse: 42,
    sanskrit:
      "यच्चावहासार्थमसत्कृतोऽसि\nविहारशय्यासनभोजनेषु |\nएकोऽथवाप्यच्युत तत्समक्षं\nतत्क्षामये त्वामहमप्रमेयम् ||११-४२||",
    english:
      "11.42 In whatever way I may have insulted Thee for the sake of fun, while at play, reposing, sitting or at meals, when alone (with Thee), O Krishna, or in company  that I implore Thee, immeasurable one, to forgive.",
    hindi:
      "।।11.42।। और, हे अच्युत! जो आप मेरे द्वारा हँसी के लिये बिहार, शय्या, आसन और भोजन के समय अकेले में अथवा अन्यों के समक्ष भी अपमानित किये गये हैं, उन सब के लिए अप्रमेय स्वरूप आप से मैं क्षमायाचना करता हूँ।।",
    commentary: "A simple summary of verse 11.42",
  },
  {
    chapter: 11,
    verse: 43,
    sanskrit:
      "पितासि लोकस्य चराचरस्य\nत्वमस्य पूज्यश्च गुरुर्गरीयान् |\nन त्वत्समोऽस्त्यभ्यधिकः कुतोऽन्यो\nलोकत्रयेऽप्यप्रतिमप्रभाव ||११-४३||",
    english:
      "11.43 Thou art the Father of this world, moving and unmoving. Thou art to be adored by this world, Thou, the greatest Guru; (for) none there exists who is eal to Thee; how then could there be another superior to Thee in the three worlds, O Being of unealled power?",
    hindi:
      "।।11.43।। आप इस चराचर जगत् के पिता, पूजनीय और सर्वश्रेष्ठ गुरु हैं। हे अप्रितम प्रभाव वाले भगवन्! तीनों लोकों में आपके समान भी कोई नहीं हैं, तो फिर आपसे अधिक श्रेष्ठ कैसे होगा?।।",
    commentary: "A simple summary of verse 11.43",
  },
  {
    chapter: 11,
    verse: 44,
    sanskrit:
      "तस्मात्प्रणम्य प्रणिधाय कायं\nप्रसादये त्वामहमीशमीड्यम् |\nपितेव पुत्रस्य सखेव सख्युः\nप्रियः प्रियायार्हसि देव सोढुम् ||११-४४||",
    english:
      "11.44 Therefore, bowing down, prostrating my body, I crave Thy forgiveness, O adorable Lord. As a father forgives his son, a friend his (dear) friend, a lover his beloved, even so shouldst Thou \nforgive me, O God.",
    hindi:
      "।।11.44।। इसलिये हे भगवन्! मैं शरीर के द्वारा साष्टांग प्रणिपात करके स्तुति के योग्य आप ईश्वर को प्रसन्न होने के लिये प्रार्थना करता हूँ। हे देव! जैसे पिता पुत्र के, मित्र अपने मित्र के और प्रिय अपनी प्रिया के(अपराध को क्षमा करता है), वैसे ही आप भी मेरे अपराधों को क्षमा कीजिये।।",
    commentary: "A simple summary of verse 11.44",
  },
  {
    chapter: 11,
    verse: 45,
    sanskrit:
      "अदृष्टपूर्वं हृषितोऽस्मि दृष्ट्वा\nभयेन च प्रव्यथितं मनो मे |\nतदेव मे दर्शय देव रूपं\nप्रसीद देवेश जगन्निवास ||११-४५||",
    english:
      "11.45 I am delighted, having seen what has never been seen before; and yet my mind is distressed with fear. Show me that (previous) form only, O God; have mercy, O God of gods, O Abode of the universe.",
    hindi:
      "।।11.45।। मैं आपके इस अदृष्टपूर्व रूप को देखकर हर्षित हो रहा हूँ और मेरा मन भय से अतिव्याकुल भी हो रहा हैं। इसलिए हे देव! आप उस पूर्वकाल को ही मुझे दिखाइये। हे देवेश! हे जगन्निवास! आप प्रसन्न होइये।।",
    commentary: "A simple summary of verse 11.45",
  },
  {
    chapter: 11,
    verse: 46,
    sanskrit:
      "किरीटिनं गदिनं चक्रहस्तं\nइच्छामि त्वां द्रष्टुमहं तथैव |\nतेनैव रूपेण चतुर्भुजेन\nसहस्रबाहो भव विश्वमूर्ते ||११-४६||",
    english:
      "11.46 I desire to see Thee as before, crowned, bearing a mace, with the discus in hand, in Thy former form only, having four arms, O thousand-armed, Cosmic Form (Being).",
    hindi:
      "।।11.46।। मैं आपको उसी प्रकार मुकुटधारी, गदा और चक्र हाथ में लिए हुए देखना चाहता हूँ। हे विश्वमूर्ते! हे सहस्रबाहो! आप उस चतुर्भुजरूप के ही बन जाइए।।",
    commentary: "A simple summary of verse 11.46",
  },
  {
    chapter: 11,
    verse: 47,
    sanskrit:
      "श्रीभगवानुवाच |\nमया प्रसन्नेन तवार्जुनेदं\nरूपं परं दर्शितमात्मयोगात् |\nतेजोमयं विश्वमनन्तमाद्यं\nयन्मे त्वदन्येन न दृष्टपूर्वम् ||११-४७||",
    english:
      "11.47 The Blessed Lord said  O Arjuna, this Cosmic Form has graciously been shown to thee by Me by My own Yogic power; full of splendour, primeval, and infinite, this Cosmic Form of Mine has never been seen before by anyone other than thyself.",
    hindi:
      "।।11.47।। हे अर्जुन! तुम पर प्रसन्न होकर मैंने अपनी योगशक्ति (आत्मयोगात्) के प्रभाव से यह अपना परम तेजोमय, सबका आदि और अनन्त विश्वरूप तुझे दर्शाया है, जिसे तुम्हारे पूर्व किसी ने नहीं देखा है।।",
    commentary: "A simple summary of verse 11.47",
  },
  {
    chapter: 11,
    verse: 48,
    sanskrit:
      "न वेदयज्ञाध्ययनैर्न दानैर्-\nन च क्रियाभिर्न तपोभिरुग्रैः |\nएवंरूपः शक्य अहं नृलोके\nद्रष्टुं त्वदन्येन कुरुप्रवीर ||११-४८||",
    english:
      "11.48 Neither by the study of the Vedas and sacrifices, nor by gifts nor by rituals nor by severe austerities can I be seen in this form in the world of men by any other than thyself, O great hero of the Kurus (Arjuna).",
    hindi:
      "।।11.48।। हे कुरुप्रवीर! तुम्हारे अतिरिक्त इस मनुष्य लोक में किसी अन्य के द्वारा मैं इस रूप में, न वेदाध्ययन और न यज्ञ, न दान और न (धार्मिक) क्रियायों के द्वारा और न उग्र तपों के द्वारा ही देखा जा सकता हूँ।।",
    commentary: "A simple summary of verse 11.48",
  },
  {
    chapter: 11,
    verse: 49,
    sanskrit:
      "मा ते व्यथा मा च विमूढभावो\nदृष्ट्वा रूपं घोरमीदृङ्ममेदम् |\nव्यपेतभीः प्रीतमनाः पुनस्त्वं\nतदेव मे रूपमिदं प्रपश्य ||११-४९||",
    english:
      "11.49 Be not afraid, nor bewildered on seeing such a teriible form of Mine as this; with thy fear dispelled and with a gladdened heart, now behold again this former form of Mine.",
    hindi:
      "।।11.49।। इस प्रकार मेरे इस घोर रूप को देखकर तुम व्यथा और मूढ़भाव को मत प्राप्त हो। निर्भय और प्रसन्नचित्त होकर तुम पुन: मेरे उसी (पूर्व के) रूप को देखो।।",
    commentary: "A simple summary of verse 11.49",
  },
  {
    chapter: 11,
    verse: 50,
    sanskrit:
      "सञ्जय उवाच |\nइत्यर्जुनं वासुदेवस्तथोक्त्वा\nस्वकं रूपं दर्शयामास भूयः |\nआश्वासयामास च भीतमेनं\nभूत्वा पुनः सौम्यवपुर्महात्मा ||११-५०||",
    english:
      "11.50 Sanjaya said  Having thus spoken to Arjuna, Krishna again showed His own form and the great Soul (Krishna), assuming His gentle form, consoled him (Arjuna) who was terrified.",
    hindi:
      "।।11.50।। संजय ने कहा -- भगवान् वासुदेव ने अर्जुन से इस प्रकार कहकर, पुन: अपने (पूर्व) रूप को दर्शाया, और फिर, सौम्यरूप महात्मा श्रीकृष्ण ने इस भयभीत अर्जुन को आश्वस्त किया।।",
    commentary: "A simple summary of verse 11.50",
  },
  {
    chapter: 11,
    verse: 51,
    sanskrit:
      "अर्जुन उवाच |\nदृष्ट्वेदं मानुषं रूपं तव सौम्यं जनार्दन |\nइदानीमस्मि संवृत्तः सचेताः प्रकृतिं गतः ||११-५१||",
    english:
      "11.51 Arjuna said  Having seen this Thy gentle human form, O Krishna, now I am composed and am restored to my own nature.",
    hindi:
      "।।11.51।। अर्जुन ने कहा -- हे जनार्दन! आपके इस सौम्य मनुष्य रूप को देखकर अब मैं शांतचित्त हुआ अपने स्वभाव को प्राप्त हो गया हूँ।।",
    commentary: "A simple summary of verse 11.51",
  },
  {
    chapter: 11,
    verse: 52,
    sanskrit:
      "श्रीभगवानुवाच |\nसुदुर्दर्शमिदं रूपं दृष्टवानसि यन्मम |\nदेवा अप्यस्य रूपस्य नित्यं दर्शनकाङ्क्षिणः ||११-५२||",
    english:
      "11.52 The Blessed Lord said  Very hard indeed it is to see this form of Mine which thou hast seen. Even the gods are ever longing to behold it.",
    hindi:
      "।।11.52।। श्रीभगवान् ने कहा -- मेरा यह रूप देखने को मिलना अति दुर्लभ है, जिसको कि तुमने देखा है। देवतागण भी सदा इस रूप के दर्शन के इच्छुक रहते हैं।।",
    commentary: "A simple summary of verse 11.52",
  },
  {
    chapter: 11,
    verse: 53,
    sanskrit:
      "नाहं वेदैर्न तपसा न दानेन न चेज्यया |\nशक्य एवंविधो द्रष्टुं दृष्टवानसि मां यथा ||११-५३||",
    english:
      "11.53 Neither by the Vedas nor by austerity, nor by gift, nor by sacrifice can I be seen in this form as thou hast seen Me (so easily).",
    hindi:
      "।।11.53।। न वेदों से, न तप से, न दान से और न यज्ञ से ही मैं इस प्रकार देखा जा सकता हूँ, जैसा कि तुमने मुझे देखा है।।",
    commentary: "A simple summary of verse 11.53",
  },
  {
    chapter: 11,
    verse: 54,
    sanskrit:
      "भक्त्या त्वनन्यया शक्य अहमेवंविधोऽर्जुन |\nज्ञातुं द्रष्टुं च तत्त्वेन प्रवेष्टुं च परन्तप ||११-५४||",
    english:
      "11.54 But by single-minded devotion can I, of this Form, be known and seen in reality and also entered into, O Arjuna.",
    hindi:
      "।।11.54।। परन्तु हे परन्तप अर्जुन! अनन्य भक्ति के द्वारा मैं तत्त्वत: 'जानने', 'देखने' और 'प्रवेश' करने के लिए (एकी भाव से प्राप्त होने के लिए) भी, शक्य हूँ!।।",
    commentary: "A simple summary of verse 11.54",
  },
  {
    chapter: 11,
    verse: 55,
    sanskrit:
      "मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः |\nनिर्वैरः सर्वभूतेषु यः स मामेति पाण्डव ||११-५५||",
    english:
      "11.55 He who does all actions for Me, who looks upon Me as the Supreme, who is devoted to Me, who is free from attachment, who bears enmity towards no creature, he comes to Me, O Arjuna.",
    hindi:
      "।।11.55।। हे पाण्डव! जो पुरुष मेरे लिए ही कर्म करने वाला है, और मुझे ही परम लक्ष्य मानता है, जो मेरा भक्त है तथा संगरहित है, जो भूतमात्र के प्रति निर्वैर है, वह मुझे प्राप्त होता है।।",
    commentary: "A simple summary of verse 11.55",
  },
  {
    chapter: 12,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच |\nएवं सततयुक्ता ये भक्तास्त्वां पर्युपासते |\nये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमाः ||१२-१||",
    english:
      "12.1 Arjuna said  Those devotees who, ever steadfast, thus worship Thee and those also who worship the imperishable and the unmanifested  which of them are better versed in Yoga?",
    hindi:
      "।।12.1।। अर्जुन ने कहा -- जो भक्त, सतत युक्त होकर इस (पूर्वोक्त) प्रकार से आपकी उपासना करते हैं और जो भक्त अक्षर, और अव्यक्त की उपासना करते हैं, उन दोनों में कौन उत्तम योगवित् है।।",
    commentary: "A simple summary of verse 12.1",
  },
  {
    chapter: 12,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच |\nमय्यावेश्य मनो ये मां नित्ययुक्ता उपासते |\nश्रद्धया परयोपेताः ते मे युक्ततमा मताः ||१२-२||",
    english:
      "12.2 The Blessed Lord said  Those who, fixing their mind on Me, worship Me, ever steadfast and endowed with supreme faith, are the best in Yoga in My opinion.",
    hindi:
      "।।12.2।। श्रीभगवान् ने कहा -- मुझमें मन को एकाग्र करके नित्ययुक्त हुए जो भक्तजन परम श्रद्धा से युक्त होकर मेरी उपासना करते हैं, वे, मेरे मत से, युक्ततम हैं अर्थात् श्रेष्ठ हैं।।",
    commentary: "A simple summary of verse 12.2",
  },
  {
    chapter: 12,
    verse: 3,
    sanskrit:
      "ये त्वक्षरमनिर्देश्यमव्यक्तं पर्युपासते |\nसर्वत्रगमचिन्त्यञ्च कूटस्थमचलन्ध्रुवम् ||१२-३||",
    english: "Swami Sivananda did not comment on this sloka",
    hindi: "Swami Tejomayananda did not comment on this sloka",
    commentary: "A simple summary of verse 12.3",
  },
  {
    chapter: 12,
    verse: 4,
    sanskrit:
      "सन्नियम्येन्द्रियग्रामं सर्वत्र समबुद्धयः |\nते प्राप्नुवन्ति मामेव सर्वभूतहिते रताः ||१२-४||",
    english:
      "12.4 Having restrained all the senses, even-minded everywhere, intent on the welfare of all beings  verily they also come unto Me.",
    hindi:
      "।।12.4।। इन्द्रिय समुदाय को सम्यक् प्रकार से नियमित करके, सर्वत्र समभाव वाले, भूतमात्र के हित में रत वे भक्त मुझे ही प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 12.4",
  },
  {
    chapter: 12,
    verse: 5,
    sanskrit:
      "क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम् |\nअव्यक्ता हि गतिर्दुःखं देहवद्भिरवाप्यते ||१२-५||",
    english:
      "12.5 Greater is their trouble whose minds are set on the unmanifested; for the goal; the unmanifested, is very hard for the embodied to reach.",
    hindi:
      "।।12.5।। परन्तु उन अव्यक्त में आसक्त हुए चित्त वाले पुरुषों को क्लेश अधिक होता है, क्योंकि देहधारियों से अव्यक्त की गति कठिनाईपूर्वक प्राप्त की जाती है।।",
    commentary: "A simple summary of verse 12.5",
  },
  {
    chapter: 12,
    verse: 6,
    sanskrit:
      "ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्परः |\nअनन्येनैव योगेन मां ध्यायन्त उपासते ||१२-६||",
    english:
      "12.6 But to those who worship Me, renouncing all actions in Me, regarding Me as the supreme gaol, meditating on Me with single-minded Yoga.",
    hindi:
      "।।12.6।। परन्तु जो भक्तजन मुझे ही परम लक्ष्य समझते हुए सब कर्मों को मुझे अर्पण करके अनन्ययोग के द्वारा मेरा (सगुण का) ही ध्यान करते हैं।।",
    commentary: "A simple summary of verse 12.6",
  },
  {
    chapter: 12,
    verse: 7,
    sanskrit:
      "तेषामहं समुद्धर्ता मृत्युसंसारसागरात् |\nभवामि नचिरात्पार्थ मय्यावेशितचेतसाम् ||१२-७||",
    english:
      "12.7 To those whose minds are set on Me, O Arjuna, verily I become ere long the saviour out of the ocean of Samsara.",
    hindi:
      "।।12.7।। हे पार्थ ! जिनका चित्त मुझमें ही स्थिर हुआ है ऐसे भक्तों का मैं शीघ्र ही मृत्युरूप संसार सागर से उद्धार करने वाला होता हूँ।।",
    commentary: "A simple summary of verse 12.7",
  },
  {
    chapter: 12,
    verse: 8,
    sanskrit:
      "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय |\nनिवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः ||१२-८||",
    english:
      "12.8 Fix thy mind in Me only, thy intellect in Me, (then) thou shalt no doubt live in Me alone hereafter.",
    hindi:
      "।।12.8।। तुम अपने मन और बुद्धि को मुझमें ही स्थिर करो, तदुपरान्त तुम मुझमें ही निवास करोगे, इसमें कोई संशय नहीं है।।",
    commentary: "A simple summary of verse 12.8",
  },
  {
    chapter: 12,
    verse: 9,
    sanskrit:
      "अथ चित्तं समाधातुं न शक्नोषि मयि स्थिरम् |\nअभ्यासयोगेन ततो मामिच्छाप्तुं धनञ्जय ||१२-९||",
    english:
      "12.9 If thou art unable to fix thy mind steadily on Me, then by the Yoga of constant practice do thou seek to reach Me, O Arjuna.",
    hindi:
      "।।12.9।। हे धनंजय ! यदि तुम अपने मन को मुझमें स्थिर करने में समर्थ नहीं हो, तो अभ्यासयोग के द्वारा तुम मुझे प्राप्त करने की इच्छा (अर्थात् प्रयत्न) करो।।",
    commentary: "A simple summary of verse 12.9",
  },
  {
    chapter: 12,
    verse: 10,
    sanskrit:
      "अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव |\nमदर्थमपि कर्माणि कुर्वन्सिद्धिमवाप्स्यसि ||१२-१०||",
    english:
      "12.10 If thou art unable to practise even this Abhyasa Yoga, be thou intent on doing actions for My sake; even by doing actions for My sake, thou shalt attain perfection.",
    hindi:
      "।।12.10।। यदि तुम अभ्यास में भी असमर्थ हो तो मत्कर्म परायण बनो; इस प्रकार मेरे लिए कर्मों को करते हुए भी तुम सिद्धि को प्राप्त करोगे।।",
    commentary: "A simple summary of verse 12.10",
  },
  {
    chapter: 12,
    verse: 11,
    sanskrit:
      "अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रितः |\nसर्वकर्मफलत्यागं ततः कुरु यतात्मवान् ||१२-११||",
    english:
      "12.11 If thou art unable to do even this, then, resorting to union with Me, renounce the fruits of all actions with the self controlled.",
    hindi:
      "।।12.11।। और यदि इसको भी करने के लिए तुम असमर्थ हो, तो आत्मसंयम से युक्त होकर मेरी प्राप्ति रूप योग का आश्रय लेकर, तुम समस्त कर्मों के फल का त्याग करो।।",
    commentary: "A simple summary of verse 12.11",
  },
  {
    chapter: 12,
    verse: 12,
    sanskrit:
      "श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते |\nध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम् ||१२-१२||",
    english:
      "12.12 Better indeed is knowledge than practice; than knowledge meditation is better; than meditation the renunciation of the fruits of actions: peace immediately follows renunciation.",
    hindi:
      "।।12.12।। अभ्यास से ज्ञान श्रेष्ठ है; ज्ञान से श्रेष्ठ ध्यान है और ध्यान से भी श्रेष्ठ कर्मफल त्याग है त्याग; से तत्काल ही शान्ति मिलती है।।",
    commentary: "A simple summary of verse 12.12",
  },
  {
    chapter: 12,
    verse: 13,
    sanskrit:
      "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च |\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी ||१२-१३||",
    english:
      "12.13 He who hates no creature, who is friendly and compassionate to all, who is free from attachment and egoism, balanced in pleasure and pain, and forgiving.",
    hindi:
      "।।12.13।। भूतमात्र के प्रति जो द्वेषरहित है तथा सबका मित्र तथा करुणावान् है; जो ममता और अहंकार से रहित, सुख और दु:ख में सम और क्षमावान् है।।",
    commentary: "A simple summary of verse 12.13",
  },
  {
    chapter: 12,
    verse: 14,
    sanskrit:
      "सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः |\nमय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः ||१२-१४||",
    english:
      "12.14 Ever content, steady in meditation, self-controlled, possessed of firm conviction, with the mind and intellect dedicated to Me, he, My devtoee, is dear to Me.",
    hindi:
      "।।12.14।। जो संयतात्मा, दृढ़निश्चयी योगी सदा सन्तुष्ट है, जो अपने मन और बुद्धि को मुझमें अर्पण किये हुए है, जो ऐसा मेरा भक्त है, वह मुझे प्रिय है।।",
    commentary: "A simple summary of verse 12.14",
  },
  {
    chapter: 12,
    verse: 15,
    sanskrit:
      "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः |\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः ||१२-१५||",
    english:
      "12.15 He by whom the world is not agitated and who cannot be agitated by the world, and who is freed from joy, anger, fear and anxiety  he is dear to Me.",
    hindi:
      "।।12.15।। जिससे कोई लोक (अर्थात् जीव, व्यक्ति) उद्वेग को प्राप्त नहीं होता और जो स्वयं भी किसी व्यक्ति से उद्वेग अनुभव नहीं करता तथा जो हर्ष, अमर्ष (असहिष्णुता) भय और उद्वेगों से मुक्त है,वह भक्त मुझे प्रिय है।।",
    commentary: "A simple summary of verse 12.15",
  },
  {
    chapter: 12,
    verse: 16,
    sanskrit:
      "अनपेक्षः शुचिर्दक्ष उदासीनो गतव्यथः |\nसर्वारम्भपरित्यागी यो मद्भक्तः स मे प्रियः ||१२-१६||",
    english:
      "12.16 He who is free from wants, pure, expert, unconcerned, and free from pain, renouncing all undertakings or commencements  he who is (thus) devoted to Me, is dear to Me.",
    hindi:
      "।।12.16।। जो अपेक्षारहित, शुद्ध, दक्ष, उदासीन, व्यथारहित और सर्वकर्मों का संन्यास करने वाला मेरा भक्त है, वह मुझे प्रिय है।।",
    commentary: "A simple summary of verse 12.16",
  },
  {
    chapter: 12,
    verse: 17,
    sanskrit:
      "यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति |\nशुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः ||१२-१७||",
    english:
      "12.17 He who neither rejoices, nor hates, nor grieves, nor desires, renouncing good and evil, and who is full of devotion, is dear to Me.",
    hindi:
      "।।12.17।। जो न हर्षित होता है और न द्वेष करता है; न शोक करता है और न आकांक्षा; तथा जो शुभ और अशुभ को त्याग देता है, वह भक्तिमान् पुरुष मुझे प्रिय है।।",
    commentary: "A simple summary of verse 12.17",
  },
  {
    chapter: 12,
    verse: 18,
    sanskrit:
      "समः शत्रौ च मित्रे च तथा मानापमानयोः |\nशीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः ||१२-१८||",
    english: "Swami Sivananda did not comment on this sloka",
    hindi: "Swami Tejomayananda did not comment on this sloka",
    commentary: "A simple summary of verse 12.18",
  },
  {
    chapter: 12,
    verse: 19,
    sanskrit:
      "तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येन केनचित् |\nअनिकेतः स्थिरमतिर्भक्तिमान्मे प्रियो नरः ||१२-१९||",
    english:
      "12.19 He to whom censure and praise are eal, who is silent, content with anything, homeless, of a steady mind, and full of devotion  that man is dear to Me.",
    hindi:
      "।।12.19।। जिसको निन्दा और स्तुति दोनों ही तुल्य है, जो मौनी है, जो किसी अल्प वस्तु से भी सन्तुष्ट है, जो अनिकेत है, वह स्थिर बुद्धि का भक्तिमान् पुरुष मुझे प्रिय है।।",
    commentary: "A simple summary of verse 12.19",
  },
  {
    chapter: 12,
    verse: 20,
    sanskrit:
      "ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते |\nश्रद्दधाना मत्परमा भक्तास्तेऽतीव मे प्रियाः ||१२-२०||",
    english:
      "12.20 They verily who follow this immortal Dharma (law or doctrine) as described above, endowed with faith, regarding Me as their supreme goal, they, the devotees, are exceedingly dear to Me.",
    hindi:
      "।।12.20।। जो भक्त श्रद्धावान् तथा मुझे ही परम लक्ष्य समझने वाले हैं और इस यथोक्त धर्ममय अमृत का अर्थात् धर्ममय जीवन का पालन करते हैं, वे मुझे अतिशय प्रिय हैं।।",
    commentary: "A simple summary of verse 12.20",
  },
  {
    chapter: 13,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच |\nप्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च |\nएतद्वेदितुमिच्छामि ज्ञानं ज्ञेयं च केशव ||१३-१||",
    english:
      "13.1 Arjuna said  I wish to learn about Nature (matter) and the Spirit (soul), the field and the knower of the field, knowledge and that which ought to be known, O Kesava.",
    hindi:
      "।।13.1।। अर्जुन ने कहा -- हे केशव ! मैं, प्रकृति और पुरुष, क्षेत्र और क्षेत्रज्ञ तथा ज्ञान और ज्ञेय को जानना चाहता हूँ।।",
    commentary: "A simple summary of verse 13.1",
  },
  {
    chapter: 13,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच |\nइदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते |\nएतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः ||१३-२||",
    english:
      "13.2 The Blessed Lord said  This body, O Arjuna, is called the field; he who knows it is called the knower of the field, by those who know of them.",
    hindi:
      "।।13.2।। श्रीभगवान् ने कहा -- हे कौन्तेय ! यह शरीर क्षेत्र कहा जाता है और इसको जो जानता है, उसे तत्त्वज्ञ जन, क्षेत्रज्ञ कहते हैं।।",
    commentary: "A simple summary of verse 13.2",
  },
  {
    chapter: 13,
    verse: 3,
    sanskrit:
      "क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत |\nक्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम ||१३-३||",
    english:
      "13.3 Do thou also know Me as the knower of the field in all fields, O Arjuna. Knowledge of both the field and the knower of the field is considered by Me to be ï1the ï1 knowledge.",
    hindi:
      "।।13.3।। हे भारत ! तुम समस्त क्षेत्रों में क्षेत्रज्ञ मुझे ही जानो। क्षेत्र और क्षेत्रज्ञ का जो ज्ञान है, वही (वास्तव में) ज्ञान है , ऐसा मेरा मत है।।",
    commentary: "A simple summary of verse 13.3",
  },
  {
    chapter: 13,
    verse: 4,
    sanskrit:
      "तत्क्षेत्रं यच्च यादृक्च यद्विकारि यतश्च यत् |\nस च यो यत्प्रभावश्च तत्समासेन मे शृणु ||१३-४||",
    english:
      "13.4 What the field is and of what nature, what are its modifications and whence it is and also who He is and what His powers are  hear all that from Me in brief.",
    hindi:
      "।।13.4।। इसलिये, वह क्षेत्र जो है और जैसा है तथा जिन विकारों वाला है, और जिस (कारण) से जो (कार्य) हुआ है तथा वह (क्षेत्रज्ञ) भी जो है और जिस प्रभाव वाला है, वह संक्षेप में मुझसे सुनो।।",
    commentary: "A simple summary of verse 13.4",
  },
  {
    chapter: 13,
    verse: 5,
    sanskrit:
      "ऋषिभिर्बहुधा गीतं छन्दोभिर्विविधैः पृथक् |\nब्रह्मसूत्रपदैश्चैव हेतुमद्भिर्विनिश्चितैः ||१३-५||",
    english:
      "13.5 Sages have sung in many ways, in various distinctive chants and also in the suggestive words indicative of the Absolute, full of reasoning and decisive.",
    hindi:
      "।।13.5।। (क्षेत्र-क्षेत्रज्ञ के विषय में) ऋषियों द्वारा विभिन्न और विविध छन्दों में बहुत प्रकार से गाया गया है, तथा सम्यक् प्रकार से निश्चित किये हुये युक्तियुक्त ब्रह्मसूत्र के पदों द्वारा (अर्थात् ब्रह्म के सूचक शब्दों द्वारा) भी (वैसे ही कहा गया है)।।",
    commentary: "A simple summary of verse 13.5",
  },
  {
    chapter: 13,
    verse: 6,
    sanskrit:
      "महाभूतान्यहंकारो बुद्धिरव्यक्तमेव च |\nइन्द्रियाणि दशैकं च पञ्च चेन्द्रियगोचराः ||१३-६||",
    english:
      "13.6 The great elements, egoism, intellect, and also the Unmanifested Nature, the ten senses and one (mind), and the five objects of the senses.",
    hindi:
      "।।13.6।। पंच महाभूत, अहंकार, बुद्धि, अव्यक्त (प्रकृति), दस इन्द्रियाँ, एक मन, इन्द्रियों के पाँच विषय।।",
    commentary: "A simple summary of verse 13.6",
  },
  {
    chapter: 13,
    verse: 7,
    sanskrit:
      "इच्छा द्वेषः सुखं दुःखं संघातश्चेतना धृतिः |\nएतत्क्षेत्रं समासेन सविकारमुदाहृतम् ||१३-७||",
    english:
      "13.7 Desire, hatred, pleasure, pain, the aggregate (the body), intelligence, fortitude  the field has thus been briefly described with its modifications.",
    hindi:
      "।।13.7।। इच्छा, द्वेष, सुख, दुख, संघात (स्थूलदेह), चेतना (अन्त:करण की चेतन वृत्ति) तथा धृति -  इस प्रकार यह क्षेत्र विकारों के सहित संक्षेप में कहा गया है।।",
    commentary: "A simple summary of verse 13.7",
  },
  {
    chapter: 13,
    verse: 8,
    sanskrit:
      "अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम् |\nआचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः ||१३-८||",
    english:
      "13.8 Humility, unpretentiousness, non-injury, forgiveness, uprightness, service of the teacher, purity, steadfastness, self-control.",
    hindi:
      "।।13.8।। अमानित्व, अदम्भित्व, अहिंसा, क्षमा, आर्जव, आचार्य की सेवा, शुद्धि, स्थिरता और आत्मसंयम।।",
    commentary: "A simple summary of verse 13.8",
  },
  {
    chapter: 13,
    verse: 9,
    sanskrit:
      "इन्द्रियार्थेषु वैराग्यमनहंकार एव च |\nजन्ममृत्युजराव्याधिदुःखदोषानुदर्शनम् ||१३-९||",
    english:
      "13.9 Indifference to the objects of the senses and also absence of egoism; perception of (or reflection on) the evil in birth, death, old age, sickness and pain.",
    hindi:
      "।।13.9।। इन्द्रियों के विषय के प्रति वैराग्य, अहंकार का अभाव, जन्म, मृत्यु, वृद्धवस्था, व्याधि और दुख में दोष दर्शन...৷৷.।।",
    commentary: "A simple summary of verse 13.9",
  },
  {
    chapter: 13,
    verse: 10,
    sanskrit:
      "असक्तिरनभिष्वङ्गः पुत्रदारगृहादिषु |\nनित्यं च समचित्तत्वमिष्टानिष्टोपपत्तिषु ||१३-१०||",
    english:
      "13.10 Non-attachment, non-identification of the Self with son, wife, home and the rest, and constant even-mindedness on the attainment of the desirable and the undesirable.",
    hindi:
      "।।13.10।। आसक्ति तथा पुत्र, पत्नी, गृह आदि में अनभिष्वङ्ग (तादात्म्य का अभाव); और इष्ट और अनिष्ट की प्राप्ति में समचित्तता।।",
    commentary: "A simple summary of verse 13.10",
  },
  {
    chapter: 13,
    verse: 11,
    sanskrit:
      "मयि चानन्ययोगेन भक्तिरव्यभिचारिणी |\nविविक्तदेशसेवित्वमरतिर्जनसंसदि ||१३-११||",
    english:
      "13.11 Unswerving devotion unto Me by the Yoga of non-separation, resort to solitary places, distaste for the society of men.",
    hindi:
      "।।13.11।। अनन्ययोग के द्वारा मुझमें अव्यभिचारिणी भक्ति; एकान्त स्थान में रहने का स्वभाव और (असंस्कृत) जनों के समुदाय में अरुचि।।",
    commentary: "A simple summary of verse 13.11",
  },
  {
    chapter: 13,
    verse: 12,
    sanskrit:
      "अध्यात्मज्ञाननित्यत्वं तत्त्वज्ञानार्थदर्शनम् |\nएतज्ज्ञानमिति प्रोक्तमज्ञानं यदतोऽन्यथा ||१३-१२||",
    english:
      "13.12 Constancy in Self-knowledge, perception of the end of true knowledge  this is declared to be knowledge, and what is opposed to it is ignorance.",
    hindi:
      "।।13.12।। अध्यात्मज्ञान में नित्यत्व अर्थात् स्थिरता तथा तत्त्वज्ञान के अर्थ रूप परमात्मा का दर्शन, यह सब तो ज्ञान कहा गया है, और जो इससे विपरीत है, वह अज्ञान है।।",
    commentary: "A simple summary of verse 13.12",
  },
  {
    chapter: 13,
    verse: 13,
    sanskrit:
      "ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वामृतमश्नुते |\nअनादिमत्परं ब्रह्म न सत्तन्नासदुच्यते ||१३-१३||",
    english:
      "13.13 I will declare that which has to be known, knowing which one attains to immortality, the beginningless supreme Brahman, called neither being nor non-being.",
    hindi:
      "।।13.13।। मैं उस ज्ञेय वस्तु को स्पष्ट कहूंगा जिसे जानकर मनुष्य अमृतत्व को प्राप्त करता है। वह ज्ञेय है - अनादि, परम ब्रह्म, जो न सत् और न असत् ही कहा जा सकता है।।",
    commentary: "A simple summary of verse 13.13",
  },
  {
    chapter: 13,
    verse: 14,
    sanskrit:
      "सर्वतः पाणिपादं तत्सर्वतोऽक्षिशिरोमुखम् |\nसर्वतः श्रुतिमल्लोके सर्वमावृत्य तिष्ठति ||१३-१४||",
    english:
      "13.14 With hands and feet everywhere, with eyes, heads and mouths everywhere, with ears everywhere, He exists in the worlds enveloping all.",
    hindi:
      "।।13.14।। वह सब ओर हाथ-पैर वाला है और सब ओर से नेत्र, शिर और मुखवाला तथा सब ओर से श्रोत्रवाला है; वह जगत् में सबको व्याप्त करके स्थित है।।",
    commentary: "A simple summary of verse 13.14",
  },
  {
    chapter: 13,
    verse: 15,
    sanskrit:
      "सर्वेन्द्रियगुणाभासं सर्वेन्द्रियविवर्जितम् |\nअसक्तं सर्वभृच्चैव निर्गुणं गुणभोक्तृ च ||१३-१५||",
    english:
      "13.15 Shining by the functions of all the senses, yet without the senses; unattached, yet supporting all; devoid of alities, yet their experiencer.",
    hindi:
      "।।13.15।। वह समस्त इन्द्रियों के गुणो (कार्यों) के द्वारा प्रकाशित होने वाला, परन्तु (वस्तुत:) समस्त इन्द्रियों से रहित है; आसक्ति रहित तथा गुण रहित होते हुए भी सबको धारणपोषण करने वाला और गुणों का भोक्ता है।।",
    commentary: "A simple summary of verse 13.15",
  },
  {
    chapter: 13,
    verse: 16,
    sanskrit:
      "बहिरन्तश्च भूतानामचरं चरमेव च |\nसूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत् ||१३-१६||",
    english:
      "13.16 Without and within (all) beings the unmoving and also the moving; because of Its subtlety, unknowable; and near and far away is That.",
    hindi:
      "।।13.16।। (वह ब्रह्म) भूत मात्र के अन्तर्बाह्य स्थित है; वह चर है और अचर भी। सूक्ष्म होने से वह अविज्ञेय है; वह सुदूर और अत्यन्त समीपस्थ भी है।।",
    commentary: "A simple summary of verse 13.16",
  },
  {
    chapter: 13,
    verse: 17,
    sanskrit:
      "अविभक्तं च भूतेषु विभक्तमिव च स्थितम् |\nभूतभर्तृ च तज्ज्ञेयं ग्रसिष्णु प्रभविष्णु च ||१३-१७||",
    english:
      "13.17 And undivided, yet It exists as if divided in beings; It is to be known as the supporter of being; It devours and It generates.",
    hindi:
      "।।13.17।। और वह अविभक्त है, तथापि वह भूतों में विभक्त के समान स्थित है। वह ज्ञेय ब्रह्म भूतमात्र का भर्ता, संहारकर्ता और उत्पत्ति कर्ता है।।",
    commentary: "A simple summary of verse 13.17",
  },
  {
    chapter: 13,
    verse: 18,
    sanskrit:
      "ज्योतिषामपि तज्ज्योतिस्तमसः परमुच्यते |\nज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम् ||१३-१८||",
    english:
      "13.18 That, the Light of all lights, is said to be beyond darkness: knowledge, the knowable and the goal of knowledge, seated in the hearts of all.",
    hindi:
      "।।13.18।। (वह ब्रह्म) ज्योतियों की भी ज्योति और (अज्ञान) अन्धकार से परे कहा जाता है। वह ज्ञान (चैतन्यस्वरूप) ज्ञेय और ज्ञान के द्वारा जानने योग्य (ज्ञानगम्य) है। वह सभी के हृदय में स्थित है।।",
    commentary: "A simple summary of verse 13.18",
  },
  {
    chapter: 13,
    verse: 19,
    sanskrit:
      "इति क्षेत्रं तथा ज्ञानं ज्ञेयं चोक्तं समासतः |\nमद्भक्त एतद्विज्ञाय मद्भावायोपपद्यते ||१३-१९||",
    english:
      "13.19 Thus the field, as well as knowledge and the knowable have been briefly stated. My devotee, knowing this, enters into My Being.",
    hindi:
      "।।13.19।। इस प्रकार, (मेरे द्वारा) क्षेत्र, ज्ञान और ज्ञेय को संक्षेपत: कहा गया। इसे तत्त्व से जानकर (विज्ञाय) मेरा भक्त मेरे स्वरूप को प्राप्त होता है।।",
    commentary: "A simple summary of verse 13.19",
  },
  {
    chapter: 13,
    verse: 20,
    sanskrit:
      "प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि |\nविकारांश्च गुणांश्चैव विद्धि प्रकृतिसम्भवान् ||१३-२०||",
    english:
      "13.20 Know thou that Nature (matter) and the Spirit are both beginningless; and know also that all modifications and alities are born of Nature.",
    hindi:
      "।।13.20।। प्रकृति और पुरुष इन दोनों को ही तुम अनादि जानो। और तुम यह भी जानो कि सभी विकार और गुण प्रकृति से ही उत्पन्न हुए हैं।।",
    commentary: "A simple summary of verse 13.20",
  },
  {
    chapter: 13,
    verse: 21,
    sanskrit:
      "कार्यकारणकर्तृत्वे हेतुः प्रकृतिरुच्यते |\nपुरुषः सुखदुःखानां भोक्तृत्वे हेतुरुच्यते ||१३-२१||",
    english:
      "13.21 In the production of the effect and the cause, Nature (matter) is said to be the cause; in the experience of pleasure and pain, the soul is said to be the cause.",
    hindi:
      "।।13.21।। कार्य और कारण के उत्पन्न करने में हेतु प्रकृति कही जाती है और पुरुष सुख-दु:ख के भोक्तृत्व में हेतु कहा जाता है।।",
    commentary: "A simple summary of verse 13.21",
  },
  {
    chapter: 13,
    verse: 22,
    sanskrit:
      "पुरुषः प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान् |\nकारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु ||१३-२२||",
    english:
      "13.22 The soul seated in Nature experiences the alities born of Nature; attachment to the alities is the cause of its birth in good and evil wombs.",
    hindi:
      "।।13.22।। प्रकृति में स्थित पुरुष प्रकृति से उत्पन्न गुणों को भोगता है। इन गुणों का संग ही इस पुरुष (जीव) के शुभ और अशुभ योनियों में जन्म लेने का कारण है।।",
    commentary: "A simple summary of verse 13.22",
  },
  {
    chapter: 13,
    verse: 23,
    sanskrit:
      "उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वरः |\nपरमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुषः परः ||१३-२३||",
    english:
      "13.23 The Supreme Soul in this body is also called the spectator, the permitter, the supporter, the enjoyer, the great Lord and the Supreme Self.",
    hindi:
      "।।13.23।। परम पुरुष ही इस देह में उपद्रष्टा, अनुमन्ता ,भर्ता, भोक्ता, महेश्वर और परमात्मा कहा जाता है।।",
    commentary: "A simple summary of verse 13.23",
  },
  {
    chapter: 13,
    verse: 24,
    sanskrit:
      "य एवं वेत्ति पुरुषं प्रकृतिं च गुणैः सह |\nसर्वथा वर्तमानोऽपि न स भूयोऽभिजायते ||१३-२४||",
    english:
      "13.24 He who thus knows the Spirit and Matter together with the alities, in whatever condition he may be, he is not born again.",
    hindi:
      "।।13.24।। इस प्रकार पुरुष और गुणों के सहित प्रकृति को जो मनुष्य जानता है, वह सब प्रकार से रहता हुआ (व्यवहार करता हुआ) भी पुन: नहीं जन्मता है।।",
    commentary: "A simple summary of verse 13.24",
  },
  {
    chapter: 13,
    verse: 25,
    sanskrit:
      "ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना |\nअन्ये साङ्ख्येन योगेन कर्मयोगेन चापरे ||१३-२५||",
    english:
      "13.25 Some by meditation behold the Self in the self by the self, others by the Yoga of knowledge, and still others by the Yoga of action.",
    hindi:
      "।।13.25।। कोई पुरुष ध्यान के अभ्यास से आत्मा को आत्मा (हृदय) में आत्मा (शुद्ध बुद्धि) के द्वारा देखते हैं; अन्य लोग सांख्य योग के द्वारा तथा कोई साधक कर्मयोग से (आत्मा को देखते हैं )।।",
    commentary: "A simple summary of verse 13.25",
  },
  {
    chapter: 13,
    verse: 26,
    sanskrit:
      "अन्ये त्वेवमजानन्तः श्रुत्वान्येभ्य उपासते |\nतेऽपि चातितरन्त्येव मृत्युं श्रुतिपरायणाः ||१३-२६||",
    english:
      "13.26 Others also, not knowing thus, worship, having heard of It from others; they, too, cross beyond death, regarding what they have heard as the Supreme refuge.",
    hindi:
      "।।13.26।। परन्तु, अन्य लोग जो स्वयं इस प्रकार न जानते हुए, दूसरों से (आचार्यों से) सुनकर ही उपासना करते हैं, वे श्रुतिपरायण (अर्थात् श्रवण ही जिनके लिए परम साधन है) लोग भी मृत्यु को नि:सन्देह तर जाते हैं।।",
    commentary: "A simple summary of verse 13.26",
  },
  {
    chapter: 13,
    verse: 27,
    sanskrit:
      "यावत्सञ्जायते किञ्चित्सत्त्वं स्थावरजङ्गमम् |\nक्षेत्रक्षेत्रज्ञसंयोगात्तद्विद्धि भरतर्षभ ||१३-२७||",
    english:
      "13.27 Wherever a being is born, whether unmoving or moving, know thou, O best of the Bharatas (Arjuna), that it is from the union between the field and its knower.",
    hindi:
      "।।13.27।। हे भरत श्रेष्ठ ! यावन्मात्र जो कुछ भी स्थावर जंगम (चराचर) वस्तु उत्पन्न होती है, उस सबको तुम क्षेत्र और क्षेत्रज्ञ के संयोग से उत्पन्न हुई जानो।।",
    commentary: "A simple summary of verse 13.27",
  },
  {
    chapter: 13,
    verse: 28,
    sanskrit:
      "समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम् |\nविनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति ||१३-२८||",
    english:
      "13.28 He sees, who sees the Supreme Lord, existing eally in all beings, the unperishing within the perishing.",
    hindi:
      "।।13.28।। जो पुरुष समस्त नश्वर भूतों में अनश्वर परमेश्वर को समभाव से स्थित देखता है, वही (वास्तव में) देखता है।।",
    commentary: "A simple summary of verse 13.28",
  },
  {
    chapter: 13,
    verse: 29,
    sanskrit:
      "समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम् |\nन हिनस्त्यात्मनात्मानं ततो याति परां गतिम् ||१३-२९||",
    english:
      "13.29 Because he who sees the same Lord eally dwelling everywhere does not destroy the Self by the self; he goes to the highest goal.",
    hindi:
      "।।13.29।। निश्चय ही, वह पुरुष सर्वत्र सम भाव से स्थित परमेश्वर को समान हुआ आत्मा (स्वयं) के द्वारा आत्मा (स्वयं) का नाश नहीं करता है, इससे वह परम गति को प्राप्त होता है।।",
    commentary: "A simple summary of verse 13.29",
  },
  {
    chapter: 13,
    verse: 30,
    sanskrit:
      "प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वशः |\nयः पश्यति तथात्मानमकर्तारं स पश्यति ||१३-३०||",
    english:
      "13.30 He sees, who sees that all actions are performed by Nature alone and that the Self is actionless.",
    hindi:
      "।।13.30।। जो पुरुष समस्त कर्मों को सर्वश: प्रकृति द्वारा ही किये गये देखता है तथा आत्मा को अकर्ता देखता है, वही (वास्तव में) देखता है।।",
    commentary: "A simple summary of verse 13.30",
  },
  {
    chapter: 13,
    verse: 31,
    sanskrit:
      "यदा भूतपृथग्भावमेकस्थमनुपश्यति |\nतत एव च विस्तारं ब्रह्म सम्पद्यते तदा ||१३-३१||",
    english:
      "13.31 When a man sees the whole variety of beings as resting in the One, and spreading forth from That alone, he then becomes Brahman.",
    hindi:
      "।।13.31।। यह पुरुष जब भूतों के पृथक् भावों को एक (परमात्मा) में स्थित देखता है तथा उस (परमात्मा) से ही यह विस्तार हुआ जानता है, तब वह ब्रह्म को प्राप्त होता है।।",
    commentary: "A simple summary of verse 13.31",
  },
  {
    chapter: 13,
    verse: 32,
    sanskrit:
      "अनादित्वान्निर्गुणत्वात्परमात्मायमव्ययः |\nशरीरस्थोऽपि कौन्तेय न करोति न लिप्यते ||१३-३२||",
    english:
      "13.32 Being without beginning and being devoid of (any) alities, the Supreme Self, imperishable, though dwelling in the body, O Arjuna, neither acts nor is tainted.",
    hindi:
      "।।13.32।। हे कौन्तेय ! अनादि और निर्गुण होने से यह परमात्मा अव्यय है। शरीर में स्थित हुआ भी, वस्तुत:, वह न (कर्म) करता है और न (फलों से) लिप्त होता है।।",
    commentary: "A simple summary of verse 13.32",
  },
  {
    chapter: 13,
    verse: 33,
    sanskrit:
      "यथा सर्वगतं सौक्ष्म्यादाकाशं नोपलिप्यते |\nसर्वत्रावस्थितो देहे तथात्मा नोपलिप्यते ||१३-३३||",
    english:
      "13.33 As the all-pervading ether is not tainted, because of its subtlety, so the Self seated everywhere in the body is not tainted.",
    hindi:
      "।।13.33।। जिस प्रकार सर्वगत आकाश सूक्ष्म होने के कारण लिप्त नहीं होता, उसी प्रकार सर्वत्र देह में स्थित आत्मा लिप्त नहीं होता।।",
    commentary: "A simple summary of verse 13.33",
  },
  {
    chapter: 13,
    verse: 34,
    sanskrit:
      "यथा प्रकाशयत्येकः कृत्स्नं लोकमिमं रविः |\nक्षेत्रं क्षेत्री तथा कृत्स्नं प्रकाशयति भारत ||१३-३४||",
    english:
      "13.34 Just as the one sun illumines the whole world, so also the Lord of the field (Supreme Self) \nillumines the whole field, O Arjuna.",
    hindi:
      "।।13.34।। हे भारत ! जिस प्रकार एक ही सूर्य इस सम्पूर्ण लोक को प्रकाशित करता है, उसी प्रकार एक ही क्षेत्री (क्षेत्रज्ञ) सम्पूर्ण क्षेत्र को प्रकाशित करता है।।",
    commentary: "A simple summary of verse 13.34",
  },
  {
    chapter: 13,
    verse: 35,
    sanskrit:
      "क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा |\nभूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम् ||१३-३५||",
    english:
      "13.35 They who, by the eye of knowledge, perceive the distinction between the field and its knower and also the liberation from the Nature of being, go to the Supreme.",
    hindi:
      "।।13.35।। इस प्रकार, जो पुरुष ज्ञानचक्षु के द्वारा क्षेत्र और क्षेत्रज्ञ के भेद को तथा प्रकृति के विकारों से मोक्ष को जानते हैं, वे परम ब्रह्म को प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 13.35",
  },
  {
    chapter: 14,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच |\nपरं भूयः प्रवक्ष्यामि ज्ञानानां ज्ञानमुत्तमम् |\nयज्ज्ञात्वा मुनयः सर्वे परां सिद्धिमितो गताः ||१४-१||",
    english:
      "14.1 The Blessed Lord said  I will again declare (to thee) that supreme knowledge, the best of all knowledge, having known which all the sages have gone to the supreme perfection after this life.",
    hindi:
      "।।14.1।। श्री भगवान् ने कहा -- समस्त ज्ञानों में उत्तम परम ज्ञान को मैं पुन: कहूंगा, जिसको जानकर सभी मुनिजन इस (लोक) से जाकर (इस जीवनोपरान्त) परम सिद्धि को प्राप्त हुए हैं।।",
    commentary: "A simple summary of verse 14.1",
  },
  {
    chapter: 14,
    verse: 2,
    sanskrit:
      "इदं ज्ञानमुपाश्रित्य मम साधर्म्यमागताः |\nसर्गेऽपि नोपजायन्ते प्रलये न व्यथन्ति च ||१४-२||",
    english:
      "14.2 They who, having taken refuge in this knowledge, have attained to unity with Me, are neither born at the time of creation nor are they disturbed at the time of dissolution.",
    hindi:
      "।।14.2।। इस ज्ञान का आश्रय लेकर मेरे स्वरूप (सार्धम्यम्) को प्राप्त पुरुष सृष्टि के आदि में जन्म नहीं लेते और प्रलयकाल में व्याकुल भी नहीं होते हैं।।",
    commentary: "A simple summary of verse 14.2",
  },
  {
    chapter: 14,
    verse: 3,
    sanskrit:
      "मम योनिर्महद् ब्रह्म तस्मिन्गर्भं दधाम्यहम् |\nसम्भवः सर्वभूतानां ततो भवति भारत ||१४-३||",
    english:
      "14.3 My womb is the great Brahma; in that I place the germ; thence, O Arjuna, is the birth of all beings.",
    hindi:
      "।।14.3।। हे भारत ! मेरी महद् ब्रह्मरूप प्रकृति, (भूतों की) योनि है, जिसमें मैं गर्भाधान करता हूँ; इससे समस्त भूतों की उत्पत्ति होती है।।",
    commentary: "A simple summary of verse 14.3",
  },
  {
    chapter: 14,
    verse: 4,
    sanskrit:
      "सर्वयोनिषु कौन्तेय मूर्तयः सम्भवन्ति याः |\nतासां ब्रह्म महद्योनिरहं बीजप्रदः पिता ||१४-४||",
    english:
      "14.4 Whatever forms are produced, O Arjuna, in any womb whatsoever, the great Brahma is their womb and I am the seed-giving father.",
    hindi:
      "।।14.4।। हे कौन्तेय ! समस्त योनियों में जितनी मूर्तियाँ (शरीर) उत्पन्न होती हैं, उन सबकी योनि अर्थात् गर्भ है महद्ब्रह्म और मैं बीज की स्थापना करने वाला पिता हूँ।।",
    commentary: "A simple summary of verse 14.4",
  },
  {
    chapter: 14,
    verse: 5,
    sanskrit:
      "सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः |\nनिबध्नन्ति महाबाहो देहे देहिनमव्ययम् ||१४-५||",
    english:
      "14.5 Purity, passion and inertia  these alities, O Arjuna, born of Nature, bind fast in the body, the embodied, the indestructible.",
    hindi:
      "।।14.5।। हे महाबाहो ! सत्त्व, रज और तम ये प्रकृति से उत्पन्न तीनों गुण देही आत्मा को देह के साथ बांध देते हैं।।",
    commentary: "A simple summary of verse 14.5",
  },
  {
    chapter: 14,
    verse: 6,
    sanskrit:
      "तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम् |\nसुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ ||१४-६||",
    english:
      "14.6 Of these, Sattva, which from its stainlessness is luminous and healthy, binds by attachment to happiness and by attachment to knowledge, O sinless one.",
    hindi:
      "।।14.6।। हे निष्पाप अर्जुन ! इन (तीनों) में, सत्त्वगुण निर्मल होने से प्रकाशक और अनामय (निरुपद्रव, निर्विकार या निरोग) है; (वह जीव को) सुख की आसक्ति से और ज्ञान की आसक्ति से बांध देता है।।",
    commentary: "A simple summary of verse 14.6",
  },
  {
    chapter: 14,
    verse: 7,
    sanskrit:
      "रजो रागात्मकं विद्धि तृष्णासङ्गसमुद्भवम् |\nतन्निबध्नाति कौन्तेय कर्मसङ्गेन देहिनम् ||१४-७||",
    english:
      "14.7 Know thou Rajas to be of the nature of passion, the source of thirst (for sensual enjoyment) and attachment; it binds fast, O Arjuna, the embodied one by attachment to action.",
    hindi:
      "।।14.7।। हे कौन्तेय ! रजोगुण को रागस्वरूप जानो, जिससे तृष्णा और आसक्ति उत्पन्न होती है। वह देही आत्मा को कर्मों की आसक्ति से बांधता है।।",
    commentary: "A simple summary of verse 14.7",
  },
  {
    chapter: 14,
    verse: 8,
    sanskrit:
      "तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम् |\nप्रमादालस्यनिद्राभिस्तन्निबध्नाति भारत ||१४-८||",
    english:
      "14.8 But know thou Tamas to be born of ignorance, deluding all embodied beings; it binds fast, O Arjuna, by heedlessness, indolence and sleep.",
    hindi:
      "।।14.8।। और हे भारत ! तमोगुण को अज्ञान से उत्पन्न जानो; जो समस्त देहधारियों (जीवों) को मोहित करने वाला है। वह प्रमाद, आलस्य और निद्रा के द्वारा जीव को बांधता है।।",
    commentary: "A simple summary of verse 14.8",
  },
  {
    chapter: 14,
    verse: 9,
    sanskrit:
      "सत्त्वं सुखे सञ्जयति रजः कर्मणि भारत |\nज्ञानमावृत्य तु तमः प्रमादे सञ्जयत्युत ||१४-९||",
    english:
      "14.9 Sattva attaches to happiness, Rajas to action, O Arjuna, while Tamas verily shrouding knowledge attaches to heedlessness.",
    hindi:
      "।।14.9।। हे भारत ! सत्त्वगुण सुख में आसक्त कर देता है और रजोगुण कर्म में, किन्तु तमोगुण ज्ञान को आवृत्त करके जीव को प्रमाद से युक्त कर देता है।।",
    commentary: "A simple summary of verse 14.9",
  },
  {
    chapter: 14,
    verse: 10,
    sanskrit:
      "रजस्तमश्चाभिभूय सत्त्वं भवति भारत |\nरजः सत्त्वं तमश्चैव तमः सत्त्वं रजस्तथा ||१४-१०||",
    english:
      "14.10 Now Sattva arises (prevails), O Arjuna, having overpowered Rajas and Tamas; nor Rajas, having overpowered Sattva and Tamas; and now Tamas, having overpowered Sattva and Rajas.",
    hindi:
      "।।14.10।। हे भारत ! कभी रज और तम को अभिभूत (दबा) करके सत्त्वगुण की वृद्धि होती है, कभी रज और सत्त्व को दबाकर तमोगुण की वृद्धि होती है, तो कभी तम और सत्त्व को अभिभूत कर रजोगुण की वृद्धि होती है।।",
    commentary: "A simple summary of verse 14.10",
  },
  {
    chapter: 14,
    verse: 11,
    sanskrit:
      "सर्वद्वारेषु देहेऽस्मिन्प्रकाश उपजायते |\nज्ञानं यदा तदा विद्याद्विवृद्धं सत्त्वमित्युत ||१४-११||",
    english:
      "14.11 When through every gate (sense) in this body, the wisdom-light shines, then it may be known that Sattva is predominant.",
    hindi:
      "।।14.11।। जब इस देह के द्वारों अर्थात् समस्त इन्द्रियों में ज्ञानरूप प्रकाश उत्पन्न होता है, तब सत्त्वगुण को प्रवृद्ध हुआ जानो।।",
    commentary: "A simple summary of verse 14.11",
  },
  {
    chapter: 14,
    verse: 12,
    sanskrit:
      "लोभः प्रवृत्तिरारम्भः कर्मणामशमः स्पृहा |\nरजस्येतानि जायन्ते विवृद्धे भरतर्षभ ||१४-१२||",
    english:
      "14.12 Greed, activity, the undertaking of actions, restlessness, longing  these arise when Rajas is predominant, O Arjuna.",
    hindi:
      "।।14.12।। हे भरत-श्रेष्ठ ! रजोगुण के प्रवृद्ध होने पर लोभ, प्रवृत्ति (सामान्य चेष्टा) कर्मों का आरम्भ, शम का अभाव तथा स्पृहा, ये सब उत्पन्न होते हैं।।",
    commentary: "A simple summary of verse 14.12",
  },
  {
    chapter: 14,
    verse: 13,
    sanskrit:
      "अप्रकाशोऽप्रवृत्तिश्च प्रमादो मोह एव च |\nतमस्येतानि जायन्ते विवृद्धे कुरुनन्दन ||१४-१३||",
    english:
      "14.13 Darkness, inertness, heedlessness and delusion  these arise when Tamas is predominant, O Arjuna.",
    hindi:
      "।।14.13।। हे कुरुनन्दन ! तमोगुण के प्रवृद्ध होने पर अप्रकाश, अप्रवृत्ति, प्रमाद और मोह ये सब उत्पन्न होते हैं।।",
    commentary: "A simple summary of verse 14.13",
  },
  {
    chapter: 14,
    verse: 14,
    sanskrit:
      "यदा सत्त्वे प्रवृद्धे तु प्रलयं याति देहभृत् |\nतदोत्तमविदां लोकानमलान्प्रतिपद्यते ||१४-१४||",
    english:
      "14.14 If the embodied one meets with death when Sattva is predominant, then he attains to the spotless worlds of the knowers of the Highest.",
    hindi:
      "।।14.14।। जब यह जीव (देहभृत्) सत्त्वगुण की प्रवृद्धि में मृत्यु को प्राप्त होता है, तब उत्तम कर्म करने वालों के निर्मल अर्थात् स्वर्गादि लोकों को प्राप्त होता है।।",
    commentary: "A simple summary of verse 14.14",
  },
  {
    chapter: 14,
    verse: 15,
    sanskrit:
      "रजसि प्रलयं गत्वा कर्मसङ्गिषु जायते |\nतथा प्रलीनस्तमसि मूढयोनिषु जायते ||१४-१५||",
    english:
      "14.15 Meeting death in Rajas, he is born among those who are attached to action; and dying in Tamas, he is born in the womb of the senseless.",
    hindi:
      "।।14.15।। रजोगुण के प्रवृद्ध काल में मृत्यु को प्राप्त होकर कर्मासक्ति वाले (मनुष्य) लोक में वह जन्म लेता है तथा तमोगुण के प्रवृद्धकाल में (मरण होने पर) मूढ़योनि में जन्म लेता है।।",
    commentary: "A simple summary of verse 14.15",
  },
  {
    chapter: 14,
    verse: 16,
    sanskrit:
      "कर्मणः सुकृतस्याहुः सात्त्विकं निर्मलं फलम् |\nरजसस्तु फलं दुःखमज्ञानं तमसः फलम् ||१४-१६||",
    english:
      "14.16 The fruit of good action, they say, is Sattvic and pure, verily the fruit of Rajas is pain, and ignorance is the fruit of Tamas.",
    hindi:
      "।।14.16।। शुभ कर्म का फल सात्विक और निर्मल कहा गया है; रजोगुण का फल दु;ख और तमोगुण का फल अज्ञान है।।",
    commentary: "A simple summary of verse 14.16",
  },
  {
    chapter: 14,
    verse: 17,
    sanskrit:
      "सत्त्वात्सञ्जायते ज्ञानं रजसो लोभ एव च |\nप्रमादमोहौ तमसो भवतोऽज्ञानमेव च ||१४-१७||",
    english:
      "14.17 From Sattva arises knowledge, and greed from Rajas; heedlessness and delusion arise from Tamas, and also ignorance.",
    hindi:
      "।।14.17।। सत्त्वगुण से ज्ञान उत्पन्न होता है। रजोगुण से लोभ तथा तमोगुण से प्रमाद, मोह और अज्ञान उत्पन्न होता है।।",
    commentary: "A simple summary of verse 14.17",
  },
  {
    chapter: 14,
    verse: 18,
    sanskrit:
      "ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसाः |\nजघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसाः ||१४-१८||",
    english:
      "14.18 Those who are seated in Sattva go upwards; the Rajasic dwell in the middle; and the Tamasic, abiding in the function of the lowest Guna, go downwards.",
    hindi:
      "।।14.18।। सत्त्वगुण में स्थित पुरुष उच्च (लोकों को) जाते हैं; राजस पुरुष मध्य (मनुष्य लोक) में रहते हैं और तमोगुण की अत्यन्त हीन प्रवृत्तियों में स्थित तामस लोग अधोगति को प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 14.18",
  },
  {
    chapter: 14,
    verse: 19,
    sanskrit:
      "नान्यं गुणेभ्यः कर्तारं यदा द्रष्टानुपश्यति |\nगुणेभ्यश्च परं वेत्ति मद्भावं सोऽधिगच्छति ||१४-१९||",
    english:
      "14.19 When the seer beholds no agent other than the Gunas and knows That which is higher than they, he attains to My Being.",
    hindi:
      "।।14.19।। जब द्रष्टा (साधक) पुरुष तीनों गुणों के अतिरिक्त किसी अन्य को कर्ता नहीं देखता, अर्थात् नहीं समझता है और तीनों गुणों से परे मेरे तत्व को जानता है, तब वह मेरे स्वरूप को प्राप्त होता है।।",
    commentary: "A simple summary of verse 14.19",
  },
  {
    chapter: 14,
    verse: 20,
    sanskrit:
      "गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान् |\nजन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते ||१४-२०||",
    english:
      "14.20 The embodied one having crossed beyond these three Gunas out of which the body is evolved, is freed from birth, death, decay and pain, and attains to immortality.",
    hindi:
      "।।14.20।। यह देही पुरुष शरीर की उत्पत्ति के कारणरूप तीनों गुणों से अतीत होकर जन्म, मृत्यु, जरा और दु:खों से विमुक्त हुआ अमृतत्व को प्राप्त होता है।।",
    commentary: "A simple summary of verse 14.20",
  },
  {
    chapter: 14,
    verse: 21,
    sanskrit:
      "अर्जुन उवाच |\nकैर्लिङ्गैस्त्रीन्गुणानेतानतीतो भवति प्रभो |\nकिमाचारः कथं चैतांस्त्रीन्गुणानतिवर्तते ||१४-२१||",
    english:
      "14.21 Arjuna said  What are the marks of him who has transcended the three alities, O Lord? What is his conduct and how does he go beyond these three alities?",
    hindi:
      "।।14.21।। अर्जुन ने कहा -- हे प्रभो ! इन तीनो गुणों से अतीत हुआ पुरुष किन लक्षणों से युक्त होता है ? वह किस प्रकार के आचरण वाला होता है ? और, वह किस उपाय से इन तीनों गुणों से अतीत होता है।।",
    commentary: "A simple summary of verse 14.21",
  },
  {
    chapter: 14,
    verse: 22,
    sanskrit:
      "श्रीभगवानुवाच |\nप्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव |\nन द्वेष्टि सम्प्रवृत्तानि न निवृत्तानि काङ्क्षति ||१४-२२||",
    english:
      "14.22 The Blessed Lord said  When light, activity and delusion are present, he hates them not, nor does he long for them when they are absent.",
    hindi:
      "।।14.22।। श्रीभगवान् ने कहा -- हे पाण्डव ! (ज्ञानी पुरुष) प्रकाश, प्रवृत्ति और मोह के प्रवृत्त होने पर भी उनका द्वेष नहीं करता तथा निवृत्त होने पर उनकी आकांक्षा नहीं करता है।।",
    commentary: "A simple summary of verse 14.22",
  },
  {
    chapter: 14,
    verse: 23,
    sanskrit:
      "उदासीनवदासीनो गुणैर्यो न विचाल्यते |\nगुणा वर्तन्त इत्येवं योऽवतिष्ठति नेङ्गते ||१४-२३||",
    english:
      "14.23 He who, seated like one unconcerned, is not moved by the alities, and who, knowing that the alities are active, is self-centred and moves not.",
    hindi:
      '।।14.23।। जो उदासीन के समान आसीन होकर गुणों के द्वारा विचलित नहीं किया जा सकता और "गुण ही व्यवहार करते हैं" ऐसा जानकर स्थित रहता है और उस स्थिति से विचलित नहीं होता।।',
    commentary: "A simple summary of verse 14.23",
  },
  {
    chapter: 14,
    verse: 24,
    sanskrit:
      "समदुःखसुखः स्वस्थः समलोष्टाश्मकाञ्चनः |\nतुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुतिः ||१४-२४||",
    english:
      "14.24 Who is the same in pleasure and pain, who dwells in the Self, to whom a clod of earth, stone and gold are alike, who is the same to the dear and the unfriendly, who is firm, and to whom censure and praise are as one.",
    hindi:
      "।।14.24।। जो स्वस्थ (स्वरूप में स्थित), सुख-दु:ख में समान रहता है तथा मिट्टी, पत्थर और स्वर्ण में समदृष्टि रखता है; ऐसा वीर पुरुष प्रिय और अप्रिय को तथा निन्दा और आत्मस्तुति को तुल्य समझता है।।",
    commentary: "A simple summary of verse 14.24",
  },
  {
    chapter: 14,
    verse: 25,
    sanskrit:
      "मानापमानयोस्तुल्यस्तुल्यो मित्रारिपक्षयोः |\nसर्वारम्भपरित्यागी गुणातीतः स उच्यते ||१४-२५||",
    english:
      "14.25 Who is the same in honour and dishonour, the same to friend and foe, abandoning all undertakings  he is said to have transcended the alities.",
    hindi:
      "।।14.25।। जो मान और अपमान में सम है; शत्रु और मित्र के पक्ष में भी सम है, ऐसा सर्वारम्भ परित्यागी पुरुष गुणातीत कहा जाता है।।",
    commentary: "A simple summary of verse 14.25",
  },
  {
    chapter: 14,
    verse: 26,
    sanskrit:
      "मां च योऽव्यभिचारेण भक्तियोगेन सेवते |\nस गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते ||१४-२६||",
    english:
      "14.26 And he who serves Me with unswerving devotion, he, crossing beyond the alities, is fit for becoming Brahman.",
    hindi:
      "।।14.26।। जो पुरुष अव्यभिचारी भक्तियोग के द्वारा मेरी सेवा अर्थात् उपासना करता है, वह इन तीनों गुणों के अतीत होकर ब्रह्म बनने के लिये योग्य हो जाता है।।",
    commentary: "A simple summary of verse 14.26",
  },
  {
    chapter: 14,
    verse: 27,
    sanskrit:
      "ब्रह्मणो हि प्रतिष्ठाहममृतस्याव्ययस्य च |\nशाश्वतस्य च धर्मस्य सुखस्यैकान्तिकस्य च ||१४-२७||",
    english:
      "14.27 For I am the abode of Brahman, the immortal and the immutable, of everlasting Dharma and of absolute bliss.",
    hindi:
      "।।14.27।। क्योंकि मैं अमृत, अव्यय, ब्रह्म, शाश्वत धर्म और ऐकान्तिक अर्थात् पारमार्थिक सुख की प्रतिष्ठा हूँ।।",
    commentary: "A simple summary of verse 14.27",
  },
  {
    chapter: 15,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच |\nऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम् |\nछन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित् ||१५-१||",
    english:
      "15.1 The Blessed Lord said  They (the wise) speak of the indestructible peepul tree having its root above and branches below, whose leaves are the metres or hymns: he who knows it is a knower of the Vedas.",
    hindi:
      "।।15.1।। श्री भगवान् ने कहा -- (ज्ञानी पुरुष इस संसार वृक्ष को) ऊर्ध्वमूल और अध:शाखा वाला अश्वत्थ और अव्यय कहते हैं; जिसके पर्ण छन्द अर्थात् वेद हैं, ऐसे (संसार वृक्ष) को जो जानता है, वह वेदवित् है।।",
    commentary: "A simple summary of verse 15.1",
  },
  {
    chapter: 15,
    verse: 2,
    sanskrit:
      "अधश्चोर्ध्वं प्रसृतास्तस्य शाखा\nगुणप्रवृद्धा विषयप्रवालाः |\nअधश्च मूलान्यनुसन्ततानि\nकर्मानुबन्धीनि मनुष्यलोके ||१५-२||",
    english:
      "15.2 Below and above spread its branches, nourished by the Gunas; sense-objects are its buds; and below, in the world of men, stretch forth the roots, originating action.",
    hindi:
      "।।15.2।। उस वृक्ष की शाखाएं गुणों से प्रवृद्ध हुईं नीचे और ऊपर फैली हुईं हैं; (पंच) विषय इसके अंकुर हैं; मनुष्य लोक में कर्मों का अनुसरण करने वाली इसकी अन्य जड़ें नीचे फैली हुईं हैं।।",
    commentary: "A simple summary of verse 15.2",
  },
  {
    chapter: 15,
    verse: 3,
    sanskrit:
      "न रूपमस्येह तथोपलभ्यते\nनान्तो न चादिर्न च सम्प्रतिष्ठा |\nअश्वत्थमेनं सुविरूढमूलं\nअसङ्गशस्त्रेण दृढेन छित्त्वा ||१५-३||",
    english:
      "15.3 Its form is not perceived here as such, neither its end nor its origin, nor its foundation nor resting place: having cut asunder this firmly rooted peepul tree with the strong axe of non-attachment.",
    hindi:
      "।।15.3।। इस (संसार वृक्ष) का स्वरूप जैसा कहा गया है वैसा यहाँ उपलब्ध नहीं होता है, क्योंकि इसका न आदि है और न अंत और न प्रतिष्ठा ही है। इस अति दृढ़ मूल वाले अश्वत्थ वृक्ष को दृढ़ असङ्ग शस्त्र से काटकर ...৷৷৷৷।।",
    commentary: "A simple summary of verse 15.3",
  },
  {
    chapter: 15,
    verse: 4,
    sanskrit:
      "ततः पदं तत्परिमार्गितव्यं\nयस्मिन्गता न निवर्तन्ति भूयः |\nतमेव चाद्यं पुरुषं प्रपद्ये |\nयतः प्रवृत्तिः प्रसृता पुराणी ||१५-४||",
    english:
      "15.4 Then That goal should be sought for, whither having gone none returns again. I seek refuge in that Primeval Purusha Whence streamed forth the ancient activity or energy.",
    hindi:
      '।।15.4।। (तदुपरान्त) उस पद का अन्वेषण करना चाहिए जिसको प्राप्त हुए पुरुष पुन: संसार में नहीं लौटते हैं। "मैं उस आदि पुरुष की शरण हूँ, जिससे यह पुरातन प्रवृत्ति प्रसृत हुई है"।।',
    commentary: "A simple summary of verse 15.4",
  },
  {
    chapter: 15,
    verse: 5,
    sanskrit:
      "निर्मानमोहा जितसङ्गदोषा\nअध्यात्मनित्या विनिवृत्तकामाः |\nद्वन्द्वैर्विमुक्ताः सुखदुःखसंज्ञैर्-\nगच्छन्त्यमूढाः पदमव्ययं तत् ||१५-५||",
    english:
      "15.5 Free from pride and delusion, victorious over the evil of attachment, dwelling constantly in the Self, their desires having completely turned away, freed from the pairs of opposites known as pleasure and pain, the undeluded reach the eternal goal.",
    hindi:
      "।।15.5।। जिनका मान और मोह निवृत्त हो गया है, जिन्होंने संगदोष को जीत लिया है, जो अध्यात्म में स्थित हैं जिनकी कामनाएं निवृत्त हो चुकी हैं और जो सुख-दु:ख नामक द्वन्द्वों से विमुक्त हो गये हैं, ऐसे सम्मोह रहित ज्ञानीजन उस अव्यय पद को प्राप्त होते हैं।।",
    commentary: "A simple summary of verse 15.5",
  },
  {
    chapter: 15,
    verse: 6,
    sanskrit:
      "न तद्भासयते सूर्यो न शशाङ्को न पावकः |\nयद्गत्वा न निवर्तन्ते तद्धाम परमं मम ||१५-६||",
    english:
      "15.6 Neither doth the sun illumine there nor the moon, nor the fire; having gone thither they return not; that is My supreme abode.",
    hindi:
      "।।15.6।। उसे न सूर्य प्रकाशित कर सकता है और न चन्द्रमा और न अग्नि। जिसे प्राप्त कर मनुष्य पुन: (संसार को) नहीं लौटते हैं, वह मेरा परम धाम है।।",
    commentary: "A simple summary of verse 15.6",
  },
  {
    chapter: 15,
    verse: 7,
    sanskrit:
      "ममैवांशो जीवलोके जीवभूतः सनातनः |\nमनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति ||१५-७||",
    english:
      "15.7 An eternal portion of Myself having become a living soul in the world of life, draws to (itself) the (five) senses with the mind for the sixth, abiding in Nature.",
    hindi:
      "।।15.7।। इस जीव लोक में मेरा ही एक सनातन अंश जीव बना है। वह प्रकृति में स्थित हुआ (देहत्याग के समय) पाँचो इन्द्रियों तथा मन को अपनी ओर खींच लेता है अर्थात् उन्हें एकत्रित कर लेता है।।",
    commentary: "A simple summary of verse 15.7",
  },
  {
    chapter: 15,
    verse: 8,
    sanskrit:
      "शरीरं यदवाप्नोति यच्चाप्युत्क्रामतीश्वरः |\nगृहीत्वैतानि संयाति वायुर्गन्धानिवाशयात् ||१५-८||",
    english:
      "15.8 When the Lord (as the individual soul) obtains a body and when He leaves it, He takes these and goes (with them) as the wind takes the scents from their seats (flowers, etc.).",
    hindi:
      "।।15.8।। जब (देहादि का) ईश्वर (जीव) (एक शरीर से) उत्क्रमण करता है, तब इन (इन्द्रियों और मन) को ग्रहण कर अन्य शरीर में इस प्रकार ले जाता है, जैसे गन्ध के आश्रय (फूलादि) से गन्ध को वायु ले जाता है।।",
    commentary: "A simple summary of verse 15.8",
  },
  {
    chapter: 15,
    verse: 9,
    sanskrit:
      "श्रोत्रं चक्षुः स्पर्शनं च रसनं घ्राणमेव च |\nअधिष्ठाय मनश्चायं विषयानुपसेवते ||१५-९||",
    english:
      "15.9 Presiding over the ear, the eye, touch, taste and smell, as well as the mind, it enjoys the objects of the senses.",
    hindi:
      "।।15.9।। (यह जीव) श्रोत्र, चक्षु, स्पर्शेन्द्रिय, रसना और घ्राण (नाक) इन इन्द्रियों तथा मन को आश्रय करके अर्थात् इनके द्वारा विषयों का सेवन करता है।।",
    commentary: "A simple summary of verse 15.9",
  },
  {
    chapter: 15,
    verse: 10,
    sanskrit:
      "उत्क्रामन्तं स्थितं वापि भुञ्जानं वा गुणान्वितम् |\nविमूढा नानुपश्यन्ति पश्यन्ति ज्ञानचक्षुषः ||१५-१०||",
    english:
      "15.10 The deluded do not see Him Who departs, stays and enjoys; but they who possess the eye of knowledge behold Him.",
    hindi:
      "।।15.10।। शरीर को त्यागते हुये, उसमें स्थित हुये अथवा (विषयों को) भोगते हुये, गुणों से समन्वित आत्मा को विमूढ़ लोग नहीं देखते हैं; (परन्तु) ज्ञानचक्षु वाले पुरुष उसे देखते हैं।।",
    commentary: "A simple summary of verse 15.10",
  },
  {
    chapter: 15,
    verse: 11,
    sanskrit:
      "यतन्तो योगिनश्चैनं पश्यन्त्यात्मन्यवस्थितम् |\nयतन्तोऽप्यकृतात्मानो नैनं पश्यन्त्यचेतसः ||१५-११||",
    english:
      "15.11 The Yogins striving (for perfection) behold Him dwelling in the Self; but, the unrefined and unintelligent, even though striving, see Him not.",
    hindi:
      "।।15.11।। योगीजन प्रयत्न करते हुये ही अपने हृदय में स्थित आत्मा को देखते हैं, जब कि अशुद्ध अन्त:करण वाले (अकृतात्मान:) और अविवेकी (अचेतस:) लोग यत्न करते हुये भी इसे नहीं देखते हैं।।",
    commentary: "A simple summary of verse 15.11",
  },
  {
    chapter: 15,
    verse: 12,
    sanskrit:
      "यदादित्यगतं तेजो जगद्भासयतेऽखिलम् |\nयच्चन्द्रमसि यच्चाग्नौ तत्तेजो विद्धि मामकम् ||१५-१२||",
    english:
      "15.12 That light which residing in the sun illumines the whole world, that which is in the moon and in the fire  know that light to be Mine.",
    hindi:
      "।।15.12।। जो तेज सूर्य में स्थित होकर सम्पूर्ण जगत् को प्रकाशित करता है तथा जो तेज चन्द्रमा में है और अग्नि में है, उस तेज को तुम मेरा ही जानो।।",
    commentary: "A simple summary of verse 15.12",
  },
  {
    chapter: 15,
    verse: 13,
    sanskrit:
      "गामाविश्य च भूतानि धारयाम्यहमोजसा |\nपुष्णामि चौषधीः सर्वाः सोमो भूत्वा रसात्मकः ||१५-१३||",
    english:
      "15.13 Permeating the earth I support all beings by (My) energy; and having become the watery moon I nourish all herbs.",
    hindi:
      "।।15.13।। मैं ही पृथ्वी में प्रवेश करके अपने ओज से भूतमात्र को धारण करता हूँ और रसस्वरूप चन्द्रमा बनकर समस्त औषधियों का अर्थात् वनस्पतियों का पोषण करता हूँ।।",
    commentary: "A simple summary of verse 15.13",
  },
  {
    chapter: 15,
    verse: 14,
    sanskrit:
      "अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः |\nप्राणापानसमायुक्तः पचाम्यन्नं चतुर्विधम् ||१५-१४||",
    english:
      "15.14 Having become the fire Vaisvanara, I abide in the body of living beings and, associated with the Prana and the Apana, digest the fourfold food.",
    hindi:
      "।।15.14।। मैं ही समस्त प्राणियों के देह में स्थित वैश्वानर अग्निरूप होकर प्राण और अपान से युक्त चार प्रकार के अन्न को पचाता हूँ।।",
    commentary: "A simple summary of verse 15.14",
  },
  {
    chapter: 15,
    verse: 15,
    sanskrit:
      "सर्वस्य चाहं हृदि सन्निविष्टो\nमत्तः स्मृतिर्ज्ञानमपोहनञ्च |\nवेदैश्च सर्वैरहमेव वेद्यो\nवेदान्तकृद्वेदविदेव चाहम् ||१५-१५||",
    english:
      "15.15 And I am seated in the hearts of all; from Me are memory and knowledge, as well as their absence. I am verily That which has to be known by all the Vedas; I am indeed the author of the Vedanta and the knower of the Vedas am I.",
    hindi:
      "।।15.15।। मैं ही समस्त प्राणियों के हृदय में स्थित हूँ। मुझसे ही स्मृति, ज्ञान और अपोहन (उनका अभाव) होता है। समस्त वेदों के द्वारा मैं ही वेद्य (जानने योग्य) वस्तु हूँ तथा वेदान्त का और वेदों का ज्ञाता भी मैं ही हूँ।।",
    commentary: "A simple summary of verse 15.15",
  },
  {
    chapter: 15,
    verse: 16,
    sanskrit:
      "द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च |\nक्षरः सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते ||१५-१६||",
    english:
      "15.16 Two Purushas there are in this world, the perishable and the imperishable. All beings are \nthe perishable and the Kutastha  the unchanging  is called the imperishable.",
    hindi:
      "।।15.16।। इस लोक में क्षर (नश्वर) और अक्षर (अनश्वर) ये दो पुरुष हैं, समस्त भूत क्षर हैं और 'कूटस्थ' अक्षर कहलाता है।।",
    commentary: "A simple summary of verse 15.16",
  },
  {
    chapter: 15,
    verse: 17,
    sanskrit:
      "उत्तमः पुरुषस्त्वन्यः परमात्मेत्युधाहृतः |\nयो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः ||१५-१७||",
    english:
      "15.17 But distinct is the Supreme Purusha called the highest Self, the indestructible Lord Who, pervading the three worlds, sustains them.",
    hindi:
      "।।15.17।। परन्तु उत्तम पुरुष अन्य ही है, जो परमात्मा कहलाता है और जो तीनों लोकों में प्रवेश करके सबका धारण करने वाला अव्यय ईश्वर है।।",
    commentary: "A simple summary of verse 15.17",
  },
  {
    chapter: 15,
    verse: 18,
    sanskrit:
      "यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तमः |\nअतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः ||१५-१८||",
    english:
      "15.18 As I transcend the perishable and am even higher than the imperishable, I am declared to be the highest Purusha in the world and in the Vedas.",
    hindi:
      "।।15.18।। क्योंकि मैं क्षर से अतीत हूँ और अक्षर से भी उत्तम हूँ, इसलिये लोक में और वेद में भी पुरुषोत्तम के नाम से प्रसिद्ध हूँ।।",
    commentary: "A simple summary of verse 15.18",
  },
  {
    chapter: 15,
    verse: 19,
    sanskrit:
      "यो मामेवमसम्मूढो जानाति पुरुषोत्तमम् |\nस सर्वविद्भजति मां सर्वभावेन भारत ||१५-१९||",
    english:
      "15.19 He who, undeluded, knows Me thus as the highest Purusha, he, knowing all, worships Me with his whole being (heart), O Arjuna.",
    hindi:
      "।।15.19।। हे भारत ! इस प्रकार, जो, संमोहरहित, पुरुष मुझ पुरुषोत्तम को जानता है, वह सर्वज्ञ होकर सम्पूर्ण भाव से अर्थात् पूर्ण हृदय से मेरी भक्ति करता है।।",
    commentary: "A simple summary of verse 15.19",
  },
  {
    chapter: 15,
    verse: 20,
    sanskrit:
      "इति गुह्यतमं शास्त्रमिदमुक्तं मयानघ |\nएतद्बुद्ध्वा बुद्धिमान्स्यात्कृतकृत्यश्च भारत ||१५-२०||",
    english:
      "15.20 Thus, this most secret science has been taught by Me, O sinless one; on knowing this, a man becomes wise, and all his duties are accomplished, O Arjuna.",
    hindi:
      "।।15.20।। हे निष्पाप भारत ! इस प्रकार यह गुह्यतम शास्त्र मेरे द्वारा कहा गया, इसको जानकर मनुष्य बुद्धिमान और कृतकृत्य हो जाता है।।",
    commentary: "A simple summary of verse 15.20",
  },
  {
    chapter: 16,
    verse: 1,
    sanskrit:
      "श्रीभगवानुवाच |\nअभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः |\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ||१६-१||",
    english:
      "16.1 The Blessed Lord said  Fearlessness, purity of heart, steadfastness in knowledge and Yoga, almsgiving, control of the senses, sacrifice, study of scriptures, austerity and straightforwardness.",
    hindi:
      "।।16.1।। श्री भगवान् ने कहा -- अभय, अन्त:करण की शुद्धि, ज्ञानयोग में दृढ़ स्थिति, दान, दम, यज्ञ, स्वाध्याय, तप और आर्जव।।",
    commentary: "A simple summary of verse 16.1",
  },
  {
    chapter: 16,
    verse: 2,
    sanskrit:
      "अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम् |\nदया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम् ||१६-२||",
    english:
      "16.2 Harmlessness, truth, absence of anger, renunciation, peacefulness, absence of crookedness, compassion towards beings, non-covetousness, gentleness, modesty, absence of fickleness.",
    hindi:
      "।।16.2।। अहिंसा, सत्य, क्रोध का अभाव, त्याग, शान्ति, अपैशुनम् (किसी की निन्दा न करना), भूतमात्र के प्रति दया, अलोलुपता , मार्दव (कोमलता), लज्जा, अचंचलता।।",
    commentary: "A simple summary of verse 16.2",
  },
  {
    chapter: 16,
    verse: 3,
    sanskrit:
      "तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता |\nभवन्ति सम्पदं दैवीमभिजातस्य भारत ||१६-३||",
    english:
      "16.3 Vigour, forgiveness, fortitude, purity, absence of hatred, absence of pride  these belong to the one born for a divine state, O Arjuna.",
    hindi:
      "।।16.3।। हे भारत ! तेज, क्षमा, धैर्य, शौच (शुद्धि), अद्रोह और अतिमान (गर्व) का अभाव ये सब दैवी संपदा को प्राप्त पुरुष के लक्षण हैं।।",
    commentary: "A simple summary of verse 16.3",
  },
  {
    chapter: 16,
    verse: 4,
    sanskrit:
      "दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च |\nअज्ञानं चाभिजातस्य पार्थ सम्पदमासुरीम् ||१६-४||",
    english:
      "16.4 Hypocrisy, arrogance and self-conceit, anger and also harshness and ignorance, belong to one who is born for a demoniacal state, O Partha (Arjuna).",
    hindi:
      "।।16.4।। हे पार्थ ! दम्भ, दर्प, अभिमान, क्रोध, कठोर वाणी (पारुष्य) और अज्ञान यह सब आसुरी सम्पदा है।।",
    commentary: "A simple summary of verse 16.4",
  },
  {
    chapter: 16,
    verse: 5,
    sanskrit:
      "दैवी सम्पद्विमोक्षाय निबन्धायासुरी मता |\nमा शुचः सम्पदं दैवीमभिजातोऽसि पाण्डव ||१६-५||",
    english:
      "16.5 The divine nature is deemed conducive to liberation, and the demoniacal to bondage. Grieve not, O Arjuna, thou art born with divine endowments.",
    hindi:
      "।।16.5।। हे पाण्डव ! दैवी सम्पदा मोक्ष के लिए और आसुरी सम्पदा बन्धन के लिए मानी गयी है, तुम शोक मत करो, क्योंकि तुम दैवी सम्पदा को प्राप्त हुए हो।।",
    commentary: "A simple summary of verse 16.5",
  },
  {
    chapter: 16,
    verse: 6,
    sanskrit:
      "द्वौ भूतसर्गौ लोकेऽस्मिन्दैव आसुर एव च |\nदैवो विस्तरशः प्रोक्त आसुरं पार्थ मे शृणु ||१६-६||",
    english:
      "16.6 There are two types of beings in this world, the divine and the demoniacal; the divine has been described at length; hear from Me, O Arjuna, of the demoniacal.",
    hindi:
      "।।16.6।। हे पार्थ ! इस लोक में दो प्रकार की भूतिसृष्टि है, दैवी और आसुरी। उनमें देवों का स्वभाव (दैवी सम्पदा) विस्तारपूर्वक कहा गया है; अब असुरों के स्वभाव को विस्तरश: मुझसे सुनो।।",
    commentary: "A simple summary of verse 16.6",
  },
  {
    chapter: 16,
    verse: 7,
    sanskrit:
      "प्रवृत्तिं च निवृत्तिं च जना न विदुरासुराः |\nन शौचं नापि चाचारो न सत्यं तेषु विद्यते ||१६-७||",
    english:
      "16.7 The demoniacal know not what to do and what to refrain from; neither purity, nor right conduct nor truth is found in them.",
    hindi:
      "।।16.7।। आसुरी स्वभाव के लोग न प्रवृत्ति को; जानते हैं और न निवृत्ति को उनमें न शुद्धि होती है, न सदाचार और न सत्य ही होता है।।",
    commentary: "A simple summary of verse 16.7",
  },
  {
    chapter: 16,
    verse: 8,
    sanskrit:
      "असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम् |\nअपरस्परसम्भूतं किमन्यत्कामहैतुकम् ||१६-८||",
    english:
      '16.8 They say, "This universe is without truth, without (moral) basis, without a God, brought about by mutual union, with lust for its cause; what else?"',
    hindi:
      "।।16.8।। वे कहते हैं कि यह जगत् आश्रयरहित, असत्य और ईश्वर रहित है, यह (स्त्रीपुरुष के) परस्पर कामुक संबंध से ही उत्पन्न हुआ है, और (इसका कारण) क्या हो सकता है?",
    commentary: "A simple summary of verse 16.8",
  },
  {
    chapter: 16,
    verse: 9,
    sanskrit:
      "एतां दृष्टिमवष्टभ्य नष्टात्मानोऽल्पबुद्धयः |\nप्रभवन्त्युग्रकर्माणः क्षयाय जगतोऽहिताः ||१६-९||",
    english:
      "16.9 Holding this view, these ruined souls of small intellect and fierce deeds, come forth as the enemies of the world for its destruction.",
    hindi:
      "।।16.9।। इस दृष्टि का अवलम्बन करके नष्टस्वभाव के अल्प बुद्धि वाले, घोर कर्म करने वाले लोग जगत् के शत्रु (अहित चाहने वाले) के रूप में उसका नाश करने के लिए उत्पन्न होते हैं।।",
    commentary: "A simple summary of verse 16.9",
  },
  {
    chapter: 16,
    verse: 10,
    sanskrit:
      "काममाश्रित्य दुष्पूरं दम्भमानमदान्विताः |\nमोहाद्गृहीत्वासद्ग्राहान्प्रवर्तन्तेऽशुचिव्रताः ||१६-१०||",
    english:
      "16.10 Filled with insatiable desires, full of hypocrisy, pride and arrogance, holding evil ideas through delusion, they work with impure resolves.",
    hindi:
      "।।16.10।। दम्भ, मान और मद से युक्त कभी न पूर्ण होने वाली कामनाओं का आश्रय लिये, मोहवश मिथ्या धारणाओं को ग्रहण करके ये अशुद्ध संकल्पों के लोग जगत् में कार्य करते हैं।।",
    commentary: "A simple summary of verse 16.10",
  },
  {
    chapter: 16,
    verse: 11,
    sanskrit:
      "चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिताः |\nकामोपभोगपरमा एतावदिति निश्चिताः ||१६-११||",
    english:
      "16.11 Giving themselves over to immeasurable cares ending only with death, regarding gratification of lust as their highest aim, and feeling sure that that is all.",
    hindi:
      '।।16.11।। मरणपर्यन्त रहने वाली अपरिमित चिन्ताओं से ग्रस्त और विषयोपभोग को ही परम लक्ष्य मानने वाले ये आसुरी लोग इस निश्चित मत के होते हैं कि "इतना ही (सत्य, आनन्द) है"।।',
    commentary: "A simple summary of verse 16.11",
  },
  {
    chapter: 16,
    verse: 12,
    sanskrit:
      "आशापाशशतैर्बद्धाः कामक्रोधपरायणाः |\nईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान् ||१६-१२||",
    english:
      "16.12 Bound by a hundred ties of hope, given over to lust and anger, they strive to obtain by unlawful means hoards to wealth for sensual enjoyments.",
    hindi:
      "।।16.12।। सैकड़ों आशापाशों से बन्धे हुये, काम और क्रोध के वश में ये लोग विषयभोगों की पूर्ति के लिये अन्यायपूर्वक धन का संग्रह करने के लिये चेष्टा करते हैं।।",
    commentary: "A simple summary of verse 16.12",
  },
  {
    chapter: 16,
    verse: 13,
    sanskrit:
      "इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम् |\nइदमस्तीदमपि मे भविष्यति पुनर्धनम् ||१६-१३||",
    english:
      '16.13 "This has been gained by me today; this desire of mine I shall fuffil; this is mine and this wealth also shall be mine in future."',
    hindi:
      "।।16.13।। मैंने आज यह पाया है और इस मनोरथ को भी प्राप्त करूंगा, मेरे पास यह इतना धन है और इससे भी अधिक धन भविष्य में होगा।।",
    commentary: "A simple summary of verse 16.13",
  },
  {
    chapter: 16,
    verse: 14,
    sanskrit:
      "असौ मया हतः शत्रुर्हनिष्ये चापरानपि |\nईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान्सुखी ||१६-१४||",
    english:
      '16.14 "That enemy has been slain by me; and others also I shall slay. I am the lord. I enjoy. I am perfect, powerful and happy."',
    hindi:
      '।।16.14।। "यह शत्रु मेरे द्वारा मारा गया है और दूसरे शत्रुओं को भी मैं मारूंगा", "मैं ईश्वर हूँ और भोगी हूँ", "मैं सिद्ध पुरुष हूँ", "मैं बलवान और सुखी हूँ",।।',
    commentary: "A simple summary of verse 16.14",
  },
  {
    chapter: 16,
    verse: 15,
    sanskrit:
      "आढ्योऽभिजनवानस्मि कोऽन्योऽस्ति सदृशो मया |\nयक्ष्ये दास्यामि मोदिष्य इत्यज्ञानविमोहिताः ||१६-१५||",
    english:
      '16.15 "I am rich and born in a noble family. Who else is equal to me? I shall perform sacrifices. I shall give (charity). I shall rejoice," thus deluded by ignorance.',
    hindi:
      "।।16.15।। \"मैं धनवान् और श्रेष्ठकुल में जन्मा हूँ। मेरे समान दूसरा कौन है?\",'मैं यज्ञ करूंगा', 'मैं दान दूँगा', 'मैं मौज करूँगा' - इस प्रकार के अज्ञान से वे मोहित होते हैं।।",
    commentary: "A simple summary of verse 16.15",
  },
  {
    chapter: 16,
    verse: 16,
    sanskrit:
      "अनेकचित्तविभ्रान्ता मोहजालसमावृताः |\nप्रसक्ताः कामभोगेषु पतन्ति नरकेऽशुचौ ||१६-१६||",
    english:
      "16.16 Bewildered by many a fancy, entangled in the snare of delusion, addicted to the gratification of lust, they fall into a foul hell.",
    hindi:
      "।।16.16।। अनेक प्रकार से भ्रमित चित्त वाले, मोह जाल में फँसे तथा विषयभोगों में आसक्त ये लोग घोर, अपवित्र नरक में गिरते हैं।।",
    commentary: "A simple summary of verse 16.16",
  },
  {
    chapter: 16,
    verse: 17,
    sanskrit:
      "आत्मसम्भाविताः स्तब्धा धनमानमदान्विताः |\nयजन्ते नामयज्ञैस्ते दम्भेनाविधिपूर्वकम् ||१६-१७||",
    english:
      "16.17 Self-conceited, stubborn, filled with the pride and intoxication of wealth, they perform sacrifices in name out of ostentation, contrary to scriptural ordinances.",
    hindi:
      "।।16.17।। अपने आप को ही श्रेष्ठ मानने वाले, स्तब्ध (गर्वयुक्त), धन और मान के मद से युक्त लोग शास्त्रविधि से रहित केवल नाममात्र के यज्ञों द्वारा दम्भपूर्वक यजन करते हैं।।",
    commentary: "A simple summary of verse 16.17",
  },
  {
    chapter: 16,
    verse: 18,
    sanskrit:
      "अहंकारं बलं दर्पं कामं क्रोधं च संश्रिताः |\nमामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः ||१६-१८||",
    english:
      "16.18 Given over to egoism, power, haughtiness, lust and anger, these malicious people hate Me in their own bodies and in those of others.",
    hindi:
      "।।16.18।। अहंकार, बल, दर्प, काम और क्रोध के वशीभूत हुए परनिन्दा करने वाले ये लोग अपने और दूसरों के शरीर में स्थित मुझ (परमात्मा) से द्वेष करने वाले होते हैं।।",
    commentary: "A simple summary of verse 16.18",
  },
  {
    chapter: 16,
    verse: 19,
    sanskrit:
      "तानहं द्विषतः क्रुरान्संसारेषु नराधमान् |\nक्षिपाम्यजस्रमशुभानासुरीष्वेव योनिषु ||१६-१९||",
    english:
      "16.19 Those cruel haters, worst among men in the world, I hurl those evil-doers into the wombs of demons only.",
    hindi:
      "।।16.19।। ऐसे उन द्वेष करने वाले,  क्रूरकर्मी और नराधमों को मैं संसार में बारम्बार (अजस्रम्) आसुरी योनियों में ही गिराता हूँ अर्थात् उत्पन्न करता हूँ।।",
    commentary: "A simple summary of verse 16.19",
  },
  {
    chapter: 16,
    verse: 20,
    sanskrit:
      "आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि |\nमामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम् ||१६-२०||",
    english:
      "16.20 Entering into demoniacal wombs and deluded, birth after birth, not attaining Me, they thus fall, O Arjuna, into a condition still lower than that.",
    hindi:
      "।।16.20।। हे कौन्तेय ! वे मूढ़ पुरुष जन्मजन्मान्तर में आसुरी योनि को प्राप्त होते हैं और ( इस प्रकार) मुझे प्राप्त न होकर अधम गति को प्राप्त होते है।।",
    commentary: "A simple summary of verse 16.20",
  },
  {
    chapter: 16,
    verse: 21,
    sanskrit:
      "त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः |\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत् ||१६-२१||",
    english:
      "16.21 Triple is the gate of this hell, destructive of the self  lust, anger and greed; therefore one should abandon these three.",
    hindi:
      "।।16.21।। काम, क्रोध और लोभ ये आत्मनाश के त्रिविध द्वार हैं, इसलिए इन तीनों को त्याग देना चाहिए।।",
    commentary: "A simple summary of verse 16.21",
  },
  {
    chapter: 16,
    verse: 22,
    sanskrit:
      "एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः |\nआचरत्यात्मनः श्रेयस्ततो याति परां गतिम् ||१६-२२||",
    english:
      "16.22 A man who is liberated from these three gates to darkness, O Arjuna, practises what is good for him and thus goes to the Supreme Goal.",
    hindi:
      "।।16.22।। हे कौन्तेय ! नरक के इन तीनों द्वारों से विमुक्त पुरुष अपने कल्याण के साधन का आचरण करता है और इस प्रकार परा गति को प्राप्त होता है।।",
    commentary: "A simple summary of verse 16.22",
  },
  {
    chapter: 16,
    verse: 23,
    sanskrit:
      "यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः |\nन स सिद्धिमवाप्नोति न सुखं न परां गतिम् ||१६-२३||",
    english:
      "16.23 He who, having cast aside the ordinances of the scriptures, acts under the impulse of desire, attains not perfection, nor happiness nor the Supreme Goal.",
    hindi:
      "।।16.23।। जो पुरुष शास्त्रविधि को त्यागकर अपनी कामना से प्रेरित होकर ही कार्य करता है, वह न पूर्णत्व की सिद्धि प्राप्त करता है, न सुख और न परा गति।।",
    commentary: "A simple summary of verse 16.23",
  },
  {
    chapter: 16,
    verse: 24,
    sanskrit:
      "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ |\nज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि ||१६-२४||",
    english:
      "16.24 Therefore, let the scripture be thy authority in determining what ought to be done and what ought not to be done. Having known what is said in the ordinance of the scriptures, thou shouldst act here in this world.",
    hindi:
      "।।16.24।। इसलिए तुम्हारे लिए कर्तव्य और अकर्तव्य की व्यवस्था (निर्णय) में शास्त्र ही प्रमाण है शास्त्रोक्त विधान को जानकर तुम्हें अपने कर्म करने चाहिए।।",
    commentary: "A simple summary of verse 16.24",
  },
  {
    chapter: 17,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच |\nये शास्त्रविधिमुत्सृज्य यजन्ते श्रद्धयान्विताः |\nतेषां निष्ठा तु का कृष्ण सत्त्वमाहो रजस्तमः ||१७-१||",
    english:
      "17.1 Arjuna said  Those who, setting aside the ordinances of the scriptures, perform sacrifice with faith, what is their condition, O Krishna? Is is Sattva, Rajas or Tamas?",
    hindi:
      "।।17.1।। अर्जुन ने कहा -- हे कृष्ण ! जो लोग शास्त्रविधि को त्यागकर (केवल) श्रद्धा युक्त यज्ञ (पूजा) करते हैं, उनकी स्थिति (निष्ठा) कौन सी है ?क्या वह सात्त्विक है अथवा राजसिक या तामसिक ?",
    commentary: "A simple summary of verse 17.1",
  },
  {
    chapter: 17,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच |\nत्रिविधा भवति श्रद्धा देहिनां सा स्वभावजा |\nसात्त्विकी राजसी चैव तामसी चेति तां शृणु ||१७-२||",
    english:
      "17.2 The Blessed Lord said  Threefold is the faith of the embodied, which is inherent in their nature  the Sattvic (pure), the Rajasic (passionate) and the Tamasic (dark). Do thou hear of it.",
    hindi:
      "।।17.2।। श्री भगवान् ने कहा -- देहधारियों (मनुष्यों) की वह स्वाभाविक (ज्ञानरहित) श्रद्धा तीन प्रकार की - सात्त्विक, राजसिक और तामसिक - होती हैं, उसे तुम मुझसे सुनो।।",
    commentary: "A simple summary of verse 17.2",
  },
  {
    chapter: 17,
    verse: 3,
    sanskrit:
      "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत |\nश्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः ||१७-३||",
    english:
      "17.3 The faith of each is in accordance with his nature, O Arjuna. The man consists of his faith; as a man's faith is, so is he.",
    hindi:
      "।।17.3।। हे भारत सभी मनुष्यों की श्रद्धा उनके सत्त्व (स्वभाव, संस्कार) के अनुरूप होती है। यह पुरुष श्रद्धामय है, इसलिए जो पुरुष जिस श्रद्धा वाला है वह स्वयं भी वही है अर्थात् जैसी जिसकी श्रद्धा वैसा ही उसका स्वरूप होता है।।",
    commentary: "A simple summary of verse 17.3",
  },
  {
    chapter: 17,
    verse: 4,
    sanskrit:
      "यजन्ते सात्त्विका देवान्यक्षरक्षांसि राजसाः |\nप्रेतान्भूतगणांश्चान्ये यजन्ते तामसा जनाः ||१७-४||",
    english:
      "17.4 The Sattvic or the pure men worship the gods; the Rajasic or the passionate worship the Yakshas and the Rakshasas; the others (the Tamasic or the deluded people) worship the ghosts and the hosts of the nature-spirits.",
    hindi:
      "।।17.4।। सात्त्विक पुरुष देवताओं को पूजते हैं और राजस लोग यक्ष और राक्षसों को, तथा अन्य तामसी जन प्रेत और भूतगणों को पूजते हैं।।",
    commentary: "A simple summary of verse 17.4",
  },
  {
    chapter: 17,
    verse: 5,
    sanskrit:
      "अशास्त्रविहितं घोरं तप्यन्ते ये तपो जनाः |\nदम्भाहंकारसंयुक्ताः कामरागबलान्विताः ||१७-५||",
    english:
      "17.5 Those men who practise terrific austerities not enjoined by the scriptures, given to hypocrisy and egoism, impelled by the force of lust and attachment.",
    hindi:
      "।।17.5।। जो लोग शास्त्रविधि से रहित घोर तप करते हैं तथा दम्भ, अहंकार, काम और राग से भी युक्त होते हैं।।",
    commentary: "A simple summary of verse 17.5",
  },
  {
    chapter: 17,
    verse: 6,
    sanskrit:
      "कर्षयन्तः शरीरस्थं भूतग्राममचेतसः |\nमां चैवान्तःशरीरस्थं तान्विद्ध्यासुरनिश्चयान् ||१७-६||",
    english:
      "17.6 Senseless, torturing all the elements in the body and Me also, Who dwell in the body,  know thou these to be of demonical resolves.",
    hindi:
      "।।17.6।। और शरीरस्थ भूतसमुदाय को तथा मुझ अन्तर्यामी को भी कृश करने वाले अर्थात् कष्ट पहुँचाने वाले जो अविवेकी लोग हैं, उन्हें तुम आसुरी निश्चय वाले जानो।।",
    commentary: "A simple summary of verse 17.6",
  },
  {
    chapter: 17,
    verse: 7,
    sanskrit:
      "आहारस्त्वपि सर्वस्य त्रिविधो भवति प्रियः |\nयज्ञस्तपस्तथा दानं तेषां भेदमिमं शृणु ||१७-७||",
    english:
      "17.7 The food also which is dear to each is threefold, as also sacrifice, austerity and almsgiving. Hear thou the distinction of these.",
    hindi:
      "।।17.7।। (अपनीअपनी प्रकृति के अनुसार) सब का प्रिय भोजन भी तीन प्रकार का होता है? उसी प्रकार यज्ञ? तप और दान भी तीन प्रकार के होते हैं? उनके भेद को तुम मुझसे सुनो।।",
    commentary: "A simple summary of verse 17.7",
  },
  {
    chapter: 17,
    verse: 8,
    sanskrit:
      "आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः |\nरस्याः स्निग्धाः स्थिरा हृद्या आहाराः सात्त्विकप्रियाः ||१७-८||",
    english:
      "17.8 The foods which increase life, purity, strength, health, joy and cheerfulness (good appetite), which are savoury and oleaginous, substantial and agreeable, are dear to the Sattvic (pure) people.",
    hindi:
      "।।17.8।। आयु, सत्त्व (शुद्धि), बल, आरोग्य, सुख और प्रीति को प्रवृद्ध करने वाले एवं रसयुक्त, स्निग्ध ( घी आदि की चिकनाई से युक्त) स्थिर तथा मन को प्रसन्न करने वाले आहार अर्थात् भोज्य पदार्थ सात्त्विक पुरुषों को प्रिय होते हैं।।",
    commentary: "A simple summary of verse 17.8",
  },
  {
    chapter: 17,
    verse: 9,
    sanskrit:
      "कट्वम्ललवणात्युष्णतीक्ष्णरूक्षविदाहिनः |\nआहारा राजसस्येष्टा दुःखशोकामयप्रदाः ||१७-९||",
    english:
      "17.9 The foods that are bitter, sour, saline, excessively hot, pungent, dry and burning, are liked by the Rajasic and are productive of pain, grief and disease.",
    hindi:
      "।।17.9।। कड़वे, खट्टे, लवणयुक्त, अति उष्ण, तीक्ष्ण (तीखे, मिर्च युक्त), रूखे. दाहकारक, दु:ख, शोक और रोग उत्पन्न कारक भोज्य पदार्थ राजस पुरुष को प्रिय होते हैं।।",
    commentary: "A simple summary of verse 17.9",
  },
  {
    chapter: 17,
    verse: 10,
    sanskrit:
      "यातयामं गतरसं पूति पर्युषितं च यत् |\nउच्छिष्टमपि चामेध्यं भोजनं तामसप्रियम् ||१७-१०||",
    english:
      "17.10 That which is state, tasteless, putrid, rotten, refuse and impure, is the food liked by the Tamasic.",
    hindi:
      "।।17.10।। अर्धपक्व, रसरहित, दुर्गन्धयुक्त, बासी, उच्छिष्ट तथा अपवित्र (अमेध्य) अन्न तामस जनों को प्रिय होता है।।",
    commentary: "A simple summary of verse 17.10",
  },
  {
    chapter: 17,
    verse: 11,
    sanskrit:
      "अफलाङ्क्षिभिर्यज्ञो विधिदृष्टो य इज्यते |\nयष्टव्यमेवेति मनः समाधाय स सात्त्विकः ||१७-११||",
    english:
      "17.11 That sacrifice which is offered by men without desire for reward as enjoined by the ordinance (scripture), with a firm faith that to do so is a duty, is Sattvic or pure.",
    hindi:
      '।।17.11।। जो यज्ञ शास्त्रविधि से नियन्त्रित किया हुआ तथा जिसे "यह मेरा कर्तव्य है" ऐसा मन का समाधान (निश्चय) कर फल की आकांक्षा नहीं रखने वाले लोगों के द्वारा किया जाता है, वह यज्ञ सात्त्विक है।।',
    commentary: "A simple summary of verse 17.11",
  },
  {
    chapter: 17,
    verse: 12,
    sanskrit:
      "अभिसन्धाय तु फलं दम्भार्थमपि चैव यत् |\nइज्यते भरतश्रेष्ठ तं यज्ञं विद्धि राजसम् ||१७-१२||",
    english:
      "17.12 The sacrifice which is offered, O Arjuna, seeking a reward and for ostentation, know thou that to be a Rajasic Yajna.",
    hindi:
      "।।17.12।। हे भरतश्रेष्ठ अर्जुन ! जो यज्ञ दम्भ के लिए तथा फल की आकांक्षा रख कर किया जाता है, उस यज्ञ को तुम राजस समझो।।",
    commentary: "A simple summary of verse 17.12",
  },
  {
    chapter: 17,
    verse: 13,
    sanskrit:
      "विधिहीनमसृष्टान्नं मन्त्रहीनमदक्षिणम् |\nश्रद्धाविरहितं यज्ञं तामसं परिचक्षते ||१७-१३||",
    english:
      "17.13 They declare that sacrifice to be Tamasic which is contrary to the ordinances of the scriptures, in which no food is distributed, which is devoid of Mantras, gifts and faith.",
    hindi:
      "।।17.13।। शास्त्रविधि से रहित, अन्नदान से रहित, बिना मन्त्रों, बिना दक्षिणा और बिना श्रद्धा के किये हुए यज्ञ को तामस यज्ञ कहते हैं।।",
    commentary: "A simple summary of verse 17.13",
  },
  {
    chapter: 17,
    verse: 14,
    sanskrit:
      "देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम् |\nब्रह्मचर्यमहिंसा च शारीरं तप उच्यते ||१७-१४||",
    english:
      "17.14 Worship of the gods, the twice-born, the teachers and the wise, purity, straightforwardness, celibacy and non-injury are called the austerities of the body.",
    hindi:
      "।।17.14।। देव, द्विज (ब्राह्मण), गुरु और ज्ञानी जनों का पूजन, शौच, आर्जव (सरलता), ब्रह्मचर्य और अहिंसा, यह शरीर संबंधी तप कहा जाता है।।",
    commentary: "A simple summary of verse 17.14",
  },
  {
    chapter: 17,
    verse: 15,
    sanskrit:
      "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत् |\nस्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते ||१७-१५||",
    english:
      "17.15 Speech which causes no excitement, truthful, pleasant and beneficial, the practice of the study of the Vedas, are called austerity of speech.",
    hindi:
      "।।17.15।। जो वाक्य (भाषण) उद्वेग उत्पन्न करने वाला नहीं है, जो प्रिय, हितकारक और सत्य है तथा वेदों का स्वाध्याय अभ्यास वाङ्मय (वाणी का) तप कहलाता है।।",
    commentary: "A simple summary of verse 17.15",
  },
  {
    chapter: 17,
    verse: 16,
    sanskrit:
      "मनः प्रसादः सौम्यत्वं मौनमात्मविनिग्रहः |\nभावसंशुद्धिरित्येतत्तपो मानसमुच्यते ||१७-१६||",
    english:
      "17.16 Serenity of mind, good-heartedness, self-control, purity of nature  this is called mental austerity.",
    hindi:
      "।।17.16।। मन की प्रसन्नता, सौम्यभाव, मौन आत्मसंयम और अन्त:करण की शुद्धि यह सब मानस तप कहलाता है।।",
    commentary: "A simple summary of verse 17.16",
  },
  {
    chapter: 17,
    verse: 17,
    sanskrit:
      "श्रद्धया परया तप्तं तपस्तत्त्रिविधं नरैः |\nअफलाकाङ्क्षिभिर्युक्तैः सात्त्विकं परिचक्षते ||१७-१७||",
    english:
      "17.17 This threefold austerity, practised by steadfast men, with the utmost faith, desiring no reward, they call Sattvic.",
    hindi:
      "।।17.17।। फल की आकांक्षा न रखने वाले युक्त पुरुषों के द्वारा परम श्रद्धा से किये गये उस पूर्वोक्त त्रिविध तप को सात्त्विक कहते हैं।।",
    commentary: "A simple summary of verse 17.17",
  },
  {
    chapter: 17,
    verse: 18,
    sanskrit:
      "सत्कारमानपूजार्थं तपो दम्भेन चैव यत् |\nक्रियते तदिह प्रोक्तं राजसं चलमध्रुवम् ||१७-१८||",
    english:
      "17.18 The austerity which is practised with the object of gaining good reception, honour and worship, and with hypocrisy, is here said to be Rajasic, unstable and transitory.",
    hindi:
      "।।17.18।। जो तप सत्कार, मान और पूजा के लिए अथवा केवल दम्भ (पाखण्ड) से ही किया जाता है, वह अनिश्चित और क्षणिक तप यहाँ राजस कहा गया है।।",
    commentary: "A simple summary of verse 17.18",
  },
  {
    chapter: 17,
    verse: 19,
    sanskrit:
      "मूढग्राहेणात्मनो यत्पीडया क्रियते तपः |\nपरस्योत्सादनार्थं वा तत्तामसमुदाहृतम् ||१७-१९||",
    english:
      "17.19 That austerity which is practised out of a foolish notion, with self-torture, or for the purpose of destroying another, is declared to be Tamasic.",
    hindi:
      "।।17.19।। जो तप मूढ़तापूर्वक स्वयं को पीड़ित करते हुए अथवा अन्य लोगों के नाश के लिए किया जाता है, वह तप तामस कहा गया है।।",
    commentary: "A simple summary of verse 17.19",
  },
  {
    chapter: 17,
    verse: 20,
    sanskrit:
      "दातव्यमिति यद्दानं दीयतेऽनुपकारिणे |\nदेशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम् ||१७-२०||",
    english:
      "17.20 That gift which is given to one who does nothing in return, knowing it to be a duty to give in a fit place and time to a worthy person, that gift is held to be Sattvic.",
    hindi:
      '।।17.20।। "दान देना ही कर्तव्य है" - इस भाव से जो दान योग्य देश, काल को देखकर ऐसे (योग्य) पात्र (व्यक्ति) को दिया जाता है, जिससे प्रत्युपकार की अपेक्षा नहीं होती है, वह दान सात्त्विक माना गया है।।',
    commentary: "A simple summary of verse 17.20",
  },
  {
    chapter: 17,
    verse: 21,
    sanskrit:
      "यत्तु प्रत्युपकारार्थं फलमुद्दिश्य वा पुनः |\nदीयते च परिक्लिष्टं तद्दानं राजसं स्मृतम् ||१७-२१||",
    english:
      "17.21 And, that gift which is given with a view to receive something in return, or looking for a reward, or reluctantly, is held to be Rajasic.",
    hindi:
      "।।17.21।। और जो दान क्लेशपूर्वक तथा प्रत्युपकार के उद्देश्य से अथवा फल की कामना रखकर दिया जाता हैं, वह दान राजस माना गया है।।",
    commentary: "A simple summary of verse 17.21",
  },
  {
    chapter: 17,
    verse: 22,
    sanskrit:
      "अदेशकाले यद्दानमपात्रेभ्यश्च दीयते |\nअसत्कृतमवज्ञातं तत्तामसमुदाहृतम् ||१७-२२||",
    english:
      "17.22 The gift that is given at a wrong place and time, to unworthy persons, without respect or with insult is declared to be Tamasic.",
    hindi:
      "।।17.22।। जो दान बिना सत्कार किये, अथवा तिरस्कारपूर्वक, अयोग्य देशकाल में, कुपात्रों के लिए दिया जाता है, वह दान तामस माना गया है।।",
    commentary: "A simple summary of verse 17.22",
  },
  {
    chapter: 17,
    verse: 23,
    sanskrit:
      "ॐतत्सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः |\nब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिताः पुरा ||१७-२३||",
    english:
      '17.23 "Om Tat Sat": This has been declared to be the triple designation of Brahman. By that were created formerly, the Brahmanas, the Vedas and the sacrifices.',
    hindi:
      "।।17.23।। 'ऊँ, तत् सत्' ऐसा यह ब्रह्म का त्रिविध निर्देश (नाम) कहा गया है; उसी से आदिकाल में (पुरा) ब्राहम्ण, वेद और यज्ञ निर्मित हुए हैं।।",
    commentary: "A simple summary of verse 17.23",
  },
  {
    chapter: 17,
    verse: 24,
    sanskrit:
      "तस्मादोमित्युदाहृत्य यज्ञदानतपःक्रियाः |\nप्रवर्तन्ते विधानोक्ताः सततं ब्रह्मवादिनाम् ||१७-२४||",
    english:
      '17.24 Therefore, with the utterance of "Om" are the acts of sacrifice, gift and austerity as enjoined in the scriptures, always begun by the students of Brahman.',
    hindi:
      "।।17.24।। इसलिए, ब्रह्मवादियों की शास्त्र प्रतिपादित यज्ञ, दान और तप की क्रियायें सदैव ओंकार के उच्चारण के साथ प्रारम्भ होती हैं।।",
    commentary: "A simple summary of verse 17.24",
  },
  {
    chapter: 17,
    verse: 25,
    sanskrit:
      "तदित्यनभिसन्धाय फलं यज्ञतपःक्रियाः |\nदानक्रियाश्च विविधाः क्रियन्ते मोक्षकाङ्क्षिभिः ||१७-२५||",
    english:
      "17.25 Uttering ï1Tatï1, without aiming at the fruits, are the acts of sacrifice and austerity and the various acts of gifts performed by the seekers of liberation.",
    hindi:
      "।।17.25।। 'तत्' शब्द का उच्चारण कर, फल की इच्छा नहीं रखते हुए, मुमुक्षुजन यज्ञ, तप, दान आदि विविध कर्म करते हैं।।",
    commentary: "A simple summary of verse 17.25",
  },
  {
    chapter: 17,
    verse: 26,
    sanskrit:
      "सद्भावे साधुभावे च सदित्येतत्प्रयुज्यते |\nप्रशस्ते कर्मणि तथा सच्छब्दः पार्थ युज्यते ||१७-२६||",
    english:
      "17.26 The word ï1Satï1 is used in the sense of reality and of goodness; and so also, O Arjuna, the word ï1Satï1 is used in the sense of an auspicious act.",
    hindi:
      "।।17.26।। हे पार्थ ! सत्य भाव व साधुभाव में 'सत्' शब्द का प्रयोग किया जाता है, और प्रशस्त (श्रेष्ठ, शुभ) कर्म में 'सत्' शब्द प्रयुक्त होता है।।",
    commentary: "A simple summary of verse 17.26",
  },
  {
    chapter: 17,
    verse: 27,
    sanskrit:
      "यज्ञे तपसि दाने च स्थितिः सदिति चोच्यते |\nकर्म चैव तदर्थीयं सदित्येवाभिधीयते ||१७-२७||",
    english:
      "17.27 Steadfastness in sacrifice, austerity and gift, is also called 'Sat' and also action in connection with these (or for the sake of the Supreme) is called 'Sat'.",
    hindi:
      "।।17.27।। यज्ञ, तप और दान में दृढ़ स्थिति भी सत् कही जाती है, और उस (परमात्मा) के लिए किया गया कर्म भी सत् ही कहलाता है।।",
    commentary: "A simple summary of verse 17.27",
  },
  {
    chapter: 17,
    verse: 28,
    sanskrit:
      "अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत् |\nअसदित्युच्यते पार्थ न च तत्प्रेत्य नो इह ||१७-२८||",
    english:
      "17.28 Whatever is sacrificed, given or performed, and whatever austerity is practised without faith, it is called 'Asat', O Arjuna; it is naught here or hereafter (after death).",
    hindi:
      "।।17.28।। हे पार्थ ! जो यज्ञ, दान, तप और कर्म अश्रद्धापूर्वक किया जाता है, वह 'असत्' कहा जाता है; वह न इस लोक में (इह) और न मरण के पश्चात् (उस लोक में) लाभदायक होता है।।",
    commentary: "A simple summary of verse 17.28",
  },
  {
    chapter: 18,
    verse: 1,
    sanskrit:
      "अर्जुन उवाच |\nसंन्यासस्य महाबाहो तत्त्वमिच्छामि वेदितुम् |\nत्यागस्य च हृषीकेश पृथक्केशिनिषूदन ||१८-१||",
    english:
      "18.1 Arjuna said  I desire to know severally, O mighty-armed, the essence or truth of renunciation, O Hrishikesa, as also of abandonment, O slayer of Kesi.",
    hindi:
      "।।18.1।। अर्जुन ने कहा -- हे महाबाहो ! हे हृषीकेश ! हे केशनिषूदन ! मैं संन्यास और त्याग के तत्त्व को पृथक्-पृथक् जानना चाहता हूँ।।",
    commentary: "A simple summary of verse 18.1",
  },
  {
    chapter: 18,
    verse: 2,
    sanskrit:
      "श्रीभगवानुवाच |\nकाम्यानां कर्मणां न्यासं संन्यासं कवयो विदुः |\nसर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणाः ||१८-२||",
    english:
      "18.2 The Blessed Lord said  The sages understand Sannyasa to be the renunciation of action with desire; the wise declare the abandonment of the fruits of all actions as Tyaga.",
    hindi:
      '।।18.2।। श्रीभगवान् ने कहा -- (कुछ) कवि (पण्डित) जन काम्य कर्मों के त्याग को "संन्यास" समझते हैं और विचारशील जन समस्त कर्मों के फलों के त्याग को "त्याग" कहते हैं।।',
    commentary: "A simple summary of verse 18.2",
  },
  {
    chapter: 18,
    verse: 3,
    sanskrit:
      "त्याज्यं दोषवदित्येके कर्म प्राहुर्मनीषिणः |\nयज्ञदानतपःकर्म न त्याज्यमिति चापरे ||१८-३||",
    english:
      "18.3 Some philosophers declare that actions should be abandoned as an evil; while others (declare) that acts of sacrifice, gift and austerity should not be relinished.",
    hindi:
      "।।18.3।। कुछ मनीषी जन कहते हैं कि समस्त कर्म दोषयुक्त होने के कारण त्याज्य हैं; और अन्य जन कहते हैं कि यज्ञ, दान और तपरूप कर्म त्याज्य नहीं हैं।।",
    commentary: "A simple summary of verse 18.3",
  },
  {
    chapter: 18,
    verse: 4,
    sanskrit:
      "निश्चयं शृणु मे तत्र त्यागे भरतसत्तम |\nत्यागो हि पुरुषव्याघ्र त्रिविधः सम्प्रकीर्तितः ||१८-४||",
    english:
      "18.4 Hear from Me the conclusion or the final truth about this abandonment, O best of the Bharatas; abandonment, verily, O best of men, has been declared to be of three kinds.",
    hindi:
      "।।18.4।। हे भरतसत्तम ! उस त्याग के विषय में तुम मेरे निर्णय को सुनो। हे पुरुष श्रेष्ठ ! वह त्याग तीन प्रकार का कहा गया है।।",
    commentary: "A simple summary of verse 18.4",
  },
  {
    chapter: 18,
    verse: 5,
    sanskrit:
      "यज्ञदानतपःकर्म न त्याज्यं कार्यमेव तत् |\nयज्ञो दानं तपश्चैव पावनानि मनीषिणाम् ||१८-५||",
    english:
      "18.5 Acts of sacrifice, gift and austerity should not be abandoned, but should be performed; sacrifice, gift and also austerity are the purifiers of the wise.",
    hindi:
      "।।18.5।। यज्ञ, दान और तपरूप कर्म त्याज्य नहीं है, किन्तु वह नि:सन्देह कर्तव्य है; यज्ञ, दान और तप ये मनीषियों (साधकों) को पवित्र करने वाले हैं।।",
    commentary: "A simple summary of verse 18.5",
  },
  {
    chapter: 18,
    verse: 6,
    sanskrit:
      "एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च |\nकर्तव्यानीति मे पार्थ निश्चितं मतमुत्तमम् ||१८-६||",
    english:
      "18.6 But even these actions should be performed leaving aside attachment and the desire for rewards, O Arjuna; this is My certain and best conviction.",
    hindi:
      "।।18.6।। हे पार्थ ! इन कर्मों को भी, फल और आसक्ति को त्यागकर करना चाहिए, यह मेरा निश्चय किया हुआ उत्तम मत है।।",
    commentary: "A simple summary of verse 18.6",
  },
  {
    chapter: 18,
    verse: 7,
    sanskrit:
      "नियतस्य तु संन्यासः कर्मणो नोपपद्यते |\nमोहात्तस्य परित्यागस्तामसः परिकीर्तितः ||१८-७||",
    english:
      "18.7 Verily the renunciation of obligatory action is not proper; the abandonment of the same from delusion is declared to be Tamasic.",
    hindi:
      '।।18.7।। नियत कर्म का त्याग उचित नहीं है; मोहवश उसका त्याग करना "तामस त्याग" कहा गया है।।',
    commentary: "A simple summary of verse 18.7",
  },
  {
    chapter: 18,
    verse: 8,
    sanskrit:
      "दुःखमित्येव यत्कर्म कायक्लेशभयात्त्यजेत् |\nस कृत्वा राजसं त्यागं नैव त्यागफलं लभेत् ||१८-८||",
    english:
      "18.8 He who abandons action on account of the fear of bodily trouble (because it is painful), does not obtain the merit of renunciation by doing such Rajasic renunciation.",
    hindi:
      "।।18.8।। जो मनुष्य, कर्म को दु:ख समझकर शारीरिक कष्ट के भय से त्याग देता है, वह पुरुष उस राजसिक त्याग को करके कदापि त्याग के फल को प्राप्त नहीं होता है।।",
    commentary: "A simple summary of verse 18.8",
  },
  {
    chapter: 18,
    verse: 9,
    sanskrit:
      "कार्यमित्येव यत्कर्म नियतं क्रियतेऽर्जुन |\nसङ्गं त्यक्त्वा फलं चैव स त्यागः सात्त्विको मतः ||१८-९||",
    english:
      "18.9 Whatever obligatory action is done, O Arjuna, merely because it ought to be done, abandoning attachment and also the desire for reward, that renunciation is regarded as Sattvic (pure).",
    hindi:
      '।।18.9।। हे अर्जुन ! "कर्म करना कर्तव्य है" ऐसा समझकर जो नियत कर्म आसक्ति और फल को त्यागकर किया जाता है, वही सात्त्विक त्याग माना गया है।।',
    commentary: "A simple summary of verse 18.9",
  },
  {
    chapter: 18,
    verse: 10,
    sanskrit:
      "न द्वेष्ट्यकुशलं कर्म कुशले नानुषज्जते |\nत्यागी सत्त्वसमाविष्टो मेधावी छिन्नसंशयः ||१८-१०||",
    english:
      "18.10 The man of renunciation, pervaded by purity, intelligent, and with his doubts cut asunder, does not hate a disagreeable work nor is he attached to an agreeable one.",
    hindi:
      "।।18.10।। जो पुरुष अकुशल (अशुभ) कर्म से द्वेष नहीं करता और कुशल (शुभ) कर्म में आसक्त नहीं होता, वह सत्त्वगुण से सम्पन्न पुरुष संशयरहित, मेधावी (ज्ञानी) और त्यागी है।।",
    commentary: "A simple summary of verse 18.10",
  },
  {
    chapter: 18,
    verse: 11,
    sanskrit:
      "न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषतः |\nयस्तु कर्मफलत्यागी स त्यागीत्यभिधीयते ||१८-११||",
    english:
      "18.11 Verily, it is not possible for an embodied being to abandon actions entirely; but he who relinishes the rewards of actions is verily called a man of renunciation.",
    hindi:
      "।।18.11।। क्योंकि देहधारी पुरुष के द्वारा अशेष कर्मों का त्याग संभव नहीं है, इसलिए जो कर्मफल त्यागी है, वही पुरुष त्यागी कहा जाता है।।",
    commentary: "A simple summary of verse 18.11",
  },
  {
    chapter: 18,
    verse: 12,
    sanskrit:
      "अनिष्टमिष्टं मिश्रं च त्रिविधं कर्मणः फलम् |\nभवत्यत्यागिनां प्रेत्य न तु संन्यासिनां क्वचित् ||१८-१२||",
    english:
      "18.12 The threefold fruit of action (evil, good and mixed) accrues after death to the non-abandoners, but never to the abandoners.",
    hindi:
      "।।18.12।। कर्मों के शुभ, अशुभ और मिश्र ये त्रिविध फल केवल अत्यागी जनों को मरण के पश्चात् भी प्राप्त होते हैं; परन्तु संन्यासी पुरुषों को कदापि नहीं।।",
    commentary: "A simple summary of verse 18.12",
  },
  {
    chapter: 18,
    verse: 13,
    sanskrit:
      "पञ्चैतानि महाबाहो कारणानि निबोध मे |\nसाङ्ख्ये कृतान्ते प्रोक्तानि सिद्धये सर्वकर्मणाम् ||१८-१३||",
    english:
      "18.13 Learn from Me, O mighty-armed Arjuna, these five causes as declared in the Sankhya system for the accomplishment of all actions.",
    hindi:
      "।।18.13।। हे महाबाहो ! समस्त कर्मों की सिद्धि के लिए ये पांच कारण सांख्य सिद्धांत में कहे गये हैं, जिनको तुम मुझसे भलीभांति जानो।।",
    commentary: "A simple summary of verse 18.13",
  },
  {
    chapter: 18,
    verse: 14,
    sanskrit:
      "अधिष्ठानं तथा कर्ता करणं च पृथग्विधम् |\nविविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम् ||१८-१४||",
    english:
      "18.14 The seat (body), the doer, the various senses, the different functions of various sorts, and the presiding deity, also, the fifth.",
    hindi:
      "।।18.14।। अधिष्ठान (शरीर), कर्ता ,विविध करण (इन्द्रियादि) ,विविध और पृथक्-पृथक् चेष्टाएं तथा पाँचवा हेतु दैव है।।",
    commentary: "A simple summary of verse 18.14",
  },
  {
    chapter: 18,
    verse: 15,
    sanskrit:
      "शरीरवाङ्मनोभिर्यत्कर्म प्रारभते नरः |\nन्याय्यं वा विपरीतं वा पञ्चैते तस्य हेतवः ||१८-१५||",
    english:
      "18.15 Whatever action a man performs with his body, speech and mind  whether right or the reverse  these five are its causes.",
    hindi:
      "।।18.15।। मनुष्य अपने शरीर, वाणी और मन से जो कोई न्याय्य (उचित) या विपरीत (अनुचित) कर्म करता है, उसके ये पाँच कारण ही हैं।।",
    commentary: "A simple summary of verse 18.15",
  },
  {
    chapter: 18,
    verse: 16,
    sanskrit:
      "तत्रैवं सति कर्तारमात्मानं केवलं तु यः |\nपश्यत्यकृतबुद्धित्वान्न स पश्यति दुर्मतिः ||१८-१६||",
    english:
      "18.16 Now, such being the case, verily he who  owing to untrained understanding  looks upon his Self, which is isolated, as the agent, he of perverted intelligence, sees not.",
    hindi:
      "।।18.16।। अब इस स्थिति में जो पुरुष असंस्कृत बुद्धि होने के कारण, केवल शुद्ध आत्मा को कर्ता समझता हैं, वह दुर्मति पुरुष (यथार्थ) नहीं देखता है।।",
    commentary: "A simple summary of verse 18.16",
  },
  {
    chapter: 18,
    verse: 17,
    sanskrit:
      "यस्य नाहंकृतो भावो बुद्धिर्यस्य न लिप्यते |\nहत्वाऽपि स इमाँल्लोकान्न हन्ति न निबध्यते ||१८-१७||",
    english:
      "18.17 He who is free from the egoistic notion, whose intelligence is not tainted (by good or evil), \nthough he slays these people, he slayeth not, nor is he bound (by the action).",
    hindi:
      "।।18.17।। जिस पुरुष में अहंकार का भाव नहीं है और बुद्धि किसी (गुण दोष) से लिप्त नहीं होती, वह पुरुष इन सब लोकों को मारकर भी वास्तव में न मरता है और न (पाप से) बँधता है।।",
    commentary: "A simple summary of verse 18.17",
  },
  {
    chapter: 18,
    verse: 18,
    sanskrit:
      "ज्ञानं ज्ञेयं परिज्ञाता त्रिविधा कर्मचोदना |\nकरणं कर्म कर्तेति त्रिविधः कर्मसंग्रहः ||१८-१८||",
    english:
      "18.18 Knowledge, the knowable and the knower form the threefold impulse to action; the organ, the action and the agent form the threefold basis of action.",
    hindi:
      "।।18.18।। ज्ञान, ज्ञेय और परिज्ञाता ये त्रिविध कर्म प्रेरक हैं, और, करण, कर्म. कर्ता ये त्रिविध कर्म संग्रह हैं।।",
    commentary: "A simple summary of verse 18.18",
  },
  {
    chapter: 18,
    verse: 19,
    sanskrit:
      "ज्ञानं कर्म च कर्ताच त्रिधैव गुणभेदतः |\nप्रोच्यते गुणसङ्ख्याने यथावच्छृणु तान्यपि ||१८-१९||",
    english:
      "18.19 Knowledge, action and actor are declared in the science of the Gunas (Sankhya philosophy) to be of three kinds only, according to the distinction of the Gunas. Of these also, hear duly.",
    hindi:
      "।।18.19।। ज्ञान, कर्म और कर्ता भी गुणों के भेद से सांख्यशास्त्र (गुणसंख्याने) में त्रिविध ही कहे गये हैं; उनको भी तुम मुझ से यथावत् श्रवण करो।।",
    commentary: "A simple summary of verse 18.19",
  },
  {
    chapter: 18,
    verse: 20,
    sanskrit:
      "सर्वभूतेषु येनैकं भावमव्ययमीक्षते |\nअविभक्तं विभक्तेषु तज्ज्ञानं विद्धि सात्त्विकम् ||१८-२०||",
    english:
      "18.20 That by which one sees the one indestructible Reality in all beings, not separate in all the separate beings  know thou that knowledge to be Sattvic.",
    hindi:
      "।।18.20।। जिस ज्ञान से मनुष्य, विभक्त रूप में स्थित समस्त भूतों में एक अविभक्त और अविनाशी (अव्यय) स्वरूप को देखता है, उस ज्ञान को तुम सात्त्विक जानो।।",
    commentary: "A simple summary of verse 18.20",
  },
  {
    chapter: 18,
    verse: 21,
    sanskrit:
      "पृथक्त्वेन तु यज्ज्ञानं नानाभावान्पृथग्विधान् |\nवेत्ति सर्वेषु भूतेषु तज्ज्ञानं विद्धि राजसम् ||१८-२१||",
    english:
      "18.21 But that knowledge which sees in all beings various entities of distinct kinds as different from one another  know thou that knowledge to be Rajasic.",
    hindi:
      "।।18.21।। जिस ज्ञान के द्वारा मनुष्य समस्त भूतों में नाना भावों को पृथक्-पृथक् जानता है, उस ज्ञान को तुम राजस जानो।।",
    commentary: "A simple summary of verse 18.21",
  },
  {
    chapter: 18,
    verse: 22,
    sanskrit:
      "यत्तु कृत्स्नवदेकस्मिन्कार्ये सक्तमहैतुकम् |\nअतत्त्वार्थवदल्पं च तत्तामसमुदाहृतम् ||१८-२२||",
    english:
      "18.22 But that which clings to one single effect as if it were the whole, without reason, without foundation in Truth, and trivial  that is declared to be Tamasic.",
    hindi:
      "।।18.22।। और जिस ज्ञान के द्वारा मनुष्य एक कार्य (शरीर) में ही आसक्त हो जाता है, मानो वह (कार्य ही) पूर्ण वस्तु हो तथा जो (ज्ञान) हेतुरहित (अयुक्तिक), तत्त्वार्थ से रहित तथा संकुचित (अल्प) है, वह (ज्ञान) तामस है।।",
    commentary: "A simple summary of verse 18.22",
  },
  {
    chapter: 18,
    verse: 23,
    sanskrit:
      "नियतं सङ्गरहितमरागद्वेषतः कृतम् |\nअफलप्रेप्सुना कर्म यत्तत्सात्त्विकमुच्यते ||१८-२३||",
    english:
      "18.23 An action which is ordained, which is free from attachment, and which is done without love or hatred by one who is not desirous of any reward  that action is declared to be Sattvic.",
    hindi:
      "।।18.23।। जो कर्म (शास्त्रविधि से) नियत और संगरहित है, तथा फल को न चाहने वाले पुरुष के द्वारा बिना किसी राग द्वेष के किया गया है, वह (कर्म) सात्त्विक कहा जाता है।।",
    commentary: "A simple summary of verse 18.23",
  },
  {
    chapter: 18,
    verse: 24,
    sanskrit:
      "यत्तु कामेप्सुना कर्म साहंकारेण वा पुनः |\nक्रियते बहुलायासं तद्राजसमुदाहृतम् ||१८-२४||",
    english:
      "18.24 But that action which is done by one longing for the fulfilment of desires or gain with egoism or with much effort  that is declared to be Rajasic (passionate).",
    hindi:
      "।।18.24।। और जो कर्म बहुत परिश्रम से युक्त है तथा फल की कामना वाले, अहंकारयुक्त पुरुष के द्वारा किया जाता है, वह कर्म राजस कहा गया है।।",
    commentary: "A simple summary of verse 18.24",
  },
  {
    chapter: 18,
    verse: 25,
    sanskrit:
      "अनुबन्धं क्षयं हिंसामनपेक्ष्य च पौरुषम् |\nमोहादारभ्यते कर्म यत्तत्तामसमुच्यते ||१८-२५||",
    english:
      "18.25 That action which is undertaken from delusion, without a regard for the conseences, loss, injury and (one's own) ability  that is declared to be Tamasic (dark).",
    hindi:
      "।।18.25।। जो कर्म परिणाम, हानि, हिंसा और सार्मथ्य (पौरुषम्) का विचार न करके केवल मोहवश आरम्भ किया जाता है, वह कर्म तामस कहलाता है।।",
    commentary: "A simple summary of verse 18.25",
  },
  {
    chapter: 18,
    verse: 26,
    sanskrit:
      "मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वितः |\nसिद्ध्यसिद्ध्योर्निर्विकारः कर्ता सात्त्विक उच्यते ||१८-२६||",
    english:
      "18.26 An agent who is free from attachment, non-egoistic, endowed with firmness and enthusiasm, and unaffected by success or failure, is called Sattvic (pure).",
    hindi:
      "।।18.26।। जो कर्ता संगरहित, अहंमन्यता से रहित, धैर्य और उत्साह से युक्त एवं कार्य की सिद्धि (सफलता) और असिद्धि (विफलता) में निर्विकार रहता है, वह कर्ता सात्त्विक कहा जाता है।।",
    commentary: "A simple summary of verse 18.26",
  },
  {
    chapter: 18,
    verse: 27,
    sanskrit:
      "रागी कर्मफलप्रेप्सुर्लुब्धो हिंसात्मकोऽशुचिः |\nहर्षशोकान्वितः कर्ता राजसः परिकीर्तितः ||१८-२७||",
    english:
      "18.27 Passionate, desiring to obtain the reward of actions, greedy, cruel, impure, moved by joy and sorrow, such an agent is said to be Rajasic (passionate).",
    hindi:
      "।।18.27।। रागी, कर्मफल का इच्छुक, लोभी, हिंसक स्वभाव वाला, अशुद्ध और हर्षशोक से युक्त कर्ता राजस कहलाता है।।",
    commentary: "A simple summary of verse 18.27",
  },
  {
    chapter: 18,
    verse: 28,
    sanskrit:
      "अयुक्तः प्राकृतः स्तब्धः शठो नैष्कृतिकोऽलसः |\nविषादी दीर्घसूत्री च कर्ता तामस उच्यते ||१८-२८||",
    english:
      "18.28 Unsteady, vulgar, unbending, cheating, malicious, lazy, desponding and procrastinating  such an agent is called Tamasic.",
    hindi:
      "।।18.28।। अयुक्त, प्राकृत, स्तब्ध, शठ, नैष्कृतिक, आलसी, विषादी और दीर्घसूत्री कर्ता तामस कहा जाता है।।",
    commentary: "A simple summary of verse 18.28",
  },
  {
    chapter: 18,
    verse: 29,
    sanskrit:
      "बुद्धेर्भेदं धृतेश्चैव गुणतस्त्रिविधं शृणु |\nप्रोच्यमानमशेषेण पृथक्त्वेन धनञ्जय ||१८-२९||",
    english:
      "18.29 Hear thou the threefold division of intellect and firmness according to the Gunas, as I declare them fully and distinctly, O Arjuna.",
    hindi:
      "।।18.29।। हे धनंजय ! मेरे द्वारा अशेषत: और पृथकत: कहे जाने वाले, गुणों के कारण उत्पन्न हुए बुद्धि और धृति के त्रिविध भेद को सुनो।।",
    commentary: "A simple summary of verse 18.29",
  },
  {
    chapter: 18,
    verse: 30,
    sanskrit:
      "प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये |\nबन्धं मोक्षं च या वेत्ति बुद्धिः सा पार्थ सात्त्विकी ||१८-३०||",
    english:
      "18.30 The intellect which knows the path of work and renunciation, what ought to be done and what ought not to be done, fear and fearlessness, bondage and liberation  that intellect is Sattvic (pure), O Arjuna.",
    hindi:
      "।।18.30।। हे पार्थ ! जो बुद्धि प्रवृत्ति और निवृत्ति, कार्य और अकार्य, भय और अभय तथा बन्ध और मोक्ष को तत्त्वत जानती है, वह बुद्धि सात्विकी है।।",
    commentary: "A simple summary of verse 18.30",
  },
  {
    chapter: 18,
    verse: 31,
    sanskrit:
      "यया धर्ममधर्मं च कार्यं चाकार्यमेव च |\nअयथावत्प्रजानाति बुद्धिः सा पार्थ राजसी ||१८-३१||",
    english:
      "18.31 That, by which one wrongly understands Dharma and Adharma and also what ought to be done and what ought not to be done  that intellect, O Arjuna, is Rajasic (passionate).",
    hindi:
      "।।18.31।। हे पार्थ ! जिस बुद्धि के द्वारा मनुष्य धर्म और अधर्म को तथा कर्तव्य और अकर्तव्य को यथावत् नहीं जानता है, वह बुद्धि राजसी है।।",
    commentary: "A simple summary of verse 18.31",
  },
  {
    chapter: 18,
    verse: 32,
    sanskrit:
      "अधर्मं धर्ममिति या मन्यते तमसावृता |\nसर्वार्थान्विपरीतांश्च बुद्धिः सा पार्थ तामसी ||१८-३२||",
    english:
      "18.32 That, which, enveloped in darkness, sees Adharma as Dharma and all things perverted  that intellect, O Arjuna, is Tamasic (dark).",
    hindi:
      "।।18.32।। हे पार्थ ! तमस् (अज्ञान अन्ध:कार) से आवृत जो बुद्धि अधर्म को ही धर्म मानती है और सभी पदार्थों को विपरीत रूप से जानती है, वह बुद्धि तामसी है।।",
    commentary: "A simple summary of verse 18.32",
  },
  {
    chapter: 18,
    verse: 33,
    sanskrit:
      "धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः |\nयोगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विकी ||१८-३३||",
    english:
      "18.33 The unwavering firmness by which, through Yoga, the functions of the mind, the life-force and the senses are restrained  that firmness, O Arjuna, is Sattvic (pure).",
    hindi: "।।18.33।। सात्त्विकी है।।",
    commentary: "A simple summary of verse 18.33",
  },
  {
    chapter: 18,
    verse: 34,
    sanskrit:
      "यया तु धर्मकामार्थान्धृत्या धारयतेऽर्जुन |\nप्रसङ्गेन फलाकाङ्क्षी धृतिः सा पार्थ राजसी ||१८-३४||",
    english:
      "18.34 But that, O Arjuna, by which, on account of attachment and desire for reward, one holds fast to Dharma (duty), enjoyment of pleasures and earning of wealth  that firmness, O Arjuna, is Rajasic (passionate).",
    hindi:
      "।।18.34।। हे पृथापुत्र अर्जुन ! कर्मफल का इच्छुक पुरुष अति आसक्ति (प्रसंग) से जिस धृति के द्वारा धर्म, अर्थ और काम (इन तीन पुरुषार्थों) को धारण करता है, वह धृति राजसी है।।",
    commentary: "A simple summary of verse 18.34",
  },
  {
    chapter: 18,
    verse: 35,
    sanskrit:
      "यया स्वप्नं भयं शोकं विषादं मदमेव च |\nन विमुञ्चति दुर्मेधा धृतिः सा पार्थ तामसी ||१८-३५||",
    english:
      "18.35 That, by which a stupid man does not abandon sleep, fear, grief, despair and also conceit  that firmness, O Arjuna, is Tamasic.",
    hindi:
      "।।18.35।। हो पार्थ ! दुर्बुद्धि पुरुष जिस धारणा के द्वारा, स्वप्न, भय, शोक, विषाद और मद को नहीं त्यागता है, वह धृति तामसी है।।",
    commentary: "A simple summary of verse 18.35",
  },
  {
    chapter: 18,
    verse: 36,
    sanskrit:
      "सुखं त्विदानीं त्रिविधं शृणु मे भरतर्षभ |\nअभ्यासाद्रमते यत्र दुःखान्तं च निगच्छति ||१८-३६||",
    english:
      "18.36 And now hear from Me, O Arjuna, of the threefold pleasure, in which one rejoices by practice and surely comes to the end of pain.",
    hindi:
      "।।18.36।। हे भरतश्रेष्ठ ! अब तुम त्रिविध सुख को मुझसे सुनो, जिसमें (साधक पुरुष) अभ्यास से रमता है और दु:खों के अन्त को प्राप्त होता है (जहाँ उसके दु:खों का अन्त हो जाता है।)।।",
    commentary: "A simple summary of verse 18.36",
  },
  {
    chapter: 18,
    verse: 37,
    sanskrit:
      "यत्तदग्रे विषमिव परिणामेऽमृतोपमम् |\nतत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम् ||१८-३७||",
    english:
      "18.37 That which is like poison at first but in the end like nectar  that happiness is declared to be Sattvic, born of the purity of one's own mind due to Self-realisation.",
    hindi:
      "।।18.37।। जो सुख प्रथम (प्रारम्भ में) विष के समान (भासता) है, परन्तु परिणाम में अमृत के समान है, वह आत्मबुद्धि के प्रसाद से उत्पन्न सुख सात्त्विक कहा गया है।।",
    commentary: "A simple summary of verse 18.37",
  },
  {
    chapter: 18,
    verse: 38,
    sanskrit:
      "विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम् |\nपरिणामे विषमिव तत्सुखं राजसं स्मृतम् ||१८-३८||",
    english:
      "18.38 That happiness which arises from the contact of the sense-organs with the objects, which is at first like nectar, and in the end like poison  that is declared to be Rajasic.",
    hindi:
      "।।18.38।। जो सुख विषयों और इन्द्रियों के संयोग से उत्पन्न होता है, वह प्रथम तो अमृत के समान, परन्तु परिणाम में विष तुल्य होता है, वह सुख राजस कहा गया है।।",
    commentary: "A simple summary of verse 18.38",
  },
  {
    chapter: 18,
    verse: 39,
    sanskrit:
      "यदग्रे चानुबन्धे च सुखं मोहनमात्मनः |\nनिद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम् ||१८-३९||",
    english:
      "18.39 That happiness which at first as well as in the seel deludes the self, and which arises from sleep, indolence and heedlessness  that is declared to be Tamasic.",
    hindi:
      "।।18.39।। जो सुख प्रारम्भ में और परिणाम (अनुबन्ध) में भी आत्मा (मनुष्य) को मोहित करने वाला होता है, वह निद्रा, आलस्य और प्रमाद से उत्पन्न सुख तामस कहा जाता है।।",
    commentary: "A simple summary of verse 18.39",
  },
  {
    chapter: 18,
    verse: 40,
    sanskrit:
      "न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुनः |\nसत्त्वं प्रकृतिजैर्मुक्तं यदेभिः स्यात्त्रिभिर्गुणैः ||१८-४०||",
    english:
      "18.40 There is no being on earth or again in heaven among the gods, that is liberated from the three alities born of Nature.",
    hindi:
      "।।18.40।। पृथ्वी पर अथवा स्वर्ग के देवताओं में ऐसा कोई प्राणी (सत्त्वं अर्थात् विद्यमान वस्तु) नहीं है जो प्रकृति से उत्पन्न इन तीन गुणों से मुक्त (रहित) हो।।",
    commentary: "A simple summary of verse 18.40",
  },
  {
    chapter: 18,
    verse: 41,
    sanskrit:
      "ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप |\nकर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः ||१८-४१||",
    english:
      "18.41 Of Brahmanas, Kshatriyas and Vaisyas, as also of Sudras, O Arjuna, the duties are distributed according to the alities born of their own nature.",
    hindi:
      "।।18.41।। हे परन्तप!  ब्राह्मणों, क्षत्रियों, वैश्यों और शूद्रों के कर्म, स्वभाव से उत्पन्न गुणों के अनुसार विभक्त किये गये हैं।।",
    commentary: "A simple summary of verse 18.41",
  },
  {
    chapter: 18,
    verse: 42,
    sanskrit:
      "शमो दमस्तपः शौचं क्षान्तिरार्जवमेव च |\nज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम् ||१८-४२||",
    english:
      "18.42 Serenity, self-restraint, austerity, purity, forgiveness and also uprightness, knowledge, realisation and belief in God are the duties of the Brahmanas, born of (their own) nature.",
    hindi:
      "।।18.42।। शम, दम, तप, शौच, क्षान्ति, आर्जव, ज्ञान, विज्ञान और आस्तिक्य - ये ब्राह्मण के स्वाभाविक कर्म हैं।।",
    commentary: "A simple summary of verse 18.42",
  },
  {
    chapter: 18,
    verse: 43,
    sanskrit:
      "शौर्यं तेजो धृतिर्दाक्ष्यं युद्धे चाप्यपलायनम् |\nदानमीश्वरभावश्च क्षात्रं कर्म स्वभावजम् ||१८-४३||",
    english:
      "18.43 Prowess, splendour, firmness, dexterity and also not fleeing from battle, generosity and lordliness are the duties of the Kshatriyas, born of (their own) nature.",
    hindi:
      "।।18.43।। शौर्य, तेज, धृति, दाक्ष्य (दक्षता), युद्ध से पलायन न करना, दान और ईश्वर भाव (स्वामी भाव) - ये सब क्षत्रिय के स्वाभाविक कर्म हैं।।",
    commentary: "A simple summary of verse 18.43",
  },
  {
    chapter: 18,
    verse: 44,
    sanskrit:
      "कृषिगौरक्ष्यवाणिज्यं वैश्यकर्म स्वभावजम् |\nपरिचर्यात्मकं कर्म शूद्रस्यापि स्वभावजम् ||१८-४४||",
    english:
      "18.44 Agriculture, cattle-rearing and trade are the duties of the Vaisya (merchant), born of (their own) nature; and action consisting of service is the duty of the Sudra (servant-class), born of (their own) nature.",
    hindi:
      "।।18.44।। कृषि, गौपालन तथा वाणिज्य - ये वैश्य के स्वाभाविक कर्म हैं, और शूद्र का स्वाभाविक कर्म है परिचर्या अर्थात् सेवा करना।।",
    commentary: "A simple summary of verse 18.44",
  },
  {
    chapter: 18,
    verse: 45,
    sanskrit:
      "स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः |\nस्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु ||१८-४५||",
    english:
      "5.10 He who does actions, offering them to Brahman, and abandoning attachment, is not tainted by sin, just as a lotus-leaf is not tainted by water.",
    hindi:
      "।।5.10।। जो पुरुष सब कर्म ब्रह्म में अर्पण करके और आसक्ति को त्यागकर करता है,  वह पुरुष कमल के पत्ते के सदृश पाप से लिप्त नहीं होता।।",
    commentary: "A simple summary of verse 18.45",
  },
  {
    chapter: 18,
    verse: 46,
    sanskrit:
      "यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम् |\nस्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः ||१८-४६||",
    english:
      "18.46 He from Whom all the beings have evolved and by Whom all this is pervaded  worshipping Him with his own duty, man attains perfection.",
    hindi:
      "।।18.46।। जिस (परमात्मा) से भूतमात्र की प्रवृत्ति अर्थात् उत्पत्ति हुई है और जिससे यह सम्पूर्ण जगत् व्याप्त है, उस (परमात्मा) की स्वकर्म द्वारा पूजा करके मनुष्य सिद्धि को प्राप्त होता है।।",
    commentary: "A simple summary of verse 18.46",
  },
  {
    chapter: 18,
    verse: 47,
    sanskrit:
      "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् |\nस्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम् ||१८-४७||",
    english:
      "18.47 Better is one's own duty (though) destitute of merits, than the duty of another well performed. He who does the duty ordained by his own nature incurs no sin.",
    hindi:
      "।।18.47।। सम्यक् अनुष्ठित परधर्म की अपेक्षा गुणरहित स्वधर्म श्रेष्ठ है। (क्योंकि) स्वभाव से नियत किये गये कर्म को करते हुए मनुष्य पाप को नहीं प्राप्त करता।।",
    commentary: "A simple summary of verse 18.47",
  },
  {
    chapter: 18,
    verse: 48,
    sanskrit:
      "सहजं कर्म कौन्तेय सदोषमपि न त्यजेत् |\nसर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः ||१८-४८||",
    english:
      "18.48 One should not abandon, O Arjuna, the duty to which one is born, though faulty; for, all undertakings are enveloped by evil, as fire by smoke.",
    hindi:
      "।।18.48।। हे कौन्तेय ! दोषयुक्त होने पर भी सहज कर्म को नहीं त्यागना चाहिए; क्योंकि सभी कर्म दोष से आवृत होते है, जैसे धुयें से अग्नि।।",
    commentary: "A simple summary of verse 18.48",
  },
  {
    chapter: 18,
    verse: 49,
    sanskrit:
      "असक्तबुद्धिः सर्वत्र जितात्मा विगतस्पृहः |\nनैष्कर्म्यसिद्धिं परमां संन्यासेनाधिगच्छति ||१८-४९||",
    english:
      "18.49 He whose intellect is unattached everywhere, who has subdued his self, from whom desire has fled,  he by renunciation, attains the supreme state of freedom from action.",
    hindi:
      "।।18.49।। सर्वत्र आसक्ति रहित बुद्धि वाला वह पुरुष जो स्पृहारहित तथा जितात्मा है, संन्यास के द्वारा परम नैर्ष्कम्य सिद्धि को प्राप्त होता है।।",
    commentary: "A simple summary of verse 18.49",
  },
  {
    chapter: 18,
    verse: 50,
    sanskrit:
      "सिद्धिं प्राप्तो यथा ब्रह्म तथाप्नोति निबोध मे |\nसमासेनैव कौन्तेय निष्ठा ज्ञानस्य या परा ||१८-५०||",
    english:
      "18.50 Learn from Me in brief, O Arjuna, how he who has attained perfection reaches Brahman (the Eternal), that supreme state of knowledge.",
    hindi:
      "।।18.50।। सिद्धि को प्राप्त पुरुष किस प्रकार ब्रह्म को प्राप्त होता है, तथा ज्ञान की परा निष्ठा को भी तुम मुझसे संक्षेप में जानो।।",
    commentary: "A simple summary of verse 18.50",
  },
  {
    chapter: 18,
    verse: 51,
    sanskrit:
      "बुद्ध्या विशुद्धया युक्तो धृत्यात्मानं नियम्य च |\nशब्दादीन्विषयांस्त्यक्त्वा रागद्वेषौ व्युदस्य च ||१८-५१||",
    english:
      "18.51 Endowed with a pure intellect, controlling the self by firmness, relinishing sound and other objects and abandoning attraction and hatred.",
    hindi:
      "।।18.51।। विशुद्ध बुद्धि से युक्त, धृति से आत्मसंयम कर, शब्दादि विषयों को त्याग कर और राग-द्वेष का परित्याग कर....৷৷৷৷।।",
    commentary: "A simple summary of verse 18.51",
  },
  {
    chapter: 18,
    verse: 52,
    sanskrit:
      "विविक्तसेवी लघ्वाशी यतवाक्कायमानसः |\nध्यानयोगपरो नित्यं वैराग्यं समुपाश्रितः ||१८-५२||",
    english:
      "18.52 Dwelling in solitude, eating but little, with speech, body and mind subdued, always engaged in meditation and concentration, resorting to dispassion.",
    hindi:
      "।।18.52।। विविक्त सेवी, लघ्वाशी (मिताहारी) जिसने अपने शरीर, वाणी और मन को संयत किया है, ध्यानयोग के अभ्यास में सदैव तत्पर तथा वैराग्य पर समाश्रित।।",
    commentary: "A simple summary of verse 18.52",
  },
  {
    chapter: 18,
    verse: 53,
    sanskrit:
      "अहंकारं बलं दर्पं कामं क्रोधं परिग्रहम् |\nविमुच्य निर्ममः शान्तो ब्रह्मभूयाय कल्पते ||१८-५३||",
    english:
      "18.53 Having abandoned egoism, strength, arrogance, desire, anger and covetousness, and free from the notion of 'mine' and peaceful,  he is fit for becoming Brahman.",
    hindi:
      "।।18.53।। अहंकार, बल, दर्प, काम, क्रोध और परिग्रह को त्याग कर ममत्वभाव से रहित और शान्त पुरुष ब्रह्म प्राप्ति के योग्य बन जाता है।।",
    commentary: "A simple summary of verse 18.53",
  },
  {
    chapter: 18,
    verse: 54,
    sanskrit:
      "ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति |\nसमः सर्वेषु भूतेषु मद्भक्तिं लभते पराम् ||१८-५४||",
    english:
      "18.54 Becoming Brahman, serene in the Self, he neither grieves nor desires, the same to all beings, he obtains supreme devotion to Me.",
    hindi:
      "।।18.54।। ब्रह्मभूत (जो साधक ब्रह्म बन गया है), प्रसन्न मन वाला पुरुष न इच्छा करता है और न शोक, समस्त भूतों के प्रति सम होकर वह मेरी परा भक्ति को प्राप्त करता है।।",
    commentary: "A simple summary of verse 18.54",
  },
  {
    chapter: 18,
    verse: 55,
    sanskrit:
      "भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः |\nततो मां तत्त्वतो ज्ञात्वा विशते तदनन्तरम् ||१८-५५||",
    english:
      "18.55 By devotion he knows Me in truth, what and who I am; then having known Me in truth, he forthwith enters into the Supreme.",
    hindi:
      "।।18.55।। (उस परा) भक्ति के द्वारा मुझे वह तत्त्वत: जानता है कि मैं कितना (व्यापक) हूँ तथा मैं क्या हूँ। (इस प्रकार) तत्त्वत: जानने के पश्चात् तत्काल ही वह मुझमें प्रवेश कर जाता है, अर्थात् मत्स्वरूप बन जाता है।।",
    commentary: "A simple summary of verse 18.55",
  },
  {
    chapter: 18,
    verse: 56,
    sanskrit:
      "सर्वकर्माण्यपि सदा कुर्वाणो मद्व्यपाश्रयः |\nमत्प्रसादादवाप्नोति शाश्वतं पदमव्ययम् ||१८-५६||",
    english:
      "18.56 Doing all actions always having taken refuge in Me, by My grace he obtains the eternal indestructible state of being.",
    hindi:
      "।।18.56।। जो पुरुष मदाश्रित होकर सदैव समस्त कर्मों को करता है, वह मेरे प्रसाद (अनुग्रह) से शाश्वत, अव्यय पद को प्राप्त कर लेता है।।",
    commentary: "A simple summary of verse 18.56",
  },
  {
    chapter: 18,
    verse: 57,
    sanskrit:
      "चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः |\nबुद्धियोगमुपाश्रित्य मच्चित्तः सततं भव ||१८-५७||",
    english:
      "18.57 Mentally renouncing all actions in Me, having Me as the highest goal, resorting to the Yoga of discrimination do thou ever fix thy mind on Me.",
    hindi:
      "।।18.57।। मन से समस्त कर्मों का संन्यास मुझमें करके मत्परायण होकर बुद्धियोग का आश्रय लेकर तुम सतत मच्चित्त बनो।।",
    commentary: "A simple summary of verse 18.57",
  },
  {
    chapter: 18,
    verse: 58,
    sanskrit:
      "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि |\nअथ चेत्त्वमहंकारान्न श्रोष्यसि विनङ्क्ष्यसि ||१८-५८||",
    english:
      "18.58 Fixing thy mind on Me, thou shalt by My grace overcome all obstacles; but if from egoism thou wilt not hear Me, thou shalt perish.",
    hindi:
      "।।18.58।। मच्चित्त होकर तुम मेरी कृपा से समस्त कठिनाइयों (सर्वदुर्गाणि) को पार कर जाओगे; और यदि अहंकारवश (इस उपदेश को) नहीं सुनोगे, तो तुम नष्ट हो जाओगे।।",
    commentary: "A simple summary of verse 18.58",
  },
  {
    chapter: 18,
    verse: 59,
    sanskrit:
      "यदहंकारमाश्रित्य न योत्स्य इति मन्यसे |\nमिथ्यैष व्यवसायस्ते प्रकृतिस्त्वां नियोक्ष्यति ||१८-५९||",
    english:
      '18.59 If, filled with egoism, thou thinkest: "I will not fight", vain is this, thy resolve; Nature will compel thee.',
    hindi:
      '।।18.59।। और अहंकारवश तुम जो यह सोच रहे हो, "मैं युद्ध नहीं करूंगा", यह तुम्हारा निश्चय मिथ्या है, (क्योंकि) प्रकृति (तुम्हारा स्वभाव) ही तुम्हें (बलात् कर्म में) प्रवृत्त करेगी।।',
    commentary: "A simple summary of verse 18.59",
  },
  {
    chapter: 18,
    verse: 60,
    sanskrit:
      "स्वभावजेन कौन्तेय निबद्धः स्वेन कर्मणा |\nकर्तुं नेच्छसि यन्मोहात्करिष्यस्यवशोपि तत् ||१८-६०||",
    english:
      "18.60 O Arjuna, bound by thy own Karma (action) born of thy own nature, that which from delusion thou wishest not to do, even that thou shalt do helplessly.",
    hindi:
      "।।18.60।। हे कौन्तेय ! तुम अपने स्वाभाविक कर्मों से बंधे हो, (अत:) मोहवशात् जिस कर्म को तुम करना नहीं चाहते हो, वही तुम विवश होकर करोगे।।",
    commentary: "A simple summary of verse 18.60",
  },
  {
    chapter: 18,
    verse: 61,
    sanskrit:
      "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति |\nभ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया ||१८-६१||",
    english:
      "18.61 The Lord dwells in the hearts of all beings, O Arjuna, causing all beings, by His illusive power, to revolve as if mounted on a machine.",
    hindi:
      "।।18.61।। हे अर्जुन (मानों किसी) यन्त्र पर आरूढ़ समस्त भूतों को ईश्वर अपनी माया से घुमाता हुआ (भ्रामयन्) भूतमात्र के हृदय में स्थित रहता है।।",
    commentary: "A simple summary of verse 18.61",
  },
  {
    chapter: 18,
    verse: 62,
    sanskrit:
      "तमेव शरणं गच्छ सर्वभावेन भारत |\nतत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम् ||१८-६२||",
    english:
      "18.62 Fly unto Him for refuge with all thy being, O Arjuna; by His grace thou shalt obtain supreme peace (and) the eternal abode.",
    hindi:
      "।।18.62।। हे भारत ! तुम सम्पूर्ण भाव से उसी (ईश्वर) की शरण में जाओ। उसके प्रसाद से तुम परम शान्ति और शाश्वत स्थान को प्राप्त करोगे।।",
    commentary: "A simple summary of verse 18.62",
  },
  {
    chapter: 18,
    verse: 63,
    sanskrit:
      "इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया |\nविमृश्यैतदशेषेण यथेच्छसि तथा कुरु ||१८-६३||",
    english:
      "18.63 Thus has wisdom, more secret than secrecy itself, been declared unto thee by Me; having reflected over it fully, then act as thou wishest.",
    hindi:
      "।।18.63।। इस प्रकार समस्त गोपनीयों से अधिक गुह्य ज्ञान मैंने तुमसे कहा; इस पर पूर्ण विचार (विमृश्य) करने के पश्चात् तुम्हारी जैसी इच्छा हो, वैसा तुम करो।।",
    commentary: "A simple summary of verse 18.63",
  },
  {
    chapter: 18,
    verse: 64,
    sanskrit:
      "सर्वगुह्यतमं भूयः शृणु मे परमं वचः |\nइष्टोऽसि मे दृढमिति ततो वक्ष्यामि ते हितम् ||१८-६४||",
    english:
      "18.64 Hear thou again My supreme word, most secret of all; because thou art dearly beloved of Me, I will tell thee what is good.",
    hindi:
      "।।18.64।। पुन: एक बार तुम मुझसे समस्त गुह्यों में गुह्यतम परम वचन (उपदेश) को सुनो। तुम मुझे अतिशय प्रिय हो, इसलिए मैं तुम्हें तुम्हारे हित की बात कहूंगा।।",
    commentary: "A simple summary of verse 18.64",
  },
  {
    chapter: 18,
    verse: 65,
    sanskrit:
      "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु |\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ||१८-६५||",
    english:
      "18.65 Fix thy mind on Me, by devoted to Me, sacrifice to Me, bow down to Me. Thou shalt come even to Me; truly do I promise unto thee, (for) thou art dear to Me.",
    hindi:
      "।।18.65।। तुम मच्चित, मद्भक्त और मेरे पूजक (मद्याजी) बनो और मुझे नमस्कार करो; (इस प्रकार) तुम मुझे ही प्राप्त होगे; यह मैं तुम्हे सत्य वचन देता हूँ,(क्योंकि) तुम मेरे प्रिय हो।।",
    commentary: "A simple summary of verse 18.65",
  },
  {
    chapter: 18,
    verse: 66,
    sanskrit:
      "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज |\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||१८-६६||",
    english:
      "18.66 Abandoning all duties, take refuge in Me alone: I will liberate thee from all sins; grieve not.",
    hindi:
      "।।18.66।। सब धर्मों का परित्याग करके तुम एक मेरी ही शरण में आओ, मैं तुम्हें समस्त पापों से मुक्त कर दूँगा, तुम शोक मत करो।।",
    commentary: "A simple summary of verse 18.66",
  },
  {
    chapter: 18,
    verse: 67,
    sanskrit:
      "इदं ते नातपस्काय नाभक्ताय कदाचन |\nन चाशुश्रूषवे वाच्यं न च मां योऽभ्यसूयति ||१८-६७||",
    english:
      "18.67 This is never to be spoken by thee to one who is devoid of austerities or devotion, nor to one who does not render service or who does not desire to listen, nor to one who cavils at Me.",
    hindi:
      "।।18.67।। यह ज्ञान ऐसे पुरुष से नहीं कहना चाहिए, जो अतपस्क (तपरहित) है, और न उसे जो अभक्त है; उसे भी नहीं जो अशुश्रुषु (सेवा में अतत्पर) है और उस पुरुष से भी नहीं कहना चाहिए, जो मुझ (ईश्वर) से असूया करता है, अर्थात् मुझ में दोष देखता है।।",
    commentary: "A simple summary of verse 18.67",
  },
  {
    chapter: 18,
    verse: 68,
    sanskrit:
      "य इदं परमं गुह्यं मद्भक्तेष्वभिधास्यति |\nभक्तिं मयि परां कृत्वा मामेवैष्यत्यसंशयः ||१८-६८||",
    english:
      "18.68 He who with supreme devotion to Me will teach this supreme secret to My devotees, shall doubtlessly come to Me.",
    hindi:
      "।।18.68।। जो पुरुष मुझसे परम प्रेम (परा भक्ति) करके इस परम गुह्य ज्ञान का उपदेश मेरे भक्तों को देता है, वह नि:सन्देह मुझे ही प्राप्त होता है।।",
    commentary: "A simple summary of verse 18.68",
  },
  {
    chapter: 18,
    verse: 69,
    sanskrit:
      "न च तस्मान्मनुष्येषु कश्चिन्मे प्रियकृत्तमः |\nभविता न च मे तस्मादन्यः प्रियतरो भुवि ||१८-६९||",
    english:
      "18.69 Nor is there any among men who does dearer service to Me, nor shall there be another on earth dearer to Me than he.",
    hindi:
      "।।18.69।। न तो उससे बढ़कर मेरा अतिशय प्रिय कार्य करने वाला मनुष्यों में कोई है और न उससे बढ़कर मेरा प्रिय इस पृथ्वी पर दूसरा कोई होगा।।",
    commentary: "A simple summary of verse 18.69",
  },
  {
    chapter: 18,
    verse: 70,
    sanskrit:
      "अध्येष्यते च य इमं धर्म्यं संवादमावयोः |\nज्ञानयज्ञेन तेनाहमिष्टः स्यामिति मे मतिः ||१८-७०||",
    english:
      "18.70 And he who will study this sacred dialogue of ours, by him I shall have been worshipped by the sacrifice of wisdom,  such is My conviction.",
    hindi:
      "।।18.70।। जो पुरुष, हम दोनों के इस धर्ममय संवाद का पठन करेगा, उसके द्वारा मैं ज्ञानयज्ञ से पूजित होऊँगा - ऐसा मेरा मत है।।",
    commentary: "A simple summary of verse 18.70",
  },
  {
    chapter: 18,
    verse: 71,
    sanskrit:
      "श्रद्धावाननसूयश्च शृणुयादपि यो नरः |\nसोऽपि मुक्तः शुभाँल्लोकान्प्राप्नुयात्पुण्यकर्मणाम् ||१८-७१||",
    english:
      "18.71 Also the man who hears this, full of faith and free from malice, he, too, liberated, shall attain to the happy worlds of those of righteous deeds.",
    hindi:
      "।।18.71।। तथा जो श्रद्धावान् और अनसुयु (दोषदृष्टि रहित) पुरुष इसका श्रवणमात्र भी करेगा, वह भी (पापों से) मुक्त होकर पुण्यकर्मियों के शुभ (श्रेष्ठ) लोकों को प्राप्त कर लेगा।।",
    commentary: "A simple summary of verse 18.71",
  },
  {
    chapter: 18,
    verse: 72,
    sanskrit:
      "कच्चिदेतच्छ्रुतं पार्थ त्वयैकाग्रेण चेतसा |\nकच्चिदज्ञानसम्मोहः प्रनष्टस्ते धनञ्जय ||१८-७२||",
    english:
      "18.72 Has this been heard, O Arjuna, with one-pointed mind? Has the delusion of thy ignorance been destroyed, O Dhananjaya?",
    hindi:
      "।।18.72।। हे पार्थ ! क्या इसे (मेरे उपदेश को) तुमने एकाग्रचित्त होकर श्रवण किया ? और हे धनञ्जय ! क्या तुम्हारा अज्ञान जनित संमोह पूर्णतया नष्ट हुआ ?",
    commentary: "A simple summary of verse 18.72",
  },
  {
    chapter: 18,
    verse: 73,
    sanskrit:
      "अर्जुन उवाच |\nनष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत |\nस्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव ||१८-७३||",
    english:
      "18.73 Arjuna said  Destroyed is my delusion as I have gained my knowledge (memory) through Thy grace, O Krishna. I remain freed from doubts. I will act according to Thy word.",
    hindi:
      "।।18.73।। अर्जुन ने कहा -- हे अच्युत ! आपके कृपाप्रसाद से मेरा मोह नष्ट हो गया है, और मुझे स्मृति (ज्ञान) प्राप्त हो गयी है? अब मैं संशयरहित हो गया हूँ और मैं आपके वचन (आज्ञा) का पालन करूँगा।।",
    commentary: "A simple summary of verse 18.73",
  },
  {
    chapter: 18,
    verse: 74,
    sanskrit:
      "सञ्जय उवाच |\nइत्यहं वासुदेवस्य पार्थस्य च महात्मनः |\nसंवादमिममश्रौषमद्भुतं रोमहर्षणम् ||१८-७४||",
    english:
      "18.74 Sanjaya said  Thus I have heard this wonderful dialogue between Krishna and the high-souled Arjuna, which causes the hair to stand on end.",
    hindi:
      "।।18.74।। संजय ने कहा -- इस प्रकार मैंने भगवान् वासुदेव और महात्मा अर्जुन के इस अद्भुत और रोमान्चक संवाद का वर्णन किया।।",
    commentary: "A simple summary of verse 18.74",
  },
  {
    chapter: 18,
    verse: 75,
    sanskrit:
      "व्यासप्रसादाच्छ्रुतवानेतद्गुह्यमहं परम् |\nयोगं योगेश्वरात्कृष्णात्साक्षात्कथयतः स्वयम् ||१८-७५||",
    english:
      "18.75 Through the grace of Vyasa I have heard this supreme and most secret Yoga direct from Krishna, the Lord of Yoga, Himself declaring it.",
    hindi:
      "।।18.75।। व्यास जी की कृपा से मैंने इस परम् गुह्य योग को साक्षात् कहते हुए स्वयं योगोश्वर श्रीकृष्ण भगवान् से सुना।।",
    commentary: "A simple summary of verse 18.75",
  },
  {
    chapter: 18,
    verse: 76,
    sanskrit:
      "राजन्संस्मृत्य संस्मृत्य संवादमिममद्भुतम् |\nकेशवार्जुनयोः पुण्यं हृष्यामि च मुहुर्मुहुः ||१८-७६||",
    english:
      "18.76 O King, remembering this wonderful and holy dialogue between Krishna and Arjuna, I rejoice again and again.",
    hindi:
      "।।18.76।। हे राजन् ! भगवान् केशव और अर्जुन के इस अद्भुत और पुण्य (पवित्र) संवाद को स्मरण करके मैं बारम्बार हर्षित होता हूँ।।",
    commentary: "A simple summary of verse 18.76",
  },
  {
    chapter: 18,
    verse: 77,
    sanskrit:
      "तच्च संस्मृत्य संस्मृत्य रूपमत्यद्भुतं हरेः |\nविस्मयो मे महान् राजन्हृष्यामि च पुनः पुनः ||१८-७७||",
    english:
      "18.77 And, remembering again and again, also that most wonderful form of Hari, great is my wonder, O King; and I rejoice again and again.",
    hindi:
      "।।18.77।। हे राजन ! श्री हरि के अति अद्भुत रूप को भी पुन: पुन: स्मरण करके मुझे महान् विस्मय होता है और मैं बारम्बार हर्षित हो रहा हूँ।।",
    commentary: "A simple summary of verse 18.77",
  },
  {
    chapter: 18,
    verse: 78,
    sanskrit:
      "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः |\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ||१८-७८||",
    english:
      "18.78 Wherever is Krishna, the Lord of Yoga; wherever is Arjuna, the wielder of the bow; there are prosperity, victory, happiness and firm policy; such is my conviction.",
    hindi:
      "।।18.78।। जहाँ योगेश्वर श्रीकृष्ण हैं और जहाँ धनुर्धारी अर्जुन है वहीं पर श्री, विजय, विभूति और ध्रुव नीति है, ऐसा मेरा मत है।।",
    commentary: "A simple summary of verse 18.78",
  },
];

export const getChapterById = (chapterId: number): GitaChapter | undefined => {
  return chapters.find((chapter) => chapter.chapter === chapterId);
};

export const getVersesByChapter = (chapterId: number): GitaVerse[] => {
  return verses.filter((verse) => verse.chapter === chapterId);
};

export const getVerseById = (
  chapterId: number,
  verseId: number
): GitaVerse | undefined => {
  return verses.find(
    (verse) => verse.chapter === chapterId && verse.verse === verseId
  );
};

export const searchVerses = (query: string): GitaVerse[] => {
  const searchTerm = query.toLowerCase();
  return verses.filter(
    (verse) =>
      verse.english.toLowerCase().includes(searchTerm) ||
      verse.hindi.toLowerCase().includes(searchTerm) ||
      verse.commentary.toLowerCase().includes(searchTerm) ||
      verse.sanskrit.includes(searchTerm)
  );
};
