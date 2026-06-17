import { useState } from 'react';
import {
  AdoracionSantisimoLayout,
  BodyText,
  Footnote,
  LanguageSwitch,
  LocalizedText,
  Rubric,
  SectionHeading,
  VersicleLine,
  type AdoracionLanguage,
} from '../../../components/adoracion-santisimo/AdoracionSantisimoLayout';

const PANGE_LINGUA = {
  la: `Pange, lingua, gloriósi\nCórporis mystérium\nSanguinísque pretiósi,\nquem in mundi prétium\nfructus ventris generósi\nRex effúdit géntium.`,
  es: `Que la lengua humana cante este misterio: la preciosa Sangre y el precioso Cuerpo. Quien nació de Virgen Rey del universo, por salvar el mundo, dio su Sangre en precio.`,
};

export default function ExposicionScreen() {
  const [language, setLanguage] = useState<AdoracionLanguage>('es');

  return (
    <AdoracionSantisimoLayout title="Exposición" headerTitle="Exposición">
      <LanguageSwitch language={language} onChange={setLanguage} />

      <Rubric>
        El ministro hace genuflexión simple antes de subir al presbiterio. Abre el Sagrario, hace
        genuflexión y saca la Pixide con el Viril. A continuación, coloca el Santísimo Sacramento en
        la Custodia, hace genuflexión, se pone de rodillas en el reclinatorio y se entona el himno
        Pange, Lingua u otro canto eucarístico.
      </Rubric>

      <SectionHeading>Pange, Lingua</SectionHeading>
      <LocalizedText language={language} es={PANGE_LINGUA.es} la={PANGE_LINGUA.la} />

      <Rubric>
        Se rezan tres estaciones a Jesús Sacramentado, excepto los domingos y solemnidades con sus
        vísperas, en que se rezan cinco.
      </Rubric>

      <VersicleLine label="V" text="¡Viva Jesús Sacramentado!" />
      <VersicleLine label="R" text="¡Viva y de todos sea amado!" />
      <BodyText>Padrenuestro. Avemaría. Gloria.</BodyText>

      <Rubric>Al final se dice:</Rubric>
      <VersicleLine
        label="V"
        text="Por las intenciones del Sumo Pontífice, para ganar las indulgencias concedidas."
      />
      <BodyText>Padrenuestro. Avemaría. Gloria.</BodyText>

      <Rubric>
        Al finalizar las estaciones, hace una genuflexión simple al Santísimo Sacramento, y vuelve a
        la sacristía.
      </Rubric>

      <Footnote>
        Si es un ministro extraordinario de la Sagrada Comunión, y no un Acólito instituido, el himno
        Pange, Lingua y las estaciones se realizan desde un sitio designado en la capilla.
      </Footnote>
    </AdoracionSantisimoLayout>
  );
}
