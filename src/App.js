import React, { useState, useEffect } from 'react';
import './App.css';

const ScoreButton = ({ score, selected, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(score)}
      style={{
        padding: '10px 20px',
        margin: '0 5px',
        borderRadius: '20px',
        border: 'none',
        background: selected ? '#4285F4' : '#E8E8E8',
        color: selected ? 'white' : 'black',
        fontWeight: 'normal',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
    >
      {score}
    </button>
  );
};

const SubjectRow = ({ subject, selectedScore, onScoreSelect }) => {
  const scores = ['Weinig', 'Minder', 'Neutraal', 'Meer', 'Veel'];
  return (
    <div style={{ marginBottom: '20px', textAlign: 'center' }}>
      <h3 style={{ color: '#4285F4', marginBottom: '10px' }}>{subject}</h3>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {scores.map((score) => (
          <ScoreButton
            key={score}
            score={score}
            selected={selectedScore === score}
            onSelect={() => onScoreSelect(subject, score)}
          />
        ))}
      </div>
    </div>
  );
};

const AdviceDisplay = ({ advice }) => {
  if (!advice) return null;
  return (
    <div style={{ marginTop: '20px', textAlign: 'left' }}>
      <h3>{advice.subject}</h3>
      <ul>
        {advice.text.split('\n').filter(item => item.trim() !== '').map((item, index) => (
          <li key={index}>{item.trim().replace(/^- /, '')}</li>
        ))}
      </ul>
    </div>
  );
};

function KindKernKaart710() {
  const [scores, setScores] = useState({});
  const [allComponentsFilled, setAllComponentsFilled] = useState(false);
  const [advices, setAdvices] = useState({});
  const subjects = [
    'Ondersteuning bij sociale interacties',
    'Bevorderen van autonomie en verantwoordelijkheid',
    'Ondersteunen van emotieregulatie en zelfreflectie',
    'Gevarieerde activiteiten en talentontwikkeling',
    'Participatieve structuur en grenzen',
    'Individuele aandacht en ondersteuning',
    'Rust en ontspanning'
  ];

  const handleScoreSelect = (subject, score) => {
    setScores(prev => ({ ...prev, [subject]: score }));
  };

  useEffect(() => {
    const allFilled = subjects.every(subject => scores[subject]);
    setAllComponentsFilled(allFilled);
  }, [scores, subjects]);

  const handleShowAdvice = () => {
    const newAdvices = {};
    subjects.forEach(subject => {
      const score = scores[subject];
      newAdvices[subject] = getAdviceForScore(subject, score);
    });
    setAdvices(newAdvices);
  };

const getAdviceForScore = (subject, score) => {
  switch (subject) {
    case 'Ondersteuning bij sociale interacties':
      switch (score) {
        case 'Weinig':
          return "- Bied een veilige omgeving waarin het kind zelfstandig sociale interacties kan aangaan.\n" +
                 "- Observeer het kind op afstand tijdens sociale interacties.\n" +
                 "- Grijp alleen in bij ernstige conflicten of als het kind hier expliciet om vraagt.";
        case 'Minder':
          return "- Moedig het kind aan om zelf contact te leggen met andere kinderen.\n" +
                 "- Bied lichte ondersteuning bij het oplossen van conflicten, laat het kind eerst zelf proberen.\n" +
                 "- Creëer kansen voor sociale interactie door groepsactiviteiten aan te bieden, maar laat deelname vrijwillig.";
        case 'Neutraal':
          return "- Observeer actief de sociale interacties van het kind en bied ondersteuning waar nodig.\n" +
                 "- Help het kind bij het interpreteren van sociale signalen en non-verbale communicatie.\n" +
                 "- Stimuleer het kind om verschillende rollen in groepsactiviteiten uit te proberen.\n" +
                 "- Bied begeleiding bij het oplossen van conflicten door vragen te stellen en het kind zelf oplossingen te laten bedenken.";
        case 'Meer':
          return "- Bied gerichte ondersteuning bij het aangaan en onderhouden van vriendschappen.\n" +
                 "- Help het kind actief bij het ontwikkelen van strategieën voor samenwerking en onderhandeling.\n" +
                 "- Organiseer regelmatig activiteiten die specifiek gericht zijn op het oefenen van sociale vaardigheden.\n" +
                 "- Bespreek groepsdynamiek met het kind en help het zijn rol daarin te begrijpen.";
        case 'Veel':
          return "- Bied intensieve, één-op-één begeleiding bij sociale interacties.\n" +
                 "- Creëer gestructureerde sociale situaties waarin het kind specifieke sociale vaardigheden kan oefenen.\n" +
                 "- Gebruik rollenspel en sociale verhalen om complexe sociale situaties te verkennen en te oefenen.\n" +
                 "- Help het kind actief bij het reflecteren op sociale interacties en het plannen van toekomstige sociale strategieën.\n" +
                 "- Werk nauw samen met ouders om sociale vaardigheden ook buiten de BSO te ondersteunen.";
        default:
          return "Geen specifiek advies beschikbaar.";
      }
    
    case 'Bevorderen van autonomie en verantwoordelijkheid':
      switch (score) {
        case 'Weinig':
          return "- Bied het kind enkele eenvoudige keuzes binnen sterk gestructureerde activiteiten.\n" +
                 "- Geef het kind kleine, overzichtelijke taken die het zelfstandig kan uitvoeren.\n" +
                 "- Moedig het kind aan om persoonlijke spullen zelf te beheren.";
        case 'Minder':
          return "- Laat het kind kiezen uit een beperkt aantal activiteiten of speelmogelijkheden.\n" +
                 "- Geef het kind verantwoordelijkheid voor eenvoudige, dagelijkse taken binnen de BSO.\n" +
                 "- Stimuleer het kind om zelf oplossingen te bedenken voor kleine problemen.";
        case 'Neutraal':
          return "- Bied het kind ruime keuzemogelijkheden in activiteiten en de invulling van vrije tijd.\n" +
                 "- Geef het kind leeftijdsadequate verantwoordelijkheden binnen de BSO-setting.\n" +
                 "- Betrek het kind bij het opstellen van groepsregels en -afspraken.";
        case 'Meer':
          return "- Laat het kind grotere delen van de dag zelf inplannen en organiseren.\n" +
                 "- Geef het kind verantwoordelijkheid voor complexere taken of kleine projecten binnen de BSO.\n" +
                 "- Stimuleer het kind om jongere kinderen te helpen of te begeleiden bij activiteiten.\n" +
                 "- Moedig het kind aan om eigen initiatieven te ontwikkelen en uit te voeren.";
        case 'Veel':
          return "- Laat het kind grotendeels zelf zijn tijd indelen en activiteiten kiezen binnen de BSO.\n" +
                 "- Geef het kind belangrijke verantwoordelijkheden, zoals het helpen organiseren van events.\n" +
                 "- Stimuleer het kind om een leidende rol te nemen in groepsactiviteiten of -projecten.\n" +
                 "- Betrek het kind actief bij besluitvormingsprocessen binnen de BSO.\n" +
                 "- Ondersteun het kind in het ontwikkelen en uitvoeren van eigen langetermijnprojecten.";
        default:
          return "Geen specifiek advies beschikbaar.";
      }
case 'Ondersteunen van emotieregulatie en zelfreflectie':
  switch (score) {
    case 'Weinig':
      return "- Bied een rustige, veilige omgeving waarin het kind zijn emoties kan uiten.\n" +
             "- Observeer het kind op afstand en grijp alleen in bij extreme emotionele situaties.\n" +
             "- Geef basiserkenning voor de gevoelens van het kind.";
    case 'Minder':
      return "- Moedig het kind aan om zijn emoties te benoemen wanneer deze duidelijk zichtbaar zijn.\n" +
             "- Bied eenvoudige strategieën aan voor emotieregulatie, zoals diep ademhalen.\n" +
             "- Stel af en toe reflectieve vragen over de dag of activiteiten van het kind.";
    case 'Neutraal':
      return "- Help het kind zijn emoties te herkennen, te benoemen en te begrijpen.\n" +
             "- Leer het kind verschillende strategieën voor emotieregulatie aan en moedig het gebruik ervan aan.\n" +
             "- Stimuleer dagelijkse zelfreflectie door open vragen te stellen over ervaringen en gevoelens.\n" +
             "- Bied momenten aan waarop het kind kan nadenken over zijn gedrag en de gevolgen daarvan. (Op een ontspannen moment)";
    case 'Meer':
      return "- Help het kind actief bij het analyseren van complexe emotionele situaties.\n" +
             "- Begeleid het kind in het stellen van persoonlijke doelen en het reflecteren op de voortgang.\n" +
             "- Leer het kind verschillende strategieën voor emotieregulatie aan en moedig het gebruik ervan aan.";
    case 'Veel':
      return "- Bied momenten van intensieve, één-op-één begeleiding bij het navigeren van complexe emotionele situaties.\n" +
             "- Ontwikkel samen met het kind een persoonlijk 'emotieplan' met individuele strategieën.\n" +
             "- Gebruik rollenspel en scenario's om diepgaande zelfreflectie en emotieregulatie te oefenen.\n" +
             "- Help het kind bij het ontwikkelen van metacognitieve vaardigheden om eigen denk- en gevoelsprocessen te analyseren.\n" +
             "- Betrek ouders actief bij het ondersteunen van emotieregulatie en zelfreflectie thuis.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }

case 'Gevarieerde activiteiten en talentontwikkeling':
  switch (score) {
    case 'Weinig':
      return "- Bied een basisaanbod van activiteiten waar het kind uit kan kiezen.\n" +
             "- Observeer de interesses van het kind tijdens vrij spel.\n" +
             "- Moedig het kind aan om deel te nemen aan verschillende activiteiten.";
    case 'Minder':
      return "- Bied een gevarieerd aanbod van activiteiten aan en laat het kind kiezen.\n" +
             "- Bespreek met het kind welke activiteiten het leuk vindt en waarom.\n" +
             "- Introduceer af en toe nieuwe activiteiten om het kind kennis te laten maken met verschillende interesses.";
    case 'Neutraal':
      return "- Bied een breed scala aan activiteiten aan die verschillende ontwikkelingsgebieden stimuleren.\n" +
             "- Help het kind zijn interesses te verkennen door gerichte vragen te stellen en mogelijkheden aan te reiken.\n" +
             "- Stimuleer het kind om nieuwe vaardigheden te ontwikkelen binnen activiteiten die het interessant vindt.\n" +
             "- Organiseer regelmatig workshops of projecten waarin het kind verschillende talenten kan ontdekken.";
    case 'Meer':
      return "- Creëer gepersonaliseerde activiteiten die aansluiten bij de specifieke interesses van het kind.\n" +
             "- Help het kind bij het stellen van persoonlijke doelen binnen activiteiten die het talent stimuleren.\n" +
             "- Bied verdiepingsmogelijkheden aan binnen gebieden waar het kind talent voor toont.\n" +
             "- Stimuleer het kind om zijn talenten te delen met anderen, bijvoorbeeld door het geven van een presentatie of workshop.";
    case 'Veel':
      return "- Ontwikkel samen met het kind een persoonlijk 'talentontwikkelingsplan'.\n" +
             "- Bied intensieve begeleiding bij het ontwikkelen van specifieke vaardigheden of talenten.\n" +
             "- Organiseer speciale projecten of uitdagingen die de unieke talenten van het kind showcasen.\n" +
             "- Betrek externe experts of workshops om het kind gespecialiseerde kennis of vaardigheden bij te brengen.\n" +
             "- Betrek ouders bij jouw observatie rondom het talent van het kind";
    default:
      return "Geen specifiek advies beschikbaar.";
  }
case 'Rust en ontspanning':
  switch (score) {
    case 'Weinig':
      return "- Bied een rustige hoek in de ruimte waar het kind zich kan terugtrekken als het dat wil.\n" +
             "- Respecteer de keuze van het kind als het aangeeft even alleen te willen zijn.";
    case 'Minder':
      return "- Moedig het kind aan om zelf rustmomenten te nemen wanneer het moe lijkt.\n" +
             "- Bied eenvoudige ontspanningsactiviteiten aan, zoals tekenen of lezen.\n" +
             "- Creëer een comfortabele zitplek waar het kind kan uitrusten.";
    case 'Neutraal':
      return "- Plan dagelijks rustmomenten in het programma en stimuleer het kind hieraan deel te nemen.\n" +
             "- Bied een gevarieerd aanbod van rustige activiteiten aan.\n" +
             "- Leer het kind eenvoudige ontspanningstechnieken, zoals ademhalingsoefeningen.\n" +
             "- Creëer een 'chill-out' ruimte waar het kind zich kan terugtrekken voor rust.";
    case 'Meer':
      return "- Help het kind bij het herkennen van eigen signalen van vermoeidheid of overprikkeling.\n" +
             "- Bied regelmatig begeleide ontspanningsactiviteiten aan.\n" +
             "- Maak samen met het kind een persoonlijk 'ontspanningsplan' met favoriete rustgevende activiteiten.\n" +
             "- Creëer meerdere rustige zones voor verschillende vormen van ontspanning.";
    case 'Veel':
      return "- Ontwikkel een gedetailleerd, individueel ontspanningsschema voor het kind.\n" +
             "- Bied regelmatig begeleide ontspanningsactiviteiten aan.\n" +
             "- Creëer meerdere rustige zones voor verschillende vormen van ontspanning.\n" +
             "- Werk nauw samen met ouders om consistente rust- en ontspanningsroutines te ontwikkelen voor thuis en op de BSO.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }

case 'Individuele aandacht en ondersteuning':
  switch (score) {
    case 'Weinig':
      return "- Zorg dat het kind dagelijks persoonlijk wordt begroet.\n" +
             "- Observeer het kind op afstand om eventuele problemen te signaleren.\n" +
             "- Bied basishulp wanneer het kind er expliciet om vraagt.";
    case 'Minder':
      return "- Heb dagelijks een kort individueel gesprek met het kind.\n" +
             "- Bied hulp aan bij activiteiten als het kind zichtbaar moeite heeft.\n" +
             "- Let op non-verbale signalen van het kind die om aandacht of ondersteuning vragen.";
    case 'Neutraal':
      return "- Plan regelmatig één-op-één momenten in met het kind.\n" +
             "- Observeer actief de behoeften van het kind en speel hier proactief op in.\n" +
             "- Bied gerichte ondersteuning bij activiteiten of sociale interacties waar nodig.\n" +
             "- Heb wekelijks een uitgebreider gesprek met het kind over zijn ervaringen en behoeften.";
    case 'Meer':
      return "- Creëer dagelijks meerdere één-op-één momenten met het kind.\n" +
             "- Ontwikkel een individueel ondersteuningsplan gebaseerd op de specifieke behoeften van het kind.\n" +
             "- Bied proactief hulp aan bij uitdagingen, voordat het kind erom vraagt.\n" +
             "- Stem activiteiten en benaderingen af op de individuele interesses en ontwikkelingsdoelen van het kind.";
    case 'Veel':
      return "- Creëer dagelijks meerdere één-op-één momenten met het kind.\n" +
             "- Werk met een gedetailleerd individueel ontwikkelingsplan dat regelmatig wordt geëvalueerd en bijgesteld.\n" +
             "- Bied één-op-één begeleiding bij activiteiten die aansluiten bij de specifieke ontwikkelingsdoelen van het kind.\n" +
             "- Heb dagelijks uitgebreide individuele gesprekken om de ervaringen, uitdagingen en successen van het kind te bespreken.\n" +
             "- Werk nauw samen met ouders en eventueel andere professionals om de individuele ondersteuning af te stemmen op alle levensdomeinen van het kind.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }

case 'Participatieve structuur en grenzen':
  switch (score) {
    case 'Weinig':
      return "- Hanteer basisregels voor veiligheid en respect die voor iedereen gelden.\n" +
             "- Bied het kind een vaste dagstructuur met beperkte flexibiliteit.\n" +
             "- Leg het kind uit waarom bepaalde regels en grenzen bestaan.";
    case 'Minder':
      return "- Betrek het kind bij het bespreken van bestaande groepsregels en de redenen erachter.\n" +
             "- Bied het kind beperkte keuzemogelijkheden binnen de vastgestelde structuur.\n" +
             "- Moedig het kind aan om feedback te geven op de dagelijkse routine.";
    case 'Neutraal':
      return "- Betrek het kind actief bij het opstellen en evalueren van groepsregels.\n" +
             "- Bied een flexibele dagstructuur waarin het kind keuzes kan maken.\n" +
             "- Stimuleer het kind om mee te denken over oplossingen bij het overtreden van regels.\n" +
             "- Bespreek regelmatig met het kind hoe het de structuur en grenzen ervaart.";
    case 'Meer':
      return "- Laat het kind meedenken over de inrichting van de BSO-ruimte en de beschikbare activiteiten.\n" +
             "- Geef het kind verantwoordelijkheid voor het naleven en uitleggen van bepaalde regels aan anderen.\n" +
             "- Betrek het kind bij het oplossen van groepsconflicten en het vinden van compromissen.\n" +
             "- Stimuleer het kind om eigen grenzen te stellen en te communiceren in sociale situaties.";
    case 'Veel':
      return "- Laat het kind een leidende rol spelen in het vormgeven van de BSO-structuur en -regels.\n" +
             "- Geef het kind de ruimte om zelf zijn dagindeling te maken binnen de BSO-tijd.\n" +
             "- Betrek het kind bij besluitvormingsprocessen over grotere veranderingen binnen de BSO.\n" +
             "- Help het kind bij het ontwikkelen van een persoonlijk 'grenzenplan' waarin het leert omgaan met verschillende sociale situaties.\n" +
             "- Stimuleer het kind om een bemiddelende rol te spelen bij conflicten tussen andere kinderen.";
    default:
      return "Geen specifiek advies beschikbaar.";
  }
  break;
default:
  return "Geen specifiek advies beschikbaar voor dit onderwerp.";
  }
};

return (
  <div style={{ 
    maxWidth: '800px', 
    margin: 'auto', 
    padding: '20px', 
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  }}>
    <h1 style={{ color: '#4285F4', textAlign: 'center', marginBottom: '30px' }}>KindKernKaart 7-10</h1>
    {subjects.map(subject => (
      <SubjectRow
        key={subject}
        subject={subject}
        selectedScore={scores[subject]}
        onScoreSelect={handleScoreSelect}
      />
    ))}
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <button
        onClick={handleShowAdvice}
        disabled={!allComponentsFilled}
        style={{
          padding: '10px 20px',
          borderRadius: '20px',
          border: 'none',
          background: allComponentsFilled ? '#4285F4' : '#E8E8E8',
          color: allComponentsFilled ? 'white' : '#999',
          fontWeight: 'bold',
          cursor: allComponentsFilled ? 'pointer' : 'not-allowed',
          transition: 'all 0.3s ease',
        }}
      >
        Toon adviezen
      </button>
    </div>
    {Object.entries(advices).map(([subject, advice]) => (
      <AdviceDisplay key={subject} advice={{ subject, text: advice }} />
    ))}
  </div>
);
}

export default KindKernKaart710; 