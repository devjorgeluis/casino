// sportRulesData.js
export const sportRulesData = [
    {
        id: 'apuestas-en-partidos-de-fútbol',
        title: 'Apuestas en partidos de fútbol',
        description: `Las apuestas en partidos de fútbol se aceptan para el tiempo reglamentario a menos que el organizador especifique algo diferente en la Línea. Los resultados registrados en el tiempo extra y los penales no se toman en cuenta al calcular apuestas en los resultados propuestos para el tiempo reglamentario. El tiempo compensado por el árbitro se atribuye a la mitad correspondiente o al tiempo reglamentario del partido. El tiempo reglamentario para los partidos de fútbol se establece en 90 minutos (dos mitades de 45 minutos cada una). En caso de partidos de fútbol con un formato diferente, aparece una marca especial en la Línea que muestra el formato del partido. El formato del juego también puede cambiar durante el partido. En tales casos, hay una marca especial hecha de antemano en el Programa (Línea) sobre el posible cambio de formato del juego realizado por el organizador.
            Las apuestas ofrecidas sobre los resultados de los partidos de fútbol:
                        El primer equipo ganará el partido(medio tiempo) - "Gana 1".
            Empate en el partido(medio tiempo) - "X".
            El segundo equipo ganará el partido(medio tiempo) - "Gana 2".
            El primer equipo no perderá el partido(medio tiempo) - "1X".
            Uno de los equipos ganará el partido(medio tiempo) - "12".
            El segundo equipo no perderá el partido(medio tiempo) - "2X".
            El primer equipo ganará(no perderá) el partido(medio tiempo) teniendo en cuenta el hándicap - "Hándicap 1".
            El segundo equipo ganará(no perderá) el partido(medio tiempo) teniendo en cuenta el hándicap - "Hándicap 2".
            Apuestas al número total de goles marcados por los equipos en el partido(medio tiempo) - "Total más (menos) el valor del argumento de la apuesta".
            Apuestas al número total de goles marcados por cada equipo individualmente en el partido(medio tiempo) - "Total más (menos) el valor del argumento de la apuesta".
            Apuestas al número total de goles marcados en el partido(medio tiempo) para que sea par(impar).
            Apuestas sobre la Mitad Más Goleadora(en cuál mitad se marcarán más goles):
                Tres opciones de apuestas están disponibles:
                a) La primera mitad será más productiva - "1 > 2"(el número de goles marcados en la primera mitad será mayor que en la segunda mitad).
                    b) La productividad de las mitades será la misma - "1 = 2"(se marcará el mismo número de goles en ambas mitades).
                        c) La segunda mitad será más productiva - "1 < 2"(el número de goles marcados en la segunda mitad será mayor que en la primera mitad).
            Apuestas sobre el resultado final del partido:
                Se ofrece seleccionar el resultado exacto registrado al final del partido de las opciones disponibles en el programa(línea).
            Apuestas sobre el resultado registrado en el medio tiempo y tiempo completo del partido:
                Se ofrece predecir los resultados del medio tiempo y tiempo completo del partido simultáneamente. 9 opciones de apuestas están disponibles:
            “1 / 1”: victoria del primer equipo tanto en el medio tiempo como en el tiempo completo.
            “1 / X”: victoria del primer equipo en el medio tiempo y empate en el tiempo completo.
            “1 / 2”: victoria del primer equipo en el medio tiempo y victoria del segundo equipo en el tiempo completo.
            “X / 1”: empate en el medio tiempo y victoria del primer equipo en el tiempo completo.
            “X / X”: empate tanto en el medio tiempo como en el tiempo completo.
            “X / 2”: empate en el medio tiempo y victoria del segundo equipo en el tiempo completo.
            “2 / 1”: victoria del segundo equipo en el medio tiempo y victoria del primer equipo en el tiempo completo.
            “2 / X”: victoria del segundo equipo en el medio tiempo y empate en el tiempo completo.
            “2 / 2”: victoria del segundo equipo tanto en el medio tiempo como en el tiempo completo.
            Apuestas sobre el primer(segundo) equipo en marcar(no marcar) un gol.
            Apuestas sobre ambos equipos en marcar(no marcar) un gol.
            Apuestas sobre al menos uno de los equipos en no marcar(marcar) un gol.
                Apuestas: un gol será marcado(no será marcado) en la primera(segunda) mitad.
                    Apuestas: cuál equipo marcará el primer(segundo o siguiente) gol en el partido(en la mitad)
            Apuestas: en cuál de los rangos de tiempo ofrecidos se marcará el primer(segundo o siguiente) gol(los rangos de tiempo en minutos se especifican de manera inclusiva).
                Apuestas: cuál equipo marcará el último gol en el partido.
                    Apuestas: en cuál de los rangos de tiempo ofrecidos se marcará el último gol(los rangos de tiempo en minutos se especifican de manera inclusiva).
            Si solo se marca un gol en el partido, se considera tanto el primer como el último gol.
            Por ejemplo, si el partido termina con el marcador 1: 0, el gol marcado se considera tanto el primer como el último gol.Por lo tanto, las apuestas hechas sobre los resultados "el primer equipo en marcar el primer gol" y "el primer equipo en marcar el último gol" se consideran ganadas.
            Las apuestas: cuál equipo realizará el saque inicial en el partido:
            Los canales de TV y transmisiones indicados por el organizador en el programa(línea) se toman como base durante el cálculo de las apuestas hechas en este resultado.Si el resultado del evento no se determina a partir de las fuentes mencionadas, la información emitida por los sitios web incluidos en la tabla se toma como base durante el cálculo.Si el resultado no puede determinarse a partir de las fuentes mencionadas anteriormente, las apuestas se calculan con las cuotas “1” (uno).
            Apuestas sobre penal a ser otorgado(no ser otorgado) en el partido.
            Apuestas sobre expulsión(tarjeta roja) a ser otorgada(no ser otorgada) en el partido.
            Apuestas sobre gol en propia puerta a ocurrir(no ocurrir) en el partido.
            Gol en propia puerta es el balón marcado en la propia meta del equipo.El gol en propia puerta se considera a favor del equipo en cuyo beneficio se registró el gol.
            Apuestas sobre el primer equipo en ser ganador en el número de amonestaciones(tarjetas amarillas) en el partido(la mitad) - “Gana1”.
            Apuestas sobre ambos equipos en recibir igual número de amonestaciones(tarjetas amarillas) en el partido(la mitad) - “Empate”.
            Apuestas sobre el segundo equipo en ser ganador en el número de amonestaciones(tarjetas rojas) en el partido(la mitad) - “Gana2”.
            Apuestas sobre el primer equipo en ganar(no perder) en el número de amonestaciones(tarjetas amarillas) en el partido(la mitad) teniendo en cuenta el hándicap - “Hándicap 1”.
            Apuestas sobre el segundo equipo en ganar(no perder) en el número de amonestaciones(tarjetas amarillas) en el partido(la mitad) teniendo en cuenta el hándicap - “Hándicap 2”.
            Apuestas sobre el número de amonestaciones(tarjetas amarillas) en ser más(menos) del valor ofrecido de argumento de apuesta.
            Apuestas sobre el número de amonestaciones en ser par(impar).
                Apuestas: el jugador de cuál equipo recibirá la primera amonestación(tarjeta amarilla) en el partido(la mitad) o ambos equipos recibirán la primera amonestación simultáneamente.
            (Si, según el informe oficial del partido, dos equipos recibieron la primera amonestación en el mismo minuto de la misma situación de juego, y este resultado no fue ofrecido por el proveedor en el programa, las apuestas hechas sobre los resultados "el primer equipo en recibir la primera amonestación" y "el segundo equipo en recibir la primera amonestación" se calculan con las cuotas 1(uno)).
            Apuestas sobre el rango de tiempo, en el cual la primera amonestación será otorgada a cualquier jugador del equipo(los rangos de tiempo en minutos se especifican de manera inclusiva).
                Apuestas: cuál equipo recibirá la siguiente amonestación(ninguno de los equipos recibirá la siguiente amonestación).
            Si un jugador es expulsado después de dos amonestaciones, durante el cálculo de las apuestas hechas sobre amonestaciones(tarjetas amarillas) solo se toma en cuenta una de ellas, la segunda amonestación recibida(tarjeta amarilla) se calcula como tarjeta roja.

            Por ejemplo, en el partido un jugador fue amonestado con dos tarjetas amarillas y fue expulsado, no se otorgaron más amonestaciones.En este caso, las apuestas se calcularán considerando que se registró una tarjeta amarilla y una tarjeta roja en el partido.Si el jugador ha recibido una tarjeta amarilla en el tiempo regular y la segunda tarjeta amarilla durante uno de los tiempos adicionales(extras) y ha sido expulsado del campo, entonces se considera que durante el tiempo adicional(extra) el jugador ha recibido 1(una) tarjeta roja, no amarilla, y durante el tiempo regular 1(una) tarjeta amarilla.Al calcular las apuestas hechas sobre expulsiones y amonestaciones, solo se tienen en cuenta las otorgadas directamente a los jugadores involucrados en el juego en ese momento.La excepción es cuando el árbitro da una tarjeta amarilla o roja al jugador durante el descanso, quien ha jugado el primer tiempo y aún no ha sido sustituido.En este caso, la tarjeta amarilla o roja otorgada también se toma en cuenta al calcular las apuestas hechas sobre expulsiones y amonestaciones(la tarjeta dada durante el descanso se considera otorgada durante el segundo tiempo, y el minuto mostrado es el 46).No se toman en cuenta las expulsiones y amonestaciones otorgadas a los jugadores en reserva, los jugadores que participaron en el partido pero fueron sustituidos, el entrenador o el personal de entrenamiento al calcular las apuestas hechas sobre expulsiones y amonestaciones.Las expulsiones y amonestaciones otorgadas después del silbato final también se excluyen al calcular las apuestas sobre expulsiones y amonestaciones.
            El tiempo registrado de la expulsión o amonestación se considera el momento en que el árbitro muestra la tarjeta amarilla o roja al jugador.
            Apuestas sobre el primer equipo en ser ganador en el número de tiros de esquina en el partido(medio tiempo) “Gana1”.
            Apuestas sobre ambos equipos para realizar un número igual de tiros de esquina en el partido(medio tiempo) – “Empate”.
            Apuestas sobre el segundo equipo para ser ganador en el número de tiros de esquina en el partido(medio tiempo) – “Gana2”.
            Apuestas sobre el primer equipo para ganar(no perder) en el número de tiros de esquina en el partido(medio tiempo) con el handicap tomado en cuenta – “Handicap 1”.
            Apuestas sobre el segundo equipo para ganar(no perder) en el número de tiros de esquina en el partido(medio tiempo) con el handicap tomado en cuenta – “Handicap 2”.
            Apuestas sobre el número de tiros de esquina realizados para ser más(menos) del valor ofrecido del argumento de la apuesta.Apuestas sobre el número de tiros de esquina realizados para ser par(impar).
                Apuestas: qué equipo realizará el primer tiro de esquina en el partido.Apuestas sobre el rango de tiempo, dentro del cual se realizará el primer tiro de esquina(los rangos de tiempo en minutos se especifican de manera inclusiva).
                    Apuestas: qué equipo realizará el próximo tiro de esquina(ninguno de los equipos realizará el próximo tiro de esquina).
            Un tiro de esquina se considera realizado solo cuando el balón se lanza desde un punto de tiro de esquina.El tiempo registrado del tiro de esquina se considera el momento en que el árbitro otorga el tiro de esquina.Si se otorgó un tiro de esquina, pero no se realizó, no se toma en cuenta al calcular las apuestas sobre tiros de esquina.
                Apuestas: qué equipo hará la primera sustitución(ambos equipos harán la primera sustitución simultáneamente).
            Apuestas sobre el número de sustituciones realizadas para ser más(menos) del valor ofrecido del argumento de la apuesta.
                Apuestas: en cuál de los rangos de tiempo ofrecidos se realizará la primera sustitución(los rangos de tiempo en minutos se especifican de manera inclusiva).
            Apuestas sobre el jugador sustituto para marcar(no marcar) un gol.
            Apuestas sobre la primera sustitución para ser realizada en la primera mitad(medio tiempo, la segunda mitad).
            Apuestas sobre el número de tiros libres en el partido para ser más(menos) del valor ofrecido del argumento de la apuesta.
            Apuestas sobre el número de fueras de juego en el partido para ser más(menos) del valor ofrecido del argumento de la apuesta.
                Apuestas: en el partido el tiempo de posesión del balón del primer equipo(segundo equipo), expresado en porcentaje, será más(menos) del valor ofrecido del argumento de la apuesta(expresado en porcentaje).
            Apuestas sobre:
            a) Saque de meta para ocurrir el primero(el último) en el partido. (La apuesta se considera ganada si de las opciones, ofrecidas en el programa(línea), un saque de meta fue otorgado el primero(el último) en el partido, y fue realizado).
                b) Saque de banda(después de fuera) para ser realizado el primero(el último) en el partido. (La apuesta se considera ganada si de las opciones, ofrecidas en el programa(línea), un saque de banda fue otorgado el primero(el último) en el partido y, fue realizado).
                    c) Tiro de esquina para ocurrir el primero(el último) en el partido. (La apuesta se considera ganada si de las opciones, ofrecidas en el programa(línea), un tiro de esquina fue otorgado el primero(el último) en el partido, y fue realizado).
                        d) Falta para ocurrir el primero(el último) en el partido. (La apuesta se considera ganada si de las opciones, ofrecidas en el programa(línea), un tiro libre(incluido el penalti) fue otorgado, y fue realizado).
                            e) Fuera de juego para ocurrir el primero(el último) en el partido. (La apuesta se considera ganada si de las opciones ofrecidas en el programa(línea), un fuera de juego fue registrado el primero(el último) en el partido, y el partido se reanudó con un tiro libre indirecto.
                                f) Gol para ocurrir el primero(el último) en el partido. (La apuesta se considera ganada si de las opciones ofrecidas en el programa(línea), un gol fue registrado el primero(el último) en el partido).
            El tiempo registrado de “Saque de Meta”, “Saque de Banda”, “Tiro de Esquina”, “Tiro Libre”, “Penalti”, “Tiro Libre Indirecto”, “Fuera de Juego” y “Gol” se considera el momento, en que los eventos mencionados anteriormente fueron otorgados(registrados) por el árbitro.Estos resultados se consideran completados(realizados) si:
            “Saque de Meta” – fue otorgado y el balón fue lanzado desde el punto asignado.
            “Saque de Banda” – fue otorgado y el balón fue lanzado desde el punto donde el balón cruzó la línea de banda.
            “Tiro de Esquina”- fue otorgado y el balón fue lanzado desde el punto de tiro de esquina.
            “Tiro Libre” – fue otorgado y el partido se reanudó con un tiro libre.
            “Penalti” – fue otorgado y realizado.
            “Tiro Libre Indirecto” – fue otorgado y tomado desde el punto asignado.
            “Fuera de Juego” – fue otorgado y el balón fue lanzado con un tiro libre indirecto.
            “Gol”- el balón fue registrado en la portería del oponente.


                Apuestas: el jugador especificado marcará(no marcará, marcará el primer gol, marcará el próximo gol) en el partido.
            El gol en propia puerta no se toma en cuenta al calcular las apuestas mencionadas anteriormente.Si el jugador especificado no juega en absoluto(no participa en el partido), la apuesta se calcula por las cuotas “1” (uno).Si el jugador es un sustituto y hasta el final del tiempo principal del juego(incluido el tiempo añadido por el árbitro) pasa al menos 1 segundo en el campo, se considera que el jugador especificado ha participado en el partido y todas las apuestas ofrecidas para este jugador se calculan según este reglamento sin ninguna excepción.
            Por ejemplo, si se hace una apuesta a que el jugador marcará el primer gol, y este jugador actúa como un sustituto en el campo al final del partido cuando el primer gol ya se ha marcado, entonces las apuestas hechas sobre el resultado de que este jugador especificado marque el primer gol se consideran como perdidas, ya que el jugador ha participado efectivamente en el partido pero no ha marcado el primer gol.
                Apuestas: si en el partido:
            Se registrará un doblete(el mismo jugador marcará exactamente dos pero no más goles en el partido).
            Se registrará un hat - trick(el mismo jugador marcará exactamente tres pero no más goles en el partido).
            Se registrará un póker(el mismo jugador marcará exactamente cuatro pero no más goles en el partido).
            Se registrará un penta - trick(el mismo jugador marcará exactamente cinco pero no más goles en el partido).
            Los resultados de estas apuestas se calculan sobre la siguiente base: el registro de un penta - trick, realizado por el jugador dado, no implica también el registro de un póker, hat - trick o doblete realizado por él(de la misma manera, el registro de un póker no implica el registro de un hat - trick y doblete y el registro de un hat - trick no implica el registro de un doblete).Si en el partido se marcaron 5 goles en la portería del oponente por el mismo jugador, no significa el registro tanto de un hat - trick como de un doblete, el cálculo se realiza según el resultado final registrado en el partido.Si dos o más de los resultados mencionados anteriormente fueron registrados por diferentes jugadores, las apuestas se calcularán como ganadas.
            Por ejemplo, si en el mismo partido tanto el doblete como el póker son registrados por diferentes jugadores, las apuestas hechas sobre los resultados “Póker” y “Doblete” se considerarán como ganadas.


                Apuestas: cómo se marcará este gol:
            a) Se registrará un autogol(si el balón se marca en la propia portería del equipo).
                b) Se registrará un gol de cabeza(si el gol se marca con un cabezazo en la portería del oponente).
                    c) Se registrará un gol de tiro libre(si el gol se ha marcado en la portería del oponente por tiro libre sin jugar el balón.Si el gol se ha marcado por un saque de esquina directo, también se considera como gol marcado por tiro libre.
                        d) Se registrará un gol de penalti(si el gol se ha marcado por un lanzamiento de penalti directo; el caso en que el gol se marca después de que el balón haya reentrado en juego o haya sido desviado, no se tiene en cuenta durante el cálculo de esta apuesta).
            e) Se registrará un gol regular(si el gol se marca con un disparo de pie o de las otras maneras permitidas, excepto con un cabezazo; si el gol no se marca por un tiro libre ni por un penalti; y si el gol no es un autogol.
                Apuestas: el equipo dado tendrá(o no) una victoria de remontada.
            La victoria de remontada significa que el equipo debe perder en cualquier momento durante el partido antes de terminar victorioso.
            Apuestas sobre la suma total de los números presentados en las camisetas de los jugadores que marcaron goles en el partido: “total más(menos) del valor ofrecido del argumento de la apuesta”.
            Los jugadores que marcaron autogoles no se tienen en cuenta durante el cálculo de la apuesta mencionada anteriormente.Los números de los jugadores que marcaron más de un gol se calculan solo una vez.
            Apuestas sobre goles marcados y resultado del partido:
            Se ofrece predecir goles marcados y resultado del partido.Las siguientes opciones de apuestas están disponibles:
            “Ambos equipos marcan un gol y Gana1”
            “Ambos equipos marcan un gol y Empate”
            “Ambos equipos marcan un gol y Gana2”
            “Total del partido ser más(menos) del valor dado del argumento de apuesta y Gana1”
            “Total del partido ser más(menos) del valor dado del argumento de apuesta y Empate”
            “Total del partido ser más(menos) del valor dado del argumento de apuesta y Gana2”


            Las apuestas sobre los otros resultados de los partidos pueden ser ofrecidas por el proveedor en el programa(línea).
            Apuestas sobre el número de minutos que se añadirán al final del partido(el medio) por el árbitro.
            Durante el cálculo de las apuestas hechas en estos resultados se considera:
            El tiempo(en minutos) mostrado en el tablero iluminado por el árbitro asistente.
            La información sobre el tiempo añadido(en minutos) mostrado en la pantalla de televisión.
            La información proporcionada por los sitios web que están incluidos en la tabla.
            Las fuentes, que se toman como base durante el cálculo de las apuestas mencionadas anteriormente, están organizadas en orden de prioridad.Si el resultado de la apuesta no puede ser determinado por ninguna de estas fuentes, las apuestas se calculan con las cuotas “1” (uno).
            Si la información sobre el tiempo añadido mostrado(en minutos) y el tiempo real de juego difieren, el tiempo mostrado se toma en cuenta durante el cálculo de las apuestas.
            Si la información sobre el tiempo adicional(en minutos) mostrado en la pantalla de televisión o en el tablero iluminado por un árbitro asistente se cambia(aumenta o disminuye) en el futuro por alguna razón, las apuestas se calculan de acuerdo con la información inicialmente mostrada.
                Apuestas: el primer equipo ganará por el número de veces que el balón golpea el poste / travesaño en el partido(medio tiempo) – “Gana 1”.
            Apuestas: empate por el número de veces que el balón golpea el poste / travesaño en el partido(medio tiempo) – “Empate”.
            Apuestas: el segundo equipo ganará por el número de veces que el balón golpea el poste / travesaño en el partido(medio tiempo) – “Gana 2”.
            Apuestas: el primer equipo ganará(no perderá) por el número de veces que el balón golpea el poste / travesaño en el partido(medio tiempo) teniendo en cuenta el “Handicap 1”.
            Apuestas: el segundo equipo ganará(no perderá) por el número de veces que el balón golpea el poste / travesaño en el partido(medio tiempo) teniendo en cuenta el “Handicap 2”.
            Apuestas: el número de veces que el balón golpea el poste / travesaño es más(menos) del número total ofrecido.
            En todos los demás casos, se cuenta como parte del marco de la portería(woodwork).
            Si el balón toca el poste y luego el travesaño, o viceversa, primero toca el travesaño y luego el poste, o el poste y el travesaño al mismo tiempo, se considera que el balón ha tocado el marco de la portería 1(una) vez, si después del primer toque el balón no ha tocado a ningún jugador ni al árbitro.
            Apuestas sobre el número de repeticiones de video en el partido(medio tiempo) – “Total más(menos) del número total”.
            Se considera repetición de video, cuando el árbitro muestra la repetición de video con un gesto(con sus manos muestra un rectángulo en el aire) y se dirige hacia la pantalla de repetición de video.
            No se considera repetición de video, cuando en el marcador o en la pantalla se muestran los mensajes de “Revisión de Gol”, “Revisión de Penal” (también, mensajes referentes a todas las revisiones), y cuando el árbitro lleva su mano al oído.
            Tampoco se considera repetición de video, cuando el árbitro discute el episodio del juego con los asistentes.
            Apuestas sobre el período de tiempo en el que el primer(segundo) equipo ha estado adelante(por el tiempo en que los marcadores estaban iguales) en el partido(medio) – “Total más(menos) del número total”.
            Al calcular las apuestas mencionadas anteriormente, se tienen en cuenta los minutos completos.Por ejemplo, si el primer equipo marca el primer gol en el minuto 9 con 26 segundos, y el segundo equipo luego iguala el marcador en el minuto 12 con 43 segundos, se considera que el primer equipo ha estado adelante en el marcador durante 3(tres) minutos(el gol del primer equipo se marca en el minuto 10, y el gol del segundo equipo se marca en el minuto 13).El tiempo compensado por el árbitro al final del partido y medio tiempo no se toma en cuenta.
            Apuestas sobre el número total de minutos en los que se marcan los goles(el tiempo en el que se marca el gol) durante el partido – “Total más(menos) del número total”
            Al calcular las apuestas mencionadas anteriormente, el tiempo compensado por el árbitro al final del partido y medio tiempo no se toma en cuenta.Por ejemplo, si los goles se marcan en el minuto 24 con 15 segundos, 47 con 50 segundos, 90 + 2 con 15 segundos y 90 + 4 con 36 segundos, entonces se considera que el total de minutos de los goles marcados en el partido será(25 + 48 + 90 + 90=253 minutos).
                Apuestas: el número de apariciones del equipo médico en el campo en un partido – “Total más(menos) del valor total”.
            En caso de que más de un equipo médico entre al campo simultáneamente para un jugador o jugadores del mismo equipo, o para jugadores de dos equipos competidores, entonces se considera que el equipo médico ha entrado al campo una vez.Por ejemplo, si en el partido Inglaterra - España los jugadores de los dos equipos opuestos han colisionado, sufrieron lesiones y sus equipos médicos han entrado al campo, entonces en este caso se considera que el número de apariciones del equipo médico en el campo es 1(una) o que el equipo médico ha entrado al campo una vez.
            En caso de que el equipo médico brinde asistencia médica al jugador fuera de los límites del campo, no se considera que el equipo médico ha entrado al campo.
            Los sitios web oficiales de los torneos, incluidos en la tabla, se toman como base durante el cálculo de apuestas hechas sobre los resultados de partidos de fútbol(excepto para las apuestas "qué equipo realizará el saque inicial" y "apuestas sobre el número de minutos, que se añadirán al final del partido (la mitad) por el árbitro").
            El partido de fútbol(la duración de 90 minutos), que ha sido interrumpido y no ha continuado o terminado durante 24 horas se considera completado si no menos de 70 minutos fueron jugados completamente.Si el evento ha sido interrumpido y se considera no completado, las apuestas, cuyos resultados ya hayan sido determinados en el momento de su interrupción y no dependan del resultado final del evento, están sujetas a cálculo, y todas las otras apuestas se calculan con las cuotas “1”.
            La victoria(pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas.En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            Las apuestas también se aceptan sobre otros posibles resultados de partidos de fútbol ofrecidos por el organizador en la Línea.
            Para la descripción detallada de los mercados presione aquí.
        `
    },
    {
        id: 'apuestas-en-hockey-sobre-hielo',
        title: 'Apuestas en hockey sobre hielo',
        description: `Las apuestas sobre los resultados de los partidos de hockey sobre hielo se aceptan para el tiempo reglamentario, excepto para el resultado de "Ganador del juego", donde, al calcular las apuestas, también se tiene en cuenta el resultado fijado durante el tiempo adicional (prórroga) o en una tanda de penaltis.
            Los resultados fijados en la prórroga y en la tanda de penaltis no se toman en cuenta al calcular apuestas sobre los resultados propuestos para el tiempo reglamentario.
            Las apuestas ofrecidas sobre los resultados de los partidos de hockey sobre hielo son:
            El primer equipo ganará el partido (período) – “Gana1”.
            Empate en el partido (período) – “X”.
            El segundo equipo ganará el partido (período) – “Gana 2”.
            El primer equipo no perderá el partido (período) – “1X”.
            Uno de los equipos ganará el partido (período) – “12”.
            El segundo equipo no perderá el partido (período) – “2X”.
            El primer equipo ganará (no perderá) el partido (período), teniendo en cuenta el handicap – “Handicap 1”.
            El segundo equipo ganará (no perderá) el partido (período), teniendo en cuenta el handicap – “Handicap 2”.
            Apuestas sobre el número total de goles marcados por los equipos en el partido (período) – “Total más (menos) del número total“
            Apuestas sobre el número total de goles marcados por cada equipo en el partido (período) – “Total más (menos) del número total”.
            Apuestas: el número total de goles será par (impar) en el partido (período).
            Apuestas: quién será el ganador del partido.


            Los resultados registrados en la prórroga (tanda de penaltis) también se toman en cuenta durante el cálculo de apuestas hechas sobre este resultado.


            Puede haber campeonatos o torneos, en los que se juegue una tanda de penaltis inmediatamente en caso de empate al final del tiempo reglamentario sin jugar una prórroga. Además, según los requisitos de torneos o campeonatos particulares, la prórroga puede jugarse tantas veces como sea necesario hasta que uno de los equipos gane.
            También es posible que después del empate en el tiempo reglamentario, los equipos terminen el juego con el resultado empatado. En este caso, si el proveedor ofreció apuestas sobre el resultado de "Ganador del partido", se calculará con las cuotas “1” (uno).
            Apuestas sobre el resultado final del partido.
            Se ofrece seleccionar el marcador exacto registrado en el resultado final del partido, según las opciones posibles incluidas en la Línea.
            Apuestas: el primer (segundo) equipo marcará (no marcará) un gol.
            Apuestas: ambos equipos marcarán (no marcarán) un gol.
            Apuestas: qué equipo marcará (ninguno de los equipos marcará) el primer (segundo o siguiente) gol en el partido.
            Apuestas sobre los puntos anotados por el jugador.
            En hockey sobre hielo, los puntos anotados por un jugador son iguales a la suma del total de goles marcados y el número de asistencias anotadas en un partido dado.
            Si varios jugadores participaron en un ataque que terminó con un gol, a todos estos jugadores se les pueden otorgar puntos.
            Para calcular las apuestas sobre los puntos anotados por los jugadores, se toma como base la información en el sitio web oficial de este campeonato o torneo.
            Apuestas sobre goles marcados y el resultado del partido.
            Para adivinar los goles marcados y el resultado del partido. Se ofrecen las siguientes opciones:
            “El total del partido es más (menos) del número especificado y Gana1 (Gana1-Empate)”
            “El total del partido es más (menos) del número especificado y Empate (Gana1-Gana2)”
            “El total del partido es más (menos) del número especificado y Gana2 (Empate-Gana2)”


            Apuestas sobre los períodos de mayor anotación.
            En qué período se anotarán más goles.
            Apuestas: el ganador del partido se determinará en tiempo extra (en una tanda de penaltis).
            Apuestas sobre la cantidad de penaltis de 2 minutos en el partido.
            Al calcular apuestas sobre este resultado, no se toma en cuenta el número de penaltis de dos minutos, sino su tiempo total.
            Por ejemplo, hubo 5 (cinco) penaltis de dos minutos en el partido: el primer equipo recibió 2 penaltis de dos minutos y el segundo equipo recibió 3 penaltis de dos minutos. En este caso, al calcular apuestas sobre penaltis de dos minutos, se toma en cuenta que el primer equipo tuvo un penalti de 4 minutos (2×2) y el segundo de 6 minutos (2×3).
            Apuestas sobre el número de tiros a gol en el partido.
            Apuestas: el equipo especificado tendrá (no tendrá) victoria de remontada.
            La victoria de remontada significa que el equipo debe perder en cualquier punto durante el partido antes de terminar victorioso.
            Apuestas sobre el número total de repeticiones de video en el partido – “Total más (menos) del número total”.
            Al calcular apuestas sobre el número de repeticiones de video se toman en cuenta todas las repeticiones de video, independientemente de su iniciador.
            Para calcular los resultados de los partidos de hockey sobre hielo, se toman como base los sitios web oficiales de los Campeonatos y torneos (presentados en la tabla), excepto para "Apuestas sobre puntos anotados por el jugador". Un partido de hockey sobre hielo que fue interrumpido y no continuó o se completó dentro de las 24 horas se considera que ha tenido lugar si se jugaron al menos 50 minutos. En otros casos, los partidos se consideran inválidos. Las apuestas realizadas sobre el resultado del "Ganador del juego" se calculan con cuotas de “1” (uno), si el partido interrumpido terminó con un marcador igual y se considera que ha tenido lugar.
            Los resultados de partidos interrumpidos y no finalizados, que ya son conocidos en el momento de la interrupción y no dependen del resultado final del partido, están sujetos a cálculo, y las apuestas restantes se calculan por cuotas de “1” (uno). La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas. En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            También se aceptan apuestas sobre otros posibles resultados en los partidos de hockey sobre hielo y serán ofrecidos por el organizador en la Línea.
            Para una descripción detallada del mercado, presione aquí.
        `
    },
    {
        id: 'apuestas-en-baloncesto',
        title: 'Apuestas en baloncesto',
        description: `Para los partidos de baloncesto, el tiempo reglamentario se establece en 40 o 48 minutos (4 cuartos, cada uno dura 10 o 12 minutos respectivamente) de tiempo neto de juego, dependiendo de los requisitos del campeonato o torneo que se esté llevando a cabo. Los resultados registrados en la prórroga también se toman en cuenta durante el cálculo de las apuestas hechas sobre los resultados de los partidos de baloncesto. Si el partido termina en empate, y la prórroga no se juega según los requisitos del torneo conducido o por cualquier otra razón y si el resultado “Empate” no ha sido ofrecido en el programa (línea), entonces las apuestas hechas sobre los resultados “Gana1” y “Gana2” se sujetan a cálculo con las cuotas “1” (uno).

            De acuerdo con los requisitos de un campeonato o torneo llevado a cabo, después del resultado del partido de vuelta, se puede asignar un juego de prórroga para definir al ganador. En tales casos, los resultados registrados en la prórroga no se toman en cuenta durante el cálculo de las apuestas hechas sobre los resultados del partido de vuelta.


            Los partidos de baloncesto también pueden ser conducidos en formato 3x3. Los partidos en este formato duran 10 minutos o hasta que uno de los equipos alcance 21 puntos. Los resultados registrados en la prórroga también se toman en cuenta durante el cálculo de las apuestas hechas sobre los resultados del partido. Durante los partidos conducidos en este formato, el proveedor realiza un aviso informando sobre el formato del partido en el programa (línea). Si durante un partido en formato 3x3, debido a descalificación, lesiones o la expulsión del jugador del juego, quedan dos jugadores en la alineación de uno de los equipos participantes, entonces el partido se interrumpe y se considera no completado. Las apuestas, cuyos resultados ya se hayan determinado en el momento de la interrupción y no dependan del resultado final del partido, están sujetas a cálculo, y todas las demás apuestas se calculan con las cuotas “1” (uno).


            Apuestas ofrecidas sobre los resultados de los partidos de baloncesto:
            El primer equipo ganará el partido (incluyendo la prórroga) - "Gana1".
            El segundo equipo ganará el partido (incluyendo la prórroga) - "Gana2".
            El primer equipo ganará el partido (medio, cuarto) - "Gana1".
            Empate en el partido (medio, cuarto) - "X".
            El segundo equipo ganará el partido (medio, cuarto) - "Gana2"
            El primer equipo no perderá el partido (medio, cuarto) - "1X".
            Uno de los equipos ganará el partido (medio, cuarto) - "12".
            El segundo equipo no perderá el partido (medio, cuarto) - "X2".
            El primer equipo ganará (no perderá) el partido (medio, cuarto) teniendo en cuenta el handicap - "Handicap 1".
            El segundo equipo ganará (no perderá) el partido (medio, cuarto) teniendo en cuenta el handicap - "Handicap 2".
            Apuestas sobre el número total de puntos anotados por los equipos en el partido (medio, cuarto) - "Total más (menos) del valor total".
            Apuestas sobre el número total de puntos anotados por cada equipo individualmente en el partido (medio, cuarto) - "Total más (menos) del valor total".
            Apuestas sobre el número total de puntos anotados en el partido (medio, cuarto) será par (impar).
            Apuestas: cuál mitad (cuarto) será la más productiva:

            Para predecir en qué mitad (cuarto) se anotará el mayor número de puntos. Si los puntos para el medio tiempo (dos, tres o cuatro cuartos) son iguales, entonces las apuestas para este medio tiempo (cuartos) se calculan con las cuotas “1” (uno). Por ejemplo, se hizo una apuesta a que el segundo cuarto sería el más productivo. El partido terminó con el siguiente marcador 59:41 (10:16, 20:6, 18:8, 11:11). Los puntos del primer, segundo y tercer cuartos son iguales a 26 puntos, por lo que las apuestas hechas en los primeros, segundos y terceros cuartos están sujetas a cálculo con las cuotas “1” (uno), y las apuestas hechas en el cuarto cuarto se consideran perdidas ya que para el cuarto cuarto se registraron 22 puntos.
            Apuestas sobre el número total de puntos anotados en el cuarto más productivo para ser más (menos) del valor total ofrecido.
            El cálculo se basa en el principio de calcular las apuestas hechas en el medio tiempo (cuarto) más productivo.
            Apuestas sobre si se jugará (no se jugará) la prórroga.
            Apuestas: cuál de los equipos será el primero (último) en anotar puntos.
            Apuestas: cuál de los equipos realizará la primera (última) falta.
            Apuestas: cuál de los equipos ganará el primer rebote.
            Apuestas: el primer equipo ganará (no perderá) el partido (medio tiempo, cuarto) con el número de rebotes teniendo en cuenta el hándicap – “Hándicap 1”.
            Apuestas: el segundo equipo ganará (no perderá) el partido (medio tiempo, cuarto) con el número de rebotes teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de rebotes realizados por los equipos en un partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas sobre el número total de rebotes realizados por cada equipo individualmente en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas: el primer equipo ganará (no perderá) el partido (medio tiempo, cuarto) con el número de rebotes ofensivos, teniendo en cuenta el hándicap – “Hándicap 1”.
            Apuestas: el segundo equipo ganará (no perderá) el partido (medio tiempo, cuarto) con el número de rebotes ofensivos, teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de rebotes ofensivos realizados por los equipos en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas: el primer equipo ganará (no perderá) con el número de rebotes defensivos en el partido (medio tiempo, cuarto), teniendo en cuenta el hándicap – “Hándicap 1”.
            Apuestas: el segundo equipo ganará (no perderá) con el número de rebotes defensivos en el partido (medio tiempo, cuarto), teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de rebotes defensivos realizados por los equipos en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Los rebotes de equipo (no registrados a favor de ningún jugador) también se toman en cuenta al calcular las apuestas hechas sobre los resultados de los rebotes.
            Apuestas: el primer equipo ganará (no perderá) el partido (medio tiempo, cuarto) por el número de asistencias, teniendo en cuenta el hándicap – “Hándicap 1”.
            Apuestas: el segundo equipo ganará (no perderá) el partido (medio tiempo, cuarto) por el número de asistencias, teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de asistencias realizadas por los equipos en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas sobre el número total de asistencias individuales realizadas por cada equipo en el partido (medio tiempo, cuarto) – “Total más (menos) del número total”.
            Apuestas: el primer equipo ganará (no perderá) el partido (medio tiempo, cuarto) con el número de faltas, teniendo en cuenta el hándicap – “Hándicap 1”.
            Apuestas: el segundo equipo ganará (no perderá) el partido (medio tiempo, cuarto) con el número de faltas, teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de faltas cometidas por los equipos en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas sobre el número total de faltas cometidas individualmente por cada equipo en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Las faltas de equipo (no registradas a favor de ningún jugador) no se toman en cuenta al calcular las apuestas hechas sobre los resultados de las faltas.
            Apuestas: el primer equipo ganará (no perderá) con el número de pérdidas de balón en el partido (medio tiempo, cuarto), teniendo en cuenta el hándicap – “Hándicap 1”.
            Apuestas: el segundo equipo ganará (no perderá) con el número de pérdidas de balón en el partido (medio tiempo, cuarto), teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de pérdidas de balón registradas por los equipos en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas sobre el número total de pérdidas de balón individuales registradas por cada equipo en el partido (medio tiempo, cuarto) – “Total más (menos) del número total”.
            Apuestas: el primer equipo ganará (no perderá) por el número de tapones en el partido (medio tiempo, cuartos), teniendo en cuenta el hándicap – “Hándicap 1”.
            Apuestas: el segundo equipo ganará (no perderá) por el número de tapones en el partido (medio tiempo, cuartos), teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de tapones realizados por los equipos en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas sobre el número total de tapones individuales realizados por cada equipo en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas: el primer equipo ganará (no perderá) el partido (medio tiempo, cuarto) por el número de tiempos muertos, teniendo en cuenta el hándicap – “Hándicap 1”.
            Apuestas: el segundo equipo ganará (no perderá) el partido (medio tiempo, cuarto) por el número de tiempos muertos, teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de tiempos muertos realizados por los equipos en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas: sobre el número total de tiempos muertos individuales realizados por cada equipo en el partido (medio tiempo, cuarto) – “Total más (menos) del número total”.
            Apuestas: el primer equipo ganará el partido (medio tiempo, cuarto) por el número de tiros de tres puntos (dos puntos) – “Gana1”.
            Apuestas: se registrará empate en el partido (medio tiempo, cuarto) por el número de tiros de 3 puntos (2 puntos) – “Empate” (X).
            Apuestas: el segundo equipo ganará el partido (medio tiempo, cuarto) por el número de tiros de tres puntos (dos puntos) – “Gana2”.
            Apuestas: el primer equipo ganará el partido (medio tiempo, cuarto) por el número de tiros de tres puntos (dos puntos), teniendo en cuenta el hándicap – “Hándicap 1”.
            Apuestas: el segundo equipo ganará el partido (medio tiempo, cuarto) por el número de tiros de tres puntos (dos puntos), teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de tiros de 3 puntos (2 puntos) realizados por los equipos en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas sobre el número total de tiros de 3 puntos (2 puntos) realizados individualmente por cada equipo en el partido (medio tiempo, cuarto) – “Total más (menos) del número total”.
            Apuestas: el primer equipo ganará en el partido (medio tiempo, cuarto) por el número de tiros libres realizados (como resultado de los cuales el balón entra en la canasta) teniendo en cuenta el hándicap – “Hándicap1”.
            Apuestas: el segundo equipo ganará en el partido (medio tiempo, cuarto) por el número de tiros libres realizados (como resultado de los cuales el balón entra en la canasta) teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de tiros libres realizados (como resultado de los cuales el balón entra en la canasta) en el partido (medio tiempo, cuartos) – “Total más (menos) del número total”.
            Apuestas sobre el número total de tiros libres en el partido (medio tiempo, cuartos) realizados individualmente por cada equipo (como resultado de los cuales el balón entra en la canasta) – “Total más (menos) del número total”.
            Apuestas: cuál de los equipos realizará el primer (último) tiro de 2 puntos.
            Apuestas: cuál de los equipos realizará el primer (último) tiro de 3 puntos.
            Apuestas: cuál de los equipos realizará el primer (último) tiro libre.
            Apuestas sobre los márgenes de victoria.
            Se ofrece predecir qué equipo ganará el partido y con qué diferencia de puntos. Por ejemplo: “Equipo 1 por margen de 2 puntos”.
            Apuestas: cuál de los equipos será el primero en alcanzar el número ofrecido de puntos en el partido (medio, cuarto).
            Apuestas sobre los puntos anotados y el resultado del partido:
            Predecir los puntos anotados y el resultado del partido. Se ofrecen las siguientes opciones:
            "Total del partido más (menos) del valor ofrecido del argumento de apuesta y Gana 1"
            "Total del partido más (menos) del valor ofrecido del argumento de apuesta y Gana 2".


            Los sitios web oficiales de los torneos y campeonatos incluidos en la tabla se toman como base durante el cálculo de las apuestas hechas sobre los resultados de los partidos de baloncesto. El partido de baloncesto (de duración de 48 minutos), que ha sido interrumpido y no ha continuado ni terminado durante 24 horas se considera completado si se jugaron no menos de 40 minutos. El partido de duración de 40 minutos, que ha sido interrumpido y no ha continuado ni terminado durante 24 horas se considera completado si no menos de 35 minutos fueron jugados. En los demás casos, el partido se considera no completado. Durante el empate en el partido de baloncesto que ha sido interrumpido y se considera completado, las apuestas hechas sobre los resultados “Gana1” y “Gana2” están sujetas a cálculo con las cuotas “1” (uno) si el resultado “Empate” no fue ofrecido en el programa (línea). Si el partido ha sido interrumpido y se considera no completado, las apuestas, cuyos resultados ya han sido determinados en el momento de la interrupción y no dependen del resultado final del partido, están sujetas a cálculo, y todas las demás apuestas se calculan con las cuotas “1” (uno).
            La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de las apuestas. En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            También se aceptan apuestas sobre otros posibles resultados de los partidos de baloncesto ofrecidos por el organizador en la Línea. Para la descripción detallada del mercado, presione aquí.
        `
    },
    {
        id: 'apuestas-en-tenis',
        title: 'Apuestas en tenis',
        description: `El formato declarado previamente del partido de tenis puede cambiar antes de que comience el partido (por ejemplo, en un partido individual se juega un super tie-break en lugar del decisivo 3er set o se juegan 3 sets en lugar de 5). En tales casos, las apuestas hechas sobre los resultados de "Gana1" y "Gana2" del partido se calculan según el resultado final, y todas las otras apuestas se calculan con las cuotas “1” (uno).
            Si en el partido de tenis iniciado uno de los tenistas (una de las parejas) es descalificado por alguna razón, se niega a jugar o es incapaz de continuar el partido, el partido termina prematuramente, las apuestas hechas sobre los resultados de ese partido se calculan de la siguiente manera:
            Las apuestas (incluidas las apuestas hechas sobre datos estadísticos), cuyos resultados se determinan definitivamente en el momento de la interrupción basándose en el formato del partido, se consideran completadas y están sujetas a cálculo. Las apuestas sobre los otros resultados se calculan con las cuotas “1” (uno).
            Por ejemplo, un tenista (una pareja de tenis) se niega a continuar el partido cuando el marcador es 4:4 (15:0). En este caso, las apuestas hechas sobre los siguientes resultados del primer set se calculan con las cuotas 1 (uno): “Gana1” y “Gana2”, “Total más (menos) de 10.5”, “Total más (menos) de 12.5”, “Hándicap 1(+1.5)”, “Hándicap 2(-1.5)”, “Hándicap 1(-1.5)”, “Hándicap 2(+1.5)”, así como las apuestas hechas sobre los siguientes resultados del partido: “Gana 1” y Gana2”, “Total más(menos) de 21.5”, “Hándicap 1(+3.5)”, “Hándicap 2(-3.5)”, “Hándicap 1(-3.5)”, “Hándicap 2(+3.5)”. Las apuestas sobre los resultados “total será número par (impar)” hechas sobre el primer set y el partido también se calculan con las cuotas 1 (uno). Las apuestas hechas sobre los siguientes resultados del primer set están sujetas a cálculo: “Total más(menos) de 6.5”, “Total más(menos) de 7.5”, “Total más(menos) de 8.5”, “Hándicap 1 (+2.5)”, “Hándicap 2 (-2.5)”, “Hándicap 1 (-2.5)”, Hándicap 2 (+2.5), así como las apuestas hechas sobre los resultados de los juegos desde el 1.º al 8.º. Las apuestas hechas sobre el resultado “Gana1” y “Gana2” del 9.º juego se calculan con las cuotas “1” (uno), y las apuestas hechas sobre los resultados “Gana1” y “Gana2” del primer punto del 9.º juego están sujetas a cálculo.


            Si el set decisivo se juega como "super tie-break", las apuestas hechas sobre el "Total" y el "Hándicap" de ese set se calculan en puntos, y el "super tie-break" se calcula como un juego durante el cálculo de las apuestas hechas sobre el "Total" y el "Hándicap" del partido. Así, el set se considera terminado con el marcador 1:0 o 0:1.
            Por ejemplo, el partido terminó con el marcador 6:3, 4:6 y 5:10. Se jugó un super tie-break como el tercer set decisivo. En este caso, al calcular las apuestas, el marcador final del partido se considera 6:3, 4:6 y 0:1, es decir, el número de juegos es 20.
            El tie-break jugado al final del set también se calcula como un juego (por ejemplo, el tie-break, que se juega cuando el marcador del set es 6:6, se considera como el 13º juego de ese set y el set termina con un marcador de 6:7 o 7:6).
            Si uno de los lados se niega a participar en el partido antes de su inicio, las apuestas hechas sobre los resultados del partido se calculan con cuotas “1” (uno). Si durante el partido de dobles de tenis, en el que los nombres de los participantes se especifican por nombre de equipo (país) (por ejemplo, España-Suiza), se realiza un cambio de jugador de tenis (equipo) (se anunció previamente un jugador de tenis o equipo de tenis para el cual se ofrecieron las apuestas), las apuestas sobre todos los resultados del partido permanecen válidas.
            Las apuestas ofrecidas sobre los resultados de los partidos de tenis:
            El primer jugador (pareja) ganará en el partido (set o juego) – “Gana 1”.
            El segundo jugador de tenis (pareja) ganará en el partido (set o juego) – “Gana 2”.
            El primer jugador de tenis (pareja) ganará (no perderá) el partido (set) teniendo en cuenta el hándicap – “Hándicap 1”.
            El segundo jugador de tenis (pareja) ganará (no perderá) el partido (set) teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de juegos en el partido (set) “Total más (menos) del valor del argumento de apuesta”.
            Apuestas sobre el número total de juegos en el partido (set) para ser par o impar.
            Apuestas sobre los resultados del primer set y el partido completo:
            Se ofrece predecir el ganador tanto del primer set como del partido completo simultáneamente. Las siguientes 4 opciones de apuestas están disponibles:
            “Gana1 Gana1” – victoria del primer jugador de tenis (pareja) tanto en el primer set como en el partido completo.
            “Gana1 Gana2” – victoria del primer jugador de tenis (pareja) en el primer set y victoria del segundo jugador de tenis (pareja) en el partido completo.
            “Gana2 Gana1” – victoria del segundo jugador de tenis (pareja) en el primer set y victoria del primer jugador de tenis (pareja) en el partido completo.
            “Gana2 Gana2” – victoria del segundo jugador de tenis (pareja) tanto en el primer set como en el partido completo.
            Apuestas sobre el marcador final del partido (set):
            Se ofrece seleccionar el marcador preciso registrado al final del partido (set) de las opciones disponibles en el programa (línea).
            Apuestas sobre la ocurrencia (o no) de un tie-break.
            Apuestas: Quién anotará el siguiente punto.
            Apuestas: el jugador de tenis (pareja) alcanzará una cierta ronda (cuartos de final, semifinal, final, etc.) o tomará un cierto lugar (3er lugar, 4to lugar, etc.).
            Si el avance del tenista a la siguiente ronda es cancelado por cualquier razón en el futuro, entonces esta circunstancia no se toma en cuenta y las apuestas no se recalculan.
            Las apuestas hechas sobre el avance a la siguiente ronda permanecen válidas si la secuencia previamente anunciada de partidos cambia.
            En torneos de tenis, si el tenista (pareja) declarado para el partido no comienza su actuación por cualquier razón (lesión, negativa, descalificación, etc.), entonces las apuestas hechas sobre el avance del tenista (pareja) a la siguiente ronda, así como aquellas hechas sobre los datos estadísticos del último dentro del torneo se calculan con las cuotas “1” (uno) y si el tenista (pareja) comienza su actuación, pero luego por alguna razón (lesión, negativa, descalificación, etc.) se retira del torneo, entonces las apuestas hechas sobre el avance del tenista (pareja) a la siguiente ronda se consideran perdidas ya que el tenista (pareja) no ha alcanzado el resultado predefinido y no ha avanzado a la siguiente ronda. En este caso, las apuestas hechas sobre los datos estadísticos del tenista (pareja) con respecto al torneo, permanecen válidas y están sujetas a cálculo. Las apuestas hechas sobre el avance del tenista (pareja) a la siguiente ronda, así como los datos estadísticos del tenista (pareja) en el torneo, están sujetas a cálculo con las cuotas “1” (uno), si se hacen después de que el tenista (pareja) se retira efectivamente del torneo.


            Apuestas sobre el número total de tie-breaks en el partido – “Total más (menos) del número total”.
            Al calcular las apuestas hechas sobre el resultado mencionado anteriormente, solo se toman en cuenta los tie-breaks que se han jugado al final de los sets cuando el marcador ha sido 6:6 (hasta 7 puntos). En algunos torneos, basados en las reglas del partido, el tie-break jugado en el set decisivo (hasta 10 puntos) también se toma en cuenta al calcular las apuestas hechas sobre el número total de tie-breaks. Independientemente del formato del torneo, un super tie-break (tie-break hasta 10 puntos) jugado en lugar de un set decisivo no se toma en cuenta al calcular las apuestas hechas sobre el número total de tie-breaks.


            La información proporcionada por los sitios web oficiales de torneos y campeonatos, que están incluidos en la tabla, se toma como base durante el cálculo de apuestas en partidos de tenis.
            En caso de indicación incorrecta de la superficie de la cancha o lugar del torneo y la no correspondencia en el nombre del torneo realizada por el proveedor en el programa (línea), las apuestas hechas sobre los resultados del torneo dado permanecen válidas.
            Punto (puntos) de penalización otorgado por el árbitro a un jugador de tenis (equipo) se toman en cuenta durante el cálculo de las apuestas.
            Por ejemplo, durante el marcador (6:4), (3:2), (0:40) el árbitro otorgó 1 punto de penalización al segundo jugador y el marcador se convirtió en (6:4), (3:3). En este caso, se considera que el segundo jugador gana el 6º juego del segundo set.
            Si se otorga un punto de penalización a cualquiera de los jugadores (parejas), se considera que el jugador de tenis (pareja) al que se le da un punto de penalización recibe el número mínimo de puntos de juego requeridos para ganar el juego actual. Por ejemplo, si el marcador del torneo actual es 1:0 (6:1), (3:1), los puntos actuales del juego son (40:15), y el árbitro da puntos de penalización al segundo jugador de tenis, entonces el marcador del segundo set se convierte en 3:2, el número de puntos del juego se convierte en 8 (ocho), y el marcador del juego es 40:Gana2, ya que el primer jugador de tenis ya tiene 3 (tres) puntos (15, 30, 40), y el segundo jugador de tenis necesita un mínimo de 4 (cuatro) puntos (30, 40, ventaja, punto de ganar) para ganar el juego actual. En caso de que se otorguen puntos de penalización al jugador (pareja), el principio mencionado anteriormente se toma en consideración al calcular apuestas sobre puntos de juego.
            Las apuestas hechas sobre los resultados de partidos de tenis, que fueron pospuestos o interrumpidos, permanecen válidas hasta el final del torneo al que pertenecen.
            Para la descripción detallada del mercado, presione aquí.`
    },
    {
        id: 'apuestas-en-voleibol-y-vóley-playa',
        title: 'Apuestas en voleibol y vóley playa',
        description: `En los partidos de voleibol se juegan de 3 a 5 sets. El primer equipo en ganar tres sets gana el partido, y el primer equipo en alcanzar 25 puntos gana el set (en el 5º set final – 15 puntos), con una ventaja de al menos 2 puntos sobre el oponente. Cuando el marcador está 24:24 para el set, y es 14:14 para el set final, entonces el set continúa hasta que uno de los equipos alcanza 2 puntos de ventaja sobre el oponente en el marcador actual del set o el set final. No se establece una puntuación máxima, en el caso de la cual el set se considera como completado; el set continúa hasta que uno de los competidores alcanza 2 puntos de ventaja en el set. Los partidos también pueden jugarse en otro formato, donde se juega de 2 a 3 sets.


            En la ronda de eliminación directa cuando los juegos terminan con el mismo marcador a favor de diferentes equipos (por ejemplo, en el primer partido se registró 3:2 a favor del primer equipo, y en el segundo partido – 2:3 a favor del segundo equipo), se juega un set adicional – el "Golden set" (en el “Golden set” gana el equipo que anota primero 15 puntos), el ganador del set pasa a la siguiente ronda. Los resultados registrados en el “Golden set” no se toman en cuenta al calcular apuestas sobre el resultado del segundo partido.


            En los partidos de vóley playa se juegan de 2 a 3 sets. El primer equipo en ganar dos sets gana el partido, y el primer equipo en alcanzar 21 puntos gana el set (en el 3er set final – 15 puntos), con una ventaja de al menos 2 puntos sobre el oponente. Cuando el marcador es 20:20 (en el 3er set final – 14:14), el set (el 3er set final) se juega hasta que uno de los equipos alcanza una ventaja de 2 puntos sobre el oponente.


            En los partidos de voleibol y vóley playa el formato del juego puede cambiar durante el partido (por ejemplo, un set que debería haberse jugado a 25 puntos se juega a otros puntos). En tales casos, el organizador hace una marca especial en la Línea sobre los posibles cambios en el formato del juego.


            Apuestas ofrecidas sobre los resultados de partidos de voleibol y vóley playa:
            En voleibol y vóley playa, el hándicap y el total se calculan por puntos, excepto para los resultados de “Hándicap de Sets” y “Total de Sets”, que se calculan por número.
            El primer equipo ganará el partido (set) – “Gana1”.
            El segundo equipo ganará el partido (set) – “Gana2”.
            El primer equipo ganará (no perderá) el partido (set) teniendo en cuenta el hándicap – “Hándicap 1”.
            El segundo equipo ganará (no perderá) el partido (set) teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas: por el número de sets el primer equipo ganará (no perderá) el partido teniendo en cuenta el hándicap – “Hándicap 1”.
            Apuestas: por el número de sets el segundo equipo ganará (no perderá) el partido teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de puntos anotados por los equipos en el partido (set) – “Total más (menos) del valor total”.
            Apuestas sobre el número total de puntos anotados por cada equipo en el partido (set) – “Total más (menos) del valor total”.
            Apuestas: el número total de puntos en el partido (set) será par (impar).
            Apuestas sobre los resultados de “Ganar con puntos de ventaja” en el set.
            Se propone adivinar qué equipo ganará el set y con una ventaja de cuántos puntos ofrecidos, por ejemplo: “Victoria del equipo 1 con una ventaja de 7-8 puntos”.
            Apuestas: el primer (segundo) equipo obtendrá el punto especificado en el partido (set).
            Por ejemplo, en el segundo set, el primer (segundo) equipo ganará el punto 24.
            Apuestas sobre el resultado del primer set y todo el partido.
            Se propone adivinar el resultado del primer set y todo el partido al mismo tiempo. Las siguientes 4 opciones son posibles:
            “Gana1Gana1” – victoria del primer equipo en el primer set y el partido.
            “Gana1Gana2” – victoria del primer equipo en el primer set y victoria del segundo equipo en el partido.
            “Gana2Gana1” – victoria del segundo equipo en el primer set y victoria del primer equipo en el partido.
            “Gana2Gana2” – victoria del segundo equipo en el primer set y el partido.
            Apuestas sobre el marcador final del partido (set).
            Se propone elegir el marcador exacto registrado en el resultado final del partido (set), según las opciones posibles incluidas en la Línea.
            Los sitios web oficiales de los campeonatos y torneos (presentados en la tabla) se toman como base para calcular los resultados de los partidos de voleibol y vóley playa. En algunos casos, cuando la información disponible en el sitio web oficial no aclara el resultado de la apuesta propuesta (la información requerida no está disponible en el sitio web oficial), las grabaciones de video de los partidos se toman como base para calcular las apuestas.
            Un partido de voleibol y vóley playa que ha sido interrumpido y no continuó o se completó dentro de las 24 horas se considera fallido. Los resultados de partidos interrumpidos y fallidos, que ya son claramente conocidos en el momento de la interrupción del partido y no dependen del resultado final del partido, están sujetos al cálculo (por ejemplo, el partido fue interrumpido en el segundo set, el partido se consideró fallido, pero el primer set, que se jugó en su totalidad, es decir, ha tenido lugar, y las apuestas sobre el resultado del último están sujetas a cálculo), y las apuestas restantes se calculan con cuotas de “1” (uno).
            La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas. En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            También se aceptan apuestas sobre otros posibles resultados en partidos de voleibol y vóley playa si serán ofrecidos por el organizador en la línea.
            Para la descripción detallada del mercado, presione aquí.`
    },
    {
        id: 'apuestas-en-carreras-de-autos',
        title: 'Apuestas en carreras de autos',
        description: `Para la descripción detallada del mercado, presione aquí.
            Las reglas de aceptación de apuestas en carreras de autos:
            La vuelta de calentamiento está incluida en la carrera;
            Si ambos conductores abandonan la carrera, el ganador en el par es el conductor que ha completado más vueltas;
            Si el conductor es clasificado, ha terminado la carrera.
            Los siguientes tipos de apuestas pueden realizarse en carreras de autos:
            Victoria del conductor en la carrera.
            El conductor ocupará lugares del 1 al 3 inclusive.
            El conductor terminará la carrera (será clasificado).
            El conductor no terminará la carrera (no será clasificado).
            El conductor tendrá la vuelta más rápida de la carrera.
            El primer conductor ocupará un lugar más alto que el segundo en el informe final (la columna “1” de la línea).
            El segundo conductor ocupará un lugar más alto que el primero en el informe final (la columna “2” de la línea).
            También se aceptan apuestas sobre otros eventos probables en carreras de autos, que se ofrecerán en la línea.`
    },
    {
        id: 'apuestas-en-béisbol',
        title: 'Apuestas en béisbol',
        description: `En un partido de béisbol se juegan 9 entradas. Durante el cálculo de apuestas hechas sobre el resultado final del partido, los resultados registrados en la entrada (entradas) de tiempo extra también se toman en cuenta. Si el partido termina en empate y no se jugó entrada (entradas) de tiempo extra o si, basado en los requisitos del torneo, en la entrada de tiempo extra jugada se registró de nuevo un empate, entonces las apuestas hechas sobre los resultados “Gana1” y “Gana2” se calculan con las cuotas “1” (uno).


            Según la “Regla de la Misericordia”, un partido de béisbol puede terminar de manera anticipada. En estos casos, el partido se considera completado con los resultados registrados en el momento de la interrupción y todas las apuestas se calculan teniendo en cuenta los resultados registrados en el momento de la interrupción. (La Regla de la Misericordia funciona cuando uno de los equipos tiene una ventaja significativa en el marcador sobre el equipo oponente. El nivel de ventaja puede variar según los requisitos de los torneos y campeonatos de diferentes países.


            Si durante un día los equipos jugaron dos partidos y en el programa (línea) el proveedor ofreció apuestas solo en uno de ellos, los resultados registrados en el juego, que se jugó primero, se toman como base durante el cálculo de las apuestas.


            En el béisbol también es posible el cambio de formato durante el juego (por ejemplo, se juegan 7 entradas en lugar de 9 entradas). En este caso, el aviso, informando sobre el posible cambio de formato del partido, es realizado por el organizador en el programa.


            Las apuestas para Total y Hándicap en béisbol se calculan en puntos.
            Las apuestas ofrecidas sobre los resultados de partidos de béisbol:
            El primer equipo ganará en el partido – “Gana 1”.
            El segundo equipo ganará en el partido – “Gana 2”.
            El primer equipo ganará (no perderá) el partido teniendo en cuenta el hándicap – “Hándicap 1”.
            El segundo equipo ganará (no perderá) el partido teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de puntos anotados por los equipos en el partido – “Total más (menos) del valor del argumento de apuesta”.
            Apuestas sobre el número total de puntos anotados por cada equipo individualmente en el partido – “Total más (menos) del valor del argumento de apuesta”.
            Apuestas sobre el número total de puntos anotados en el partido para ser par (impar).
            Las apuestas sobre los siguientes resultados de la entrada dada: “Gana1”, “Empate”, “Gana2”, “Hándicap” y “Total”.
            También se ofrecen apuestas sobre los siguientes resultados de las primeras 3, las primeras 5 y las primeras 7 entradas: “Gana1”, “Empate”, “Gana2”, “Hándicap” y “Total”.
            Apuestas sobre el número de estadísticas de los jugadores (bateador, lanzador) en el partido.
            En un partido de béisbol, las apuestas sobre el número de estadísticas de los jugadores se consideran válidas, si los jugadores han sido declarados y han empezado a jugar en el partido (las excepciones son las apuestas sobre el número de estadísticas del lanzador, que se consideran válidas, si el lanzador ha sido declarado y ha empezado el partido, y no ha participado como sustituto). Las apuestas sobre el número de estadísticas de los jugadores que no han participado en el partido y/o apuestas consideradas inválidas están sujetas a cálculo con cuotas de “1” (uno).
            Los sitios web oficiales de los torneos, que están incluidos en la tabla, se toman como base para el cálculo de apuestas en partidos de béisbol.
            Un partido de béisbol que fue interrumpido y no continuó desde una entrada interrumpida o se completó dentro de las 24 horas se considera que ha tenido lugar si se jugaron al menos 5 entradas completas. Si el partido interrumpido se vuelve a jugar desde el principio, las apuestas sobre los resultados del partido interrumpido se calculan con cuotas de “1” (uno), excepto para las apuestas, cuyos resultados ya se han hecho evidentes. En los demás casos, el evento se considera no completado. Las apuestas hechas sobre los resultados de "Gana1" y "Gana2" del partido se calculan con las cuotas “1” (uno) si el partido ha sido interrumpido con el marcador empatado y se considera completado.
            Si el partido ha sido interrumpido y se considera no completado, las apuestas, cuyos resultados ya se habían determinado para el momento de la interrupción y no dependen del resultado final del partido, están sujetas a cálculo, y todas las otras apuestas se calculan con las cuotas “1” (uno). Si el partido ha sido interrumpido y se considera completado, las apuestas hechas sobre los resultados de entradas separadas, que no se jugaron, se calculan con las cuotas 1 (uno).
            La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas. En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            También se aceptan apuestas sobre otros posibles resultados de partidos de béisbol ofrecidos por el organizador en la Línea.`
    },
    {
        id: 'apuestas-en-snooker',
        title: 'Apuestas en snooker',
        description: `Los partidos de snooker suelen consistir en un número impar de frames (rondas). El jugador que ha ganado más frames gana el partido. Por ejemplo, en el partido compuesto de 7 (siete) frames, el jugador que ha ganado 4 (cuatro) frames gana el partido. Un jugador que ha anotado más puntos gana el frame. Los partidos de snooker también pueden celebrarse en otros formatos, sobre los cuales el organizador informa en el programa (línea).
            Existe la posibilidad de un estancamiento en snooker cuando golpear las bolas no avanza el frame. En caso de que ocurra un estancamiento, el frame puede ser repetido, reanudado con un marcador 0:0 (por acuerdo mutuo de los dos jugadores o por sugerencia del árbitro). Las apuestas sobre los resultados del frame hechas antes del inicio del frame se calculan basándose en los resultados registrados en el frame repetido, y las apuestas sobre los resultados del frame hechas después del inicio real del frame se calculan con cuotas “1” (uno).
            Apuestas ofrecidas sobre los resultados de partidos de Snooker:
            En el partido de Snooker, el hándicap y el total se calculan según el número de frames, y en un frame – por los puntos.
            El primer jugador ganará el partido (frame) – “Gana 1”.
            El segundo jugador ganará el partido (frame) – “Gana 2”.
            El primer jugador ganará (no perderá) el partido (frame) con el hándicap tenido en cuenta – “Hándicap 1”.
            El segundo jugador ganará (no perderá) el partido (frame) con el hándicap tenido en cuenta – “Hándicap 2”.
            Apuestas sobre el número total de frames jugados en el partido – “Total más (menos) del valor del argumento de apuesta”.
            Apuestas sobre el número total de puntos anotados en el frame – “Total más (menos) del valor del argumento de apuesta”.
            Apuestas: qué jugador anotará la primera bola en el partido.
            Apuestas: qué jugador será el primero en anotar el número ofrecido de puntos.
            Apuestas sobre el número total de puntos anotados en el frame para ser par (impar).
            Apuestas: si el primer (segundo) jugador anotará la primera (la última) bola.
            Apuestas: la primera bola anotada será amarilla (verde, marrón, azul, rosa, negra).
            Apuestas: “50+Break” (50 + break) se logrará (no se logrará).
            Apuestas: “Century break” se logrará (no se logrará).
            Apuestas: “Maximum break (147)” se logrará (no se logrará).
            Un “Break” es el número de puntos anotados por un jugador en un solo acercamiento. Los puntos anotados por las violaciones cometidas por el oponente no se toman en cuenta en el “break”. Un “50+break” es cincuenta o más puntos anotados de esta manera, un “Century Break” es cien o más puntos anotados, y un “Maximum Break (147)” es la puntuación más alta posible en un solo frame (15 Rojas+15 Negras+Colores).
            Apuestas: habrá (no habrá) una violación.
            Todas las apuestas sobre el frame se calculan después del final del frame. Todos los puntos otorgados por el árbitro del partido se toman en cuenta al calcular apuestas sobre los resultados del partido.
            En algunos casos, es posible anotar una victoria prematura en un frame, por ejemplo, si uno de los jugadores llega tarde al inicio del frame, el árbitro otorga la victoria al otro jugador, y el frame se considera completo.
            También se otorga una victoria prematura cuando un jugador no está en una situación de "Snooker" y falla tres tiros consecutivos mientras tiene la oportunidad de golpear otra bola. En este caso, las apuestas sobre los resultados de este frame están sujetas a un cálculo con cuotas “1” (uno). En este y casos similares, las apuestas sobre los resultados de este frame están sujetas a un cálculo con cuotas “1” (uno), excepto aquellas apuestas cuyos resultados no dependen de las situaciones mencionadas anteriormente y ya se han vuelto inequívocamente claros.
            Para calcular los resultados de los partidos de snooker, se toman como base los sitios web oficiales de campeonatos y torneos, presentados en la tabla. En algunos casos, cuando el sitio web oficial no contiene la información necesaria para calcular algún resultado del partido, la grabación en video del partido se toma como base para el cálculo. Por ejemplo, si el sitio web oficial no contiene la información necesaria para calcular la apuesta sobre el resultado "El primer/segundo jugador anotará la primera bola", la grabación en video del partido se usa como base para el cálculo.
            Las apuestas sobre los resultados de un partido de snooker retrasado o interrumpido permanecen válidas hasta el final del torneo o campeonato en el que se celebró. Hasta que el partido ha comenzado o continúa, todas las apuestas sobre los resultados del partido permanecen válidas.
            También se aceptan apuestas sobre otros posibles resultados de partidos de snooker ofrecidos por el organizador en la Línea.`
    },
    {
        id: 'apuestas-en-bádminton',
        title: 'Apuestas en bádminton',
        description: `Si en el partido de bádminton iniciado uno de los jugadores (un equipo) es descalificado por alguna razón, se niega a jugar o es incapaz de continuar el partido, el partido termina prematuramente, entonces las apuestas hechas sobre los resultados de ese partido se calculan de la siguiente manera:

            Las apuestas, cuyos resultados están definitivamente determinados en el momento de la interrupción del partido, basados en el formato del partido, se consideran completadas y están sujetas a cálculo. Todas las demás apuestas se calculan con las cuotas “1” (uno).

            Por ejemplo, el jugador se niega a jugar durante el primer set con el marcador 19:20. En este caso, las apuestas hechas sobre los siguientes resultados del primer set se calcularán con las cuotas 1 (uno): “Gana1”, “Gana2”, “Total más (menos) de 40.5”, “Hándicap 1 (+1.5), “Hándicap 2 (-1.5)”, “Hándicap 1 (-1.5)”, Hándicap 2 (+1.5)”, así como las apuestas hechas sobre los resultados “Gana1” y “Gana2” del partido. Las apuestas hechas sobre los siguientes resultados del primer set están sujetas a cálculo: “Total más (menos) de 38.5”, “Total más (menos) de 39.5”, “Hándicap1 (+2.5)”, “Hándicap2 (-2.5)”, “Hándicap1 (-2.5)”, “Hándicap2 (+2.5)”, “Hándicap1 (+3.5)”, “Hándicap2 (-3.5), “Hándicap1 (-3.5)”, Hándicap2 (+3.5).

            En bádminton las apuestas sobre Hándicap y Total se calculan en puntos.

            Si antes del inicio del partido, uno de los jugadores (uno de los equipos) se niega a participar en el partido, las apuestas hechas sobre los resultados de ese partido están sujetas a cálculo con las cuotas “1” (uno).

            Si durante los partidos de equipo de bádminton, en los cuales los nombres de los participantes se especifican por nombre de equipo (país) (por ejemplo, China-Indonesia), se realiza el cambio de jugador de bádminton (equipo) (jugador o equipo anunciado previamente para el cual se ofrecieron las apuestas), las apuestas sobre todos los resultados del partido permanecen válidas.

            Las apuestas ofrecidas sobre los resultados de partidos de bádminton:

            El primer jugador (pareja) ganará el partido (set) – “Gana1”.
            El segundo jugador (pareja) ganará el partido (set) – “Gana2”.
            El primer jugador (equipo) ganará (no perderá) el partido (set) teniendo en cuenta el hándicap – “Hándicap1”.
            El segundo jugador (equipo) ganará (no perderá) el partido (set) teniendo en cuenta el hándicap – “Hándicap2”.
            Apuestas sobre el número de puntos en el partido (set) – “Total más (menos) del valor del argumento de apuesta”.
            Apuestas sobre el número de puntos para ser par (impar).
            Apuestas sobre los resultados del primer set y el partido completo:
            Se ofrece predecir al ganador tanto del primer set como del partido completo simultáneamente. Las siguientes cuatro opciones de apuestas están disponibles:
            “Gana1 Gana1” – victoria del primer jugador (equipo) tanto en el primer set como en el partido completo.
            “Gana1 Gana2” – victoria del primer jugador (equipo) en el primer set y victoria del segundo jugador (equipo) en el partido completo.
            “Gana2 Gana1” – victoria del segundo jugador (equipo) en el primer set y victoria del primer jugador (equipo) en el partido.
            “Gana2 Gana2” – victoria del segundo jugador (equipo) tanto en el primer set como en el partido.
            Apuestas sobre el marcador final del partido (set):
            Se ofrece seleccionar el marcador preciso registrado al final del partido (set) de las opciones disponibles en el programa (línea).

            Los sitios web oficiales de torneos y campeonatos, que están incluidos en la tabla, se toman como base para el cálculo de apuestas en partidos de bádminton.

            Las apuestas hechas sobre los resultados de los partidos, que han sido pospuestos o interrumpidos, permanecen válidas hasta el final del torneo al que pertenecen.
            También se aceptan apuestas sobre otros resultados de partidos de bádminton ofrecidos por el proveedor en la Línea.`
    },
    {
        id: 'apuestas-en-bandy',
        title: 'Apuestas en bandy',
        description: `En los partidos de bandy, las apuestas se aceptan sobre el tiempo reglamentario del partido, a menos que el proveedor especifique lo contrario en el programa (línea). El resultado registrado en tiempo extra no se toma en cuenta durante el cálculo de las apuestas hechas sobre los resultados del tiempo reglamentario. El tiempo reglamentario de un partido de bandy es de 90 minutos (dos mitades, la duración de cada una es de 45 minutos). Según el requisito de torneos y campeonatos particulares, el formato del partido puede cambiar (partidos, cuya duración es de 60 minutos, 70 minutos y 80 minutos con dos mitades, la duración de cada una es de 30, 35 y 40 minutos respectivamente). Durante un partido de un formato diferente, el aviso especificando se hace por el proveedor en el programa (línea).
            Apuestas ofrecidas en partidos de bandy:
            El primer equipo ganará el partido (periodo) – “Gana 1”.
            Empate en el partido (en la mitad) – “X”.
            El segundo equipo ganará el partido (periodo) – “Gana 2”.
            El primer equipo no perderá el partido (mitad) – “1X”.
            Uno de los equipos ganará el partido (mitad) – “12”.
            El segundo equipo no perderá el partido (mitad) – “2X”.
            El primer equipo ganará (no perderá) el partido (mitad) teniendo en cuenta el hándicap – “Hándicap 1”.
            El segundo equipo ganará (no perderá) el partido (mitad) teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de goles marcados por los equipos en el partido (mitad) – “Total más (menos) del valor de argumento de la apuesta.
            Apuestas sobre el número total de goles marcados por cada equipo individualmente en el partido (mitad) – “Total más (menos) del valor del argumento de la apuesta”.
            Apuestas sobre el número total de goles marcados en el partido (mitad) para ser par (impar).
            Los sitios web oficiales de los campeonatos, que están incluidos en la tabla, se toman como base para el cálculo de apuestas hechas en partidos de bandy.
            El partido de bandy (cuya duración es de 90 minutos), que ha sido interrumpido y no ha continuado o terminado dentro de las 24 horas, se considera completado si se jugaron no menos de 70 minutos. Los partidos de bandy con una duración de 60, 70 y 80 minutos, que han sido interrumpidos y no han continuado o terminado dentro de las 24 horas, se consideran completados si se jugaron no menos de 48, 56 y 64 minutos respectivamente. En los demás casos, el partido se considera no completado. Si el partido ha sido interrumpido y se considera no completado, las apuestas, cuyos resultados ya se han determinado en el momento de la interrupción y no dependen del resultado final del partido, están sujetas a cálculo, y todas las demás apuestas se calculan con las cuotas “1” (uno).
            La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas. En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            También se aceptan apuestas sobre otros resultados de partidos de bandy ofrecidos por el proveedor en la Línea.`
    },
    {
        id: 'apuestas-en-hockey',
        title: 'Apuestas en hockey',
        description: `En los partidos de hockey sobre césped, las apuestas se aceptan sobre el tiempo reglamentario del partido, a menos que el proveedor especifique de manera diferente en el programa (línea). Los resultados registrados en tiempo extra y en la tanda de penales no se toman en cuenta durante el cálculo de las apuestas ofrecidas sobre los resultados del tiempo reglamentario. El tiempo reglamentario de un partido de hockey sobre césped es de 60 minutos (2 mitades, la duración de cada una es de 30 minutos o 4 cuartos, la duración de cada uno es de 15 minutos), pero el partido también puede jugarse en el siguiente formato: la duración de 70 minutos (2 mitades, la duración de cada una es de 35 minutos o 4 cuartos, la duración de cada uno es de 17 minutos 30 segundos). Durante un partido de un formato diferente, el aviso especificando se hace por el proveedor en el programa (línea).
            Las apuestas ofrecidas en los partidos de hockey sobre césped:
            El primer equipo ganará el partido (período, cuarto) – “Gana 1”.
            Empate en el partido (mitad, cuarto) – “X”.
            El segundo equipo ganará el partido (período, cuarto) – “Gana 2”.
            El primer equipo no perderá el partido (mitad, cuarto) – “1X”.
            Uno de los equipos ganará el partido (mitad, cuarto) – “12”.
            El segundo equipo no perderá el partido (mitad, cuarto) – “2X”.
            El primer equipo ganará (no perderá) el partido (mitad, cuarto) teniendo en cuenta el hándicap – “Hándicap 1”.
            El segundo equipo ganará (no perderá) el partido (mitad, cuarto) teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de goles marcados por los equipos en el partido (mitad, cuarto) – “Total más (menos) del valor de la apuesta“.
            Apuestas sobre el número total de goles marcados por cada equipo individualmente en el partido (mitad, cuarto) – “Total más (menos) del valor de la apuesta”.
            Apuestas sobre el número total de goles marcados en el partido (mitad) para ser par (impar).
            El partido de hockey sobre césped (cuya duración es de 70 minutos), que ha sido interrumpido y no ha continuado o terminado dentro de las 24 horas, se considera completado si se jugaron no menos de 55 minutos. El partido de hockey sobre césped con una duración de 60 minutos, que ha sido interrumpido y no ha continuado o terminado dentro de las 24 horas, se considera completado si se jugaron no menos de 47 minutos. En los demás casos, el partido se considera no completado. Si el partido ha sido interrumpido y se considera no completado, las apuestas, cuyos resultados ya se habían determinado en el momento de la interrupción y no dependen del resultado final del partido, están sujetas a cálculo, y todas las demás apuestas se calculan con las cuotas “1” (uno).
            La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas. En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            También se aceptan apuestas sobre otros resultados de partidos de hockey sobre césped ofrecidos por el organizador en la Línea.
            Nota: El segmento sobre tenis de mesa se ha incluido en la respuesta anterior por error y no se ha traducido, ya que la instrucción original se centraba solo en hockey sobre césped.`
    },
    {
        id: 'apuestas-en-tenis-de-mesa',
        title: 'Apuestas en tenis de mesa',
        description: `Si en el partido de tenis de mesa iniciado uno de los jugadores de tenis (un equipo) es descalificado por alguna razón, se niega a jugar o no puede continuar el partido, el partido termina prematuramente, entonces las apuestas hechas sobre los resultados de ese partido se calculan de la siguiente manera:
            Las apuestas, cuyos resultados están definitivamente determinados en el momento de la interrupción, basados en el formato del partido, se consideran completadas y están sujetas a cálculo. Las apuestas hechas sobre los otros resultados se calculan con las cuotas “1” (uno).
            Por ejemplo, un jugador de tenis (equipo de tenis) se niega a continuar el partido en el primer set, cuando el marcador es 9:10. En este caso, las apuestas hechas sobre los siguientes resultados del primer set se calculan con las cuotas 1 (uno): “Gana1”, “Gana2”, “Total más(menos) de 20.5”, “Handicap1 (+1.5)”, “Handicap2(-1.5)”, “Handicap1 (-1.5)”, “Handicap2 (+1.5), así como las apuestas hechas sobre los resultados “Gana1” y “Gana2” del partido. Y los resultados del primer set “Total más (menos) de 18.5”, “Total más (menos) de 19.5”, “Handicap1 (+2.5)”, “Handicap2 (-2.5)”, “Handicap1 (-2.5)” están sujetos a cálculo.
            Si uno de los lados se niega a participar en el partido antes de su inicio, las apuestas hechas sobre los resultados del partido se calculan con cuotas “1” (uno). Si durante el partido de dobles de tenis (equipo), en el cual los nombres de los participantes se especifican por nombre de equipo (país) (por ejemplo, España-Suiza), se realiza el cambio de jugador de tenis (equipo) (jugador de tenis o equipo de tenis anunciado previamente para el cual se ofrecieron las apuestas), las apuestas sobre todos los resultados del partido permanecen válidas.
            Las apuestas sobre Handicap y Total en tenis se calculan en puntos.
            Las apuestas ofrecidas sobre los resultados de los partidos de tenis de mesa:
            El primer jugador (pareja) ganará el partido (set) – “Gana1”.
            El segundo jugador (pareja) ganará el partido (set) – “Gana2”.
            El primer jugador de tenis (equipo) ganará (no perderá) el partido (set) teniendo en cuenta el hándicap – “Handicap1”.
            El segundo jugador de tenis (equipo) ganará (no perderá) el partido (set) teniendo en cuenta el hándicap – “Handicap2”.
            Apuestas sobre el número total de puntos en el partido (set) “Total más (menos) del valor del argumento de apuesta“.
            Apuestas sobre el número de puntos en el partido (set) para ser par o impar.
            Apuestas sobre el marcador final del partido (set).
            Se ofrece seleccionar el marcador preciso registrado al final del partido (set) de las opciones disponibles en el programa (línea).
            Los sitios web oficiales de los torneos, que están incluidos en la tabla, se toman como base para el cálculo de apuestas hechas en partidos de tenis de mesa.
            Las apuestas hechas sobre los resultados de los partidos de tenis de mesa, que fueron pospuestos o interrumpidos, permanecen válidas hasta el final del torneo al que pertenecen.
            También se aceptan apuestas sobre otros resultados de los partidos de tenis de mesa ofrecidos por el organizador en la Línea.`
    },
    {
        id: 'apuestas-en-futbolín(fútbol-de-mesa)',
        title: 'Apuestas en futbolín (fútbol de mesa)',
        description: `No hay límites de tiempo en el partido (juego) de futbolín. Un partido consta de 1 (uno), 3 (tres) o 5 (cinco) juegos. En un partido que consta de 1 (un) juego, el jugador (pareja) que gana el juego gana. En un partido de 3 (tres) juegos, el jugador (pareja) que gana dos juegos gana, y en un partido de 5 (cinco) juegos, el jugador (pareja) que gana tres juegos gana. Dependiendo de los requisitos del campeonato o torneo, el juego es ganado por el jugador (pareja) que marca 5 (cinco) o 7 (siete) goles.
            También es posible que los partidos se jueguen en otro formato. En tales casos, el organizador hace una nota especial en la línea sobre el formato del partido.
            Si el puntaje ganador es 5 (cinco) goles, en caso de que el puntaje se convierta en 4:4 en el juego final, entonces solo el juego final del partido se juega antes de que uno de los jugadores (parejas) logre una ventaja sobre el oponente de 2 goles, pero el puntaje máximo no puede exceder de 8. Es decir, si el puntaje se convierte en 4:4 en el juego final, el juego continúa y puede terminar con un puntaje de 4:6, 6:4, 5:7, 7:5, 6:8 o 8:6. Después de que el puntaje es 7:7, el juego termina con un puntaje de 8:7 o 7:8.
            Si el puntaje ganador es 7 (siete) goles, en caso de que el puntaje se convierta en 6:6 en el juego final, entonces el juego del partido se juega antes de que uno de los jugadores (parejas) logre una ventaja sobre el oponente de 2 goles, pero el puntaje máximo no puede exceder de 8. Es decir, si el puntaje se convierte en 6:6 en el juego, el juego continúa y puede terminar con un puntaje de 6:8 o 8:6. Después de que el puntaje es 7:7, el juego termina con un puntaje de 8:7 o 7:8.
            Apuestas ofrecidas sobre el resultado de los partidos de futbolín:
            El primer jugador (pareja) ganará el partido (juego) – “Gana1”.
            El segundo jugador (pareja) ganará el partido (juego) – “Gana2”.
            El primer jugador (pareja) ganará (no perderá) el partido (juego), teniendo en cuenta el hándicap – “Hándicap 1”.
            El segundo jugador (pareja) ganará (no perderá) el partido (juego), teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de goles marcados por un jugador (pareja) en el partido (juego) – “Total más (menos) del número total”.
            Apuestas sobre el número total de goles marcados en el partido (juego) – “Total más (menos) del número total”.
            Apuestas: el número total de goles en el partido (juego) será par (impar).
            Apuestas sobre el resultado final del partido (juego).
            Se propone elegir el puntaje exacto registrado en el resultado final del partido (juego), según las opciones disponibles en la Línea.
            Para calcular los resultados de los partidos de futbolín, se toman como base los sitios web oficiales de Campeonatos y torneos, que se presentan en la tabla.
            Un partido de futbolín que fue interrumpido y no continuó o no se completó dentro de las 24 horas se considera fallido. Los resultados de partidos interrumpidos y fallidos, que en el momento de la detención ya se han conocido claramente y no dependen del resultado final del partido, están sujetos a cálculo, y las apuestas restantes se calculan con cuotas de “1” (uno).
            También se aceptan apuestas sobre otros resultados posibles en partidos de futbolín y serán ofrecidos por el organizador en la Línea.
            Para la descripción detallada del mercado, presione aquí.`
    },
    {
        id: 'apuestas-en-rugby(rugby-league-y-rugby-union)',
        title: 'Apuestas en Rugby (Rugby League y Rugby Union)',
        description: `El tiempo reglamentario para los partidos de rugby se establece en 80 minutos (dos mitades de 40 minutos cada una). Las apuestas en los partidos de rugby se aceptan para el tiempo reglamentario, a menos que se especifique algo diferente por el organizador en la Línea. Los resultados registrados en el tiempo añadido post-partido o en el tiempo extra no se toman en cuenta al calcular las apuestas sobre los resultados propuestos para el tiempo reglamentario. El organizador también ofrece apuestas en variedades de Rugby – Rugby 7 (siete), Rugby 9 (nueve) y Rugby 10 (diez), donde la duración de los tiempos es de 7, 9 y 10 minutos, respectivamente. En caso de partidos en este formato, aparece una marca especial en la Línea mostrando el formato del partido.
            En Rugby, el hándicap y el total se calculan por puntos (con la excepción de totales ofrecidos para el número total de tries).
            Apuestas ofrecidas sobre los resultados de un partido de rugby:
            El primer equipo ganará el partido (medio tiempo) – “Gana1”.
            Habrá un empate en el partido (medio tiempo) – “Empate” (“X”).
            El segundo equipo ganará el partido (medio tiempo) – “Gana2”.
            El primer equipo ganará (no perderá) el partido (medio tiempo) teniendo en cuenta el hándicap – “Hándicap 1”.
            El segundo equipo ganará (no perderá) el partido (medio tiempo) teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de puntos marcados por equipos en el partido (medio tiempo) – “Total más (menos) del valor total”.
            Apuestas sobre el número total de puntos marcados por cada equipo en el partido (medio tiempo) – “Total más (menos) del valor total”.
            Apuestas: el número total de puntos en el partido (medio tiempo) será par (impar).
            Apuestas sobre el número de tries por equipos en el partido (medio tiempo) – “Total más (menos) del valor total”.
            Apuestas: qué equipo hará el próximo try (no habrá try en absoluto).
            Los sitios web oficiales de los campeonatos (presentados en la tabla) se toman como base para calcular los resultados de los partidos de rugby.
            Un partido de rugby que fue interrumpido y no continuó o no se completó dentro de las 24 horas se considera que ha tenido lugar si se jugaron al menos 65 minutos. Los partidos de Rugby 7, Rugby 9 y Rugby 10 se consideran que han tenido lugar si se jugaron en su totalidad. En todos los demás casos, los partidos se consideran fallidos. Los resultados de partidos interrumpidos y fallidos, que ya se conocen claramente en el momento de la interrupción del partido y no dependen del resultado final del partido, están sujetos a cálculo, y las apuestas restantes se calculan por cuotas de “1” (uno).
            La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas. En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            También se aceptan apuestas sobre otros resultados posibles en los partidos de rugby y serán ofrecidos por el organizador en la Línea.`
    },
    {
        id: 'apuestas-en-fútbol-americano',
        title: 'Apuestas en fútbol americano',
        description: `En los partidos de fútbol americano, el tiempo reglamentario es de 60 minutos de tiempo neto de juego (dos mitades de 30 minutos cada una o 4 cuartos de 15 minutos cada uno). Las apuestas sobre los resultados de los partidos de fútbol americano se calculan teniendo en cuenta el tiempo extra post-partido. Si el partido termina en empate y no se juega tiempo extra, o si se juega el tiempo extra, según los requisitos de este torneo, y el empate se registra como resultado del tiempo extra, entonces las apuestas en “Gana1” y “Gana2” están sujetas a cálculo por cuotas de “1” (uno).
            En el fútbol americano, el hándicap y el total se calculan por puntos.
            Apuestas ofrecidas sobre el resultado de un partido de fútbol americano:
            El primer equipo ganará el partido (medio tiempo, cuarto) – “Gana1”.
            El segundo equipo ganará el partido (medio tiempo, cuarto) – “Gana2”.
            El primer equipo ganará (no perderá) el partido (medio tiempo, cuarto) teniendo en cuenta el hándicap – “Hándicap 1”.
            El segundo equipo ganará (no perderá) el partido (medio tiempo, cuarto) teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de puntos marcados por los equipos en el partido (medio tiempo, cuarto) – “Total más (menos) del valor total”.
            Apuestas sobre el número total de puntos marcados por cada equipo en el partido (medio tiempo, cuarto) – “Total más (menos) del valor total”.
            Apuestas: el número total de puntos en el partido (medio tiempo, cuarto) será par (impar).
            Los sitios web oficiales de los campeonatos (presentados en la tabla) se toman como base para calcular los resultados de los partidos de fútbol americano.
            Un partido de fútbol americano que fue interrumpido y no continuó o no se completó dentro de las 24 horas se considera que ha tenido lugar si se jugaron al menos 50 minutos. En todos los demás casos, los partidos se consideran fallidos. Las apuestas sobre resultados “Gana1” y “Gana2” de partidos de fútbol americano que tuvieron lugar o fueron interrumpidos con un marcador igual, se calculan por cuotas de “1” (uno).
            Los resultados de partidos interrumpidos y fallidos, que ya se conocen claramente en el momento de la interrupción del partido y no dependen del resultado final del partido, están sujetos a cálculo, y las apuestas restantes se calculan por cuotas de “1” (uno).
            La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas. En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            También se aceptan apuestas sobre otros resultados posibles en los partidos de fútbol americano y serán ofrecidos por el organizador en la Línea.`
    },
    {
        id: 'apuestas-en-fútbol-australiano',
        title: 'Apuestas en fútbol australiano',
        description: `En los partidos de fútbol australiano, el tiempo reglamentario es de 80 minutos de tiempo neto de juego (dos mitades de 40 minutos cada una o 4 cuartos de 20 minutos cada uno). En los campeonatos femeninos, el tiempo reglamentario es de 60 minutos de tiempo neto de juego (dos mitades de 30 minutos cada una o 4 cuartos de 15 minutos cada uno).
            Las apuestas sobre los resultados de los partidos de fútbol australiano se calculan teniendo en cuenta el tiempo extra post-partido. Si el partido termina en empate y no se juega tiempo extra, o si se juega el tiempo extra, según los requisitos de este torneo, y el empate se registra como resultado del tiempo extra, entonces las apuestas en “Gana1” y “Gana2” están sujetas a cálculo por cuotas de “1” (uno).
            En los partidos de algunos torneos de fútbol australiano, el formato del partido puede cambiar durante el juego o antes del inicio del juego. En tales casos, el organizador hace una nota especial en la línea sobre el posible cambio de formato del partido y todas las apuestas están sujetas a cálculo según el resultado final. Por ejemplo, si se ha realizado una apuesta de 1000 AMD con cuotas de 2.3 en el resultado de Gana 1 del partido con la nota sobre el posible cambio de formato del partido y se han jugado 15 minutos en el cuarto cuarto del partido en lugar de 20 minutos, es decir, el partido duró 75 minutos en lugar de 80 minutos y el resultado del partido ha sido 87:64, entonces la apuesta se considerará ganada, y la ganancia será 1000 x 2.3 = 2300 AMD.
            En el fútbol australiano, el hándicap y el total se calculan por puntos.
            Al calcular los totales de goles de 6 puntos y los behinds de 1 punto, se toma como base el número de goles, no el número de puntos.
            Apuestas ofrecidas sobre el resultado de un partido de fútbol australiano:
            El primer equipo ganará el partido (medio tiempo, cuarto) – “Gana1”.
            El segundo equipo ganará el partido (medio tiempo, cuarto) – “Gana2”.
            El primer equipo ganará (no perderá) el partido (medio tiempo, cuarto) teniendo en cuenta el hándicap – “Hándicap 1“.
            El segundo equipo ganará (no perderá) el partido (medio tiempo, cuarto) teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de puntos marcados por los equipos en el partido (medio tiempo, cuarto) – “Total más (menos) del valor total”.
            Apuestas sobre el número total de puntos marcados por cada equipo en el partido (medio tiempo, cuarto) – “Total más (menos) del valor total”.
            Apuestas: el número total de puntos en el partido (medio tiempo, cuarto) será par (impar).
            Apuestas sobre el número total de goles marcados por los equipos en el partido (medio tiempo, cuarto) – “Total más (menos) del valor total”.
            Apuestas sobre el número total de goles marcados por cada equipo en el partido (medio tiempo, cuarto) – “Total más (menos) del valor total”.
            Apuestas sobre el número total de behinds realizados por los equipos en el partido (medio tiempo, cuarto) – “Total más (menos) del valor total”.
            Apuestas sobre el número total de behinds realizados por cada equipo en el partido (medio tiempo, cuarto) – “Total más (menos) del valor total”.
            Apuestas: qué equipo será el primero en alcanzar el número de puntos ofrecido en la Línea durante el partido (medio tiempo, cuarto).
            Los sitios web oficiales de los campeonatos (presentados en la tabla) se toman como base para calcular los resultados de los partidos de fútbol australiano.
            Un partido de fútbol australiano que fue interrumpido y no continuó o no se completó dentro de las 24 horas se considera que ha tenido lugar si se jugaron al menos 65 minutos. Los partidos de 60 minutos se consideran que han tenido lugar si se jugaron al menos 50 minutos. En todos los demás casos, los partidos se consideran fallidos. Las apuestas sobre resultados “Gana1” y “Gana2” de partidos de fútbol australiano que tuvieron lugar o fueron interrumpidos con un marcador igual, se calculan por cuotas de “1” (uno).
            Los resultados de partidos interrumpidos y fallidos, que ya se conocen claramente en el momento de la interrupción del partido y no dependen del resultado final del partido, están sujetos a cálculo, y las apuestas restantes se calculan por cuotas de “1” (uno).
            La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas. En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            También se aceptan apuestas sobre otros resultados posibles en los partidos de fútbol australiano y serán ofrecidos por el organizador en la Línea.
`
    },
    {
        id: 'apuestas-en-curling',
        title: 'Apuestas en Curling',
        description: `Un partido de Curling consta de 10 ends (periodos). Las apuestas sobre los resultados de los partidos de curling se calculan teniendo en cuenta el end extra (s). Si el partido termina en empate y no se juega ningún end extra (s), según los requisitos de este torneo o campeonato, entonces las apuestas en “Gana1” y “Gana2” están sujetas a cálculo por cuotas de “1” (uno).
            Un punto de penalización (puntos) otorgado a uno de los equipos se tiene en cuenta al calcular las apuestas sobre el resultado del partido.
            Apuestas ofrecidas sobre el resultado de un partido de curling:
            El primer equipo ganará el partido (end) – “Gana1”.
            El segundo equipo ganará el partido (end) – “Gana2”.
            Habrá un empate en el partido (end) – “Empate” (“X”).
            El primer equipo ganará (no perderá) el partido (end) teniendo en cuenta el hándicap – “Hándicap 1”.
            El segundo equipo ganará (no perderá) el partido (end) teniendo en cuenta el hándicap – “Hándicap 2”.
            Apuestas sobre el número total de puntos en el partido (end) – “Total más (menos) del valor total”.
            Apuestas: el número total de puntos en el partido (end) será par (impar).
            Los sitios web oficiales de los campeonatos (presentados en la tabla) se toman como base para calcular los resultados de los partidos de curling.
            Un partido de curling que fue interrumpido y no continuó o no se completó dentro de las 24 horas se considera que ha tenido lugar si se jugaron completamente al menos 5 ends. En todos los demás casos, los partidos se consideran fallidos. Las apuestas sobre resultados “Gana1” y “Gana2” de partidos de curling que tuvieron lugar o fueron interrumpidos con un marcador igual, se calculan por cuotas de “1” (uno).
            Los resultados de partidos interrumpidos y fallidos, que ya se conocen claramente en el momento de la interrupción del partido y no dependen del resultado final del partido, están sujetos a cálculo, y las apuestas restantes se calculan por cuotas de “1” (uno).
            La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas. En este caso, el partido se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas “1” (uno).
            También se aceptan apuestas sobre otros resultados posibles en los partidos de curling y serán ofrecidos por el organizador en la Línea.`
    },
    {
        id: 'apuestas-en-dardos',
        title: 'Apuestas en Dardos',
        description: `En una competición de dardos, los jugadores se acercan uno por uno a la línea de tiro para lanzar los dardos hacia el objetivo. En los dardos, se considera que los jugadores participan en la competición si han realizado al menos un lanzamiento hacia el objetivo. Los puntos se calculan después de cada salida del jugador, después de lo cual el otro jugador toma su turno para hacer un lanzamiento. Dependiendo de las condiciones de realización de un campeonato o torneo de dardos, se considera ganador al jugador que ha ganado más legs o al jugador que ha ganado más sets. El jugador que ganó más legs gana el set. El número total de puntos que el jugador tiene que anotar en un solo enfoque final para ganar el leg se llama checkout. Si el juego de dardos termina en empate y no se ofreció el resultado “empate” en el programa (línea), las apuestas hechas sobre los resultados “Gana1” y “Gana2” están sujetas a cálculo con las cuotas 1 (uno).
            Durante un checkout, el jugador puede anotar un máximo de 180 puntos si golpea tres veces el sector de "20" triplicado.
            En los dardos, las apuestas de hándicap y total se calculan en legs (sets).
            Apuestas ofrecidas sobre los resultados de competiciones de dardos:
            Apuestas: cuál de los jugadores ocupará el primer lugar en el torneo (ganará el torneo).
            El primer jugador ganará la competición – “Gana 1”.
            La competición terminará en empate – “X“.
            El segundo jugador ganará la competición – “Gana 2”.
            El primer jugador ganará por el número de legs (sets) con el hándicap tenido en cuenta – “Hándicap 1”.
            El segundo jugador ganará por el número de legs (sets) con el hándicap tenido en cuenta – “Hándicap 2”.
            Apuestas sobre el número total de legs (sets) en la competición – “Total más (menos) del valor de la apuesta”.
            Apuestas: cuál de los jugadores realizará el primer lanzamiento de 180 puntos.
            Apuestas sobre el número total de lanzamientos de 180 puntos realizados – “Total más (menos) del valor de la apuesta”.
            Apuestas sobre el número de puntos para el checkout más alto registrado en la competición para ser más (menos) del valor total ofrecido.
            Los sitios web oficiales de los torneos y campeonatos incluidos en la tabla son la base durante el cálculo de apuestas hechas en competiciones de dardos.
            Las competiciones de dardos, que han sido interrumpidas por razones técnicas o cualquier otra razón y no han continuado o terminado durante 24 horas, se consideran no completadas. Si las competiciones de dardos han sido interrumpidas y se consideran no completadas, las apuestas, cuyos resultados ya se han determinado en el momento de la interrupción y no dependen del resultado final de la competición, están sujetas a cálculo, y todas las demás apuestas se calculan con las cuotas “1” (uno).`
    },
    {
        id: 'apuestas-en-e-baloncesto',
        title: 'Apuestas en E-Baloncesto',
        description: `Las apuestas realizadas sobre los resultados de los videojuegos de e-baloncesto se calculan teniendo en cuenta el tiempo extra (prórroga). En este caso, si el videojuego termina en empate y no se ofreció el resultado "empate", las apuestas realizadas sobre los resultados "Gana1" y "Gana2" se calculan con las cuotas "1" (uno). Los videojuegos se llevan a cabo en formato 4×5 o 4×4 (4 cuartos: cada uno dura 5 o 4 minutos respectivamente). Los videojuegos con la duración de los cuartos de 12 minutos se llevan a cabo en formato 4×5, y aquellos con la duración de los cuartos de 10 minutos se llevan a cabo en formato 4×4. Los partidos también pueden realizarse en formato 4×12 (cada cuarto 12 minutos de tiempo real de juego), sobre lo cual se informará de antemano en el programa (línea).
            En el e-baloncesto, el minuto actual mostrado en el tablero de tiempo puede diferir del tiempo real de los videojuegos. Por ejemplo, si se selecciona el formato de 16 minutos (4×4), el tablero que muestra el minuto actual del videojuego alcanzará los 40 minutos en 16 minutos reales (tiempo puro). Por ejemplo, en el minuto real 12 del videojuego, en el tablero que muestra el minuto actual del juego puede mostrarse el minuto 30.
            Apuestas ofrecidas sobre los resultados de los videojuegos de e-baloncesto:
            El primer equipo ganará en el videojuego (cuarto) – "Gana1".
            Empate en el videojuego (cuarto) – "X".
            El segundo equipo ganará en el videojuego (cuarto) – "Gana2".
            El primer equipo no perderá el videojuego (cuarto) – "1X".
            Uno de los equipos ganará el videojuego (cuarto) – "12".
            El segundo equipo no perderá el videojuego (cuarto) – "X2".
            El primer equipo ganará (no perderá) el videojuego (cuarto) teniendo en cuenta el hándicap – "Hándicap 1".
            El segundo equipo ganará (no perderá) el videojuego (cuarto) teniendo en cuenta el hándicap – "Hándicap 2".
            Apuestas sobre el número total de goles marcados por los equipos en el videojuego (cuarto) – "Total más (menos) del valor de la apuesta".
            Apuestas sobre el número total de goles marcados por cada equipo individualmente en el videojuego (cuarto) – "Total más (menos) del valor de la apuesta".
            Apuestas sobre el número total de puntos marcados por los equipos en el videojuego (cuarto) para ser par (impar).
            Apuestas sobre el tiempo extra (prórroga) para ser (no ser).
            Los sitios web oficiales de videojuegos incluidos en la tabla son la base para el cálculo de apuestas hechas sobre los resultados de los videojuegos de e-baloncesto.
            Los defectos de los gráficos del juego no son la base para calcular las apuestas con las cuotas "1".
            La victoria (pérdida) por defecto registrada por cualquier causa no es la base para el cálculo de apuestas. En este caso, el videojuego se considera no completado y todas las apuestas están sujetas a cálculo con las cuotas "1" (uno).
            El partido de e-baloncesto, que ha sido interrumpido por razones técnicas o cualquier otra razón y no ha continuado o completado dentro de las 8 horas, se considera completado, si se han jugado al menos 14 minutos en el partido con el formato 4×4, al menos 17 minutos en el partido con el formato 4×5, y al menos 41 minutos en el partido con el formato 4×12.
            En los demás casos, los partidos se consideran no completados. Los resultados de los partidos, que se consideran interrumpidos y no completados, que ya se han determinado en el momento de la interrupción y no dependen del resultado final del partido, están sujetos a cálculo, y las otras apuestas se calculan con las cuotas "1" (uno).
            También se aceptan apuestas sobre otros resultados posibles en los videojuegos de e-baloncesto ofrecidos por el organizador en la Línea.`
    },
];