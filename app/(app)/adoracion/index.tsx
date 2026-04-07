import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

interface Oracion {
  id: string;
  titulo: string;
  texto: string;
}

const oraciones: Oracion[] = [
  {
    id: 'visita',
    titulo: 'Visita al Santísimo Sacramento',
    texto: 'Muchos cristianos tienen costumbre, a lo largo del día, de detenerse en la iglesia para hacer una visita a Jesús Sacramentado. Son momentos de intimidad con el Señor, en los que el fiel se ejercita brevemente en la oración personal, pide ayuda, da gracias, etc.\n\nAnte el Santísimo hemos de expresar en primer lugar nuestra fe. En el Sagrario se nos entrega Jesús bajo las especies del pan. Nos espera y desea que vayamos a verle. Cuando estamos delante de Él está atentísimo a lo que queramos decirle: una jaculatoria, un acto de fe, una petición, un acto de desagravio o reparación. O a que le miremos con devoción, sabiendo que allí, en el Sagrario, está el mismo Jesús de Nazaret, el Hijo de María, el que multiplicó los panes y los peces, el que con un solo gesto calmó una tempestad y devolvió la paz perdida a unos hombres asustados. Él tiene todo lo que nos falta y necesitamos.\n\nLa visita al Santísimo nos ayudará a guardar la presencia de Dios durante el día en medio del trabajo y de nuestras ocupaciones.\n"Jesús se ha quedado en la Hostia Santa para nosotros: para permanecer a nuestro lado, para sostenernos, para guiarnos... —Y el amor sólo con amor se paga".\n\nRezar tres veces\nV. Sea por siempre alabado. (u otra fórmula similar)\nR. Jesús Sacramentado.\n\nPadre nuestro...\nAvemaría...\nGloria...\n\n[TITULO]Comunión espiritual[/TITULO]\n\nV. Yo quisiera, Señor, recibiros con aquella pureza, humildad y devoción con que os recibió vuestra Santísima Madre, con el espíritu y fervor de los Santos.\n\n[TITULO]Exposición y Bendición con el Santísimo Sacramento[/TITULO]\n\nLa exposición y bendición con el Santísimo Sacramento es un acto comunitario en el que debe estar presente la celebración de la Palabra de Dios y el silencio contemplativo. La exposición eucarística ayuda a reconocer en ella la maravillosa presencia de Cristo o invita a la unión más íntima con él, que adquiere su culmen en la Comunión Sacramental.\n\nHabiéndose reunido el pueblo y, si parece oportuno, habiéndose iniciado algún cántico, el ministro se acerca al altar. Si el Sacramento no se reserva en el altar de la exposición, el ministro, con el paño de hombros lo trae del lugar de la reserva, acompañado por acólitos o por fieles con velas encendidas.\n\nEl copón o la custodia se colocará sobre el altar cubierto con mantel; mas si la exposición se prolonga durante algún tiempo, y se hace con la custodia, se puede usar el manifestador, colocado en un lugar más alto, pero teniendo cuidado de que no quede muy elevado ni distante. Si se hizo la exposición con la custodia, el ministro inciensa al Santísimo, luego se retira, si la adoración va a prolongarse algún tiempo.Si la exposición es solemne y prolongada, se consagrará la hostia para la exposición, en la Misa que antes se celebre, y se colocará sobre el altar, en la custodia, después de la comunión. La Misa concluirá con la oración después de la comunión, omitiendo los ritos de la conclusión. Antes de retirarse del altar, el sacerdote, si se cree oportuno, colocará la custodia y hará la incensación.\n\n[TITULO]La adoración[/TITULO]\n\nDurante el tiempo de la exposición, no se dirán dirán oraciones, cantos y lecturas, de tal suerte que los fieles, recogidos en oración, se dediquen exclusivamente a Cristo.\n\nPara alimentar una profunda oración, se deben aprovechar las lecturas de la sagrada Escritura, con la homilía, o breves exhortaciones, que promuevan un mayor aprecio del misterio eucarístico. También conviene que los fieles respondan a la palabra de Dios, cantando. Se necesita que se guarde piadoso silencio en momentos oportunos.\n\nAnte el Santísimo Sacramento expuesto por largo tiempo, se puede celebrar también alguna parte, especialmente las horas más importantes de la Liturgia de las Horas; por medio de esta recitación se prolonga a las distintas horas del día la alabanza y la acción de gracias que se tributan a Dios en la celebración de la Misa, y las súplicas de la Iglesia se dirigen a Cristo y por Cristo al Padre, en nombre de todo el mundo.\n\nSe entona un canto adecuado.\n\n[TITULO]La Bendición con el Santísimo Sacramento[/TITULO]\n\nAl final de la adoración, el sacerdote o el diácono se acerca al altar; hace genuflexión, se arrodilla y se incoa un himno u otro canto eucarístico, según la costumbre del lugar.\n\nAdoremos reverentes al Señor Sacramento.....\nSea por siempre Bendito y Alabado, el Santísimo.....\nCanta, lengua, el misterio\ndel cuerpo glorioso\ny de la sangre preciosa.\n\nMientras tanto, arrodillado, el ministro inciensa el Santísimo Sacramento, si la exposición se hizo con la custodia. Al final del canto dice:\n\nV. Les diste pan del cielo. (T.P. Aleluya).\nR. Que contiene en sí todo deleite. (T.P. Aleluya).\n\nLuego se pone en pie y dice:\n\nOremos.\nOh Dios, que en este admirable sacramento nos dejaste el memorial de tú Pasión, te pedimos nos concedas venerar de tal modo los sagrados misterios de tu Cuerpo y de tu Sangre, que experimentemos constantemente el fruto de tu redención. Tú que vives y reinas por los siglos de los siglos. R. Amen.\n\n[TITULO]Bendición Eucarística[/TITULO]\n\nUna vez que ha dicho la oración, el sacerdote o el diácono toma el paño de hombros, hace genuflexión, toma la custodia o el copón, y, sin decir nada, traza con el Sacramento la señal de la cruz sobre el pueblo. A continuación se pueden decir las\n\n[TITULO]Alabanzas de desagravio[/TITULO]\n\nBendito sea Dios.\nBendito sea su santo Nombre.\nBendito sea Jesucristo, Dios y Hombre verdadero.\nBendito sea el Nombre de Jesús.\nBendito sea su Sacratísimo Corazón.\nBendita sea su Preciosísima Sangre.\nBendito sea Jesús en el Santísimo Sacramento del Altar.\nBendito sea el Espíritu Santo Paráclito.\nBendita sea la excelsa Madre de Dios, María Santísima.\nBendita sea su Santa e Inmaculada Concepción.\nBendita sea su gloriosa Asunción.\nBendito sea el nombre de María Virgen y Madre.\nBendito sea San José, su castísimo esposo.\nBendito sea Dios en sus Ángeles y en sus Santos.\n\n[TITULO]La reserva[/TITULO]\n\nConcluida la bendición, el mismo sacerdote que impartió la bendición u otro sacerdote o diácono, reserva el Sacramento en el tabernáculo, y hace genuflexión, en tanto que el pueblo, si parece oportuno, puede hacer alguna aclamación. Finalmente el ministro se retira.'
  },
  {
    id: 'adoro-te',
    titulo: 'Adoro te Devote',
    texto: 'La presencia del verdadero cuerpo de Cristo y de la verdadera sangre de Cristo en la Eucaristía ‘no se conoce por los sentidos, dice Santo Tomás de Aquino, sino solo por la fe, la cual se apoya en la autoridad de Dios’.\n\nTe adoro con devoción, Dios escondido,\noculto verdaderamente bajo estas apariencias.\nA Ti se somete mi corazón por completo,\ny se rinde totalmente al contemplarte.\nAl juzgar de Ti, se equivocan la vista, el tacto, el gusto;\npero basta el oído para creer con firmeza;\ncreo todo lo que ha dicho el Hijo de Dios:\nnada es más verdadero que esta Palabra de verdad.\nEn la Cruz se escondía sólo la Divinidad,\npero aquí se esconde también la Humanidad;\nsin embargo, creo y confieso ambas cosas,\ny pido lo que pidió aquel ladrón arrepentido.\nNo veo las llagas como las vio Tomás\npero confieso que eres mi Dios:\nhaz que yo crea más y más en Ti,\nque en Ti espere y que te ame.\n¡Memorial de la muerte del Señor!\nPan vivo que das vida al hombre:\nconcede a mi alma que de Ti viva\ny que siempre saboree tu dulzura.\nSeñor Jesús, Pelícano bueno,\nlímpiame a mí, inmundo, con tu Sangre,\nde la que una sola gota puede liberar\nde todos los crímenes al mundo entero.\nJesús, a quien ahora veo oculto,\nte ruego que se cumpla lo que tanto ansío:\nque al mirar tu rostro cara a cara,\nsea yo feliz viendo tu gloria. Amén.'
  },
  {
    id: 'quince-minutos',
    titulo: 'Quince minutos con Jesús Sacramentado',
    texto: 'No es preciso, hijo mío, saber mucho para agradarme; basta que me ames mucho. Háblame sencillamente, como hablarías al más íntimo de tus amigos, como hablarías a tu madre, o a tu hermano.\n\n[TITULO]¿Necesitas hacerme alguna súplica en favor de alguien?[/TITULO]\nDime su nombre, sea el de tus padres, el de tus hermanos y amigos; dime en seguida qué quisieras hiciese yo realmente por ellos. Pide mucho, muchas cosas; no vaciles en pedir, me gustan los corazones generosos, que llegan a olvidarse de sí mismos para atender las necesidades ajenas. Háblame con llaneza, de los pobres a quienes quisieras consolar; de los enfermos a quienes ves padecer; de los extraviados que anhelas devolver al buen camino; de los amigos ausentes que quisieras ver otra vez a tu lado. Dime por todos al menos una palabra; pero palabra de amigo, palabra entrañable y fervorosa. Recuérdame que he prometido escuchar toda súplica que salga del corazón.\n\n[TITULO]¿Necesitas alguna gracia?[/TITULO]\nHaz, si quieres, una lista de lo que necesitas, y ven, léela en mi presencia. Dime con sinceridad que sientes orgullo, pereza y amor a la sensualidad, que eres tal vez egoísta, inconstante, negligente..., y pídeme luego que venga en ayuda de tus esfuerzos, pocos o muchos, que haces para sacudir de encima de ti tales miserias.\n\nNo te avergüences, ¡pobre alma!; ¡Hay en el cielo tantos y tantos justos, tantos y tantos santos de primer orden que tuvieron tus mismos defectos! Pero rezaron con humildad, y poco a poco se vieron libres de sus miserias.\n\nTampoco vaciles en pedirme bienes para cuerpo y para entendimiento: salud, memoria, éxito feliz en tus trabajos, negocios o estudios... Todo eso puedo darte, y lo doy y deseo me lo pidas en tanto no se oponga, sino que favorezca y ayude a tu santificación. Hoy por hoy, ¿qué necesitas? ¿Qué puedo hacer por tu bien? ¡Si conocieses los deseos que tengo de favorecerte!\n\n[TITULO]¿Te preocupa alguna cosa?[/TITULO]\nCuéntamelo todo detalladamente. ¿Qué te preocupa?, ¿qué piensas?, ¿qué deseas?; ¿No querrás poder hacer algún bien a tus prójimos, a tus amigos a quienes amas tal vez mucho y que viven quizá olvidados de mí? ¿No te sientes con deseos de mi gloria?\n\nDime: ¿qué cosa llama hoy particularmente tu atención?; ¿qué anhelas más vivamente y con qué medios cuentas para conseguirlo? Dime que es lo que te ha salido mal, y yo te diré las causas del fracaso. Hijo mío, soy dueño de los corazones, y dulcemente los llevo, sin perjuicio de su libertad, donde me place.\n\n[TITULO]¿Estás triste o de mal humor?[/TITULO]\nCuéntame tus tristezas con todos sus pormenores. ¿Quién te ofendió?, ¿quién lastimó tu amor propio?, ¿quién te ha menospreciado? Acércate a mi corazón, que tiene bálsamo eficaz para todas las heridas de tuyo. Cuéntame todo, ya acabarás por decirme que, a semejanza de mí, todo lo perdonas, todo lo olvidas, y en pago recibirás mi consoladora bendición. ¿Tienes miedo de algo? ¿Sientes en tu alma tristeza? Échate en brazos de mi providencia. Contigo estoy, aquí, a tu lado me tienes; todo lo oigo, ni un momento te desamparo.\n\n¿Sientes desprecio por las personas que antes te quisieron bien, y ahora, se alejan de ti, sin que les hayas dado el menor motivo? Ruega por ellas, y yo las volveré a tu lado si no han de ser obstáculo a tu santificación.\n\n[TITULO]¿Tienes alguna alegría que comunicarme?[/TITULO]\n¿Porqué no me haces partícipe de ella por lo buen amigo tuyo que soy? Cuéntame lo que desde ayer, desde la última visita que me hiciste, te ha consolado y hecho como sonreír tu corazón. Quizás has tenido alguna sorpresa agradable; quizás se han disipado algunos recelos; quizás has recibido buenas noticias, una carta, una muestra de cariño; quizás has vencido una dificultad o salido de un apuro... Obra mía es todo esto, y yo te lo he proporcionado. ¿Por qué no has de manifestarme por ello tu gratitud, y decirme sencillamente como un hijo a su padre: gracias padre mío, gracias? El agradecimiento trae consigo nuevos beneficios, porque al bienhechor le agrada verse correspondido.\n\n[TITULO]¿Tienes alguna promesa que hacerme?[/TITULO]\nPuedo leer en el fondo de tu corazón. A los hombres se les engaña fácilmente —a Dios, no. Háblame, pues, con toda sinceridad. ¿Tienes un propósito firme de no ponerte más en aquella ocasión de pecado?, de privarte de aquello que te dañó?, de no leer más aquel libro que dio rienda suelta a tu imaginación?, de no tratar más a aquella persona que turbó la paz de tu alma, haciéndote pecar?; ¿Volverás a ser amable con aquella persona a quien miraste hasta hoy como enemiga?\n\nHijo mío, vuelve a tus ocupaciones habituales, a tu trabajo, a tu familia, a tu estudio... pero no olvides la grata conversación que hemos tenido aquí, en la soledad de la capilla. Ama a mi Madre, que es también tuya, la Virgen Santísima... y vuelve otra vez con el corazón más amoroso, más entregado a mi servicio. En cada jornada encontrarás cada día nuevo amor, nuevos beneficios, nuevos consuelos.'
  }
];

export default function AdoracionScreen() {
  const [oracionSeleccionada, setOracionSeleccionada] = useState<Oracion | null>(null);

  const renderTextoConTitulos = (texto: string) => {
    const partes = texto.split(/\[TITULO\](.*?)\[\/TITULO\]/g);
    return (
      <>
        {partes.map((parte, index) => {
          if (index % 2 === 1) {
            // Es un título
            return <Text key={index} style={styles.subtitulo}>{parte}</Text>;
          }
          // Es texto normal
          return <Text key={index} style={styles.oracionTexto}>{parte}</Text>;
        })}
      </>
    );
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: oracionSeleccionada ? oracionSeleccionada.titulo : 'Adoración al Santísimo',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {/* Introducción completa sobre la adoración al Santísimo Sacramento */}
          <Text style={[styles.oracionTexto, {color: '#222', marginBottom: 16}]}>“La Iglesia católica ha dado y continúa dando este culto de adoración que se debe al sacramento de la Eucaristía no solamente durante la misa, sino también fuera de su celebración: conservando con el mayor cuidado las hostias consagradas, presentándolas a los fieles para que las veneren con solemnidad, y las lleven en procesión.”</Text>
          <Text style={[styles.oracionTexto, {color: '#222', marginBottom: 16}]}>“El sagrario (tabernáculo) estaba al principio destinado a guardar dignamente la Eucaristía para que pudiera ser llevada a los enfermos y ausentes fuera de la misa. Por la profundización de la fe en la presencia real de Cristo en su Eucaristía, la Iglesia tomó conciencia del sentido de la adoración silenciosa del Señor presente bajo las especies eucarísticas”. (Cf. CEC 1379-1379).</Text>
          <Text style={styles.oracionTexto}>A pesar de que la Eucaristía ha sido instituida para ser comida, “no debe dejar de ser adorada”. El fundamento de la adoración eucarística es perfectamente válido y firme: la presencia real del Señor. Es culto de “latría”, el que “se debe al Dios verdadero”.</Text>
          <Text style={{fontWeight: 'bold', color: '#b71c1c', fontSize: 20, marginTop: 18, marginBottom: 10, textAlign: 'center'}}>Guía para la adoración del Santísimo Sacramento</Text>
          <Text style={styles.oracionTexto}>Tal vez hace mucho tiempo que no estás un rato a solas con Jesús en la capilla, o quizás ésta sea la primera vez que te dispones a rezar frente a Jesús expuesto en el Santísimo Sacramento. Por eso te ofrecemos una guía que puede servirte como orientación:</Text>
          <Text style={styles.oracionTexto}>Lo primero que te sugerimos es que te arrodilles delante de Jesús, lo mires sobre el altar y hagas una breve oración de adoración, en la que reconozcas toda su grandeza como verdadero Hijo de Dios hecho hombre, todo el amor que te ha manifestado a lo largo de tu vida y le pidas que sea Él mismo quien disponga tu corazón para poder escucharlo y aceptar sinceramente lo que Él quiera decirte.</Text>
          <Text style={styles.oracionTexto}>Ponte cómodo, si quieres te puedes sentar, mirarlo e imaginar que estás con Él en Galilea, cerca del lago, con los discípulos y rodeado de toda la gente que lo seguía. Es el mismo Jesús, bajo apariencia de pan, el que está delante tuyo. Imaginándote en ese lugar lee el Evangelio (Jn 6,1-13). Es un episodio conocido, pero aquí te invitamos a que te detengas a pensar algunos detalles:</Text>
          <Text style={styles.oracionTexto}>El que dio los panes y los pescados para alimentar a la muchedumbre era un muchacho. Le dio lo que tenía, no era mucho, pero era todo lo que tenía.</Text>
          <Text style={styles.oracionTexto}>Eran muchos lo que tenían hambre (5000 hombres), por eso se entiende la reflexión de Andrés: “¿Qué es esto para tanta gente?”</Text>
          <Text style={styles.oracionTexto}>Jesús toma lo que el muchacho le entrega y da de comer a todos y sobran pedazos todavía. Jesús hace un signo maravilloso a partir de la generosidad de un joven.</Text>
          <Text style={styles.oracionTexto}>Delante del mismo Jesús pregúntate:</Text>
          <Text style={{fontWeight: 'bold', marginLeft: 10, marginBottom: 4}}>¿Ves el "hambre" de la gente de este tiempo? (hambre material, de justicia, de Dios, de paz ...) ¿O estás cerrado en tus propios problemas?</Text>
          <Text style={{fontWeight: 'bold', marginLeft: 10, marginBottom: 4}}>¿Crees que Jesús puede hacer algo para sacar el "hambre" de la gente?</Text>
          <Text style={{fontWeight: 'bold', marginLeft: 10, marginBottom: 4}}>¿Te das cuenta de que tienes muchos "panes" que puedes darle a Jesús para que Él los multiplique?</Text>
          <Text style={{fontWeight: 'bold', marginLeft: 10, marginBottom: 16}}>¿Serías capaz de ofrecerle a Jesús tu vida en serio para que Él pueda contar contigo?</Text>
          <Text style={styles.oracionTexto}>Como todos sabemos que a veces nos resulta difícil encontrar las palabras para responder a Jesús y que las fuerzas que tenemos para cumplir nuestros compromisos son muy pocas, acompáñale con la respuesta que te salga del corazón o con la siguiente oración de acción de gracias de Santo Tomás de Aquino:</Text>
          <View style={{backgroundColor: '#f3f4f6', borderRadius: 8, padding: 12, marginVertical: 10}}>
            <Text style={{fontStyle: 'italic', fontSize: 17, marginBottom: 8}}>
              Te doy gracias, Señor, Padre santo, Dios todopoderoso y eterno, porque, aunque soy un siervo pecador y sin mérito alguno, has querido alimentarme misericordiosamente con el Cuerpo y la Sangre de tu Hijo, nuestro Señor Jesucristo.
            </Text>
            <Text style={{fontStyle: 'italic', fontSize: 17, marginBottom: 8}}>
              Que esta sagrada comunión no vaya a ser para mí ocasión de castigo, sino causa de perdón y salvación.
            </Text>
            <Text style={{fontStyle: 'italic', fontSize: 17, marginBottom: 8}}>
              Que sea para mí armadura de fe, escudo de buena voluntad; que me libre de todos mis vicios y me ayude a superar mis pasiones desordenadas; que aumente mi caridad y mi paciencia, mi obediencia y mi humildad y mi capacidad para hacer el bien.
            </Text>
            <Text style={{fontStyle: 'italic', fontSize: 17, marginBottom: 8}}>
              Que sea defensa inexpugnable contra todos mis enemigos, visibles e invisibles, y guía de todos mis impulsos y deseos.
            </Text>
            <Text style={{fontStyle: 'italic', fontSize: 17, marginBottom: 8}}>
              Que me una más íntimamente a ti, el único y verdadero Dios, y me conduzca con seguridad al banquete del cielo, donde tú, con tu Hijo y el Espíritu Santo, eres luz verdadera, satisfacción cumplida, gozo perdurable y felicidad perfecta.
            </Text>
            <Text style={{fontStyle: 'italic', fontSize: 17, marginBottom: 8}}>
              Por Cristo, nuestro Señor. Amén.
            </Text>
          </View>
          <Text style={styles.oracionTexto}>Para terminar tu adoración puedes abrir tu corazón al Señor pidiendo lo que necesites y especialmente, rezar por las intenciones de la Iglesia y del Santo Padre, tu familia y tus necesidades.</Text>
          {oracionSeleccionada ? (
            <View style={styles.oracionDetalle}>
              <Text style={styles.oracionTitulo}>{oracionSeleccionada.titulo}</Text>
              {renderTextoConTitulos(oracionSeleccionada.texto)}
              <TouchableOpacity 
                style={styles.botonVolver}
                onPress={() => setOracionSeleccionada(null)}
              >
                <Text style={styles.botonVolverTexto}>Volver al listado</Text>
              </TouchableOpacity>
            </View>
          ) : (
            oraciones.map((oracion) => (
              <TouchableOpacity 
                key={oracion.id}
                style={styles.oracionItem}
                onPress={() => setOracionSeleccionada(oracion)}
              >
                <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
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
  oracionItem: {
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
  oracionItemTitulo: {
    fontSize: 22,
    color: Colors.primary,
    textAlign: 'center',
  },
  oracionDetalle: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
  oracionTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  oracionTexto: {
    fontSize: 17,
    lineHeight: 30,
    textAlign: 'justify',
  },
  botonVolver: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  botonVolverTexto: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 