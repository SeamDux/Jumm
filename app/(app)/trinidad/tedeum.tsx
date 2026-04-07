import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { Stack } from 'expo-router';
import Colors from '../../../constants/Colors';

export default function TeDeumScreen() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Te Deum',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Te Deum</Text>
          
          <Text style={styles.text}>
            Himno de alabanza compuesto en latín al principio del siglo V D.C. Se ha recitado o cantado desde el siglo VI como parte del Oficio Divino y como acción de gracias.
          </Text>

          <Text style={styles.prayer}>
            1. A Ti, oh Dios, te alabamos;{'\n'}
            a Ti, Señor, te reconocemos.{'\n\n'}
            2. A Ti, Eterno Padre,{'\n'}
            te venera toda la creación.{'\n\n'}
            3. Los ángeles todos,{'\n'}
            los cielos y todas las potestades te honran.{'\n\n'}
            4. Los querubines y serafines{'\n'}
            te cantan sin cesar:{'\n\n'}
            5. Santo, Santo, Santo,{'\n'}
            es el Señor Dios del Universo.{'\n\n'}
            6. Los cielos y la tierra están llenos{'\n'}
            de la majestad de tu gloria.{'\n\n'}
            7. A Ti te ensalza{'\n'}
            el glorioso coro de los Apóstoles,{'\n\n'}
            8. A Ti te ensalza{'\n'}
            la multitud admirable de los Profetas,{'\n\n'}
            9. A Ti te ensalza{'\n'}
            el blanco ejército de los Mártires.{'\n\n'}
            10. A Ti la Iglesia Santa extendida por toda la tierra,{'\n'}
            te proclama:{'\n\n'}
            11. Padre{'\n'}
            de inmensa majestad,{'\n\n'}
            12. Hijo único y verdadero,{'\n'}
            digno de adoración,{'\n\n'}
            13. Espíritu Santo{'\n'}
            Paráclito.{'\n\n'}
            14. Tú eres el Rey de la gloria,{'\n'}
            Cristo.{'\n\n'}
            15. Tú eres el Hijo único{'\n'}
            del Padre.{'\n\n'}
            16. Tú, para liberar al hombre,{'\n'}
            aceptaste la condición humana,{'\n'}
            sin desdeñar el seno de la Virgen.{'\n\n'}
            17. Tú, rotas las cadenas de la muerte,{'\n'}
            abriste a los creyentes el Reino del Cielo.{'\n\n'}
            18. Tú te sientas a la derecha de Dios{'\n'}
            en la gloria del Padre.{'\n\n'}
            19. Creemos que un día{'\n'}
            has de venir como Juez.{'\n\n'}
            20. Te rogamos, pues, que vengas{'\n'}
            en ayuda de tus siervos,{'\n'}
            a quienes redimiste con tu preciosa Sangre.{'\n\n'}
            21. Haz que en la gloria eterna{'\n'}
            nos asociemos a tus Santos.{'\n\n'}
            22. Salva a tu pueblo,{'\n'}
            Señor, y bendice tu heredad.{'\n\n'}
            23. Sé su Pastor{'\n'}
            y ensálzalo eternamente.{'\n\n'}
            24. Día tras día{'\n'}
            te bendecimos.{'\n\n'}
            25. Y alabamos tu Nombre para siempre,{'\n'}
            por eternidad de eternidades.{'\n\n'}
            26. Dígnate, Señor, en este día{'\n'}
            guardarnos del pecado.{'\n\n'}
            27. Ten piedad de nosotros,{'\n'}
            Señor, ten piedad de nosotros.{'\n\n'}
            28. Que tu misericordia, Señor,{'\n'}
            venga sobre nosotros, como lo esperamos de Ti.{'\n\n'}
            29. En Ti, Señor, confié,{'\n'}
            no me vea defraudado para siempre.
          </Text>

          <Text style={styles.category}>Versículos finales</Text>
          <Text style={styles.prayer}>
            V. Bendito eres, Señor, Dios de nuestros padres.{'\n'}
            R. Y digno de alabanza, y glorioso por los siglos.{'\n\n'}
            V. Bendigamos al Padre, y al Hijo con el Espíritu Santo.{'\n'}
            R. Alabémosle y ensalcémosle por todos los siglos.{'\n\n'}
            V. Bendito eres Señor en lo más alto del cielo.{'\n'}
            R. Y digno de alabanza, y glorioso y ensalzado por todos los siglos.{'\n\n'}
            V. Bendice, alma mía, al Señor.{'\n'}
            R. Y nunca olvides sus muchos beneficios.{'\n\n'}
            V. Señor, escucha mi oración.{'\n'}
            R. Y llegue a Ti mi clamor.{'\n\n'}
            Los sacerdotes añaden:{'\n'}
            V. El Señor esté con ustedes.{'\n'}
            R. Y con tu espíritu.
          </Text>

          <Text style={styles.category}>Oremos</Text>
          <Text style={styles.prayer}>
            Oh Dios, cuya misericordia no tiene número, y los tesoros de tu bondad son infinitos: damos gracias a tu piadosa Majestad por los dones recibidos, rogando siempre a tu clemencia que, pues concedes lo pedido en la oración, no nos desampares, sino que nos hagas dignos de los premios futuros.{'\n\n'}
            Oh Dios, que has instruido los corazones de los fieles con la luz del Espíritu Santo, concédenos según el mismo Espíritu conocer las cosas rectas y gozar siempre de sus divinos consuelos.{'\n\n'}
            Oh Dios, que no permites sea afligido en demasía cualquiera que en Ti espera, sino que atiendes piadoso a nuestras súplicas: te damos gracias por haber aceptado nuestras peticiones y votos, suplicándote piadosísimamente que merezcamos vernos libres de toda adversidad. Por nuestro Señor Jesucristo...{'\n\n'}
            R. Amén.
          </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: Colors.primary,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
    fontStyle: 'italic',
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: Colors.secondary,
  },
  prayer: {
    fontSize: 16,
    lineHeight: 24,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
}); 