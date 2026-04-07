import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

interface Lectura {
  dia: number;
  titulo: string;
  texto: string;
}

const lecturas: Lectura[] = [
  {
    dia: 1,
    titulo: 'María es la Madre de Dios',
    texto: '"Cuando la Virgen respondió que sí, libremente, a aquellos designios que el Creador le revelaba, el Verbo divino asumió la naturaleza humana: el alma racional y el cuerpo formado en el seno purísimo de María.\n\nLa naturaleza divina y la humana se unían en una única persona: Jesucristo, verdadero Dios y, desde entonces, verdadero Hombre; Unigénito eterno del Padre y, a partir de aquel momento, como Hombre, hijo verdadero de María: por eso Nuestra Señora es Madre del Verbo encarnado, de la segunda Persona de la Santísima Trinidad que ha unido a sí para siempre —sin confusión— la naturaleza humana.\n\nPodemos decir bien alto a la Virgen Santa, como la mejor alabanza, esas palabras que expresan su más alta dignidad: Madre de Dios.\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nDecir con amor, a lo largo del día, muchas jaculatorias a la Virgen, tales como "Madre de Dios, eres omnipotente en tu intercesión".'
  },
  {
    dia: 2,
    titulo: 'María es la criatura más perfecta',
    texto: '"La llena de gracia, la que es objeto de las complacencias de Dios, la que está por encima de los ángeles y de los santos llevó una existencia normal.\n\nMaría es una criatura como nosotros, con un corazón como el nuestro, capaz de gozos y de alegrías, de sufrimientos y de lágrimas. Antes de que Gabriel le comunique el querer de Dios, Nuestra Señora ignora que había sido escogida desde toda la eternidad para ser Madre del Mesías. Se considera a sí misma llena de bajeza por eso reconoce luego, con profunda humildad, que en Ella ha hecho cosas grandes el que es Todopoderoso".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nCuidar especialmente las miradas de amor a cuadros e imágenes de la Santísima Virgen que veamos en nuestra casa, en la Iglesia, o en las calles, rezando alguna jaculatoria al mismo tiempo.'
  },
  {
    dia: 3,
    titulo: 'La Trinidad Beatísima y María',
    texto: '"María, Hija de Dios Padre, por la Encarnación del Señor en sus entrañas inmaculadas es Esposa de Dios Espíritu Santo y Madre de Dios Hijo".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nRezar un "Avemaría" cada vez que el reloj marque una nueva hora.'
  },
  {
    dia: 4,
    titulo: 'La familia de María: La Trinidad en la Tierra',
    texto: '"No es por eso extraño que la Iglesia se alegre, que se recree, contemplando la morada modesta de Jesús, María y José. Es grato -se reza en el Himno de maitines de esta fiesta- recordar la pequeña casa de Nazaret y la existencia sencilla que allí se lleva, celebrar con canto la ingenuidad humilde que rodea a Jesús, su vida escondida. Allí fue donde, siendo niño, aprendió el oficio de José; allí donde creció en edad y donde compartió el trabajo de artesano. Junto a El se sentaba la dulce Madre; junto a José vivía su esposa amadísima, feliz de poder ayudarle y ofrecerle su cuidado".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nUn rato de oración cada día junto a Jesús meditando los misterios gozosos del Santo Rosario.'
  },
  {
    dia: 5,
    titulo: 'La Inmaculada Concepción',
    texto: '"¿Cómo nos habríamos comportado, si hubiésemos podido escoger la madre nuestra? Pienso que hubiésemos elegido la que tenemos, llenándola de todas las gracias. Eso hizo Cristo: siendo Omnipotente, Sapientísimo y el mismo Amor, su poder realizó todo su querer... Es la explicación más clara de por qué el Señor concedió a su Madre, desde el primer instante de su inmaculada concepción, todos los privilegios. Estaba libre del poder de Satanás; es hermosa —tota pulchra—, limpia, pura en alma y cuerpo".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nRenovar las promesas del bautismo, renunciando a Satanás, al mundo, y a sus vanidades.'
  },
  {
    dia: 6,
    titulo: 'La Encarnación: María se convierte en el primer tabernáculo',
    texto: '"Si buscáis a María, encontraréis a Jesús. Y aprenderéis a entender un poco lo que hay en ese corazón de Dios que se anonada, que renuncia a manifestar su poder y su majestad, para presentarse en forma de esclavo. Hablando a lo humano, podríamos decir que Dios se excede, pues no se limita a lo que sería esencial o imprescindible para salvarnos, sino que va más allá. La única norma o medida que nos permite comprender de algún modo esa manera de obrar de Dios es darnos cuenta de que carece de medida: ver que nace de una locura de amor, que le lleva a tomar nuestra carne y a cargar con el peso de nuestros pecados".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nRezar puntualmente (a mediodía) y con devoción, el "Angelus".'
  },
  {
    dia: 7,
    titulo: 'María es nuestro ejemplo en la vida ordinaria',
    texto: '"No olvidemos que la casi totalidad de los días que Nuestra Señora pasó en la tierra transcurrieron de una manera muy parecida a las jornadas de otros millones de mujeres, ocupadas en cuidar de su familia, en educar a sus hijos, en sacar adelante las tareas del hogar. María santifica lo más menudo, lo que muchos consideran erróneamente como intrascendente y sin valor: el trabajo de cada día, los detalles de atención hacia las personas queridas, las conversaciones y las visitas con motivo de parentesco o de amistad. ¡Bendita normalidad, que puede estar llena de tanto amor de Dios!"\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nCuidar el trato amable y servicial con todos los que nos rodean.'
  },
  {
    dia: 8,
    titulo: 'El nacimiento del Niño Dios',
    texto: '"Iesus Christus, Deus Homo, Jesucristo Dios-Hombre. Una de las magnalia Dei, de las maravillas de Dios, que hemos de meditar y que hemos de agradecer a este Señor que ha venido a traer la paz en la Tierra a los hombres de buena voluntad. A todos los hombres que quieren unir su voluntad a la Voluntad buena de Dios: No sólo a los ricos, ni sólo a los pobres, a todos los hombres, a todos los hermanos ¡Qué hermanos somos todos en Jesús, hijos de Dios, hermanos de Cristo: su Madre es nuestra Madre".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nA Jesús mismo cuando lo recibamos en la Sagrada Comunión.'
  },
  {
    dia: 9,
    titulo: 'María recibe a los pastores',
    texto: '"Es preciso mirar al Niño, Amor nuestro, en la cuna. Hemos de mirarlo sabiendo que estamos delante de un misterio. Necesitamos aceptar el misterio por la fe y también por la fe, ahondar en su contenido. Para esto, nos hacen falta las disposiciones humildes del alma cristiana: no querer reducir la grandeza de Dios a nuestros pobres conceptos, a nuestras explicaciones humanas, sino comprender que ese misterio, en su oscuridad, es una luz que guía la vida de los hombres".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nHacer varios sacrificios pequeños —casi sin que nadie nos cueste un poco, como privarse de algo en las comidas— y ofrecerlo a Jesús por medio de María.'
  },
  {
    dia: 10,
    titulo: 'María presenta a Jesús en el templo',
    texto: '"Maestra de caridad. Recordad aquella escena de la presentación de Jesús en el templo. El anciano Simeón aseguró a María, su Madre: mira, este niño está destinado para ruina y para resurrección de muchos en Israel y para ser el blanco de la contradicción; lo que será para ti misma una espada que traspasará tu alma, a fin de que sean descubiertos los pensamientos ocultos en los corazones de muchos. La inmensa caridad de María por la humanidad hace que se cumpla, también en Ella, la afirmación de Cristo: nadie tiene amor más grande que el que da su vida por sus amigos".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nVisitar algún templo dedicado a la Virgen y llevarle alguna ofrenda de flores.'
  },
  {
    dia: 11,
    titulo: 'María recibe a los Reyes Magos',
    texto: '"Entrando en la casa, vieron al Niño con María, su Madre. Nuestra Señora no se separa de su Hijo. Los Reyes Magos no son recibidos por un rey encumbrado en un trono, sino por un Niño en brazos de su Madre. Pidamos la Madre de Dios, que es nuestra Madre, que nos prepare el camino que lleva al amor pleno: Cor Mariae dulcissimum, iter para tutum! Su dulce corazón conoce el sendero más seguro para encontrar a Cristo".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nHacer algunas visitas a pobres o enfermos llevándoles el cariño de nuestra presencia.'
  },
  {
    dia: 12,
    titulo: 'La Sagrada Familia huye a Egipto',
    texto: '"El misterio de María nos hacer ver que, para acercarnos a Dios, hay que hacerse pequeños. En verdad os digo -exclamó el Señor dirigiéndose a sus discípulos-, que si no os volvéis y hacéis semejantes a los niños, no entraréis en el reino de los cielos. Hacernos niños: renunciar a la soberbia, a la autosuficiencia; reconocer que nosotros solos nada podemos, porque necesitamos de la gracia, del poder de nuestro Padre Dios; para aprender a caminar y para perseverar en el camino".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nVisitar a un enfermo o a una persona solitaria y compartir el gozo de la confianza absoluta en Dios.'
  },
  {
    dia: 13,
    titulo: 'Vida oculta en Nazaret',
    texto: '"Me gusta volver con la imaginación a aquellos años en los que Jesús permanecía junto a su Madre, que abarcan casi toda la vida de Nuestro Señor en este mundo. Verle pequeño, cuando María lo besaba y lo entretenía. Verle crecer, entre los ojos enamorados de su Madre y de José, su padre en la tierra. Con cuánta ternura y con cuánta delicadeza María y el Santo Patriarca se preocuparían de Jesús durante su infancia y, en silencio, aprenderían mucho y constantemente de Él. Sus almas se irían haciendo al alma de aquel Hijo, Hombre y Dios. Por eso la Madre —y, después de Ella, José— conoce como nadie los sentimientos del Corazón de Cristo, y los dos son el camino mejor, diría que el único, para llegar al Salvador".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nCumplir con perfección y alegría, y por amor a la Santísima Virgen, mis deberes profesionales.'
  },
  {
    dia: 14,
    titulo: 'María pierde y halla al Niño Jesús',
    texto: '"La Madre de Dios, que buscó afanosamente a su hijo, perdido sin culpa de Ella, que experimentó la mayor alegría al encontrarle, nos ayudará a desandar lo andado, a rectificar lo que sea preciso cuando por nuestras ligerezas o pecados no acertemos a distinguir a Cristo. Alcanzaremos así la alegría de abrazarnos de nuevo a Él, para decirle que no lo perderemos más".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nUna buena confesión de nuestros pecados en el sacramento de la Penitencia.'
  },
  {
    dia: 15,
    titulo: 'María en las Bodas de Caná',
    texto: '"San Juan conserva en su Evangelio una frase maravillosa de la Virgen, en una escena que ya antes considerábamos: la de las bodas de Caná. Nos narra el evangelista que, dirigiéndose a los sirvientes, María les dijo: Haced lo que El os diga. De eso se trata: de llevar a las almas a que se sitúen frente a Jesús y le pregunten: Domine, quid me vis facere?: Señor, ¿qué quieres que yo haga?".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nObedecer cuando nos dan un encargo.'
  },
  {
    dia: 16,
    titulo: 'María junto a la Cruz',
    texto: '"En el Calvario, junto al patíbulo, reza. No es una actitud nueva de María. Así se ha conducido siempre, cumpliendo sus deberes, ocupándose de su hogar. Mientras estaba en las cosas de la tierra, permanecía pendiente de Dios".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nRepetir muchos actos de contrición, pidiendo a nuestra madre que le ofrezca a su hijo crucificado.'
  },
  {
    dia: 17,
    titulo: 'María, Madre Dolorosa',
    texto: '"Nuestra Señora escuchaba las palabras de su Hijo, uniéndose a su dolor: Dios mío, Dios mío, ¿por qué me has desamparado? ¿Qué podía hacer Ella? Fundirse con el amor redentor de su Hijo, ofrecer al Padre el dolor inmenso —como una espada afilada— que traspasaba su Corazón puro".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nSoportar en silencio cualquier dificultad, dolor o pena, uniéndonos al dolor de nuestra madre. Debemos decir la siguiente oración:\n"Quiero estar a tu lado, Virgen dolorosísima, fortaleciendo mi espíritu con tu ejemplo, consumando mi sacrificio con tu martirio, sosteniendo mi corazón con tu soledad, amando a mi Dios y tu Dios con la inmolación de mi ser. Amén".'
  },
  {
    dia: 18,
    titulo: 'María es corredentora con Cristo',
    texto: '"Con razón los Romanos Pontífices han llamado a María Corredentora: de tal modo, juntamente con su Hijo paciente y muriente, padeció y casi murió; y de tal modo, por la salvación de los hombres, abdicó de los derechos maternos sobre su Hijo, y le inmoló, en cuanto de Ella dependía, para aplacar la justicia de Dios; que puede con razón decirse que Ella redimió al género humano junto con Cristo. Así comprendemos mejor aquel momento de la Pasión de Nuestro Señor, que nunca nos cansaremos de meditar: stabat autem iuxta crucem Iesu mater eius, estaba junto a la cruz de Jesús su Madre".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nOfrecer por medio de María cinco pequeños sacrificios en memoria de las cinco llagas del Señor.'
  },
  {
    dia: 19,
    titulo: 'La Fe de María',
    texto: '"Si nuestra fe es débil, acudamos a María. Cuenta San Juan que por el milagro de las bodas de Caná, que Cristo realizó a ruegos de su Madre, creyeron en El sus discípulos. Nuestra Madre intercede siempre ante su Hijo para que nos atienda y se nos muestre, de tal modo, que podamos confesar: tú eres el Hijo de Dios".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nRezar la oración "Acordaos" por la salvación de cada una de las personas que están más cerca de nosotros.'
  },
  {
    dia: 20,
    titulo: 'La esperanza de María',
    texto: '"Nuestra Señora, hecha partícipe de modo pleno de la obra de nuestra salvación, tenía que seguir de cerca los pasos de su Hijo: la pobreza de Belén, la vida oculta de trabajo ordinario en Nazaret, la manifestación de la divinidad en Caná de Galilea, las afrentas de la Pasión y el Sacrificio divino de la Cruz, la bienaventuranza eterna del Paraíso.\n\nTodo esto nos afecta directamente, porque ese itinerario sobrenatural ha de ser también nuestro camino. María nos muestra que esa senda es hacedora, que es segura. Ella nos ha precedido por la vía de la imitación de Cristo, y la glorificación de Nuestra Madre es la firme esperanza de nuestra propia salvación; por eso la llamamos spes nostra y causa nostrae laetitiae, nuestra esperanza y causa de nuestra felicidad".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nUna sonrisa aún cuando no sintamos ganas de sonreír a los demás.'
  },
  {
    dia: 21,
    titulo: 'La oración de María',
    texto: '"Supliquemos hoy a Santa María que nos haga contemplativos, que nos enseñe a comprender las llamadas continuas que el Señor dirige a la puerta de nuestro corazón. Roguémosle: Madre nuestra, tú has traído a la tierra a Jesús, que nos revela el amor de nuestro Padre Dios; ayúdanos a reconocerlo, en medio de los afanes de cada día; remueve nuestra inteligencia y nuestra voluntad, para que sepamos escuchar la voz de Dios, el impulso de la gracia".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nUna visita a Jesús presente en el Santísimo Sacramento.'
  },
  {
    dia: 22,
    titulo: 'La perpetua virginidad de María',
    texto: '"La pureza, la humildad y la generosidad de María contrastan con nuestra miseria, con nuestro egoísmo. Es razonable que, después de advertir esto, nos sintamos movidos a imitarla; somos criaturas de Dios, como Ella, y basta que nos esforcemos por ser fieles, para que también en nosotros el Señor obre cosas grandes. No será obstáculo nuestra poquedad, porque Dios escoge lo que vale poco, para que así brille mejor la potencia de su amor".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nRezar al día de hoy el "Bendita sea tu Pureza".'
  },
  {
    dia: 23,
    titulo: 'María, Reina de los apóstoles',
    texto: '"Y si caminamos de la mano de la Virgen Santísima, Ella hará que nos sintamos hermanos de todos los hombres: porque todos somos hijos de ese Dios del que Ella es Hija, Esposa y Madre. Los problemas de nuestros prójimos han de ser nuestros problemas. La fraternidad cristiana debe encontrarse muy metida en lo hondo del alma, de manera que ninguna persona nos sea indiferente. María, Madre de Jesús, que lo crió, lo educó y lo acompañó durante su vida terrena y que ahora está junto a Él en los cielos, nos ayudará a reconocer a Jesús que pasa a nuestro lado, que se nos hace presente en las necesidades de nuestros hermanos los hombres".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nDecir una palabra amable, tener una conversación cristiana con las personas que trabajamos o convivimos.'
  },
  {
    dia: 24,
    titulo: 'María, Auxilio de los cristianos',
    texto: '"Somos aún peregrinos, pero Nuestra Madre nos ha precedido y nos señala ya el término del sendero: nos repite que es posible llegar y que, si somos fieles, llegaremos. Porque la Santísima Virgen no sólo es nuestro ejemplo; es auxilio de los cristianos. Y ante esta petición —Monstra te esse Matrem—, no sabe ni quiere negarse a cuidar de sus hijos con solicitud maternal".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nCinco misterios del Rosario además de los misterios de este día.'
  },
  {
    dia: 25,
    titulo: 'María, Madre Nuestra',
    texto: '"Te aconsejo (...) que hagas, si no lo has hecho todavía, tu experiencia particular del amor materno de María. No basta saber que Ella es Madre, considerarla de este modo, hablar así de Ella. Es tu Madre y tú eres su hijo; te quiere como si fueras el hijo único suyo en este mundo. Trátala en consecuencia: cuéntale todo lo que te pasa, hónrala, quiérela. Nadie lo hará por ti, tan bien como tú, si tú no lo haces".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nRepetir la jaculatoria "Madre mía, Esperanza mía" cada vez que hacemos una pausa en nuestro trabajo.'
  },
  {
    dia: 26,
    titulo: 'María es el camino hacia Jesús',
    texto: '"María, a quienes se acercan a Ella y contemplan su vida, les hace siempre el inmenso favor de llevarlos a la Cruz, de ponerlos frente a frente al ejemplo del Hijo de Dios. Y en ese enfrentamiento, donde se decide la vida cristiana, María intercede para que nuestra conducta culmine con una reconciliación del hermano menor —tú y yo— con el Hijo primogénito del Padre.\n\nMuchas conversiones, muchas decisiones de entrega al servicio de Dios han sido precedidas de un encuentro con María. Nuestra Señora ha fomentado los deseos de búsqueda, ha activado maternalmente las inquietudes del alma, ha hecho aspirar a un cambio, a una vida nueva. Y así el haced lo que El os diga se ha convertido en realidades de amoroso entregamiento, en vocación cristiana que ilumina desde entonces toda nuestra vida personal".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nEnseñar a un amigo o a un niño a recitar el Rosario.'
  },
  {
    dia: 27,
    titulo: 'María, Madre del amor hermoso',
    texto: '"Porque eso es lo que explica la vida de María: su amor. Un amor llevado hasta el extremo, hasta el olvido completo de sí misma, contenta de estar allí, donde la quiere Dios, y cumpliendo con esmero la voluntad divina. Eso es lo que hace que el más pequeño gesto suyo, no sea nunca banal, sino que se manifieste lleno de contenido. María, Nuestra Madre, es para nosotros ejemplo y camino. Hemos de procurar ser como Ella, en las circunstancias concretas en las que Dios ha querido que vivamos".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nRezar tres avemarías cada noche, antes de ir a dormir, y hacerlo cada vez con mayor afecto.'
  },
  {
    dia: 28,
    titulo: 'La Asunción: María es llevada en cuerpo y alma a los cielos',
    texto: '"María ha subido a los cielos en cuerpo y alma, ¡los ángeles se alborozan! Pienso también en el júbilo de San José, su Esposo castísimo, que la aguardaba en el paraíso. ¡Pero volvamos a la tierra! La fe nos confirma que aquí abajo, en la vida presente, estamos en tiempo de peregrinación, de viaje; no faltarán los sacrificios, el dolor, las privaciones. Sin embargo, la alegría ha de ser siempre el contrapunto del camino".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nUna sonrisa cuando alguien nos corrige o juzga erróneamente.'
  },
  {
    dia: 29,
    titulo: 'María es Reina del cielo',
    texto: '"Ella vive y nos protege; está junto al Padre y al Hijo y al Espíritu Santo, en cuerpo y alma. Es la misma que nació en Palestina, que se entregó al Señor desde niña, que recibió el anuncio del Arcángel Gabriel, que dio a luz a Nuestro Salvador, que estuvo junto a Él al pie de la Cruz.\n\nEn Ella adquieren realidad todos los ideales; pero no debemos concluir que su sublimidad y grandeza nos la presentan inaccesible y distante".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nRezar una "Salve" cada vez que el reloj marque una nueva hora.'
  },
  {
    dia: 30,
    titulo: 'María es la medianera de todas las gracias',
    texto: '"Con su poder delante de Dios, nos alcanzará lo que le pedimos; como Madre quiere concedérnoslo. Y también como Madre entiende y comprende nuestras flaquezas, alienta, excusa, facilita el camino, tiene siempre preparado el remedio, aun cuando parezca que ya nada es posible".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nVisitar a un amigo o familiar al que queramos exhortar a ir a confesión sacramental.'
  },
  {
    dia: 31,
    titulo: 'La Visitación: María canta del amor de Dios',
    texto: '"Dios se interesa hasta de las pequeñas cosas de sus criaturas: de las vuestras y de las mías, y nos llama uno a uno por nuestro propio nombre. Esa certeza que nos da la fe hace que miremos lo que nos rodea con una luz nueva, y que, aun manteniendo todo igual, advirtamos que todo es distinto, porque todo es expresión del amor de Dios.\n\nNuestra vida se convierte así en una continua oración, en un buen humor y en una paz que nunca se acaban, en un acto de acción de gracias desgranado a través de las horas. Mi alma glorifica al Señor -cantó la Virgen María- y mi espíritu está transportado de gozo en el Dios salvador mío; porque ha puesto sus ojos en la bajeza de su esclava, por tanto ya desde ahora me llamarán bienaventurada todas las generaciones. Porque ha hecho en mí cosas grandes aquel que es todopoderoso, cuyo nombre es santo".\n\nOfrezcamos hoy a nuestra madre, la Virgen María:\nPropagar entre nuestros familiares y amigos la devoción del Santo Rosario y rezarlo diariamente con la mente concentrada y el corazón lleno de afecto.'
  }
];

export default function LecturasMarianasScreen() {
  const [lecturaSeleccionada, setLecturaSeleccionada] = useState<Lectura | null>(null);

  const renderLectura = (lectura: Lectura) => {
    return (
      <View style={styles.lecturaDetalle}>
        <Text style={styles.lecturaTitulo}>{lectura.titulo}</Text>
        <Text style={styles.lecturaTexto}>{lectura.texto}</Text>
        <TouchableOpacity 
          style={styles.botonVolver}
          onPress={() => setLecturaSeleccionada(null)}
        >
          <Text style={styles.botonVolverTexto}>Volver al listado</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: lecturaSeleccionada ? lecturaSeleccionada.titulo : 'Lecturas Marianas',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {lecturaSeleccionada ? (
            renderLectura(lecturaSeleccionada)
          ) : (
            lecturas.map((lectura) => (
              <TouchableOpacity 
                key={lectura.dia}
                style={styles.lecturaItem}
                onPress={() => setLecturaSeleccionada(lectura)}
              >
                <Text style={styles.lecturaItemTitulo}>Día {lectura.dia}: {lectura.titulo}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  lecturaItem: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lecturaItemTitulo: {
    fontSize: 22,
    color: Colors.primary,
    textAlign: 'center',
  },
  lecturaDetalle: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
  lecturaTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  lecturaTexto: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  botonVolver: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonVolverTexto: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 