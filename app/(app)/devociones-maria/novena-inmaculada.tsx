import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

interface DiaNovena {
  dia: number;
  titulo: string;
  oracion: string;
}

const diasNovena: DiaNovena[] = [
  {
    dia: 1,
    titulo: 'María, nueva Eva',
    oracion: '[TITULO]Novena a la Inmaculada Concepción[/TITULO]\n\nEl Papa Pío IX instituyó esta celebración cuando proclamó el dogma de la Inmaculada Concepción el 8 de Diciembre de 1854: "La bienaventurada Virgen María fue preservada inmune de toda mancha de pecado original en el primer instante de su concepción por singular gracia y privilegio de Dios omnipotente, en atención a los méritos de Jesucristo, Salvador del género humano".\n\nEn esa definición, Pío IX expresa con precisión el significado de esta verdad de fe: que María fue concebida libre de la mancha del pecado original. Esta fiesta ha sido celebrada desde el siglo VIII en Oriente y en muchas partes de Occidente. El Catecismo de la Iglesia Católica explica:\n\n"Para ser la Madre del Salvador, María fue "dotada por Dios con dones a la medida de una misión tan importante". En el momento de la anunciación, el ángel Gabriel la saludó como "llena de gracia" (Lucas 1, 28). En efecto, para poder dar el asentimiento libre de su fe al anuncio de su vocación era preciso que ella estuviese totalmente poseída por la gracia de Dios. A lo largo de los siglos, la Iglesia ha tomado conciencia de que María, "llena de gracia" por Dios, (Lucas 1, 28) había sido redimida desde su concepción.\n\n"Esa "resplandeciente santidad del todo singular" de la que ella fue "enriquecida desde el primer instante de su concepción", le viene toda entera de Cristo: ella es "redimida de la manera más sublime en atención a los méritos de su Hijo". El Padre la ha "bendecido con toda clase de bendiciones espirituales, en los cielos, en Cristo" más que a ninguna otra persona creada. Él la ha "elegido en él antes de la creación del mundo para ser santa e inmaculada en su presencia, en el amor".\n\n"Los Padres de la tradición oriental llaman a la Madre de Dios "la Toda Santa" ("Panagia"), la celebran "como inmune de toda mancha de pecado y como plasmada por el Espíritu Santo y hecha una nueva criatura". Por la gracia de Dios, María ha permanecido pura de todo pecado personal a lo largo de toda su vida".\n\nLos textos de las consideraciones siguientes están tomados, en parte, de Juan Pablo II, Encíclica Madre del Redentor, 1987.\n\n[TITULO]Primer Día[/TITULO]\n[TITULO]29 DE NOVIEMBRE[/TITULO]\n[TITULO]María, nueva Eva[/TITULO]\n\n[TITULO]Oración[/TITULO]\nEl mismo Espíritu Santo,\nque formó a la Virgen María como nueva criatura,\npara que de ella, inundada del rocío celestial,\nnaciera Jesucristo, tu Hijo, el fruto de la bendición,\nsantifique ahora, Señor, nuestros dones.\nPor Jesucristo, nuestro Señor.\n\n[TITULO]Lectura Bíblica Génesis 3:1-6, 13-15[/TITULO]\nPero la serpiente, la más astuta de cuantas bestias del campo hiciera el Señor Dios, dijo a la mujer: "¿Conque os ha mandado Dios que no comáis de los árboles todos del paraíso?" Y respondió la mujer a la serpiente: "Del fruto de los árboles del paraíso comemos, pero del fruto del que está en medio del paraíso nos ha dicho Dios: "No comáis de él ni lo toquéis siquiera, no vayáis a morir". Y dijo la serpiente a la mujer: "No, no moriréis; es que sabe Dios que el día que de él comáis se os abrirán los ojos y seréis como Dios, conocedores del bien y del mal". Vio, pues, la mujer que el árbol era bueno para comerse, hermoso a la vista y deseable para alcanzar por él sabiduría, y tomó de su fruto y comió, y dio también de él a su marido, que también con ella comió.\n\nDijo, pues, el Señor Dios a la mujer: "¿Por qué has hecho eso?" Y contestó la mujer: "La serpiente me engañó y comí". Dijo luego el Señor Dios a la serpiente:\n"Por haber hecho esto,\nMaldita serás entre todas las bestias\nY entre todos los animales del campo.\nTe arrastrarás sobre tu pecho\nY comerás el polvo todo el tiempo de tu vida.\nPongo perpetua enemistad entre ti y la mujer\nY entre tu linaje y el suyo:\nÉste te aplastará la cabeza\nY tú le mordisquearás el calcañal".\n\n[TITULO]Consideración[/TITULO]\nMaría, Madre del Verbo encarnado, está situada en el centro mismo de aquella "enemistad", de aquella lucha que acompaña la historia de la humanidad en la tierra y la historia misma de la salvación.\n\nEn este lugar ella, que pertenece a los "humildes y pobres del Señor", lleva en sí, como ningún otro entre los seres humanos, aquella "gloria de la gracia" que el Padre "nos agració en el Amado", y esta gracia determina la extraordinaria grandeza y belleza de todo su ser. María permanece así ante Dios, y también ante la humanidad entera, como el signo inmutable e inviolable de la elección por parte de Dios, de la que habla la Carta paulina: "Nos ha elegido en él (Cristo) antes de la fundación del mundo, ... eligiéndonos de antemano para ser sus hijos adoptivos" (Ef 1, 4,5).\n\nEsta elección es más fuerte que toda experiencia del mal y del pecado, de toda aquella "enemistad" con la que ha sido marcada la historia del hombre. En esta historia María sigue siendo una señal de esperanza segura.\n\nPara concluir, se puede rezar el Rosario y la Letanía Lauretana o la siguiente oración:\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque por la Concepción Inmaculada de la Virgen María\npreparaste a tu Hijo una digna morada,\ny en previsión de la muerte de tu Hijo\nla preservaste de todo pecado,\nconcédenos por su intercesión\nllegar a ti limpios de todas nuestras culpas.\nPor nuestro Señor Jesucristo.'
  },
  {
    dia: 2,
    titulo: 'María, llena de gracia',
    oracion: '[TITULO]Segundo Día[/TITULO]\n[TITULO]30 DE NOVIEMBRE[/TITULO]\n[TITULO]María, llena de gracia[/TITULO]\n\n[TITULO]Oración[/TITULO]\nDios todopoderoso,\nque, según lo anunciaste por el ángel, has querido\nque tu Hijo se encarnara en el seno de María, la Virgen,\nescucha nuestras súplicas\ny haz que sintamos la protección de María\nporque la proclamamos verdadera Madre de Dios.\nPor nuestro Señor Jesucristo.\n\n[TITULO]Lectura Bíblica Lucas 1:26-33[/TITULO]\nEn el mes sexto fue enviado el ángel Gabriel de parte de Dios a una ciudad de Galilea llamada Nazaret, a una virgen desposada con un varón de nombre José, de la casa de David; el nombre de la virgen era María. Y presentándose a ella, le dijo: Salve, llena de gracia, el Señor es contigo. Ella se turbó al oír estas palabras y discurría qué podría significar aquella salutación. El ángel le dijo: No temas, María, porque has hallado gracia delante de Dios, y concebirás en tu seno y darás a luz un hijo a quien pondrás por nombre Jesús. Él será grande y llamado Hijo del Altísimo, y le dará el Señor Dios el trono de David, su padre, y reinará en la casa de Jacob por los siglos, y su reino no tendrá fin.\n\n[TITULO]Consideración[/TITULO]\nCuando leemos que el mensajero dice a María "llena de gracia", el contexto evangélico, en el que confluyen revelaciones y promesas antiguas, nos da a entender que se trata de una bendición singular entre todas las "bendiciones espirituales en Cristo".\n\nEn el misterio de Cristo María está presente ya "antes de la creación del mundo" como aquella que el Padre "ha elegido" como Madre de su Hijo en la Encarnación, y junto con el Padre la ha elegido el Hijo, confiándola eternamente al Espíritu de santidad. María está unida a Cristo de un modo totalmente especial y excepcional, e igualmente es amada en este "Amado" eternamente, en este Hijo consustancial al Padre, en el que se concentra toda "la gloria de la gracia". A la vez, ella está y sigue siendo abierta perfectamente a este "don de lo alto" (cf. Santiago 1, 17). Como enseña el Concilio, María "sobresale entre los humildes y pobres del Señor, que de Él esperan con confianza la salvación".\n\nPara concluir, se puede rezar el Rosario y la Letanía Lauretana o la siguiente oración:\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque por la Concepción Inmaculada de la Virgen María\npreparaste a tu Hijo una digna morada,\ny en previsión de la muerte de tu Hijo\nla preservaste de todo pecado,\nconcédenos por su intercesión\nllegar a ti limpios de todas nuestras culpas.\nPor nuestro Señor Jesucristo.'
  },
  {
    dia: 3,
    titulo: 'María, sierva del Señor',
    oracion: '[TITULO]Tercer Día[/TITULO]\n[TITULO]1 DE DICIEMBRE[/TITULO]\n[TITULO]María, sierva del Señor[/TITULO]\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque enviaste a tu Hijo,\npalabra de salvación y pan de vida,\ndesde el cielo al seno de la Santa Virgen,\nconcédenos recibir a Cristo como ella,\nconservando sus palabras en el corazón,\ny celebrando con fe sus misterios.\nPor nuestro Señor Jesucristo. Amén.\n\n[TITULO]Lectura Bíblica Lucas 1:34-38[/TITULO]\nDijo María al ángel: ¿Cómo podrá ser esto, pues yo no conozco varón? El ángel le contestó: El Espíritu Santo vendrá sobre ti, y la virtud del Altísimo te cubrirá con su sombra, y por esto el hijo engendrado será santo, será llamado Hijo de Dios. E Isabel, tu pariente, también ha concebido un hijo en su vejez, y este es ya el mes sexto de la que era estéril, porque nada hay imposible para Dios. Dijo María: He aquí a la sierva del Señor, hágase en mí según tu palabra. Y se fue de ella el ángel.\n\n[TITULO]Consideración[/TITULO]\nEn efecto, en la Anunciación María se ha abandonado en Dios completamente, manifestando "la obediencia de la fe" a aquel que le hablaba a través de su mensajero y prestando "el homenaje del entendimiento y de la voluntad". Ha respondido, por tanto, con todo su "yo" humano, femenino, y en esta respuesta de fe estaban contenidas una cooperación perfecta con "la gracia de Dios que previene y socorre" y una disponibilidad perfecta a la acción del Espíritu Santo, que, "perfecciona constantemente la fe por medio de sus dones".\n\nLa palabra del Dios viviente, anunciada a María por el ángel, se refería a ella misma "vas a concebir en tu seno y vas a dar a luz un hijo" (Lucas 1, 31).\n\nAcogiendo este anuncio, María se convertiría en la "Madre del Señor" y en ella se realizaría el misterio divino de la Encarnación: "El Padre de las misericordias quiso que precediera a la encarnación la aceptación de parte de la Madre predestinada". Y María da el consentimiento, después de haber escuchado todas las palabras del mensajero. Dice: "He aquí la esclava del Señor; hágase en mí según tu palabra" (Lucas 1, 38).\n\nEste fiat de María —"hágase en mí"— ha decidido, desde el punto de vista humano, la realización del misterio divino. Se da una plena consonancia con las palabras del Hijo que, según la Carta a los Hebreos, al venir al mundo dice al Padre: "Sacrificio y oblación no quisiste; pero me has formado un cuerpo ... He aquí que vengo ... a hacer, oh Dios, tu voluntad" (Hebreos 10, 5-7).\n\nEl misterio de la Encarnación se ha realizado en el momento en el cual María ha pronunciado su fiat "hágase en mí según tu palabra", haciendo posible, en cuanto concernía a ella según el designio divino, el cumplimiento del deseo de su Hijo.\n\nPara concluir, se puede rezar el Rosario y la Letanía Lauretana o la siguiente oración:\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque por la Concepción Inmaculada de la Virgen María\npreparaste a tu Hijo una digna morada,\ny en previsión de la muerte de tu Hijo\nla preservaste de todo pecado,\nconcédenos por su intercesión\nllegar a ti limpios de todas nuestras culpas.\nPor nuestro Señor Jesucristo.'
  },
  {
    dia: 4,
    titulo: 'María, bendita entre las mujeres',
    oracion: '[TITULO]Cuarto Día[/TITULO]\n[TITULO]2 DE DICIEMBRE[/TITULO]\n[TITULO]María, bendita entre las mujeres[/TITULO]\n\n[TITULO]Oración[/TITULO]\nOh Dios, Salvador de los hombres,\nque, por medio de la bienaventurada Virgen María,\narca de la nueva alianza,\nllevaste la salvación y el gozo a la casa de Isabel,\nconcédenos ser dóciles a la inspiración del Espíritu\npara poder llevar a Cristo a los hermanos\ny proclamar tu grandeza con nuestras alabanzas\ny la santidad de nuestras costumbres.\nPor nuestro Señor Jesucristo. Amén.\n\n[TITULO]Lectura Bíblica S. Lucas 1:39-44[/TITULO]\nEn aquellos días se puso María en camino y con presteza fue a la montaña, a una ciudad de Judá, y entró en casa de Zacarías y saludó a Isabel. Así que oyó Isabel el saludo de María, exultó el niño en su seno, e Isabel quedó llena del Espíritu Santo, y clamó con fuerte voz: ¡Bendita tú entre las mujeres y bendito el fruto de tu vientre! ¿De dónde a mí que la madre de mi Señor venga a mí? Porque así que sonó la voz de tu salutación en mis oídos, exultó de gozo el niño en mi seno.\n\n[TITULO]Consideración[/TITULO]\nPoco después de la narración de la anunciación, el evangelista Lucas nos guía tras los pasos de la Virgen de Nazaret hacia "una ciudad de Judá" (Lucas 1, 39). Según los estudiosos esta ciudad debería ser la actual Ain-Karim, situada entre las montañas, no distante de Jerusalén. María llegó allí "con prontitud" para visitar a Isabel su pariente.\n\nEl motivo de la visita se halla también en el hecho de que, durante la anunciación, Gabriel había nombrado de modo significativo a Isabel, que en edad avanzada había concebido de su marido Zacarías un hijo, por el poder de Dios: "Mira, también Isabel, tu pariente, ha concebido un hijo en su vejez, y este es ya el sexto mes de aquella que llamaban estéril, porque ninguna cosa es imposible a Dios" (Lucas 1, 36-37).\n\nEl mensajero divino se había referido a cuanto había acontecido en Isabel, para responder a la pregunta de María: "¿Cómo será esto, puesto que no conozco varón?" (Lucas 1, 34). Esto sucedería precisamente por el "poder del Altísimo", como y más aún que en el caso de Isabel.\n\nAsí pues María, movida por la caridad, se dirige a casa de su pariente. Cuando entra, Isabel, al responder a su saludo y sintiendo saltar de gozo al niño en su seno, "llena del Espíritu Santo", a su vez saluda a María en alta voz: "Bendita tú entre las mujeres y bendito el fruto de tu seno" (cf. Lucas 1, 40-42).\n\nEsta exclamación o aclamación de Isabel entraría posteriormente en el Ave María, como una continuación del saludo del ángel, convirtiéndose así en una de las plegarias más frecuentes de la Iglesia. Pero más significativas son todavía las palabras de Isabel en la pregunta que sigue: "¿de dónde a mí que la madre de mi Señor venga a mí?" (Lucas 1, 43).\n\nIsabel da testimonio de María: reconoce y proclama que ante ella está la Madre del Señor, la Madre del Mesías. De este testimonio participa también el hijo que Isabel lleva en su seno: "saltó de gozo el niño en su seno" (Lucas 1, 44). El niño es el futuro Juan el Bautista, que en el Jordán señalará en Jesús al Mesías.\n\nPara concluir, se puede rezar el Rosario y la Letanía Lauretana o la siguiente oración:\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque por la Concepción Inmaculada de la Virgen María\npreparaste a tu Hijo una digna morada,\ny en previsión de la muerte de tu Hijo\nla preservaste de todo pecado,\nconcédenos por su intercesión\nllegar a ti limpios de todas nuestras culpas.\nPor nuestro Señor Jesucristo.'
  },
  {
    dia: 5,
    titulo: 'La fe de María',
    oracion: '[TITULO]Quinto Día[/TITULO]\n[TITULO]3 DE DICIEMBRE[/TITULO]\n[TITULO]La fe de María[/TITULO]\n\n[TITULO]Oración[/TITULO]\nPadre santo, Dios eterno,\nque quisiste poner el trono real de tu Sabiduría\nen Santa María Virgen,\nilumina a tu Iglesia con la luz de la Palabra de vida,\npara que resplandezca con la fuerza de la verdad\ny alcance gozosa el pleno conocimiento de tu amor.\nPor nuestro Señor Jesucristo. Amén.\n\n[TITULO]Lectura Bíblica S. Lucas 1:45-56[/TITULO]\n[E Isabel exclamó:]\nDichosa la que ha creído que se cumplirá lo que se le ha dicho de parte del Señor.\n\nDijo María:\n"Mi alma engrandece al Señor y exulta de júbilo mi espíritu en Dios, mi Salvador, porque ha mirado la humildad de su sierva; por eso todas las generaciones me llamarán bienaventurada, porque ha hecho en mí maravillas el Poderoso, cuyo nombre es santo. Su misericordia se derrama de generación en generación sobre los que le temen. Desplegó el poder de su brazo y dispersó a los que se engríen con los pensamientos de su corazón. Derribó a los potentados de sus tronos y ensalzó a los humildes. A los hambrientos los llenó de bienes, y a los ricos los despidió vacíos. Acogió a Israel, su siervo, acordándose de su misericordia. Según lo que había prometido a nuestros padres, a Abraham y a su descendencia para siempre". María permaneció con ella como unos tres meses y se volvió a su casa.\n\n[TITULO]Consideración[/TITULO]\nSin embargo las palabras de Isabel "Feliz la que ha creído" no se aplican únicamente a aquel momento concreto de la anunciación. Ciertamente la anunciación representa el momento culminante de la fe de María a la espera de Cristo, pero es además el punto de partida, de donde inicia todo su "camino hacia Dios", todo su camino de fe.\n\nY sobre esta vía, de modo eminente y realmente heroico —es más, con un heroísmo de fe cada vez mayor— se efectuará la "obediencia" profesada por ella a la palabra de la divina revelación. Y esta "obediencia de la fe" por parte de María a lo largo de todo su camino tendrá analogías sorprendentes con la fe de Abraham.\n\nComo el patriarca del Pueblo de Dios, así también María, a través del camino de su fiat filial y maternal, "esperando contra esperanza, creyó".\n\nCon razón, pues, en la expresión "feliz la que ha creído" podemos encontrar como una clave que nos abre a la realidad íntima de María, a la que el ángel ha saludado como "llena de gracia". Si como "llena de gracia" ha estado presente eternamente en el misterio de Cristo, por la fe se convertía en partícipe en toda la extensión de su itinerario terreno: "avanzó en la peregrinación de la fe" y al mismo tiempo, de modo discreto pero directo y eficaz, hacía presente a los hombres el misterio de Cristo. Y sigue haciéndolo todavía. Y por el misterio de Cristo está presente entre los hombres. Así, mediante el misterio del Hijo, se aclara también el misterio de la Madre.\n\nPara concluir, se puede rezar el Rosario y la Letanía Lauretana o la siguiente oración:\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque por la Concepción Inmaculada de la Virgen María\npreparaste a tu Hijo una digna morada,\ny en previsión de la muerte de tu Hijo\nla preservaste de todo pecado,\nconcédenos por su intercesión\nllegar a ti limpios de todas nuestras culpas.\nPor nuestro Señor Jesucristo.'
  },
  {
    dia: 6,
    titulo: 'María, corredentora con Cristo',
    oracion: '[TITULO]Sexto Día[/TITULO]\n[TITULO]4 DE DICIEMBRE[/TITULO]\n[TITULO]María, corredentora con Cristo[/TITULO]\n\n[TITULO]Oración[/TITULO]\nSeñor, Dios nuestro,\npor un designio misterioso de tu providencia\ncompletas lo que falta a la pasión de Cristo\ncon las infinitas penas de la vida de sus miembros;\nconcédenos que,\na imitación de la Virgen Madre dolorosa\nque estuvo junto a la cruz de su Hijo moribundo,\nasí nosotros permanezcamos junto a los hermanos\nque sufren para darles consuelo y amor.\nPor nuestro Señor Jesucristo. Amén.\n\n[TITULO]Lectura Bíblica S. Lucas 2:25-35[/TITULO]\nHabía en Jerusalén un hombre llamado Simeón, justo y piadoso, que esperaba la consolación de Israel, y el Espíritu Santo estaba en él. Le había sido revelado por el Espíritu Santo que no vería la muerte antes de ver al Cristo del Señor. Movido del Espíritu, vino al templo, y al entrar los padres con el niño Jesús para cumplir lo que prescribe la Ley sobre Él, Simeón le tomó en sus brazos y, bendiciendo a Dios, dijo: "Ahora, Señor, puedes ya dejar ir a tu siervo en paz, según tu palabra; porque han visto mis ojos tu salud, la que has preparado ante la faz de todos los pueblos; Luz para iluminación de las gentes y gloria de tu pueblo Israel". Su padre y su madre estaban maravillados de las cosas que se decían de Él. Simeón los bendijo y dijo a María, su madre: "Puesto está para caída y levantamiento de muchos en Israel y para signo de contradicción; y una espada atravesará tu alma para que se descubran los pensamientos de muchos corazones".\n\n[TITULO]Consideración[/TITULO]\nEl hombre justo y piadoso, llamado Simeón, aparece al comienzo del "itinerario" de la fe de María. Sus palabras, sugeridas por el Espíritu Santo (cf. Lucas 2, 25-27), confirman la verdad de la anunciación.\n\nLeemos, en efecto, que "tomó en brazos" al niño, al que —según la orden del ángel— "se le dio el nombre de Jesús" (cf. Lucas 2, 21). El discurso de Simeón es conforme al significado de este nombre, que quiere decir Salvador: "Dios es la salvación". Vuelto al Señor, dice Simeón: "Porque han visto mis ojos tu salvación, la que has preparado a la vista de todos los pueblos, luz para iluminar a los gentiles y gloria de tu pueblo Israel" (Lucas 2, 30-32). Al mismo tiempo, sin embargo, Simeón se dirige a María con estas palabras: "Este está puesto para caída y elevación de muchos en Israel, y para ser señal de contradicción ... a fin de que queden al descubierto las intenciones de muchos corazones"; y añade con referencia directa a María: "y a ti misma una espada te atravesará el alma" (Lucas 2, 34-35).\n\nLas palabras de Simeón dan nueva luz al anuncio que María ha oído del ángel: Jesús es el Salvador, es "luz para iluminar" a los hombres. ¿No es aquel que se manifestó, en cierto modo, en la Nochebuena, cuando los pastores fueron al establo? ¿No es aquel que debía manifestarse todavía más con la llegada de los Magos del Oriente? (cf. Mateo 2, 1-12). Al mismo tiempo, sin embargo, ya al comienzo de su vida, el Hijo de María —y con él su Madre— experimentarán en sí mismos la verdad de las restantes palabras de Simeón: "Señal de contradicción" (Lucas 2, 34). El anuncio de Simeón parece como un segundo anuncio a María, dado que le indica la concreta dimensión histórica en la cual el Hijo cumplirá su misión, es decir en la incomprensión y en el dolor. Si por un lado, este anuncio confirma su fe en el cumplimiento de las promesas divinas de la salvación, por otro, le revela también que deberá vivir en el sufrimiento su obediencia de fe al lado del Salvador que sufre, y que su maternidad será oscura y dolorosa.\n\nPara concluir, se puede rezar el Rosario y la Letanía Lauretana o la siguiente oración:\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque por la Concepción Inmaculada de la Virgen María\npreparaste a tu Hijo una digna morada,\ny en previsión de la muerte de tu Hijo\nla preservaste de todo pecado,\nconcédenos por su intercesión\nllegar a ti limpios de todas nuestras culpas.\nPor nuestro Señor Jesucristo.'
  },
  {
    dia: 7,
    titulo: 'María, primera en oír la palabra de Dios y guardarla',
    oracion: '[TITULO]Séptimo Día[/TITULO]\n[TITULO]5 DE DICIEMBRE[/TITULO]\n[TITULO]María, primera en oír la palabra de Dios y guardarla[/TITULO]\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque enviaste a tu Hijo,\npalabra de salvación y pan de vida,\ndesde el cielo al seno de la Santa Virgen,\nconcédenos recibir a Cristo como ella,\nconservando sus palabras en el corazón\ny celebrando con fe sus misterios.\nPor nuestro Señor Jesucristo. Amén.\n\n[TITULO]Lectura Bíblica S. Lucas 11:27-28[/TITULO]\nMientras decía estas cosas, levantó la voz una mujer de entre la muchedumbre y dijo: "¡Dichoso el seno que te llevó y los pechos que te amamantaron!". Pero Él dijo: "Más bien dichosos los que oyen la Palabra de Dios y la guardan".\n\n[TITULO]Consideración[/TITULO]\nEl evangelio de Lucas recoge el momento en el que "alzó la voz una mujer de entre la gente, y dijo, dirigiéndose a Jesús: ¡Dichoso el seno que te llevó y los pechos que te criaron!" (Lucas 11, 27). Estas palabras constituían una alabanza para María como madre de Jesús, según la carne.\n\nPero a esta bendición proclamada por aquella mujer respecto a su madre según la carne, Jesús responde de manera significativa: "Dichosos más bien los que oyen la Palabra de Dios y la guardan" (cf. Lucas 11, 28). Quiere apartar la atención de la maternidad entendida sólo como un vínculo de la carne, para orientarla hacia aquel misterioso vínculo del espíritu, que se forma en la escucha y en la observancia de la palabra de Dios.\n\nSin lugar a dudas, María es digna de bendición por el hecho de haber sido para Jesús Madre según la carne ("¡Dichoso el seno que te llevó!"), pero ya en el instante de la anunciación ha acogido la palabra de Dios, porque ha creído, porque fue obediente a Dios, porque "guardaba" la palabra y "la conservaba cuidadosamente en su corazón" (cf. Lucas 1, 38. 45; 2, 19. 51) y la cumplía totalmente en su vida.\n\nPodemos afirmar, por tanto, que el elogio pronunciado por Jesús no se contrapone, a pesar de las apariencias, al formulado por la mujer desconocida, sino que viene a coincidir con ella en la persona de esta Madre-Virgen, que se ha llamado solamente "esclava del Señor" (Lucas 1, 38).\n\nSi por medio de la fe María se ha convertido en la Madre del Hijo que le ha sido dado por el Padre con el poder del Espíritu Santo, conservando íntegra su virginidad, en la misma fe ha descubierto y acogido la otra dimensión de la maternidad, revelada por Jesús durante su misión mesiánica.\n\nSe puede afirmar que esta dimensión de la maternidad pertenece a María desde el comienzo, o sea desde el momento de la concepción y del nacimiento del Hijo. Desde entonces era "la que ha creído" ... María madre se convertía así, en cierto sentido, en la primera "discípula" de su Hijo, la primera a la cual parecía decir: "Sígueme" antes aún de dirigir esa llamada a los apóstoles o a cualquier otra persona (cf. Juan 1, 43).\n\nPara concluir, se puede rezar el Rosario y la Letanía Lauretana o la siguiente oración:\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque por la Concepción Inmaculada de la Virgen María\npreparaste a tu Hijo una digna morada,\ny en previsión de la muerte de tu Hijo\nla preservaste de todo pecado,\nconcédenos por su intercesión\nllegar a ti limpios de todas nuestras culpas.\nPor nuestro Señor Jesucristo.'
  },
  {
    dia: 8,
    titulo: 'María, medianera de todas las gracias',
    oracion: '[TITULO]Octavo Día[/TITULO]\n[TITULO]6 DE DICIEMBRE[/TITULO]\n[TITULO]María, medianera de todas las gracias[/TITULO]\n\n[TITULO]Oración[/TITULO]\nOh Dios, cuyo Hijo, al expirar en la cruz,\nquiso que la Virgen María, elegida por él como Madre suya,\nfuese en adelante nuestra Madre,\nconcédenos a quienes recurrimos a su protección\nser confortados por la invocación de su santo nombre.\nPor nuestro Señor Jesucristo. Amén.\n\n[TITULO]Lectura Bíblica S. Juan 2:1-11[/TITULO]\nAl tercer día hubo una boda en Caná de Galilea, y estaba allí la madre de Jesús. Fue invitado también Jesús con sus discípulos a la boda. No tenían vino, porque el vino de la boda se había acabado. En esto dijo la madre de Jesús a éste: "No tienen vino". Díjole Jesús: "Mujer, ¿qué nos va a mí y a ti? Todavía no ha llegado mi hora". Dijo la madre a los servidores: Haced lo que Él os diga.\n\nHabía allí seis tinajas de piedra para las purificaciones de los judíos, en cada una de las cuales cabían dos o tres metretas. Díjoles Jesús: "Llenad las tinajas de agua". Las llenaron hasta el borde, y Él les dijo: "Sacad ahora y llevad al maestresala". Se lo llevaron, y luego que el maestresala probó el agua convertida en vino—él no sabía de dónde venía, pero lo sabían los servidores, que habían sacado el agua—, llamó al novio y le dijo: "Todos sirven primero el vino bueno, y cuando están ya bebidos, el peor; pero tú has guardado hasta ahora el vino mejor". Este fue el primer milagro que hizo Jesús, en Caná de Galilea, y manifestó su gloria y creyeron en Él.\n\n[TITULO]Consideración[/TITULO]\nMaría está presente en Caná de Galilea como Madre de Jesús, y de modo significativo contribuye a aquel "comienzo de las señales", que revelan el poder mesiánico de su Hijo. He aquí que: "como faltaba vino, le dice a Jesús su Madre: no tienen vino. Jesús le responde: "¿Qué tengo yo contigo, mujer? Todavía no ha llegado mi hora" (Juan 2, 3-4). En el Evangelio de Juan aquella "hora" significa el momento determinado por el Padre, en el que el Hijo realiza su obra y debe ser glorificado (cf. Juan 7, 30; 8, 20; 12, 23. 27; 13, 1; 17, 1; 19, 27).\n\nAunque la respuesta de Jesús a su madre parezca como un rechazo (sobre todo si se mira, más que a la pregunta, a aquella decidida afirmación: "Todavía no ha llegado mi hora"), a pesar de esto María se dirige a los criados y les dice: "Haced lo que os diga" (Juan 2, 5). Entonces Jesús ordena a los criados llenar de agua las tinajas, y el agua se convierte en vino, mejor del que se había servido antes a los invitados al banquete nupcial.\n\n...En esta página del Evangelio de Juan encontramos como un primer indicio de la verdad sobre la mediación materna de María. Esta verdad ha encontrado su expresión en el magisterio del último Concilio. Es importante señalar como la función materna de María es ilustrada en su relación con la mediación de Cristo. En efecto, leemos lo siguiente: "La misión maternal de María hacia los hombres de ninguna manera disminuye o hace sombra a la mediación de Cristo, sino más bien muestra su eficacia", porque "hay un solo mediador entre Dios y los hombres, Cristo Jesús, hombre también" (1 Tim 2, 5). ... El hecho de Caná de Galilea, nos ofrece como una predicción de la mediación de María, orientada plenamente hacia Cristo y encaminada a la revelación de su poder salvífico.\n\nPor el texto joánico parece que se trata de una mediación maternal. Como proclama el Concilio: María "es nuestra Madre en el orden de la gracia". Esta maternidad en el orden de la gracia ha surgido de su misma maternidad divina, porque siendo, por disposición de la divina providencia, madre-nodriza del divino Redentor se ha convertido de "forma singular en la generosa colaboradora entre todas las criaturas y la humilde esclava del Señor" y que "cooperó ... por la obediencia, la fe, la esperanza y la encendida caridad, en la restauración de la vida sobrenatural de las almas".\n\n"Y esta maternidad de María perdura sin cesar en la economía de la gracia... hasta la consumación de todos los elegidos".\n\nPara concluir, se puede rezar el Rosario y la Letanía Lauretana o la siguiente oración:\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque por la Concepción Inmaculada de la Virgen María\npreparaste a tu Hijo una digna morada,\ny en previsión de la muerte de tu Hijo\nla preservaste de todo pecado,\nconcédenos por su intercesión\nllegar a ti limpios de todas nuestras culpas.\nPor nuestro Señor Jesucristo.'
  },
  {
    dia: 9,
    titulo: 'María, madre de Dios y madre nuestra',
    oracion: '[TITULO]Noveno Día[/TITULO]\n[TITULO]7 DE DICIEMBRE[/TITULO]\n[TITULO]María, madre de Dios y madre nuestra[/TITULO]\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nPadre de misericordia,\ncuyo Hijo, clavado en la cruz,\nproclamó como Madre nuestra\na santa María Virgen, Madre suya,\nconcédenos, por su mediación amorosa,\nque tu Iglesia, cada día más fecunda,\nse llene de gozo por la santidad de sus hijos,\ny atraiga a su seno\na todas las familias de los pueblos.\nPor nuestro Señor Jesucristo. Amén.\n\n[TITULO]Lectura Bíblica S. Juan 19:23-27[/TITULO]\nLos soldados, una vez que hubieron crucificado a Jesús, tomaron sus vestidos, haciendo cuatro partes, una para cada soldado, y la túnica. La túnica era sin costura, tejida desde arriba. Dijéronse, pues, unos a otros: "No la rasguemos, sino echemos suertes sobre ella para ver a quién toca", a fin de que se cumpliese la Escritura: "Dividiéronse mis vestidos y sobre mi túnica echaron suertes". Es lo que hicieron los soldados.\n\nEstaban junto a la cruz de Jesús su Madre y la hermana de su Madre, María la de Cleofás y María Magdalena. Jesús, viendo a su madre y al discípulo a quien amaba, que estaba allí, dijo a su madre: "Mujer, he ahí a tu hijo". Luego dijo al discípulo: "He ahí a tu Madre". Y desde aquella hora el discípulo la recibió en su casa.\n\n[TITULO]Consideración[/TITULO]\nSi el pasaje del Evangelio de Juan sobre el hecho de Caná presenta la maternidad solícita de María al comienzo de la actividad mesiánica de Cristo, otro pasaje del mismo Evangelio confirma esta maternidad de María en la economía salvífica de la gracia en su momento culminante, es decir cuando se realiza el sacrificio de la Cruz de Cristo, su misterio pascual. La descripción de Juan es concisa: "Junto a la cruz de Jesús estaban su Madre y la hermana de su madre, María mujer de Cleofás y María Magdalena. Jesús, viendo a su madre y junto a ella al discípulo a quien amaba, dice a su madre: "Mujer, ahí tienes a tu hijo". Luego dice al discípulo: "Ahí tienes a tu madre". Y desde aquella hora el discípulo la acogió en su casa" (Jn 19, 25-27).\n\n...Sin embargo, sobre el significado de esta atención el "testamento de la Cruz" de Cristo dice aún más. Jesús ponía en evidencia un nuevo vínculo entre Madre e Hijo, del que confirma solemnemente toda la verdad y realidad. Se puede decir que, si la maternidad de María respecto de los hombres ya había sido delineada precedentemente, ahora es precisada y establecida claramente: ella emerge de la definitiva maduración del misterio pascual del Redentor.\n\nLa Madre de Cristo, encontrándose en el campo directo de este misterio que abarca al hombre —a cada uno y a todos— es entregada al hombre —a cada uno y a todos— como madre.\n\nPara concluir, se puede rezar el Rosario y la Letanía Lauretana o la siguiente oración:\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque por la Concepción Inmaculada de la Virgen María\npreparaste a tu Hijo una digna morada,\ny en previsión de la muerte de tu Hijo\nla preservaste de todo pecado,\nconcédenos por su intercesión\nllegar a ti limpios de todas nuestras culpas.\nPor nuestro Señor Jesucristo.'
  }
];

export default function NovenaInmaculadaScreen() {
  const [diaSeleccionado, setDiaSeleccionado] = useState<number | null>(null);

  const formatearOracion = (texto: string) => {
    // Dividir el texto en secciones basadas en las etiquetas de título
    const partes = texto.split(/\[TITULO\]|\[\/TITULO\]/);
    
    return partes.map((parte, index) => {
      // Si el índice es impar, es un título
      if (index % 2 === 1) {
        return (
          <Text key={index} style={styles.tituloSeccion}>
            {parte}
          </Text>
        );
      } else if (parte.trim()) {
        // Si no es un título pero tiene contenido, es texto normal
        return (
          <Text key={index} style={styles.textoOracion}>
            {parte}
          </Text>
        );
      }
      return null;
    });
  };

  const renderDiaNovena = (dia: DiaNovena) => {
    return (
      <View style={styles.novenaDetalle}>
        <Text style={styles.novenaTitulo}>{dia.titulo}</Text>
        <View style={styles.oracionContainer}>
          {formatearOracion(dia.oracion)}
        </View>
        <TouchableOpacity 
          style={styles.botonVolver}
          onPress={() => setDiaSeleccionado(null)}
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
          title: diaSeleccionado 
            ? `Día ${diaSeleccionado} - ${diasNovena.find(d => d.dia === diaSeleccionado)?.titulo}` 
            : 'Novena a la Inmaculada Concepción',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {diaSeleccionado ? (
            renderDiaNovena(diasNovena.find(d => d.dia === diaSeleccionado) || diasNovena[0])
          ) : (
            diasNovena.map((dia) => (
              <TouchableOpacity 
                key={dia.dia}
                style={styles.novenaItem}
                onPress={() => setDiaSeleccionado(dia.dia)}
              >
                <Text style={styles.novenaItemTitulo}>Día {dia.dia}: {dia.titulo}</Text>
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
  novenaItem: {
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
  novenaItemTitulo: {
    fontSize: 22,
    color: Colors.primary,
    textAlign: 'center',
  },
  novenaDetalle: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
  novenaTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  oracionContainer: {
    marginBottom: 20,
  },
  tituloSeccion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  textoOracion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  botonVolver: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botonVolverTexto: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 