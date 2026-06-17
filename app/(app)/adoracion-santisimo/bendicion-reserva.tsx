import { useState } from 'react';
import {
  AdoracionSantisimoLayout,
  LanguageSwitch,
  LocalizedText,
  Rubric,
  SectionHeading,
  VersicleLine,
  type AdoracionLanguage,
} from '../../../components/adoracion-santisimo/AdoracionSantisimoLayout';

const TANTUM_ERGO = {
  la: `Tantum ergo, sacraméntum\nvenerémur cérnui, et antíquum\ndocuméntum novo cedat ritui;\npræstet fides suppleméntum\nsénsuum deféctui.\n\nGenitóri, Genitóque\nlaus et iubilatio;\nsalus, honor, virtus quoque\nsit et benedíctio;\nprocedénti ab utróque\ncompar sit laudátio. Amen.`,
  es: `Adorad postrados este Sacramento. Cesa el viejo rito; se establece el nuevo. Dudan los sentidos y el entendimiento: que la fe lo supla con asentimiento.\n\nHimnos de alabanza, bendición y obsequio. Por igual la gloria y el poder y el reino al eterno Padre con el Hijo eterno y el divino Espíritu que procede de ellos. Amén.`,
};

const VERSICLES = {
  la: {
    v1: 'Panem de cælo præstitísti eis.',
    v1Suffix: '(T.P. Alleluia)',
    r1: 'Omne delectaméntum in se habéntem.',
    r1Suffix: '(T.P. Alleluia)',
    v2: 'Orémus.',
  },
  es: {
    v1: 'Les diste pan del cielo.',
    v1Suffix: '(T.P. Aleluya)',
    r1: 'Que contiene en sí todo deleite.',
    r1Suffix: '(T.P. Aleluya)',
    v2: 'Oremos.',
  },
};

const ORACION_FINAL = {
  la: `Deus, qui nobis sub Sacraménto mirábili, passiónis tuæ memóriam reliquísti, tríbue, quæsumus, ita nos Córporis et Sánguinis tui sacra mystéria venerári; ut redemptiónis tuæ fructum in nobis iúgiter sentiámus. Qui vivis et regnas in sæcula sæculórum.`,
  es: `Oh Dios, que en este Sacramento admirable, nos dejaste el memorial de tu Pasión, te pedimos nos concedas venerar de tal modo los Sagrados misterios de tu Cuerpo y de tu Sangre; que experimentemos constantemente en nosotros el fruto de tu Redención. Tú que vives y reinas por los siglos de los siglos.`,
};

const AMEN = {
  la: 'Amen.',
  es: 'Amén.',
};

export default function BendicionReservaScreen() {
  const [language, setLanguage] = useState<AdoracionLanguage>('es');
  const versicles = VERSICLES[language];

  return (
    <AdoracionSantisimoLayout title="Bendición y Reserva" headerTitle="Bendición y Reserva">
      <LanguageSwitch language={language} onChange={setLanguage} />

      <Rubric>
        Al acabar la adoración, el sacerdote o diácono se acerca al Altar, hace genuflexión simple y
        se arrodilla. A continuación, se canta el Himno u otro canto eucarístico.
      </Rubric>

      <SectionHeading>Tantum Ergo</SectionHeading>
      <LocalizedText language={language} es={TANTUM_ERGO.es} la={TANTUM_ERGO.la} />

      <Rubric>Acabado el Himno, el sacerdote o diácono puesto de pie canta o dice:</Rubric>

      <VersicleLine label="V" text={versicles.v1} suffix={versicles.v1Suffix} />
      <VersicleLine label="R" text={versicles.r1} suffix={versicles.r1Suffix} />
      <VersicleLine label="V" text={versicles.v2} />

      <Rubric>
        Después de una breve pausa en silencio, el sacerdote o diácono prosigue:
      </Rubric>

      <LocalizedText language={language} es={ORACION_FINAL.es} la={ORACION_FINAL.la} />
      <VersicleLine label="R" text={AMEN[language]} />

      <Rubric>
        A continuación, el sacerdote o diácono imparte la bendición con el Santísimo Sacramento.
      </Rubric>
    </AdoracionSantisimoLayout>
  );
}
