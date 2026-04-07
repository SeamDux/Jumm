import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';
import { ThemedText } from '../../../components/ThemedText';

interface DomingoSanJose {
  numero: number;
  titulo: string;
  contenido: string;
}

const domingos: DomingoSanJose[] = [
  {
    numero: 1,
    titulo: 'Primer Domingo',
    contenido: `[TITULO]Primer domingo[/TITULO]

[TITULO]Su dolor:[/TITULO]
cuando decidió abandonar a la Bienaventurada Virgen María.

[TITULO]Su gozo:[/TITULO]
cuando el ángel le comunicó el misterio de la Encarnación: que el niño nacido de María es Hijo de Dios y el Mesías esperado.

[TITULO]Oración[/TITULO]
Glorioso San José, esposo de María Santísima.
Como fue grande la angustia y el dolor de tu corazón,
en la duda de abandonar a tu purísima Esposa,
así fue inmensa la alegría
cuando te fue revelado por el Ángel
el soberano misterio de la Redención.
Por este dolor y gozo,
te suplicamos nos consueles
en las angustias de nuestra última hora
y nos concedas una santa muerte,
después de haber vivido una vida
semejante a la tuya junto a Jesús y María.
Por Jesucristo, nuestro Señor. Amén

[TITULO]Lectura Bíblica S. Mateo 1, 18-25.[/TITULO]
La concepción de Jesucristo fue así: Estando desposada María, su madre, con José, antes que empezasen a estar juntos ellos, se halló haber concebido María del Espíritu Santo. José, su esposo, siendo justo, no quiso denunciarla y resolvió repudiarla en secreto. Mientras reflexionaba sobre esto, he aquí que se le apareció en sueños un ángel del Señor y le dijo: José, hijo de David, no temes recibir en tu casa a María, tu esposa, pues lo concebido en ella es del Espíritu Santo. Dará a luz un hijo, a quien pondrás por nombre Jesús, porque salvará a su pueblo de sus pecados. Todo esto sucedió para que se cumpliese lo que el Señor había anunciado por el profeta:
"He aquí que una virgen concebirá y dará a luz un hijo, y se le pondrá por nombre Emmanuel, que quiere decir «Dios con nosotros»".
Al despertar José de su sueño hizo como el ángel del Señor le había mandado, recibiendo en casa a su esposa, la cual, sin que él antes la conociese, dio a luz un hijo, y le puso por nombre Jesús.

[TITULO]Consideración[/TITULO]
"Durante su vida, que fue una perseveración en la fe, José, al igual que María, permaneció fiel a la llamada de Dios hasta el final. La vida de ella fue el cumplimiento hasta sus últimas consecuencias de aquel primer «fiat» pronunciado en el momento de la anunciación, mientras que José —como ya se ha dicho— en el momento de su «anunciación» no pronunció palabra alguna.
Simplemente él «hizo como el ángel del Señor le había mandado» (Mateo 1, 24). Y este primer «hizo» es el comienzo del «camino de José».
"En las palabras de la «anunciación» nocturna, José escucha no sólo la verdad divina acerca de la inefable vocación de su esposa, sino que también vuelve a escuchar la verdad sobre su propia vocación. Este hombre «justo», que en el espíritu de las más nobles tradiciones del pueblo elegido amaba a la virgen de Nazaret y se había unido a ella con amor esponsal, es llamado nuevamente por Dios a este amor.
"«José hizo como el ángel del Señor le había mandado, y tomó consigo a su mujer» (Mateo 1,24); lo que en ella había sido engendrado «es del Espíritu Santo». A la vista de estas expresiones, ¿no habría que concluir que también su amor como hombre ha sido regenerado por el Espíritu Santo? ¿No habría que pensar que el amor de Dios, que ha sido derramado en el corazón humano por medio del Espíritu Santo (cf. Romanos 5,5) configura de modo perfecto el amor humano?...
Mediante el sacrificio total de sí mismo José expresa su generoso amor hacia la Madre de Dios, haciéndole «don esponsal de sí». Aunque decidido a retirarse para no obstaculizar el plan de Dios que se estaba realizando en ella, él, por expresa orden del ángel, la retiene consigo y respeta su pertenencia exclusiva a Dios."

Para concluir, la Letanía de San José puede ser rezada, o bien la siguiente oración:

[TITULO]Oración[/TITULO]
Oh Dios,
que en tu inefable providencia,
elegiste a San José como esposo de la Madre de tu Hijo,
concédenos la gracia de tener como intercesor en el cielo
al que veneramos como protector en la tierra.
Por Jesucristo, nuestro Señor. Amén`
  },
  {
    numero: 2,
    titulo: 'Segundo Domingo',
    contenido: `[TITULO]Segundo domingo[/TITULO]

[TITULO]Su dolor:[/TITULO]
cuando vio al niño Jesús nacer en la pobreza.

[TITULO]Su gozo:[/TITULO]
cuando los ángeles anunciaron su nacimiento.

[TITULO]Oración[/TITULO]
Dichoso Patriarca San José,
elegido para cumplir los oficios de padre
cerca del Verbo Humanado.
Grande fue tu dolor al ver nacido a Jesús
en tan extrema pobreza,
pero este dolor se cambió en gozo celestial
al oír los cantos de los ángeles
y contemplar el resplandor de aquella luminosa noche.
Por este dolor y gozo,
te suplicamos nos alcances la gracia de que,
después de haber seguido nuestro camino en la tierra,
podamos oír las alabanzas angélicas
y gozar de la vida de la gloria celestial.
Por Jesucristo, nuestro Señor. Amén

[TITULO]Lectura Bíblica S. Lucas 2, 1-20[/TITULO]
Aconteció, pues, en los días aquellos que salió un edicto de César Augusto para que se empadronase todo el mundo. Este empadronamiento primero tuvo lugar siendo Cirino gobernador de Siria. E iban todos a empadronarse, cada uno en su ciudad. José subió de Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén, por ser él de la casa y familia de David, para empadronarse con María, su esposa, que estaba en cinta. Estando allí se cumplieron los días de su parto, y dio a luz a su hijo primogénito, y le envolvió en pañales y le acostó en un pesebre, por no haber sitio para ellos en el mesón.

Había en la región unos pastores que pernoctaban al raso, y de noche se turnaban velando sobre su rebaño. Se les presentó un ángel del Señor, y la gloria del Señor los envolvía con su luz, quedando sobrecogidos de gran temor. Díjoles el ángel: No temáis, os traigo una buena nueva, una gran alegría, que es para todo el pueblo; pues os ha nacido hoy un Salvador, que es el Mesías Señor, en la ciudad de David. Esto tendréis por señal: encontraréis un niño envuelto en pañales y reclinado en un pesebre. Al instante se juntó con el ángel una multitud del ejército celestial, que alababa a Dios diciendo: «Gloria a Dios en las alturas y en la tierra paz a los hombres de buena voluntad».

Así que los ángeles se fueron al cielo, se dijeron los pastores unos a otros: Vamos a Belén a ver esto que el Señor nos ha anunciado. Fueron con presteza y encontraron a María, y José y al Niño acostado en un pesebre, y viéndolo, contaron lo que se les había dicho del Niño. Cuantos los oían se maravillaban de lo que les decían los pastores. María guardaba todo esto y lo meditaba en su corazón. Los pastores se volvieron glorificando y alabando a Dios por todo lo que habían visto y oído, según se les había dicho.

[TITULO]Consideración[/TITULO]
Dirigiéndose a Belén para el censo, de acuerdo con las disposiciones emanadas por la autoridad civil, José cumplió la tarea importante y significativa de inscribir oficialmente el nombre «Jesús, hijo de José de Nazaret» (cf. Juan 1, 45) en el registro del Imperio. Esta inscripción manifiesta de modo evidente la pertenencia de Jesús al género humano, hombre entre los hombres, ciudadano de este mundo, sujeto a las leyes e instituciones civiles, pero también «salvador del mundo».

Como depositario del misterio «escondido desde siglos en Dios» y que empieza a realizarse ante sus ojos en la plenitud de los tiempos, José es con María, en la noche de Belén, testigo privilegiado de la venida del Hijo de Dios al mundo.

José fue testigo ocular de este nacimiento, acaecido en condiciones humanamente humillantes, primer anuncio de aquel «anonadamiento» al que Cristo libremente consintió para redimir los pecados. Al mismo tiempo José fue testigo de la adoración de los pastores, llegados al lugar del nacimiento de Jesús después de que el ángel les había traído esta grande y gozosa nueva; más tarde fue también testigo de la adoración de los Magos, venidos de Oriente.

Para concluir, la Letanía de San José puede ser rezada, o bien la siguiente oración:

[TITULO]Oración[/TITULO]
Oh Dios,
que en tu inefable providencia,
elegiste a San José como esposo de la Madre de tu Hijo,
concédenos la gracia de tener como intercesor en el cielo
al que veneramos como protector en la tierra.
Por Jesucristo, nuestro Señor. Amén`
  },
  {
    numero: 3,
    titulo: 'Tercer Domingo',
    contenido: `[TITULO]Tercer domingo[/TITULO]

[TITULO]Su dolor:[/TITULO]
cuando vió la sangre de Jesús verterse en la circuncisión.

[TITULO]Su gozo:[/TITULO]
cuando le llamó «Jesús».

[TITULO]Oración[/TITULO]
Glorioso San José,
ejecutor obediente de la Ley de Dios.
La Sangre preciosa que en la circuncisión
derramó el divino Redentor,
te traspasó el corazón;
pero el nombre de Jesús, que se le impuso,
te llenó de consuelo.
Por este dolor y gozo,
te rogamos nos alcances la gracia de vivir
luchando contra la esclavitud de los vicios,
para tener la dicha de morir con el nombre de Jesús
en los labios y en el corazón.
Por Jesucristo, nuestro Señor. Amén

[TITULO]Lectura Bíblica S. Lucas 2, 21[/TITULO]
Cuando se hubieron cumplido los ocho días para circuncidar al Niño, le dieron el nombre de Jesús, impuesto por el ángel antes de ser concebido en el seno.

[TITULO]Consideración[/TITULO]
"Siendo la circuncisión del hijo el primer deber religioso del padre, José con este rito ejercita su derecho-deber respecto a Jesús.

"El principio según el cual todos los ritos del Antiguo Testamento son una sombra de la realidad, explica el por qué Jesús los acepta. Como los demás ritos, también la circuncisión halla en Jesús el «cumplimiento». La Alianza de Dios con Abrahán, de la cual la circuncisión era signo, alcanza en Jesús su pleno efecto y su perfecta realización, siendo Jesús el «sí» de todas las antiguas promesas.

"En la circuncisión, José impone al niño el nombre de Jesús. Este nombre es el único en el que se halla la salvación; ya José le había sido revelado en el instante de su «anunciación»: «Y le pondrás por nombre Jesús, porque él salvará a su pueblo de sus pecados». Al imponer el nombre, José declara su paternidad legal sobre Jesús y, al proclamar el nombre, proclama también su misión salvadora."

Para concluir, la Letanía de San José puede ser rezada, o bien la siguiente oración:

[TITULO]Oración[/TITULO]
Oh Dios,
que en tu inefable providencia,
elegiste a San José como esposo de la Madre de tu Hijo,
concédenos la gracia de tener como intercesor en el cielo
al que veneramos como protector en la tierra.
Por Jesucristo, nuestro Señor. Amén`
  },
  {
    numero: 4,
    titulo: 'Cuarto Domingo',
    contenido: `[TITULO]Cuarto domingo[/TITULO]

[TITULO]Su dolor:[/TITULO]
cuando oyó la profecía de Simeón.

[TITULO]Su gozo:[/TITULO]
cuando supo que los sufrimientos de Jesús salvarían al mundo.

[TITULO]Oración[/TITULO]
San José,
modelo de fidelidad
en el cumplimiento de los planes de Dios.
Grande fue tu dolor al saber,
por la profecía de Simeón,
que Jesús y María estaban destinados a padecer;
mas este dolor se convirtió en gozo
al conocer que los padecimientos de Jesús y María
serían causa de salvación para innumerables almas.
Por este dolor y gozo, te rogamos que,
por los méritos de Jesús y María,
seamos contados entre aquellos
que han de resucitar gloriosamente.
Por Jesucristo, nuestro Señor. Amén

[TITULO]Lectura Bíblica S. Lucas 2, 22-35[/TITULO]
Así que se cumplieron los días de la purificación conforme a la Ley de Moisés, le llevaron a Jerusalén para presentarle al Señor, según está escrito en la Ley del Señor que «todo varón primogénito sea consagrado al Señor», y para ofrecer en sacrificio, según lo prescrito en la Ley del Señor, un par de tórtolas o dos pichones.

Había en Jerusalén un hombre llamado Simeón, justo y piadoso, que esperaba la consolación de Israel, y el Espíritu Santo estaba en él. Le había sido revelado por el Espíritu Santo que no vería la muerte antes de ver al Cristo del Señor. Movido del Espíritu, vino al templo, y al entrar los padres con el niño Jesús para cumplir lo que prescribe la Ley sobre Él, Simeón le tomó en sus brazos y, bendiciendo a Dios, dijo: Ahora, Señor, puedes dejar ir a tu siervo en paz, según tu palabra, porque han visto mis ojos tu salud, la que has preparado ante la faz de todos los pueblos; luz para iluminación de las gentes y gloria de tu pueblo, Israel. Su padre y su madre estaban maravillados de las cosas que se decían de él. Simeón los bendijo y dijo a María, su madre: Puesto está para caída y levantamiento de muchos en Israel y para signo de contradicción; y una espada atravesará tu alma para que se descubran los pensamientos de muchos corazones.

[TITULO]Consideración[/TITULO]
"Este rito, narrado por Lucas, incluye el rescate del primogénito e ilumina la posterior permanencia de Jesús a los doce años de edad en el templo.

"El rescate del primogénito es otro deber del padre, que es cumplido por José. En el primogénito estaba representado el pueblo de la Alianza, rescatado de la esclavitud para pertenecer a Dios. También en esto, Jesús, que es el «precio» del rescate, no sólo «cumple» el rito del Antiguo Testamento, sino que, al mismo tiempo, lo supera, al no ser él mismo un sujeto de rescate, sino el autor mismo del rescate.

"El Evangelista pone de manifiesto que «su padre y su madre estaban admirados de lo que se decía de él» (Lc 2, 33), y, en particular, de lo dicho por Simeón en su canto dirigido a Dios, al indicar a Jesús como la «salvación preparada por Dios a la vista de todos los pueblos» y «luz para iluminar a las gentes y gloria de su pueblo Israel» y, más adelante, también «señal de contradicción». Con María —y particularmente desde este momento—, José es el primer depositario de este misterio divino."

Para concluir, la Letanía de San José puede ser rezada, o bien la siguiente oración:

[TITULO]Oración[/TITULO]
Oh Dios,
que en tu inefable providencia,
elegiste a San José como esposo de la Madre de tu Hijo,
concédenos la gracia de tener como intercesor en el cielo
al que veneramos como protector en la tierra.
Por Jesucristo, nuestro Señor. Amén`
  },
  {
    numero: 5,
    titulo: 'Quinto Domingo',
    contenido: `[TITULO]Quinto domingo[/TITULO]

[TITULO]Su dolor:[/TITULO]
al huir a Egipto con Jesús y María.

[TITULO]Su gozo:[/TITULO]
al estar siempre en su compañía.

[TITULO]Oración[/TITULO]
San José, Custodio y familiar íntimo
del Verbo de Dios encarnado.
Grande fue tu sufrimiento
para alimentar y servir al Hijo del Altísimo,
sobre todo en la huida a Egipto;
de igual manera fue grande tu alegría
al tener siempre en tu compañía al mismo Hijo de Dios
y ver cómo caían en tierra los ídolos de Egipto.
Por este dolor y gozo,
te rogamos nos alcances la gracia de que,
huyendo de las ocasiones de pecado,
venzamos al enemigo infernal
y hagamos caer de nuestro corazón
todo ídolo de pasiones terrenas, para que,
ocupados en servir a Jesús y a María,
vivamos únicamente para ellos
y tengamos una muerte feliz.
Por Jesucristo, nuestro Señor. Amén

[TITULO]Lectura Bíblica S. Mateo 2, 13-18[/TITULO]
Partido que hubieron, el ángel del Señor se apareció en sueños a José y le dijo: «Levántate, toma al niño y a su madre y huye a Egipto, y estate allí hasta que yo te avise, porque Herodes va a buscar al niño para matarlo». Levantándose de noche, tomó al niño y a la madre y se fue hacia Egipto, permaneciendo allí hasta la muerte de Herodes, a fin de que se cumpliera lo que había pronunciado el Señor por su profeta, diciendo: «De Egipto llamé a mi hijo». Entonces Herodes, viéndose burlado por los magos, se irritó sobremanera y mandó matar a todos los niños que había en Belén y en sus términos de dos años para abajo, según el tiempo que diligentemente había inquirido de los magos. Entonces se cumplió la palabra del profeta Jeremías, que dice: «Una voz se oye en Ramá, lamentación y gemido grande; es Raquel, que llora a sus hijos y rehúsa ser consolada, porque ya no existen».

[TITULO]Consideración[/TITULO]
Con ocasión de la venida de los Magos de Oriente, Herodes supo del nacimiento del «rey de los judíos». Y cuando partieron los Magos él «envió a matar a todos los niños de Belén y de toda la comarca, de dos años para abajo». De este modo, matando a todos, quería matar también a aquel «rey de los judíos», de quien había tenido conocimiento durante la visita de los magos a su corte.

La Iglesia rodea de profunda veneración a esta Familia, proponiéndola como modelo para todas las familias. La Familia de Nazaret inserta directamente en el misterio de la Encarnación constituye un misterio especial. Y —al igual que en la Encarnación— a este misterio pertenece también una verdadera paternidad: la forma humana de la familia del Hijo de Dios, verdadera familia humana formada por el misterio divino. En esta familia José es el padre: no es la suya una paternidad derivada de la generación; y sin embargo, no es «aparente» o solamente «sustitutiva», sino que posee plenamente la autenticidad de la paternidad humana y de la misión paterna en la familia. En ello está contenida una consecuencia de la unión hipostática: la humanidad asumida en la unidad de la Persona divina del Verbo-Hijo, Jesucristo, junto con la asunción de la humanidad, en Cristo está también «asumido» todo lo que es humano, en particular, la familia, como primera dimensión de su existencia en la tierra. En este contexto está también «asumida» la paternidad humana de José.

Para concluir, la Letanía de San José puede ser rezada, o bien la siguiente oración:

[TITULO]Oración[/TITULO]
Oh Dios,
que en tu inefable providencia,
elegiste a San José como esposo de la Madre de tu Hijo,
concédenos la gracia de tener como intercesor en el cielo
al que veneramos como protector en la tierra.
Por Jesucristo, nuestro Señor. Amén`
  },
  {
    numero: 6,
    titulo: 'Sexto Domingo',
    contenido: `[TITULO]Sexto domingo[/TITULO]

[TITULO]Su dolor:[/TITULO]
cuando temía volver a su casa.

[TITULO]Su gozo:[/TITULO]
al ser avisado por el ángel de ir a Nazaret.

[TITULO]Oración[/TITULO]
Glorioso San José,
que tuviste sujeta a tus órdenes al Rey de los Cielos.
Si tu alegría al regresar de Egipto
se vio turbada por el miedo a Arquelao,
después, al ser tranquilizado por el Ángel,
viviste contento en Nazaret con Jesús y María.
Por este dolor y gozo,
alcánzanos la gracia de vernos libres de temores,
y gozando de la paz de conciencia,
de vivir seguros con Jesús y María y morir en su compañía.
Por Jesucristo, nuestro Señor. Amén

[TITULO]Lectura Bíblica S. Mateo 2, 19-23; S. Lucas 2, 40[/TITULO]
Muerto ya Herodes, el ángel del Señor se apareció en sueños a José en Egipto y le dijo: Levántate, toma al niño y a su madre y vete a la tierra de Israel, porque son muertos los que atentaban contra la vida del niño. Levantándose, tomó al niño y a la madre y partió para la tierra de Israel. Mas habiendo oído que en Judea reinaba Arquelao en lugar de su padre Herodes, temió ir allá, y advertido en sueños se retiró a la región de Galilea, yendo a habitar en una ciudad llamada Nazaret, para que se cumpliese lo dicho por la profecía, que sería llamado Nazareno.
El niño crecía y se fortalecía lleno de sabiduría, y la gracia de Dios estaba con él.

[TITULO]Consideración[/TITULO]
"Expresión cotidiana de este amor en la vida de la Familia de Nazaret es el trabajo. El texto evangélico precisa el tipo de trabajo con el que José trataba de asegurar el mantenimiento de la Familia: el de carpintero. Esta simple palabra abarca toda la vida de José. Para Jesús éstos son los años de la vida escondida, de la que el evangelista tras el episodio ocurrido en el templo: «Bajo con ellos y vino a Nazaret, y vivía sujeto a ellos» (Lucas 2, 51). Esta «sumisión», es decir, la obediencia de Jesús en la casa de Nazaret, entendida también como participación en el trabajo de José. El que era llamado el «hijo del carpintero» había aprendido el trabajo de su «padre» putativo. Si la familia de Nazaret en el orden de la salvación y de la santidad es ejemplo y modelo para las familias humanas, lo es también analógicamente el trabajo de Jesús al lado de José, el carpintero. En nuestra época la Iglesia ha puesto también esto de relieve con la fiesta litúrgica de San José Obrero, el 1 de mayo. El trabajo humano y en particular el trabajo manual tienen en el Evangelio un significado especial. Junto con la humanidad del Hijo de Dios, el trabajo ha sido acogido en el misterio de la Encarnación, y también ha sido redimido de modo particular. Gracias a su banco de trabajo sobre el que ejercía su profesión con Jesús, José acercó el trabajo humano al misterio de la Redención."14

"En el crecimiento humano de Jesús «en sabiduría, edad y gracia» representa una parte notable la virtud de la laboriosidad, al ser «el trabajo un bien del hombre» que «transforma la naturaleza» y que hace al hombre «en cierto sentido más hombre»."15

"Se trata, en definitiva, de la santificación de la vida cotidiana, que cada uno debe alcanzar según el propio estado y que puede ser fomentada según un modelo accesible a todos: «San José es el modelo de los humildes, que el cristianismo eleva a grandes destinos; san José es la prueba de que para ser buenos y auténticos seguidores de Cristo no se necesitan "grandes cosas", sino que se requieren solamente las virtudes comunes, humanas, sencillas, pero verdaderas y auténticas»."

Para concluir, la Letanía de San José puede ser rezada, o bien la siguiente oración:

[TITULO]Oración[/TITULO]
Oh Dios,
que en tu inefable providencia,
elegiste a San José como esposo de la Madre de tu Hijo,
concédenos la gracia de tener como intercesor en el cielo
al que veneramos como protector en la tierra.
Por Jesucristo, nuestro Señor. Amén`
  },
  {
    numero: 7,
    titulo: 'Séptimo Domingo',
    contenido: `[TITULO]Séptimo domingo[/TITULO]

[TITULO]Su dolor:[/TITULO]
al perder al niño Jesús.

[TITULO]Su gozo:[/TITULO]
al encontrarlo en el Templo.

[TITULO]Oración[/TITULO]
San José,
ejemplar de toda santidad.
Grande fue tu dolor al perder, sin culpa,
al Niño Jesús, y haber de buscarle,
con gran pena, durante tres días;
pero mayor fue tu gozo cuando al tercer día
lo hallaste en el templo en medio de los Doctores.
Por este dolor y gozo,
te suplicamos nos alcances
la gracia de no perder nunca a Jesús por el pecado mortal;
y si por desgracia lo perdiéramos,
haz que lo busquemos con vivo dolor,
hasta que lo encontremos
y podamos vivir con su amistad
para gozar de Él contigo en el Cielo
y cantar eternamente su divina misericordia.
Por Jesucristo, nuestro Señor. Amén

[TITULO]Lectura Bíblica S. Lucas 2, 41-50[/TITULO]
Sus padres iban cada año a Jerusalén en la fiesta de la Pascua. Cuando era ya de doce años, al subir sus padres según el rito festivo y volverse ellos, acabados los días, el niño Jesús se quedó en Jerusalén sin que sus padres lo echasen de ver. Pensando que estaba en la caravana anduvieron camino de un día. Buscáronle entre parientes y conocidos, y al no hallarle, se volvieron a Jerusalén en busca suya. Al cabo de tres días le hallaron en el templo, sentado en medio de los doctores, oyéndoles y preguntándoles. Cuantos le oían quedaban estupefactos de su inteligencia y de sus respuestas.

Cuando sus padres le vieron, quedaron sorprendidos, y le dijo su madre: Hijo, ¿por qué has obrado así con nosotros? Mira que tu padre y yo, apenados, andábamos buscándote. Y Él les dijo: ¿Por qué me buscabais? ¿No sabíais que es preciso que me ocupe en las cosas de mi Padre? Ellos no entendieron lo que les decía.

[TITULO]Consideración[/TITULO]
Esta respuesta la oyó José, a quien María se había referido poco antes llamándole «tu padre». Y así es lo que se decía y pensaba: «Jesús... era, según se creía, hijo de José». No obstante, la respuesta de Jesús en el templo habría reafirmado en la conciencia del «presunto padre» lo que éste había oído una noche doce años antes: «José... no temas tomar contigo a María, tu mujer, porque lo engendrado en ella es del Espíritu Santo». Ya desde entonces, él sabía que era depositario del misterio de Dios, y Jesús en el templo evocó exactamente este misterio: «Debo ocuparme en las cosas de mi Padre».

Para concluir, la Letanía de San José puede ser rezada, o bien la siguiente oración:

[TITULO]Oración[/TITULO]
Oh Dios,
que en tu inefable providencia,
elegiste a San José como esposo de la Madre de tu Hijo,
concédenos la gracia de tener como intercesor en el cielo
al que veneramos como protector en la tierra.
Por Jesucristo, nuestro Señor. Amén`
  }
];

export default function SieteDomingosSanJoseScreen() {
  const [domingoSeleccionado, setDomingoSeleccionado] = useState<DomingoSanJose | null>(null);

  const renderTextoConTitulos = (texto: string) => {
    const partes = texto.split(/\[TITULO\](.*?)\[\/TITULO\]/g);
    const secciones = [];
    
    // Procesar las partes para agruparlas en secciones (título + contenido)
    for (let i = 1; i < partes.length; i += 2) {
      if (i + 1 < partes.length) {
        secciones.push({
          titulo: partes[i],
          contenido: partes[i + 1].trim()
        });
      }
    }
    
    return (
      <>
        {secciones.map((seccion, index) => (
          <View key={index} style={styles.sectionCard}>
            <ThemedText type="subtitle" style={{ color: Colors.secondary }}>{seccion.titulo}</ThemedText>
            <Text style={styles.prayer}>{seccion.contenido}</Text>
          </View>
        ))}
      </>
    );
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: domingoSeleccionado 
            ? `${domingoSeleccionado.titulo}` 
            : 'Siete Domingos de San José',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {domingoSeleccionado ? (
            <>
              <View style={styles.headerCard}>
                <Text style={styles.mainTitle}>{domingoSeleccionado.titulo}</Text>
              </View>
              {renderTextoConTitulos(domingoSeleccionado.contenido)}
              <TouchableOpacity 
                style={styles.botonVolver}
                onPress={() => setDomingoSeleccionado(null)}
              >
                <Text style={styles.botonVolverTexto}>Volver al listado</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={styles.headerCard}>
                <Text style={styles.mainTitle}>Los Siete Domingos de San José</Text>
              </View>
              
              <View style={styles.sectionCard}>
                <ThemedText type="subtitle" style={{ color: Colors.secondary }}>Introducción</ThemedText>
                <Text style={styles.prayer}>
                La Iglesia, siguiendo una antigua costumbre, prepara la fiesta de San José, el día 19 de marzo, dedicando al Santo Patriarca los siete domingos anteriores a esa fiesta —en recuerdo de los principales gozos y dolores de la vida de San José.
                </Text>
                <Text style={styles.prayer}>
                Comienzan el séptimo domingo antes del 19 de marzo (último domingo de enero o primero de febrero). Las consideraciones están tomadas de Juan Pablo II, Redemptores custos, 1989
                </Text>
              </View>
              
              {domingos.map((domingo) => (
                <TouchableOpacity 
                  key={domingo.numero}
                  style={styles.domingoItem}
                  onPress={() => setDomingoSeleccionado(domingo)}
                >
                  <Text style={styles.domingoItemTitulo}>{domingo.titulo}</Text>
                </TouchableOpacity>
              ))}
            </>
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
  headerCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
    textAlign: 'center',
  },
  sectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  prayer: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 24,
    marginBottom: 15,
  },
  domingoItem: {
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
  domingoItemTitulo: {
    fontSize: 22,
    color: Colors.primary,
    textAlign: 'center',
  },


  botonVolver: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  botonVolverTexto: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: Colors.primary,
    textAlign: 'center',
    marginVertical: 15,
  },
});