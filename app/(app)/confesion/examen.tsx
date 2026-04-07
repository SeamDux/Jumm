import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function ExamenConcienciaScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Examen de Conciencia',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.subtitle}>Examen de Conciencia</Text>
          
          <Text style={styles.text}>Se recuerdan los pecados preguntándose sin prisa lo que se ha hecho en contra de los mandamientos de la Ley de Dios y de la Iglesia, con plena advertencia y pleno consentimiento.</Text>
          
          <Text style={styles.category}>Breve Examen de Conciencia</Text>
          <Text style={styles.text}>(para la confesión frecuente)</Text>
          <Text style={styles.text}>• ¿Cuándo fue mi última Confesión? ¿Me he acercado indignamente a recibir algún sacramento? ¿He callado por vergüenza algún pecado mortal en mis confesiones anteriores?</Text>
          <Text style={styles.text}>• ¿He dudado o negado las verdades de la fe católica? ¿He puesto en peligro mi fe leyendo libros o revistas contrarias a la fe católica o he asistido a reuniones de sectas que no son católicas? ¿He sido supersticioso o practicado el espiritismo?</Text>
          <Text style={styles.text}>• ¿He tomado el nombre de Dios en vano? ¿He blasfemado? ¿He jurado sin necesidad o sin verdad?</Text>
          <Text style={styles.text}>• ¿He faltado a Misa los domingos o días festivos por mi culpa y sin una razón grave? ¿He cumplido los días de ayuno y abstinencia?</Text>
          <Text style={styles.text}>• ¿He desobedecido a mis padres o superiores en materias de importancia?</Text>
          <Text style={styles.text}>• ¿Tengo enemistad, odio o rencor contra alguien? ¿Rehuso perdonarle? ¿He causado la muerte a alguien? ¿Me he embriagado, bebido con exceso o tomado drogas? ¿He practicado, aconsejado o facilitado el grave crimen del aborto?</Text>
          <Text style={styles.text}>• ¿He aceptado pensamientos o miradas impuras? ¿He visto películas inmorales? ¿He tenido conversaciones vulgares o impuras? ¿He realizado actos impuros? ¿Solo o con otras personas? ¿Del mismo o distinto sexo? ¿He usado indebidamente el matrimonio? ¿He tomado píldoras anticonceptivas o usado algún otro método artificial para evitar tener hijos?</Text>
          <Text style={styles.text}>• ¿He tomado dinero o cosas que no son mías? ¿Cuánto? ¿He restituido o reparado por el daño causado? ¿He sido honrado en mis negocios?</Text>
          <Text style={styles.text}>• ¿He dicho mentiras? ¿He calumniado o descubierto, sin causa justa, defectos graves de otra persona, aunque sean ciertos, pero no conocidos? ¿He hecho juicios temerarios contra el prójimo? ¿He reparado el daño que haya podido seguirse?</Text>
          <Text style={styles.text}>Si se recuerdan otros pecados, deben mencionarse en la confesión.</Text>
          
          <Text style={styles.category}>Examen de Conciencia Detallado</Text>
          
          <Text style={styles.category}>Primer Mandamiento</Text>
          <Text style={styles.text}>• ¿He admitido en serio alguna duda contra las verdades de la fe? ¿He llegado a negar la fe o algunas de sus verdades, en mi pensamiento o delante de los demás?</Text>
          <Text style={styles.text}>• ¿He desesperado de mi salvación o he abusado de la confianza en Dios, presumiendo que no me abandonaría, para pecar con mayor tranquilidad?</Text>
          <Text style={styles.text}>• ¿He murmurado interna o externamente contra el Señor cuando me ha acaecido alguna desgracia?</Text>
          <Text style={styles.text}>• ¿He abandonado los medios que son por sí mismos absolutamente necesarios para la salvación? ¿He procurado alcanzar la debida formación religiosa?</Text>
          <Text style={styles.text}>• ¿He hablado sin reverencia de las cosas santas, de los sacramentos, de la Iglesia, de sus ministros?</Text>
          <Text style={styles.text}>• ¿He abandonado el trato con Dios en la oración o en los sacramentos?</Text>
          <Text style={styles.text}>• ¿He practicado la superstición o el espiritismo? ¿Pertenezco a alguna sociedad o movimiento ideológico contrario a la religión?</Text>
          <Text style={styles.text}>• ¿Me he acercado indignamente a recibir algún sacramento?</Text>
          <Text style={styles.text}>• ¿He leído o retenido libros, revistas o periódicos que van contra la fe o la moral? ¿Los di a leer a otros?</Text>
          <Text style={styles.text}>• ¿Trato de aumentar mi fe y amor a Dios?</Text>
          <Text style={styles.text}>• ¿Pongo los medios para adquirir una cultura religiosa que me capacite para ser testimonio de Cristo con el ejemplo y la palabra?</Text>
          <Text style={styles.text}>• ¿He hecho con desgana las cosas que se refieren a Dios?</Text>

          <Text style={styles.category}>Segundo Mandamiento</Text>
          <Text style={styles.text}>• ¿He blasfemado? ¿Lo he hecho delante de otros?</Text>
          <Text style={styles.text}>• ¿He hecho algún voto, juramento o promesa y he dejado de cumplirlo por mi culpa?</Text>
          <Text style={styles.text}>• ¿He honrado el santo nombre de Dios? ¿He pronunciado el nombre de Dios sin respeto, con enojo, burla o de alguna manera poco reverente?</Text>
          <Text style={styles.text}>• ¿He hecho un acto de desagravio, al menos interno, al oír alguna blasfemia o al ver que se ofende a Dios?</Text>
          <Text style={styles.text}>• ¿He jurado sin verdad? ¿Lo he hecho sin necesidad, sin prudencia o por cosa de poca importancia?</Text>
          <Text style={styles.text}>• ¿He jurado hacer algún mal? ¿He reparado el daño que haya podido seguirse de mi acción?</Text>

          <Text style={styles.category}>Tercer Mandamiento</Text>
          <Text style={styles.text}>(1o al 4o mandamientos de la Iglesia)</Text>
          <Text style={styles.text}>• ¿Creo todo lo que enseña la Iglesia Católica?  ¿Discuto sus mandatos olvidando que son mandatos de Cristo?</Text>
          <Text style={styles.text}>• ¿He faltado a Misa los domingos o fiestas de guardar? ¿Ha sido culpa mía? ¿Me he distraído voluntariamente o he llegado tan tarde que no he cumplido con el precepto?</Text>
          <Text style={styles.text}>• ¿He impedido que oigan la Santa Misa los que dependen de mí?</Text>
          <Text style={styles.text}>• ¿He guardado el ayuno una hora antes del momento de comulgar?</Text>
          <Text style={styles.text}>• ¿He trabajado corporalmente o he hecho trabajar sin necesidad urgente un día de precepto, por un tiempo considerable, por ejemplo, más de dos horas?</Text>
          <Text style={styles.text}>• ¿He observado la abstinencia durante los viernes de Cuaresma?</Text>
          <Text style={styles.text}>• ¿He rezado alguna oración o realizado algún acto de penitencia los demás viernes del año en los que no he guardado la abstinencia? ¿He ayunado y guardado abstinencia el Miércoles de Ceniza y el Viernes Santo?</Text>
          <Text style={styles.text}>• ¿Cumplí la penitencia que me impuso el sacerdote en la última confesión? ¿He hecho penitencia por mis pecados? ¿Me he confesado al menos una vez al año?</Text>
          <Text style={styles.text}>• ¿Me he acercado a recibir la Comunión en el tiempo establecido para cumplir con el precepto pascual? ¿Me he confesado para hacerlo en estado de gracia?</Text>
          <Text style={styles.text}>• ¿Excuso o justifico mis pecados?</Text>
          <Text style={styles.text}>• ¿He callado en la confesión, por vergüenza, algún pecado grave? ¿He comulgado después alguna vez?</Text>

          <Text style={styles.category}>Cuarto Mandamiento</Text>
          <Text style={styles.text}>(Hijos)</Text>
          <Text style={styles.text}>• ¿He desobedecido a mis padres o superiores en cosas importantes?</Text>
          <Text style={styles.text}>• ¿Tengo un desordenado afán de independencia que me lleva a recibir mal las indicaciones de mis padres simplemente porque me lo mandan? ¿Me doy cuenta de que esta reacción está ocasionada por la soberbia?</Text>
          <Text style={styles.text}>• ¿Les he entristecido con mi conducta?</Text>
          <Text style={styles.text}>• ¿Les he amenazado o maltratado de palabra o de obra, o les he deseado algún mal grave o leve?</Text>
          <Text style={styles.text}>• ¿Me he sentido responsable ante mis padres por el esfuerzo que hacen para que yo me forme, estudiando con intensidad?</Text>
          <Text style={styles.text}>• ¿He dejado de ayudarles en sus necesidades espirituales o materiales?</Text>
          <Text style={styles.text}>• ¿Me dejo llevar del mal genio y me enfado con frecuencia y sin motivo justificado?</Text>
          <Text style={styles.text}>• ¿Soy egoísta con las cosas que tengo, y me duele dejarlas a los demás hermanos?</Text>
          <Text style={styles.text}>• ¿He reñido con mis hermanos?</Text>
          <Text style={styles.text}>• ¿He dejado de hablarme con ellos y no he puesto los medios necesarios para la reconciliación?</Text>
          <Text style={styles.text}>• ¿Soy envidioso y me duele que otros destaquen más que yo en algún aspecto?</Text>
          <Text style={styles.text}>• ¿He dado mal ejemplo a mis hermanos?</Text>
          
          <Text style={styles.text}>(Padres)</Text>
          <Text style={styles.text}>• ¿Desobedezco a mis superiores en cosas importantes?</Text>
          <Text style={styles.text}>• ¿Permanezco indiferente ante las necesidades, problemas y sufrimientos de la gente que me rodea, singularmente de los que están cerca de mí por razones de convivencia o trabajo?</Text>
          <Text style={styles.text}>• ¿Soy causa de tristeza para mis compañeros de trabajo por negligencia, descortesía o mal carácter?</Text>
          <Text style={styles.text}>• ¿He dado mal ejemplo a mis hijos no cumpliendo con mis deberes religiosos, familiares o profesionales? ¿Les he entristecido con mi conducta?</Text>
          <Text style={styles.text}>• ¿Les he corregido con firmeza en sus defectos o se los he dejado pasar por comodidad? ¿Corrijo siempre a mis hijos con justicia y por amor a ellos, o me dejo llevar por motivos egoístas o de vanidad personal, porque me molestan, porque me dejan mal ante los demás o porque me interrumpen?</Text>
          <Text style={styles.text}>• ¿Les he amenazado o maltratado de palabra o de obra, o les he deseado algún mal grave o leve?</Text>
          <Text style={styles.text}>• ¿He descuidado mi obligación de ayudarles a cumplir sus deberes religiosos y de evitar las malas compañías?</Text>
          <Text style={styles.text}>• ¿He abusado de mi autoridad y ascendiente forzándoles a recibir los sacramentos, sin pensar que por vergüenza o excusa humana, podrían hacerlo sin las debidas disposiciones?</Text>
          <Text style={styles.text}>• ¿He impedido que mis hijos sigan la vocación con que Dios les llama a su servicio? ¿Les he puesto obstáculos o les he aconsejado mal?</Text>
          <Text style={styles.text}>• Al orientarles en su formación profesional, ¿me he guiado por razones objetivas de capacidad y medios, o he seguido más bien los dictados de mi vanidad o egoísmo?</Text>
          <Text style={styles.text}>• ¿Me preocupo de modo constante por su formación en el aspecto religioso?</Text>
          <Text style={styles.text}>• ¿Me he preocupado también de la formación religiosa y moral de las otras personas que viven en mi casa o que dependen de mí?</Text>
          <Text style={styles.text}>• ¿Me he opuesto a su matrimonio sin causa razonable?</Text>
          <Text style={styles.text}>• ¿Permito que trabajen o estudien en lugares donde corre peligro su alma o su cuerpo? ¿He descuidado la natural vigilancia en las reuniones de chicos y chicas que se tengan en casa evitando dejarles solos? ¿Soy prudente a la hora de orientar sus diversiones?</Text>
          <Text style={styles.text}>• ¿He tolerado escándalos o peligros morales o físicos entre las personas que viven en mi casa?</Text>
          <Text style={styles.text}>• ¿Sacrifico mis gustos, caprichos y diversiones para cumplir con mi deber de dedicación a la familia?</Text>
          <Text style={styles.text}>• ¿Procuro hacerme amigo de mis hijos? ¿He sabido crear un clima de familiaridad evitando la desconfianza y los modos que impiden la legítima libertad de los hijos?</Text>
          <Text style={styles.text}>• ¿Doy a conocer a mis hijos el origen de la vida, de un modo gradual, acomodándome a su mentalidad y capacidad de comprender, anticipándome ligeramente a su natural curiosidad?</Text>
          <Text style={styles.text}>• ¿Evito los conflictos con los hijos quitando importancia a pequeñeces que se superan con un poco de perspectiva y sentido del humor?</Text>
          <Text style={styles.text}>• ¿Hago lo posible por vencer la rutina en el cariño a mi esposo(a)?</Text>
          <Text style={styles.text}>• ¿Soy amable con los extraños y me falta esa amabilidad en la vida familiar?</Text>
          <Text style={styles.text}>• ¿He reñido con mi consorte? ¿Ha habido malos tratos de palabra o de obra? ¿He fortalecido la autoridad de mi cónyuge, evitando reprenderle, contradecirle o discutirle delante de los hijos?</Text>
          <Text style={styles.text}>• ¿Le he desobedecido o injuriado? ¿He dado con ello mal ejemplo?</Text>
          <Text style={styles.text}>• ¿Me quejo delante de la familia de la carga que suponen las obligaciones domésticas?</Text>
          <Text style={styles.text}>• ¿He dejado demasiado tiempo solo a mi consorte?</Text>
          <Text style={styles.text}>• ¿He procurado avivar la fe en la Providencia y ganar lo suficiente para poder tener o educar a más hijos?</Text>
          <Text style={styles.text}>• ¿Pudiendo hacerlo he dejado de ayudar a mis parientes en sus necesidades espirituales o materiales?</Text>

          <Text style={styles.category}>Quinto Mandamiento</Text>
          <Text style={styles.text}>• ¿Tengo enemistad, odio o rencor hacia alguien?</Text>
          <Text style={styles.text}>• ¿He dejado de hablarme con alguien y me niego a la reconciliación o no hago lo posible por conseguirla?</Text>
          <Text style={styles.text}>• ¿Evito que las diferencias políticas o profesionales degeneren en indisposición, malquerencia u odio hacia las personas?</Text>
          <Text style={styles.text}>• ¿He deseado un mal grave al prójimo? ¿Me he alegrado de los males que le han ocurrido?</Text>
          <Text style={styles.text}>• ¿Me he dejado dominar por la envidia?</Text>
          <Text style={styles.text}>• ¿Me he dejado llevar por la ira? ¿He causado con ello disgusto a otras personas?</Text>
          <Text style={styles.text}>• ¿He despreciado a mi prójimo? ¿Me he burlado de otros o les he criticado, molestado o ridiculizado?</Text>
          <Text style={styles.text}>• ¿He maltratado de palabra o de obra a los demás? ¿Pido las cosas con malos modales, faltando a la caridad?</Text>
          <Text style={styles.text}>• ¿He llegado a herir o quitar la vida al prójimo? ¿He sido imprudente en la conducción de vehículos?</Text>
          <Text style={styles.text}>• ¿He practicado o colaborado en la realización de algún aborto? ¿He abortado o inducido a alguien a abortar, sabiendo que constituye un pecado gravísimo que lleva consigo la excomunión?</Text>
          <Text style={styles.text}>• ¿He contribuido a adelantar la muerte a algún enfermo con pretextos de evitar sufrimientos o sacrificios, sabiendo que la eutanasia es un homicidio?</Text>
          <Text style={styles.text}>• Con mi conversación, mi modo de vestir, mi invitación a presenciar algún espectáculo o con el préstamo de algún libro o revista, ¿he sido la causa de que otros pecasen? ¿He tratado de reparar el escándalo?</Text>
          <Text style={styles.text}>• ¿He descuidado mi salud? ¿He atentado contra mi vida?</Text>
          <Text style={styles.text}>• ¿Me he embriagado, bebido con exceso o tomado drogas?</Text>
          <Text style={styles.text}>• ¿Me he dejado dominar por la gula, es decir, por el placer de comer y beber más allá de lo razonable?</Text>
          <Text style={styles.text}>• ¿Me he deseado la muerte sin someterme a la Providencia de Dios?</Text>
          <Text style={styles.text}>• ¿Me he preocupado del bien del prójimo, avisándole del peligro material o espiritual en que se encuentra o corrigiéndole como pide la caridad cristiana?</Text>
          <Text style={styles.text}>• ¿He descuidado mi trabajo, faltando a la justicia en cosas importantes? ¿Estoy dispuesto a reparar el daño que se haya seguido de mi negligencia?</Text>
          <Text style={styles.text}>• ¿Procuro acabar bien el trabajo pensando que a Dios no se le deben ofrecer cosas mal hechas? ¿Realizo el trabajo con la debida pericia y preparación?</Text>
          <Text style={styles.text}>• ¿He abusado de la confianza de mis superiores? ¿He perjudicado a mis superiores o subordinados o a otras personas haciéndoles un daño grave?</Text>
          <Text style={styles.text}>• ¿Facilito el trabajo o estudio de los demás, o lo entorpezco de algún modo, por ejemplo, con rencillas, derrotismos e interrupciones?</Text>
          <Text style={styles.text}>• ¿He sido perezoso en el cumplimiento de mis deberes?</Text>
          <Text style={styles.text}>• ¿Retraso con frecuencia el momento de ponerme a trabajar o estudiar?</Text>
          <Text style={styles.text}>• ¿Tolero abusos o injusticias que tengo obligación de impedir?</Text>
          <Text style={styles.text}>• ¿He dejado, por pereza, que se produzcan graves daños en mi trabajo? ¿He descuidado mi rendimiento en cosas importantes con perjuicio de aquellos para quienes trabajo?</Text>

          <Text style={styles.category}>Sexto y Noveno Mandamiento</Text>
          <Text style={styles.text}>• ¿Me he entretenido con pensamientos o recuerdos deshonestos?</Text>
          <Text style={styles.text}>• ¿He traído a mi memoria recuerdos o pensamientos impuros?</Text>
          <Text style={styles.text}>• ¿Me he dejado llevar de malos deseos contra la virtud de la pureza, aunque no los haya puesto por obra? ¿Había alguna circunstancia que los agravase: parentesco, matrimonio o consagración a Dios en las personas a quienes se dirigían?</Text>
          <Text style={styles.text}>• ¿He tenido conversaciones impuras? ¿Las he comenzado yo?</Text>
          <Text style={styles.text}>• ¿He asistido a diversiones que me ponían en ocasión próxima de pecar? (ciertos bailes, cines o espectáculos inmorales, malas lecturas o compañías). ¿Me doy cuenta de que ponerme en esas ocasiones es ya un pecado?</Text>
          <Text style={styles.text}>• ¿Guardo los detalles de modestia que son la salvaguardia de la pureza? ¿Considero esos detalles ñoñería?</Text>
          <Text style={styles.text}>• Antes de asistir a un espectáculo, o leer un libro, ¿me entero de su calificación moral para no ponerme en ocasión próxima de pecado evitando así las deformaciones de conciencia que pueda producirme?</Text>
          <Text style={styles.text}>• ¿Me he entretenido con miradas impuras?</Text>
          <Text style={styles.text}>• ¿He rechazado las sensaciones impuras?</Text>
          <Text style={styles.text}>• ¿He hecho acciones impuras como la masturbación o tenido relaciones sexuales fuera del matrimonio? ¿Solo o con otras personas? ¿Cuántas veces? ¿Del mismo o distinto sexo? ¿Había alguna circunstancia de parentesco o afinidad que le diera especial gravedad? ¿Tuvieron consecuencias esas relaciones? ¿Hice algo para impedirlas? ¿Después de haberse formado la nueva vida? ¿He cometido algún otro pecado contra la pureza?</Text>
          <Text style={styles.text}>• ¿Tengo amistades que son ocasión habitual de pecado? ¿Estoy dispuesto a dejarlas?</Text>
          <Text style={styles.text}>• En el noviazgo, ¿es el amor verdadero la razón fundamental de esas relaciones? ¿Vivo el constante y alegre sacrificio de no convertir el cariño en ocasión de pecado? ¿Degrado el amor humano confundiéndolo con el egoísmo y con el placer?</Text>
          <Text style={styles.text}>• El noviazgo debe ser una ocasión de ahondar en el afecto y en el conocimiento mutuo; ¿mis relaciones están inspiradas no por afán de posesión, sino por el espíritu de entrega, de comprensión, de respeto, de delicadeza?</Text>
          <Text style={styles.text}>• ¿Me acerco con más frecuencia al sacramento de la Penitencia durante el noviazgo para tener más gracia de Dios? ¿Me han alejado de Dios esas relaciones?</Text>
          
          <Text style={styles.text}>(Esposos)</Text>
          <Text style={styles.text}>• ¿He usado indebidamente el matrimonio? ¿He negado su derecho al otro cónyuge? ¿He faltado a la fidelidad conyugal con la fornicación, el adulterio, o con deseos o de obra?</Text>
          <Text style={styles.text}>• ¿Hago uso del matrimonio solamente en aquellos días en que no puede haber descendencia? ¿Sigo este modo de control de la natalidad sin razones graves?</Text>
          <Text style={styles.text}>• ¿He usado preservativos o tomados fármacos para evitar los hijos? ¿He inducido a otras personas a que los tomen? ¿He influido de alguna manera —consejos, bromas o actitudes— en crear un ambiente antinatalista?</Text>

          <Text style={styles.category}>Séptimo y Décimo Mandamientos</Text>
          <Text style={styles.text}>• ¿He robado algún objeto o alguna cantidad de dinero? ¿He reparado o restituido pudiendo hacerlo? ¿Estoy dispuesto a realizarlo? ¿He cooperado con otros en algún robo o hurto? ¿Había alguna circunstancia que lo agravase, por ejemplo, que se tratase de un objeto sagrado? ¿La cantidad o el valor de lo apropiado era de importancia?</Text>
          <Text style={styles.text}>• ¿Retengo lo ajeno contra la voluntad de su dueño?</Text>
          <Text style={styles.text}>• ¿He perjudicado a los demás con engaños, trampas o coacciones en los contratos o relaciones comerciales?</Text>
          <Text style={styles.text}>• ¿He hecho daño de otro modo a sus bienes? ¿He engañado cobrando más de lo debido? ¿He reparado el daño causado o tengo la intención de hacerlo?</Text>
          <Text style={styles.text}>• ¿He gastado más de lo que me permite mi posición?</Text>
          <Text style={styles.text}>• ¿He cumplido debidamente con mi trabajo, ganándome el sueldo que me corresponde?</Text>
          <Text style={styles.text}>• ¿He dejado de dar lo conveniente para ayudar a la Iglesia?</Text>
          <Text style={styles.text}>• ¿Hago limosna según mi posición económica?</Text>
          <Text style={styles.text}>• ¿He llevado con sentido cristiano la carencia de cosas superfluas, o incluso necesarias?</Text>
          <Text style={styles.text}>• ¿He defraudado a mi consorte en los bienes?</Text>
          <Text style={styles.text}>• ¿Retengo o retraso indebidamente el pago de sueldos? ¿Pago siempre las cotizaciones previsionales que dispone la ley?</Text>
          <Text style={styles.text}>• ¿Retribuyo con justicia el trabajo de los demás?</Text>
          <Text style={styles.text}>• En el desempeño de cargos o funciones públicas, ¿me he dejado llevar del favoritismo, acepción de personas, faltando a la justicia?</Text>
          <Text style={styles.text}>• ¿Cumplo con exactitud los deberes sociales, v. gr., pago de seguros sociales, con mis empleados? ¿He pagado los impuestos que son de justicia?</Text>
          <Text style={styles.text}>• ¿He evitado o procurado evitar, pudiendo hacerlo desde el cargo que ocupo, las injusticias, los escándalos, hurtos, venganzas, fraudes y demás abusos que dañan la convivencia social?</Text>
          <Text style={styles.text}>• ¿He prestado mi apoyo a programas inmorales y anticristianos de acción social y política?</Text>

          <Text style={styles.category}>Octavo Mandamiento</Text>
          <Text style={styles.text}>• ¿He dicho mentiras? ¿He reparado el daño que haya podido seguirse? ¿Miento habitualmente porque es en cosas de poca importancia?</Text>
          <Text style={styles.text}>• ¿He descubierto, sin justa causa, defectos graves de otra persona, aunque sean ciertos, pero no conocidos? ¿He reparado de alguna manera, v. gr., hablando de modo positivo de esa persona?</Text>
          <Text style={styles.text}>• ¿He calumniado atribuyendo a los demás lo que no era verdadero? ¿He reparado el daño o estoy dispuesto a hacerlo?</Text>
          <Text style={styles.text}>• ¿He dejado de defender al prójimo difamado o calumniado?</Text>
          <Text style={styles.text}>• ¿He hecho juicios temerarios contra el prójimo? ¿Los he comunicado a otras personas? ¿He rectificado ese juicio inexacto?</Text>
          <Text style={styles.text}>• ¿He revelado secretos importantes de otros, descubriéndolos sin justa causa? ¿He reparado el daño seguido?</Text>
          <Text style={styles.text}>• ¿He hablado mal de otros por frivolidad, envidia, o por dejarme llevar del mal genio?</Text>
          <Text style={styles.text}>• ¿He hablado mal de los demás —personas o instituciones— con el único fundamento de que "me contaron" o de que "se dice por ahí"? Es decir, ¿he cooperado de esta manera a la calumnia y a la murmuración?</Text>
          <Text style={styles.text}>• ¿Tengo en cuenta que las discrepancias políticas, profesionales o ideológicas no deben ofuscarme hasta el extremo de juzgar o hablar mal del prójimo, y que esas diferencias no me autorizan a descubrir sus defectos morales a menos que lo exija el bien común?</Text>
          <Text style={styles.text}>• ¿He revelado secretos sin justa causa? ¿He hecho uso en provecho personal de lo que sabía por silencio de oficio? ¿He reparado el daño que causé con mi actuación?</Text>
          <Text style={styles.text}>• ¿He abierto o leído correspondencia u otros escritos que por su modo de estar conservados, se desprende que sus dueños no quieren darlos a conocer?</Text>
          <Text style={styles.text}>• ¿He escuchado conversaciones contra la voluntad de los que las mantenían?</Text>

          
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.primary,
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    color: Colors.secondary,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
}); 