import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Oracion } from '../../types';
import { Stack, Link } from 'expo-router';

const oraciones: Oracion[] = [
  {
    id: 'senal-cruz',
    titulo: 'Señal de la Cruz',
    texto: 'Por la señal de la Santa Cruz, de nuestros enemigos líbranos Señor, Dios nuestro.\n\nEn el nombre del Padre, y del Hijo, y del Espíritu Santo.\nAmén.'
  },
  {
    id: 'acto-contricion',
    titulo: 'Acto de Contrición',
    texto: 'Señor mío Jesucristo, Dios y hombre verdadero, Creador, Padre y Redentor mío: por ser Tu quien eres, Bondad infinita, y porque te amo sobre todas las cosas, me pesa de todo corazón haberte ofendido. También me pesa que puedas castigarme con las penas del infierno. Ayudado de Tu divina gracia, propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me fuera impuesta. Amén'
  },
  {
    id: 'ofrecimiento-obras',
    titulo: 'Ofrecimiento de Obras del día',
    texto: 'Sagrado Corazón de Jesús, por medio del Corazón Inmaculado de María Santísima, yo me consagro a ti, y contigo me ofrezco a Dios Padre en el Santo Sacrificio del Altar, con todos mis trabajos, oraciones, sufrimientos y alegrías de este día, en reparación por nuestros pecados, y para que venga a nosotros tu reino. Amén.'
  },
  {
    id: 'padre-nuestro',
    titulo: 'Padre Nuestro',
    texto: 'Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.'
  },
  {
    id: 'ave-maria',
    titulo: 'Ave María',
    texto: 'Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.'
  },
  {
    id: 'gloria',
    titulo: 'Gloria',
    texto: 'Gloria al Padre y al Hijo y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.'
  },
  {
    id: 'credo',
    titulo: 'Credo',
    texto: 'Creo en Dios, Padre todopoderoso, Creador del cielo y de la tierra. Creo en Jesucristo, su único Hijo, nuestro Señor, que fue concebido por obra y gracia del Espíritu Santo, nació de Santa María Virgen, padeció bajo el poder de Poncio Pilato, fue crucificado, muerto y sepultado, descendió a los infiernos, al tercer día resucitó de entre los muertos, subió a los cielos y está sentado a la derecha de Dios, Padre todopoderoso. Desde allí ha de venir a juzgar a vivos y muertos. Creo en el Espíritu Santo, la santa Iglesia católica, la comunión de los santos, el perdón de los pecados, la resurrección de la carne y la vida eterna. Amén.'
  },
  {
    id: 'angelus',
    titulo: 'Ángelus',
    texto: 'V. El Ángel del Señor anunció a María.\nR. Y concibió del Espíritu Santo.\n\nDios te salve, María...\n\nV. He aquí la esclava del Señor.\nR. Hágase en mí según tu palabra.\n\nDios te salve, María...\n\nV. Y el Verbo se hizo carne.\nR. Y habitó entre nosotros.\n\nDios te salve, María...\n\nV. Ruega por nosotros, Santa Madre de Dios.\nR. Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo.\n\nOración:\n\nTe suplicamos, Señor, que derrames tu gracia en nuestras almas para que los que, por el anuncio del Ángel, hemos conocido la Encarnación de tu Hijo Jesucristo, por su Pasión y Cruz seamos llevados a la gloria de su Resurrección. Por el mismo Jesucristo Nuestro Señor.\n\nR. Amén'
  },
  {
    id: 'yo-confieso',
    titulo: 'Yo Confieso',
    texto: 'Yo confieso ante Dios Todopoderoso, y ante ustedes hermanos, que he pecado mucho, de pensamiento, palabra, obra y omisión. Por mi culpa, por mi culpa, por mi gran culpa. Por eso ruego a Santa María siempre Virgen, a los ángeles, a los santos y a ustedes hermanos, que intercedan por mí ante Dios, Nuestro Señor. Amén.'
  },
  {
    id: 'oracion-papa',
    titulo: 'Oración por el Papa',
    texto: 'Oremos por el Santo Padre N.\n\nEl Señor le conserve y le llene de vida, y le haga bienaventurado en la tierra, y no le deje caer en manos de sus enemigos. Amén.\n\nDios nuestro, pastor y guía de todos los fieles,\nmira con bondad a tu hijo (nombre del Papa)\na quien constituiste pastor de tu Iglesia,\ny sostenlo con tu amor,\npara que con su palabra y su ejemplo\nconduzca al pueblo que le has confiado\ny llegue, juntamente con él, a la vida eterna.\nPor nuestro Señor Jesucristo, tu Hijo,\nque vive y reina contigo en la unidad del Espíritu Santo.\nAmén.'
  },
  {
    id: 'regina-coeli',
    titulo: 'Regina Coeli - Alegrate Reina del Cielo (Tiempo Pascual)',
    texto: 'V. Alégrate, Reina del cielo; aleluya,\nR. Porque el que mereciste llevar en tu seno; aleluya,\n\nV. Ha resucitado, según predijo; aleluya,\nR. Ruega por nosotros a Dios; aleluya,\n\nV. Gózate y alégrate, Virgen María; aleluya,\nR. Porque ha resucitado Dios verdaderamente; aleluya.\n\nOración\n\nOh Dios, que por la resurrección de tu Hijo, nuestro Señor Jesucristo, te has dignado dar la alegría al mundo, concédenos que por su Madre, la Virgen María, alcancemos el gozo de la vida eterna. Por el mismo Cristo nuestro Señor. Amén.'
  },
  {
    id: 'vocaciones-sacerdotales',
    titulo: 'Oración por las Vocaciones Sacerdotales',
    texto: 'Divino Jesús, que quieres que pidamos al Señor de la mies que envíe ella buenos operarios, dígnate suscitar en tu Iglesia y en particular en esta Diócesis, muchos y santos Sacerdotes que siéndolo en todo según tu Corazón procuren celosamente por su sagrado ministerio, la gloria de tu Padre celestial y la salvación de las almas redimidas por tu Sangre Preciosa. Amén.'
  },
  {
    id: 'vocaciones-religiosas',
    titulo: 'Oración por las Vocaciones Religiosas',
    texto: 'Espíritu Santo, en la unidad del Padre y del Hijo, te pedimos, nos concedas muchas y santas vocaciones a la vida consagrada. Que muchos jóvenes por la profesión de los consejos evangélicos, siguiendo más de cerca a Cristo y bajo tu transformante acción, se dediquen totalmente a Dios como a su amor supremo, y consigan la perfección de la caridad en el servicio del reino de Dios, procurando la gloria, la edificación de la Iglesia y la salvación del mundo, siendo signos preanunciadores en la tierra de la gloria celestial. Amén'
  },
  {
    id: 'oracion-lluvia',
    titulo: 'Oración por la Lluvia',
    texto: 'Dios nuestro en quien vivimos, nos movemos y existimos; te pedimos que nos concedas la lluvia necesaria para que, ayudados por los bienes de la tierra, anhelemos con más confianza los bienes eternos.\n\nPor nuestro Señor Jesucristo, tu Hijo, que vive y reina contigo en la unidad del Espíritu Santo, y es Dios, por los siglos de los siglos. Amén'
  },
  {
    id: 'angel-guarda',
    titulo: 'Ángel de la Guarda',
    texto: 'Ángel de mi guarda, dulce compañía, no me desampares ni de noche ni de día, ni en la hora de mi muerte. Amén.'
  }
];

export default function OracionesScreen() {
  const [oracionSeleccionada, setOracionSeleccionada] = useState<Oracion | null>(null);

  return (
    <>
      <Stack.Screen 
        options={{
          title: oracionSeleccionada ? oracionSeleccionada.titulo : 'Oraciones de Siempre',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {oracionSeleccionada ? (
            <View style={styles.oracionDetalle}>
              <Text style={styles.oracionTitulo}>{oracionSeleccionada.titulo}</Text>
              <Text style={styles.oracionTexto}>{oracionSeleccionada.texto}</Text>
              <TouchableOpacity 
                style={styles.botonVolver}
                onPress={() => setOracionSeleccionada(null)}
              >
                <Text style={styles.botonVolverTexto}>Volver al listado</Text>
              </TouchableOpacity>
            </View>
          ) : (
            oraciones.map((oracion) => (
              oracion.id === 'padre-nuestro' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/padre-nuestro" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'ave-maria' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/ave-maria" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'acto-contricion' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/acto-contricion" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'gloria' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/gloria" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'credo' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/credo" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'senal-cruz' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/senal-cruz" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'ofrecimiento-obras' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/ofrecimiento-obras" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'angelus' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/angelus" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'yo-confieso' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/yo-confieso" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'oracion-papa' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/oracion-papa" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'regina-coeli' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/regina-coeli" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'vocaciones-sacerdotales' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/vocaciones-sacerdotales" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'vocaciones-religiosas' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/vocaciones-religiosas" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'oracion-lluvia' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/oracion-lluvia" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) :
              oracion.id === 'angel-guarda' ? (
                <Link key={oracion.id} href="/(app)/oraciones-siempre/angel-guarda" asChild>
                  <TouchableOpacity style={styles.oracionItem}>
                    <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                  </TouchableOpacity>
                </Link>
              ) : (
                <TouchableOpacity 
                  key={oracion.id}
                  style={styles.oracionItem}
                  onPress={() => setOracionSeleccionada(oracion)}
                >
                  <Text style={styles.oracionItemTitulo}>{oracion.titulo}</Text>
                </TouchableOpacity>
              )
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
  oracionTexto: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
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