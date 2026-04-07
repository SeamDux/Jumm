import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function PrimerViernesScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Devoción del primer viernes',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Devoción del primer viernes de mes al Sagrado Corazón de Jesús</Text>
          
          <Text style={styles.texto}>
            "La oración de la Iglesia venera y honra al Corazón de Jesús, como invoca su Santísimo Nombre. Adora al Verbo encarnado y a su Corazón que, por amor a los hombres, se dejó traspasar por nuestros pecados" (CEC 2669).
          </Text>

          <Text style={styles.texto}>
            La devoción al Sagrado Corazón de Jesús es muy antigua en la Iglesia; sin embargo, fue Santa Margarita María de Alacoque quien la popularizó. Jesús se le apareció durante la octava de la fiesta de Corpus Christi y le dijo: "Mira este corazón que tanto ha amado a los hombres, que no ha omitido nada hasta agotarse y consumirse para demostrarles su amor. Y en reconocimiento no recibe de los cristianos otra cosa que sacrilegio, desprecio, indiferencia e ingratitud, aún en el mismo sacramento de mi amor. Pero lo que traspasa mi Corazón más desgarradoramente es que estos insultos los recibo de personas consagradas especialmente a mi servicio" (Santa Margarita María de Alacoque, Autobiografía).
          </Text>

          <Text style={styles.texto}>
            Nuestro Señor hizo grandes promesas a aquellos que le demuestran su amor y hacen expiación por los pecados propios y ajenos: "Yo prometo en la excesiva misericordia de mi Corazón, que mi amor todopoderoso concederá a todos los que comulguen los nueve primeros viernes consecutivos la gracia de la perseverancia final: no morirán en mi desgracia ni sin recibir los Sacramentos, haciéndose mi Corazón su asilo seguro en aquella última hora" (Ibídem).
          </Text>

          <Text style={styles.texto}>
            La gran promesa del Sagrado Corazón de Jesús es muy consoladora: la gracia de la perseverancia final y el gozo de encontrar en su Sacratísimo Corazón un refugio seguro de misericordia en nuestra última hora.
          </Text>

          <Text style={styles.subtitulo}>Para ganar esta gracia debemos:</Text>

          <Text style={styles.texto}>
            • Recibir sin interrupción la Sagrada Comunión durante nueve primeros viernes consecutivos.{'\n\n'}
            • Tener la intención de honrar al Sagrado Corazón de Jesús y de alcanzar la perseverancia final.{'\n\n'}
            • Ofrecer cada Sagrada Comunión como un acto de expiación por las ofensas cometidas contra el Santísimo Sacramento.
          </Text>

          <Text style={styles.subtitulo}>Oración</Text>

          <Text style={styles.oracion}>
            Oh Dios,{'\n'}
            que en el corazón de tu Hijo,{'\n'}
            herido por nuestros pecados,{'\n'}
            has depositado infinitos tesoros de caridad;{'\n'}
            te pedimos que,{'\n'}
            al rendirle el homenaje de nuestro amor,{'\n'}
            le ofrezcamos una cumplida reparación.{'\n'}
            Por Jesucristo nuestro Señor.{'\n'}
            R. Amén.
          </Text>

          <Text style={styles.subtitulo}>Lectura Bíblica S. Juan 19:31-37</Text>

          <Text style={styles.texto}>
            "Los judíos, como era el día de la Parasceve, para que no quedasen los cuerpos en la cruz el día del sábado, por ser día grande aquel sábado, rogaron a Pilato que les rompiesen las piernas y los quitasen. Vinieron, pues, los soldados y rompieron las piernas al primero y al otro que estaba crucificado con Él; pero llegando a Jesús, como le vieron ya muerto, no le rompieron las piernas, sino que uno de los soldados le atravesó con su lanza el costado, y al instante salió sangre y agua. El que lo vio da testimonio, y su testimonio es verdadero; él sabe que dice verdad para que vosotros creáis, porque esto sucedió para que se cumpliese la Escritura: "No romperéis ni uno de sus huesos". Y otra Escritura dice también: "Mirarán al que traspasaron"."
          </Text>

          <Text style={styles.subtitulo}>Consideraciones para meditar</Text>
          <Text style={styles.texto}>(Extractos de la homilía de San Josemaría Escrivá, El Corazón de Cristo, Paz de los cristianos, en Es Cristo que pasa).</Text>

          <Text style={styles.texto}>
            1. El amor se nos revela en la Encarnación, en ese andar redentor de Jesucristo por nuestra tierra, hasta el sacrificio supremo de la Cruz. Y, en la Cruz, se manifiesta con un nuevo signo: uno de los soldados abrió a Jesús el costado con una lanza, y al instante salió sangre y agua. Agua y sangre de Jesús que nos hablan de una entrega realizada hasta el último extremo, hasta el consummatum est, el todo está consumado, por amor.
          </Text>

          <Text style={styles.texto}>
            La plenitud de Dios se nos revela y se nos da en Cristo, en el amor de Cristo, en el Corazón de Cristo. Porque es el Corazón de Aquel en quien habita toda la plenitud de la divinidad corporalmente. Por eso, si se pierde de vista este gran designio de Dios —la corriente de amor instaurada en el mundo por la Encarnación, por la Redención y por la Pentecostés—, no se comprenderán las delicadezas del Corazón del Señor.
          </Text>

          <Text style={styles.texto}>
            2. Tengamos presente toda la riqueza que se encierra en estas palabras. Cuando hablamos del corazón humano no nos referimos sólo a los sentimientos, aludimos a toda la persona que quiere, que ama y que trata a los demás. Y, en el modo de expresarse los hombres, que han inventado la palabra corazón para que podamos entender así las cosas divinas, el corazón es considerado como el resumen y la fuente, la expresión y el fondo último de los pensamientos, de las palabras, de las acciones. Un hombre vale lo que vale su corazón, podemos decir con lenguaje nuestro.
          </Text>

          <Text style={styles.texto}>
            Por eso, al tratar ahora del Corazón de Jesús, ponemos de manifiesto la certidumbre del amor de Dios y la verdad de su entrega a nosotros. Al recomendar la devoción a ese Sagrado Corazón, estamos recomendando que debemos dirigirnos íntegramente —con todo lo que somos: nuestra alma, nuestros sentimientos, nuestros pensamientos, nuestras palabras y nuestras acciones, nuestros trabajos y nuestras alegrías— a Jesús.
          </Text>

          <Text style={styles.texto}>
            En esto se concreta la verdadera devoción al Corazón de Jesús: en conocer a Dios y conocernos a nosotros mismos, y en mirar a Jesús y acudir a Él, que nos anima, nos enseña, nos guía. No cabe en esta devoción más superficialidad que la del hombre que no sabido únicamente humano, no acierta a percibir la realidad de Dios encarnado.
          </Text>

          <Text style={styles.texto}>
            3. Jesús en la Cruz, con el corazón traspasado de Amor por los hombres, es una respuesta elocuente —sobran las palabras— a la pregunta por el valor de las cosas y de las personas. Valen tanto los hombres, su vida y su felicidad, que el mismo Hijo de Dios se entrega para redimirlos, para limpiarlos, para elevarlos. ¿Quién no amará a su Corazón tan herido? ¿Quién no seguirá preguntando: cuándo lo devolveremos amor por amor, abrazaremos a nuestro herido, al que los impíos atravesaron manos y pies, el costado y Corazón. Pidamos que se digne herir nuestro corazón con el vínculo de su amor y herido con una lanza. Porque es aún impenitente. Pero fíjate en que Dios no nos declara: en lugar del corazón, os daré una voluntad de puro espíritu. No nos da un corazón, y un corazón de carne, como el de Cristo. Yo no cuento con un corazón para amar a Dios, y con otro para amar a las personas de la tierra. Con el mismo corazón con el que he querido a mis padres y quiero a mis amigos, con ese mismo corazón amo a Cristo, y al Padre, y al Espíritu Santo y a Santa María. No me cansaré de repetirlo: tenemos que ser muy humanos; porque, de otro modo, tampoco podremos ser divinos.
          </Text>

          <Text style={styles.texto}>
            Si no aprendemos de Jesús, no amaremos nunca. Si pensamos, como algunos, que conservar un corazón limpio, digno de Dios, significa no mezclarlo con afectos humanos, entonces el resultado lógico será que seremos incapaces de tener una verdadera caridad de Jesucristo, que es cariño, caridad humana. Con eso no doy pie a falsas teorías, que son tristes excusas para desviar los corazones —apartándolos de Dios—, y llevarlos a malas ocasiones y a la perdición.
          </Text>

          <Text style={styles.texto}>
            4. Pero he de proponeros además otra consideración: que hemos de luchar sin desmayo por el bien, precisamente porque sabemos que es difícil que los hombres nos decidamos seriamente a ejercitar la justicia, y es mucho lo que falta para que la convivencia terrena esté inspirada por el amor, y no por el odio o la indiferencia. No se nos oculta tampoco que, aunque consigamos llegar a una razonable distribución de los bienes y a una armoniosa organización de la sociedad, no desaparecerá el dolor de la enfermedad, el de la incomprensión o el de la soledad, el de la muerte de las personas que amamos, el de la propia limitación.
          </Text>

          <Text style={styles.texto}>
            Ante esas pesadumbres, el cristiano sólo tiene una respuesta auténtica, una respuesta que es definitiva: Cristo en la Cruz, Dios que sufre y que muere, Dios que nos entrega su Corazón, que una lanza abrió por amor a todos. Nuestro Señor abomina de las injusticias, y condena a los que las comete. Pero, como respeta la libertad de cada individuo, permite que las haya. Dios Nuestro Señor no causa el dolor de las criaturas, pero lo toleró porque —después del pecado original— forma parte de la condición humana. Sin embargo, su Corazón lleno de Amor por los hombres se hizo cargo sobre sí, con la Cruz, todas esas penas: nuestro sufrimiento, nuestra tristeza, nuestra angustia, nuestro hambre y sed de justicia.
          </Text>

          <Text style={styles.texto}>
            El dolor entra en los planes de Dios. Esa es la realidad, aunque nos cueste entenderla. También, como Hombre, le costó a Jesucristo soportarla: Padre, si quieres, aleja de mí este cáliz; pero no se haga mi voluntad, sino la tuya. En esta tensión de súplica y de aceptación de la voluntad del Padre, Jesús va a la muerte serenamente, perdonando a los que le crucifican.
          </Text>

          <Text style={styles.texto}>
            Precisamente, esa admisión sobrenatural del dolor supone, al mismo tiempo, la mayor conquista. Jesús, muriendo en la Cruz, ha vencido la muerte: Dios saca, de la muerte, vida. La actitud de un hijo de Dios no es la de quien se resigna a su trágica desventura, es la satisfacción de quien pregunta ya la victoria. En nombre de ese amor victorioso de Cristo, los cristianos debemos lanzarnos por todos los caminos de la tierra, para ser sembradores de paz y de alegría con nuestra palabra y con nuestras obras. Hemos de luchar —lucha de paz— contra el mal, contra la injusticia, contra el pecado, para proclamar así que la actual condición humana no es la definitiva; que el amor de Dios, manifestado en el Corazón de Cristo, alcanzará el glorioso triunfo espiritual de los hombres.
          </Text>

          <Text style={styles.subtitulo}>Acto de confianza en el Sagrado Corazón</Text>

          <Text style={styles.oracion}>
            Oh, Corazón de Jesús, Dios y Hombre verdadero, delicia de los Santos, refugio de los pecadores y esperanza de los que en Ti confían; Tú nos dices amablemente: Vengan a Mí; y nos repites las palabras que dijiste al paralítico: Confía, hijo mío, tus pecados te son perdonados, y a la mujer enferma: Confía, hija, tu fe te ha salvado, y a los Apóstoles: Confíen, Yo Soy, no teman.
          </Text>

          <Text style={styles.oracion}>
            Animado con estas palabras acudo a Ti con el corazón lleno de confianza, para decirte sinceramente y desde lo más íntimo de mi alma: Corazón de Jesús en Ti confío.
          </Text>

          <Text style={styles.oracion}>
            Sí, Corazón de mi amable Jesús, confío y confiaré siempre en tu bondad; y por el Corazón de tu Madre, te pido que no desfallezca nunca esta confianza en Ti, a pesar de todas las contrariedades y de todas las pruebas que Tú quisieras enviarme, para que habiendo sido mi consuelo en vida, seas mi refugio en la hora de la muerte y mi gloria en la eternidad. Amén.
          </Text>
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 20,
    marginBottom: 10,
  },
  texto: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
  oracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: '#000000',
  },
}); 