import { Text } from 'react-native';
import {
  AdoracionSantisimoLayout,
  BodyText,
} from '../../../components/adoracion-santisimo/AdoracionSantisimoLayout';
import Fonts from '../../../constants/Fonts';

const italic = {
  fontFamily: Fonts.italic,
  fontStyle: 'italic' as const,
};

function Paragraph({
  italicLead,
  allItalic,
  children,
}: {
  italicLead?: string;
  allItalic?: boolean;
  children: string;
}) {
  if (allItalic) {
    return <BodyText><Text style={italic}>{children}</Text></BodyText>;
  }

  if (italicLead) {
    return (
      <BodyText>
        <Text style={italic}>{italicLead}</Text>
        {children}
      </BodyText>
    );
  }

  return <BodyText>{children}</BodyText>;
}

export default function QuinceMinutosScreen() {
  return (
    <AdoracionSantisimoLayout
      title="Quince minutos en compañía de Jesús Sacramentado"
      headerTitle="Quince minutos"
    >
      <Paragraph>
        No es preciso, hijo mío, saber mucho para agradarme mucho; basta que me ames con fervor.
        Háblame, pues, aquí sencillamente, como hablarías a tu madre, a tu hermano.
      </Paragraph>

      <Paragraph italicLead="¿Necesitas hacerme a favor de alguien una súplica cualquiera? ">
        Dime su nombre, bien sea el de tus padres, bien el de tus hermanos y amigos; dime en seguida
        qué quisieras que hiciese actualmente por ellos. Pide mucho, mucho, no vaciles en pedir; me
        gustan los corazones generosos que llegan a olvidarse en cierto modo de sí mismos, para
        atender a las necesidades ajenas.
      </Paragraph>

      <Paragraph>
        Háblame así, con sencillez, con llaneza, de los pobres a quienes quisieras consolar, de
        los enfermos a quienes ves padecer, de los extraviados que anhelas volver al buen camino, de
        los amigos ausentes que quisieras ver otra vez a tu lado. Dime por todos una palabra de
        amigo, palabra entrañable y fervorosa. Recuérdame que he prometido escuchar toda súplica que
        salga del corazón y, ¿no ha de salir del corazón; el ruego que me dirijas por aquellos que
        tu corazón especialmente ama?
      </Paragraph>

      <Paragraph italicLead="Y para ti, ¿no necesitas alguna gracia? ">
        Hazme, si quieres, una como lista de tus necesidades, y ven, léela en mi presencia.
      </Paragraph>

      <Paragraph>
        Dime francamente que sientes soberbia, amor a la sensualidad y al regalo; que eres tal vez
        egoísta, inconstante, negligente... y pídeme luego que venga en ayuda de los esfuerzos, pocos
        o muchos que haces para quitar de ti tales miserias.
      </Paragraph>

      <Paragraph>
        No te avergüences, ¡pobre alma! ¡Hay en el cielo tantos justos, tantos santos de primer
        orden, que tuvieron esos mismos defectos! Pero rogaron con humildad... y poco a poco se vieron
        libres de ellos.
      </Paragraph>

      <Paragraph>
        Ni menos vaciles al pedirme bienes espirituales y corporales: Salud, memoria, éxito feliz en
        tus trabajos, negocios o estudios; todo eso puedo darte y lo doy, y deseo que me lo pidas en
        cuanto no se oponga, antes favorezca y ayude a tu santificación. Hoy por hoy, ¿qué necesitas?
        ¿Qué puedo hacer por tu bien? ¡Si supieras los deseos que tengo de favorecerte!
      </Paragraph>

      <Paragraph allItalic>
        ¿Traes ahora mismo entre manos algún proyecto? Cuéntamelo todo minuciosamente. ¿Qué te
        preocupa? ¿Qué piensas? ¿Qué deseas? ¿Qué quieres que haga por tu hermano, por tu amigo, por
        tu superior? ¿Qué desearías hacer por ellos?
      </Paragraph>

      <Paragraph allItalic>
        ¿Y por mí? ¿No sientes deseos de mi gloria? ¿No quisieras hacer algún bien a tus prójimos, a
        tus amigos, a quienes amas mucho, y que viven quizás olvidados de mí?
      </Paragraph>

      <Paragraph>
        Dime qué cosa llama hoy particularmente tu atención, qué anhelas más vivamente, y con qué
        medios cuentas para conseguirlo. Dime si te sale mal tu empresa, y yo te diré las causas del
        mal éxito. ¿No quisieras que me interesase algo en tu favor? Hijo mío, soy dueño de los
        corazones, y dulcemente los llevo, sin perjuicio de su libertad, adonde me place.
      </Paragraph>

      <Paragraph allItalic>
        ¿Sientes acaso tristeza o mal humor? Cuéntame, cuéntame, alma desconsolada, tus tristezas con
        todos sus pormenores. ¿Quién te hirió? ¿Quién lastimó tu amor propio? ¿Quién te ha
        despreciado? Acércate a mi Corazón, que tiene bálsamo eficaz para curar todas esas heridas del
        tuyo. Dame cuenta de todo, y acabarás en breve por decirme que, a semejanza de mí, todo lo
        perdonas, todo lo olvidas, y en pago recibirás mi consoladora bendición.
      </Paragraph>

      <Paragraph italicLead="¿Temes por ventura? ¿Sientes en tu alma aquellas vagas melancolías, ">
        que no por ser infundadas dejan de ser desgarradoras? Échate en brazos de mi providencia.
        Contigo estoy; aquí, a tu lado me tienes; todo lo veo, todo lo oigo, ni un momento te
        desamparo.
      </Paragraph>

      <Paragraph allItalic>
        ¿Sientes desvío de parte de personas que antes te quisieron bien, y ahora olvidadas se alejan
        de ti, sin que les hayas dado el menor motivo?
      </Paragraph>

      <Paragraph>
        Ruega por ellas, y yo las volveré a tu lado, si no han de ser obstáculo a tu santificación.
      </Paragraph>

      <Paragraph allItalic>
        ¿Y no tienes tal vez alegría alguna que comunicarme? ¿Por qué no me haces partícipe de ella?
        Soy un buen amigo.
      </Paragraph>

      <Paragraph>
        Cuéntame lo que hiciste desde ayer, desde la última visita que me hiciste, ¿has consolado y
        hecho como sonreír a tu corazón? Quizá has tenido agradables sorpresas, quizá has visto
        disipados negros recelos, quizá has recibido faustas noticias, alguna carta o muestra de
        cariño; has vencido alguna dificultad, o salido de algún lance apurado. Obra mía es todo
        esto, y yo te lo he proporcionado; ¿por qué no has de manifestarme por ello tu gratitud y
        decirme sencillamente, como un hijo a su padre: «¡Gracias, Padre mío, gracias!»? El
        agradecimiento trae consigo nuevos beneficios, porque al bienhechor le gusta verse
        correspondido.
      </Paragraph>

      <Paragraph allItalic>
        ¿Tampoco tienes promesa alguna para hacerme? Leo, ya lo sabes, en el fondo de tu corazón. A
        los hombres se les engaña fácilmente; a Dios, no. Háblame, pues, con toda sinceridad. ¿Tienes
        firme resolución de no exponerte ya más a aquella ocasión de pecado? ¿De privarte de aquel
        objeto que te dañó? ¿De no leer más aquel libro que exaltó tu imaginación? ¿De no tratar más
        aquella persona que turbó la paz de tu alma?
      </Paragraph>

      <Paragraph allItalic>
        ¿Volverás a ser dulce, amable y condescendiente con aquella otra a quien, por haberte
        faltado, has mirado hasta hoy como enemiga?
      </Paragraph>

      <Paragraph>
        Ahora bien, hijo mío; vuelve a tus ocupaciones habituales, al taller, a la familia, al
        estudio...; pero no olvides los quince minutos de grata conversación que hemos tenido aquí
        los dos, en la soledad del santuario. Guarda, en cuanto puedas, silencio, modestia,
        recogimiento, resignación, caridad con el prójimo. Ama a mi Madre, que lo es también tuya,
        la Virgen Santísima, y vuelve otra vez mañana con el corazón más amoroso, más entregado a mi
        servicio. En mi Corazón encontrarás cada día nuevo amor, nuevos beneficios, nuevos consuelos.
      </Paragraph>
    </AdoracionSantisimoLayout>
  );
}
